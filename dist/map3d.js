"use strict";(()=>{var Y_=Object.create;var wh=Object.defineProperty;var $_=Object.getOwnPropertyDescriptor;var Z_=Object.getOwnPropertyNames;var J_=Object.getPrototypeOf,K_=Object.prototype.hasOwnProperty;var Dm=i=>{throw TypeError(i)};var l=(i,e)=>wh(i,"name",{value:e,configurable:!0});var j_=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Q_=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Z_(e))!K_.call(i,r)&&r!==t&&wh(i,r,{get:()=>e[r],enumerable:!(n=$_(e,r))||n.enumerable});return i};var ev=(i,e,t)=>(t=i!=null?Y_(J_(i)):{},Q_(e||!i||!i.__esModule?wh(t,"default",{value:i,enumerable:!0}):t,i));var Eh=(i,e,t)=>e.has(i)||Dm("Cannot "+t);var m=(i,e,t)=>(Eh(i,e,"read from private field"),t?t.call(i):e.get(i)),Q=(i,e,t)=>e.has(i)?Dm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),W=(i,e,t,n)=>(Eh(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),G=(i,e,t)=>(Eh(i,e,"access private method"),t);var Nm=(i,e,t,n)=>({set _(r){W(i,e,r,t)},get _(){return m(i,e,n)}});var Fm=j_(Yr=>{"use strict";var pi,hr=Yr&&Yr.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Yr,"__esModule",{value:!0}),Yr.EventEmitter=void 0;var Ah=class Ah{constructor(){pi.set(this,{})}on(e,t){e in hr(this,pi,"f")||(hr(this,pi,"f")[e]=[]),hr(this,pi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in hr(this,pi,"f")))return;let n=hr(this,pi,"f")[e].indexOf(t);n!==-1&&hr(this,pi,"f")[e].splice(n,1)}emit(e,...t){e in hr(this,pi,"f")&&hr(this,pi,"f")[e].forEach((n=>n(...t)))}};l(Ah,"i");var Cl=Ah;Yr.EventEmitter=Cl,pi=new WeakMap,Yr.default=Cl});var Um="civMap3D";var Om=ev(Fm());var dr,mi,Ps,Ch=class Ch extends Om.EventEmitter{constructor(t,n){super();Q(this,dr);Q(this,mi);Q(this,Ps);W(this,mi,t),W(this,Ps,t.lockVerticalEdges),W(this,dr,n)}center(){return m(this,dr).centre()}isVisible(t,n,r=0){return m(this,dr).visible(t,n,r)}lockVerticalEdges(){return m(this,Ps)}nativeTileSize(){return m(this,mi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=m(this,mi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return m(this,mi).playerId}render(){m(this,dr).changed()}scale(){return m(this,mi).art.scale()}setCenter(t,n){m(this,dr).centreOn(t,n)}setLockVerticalEdges(t){W(this,Ps,t)}setZoom(){}transport(){return m(this,mi).transport}zoom(){return m(this,mi).art.zoom()}};dr=new WeakMap,mi=new WeakMap,Ps=new WeakMap,l(Ch,"MapPortal3D");var Th=Ch,Bm=Th;var tv=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),zm=tv;var d0=0,sd=1,f0=2;var yo=1,Yc=2,oa=3,Rr=0,_n=1,Ei=2,Qr=0,la=1,ad=2,od=3,ld=4,p0=5;var es=100,m0=101,g0=102,x0=103,_0=104,v0=200,y0=201,b0=202,M0=203,cd=204,ud=205,S0=206,w0=207,E0=208,A0=209,T0=210,C0=211,R0=212,P0=213,I0=214,ec=0,tc=1,nc=2,Ks=3,ic=4,rc=5,sc=6,ac=7,hd=0,L0=1,D0=2,Ai=0,dd=1,fd=2,pd=3,bo=4,md=5,gd=6,xd=7;var _d=300,ts=301,ca=302,$c=303,Zc=304,xi=1e3,Wn=1001,oc=1002,Ft=1003,N0=1004;var Mo=1005;var Ot=1006,Jc=1007;var Pn=1008;var rn=1009,vd=1010,yd=1011,ua=1012,Kc=1013,ni=1014,ii=1015,In=1016,jc=1017,Qc=1018,ns=1020,bd=35902,Md=35899,Sd=1021,wd=1022,Ln=1023,Yi=1026,Ki=1027,Ed=1028,eu=1029,Ti=1030,tu=1031;var nu=1033,So=33776,wo=33777,Eo=33778,Ao=33779,iu=35840,ru=35841,su=35842,au=35843,ou=36196,lu=37492,cu=37496,uu=37488,hu=37489,To=37490,du=37491,fu=37808,pu=37809,mu=37810,gu=37811,xu=37812,_u=37813,vu=37814,yu=37815,bu=37816,Mu=37817,Su=37818,wu=37819,Eu=37820,Au=37821,Tu=36492,Cu=36494,Ru=36495,Pu=36283,Iu=36284,Co=36285,Lu=36286;var ja=2300,lc=2301,jl=2302,jh=2303,Qh=2400,ed=2401,td=2402;var U0=3200;var Du=0,F0=1,ri="",Ut="srgb",Qa="srgb-linear",eo="linear",ft="srgb";var Ql=7680;var O0=519,B0=512,z0=513,k0=514,Ad=515,G0=516,V0=517,Td=518,Cd=519,Rd=35044;var Pd="300 es",Xn=2e3,js=2001;function nv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(nv,"arrayNeedsUint32");function iv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(iv,"isTypedArray");function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(to,"createElementNS");function H0(){let i=to("canvas");return i.style.display="block",i}l(H0,"createCanvasElement");var km={},Qs=null;function no(...i){let e="THREE."+i.shift();Qs?Qs("log",e,...i):console.log(e,...i)}l(no,"log");function W0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(W0,"enhanceLogMessage");function Ve(...i){i=W0(i);let e="THREE."+i.shift();if(Qs)Qs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ve,"warn");function He(...i){i=W0(i);let e="THREE."+i.shift();if(Qs)Qs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function Ja(...i){let e=i.join(" ");e in km||(km[e]=!0,Ve(...i))}l(Ja,"warnOnce");function X0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(X0,"probeAsync");var q0={[ec]:ec,[nc]:sc,[ic]:ic,[Ks]:rc,[tc]:tc,[sc]:nc,[ac]:ac,[rc]:Ks},Ud=class Ud{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(Ud,"EventDispatcher");var _i=Ud,tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rh=Math.PI/180,cc=180/Math.PI;function is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}l(is,"generateUUID");function rt(i,e,t){return Math.max(e,Math.min(t,i))}l(rt,"clamp");function rv(i,e){return(i%e+e)%e}l(rv,"euclideanModulo");function Ph(i,e,t){return(1-t)*i+t*e}l(Ph,"lerp");function Y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(Y0,"floorPowerOfTwo");function Nu(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Nu,"getNormalizationScale");function $0(i,e){if(e.constructor===Float32Array)return i;let t=Nu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l($0,"denormalize");function Z0(i,e){if(e.constructor===Float32Array)return i;let t=Nu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(Z0,"normalize");var Ic=class Ic{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Ic,"Vector2"),Ic.prototype.isVector2=!0;var ze=Ic,Fd=class Fd{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3],d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(f!==y||c!==d||u!==p||h!==g){let x=c*d+u*p+h*g+f*y;x<0&&(d=-d,p=-p,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let w=Math.acos(x),A=Math.sin(w);_=Math.sin(_*w)/A,o=Math.sin(o*w)/A,c=c*_+d*o,u=u*_+p*o,h=h*_+g*o,f=f*_+y*o}else{c=c*_+d*o,u=u*_+p*o,h=h*_+g*o,f=f*_+y*o;let w=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=w,u*=w,h*=w,f*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*p-u*d,e[t+1]=c*g+h*d+u*f-o*p,e[t+2]=u*g+h*p+o*d-c*f,e[t+3]=h*g-o*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Fd,"Quaternion");var mn=Fd,Lc=class Lc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Lc,"Vector3"),Lc.prototype.isVector3=!0;var X=Lc,Ih=new X,Gm=new mn,Dc=class Dc{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],y=r[0],x=r[3],_=r[6],w=r[1],A=r[4],E=r[7],R=r[2],C=r[5],v=r[8];return s[0]=a*y+o*w+c*R,s[3]=a*x+o*A+c*C,s[6]=a*_+o*E+c*v,s[1]=u*y+h*w+f*R,s[4]=u*x+h*A+f*C,s[7]=u*_+h*E+f*v,s[2]=d*y+p*w+g*R,s[5]=d*x+p*A+g*C,s[8]=d*_+p*E+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*s,p=u*s-a*c,g=t*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return Ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return Ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Dc,"Matrix3"),Dc.prototype.isMatrix3=!0;var We=Dc,Lh=new We,Vm=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){let i={enabled:!0,workingColorSpace:Qa,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===ri?eo:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qa]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:Vm,fromXYZ:Hm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Vm,fromXYZ:Hm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}l(sv,"createColorManagement");var it=sv();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(qi,"SRGBToLinear");function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Js,"LinearToSRGB");var Is,Od=class Od{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=to("canvas")),Is.width=e.width,Is.height=e.height;let r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Od,"ImageUtils");var uc=Od,av=0,Bd=class Bd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dh(r[a].image)):s.push(Dh(r[a]))}else s=Dh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(Bd,"TextureSource");var ea=Bd;function Dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}l(Dh,"serializeImage");var ov=0,Nh=new X,$s=class $s extends _i{constructor(e=$s.DEFAULT_IMAGE,t=$s.DEFAULT_MAPPING,n=Wn,r=Wn,s=Ot,a=Pn,o=Ln,c=rn,u=$s.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=is(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l($s,"Texture");var gn=$s;gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=_d;gn.DEFAULT_ANISOTROPY=1;var Nc=class Nc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,E=(p+1)/2,R=(_+1)/2,C=(h+d)/4,v=(f+y)/4,S=(g+x)/4;return A>E&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=C/n,s=v/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=S/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=v/s,r=S/s),this.set(n,r,s,t),this}let w=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(x-g)/w,this.y=(f-y)/w,this.z=(d-h)/w,this.w=Math.acos((u+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Nc,"Vector4"),Nc.prototype.isVector4=!0;var wt=Nc,zd=class zd extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new gn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ea(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(zd,"RenderTarget");var hc=zd,kd=class kd extends hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(kd,"WebGLRenderTarget");var Tn=kd,Gd=class Gd extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Gd,"DataArrayTexture");var jr=Gd;var Vd=class Vd extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Vd,"Data3DTexture");var dc=Vd;var Ka=class Ka{constructor(e,t,n,r,s,a,o,c,u,h,f,d,p,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,f,d,p,g,y,x)}set(e,t,n,r,s,a,o,c,u,h,f,d,p,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=d,_[3]=p,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ka().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lv,e,cv)}lookAt(e,t,n){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),fr.crossVectors(n,En),fr.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),fr.crossVectors(n,En)),fr.normalize(),Rl.crossVectors(En,fr),r[0]=fr.x,r[4]=Rl.x,r[8]=En.x,r[1]=fr.y,r[5]=Rl.y,r[9]=En.y,r[2]=fr.z,r[6]=Rl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],y=n[6],x=n[10],_=n[14],w=n[3],A=n[7],E=n[11],R=n[15],C=r[0],v=r[4],S=r[8],I=r[12],P=r[1],O=r[5],k=r[9],J=r[13],D=r[2],Y=r[6],ne=r[10],U=r[14],K=r[3],N=r[7],V=r[11],z=r[15];return s[0]=a*C+o*P+c*D+u*K,s[4]=a*v+o*O+c*Y+u*N,s[8]=a*S+o*k+c*ne+u*V,s[12]=a*I+o*J+c*U+u*z,s[1]=h*C+f*P+d*D+p*K,s[5]=h*v+f*O+d*Y+p*N,s[9]=h*S+f*k+d*ne+p*V,s[13]=h*I+f*J+d*U+p*z,s[2]=g*C+y*P+x*D+_*K,s[6]=g*v+y*O+x*Y+_*N,s[10]=g*S+y*k+x*ne+_*V,s[14]=g*I+y*J+x*U+_*z,s[3]=w*C+A*P+E*D+R*K,s[7]=w*v+A*O+E*Y+R*N,s[11]=w*S+A*k+E*ne+R*V,s[15]=w*I+A*J+E*U+R*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],x=e[11],_=e[15],w=c*p-u*d,A=o*p-u*f,E=o*d-c*f,R=a*p-u*h,C=a*d-c*h,v=a*f-o*h;return t*(y*w-x*A+_*E)-n*(g*w-x*R+_*C)+r*(g*A-y*R+_*v)-s*(g*E-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],x=e[14],_=e[15],w=t*o-n*a,A=t*c-r*a,E=t*u-s*a,R=n*c-r*o,C=n*u-s*o,v=r*u-s*c,S=h*y-f*g,I=h*x-d*g,P=h*_-p*g,O=f*x-d*y,k=f*_-p*y,J=d*_-p*x,D=w*J-A*k+E*O+R*P-C*I+v*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/D;return e[0]=(o*J-c*k+u*O)*Y,e[1]=(r*k-n*J-s*O)*Y,e[2]=(y*v-x*C+_*R)*Y,e[3]=(d*C-f*v-p*R)*Y,e[4]=(c*P-a*J-u*I)*Y,e[5]=(t*J-r*P+s*I)*Y,e[6]=(x*E-g*v-_*A)*Y,e[7]=(h*v-d*E+p*A)*Y,e[8]=(a*k-o*P+u*S)*Y,e[9]=(n*P-t*k-s*S)*Y,e[10]=(g*C-y*E+_*w)*Y,e[11]=(f*E-h*C-p*w)*Y,e[12]=(o*I-a*O-c*S)*Y,e[13]=(t*O-n*I+r*S)*Y,e[14]=(y*A-g*R-x*w)*Y,e[15]=(h*R-f*A+d*w)*Y,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,d=s*u,p=s*h,g=s*f,y=a*h,x=a*f,_=o*f,w=c*u,A=c*h,E=c*f,R=n.x,C=n.y,v=n.z;return r[0]=(1-(y+_))*R,r[1]=(p+E)*R,r[2]=(g-A)*R,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+_))*C,r[6]=(x+w)*C,r[7]=0,r[8]=(g+A)*v,r[9]=(x-w)*v,r[10]=(1-(d+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),c=Ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);let u=1/a,h=1/o,f=1/c;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Xn,c=!1){let u=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===Xn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===js)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Xn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===Xn)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===js)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Ka,"Matrix4"),Ka.prototype.isMatrix4=!0;var mt=Ka,Ls=new X,Qn=new mt,lv=new X(0,0,0),cv=new X(1,1,1),fr=new X,Rl=new X,En=new X,Wm=new mt,Xm=new mn,Uc=class Uc{constructor(e=0,t=0,n=0,r=Uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Uc,"Euler");var Cn=Uc;Cn.DEFAULT_ORDER="XYZ";var Hd=class Hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Hd,"Layers");var io=Hd,uv=0,qm=new X,Ds=new mn,zi=new mt,Pl=new X,Ha=new X,hv=new X,dv=new mn,Ym=new X(1,0,0),$m=new X(0,1,0),Zm=new X(0,0,1),Jm={type:"added"},fv={type:"removed"},Ns={type:"childadded",child:null},Uh={type:"childremoved",child:null},Zs=class Zs extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zs.DEFAULT_UP.clone();let e=new X,t=new Cn,n=new mn,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new We}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Zs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pl.copy(e):Pl.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ha,Pl,this.up):zi.lookAt(Pl,Ha,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(zi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fv),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Zs,"Object3D");var Zt=Zs;Zt.DEFAULT_UP=new X(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wd=class Wd extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Wd,"Group");var pn=Wd,pv={type:"move"},Xd=class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Xd,"WebXRController");var ta=Xd,J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Fh,"hue2rgb");var qd=class qd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=rv(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fh(a,s,e+1/3),this.g=Fh(a,s,e),this.b=Fh(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=J0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return it.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ut){it.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(Il);let n=Ph(pr.h,Il.h,t),r=Ph(pr.s,Il.s,t),s=Ph(pr.l,Il.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(qd,"Color");var Oe=qd,nn=new Oe;Oe.NAMES=J0;var Fc=class Fc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Fc,"Fog");var ro=Fc,Yd=class Yd extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Yd,"Scene");var so=Yd,ei=new X,ki=new X,Oh=new X,Gi=new X,Us=new X,Fs=new X,Km=new X,Bh=new X,zh=new X,kh=new X,Gh=new wt,Vh=new wt,Hh=new wt,_r=class _r{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ei.subVectors(e,t),r.cross(ei);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ei.subVectors(r,t),ki.subVectors(n,t),Oh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(ki),c=ei.dot(Oh),u=ki.dot(ki),h=ki.dot(Oh),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(u*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Gh.setScalar(0),Vh.setScalar(0),Hh.setScalar(0),Gh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gh,s.x),a.addScaledVector(Vh,s.y),a.addScaledVector(Hh,s.z),a}static isFrontFacing(e,t,n,r){return ei.subVectors(n,t),ki.subVectors(e,t),ei.cross(ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ei.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return _r.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return _r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Us.subVectors(r,n),Fs.subVectors(s,n),Bh.subVectors(e,n);let c=Us.dot(Bh),u=Fs.dot(Bh);if(c<=0&&u<=0)return t.copy(n);zh.subVectors(e,r);let h=Us.dot(zh),f=Fs.dot(zh);if(h>=0&&f<=h)return t.copy(r);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);kh.subVectors(e,s);let p=Us.dot(kh),g=Fs.dot(kh);if(g>=0&&p<=g)return t.copy(s);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Fs,o);let x=h*g-p*f;if(x<=0&&f-h>=0&&p-g>=0)return Km.subVectors(s,r),o=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(Km,o);let _=1/(x+y+d);return a=y*_,o=d*_,t.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(_r,"Triangle");var Wi=_r,$d=class $d{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Dl.subVectors(this.max,Wa),Os.subVectors(e.a,Wa),Bs.subVectors(e.b,Wa),zs.subVectors(e.c,Wa),mr.subVectors(Bs,Os),gr.subVectors(zs,Bs),$r.subVectors(Os,zs);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-$r.z,$r.y,mr.z,0,-mr.x,gr.z,0,-gr.x,$r.z,0,-$r.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-$r.y,$r.x,0];return!Wh(t,Os,Bs,zs,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Wh(t,Os,Bs,zs,Dl))?!1:(Nl.crossVectors(mr,gr),t=[Nl.x,Nl.y,Nl.z],Wh(t,Os,Bs,zs,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l($d,"Box3");var yr=$d,Vi=[new X,new X,new X,new X,new X,new X,new X,new X],ti=new X,Ll=new yr,Os=new X,Bs=new X,zs=new X,mr=new X,gr=new X,$r=new X,Wa=new X,Dl=new X,Nl=new X,Zr=new X;function Wh(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zr.fromArray(i,s);let o=r.x*Math.abs(Zr.x)+r.y*Math.abs(Zr.y)+r.z*Math.abs(Zr.z),c=e.dot(Zr),u=t.dot(Zr),h=n.dot(Zr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Wh,"satForAxes");var Xi=mv();function mv(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(mv,"_generateTables");function gv(i){Math.abs(i)>65504&&Ve("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),Xi.floatView[0]=i;let e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}l(gv,"toHalfFloat");function xv(i){let e=i>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(i&1023)]+Xi.exponentTable[e],Xi.floatView[0]}l(xv,"fromHalfFloat");var Zd=class Zd{static toHalfFloat(e){return gv(e)}static fromHalfFloat(e){return xv(e)}};l(Zd,"DataUtils");var vi=Zd,Nt=new X,Ul=new ze,_v=0,Jd=class Jd extends _i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rd,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?Nu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Z0(e,this.array)}};l(Jd,"BufferAttribute");var vt=Jd;var Kd=class Kd extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Kd,"Uint16BufferAttribute");var ao=Kd;var jd=class jd extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(jd,"Uint32BufferAttribute");var oo=jd;var Qd=class Qd extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Qd,"Float32BufferAttribute");var Rt=Qd,vv=new yr,Xa=new X,Xh=new X,ef=class ef{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);let t=Xa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(Xh)),this.expandByPoint(Xa.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(ef,"Sphere");var na=ef,yv=0,Hn=new mt,qh=new Zt,ks=new X,An=new yr,qa=new yr,Xt=new X,Oc=class Oc extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nv(e)?oo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];qa.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(An.min,qa.min),An.expandByPoint(Xt),Xt.addVectors(An.max,qa.max),An.expandByPoint(Xt)):(An.expandByPoint(qa.min),An.expandByPoint(qa.max))}An.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Xt.fromBufferAttribute(o,u),c&&(ks.fromBufferAttribute(e,u),Xt.add(ks)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new X,c[I]=new X;let h=new X,f=new X,d=new X,p=new ze,g=new ze,y=new ze,x=new X,_=new X;function w(I,P,O){u[I]=u[P]=u[O]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,O),p.fromBufferAttribute(s,I),g.fromBufferAttribute(s,P),y.fromBufferAttribute(s,O),f.sub(h),d.sub(h),g.sub(p),y.sub(p);let k=1/(g.x*y.y-y.x*g.y);isFinite(k)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(k),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(k),o[I].add(x),o[P].add(x),o[O].add(x),c[I].add(_),c[P].add(_),c[O].add(_))}l(w,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,P=A.length;I<P;++I){let O=A[I],k=O.start,J=O.count;for(let D=k,Y=k+J;D<Y;D+=3)w(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let E=new X,R=new X,C=new X,v=new X;function S(I){C.fromBufferAttribute(r,I),v.copy(C);let P=o[I];E.copy(P),E.sub(C.multiplyScalar(C.dot(P))).normalize(),R.crossVectors(v,P);let k=R.dot(c[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,k)}l(S,"handleVertex");for(let I=0,P=n.count;I<P;++I)u[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new X,s=new X,a=new X,o=new X,c=new X,u=new X,h=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),p=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let _=0;_<h;_++)d[g++]=u[p++]}return new vt(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Oc,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],f=s[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Oc,"BufferGeometry");var Bt=Oc,tf=class tf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rd,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(tf,"InterleavedBuffer");var lo=tf;function jm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=is()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(jm,"getArrayKey");var dn=new X,Bc=class Bc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?Nu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Z0(e,this.data.array)}};l(Bc,"InterleavedBufferAttribute");var ia=Bc,Yh=new X,bv=new X,Mv=new We,nf=class nf{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yh.subVectors(n,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Yh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mv.getNormalMatrix(e),r=this.coplanarPoint(Yh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(nf,"Plane");var bn=nf,Sv=0,rf=class rf extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=is(),this.name="",this.type="Material",this.blending=la,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(rf,"Material");var $i=rf,sf=class sf extends $i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(sf,"SpriteMaterial");var br=sf,Gs,Ya=new X,Vs=new X,Hs=new X,Ws=new ze,$a=new ze,K0=new mt,Fl=new X,Za=new X,Ol=new X,Qm=new ze,$h=new ze,e0=new ze,af=class af extends Zt{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lo(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new ia(n,3,0,!1)),Gs.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),K0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Hs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Bl(Fl.set(-.5,-.5,0),Hs,a,Vs,r,s),Bl(Za.set(.5,-.5,0),Hs,a,Vs,r,s),Bl(Ol.set(.5,.5,0),Hs,a,Vs,r,s),Qm.set(0,0),$h.set(1,0),e0.set(1,1);let o=e.ray.intersectTriangle(Fl,Za,Ol,!1,Ya);if(o===null&&(Bl(Za.set(-.5,.5,0),Hs,a,Vs,r,s),$h.set(0,1),o=e.ray.intersectTriangle(Fl,Ol,Za,!1,Ya),o===null))return;let c=e.ray.origin.distanceTo(Ya);c<e.near||c>e.far||t.push({distance:c,point:Ya.clone(),uv:Wi.getInterpolation(Ya,Fl,Za,Ol,Qm,$h,e0,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(af,"Sprite");var ra=af;function Bl(i,e,t,n,r,s){Ws.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?($a.x=s*Ws.x-r*Ws.y,$a.y=r*Ws.x+s*Ws.y):$a.copy(Ws),i.copy(e),i.x+=$a.x,i.y+=$a.y,i.applyMatrix4(K0)}l(Bl,"transformVertex");var Hi=new X,Zh=new X,zl=new X,kl=new X,of=class of{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zh.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),kl.copy(this.origin).sub(Zh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(zl),o=kl.dot(this.direction),c=-kl.dot(zl),u=kl.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zh).addScaledVector(zl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),r=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,w=n.y-a.y,A=n.z-a.z,E=Math.abs(c),R=Math.abs(u),C=Math.abs(h),v,S,I,P,O,k,J,D,Y,ne,U,K;if(E>=R&&E>=C?(I=c,k=f,Y=g,K=_,c>=0?(v=u,S=h,P=d,O=p,J=y,D=x,ne=w,U=A):(v=h,S=u,P=p,O=d,J=x,D=y,ne=A,U=w)):R>=C?(I=u,k=d,Y=y,K=w,u>=0?(v=h,S=c,P=p,O=f,J=x,D=g,ne=A,U=_):(v=c,S=h,P=f,O=p,J=g,D=x,ne=_,U=A)):(I=h,k=p,Y=x,K=A,h>=0?(v=c,S=u,P=f,O=d,J=g,D=y,ne=_,U=w):(v=u,S=c,P=d,O=f,J=y,D=g,ne=w,U=_)),I===0)return null;let N=v/I,V=S/I,z=1/I,oe=P-N*k,ue=O-V*k,q=J-N*Y,he=D-V*Y,ee=ne-N*K,ce=U-V*K,re=ee*he-ce*q,Re=oe*ce-ue*ee,ke=q*ue-he*oe;if(r){if(re<0||Re<0||ke<0)return null}else if((re<0||Re<0||ke<0)&&(re>0||Re>0||ke>0))return null;let Pe=re+Re+ke;if(Pe===0)return null;let Je=z*(re*k+Re*Y+ke*K);return(Pe>0?Je<0:Je>0)?null:this.at(Je/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(of,"Ray");var fc=of,lf=class lf extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(lf,"MeshBasicMaterial");var pc=lf,t0=new mt,Jr=new fc,Gl=new na,n0=new X,Vl=new X,Hl=new X,Wl=new X,Jh=new X,Xl=new X,i0=new X,ql=new X,cf=class cf extends Zt{constructor(e=new Bt,t=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Xl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],f=s[c];h!==0&&(Jh.fromBufferAttribute(f,e),a?Xl.addScaledVector(Jh,h):Xl.addScaledVector(Jh.sub(t),h))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Gl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Gl,n0)===null||Jr.origin.distanceToSquared(n0)>(e.far-e.near)**2))&&(t0.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(t0),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],w=Math.max(x.start,p.start),A=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let E=w,R=A;E<R;E+=3){let C=o.getX(E),v=o.getX(E+1),S=o.getX(E+2);r=Yl(this,_,e,n,u,h,f,C,v,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){let w=o.getX(x),A=o.getX(x+1),E=o.getX(x+2);r=Yl(this,a,e,n,u,h,f,w,A,E),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],w=Math.max(x.start,p.start),A=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let E=w,R=A;E<R;E+=3){let C=E,v=E+1,S=E+2;r=Yl(this,_,e,n,u,h,f,C,v,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){let w=x,A=x+1,E=x+2;r=Yl(this,a,e,n,u,h,f,w,A,E),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};l(cf,"Mesh");var Et=cf;function wv(i,e,t,n,r,s,a,o){let c;if(e.side===_n?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Rr,o),c===null)return null;ql.copy(o),ql.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(ql);return u<t.near||u>t.far?null:{distance:u,point:ql.clone(),object:i}}l(wv,"checkIntersection$1");function Yl(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Vl),i.getVertexPosition(c,Hl),i.getVertexPosition(u,Wl);let h=wv(i,e,t,n,Vl,Hl,Wl,i0);if(h){let f=new X;Wi.getBarycoord(i0,Vl,Hl,Wl,f),r&&(h.uv=Wi.getInterpolatedAttribute(r,o,c,u,f,new ze)),s&&(h.uv1=Wi.getInterpolatedAttribute(s,o,c,u,f,new ze)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,c,u,f,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new X,materialIndex:0};Wi.getNormal(Vl,Hl,Wl,d.normal),h.face=d,h.barycoord=f}return h}l(Yl,"checkGeometryIntersection");var uf=class uf extends gn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Ft,h=Ft,f,d){super(null,a,o,c,u,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(uf,"DataTexture");var sa=uf;var hf=class hf extends vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(hf,"InstancedBufferAttribute");var Zi=hf;var Kr=new na,Ev=new ze(.5,.5),$l=new X,df=class df{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,a=new bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],f=s[5],d=s[6],p=s[7],g=s[8],y=s[9],x=s[10],_=s[11],w=s[12],A=s[13],E=s[14],R=s[15];if(r[0].setComponents(u-a,p-h,_-g,R-w).normalize(),r[1].setComponents(u+a,p+h,_+g,R+w).normalize(),r[2].setComponents(u+o,p+f,_+y,R+A).normalize(),r[3].setComponents(u-o,p-f,_-y,R-A).normalize(),n)r[4].setComponents(c,d,x,E).normalize(),r[5].setComponents(u-c,p-d,_-x,R-E).normalize();else if(r[4].setComponents(u-c,p-d,_-x,R-E).normalize(),t===Xn)r[5].setComponents(u+c,p+d,_+x,R+E).normalize();else if(t===js)r[5].setComponents(c,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);let t=Ev.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if($l.x=r.normal.x>0?e.max.x:e.min.x,$l.y=r.normal.y>0?e.max.y:e.min.y,$l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(df,"Frustum");var Mr=df,r0=new mt,zc=class zc{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];r0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Mr),n[r].setFromProjectionMatrix(r0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Mr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new zc().copy(this)}};l(zc,"FrustumArray");var mc=zc;var ff=class ff extends gn{constructor(e=[],t=ts,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(ff,"CubeTexture");var co=ff,pf=class pf extends gn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(pf,"CanvasTexture");var Sr=pf;var mf=class mf extends gn{constructor(e,t,n=ni,r,s,a,o=Ft,c=Ft,u,h=Yi,f=1){if(h!==Yi&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(mf,"DepthTexture");var Ji=mf,gf=class gf extends Ji{constructor(e,t=ni,n=ts,r,s,a=Ft,o=Ft,c,u=Yi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(gf,"CubeDepthTexture");var uo=gf,xf=class xf extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(xf,"ExternalTexture");var ho=xf,kc=class kc extends Bt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function g(y,x,_,w,A,E,R,C,v,S,I){let P=E/v,O=R/S,k=E/2,J=R/2,D=C/2,Y=v+1,ne=S+1,U=0,K=0,N=new X;for(let V=0;V<ne;V++){let z=V*O-J;for(let oe=0;oe<Y;oe++){let ue=oe*P-k;N[y]=ue*w,N[x]=z*A,N[_]=D,u.push(N.x,N.y,N.z),N[y]=0,N[x]=0,N[_]=C>0?1:-1,h.push(N.x,N.y,N.z),f.push(oe/v),f.push(1-V/S),U+=1}}for(let V=0;V<S;V++)for(let z=0;z<v;z++){let oe=d+z+Y*V,ue=d+z+Y*(V+1),q=d+(z+1)+Y*(V+1),he=d+(z+1)+Y*V;c.push(oe,ue,he),c.push(ue,q,he),K+=6}o.addGroup(p,K,I),p+=K,d+=U}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(kc,"BoxGeometry");var yi=kc;var Gc=class Gc extends Bt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],d=[],p=[],g=0,y=[],x=n/2,_=0;w(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(p,2));function w(){let E=new X,R=new X,C=0,v=(t-e)/n;for(let S=0;S<=s;S++){let I=[],P=S/s,O=P*(t-e)+e;for(let k=0;k<=r;k++){let J=k/r,D=J*c+o,Y=Math.sin(D),ne=Math.cos(D);R.x=O*Y,R.y=-P*n+x,R.z=O*ne,f.push(R.x,R.y,R.z),E.set(Y,v,ne).normalize(),d.push(E.x,E.y,E.z),p.push(J,1-P),I.push(g++)}y.push(I)}for(let S=0;S<r;S++)for(let I=0;I<s;I++){let P=y[I][S],O=y[I+1][S],k=y[I+1][S+1],J=y[I][S+1];(e>0||I!==0)&&(h.push(P,O,J),C+=3),(t>0||I!==s-1)&&(h.push(O,k,J),C+=3)}u.addGroup(_,C,0),_+=C}l(w,"generateTorso");function A(E){let R=g,C=new ze,v=new X,S=0,I=E===!0?e:t,P=E===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,x*P,0),d.push(0,P,0),p.push(.5,.5),g++;let O=g;for(let k=0;k<=r;k++){let D=k/r*c+o,Y=Math.cos(D),ne=Math.sin(D);v.x=I*ne,v.y=x*P,v.z=I*Y,f.push(v.x,v.y,v.z),d.push(0,P,0),C.x=Y*.5+.5,C.y=ne*.5*P+.5,p.push(C.x,C.y),g++}for(let k=0;k<r;k++){let J=R+k,D=O+k;E===!0?h.push(D,D+1,J):h.push(D+1,D,J),S+=3}u.addGroup(_,S,E===!0?1:2),_+=S}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Gc,"CylinderGeometry");var bi=Gc,Vc=class Vc extends bi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Vc,"ConeGeometry");var Mi=Vc;var Hc=class Hc extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=e/o,d=t/c,p=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let w=_*d-a;for(let A=0;A<u;A++){let E=A*f-s;g.push(E,-w,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let w=0;w<o;w++){let A=w+u*_,E=w+u*(_+1),R=w+1+u*(_+1),C=w+1+u*_;p.push(A,E,C),p.push(E,R,C)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Hc,"PlaneGeometry");var Si=Hc;var Wc=class Wc extends Bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new X,d=new X,p=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let w=[],A=_/n,E=a+A*o,R=e*Math.cos(E),C=Math.sqrt(e*e-R*R),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let I=S/t,P=r+I*s;f.x=-C*Math.cos(P),f.y=R,f.z=C*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),x.push(I+v,1-A),w.push(u++)}h.push(w)}for(let _=0;_<n;_++)for(let w=0;w<t;w++){let A=h[_][w+1],E=h[_][w],R=h[_+1][w],C=h[_+1][w+1];(_!==0||a>0)&&p.push(A,E,C),(_!==n-1||c<Math.PI)&&p.push(E,R,C)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Wc,"SphereGeometry");var wr=Wc;var Xc=class Xc extends Bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],f=[],d=new X,p=new X,g=new X;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=r;_++){let w=_/r*s;p.x=(e+t*Math.cos(x))*Math.cos(w),p.y=(e+t*Math.cos(x))*Math.sin(w),p.z=t*Math.sin(x),u.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),f.push(_/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let _=(r+1)*y+x-1,w=(r+1)*(y-1)+x-1,A=(r+1)*(y-1)+x,E=(r+1)*y+x;c.push(_,w,E),c.push(w,A,E)}this.setIndex(c),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Xc,"TorusGeometry");var Er=Xc;function rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(s0(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(s0(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(rs,"cloneUniforms");function sn(i){let e={};for(let t=0;t<i.length;t++){let n=rs(i[t]);for(let r in n)e[r]=n[r]}return e}l(sn,"mergeUniforms");function s0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(s0,"isThreeObject");function Av(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(Av,"cloneUniformsGroups");function Id(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}l(Id,"getUnlitUniformColorSpace");var ss={clone:rs,merge:sn},Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_f=class _f extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(r.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(_f,"ShaderMaterial");var xn=_f,vf=class vf extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(vf,"RawShaderMaterial");var gc=vf,yf=class yf extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(yf,"MeshStandardMaterial");var wi=yf;var bf=class bf extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(bf,"MeshDepthMaterial");var xc=bf,Mf=class Mf extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(Mf,"MeshDistanceMaterial");var _c=Mf;function Xs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Xs,"convertArray");function Zl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(Zl,"hasTangents");var Sf=class Sf{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Sf,"Interpolant");var Ar=Sf,wf=class wf extends Ar{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ed:s=e,o=2*t-n;break;case td:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ed:a=e,c=2*n-t;break;case td:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,x=y*g,_=-d*x+2*d*y-d*g,w=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,A=(-1-p)*x+(1.5+p)*y+.5*g,E=p*x-p*y;for(let R=0;R!==o;++R)s[R]=_*a[h+R]+w*a[u+R]+A*a[c+R]+E*a[f+R];return s}};l(wf,"CubicInterpolant");var vc=wf,Ef=class Ef extends Ar{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),f=1-h;for(let d=0;d!==o;++d)s[d]=a[u+d]*f+a[c+d]*h;return s}};l(Ef,"LinearInterpolant");var yc=Ef,Af=class Af extends Ar{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(Af,"DiscreteInterpolant");var bc=Af,Tf=class Tf extends Ar{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(r-t),y=1-g;for(let x=0;x!==o;++x)s[x]=a[u+x]*y+a[c+x]*g;return s}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=p*d+g*2,w=f[_],A=f[_+1],E=e*d+g*2,R=h[E],C=h[E+1],v=Pv(n,t,w,R,r);s[g]=j0(v,y,A,C,x)}return s}};l(Tf,"BezierInterpolant");var Mc=Tf;function j0(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l(j0,"cubicBezier");function Rv(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(Rv,"cubicBezierSlope");function Pv(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=j0(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Rv(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(Pv,"solveBezierParameter");var Cf=class Cf{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Zl(e.settings)&&(n.settings={inTangents:Xs(e.settings.inTangents,Array),outTangents:Xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ja:t=this.InterpolantFactoryMethodDiscrete;break;case lc:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break;case jh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return jl;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Zl(this.settings)&&(a0(this.settings.inTangents,e),a0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Zl(this.settings)&&(o0(this.settings.inTangents,e),o0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&iv(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Zl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(Cf,"KeyframeTrack");var Rn=Cf;function a0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(a0,"shiftTangentTimes");function o0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(o0,"scaleTangentTimes");Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=lc;var Rf=class Rf extends Rn{constructor(e,t,n){super(e,t,n)}};l(Rf,"BooleanKeyframeTrack");var Tr=Rf;Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=ja;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pf=class Pf extends Rn{constructor(e,t,n,r){super(e,t,n,r)}};l(Pf,"ColorKeyframeTrack");var Sc=Pf;Sc.prototype.ValueTypeName="color";var If=class If extends Rn{constructor(e,t,n,r){super(e,t,n,r)}};l(If,"NumberKeyframeTrack");var wc=If;wc.prototype.ValueTypeName="number";var Lf=class Lf extends Ar{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)mn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(Lf,"QuaternionLinearInterpolant");var Ec=Lf,Df=class Df extends Rn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}};l(Df,"QuaternionKeyframeTrack");var fo=Df;fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Nf=class Nf extends Rn{constructor(e,t,n){super(e,t,n)}};l(Nf,"StringKeyframeTrack");var Cr=Nf;Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=ja;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Uf=class Uf extends Rn{constructor(e,t,n,r){super(e,t,n,r)}};l(Uf,"VectorKeyframeTrack");var Ac=Uf;Ac.prototype.ValueTypeName="vector";var Ff=class Ff{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Ff,"LoadingManager");var Tc=Ff,Q0=new Tc,Of=class Of{constructor(e){this.manager=e!==void 0?e:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Of,"Loader");var Cc=Of;Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bf=class Bf extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Bf,"Light");var po=Bf,zf=class zf extends po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(zf,"HemisphereLight");var mo=zf,Kh=new mt,l0=new X,c0=new X,kf=class kf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===js||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(kf,"LightShadow");var Rc=kf,Jl=new X,Kl=new mn,gi=new X,Gf=class Gf extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,Kl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,Kl,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jl,Kl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,Kl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Gf,"Camera");var go=Gf,xr=new X,u0=new ze,h0=new ze,Vf=class Vf extends go{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,u0,h0),t.subVectors(h0,u0)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rh*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Vf,"PerspectiveCamera");var fn=Vf;var Hf=class Hf extends go{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Hf,"OrthographicCamera");var xo=Hf,Wf=class Wf extends Rc{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Wf,"DirectionalLightShadow");var nd=Wf,Xf=class Xf extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new nd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Xf,"DirectionalLight");var _o=Xf;var qf=class qf extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(qf,"InstancedBufferGeometry");var vo=qf;var qs=-90,Ys=1,Yf=class Yf extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fn(qs,Ys,e,t);r.layers=this.layers,this.add(r);let s=new fn(qs,Ys,e,t);s.layers=this.layers,this.add(s);let a=new fn(qs,Ys,e,t);a.layers=this.layers,this.add(a);let o=new fn(qs,Ys,e,t);o.layers=this.layers,this.add(o);let c=new fn(qs,Ys,e,t);c.layers=this.layers,this.add(c);let u=new fn(qs,Ys,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(Yf,"CubeCamera");var aa=Yf,$f=class $f extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l($f,"ArrayCamera");var Pc=$f;var Ld="\\[\\]\\.:\\/",Iv=new RegExp("["+Ld+"]","g"),Dd="[^"+Ld+"]",Lv="[^"+Ld.replace("\\.","")+"]",Dv=/((?:WC+[\/:])*)/.source.replace("WC",Dd),Nv=/(WCOD+)?/.source.replace("WCOD",Lv),Uv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dd),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dd),Ov=new RegExp("^"+Dv+Nv+Uv+Fv+"$"),Bv=["material","materials","bones","map"],Zf=class Zf{constructor(e,t,n){let r=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Zf,"Composite");var id=Zf,vr=class vr{constructor(e,t,n){this.path=t,this.parsedPath=n||vr.parseTrackName(t),this.node=vr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vr.Composite(e,t,n):new vr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(e){let t=Ov.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Bv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=vr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(vr,"PropertyBinding");var yt=vr;yt.Composite=id;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fA=new Float32Array(1);var qc=class qc{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(qc,"Matrix2"),qc.prototype.isMatrix2=!0;var rd=qc;function Nd(i,e,t,n){let r=zv(n);switch(t){case Sd:return i*e;case Ed:return i*e/r.components*r.byteLength;case eu:return i*e/r.components*r.byteLength;case Ti:return i*e*2/r.components*r.byteLength;case tu:return i*e*2/r.components*r.byteLength;case wd:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case nu:return i*e*4/r.components*r.byteLength;case So:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:case au:return Math.max(i,16)*Math.max(e,8)/4;case iu:case su:return Math.max(i,8)*Math.max(e,8)/2;case ou:case lu:case uu:case hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cu:case To:case du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tu:case Cu:case Ru:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pu:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Lu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Nd,"getByteLength");function zv(i){switch(i){case rn:case vd:return{byteLength:1,components:1};case ua:case yd:case In:return{byteLength:2,components:1};case jc:case Qc:return{byteLength:2,components:4};case ni:case Kc:case ii:return{byteLength:4,components:1};case bd:case Md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(zv,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function bg(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(bg,"WebGLAnimation");function Xv(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l(Xv,"WebGLAttributes");var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yv=`#ifdef USE_ALPHAHASH
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
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
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
#endif`,Qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ry=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,ay=`#ifdef USE_BUMPMAP
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,my=`#define PI 3.141592653589793
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
} // validated`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Oy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Hy=`uniform sampler2D dfgLUT;
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
}`,Wy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
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
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,Ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform float backgroundBlurriness;
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
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
}`,jb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
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
}`,rM=`uniform vec3 diffuse;
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
}`,sM=`#include <common>
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
}`,aM=`uniform vec3 diffuse;
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
}`,oM=`#define LAMBERT
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,hM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,fM=`#define PHONG
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
}`,pM=`#define PHONG
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
}`,mM=`#define STANDARD
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
}`,gM=`#define STANDARD
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
}`,xM=`#define TOON
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
}`,_M=`#define TOON
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
}`,vM=`uniform float size;
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
}`,yM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,MM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:qv,alphahash_pars_fragment:Yv,alphamap_fragment:$v,alphamap_pars_fragment:Zv,alphatest_fragment:Jv,alphatest_pars_fragment:Kv,aomap_fragment:jv,aomap_pars_fragment:Qv,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:ry,iridescence_fragment:sy,bumpmap_pars_fragment:ay,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:uy,color_fragment:hy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:py,common:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:xy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:yy,colorspace_fragment:by,colorspace_pars_fragment:My,envmap_fragment:Sy,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ey,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:Oy,envmap_vertex:Ty,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:Py,fog_pars_fragment:Iy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Dy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Uy,lights_pars_begin:Fy,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:ky,lights_phong_pars_fragment:Gy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:qy,lightprobes_pars_fragment:Yy,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Jy,logdepthbuf_vertex:Ky,map_fragment:jy,map_pars_fragment:Qy,map_particle_fragment:eb,map_particle_pars_fragment:tb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ab,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:hb,normal_pars_vertex:db,normal_vertex:fb,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:xb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:yb,premultiplied_alpha_fragment:bb,project_vertex:Mb,dithering_fragment:Sb,dithering_pars_fragment:wb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Rb,shadowmask_pars_fragment:Pb,skinbase_vertex:Ib,skinning_pars_vertex:Lb,skinning_vertex:Db,skinnormal_vertex:Nb,specularmap_fragment:Ub,specularmap_pars_fragment:Fb,tonemapping_fragment:Ob,tonemapping_pars_fragment:Bb,transmission_fragment:zb,transmission_pars_fragment:kb,uv_pars_fragment:Gb,uv_pars_vertex:Vb,uv_vertex:Hb,worldpos_vertex:Wb,background_vert:Xb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:$b,cube_vert:Zb,cube_frag:Jb,depth_vert:Kb,depth_frag:jb,distance_vert:Qb,distance_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:rM,meshbasic_vert:sM,meshbasic_frag:aM,meshlambert_vert:oM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:hM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:xM,meshtoon_frag:_M,points_vert:vM,points_frag:yM,shadow_vert:bM,shadow_frag:MM,sprite_vert:SM,sprite_frag:wM},we={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ri={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ri.physical={uniforms:sn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Uu={r:0,b:0,g:0},EM=new mt,Mg=new We;Mg.set(-1,0,0,0,1,0,0,0,1);function AM(i,e,t,n,r,s){let a=new Oe(0),o=r===!0?0:1,c,u,h=null,f=0,d=null;function p(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let E=w.backgroundBlurriness>0;A=e.get(A,E)}return A}l(p,"getBackground");function g(w){let A=!1,E=p(w);E===null?x(a,o):E&&E.isColor&&(x(E,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(w,A){let E=p(A);E&&E.isCubeTexture?(u===void 0&&(u=new Et(new yi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:rs(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Mg),u.material.toneMapped=it.getTransfer(E.colorSpace)!==ft,(h!==E||f!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Et(new Si(2,2),new xn({name:"BackgroundMaterial",uniforms:rs(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(w,A){w.getRGB(Uu,Id(i)),t.buffers.color.setClear(Uu.r,Uu.g,Uu.b,A,s)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(w,A=1){a.set(w),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(w){o=w,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(AM,"WebGLBackground");function TM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,a=!1;function o(O,k,J,D,Y){let ne=!1,U=f(O,D,J,k);s!==U&&(s=U,u(s.object)),ne=p(O,D,J,Y),ne&&g(O,D,J,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,E(O,k,J,D),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(O){return i.bindVertexArray(O)}l(u,"bindVertexArrayObject");function h(O){return i.deleteVertexArray(O)}l(h,"deleteVertexArrayObject");function f(O,k,J,D){let Y=D.wireframe===!0,ne=n[k.id];ne===void 0&&(ne={},n[k.id]=ne);let U=O.isInstancedMesh===!0?O.id:0,K=ne[U];K===void 0&&(K={},ne[U]=K);let N=K[J.id];N===void 0&&(N={},K[J.id]=N);let V=N[Y];return V===void 0&&(V=d(c()),N[Y]=V),V}l(f,"getBindingState");function d(O){let k=[],J=[],D=[];for(let Y=0;Y<t;Y++)k[Y]=0,J[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:D,object:O,attributes:{},index:null}}l(d,"createBindingState");function p(O,k,J,D){let Y=s.attributes,ne=k.attributes,U=0,K=J.getAttributes();for(let N in K)if(K[N].location>=0){let z=Y[N],oe=ne[N];if(oe===void 0&&(N==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),N==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),z===void 0||z.attribute!==oe||oe&&z.data!==oe.data)return!0;U++}return s.attributesNum!==U||s.index!==D}l(p,"needsUpdate");function g(O,k,J,D){let Y={},ne=k.attributes,U=0,K=J.getAttributes();for(let N in K)if(K[N].location>=0){let z=ne[N];z===void 0&&(N==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),N==="instanceColor"&&O.instanceColor&&(z=O.instanceColor));let oe={};oe.attribute=z,z&&z.data&&(oe.data=z.data),Y[N]=oe,U++}s.attributes=Y,s.attributesNum=U,s.index=D}l(g,"saveCache");function y(){let O=s.newAttributes;for(let k=0,J=O.length;k<J;k++)O[k]=0}l(y,"initAttributes");function x(O){_(O,0)}l(x,"enableAttribute");function _(O,k){let J=s.newAttributes,D=s.enabledAttributes,Y=s.attributeDivisors;J[O]=1,D[O]===0&&(i.enableVertexAttribArray(O),D[O]=1),Y[O]!==k&&(i.vertexAttribDivisor(O,k),Y[O]=k)}l(_,"enableAttributeAndDivisor");function w(){let O=s.newAttributes,k=s.enabledAttributes;for(let J=0,D=k.length;J<D;J++)k[J]!==O[J]&&(i.disableVertexAttribArray(J),k[J]=0)}l(w,"disableUnusedAttributes");function A(O,k,J,D,Y,ne,U){U===!0?i.vertexAttribIPointer(O,k,J,Y,ne):i.vertexAttribPointer(O,k,J,D,Y,ne)}l(A,"vertexAttribPointer");function E(O,k,J,D){y();let Y=D.attributes,ne=J.getAttributes(),U=k.defaultAttributeValues;for(let K in ne){let N=ne[K];if(N.location>=0){let V=Y[K];if(V===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let z=V.normalized,oe=V.itemSize,ue=e.get(V);if(ue===void 0)continue;let q=ue.buffer,he=ue.type,ee=ue.bytesPerElement,ce=he===i.INT||he===i.UNSIGNED_INT||V.gpuType===Kc;if(V.isInterleavedBufferAttribute){let re=V.data,Re=re.isInterleavedBuffer===!0?re.stride:re.itemSize,ke=V.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Pe=0;Pe<N.locationSize;Pe++)_(N.location+Pe,re.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<N.locationSize;Pe++)x(N.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Pe=0;Pe<N.locationSize;Pe++)A(N.location+Pe,oe/N.locationSize,he,z,Re*ee,(ke+oe/N.locationSize*Pe)*ee,ce)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<N.locationSize;re++)_(N.location+re,V.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<N.locationSize;re++)x(N.location+re);i.bindBuffer(i.ARRAY_BUFFER,q);for(let re=0;re<N.locationSize;re++)A(N.location+re,oe/N.locationSize,he,z,oe*ee,oe/N.locationSize*re*ee,ce)}}else if(U!==void 0){let z=U[K];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(N.location,z);break;case 3:i.vertexAttrib3fv(N.location,z);break;case 4:i.vertexAttrib4fv(N.location,z);break;default:i.vertexAttrib1fv(N.location,z)}}}}w()}l(E,"setupVertexAttributes");function R(){I();for(let O in n){let k=n[O];for(let J in k){let D=k[J];for(let Y in D){let ne=D[Y];for(let U in ne)h(ne[U].object),delete ne[U];delete D[Y]}}delete n[O]}}l(R,"dispose");function C(O){if(n[O.id]===void 0)return;let k=n[O.id];for(let J in k){let D=k[J];for(let Y in D){let ne=D[Y];for(let U in ne)h(ne[U].object),delete ne[U];delete D[Y]}}delete n[O.id]}l(C,"releaseStatesOfGeometry");function v(O){for(let k in n){let J=n[k];for(let D in J){let Y=J[D];if(Y[O.id]===void 0)continue;let ne=Y[O.id];for(let U in ne)h(ne[U].object),delete ne[U];delete Y[O.id]}}}l(v,"releaseStatesOfProgram");function S(O){for(let k in n){let J=n[k],D=O.isInstancedMesh===!0?O.id:0,Y=J[D];if(Y!==void 0){for(let ne in Y){let U=Y[ne];for(let K in U)h(U[K].object),delete U[K];delete Y[ne]}delete J[D],Object.keys(J).length===0&&delete n[k]}}}l(S,"releaseStatesOfObject");function I(){P(),a=!0,s!==r&&(s=r,u(s.object))}l(I,"reset");function P(){r.geometry=null,r.program=null,r.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:I,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}l(TM,"WebGLBindingStates");function CM(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(CM,"WebGLBufferRenderer");function RM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(v){return!(v!==Ln&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let S=v===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==rn&&v!==ii&&!S&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ve("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:E,maxSamples:R,samples:C}}l(RM,"WebGLCapabilities");function PM(i){let e=this,t=null,n=0,r=!1,s=!1,a=new bn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{let w=s?0:n,A=w*4,E=_.clippingState||null;c.value=E,E=h(g,d,A,p);for(let R=0;R!==A;++R)E[R]=t[R];_.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,p,g){let y=f!==null?f.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=p+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,E=p;A!==y;++A,E+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(x,E),x[E+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(PM,"WebGLClipping");var ap=class ap extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new co(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yi(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Qr});s.uniforms.tEquirect.value=t;let a=new Et(r,s),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Ot),new aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(ap,"WebGLCubeRenderTarget");var Io=ap,eg=256,IM=3,LM=20,Sg=256,wg=16,DM=3,NM=new X,UM=new Oe,zu=class zu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new aa(1,10,null),this._boxMesh=new Et(new yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=NM}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(UM));let x=new aa(n,r,h);return x.position.copy(o),x.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(eg,Y0(e))}_fromTexture(e,t){e.mapping===ts||e.mapping===ca?this._setSize(e.image.length===0?eg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=tg(e,!1,!1),n=Math.log2(e)-IM;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ts||e.mapping===ca?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ng()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=FM(),this._integrationMaterial=OM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/wg);for(let a=0;a<=n;a++){let o=zu.lodToRoughness(a,n);if(a>n-DM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Sg*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=BM());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(zu,"PMREMGenerator");var Ou=zu;function tg(i,e,t){return new Io(i,{minFilter:Pn,generateMipmaps:e,type:In,colorSpace:Qa,depthBuffer:t})}l(tg,"_createRenderTarget");function Lo(i,e,t){return new xn({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:_n,blending:Qr,depthTest:!1,depthWrite:!1})}l(Lo,"_getMaterial");function FM(){return Lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sg}u

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
	`)}l(FM,"_getGGXMaterial");function OM(){return Lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wg}},`

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
	`)}l(OM,"_getIntegrationMaterial");function BM(){return Lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${LM}
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
	`)}l(BM,"_getBlurMaterial");function ng(){return Lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(ng,"_getEquirectMaterial");function ig(){return Lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(ig,"_getCubemapMaterial");function zM(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}l(r,"get");function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===$c||p===Zc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Io(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(s,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===$c||p===Zc,y=p===ts||p===ca;if(g||y){let x=t.get(d),_=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Ou(i)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let w=d.image;return g&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new Ou(i)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}l(a,"getPMREM");function o(d,p){return p===$c?d.mapping=ts:p===Zc&&(d.mapping=ca),d}l(o,"mapTextureMapping");function c(d){let p=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&p++;return p===g}l(c,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}l(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:r,dispose:f}}l(zM,"WebGLEnvironments");function kM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&Ja("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(kM,"WebGLExtensions");function GM(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);let y=s.get(g);y&&(e.remove(y),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function f(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let w=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?oo:ao,E=new A(Math.ceil(w/3)*6,1),R=E.array;if(y!==null){let v=y.array;_=y.version;for(let S=0,I=0;S<w;S+=3){let P=v[S+0],O=v[S+1],k=v[S+2];R[I++]=P,R[I++]=O,R[I++]=O,R[I++]=k,R[I++]=k,R[I++]=P}}else{_=x.version;for(let v=0,S=0;v<w;v+=3){let I=v+0,P=v+1,O=v+2;R[S++]=I,R[S++]=P,R[S++]=P,R[S++]=O,R[S++]=O,R[S++]=I}}E.version=_;let C=s.get(g);C&&e.remove(C),s.set(g,E)}l(f,"updateWireframeAttribute");function d(g){let y=s.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&f(g)}else f(g);return s.get(g)}l(d,"getWireframeAttribute");function p(){for(let g in r){let y=r[g].deref();y!==void 0&&c(y)}}return l(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}l(GM,"WebGLGeometries");function VM(i,e,t){let n;function r(f){n=f}l(r,"setMode");let s,a;function o(f){s=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*a,p),t.update(d,n,p))}l(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let y=0;for(let x=0;x<p;x++)y+=d[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(VM,"WebGLIndexedBufferRenderer");function HM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(HM,"WebGLInfo");function WM(i,e,t){let n=new WeakMap,r=new wt;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),x===!0&&(E=3);let R=o.attributes.position.count*E,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let v=new Float32Array(R*C*4*f),S=new jr(v,R,C,f);S.type=ii,S.needsUpdate=!0;let I=E*4;for(let O=0;O<f;O++){let k=_[O],J=w[O],D=A[O],Y=R*C*4*O;for(let ne=0;ne<k.count;ne++){let U=ne*I;g===!0&&(r.fromBufferAttribute(k,ne),v[Y+U+0]=r.x,v[Y+U+1]=r.y,v[Y+U+2]=r.z,v[Y+U+3]=0),y===!0&&(r.fromBufferAttribute(J,ne),v[Y+U+4]=r.x,v[Y+U+5]=r.y,v[Y+U+6]=r.z,v[Y+U+7]=0),x===!0&&(r.fromBufferAttribute(D,ne),v[Y+U+8]=r.x,v[Y+U+9]=r.y,v[Y+U+10]=r.z,v[Y+U+11]=D.itemSize===4?r.w:1)}}d={count:f,texture:S,size:new ze(R,C)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(s,"update"),{update:s}}l(WM,"WebGLMorphtargets");function XM(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(XM,"WebGLObjects");var qM={[dd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[pd]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[gd]:"AGX_TONE_MAPPING",[xd]:"NEUTRAL_TONE_MAPPING",[md]:"CUSTOM_TONE_MAPPING"};function YM(i,e,t,n,r,s){let a=new Tn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Bt;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let f=new gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Et(h,f),p=new xo(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,w=null,A=[],E=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let v=0;v<A.length;v++){let S=A[v];S.setSize&&S.setSize(R,C)}},this.setEffects=function(R){A=R,E=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new Tn(C,v,{type:In,depthBuffer:!1,stencilBuffer:!1}),c=new Tn(C,v,{type:In,depthBuffer:!1,stencilBuffer:!1}));let S=r===!0&&A.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Ji(C,v),s===!0&&(u.format=Ki,u.type=ns)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<A.length;I++){let P=A[I];P.setSize&&P.setSize(C,v),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(R,C){if(x||R.toneMapping===Ai&&A.length===0)return!1;if(w=C,C!==null){let v=C.width,S=C.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return E===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Ai,!0},this.hasRenderPass=function(){return E},this.end=function(R,C){R.toneMapping=_,x=!0;let v=a,S=o;for(let I=0;I<A.length;I++){let P=A[I];P.enabled!==!1&&(P.render(R,S,v,C),P.needsSwap!==!1&&(v=S,S=S===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},it.getTransfer(g)===ft&&(f.defines.SRGB_TRANSFER="");let I=qM[y];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(w),R.render(d,p),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(YM,"WebGLOutput");var Eg=new gn,Ag=new Ji(1,1),Tg=new uo(1),Cg=new jr,Rg=new dc,Pg=new co,rg=[],sg=[],ag=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);function da(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=rg[r];if(s===void 0&&(s=new Float32Array(r),rg[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(da,"flatten");function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(kt,"arraysEqual");function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Gt,"copyArray");function ku(i,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(ku,"allocTexUnits");function $M(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l($M,"setValueV1f");function ZM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}l(ZM,"setValueV2f");function JM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}l(JM,"setValueV3f");function KM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}l(KM,"setValueV4f");function jM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;lg.set(n),i.uniformMatrix2fv(this.addr,!1,lg),Gt(t,n)}}l(jM,"setValueM2");function QM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;og.set(n),i.uniformMatrix3fv(this.addr,!1,og),Gt(t,n)}}l(QM,"setValueM3");function eS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;ag.set(n),i.uniformMatrix4fv(this.addr,!1,ag),Gt(t,n)}}l(eS,"setValueM4");function tS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(tS,"setValueV1i");function nS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}l(nS,"setValueV2i");function iS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}l(iS,"setValueV3i");function rS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}l(rS,"setValueV4i");function sS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(sS,"setValueV1ui");function aS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}l(aS,"setValueV2ui");function oS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}l(oS,"setValueV3ui");function lS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}l(lS,"setValueV4ui");function Gu(i){return i.version===0&&(i.compareFunction=Cd,i.needsUpdate=!0),i}l(Gu,"initShadowTexture");function cS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Gu(Ag):s=Eg,t.setTexture2D(e||s,r)}l(cS,"setValueT1");function uS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rg,r)}l(uS,"setValueT3D1");function hS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Gu(Tg):s=Pg,t.setTextureCube(e||s,r)}l(hS,"setValueT6");function dS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cg,r)}l(dS,"setValueT2DArray1");function fS(i){switch(i){case 5126:return $M;case 35664:return ZM;case 35665:return JM;case 35666:return KM;case 35674:return jM;case 35675:return QM;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return aS;case 36295:return oS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return dS}}l(fS,"getSingularSetter");function pS(i,e){i.uniform1fv(this.addr,e)}l(pS,"setValueV1fArray");function mS(i,e){let t=da(e,this.size,2);i.uniform2fv(this.addr,t)}l(mS,"setValueV2fArray");function gS(i,e){let t=da(e,this.size,3);i.uniform3fv(this.addr,t)}l(gS,"setValueV3fArray");function xS(i,e){let t=da(e,this.size,4);i.uniform4fv(this.addr,t)}l(xS,"setValueV4fArray");function _S(i,e){let t=da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(_S,"setValueM2Array");function vS(i,e){let t=da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(vS,"setValueM3Array");function yS(i,e){let t=da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(yS,"setValueM4Array");function bS(i,e){i.uniform1iv(this.addr,e)}l(bS,"setValueV1iArray");function MS(i,e){i.uniform2iv(this.addr,e)}l(MS,"setValueV2iArray");function SS(i,e){i.uniform3iv(this.addr,e)}l(SS,"setValueV3iArray");function wS(i,e){i.uniform4iv(this.addr,e)}l(wS,"setValueV4iArray");function ES(i,e){i.uniform1uiv(this.addr,e)}l(ES,"setValueV1uiArray");function AS(i,e){i.uniform2uiv(this.addr,e)}l(AS,"setValueV2uiArray");function TS(i,e){i.uniform3uiv(this.addr,e)}l(TS,"setValueV3uiArray");function CS(i,e){i.uniform4uiv(this.addr,e)}l(CS,"setValueV4uiArray");function RS(i,e,t){let n=this.cache,r=e.length,s=ku(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gu(Ag):a=Eg;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(RS,"setValueT1Array");function PS(i,e,t){let n=this.cache,r=e.length,s=ku(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Rg,s[a])}l(PS,"setValueT3DArray");function IS(i,e,t){let n=this.cache,r=e.length,s=ku(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Gu(Tg):a=Pg;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(IS,"setValueT6Array");function LS(i,e,t){let n=this.cache,r=e.length,s=ku(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cg,s[a])}l(LS,"setValueT2DArrayArray");function DS(i){switch(i){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return xS;case 35674:return _S;case 35675:return vS;case 35676:return yS;case 5124:case 35670:return bS;case 35667:case 35671:return MS;case 35668:case 35672:return SS;case 35669:case 35673:return wS;case 5125:return ES;case 36294:return AS;case 36295:return TS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return LS}}l(DS,"getPureArraySetter");var op=class op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fS(t.type)}};l(op,"SingleUniform");var jf=op,lp=class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}};l(lp,"PureArrayUniform");var Qf=lp,cp=class cp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(cp,"StructuredUniform");var ep=cp,Jf=/(\w+)(\])?(\[|\.)?/g;function cg(i,e){i.seq.push(e),i.map[e.id]=e}l(cg,"addUniform");function NS(i,e,t){let n=i.name,r=n.length;for(Jf.lastIndex=0;;){let s=Jf.exec(n),a=Jf.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){cg(t,u===void 0?new jf(o,i,e):new Qf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ep(o),cg(t,f)),t=f}}}l(NS,"parseUniform");var up=class up{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);NS(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(up,"WebGLUniforms");var ha=up;function ug(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(ug,"WebGLShader");var US=37297,FS=0;function OS(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(OS,"handleSource");var hg=new We;function BS(i){it._getMatrix(hg,it.workingColorSpace,i);let e=`mat3( ${hg.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(BS,"getEncodingComponents");function dg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+OS(i.getShaderSource(e),o)}else return s}l(dg,"getShaderErrors");function zS(i,e){let t=BS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(zS,"getTexelEncodingFunction");var kS={[dd]:"Linear",[fd]:"Reinhard",[pd]:"Cineon",[bo]:"ACESFilmic",[gd]:"AgX",[xd]:"Neutral",[md]:"Custom"};function GS(i,e){let t=kS[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(GS,"getToneMappingFunction");var Fu=new X;function VS(){it.getLuminanceCoefficients(Fu);let i=Fu.x.toFixed(4),e=Fu.y.toFixed(4),t=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(VS,"getLuminanceFunction");function HS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}l(HS,"generateVertexExtensions");function WS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(WS,"generateDefines");function XS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(XS,"fetchAttributeLocations");function Po(i){return i!==""}l(Po,"filterEmptyLine");function fg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(fg,"replaceLightNums");function pg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(pg,"replaceClippingPlaneNums");var qS=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(i){return i.replace(qS,YS)}l(tp,"resolveIncludes");function YS(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return tp(t)}l(YS,"includeReplacer");var $S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(i){return i.replace($S,ZS)}l(mg,"unrollLoops");function ZS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(ZS,"loopReplacer");function gg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(gg,"generatePrecision");var JS={[yo]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function KS(i){return JS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(KS,"generateShadowMapTypeDefine");var jS={[ca]:"ENVMAP_MODE_REFRACTION"};function QS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(QS,"generateEnvMapModeDefine");var ew={[hd]:"ENVMAP_BLENDING_MULTIPLY",[L0]:"ENVMAP_BLENDING_MIX",[D0]:"ENVMAP_BLENDING_ADD"};function tw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ew[i.combine]||"ENVMAP_BLENDING_NONE"}l(tw,"generateEnvMapBlendingDefine");function nw(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=KS(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=QS(t),f=tw(t),d=HS(t),p=WS(s),g=r.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Po).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Po).join(`
`),x.length>0&&(x+=`
`)):(y=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),x=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ai?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,zS("linearToOutputTexel",t.outputColorSpace),VS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),a=tp(a),a=fg(a,t),a=pg(a,t),o=tp(o),o=fg(o,t),o=pg(o,t),a=mg(a),o=mg(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=_+y+a,A=_+x+o,E=ug(r,r.VERTEX_SHADER,w),R=ug(r,r.FRAGMENT_SHADER,A);r.attachShader(g,E),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(E)||"",J=r.getShaderInfoLog(R)||"",D=O.trim(),Y=k.trim(),ne=J.trim(),U=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,R);else{let N=dg(r,E,"vertex"),V=dg(r,R,"fragment");He("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+N+`
`+V)}else D!==""?Ve("WebGLProgram: Program Info Log:",D):(Y===""||ne==="")&&(K=!1);K&&(P.diagnostics={runnable:U,programLog:D,vertexShader:{log:Y,prefix:y},fragmentShader:{log:ne,prefix:x}})}r.deleteShader(E),r.deleteShader(R),v=new ha(r,g),S=XS(r,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,US)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=R,this}l(nw,"WebGLProgram");var iw=0,hp=class hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ip(e),t.set(e,n)),n}};l(hp,"WebGLShaderCache");var np=hp,dp=class dp{constructor(e){this.id=iw++,this.code=e,this.usedTimes=0}};l(dp,"WebGLShaderStage");var ip=dp;function rw(i){return i===Ti||i===To||i===Co}l(rw,"isPackedRGFormat");function sw(i,e,t,n,r,s){let a=new io,o=new np,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}l(p,"getChannel");function g(v,S,I,P,O,k){let J=P.fog,D=O.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||Y,ne),K=d[v.type],N=n.precision;v.precision!==null&&(N=n.getMaxPrecision(v.precision),N!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",N,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=V!==void 0?V.length:0,oe=0;D.morphAttributes.position!==void 0&&(oe=1),D.morphAttributes.normal!==void 0&&(oe=2),D.morphAttributes.color!==void 0&&(oe=3);let ue,q,he,ee;if(K){let Ae=Ri[K];ue=Ae.vertexShader,q=Ae.fragmentShader}else{ue=v.vertexShader,q=v.fragmentShader;let Ae=o.getVertexShaderStage(v),pt=o.getFragmentShaderStage(v);o.update(v,Ae,pt),he=Ae.id,ee=pt.id}let ce=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,ke=O.isBatchedMesh===!0,Pe=!!v.map,Je=!!v.matcap,Ke=!!U,Xe=Ke&&U.isPMREMTexture===!0,Qe=!!v.aoMap,dt=!!v.lightMap,St=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,Pt=!!v.displacementMap,at=!!v.emissiveMap,It=!!v.metalnessMap,st=!!v.roughnessMap,Lt=v.anisotropy>0,B=v.clearcoat>0,Tt=v.diffuseRoughness>0,ct=v.dispersion>0,et=v.retroreflectivity>0,pe=v.iridescence>0,xt=v.sheen>0,Ue=v.transmission>0,Ge=Lt&&!!v.anisotropyMap,T=B&&!!v.clearcoatMap,b=B&&!!v.clearcoatNormalMap,H=B&&!!v.clearcoatRoughnessMap,fe=Tt&&!!v.diffuseRoughnessMap,se=pe&&!!v.iridescenceMap,xe=pe&&!!v.iridescenceThicknessMap,Me=xt&&!!v.sheenColorMap,ie=xt&&!!v.sheenRoughnessMap,ae=!!v.specularMap,ve=!!v.specularColorMap,L=!!v.specularIntensityMap,le=Ue&&!!v.transmissionMap,te=Ue&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Fe=!!v.alphaHash,$e=!!v.extensions,me=Ai;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(me=i.toneMapping);let Be=Xe?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Ye={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:q,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:N,batching:ke,batchingColor:ke&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Je,envMap:Ke,envMapMode:Ke&&U.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Be.length-1:null,envMapSize:Xe?Be[0].width:null,aoMap:Qe,lightMap:dt,bumpMap:St,normalMap:lt,displacementMap:Pt,emissiveMap:at,normalMapObjectSpace:lt&&v.normalMapType===F0,normalMapTangentSpace:lt&&v.normalMapType===Du,packedNormalMap:lt&&v.normalMapType===Du&&rw(v.normalMap.format),metalnessMap:It,roughnessMap:st,anisotropy:Lt,anisotropyMap:Ge,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Tt,diffuseRoughnessMap:fe,dispersion:ct,retroreflection:et,iridescence:pe,iridescenceMap:se,iridescenceThicknessMap:xe,sheen:xt,sheenColorMap:Me,sheenRoughnessMap:ie,specularMap:ae,specularColorMap:ve,specularIntensityMap:L,transmission:Ue,transmissionMap:le,thicknessMap:te,gradientMap:ye,opaque:v.transparent===!1&&v.blending===la&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Fe,combine:v.combine,mapUv:Pe&&p(v.map.channel),aoMapUv:Qe&&p(v.aoMap.channel),lightMapUv:dt&&p(v.lightMap.channel),bumpMapUv:St&&p(v.bumpMap.channel),normalMapUv:lt&&p(v.normalMap.channel),displacementMapUv:Pt&&p(v.displacementMap.channel),emissiveMapUv:at&&p(v.emissiveMap.channel),metalnessMapUv:It&&p(v.metalnessMap.channel),roughnessMapUv:st&&p(v.roughnessMap.channel),anisotropyMapUv:Ge&&p(v.anisotropyMap.channel),clearcoatMapUv:T&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(v.sheenRoughnessMap.channel),specularMapUv:ae&&p(v.specularMap.channel),specularColorMapUv:ve&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:le&&p(v.transmissionMap.channel),thicknessMapUv:te&&p(v.thicknessMap.channel),alphaMapUv:ge&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(lt||Lt),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(Pe||ge),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:oe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ei,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:$e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&v.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}l(g,"getParameters");function y(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(S,v),_(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}l(y,"getProgramCacheKey");function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function w(v){let S=d[v.type],I;if(S){let P=Ri[S];I=ss.clone(P.uniforms)}else I=v.uniforms;return I}l(w,"getUniforms");function A(v,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new nw(i,S,v,r),u.push(I),h.set(S,I)),I}l(A,"acquireProgram");function E(v){if(--v.usedTimes===0){let S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(E,"releaseProgram");function R(v){o.remove(v)}l(R,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:w,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:C}}l(sw,"WebGLPrograms");function aw(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(aw,"WebGLProperties");function ow(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(ow,"painterSortStable");function xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(xg,"reversePainterSortStable");function _g(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}l(a,"materialVariant");function o(d,p,g,y,x,_){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:_},i[e]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=g,w.materialVariant=a(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=x,w.group=_),e++,w}l(o,"getNextRenderItem");function c(d,p,g,y,x,_,w){w.reversedDepth===!0&&(x=-x);let A=o(d,p,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):t.push(A)}l(c,"push");function u(d,p,g,y,x,_){let w=o(d,p,g,y,x,_);g.transmission>0?n.unshift(w):g.transparent===!0?r.unshift(w):t.unshift(w)}l(u,"unshift");function h(d,p){t.length>1&&t.sort(d||ow),n.length>1&&n.sort(p||xg),r.length>1&&r.sort(p||xg)}l(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:f,sort:h}}l(_g,"WebGLRenderList");function lw(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new _g,i.set(n,[a])):r>=s.length?(a=new _g,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(lw,"WebGLRenderLists");function cw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Oe};break;case"SpotLight":t={position:new X,direction:new X,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t},"get")}}l(cw,"UniformsCache");function uw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(uw,"ShadowUniformsCache");var hw=0;function dw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(dw,"shadowCastingAndTexturingLightsFirst");function fw(i){let e=new cw,t=uw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);let r=new X,s=new mt,a=new mt;function o(u){let h=0,f=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,g=0,y=0,x=0,_=0,w=0,A=0,E=0,R=0,C=0,v=0,S=0,I=0,P=0;u.sort(dw);for(let k=0,J=u.length;k<J;k++){let D=u[k],Y=D.color,ne=D.intensity,U=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ti?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=Y.r*ne,f+=Y.g*ne,d+=Y.b*ne;else if(D.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(D.sh.coefficients[N],ne);P++}else if(D.isSunLight){let N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,z=t.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=K;let oe=V.getViewportCount();for(let ue=0;ue<oe;ue++)n.sunShadowMatrix[y+ue]=V.getMatrix(ue),n.sunShadowCascade[y+ue]=V._cascadeData[ue];y+=oe,g++}n.sun[p]=N,p++}else if(D.isDirectionalLight){let N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,z=t.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.directionalShadow[x]=z,n.directionalShadowMap[x]=K,n.directionalShadowMatrix[x]=D.shadow.matrix,R++}n.directional[x]=N,x++}else if(D.isSpotLight){let N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(Y).multiplyScalar(ne),N.distance=U,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,n.spot[w]=N;let V=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,V.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[w]=V.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.spotShadow[w]=z,n.spotShadowMap[w]=K,v++}w++}else if(D.isRectAreaLight){let N=e.get(D);N.color.copy(Y).multiplyScalar(ne),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=N,A++}else if(D.isPointLight){let N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){let V=D.shadow,z=t.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=D.shadow.matrix,C++}n.point[_]=N,_++}else if(D.isHemisphereLight){let N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(ne),N.groundColor.copy(D.groundColor).multiplyScalar(ne),n.hemi[E]=N,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.sunLength!==p||O.directionalLength!==x||O.pointLength!==_||O.spotLength!==w||O.rectAreaLength!==A||O.hemiLength!==E||O.numSunShadows!==g||O.numDirectionalShadows!==R||O.numPointShadows!==C||O.numSpotShadows!==v||O.numSpotMaps!==S||O.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=x,n.spot.length=w,n.rectArea.length=A,n.point.length=_,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,O.sunLength=p,O.directionalLength=x,O.pointLength=_,O.spotLength=w,O.rectAreaLength=A,O.hemiLength=E,O.numSunShadows=g,O.numDirectionalShadows=R,O.numPointShadows=C,O.numSpotShadows=v,O.numSpotMaps=S,O.numLightProbes=P,n.version=hw++)}l(o,"setup");function c(u,h){let f=0,d=0,p=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let w=0,A=u.length;w<A;w++){let E=u[w];if(E.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(_),f++}else if(E.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),d++}else if(E.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(E.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(E.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(_),p++}else if(E.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(fw,"WebGLLights");function vg(i){let e=new fw(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(vg,"WebGLRenderState");function pw(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new vg(i),e.set(r,[o])):s>=a.length?(o=new vg(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(pw,"WebGLRenderStates");var mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
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
}`,xw=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],_w=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],yg=new mt,Ro=new X,Kf=new X;function vw(i,e,t){let n=new Mr,r=new ze,s=new ze,a=new wt,o=new xc,c=new _c,u={},h=t.maxTextureSize,f={[Rr]:_n,[_n]:Rr,[Ei]:Ei},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let _=this.type;this.render=function(C,v,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Yc&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo);let I=i.getRenderTarget(),P=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Qr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let J=_!==this.type;J&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Y=>Y.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Y=C.length;D<Y;D++){let ne=C[D],U=ne.shadow;if(U===void 0){Ve("WebGLShadowMap:",ne,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let K=U.getFrameExtents();r.multiply(K),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,U.mapSize.y=s.y));let N=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=N,U.map===null||J===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===oa){if(ne.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Tn(r.x,r.y,{format:Ti,type:In,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),U.map.texture.name=ne.name+".shadowMap",U.map.depthTexture=new Ji(r.x,r.y,ii),U.map.depthTexture.name=ne.name+".shadowMapDepth",U.map.depthTexture.format=Yi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ft,U.map.depthTexture.magFilter=Ft}else ne.isPointLight?(U.map=new Io(r.x),U.map.depthTexture=new uo(r.x,ni)):(U.map=new Tn(r.x,r.y),U.map.depthTexture=new Ji(r.x,r.y,ni)),U.map.depthTexture.name=ne.name+".shadowMap",U.map.depthTexture.format=Yi,this.type===yo?(U.map.depthTexture.compareFunction=N?Td:Ad,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ft,U.map.depthTexture.magFilter=Ft);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==r.x||U.map.height!==r.y)&&U.map.setSize(r.x,r.y);let V=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();ne.isPointLight!==!0&&U.updateMatrices(ne,S);let z=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let oe=0;oe<V;oe++){let ue=U.getCamera(oe);if(ne.isPointLight){let q=U.camera,he=U.matrix,ee=ne.distance||q.far;ee!==q.far&&(q.far=ee,q.updateProjectionMatrix()),Ro.setFromMatrixPosition(ne.matrixWorld),q.position.copy(Ro),Kf.copy(q.position),Kf.add(xw[oe]),q.up.copy(_w[oe]),q.lookAt(Kf),q.updateMatrixWorld(),he.makeTranslation(-Ro.x,-Ro.y,-Ro.z),yg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(yg,q.coordinateSystem,q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(U.map),i.clear());let q=U.getViewport(oe);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),k.viewport(a)}n=U.getFrustum(oe),E(v,S,ue,ne,z,this.type)}U.isPointLightShadow!==!0&&this.type===oa&&w(U,S),U.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(I,P,O)};function w(C,v){let S=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new Tn(r.x,r.y,{format:Ti,type:In}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,S,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,S,p,y,null)}l(w,"VSMPass");function A(C,v,S,I){let P=null,O=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)P=O;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let k=P.uuid,J=v.uuid,D=u[k];D===void 0&&(D={},u[k]=D);let Y=D[J];Y===void 0&&(Y=P.clone(),D[J]=Y,v.addEventListener("dispose",R)),P=Y}if(P.visible=v.visible,P.wireframe=v.wireframe,I===oa?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:f[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=S}return P}l(A,"getDepthMaterial");function E(C,v,S,I,P,O){if(C.visible===!1)return;if(C.layers.test(P)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===oa)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);let D=e.update(C),Y=C.material;if(Array.isArray(Y)){let ne=D.groups;for(let U=0,K=ne.length;U<K;U++){let N=ne[U],V=Y[N.materialIndex];if(V&&V.visible){let z=A(C,V,I,O);C.onBeforeShadow(i,C,v,S,D,z,N),i.renderBufferDirect(S,null,D,z,C,N),C.onAfterShadow(i,C,v,S,D,z,N)}}}else if(Y.visible){let ne=A(C,Y,I,O);C.onBeforeShadow(i,C,v,S,D,ne,null),i.renderBufferDirect(S,null,D,ne,C,null),C.onAfterShadow(i,C,v,S,D,ne,null)}}let J=C.children;for(let D=0,Y=J.length;D<Y;D++)E(J[D],v,S,I,P,O)}l(E,"renderObject");function R(C){C.target.removeEventListener("dispose",R);for(let S in u){let I=u[S],P=C.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}l(R,"onMaterialDispose")}l(vw,"WebGLShadowMap");function yw(i,e){function t(){let L=!1,le=new wt,te=null,ye=new wt(0,0,0,0);return{setMask:l(function(ge){te!==ge&&!L&&(i.colorMask(ge,ge,ge,ge),te=ge)},"setMask"),setLocked:l(function(ge){L=ge},"setLocked"),setClear:l(function(ge,_e,Fe,$e,me){me===!0&&(ge*=$e,_e*=$e,Fe*=$e),le.set(ge,_e,Fe,$e),ye.equals(le)===!1&&(i.clearColor(ge,_e,Fe,$e),ye.copy(le))},"setClear"),reset:l(function(){L=!1,te=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let L=!1,le=!1,te=null,ye=null,ge=null;return{setReversed:l(function(_e){if(le!==_e){let Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),le=_e;let $e=ge;ge=null,this.setClear($e)}},"setReversed"),getReversed:l(function(){return le},"getReversed"),setTest:l(function(_e){_e?re(i.DEPTH_TEST):Re(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){te!==_e&&!L&&(i.depthMask(_e),te=_e)},"setMask"),setFunc:l(function(_e){if(le&&(_e=q0[_e]),ye!==_e){switch(_e){case ec:i.depthFunc(i.NEVER);break;case tc:i.depthFunc(i.ALWAYS);break;case nc:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case ic:i.depthFunc(i.EQUAL);break;case rc:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){L=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,le&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){L=!1,te=null,ye=null,ge=null,le=!1},"reset")}}l(n,"DepthBuffer");function r(){let L=!1,le=null,te=null,ye=null,ge=null,_e=null,Fe=null,$e=null,me=null;return{setTest:l(function(Be){L||(Be?re(i.STENCIL_TEST):Re(i.STENCIL_TEST))},"setTest"),setMask:l(function(Be){le!==Be&&!L&&(i.stencilMask(Be),le=Be)},"setMask"),setFunc:l(function(Be,Ye,Ae){(te!==Be||ye!==Ye||ge!==Ae)&&(i.stencilFunc(Be,Ye,Ae),te=Be,ye=Ye,ge=Ae)},"setFunc"),setOp:l(function(Be,Ye,Ae){(_e!==Be||Fe!==Ye||$e!==Ae)&&(i.stencilOp(Be,Ye,Ae),_e=Be,Fe=Ye,$e=Ae)},"setOp"),setLocked:l(function(Be){L=Be},"setLocked"),setClear:l(function(Be){me!==Be&&(i.clearStencil(Be),me=Be)},"setClear"),reset:l(function(){L=!1,le=null,te=null,ye=null,ge=null,_e=null,Fe=null,$e=null,me=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},f={},d={},p=new WeakMap,g=[],y=null,x=!1,_=null,w=null,A=null,E=null,R=null,C=null,v=null,S=new Oe(0,0,0),I=0,P=!1,O=null,k=null,J=null,D=null,Y=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,K=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=K>=1):N.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=K>=2);let V=null,z={},oe=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),q=new wt().fromArray(oe),he=new wt().fromArray(ue);function ee(L,le,te,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(L,_e),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<te;Fe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(le+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(ee,"createTexture");let ce={};ce[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Ks),St(!1),lt(sd),re(i.CULL_FACE),Qe(Qr);function re(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}l(re,"enable");function Re(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}l(Re,"disable");function ke(L,le){return d[L]!==le?(i.bindFramebuffer(L,le),d[L]=le,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}l(ke,"bindFramebuffer");function Pe(L,le){let te=g,ye=!1;if(L){te=p.get(le),te===void 0&&(te=[],p.set(le,te));let ge=L.textures;if(te.length!==ge.length||te[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Fe=ge.length;_e<Fe;_e++)te[_e]=i.COLOR_ATTACHMENT0+_e;te.length=ge.length,ye=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ye=!0);ye&&i.drawBuffers(te)}l(Pe,"drawBuffers");function Je(L){return y!==L?(i.useProgram(L),y=L,!0):!1}l(Je,"useProgram");let Ke={[es]:i.FUNC_ADD,[m0]:i.FUNC_SUBTRACT,[g0]:i.FUNC_REVERSE_SUBTRACT};Ke[x0]=i.MIN,Ke[_0]=i.MAX;let Xe={[v0]:i.ZERO,[y0]:i.ONE,[b0]:i.SRC_COLOR,[cd]:i.SRC_ALPHA,[T0]:i.SRC_ALPHA_SATURATE,[E0]:i.DST_COLOR,[S0]:i.DST_ALPHA,[M0]:i.ONE_MINUS_SRC_COLOR,[ud]:i.ONE_MINUS_SRC_ALPHA,[A0]:i.ONE_MINUS_DST_COLOR,[w0]:i.ONE_MINUS_DST_ALPHA,[C0]:i.CONSTANT_COLOR,[R0]:i.ONE_MINUS_CONSTANT_COLOR,[P0]:i.CONSTANT_ALPHA,[I0]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,le,te,ye,ge,_e,Fe,$e,me,Be){if(L===Qr){x===!0&&(Re(i.BLEND),x=!1);return}if(x===!1&&(re(i.BLEND),x=!0),L!==p0){if(L!==_||Be!==P){if((w!==es||R!==es)&&(i.blendEquation(i.FUNC_ADD),w=es,R=es),Be)switch(L){case la:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.ONE,i.ONE);break;case od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ld:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",L);break}else switch(L){case la:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case od:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ld:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",L);break}A=null,E=null,C=null,v=null,S.set(0,0,0),I=0,_=L,P=Be}return}ge=ge||le,_e=_e||te,Fe=Fe||ye,(le!==w||ge!==R)&&(i.blendEquationSeparate(Ke[le],Ke[ge]),w=le,R=ge),(te!==A||ye!==E||_e!==C||Fe!==v)&&(i.blendFuncSeparate(Xe[te],Xe[ye],Xe[_e],Xe[Fe]),A=te,E=ye,C=_e,v=Fe),($e.equals(S)===!1||me!==I)&&(i.blendColor($e.r,$e.g,$e.b,me),S.copy($e),I=me),_=L,P=!1}l(Qe,"setBlending");function dt(L,le){L.side===Ei?Re(i.CULL_FACE):re(i.CULL_FACE);let te=L.side===_n;le&&(te=!te),St(te),L.blending===la&&L.transparent===!1?Qe(Qr):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let ye=L.stencilWrite;o.setTest(ye),ye&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}l(dt,"setMaterial");function St(L){O!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),O=L)}l(St,"setFlipSided");function lt(L){L!==d0?(re(i.CULL_FACE),L!==k&&(L===sd?i.cullFace(i.BACK):L===f0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),k=L}l(lt,"setCullFace");function Pt(L){L!==J&&(U&&i.lineWidth(L),J=L)}l(Pt,"setLineWidth");function at(L,le,te){L?(re(i.POLYGON_OFFSET_FILL),(D!==le||Y!==te)&&(D=le,Y=te,a.getReversed()&&(le=-le,te=-te),i.polygonOffset(le,te))):Re(i.POLYGON_OFFSET_FILL)}l(at,"setPolygonOffset");function It(L){L?re(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}l(It,"setScissorTest");function st(L){L===void 0&&(L=i.TEXTURE0+ne-1),V!==L&&(i.activeTexture(L),V=L)}l(st,"activeTexture");function Lt(L,le,te){te===void 0&&(V===null?te=i.TEXTURE0+ne-1:te=V);let ye=z[te];ye===void 0&&(ye={type:void 0,texture:void 0},z[te]=ye),(ye.type!==L||ye.texture!==le)&&(V!==te&&(i.activeTexture(te),V=te),i.bindTexture(L,le||ce[L]),ye.type=L,ye.texture=le)}l(Lt,"bindTexture");function B(){let L=z[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}l(B,"unbindTexture");function Tt(){try{i.compressedTexImage2D(...arguments)}catch(L){He("WebGLState:",L)}}l(Tt,"compressedTexImage2D");function ct(){try{i.compressedTexImage3D(...arguments)}catch(L){He("WebGLState:",L)}}l(ct,"compressedTexImage3D");function et(){try{i.texSubImage2D(...arguments)}catch(L){He("WebGLState:",L)}}l(et,"texSubImage2D");function pe(){try{i.texSubImage3D(...arguments)}catch(L){He("WebGLState:",L)}}l(pe,"texSubImage3D");function xt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){He("WebGLState:",L)}}l(xt,"compressedTexSubImage2D");function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(L){He("WebGLState:",L)}}l(Ue,"compressedTexSubImage3D");function Ge(){try{i.texStorage2D(...arguments)}catch(L){He("WebGLState:",L)}}l(Ge,"texStorage2D");function T(){try{i.texStorage3D(...arguments)}catch(L){He("WebGLState:",L)}}l(T,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(L){He("WebGLState:",L)}}l(b,"texImage2D");function H(){try{i.texImage3D(...arguments)}catch(L){He("WebGLState:",L)}}l(H,"texImage3D");function fe(L){return f[L]!==void 0?f[L]:i.getParameter(L)}l(fe,"getParameter");function se(L,le){f[L]!==le&&(i.pixelStorei(L,le),f[L]=le)}l(se,"pixelStorei");function xe(L){q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),q.copy(L))}l(xe,"scissor");function Me(L){he.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),he.copy(L))}l(Me,"viewport");function ie(L,le){let te=u.get(le);te===void 0&&(te=new WeakMap,u.set(le,te));let ye=te.get(L);ye===void 0&&(ye=i.getUniformBlockIndex(le,L.name),i.uniformBlockBinding(le,ye,ye),te.set(L,ye))}l(ie,"updateUBOMapping");function ae(L,le,te){let ge=u.get(le).get(L);c[ge]!==te&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,te),c[ge]=te)}l(ae,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},V=null,z={},d={},c={},p=new WeakMap,g=[],y=null,x=!1,_=null,w=null,A=null,E=null,R=null,C=null,v=null,S=new Oe(0,0,0),I=0,P=!1,O=null,k=null,J=null,D=null,Y=null,q.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Re,bindFramebuffer:ke,drawBuffers:Pe,useProgram:Je,setBlending:Qe,setMaterial:dt,setFlipSided:St,setCullFace:lt,setLineWidth:Pt,setPolygonOffset:at,setScissorTest:It,activeTexture:st,bindTexture:Lt,unbindTexture:B,compressedTexImage2D:Tt,compressedTexImage3D:ct,texImage2D:b,texImage3D:H,pixelStorei:se,getParameter:fe,updateUBOMapping:ie,uniformBlockBinding:ae,texStorage2D:Ge,texStorage3D:T,texSubImage2D:et,texSubImage3D:pe,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ue,scissor:xe,viewport:Me,reset:ve}}l(yw,"WebGLState");function bw(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,h=new WeakMap,f=new Set,d,p=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return x?new OffscreenCanvas(T,b):to("canvas")}l(_,"createCanvas");function w(T,b,H){let fe=1,se=Ge(T);if((se.width>H||se.height>H)&&(fe=H/Math.max(se.width,se.height)),fe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let xe=Math.floor(fe*se.width),Me=Math.floor(fe*se.height);d===void 0&&(d=_(xe,Me));let ie=b?_(xe,Me):d;return ie.width=xe,ie.height=Me,ie.getContext("2d").drawImage(T,0,0,xe,Me),Ve("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+Me+")."),ie}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}l(w,"resizeImage");function A(T){return T.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function E(T){i.generateMipmap(T)}l(E,"generateMipmap");function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function C(T,b,H,fe,se,xe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=b;if(b===i.RED&&(H===i.FLOAT&&(ie=i.R32F),H===i.HALF_FLOAT&&(ie=i.R16F),H===i.UNSIGNED_BYTE&&(ie=i.R8),H===i.UNSIGNED_SHORT&&Me&&(ie=Me.R16_EXT),H===i.SHORT&&Me&&(ie=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.R8UI),H===i.UNSIGNED_SHORT&&(ie=i.R16UI),H===i.UNSIGNED_INT&&(ie=i.R32UI),H===i.BYTE&&(ie=i.R8I),H===i.SHORT&&(ie=i.R16I),H===i.INT&&(ie=i.R32I)),b===i.RG&&(H===i.FLOAT&&(ie=i.RG32F),H===i.HALF_FLOAT&&(ie=i.RG16F),H===i.UNSIGNED_BYTE&&(ie=i.RG8),H===i.UNSIGNED_SHORT&&Me&&(ie=Me.RG16_EXT),H===i.SHORT&&Me&&(ie=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RG8UI),H===i.UNSIGNED_SHORT&&(ie=i.RG16UI),H===i.UNSIGNED_INT&&(ie=i.RG32UI),H===i.BYTE&&(ie=i.RG8I),H===i.SHORT&&(ie=i.RG16I),H===i.INT&&(ie=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),H===i.UNSIGNED_INT&&(ie=i.RGB32UI),H===i.BYTE&&(ie=i.RGB8I),H===i.SHORT&&(ie=i.RGB16I),H===i.INT&&(ie=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),H===i.UNSIGNED_INT&&(ie=i.RGBA32UI),H===i.BYTE&&(ie=i.RGBA8I),H===i.SHORT&&(ie=i.RGBA16I),H===i.INT&&(ie=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&Me&&(ie=Me.RGB16_EXT),H===i.SHORT&&Me&&(ie=Me.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),b===i.RGBA){let ae=xe?eo:it.getTransfer(se);H===i.FLOAT&&(ie=i.RGBA32F),H===i.HALF_FLOAT&&(ie=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ie=ae===ft?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Me&&(ie=Me.RGBA16_EXT),H===i.SHORT&&Me&&(ie=Me.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}l(C,"getInternalFormat");function v(T,b){let H;return T?b===null||b===ni||b===ns?H=i.DEPTH24_STENCIL8:b===ii?H=i.DEPTH32F_STENCIL8:b===ua&&(H=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ni||b===ns?H=i.DEPTH_COMPONENT24:b===ii?H=i.DEPTH_COMPONENT32F:b===ua&&(H=i.DEPTH_COMPONENT16),H}l(v,"getInternalDepthFormat");function S(T,b){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==Ot?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}l(S,"getMipLevels");function I(T){let b=new WeakRef(T);n.get(T).__ref=b,g.add(b),y.register(T,b,b)}l(I,"track");function P(T){let b=n.get(T).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}l(P,"untrack");function O(T){J(T.target)}l(O,"onTextureDispose");function k(T){D(T.target)}l(k,"onRenderTargetDispose");function J(T){T.removeEventListener("dispose",O),P(T),ne(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}l(J,"destroyTexture");function D(T){T.removeEventListener("dispose",k),P(T),K(T)}l(D,"destroyRenderTarget");function Y(){for(let T of g){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):J(b))}g.clear(),f.clear()}l(Y,"dispose");function ne(T){let b=n.get(T);if(b.__webglInit===void 0)return;let H=T.source,fe=p.get(H);if(fe){let se=fe[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(T),Object.keys(fe).length===0&&p.delete(H)}n.remove(T)}l(ne,"deallocateTexture");function U(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let H=T.source,fe=p.get(H);delete fe[b.__cacheKey],a.memory.textures--}l(U,"deleteTexture");function K(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=T.depthTexture;if(H&&H.renderTarget===T&&J(H),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let xe=0;xe<b.__webglFramebuffer[se].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[se][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=T.textures;for(let se=0,xe=fe.length;se<xe;se++){let Me=n.get(fe[se]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[se])}n.remove(T)}l(K,"deallocateRenderTarget");let N=0;function V(){N=0}l(V,"resetTextureUnits");function z(){return N}l(z,"getTextureUnits");function oe(T){N=T}l(oe,"setTextureUnits");function ue(){let T=N;return T>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,T}l(ue,"allocateTextureUnit");function q(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}l(q,"getTextureCacheKey");function he(T,b){let H=n.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){let fe=T.image;if(fe===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,T,b);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}l(he,"setTexture2D");function ee(T,b){let H=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){dt(H,T,b);return}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}l(ee,"setTexture2DArray");function ce(T,b){let H=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){dt(H,T,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}l(ce,"setTexture3D");function re(T,b){let H=n.get(T);if(T.version>0&&H.__version!==T.version){St(H,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}l(re,"setTextureCube");let Re={[xi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},ke={[Ft]:i.NEAREST,[N0]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Jc]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Pe={[B0]:i.NEVER,[Cd]:i.ALWAYS,[z0]:i.LESS,[Ad]:i.LEQUAL,[k0]:i.EQUAL,[Td]:i.GEQUAL,[G0]:i.GREATER,[V0]:i.NOTEQUAL};function Je(T,b){if(b.type===ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ot||b.magFilter===Jc||b.magFilter===Mo||b.magFilter===Pn||b.minFilter===Ot||b.minFilter===Jc||b.minFilter===Mo||b.minFilter===Pn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Re[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Re[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Re[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ke[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ke[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ft||b.minFilter!==Mo&&b.minFilter!==Pn||b.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(Je,"setTextureParameters");function Ke(T,b){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",O),I(b));let fe=b.source,se=p.get(fe);se===void 0&&(se={},p.set(fe,se));let xe=q(b);if(xe!==T.__cacheKey){se[xe]===void 0&&(se[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[xe].usedTimes++;let Me=se[T.__cacheKey];Me!==void 0&&(se[T.__cacheKey].usedTimes--,Me.usedTimes===0&&U(b)),T.__cacheKey=xe,T.__webglTexture=se[xe].texture}return H}l(Ke,"initTexture");function Xe(T,b,H){return Math.floor(Math.floor(T/H)/b)}l(Xe,"getRow");function Qe(T,b,H,fe){let xe=T.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,fe,b.data);else{xe.sort((L,le)=>L.start-le.start);let Me=0;for(let L=1;L<xe.length;L++){let le=xe[Me],te=xe[L],ye=le.start+le.count,ge=Xe(te.start,b.width,4),_e=Xe(le.start,b.width,4);te.start<=ye+1&&ge===_e&&Xe(te.start+te.count-1,b.width,4)===ge?le.count=Math.max(le.count,te.start+te.count-le.start):(++Me,xe[Me]=te)}xe.length=Me+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,le=xe.length;L<le;L++){let te=xe[L],ye=Math.floor(te.start/4),ge=Math.ceil(te.count/4),_e=ye%b.width,Fe=Math.floor(ye/b.width),$e=ge,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Fe,$e,me,H,fe,b.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(Qe,"updateTexture");function dt(T,b,H){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let se=Ke(T,b),xe=b.source;t.bindTexture(fe,T.__webglTexture,i.TEXTURE0+H);let Me=n.get(xe);if(xe.version!==Me.__version||se===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let me=it.getPrimaries(it.workingColorSpace),Be=b.colorSpace===ri?null:it.getPrimaries(b.colorSpace),Ye=b.colorSpace===ri||me===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ae=w(b.image,!1,r.maxTextureSize);ae=Ue(b,ae);let ve=s.convert(b.format,b.colorSpace),L=s.convert(b.type),le=C(b.internalFormat,ve,L,b.normalized,b.colorSpace,b.isVideoTexture);Je(fe,b);let te,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||se===!0,Fe=xe.dataReady,$e=S(b,ae);if(b.isDepthTexture)le=v(b.format===Ki,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,le,ae.width,ae.height,0,ve,L,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,$e,le,ye[0].width,ye[0].height);for(let me=0,Be=ye.length;me<Be;me++)te=ye[me],ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,te.width,te.height,ve,L,te.data):t.texImage2D(i.TEXTURE_2D,me,le,te.width,te.height,0,ve,L,te.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,$e,le,ae.width,ae.height),Fe&&Qe(b,ae,ve,L)):t.texImage2D(i.TEXTURE_2D,0,le,ae.width,ae.height,0,ve,L,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,le,ye[0].width,ye[0].height,ae.depth);for(let me=0,Be=ye.length;me<Be;me++)if(te=ye[me],b.format!==Ln)if(ve!==null)if(ge){if(Fe)if(b.layerUpdates.size>0){let Ye=Nd(te.width,te.height,b.format,b.type);for(let Ae of b.layerUpdates){let pt=te.data.subarray(Ae*Ye/te.data.BYTES_PER_ELEMENT,(Ae+1)*Ye/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ae,te.width,te.height,1,ve,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,te.width,te.height,ae.depth,ve,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,le,te.width,te.height,ae.depth,0,te.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,te.width,te.height,ae.depth,ve,L,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,le,te.width,te.height,ae.depth,0,ve,L,te.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,$e,le,ye[0].width,ye[0].height);for(let me=0,Be=ye.length;me<Be;me++)te=ye[me],b.format!==Ln?ve!==null?ge?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,te.width,te.height,ve,te.data):t.compressedTexImage2D(i.TEXTURE_2D,me,le,te.width,te.height,0,te.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,te.width,te.height,ve,L,te.data):t.texImage2D(i.TEXTURE_2D,me,le,te.width,te.height,0,ve,L,te.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,le,ae.width,ae.height,ae.depth),Fe)if(b.layerUpdates.size>0){let me=Nd(ae.width,ae.height,b.format,b.type);for(let Be of b.layerUpdates){let Ye=ae.data.subarray(Be*me/ae.data.BYTES_PER_ELEMENT,(Be+1)*me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ae.width,ae.height,1,ve,L,Ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,L,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,ve,L,ae.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,$e,le,ae.width,ae.height,ae.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,L,ae.data)):t.texImage3D(i.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,ve,L,ae.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,$e,le,ae.width,ae.height);else{let me=ae.width,Be=ae.height;for(let Ye=0;Ye<$e;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,le,me,Be,0,ve,L,null),me>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ae.parentNode!==me){me.appendChild(ae),f.add(b),me.onpaint=Be=>{let Ye=Be.changedElements;for(let Ae of f)Ye.includes(Ae.image)&&(Ae.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Ye=i.RGBA,Ae=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ye,Ae,pt,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let me=Ge(ye[0]);t.texStorage2D(i.TEXTURE_2D,$e,le,me.width,me.height)}for(let me=0,Be=ye.length;me<Be;me++)te=ye[me],ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ve,L,te):t.texImage2D(i.TEXTURE_2D,me,le,ve,L,te);b.generateMipmaps=!1}else if(ge){if(_e){let me=Ge(ae);t.texStorage2D(i.TEXTURE_2D,$e,le,me.width,me.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,L,ae)}else t.texImage2D(i.TEXTURE_2D,0,le,ve,L,ae);A(b)&&b.mipmapsAutoUpdate===!0&&E(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(dt,"uploadTexture");function St(T,b,H){if(b.image.length!==6)return;let fe=Ke(T,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);let xe=n.get(se);if(se.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+H);let Me=it.getPrimaries(it.workingColorSpace),ie=b.colorSpace===ri?null:it.getPrimaries(b.colorSpace),ae=b.colorSpace===ri||Me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!ve&&!L?le[Ae]=w(b.image[Ae],!0,r.maxCubemapSize):le[Ae]=L?b.image[Ae].image:b.image[Ae],le[Ae]=Ue(b,le[Ae]);let te=le[0],ye=s.convert(b.format,b.colorSpace),ge=s.convert(b.type),_e=C(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Fe=b.isVideoTexture!==!0,$e=xe.__version===void 0||fe===!0,me=se.dataReady,Be=S(b,te);Je(i.TEXTURE_CUBE_MAP,b);let Ye;if(b.isDepthTexture){if(_e=v(b.format===Ki,b.type),$e)if(Fe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,te.width,te.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,te.width,te.height,0,ye,ge,null)}else if(ve){Fe&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,te.width,te.height);for(let Ae=0;Ae<6;Ae++){Ye=le[Ae].mipmaps;for(let pt=0;pt<Ye.length;pt++){let Ht=Ye[pt];b.format!==Ln?ye!==null?Fe?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt,0,0,Ht.width,Ht.height,ye,Ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt,_e,Ht.width,Ht.height,0,Ht.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt,0,0,Ht.width,Ht.height,ye,ge,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt,_e,Ht.width,Ht.height,0,ye,ge,Ht.data)}}}else{if(Ye=b.mipmaps,Fe&&$e){Ye.length>0&&Be++;let Ae=Ge(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(L){Fe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,ye,ge,le[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,le[Ae].width,le[Ae].height,0,ye,ge,le[Ae].data);for(let pt=0;pt<Ye.length;pt++){let cr=Ye[pt].image[Ae].image;Fe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt+1,0,0,cr.width,cr.height,ye,ge,cr.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt+1,_e,cr.width,cr.height,0,ye,ge,cr.data)}}else{Fe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ye,ge,le[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ye,ge,le[Ae]);for(let pt=0;pt<Ye.length;pt++){let Ht=Ye[pt];Fe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt+1,0,0,ye,ge,Ht.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,pt+1,_e,ye,ge,Ht.image[Ae])}}}A(b)&&b.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),xe.__version=se.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(St,"uploadCubeTexture");function lt(T,b,H,fe,se,xe){let Me=s.convert(H.format,H.colorSpace),ie=s.convert(H.type),ae=C(H.internalFormat,Me,ie,H.normalized,H.colorSpace),ve=n.get(b),L=n.get(H);if(L.__renderTarget=b,!ve.__hasExternalTextures){let le=Math.max(1,b.width>>xe),te=Math.max(1,b.height>>xe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,xe,ae,le,te,b.depth,0,Me,ie,null):t.texImage2D(se,xe,ae,le,te,0,Me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),pe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,se,L.__webglTexture,0,et(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,se,L.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(lt,"setupFrameBufferTexture");function Pt(T,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let fe=b.depthTexture,se=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,se),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),xe,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let fe=b.textures;for(let se=0;se<fe.length;se++){let xe=fe[se],Me=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),ae=C(xe.internalFormat,Me,ie,xe.normalized,xe.colorSpace);pe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),ae,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Pt,"setupRenderBufferStorage");function at(T,b,H){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(b.depthTexture);se.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!se.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?re(b.depthTexture,0):he(b.depthTexture,0);let Me=se.__webglTexture,ie=et(b),ae=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ve=b.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Yi)pe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ae,Me,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ae,Me,0);else if(b.depthTexture.format===Ki)pe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ae,Me,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ae,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(at,"setupDepthTexture");function It(T){let b=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let fe=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let se=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",se)},"disposeEvent");fe.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=fe}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let fe=0;fe<6;fe++)at(b.__webglFramebuffer[fe],T,fe);else T.texture.mipmaps.length>0?at(b.__webglFramebuffer[0],T,0):at(b.__webglFramebuffer,T,0);else if(H){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Pt(b.__webglDepthbuffer[fe],T,!1);else{let se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pt(b.__webglDepthbuffer,T,!1);else{let se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(It,"setupDepthRenderbuffer");function st(T,b,H){let fe=n.get(T);b!==void 0&&lt(fe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&It(T)}l(st,"rebindTextures");function Lt(T){let b=T.texture,H=n.get(T),fe=n.get(b);T.addEventListener("dispose",k),I(T);let se=T.textures,xe=T.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){H.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps.length>0){H.__webglFramebuffer[ie]=[];for(let ae=0;ae<b.mipmaps.length;ae++)H.__webglFramebuffer[ie][ae]=i.createFramebuffer()}else H.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)H.__webglFramebuffer[ie]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ie=0,ae=se.length;ie<ae;ie++){let ve=n.get(se[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&pe(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ie=0;ie<se.length;ie++){let ae=se[ie];H.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ie]);let ve=s.convert(ae.format,ae.colorSpace),L=s.convert(ae.type),le=C(ae.internalFormat,ve,L,ae.normalized,ae.colorSpace,T.isXRRenderTarget===!0),te=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,H.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Je(i.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)lt(H.__webglFramebuffer[ie][ae],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else lt(H.__webglFramebuffer[ie],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);A(b)?E(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let ie=0,ae=se.length;ie<ae;ie++){let ve=se[ie],L=n.get(ve),le=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,L.__webglTexture),Je(le,ve),lt(H.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+ie,le,0),A(ve)&&E(le)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,fe.__webglTexture),Je(ie,b),b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)lt(H.__webglFramebuffer[ae],T,b,i.COLOR_ATTACHMENT0,ie,ae);else lt(H.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,ie,0);A(b)?E(ie):b.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&It(T)}l(Lt,"setupRenderTarget");function B(T){let b=T.textures;for(let H=0,fe=b.length;H<fe;H++){let se=b[H];if(A(se)&&se.mipmapsAutoUpdate===!0){let xe=R(T),Me=n.get(se).__webglTexture;t.bindTexture(xe,Me),E(xe),t.unbindTexture()}}}l(B,"updateRenderTargetMipmap");let Tt=[];function ct(T){if(T.samples>0){if(pe(T)===!1){let b=T.textures,H=T.width,fe=T.height,se=i.COLOR_BUFFER_BIT,xe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),ie=b.length>1;if(ie)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let L=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,H,fe,0,0,H,fe,se,i.NEAREST),c===!0&&(Tt.length=0,Tt.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Tt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let L=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(ct,"updateMultisampleRenderTarget");function et(T){return Math.min(r.maxSamples,T.samples)}l(et,"getRenderTargetSamples");function pe(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(pe,"useMultisampledRTT");function xt(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}l(xt,"updateVideoTexture");function Ue(T,b){let H=T.colorSpace,fe=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Qa&&H!==ri&&(it.getTransfer(H)===ft?(fe!==Ln||se!==rn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),b}l(Ue,"verifyColorSpace");function Ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}l(Ge,"getDimensions"),this.allocateTextureUnit=ue,this.resetTextureUnits=V,this.getTextureUnits=z,this.setTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=re,this.rebindTextures=st,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=pe,this.dispose=Y}l(bw,"WebGLTextures");function Mw(i,e){function t(n,r=ri){let s,a=it.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Md)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return i.BYTE;if(n===yd)return i.SHORT;if(n===ua)return i.UNSIGNED_SHORT;if(n===Kc)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Sd)return i.ALPHA;if(n===wd)return i.RGB;if(n===Ln)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Ed)return i.RED;if(n===eu)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===tu)return i.RG_INTEGER;if(n===nu)return i.RGBA_INTEGER;if(n===So||n===wo||n===Eo||n===Ao)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===ru||n===su||n===au)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===lu||n===cu||n===uu||n===hu||n===To||n===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ou||n===lu)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===uu)return s.COMPRESSED_R11_EAC;if(n===hu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===To)return s.COMPRESSED_RG11_EAC;if(n===du)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fu||n===pu||n===mu||n===gu||n===xu||n===_u||n===vu||n===yu||n===bu||n===Mu||n===Su||n===wu||n===Eu||n===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_u)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tu||n===Cu||n===Ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tu)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pu||n===Iu||n===Co||n===Lu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(Mw,"WebGLUtils");var Sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
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

}`,fp=class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:Sw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(fp,"WebXRDepthSensing");var rp=fp,pp=class pp extends _i{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",x=new rp,_={},w=t.getContextAttributes(),A=null,E=null,R=[],C=[],v=new ze,S=null,I=null,P=new fn;P.viewport=new wt;let O=new fn;O.viewport=new wt;let k=[P,O],J=new Pc,D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=R[q];return he===void 0&&(he=new ta,R[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=R[q];return he===void 0&&(he=new ta,R[q]=he),he.getGripSpace()},this.getHand=function(q){let he=R[q];return he===void 0&&(he=new ta,R[q]=he),he.getHandSpace()};function ne(q){let he=C.indexOf(q.inputSource);if(he===-1)return;let ee=R[he];ee!==void 0&&(ee.update(q.inputSource,q.frame,u||a),ee.dispatchEvent({type:q.type,data:q.inputSource}))}l(ne,"onSessionEvent");function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let q=0;q<R.length;q++){let he=C[q];he!==null&&(C[q]=null,R[q].disconnect(he))}D=null,Y=null,x.reset();for(let q in _)delete _[q];if(e.setRenderTarget(A),p=null,d=null,f=null,r=null,E=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),I!==null){let q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}l(U,"onSessionEnd"),this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,ce=null,re=null;w.depth&&(re=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=w.stencil?Ki:Yi,ce=w.stencil?ns:ni);let Re={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Tn(d.textureWidth,d.textureHeight,{format:Ln,type:rn,depthTexture:new Ji(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ee={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(q){for(let he=0;he<q.removed.length;he++){let ee=q.removed[he],ce=C.indexOf(ee);ce>=0&&(C[ce]=null,R[ce].disconnect(ee))}for(let he=0;he<q.added.length;he++){let ee=q.added[he],ce=C.indexOf(ee);if(ce===-1){for(let Re=0;Re<R.length;Re++)if(Re>=C.length){C.push(ee),ce=Re;break}else if(C[Re]===null){C[Re]=ee,ce=Re;break}if(ce===-1)break}let re=R[ce];re&&re.connect(ee)}}l(K,"onInputSourcesChange");function N(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}l(N,"updateCamera"),this.updateCamera=function(q){if(r===null)return;let he=q.near,ee=q.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(ee=x.depthFar)),J.near=O.near=P.near=he,J.far=O.far=P.far=ee,(D!==J.near||Y!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),D=J.near,Y=J.far),J.layers.mask=q.layers.mask|6,P.layers.mask=J.layers.mask&-5,O.layers.mask=J.layers.mask&-3;let ce=q.parent,re=J.cameras;N(J,ce);for(let Re=0;Re<re.length;Re++)N(re[Re],ce);J.projectionMatrix.copy(P.projectionMatrix),J.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),V(q,J,ce)};function V(q,he,ee){ee===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}l(V,"updateUserCamera"),this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(q){return _[q]};let z=null;function oe(q,he){if(h=he.getViewerPose(u||a),g=he,h!==null){let ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ce=!1;ee.length!==J.cameras.length&&(J.cameras.length=0,ce=!0);for(let Pe=0;Pe<ee.length;Pe++){let Je=ee[Pe],Ke=null;if(p!==null)Ke=p.getViewport(Je);else{let Qe=f.getViewSubImage(d,Je);Ke=Qe.viewport,Pe===0&&(e.setRenderTargetTextures(E,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(E))}let Xe=k[Pe];Xe===void 0&&(Xe=new fn,Xe.layers.enable(Pe),Xe.viewport=new wt,k[Pe]=Xe),Xe.matrix.fromArray(Je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Pe===0&&(J.matrix.copy(Xe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ce===!0&&J.cameras.push(Xe)}let re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Pe=f.getDepthInformation(ee[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,r.renderState)}if(re&&re.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Pe=0;Pe<ee.length;Pe++){let Je=ee[Pe].camera;if(Je){let Ke=_[Je];Ke||(Ke=new ho,_[Je]=Ke);let Xe=f.getCameraImage(Je);Ke.sourceTexture=Xe}}}}for(let ee=0;ee<R.length;ee++){let ce=C[ee],re=R[ee];ce!==null&&re!==void 0&&re.update(ce,he,u||a)}z&&z(q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}l(oe,"onAnimationFrame");let ue=new bg;ue.setAnimationLoop(oe),this.setAnimationLoop=function(q){z=q},this.dispose=function(){}}};l(pp,"WebXRManager");var sp=pp,Ew=new mt,Ig=new We;Ig.set(-1,0,0,0,1,0,0,0,1);function Aw(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,Id(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function r(x,_,w,A,E){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),f(x,_)):_.isMeshPhongMaterial?(s(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),d(x,_),_.isMeshPhysicalMaterial&&p(x,_,E)):_.isMeshMatcapMaterial?(s(x,_),g(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),y(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,w,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===_n&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===_n&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let w=e.get(_),A=w.envMap,E=w.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ig),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(s,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,w,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*w,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(f,"refreshUniformsToon");function d(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(d,"refreshUniformsStandard");function p(x,_,w){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===_n&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let w=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(Aw,"WebGLMaterials");function Tw(i,e,t,n){let r={},s={};function a(w,A){let E=A.program;n.uniformBlockBinding(w,E,r[w.id])}l(a,"bind");function o(w,A){let E=r[w.id];E===void 0&&(g(w),E=c(w),r[w.id]=E,w.addEventListener("dispose",x));let R=A.program;n.updateUBOMapping(w,R);let C=e.render.frame;s[w.id]!==C&&(u(w),s[w.id]=C)}l(o,"update");function c(w){let A=i.createBuffer(),E=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(w){let A=r[w.id],E=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=E.length;C<v;C++){let S=E[C];if(Array.isArray(S))for(let I=0,P=S.length;I<P;I++)h(S[I],C,I,R);else h(S,C,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(w,A,E,R){if(d(w,A,E,R)===!0){let C=w.__offset,v=w.value;if(Array.isArray(v)){let S=0;for(let I=0;I<v.length;I++){let P=v[I],O=y(P,!0);f(P,w.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,w.__data)}}l(h,"updateUniform");function f(w,A,E){typeof w=="number"||typeof w=="boolean"?A[E]=w:w.isMatrix3?(A[E]=w.elements[0],A[E+1]=w.elements[1],A[E+2]=w.elements[2],A[E+3]=0,A[E+4]=w.elements[3],A[E+5]=w.elements[4],A[E+6]=w.elements[5],A[E+7]=0,A[E+8]=w.elements[6],A[E+9]=w.elements[7],A[E+10]=w.elements[8],A[E+11]=0):ArrayBuffer.isView(w)?A.set(w.subarray(0,A.length-E),E):w.toArray(A,E)}l(f,"writeUniformValue");function d(w,A,E,R){let C=w.value,v=A+"_"+E;if(Array.isArray(C)){R[v]===void 0&&(R[v]=[]);let S=R[v],I=!1;for(let P=0;P<C.length;P++)p(C[P],S,P)===!0&&(I=!0);return I}return p(C,R,v)}l(d,"hasUniformChanged");function p(w,A,E){if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:ArrayBuffer.isView(w)?A[E]=w.slice():A[E]=w.clone(),!0;{let R=A[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[E]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(R.equals(w)===!1)return R.copy(w),!0}}return!1}l(p,"hasValueChanged");function g(w){let A=w.uniforms,E=0,R=16;for(let v=0,S=A.length;v<S;v++){let I=Array.isArray(A[v])?A[v]:[A[v]];for(let P=0,O=I.length;P<O;P++){let k=I[P],J=Array.isArray(k.value)?k.value:[k.value],D=Array.isArray(A[v])||Array.isArray(k.value),Y=E;for(let U=0,K=J.length;U<K;U++){let N=J[U],V=y(N,D),z=E%R,oe=z%V.boundary,ue=z+oe;E+=oe,ue!==0&&R-ue<V.storage&&(E+=R-ue),U===0&&(Y=E),E+=V.storage}let ne=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new ne((E-Y)/Float32Array.BYTES_PER_ELEMENT),k.__offset=Y}}let C=E%R;return C>0&&(E+=R-C),w.__size=E,w.__cache={},this}l(g,"prepareUniformsGroup");function y(w,A){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=16,E.storage=48):w.isMatrix4?(E.boundary=16,E.storage=64):w.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(E.boundary=16,E.storage=w.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",w),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}l(y,"getUniformSize");function x(w){let A=w.target;A.removeEventListener("dispose",x),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let w in r)i.deleteBuffer(r[w]);r={},s={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(Tw,"WebGLUniformsGroups");var Cw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function Rw(){return Ci===null&&(Ci=new sa(Cw,16,16,Ti,In),Ci.name="DFG_LUT",Ci.minFilter=Ot,Ci.magFilter=Ot,Ci.wrapS=Wn,Ci.wrapT=Wn,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}l(Rw,"getDFGLUT");var mp=class mp{constructor(e={}){let{canvas:t=H0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,x=new Set([nu,tu,eu]),_=new Set([rn,ni,ua,ns,jc,Qc]),w=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},R=null,C=null,v=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,k=null,J=null,D=null,Y=null;this._outputColorSpace=Ut;let ne=0,U=0,K=null,N=-1,V=null,z=new wt,oe=new wt,ue=null,q=new Oe(0),he=0,ee=t.width,ce=t.height,re=1,Re=null,ke=null,Pe=new wt(0,0,ee,ce),Je=new wt(0,0,ee,ce),Ke=!1,Xe=new Mr,Qe=new mc,dt=!1,St=!1,lt=new mt,Pt=new X,at=new wt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Lt(){return K===null?re:1}l(Lt,"getTargetPixelRatio");let B=n;function Tt(M,F){return t.getContext(M,F)}l(Tt,"getContext");let ct,et,pe,xt,Ue,Ge,T,b,H,fe,se,xe,Me,ie,ae,ve,L,le,te,ye,ge,_e,Fe;try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),B===null){let F="webgl2";if(B=Tt(F,M),B===null)throw Tt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),He("WebGLRenderer: "+M.message),M}function $e(){ct=new kM(B),ct.init(),ge=new Mw(B,ct),et=new RM(B,ct,e,ge),pe=new yw(B,ct),et.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),J=B.createFramebuffer(),D=B.createFramebuffer(),Y=B.createFramebuffer(),xt=new HM(B),Ue=new aw,Ge=new bw(B,ct,pe,Ue,et,ge,xt),T=new zM(P),b=new Xv(B),_e=new TM(B,b),H=new GM(B,b,xt,_e),fe=new XM(B,H,b,_e,xt),le=new WM(B,et,Ge),ae=new PM(Ue),se=new sw(P,T,ct,et,_e,ae),xe=new Aw(P,Ue),Me=new lw,ie=new pw(ct),L=new AM(P,T,pe,fe,g,c),ve=new vw(P,fe,et),Fe=new Tw(B,xt,et,pe),te=new CM(B,ct,xt),ye=new VM(B,ct,xt),xt.programs=se.programs,P.capabilities=et,P.extensions=ct,P.properties=Ue,P.renderLists=Me,P.shadowMap=ve,P.state=pe,P.info=xt}l($e,"initGLContext"),y!==rn&&(I=new YM(y,t.width,t.height,o,r,s));let me=new sp(P,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(ee,ce,!1))},this.getSize=function(M){return M.set(ee,ce)},this.setSize=function(M,F,j=!0){if(me.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,ce=F,t.width=Math.floor(M*re),t.height=Math.floor(F*re),j===!0&&(t.style.width=M+"px",t.style.height=F+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ee*re,ce*re).floor()},this.setDrawingBufferSize=function(M,F,j){ee=M,ce=F,re=j,t.width=Math.floor(M*j),t.height=Math.floor(F*j),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(y===rn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,F,j,$){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,F,j,$),pe.viewport(z.copy(Pe).multiplyScalar(Lt()).round())},this.getScissor=function(M){return M.copy(Je)},this.setScissor=function(M,F,j,$){M.isVector4?Je.set(M.x,M.y,M.z,M.w):Je.set(M,F,j,$),pe.scissor(oe.copy(Je).multiplyScalar(Lt()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){pe.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){Re=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,j=!0){let $=0;if(M){let Z=!1;if(K!==null){let Se=K.texture.format;Z=x.has(Se)}if(Z){let Se=K.texture.type,Ie=_.has(Se),be=L.getClearColor(),Te=L.getClearAlpha(),Ne=be.r,qe=be.g,tt=be.b;Ie?(w[0]=Ne,w[1]=qe,w[2]=tt,w[3]=Te,B.clearBufferuiv(B.COLOR,0,w)):(A[0]=Ne,A[1]=qe,A[2]=tt,A[3]=Te,B.clearBufferiv(B.COLOR,0,A))}else $|=B.COLOR_BUFFER_BIT}F&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),L.dispose(),Me.dispose(),ie.dispose(),Ge.dispose(),Ue.dispose(),T.dispose(),fe.dispose(),H.dispose(),_e.dispose(),Fe.dispose(),se.dispose(),me.dispose(),me.removeEventListener("sessionstart",Sm),me.removeEventListener("sessionend",wm),Wr.stop()};function Be(M){M.preventDefault(),no("WebGLRenderer: Context Lost."),O=!0}l(Be,"onContextLost");function Ye(){no("WebGLRenderer: Context Restored."),O=!1;let M=xt.autoReset,F=ve.enabled,j=ve.autoUpdate,$=ve.needsUpdate,Z=ve.type;$e(),xt.autoReset=M,ve.enabled=F,ve.autoUpdate=j,ve.needsUpdate=$,ve.type=Z}l(Ye,"onContextRestore");function Ae(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Ae,"onContextCreationError");function pt(M){let F=M.target;F.removeEventListener("dispose",pt),Ht(F)}l(pt,"onMaterialDispose");function Ht(M){cr(M),Ue.remove(M)}l(Ht,"deallocateMaterial");function cr(M){let F=Ue.get(M).programs;F!==void 0&&(F.forEach(function(j){se.releaseProgram(j)}),M.isShaderMaterial&&se.releaseShaderCache(M))}l(cr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,F,j,$,Z,Se){F===null&&(F=It);let Ie=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,be=W_(M,F,j,$,Z);pe.setMaterial($,Ie);let Te=j.index,Ne=1;if($.wireframe===!0){if(Te=H.getWireframeAttribute(j),Te===void 0)return;Ne=2}let qe=j.drawRange,tt=j.attributes.position,Le=qe.start*Ne,nt=(qe.start+qe.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),nt=Math.min(nt,(Se.start+Se.count)*Ne)),Te!==null?(Le=Math.max(Le,0),nt=Math.min(nt,Te.count)):tt!=null&&(Le=Math.max(Le,0),nt=Math.min(nt,tt.count));let Dt=nt-Le;if(Dt<0||Dt===1/0)return;_e.setup(Z,$,be,j,Te);let _t,gt=te;if(Te!==null&&(_t=b.get(Te),gt=ye,gt.setIndex(_t)),Z.isMesh)$.wireframe===!0?(pe.setLineWidth($.wireframeLinewidth*Lt()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(Z.isLine){let Qt=$.linewidth;Qt===void 0&&(Qt=1),pe.setLineWidth(Qt*Lt()),Z.isLineSegments?gt.setMode(B.LINES):Z.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else Z.isPoints?gt.setMode(B.POINTS):Z.isSprite&&gt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Qt=Z._multiDrawStarts,De=Z._multiDrawCounts,hn=Z._multiDrawCount,ht=Te?b.get(Te).bytesPerElement:1,Xr=Ue.get($).currentProgram.getUniforms();for(let en=0;en<hn;en++)Xr.setValue(B,"_gl_DrawID",en),gt.render(Qt[en]/ht,De[en])}else if(Z.isInstancedMesh)gt.renderInstances(Le,Dt,Z.count);else if(j.isInstancedBufferGeometry){let Qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,Qt);gt.renderInstances(Le,Dt,De)}else gt.render(Le,Dt)};function Mm(M,F,j,$){k!==null&&M.isNodeMaterial&&k.setObject($,M),dt===!0&&ae.setState(M,j,!1),M.transparent===!0&&M.side===Ei&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,Va(M,F,$),M.side=Rr,M.needsUpdate=!0,Va(M,F,$),M.side=Ei):Va(M,F,$)}l(Mm,"prepareMaterial"),this.compile=function(M,F,j=null){j===null&&(j=M),k!==null&&k.renderStart(M,F,j),C=ie.get(j),C.init(F),S.push(C),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),M!==j&&M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),St=this.localClippingEnabled,dt=ae.init(this.clippingPlanes,St),dt===!0&&ae.setGlobalState(this.clippingPlanes,F),k!==null&&ve.render(C.state.shadowsArray,j,F);let $=new Set;return M.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Se=Z.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];Mm(be,j,F,Z),$.add(be)}else Mm(Se,j,F,Z),$.add(Se)}),C=S.pop(),k!==null&&k.renderEnd(),$},this.compileAsync=function(M,F,j=null){let $=this.compile(M,F,j);return new Promise(Z=>{function Se(){if($.forEach(function(Ie){let Te=Ue.get(Ie).currentProgram;(Te===void 0||Te.isReady())&&$.delete(Ie)}),$.size===0){Z(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),ct.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mh=null;function V_(M){Mh&&Mh(M)}l(V_,"onAnimationFrame");function Sm(){Wr.stop()}l(Sm,"onXRSessionStart");function wm(){Wr.start()}l(wm,"onXRSessionEnd");let Wr=new bg;Wr.setAnimationLoop(V_),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(M){Mh=M,me.setAnimationLoop(M),M===null?Wr.stop():Wr.start()},me.addEventListener("sessionstart",Sm),me.addEventListener("sessionend",wm),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;k!==null&&k.renderStart(M,F);let j=me.enabled===!0&&me.isPresenting===!0,$=I!==null&&(K===null||j)&&I.begin(P,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,F,K),C=ie.get(M,S.length),C.init(F),C.state.textureUnits=Ge.getTextureUnits(),S.push(C),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Qe.setFromArrayCamera(F):Xe.setFromProjectionMatrix(lt,Xn,F.reversedDepth),St=this.localClippingEnabled,dt=ae.init(this.clippingPlanes,St),R=Me.get(M,v.length),R.init(),v.push(R),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&Sh(Ie,F,-1/0,P.sortObjects)}Sh(M,F,0,P.sortObjects),R.finish(),k!==null&&k.updateLights(C.state.lightsArray),P.sortObjects===!0&&R.sort(Re,ke),st=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,st&&L.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),dt===!0&&ae.beginShadows();let Z=C.state.shadowsArray;if(ve.render(Z,M,F),dt===!0&&ae.endShadows(),($&&I.hasRenderPass())===!1){let Ie=R.opaque,be=R.transmissive;if(C.setupLights(),F.isArrayCamera){let Te=F.cameras;if(be.length>0)for(let Ne=0,qe=Te.length;Ne<qe;Ne++){let tt=Te[Ne];Am(Ie,be,M,tt)}st&&L.render(M);for(let Ne=0,qe=Te.length;Ne<qe;Ne++){let tt=Te[Ne];Em(R,M,tt,tt.viewport)}}else be.length>0&&Am(Ie,be,M,F),st&&L.render(M),Em(R,M,F)}K!==null&&U===0&&(Ge.updateMultisampleRenderTarget(K),Ge.updateRenderTargetMipmap(K)),$&&I.end(P),M.isScene===!0&&M.onAfterRender(P,M,F),_e.resetDefaultState(),N=-1,V=null,S.pop(),S.length>0?(C=S[S.length-1],Ge.setTextureUnits(C.state.textureUnits),dt===!0&&ae.setGlobalState(P.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,k!==null&&k.renderEnd()};function Sh(M,F,j,$){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){let Ie=F.isArrayCamera?Qe:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){$&&at.setFromMatrixPosition(M.matrixWorld).applyMatrix4(lt);let be=fe.update(M),Te=M.material;Te.visible&&R.push(M,be,Te,j,at.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=F.isArrayCamera?Qe:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Te=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),at.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),at.copy(be.boundingSphere.center)),at.applyMatrix4(M.matrixWorld).applyMatrix4(lt)),Array.isArray(Te)){let Ne=be.groups;for(let qe=0,tt=Ne.length;qe<tt;qe++){let Le=Ne[qe],nt=Te[Le.materialIndex];nt&&nt.visible&&R.push(M,be,nt,j,at.z,Le,F)}}else Te.visible&&R.push(M,be,Te,j,at.z,null,F)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)Sh(Se[Ie],F,j,$)}l(Sh,"projectObject");function Em(M,F,j,$){let{opaque:Z,transmissive:Se,transparent:Ie}=M;C.setupLightsView(j),dt===!0&&ae.setGlobalState(P.clippingPlanes,j),$&&pe.viewport(z.copy($)),Z.length>0&&Al(Z,F,j),Se.length>0&&Al(Se,F,j),Ie.length>0&&Al(Ie,F,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}l(Em,"renderScene");function Am(M,F,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){let Le=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Tn(1,1,{generateMipmaps:!0,type:Le?In:rn,minFilter:Pn,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Se=C.state.transmissionRenderTarget[$.id],Ie=$.viewport||z;Se.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let be=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(q),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),st&&L.render(j);let qe=P.toneMapping;P.toneMapping=Ai;let tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),dt===!0&&ae.setGlobalState(P.clippingPlanes,$),Al(M,j,$),Ge.updateMultisampleRenderTarget(Se),Ge.updateRenderTargetMipmap(Se),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let nt=0,Dt=F.length;nt<Dt;nt++){let _t=F[nt],{object:gt,geometry:Qt,material:De,group:hn}=_t;if(De.side===Ei&&gt.layers.test($.layers)){let ht=De.side;De.side=_n,De.needsUpdate=!0,Tm(gt,j,$,Qt,De,hn),De.side=ht,De.needsUpdate=!0,Le=!0}}Le===!0&&(Ge.updateMultisampleRenderTarget(Se),Ge.updateRenderTargetMipmap(Se))}P.setRenderTarget(be,Te,Ne),P.setClearColor(q,he),tt!==void 0&&($.viewport=tt),P.toneMapping=qe}l(Am,"renderTransmissionPass");function Al(M,F,j){let $=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,Se=M.length;Z<Se;Z++){let Ie=M[Z],{object:be,geometry:Te,group:Ne}=Ie,qe=Ie.material;qe.allowOverride===!0&&$!==null&&(qe=$),be.layers.test(j.layers)&&Tm(be,F,j,Te,qe,Ne)}}l(Al,"renderObjects");function Tm(M,F,j,$,Z,Se){k!==null&&Z.isNodeMaterial&&k.setObject(M,Z),M.onBeforeRender(P,F,j,$,Z,Se),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(P,F,j,$,M,Se),Z.transparent===!0&&Z.side===Ei&&Z.forceSinglePass===!1?(Z.side=_n,Z.needsUpdate=!0,P.renderBufferDirect(j,F,$,Z,M,Se),Z.side=Rr,Z.needsUpdate=!0,P.renderBufferDirect(j,F,$,Z,M,Se),Z.side=Ei):P.renderBufferDirect(j,F,$,Z,M,Se),M.onAfterRender(P,F,j,$,Z,Se)}l(Tm,"renderObject");function Cm(M){let F=0;for(let j of M)j.texture!==null&&F++;return F}l(Cm,"countLightProbeGrids");function Va(M,F,j){F.isScene!==!0&&(F=It);let $=Ue.get(M),Z=C.state.lights,Se=C.state.shadowsArray,Ie=Z.state.version,be=se.getParameters(M,Z.state,Se,F,j,C.state.lightProbeGridArray),Te=se.getProgramCacheKey(be),Ne=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;let qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=T.get(M.envMap||$.environment,qe),$.envMapRotation=$.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",pt),Ne=new Map,$.programs=Ne,$.programVariants=new Map);let tt=Ne.get(Te);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Ie)return Pm(M,be),tt}else be.uniforms=se.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,j,be),M.onBeforeCompile(be,P),tt=se.acquireProgram(be,Te),Ne.set(Te,tt),$.uniforms=be.uniforms;let Le=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ae.uniform),Pm(M,be),$.needsLights=q_(M),$.lightsStateVersion=Ie,$.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.numLightProbeGrids=Cm(C.state.lightProbeGridArray),$.currentProgram=tt,$.uniformsList=null,tt}l(Va,"getProgram");function H_(M,F,j,$,Z){let Se=Ue.get(M),Ie=Se.currentProgram.id+","+$+","+Z,be=Se.programVariants.get(Ie);return be===void 0?(be=Va(M,F,j),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=$,Se.toneMapping=Z),be}l(H_,"getProgramVariant");function Rm(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=ha.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}l(Rm,"getUniformList");function Pm(M,F){let j=Ue.get(M);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}l(Pm,"updateCommonMaterialProperties");function W_(M,F,j,$,Z){F.isScene!==!0&&(F=It),Ge.resetTextureUnits();let Se=F.fog,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,be=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:it.workingColorSpace,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ne=T.get($.envMap||Ie,Te),qe=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,tt=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,Dt=!!j.morphAttributes.color,_t=Ai;$.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(_t=P.toneMapping);let gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qt=gt!==void 0?gt.length:0,De=Ue.get($),hn=C.state.lights;if(dt===!0&&(St===!0||M!==V)){let Ct=M===V&&$.id===N;ae.setState($,M,Ct)}let ht=!1,Xr=!1;$.version===De.__version?De.needsLights&&De.lightsStateVersion!==hn.state.version||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==Ne||$.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ae.numPlanes||De.numIntersection!==ae.numIntersection)||De.vertexAlphas!==qe||De.vertexTangents!==tt||De.morphTargets!==Le||De.morphNormals!==nt||De.morphColors!==Dt||De.morphTargetsCount!==Qt||De.numLightProbeGrids!==Cm(C.state.lightProbeGridArray)?ht=!0:(De.outputColorSpace!==be||De.toneMapping!==_t)&&(Xr=!0):(ht=!0,De.__version=$.version);let en=De.currentProgram;(ht===!0||Xr===!0)&&(en=Xr===!0?H_($,F,Z,be,_t):Va($,F,Z),k&&$.isNodeMaterial&&k.onUpdateProgram($,en,De));let Tl=!1,ur=!1,qr=!1,ut=en.getUniforms(),$t=De.uniforms;if(pe.useProgram(en.program)&&(Tl=!0,ur=!0,qr=!0),$.id!==N&&(N=$.id,ur=!0),Tl||V!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(B,"projectionMatrix",M.projectionMatrix),ut.setValue(B,"viewMatrix",M.matrixWorldInverse);let Wt=ut.map.cameraPosition;Wt!==void 0&&Wt.setValue(B,Pt.setFromMatrixPosition(M.matrixWorld)),et.logarithmicDepthBuffer&&ut.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ut.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,ur=!0,qr=!0)}if(De.needsLights&&(hn.state.sunShadowMap.length>0&&ut.setValue(B,"sunShadowMap",hn.state.sunShadowMap,Ge),hn.state.directionalShadowMap.length>0&&ut.setValue(B,"directionalShadowMap",hn.state.directionalShadowMap,Ge),hn.state.spotShadowMap.length>0&&ut.setValue(B,"spotShadowMap",hn.state.spotShadowMap,Ge),hn.state.pointShadowMap.length>0&&ut.setValue(B,"pointShadowMap",hn.state.pointShadowMap,Ge)),Z.isSkinnedMesh){ut.setOptional(B,Z,"bindMatrix"),ut.setOptional(B,Z,"bindMatrixInverse");let Ct=Z.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ut.setValue(B,"boneTexture",Ct.boneTexture,Ge))}Z.isBatchedMesh&&(ut.setOptional(B,Z,"batchingTexture"),ut.setValue(B,"batchingTexture",Z._matricesTexture,Ge),ut.setOptional(B,Z,"batchingIdTexture"),ut.setValue(B,"batchingIdTexture",Z._indirectTexture,Ge),ut.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ut.setValue(B,"batchingColorTexture",Z._colorsTexture,Ge));let jn=j.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&le.update(Z,j,en),(ur||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,ut.setValue(B,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&($t.envMapIntensity.value=F.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Rw()),ur){if(ut.setValue(B,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&X_($t,qr),Se&&$.fog===!0&&xe.refreshFogUniforms($t,Se),xe.refreshMaterialUniforms($t,$,re,ce,C.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Ct=E,Wt=0;for(let Bi of C.state.lightProbeGridArray)Bi.texture!==null&&(Ct.textures[Wt]=Bi.texture,Ct.min[Wt]=Bi.boundingBox.min,Ct.max[Wt]=Bi.boundingBox.max,Ct.resolution[Wt]=Bi.resolution,Wt++);for(let Bi in Ct)Ct[Bi].length=Wt;$t.probesSH.value=Ct.textures,$t.probesMin.value=Ct.min,$t.probesMax.value=Ct.max,$t.probesResolution.value=Ct.resolution}ha.upload(B,Rm(De),$t,Ge)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ha.upload(B,Rm(De),$t,Ge),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ut.setValue(B,"center",Z.center),ut.setValue(B,"modelViewMatrix",Z.modelViewMatrix),ut.setValue(B,"normalMatrix",Z.normalMatrix),ut.setValue(B,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let Ct=$.uniformsGroups;for(let Wt=0,Bi=Ct.length;Wt<Bi;Wt++){let Lm=Ct[Wt];Fe.update(Lm,en),Fe.bind(Lm,en)}}return en}l(W_,"setProgram");function X_(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}l(X_,"markUniformsLightsNeedsUpdate");function q_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(q_,"materialNeedsLights"),this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,F,j){let $=Ue.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ue.get(M.texture).__webglTexture=F,Ue.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let j=Ue.get(M);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,j=0){K=M,ne=F,U=j;let $=null,Z=!1,Se=!1;if(M){let be=Ue.get(M);if(be.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),z.copy(M.viewport),oe.copy(M.scissor),ue=M.scissorTest,pe.viewport(z),pe.scissor(oe),pe.setScissorTest(ue),N=-1;return}else if(be.__webglFramebuffer===void 0)Ge.setupRenderTarget(M);else if(be.__hasExternalTextures)Ge.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let qe=M.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&Ue.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(M)}}let Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Se=!0);let Ne=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?$=Ne[F][j]:$=Ne[F],Z=!0):M.samples>0&&Ge.useMultisampledRTT(M)===!1?$=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[j]:$=Ne,z.copy(M.viewport),oe.copy(M.scissor),ue=M.scissorTest}else z.copy(Pe).multiplyScalar(re).floor(),oe.copy(Je).multiplyScalar(re).floor(),ue=Ke;if(j!==0&&($=J),pe.bindFramebuffer(B.FRAMEBUFFER,$)&&pe.drawBuffers(M,$),pe.viewport(z),pe.scissor(oe),pe.setScissorTest(ue),Z){let be=Ue.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,j)}else if(Se){let be=F;for(let Te=0;Te<M.textures.length;Te++){let Ne=Ue.get(M.textures[Te]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,j,be)}}else if(M!==null&&j!==0){let be=Ue.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,j)}N=-1};function Im(M){let F=Ue.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=et.textureFormatReadable(M.format),F.__typeReadable=et.textureTypeReadable(M.type)),F}l(Im,"getReadableState"),this.readRenderTargetPixels=function(M,F,j,$,Z,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te){pe.bindFramebuffer(B.FRAMEBUFFER,Te);try{let Ne=M.textures[be],qe=Ne.format,tt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=Im(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-$&&j>=0&&j<=M.height-Z&&B.readPixels(F,j,$,Z,ge.convert(qe),ge.convert(tt),Se)}finally{let Ne=K!==null?Ue.get(K).__webglFramebuffer:null;pe.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,F,j,$,Z,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te)if(F>=0&&F<=M.width-$&&j>=0&&j<=M.height-Z){pe.bindFramebuffer(B.FRAMEBUFFER,Te);let Ne=M.textures[be],qe=Ne.format,tt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=Im(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,nt),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(F,j,$,Z,ge.convert(qe),ge.convert(tt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Dt=K!==null?Ue.get(K).__webglFramebuffer:null;pe.bindFramebuffer(B.FRAMEBUFFER,Dt);let _t=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await X0(B,_t,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,nt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(nt),B.deleteSync(_t),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,j=0){let $=Math.pow(2,-j),Z=Math.floor(M.image.width*$),Se=Math.floor(M.image.height*$),Ie=F!==null?F.x:0,be=F!==null?F.y:0;Ge.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Ie,be,Z,Se),pe.unbindTexture()},this.copyTextureToTexture=function(M,F,j=null,$=null,Z=0,Se=0){let Ie,be,Te,Ne,qe,tt,Le,nt,Dt,_t=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(j!==null)Ie=j.max.x-j.min.x,be=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,qe=j.min.y,tt=j.isBox3?j.min.z:0;else{let ut=Math.pow(2,-Z);Ie=Math.floor(_t.width*ut),be=Math.floor(_t.height*ut),M.isDataArrayTexture?Te=_t.depth:M.isData3DTexture?Te=Math.floor(_t.depth*ut):Te=1,Ne=0,qe=0,tt=0}$!==null?(Le=$.x,nt=$.y,Dt=$.z):(Le=0,nt=0,Dt=0);let gt=ge.convert(F.format),Qt=ge.convert(F.type),De;F.isData3DTexture?(Ge.setTexture3D(F,0),De=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ge.setTexture2DArray(F,0),De=B.TEXTURE_2D_ARRAY):(Ge.setTexture2D(F,0),De=B.TEXTURE_2D),pe.activeTexture(B.TEXTURE0),pe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let hn=pe.getParameter(B.UNPACK_ROW_LENGTH),ht=pe.getParameter(B.UNPACK_IMAGE_HEIGHT),Xr=pe.getParameter(B.UNPACK_SKIP_PIXELS),en=pe.getParameter(B.UNPACK_SKIP_ROWS),Tl=pe.getParameter(B.UNPACK_SKIP_IMAGES);pe.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),pe.pixelStorei(B.UNPACK_SKIP_ROWS,qe),pe.pixelStorei(B.UNPACK_SKIP_IMAGES,tt);let ur=M.isDataArrayTexture||M.isData3DTexture,qr=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let ut=Ue.get(M),$t=Ue.get(F),jn=Ue.get(ut.__renderTarget),Ct=Ue.get($t.__renderTarget);pe.bindFramebuffer(B.READ_FRAMEBUFFER,jn.__webglFramebuffer),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Wt=0;Wt<Te;Wt++)ur&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(M).__webglTexture,Z,tt+Wt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(F).__webglTexture,Se,Dt+Wt)),B.blitFramebuffer(Ne,qe,Ne+Ie,qe+be,Le,nt,Le+Ie,nt+be,B.DEPTH_BUFFER_BIT,B.NEAREST);pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||M.isRenderTargetTexture||Ue.has(M)){let ut=Ue.get(M),$t=Ue.get(F);pe.bindFramebuffer(B.READ_FRAMEBUFFER,D),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let jn=0;jn<Te;jn++)ur?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ut.__webglTexture,Z,tt+jn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ut.__webglTexture,Z),qr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,Se,Dt+jn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,Se),Z!==0?B.blitFramebuffer(Ne,qe,Ne+Ie,qe+be,Le,nt,Le+Ie,nt+be,B.COLOR_BUFFER_BIT,B.NEAREST):qr?B.copyTexSubImage3D(De,Se,Le,nt,Dt+jn,Ne,qe,Ie,be):B.copyTexSubImage2D(De,Se,Le,nt,Ne,qe,Ie,be);pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else qr?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(De,Se,Le,nt,Dt,Ie,be,Te,gt,Qt,_t.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(De,Se,Le,nt,Dt,Ie,be,Te,gt,_t.data):B.texSubImage3D(De,Se,Le,nt,Dt,Ie,be,Te,gt,Qt,_t):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,Le,nt,Ie,be,gt,Qt,_t.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,Le,nt,_t.width,_t.height,gt,_t.data):B.texSubImage2D(B.TEXTURE_2D,Se,Le,nt,Ie,be,gt,Qt,_t);pe.pixelStorei(B.UNPACK_ROW_LENGTH,hn),pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Xr),pe.pixelStorei(B.UNPACK_SKIP_ROWS,en),pe.pixelStorei(B.UNPACK_SKIP_IMAGES,Tl),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(De),pe.unbindTexture()},this.initRenderTarget=function(M){Ue.get(M).__webglFramebuffer===void 0&&Ge.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ge.setTextureCube(M,0):M.isData3DTexture?Ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ge.setTexture2DArray(M,0):Ge.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){ne=0,U=0,K=null,pe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};l(mp,"WebGLRenderer");var Bu=mp;var qn=["grass","plains","sand","rock","snow","forest","mud","tundra"],Pi={shore:-.03,deep:-.15,reach:3},Vu={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},Dg={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},Lg={Ocean:{relief:{base:Pi.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:Dg,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Hu=l(i=>i==="Unknown"?Vu:(Object.prototype.hasOwnProperty.call(Lg,i)?Lg[i]:void 0)??Dg,"terrainEntry");var Pw=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),Ng=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),Ug=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Ii=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,f,d,p)=>{let g=Math.floor(Pw(h,f,t)*16)*2;return(Ng[g]??0)*d+(Ng[g+1]??0)*p},"slope");return(h,f)=>{let d=h/r,p=f/a,g=Math.floor(d),y=Math.floor(p),x=d-g,_=p-y,w=Ug(x),A=Ug(_),E=o(g),R=o(g+1),C=c(y),v=c(y+1),S=u(E,C,x,_)+(u(R,C,x-1,_)-u(E,C,x,_))*w,I=u(E,v,x,_-1)+(u(R,v,x-1,_-1)-u(E,v,x,_-1))*w;return Math.max(-1,Math.min(1,(S+(I-S)*A)*1.4))}},"periodicNoise"),Dn=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var Pr=128,qu=.5,Wu=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),Iw={grass:{grain:l(({noise:i})=>Dn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>Dn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>Dn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>Dn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>Dn([Wu(i(24,11)),Wu(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>Dn([Wu(i(24,11)),Wu(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>Dn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>Dn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>Dn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},Xu=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),Lw=l((i=Pr,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*qn.length),r={u:i,v:i};return qn.forEach((s,a)=>{let o=Iw[s],c=l((A,E)=>Ii({cell:A*i/Pr,period:r,seed:7919*(a+1)+E}),"noise"),u=l((A,E)=>(R,C)=>Math.sin(2*Math.PI*(A*R+E*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/Pr,"texels")},f=o.grain(h),d=o.bumps(h),p=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let E=0;E<i;E++)g[A*i+E]=d(E+e,A+t);let y=l((A,E)=>g[(E+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let E=0;E<i;E++)x[A*i+E]=f(E+e,A+t),_+=x[A*i+E]??0;let w=_/(i*i);for(let A=0;A<i;A++)for(let E=0;E<i;E++){let R=p+(A*i+E)*4,C=(x[A*i+E]??0)-w,v=(y(E+1,A)-y(E-1,A))/2*(i/Pr),S=(y(E,A+1)-y(E,A-1))/2*(i/Pr);n[R]=Xu(o.shade*C+.5),n[R+1]=Xu((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[R+2]=Xu((1-Math.max(-1,Math.min(1,S*o.steep)))/2),n[R+3]=Xu(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),Fg=Lw;var Dw=l(i=>[i.u/Math.max(1,Math.round(i.u/qu)),i.v===null?qu:i.v/Math.max(1,Math.round(i.v/qu))],"surfaceTile"),Nw=qn.map((i,e)=>`surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * texture(surfaceDetail, vec3(surfaceAt, ${e}.0));`).join(`
`),Uw=null,Fw=l(()=>Uw??=Fg(),"made"),Ow=l(i=>{let e=new jr(Fw(),Pr,Pr,qn.length),t=new wi({roughness:.92,vertexColors:!0}),[n,r]=Dw(i);return e.format=Ln,e.type=rn,e.wrapS=xi,e.wrapT=xi,e.magFilter=Ot,e.minFilter=Pn,e.generateMipmaps=!0,e.anisotropy=4,e.colorSpace=ri,e.needsUpdate=!0,t.onBeforeCompile=s=>{s.uniforms.surfaceDetail={value:e},s.uniforms.surfaceTile={value:new ze(n,r)},s.vertexShader=`attribute vec4 surfacesA;
attribute vec4 surfacesB;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
${s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurfacesA = surfacesA;
  vSurfacesB = surfacesB;
  // Where it is on the ground, at this copy of the world: east and south.
  vGround = (modelMatrix * vec4(transformed, 1.0)).xz;`)}`,s.fragmentShader=`uniform highp sampler2DArray surfaceDetail;
uniform vec2 surfaceTile;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
${s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${Nw}
  // Fading to none (the colour alone) as the ground nears a square never seen, whose points have no surface.
  surface = surface / max(surfaceTotal, 1.0) + max(0.0, 1.0 - surfaceTotal) * vec4(0.5, 0.5, 0.5, roughness);
  diffuseColor.rgb *= 0.5 + surface.r;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = surface.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},t.customProgramCacheKey=()=>"land-surfaces",{material:t,detail:e}},"landMaterial"),Og=Ow;function zg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Bt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),p++}if(p!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in s){let f=Bg(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let g=Bg(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(zg,"mergeGeometries");function Bg(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new vt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(Bg,"mergeAttributes");var kg="#c79a72",Bw="#5a4a3a";var an="#7a5532",_p="#5f6266",Gg="#8a8f96",si="#5d6447",gp="#e8e0cc",Wg="#6e4b2f",as="#8a8580",Vg="#5b3e27",fa="#7d858c",zw=new X(0,1,0),Ee=new yi(1,1,1),qt=new bi(.5,.5,1,10),os=new Mi(.5,1,10),pa=new wr(.5,10,8),bp=class bp{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(bp,"Parts");var Yt=bp,kw=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:pa,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:os,colour:_p,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ee,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:qt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:pa,colour:si,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),Gw=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:qt,colour:an,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:qt,colour:an,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:os,colour:_p,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:qt,colour:an,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:os,colour:Gg,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ee,colour:Gg,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ee,colour:an,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:qt,colour:an,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ee,colour:i==="rifle"?"#3a3a3a":an,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ee,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ee,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:qt,colour:an,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:qt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),Vw={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},vp=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new Yt,a=r===void 0?void 0:Vw[r],o=a?.coat??(i==="modern"?si:t[0]),c=a?.legs??(i==="ancient"?kg:i==="modern"?si:Bw);return n&&(s.add({shape:Ee,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ee,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ee,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ee,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ee,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ee,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:pa,colour:kg,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:pa,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:pa,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):kw(i,t,s),r==="parachute"&&s.add({shape:Ee,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),Gw(e,i,t,s),s},"person"),Hg=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),xp=l((i=Wg)=>new Yt().add({shape:Ee,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ee,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ee,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ee,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),Hw=l((i,e,t)=>new Yt().addAll(xp(),[0,0,0]).add({shape:Ee,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(vp(i,e,t,{legs:!1}),[0,.04,0]),"rider"),Ww=l(i=>new Yt().add({shape:Ee,colour:as,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ee,colour:as,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:qt,colour:as,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ee,colour:as,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:as,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:as,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:as,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ee,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),on=l((i,e=.05)=>({shape:qt,colour:an,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),Xw=l((i,e,t)=>{if(e==="chariot")return new Yt().addAll(xp(),[0,0,.09]).add({shape:Ee,colour:an,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ee,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(on([-.042,.035,-.045],.065)).add(on([.042,.035,-.045],.065)).addAll(vp(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Yt().addAll(xp(t==="ancient"?"#8a7a64":Wg),[0,0,.1]).add({shape:Ee,colour:an,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ee,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(on([-.042,.03,-.03])).add(on([.042,.03,-.03])).add(on([-.042,.03,-.09])).add(on([.042,.03,-.09]));return e==="wagon"?n.add({shape:qt,colour:gp,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:gp,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ee,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ee,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),qw=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Yt().add({shape:Ee,colour:an,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ee,colour:an,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ee,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(on([-.045,.03,.04],.045)).add(on([.045,.03,.04],.045)).add(on([-.045,.03,-.04],.045)).add(on([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?si:_p;return new Yt().add({shape:qt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ee,colour:i==="modern"?si:an,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ee,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(on([-.04,.035,0],.07)).add(on([.04,.035,0],.07))},"siege"),Yw=l((i,e,t)=>{if(i==="industrial")return new Yt().add({shape:Ee,colour:fa,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ee,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(on([-.045,.025,.06],.045)).add(on([.045,.025,.06],.045)).add(on([-.045,.025,-.06],.045)).add(on([.045,.025,-.06],.045));let n=new Yt().add({shape:Ee,colour:si,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ee,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ee,colour:si,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:qt,colour:si,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:si,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),$w=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new Yt;switch(i.hull){case"oars":case"sail":{s.add({shape:Ee,colour:Vg,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:os,colour:Vg,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:qt,colour:an,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ee,colour:o===0?e[1]:gp,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ee,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ee,colour:an,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ee,colour:an,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:qt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ee,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ee,colour:fa,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ee,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ee,colour:fa,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ee,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ee,colour:i.era==="industrial"?"#4a4a48":fa,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:os,colour:i.era==="industrial"?"#4a4a48":fa,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:fa,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:qt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ee,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ee,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:qt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ee,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),Zw=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Yt().add({shape:qt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:os,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ee,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ee,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ee,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),Jw=l(i=>new Yt().add({shape:pa,colour:si,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ee,colour:si,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ee,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Kw=l((i,e)=>{let t=e?1.4:1;return new Yt().add({shape:qt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:os,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Xg=l((i,e)=>{switch(i.shape){case"foot":{let t=new Yt;return Hg(i.squad).forEach(([n,r],s)=>t.addAll(vp(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new Yt;return Hg(i.squad).forEach(([n,r])=>t.addAll(Hw(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return Ww(e);case"cart":return Xw(e,i.cart??"wagon",i.era);case"siege":return qw(i.era,e,i.large===!0);case"vehicle":return Yw(i.era,e,i.large===!0);case"ship":return $w(i,e);case"aircraft":return Zw(i,e);case"helicopter":return Jw(e);default:return Kw(e,i.large===!0)}},"figureParts"),jw=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new mt().compose(new X(...i),new mn().setFromAxisAngle(zw,n).multiply(new mn().setFromEuler(new Cn(...t))),new X(...e)),"partMatrix"),yp=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Oe(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(jw(n)),a.setAttribute("color",new vt(u,3)),a}),t=zg(e)??new Bt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),qg=l((i,e)=>yp(Xg(i,e).parts),"figureGeometry"),Qw=new bi(.19,.2,1,28),e1=new Er(.22,.014,4,32),Yg=l((i,e,{fortified:t,scale:n,stand:r})=>{let s=i.shape==="ship",a=s?0:r,o=Xg(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return s||o.push({shape:Qw,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),t&&o.push({shape:e1,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),yp(o)},"unitBodyGeometry"),t1=new Mi(.75,.5,4),n1=new Er(.36,.025,6,24),$g=l((i,e,t)=>yp([...i.flatMap(({x:n,z:r,width:s,height:a})=>[{shape:Ee,colour:"#b5ab98",at:[n,a/2,r],size:[s,a,s]},{shape:t1,colour:e,at:[n,a+s*.2,r],size:[s,s*.8,s],turn:[0,Math.PI/4,0]}]),...t?[{shape:n1,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Jt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Do=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Nn=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),No=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),Mp=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Zg={Warrior:Jt("ancient","club"),Spearman:Jt("ancient","spear"),Swordman:Jt("ancient","sword"),Archer:Jt("ancient","bow"),Horseman:Do("ancient","spear"),Chariot:Mp("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Nn("ancient","oars"),Settlers:Mp("ancient","wagon"),Diplomat:Jt("ancient","case",1),Caravan:Mp("ancient","goods"),Explorer:Jt("ancient","pack",1),Pikeman:Jt("medieval","pike"),Knight:Do("medieval","lance"),Crusader:Do("medieval","sword"),Fanatic:Jt("medieval","sword"),Sail:Nn("medieval","sail"),Musketman:Jt("renaissance","musket"),Dragoon:Do("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Nn("renaissance","sail",!0,1),Galleon:Nn("renaissance","sail",!0),Rifleman:Jt("industrial","rifle"),AlpineTrooper:{...Jt("industrial","rifle"),dress:"snow"},Partisan:{...Jt("industrial","rifle"),dress:"irregular"},Cavalry:Do("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Jt("industrial","none",2),Ironclad:Nn("industrial","steam",!1,1),Transport:Nn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Jt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Jt("modern","rifle"),Paratrooper:{...Jt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Nn("modern","steam",!1,1),Cruiser:Nn("modern","steam",!0,2),MissileCruiser:Nn("modern","steam",!0,1,!0),Battleship:Nn("modern","steam",!0,3),Submarine:Nn("modern","submarine"),Carrier:Nn("modern","carrier",!0),Fighter:No("modern"),StealthFighter:No("modern",!1,!0),Bomber:No("modern",!0),StealthBomber:No("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Jg=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Zg,i)?Zg[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Nn("industrial","steam"):e.includes("Air")?No("modern"):Jt("ancient","spear")),"unitLook");var i1=.03,ex="#fff4b0",r1=.04,Yu=.004,Sp=.018,Kg=.01,jg=.022,Qg=.03,tx=.03,Zu=.002,s1="#4caf50",a1="#e0b030",o1="#d04030",l1=256,ls,ai,cs,us,oi,hs,ji,ga,wp=class wp{constructor(){Q(this,ls,new Map);Q(this,ai,new Map);Q(this,cs,new Map);Q(this,us,new Map);Q(this,oi,new Map);Q(this,hs,new Map);Q(this,ji,null);Q(this,ga,0);this.figureMaterial=new wi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Er(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=m(this,ls).get(n);return r===void 0&&(r=new wi({color:new Oe(e),roughness:.75,metalness:.05,...t?{emissive:new Oe(e),emissiveIntensity:.6}:{}}),m(this,ls).set(n,r)),r}body(e,t,n,r=1){let s=JSON.stringify([e,t,n,r]),a=m(this,us).get(s);return a===void 0&&(a=Yg(e,t,{fortified:n,scale:r,stand:i1}),m(this,us).set(s,a)),a}city(e){let t=d1(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),r=m(this,oi).get(n);return r===void 0&&(r=$g(t,e.colours[0],e.walled),m(this,oi).set(n,r)),r}figure(e,t){let n=JSON.stringify([e,t]),r=m(this,cs).get(n);return r===void 0&&(r=qg(e,t),m(this,cs).set(n,r)),r}plain(e){let t=m(this,hs).get(e);return t===void 0&&(t=new br({color:new Oe(e),sizeAttenuation:!1,depthTest:!1}),m(this,hs).set(e,t)),t}pointer(){if(m(this,ji)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=ex,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Sr(e);n.colorSpace=Ut,W(this,ji,new br({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return m(this,ji)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=m(this,ai).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Sr(a);h.colorSpace=Ut,s=new br({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),m(this,ai).set(r,s)}return s}get sweepDue(){return m(this,ai).size+m(this,oi).size>Math.max(l1,m(this,ga)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof Et&&t.add(r.geometry),r instanceof ra&&t.add(r.material)});m(this,ai).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),m(this,ai).delete(r))}),m(this,oi).forEach((n,r)=>{t.has(n)||(n.dispose(),m(this,oi).delete(r))}),W(this,ga,m(this,ai).size+m(this,oi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),m(this,cs).forEach(e=>e.dispose()),m(this,us).forEach(e=>e.dispose()),m(this,oi).forEach(e=>e.dispose()),m(this,us).clear(),m(this,oi).clear(),this.figureMaterial.dispose(),m(this,hs).forEach(e=>e.dispose()),m(this,ji)?.map?.dispose(),m(this,ji)?.dispose(),m(this,hs).clear(),W(this,ji,null),m(this,ls).forEach(e=>e.dispose()),m(this,ai).forEach(e=>{e.map?.dispose(),e.dispose()}),m(this,ls).clear(),m(this,ai).clear(),m(this,cs).clear(),W(this,ga,0)}};ls=new WeakMap,ai=new WeakMap,cs=new WeakMap,us=new WeakMap,oi=new WeakMap,hs=new WeakMap,ji=new WeakMap,ga=new WeakMap,l(wp,"MarkerKit");var Ku=wp,nx=l(i=>{let{r:e,g:t,b:n}=new Oe(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),ma=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),$u=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),c1=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),u1=3,h1=4,Uo=l((i,e,t,n,r=u1)=>{let s=new ra(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),ix=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return Uo(i,e*r,e,t)},"label"),Ju=[0,.36,0],d1=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let r=n/e*Math.PI*2+$u(i.name,1)*6,s=n===0?0:.12+$u(i.name,n+2)*.18;return{x:Math.cos(r)*s,z:Math.sin(r)*s,width:.07+$u(i.name,n+20)*.05,height:(n===0?.13:.05)+$u(i.name,n+40)*.05}})},"buildingsOf"),f1=l((i,e)=>{let t=new pn;return t.add(new Et(i.city(e),i.figureMaterial)),t.add(ma(ix(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],nx(e.colours[0])),tx,0),...Ju)),t},"drawCity"),p1=l((i,e,t=null)=>{let n=new pn,{ring:r}=i.geometries,s=Jg(e.type,e.kinds),a=i.body(s,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+r1,0],u=e.health!==null,h=(t?.over??0)+(u?Yu+Zu:0),f=h+Kg+Zu,d=c1(e),p=f+(d===""?0:jg+Zu),g=new Et(a,i.figureMaterial);if(g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(ma(Uo(i.plain("#202020"),Sp,Yu,t?.over??0),...c)),y>0){let x=Uo(i.plain(y>.5?s1:y>.25?a1:o1),Sp*y,Yu*.6,(t?.over??0)+Yu*.2);x.center.x=1/(2*y),n.add(ma(x,...c))}}if(n.add(ma(Uo(i.plain(e.colours[0]),Sp,Kg,h),...c)),d!==""&&n.add(ma(ix(i.label(d,e.colours[0],nx(e.colours[0])),jg,f),...c)),e.active){let y=new Et(r,i.material(ex,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,ma(Uo(i.pointer(),Qg,Qg,p,h1),...c))}return n},"drawUnit"),ju="unit",rx=l((i,e)=>{let t=new pn;if(e.city!==null&&t.add(f1(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,r=p1(i,e.unit,e.city===null?null:{at:[Ju[0],Ju[1],Ju[2]-n],over:tx+Zu});r.name=ju,r.position.z=n,t.add(r)}return t},"drawMarker");var Ir=l(i=>i*Math.PI/180,"degrees"),m1=Ir(25),g1=Ir(80),x1=5,_1=90,v1=1.12,Fo=Ir(40),Ap=Ir(45),y1={above:{yaw:0,pitch:Ir(80)},classic:{yaw:0,pitch:Ir(55)},isometric:{yaw:Ir(45),pitch:Ir(30)}};var sx=l(i=>({focus:i,...y1.classic,distance:24}),"defaultOrbit"),Ep=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),ax=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),ds=l(i=>({...i,yaw:ax(i.yaw),pitch:Ep(i.pitch,m1,g1),distance:Ep(i.distance,x1,_1)}),"clampOrbit"),_a=l((i,e)=>ds({...i,distance:i.distance/v1**e}),"zoomed"),Qu=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),eh=l((i,e)=>{let{forward:t}=Qu(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),Tp=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=Qu(i),u=eh(i,e),h=[t-u[0],n-u[1],r-u[2]],f=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(a),p=Math.tan(Fo/2);return d<=1e-6?null:[f(o)/(d*p*s),f(c)/(d*p)]},"toScreen"),Cp=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=Qu(i),c=Math.tan(Fo/2);return{from:eh(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),xa=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=Cp(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),ox=l((i,e,t,n,r)=>{let s=xa(i,e,t,r),a=xa(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Fo/2),{right:h}=Qu(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),lx=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:ax(i.yaw),focus:[n(r,e.u),e.v===null?Ep(s,0,t):n(s,e.v)]}},"settled"),cx=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),th=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var b1=new Oe("#3f8a8c"),M1=new Oe("#173a52"),S1=new Oe("#e8eeee"),ux=`
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
`,w1=`
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
`,Lr,Yn,Un,Pp=class Pp{constructor(e,t){Q(this,Lr);Q(this,Yn);Q(this,Un);W(this,Lr,e),W(this,Yn,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<m(this,Yn).length;r+=2)m(this,Yn)[r]=vi.toHalfFloat(0),m(this,Yn)[r+1]=vi.toHalfFloat(1);W(this,Un,new sa(m(this,Yn),e.columns,e.rows,Ti,In)),m(this,Un).wrapS=xi,m(this,Un).wrapT=e.wrapsV?xi:Wn,m(this,Un).magFilter=Ot,m(this,Un).minFilter=Ot,m(this,Un).needsUpdate=!0;let n=new xn({uniforms:ss.merge([we.fog,{ground:{value:null},cell:{value:new ze},size:{value:new ze},shallow:{value:b1.clone()},deep:{value:M1.clone()},foam:{value:S1.clone()},sky:{value:t.clone()},sunDirection:{value:new X(.5,.7,.4).normalize()},sunColour:{value:new Oe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:ux,fragmentShader:w1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=m(this,Un),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new Et(new Si(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=m(this,Lr),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),f=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;m(this,Yn)[d]=vi.toHalfFloat(e.positions[u*3+1]??0),m(this,Yn)[d+1]=vi.toHalfFloat(e.unseen[u]??0)}}m(this,Un).needsUpdate=!0}height(e,t){return vi.fromHalfFloat(m(this,Yn)[(t*m(this,Lr).columns+e)*2]??0)}unseen(e,t){return vi.fromHalfFloat(m(this,Yn)[(t*m(this,Lr).columns+e)*2+1]??0)>.5}texture(){return m(this,Un)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,Lr).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),m(this,Un).dispose()}};Lr=new WeakMap,Yn=new WeakMap,Un=new WeakMap,l(Pp,"Water");var Rp=Pp,hx=Rp,E1=`
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
`,A1=.18,Oo,Ip=class Ip{constructor(e,t){Q(this,Oo);W(this,Oo,t.wrapsV);let n=new xn({uniforms:ss.merge([we.fog,{ground:{value:null},cell:{value:new ze},size:{value:new ze},extent:{value:new ze},wrapsV:{value:!1}}]),vertexShader:ux,fragmentShader:E1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new Et(new Si(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,Oo)&&e}follow(e,t,n){this.mesh.position.set(e,A1,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Oo=new WeakMap,l(Ip,"Clouds");var nh=Ip;var T1=.6,C1=.05,fs=64,dx=.125,R1=`
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
`,P1=`
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
`,fx=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),I1=l((i,e)=>{let[t]=fx(i.length),n=fs*(1-2*dx);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*fs+(fs-c)/2,y:Math.floor(s/t)*fs+(fs-u)/2,width:c,height:u}]})},"atlasPlaces"),L1=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),Dr,Fn,Bo,ps,zo,ih,va,px,mx,Dp=class Dp{constructor(e){Q(this,va);Q(this,Dr,null);Q(this,Fn,null);Q(this,Bo,"");Q(this,ps);Q(this,zo,new WeakMap);Q(this,ih,1);W(this,ps,e),this.material=new xn({uniforms:ss.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:C1},bias:{value:T1},cells:{value:[1,1]},pad:{value:dx}}]),vertexShader:R1,fragmentShader:P1,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(m(this,Dr)?.dispose(),W(this,Dr,null),e===null||e.count===0)return null;G(this,va,mx).call(this,e);let t=new vo,n=new Si(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Zi(e.anchors,3)),t.setAttribute("slot",new Zi(e.slots,2)),t.setAttribute("size",new Zi(e.sizes,1)),t.setAttribute("cell",new Zi(e.cells,1)),t.instanceCount=e.count,W(this,Dr,t),t}make(){let e=new Et(m(this,Dr)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){m(this,Dr)?.dispose(),m(this,Fn)?.dispose(),this.material.dispose()}};Dr=new WeakMap,Fn=new WeakMap,Bo=new WeakMap,ps=new WeakMap,zo=new WeakMap,ih=new WeakMap,va=new WeakSet,px=l(function(e){if(e===null)return 0;let t=m(this,zo).get(e);return t===void 0&&(t=Nm(this,ih)._++,m(this,zo).set(e,t)),t},"#imageId"),mx=l(function(e){let t=e.names.map(o=>`${o}:${G(this,va,px).call(this,m(this,ps).call(this,o))}`).join(",");if(t===m(this,Bo)&&m(this,Fn)!==null)return;let[n,r]=fx(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*fs,s.height=r*fs,a!==null&&(a.imageSmoothingEnabled=!1,I1(e.names,o=>{let c=m(this,ps).call(this,o);return c===null?null:L1(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=m(this,ps).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),m(this,Fn)?.dispose(),W(this,Fn,new Sr(s)),m(this,Fn).colorSpace=Ut,m(this,Fn).premultiplyAlpha=!0,m(this,Fn).magFilter=Ft,m(this,Fn).minFilter=Pn,m(this,Fn).generateMipmaps=!0,W(this,Bo,t),this.material.uniforms.atlas.value=m(this,Fn),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(Dp,"YieldIcons");var Lp=Dp,gx=Lp;var Fp=l((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/U1)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),rh=l(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),D1=l((i,e,t)=>i.unit?.id===e?yx(i,t):rh(i),"unitOnMarkerAt"),yx=l((i,e)=>{let[t,n,r]=rh(i),[s,a,o]=Fp(i.slide,e)??[0,0,0];return[t+s,n+a,r+o]},"unitDrawnAt"),N1=l((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||Fp(i.slide,t)===null)return;let n=yx(i,t),r=rh(e);return{from:[n[0]-r[0],n[1]-r[1],n[2]-r[2]],started:t}},"carriedSlide"),Np=l((i,e)=>{if(i.slide===void 0)return!1;let t=Fp(i.slide,e),[n,r,s]=t??[0,0,0],[a,o,c]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(ju)?.position.set(a+n,o+r,c+s)),t!==null},"slideAlong"),U1=260,Up=10466244,F1=14082796,O1=5984576,B1=16773336,xx=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),z1=l(i=>[new bn(new X(0,0,1),0),new bn(new X(0,0,-1),i)],"polesAt"),k1=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),_x=2048,vx=Math.hypot(30,40,20),bx=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new Bu({antialias:!0,canvas:i}),s=new so,a=new fn(Fo*180/Math.PI,1,.1,400),o=new pn,{material:c,detail:u}=Og(e),h=new _o(B1,2.6),f=new Map,d=new Map,p=new wi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=z1(g),x=new Map,_=new Set,w=new pn,A=new Ku,E=new pn,R=new gx(n??(()=>null)),C=new hx(t,new Oe(Up)),v=new nh(C.texture(),t),S=new ro(Up,30,110),I=[[0,0]],P="0,0",O=[[0,0]],k="0,0",J=!1,D=null;r.outputColorSpace=Ut,r.localClippingEnabled=!0,r.toneMapping=bo,r.shadowMap.enabled=!0,r.shadowMap.type=Yc,s.background=new Oe(Up),s.fog=S,s.add(new mo(F1,O1,.9)),s.add(o),s.add(w),s.add(E),s.add(C.mesh),s.add(v.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(_x,_x),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let Y=l((N,V,z=I)=>z.map(([oe,ue])=>{let q=N.make();return q.position.set(N.at[0]+oe,N.at[1],N.at[2]+ue),V.add(q),q}),"copiesOf"),ne=l(N=>Y(N,o,k1(I,N.span,g,e.v,J)),"overlayCopiesOf"),U=l(N=>_.forEach(V=>{let z=x.get(V);(z===void 0||!Np(z,N))&&_.delete(V)}),"slideMarkers");return{render:l(()=>r.render(s,a),"render"),resize:l((N,V,z)=>{r.setPixelRatio(z),r.setSize(N,V,!1),a.aspect=V>0?N/V:1,a.updateProjectionMatrix()},"resize"),setChunk:l((N,V,z)=>{let oe=`${N},${V}`,ue=new Bt;ue.setAttribute("position",new vt(z.positions,3)),ue.setAttribute("normal",new vt(z.normals,3)),ue.setAttribute("color",new vt(z.colours,3)),ue.setAttribute("surfacesA",new vt(z.surfacesA,4,!0)),ue.setAttribute("surfacesB",new vt(z.surfacesB,4,!0)),ue.setIndex(new vt(z.indices,1)),ue.computeBoundingSphere();let q=f.get(oe);q!==void 0&&(q.drawn.forEach(ee=>o.remove(ee)),q.geometry.dispose());let he={geometry:ue,at:[z.u,0,z.v],make:l(()=>{let ee=new Et(ue,c);return ee.castShadow=!0,ee.receiveShadow=!0,ee},"make"),drawn:[]};he.drawn=Y(he,o),f.set(oe,he),C.setChunk(z)},"setChunk"),setOverlay:l((N,V,z)=>{let oe=`${N},${V}`,ue=d.get(oe);if(ue!==void 0&&(ue.drawn.forEach(ce=>o.remove(ce)),ue.geometry.dispose(),d.delete(oe)),z===null)return;let q=new Bt;q.setAttribute("position",new vt(z.positions,3)),q.setAttribute("normal",new vt(z.normals,3)),q.setAttribute("color",new vt(z.colours,3)),q.computeBoundingSphere(),q.computeBoundingBox();let he=q.boundingBox,ee={geometry:q,span:[z.v+(he?.min.z??0),z.v+(he?.max.z??0)],at:[z.u,0,z.v],make:l(()=>{let ce=new Et(q,p);return ce.castShadow=!0,ce.receiveShadow=!0,ce},"make"),drawn:[]};ee.drawn=ne(ee),d.set(oe,ee)},"setOverlay"),setMarker:l((N,V,z)=>{let oe=x.get(N);if(oe?.drawn.forEach(re=>w.remove(re)),x.delete(N),z===null)return;let ue=rx(A,z),q=ue.getObjectByName(ju);ue.traverse(re=>{re.castShadow=re instanceof Et});let he={at:V,make:l(()=>ue.clone(),"make"),drawn:[],original:ue,...z.unit===null||q===void 0?{}:{unit:{id:z.unit.id,at:q.position.toArray()}}},ee=performance.now(),ce=N1(oe,he,ee);ce!==void 0&&(he.slide=ce),he.drawn=Y(he,w,O),x.set(N,he),he.slide!==void 0&&(_.add(N),Np(he,ee)),A.sweepDue&&A.sweep([...x.values()].flatMap(({original:re})=>re===void 0?[]:[re]))},"setMarker"),slideMarker:l((N,V)=>{let z=x.get(N);if(z===void 0)return;let[oe,ue,q]=rh(z);z.slide={from:[V[0]-oe,V[1]-ue,V[2]-q],started:performance.now()},_.add(N),Np(z,z.slide.started)},"slideMarker"),markerAt:l((N,V)=>{let z=x.get(N);return z===void 0?null:D1(z,V,performance.now())},"markerAt"),sliding:l(()=>_.size>0,"sliding"),setYields:l(N=>{D?.drawn.forEach(V=>E.remove(V)),D=null,R.set(N)!==null&&(D={at:[0,0,0],make:l(()=>R.make(),"make"),drawn:[]},D.drawn=Y(D,E))},"setYields"),view:l((N,V,z=e)=>{let[oe,ue]=N.focus,[q,he,ee]=eh(N,V),{near:ce,far:re}=th(N.distance);a.position.set(q,he,ee),a.lookAt(oe,V,ue),a.far=re*1.2,a.near=Math.max(.1,N.distance*.02),a.updateProjectionMatrix(),S.near=ce,S.far=re;let Re=N.distance*2.2,ke=h.shadow.camera;h.position.set(oe+30,V+40,ue+20),h.target.position.set(oe,V,ue),ke.left=-Re,ke.right=Re,ke.top=Re,ke.bottom=-Re,ke.near=Math.max(.5,vx-Re*1.6),ke.far=vx+Re*1.6,ke.updateProjectionMatrix(),C.follow(oe,ue,re*2.2,h.position.clone().sub(h.target.position)),v.follow(oe,ue,re*2.2),C.pastThePoles(z.v!==null),v.pastThePoles(z.v!==null),p.clippingPlanes=z.v===null?y:null,J=z.v===null;let Pe=xx(N.focus,re,z),Je=`${Pe.join(";")}${J?" stopped":""}`,Ke=xx(N.focus,Math.min(re,N.distance*2.2),z),Xe=Ke.join(";");Je!==P&&(I=Pe,P=Je,f.forEach(Qe=>{Qe.drawn.forEach(dt=>o.remove(dt)),Qe.drawn=Y(Qe,o)}),d.forEach(Qe=>{Qe.drawn.forEach(dt=>o.remove(dt)),Qe.drawn=ne(Qe)}),D!==null&&(D.drawn.forEach(Qe=>E.remove(Qe)),D.drawn=Y(D,E))),R.lean(N.pitch),Xe!==k&&(O=Ke,k=Xe,x.forEach(Qe=>{Qe.drawn.forEach(dt=>w.remove(dt)),Qe.drawn=Y(Qe,w,O)})),U(performance.now())},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{f.forEach(({geometry:N})=>N.dispose()),f.clear(),d.forEach(({geometry:N})=>N.dispose()),d.clear(),p.dispose(),x.clear(),A.dispose(),R.dispose(),C.dispose(),v.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var Qi=1/Math.sqrt(3),Mx=1.5*Qi,G1=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),V1=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,Qi+s*Mx],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Qi],[a+.5,o-Qi/2],[a+.5,o+Qi/2],[a,o+Qi],[a-.5,o+Qi/2],[a-.5,o-Qi/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-Qi,[c,u]=G1(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*Mx:null}),"period")}},"hexOddRLayout"),Sx=V1;var H1=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),wx=H1;var Li=Math.SQRT2/2,W1=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*Li,(s+1)*Li],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Li],[a+Li,o],[a,o+Li],[a-Li,o]]},"outline"),tileAt:l((r,s)=>{let a=r/Li,o=s/Li,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Li,v:t?i*Li:null}),"period")}},"staggeredIsoLayout"),Ex=W1;var Ax={square:wx,"staggered-iso":Ex,"hex-odd-r":Sx},X1=l(i=>{if(!Object.prototype.hasOwnProperty.call(Ax,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Ax[i.topologyId](i)},"groundLayoutFor"),Tx=X1;var ko=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var sh=.65,Op=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),er=.22,ah=.12,Bp={low:.2,high:.5},Cx=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,f=u*u+h*h,d=f===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/f)),p=ko(Math.hypot(i-t-u*d,e-n-h*d)),g=1-d;return p===0?-1/0:p*p*(r+(o-r)*(1-g*g*g)+c)},"halfRidge"),Go=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),q1=l((i,e,t)=>({u:(Go(i,e,t,1)*2-1)*er,v:(Go(i,e,t,2)*2-1)*er,scale:.75+Go(i,e,t,3)*.5}),"peakOf"),Y1=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=Dn([Ii({cell:.7,period:o,seed:t}),Ii({cell:.35,period:o,seed:t+1}),Ii({cell:.17,period:o,seed:t+2})]),u=Dn([Ii({cell:.45,period:o,seed:t+3}),Ii({cell:.22,period:o,seed:t+4})]),h=l((U,K)=>1-2*Math.abs(u(U,K)),"ridged"),f=Ii({cell:.8,period:o,seed:t+5}),d=Ii({cell:.8,period:o,seed:t+6}),p={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],w=[],A=l((U,K)=>{let N=(U%r+r)%r;return!a&&(K<0||K>=s)?null:(K%s+s)%s*r+N},"index"),E=l(U=>{let K=new Array(r*s).fill(1/0),N=[];U.forEach((V,z)=>{V&&(K[z]=0,N.push([z%r,Math.floor(z/r)]))});for(let[V,z]of N){let oe=K[z*r+V]??1/0;oe>=Pi.reach||n.neighbours(V,z).forEach(([ue,q])=>{let he=q*r+ue;(K[he]??1/0)>oe+1&&(K[he]=oe+1,N.push([ue,q]))})}return K},"distancesFromLand"),R=l((U,K)=>{let N=n.terrainAt(U,K);return`${N}${N!=="Unknown"&&n.waterAt(U,K)?" water":""}`},"readAs"),C=l(U=>{if(U!==void 0&&y.length>0&&U.every(([ee,ce])=>{let re=A(ee,ce);return re===null||y[re]===R(ee,ce)}))return[];let K=[],N=[],V=[];for(let ee=0;ee<s;ee++)for(let ce=0;ce<r;ce++){let re=n.terrainAt(ce,ee);K.push(re),N.push(re!=="Unknown"&&n.waterAt(ce,ee)),V.push(Hu(re))}let z=E(K.map((ee,ce)=>ee!=="Unknown"&&!N[ce])),oe=K.map((ee,ce)=>`${ee}${N[ce]?" water":""}`),ue=[];oe.forEach((ee,ce)=>{y[ce]!==ee&&ue.push([ce%r,Math.floor(ce/r)])}),y=oe,g=V.map((ee,ce)=>{let re=ee===Vu,Re=ce%r,ke=Math.floor(ce/r),Pe=q1(Re,ke,t);if(!N[ce])return{relief:ee.relief,colour:Op(ee.colour),surface:qn.indexOf(ee.surface),unknown:re,peak:Pe};let Je=Math.min(z[ce]??1/0,Pi.reach),Ke=Pi.shore+(Pi.deep-Pi.shore)*Math.max(0,Je-1)/Math.max(1,Pi.reach-1);return{relief:{...ee.relief,base:Ke},colour:Op(ee.colour),surface:qn.indexOf("sand"),unknown:re,peak:Pe}});let q=w,he=new Map(ue.map(([ee,ce])=>[`${ee},${ce}`,[ee,ce]]));return w=g.map(({relief:ee,unknown:ce},re)=>!ce&&!N[re]&&ee.shape==="peaked"),ue.some(([ee,ce])=>{let re=ce*r+ee;return w[re]===!0||q[re]===!0})&&([x,_]=J()),ue.forEach(([ee,ce])=>{let re=ce*r+ee;w[re]!==!0&&q[re]!==!0||n.neighbours(ee,ce).forEach(([Re,ke])=>{let Pe=A(Re,ke);Pe!==null&&w[Pe]===!0&&he.set(`${Re},${ke}`,[Re,ke])})}),[...he.values()]},"refresh"),v=l(U=>{let[K,N]=i.centre(0,U);return Math.max(...i.outline(0,U).map(([V,z])=>Math.hypot(V-K,z-N)))},"cornerOf"),S=l((U,K)=>{let[N,V]=i.centre(0,U),z=[];for(let oe=-8;oe<=8;oe++)for(let ue=-6;ue<=6;ue++){let[q,he]=i.centre(ue,U+oe);Math.hypot(q-N,he-V)<K+1e-9&&z.push([ue,oe])}return z},"offsetsWithin"),I=l((U,K,N,V)=>{if(r>=6&&(!a||s>=6)){let ee=l((Re,ke)=>{let Pe=(Re%ke+ke)%ke;return Pe*2<ke?Pe:Pe-ke},"nearest"),ce=ee(N-U,r),re=a?ee(V-K,s):V-K;return ce===0&&re===0?[]:[[ce,re]]}let z=l((ee,ce)=>{let re=(ee%ce+ce)%ce;return re===0?[0]:[re,re-ce]},"copies"),[oe,ue]=i.centre(U,K),q=z(N-U,r).flatMap(ee=>(a?z(V-K,s):[V-K]).flatMap(ce=>{if(ee===0&&ce===0)return[];let[re,Re]=i.centre(U+ee,K+ce);return[[ee,ce,Math.hypot(re-oe,Re-ue)]]})),he=Math.min(...q.map(([,,ee])=>ee));return q.filter(([,,ee])=>ee<=he+1e-9).map(([ee,ce])=>[ee,ce])},"stepsTo"),P=Math.max(...[0,1].flatMap(U=>{let[K,N]=i.centre(0,U);return n.neighbours(0,U).flatMap(([V,z])=>I(0,U,V,z).map(([oe,ue])=>{let[q,he]=i.centre(oe,U+ue);return Math.hypot(q-K,he-N)}))}),1),O=[0,1].map(U=>{let[K,N]=i.centre(0,U);return S(U,P+er*Math.SQRT2+ah+1.2+Math.max(v(0),v(1))).flatMap(([V,z])=>{let[oe,ue]=i.centre(V,U+z);return[V,z,oe-K,ue-N]})}),k=l((U,K,N,V,z,oe)=>{let ue=z-N,q=oe-V,he=ue*ue+q*q,ee=he===0?0:Math.max(0,Math.min(1,((U-N)*ue+(K-V)*q)/he));return Math.hypot(U-N-ue*ee,K-V-q*ee)},"toSegment"),J=l(()=>{let U=g.map(()=>[]),K=g.map(()=>[]),N=Math.max(v(0),v(1));return e?(g.forEach((V,z)=>{if(w[z]!==!0)return;let oe=z%r,ue=Math.floor(z/r),[q,he]=i.centre(oe,ue),ee=new Map;n.neighbours(oe,ue).forEach(([ce,re])=>{let Re=A(ce,re);Re!==null&&w[Re]===!0&&I(oe,ue,ce,re).forEach(([ke,Pe])=>ee.set(`${ke},${Pe}`,[ke,Pe,Re]))}),ee.forEach(([ce,re,Re])=>{let ke=g[Re];if(ke===void 0||re<0||re===0&&ce<0)return;let[Pe,Je]=i.centre(oe+ce,ue+re),{peak:Ke,relief:Xe}=V,{peak:Qe,relief:dt}=ke,St=Ke.u,lt=Ke.v,Pt=Pe-q+Qe.u,at=Je-he+Qe.v,It=Xe.base*sh*Ke.scale,st=dt.base*sh*Qe.scale,Lt=Math.hypot(Pt-St,at-lt)||1,B=16+(re+2)*5+(ce+2),Tt=(Go(oe,ue,t,B)*2-1)*ah,ct=Bp.low+(Bp.high-Bp.low)*Go(oe,ue,t,B+32),et=(St+Pt)/2-(at-lt)/Lt*Tt,pe=(lt+at)/2+(Pt-St)/Lt*Tt,xt=Math.max(Math.hypot(St-et,lt-pe),Math.hypot(Pt-et,at-pe))+1.2,Ue={au:St,av:lt,ah:It,mu:et,mv:pe,mh:ct*Math.min(It,st),bu:Pt,bv:at,bh:st,roughness:(Xe.roughness+dt.roughness)/2,cu:et,cv:pe,reach:xt*xt},Ge=(Math.sqrt(Ue.reach)+N)**2,T=O[ue&1]??[];for(let b=0;b<T.length;b+=4){let H=T[b+2],fe=T[b+3];if((H-et)**2+(fe-pe)**2>=Ge||Math.min(k(H,fe,St,lt,et,pe),k(H,fe,et,pe,Pt,at))>=1.2+N)continue;let se=A(oe+T[b],ue+T[b+1]);se!==null&&(U[se]?.push(Ue),K[se]?.push(H,fe))}})}),[U,K]):[U,K]},"ranges"),D=l(U=>{let[K,N]=i.centre(0,U),V=Math.max(...i.outline(0,U).map(([oe,ue])=>Math.hypot(oe-K,ue-N))),z=[];for(let oe=-6;oe<=6;oe++)for(let ue=-4;ue<=4;ue++){let[q,he]=i.centre(ue,U+oe);Math.hypot(q-K,he-N)<1.2+V+er*Math.SQRT2+1e-9&&z.push([ue,oe])}return z},"offsetsFor"),Y=[D(0),D(1)],ne=l((U,K)=>{let[N,V]=i.tileAt(U,K),z=A(N,V),oe=z===null?null:g[z]??null;if(oe===null||oe.unknown)return{height:0,colour:Op(Vu.colour),surfaces:qn.map(()=>0),unseen:!0};let ue=null,q=null,he=l(at=>at==="rolling"?ue??=c(U,K):q??=h(U,K),"noiseHere"),ee=0,ce=0,re=0,Re=0,ke=qn.map(()=>0),Pe=0,Je=0,Ke=0,Xe=0,Qe=U+er*f(U,K),dt=K+er*d(U,K);(Y[V&1]??[]).forEach(([at,It])=>{let st=N+at,Lt=V+It,B=A(st,Lt);if(B===null)return;let Tt=g[B];if(Tt===void 0)return;let[ct,et]=i.centre(st,Lt),{relief:pe,colour:xt,peak:Ue,surface:Ge}=Tt,T=ko(Math.hypot(U-ct,K-et)),b=pe.shape==="peaked"?ko(Math.hypot(U-ct-Ue.u,K-et-Ue.v)):0,H=ko(Math.hypot(Qe-ct,dt-et))**3;if(T>0){let fe=p[pe.shape],se=fe===null?0:pe.roughness*he(fe);pe.shape==="peaked"?ce+=T*(pe.base*(1-sh)+se*.5):ce+=T*(pe.base+se),ee+=T}if(b>0){let fe=pe.roughness*he("ridged");re+=b*b*(pe.base*sh*Ue.scale+fe*.5)}Re+=H,Tt.unknown||(ke[Ge]=(ke[Ge]??0)+H,Pe+=H),Je+=H*xt[0],Ke+=H*xt[1],Xe+=H*xt[2]});let St=z===null?[]:x[z]??[],lt=z===null?[]:_[z]??[],Pt=re;if(St.length>0){let[at,It]=i.centre(N,V);St.forEach((st,Lt)=>{let B=U-at+(lt[Lt*2]??0),Tt=K-It+(lt[Lt*2+1]??0);if((B-st.cu)**2+(Tt-st.cv)**2>=st.reach)return;let ct=st.roughness*he("ridged")*.5;Pt=Math.max(Pt,Cx(B,Tt,st.au,st.av,st.ah,st.mu,st.mv,st.mh,ct),Cx(B,Tt,st.bu,st.bv,st.bh,st.mu,st.mv,st.mh,ct))})}return{height:(ee>0?ce/ee:0)+Pt,colour:Re>0?[Je/Re,Ke/Re,Xe/Re]:oe.colour,surfaces:Pe>0?ke.map(at=>at/Pe):qn.map((at,It)=>It===oe.surface?1:0),unseen:!1}},"sample");return C(),{sample:ne,height:l((U,K)=>ne(U,K).height,"height"),refresh:C}},"createRelief"),Rx=Y1;var Px=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),Ix=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((S,I)=>[S*a,I*o],"at"),f=r+3,d=new Float64Array(f*(s+3)),p=(r+1)*(s+1),g=new Float32Array(p*3),y=new Uint8Array(p*4),x=new Uint8Array(p*4),_=new Float32Array(p);for(let S=-1;S<=s+1;S++)for(let I=-1;I<=r+1;I++){let P=e.sample(...h(c+I,u+S)),{height:O,colour:k}=P;if(d[(S+1)*f+(I+1)]=O,I>=0&&I<=r&&S>=0&&S<=s){let J=S*(r+1)+I;g.set(k,J*3),P.surfaces.forEach((D,Y)=>{(Y<4?y:x)[J*4+Y%4]=Math.round(D*255)}),_[J]=P.unseen?1:0}}let w=l((S,I)=>d[(I+1)*f+(S+1)]??0,"height"),A=new Float32Array(p*3),E=new Float32Array(p*3),[R,C]=h(c,u);for(let S=0;S<=s;S++)for(let I=0;I<=r;I++){let P=S*(r+1)+I,[O,k]=h(c+I,u+S),J=(w(I+1,S)-w(I-1,S))/(2*a),D=(w(I,S+1)-w(I,S-1))/(2*o),Y=Math.hypot(J,1,D);A[P*3]=O-R,A[P*3+1]=w(I,S),A[P*3+2]=k-C,E[P*3]=-J/Y,E[P*3+1]=1/Y,E[P*3+2]=-D/Y}let v=new Uint32Array(r*s*6);for(let S=0;S<s;S++)for(let I=0;I<r;I++){let P=S*(r+1)+I,O=P+1,k=P+r+1,J=k+1,D=(S*r+I)*6;v.set([P,k,O,O,k,J],D)}return{u:R,v:C,positions:A,normals:E,colours:g,surfacesA:y,surfacesB:x,unseen:_,indices:v}},"buildChunk"),Lx=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/r);d<=Math.floor((h+n)/r);d++)for(let p=Math.floor((f-n)/s);p<=Math.floor((f+n)/s);p++){if(!a&&(p<0||p>=i.chunksV))continue;let g=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var On=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),Dx={Forest:{plants:[On("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[On("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),On("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[On("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),On("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[On("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[On("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[On("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[On("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),On("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[On("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[On("rock",2,[.7,1.1],"#a8936a","#a8936a"),On("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},ba=l(i=>Object.prototype.hasOwnProperty.call(Dx,i)?Dx[i]:null,"growthOf");var $1=["River"],$n=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),Z1=["Irrigation","Farmland","Fortress","Airbase"],Nx=l(i=>i.city||Z1.some(e=>$n(i,e))?null:ba(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),J1=l((i,e)=>{if(i.city)return null;let t=$n(i,"Road"),n=$n(i,"Railroad"),r=t?e.filter(f=>$n(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||$n(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,d)=>f[0]===d[0]&&f[1]===d[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(f=>!n||!s.some(d=>a(d,f))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:$n(i,"Farmland")?"farmland":$n(i,"Irrigation")?"irrigation":null,mine:$n(i,"Mine"),fortress:$n(i,"Fortress"),airbase:$n(i,"Airbase"),pollution:$n(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!$1.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:ba(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=Nx(i);return u!==null&&(c.woods=e.filter(f=>Nx(f.tile)===u).map(({offset:f})=>f),c.paths=e.filter(f=>!!f.tile.city||$n(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Ux=J1;var At=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Fx={Coal:At("rocks","#26262a",4),Gold:At("rocks","#d8b13a",3),Gems:At("rocks","#59c2d6",4,"#b05ad0"),Iron:At("rocks","#8a5a44",4),Wheat:At("crop","#d9b84a",5,"#a88a2c"),Spice:At("crop","#c0452e",4,"#5d7a2a"),Wine:At("crop","#6a2c5e",4,"#5d7a2a"),Silk:At("crop","#e9e2cf",3,"#4f7a34"),Fruit:At("crop","#e08a2a",4,"#3f7a2a"),Horse:At("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:At("animal","#4a3424",3,"#2a1e16"),Game:At("animal","#a9835a",2,"#5a4430"),"Tundra:Game":At("animal","#8f7e66",2,"#e8e2d6"),Furs:At("animal","#b0602a",2,"#f0e8dc"),Ivory:At("animal","#8a8580",1,"#f2ead8"),Seal:At("animal","#6e7072",2,"#4a4c4e"),Pheasant:At("bird","#8a3a22",2,"#3d6a3a"),Fish:At("fish","#b8c4cc",5),Whales:At("whale","#3a4048",1),Oil:At("derrick","#222224",1,"#121214"),Oasis:At("oasis","#3f7a32",3,"#3f86a8"),Peat:At("peat","#4a3624",4),Shield:At("logs","#7a5532",4,"#c9a47a")},K1=At("cairn","#9a9690",5),Ox=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Fx,n)?Fx[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??K1},"specialLook");var Xp=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Bn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},zp=.06,Bx="#8c7a58",zx="#5f5953",j1="#a9abae",Q1="#5e432b",eE="#4f87b0",tE="#7da33f",nE=["#c2b448","#8fae3e"],kx="#9d968a",iE="#4a4c50",Hp="#6b4a2e",rE="#7a6a58",sE="#b89a5a",aE="#c9b48e",Gx="#34322a",Mn=new yi(1,1,1),Sa=new bi(.5,.5,1,8),qp=new Mi(.5,1,8),oE=new Mi(.5,1,4),Ma=new wr(.5,8,6),Vo=new bi(.5,.5,1,4,1,!0),Ho=new Mi(.5,1,5,1,!0),oh=new wr(.5,5,3),kp={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},lE=.05,cE=.22,Vx=72,li=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Hx=new Map,Gp=l(i=>{let e=Hx.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Oe(i);e=[t,n,r],Hx.set(i,e)}return e},"colourOf"),Wx=new WeakMap,uE=l(i=>{let e=Wx.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Wx.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),hE=new mt,dE=new We,fE=new X,pE=new mn,mE=new Cn,gE=new X,zt,Yx,ln,Kp=class Kp{constructor(e,t){Q(this,zt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=Gp(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/zp)),u=Math.max(1,Math.ceil(n/zp)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<c;d++)for(let p=0;p<u;p++){let[g,y]=f(d/c,(p+1)/u),[x,_]=f((d+1)/c,(p+1)/u),[w,A]=f(d/c,p/u),[E,R]=f((d+1)/c,p/u);G(this,zt,ln).call(this,g,y,s,a),G(this,zt,ln).call(this,x,_,s,a),G(this,zt,ln).call(this,w,A,s,a),G(this,zt,ln).call(this,x,_,s,a),G(this,zt,ln).call(this,E,R,s,a),G(this,zt,ln).call(this,w,A,s,a)}}disc(e,t,n,r,s=12){let a=Gp(n),[o,c]=e,u=Math.max(1,Math.ceil(t/zp)),h=l((f,d)=>{let p=d/s*Math.PI*2,g=f/u*t;return[o+Math.cos(p)*g,c+Math.sin(p)*g]},"at");for(let f=0;f<u;f++)for(let d=0;d<s;d++){let p=h(f+1,d),g=h(f+1,d+1);if(f===0)G(this,zt,ln).call(this,o,c,r,a),G(this,zt,ln).call(this,...g,r,a),G(this,zt,ln).call(this,...p,r,a);else{let y=h(f,d),x=h(f,d+1);G(this,zt,ln).call(this,...y,r,a),G(this,zt,ln).call(this,...x,r,a),G(this,zt,ln).call(this,...p,r,a),G(this,zt,ln).call(this,...x,r,a),G(this,zt,ln).call(this,...g,r,a),G(this,zt,ln).call(this,...p,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=uE(e),c=hE.compose(fE.set(...t),pE.setFromEuler(mE.set(...s)),gE.set(...n)),u=c.elements,h=dE.getNormalMatrix(c).elements,[f,d,p]=Gp(r),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],w=a[y+2],A=o[y],E=o[y+1],R=o[y+2],C=h[0]*A+h[3]*E+h[6]*R,v=h[1]*A+h[4]*E+h[7]*R,S=h[2]*A+h[5]*E+h[8]*R,I=Math.hypot(C,v,S)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*w+u[12],u[1]*x+u[5]*_+u[9]*w+u[13],u[2]*x+u[6]*_+u[10]*w+u[14]),g.normals.push(C/I,v/I,S/I),g.colours.push(f,d,p)}}spot(e,t){let n=li(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-cE-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,AE(e,t,o,c)-lE-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=li(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Vx;h++){let f=r+h/Vx*Math.PI*2,d=[s+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>c&&(o=d,c=p)}return this.taken.push([o[0],o[1],n]),o}};zt=new WeakSet,Yx=l(function(e,t){let r=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,s=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),ln=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...G(this,zt,Yx).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(Kp,"Layer");var Wp=Kp,Yp=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),$p=l(i=>i.alone||i.joins.length>0,"drawn"),xE=l((i,e)=>{let{place:t}=i;$p(e)&&(e.joins.forEach(n=>i.strip(t.centre,Yp(t,n),.07,Bx,Bn.road)),i.disc(t.centre,e.alone?.09:.035,Bx,Bn.road))},"road"),_E=l((i,e)=>{if(!$p(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>Yp(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,zx,Bn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,Q1,Bn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,j1,Bn.rail))}),i.disc(t.centre,.05,zx,Bn.ballast)},"railroad"),vE=l((i,e)=>{let{centre:t,inner:n}=i.place,r=e==="farmland"?6:4,s=n*.9,a=s*2/r;for(let o=0;o<r;o++){let c=t[1]-s+a*(o+.5),u=e==="farmland"?nE[o%2]:tE;if(i.strip([t[0]-s,c],[t[0]+s,c],a*.8,u,Bn.field),o>0){let h=t[1]-s+a*o;i.strip([t[0]-s,h],[t[0]+s,h],.016,eE,Bn.field+.001)}}},"fields"),yE=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Mn,[e-.02,n+.05,t],[.01,.11,.01],Hp,[0,0,-.3]),i.solid(Mn,[e+.02,n+.05,t],[.01,.11,.01],Hp,[0,0,.3]),i.solid(Sa,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid(qp,[a,i.ground(a,o)+.02,o],[.07,.04,.07],rE)})},"mine"),bE=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(Mn,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],kx)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(Sa,[o,i.ground(o,c)+.035,c],[.045,.07,.045],kx)})},"fortress"),ME=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,iE,Bn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Bn.road+.004),i.solid(Mn,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),SE=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Gx,Bn.smear,14),i.disc(i.spot(7,.5),e*.25,Gx,Bn.smear+.001)},"pollution"),wE=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(li(i.place.seed,n*31+o*2)-.5)*c,t[1]+(li(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),f=li(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Ma,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,f,0]);break;case"crop":i.solid(Sa,[c,h+.02,u],[.008,.04,.008],r),i.solid(Ma,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(Mn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(Mn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],r,[0,f,0]),i.solid(Mn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],r,[0,f,0]);break}case"bird":i.solid(Ma,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(Mn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],r,[.4,f,0]);break;case"fish":i.solid(Ma,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(Ma,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(Mn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(Mn,[c,h+.008,u],[.08,.016,.08],r),i.solid(oE,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,Bn.field+.002);{let[d,p]=s(o+5,.1),g=i.ground(d,p);i.solid(Sa,[d,g+.06,p],[.012,.12,.012],Hp),i.solid(qp,[d,g+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Sa:Mn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(Ma,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),EE=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+li(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(Sa,[r,a+.02,s],[.05,.04,.05],aE),i.solid(qp,[r,a+.055,s],[.065,.035,.065],sE)})},"hut"),$x={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Zx=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(Vo,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(Ho,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(Ho,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(Vo,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(oh,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(Vo,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(Ho,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(Vo,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(Mn,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(oh,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(Ho,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(Ho,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(oh,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Mn,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(oh,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(Vo,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(Mn,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),AE=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),TE=l((i,e)=>{let t=ba(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*li(s,h),d=t.conifers,p=d!==void 0&&li(s,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,g=$x[p]*f;for(let y=0;y<6;y++){let x=li(s,h+2+y*2)*Math.PI*2,_=Math.sqrt(li(s,h+3+y*2))*r*.92,w=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(w,A,g)){Zx(i,o,p,w,A,f,x),i.taken.push([w,A,g]),i.grown.push([w,A,p]);break}}}})},"plants"),Vp=.26,Xx=.3,CE=.15,qx=.5,lh=[.9,1.3],ms=l((i,e,t)=>li(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),RE=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/Vp)),f=o.u/h,d=o.v===null?null:Math.max(1,Math.round(o.v/Vp)),p=o.v===null||d===null?Vp:o.v/d,g=r.map(([v])=>v),y=r.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[w,A]=[Math.floor(Math.min(...y)/p)-1,Math.ceil(Math.max(...y)/p)],E=a.filter(([v,S])=>!i.woods.some(([I,P])=>I===v&&P===S)).map(v=>{let[S,I]=c(v),P=Math.hypot(S-n[0],I-n[1]);return{mu:S,mv:I,length:P}}),R=t.plants.reduce((v,{count:S})=>v+S,0),C=[];for(let v=w;v<=A;v++)for(let S=x;S<=_;S++){let I=(S%h+h)%h,P=d===null?v:(v%d+d)%d,O=(S+.5+(ms(I,P,0)*2-1)*Xx)*f,k=(v+.5+(ms(I,P,1)*2-1)*Xx)*p;if(!s(O,k))continue;let J=E.reduce((N,{mu:V,mv:z,length:oe})=>{let ue=oe/2-((O-n[0])*(V-n[0])+(k-n[1])*(z-n[1]))/oe;return Math.min(N,Math.max(0,ue)/CE)},1);if(ms(I,P,2)>=qx+(1-qx)*J)continue;let D=ms(I,P,3)*R,Y=t.plants[0];for(let N of t.plants)if(Y=N,D-=N.count,D<0)break;let ne=t.conifers,U=ne!==void 0&&ms(I,P,4)>=ne[0]+(ne[1]-ne[0])*u?"broadleaf":Y.kind,K=Y.size[0]+(Y.size[1]-Y.size[0])*ms(I,P,5);C.push({u:O,v:k,kind:U,plant:Y,room:$x[U]*K*lh[1],size:K*(lh[0]+(lh[1]-lh[0])*J),facing:ms(I,P,6)*Math.PI*2})}return C},"woodsPlants"),PE=l((i,e,t)=>{let{centre:n,around:r,toward:s,heightAt:a}=i.place,o=Math.max(...r.map(u=>{let[h,f]=s(u);return Math.hypot(h-n[0],f-n[1])})),c=e.paths.map(u=>s(u));c.forEach((u,h)=>c.slice(h+1).forEach(f=>{Math.hypot(f[0]-u[0],f[1]-u[1])<=o+1e-6&&i.lines.push([u,f])})),RE(e,i.place,t).forEach(({u,v:h,kind:f,plant:d,size:p,room:g,facing:y})=>{f!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(Zx(i,d,f,u,h,p,y),i.grown.push([u,h,f]))})},"woods"),Zp=l((i,e,t)=>{let n=new Wp(t,e),{centre:r,radius:s}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&$p(o)&&(o.joins.forEach(c=>n.lines.push([r,Yp(e,c)])),o.alone&&n.lines.push([r,r]))}),i.fortress){let o=s*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[r[0]+u,r[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=s*.75;n.lines.push([[r[0]-o,r[1]+.12],[r[0]+o,r[1]+.12]])}i.irrigation!==null&&vE(n,i.irrigation),i.road!==null&&xE(n,i.road),i.railroad!==null&&_E(n,i.railroad),i.mine&&yE(n,n.claim(...kp.mine,.1)),i.fortress&&bE(n),i.airbase&&ME(n),i.pollution&&SE(n),i.specials.forEach(([o,c],u)=>wE(n,Ox(o,c),n.claim(...kp.special(u),.1),u+1)),i.hut&&EE(n,n.claim(...kp.hut,.13));let a=ba(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?PE(n,i,a):TE(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),IE=l((i,e,t)=>{let n=Xp();return t.forEach(({overlay:r,place:s})=>Zp(r,s,n)),Jp(i,e,n)},"overlayMesh"),Jp=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Jx=IE;var Nr,cn,ci,Xo,ui,zn,vn,wa,qo,gs,Yo,$o,bt,Kx,Qp,em,ch,uh,jx,Wo,tm=class tm{constructor(e){Q(this,bt);Q(this,Nr);Q(this,cn);Q(this,ci,[]);Q(this,Xo);Q(this,ui);Q(this,zn,new Set);Q(this,vn,null);Q(this,wa,null);Q(this,qo,new Map);Q(this,gs,[0,0]);Q(this,Yo);Q(this,$o);W(this,ui,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=Tx({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),W(this,Nr,Rx({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:l((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:l((d,p)=>t.directions().map(g=>t.neighbour(d,p,g)).filter(g=>g!==null),"neighbours")}})),W(this,cn,Px(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[g,y]=this.layout.centre(d,p);return Math.hypot(g-a,y-o)}));W(this,Xo,1.2+c+er*Math.SQRT2+Math.max((Pi.reach-1)*u,u/2+er*Math.SQRT2+ah));let h=this.layout.outline(0,0),f=h.flatMap(([d,p],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-d,x-p);return _===0?[]:[{away:Math.abs((y-d)*(o-p)-(x-p)*(a-d))/_,normal:[(x-p)/_,(d-y)/_]}]});W(this,Yo,Math.min(...f.map(({away:d})=>d))),W(this,$o,Math.min(...f.map(({away:d,normal:[p,g]})=>d/(Math.abs(p)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=m(this,cn),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((y,x)=>{let _=`${y},${x}`,w=n.get(_);return w===void 0&&(w=m(this,Nr).height(y*r,x*s),n.set(_,w)),w},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(p-f)*u;let g=h(a+1,o+1);return g+(p-g)*(1-c)+(d-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=m(this,cn);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return m(this,cn).chunksV*m(this,cn).stepsV*m(this,cn).spacingV}heightAt(e,t){return m(this,Nr).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=m(this,cn),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);W(this,ci,G(this,bt,Wo).call(this,s,e,t)),W(this,gs,[e,t]),s.forEach(a=>m(this,zn).add(a))}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];W(this,gs,[t,n]),(e.length===0?[...G(this,bt,uh).call(this).values()].flat():G(this,bt,jx).call(this,e)).forEach(([o,c])=>{let u=G(this,bt,ch).call(this,o,c);if(m(this,zn).has(u)||m(this,vn)?.key===u&&!G(this,bt,Kx).call(this,m(this,vn),o,c))return;JSON.stringify(G(this,bt,Qp).call(this,o,c))!==(m(this,qo).get(`${o},${c}`)??"null")&&m(this,zn).add(u)});let s=m(this,Nr).refresh(r?void 0:e);if(s.length===0)return s;let a=Lx(m(this,cn),this.layout,s,m(this,Xo)).map(([o,c])=>`${o},${c}`);return W(this,ci,G(this,bt,Wo).call(this,[...new Set([...m(this,ci),...a])],t,n)),s}refocus(e,t){W(this,ci,G(this,bt,Wo).call(this,m(this,ci),e,t)),W(this,gs,[e,t])}pending(){return m(this,ci).length}overlaysPending(){return m(this,zn).size+(m(this,vn)===null||m(this,zn).has(m(this,vn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;m(this,ci).length>0;){if(r())return;let s=m(this,ci).shift(),[a,o]=s.split(",").map(Number);e.setChunk(a,o,Ix(m(this,cn),m(this,Nr),a,o)),m(this,zn).add(s)}for(;m(this,zn).size>0||m(this,vn)!==null;){if(m(this,vn)!==null&&m(this,zn).has(m(this,vn).key)&&W(this,vn,null),m(this,vn)===null){let d=G(this,bt,Wo).call(this,[...m(this,zn)],...m(this,gs))[0];m(this,zn).delete(d),W(this,vn,{key:d,squares:G(this,bt,uh).call(this).get(d)??[],done:0,laid:Xp(),heights:new Map})}let s=m(this,vn);for(;s.done<s.squares.length;){let[d,p]=s.squares[s.done],g=G(this,bt,em).call(this,d,p,s.heights);if(s.done++,g!==null&&Zp(g.overlay,g.place,s.laid),s.done<s.squares.length&&r())return}let[a,o]=s.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=m(this,cn);W(this,vn,null),e.setOverlay(a,o,s.laid.positions.length===0?null:Jp(a*c*h,o*u*f,s.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=m(this,cn),o=new Map,c=(G(this,bt,uh).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>G(this,bt,em).call(this,u,h,o)??[]);return c.length===0?null:Jx(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return G(this,bt,ch).call(this,e,t)}};Nr=new WeakMap,cn=new WeakMap,ci=new WeakMap,Xo=new WeakMap,ui=new WeakMap,zn=new WeakMap,vn=new WeakMap,wa=new WeakMap,qo=new WeakMap,gs=new WeakMap,Yo=new WeakMap,$o=new WeakMap,bt=new WeakSet,Kx=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),Qp=l(function(e,t){let n=m(this,ui).topology();return Ux(m(this,ui).get(e,t),n.directions().flatMap(r=>{let s=n.neighbour(e,t,r);return s===null?[]:[{offset:n.offset(r,e,t),tile:m(this,ui).get(s[0],s[1])}]}))},"#overlayAt"),em=l(function(e,t,n){let r=G(this,bt,Qp).call(this,e,t);if(m(this,qo).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=m(this,ui).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:m(this,Yo),inner:m(this,$o),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,f]=this.layout.tileAt(c,u);return h===e&&f===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),ch=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=m(this,cn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(s*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(r-1,Math.max(0,d))}`},"#chunkOf"),uh=l(function(){if(m(this,wa)===null){let e=new Map;for(let t=0;t<m(this,ui).height();t++)for(let n=0;n<m(this,ui).width();n++){let r=G(this,bt,ch).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}W(this,wa,e)}return m(this,wa)},"#chunksOfSquares"),jx=l(function(e){let t=m(this,ui).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),Wo=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=m(this,cn),c=r*a,u=s*o,{u:h,v:f}=this.layout.period(),d=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),p=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((x+.5)*u-n,f))},"distance");return[...e].sort((g,y)=>p(g)-p(y))},"#nearestFirst"),l(tm,"Land");var jp=tm,Qx=jp;var LE=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ea=LE;var e_=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var DE=8,NE=.92,UE=.02,t_=3,FE=50,OE=8,BE=10,n_=250,Zo,Jo,Aa,Ta,xs,Ur,nm=class nm{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){Q(this,Zo);Q(this,Jo);Q(this,Aa);Q(this,Ta);Q(this,xs,!1);Q(this,Ur);this.pointerId=e,W(this,Zo,t),W(this,Jo,n),W(this,Aa,t),W(this,Ta,n),W(this,Ur,[{x:t,y:n,time:r}])}dragging(){return m(this,xs)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!m(this,xs)&&Math.hypot(t-m(this,Zo),n-m(this,Jo))<DE)return null;let s=!m(this,xs),a=m(this,Aa)-t,o=m(this,Ta)-n;return W(this,xs,!0),W(this,Aa,t),W(this,Ta,n),m(this,Ur).push({x:t,y:n,time:r}),m(this,Ur).length>20&&m(this,Ur).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return e_(m(this,Ur),e)}};Zo=new WeakMap,Jo=new WeakMap,Aa=new WeakMap,Ta=new WeakMap,xs=new WeakMap,Ur=new WeakMap,l(nm,"Press");var hh=nm,Di,Ko,im=class im{constructor(e){Q(this,Di,null);Q(this,Ko);W(this,Ko,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>t_?t_/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<UE){W(this,Di,null);return}m(this,Ko).call(this,-r*u,-s*u);let h=Math.pow(NE,u/16);r*=h,s*=h,W(this,Di,window.requestAnimationFrame(o))},"step");W(this,Di,window.requestAnimationFrame(o))}gliding(){return m(this,Di)!==null}stop(){m(this,Di)!==null&&(window.cancelAnimationFrame(m(this,Di)),W(this,Di,null))}};Di=new WeakMap,Ko=new WeakMap,l(im,"Glide");var dh=im,_s,jo,Qo,Ca,rm=class rm{constructor(){Q(this,_s,0);Q(this,jo,0);Q(this,Qo,-1/0);Q(this,Ca,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=n_)return 0;let s=Math.sign(r),a=e.timeStamp-m(this,Qo)>n_||s!==m(this,jo);if(W(this,Qo,e.timeStamp),W(this,jo,s),a&&(W(this,_s,0),W(this,Ca,0)),n&&!e.ctrlKey&&m(this,Ca)>=BE)return 0;if(!a&&n){if(W(this,_s,m(this,_s)+r),Math.abs(m(this,_s))<(e.ctrlKey?OE:FE))return 0;W(this,_s,0)}return n&&!e.ctrlKey&&W(this,Ca,m(this,Ca)+1),r<0?1:-1}};_s=new WeakMap,jo=new WeakMap,Qo=new WeakMap,Ca=new WeakMap,l(rm,"WheelTurn");var fh=rm;var zE=350,kE=.006,i_=.004,Ni,Kt,yn,Ra,Ui,hi,xh,Jn,Kn,Fr,Pa,kn,Or,Ce,Zn,ph,mh,r_,am,tr,om,s_,nr,a_,o_,l_,c_,el,u_,h_,d_,gh,lm=class lm{constructor(e,t,n=null){Q(this,Ce);Q(this,Ni);Q(this,Kt);Q(this,yn,null);Q(this,Ra,[0,0]);Q(this,Ui,null);Q(this,hi);Q(this,xh,new fh);Q(this,Jn,new Map);Q(this,Kn,null);Q(this,Fr,null);Q(this,Pa,[]);Q(this,kn);Q(this,Or,null);W(this,Ni,e),W(this,Kt,t),W(this,kn,n),W(this,hi,new dh((r,s)=>{let[a,o]=G(this,Ce,r_).call(this);G(this,Ce,om).call(this,[a,o],[a-r,o-s])})),G(this,Ce,Zn).call(this,"pointerdown",r=>G(this,Ce,s_).call(this,r)),G(this,Ce,Zn).call(this,"pointermove",r=>G(this,Ce,o_).call(this,r)),G(this,Ce,Zn).call(this,"pointerup",r=>G(this,Ce,l_).call(this,r)),G(this,Ce,Zn).call(this,"pointercancel",r=>G(this,Ce,c_).call(this,r)),G(this,Ce,Zn).call(this,"wheel",r=>G(this,Ce,h_).call(this,r),{passive:!1}),G(this,Ce,Zn).call(this,"gesturestart",r=>G(this,Ce,gh).call(this,r,"start"),{passive:!1}),G(this,Ce,Zn).call(this,"gesturechange",r=>G(this,Ce,gh).call(this,r,"change"),{passive:!1}),G(this,Ce,Zn).call(this,"gestureend",r=>G(this,Ce,gh).call(this,r,"end"),{passive:!1}),G(this,Ce,Zn).call(this,"contextmenu",r=>G(this,Ce,a_).call(this,r)),G(this,Ce,Zn).call(this,"pointerleave",()=>m(this,kn)?.hover(null)),G(this,Ce,Zn).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return m(this,yn)?.dragging()===!0||m(this,Ui)!==null}moving(){return this.dragging()||m(this,Kn)!==null||m(this,hi).gliding()}dispose(){m(this,hi).stop(),G(this,Ce,nr).call(this),m(this,Pa).forEach(([e,t,n])=>m(this,Ni).removeEventListener(e,t,n)),W(this,Pa,[])}};Ni=new WeakMap,Kt=new WeakMap,yn=new WeakMap,Ra=new WeakMap,Ui=new WeakMap,hi=new WeakMap,xh=new WeakMap,Jn=new WeakMap,Kn=new WeakMap,Fr=new WeakMap,Pa=new WeakMap,kn=new WeakMap,Or=new WeakMap,Ce=new WeakSet,Zn=l(function(e,t,n){m(this,Ni).addEventListener(e,t,n),m(this,Pa).push([e,t,n])},"#listen"),ph=l(function(){return{width:m(this,Ni).clientWidth||1,height:m(this,Ni).clientHeight||1}},"#box"),mh=l(function([e,t]){let{width:n,height:r}=G(this,Ce,ph).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),r_=l(function(){let{width:e,height:t}=G(this,Ce,ph).call(this);return[e/2,t/2]},"#middle"),am=l(function(){let{width:e,height:t}=G(this,Ce,ph).call(this);return e/t},"#aspect"),tr=l(function(e){let t=m(this,Ni).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),om=l(function(e,t){m(this,Kt).setOrbit(ox(m(this,Kt).orbit(),m(this,Kt).lookHeight(),G(this,Ce,mh).call(this,e),G(this,Ce,mh).call(this,t),G(this,Ce,am).call(this)))},"#pan"),s_=l(function(e){if(m(this,hi).stop(),m(this,kn)?.hover(null),e.pointerType==="touch"&&(m(this,Jn).set(e.pointerId,G(this,Ce,tr).call(this,e)),m(this,Jn).size===2)){W(this,yn,null),G(this,Ce,nr).call(this),W(this,Kn,G(this,Ce,el).call(this));return}if(e.isPrimary&&e.button!==2){if(m(this,Ni).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),W(this,Ui,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new hh(e),[n,r]=G(this,Ce,tr).call(this,e),{clientX:s,clientY:a}=e;W(this,yn,t),W(this,Ra,[n,r]),G(this,Ce,nr).call(this),W(this,Or,window.setTimeout(()=>{W(this,Or,null),m(this,yn)===t&&!t.dragging()&&m(this,kn)?.menu(n,r,s,a,!0)===!0&&W(this,yn,null)},zE))}}},"#down"),nr=l(function(){m(this,Or)!==null&&(window.clearTimeout(m(this,Or)),W(this,Or,null))},"#stopHold"),a_=l(function(e){if(m(this,kn)===null||!m(this,kn).menuOnRightClick()||(e.preventDefault(),m(this,kn).menuOpen()))return;let[t,n]=G(this,Ce,tr).call(this,e);m(this,kn).menu(t,n,e.clientX,e.clientY,!1)&&(G(this,Ce,nr).call(this),W(this,yn,null))},"#rightClick"),o_=l(function(e){if(m(this,Jn).has(e.pointerId)&&(m(this,Jn).set(e.pointerId,G(this,Ce,tr).call(this,e)),m(this,Kn)!==null)){G(this,Ce,u_).call(this);return}let t=m(this,Ui);if(t!==null&&t.pointerId===e.pointerId){let s=m(this,Kt).orbit();m(this,Kt).setOrbit(ds({...s,yaw:s.yaw-(e.clientX-t.x)*kE,pitch:s.pitch+(e.clientY-t.y)*i_})),t.x=e.clientX,t.y=e.clientY;return}let n=m(this,yn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!m(this,hi).gliding()){let[s,a]=G(this,Ce,tr).call(this,e);m(this,kn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;G(this,Ce,nr).call(this);let r=G(this,Ce,tr).call(this,e);G(this,Ce,om).call(this,m(this,Ra),r),W(this,Ra,r)},"#move"),l_=l(function(e){if(m(this,Jn).delete(e.pointerId),m(this,Kn)!==null){W(this,Kn,m(this,Jn).size<2?null:G(this,Ce,el).call(this));return}if(m(this,Ui)?.pointerId===e.pointerId){W(this,Ui,null);return}let t=m(this,yn);if(!(t===null||t.pointerId!==e.pointerId)){if(W(this,yn,null),G(this,Ce,nr).call(this),!t.dragging()){let[n,r]=G(this,Ce,tr).call(this,e);m(this,kn)?.click(n,r,e.clientX,e.clientY);return}Ea()||m(this,hi).start(t.releaseVelocity(e.timeStamp))}},"#up"),c_=l(function(e){m(this,Jn).delete(e.pointerId),m(this,Kn)!==null&&W(this,Kn,m(this,Jn).size<2?null:G(this,Ce,el).call(this)),m(this,yn)?.pointerId===e.pointerId&&(W(this,yn,null),G(this,Ce,nr).call(this)),m(this,Ui)?.pointerId===e.pointerId&&W(this,Ui,null)},"#cancel"),el=l(function(){let[e,t]=[...m(this,Jn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:m(this,Kt).orbit()}},"#measurePair"),u_=l(function(){let e=m(this,Kn),t=G(this,Ce,el).call(this);e===null||t===null||m(this,Kt).setOrbit(ds({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*i_}))},"#twoFingers"),h_=l(function(e){e.preventDefault();let t=m(this,xh).turned(e,m(this,Fr)?.at??null);t!==0&&(m(this,hi).stop(),G(this,Ce,d_).call(this,t,G(this,Ce,tr).call(this,e)))},"#wheelTurned"),d_=l(function(e,t){let n=m(this,Kt).orbit(),r=_a(n,e),s=xa(n,m(this,Kt).lookHeight(),G(this,Ce,mh).call(this,t),G(this,Ce,am).call(this));if(s===null||r.distance===n.distance){m(this,Kt).setOrbit(r);return}let a=1-r.distance/n.distance;m(this,Kt).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),gh=l(function(e,t){if(e.preventDefault(),m(this,Kn)!==null){W(this,Fr,null);return}if(t==="end"){W(this,Fr,null);return}if(t==="start"){m(this,hi).stop(),W(this,yn,null),G(this,Ce,nr).call(this),W(this,Fr,{orbit:m(this,Kt).orbit(),at:e.timeStamp});return}let n=m(this,Fr);n!==null&&(n.at=e.timeStamp,m(this,Kt).setOrbit(ds({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(lm,"CameraInput");var sm=lm,f_=sm;var GE=["#9a9a9a","#4a4a4a"],tl=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?GE:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),cm=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),VE=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),HE=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=cm(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:tl(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:tl(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:VE(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),p_=HE;var WE=1,XE=.04,qE=12,YE=l((i,e,t,n,r,{water:s=0,ceiling:a=WE}={})=>{let{from:o,direction:c}=Cp(i,e,t,n),[u,h,f]=o,[d,p,g]=c;if(p>-1e-6)return null;let y=l(v=>[u+d*v,h+p*v,f+g*v],"at"),x=l(v=>{let[S,I,P]=y(v);return I-Math.max(s,r(S,P))},"above"),_=Math.max(0,(h-a)/-p),w=(h-s)/-p,A=XE/Math.max(1e-6,Math.hypot(d,g)),E=_;for(let v=_;;v=Math.min(w,v+A)){if(x(v)<=0){let S=E,I=v;for(let k=0;k<qE;k++){let J=(S+I)/2;x(J)>0?S=J:I=J}let[P,,O]=y(I);return[P,O]}if(v>=w)break;E=v}let[R,,C]=y(w);return[R,C]},"pickGround"),m_=YE;var _h=4,Br,nl,vs,ys,Sn,Ia,zr,ir,il,rl,sl,di,vh,g_,hm,dm=class dm{constructor(e,t,n,r,s){Q(this,di);Q(this,Br);Q(this,nl);Q(this,vs);Q(this,ys);Q(this,Sn);Q(this,Ia);Q(this,zr);Q(this,ir);Q(this,il);Q(this,rl);Q(this,sl,l(e=>{let t=m(this,Br).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;m(this,rl).call(this,n*m(this,Sn),r*m(this,Ia))},"#click"));W(this,Br,e),W(this,vs,t),W(this,ys,n),W(this,Sn,t.period().u),W(this,Ia,r),W(this,rl,s),W(this,ir,document.createElement("canvas"));let{v:a}=t.period();W(this,zr,a),W(this,il,[[0,0],[-m(this,Sn),0],...a===null?[]:[[0,-a],[-m(this,Sn),-a]]]);let o=Math.max(1,Math.round(m(this,Sn)*_h)),c=Math.max(1,Math.round(m(this,Ia)*_h));[e,m(this,ir)].forEach(u=>{u.width=o,u.height=c}),W(this,nl,e.getContext("2d")),e.addEventListener("click",m(this,sl))}dispose(){m(this,Br).removeEventListener("click",m(this,sl))}redraw(){let e=m(this,ir).getContext("2d");if(e===null)return;let t=m(this,ys).width(),n=m(this,ys).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,m(this,ir).width,m(this,ir).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=m(this,ys).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Hu(c).colour,m(this,il).forEach(([f,d])=>{G(this,di,g_).call(this,e,a,s,f,d),e.fill()});let[u,h]=m(this,vs).centre(a,s);if(o.city)r.push([u,h,tl(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=cm(o.units,null);f!==null&&r.push([u,h,tl(f.player)[0],1.4])}}r.forEach(([s,a,o,c])=>G(this,di,hm).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=m(this,nl);if(n===null)return;if(n.clearRect(0,0,m(this,Br).width,m(this,Br).height),n.drawImage(m(this,ir),0,0),t!==null){let[h,f]=m(this,vs).centre(t.x,t.y);n.fillStyle="#ffffff",G(this,di,hm).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=m(this,zr),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-m(this,Sn)*Math.floor(s/m(this,Sn)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-m(this,Sn),0,m(this,Sn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],g)=>{let[y,x]=G(this,di,vh).call(this,d+o+f,p+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};Br=new WeakMap,nl=new WeakMap,vs=new WeakMap,ys=new WeakMap,Sn=new WeakMap,Ia=new WeakMap,zr=new WeakMap,ir=new WeakMap,il=new WeakMap,rl=new WeakMap,sl=new WeakMap,di=new WeakSet,vh=l(function(e,t){return[e*_h,t*_h]},"#px"),g_=l(function(e,t,n,r=0,s=0){e.beginPath(),m(this,vs).outline(t,n).forEach(([a,o],c)=>{let[u,h]=G(this,di,vh).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),hm=l(function(e,t){return(m(this,zr)===null?[0]:[-m(this,zr),0,m(this,zr)]).flatMap(r=>[-m(this,Sn),0,m(this,Sn)].map(s=>G(this,di,vh).call(this,e+s,t+r)))},"#everywhere"),l(dm,"Minimap3D");var um=dm,x_=um;var $E=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),__=l(i=>{let e=$E(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var v_=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),y_=l(i=>i.city??i.workedBy??null,"squareCity");var ZE=.9,JE=l(i=>{let{columns:e,icons:t}=__(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),KE=l((i,e)=>ZE*e/Math.hypot(i,2),"yieldIconSize"),b_=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),M_=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=JE(e);return r.length===0?null:{at:i,size:KE(n,t),slots:r}},"laidYields"),S_=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=r.get(u);d===void 0&&(d=n.names.push(u)-1,r.set(u,d)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=f,n.sizes[s]=o,n.cells[s]=d,s++})}),n},"yieldMesh");var jE=10,QE=4e3,w_=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),eA=350,tA=500,nA=.25,iA=400,Vt,ul,hl,je,jt,Ms,dl,fl,ot,Mt,wn,La,pl,Ss,Gr,Da,ml,gl,Gn,xl,rr,fi,_l,Fi,Vr,vl,Vn,Na,Ua,sr,ar,Fa,Hr,ws,Oa,or,yl,lr,Es,bl,As,Oi,Ts,Cs,Ml,Sl,Ba,wl,za,El,ka,Ga,Rs,de,pm,E_,yh,A_,al,T_,C_,R_,mm,bh,P_,I_,ol,kr,ll,L_,D_,gm,bs,N_,U_,F_,xm,cl,_m,O_,B_,vm,un,z_,k_,ym,bm=class bm{constructor(e,t=bx){Q(this,de);Q(this,Vt);Q(this,ul);Q(this,hl,[]);Q(this,je);Q(this,jt);Q(this,Ms,null);Q(this,dl,0);Q(this,fl,"");Q(this,ot);Q(this,Mt,null);Q(this,wn,null);Q(this,La);Q(this,pl);Q(this,Ss);Q(this,Gr,null);Q(this,Da,null);Q(this,ml);Q(this,gl,!1);Q(this,Gn);Q(this,xl);Q(this,rr,new Map);Q(this,fi,new Map);Q(this,_l);Q(this,Fi,null);Q(this,Vr,null);Q(this,vl);Q(this,Vn,l(()=>{let e=m(this,Vr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),W(this,Vr,null),document.removeEventListener("keydown",m(this,Vn),!0),e.open&&m(this,Gn).endTooltip(m(this,Vt)))},"#endHover"));Q(this,Na,null);Q(this,Ua,!0);Q(this,sr,new Map);Q(this,ar,null);Q(this,Fa,new Map);Q(this,Hr,new Map);Q(this,ws,[]);Q(this,Oa,0);Q(this,or,null);Q(this,yl,null);Q(this,lr,!0);Q(this,Es);Q(this,bl,l(()=>{},"#stopUnitSize"));Q(this,As,!1);Q(this,Oi,!0);Q(this,Ts,!1);Q(this,Cs,new Map);Q(this,Ml);Q(this,Sl,l(()=>{},"#stopArtChanged"));Q(this,Ba,!1);Q(this,wl);Q(this,za);Q(this,El,"");Q(this,ka,l(()=>G(this,de,ym).call(this),"#resizeHandler"));Q(this,Ga,null);Q(this,Rs,!1);W(this,Vt,e.mapCanvas),W(this,ul,e.coveredBy),W(this,wl,e.art),W(this,xl,{cityName:e.cityName,unitStatus:e.unitStatus}),W(this,Es,e.unitSize?.get()??1),W(this,za,e.art.id()),this.world=e.world,W(this,je,new Qx(e.world)),W(this,Ml,b_(m(this,je).layout,e.world.topology())),W(this,ws,e.world.tiles()),W(this,Oa,m(this,ws).length),W(this,pl,e.cameraDistance),W(this,ml,e.lockVerticalEdges);let n=e.cameraDistance.get();W(this,ot,G(this,de,ol).call(this,{...sx(m(this,je).layout.centre(0,0)),...n===null?{}:{distance:n}})),W(this,Ss,m(this,ot).distance),this.portal=new Bm(e,{centre:l(()=>G(this,de,P_).call(this),"centre"),centreOn:l((r,s)=>G(this,de,I_).call(this,r,s),"centreOn"),changed:l(()=>G(this,de,un).call(this),"changed"),visible:l((r,s,a)=>G(this,de,A_).call(this,r,s,a),"visible")}),W(this,jt,t(e.mapCanvas,{period:m(this,je).layout.period(),ground:m(this,je).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&W(this,Na,new x_(e.minimapCanvas,m(this,je).layout,e.world,m(this,je).extentV(),(r,s)=>G(this,de,ll).call(this,{...m(this,Mt)?.to??m(this,ot),focus:[r,s]}))),e.debug&&e.mapCanvas.parentElement&&(W(this,Ms,G(this,de,z_).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),m(this,je).queueAll(...G(this,de,bh).call(this)),G(this,de,cl).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),W(this,Gn,e.squares),W(this,vl,e.playerId),W(this,_l,e.transport),W(this,La,new f_(e.mapCanvas,{orbit:l(()=>m(this,ot),"orbit"),lookHeight:l(()=>m(this,wn)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>G(this,de,T_).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>G(this,de,C_).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>m(this,Gn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>m(this,Gn).menuOpen(),"menuOpen"),hover:l(r=>G(this,de,R_).call(this,r),"hover")})),window.addEventListener("resize",m(this,ka)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(W(this,Ga,new ResizeObserver(m(this,ka))),m(this,Ga).observe(e.mapCanvas.parentElement)),G(this,de,ym).call(this),G(this,de,un).call(this),W(this,bl,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==m(this,Es)&&!m(this,Rs)&&(W(this,Es,r),G(this,de,cl).call(this),G(this,de,un).call(this))})??(()=>{})),W(this,Sl,e.artChanged?.(()=>{m(this,Rs)||(W(this,Oi,!0),G(this,de,un).call(this))})??(()=>{}))}land(){return m(this,je)}orbit(){return m(this,ot)}moving(){return m(this,Mt)!==null||m(this,La).moving()}setOrbit(e){m(this,Vn).call(this),W(this,Mt,null),W(this,ot,G(this,de,ol).call(this,e)),G(this,de,un).call(this)}activeUnit(){return{unit:m(this,or),pendingTile:m(this,yl)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=m(this,Mt)?.to??m(this,ot);G(this,de,ll).call(this,{...t,yaw:t.yaw+e*Ap},G(this,de,pm).call(this)+e*Ap)}heading(){return{turn:(m(this,Mt)?.to??m(this,ot)).yaw,directions:zm(m(this,je).layout,this.world.topology())}}faceNorth(){G(this,de,ll).call(this,{...m(this,Mt)?.to??m(this,ot),yaw:0},w_(-m(this,ot).yaw))}debugViewModes(){return[]}dispose(){G(this,de,vm).call(this,!0),W(this,Rs,!0),m(this,bl).call(this),m(this,Sl).call(this),m(this,Vn).call(this),m(this,La).dispose(),m(this,Na)?.dispose(),window.removeEventListener("resize",m(this,ka)),m(this,Ga)?.disconnect(),m(this,ar)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(m(this,ar)),W(this,ar,null),m(this,Ms)?.remove(),m(this,jt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=m(this,Fi);e!==null&&(W(this,Fi,null),m(this,Vt).classList.remove("picking-tile"),e.window?.close())}flush(){G(this,de,gm).call(this),G(this,de,un).call(this)}mapEvent(e){if(e.kind==="moved"){G(this,de,E_).call(this,e.unit.id,e.from,e.to),G(this,de,yh).call(this,e.unit.id,e.from,e.to);return}G(this,de,yh).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),G(this,de,yh).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=m(this,Vt).getBoundingClientRect();W(this,hl,m(this,ul).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};W(this,Fi,r),m(this,Vt).classList.add("picking-tile"),r.window=m(this,Gn).prompt(n,()=>{m(this,Fi)===r&&(W(this,Fi,null),m(this,Vt).classList.remove("picking-tile"))})}picking(){return m(this,Fi)!==null}queueTile(e){m(this,Fa).set(`${e.x},${e.y}`,e)}redrawArt(){let e=m(this,wl).id();return e===m(this,za)?"unchanged":(W(this,za,e),W(this,Oi,!0),"redrawn")}releaseTiles(){m(this,Fa).forEach((e,t)=>m(this,Hr).set(t,e)),m(this,Fa).clear(),m(this,Hr).size>0&&G(this,de,un).call(this)}setActiveUnit(e,t){let n=m(this,or)?.tile;W(this,or,e),W(this,yl,t??null),[n,e?.tile].forEach(r=>{r&&G(this,de,bs).call(this,r.x,r.y)}),G(this,de,un).call(this)}setWaiting(e){W(this,Ba,e),e&&m(this,Vn).call(this)}showActiveUnit(e){m(this,lr)||(W(this,lr,!0),G(this,de,cl).call(this),G(this,de,un).call(this))}shown(){return{units:m(this,lr),yields:m(this,As),waiting:m(this,Ba)}}tilesPending(){return m(this,Hr).size}toggleUnits(){W(this,lr,!m(this,lr)),G(this,de,cl).call(this),G(this,de,un).call(this)}toggleYields(){W(this,As,!m(this,As)),W(this,Oi,!0),G(this,de,un).call(this)}zoomBy(e){m(this,Vn).call(this),W(this,ot,_a(m(this,ot),e)),m(this,Mt)!==null&&(m(this,Mt).from=_a(m(this,Mt).from,e),m(this,Mt).to=_a(m(this,Mt).to,e)),G(this,de,un).call(this)}};Vt=new WeakMap,ul=new WeakMap,hl=new WeakMap,je=new WeakMap,jt=new WeakMap,Ms=new WeakMap,dl=new WeakMap,fl=new WeakMap,ot=new WeakMap,Mt=new WeakMap,wn=new WeakMap,La=new WeakMap,pl=new WeakMap,Ss=new WeakMap,Gr=new WeakMap,Da=new WeakMap,ml=new WeakMap,gl=new WeakMap,Gn=new WeakMap,xl=new WeakMap,rr=new WeakMap,fi=new WeakMap,_l=new WeakMap,Fi=new WeakMap,Vr=new WeakMap,vl=new WeakMap,Vn=new WeakMap,Na=new WeakMap,Ua=new WeakMap,sr=new WeakMap,ar=new WeakMap,Fa=new WeakMap,Hr=new WeakMap,ws=new WeakMap,Oa=new WeakMap,or=new WeakMap,yl=new WeakMap,lr=new WeakMap,Es=new WeakMap,bl=new WeakMap,As=new WeakMap,Oi=new WeakMap,Ts=new WeakMap,Cs=new WeakMap,Ml=new WeakMap,Sl=new WeakMap,Ba=new WeakMap,wl=new WeakMap,za=new WeakMap,El=new WeakMap,ka=new WeakMap,Ga=new WeakMap,Rs=new WeakMap,de=new WeakSet,pm=l(function(){let e=m(this,Mt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),E_=l(function(e,t,n){let r=performance.now(),s=m(this,fi).get(e);if(m(this,fi).forEach(({until:x},_)=>{x<r&&m(this,fi).delete(_)}),typeof requestAnimationFrame!="function"||Ea())return;let[a,o]=m(this,je).layout.centre(t.x,t.y),[c,u]=m(this,je).layout.centre(n.x,n.y),{u:h,v:f}=m(this,je).layout.period(),d=l((x,_)=>_===null?x:x-_*Math.round(x/_),"short"),[p,g,y]=(s!==void 0&&s.until>=r?s.from:null)??m(this,jt).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,m(this,je).surfaceAt(a,o)),o];m(this,fi).set(e,{from:[c+d(p-c,h),g,u+d(y-u,f)],to:`${n.x},${n.y}`,until:r+2e3})},"#setOff"),yh=l(function(e,t,n){let[r,s]=m(this,je).layout.centre(t.x,t.y),[a,o]=m(this,je).layout.centre(n.x,n.y),{u:c,v:u}=m(this,je).layout.period(),h=l((p,g)=>g===null?p:p-g*Math.round(p/g),"short"),f=h(a-r,c),d=h(o-s,u);f===0&&d===0||(m(this,rr).delete(e),m(this,rr).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),m(this,rr).size>QE&&m(this,rr).delete(m(this,rr).keys().next().value),[t,n].forEach(({x:p,y:g})=>G(this,de,bs).call(this,p,g)),G(this,de,un).call(this))},"#face"),A_=l(function(e,t,n){let r=m(this,Vt).clientWidth,s=m(this,Vt).clientHeight;if(r<=0||s<=0)return!1;let a=m(this,Mt)?.to??m(this,ot),[o,c]=m(this,je).layout.centre(e,t),{u,v:h}=G(this,de,kr).call(this),[f,d]=a.focus,p=l((v,S,I)=>I===null?v:v+I*Math.round((S-v)/I),"nearest"),g=[p(o,f,u),Math.max(0,m(this,je).heightAt(o,c)),p(c,d,h)],y=r/s,x=m(this,wn)??0,_=Tp(a,x,g,y),w=Tp(a,x,[g[0]+Math.cos(a.yaw),g[1],g[2]+Math.sin(a.yaw)],y);if(_===null||w===null)return!1;let A=(_[0]+1)/2*r,E=(1-_[1])/2*s,R=Math.abs(w[0]-_[0])*(r/2),C=(n+.5)*R;return A>=C&&A<=r-C&&E>=C&&E<=s-C&&!m(this,hl).some(({left:v,top:S,right:I,bottom:P})=>A>=v-R/2&&A<=I+R/2&&E>=S-R/2&&E<=P+R/2)},"#visible"),al=l(function(e,t){let n=m(this,Vt).clientWidth,r=m(this,Vt).clientHeight;if(n<=0||r<=0)return null;let s=m_(m(this,ot),m(this,wn)??0,[e/n*2-1,1-t/r*2],n/r,(f,d)=>m(this,je).heightAt(f,d));if(s===null)return null;let[a,o]=m(this,je).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(G(this,de,kr).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),T_=l(function(e,t){let n=G(this,de,al).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=m(this,Fi);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&m(this,Gn).click(this.portal,n)},"#clicked"),C_=l(function(e,t,n,r,s){let a=m(this,or),o=G(this,de,al).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),m(this,Gn).menu(this.portal,n,r,a,o,m(this,_l),s),!0)},"#menu"),R_=l(function(e){let t=e===null||m(this,Ba)||m(this,Gn).menuOpen()?null:G(this,de,al).call(this,e.x,e.y),n=m(this,Vr);if(t===null||e===null){m(this,Vn).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}m(this,Vn).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,G(this,de,mm).call(this,s)},iA),W(this,Vr,s),document.addEventListener("keydown",m(this,Vn),!0)},"#hovered"),mm=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===m(this,Vt),n=t?G(this,de,al).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){m(this,Vn).call(this);return}let r=m(this,Gn).tooltip(m(this,Vt),n,m(this,vl),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&m(this,Gn).endTooltip(m(this,Vt)),e.open=r},"#showHover"),bh=l(function(){return[...m(this,ot).focus]},"#focus"),P_=l(function(){let[e,t]=m(this,je).layout.tileAt(...m(this,ot).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:G(this,de,kr).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),I_=l(function(e,t){let[n,r]=m(this,je).layout.centre(e,t),[s,a]=(m(this,Mt)?.to??m(this,ot)).focus;if(n===s&&r===a)return;let o={...m(this,Mt)?.to??m(this,ot),focus:[n,r]},{u:c,v:u}=G(this,de,kr).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[f,d]=m(this,ot).focus,p=Math.hypot(h(n-f,c),h(r-d,u));if(!m(this,gl)||p>m(this,ot).distance*1.5){W(this,gl,!0),this.setOrbit(o);return}G(this,de,ll).call(this,o)},"#centreOn"),ol=l(function(e){return lx(ds(e),G(this,de,kr).call(this),m(this,je).extentV())},"#settle"),kr=l(function(){let e=m(this,je).layout.period();return this.portal?.lockVerticalEdges()??m(this,ml)?{u:e.u,v:null}:e},"#period"),ll=l(function(e,t=G(this,de,pm).call(this)+w_(e.yaw-(m(this,Mt)?.to??m(this,ot)).yaw)){m(this,Vn).call(this),typeof requestAnimationFrame!="function"||Ea()?(W(this,Mt,null),W(this,ot,G(this,de,ol).call(this,e))):W(this,Mt,{from:m(this,ot),to:e,started:null,turn:t,drawn:0}),G(this,de,un).call(this)},"#moveTo"),L_=l(function(e){let t=m(this,Mt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/eA);return t.drawn=n*n*(3-2*n),W(this,ot,G(this,de,ol).call(this,cx(t.from,t.to,n,G(this,de,kr).call(this),t.turn))),n>=1&&W(this,Mt,null),n<1},"#moveCamera"),D_=l(function(e){let[t,n]=m(this,ot).focus,r=Math.max(0,m(this,je).heightAt(t,n));return!e||m(this,wn)===null||Ea()?(W(this,wn,r),!1):(W(this,wn,m(this,wn)+(r-m(this,wn))*nA),Math.abs(r-m(this,wn))<.002?(W(this,wn,r),!1):!0)},"#followHeight"),gm=l(function(){let e=[...m(this,Hr).values()].map(({x:o,y:c})=>[o,c]),t=this.world.tiles(),n=t!==m(this,ws)||t.length!==m(this,Oa);W(this,ws,t),W(this,Oa,t.length),m(this,Hr).clear();let r=G(this,de,U_).call(this,m(this,je).changed(e,...G(this,de,bh).call(this),n)),s=new Set(e.map(([o,c])=>`${o},${c}`));e.forEach(([o,c])=>G(this,de,bs).call(this,o,c)),r.forEach(([o,c])=>{let u=`${o},${c}`;!n&&!s.has(u)&&m(this,sr).has(u)&&G(this,de,bs).call(this,o,c)}),G(this,de,N_).call(this,e,r);let a=m(this,Vr);a!==null&&a.open&&e.some(([o,c])=>o===a.x&&c===a.y)&&G(this,de,mm).call(this,a),(e.length>0||n)&&W(this,Ua,!0),n&&(W(this,Oi,!0),m(this,sr).forEach((o,c)=>{let[u,h]=c.split(",").map(Number);G(this,de,bs).call(this,u,h)}))},"#takeTiles"),bs=l(function(e,t){let n=`${e},${t}`,r=p_(this.world.get(e,t),m(this,or)?.id??null,m(this,lr),m(this,xl),d=>m(this,rr).get(d.id)??0,m(this,Es)),[s,a]=m(this,je).layout.centre(e,t),o=[s,Math.max(0,m(this,je).surfaceAt(s,a)),a],c=r===null?null:JSON.stringify([r,o]),u=c!==(m(this,sr).get(n)??null);if(u&&m(this,jt).setMarker(n,o,r),m(this,fi).size===0){u&&G(this,de,xm).call(this,n,c);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));m(this,fi).forEach((d,p)=>{if(d.until<h){m(this,fi).delete(p);return}d.to!==n||!f.has(p)||(m(this,fi).delete(p),u&&r?.unit?.id===p&&m(this,jt).slideMarker(n,d.from))}),u&&G(this,de,xm).call(this,n,c)},"#mark"),N_=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>m(this,Cs).delete(`${n},${r}`)),t.forEach(([n,r])=>m(this,Cs).delete(`${n},${r}`)),W(this,Oi,!0))},"#yieldsChanged"),U_=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),F_=l(function(){if(!m(this,As)){m(this,Ts)&&(m(this,jt).setYields(null),W(this,Ts,!1));return}if(!m(this,Oi)&&m(this,Ts))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=v_(t,y_(t)),s=m(this,Cs).get(n);if(s===void 0||s.of!==r){let[a,o]=m(this,je).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:M_({at:[a,Math.max(0,m(this,je).surfaceAt(a,o)),o],yields:r},m(this,Ml))},m(this,Cs).set(n,s)}s.laid!==null&&e.push(s.laid)}),m(this,jt).setYields(S_(e)),W(this,Oi,!1),W(this,Ts,!0)},"#showYields"),xm=l(function(e,t){t===null?m(this,sr).delete(e):m(this,sr).set(e,t)},"#remember"),cl=l(function(){let e=new Set(m(this,sr).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);G(this,de,bs).call(this,n,r)})},"#markAll"),_m=l(function(e){let t=performance.now(),n=G(this,de,L_).call(this,t),[r,s]=G(this,de,bh).call(this);G(this,de,gm).call(this),`${r},${s}`!==m(this,fl)&&(W(this,fl,`${r},${s}`),m(this,je).refocus(r,s)),m(this,je).build(m(this,jt),e);let a=G(this,de,D_).call(this,e!==null);G(this,de,F_).call(this),m(this,jt).view(m(this,ot),m(this,wn)??0,G(this,de,kr).call(this)),m(this,jt).render(),G(this,de,O_).call(this),G(this,de,vm).call(this),W(this,dl,performance.now()-t),G(this,de,k_).call(this),(m(this,je).pending()>0||m(this,je).overlaysPending()>0||m(this,jt).sliding()||n||a)&&G(this,de,un).call(this)},"#frameDrawn"),O_=l(function(){let e=m(this,Na);if(e===null)return;m(this,Ua)&&(W(this,Ua,!1),e.redraw());let t=m(this,or)?.tile??null;e.show(G(this,de,B_).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),B_=l(function(){let e=m(this,Vt).clientWidth,t=m(this,Vt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=m(this,wn)??0,s=th(m(this,ot).distance).far,[a,o]=m(this,ot).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=xa(m(this,ot),r,[h,d],n);if(p!==null){let g=Math.hypot(p[0]-a,p[1]-o),y=g>s?s/g:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),vm=l(function(e=!1){let t=(e?m(this,Mt)?.to??m(this,ot):m(this,ot)).distance,n=l(()=>{m(this,Gr)!==null&&clearTimeout(m(this,Gr)),W(this,Gr,null),W(this,Da,null)},"stop"),r=l(()=>{n(),W(this,Ss,t),m(this,pl).set(t)},"keep");if(e){n(),t!==m(this,Ss)&&r();return}if(m(this,Mt)!==null||t===m(this,Ss)){n();return}m(this,Gr)!==null&&t===m(this,Da)||(n(),W(this,Da,t),W(this,Gr,setTimeout(r,tA)))},"#keepDistance"),un=l(function(){if(!m(this,Rs)){if(typeof requestAnimationFrame!="function"){G(this,de,_m).call(this,null);return}m(this,ar)===null&&W(this,ar,requestAnimationFrame(()=>{W(this,ar,null),G(this,de,_m).call(this,jE)}))}},"#draw"),z_=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),k_=l(function(){if(m(this,Ms)===null)return;let{drawCalls:e,triangles:t,geometries:n}=m(this,jt).stats();m(this,Ms).textContent=[`frame ${m(this,dl).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${m(this,je).pending()}`].join(`
`)},"#showStats"),ym=l(function(){let e=m(this,Vt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===m(this,El)||(W(this,El,s),m(this,jt).resize(t,n,r),this.measureCovered(),m(this,jt).render())},"#resize"),l(bm,"MapView3D");var fm=bm,G_=fm;var rA={createMapView3D:l(i=>new G_(i),"createMapView3D")};globalThis[Um]=rA;})();
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
