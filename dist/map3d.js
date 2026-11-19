"use strict";(()=>{var z_=Object.create;var _h=Object.defineProperty;var k_=Object.getOwnPropertyDescriptor;var G_=Object.getOwnPropertyNames;var V_=Object.getPrototypeOf,H_=Object.prototype.hasOwnProperty;var Cm=i=>{throw TypeError(i)};var l=(i,e)=>_h(i,"name",{value:e,configurable:!0});var W_=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var X_=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of G_(e))!H_.call(i,s)&&s!==t&&_h(i,s,{get:()=>e[s],enumerable:!(n=k_(e,s))||n.enumerable});return i};var q_=(i,e,t)=>(t=i!=null?z_(V_(i)):{},X_(e||!i||!i.__esModule?_h(t,"default",{value:i,enumerable:!0}):t,i));var vh=(i,e,t)=>e.has(i)||Cm("Cannot "+t);var m=(i,e,t)=>(vh(i,e,"read from private field"),t?t.call(i):e.get(i)),j=(i,e,t)=>e.has(i)?Cm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),H=(i,e,t,n)=>(vh(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),V=(i,e,t)=>(vh(i,e,"access private method"),t);var Rm=(i,e,t,n)=>({set _(s){H(i,e,s,t)},get _(){return m(i,e,n)}});var Im=W_(Hs=>{"use strict";var hi,os=Hs&&Hs.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Hs,"__esModule",{value:!0}),Hs.EventEmitter=void 0;var yh=class yh{constructor(){hi.set(this,{})}on(e,t){e in os(this,hi,"f")||(os(this,hi,"f")[e]=[]),os(this,hi,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in os(this,hi,"f")))return;let n=os(this,hi,"f")[e].indexOf(t);n!==-1&&os(this,hi,"f")[e].splice(n,1)}emit(e,...t){e in os(this,hi,"f")&&os(this,hi,"f")[e].forEach((n=>n(...t)))}};l(yh,"i");var El=yh;Hs.EventEmitter=El,hi=new WeakMap,Hs.default=El});var Pm="civMap3D";var Lm=q_(Im());var ls,di,Tr,Mh=class Mh extends Lm.EventEmitter{constructor(t,n){super();j(this,ls);j(this,di);j(this,Tr);H(this,di,t),H(this,Tr,t.lockVerticalEdges),H(this,ls,n)}center(){return m(this,ls).centre()}isVisible(t,n,s=0){return m(this,ls).visible(t,n,s)}lockVerticalEdges(){return m(this,Tr)}nativeTileSize(){return m(this,di).art.nativeTileSize()}openCity(t){let{cityOpener:n}=m(this,di);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return m(this,di).playerId}render(){m(this,ls).changed()}scale(){return m(this,di).art.scale()}setCenter(t,n){m(this,ls).centreOn(t,n)}setLockVerticalEdges(t){H(this,Tr,t)}setZoom(){}transport(){return m(this,di).transport}zoom(){return m(this,di).art.zoom()}};ls=new WeakMap,di=new WeakMap,Tr=new WeakMap,l(Mh,"MapPortal3D");var bh=Mh,Dm=bh;var Y_=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return[s,[o-t,c-n]]}))},"groundDirections"),Nm=Y_;var o0=0,jh=1,l0=2;var xo=1,Wc=2,ia=3,Es=0,xn=1,yi=2,Zs=0,sa=1,ed=2,td=3,nd=4,c0=5;var Js=100,u0=101,h0=102,d0=103,f0=104,p0=200,m0=201,g0=202,x0=203,id=204,sd=205,_0=206,v0=207,y0=208,b0=209,M0=210,S0=211,w0=212,E0=213,T0=214,Kl=0,Ql=1,jl=2,Yr=3,ec=4,tc=5,nc=6,ic=7,rd=0,A0=1,C0=2,bi=0,ad=1,od=2,ld=3,_o=4,cd=5,ud=6,hd=7;var dd=300,Ks=301,ra=302,Xc=303,qc=304,$s=1e3,Gn=1001,sc=1002,Ut=1003,R0=1004;var vo=1005;var Xt=1006,Yc=1007;var Qn=1008;var bn=1009,fd=1010,pd=1011,aa=1012,$c=1013,jn=1014,ei=1015,Pn=1016,Zc=1017,Jc=1018,Qs=1020,md=35902,gd=35899,xd=1021,_d=1022,ti=1023,Gi=1026,qi=1027,vd=1028,Kc=1029,Mi=1030,Qc=1031;var jc=1033,yo=33776,bo=33777,Mo=33778,So=33779,eu=35840,tu=35841,nu=35842,iu=35843,su=36196,ru=37492,au=37496,ou=37488,lu=37489,wo=37490,cu=37491,uu=37808,hu=37809,du=37810,fu=37811,pu=37812,mu=37813,gu=37814,xu=37815,_u=37816,vu=37817,yu=37818,bu=37819,Mu=37820,Su=37821,wu=36492,Eu=36494,Tu=36495,Au=36283,Cu=36284,Eo=36285,Ru=36286;var $a=2300,rc=2301,Zl=2302,qh=2303,Yh=2400,$h=2401,Zh=2402;var P0=3200;var Pu=0,I0=1,Yi="",Nt="srgb",Za="srgb-linear",Ja="linear",ht="srgb";var Jl=7680;var L0=519,D0=512,N0=513,U0=514,yd=515,F0=516,O0=517,bd=518,Md=519,Sd=35044;var wd="300 es",Vn=2e3,$r=2001;function $_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l($_,"arrayNeedsUint32");function Z_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(Z_,"isTypedArray");function Ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(Ka,"createElementNS");function B0(){let i=Ka("canvas");return i.style.display="block",i}l(B0,"createCanvasElement");var Um={},Zr=null;function Qa(...i){let e="THREE."+i.shift();Zr?Zr("log",e,...i):console.log(e,...i)}l(Qa,"log");function z0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(z0,"enhanceLogMessage");function Ge(...i){i=z0(i);let e="THREE."+i.shift();if(Zr)Zr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ge,"warn");function He(...i){i=z0(i);let e="THREE."+i.shift();if(Zr)Zr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function qa(...i){let e=i.join(" ");e in Um||(Um[e]=!0,Ge(...i))}l(qa,"warnOnce");function k0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(k0,"probeAsync");var G0={[Kl]:Kl,[jl]:nc,[ec]:ec,[Yr]:tc,[Ql]:Ql,[nc]:jl,[ic]:ic,[tc]:Yr},Rd=class Rd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(Rd,"EventDispatcher");var pi=Rd,tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sh=Math.PI/180,ac=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}l(js,"generateUUID");function rt(i,e,t){return Math.max(e,Math.min(t,i))}l(rt,"clamp");function J_(i,e){return(i%e+e)%e}l(J_,"euclideanModulo");function wh(i,e,t){return(1-t)*i+t*e}l(wh,"lerp");function V0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(V0,"floorPowerOfTwo");function Iu(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Iu,"getNormalizationScale");function H0(i,e){if(e.constructor===Float32Array)return i;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(H0,"denormalize");function W0(i,e){if(e.constructor===Float32Array)return i;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(W0,"normalize");var Cc=class Cc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Cc,"Vector2"),Cc.prototype.isVector2=!0;var Ve=Cc,Pd=class Pd{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||c!==d||u!==p||h!==g){let _=c*d+u*p+h*g+f*y;_<0&&(d=-d,p=-p,g=-g,y=-y,_=-_);let x=1-o;if(_<.9995){let w=Math.acos(_),R=Math.sin(w);x=Math.sin(x*w)/R,o=Math.sin(o*w)/R,c=c*x+d*o,u=u*x+p*o,h=h*x+g*o,f=f*x+y*o}else{c=c*x+d*o,u=u*x+p*o,h=h*x+g*o,f=f*x+y*o;let w=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=w,u*=w,h*=w,f*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+c*p-u*d,e[t+1]=c*g+h*d+u*f-o*p,e[t+2]=u*g+h*p+o*d-c*f,e[t+3]=h*g-o*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Pd,"Quaternion");var pn=Pd,Rc=class Rc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-r*f,this.z=s+c*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Rc,"Vector3"),Rc.prototype.isVector3=!0;var W=Rc,Eh=new W,Fm=new pn,Pc=class Pc{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],y=s[0],_=s[3],x=s[6],w=s[1],R=s[4],E=s[7],C=s[2],T=s[5],v=s[8];return r[0]=a*y+o*w+c*C,r[3]=a*_+o*R+c*T,r[6]=a*x+o*E+c*v,r[1]=u*y+h*w+f*C,r[4]=u*_+h*R+f*T,r[7]=u*x+h*E+f*v,r[2]=d*y+p*w+g*C,r[5]=d*_+p*R+g*T,r[8]=d*x+p*E+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*r,p=u*r-a*c,g=t*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return qa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(e,t)),this}rotate(e){return qa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return qa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Pc,"Matrix3"),Pc.prototype.isMatrix3=!0;var We=Pc,Th=new We,Om=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){let i={enabled:!0,workingColorSpace:Za,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===Yi?Ja:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Za]:{primaries:e,whitePoint:n,transfer:Ja,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}l(K_,"createColorManagement");var st=K_();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(ki,"SRGBToLinear");function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(qr,"LinearToSRGB");var Ar,Id=class Id{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=Ka("canvas")),Ar.width=e.width,Ar.height=e.height;let s=Ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ka("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Id,"ImageUtils");var oc=Id,Q_=0,Ld=class Ld{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ah(s[a].image)):r.push(Ah(s[a]))}else r=Ah(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(Ld,"TextureSource");var Jr=Ld;function Ah(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}l(Ah,"serializeImage");var j_=0,Ch=new W,Wr=class Wr extends pi{constructor(e=Wr.DEFAULT_IMAGE,t=Wr.DEFAULT_MAPPING,n=Gn,s=Gn,r=Xt,a=Qn,o=ti,c=bn,u=Wr.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=js(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Wr,"Texture");var mn=Wr;mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=dd;mn.DEFAULT_ANISOTROPY=1;var Ic=class Ic{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],y=c[2],_=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+_)<.1&&Math.abs(u+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,E=(p+1)/2,C=(x+1)/2,T=(h+d)/4,v=(f+y)/4,S=(g+_)/4;return R>E&&R>C?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=v/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=v/r,s=S/r),this.set(n,s,r,t),this}let w=Math.sqrt((_-g)*(_-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(_-g)/w,this.y=(f-y)/w,this.z=(d-h)/w,this.w=Math.acos((u+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Ic,"Vector4"),Ic.prototype.isVector4=!0;var St=Ic,Dd=class Dd extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Dd,"RenderTarget");var lc=Dd,Nd=class Nd extends lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Nd,"WebGLRenderTarget");var An=Nd,Ud=class Ud extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Ud,"DataArrayTexture");var ja=Ud;var Fd=class Fd extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Fd,"Data3DTexture");var cc=Fd;var Ya=class Ya{constructor(e,t,n,s,r,a,o,c,u,h,f,d,p,g,y,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,f,d,p,g,y,_)}set(e,t,n,s,r,a,o,c,u,h,f,d,p,g,y,_){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=c,x[2]=u,x[6]=h,x[10]=f,x[14]=d,x[3]=p,x[7]=g,x[11]=y,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Cr.setFromMatrixColumn(e,0).length(),r=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),cs.crossVectors(n,En),cs.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),cs.crossVectors(n,En)),cs.normalize(),Tl.crossVectors(En,cs),s[0]=cs.x,s[4]=Tl.x,s[8]=En.x,s[1]=cs.y,s[5]=Tl.y,s[9]=En.y,s[2]=cs.z,s[6]=Tl.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],y=n[6],_=n[10],x=n[14],w=n[3],R=n[7],E=n[11],C=n[15],T=s[0],v=s[4],S=s[8],D=s[12],P=s[1],O=s[5],G=s[9],J=s[13],L=s[2],K=s[6],te=s[10],N=s[14],z=s[3],F=s[7],k=s[11],$=s[15];return r[0]=a*T+o*P+c*L+u*z,r[4]=a*v+o*O+c*K+u*F,r[8]=a*S+o*G+c*te+u*k,r[12]=a*D+o*J+c*N+u*$,r[1]=h*T+f*P+d*L+p*z,r[5]=h*v+f*O+d*K+p*F,r[9]=h*S+f*G+d*te+p*k,r[13]=h*D+f*J+d*N+p*$,r[2]=g*T+y*P+_*L+x*z,r[6]=g*v+y*O+_*K+x*F,r[10]=g*S+y*G+_*te+x*k,r[14]=g*D+y*J+_*N+x*$,r[3]=w*T+R*P+E*L+C*z,r[7]=w*v+R*O+E*K+C*F,r[11]=w*S+R*G+E*te+C*k,r[15]=w*D+R*J+E*N+C*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],_=e[11],x=e[15],w=c*p-u*d,R=o*p-u*f,E=o*d-c*f,C=a*p-u*h,T=a*d-c*h,v=a*f-o*h;return t*(y*w-_*R+x*E)-n*(g*w-_*C+x*T)+s*(g*R-y*C+x*v)-r*(g*E-y*T+_*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],_=e[14],x=e[15],w=t*o-n*a,R=t*c-s*a,E=t*u-r*a,C=n*c-s*o,T=n*u-r*o,v=s*u-r*c,S=h*y-f*g,D=h*_-d*g,P=h*x-p*g,O=f*_-d*y,G=f*x-p*y,J=d*x-p*_,L=w*J-R*G+E*O+C*P-T*D+v*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/L;return e[0]=(o*J-c*G+u*O)*K,e[1]=(s*G-n*J-r*O)*K,e[2]=(y*v-_*T+x*C)*K,e[3]=(d*T-f*v-p*C)*K,e[4]=(c*P-a*J-u*D)*K,e[5]=(t*J-s*P+r*D)*K,e[6]=(_*E-g*v-x*R)*K,e[7]=(h*v-d*E+p*R)*K,e[8]=(a*G-o*P+u*S)*K,e[9]=(n*P-t*G-r*S)*K,e[10]=(g*T-y*E+x*w)*K,e[11]=(f*E-h*T-p*w)*K,e[12]=(o*D-a*O-c*S)*K,e[13]=(t*O-n*D+s*S)*K,e[14]=(y*R-g*C-_*w)*K,e[15]=(h*C-f*R+d*w)*K,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,f=o+o,d=r*u,p=r*h,g=r*f,y=a*h,_=a*f,x=o*f,w=c*u,R=c*h,E=c*f,C=n.x,T=n.y,v=n.z;return s[0]=(1-(y+x))*C,s[1]=(p+E)*C,s[2]=(g-R)*C,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(d+x))*T,s[6]=(_+w)*T,s[7]=0,s[8]=(g+R)*v,s[9]=(_-w)*v,s[10]=(1-(d+y))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Cr.set(s[0],s[1],s[2]).length(),o=Cr.set(s[4],s[5],s[6]).length(),c=Cr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let u=1/a,h=1/o,f=1/c;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Vn,c=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Vn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===$r)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Vn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===$r)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Ya,"Matrix4"),Ya.prototype.isMatrix4=!0;var ft=Ya,Cr=new W,Zn=new ft,ev=new W(0,0,0),tv=new W(1,1,1),cs=new W,Tl=new W,En=new W,zm=new ft,km=new pn,Lc=class Lc{constructor(e=0,t=0,n=0,s=Lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Lc,"Euler");var Cn=Lc;Cn.DEFAULT_ORDER="XYZ";var Od=class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Od,"Layers");var eo=Od,nv=0,Gm=new W,Rr=new pn,Di=new ft,Al=new W,za=new W,iv=new W,sv=new pn,Vm=new W(1,0,0),Hm=new W(0,1,0),Wm=new W(0,0,1),Xm={type:"added"},rv={type:"removed"},Pr={type:"childadded",child:null},Rh={type:"childremoved",child:null},Xr=class Xr extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xr.DEFAULT_UP.clone();let e=new W,t=new Cn,n=new pn,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new We}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Xr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,t){return Gm.copy(e).applyQuaternion(this.quaternion),this.position.add(Gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Al.copy(e):Al.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(za,Al,this.up):Di.lookAt(Al,za,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Di),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rv),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Xr,"Object3D");var Zt=Xr;Zt.DEFAULT_UP=new W(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bd=class Bd extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Bd,"Group");var fn=Bd,av={type:"move"},zd=class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,n),x=this._getHandJoint(u,y);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(av)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(zd,"WebXRController");var Kr=zd,X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Ph(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Ph,"hue2rgb");var kd=class kd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=J_(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ph(a,r,e+1/3),this.g=Ph(a,r,e),this.b=Ph(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=X0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return st.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Nt){st.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Cl);let n=wh(us.h,Cl.h,t),s=wh(us.s,Cl.s,t),r=wh(us.l,Cl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(kd,"Color");var Oe=kd,nn=new Oe;Oe.NAMES=X0;var Dc=class Dc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Dc,"Fog");var to=Dc,Gd=class Gd extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Gd,"Scene");var no=Gd,Jn=new W,Ni=new W,Ih=new W,Ui=new W,Ir=new W,Lr=new W,qm=new W,Lh=new W,Dh=new W,Nh=new W,Uh=new St,Fh=new St,Oh=new St,ps=class ps{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),Ni.subVectors(n,t),Ih.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Ni),c=Jn.dot(Ih),u=Ni.dot(Ni),h=Ni.dot(Ih),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(u*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(a,Ui.y),c.addScaledVector(o,Ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Uh.setScalar(0),Fh.setScalar(0),Oh.setScalar(0),Uh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,n),Oh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Uh,r.x),a.addScaledVector(Fh,r.y),a.addScaledVector(Oh,r.z),a}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Ni.subVectors(e,t),Jn.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Jn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ps.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ps.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ps.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ps.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ps.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ir.subVectors(s,n),Lr.subVectors(r,n),Lh.subVectors(e,n);let c=Ir.dot(Lh),u=Lr.dot(Lh);if(c<=0&&u<=0)return t.copy(n);Dh.subVectors(e,s);let h=Ir.dot(Dh),f=Lr.dot(Dh);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ir,a);Nh.subVectors(e,r);let p=Ir.dot(Nh),g=Lr.dot(Nh);if(g>=0&&p<=g)return t.copy(r);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Lr,o);let _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return qm.subVectors(r,s),o=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(qm,o);let x=1/(_+y+d);return a=y*x,o=d*x,t.copy(n).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(ps,"Triangle");var Bi=ps,Vd=class Vd{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Pl.subVectors(this.max,ka),Dr.subVectors(e.a,ka),Nr.subVectors(e.b,ka),Ur.subVectors(e.c,ka),hs.subVectors(Nr,Dr),ds.subVectors(Ur,Nr),Ws.subVectors(Dr,Ur);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Ws.z,Ws.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Ws.z,0,-Ws.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Ws.y,Ws.x,0];return!Bh(t,Dr,Nr,Ur,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Bh(t,Dr,Nr,Ur,Pl))?!1:(Il.crossVectors(hs,ds),t=[Il.x,Il.y,Il.z],Bh(t,Dr,Nr,Ur,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Vd,"Box3");var gs=Vd,Fi=[new W,new W,new W,new W,new W,new W,new W,new W],Kn=new W,Rl=new gs,Dr=new W,Nr=new W,Ur=new W,hs=new W,ds=new W,Ws=new W,ka=new W,Pl=new W,Il=new W,Xs=new W;function Bh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),c=e.dot(Xs),u=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Bh,"satForAxes");var zi=ov();function ov(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l(ov,"_generateTables");function lv(i){Math.abs(i)>65504&&Ge("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),zi.floatView[0]=i;let e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}l(lv,"toHalfFloat");function cv(i){let e=i>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(i&1023)]+zi.exponentTable[e],zi.floatView[0]}l(cv,"fromHalfFloat");var Hd=class Hd{static toHalfFloat(e){return lv(e)}static fromHalfFloat(e){return cv(e)}};l(Hd,"DataUtils");var mi=Hd,Dt=new W,Ll=new Ve,uv=0,Wd=class Wd extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sd,this.updateRanges=[],this.gpuType=ei,this.version=0,this._normalizationScale=e!==void 0?Iu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):H0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):W0(e,this.array)}};l(Wd,"BufferAttribute");var Mt=Wd;var Xd=class Xd extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Xd,"Uint16BufferAttribute");var io=Xd;var qd=class qd extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(qd,"Uint32BufferAttribute");var so=qd;var Yd=class Yd extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Yd,"Float32BufferAttribute");var Rt=Yd,hv=new gs,Ga=new W,zh=new W,$d=class $d{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);let t=Ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(zh)),this.expandByPoint(Ga.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l($d,"Sphere");var Qr=$d,dv=0,kn=new ft,kh=new Zt,Fr=new W,Tn=new gs,Va=new gs,Wt=new W,Nc=class Nc extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?so:io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Tn.min,Va.min),Tn.expandByPoint(Wt),Wt.addVectors(Tn.max,Va.max),Tn.expandByPoint(Wt)):(Tn.expandByPoint(Va.min),Tn.expandByPoint(Va.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Wt.fromBufferAttribute(o,u),c&&(Fr.fromBufferAttribute(e,u),Wt.add(Fr)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new W,c[D]=new W;let h=new W,f=new W,d=new W,p=new Ve,g=new Ve,y=new Ve,_=new W,x=new W;function w(D,P,O){u[D]=u[P]=u[O]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,O),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,O),f.sub(h),d.sub(h),g.sub(p),y.sub(p);let G=1/(g.x*y.y-y.x*g.y);isFinite(G)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(G),x.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(G),o[D].add(_),o[P].add(_),o[O].add(_),c[D].add(x),c[P].add(x),c[O].add(x))}l(w,"handleTriangle");let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,P=R.length;D<P;++D){let O=R[D],G=O.start,J=O.count;for(let L=G,K=G+J;L<K;L+=3)w(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let E=new W,C=new W,T=new W,v=new W;function S(D){T.fromBufferAttribute(s,D),v.copy(T);let P=o[D];E.copy(P),E.sub(T.multiplyScalar(T.dot(P))).normalize(),C.crossVectors(v,P);let G=C.dot(c[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,G)}l(S,"handleVertex");for(let D=0,P=n.count;D<P;++D)u[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,u=new W,h=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),p=0,g=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let x=0;x<h;x++)d[g++]=u[p++]}return new Mt(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Nc,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Nc,"BufferGeometry");var Ft=Nc,Zd=class Zd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sd,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ym(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ym(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Zd,"InterleavedBuffer");var ro=Zd;function Ym(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=js()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(Ym,"getArrayKey");var hn=new W,Uc=class Uc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Iu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):H0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):W0(e,this.data.array)}};l(Uc,"InterleavedBufferAttribute");var jr=Uc,Gh=new W,fv=new W,pv=new We,Jd=class Jd{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gh.subVectors(n,t).cross(fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Gh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pv.getNormalMatrix(e),s=this.coplanarPoint(Gh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Jd,"Plane");var yn=Jd,mv=0,Kd=class Kd extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=js(),this.name="",this.type="Material",this.blending=sa,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=sd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jl,this.stencilZFail=Jl,this.stencilZPass=Jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Kd,"Material");var Vi=Kd,Qd=class Qd extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Qd,"SpriteMaterial");var xs=Qd,Or,Ha=new W,Br=new W,zr=new W,kr=new Ve,Wa=new Ve,q0=new ft,Dl=new W,Xa=new W,Nl=new W,$m=new Ve,Vh=new Ve,Zm=new Ve,jd=class jd extends Zt{constructor(e=new xs){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ro(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new jr(n,3,0,!1)),Or.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=Or,this.material=e,this.center=new Ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),q0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-zr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ul(Dl.set(-.5,-.5,0),zr,a,Br,s,r),Ul(Xa.set(.5,-.5,0),zr,a,Br,s,r),Ul(Nl.set(.5,.5,0),zr,a,Br,s,r),$m.set(0,0),Vh.set(1,0),Zm.set(1,1);let o=e.ray.intersectTriangle(Dl,Xa,Nl,!1,Ha);if(o===null&&(Ul(Xa.set(-.5,.5,0),zr,a,Br,s,r),Vh.set(0,1),o=e.ray.intersectTriangle(Dl,Nl,Xa,!1,Ha),o===null))return;let c=e.ray.origin.distanceTo(Ha);c<e.near||c>e.far||t.push({distance:c,point:Ha.clone(),uv:Bi.getInterpolation(Ha,Dl,Xa,Nl,$m,Vh,Zm,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(jd,"Sprite");var ea=jd;function Ul(i,e,t,n,s,r){kr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wa.x=r*kr.x-s*kr.y,Wa.y=s*kr.x+r*kr.y):Wa.copy(kr),i.copy(e),i.x+=Wa.x,i.y+=Wa.y,i.applyMatrix4(q0)}l(Ul,"transformVertex");var Oi=new W,Hh=new W,Fl=new W,Ol=new W,ef=class ef{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hh.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Ol.copy(this.origin).sub(Hh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fl),o=Ol.dot(this.direction),c=-Ol.dot(Fl),u=Ol.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Hh).addScaledVector(Fl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,_=t.z-a.z,x=n.x-a.x,w=n.y-a.y,R=n.z-a.z,E=Math.abs(c),C=Math.abs(u),T=Math.abs(h),v,S,D,P,O,G,J,L,K,te,N,z;if(E>=C&&E>=T?(D=c,G=f,K=g,z=x,c>=0?(v=u,S=h,P=d,O=p,J=y,L=_,te=w,N=R):(v=h,S=u,P=p,O=d,J=_,L=y,te=R,N=w)):C>=T?(D=u,G=d,K=y,z=w,u>=0?(v=h,S=c,P=p,O=f,J=_,L=g,te=R,N=x):(v=c,S=h,P=f,O=p,J=g,L=_,te=x,N=R)):(D=h,G=p,K=_,z=R,h>=0?(v=c,S=u,P=f,O=d,J=g,L=y,te=x,N=w):(v=u,S=c,P=d,O=f,J=y,L=g,te=w,N=x)),D===0)return null;let F=v/D,k=S/D,$=1/D,ne=P-F*G,he=O-k*G,q=J-F*K,de=L-k*K,ie=te-F*z,ae=N-k*z,ce=ie*de-ae*q,Ae=ne*ae-he*ie,qe=q*he-de*ne;if(s){if(ce<0||Ae<0||qe<0)return null}else if((ce<0||Ae<0||qe<0)&&(ce>0||Ae>0||qe>0))return null;let Pe=ce+Ae+qe;if(Pe===0)return null;let Ke=$*(ce*G+Ae*K+qe*z);return(Pe>0?Ke<0:Ke>0)?null:this.at(Ke/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(ef,"Ray");var uc=ef,tf=class tf extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(tf,"MeshBasicMaterial");var hc=tf,Jm=new ft,qs=new uc,Bl=new Qr,Km=new W,zl=new W,kl=new W,Gl=new W,Wh=new W,Vl=new W,Qm=new W,Hl=new W,nf=class nf extends Zt{constructor(e=new Ft,t=new hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Vl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],f=r[c];h!==0&&(Wh.fromBufferAttribute(f,e),a?Vl.addScaledVector(Wh,h):Vl.addScaledVector(Wh.sub(t),h))}t.add(Vl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(Bl.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Bl,Km)===null||qs.origin.distanceToSquared(Km)>(e.far-e.near)**2))&&(Jm.copy(r).invert(),qs.copy(e.ray).applyMatrix4(Jm),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let _=d[g],x=a[_.materialIndex],w=Math.max(_.start,p.start),R=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let E=w,C=R;E<C;E+=3){let T=o.getX(E),v=o.getX(E+1),S=o.getX(E+2);s=Wl(this,x,e,n,u,h,f,T,v,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=g,x=y;_<x;_+=3){let w=o.getX(_),R=o.getX(_+1),E=o.getX(_+2);s=Wl(this,a,e,n,u,h,f,w,R,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let _=d[g],x=a[_.materialIndex],w=Math.max(_.start,p.start),R=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let E=w,C=R;E<C;E+=3){let T=E,v=E+1,S=E+2;s=Wl(this,x,e,n,u,h,f,T,v,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=g,x=y;_<x;_+=3){let w=_,R=_+1,E=_+2;s=Wl(this,a,e,n,u,h,f,w,R,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};l(nf,"Mesh");var wt=nf;function gv(i,e,t,n,s,r,a,o){let c;if(e.side===xn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Es,o),c===null)return null;Hl.copy(o),Hl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Hl);return u<t.near||u>t.far?null:{distance:u,point:Hl.clone(),object:i}}l(gv,"checkIntersection$1");function Wl(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,zl),i.getVertexPosition(c,kl),i.getVertexPosition(u,Gl);let h=gv(i,e,t,n,zl,kl,Gl,Qm);if(h){let f=new W;Bi.getBarycoord(Qm,zl,kl,Gl,f),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,c,u,f,new Ve)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,c,u,f,new Ve)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,c,u,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new W,materialIndex:0};Bi.getNormal(zl,kl,Gl,d.normal),h.face=d,h.barycoord=f}return h}l(Wl,"checkGeometryIntersection");var sf=class sf extends mn{constructor(e=null,t=1,n=1,s,r,a,o,c,u=Ut,h=Ut,f,d){super(null,a,o,c,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(sf,"DataTexture");var ta=sf;var rf=class rf extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(rf,"InstancedBufferAttribute");var Hi=rf;var Ys=new Qr,xv=new Ve(.5,.5),Xl=new W,af=class af{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],y=r[9],_=r[10],x=r[11],w=r[12],R=r[13],E=r[14],C=r[15];if(s[0].setComponents(u-a,p-h,x-g,C-w).normalize(),s[1].setComponents(u+a,p+h,x+g,C+w).normalize(),s[2].setComponents(u+o,p+f,x+y,C+R).normalize(),s[3].setComponents(u-o,p-f,x-y,C-R).normalize(),n)s[4].setComponents(c,d,_,E).normalize(),s[5].setComponents(u-c,p-d,x-_,C-E).normalize();else if(s[4].setComponents(u-c,p-d,x-_,C-E).normalize(),t===Vn)s[5].setComponents(u+c,p+d,x+_,C+E).normalize();else if(t===$r)s[5].setComponents(c,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=xv.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xl.x=s.normal.x>0?e.max.x:e.min.x,Xl.y=s.normal.y>0?e.max.y:e.min.y,Xl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(af,"Frustum");var _s=af,jm=new ft,Fc=class Fc{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];jm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _s),n[s].setFromProjectionMatrix(jm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Fc().copy(this)}};l(Fc,"FrustumArray");var dc=Fc;var of=class of extends mn{constructor(e=[],t=Ks,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(of,"CubeTexture");var ao=of,lf=class lf extends mn{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(lf,"CanvasTexture");var vs=lf;var cf=class cf extends mn{constructor(e,t,n=jn,s,r,a,o=Ut,c=Ut,u,h=Gi,f=1){if(h!==Gi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(cf,"DepthTexture");var Wi=cf,uf=class uf extends Wi{constructor(e,t=jn,n=Ks,s,r,a=Ut,o=Ut,c,u=Gi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(uf,"CubeDepthTexture");var oo=uf,hf=class hf extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(hf,"ExternalTexture");var lo=hf,Oc=class Oc extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function g(y,_,x,w,R,E,C,T,v,S,D){let P=E/v,O=C/S,G=E/2,J=C/2,L=T/2,K=v+1,te=S+1,N=0,z=0,F=new W;for(let k=0;k<te;k++){let $=k*O-J;for(let ne=0;ne<K;ne++){let he=ne*P-G;F[y]=he*w,F[_]=$*R,F[x]=L,u.push(F.x,F.y,F.z),F[y]=0,F[_]=0,F[x]=T>0?1:-1,h.push(F.x,F.y,F.z),f.push(ne/v),f.push(1-k/S),N+=1}}for(let k=0;k<S;k++)for(let $=0;$<v;$++){let ne=d+$+K*k,he=d+$+K*(k+1),q=d+($+1)+K*(k+1),de=d+($+1)+K*k;c.push(ne,he,de),c.push(he,q,de),z+=6}o.addGroup(p,z,D),p+=z,d+=N}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Oc,"BoxGeometry");var gi=Oc;var Bc=class Bc extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,y=[],_=n/2,x=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(p,2));function w(){let E=new W,C=new W,T=0,v=(t-e)/n;for(let S=0;S<=r;S++){let D=[],P=S/r,O=P*(t-e)+e;for(let G=0;G<=s;G++){let J=G/s,L=J*c+o,K=Math.sin(L),te=Math.cos(L);C.x=O*K,C.y=-P*n+_,C.z=O*te,f.push(C.x,C.y,C.z),E.set(K,v,te).normalize(),d.push(E.x,E.y,E.z),p.push(J,1-P),D.push(g++)}y.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){let P=y[D][S],O=y[D+1][S],G=y[D+1][S+1],J=y[D][S+1];(e>0||D!==0)&&(h.push(P,O,J),T+=3),(t>0||D!==r-1)&&(h.push(O,G,J),T+=3)}u.addGroup(x,T,0),x+=T}l(w,"generateTorso");function R(E){let C=g,T=new Ve,v=new W,S=0,D=E===!0?e:t,P=E===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,_*P,0),d.push(0,P,0),p.push(.5,.5),g++;let O=g;for(let G=0;G<=s;G++){let L=G/s*c+o,K=Math.cos(L),te=Math.sin(L);v.x=D*te,v.y=_*P,v.z=D*K,f.push(v.x,v.y,v.z),d.push(0,P,0),T.x=K*.5+.5,T.y=te*.5*P+.5,p.push(T.x,T.y),g++}for(let G=0;G<s;G++){let J=C+G,L=O+G;E===!0?h.push(L,L+1,J):h.push(L+1,L,J),S+=3}u.addGroup(x,S,E===!0?1:2),x+=S}l(R,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Bc,"CylinderGeometry");var xi=Bc,zc=class zc extends xi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new zc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(zc,"ConeGeometry");var _i=zc;var kc=class kc extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,f=e/o,d=t/c,p=[],g=[],y=[],_=[];for(let x=0;x<h;x++){let w=x*d-a;for(let R=0;R<u;R++){let E=R*f-r;g.push(E,-w,0),y.push(0,0,1),_.push(R/o),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<o;w++){let R=w+u*x,E=w+u*(x+1),C=w+1+u*(x+1),T=w+1+u*x;p.push(R,E,T),p.push(E,C,T)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}};l(kc,"PlaneGeometry");var vi=kc;var Gc=class Gc extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new W,d=new W,p=[],g=[],y=[],_=[];for(let x=0;x<=n;x++){let w=[],R=x/n,E=a+R*o,C=e*Math.cos(E),T=Math.sqrt(e*e-C*C),v=0;x===0&&a===0?v=.5/t:x===n&&c===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let D=S/t,P=s+D*r;f.x=-T*Math.cos(P),f.y=C,f.z=T*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),_.push(D+v,1-R),w.push(u++)}h.push(w)}for(let x=0;x<n;x++)for(let w=0;w<t;w++){let R=h[x][w+1],E=h[x][w],C=h[x+1][w],T=h[x+1][w+1];(x!==0||a>0)&&p.push(R,E,T),(x!==n-1||c<Math.PI)&&p.push(E,C,T)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Gc,"SphereGeometry");var ys=Gc;var Vc=class Vc extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],f=[],d=new W,p=new W,g=new W;for(let y=0;y<=n;y++){let _=a+y/n*o;for(let x=0;x<=s;x++){let w=x/s*r;p.x=(e+t*Math.cos(_))*Math.cos(w),p.y=(e+t*Math.cos(_))*Math.sin(w),p.z=t*Math.sin(_),u.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),f.push(x/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let _=1;_<=s;_++){let x=(s+1)*y+_-1,w=(s+1)*(y-1)+_-1,R=(s+1)*(y-1)+_,E=(s+1)*y+_;c.push(x,w,E),c.push(w,R,E)}this.setIndex(c),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Vc,"TorusGeometry");var bs=Vc;function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(e0(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(e0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(er,"cloneUniforms");function sn(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}l(sn,"mergeUniforms");function e0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(e0,"isThreeObject");function _v(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(_v,"cloneUniformsGroups");function Ed(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}l(Ed,"getUnlitUniformColorSpace");var tr={clone:er,merge:sn},vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,df=class df extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(df,"ShaderMaterial");var gn=df,ff=class ff extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(ff,"RawShaderMaterial");var fc=ff,pf=class pf extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(pf,"MeshStandardMaterial");var Xi=pf;var mf=class mf extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(mf,"MeshDepthMaterial");var pc=mf,gf=class gf extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(gf,"MeshDistanceMaterial");var mc=gf;function Gr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Gr,"convertArray");function ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(ql,"hasTangents");var xf=class xf{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(xf,"Interpolant");var Ms=xf,_f=class _f extends Ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=e,o=2*t-n;break;case Zh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,c=2*n-t;break;case Zh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,_=y*g,x=-d*_+2*d*y-d*g,w=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*g+1,R=(-1-p)*_+(1.5+p)*y+.5*g,E=p*_-p*y;for(let C=0;C!==o;++C)r[C]=x*a[h+C]+w*a[u+C]+R*a[c+C]+E*a[f+C];return r}};l(_f,"CubicInterpolant");var gc=_f,vf=class vf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[c+d]*h;return r}};l(vf,"LinearInterpolant");var xc=vf,yf=class yf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(yf,"DiscreteInterpolant");var _c=yf,bf=class bf extends Ms{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),y=1-g;for(let _=0;_!==o;++_)r[_]=a[u+_]*y+a[c+_]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],_=a[c+g],x=p*d+g*2,w=f[x],R=f[x+1],E=e*d+g*2,C=h[E],T=h[E+1],v=Mv(n,t,w,C,s);r[g]=Y0(v,y,R,T,_)}return r}};l(bf,"BezierInterpolant");var vc=bf;function Y0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(Y0,"cubicBezier");function bv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(bv,"cubicBezierSlope");function Mv(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Y0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=bv(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(Mv,"solveBezierParameter");var Mf=class Mf{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ql(e.settings)&&(n.settings={inTangents:Gr(e.settings.inTangents,Array),outTangents:Gr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case rc:t=this.InterpolantFactoryMethodLinear;break;case Zl:t=this.InterpolantFactoryMethodSmooth;break;case qh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return Zl;case this.InterpolantFactoryMethodBezier:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ql(this.settings)&&(t0(this.settings.inTangents,e),t0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ql(this.settings)&&(n0(this.settings.inTangents,e),n0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Z_(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(Mf,"KeyframeTrack");var Rn=Mf;function t0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(t0,"shiftTangentTimes");function n0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(n0,"scaleTangentTimes");Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=rc;var Sf=class Sf extends Rn{constructor(e,t,n){super(e,t,n)}};l(Sf,"BooleanKeyframeTrack");var Ss=Sf;Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=$a;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var wf=class wf extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};l(wf,"ColorKeyframeTrack");var yc=wf;yc.prototype.ValueTypeName="color";var Ef=class Ef extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};l(Ef,"NumberKeyframeTrack");var bc=Ef;bc.prototype.ValueTypeName="number";var Tf=class Tf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)pn.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(Tf,"QuaternionLinearInterpolant");var Mc=Tf,Af=class Af extends Rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};l(Af,"QuaternionKeyframeTrack");var co=Af;co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Cf=class Cf extends Rn{constructor(e,t,n){super(e,t,n)}};l(Cf,"StringKeyframeTrack");var ws=Cf;ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=$a;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Rf=class Rf extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};l(Rf,"VectorKeyframeTrack");var Sc=Rf;Sc.prototype.ValueTypeName="vector";var Pf=class Pf{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Pf,"LoadingManager");var wc=Pf,$0=new wc,If=class If{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(If,"Loader");var Ec=If;Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lf=class Lf extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Lf,"Light");var uo=Lf,Df=class Df extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Df,"HemisphereLight");var ho=Df,Xh=new ft,i0=new W,s0=new W,Nf=class Nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;i0.setFromMatrixPosition(e.matrixWorld),t.position.copy(i0),s0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===$r||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Nf,"LightShadow");var Tc=Nf,Yl=new W,$l=new pn,fi=new W,Uf=class Uf extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,$l,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,$l,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yl,$l,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,$l,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Uf,"Camera");var fo=Uf,fs=new W,r0=new Ve,a0=new Ve,Ff=class Ff extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,r0,a0),t.subVectors(a0,r0)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Ff,"PerspectiveCamera");var dn=Ff;var Of=class Of extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Of,"OrthographicCamera");var po=Of,Bf=class Bf extends Tc{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Bf,"DirectionalLightShadow");var Jh=Bf,zf=class zf extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(zf,"DirectionalLight");var mo=zf;var kf=class kf extends Ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(kf,"InstancedBufferGeometry");var go=kf;var Vr=-90,Hr=1,Gf=class Gf extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Vr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new dn(Vr,Hr,e,t);r.layers=this.layers,this.add(r);let a=new dn(Vr,Hr,e,t);a.layers=this.layers,this.add(a);let o=new dn(Vr,Hr,e,t);o.layers=this.layers,this.add(o);let c=new dn(Vr,Hr,e,t);c.layers=this.layers,this.add(c);let u=new dn(Vr,Hr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(Gf,"CubeCamera");var na=Gf,Vf=class Vf extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Vf,"ArrayCamera");var Ac=Vf;var Td="\\[\\]\\.:\\/",Sv=new RegExp("["+Td+"]","g"),Ad="[^"+Td+"]",wv="[^"+Td.replace("\\.","")+"]",Ev=/((?:WC+[\/:])*)/.source.replace("WC",Ad),Tv=/(WCOD+)?/.source.replace("WCOD",wv),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ad),Cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ad),Rv=new RegExp("^"+Ev+Tv+Av+Cv+"$"),Pv=["material","materials","bones","map"],Hf=class Hf{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Hf,"Composite");var Kh=Hf,ms=class ms{constructor(e,t,n){this.path=t,this.parsedPath=n||ms.parseTrackName(t),this.node=ms.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ms.Composite(e,t,n):new ms(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(e){let t=Rv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=ms.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(ms,"PropertyBinding");var vt=ms;vt.Composite=Kh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QE=new Float32Array(1);var Hc=class Hc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(Hc,"Matrix2"),Hc.prototype.isMatrix2=!0;var Qh=Hc;function Cd(i,e,t,n){let s=Iv(n);switch(t){case xd:return i*e;case vd:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case Mi:return i*e*2/s.components*s.byteLength;case Qc:return i*e*2/s.components*s.byteLength;case _d:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case yo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tu:case iu:return Math.max(i,16)*Math.max(e,8)/4;case eu:case nu:return Math.max(i,8)*Math.max(e,8)/2;case su:case ru:case ou:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case au:case wo:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wu:case Eu:case Tu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Au:case Cu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case Ru:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Cd,"getByteLength");function Iv(i){switch(i){case bn:case fd:return{byteLength:1,components:1};case aa:case pd:case Pn:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case jn:case $c:case ei:return{byteLength:4,components:1};case md:case gd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(Iv,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function gg(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(gg,"WebGLAnimation");function Ov(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(Ov,"WebGLAttributes");var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
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
#endif`,kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
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
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oy=`#define PI 3.141592653589793
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
} // validated`,ly=`vec3 transformedNormal = objectNormal;
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
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
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
}`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
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
#endif`,Uy=`uniform sampler2D dfgLUT;
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
}`,Fy=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,By=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yy=`#if defined( USE_POINTS_UV )
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
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ky=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
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
#endif`,eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ab=`#ifdef USE_NORMALMAP
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
#endif`,ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mb=`float getShadowMask() {
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
}`,Sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform float backgroundBlurriness;
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`#include <common>
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
}`,Wb=`#if DEPTH_PACKING == 3200
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
}`,Xb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`uniform float scale;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,Qb=`uniform vec3 diffuse;
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
}`,jb=`#define LAMBERT
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define MATCAP
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
}`,nM=`#define MATCAP
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
}`,iM=`#define NORMAL
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
}`,sM=`#define NORMAL
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
}`,rM=`#define PHONG
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
}`,aM=`#define PHONG
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
}`,oM=`#define STANDARD
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
}`,lM=`#define STANDARD
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
}`,cM=`#define TOON
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
}`,uM=`#define TOON
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
}`,hM=`uniform float size;
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
}`,dM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,pM=`uniform vec3 color;
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
}`,mM=`uniform float rotation;
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
}`,gM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Bv,alphahash_pars_fragment:zv,alphamap_fragment:kv,alphamap_pars_fragment:Gv,alphatest_fragment:Vv,alphatest_pars_fragment:Hv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:$v,beginnormal_vertex:Zv,bsdfs:Jv,iridescence_fragment:Kv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:jv,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ty,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:sy,color_pars_vertex:ry,color_vertex:ay,common:oy,defaultnormal_vertex:ly,displacementmap_pars_vertex:cy,displacementmap_vertex:uy,emissivemap_fragment:hy,emissivemap_pars_fragment:dy,colorspace_fragment:fy,colorspace_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:xy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Ry,envmap_vertex:vy,fog_vertex:yy,fog_pars_vertex:by,fog_fragment:My,fog_pars_fragment:Sy,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Ey,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:Ay,lights_pars_begin:Cy,lights_toon_fragment:Py,lights_toon_pars_fragment:Iy,lights_phong_fragment:Ly,lights_phong_pars_fragment:Dy,lights_physical_fragment:Ny,lights_physical_pars_fragment:Uy,lights_fragment_begin:Fy,lights_fragment_maps:Oy,lights_fragment_end:By,lightprobes_pars_fragment:zy,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Hy,map_fragment:Wy,map_pars_fragment:Xy,map_particle_fragment:qy,map_particle_pars_fragment:Yy,metalnessmap_fragment:$y,metalnessmap_pars_fragment:Zy,morphinstance_vertex:Jy,morphcolor_vertex:Ky,morphnormal_vertex:Qy,morphtarget_pars_vertex:jy,morphtarget_vertex:eb,normal_fragment_begin:tb,normal_fragment_maps:nb,normal_pars_fragment:ib,normal_pars_vertex:sb,normal_vertex:rb,normalmap_pars_fragment:ab,clearcoat_normal_fragment_begin:ob,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:cb,iridescence_pars_fragment:ub,opaque_fragment:hb,packing:db,premultiplied_alpha_fragment:fb,project_vertex:pb,dithering_fragment:mb,dithering_pars_fragment:gb,roughnessmap_fragment:xb,roughnessmap_pars_fragment:_b,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:yb,shadowmap_vertex:bb,shadowmask_pars_fragment:Mb,skinbase_vertex:Sb,skinning_pars_vertex:wb,skinning_vertex:Eb,skinnormal_vertex:Tb,specularmap_fragment:Ab,specularmap_pars_fragment:Cb,tonemapping_fragment:Rb,tonemapping_pars_fragment:Pb,transmission_fragment:Ib,transmission_pars_fragment:Lb,uv_pars_fragment:Db,uv_pars_vertex:Nb,uv_vertex:Ub,worldpos_vertex:Fb,background_vert:Ob,background_frag:Bb,backgroundCube_vert:zb,backgroundCube_frag:kb,cube_vert:Gb,cube_frag:Vb,depth_vert:Hb,depth_frag:Wb,distance_vert:Xb,distance_frag:qb,equirect_vert:Yb,equirect_frag:$b,linedashed_vert:Zb,linedashed_frag:Jb,meshbasic_vert:Kb,meshbasic_frag:Qb,meshlambert_vert:jb,meshlambert_frag:eM,meshmatcap_vert:tM,meshmatcap_frag:nM,meshnormal_vert:iM,meshnormal_frag:sM,meshphong_vert:rM,meshphong_frag:aM,meshphysical_vert:oM,meshphysical_frag:lM,meshtoon_vert:cM,meshtoon_frag:uM,points_vert:hM,points_frag:dM,shadow_vert:fM,shadow_frag:pM,sprite_vert:mM,sprite_frag:gM},we={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},wi={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};wi.physical={uniforms:sn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Lu={r:0,b:0,g:0},xM=new ft,xg=new We;xg.set(-1,0,0,0,1,0,0,0,1);function _M(i,e,t,n,s,r){let a=new Oe(0),o=s===!0?0:1,c,u,h=null,f=0,d=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let E=w.backgroundBlurriness>0;R=e.get(R,E)}return R}l(p,"getBackground");function g(w){let R=!1,E=p(w);E===null?_(a,o):E&&E.isColor&&(_(E,1),R=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(w,R){let E=p(R);E&&E.isCubeTexture?(u===void 0&&(u=new wt(new gi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:er(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(xg),u.material.toneMapped=st.getTransfer(E.colorSpace)!==ht,(h!==E||f!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new wt(new vi(2,2),new gn({name:"BackgroundMaterial",uniforms:er(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function _(w,R){w.getRGB(Lu,Ed(i)),t.buffers.color.setClear(Lu.r,Lu.g,Lu.b,R,r)}l(_,"setClear");function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(x,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(w,R=1){a.set(w),o=R,_(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(w){o=w,_(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:x}}l(_M,"WebGLBackground");function vM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(O,G,J,L,K){let te=!1,N=f(O,L,J,G);r!==N&&(r=N,u(r.object)),te=p(O,L,J,K),te&&g(O,L,J,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,E(O,G,J,L),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(O){return i.bindVertexArray(O)}l(u,"bindVertexArrayObject");function h(O){return i.deleteVertexArray(O)}l(h,"deleteVertexArrayObject");function f(O,G,J,L){let K=L.wireframe===!0,te=n[G.id];te===void 0&&(te={},n[G.id]=te);let N=O.isInstancedMesh===!0?O.id:0,z=te[N];z===void 0&&(z={},te[N]=z);let F=z[J.id];F===void 0&&(F={},z[J.id]=F);let k=F[K];return k===void 0&&(k=d(c()),F[K]=k),k}l(f,"getBindingState");function d(O){let G=[],J=[],L=[];for(let K=0;K<t;K++)G[K]=0,J[K]=0,L[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:L,object:O,attributes:{},index:null}}l(d,"createBindingState");function p(O,G,J,L){let K=r.attributes,te=G.attributes,N=0,z=J.getAttributes();for(let F in z)if(z[F].location>=0){let $=K[F],ne=te[F];if(ne===void 0&&(F==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),F==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;N++}return r.attributesNum!==N||r.index!==L}l(p,"needsUpdate");function g(O,G,J,L){let K={},te=G.attributes,N=0,z=J.getAttributes();for(let F in z)if(z[F].location>=0){let $=te[F];$===void 0&&(F==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),F==="instanceColor"&&O.instanceColor&&($=O.instanceColor));let ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),K[F]=ne,N++}r.attributes=K,r.attributesNum=N,r.index=L}l(g,"saveCache");function y(){let O=r.newAttributes;for(let G=0,J=O.length;G<J;G++)O[G]=0}l(y,"initAttributes");function _(O){x(O,0)}l(_,"enableAttribute");function x(O,G){let J=r.newAttributes,L=r.enabledAttributes,K=r.attributeDivisors;J[O]=1,L[O]===0&&(i.enableVertexAttribArray(O),L[O]=1),K[O]!==G&&(i.vertexAttribDivisor(O,G),K[O]=G)}l(x,"enableAttributeAndDivisor");function w(){let O=r.newAttributes,G=r.enabledAttributes;for(let J=0,L=G.length;J<L;J++)G[J]!==O[J]&&(i.disableVertexAttribArray(J),G[J]=0)}l(w,"disableUnusedAttributes");function R(O,G,J,L,K,te,N){N===!0?i.vertexAttribIPointer(O,G,J,K,te):i.vertexAttribPointer(O,G,J,L,K,te)}l(R,"vertexAttribPointer");function E(O,G,J,L){y();let K=L.attributes,te=J.getAttributes(),N=G.defaultAttributeValues;for(let z in te){let F=te[z];if(F.location>=0){let k=K[z];if(k===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),k!==void 0){let $=k.normalized,ne=k.itemSize,he=e.get(k);if(he===void 0)continue;let q=he.buffer,de=he.type,ie=he.bytesPerElement,ae=de===i.INT||de===i.UNSIGNED_INT||k.gpuType===$c;if(k.isInterleavedBufferAttribute){let ce=k.data,Ae=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,qe=k.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Pe=0;Pe<F.locationSize;Pe++)x(F.location+Pe,ce.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Pe=0;Pe<F.locationSize;Pe++)_(F.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Pe=0;Pe<F.locationSize;Pe++)R(F.location+Pe,ne/F.locationSize,de,$,Ae*ie,(qe+ne/F.locationSize*Pe)*ie,ae)}else{if(k.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)x(F.location+ce,k.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ce=0;ce<F.locationSize;ce++)_(F.location+ce);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ce=0;ce<F.locationSize;ce++)R(F.location+ce,ne/F.locationSize,de,$,ne*ie,ne/F.locationSize*ce*ie,ae)}}else if(N!==void 0){let $=N[z];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(F.location,$);break;case 3:i.vertexAttrib3fv(F.location,$);break;case 4:i.vertexAttrib4fv(F.location,$);break;default:i.vertexAttrib1fv(F.location,$)}}}}w()}l(E,"setupVertexAttributes");function C(){D();for(let O in n){let G=n[O];for(let J in G){let L=G[J];for(let K in L){let te=L[K];for(let N in te)h(te[N].object),delete te[N];delete L[K]}}delete n[O]}}l(C,"dispose");function T(O){if(n[O.id]===void 0)return;let G=n[O.id];for(let J in G){let L=G[J];for(let K in L){let te=L[K];for(let N in te)h(te[N].object),delete te[N];delete L[K]}}delete n[O.id]}l(T,"releaseStatesOfGeometry");function v(O){for(let G in n){let J=n[G];for(let L in J){let K=J[L];if(K[O.id]===void 0)continue;let te=K[O.id];for(let N in te)h(te[N].object),delete te[N];delete K[O.id]}}}l(v,"releaseStatesOfProgram");function S(O){for(let G in n){let J=n[G],L=O.isInstancedMesh===!0?O.id:0,K=J[L];if(K!==void 0){for(let te in K){let N=K[te];for(let z in N)h(N[z].object),delete N[z];delete K[te]}delete J[L],Object.keys(J).length===0&&delete n[G]}}}l(S,"releaseStatesOfObject");function D(){P(),a=!0,r!==s&&(r=s,u(r.object))}l(D,"reset");function P(){s.geometry=null,s.program=null,s.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:D,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:_,disableUnusedAttributes:w}}l(vM,"WebGLBindingStates");function yM(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(yM,"WebGLBufferRenderer");function bM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(v){return!(v!==ti&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let S=v===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==bn&&v!==ei&&!S&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ge("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:E,maxSamples:C,samples:T}}l(bM,"WebGLCapabilities");function MM(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,x=i.get(f);if(!s||g===null||g.length===0||r&&!_)r?h(null):u();else{let w=r?0:n,R=w*4,E=x.clippingState||null;c.value=E,E=h(g,d,R,p);for(let C=0;C!==R;++C)E[C]=t[C];x.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,p,g){let y=f!==null?f.length:0,_=null;if(y!==0){if(_=c.value,g!==!0||_===null){let x=p+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(_===null||_.length<x)&&(_=new Float32Array(x));for(let R=0,E=p;R!==y;++R,E+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(_,E),_[E+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}l(h,"projectPlanes")}l(MM,"WebGLClipping");var ep=class ep extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ao(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Zs});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Xt),new na(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(ep,"WebGLCubeRenderTarget");var Co=ep,Z0=256,SM=3,wM=20,_g=256,vg=16,EM=3,TM=new W,AM=new Oe,Fu=class Fu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new na(1,10,null),this._boxMesh=new wt(new gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=TM}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(AM));let _=new na(n,s,h);return _.position.copy(o),_.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Z0,V0(e))}_fromTexture(e,t){e.mapping===Ks||e.mapping===ra?this._setSize(e.image.length===0?Z0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=J0(e,!1,!1),n=Math.log2(e)-SM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=J0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ks||e.mapping===ra?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=K0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=CM(),this._integrationMaterial=RM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/vg);for(let a=0;a<=n;a++){let o=Fu.lodToRoughness(a,n);if(a>n-EM)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(_g*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=PM());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(Fu,"PMREMGenerator");var Nu=Fu;function J0(i,e,t){return new Co(i,{minFilter:Qn,generateMipmaps:e,type:Pn,colorSpace:Za,depthBuffer:t})}l(J0,"_createRenderTarget");function Ro(i,e,t){return new gn({name:i,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:xn,blending:Zs,depthTest:!1,depthWrite:!1})}l(Ro,"_getMaterial");function CM(){return Ro("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_g}u

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
	`)}l(CM,"_getGGXMaterial");function RM(){return Ro("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vg}},`

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
	`)}l(RM,"_getIntegrationMaterial");function PM(){return Ro("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wM}
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
	`)}l(PM,"_getBlurMaterial");function K0(){return Ro("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(K0,"_getEquirectMaterial");function Q0(){return Ro("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Q0,"_getCubemapMaterial");function IM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}l(s,"get");function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Xc||p===qc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Co(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===Xc||p===qc,y=p===Ks||p===ra;if(g||y){let _=t.get(d),x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Nu(i)),_=g?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{let w=d.image;return g&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new Nu(i)),_=g?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}l(a,"getPMREM");function o(d,p){return p===Xc?d.mapping=Ks:p===qc&&(d.mapping=ra),d}l(o,"mapTextureMapping");function c(d){let p=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&p++;return p===g}l(c,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}l(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:s,dispose:f}}l(IM,"WebGLEnvironments");function LM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&qa("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(LM,"WebGLExtensions");function DM(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let _ in g.attributes)e.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let _ in y)e.update(y[_],i.ARRAY_BUFFER)}l(h,"update");function f(g){let y=g.index,_=g.attributes.position,x=0;if(_===void 0)return;let w=y!==null?y.array.length:_.array.length/3-1,R=_.count>=65535?so:io,E=new R(Math.ceil(w/3)*6,1),C=E.array;if(y!==null){let v=y.array;x=y.version;for(let S=0,D=0;S<w;S+=3){let P=v[S+0],O=v[S+1],G=v[S+2];C[D++]=P,C[D++]=O,C[D++]=O,C[D++]=G,C[D++]=G,C[D++]=P}}else{x=_.version;for(let v=0,S=0;v<w;v+=3){let D=v+0,P=v+1,O=v+2;C[S++]=D,C[S++]=P,C[S++]=P,C[S++]=O,C[S++]=O,C[S++]=D}}E.version=x;let T=r.get(g);T&&e.remove(T),r.set(g,E)}l(f,"updateWireframeAttribute");function d(g){let y=r.get(g);if(y){let _=g.index;_!==null&&y.version<_.version&&f(g)}else f(g);return r.get(g)}l(d,"getWireframeAttribute");function p(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return l(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}l(DM,"WebGLGeometries");function NM(i,e,t){let n;function s(f){n=f}l(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}l(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let y=0;for(let _=0;_<p;_++)y+=d[_];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(NM,"WebGLIndexedBufferRenderer");function UM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(UM,"WebGLInfo");function FM(i,e,t){let n=new WeakMap,s=new St;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),_===!0&&(E=3);let C=o.attributes.position.count*E,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let v=new Float32Array(C*T*4*f),S=new ja(v,C,T,f);S.type=ei,S.needsUpdate=!0;let D=E*4;for(let O=0;O<f;O++){let G=x[O],J=w[O],L=R[O],K=C*T*4*O;for(let te=0;te<G.count;te++){let N=te*D;g===!0&&(s.fromBufferAttribute(G,te),v[K+N+0]=s.x,v[K+N+1]=s.y,v[K+N+2]=s.z,v[K+N+3]=0),y===!0&&(s.fromBufferAttribute(J,te),v[K+N+4]=s.x,v[K+N+5]=s.y,v[K+N+6]=s.z,v[K+N+7]=0),_===!0&&(s.fromBufferAttribute(L,te),v[K+N+8]=s.x,v[K+N+9]=s.y,v[K+N+10]=s.z,v[K+N+11]=L.itemSize===4?s.w:1)}}d={count:f,texture:S,size:new Ve(C,T)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let _=0;_<u.length;_++)g+=u[_];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(FM,"WebGLMorphtargets");function OM(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(OM,"WebGLObjects");var BM={[ad]:"LINEAR_TONE_MAPPING",[od]:"REINHARD_TONE_MAPPING",[ld]:"CINEON_TONE_MAPPING",[_o]:"ACES_FILMIC_TONE_MAPPING",[ud]:"AGX_TONE_MAPPING",[hd]:"NEUTRAL_TONE_MAPPING",[cd]:"CUSTOM_TONE_MAPPING"};function zM(i,e,t,n,s,r){let a=new An(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Ft;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let f=new fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new wt(h,f),p=new po(-1,1,1,-1,0,1),g=null,y=null,_=!1,x,w=null,R=[],E=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),c!==null&&c.setSize(C,T);for(let v=0;v<R.length;v++){let S=R[v];S.setSize&&S.setSize(C,T)}},this.setEffects=function(C){R=C,E=R.length>0&&R[0].isRenderPass===!0;let T=a.width,v=a.height;R.length>0&&o===null&&(o=new An(T,v,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new An(T,v,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Wi(T,v),r===!0&&(u.format=qi,u.type=Qs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<R.length;D++){let P=R[D];P.setSize&&P.setSize(T,v),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(C,T){if(_||C.toneMapping===bi&&R.length===0)return!1;if(w=T,T!==null){let v=T.width,S=T.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return E===!1&&C.setRenderTarget(a),x=C.toneMapping,C.toneMapping=bi,!0},this.hasRenderPass=function(){return E},this.end=function(C,T){C.toneMapping=x,_=!0;let v=a,S=o;for(let D=0;D<R.length;D++){let P=R[D];P.enabled!==!1&&(P.render(C,S,v,T),P.needsSwap!==!1&&(v=S,S=S===o?c:o))}if(g!==C.outputColorSpace||y!==C.toneMapping){g=C.outputColorSpace,y=C.toneMapping,f.defines={},st.getTransfer(g)===ht&&(f.defines.SRGB_TRANSFER="");let D=BM[y];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,C.setRenderTarget(w),C.render(d,p),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(zM,"WebGLOutput");var yg=new mn,bg=new Wi(1,1),Mg=new oo(1),Sg=new ja,wg=new cc,Eg=new ao,j0=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function la(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=j0[s];if(r===void 0&&(r=new Float32Array(s),j0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(la,"flatten");function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(zt,"arraysEqual");function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(kt,"copyArray");function Ou(i,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Ou,"allocTexUnits");function kM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(kM,"setValueV1f");function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}l(GM,"setValueV2f");function VM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}l(VM,"setValueV3f");function HM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}l(HM,"setValueV4f");function WM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;ig.set(n),i.uniformMatrix2fv(this.addr,!1,ig),kt(t,n)}}l(WM,"setValueM2");function XM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;ng.set(n),i.uniformMatrix3fv(this.addr,!1,ng),kt(t,n)}}l(XM,"setValueM3");function qM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;tg.set(n),i.uniformMatrix4fv(this.addr,!1,tg),kt(t,n)}}l(qM,"setValueM4");function YM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(YM,"setValueV1i");function $M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}l($M,"setValueV2i");function ZM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}l(ZM,"setValueV3i");function JM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}l(JM,"setValueV4i");function KM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(KM,"setValueV1ui");function QM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}l(QM,"setValueV2ui");function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}l(jM,"setValueV3ui");function eS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}l(eS,"setValueV4ui");function Bu(i){return i.version===0&&(i.compareFunction=Md,i.needsUpdate=!0),i}l(Bu,"initShadowTexture");function tS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Bu(bg):r=yg,t.setTexture2D(e||r,s)}l(tS,"setValueT1");function nS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wg,s)}l(nS,"setValueT3D1");function iS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Bu(Mg):r=Eg,t.setTextureCube(e||r,s)}l(iS,"setValueT6");function sS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sg,s)}l(sS,"setValueT2DArray1");function rS(i){switch(i){case 5126:return kM;case 35664:return GM;case 35665:return VM;case 35666:return HM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return $M;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return KM;case 36294:return QM;case 36295:return jM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return sS}}l(rS,"getSingularSetter");function aS(i,e){i.uniform1fv(this.addr,e)}l(aS,"setValueV1fArray");function oS(i,e){let t=la(e,this.size,2);i.uniform2fv(this.addr,t)}l(oS,"setValueV2fArray");function lS(i,e){let t=la(e,this.size,3);i.uniform3fv(this.addr,t)}l(lS,"setValueV3fArray");function cS(i,e){let t=la(e,this.size,4);i.uniform4fv(this.addr,t)}l(cS,"setValueV4fArray");function uS(i,e){let t=la(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(uS,"setValueM2Array");function hS(i,e){let t=la(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(hS,"setValueM3Array");function dS(i,e){let t=la(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(dS,"setValueM4Array");function fS(i,e){i.uniform1iv(this.addr,e)}l(fS,"setValueV1iArray");function pS(i,e){i.uniform2iv(this.addr,e)}l(pS,"setValueV2iArray");function mS(i,e){i.uniform3iv(this.addr,e)}l(mS,"setValueV3iArray");function gS(i,e){i.uniform4iv(this.addr,e)}l(gS,"setValueV4iArray");function xS(i,e){i.uniform1uiv(this.addr,e)}l(xS,"setValueV1uiArray");function _S(i,e){i.uniform2uiv(this.addr,e)}l(_S,"setValueV2uiArray");function vS(i,e){i.uniform3uiv(this.addr,e)}l(vS,"setValueV3uiArray");function yS(i,e){i.uniform4uiv(this.addr,e)}l(yS,"setValueV4uiArray");function bS(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bu(bg):a=yg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(bS,"setValueT1Array");function MS(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wg,r[a])}l(MS,"setValueT3DArray");function SS(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Bu(Mg):a=Eg;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(SS,"setValueT6Array");function wS(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sg,r[a])}l(wS,"setValueT2DArrayArray");function ES(i){switch(i){case 5126:return aS;case 35664:return oS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return fS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return xS;case 36294:return _S;case 36295:return vS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return wS}}l(ES,"getPureArraySetter");var tp=class tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rS(t.type)}};l(tp,"SingleUniform");var qf=tp,np=class np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ES(t.type)}};l(np,"PureArrayUniform");var Yf=np,ip=class ip{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(ip,"StructuredUniform");var $f=ip,Wf=/(\w+)(\])?(\[|\.)?/g;function sg(i,e){i.seq.push(e),i.map[e.id]=e}l(sg,"addUniform");function TS(i,e,t){let n=i.name,s=n.length;for(Wf.lastIndex=0;;){let r=Wf.exec(n),a=Wf.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){sg(t,u===void 0?new qf(o,i,e):new Yf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new $f(o),sg(t,f)),t=f}}}l(TS,"parseUniform");var sp=class sp{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);TS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(sp,"WebGLUniforms");var oa=sp;function rg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(rg,"WebGLShader");var AS=37297,CS=0;function RS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(RS,"handleSource");var ag=new We;function PS(i){st._getMatrix(ag,st.workingColorSpace,i);let e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Ja:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(PS,"getEncodingComponents");function og(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+RS(i.getShaderSource(e),o)}else return r}l(og,"getShaderErrors");function IS(i,e){let t=PS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(IS,"getTexelEncodingFunction");var LS={[ad]:"Linear",[od]:"Reinhard",[ld]:"Cineon",[_o]:"ACESFilmic",[ud]:"AgX",[hd]:"Neutral",[cd]:"Custom"};function DS(i,e){let t=LS[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(DS,"getToneMappingFunction");var Du=new W;function NS(){st.getLuminanceCoefficients(Du);let i=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(NS,"getLuminanceFunction");function US(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}l(US,"generateVertexExtensions");function FS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(FS,"generateDefines");function OS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(OS,"fetchAttributeLocations");function Ao(i){return i!==""}l(Ao,"filterEmptyLine");function lg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(lg,"replaceLightNums");function cg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(cg,"replaceClippingPlaneNums");var BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(i){return i.replace(BS,zS)}l(Zf,"resolveIncludes");function zS(i,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zf(t)}l(zS,"includeReplacer");var kS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(i){return i.replace(kS,GS)}l(ug,"unrollLoops");function GS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(GS,"loopReplacer");function hg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(hg,"generatePrecision");var VS={[xo]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function HS(i){return VS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(HS,"generateShadowMapTypeDefine");var WS={[ra]:"ENVMAP_MODE_REFRACTION"};function XS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":WS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(XS,"generateEnvMapModeDefine");var qS={[rd]:"ENVMAP_BLENDING_MULTIPLY",[A0]:"ENVMAP_BLENDING_MIX",[C0]:"ENVMAP_BLENDING_ADD"};function YS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qS[i.combine]||"ENVMAP_BLENDING_NONE"}l(YS,"generateEnvMapBlendingDefine");function $S(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=HS(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=XS(t),f=YS(t),d=US(t),p=FS(r),g=s.createProgram(),y,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(y=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Je.tonemapping_pars_fragment:"",t.toneMapping!==bi?DS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,IS("linearToOutputTexel",t.outputColorSpace),NS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),a=Zf(a),a=lg(a,t),a=cg(a,t),o=Zf(o),o=lg(o,t),o=cg(o,t),a=ug(a),o=ug(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=x+y+a,R=x+_+o,E=rg(s,s.VERTEX_SHADER,w),C=rg(s,s.FRAGMENT_SHADER,R);s.attachShader(g,E),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(C)||"",L=O.trim(),K=G.trim(),te=J.trim(),N=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,C);else{let F=og(s,E,"vertex"),k=og(s,C,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+F+`
`+k)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(K===""||te==="")&&(z=!1);z&&(P.diagnostics={runnable:N,programLog:L,vertexShader:{log:K,prefix:y},fragmentShader:{log:te,prefix:_}})}s.deleteShader(E),s.deleteShader(C),v=new oa(s,g),S=OS(s,g)}l(T,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&T(this),v};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,AS)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=C,this}l($S,"WebGLProgram");var ZS=0,rp=class rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kf(e),t.set(e,n)),n}};l(rp,"WebGLShaderCache");var Jf=rp,ap=class ap{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}};l(ap,"WebGLShaderStage");var Kf=ap;function JS(i){return i===Mi||i===wo||i===Eo}l(JS,"isPackedRGFormat");function KS(i,e,t,n,s,r){let a=new eo,o=new Jf,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}l(p,"getChannel");function g(v,S,D,P,O,G){let J=P.fog,L=O.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,N=e.get(v.envMap||K,te),z=d[v.type],F=n.precision;v.precision!==null&&(F=n.getMaxPrecision(v.precision),F!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",F,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=k!==void 0?k.length:0,ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let he,q,de,ie;if(z){let Te=wi[z];he=Te.vertexShader,q=Te.fragmentShader}else{he=v.vertexShader,q=v.fragmentShader;let Te=o.getVertexShaderStage(v),dt=o.getFragmentShaderStage(v);o.update(v,Te,dt),de=Te.id,ie=dt.id}let ae=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ae=O.isInstancedMesh===!0,qe=O.isBatchedMesh===!0,Pe=!!v.map,Ke=!!v.matcap,je=!!N,Be=je&&N.isPMREMTexture===!0,ut=!!v.aoMap,xt=!!v.lightMap,_t=!!v.bumpMap&&v.wireframe===!1,et=!!v.normalMap,Pt=!!v.displacementMap,Xe=!!v.emissiveMap,It=!!v.metalnessMap,At=!!v.roughnessMap,Ct=v.anisotropy>0,B=v.clearcoat>0,Bt=v.diffuseRoughness>0,at=v.dispersion>0,tt=v.retroreflectivity>0,me=v.iridescence>0,pt=v.sheen>0,Ue=v.transmission>0,ke=Ct&&!!v.anisotropyMap,A=B&&!!v.clearcoatMap,b=B&&!!v.clearcoatNormalMap,X=B&&!!v.clearcoatRoughnessMap,fe=Bt&&!!v.diffuseRoughnessMap,le=me&&!!v.iridescenceMap,xe=me&&!!v.iridescenceThicknessMap,Me=pt&&!!v.sheenColorMap,se=pt&&!!v.sheenRoughnessMap,re=!!v.specularMap,ve=!!v.specularColorMap,I=!!v.specularIntensityMap,oe=Ue&&!!v.transmissionMap,ee=Ue&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Fe=!!v.alphaHash,Ze=!!v.extensions,pe=bi;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pe=i.toneMapping);let ze=Be?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,$e={shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:he,fragmentShader:q,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:F,batching:qe,batchingColor:qe&&O._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&O.instanceColor!==null,instancingMorph:Ae&&O.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Ke,envMap:je,envMapMode:je&&N.mapping,envMapPMREM:Be,envMapMaxLod:Be?ze.length-1:null,envMapSize:Be?ze[0].width:null,aoMap:ut,lightMap:xt,bumpMap:_t,normalMap:et,displacementMap:Pt,emissiveMap:Xe,normalMapObjectSpace:et&&v.normalMapType===I0,normalMapTangentSpace:et&&v.normalMapType===Pu,packedNormalMap:et&&v.normalMapType===Pu&&JS(v.normalMap.format),metalnessMap:It,roughnessMap:At,anisotropy:Ct,anisotropyMap:ke,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:Bt,diffuseRoughnessMap:fe,dispersion:at,retroreflection:tt,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:pt,sheenColorMap:Me,sheenRoughnessMap:se,specularMap:re,specularColorMap:ve,specularIntensityMap:I,transmission:Ue,transmissionMap:oe,thicknessMap:ee,gradientMap:ye,opaque:v.transparent===!1&&v.blending===sa&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Fe,combine:v.combine,mapUv:Pe&&p(v.map.channel),aoMapUv:ut&&p(v.aoMap.channel),lightMapUv:xt&&p(v.lightMap.channel),bumpMapUv:_t&&p(v.bumpMap.channel),normalMapUv:et&&p(v.normalMap.channel),displacementMapUv:Pt&&p(v.displacementMap.channel),emissiveMapUv:Xe&&p(v.emissiveMap.channel),metalnessMapUv:It&&p(v.metalnessMap.channel),roughnessMapUv:At&&p(v.roughnessMap.channel),anisotropyMapUv:ke&&p(v.anisotropyMap.channel),clearcoatMapUv:A&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:se&&p(v.sheenRoughnessMap.channel),specularMapUv:re&&p(v.specularMap.channel),specularColorMapUv:ve&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:oe&&p(v.transmissionMap.channel),thicknessMapUv:ee&&p(v.thicknessMap.channel),alphaMapUv:ge&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(et||Ct),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Pe||ge),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&et===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ne,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:Xe&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yi,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ze&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&v.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}l(g,"getParameters");function y(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(S,v),x(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}l(y,"getProgramCacheKey");function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}l(_,"getProgramCacheKeyParameters");function x(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(x,"getProgramCacheKeyBooleans");function w(v){let S=d[v.type],D;if(S){let P=wi[S];D=tr.clone(P.uniforms)}else D=v.uniforms;return D}l(w,"getUniforms");function R(v,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new $S(i,S,v,s),u.push(D),h.set(S,D)),D}l(R,"acquireProgram");function E(v){if(--v.usedTimes===0){let S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(E,"releaseProgram");function C(v){o.remove(v)}l(C,"releaseShaderCache");function T(){o.dispose()}return l(T,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:w,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:T}}l(KS,"WebGLPrograms");function QS(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(QS,"WebGLProperties");function jS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(jS,"painterSortStable");function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(dg,"reversePainterSortStable");function fg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}l(a,"materialVariant");function o(d,p,g,y,_,x){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:_,group:x},i[e]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=g,w.materialVariant=a(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=_,w.group=x),e++,w}l(o,"getNextRenderItem");function c(d,p,g,y,_,x,w){w.reversedDepth===!0&&(_=-_);let R=o(d,p,g,y,_,x);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}l(c,"push");function u(d,p,g,y,_,x){let w=o(d,p,g,y,_,x);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):t.unshift(w)}l(u,"unshift");function h(d,p){t.length>1&&t.sort(d||jS),n.length>1&&n.sort(p||dg),s.length>1&&s.sort(p||dg)}l(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:f,sort:h}}l(fg,"WebGLRenderList");function ew(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new fg,i.set(n,[a])):s>=r.length?(a=new fg,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(ew,"WebGLRenderLists");function tw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Oe};break;case"SpotLight":t={position:new W,direction:new W,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(tw,"UniformsCache");function nw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(nw,"ShadowUniformsCache");var iw=0;function sw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(sw,"shadowCastingAndTexturingLightsFirst");function rw(i){let e=new tw,t=nw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let s=new W,r=new ft,a=new ft;function o(u){let h=0,f=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,g=0,y=0,_=0,x=0,w=0,R=0,E=0,C=0,T=0,v=0,S=0,D=0,P=0;u.sort(sw);for(let G=0,J=u.length;G<J;G++){let L=u[G],K=L.color,te=L.intensity,N=L.distance,z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Mi?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=K.r*te,f+=K.g*te,d+=K.b*te;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],te);P++}else if(L.isSunLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,$=t.get(L);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=z;let ne=k.getViewportCount();for(let he=0;he<ne;he++)n.sunShadowMatrix[y+he]=k.getMatrix(he),n.sunShadowCascade[y+he]=k._cascadeData[he];y+=ne,g++}n.sun[p]=F,p++}else if(L.isDirectionalLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,$=t.get(L);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[_]=$,n.directionalShadowMap[_]=z,n.directionalShadowMatrix[_]=L.shadow.matrix,C++}n.directional[_]=F,_++}else if(L.isSpotLight){let F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(K).multiplyScalar(te),F.distance=N,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[w]=F;let k=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,k.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[w]=k.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[w]=$,n.spotShadowMap[w]=z,v++}w++}else if(L.isRectAreaLight){let F=e.get(L);F.color.copy(K).multiplyScalar(te),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=F,R++}else if(L.isPointLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let k=L.shadow,$=t.get(L);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=L.shadow.matrix,T++}n.point[x]=F,x++}else if(L.isHemisphereLight){let F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(te),F.groundColor.copy(L.groundColor).multiplyScalar(te),n.hemi[E]=F,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.sunLength!==p||O.directionalLength!==_||O.pointLength!==x||O.spotLength!==w||O.rectAreaLength!==R||O.hemiLength!==E||O.numSunShadows!==g||O.numDirectionalShadows!==C||O.numPointShadows!==T||O.numSpotShadows!==v||O.numSpotMaps!==S||O.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=_,n.spot.length=w,n.rectArea.length=R,n.point.length=x,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,O.sunLength=p,O.directionalLength=_,O.pointLength=x,O.spotLength=w,O.rectAreaLength=R,O.hemiLength=E,O.numSunShadows=g,O.numDirectionalShadows=C,O.numPointShadows=T,O.numSpotShadows=v,O.numSpotMaps=S,O.numLightProbes=P,n.version=iw++)}l(o,"setup");function c(u,h){let f=0,d=0,p=0,g=0,y=0,_=0,x=h.matrixWorldInverse;for(let w=0,R=u.length;w<R;w++){let E=u[w];if(E.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(x),f++}else if(E.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),d++}else if(E.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),g++}else if(E.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(x),a.identity(),r.copy(E.matrixWorld),r.premultiply(x),a.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){let C=n.hemi[_];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(x),_++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(rw,"WebGLLights");function pg(i){let e=new rw(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(pg,"WebGLRenderState");function aw(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new pg(i),e.set(s,[o])):r>=a.length?(o=new pg(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(aw,"WebGLRenderStates");var ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
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
}`,cw=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],uw=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],mg=new ft,To=new W,Xf=new W;function hw(i,e,t){let n=new _s,s=new Ve,r=new Ve,a=new St,o=new pc,c=new mc,u={},h=t.maxTextureSize,f={[Es]:xn,[xn]:Es,[yi]:yi},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ow,fragmentShader:lw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let x=this.type;this.render=function(T,v,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===Wc&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xo);let D=i.getRenderTarget(),P=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Zs),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=x!==this.type;J&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(K=>K.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,K=T.length;L<K;L++){let te=T[L],N=te.shadow;if(N===void 0){Ge("WebGLShadowMap:",te,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let z=N.getFrameExtents();s.multiply(z),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,N.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=F,N.map===null||J===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ia){if(te.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new An(s.x,s.y,{format:Mi,type:Pn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),N.map.texture.name=te.name+".shadowMap",N.map.depthTexture=new Wi(s.x,s.y,ei),N.map.depthTexture.name=te.name+".shadowMapDepth",N.map.depthTexture.format=Gi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut}else te.isPointLight?(N.map=new Co(s.x),N.map.depthTexture=new oo(s.x,jn)):(N.map=new An(s.x,s.y),N.map.depthTexture=new Wi(s.x,s.y,jn)),N.map.depthTexture.name=te.name+".shadowMap",N.map.depthTexture.format=Gi,this.type===xo?(N.map.depthTexture.compareFunction=F?bd:yd,N.map.depthTexture.minFilter=Xt,N.map.depthTexture.magFilter=Xt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();te.isPointLight!==!0&&N.updateMatrices(te,S);let $=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let ne=0;ne<k;ne++){let he=N.getCamera(ne);if(te.isPointLight){let q=N.camera,de=N.matrix,ie=te.distance||q.far;ie!==q.far&&(q.far=ie,q.updateProjectionMatrix()),To.setFromMatrixPosition(te.matrixWorld),q.position.copy(To),Xf.copy(q.position),Xf.add(cw[ne]),q.up.copy(uw[ne]),q.lookAt(Xf),q.updateMatrixWorld(),de.makeTranslation(-To.x,-To.y,-To.z),mg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),N._frustum.setFromProjectionMatrix(mg,q.coordinateSystem,q.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(N.map),i.clear());let q=N.getViewport(ne);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),G.viewport(a)}n=N.getFrustum(ne),E(v,S,he,te,$,this.type)}N.isPointLightShadow!==!0&&this.type===ia&&w(N,S),N.needsUpdate=!1}x=this.type,_.needsUpdate=!1,i.setRenderTarget(D,P,O)};function w(T,v){let S=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new An(s.x,s.y,{format:Mi,type:Pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,S,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,S,p,y,null)}l(w,"VSMPass");function R(T,v,S,D){let P=null,O=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)P=O;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let G=P.uuid,J=v.uuid,L=u[G];L===void 0&&(L={},u[G]=L);let K=L[J];K===void 0&&(K=P.clone(),L[J]=K,v.addEventListener("dispose",C)),P=K}if(P.visible=v.visible,P.wireframe=v.wireframe,D===ia?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:f[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=i.properties.get(P);G.light=S}return P}l(R,"getDepthMaterial");function E(T,v,S,D,P,O){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===ia)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let L=e.update(T),K=T.material;if(Array.isArray(K)){let te=L.groups;for(let N=0,z=te.length;N<z;N++){let F=te[N],k=K[F.materialIndex];if(k&&k.visible){let $=R(T,k,D,O);T.onBeforeShadow(i,T,v,S,L,$,F),i.renderBufferDirect(S,null,L,$,T,F),T.onAfterShadow(i,T,v,S,L,$,F)}}}else if(K.visible){let te=R(T,K,D,O);T.onBeforeShadow(i,T,v,S,L,te,null),i.renderBufferDirect(S,null,L,te,T,null),T.onAfterShadow(i,T,v,S,L,te,null)}}let J=T.children;for(let L=0,K=J.length;L<K;L++)E(J[L],v,S,D,P,O)}l(E,"renderObject");function C(T){T.target.removeEventListener("dispose",C);for(let S in u){let D=u[S],P=T.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}l(C,"onMaterialDispose")}l(hw,"WebGLShadowMap");function dw(i,e){function t(){let I=!1,oe=new St,ee=null,ye=new St(0,0,0,0);return{setMask:l(function(ge){ee!==ge&&!I&&(i.colorMask(ge,ge,ge,ge),ee=ge)},"setMask"),setLocked:l(function(ge){I=ge},"setLocked"),setClear:l(function(ge,_e,Fe,Ze,pe){pe===!0&&(ge*=Ze,_e*=Ze,Fe*=Ze),oe.set(ge,_e,Fe,Ze),ye.equals(oe)===!1&&(i.clearColor(ge,_e,Fe,Ze),ye.copy(oe))},"setClear"),reset:l(function(){I=!1,ee=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let I=!1,oe=!1,ee=null,ye=null,ge=null;return{setReversed:l(function(_e){if(oe!==_e){let Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),oe=_e;let Ze=ge;ge=null,this.setClear(Ze)}},"setReversed"),getReversed:l(function(){return oe},"getReversed"),setTest:l(function(_e){_e?ce(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){ee!==_e&&!I&&(i.depthMask(_e),ee=_e)},"setMask"),setFunc:l(function(_e){if(oe&&(_e=G0[_e]),ye!==_e){switch(_e){case Kl:i.depthFunc(i.NEVER);break;case Ql:i.depthFunc(i.ALWAYS);break;case jl:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case ec:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){I=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,oe&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){I=!1,ee=null,ye=null,ge=null,oe=!1},"reset")}}l(n,"DepthBuffer");function s(){let I=!1,oe=null,ee=null,ye=null,ge=null,_e=null,Fe=null,Ze=null,pe=null;return{setTest:l(function(ze){I||(ze?ce(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},"setTest"),setMask:l(function(ze){oe!==ze&&!I&&(i.stencilMask(ze),oe=ze)},"setMask"),setFunc:l(function(ze,$e,Te){(ee!==ze||ye!==$e||ge!==Te)&&(i.stencilFunc(ze,$e,Te),ee=ze,ye=$e,ge=Te)},"setFunc"),setOp:l(function(ze,$e,Te){(_e!==ze||Fe!==$e||Ze!==Te)&&(i.stencilOp(ze,$e,Te),_e=ze,Fe=$e,Ze=Te)},"setOp"),setLocked:l(function(ze){I=ze},"setLocked"),setClear:l(function(ze){pe!==ze&&(i.clearStencil(ze),pe=ze)},"setClear"),reset:l(function(){I=!1,oe=null,ee=null,ye=null,ge=null,_e=null,Fe=null,Ze=null,pe=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},f={},d={},p=new WeakMap,g=[],y=null,_=!1,x=null,w=null,R=null,E=null,C=null,T=null,v=null,S=new Oe(0,0,0),D=0,P=!1,O=null,G=null,J=null,L=null,K=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,z=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=z>=2);let k=null,$={},ne=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),q=new St().fromArray(ne),de=new St().fromArray(he);function ie(I,oe,ee,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(I,_e),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ee;Fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(oe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(ie,"createTexture");let ae={};ae[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Yr),_t(!1),et(jh),ce(i.CULL_FACE),ut(Zs);function ce(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}l(ce,"enable");function Ae(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}l(Ae,"disable");function qe(I,oe){return d[I]!==oe?(i.bindFramebuffer(I,oe),d[I]=oe,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}l(qe,"bindFramebuffer");function Pe(I,oe){let ee=g,ye=!1;if(I){ee=p.get(oe),ee===void 0&&(ee=[],p.set(oe,ee));let ge=I.textures;if(ee.length!==ge.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Fe=ge.length;_e<Fe;_e++)ee[_e]=i.COLOR_ATTACHMENT0+_e;ee.length=ge.length,ye=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ee)}l(Pe,"drawBuffers");function Ke(I){return y!==I?(i.useProgram(I),y=I,!0):!1}l(Ke,"useProgram");let je={[Js]:i.FUNC_ADD,[u0]:i.FUNC_SUBTRACT,[h0]:i.FUNC_REVERSE_SUBTRACT};je[d0]=i.MIN,je[f0]=i.MAX;let Be={[p0]:i.ZERO,[m0]:i.ONE,[g0]:i.SRC_COLOR,[id]:i.SRC_ALPHA,[M0]:i.SRC_ALPHA_SATURATE,[y0]:i.DST_COLOR,[_0]:i.DST_ALPHA,[x0]:i.ONE_MINUS_SRC_COLOR,[sd]:i.ONE_MINUS_SRC_ALPHA,[b0]:i.ONE_MINUS_DST_COLOR,[v0]:i.ONE_MINUS_DST_ALPHA,[S0]:i.CONSTANT_COLOR,[w0]:i.ONE_MINUS_CONSTANT_COLOR,[E0]:i.CONSTANT_ALPHA,[T0]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(I,oe,ee,ye,ge,_e,Fe,Ze,pe,ze){if(I===Zs){_===!0&&(Ae(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),I!==c0){if(I!==x||ze!==P){if((w!==Js||C!==Js)&&(i.blendEquation(i.FUNC_ADD),w=Js,C=Js),ze)switch(I){case sa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ed:i.blendFunc(i.ONE,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",I);break}else switch(I){case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ed:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case td:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nd:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",I);break}R=null,E=null,T=null,v=null,S.set(0,0,0),D=0,x=I,P=ze}return}ge=ge||oe,_e=_e||ee,Fe=Fe||ye,(oe!==w||ge!==C)&&(i.blendEquationSeparate(je[oe],je[ge]),w=oe,C=ge),(ee!==R||ye!==E||_e!==T||Fe!==v)&&(i.blendFuncSeparate(Be[ee],Be[ye],Be[_e],Be[Fe]),R=ee,E=ye,T=_e,v=Fe),(Ze.equals(S)===!1||pe!==D)&&(i.blendColor(Ze.r,Ze.g,Ze.b,pe),S.copy(Ze),D=pe),x=I,P=!1}l(ut,"setBlending");function xt(I,oe){I.side===yi?Ae(i.CULL_FACE):ce(i.CULL_FACE);let ee=I.side===xn;oe&&(ee=!ee),_t(ee),I.blending===sa&&I.transparent===!1?ut(Zs):ut(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ye=I.stencilWrite;o.setTest(ye),ye&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}l(xt,"setMaterial");function _t(I){O!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),O=I)}l(_t,"setFlipSided");function et(I){I!==o0?(ce(i.CULL_FACE),I!==G&&(I===jh?i.cullFace(i.BACK):I===l0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),G=I}l(et,"setCullFace");function Pt(I){I!==J&&(N&&i.lineWidth(I),J=I)}l(Pt,"setLineWidth");function Xe(I,oe,ee){I?(ce(i.POLYGON_OFFSET_FILL),(L!==oe||K!==ee)&&(L=oe,K=ee,a.getReversed()&&(oe=-oe,ee=-ee),i.polygonOffset(oe,ee))):Ae(i.POLYGON_OFFSET_FILL)}l(Xe,"setPolygonOffset");function It(I){I?ce(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}l(It,"setScissorTest");function At(I){I===void 0&&(I=i.TEXTURE0+te-1),k!==I&&(i.activeTexture(I),k=I)}l(At,"activeTexture");function Ct(I,oe,ee){ee===void 0&&(k===null?ee=i.TEXTURE0+te-1:ee=k);let ye=$[ee];ye===void 0&&(ye={type:void 0,texture:void 0},$[ee]=ye),(ye.type!==I||ye.texture!==oe)&&(k!==ee&&(i.activeTexture(ee),k=ee),i.bindTexture(I,oe||ae[I]),ye.type=I,ye.texture=oe)}l(Ct,"bindTexture");function B(){let I=$[k];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}l(B,"unbindTexture");function Bt(){try{i.compressedTexImage2D(...arguments)}catch(I){He("WebGLState:",I)}}l(Bt,"compressedTexImage2D");function at(){try{i.compressedTexImage3D(...arguments)}catch(I){He("WebGLState:",I)}}l(at,"compressedTexImage3D");function tt(){try{i.texSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}l(tt,"texSubImage2D");function me(){try{i.texSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}l(me,"texSubImage3D");function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}l(pt,"compressedTexSubImage2D");function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}l(Ue,"compressedTexSubImage3D");function ke(){try{i.texStorage2D(...arguments)}catch(I){He("WebGLState:",I)}}l(ke,"texStorage2D");function A(){try{i.texStorage3D(...arguments)}catch(I){He("WebGLState:",I)}}l(A,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(I){He("WebGLState:",I)}}l(b,"texImage2D");function X(){try{i.texImage3D(...arguments)}catch(I){He("WebGLState:",I)}}l(X,"texImage3D");function fe(I){return f[I]!==void 0?f[I]:i.getParameter(I)}l(fe,"getParameter");function le(I,oe){f[I]!==oe&&(i.pixelStorei(I,oe),f[I]=oe)}l(le,"pixelStorei");function xe(I){q.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),q.copy(I))}l(xe,"scissor");function Me(I){de.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),de.copy(I))}l(Me,"viewport");function se(I,oe){let ee=u.get(oe);ee===void 0&&(ee=new WeakMap,u.set(oe,ee));let ye=ee.get(I);ye===void 0&&(ye=i.getUniformBlockIndex(oe,I.name),i.uniformBlockBinding(oe,ye,ye),ee.set(I,ye))}l(se,"updateUBOMapping");function re(I,oe,ee){let ge=u.get(oe).get(I);c[ge]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,ee),c[ge]=ee)}l(re,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},k=null,$={},d={},c={},p=new WeakMap,g=[],y=null,_=!1,x=null,w=null,R=null,E=null,C=null,T=null,v=null,S=new Oe(0,0,0),D=0,P=!1,O=null,G=null,J=null,L=null,K=null,q.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ae,bindFramebuffer:qe,drawBuffers:Pe,useProgram:Ke,setBlending:ut,setMaterial:xt,setFlipSided:_t,setCullFace:et,setLineWidth:Pt,setPolygonOffset:Xe,setScissorTest:It,activeTexture:At,bindTexture:Ct,unbindTexture:B,compressedTexImage2D:Bt,compressedTexImage3D:at,texImage2D:b,texImage3D:X,pixelStorei:le,getParameter:fe,updateUBOMapping:se,uniformBlockBinding:re,texStorage2D:ke,texStorage3D:A,texSubImage2D:tt,texSubImage3D:me,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ue,scissor:xe,viewport:Me,reset:ve}}l(dw,"WebGLState");function fw(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,h=new WeakMap,f=new Set,d,p=new WeakMap,g=new Set,y=new FinalizationRegistry(A=>g.delete(A)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,b){return _?new OffscreenCanvas(A,b):Ka("canvas")}l(x,"createCanvas");function w(A,b,X){let fe=1,le=ke(A);if((le.width>X||le.height>X)&&(fe=X/Math.max(le.width,le.height)),fe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let xe=Math.floor(fe*le.width),Me=Math.floor(fe*le.height);d===void 0&&(d=x(xe,Me));let se=b?x(xe,Me):d;return se.width=xe,se.height=Me,se.getContext("2d").drawImage(A,0,0,xe,Me),Ge("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Me+")."),se}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}l(w,"resizeImage");function R(A){return A.generateMipmaps}l(R,"textureNeedsGenerateMipmaps");function E(A){i.generateMipmap(A)}l(E,"generateMipmap");function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(C,"getTargetType");function T(A,b,X,fe,le,xe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=b;if(b===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8),X===i.UNSIGNED_SHORT&&Me&&(se=Me.R16_EXT),X===i.SHORT&&Me&&(se=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),b===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8),X===i.UNSIGNED_SHORT&&Me&&(se=Me.RG16_EXT),X===i.SHORT&&Me&&(se=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RG8UI),X===i.UNSIGNED_SHORT&&(se=i.RG16UI),X===i.UNSIGNED_INT&&(se=i.RG32UI),X===i.BYTE&&(se=i.RG8I),X===i.SHORT&&(se=i.RG16I),X===i.INT&&(se=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGB8UI),X===i.UNSIGNED_SHORT&&(se=i.RGB16UI),X===i.UNSIGNED_INT&&(se=i.RGB32UI),X===i.BYTE&&(se=i.RGB8I),X===i.SHORT&&(se=i.RGB16I),X===i.INT&&(se=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),X===i.UNSIGNED_INT&&(se=i.RGBA32UI),X===i.BYTE&&(se=i.RGBA8I),X===i.SHORT&&(se=i.RGBA16I),X===i.INT&&(se=i.RGBA32I)),b===i.RGB&&(X===i.UNSIGNED_SHORT&&Me&&(se=Me.RGB16_EXT),X===i.SHORT&&Me&&(se=Me.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),b===i.RGBA){let re=xe?Ja:st.getTransfer(le);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=re===ht?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Me&&(se=Me.RGBA16_EXT),X===i.SHORT&&Me&&(se=Me.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}l(T,"getInternalFormat");function v(A,b){let X;return A?b===null||b===jn||b===Qs?X=i.DEPTH24_STENCIL8:b===ei?X=i.DEPTH32F_STENCIL8:b===aa&&(X=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===Qs?X=i.DEPTH_COMPONENT24:b===ei?X=i.DEPTH_COMPONENT32F:b===aa&&(X=i.DEPTH_COMPONENT16),X}l(v,"getInternalDepthFormat");function S(A,b){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==Xt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}l(S,"getMipLevels");function D(A){let b=new WeakRef(A);n.get(A).__ref=b,g.add(b),y.register(A,b,b)}l(D,"track");function P(A){let b=n.get(A).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}l(P,"untrack");function O(A){J(A.target)}l(O,"onTextureDispose");function G(A){L(A.target)}l(G,"onRenderTargetDispose");function J(A){A.removeEventListener("dispose",O),P(A),te(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}l(J,"destroyTexture");function L(A){A.removeEventListener("dispose",G),P(A),z(A)}l(L,"destroyRenderTarget");function K(){for(let A of g){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):J(b))}g.clear(),f.clear()}l(K,"dispose");function te(A){let b=n.get(A);if(b.__webglInit===void 0)return;let X=A.source,fe=p.get(X);if(fe){let le=fe[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&N(A),Object.keys(fe).length===0&&p.delete(X)}n.remove(A)}l(te,"deallocateTexture");function N(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let X=A.source,fe=p.get(X);delete fe[b.__cacheKey],a.memory.textures--}l(N,"deleteTexture");function z(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=A.depthTexture;if(X&&X.renderTarget===A&&J(X),A.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let xe=0;xe<b.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)i.deleteFramebuffer(b.__webglFramebuffer[le]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=A.textures;for(let le=0,xe=fe.length;le<xe;le++){let Me=n.get(fe[le]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[le])}n.remove(A)}l(z,"deallocateRenderTarget");let F=0;function k(){F=0}l(k,"resetTextureUnits");function $(){return F}l($,"getTextureUnits");function ne(A){F=A}l(ne,"setTextureUnits");function he(){let A=F;return A>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}l(he,"allocateTextureUnit");function q(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}l(q,"getTextureCacheKey");function de(A,b){let X=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&X.__version!==A.version){let fe=A.image;if(fe===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(X,A,b);return}}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}l(de,"setTexture2D");function ie(A,b){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){xt(X,A,b);return}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}l(ie,"setTexture2DArray");function ae(A,b){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){xt(X,A,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}l(ae,"setTexture3D");function ce(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){_t(X,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}l(ce,"setTextureCube");let Ae={[$s]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},qe={[Ut]:i.NEAREST,[R0]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Yc]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Pe={[D0]:i.NEVER,[Md]:i.ALWAYS,[N0]:i.LESS,[yd]:i.LEQUAL,[U0]:i.EQUAL,[bd]:i.GEQUAL,[F0]:i.GREATER,[O0]:i.NOTEQUAL};function Ke(A,b){if(b.type===ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Xt||b.magFilter===Yc||b.magFilter===vo||b.magFilter===Qn||b.minFilter===Xt||b.minFilter===Yc||b.minFilter===vo||b.minFilter===Qn)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,qe[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,qe[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ut||b.minFilter!==vo&&b.minFilter!==Qn||b.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(Ke,"setTextureParameters");function je(A,b){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",O),D(b));let fe=b.source,le=p.get(fe);le===void 0&&(le={},p.set(fe,le));let xe=q(b);if(xe!==A.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[xe].usedTimes++;let Me=le[A.__cacheKey];Me!==void 0&&(le[A.__cacheKey].usedTimes--,Me.usedTimes===0&&N(b)),A.__cacheKey=xe,A.__webglTexture=le[xe].texture}return X}l(je,"initTexture");function Be(A,b,X){return Math.floor(Math.floor(A/X)/b)}l(Be,"getRow");function ut(A,b,X,fe){let xe=A.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,X,fe,b.data);else{xe.sort((I,oe)=>I.start-oe.start);let Me=0;for(let I=1;I<xe.length;I++){let oe=xe[Me],ee=xe[I],ye=oe.start+oe.count,ge=Be(ee.start,b.width,4),_e=Be(oe.start,b.width,4);ee.start<=ye+1&&ge===_e&&Be(ee.start+ee.count-1,b.width,4)===ge?oe.count=Math.max(oe.count,ee.start+ee.count-oe.start):(++Me,xe[Me]=ee)}xe.length=Me+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let I=0,oe=xe.length;I<oe;I++){let ee=xe[I],ye=Math.floor(ee.start/4),ge=Math.ceil(ee.count/4),_e=ye%b.width,Fe=Math.floor(ye/b.width),Ze=ge,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Fe,Ze,pe,X,fe,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(ut,"updateTexture");function xt(A,b,X){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let le=je(A,b),xe=b.source;t.bindTexture(fe,A.__webglTexture,i.TEXTURE0+X);let Me=n.get(xe);if(xe.version!==Me.__version||le===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=st.getPrimaries(st.workingColorSpace),ze=b.colorSpace===Yi?null:st.getPrimaries(b.colorSpace),$e=b.colorSpace===Yi||pe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let re=w(b.image,!1,s.maxTextureSize);re=Ue(b,re);let ve=r.convert(b.format,b.colorSpace),I=r.convert(b.type),oe=T(b.internalFormat,ve,I,b.normalized,b.colorSpace,b.isVideoTexture);Ke(fe,b);let ee,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||le===!0,Fe=xe.dataReady,Ze=S(b,re);if(b.isDepthTexture)oe=v(b.format===qi,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,oe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,oe,re.width,re.height,0,ve,I,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Ze,oe,ye[0].width,ye[0].height);for(let pe=0,ze=ye.length;pe<ze;pe++)ee=ye[pe],ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ee.width,ee.height,ve,I,ee.data):t.texImage2D(i.TEXTURE_2D,pe,oe,ee.width,ee.height,0,ve,I,ee.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,Ze,oe,re.width,re.height),Fe&&ut(b,re,ve,I)):t.texImage2D(i.TEXTURE_2D,0,oe,re.width,re.height,0,ve,I,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,oe,ye[0].width,ye[0].height,re.depth);for(let pe=0,ze=ye.length;pe<ze;pe++)if(ee=ye[pe],b.format!==ti)if(ve!==null)if(ge){if(Fe)if(b.layerUpdates.size>0){let $e=Cd(ee.width,ee.height,b.format,b.type);for(let Te of b.layerUpdates){let dt=ee.data.subarray(Te*$e/ee.data.BYTES_PER_ELEMENT,(Te+1)*$e/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Te,ee.width,ee.height,1,ve,dt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,re.depth,ve,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,oe,ee.width,ee.height,re.depth,0,ee.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,re.depth,ve,I,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,oe,ee.width,ee.height,re.depth,0,ve,I,ee.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Ze,oe,ye[0].width,ye[0].height);for(let pe=0,ze=ye.length;pe<ze;pe++)ee=ye[pe],b.format!==ti?ve!==null?ge?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,ee.width,ee.height,ve,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,oe,ee.width,ee.height,0,ee.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ee.width,ee.height,ve,I,ee.data):t.texImage2D(i.TEXTURE_2D,pe,oe,ee.width,ee.height,0,ve,I,ee.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,oe,re.width,re.height,re.depth),Fe)if(b.layerUpdates.size>0){let pe=Cd(re.width,re.height,b.format,b.type);for(let ze of b.layerUpdates){let $e=re.data.subarray(ze*pe/re.data.BYTES_PER_ELEMENT,(ze+1)*pe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,re.width,re.height,1,ve,I,$e)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,I,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,re.width,re.height,re.depth,0,ve,I,re.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,Ze,oe,re.width,re.height,re.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,I,re.data)):t.texImage3D(i.TEXTURE_3D,0,oe,re.width,re.height,re.depth,0,ve,I,re.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,Ze,oe,re.width,re.height);else{let pe=re.width,ze=re.height;for(let $e=0;$e<Ze;$e++)t.texImage2D(i.TEXTURE_2D,$e,oe,pe,ze,0,ve,I,null),pe>>=1,ze>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),re.parentNode!==pe){pe.appendChild(re),f.add(b),pe.onpaint=ze=>{let $e=ze.changedElements;for(let Te of f)$e.includes(Te.image)&&(Te.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let $e=i.RGBA,Te=i.RGBA,dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,Te,dt,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let pe=ke(ye[0]);t.texStorage2D(i.TEXTURE_2D,Ze,oe,pe.width,pe.height)}for(let pe=0,ze=ye.length;pe<ze;pe++)ee=ye[pe],ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve,I,ee):t.texImage2D(i.TEXTURE_2D,pe,oe,ve,I,ee);b.generateMipmaps=!1}else if(ge){if(_e){let pe=ke(re);t.texStorage2D(i.TEXTURE_2D,Ze,oe,pe.width,pe.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,I,re)}else t.texImage2D(i.TEXTURE_2D,0,oe,ve,I,re);R(b)&&b.mipmapsAutoUpdate===!0&&E(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}l(xt,"uploadTexture");function _t(A,b,X){if(b.image.length!==6)return;let fe=je(A,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let xe=n.get(le);if(le.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+X);let Me=st.getPrimaries(st.workingColorSpace),se=b.colorSpace===Yi?null:st.getPrimaries(b.colorSpace),re=b.colorSpace===Yi||Me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,I=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let Te=0;Te<6;Te++)!ve&&!I?oe[Te]=w(b.image[Te],!0,s.maxCubemapSize):oe[Te]=I?b.image[Te].image:b.image[Te],oe[Te]=Ue(b,oe[Te]);let ee=oe[0],ye=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),_e=T(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Fe=b.isVideoTexture!==!0,Ze=xe.__version===void 0||fe===!0,pe=le.dataReady,ze=S(b,ee);Ke(i.TEXTURE_CUBE_MAP,b);let $e;if(b.isDepthTexture){if(_e=v(b.format===qi,b.type),Ze)if(Fe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,ee.width,ee.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ee.width,ee.height,0,ye,ge,null)}else if(ve){Fe&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,_e,ee.width,ee.height);for(let Te=0;Te<6;Te++){$e=oe[Te].mipmaps;for(let dt=0;dt<$e.length;dt++){let Vt=$e[dt];b.format!==ti?ye!==null?Fe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,0,0,Vt.width,Vt.height,ye,Vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,_e,Vt.width,Vt.height,0,Vt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,0,0,Vt.width,Vt.height,ye,ge,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,_e,Vt.width,Vt.height,0,ye,ge,Vt.data)}}}else{if($e=b.mipmaps,Fe&&Ze){$e.length>0&&ze++;let Te=ke(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,_e,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(I){Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,oe[Te].width,oe[Te].height,ye,ge,oe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,oe[Te].width,oe[Te].height,0,ye,ge,oe[Te].data);for(let dt=0;dt<$e.length;dt++){let rs=$e[dt].image[Te].image;Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,0,0,rs.width,rs.height,ye,ge,rs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,_e,rs.width,rs.height,0,ye,ge,rs.data)}}else{Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,ge,oe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ye,ge,oe[Te]);for(let dt=0;dt<$e.length;dt++){let Vt=$e[dt];Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,0,0,ye,ge,Vt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,_e,ye,ge,Vt.image[Te])}}}R(b)&&b.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),xe.__version=le.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}l(_t,"uploadCubeTexture");function et(A,b,X,fe,le,xe){let Me=r.convert(X.format,X.colorSpace),se=r.convert(X.type),re=T(X.internalFormat,Me,se,X.normalized,X.colorSpace),ve=n.get(b),I=n.get(X);if(I.__renderTarget=b,!ve.__hasExternalTextures){let oe=Math.max(1,b.width>>xe),ee=Math.max(1,b.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,re,oe,ee,b.depth,0,Me,se,null):t.texImage2D(le,xe,re,oe,ee,0,Me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,I.__webglTexture,0,tt(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,I.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(et,"setupFrameBufferTexture");function Pt(A,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let fe=b.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,le),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),xe,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,A)}else{let fe=b.textures;for(let le=0;le<fe.length;le++){let xe=fe[le],Me=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),re=T(xe.internalFormat,Me,se,xe.normalized,xe.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),re,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Pt,"setupRenderBufferStorage");function Xe(A,b,X){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(b.depthTexture);le.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!le.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?ce(b.depthTexture,0):de(b.depthTexture,0);let Me=le.__webglTexture,se=tt(b),re=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ve=b.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gi)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,re,Me,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ve,re,Me,0);else if(b.depthTexture.format===qi)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,re,Me,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ve,re,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(Xe,"setupDepthTexture");function It(A){let b=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let fe=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let le=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",le)},"disposeEvent");fe.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=fe}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let fe=0;fe<6;fe++)Xe(b.__webglFramebuffer[fe],A,fe);else A.texture.mipmaps.length>0?Xe(b.__webglFramebuffer[0],A,0):Xe(b.__webglFramebuffer,A,0);else if(X){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Pt(b.__webglDepthbuffer[fe],A,!1);else{let le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pt(b.__webglDepthbuffer,A,!1);else{let le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(It,"setupDepthRenderbuffer");function At(A,b,X){let fe=n.get(A);b!==void 0&&et(fe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&It(A)}l(At,"rebindTextures");function Ct(A){let b=A.texture,X=n.get(A),fe=n.get(b);A.addEventListener("dispose",G),D(A);let le=A.textures,xe=A.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(b.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let re=0;re<b.mipmaps.length;re++)X.__webglFramebuffer[se][re]=i.createFramebuffer()}else X.__webglFramebuffer[se]=i.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)X.__webglFramebuffer[se]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Me)for(let se=0,re=le.length;se<re;se++){let ve=n.get(le[se]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<le.length;se++){let re=le[se];X.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[se]);let ve=r.convert(re.format,re.colorSpace),I=r.convert(re.type),oe=T(re.internalFormat,ve,I,re.normalized,re.colorSpace,A.isXRRenderTarget===!0),ee=tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,X.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,b);for(let se=0;se<6;se++)if(b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)et(X.__webglFramebuffer[se][re],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else et(X.__webglFramebuffer[se],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);R(b)?E(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let se=0,re=le.length;se<re;se++){let ve=le[se],I=n.get(ve),oe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,I.__webglTexture),Ke(oe,ve),et(X.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+se,oe,0),R(ve)&&E(oe)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,fe.__webglTexture),Ke(se,b),b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)et(X.__webglFramebuffer[re],A,b,i.COLOR_ATTACHMENT0,se,re);else et(X.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,se,0);R(b)?E(se):b.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&It(A)}l(Ct,"setupRenderTarget");function B(A){let b=A.textures;for(let X=0,fe=b.length;X<fe;X++){let le=b[X];if(R(le)&&le.mipmapsAutoUpdate===!0){let xe=C(A),Me=n.get(le).__webglTexture;t.bindTexture(xe,Me),E(xe),t.unbindTexture()}}}l(B,"updateRenderTargetMipmap");let Bt=[];function at(A){if(A.samples>0){if(me(A)===!1){let b=A.textures,X=A.width,fe=A.height,le=i.COLOR_BUFFER_BIT,xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(A),se=b.length>1;if(se)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let I=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,X,fe,0,0,X,fe,le,i.NEAREST),c===!0&&(Bt.length=0,Bt.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Bt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let I=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(at,"updateMultisampleRenderTarget");function tt(A){return Math.min(s.maxSamples,A.samples)}l(tt,"getRenderTargetSamples");function me(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(me,"useMultisampledRTT");function pt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}l(pt,"updateVideoTexture");function Ue(A,b){let X=A.colorSpace,fe=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Za&&X!==Yi&&(st.getTransfer(X)===ht?(fe!==ti||le!==bn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",X)),b}l(Ue,"verifyColorSpace");function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}l(ke,"getDimensions"),this.allocateTextureUnit=he,this.resetTextureUnits=k,this.getTextureUnits=$,this.setTextureUnits=ne,this.setTexture2D=de,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=ce,this.rebindTextures=At,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=et,this.useMultisampledRTT=me,this.dispose=K}l(fw,"WebGLTextures");function pw(i,e){function t(n,s=Yi){let r,a=st.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fd)return i.BYTE;if(n===pd)return i.SHORT;if(n===aa)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===xd)return i.ALPHA;if(n===_d)return i.RGB;if(n===ti)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===vd)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===yo||n===bo||n===Mo||n===So)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eu||n===tu||n===nu||n===iu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===iu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===su||n===ru||n===au||n===ou||n===lu||n===wo||n===cu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===su||n===ru)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===au)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ou)return r.COMPRESSED_R11_EAC;if(n===lu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return r.COMPRESSED_RG11_EAC;if(n===cu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===xu||n===_u||n===vu||n===yu||n===bu||n===Mu||n===Su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Su)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wu||n===Eu||n===Tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wu)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Cu||n===Eo||n===Ru)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Au)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(pw,"WebGLUtils");var mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
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

}`,op=class op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gn({vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(op,"WebXRDepthSensing");var Qf=op,lp=class lp extends pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",_=new Qf,x={},w=t.getContextAttributes(),R=null,E=null,C=[],T=[],v=new Ve,S=null,D=null,P=new dn;P.viewport=new St;let O=new dn;O.viewport=new St;let G=[P,O],J=new Ac,L=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let de=C[q];return de===void 0&&(de=new Kr,C[q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(q){let de=C[q];return de===void 0&&(de=new Kr,C[q]=de),de.getGripSpace()},this.getHand=function(q){let de=C[q];return de===void 0&&(de=new Kr,C[q]=de),de.getHandSpace()};function te(q){let de=T.indexOf(q.inputSource);if(de===-1)return;let ie=C[de];ie!==void 0&&(ie.update(q.inputSource,q.frame,u||a),ie.dispatchEvent({type:q.type,data:q.inputSource}))}l(te,"onSessionEvent");function N(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",z);for(let q=0;q<C.length;q++){let de=T[q];de!==null&&(T[q]=null,C[q].disconnect(de))}L=null,K=null,_.reset();for(let q in x)delete x[q];if(e.setRenderTarget(R),p=null,d=null,f=null,s=null,E=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),D!==null){let q=D.camera;q.fov=D.fov,q.zoom=D.zoom,q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}l(N,"onSessionEnd"),this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",N),s.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ae=null,ce=null;w.depth&&(ce=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=w.stencil?qi:Gi,ae=w.stencil?Qs:jn);let Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new An(d.textureWidth,d.textureHeight,{format:ti,type:bn,depthTexture:new Wi(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new An(p.framebufferWidth,p.framebufferHeight,{format:ti,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let de=0;de<q.removed.length;de++){let ie=q.removed[de],ae=T.indexOf(ie);ae>=0&&(T[ae]=null,C[ae].disconnect(ie))}for(let de=0;de<q.added.length;de++){let ie=q.added[de],ae=T.indexOf(ie);if(ae===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=T.length){T.push(ie),ae=Ae;break}else if(T[Ae]===null){T[Ae]=ie,ae=Ae;break}if(ae===-1)break}let ce=C[ae];ce&&ce.connect(ie)}}l(z,"onInputSourcesChange");function F(q,de){de===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(de.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}l(F,"updateCamera"),this.updateCamera=function(q){if(s===null)return;let de=q.near,ie=q.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),J.near=O.near=P.near=de,J.far=O.far=P.far=ie,(L!==J.near||K!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),L=J.near,K=J.far),J.layers.mask=q.layers.mask|6,P.layers.mask=J.layers.mask&-5,O.layers.mask=J.layers.mask&-3;let ae=q.parent,ce=J.cameras;F(J,ae);for(let Ae=0;Ae<ce.length;Ae++)F(ce[Ae],ae);J.projectionMatrix.copy(P.projectionMatrix),J.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&q.isPerspectiveCamera&&(D={camera:q,fov:q.fov,zoom:q.zoom}),k(q,J,ae)};function k(q,de,ie){ie===null?q.matrix.copy(de.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(de.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ac*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}l(k,"updateUserCamera"),this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(q){return x[q]};let $=null;function ne(q,de){if(h=de.getViewerPose(u||a),g=de,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ae=!1;ie.length!==J.cameras.length&&(J.cameras.length=0,ae=!0);for(let Pe=0;Pe<ie.length;Pe++){let Ke=ie[Pe],je=null;if(p!==null)je=p.getViewport(Ke);else{let ut=f.getViewSubImage(d,Ke);je=ut.viewport,Pe===0&&(e.setRenderTargetTextures(E,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(E))}let Be=G[Pe];Be===void 0&&(Be=new dn,Be.layers.enable(Pe),Be.viewport=new St,G[Pe]=Be),Be.matrix.fromArray(Ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(J.matrix.copy(Be.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ae===!0&&J.cameras.push(Be)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Pe=f.getDepthInformation(ie[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(Pe,s.renderState)}if(ce&&ce.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Pe=0;Pe<ie.length;Pe++){let Ke=ie[Pe].camera;if(Ke){let je=x[Ke];je||(je=new lo,x[Ke]=je);let Be=f.getCameraImage(Ke);je.sourceTexture=Be}}}}for(let ie=0;ie<C.length;ie++){let ae=T[ie],ce=C[ie];ae!==null&&ce!==void 0&&ce.update(ae,de,u||a)}$&&$(q,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}l(ne,"onAnimationFrame");let he=new gg;he.setAnimationLoop(ne),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}};l(lp,"WebXRManager");var jf=lp,xw=new ft,Tg=new We;Tg.set(-1,0,0,0,1,0,0,0,1);function _w(i,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}l(t,"refreshTransformUniform");function n(_,x){x.color.getRGB(_.fogColor.value,Ed(i)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}l(n,"refreshFogUniforms");function s(_,x,w,R,E){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(_,x):x.isMeshLambertMaterial?(r(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(_,x),f(_,x)):x.isMeshPhongMaterial?(r(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(_,x),d(_,x),x.isMeshPhysicalMaterial&&p(_,x,E)):x.isMeshMatcapMaterial?(r(_,x),g(_,x)):x.isMeshDepthMaterial?r(_,x):x.isMeshDistanceMaterial?(r(_,x),y(_,x)):x.isMeshNormalMaterial?r(_,x):x.isLineBasicMaterial?(a(_,x),x.isLineDashedMaterial&&o(_,x)):x.isPointsMaterial?c(_,x,w,R):x.isSpriteMaterial?u(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===xn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===xn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);let w=e.get(x),R=w.envMap,E=w.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Tg),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}l(r,"refreshUniformsCommon");function a(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}l(a,"refreshUniformsLine");function o(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}l(o,"refreshUniformsDash");function c(_,x,w,R){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*w,_.scale.value=R*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}l(c,"refreshUniformsPoints");function u(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}l(u,"refreshUniformsSprites");function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}l(f,"refreshUniformsToon");function d(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}l(d,"refreshUniformsStandard");function p(_,x,w){_.ior.value=x.ior,x.diffuseRoughness>0&&(_.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===xn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.retroreflectivity>0&&(_.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function g(_,x){x.matcap&&(_.matcap.value=x.matcap)}l(g,"refreshUniformsMatcap");function y(_,x){let w=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(_w,"WebGLMaterials");function vw(i,e,t,n){let s={},r={};function a(w,R){let E=R.program;n.uniformBlockBinding(w,E,s[w.id])}l(a,"bind");function o(w,R){let E=s[w.id];E===void 0&&(g(w),E=c(w),s[w.id]=E,w.addEventListener("dispose",_));let C=R.program;n.updateUBOMapping(w,C);let T=e.render.frame;r[w.id]!==T&&(u(w),r[w.id]=T)}l(o,"update");function c(w){let R=i.createBuffer(),E=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,E,C),i.bindBuffer(i.UNIFORM_BUFFER,null),R}l(c,"createBuffer");function u(w){let R=s[w.id],E=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let T=0,v=E.length;T<v;T++){let S=E[T];if(Array.isArray(S))for(let D=0,P=S.length;D<P;D++)h(S[D],T,D,C);else h(S,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(w,R,E,C){if(d(w,R,E,C)===!0){let T=w.__offset,v=w.value;if(Array.isArray(v)){let S=0;for(let D=0;D<v.length;D++){let P=v[D],O=y(P,!0);f(P,w.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,w.__data)}}l(h,"updateUniform");function f(w,R,E){typeof w=="number"||typeof w=="boolean"?R[E]=w:w.isMatrix3?(R[E]=w.elements[0],R[E+1]=w.elements[1],R[E+2]=w.elements[2],R[E+3]=0,R[E+4]=w.elements[3],R[E+5]=w.elements[4],R[E+6]=w.elements[5],R[E+7]=0,R[E+8]=w.elements[6],R[E+9]=w.elements[7],R[E+10]=w.elements[8],R[E+11]=0):ArrayBuffer.isView(w)?R.set(w.subarray(0,R.length-E),E):w.toArray(R,E)}l(f,"writeUniformValue");function d(w,R,E,C){let T=w.value,v=R+"_"+E;if(Array.isArray(T)){C[v]===void 0&&(C[v]=[]);let S=C[v],D=!1;for(let P=0;P<T.length;P++)p(T[P],S,P)===!0&&(D=!0);return D}return p(T,C,v)}l(d,"hasUniformChanged");function p(w,R,E){if(R[E]===void 0)return typeof w=="number"||typeof w=="boolean"?R[E]=w:ArrayBuffer.isView(w)?R[E]=w.slice():R[E]=w.clone(),!0;{let C=R[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[E]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(C.equals(w)===!1)return C.copy(w),!0}}return!1}l(p,"hasValueChanged");function g(w){let R=w.uniforms,E=0,C=16;for(let v=0,S=R.length;v<S;v++){let D=Array.isArray(R[v])?R[v]:[R[v]];for(let P=0,O=D.length;P<O;P++){let G=D[P],J=Array.isArray(G.value)?G.value:[G.value],L=Array.isArray(R[v])||Array.isArray(G.value),K=E;for(let N=0,z=J.length;N<z;N++){let F=J[N],k=y(F,L),$=E%C,ne=$%k.boundary,he=$+ne;E+=ne,he!==0&&C-he<k.storage&&(E+=C-he),N===0&&(K=E),E+=k.storage}let te=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new te((E-K)/Float32Array.BYTES_PER_ELEMENT),G.__offset=K}}let T=E%C;return T>0&&(E+=C-T),w.__size=E,w.__cache={},this}l(g,"prepareUniformsGroup");function y(w,R){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=16,E.storage=48):w.isMatrix4?(E.boundary=16,E.storage=64):w.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(E.boundary=16,E.storage=w.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",w),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}l(y,"getUniformSize");function _(w){let R=w.target;R.removeEventListener("dispose",_),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}l(_,"onUniformsGroupsDispose");function x(){for(let w in s)i.deleteBuffer(s[w]);s={},r={}}return l(x,"dispose"),{bind:a,update:o,dispose:x}}l(vw,"WebGLUniformsGroups");var yw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function bw(){return Si===null&&(Si=new ta(yw,16,16,Mi,Pn),Si.name="DFG_LUT",Si.minFilter=Xt,Si.magFilter=Xt,Si.wrapS=Gn,Si.wrapT=Gn,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}l(bw,"getDFGLUT");var cp=class cp{constructor(e={}){let{canvas:t=B0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,_=new Set([jc,Qc,Kc]),x=new Set([bn,jn,aa,Qs,Zc,Jc]),w=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},C=null,T=null,v=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,G=null,J=null,L=null,K=null;this._outputColorSpace=Nt;let te=0,N=0,z=null,F=-1,k=null,$=new St,ne=new St,he=null,q=new Oe(0),de=0,ie=t.width,ae=t.height,ce=1,Ae=null,qe=null,Pe=new St(0,0,ie,ae),Ke=new St(0,0,ie,ae),je=!1,Be=new _s,ut=new dc,xt=!1,_t=!1,et=new ft,Pt=new W,Xe=new St,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Ct(){return z===null?ce:1}l(Ct,"getTargetPixelRatio");let B=n;function Bt(M,U){return t.getContext(M,U)}l(Bt,"getContext");let at,tt,me,pt,Ue,ke,A,b,X,fe,le,xe,Me,se,re,ve,I,oe,ee,ye,ge,_e,Fe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){let U="webgl2";if(B=Bt(U,M),B===null)throw Bt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(M){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He("WebGLRenderer: "+M.message),M}function Ze(){at=new LM(B),at.init(),ge=new pw(B,at),tt=new bM(B,at,e,ge),me=new dw(B,at),tt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),J=B.createFramebuffer(),L=B.createFramebuffer(),K=B.createFramebuffer(),pt=new UM(B),Ue=new QS,ke=new fw(B,at,me,Ue,tt,ge,pt),A=new IM(P),b=new Ov(B),_e=new vM(B,b),X=new DM(B,b,pt,_e),fe=new OM(B,X,b,_e,pt),oe=new FM(B,tt,ke),re=new MM(Ue),le=new KS(P,A,at,tt,_e,re),xe=new _w(P,Ue),Me=new ew,se=new aw(at),I=new _M(P,A,me,fe,g,c),ve=new hw(P,fe,tt),Fe=new vw(B,pt,tt,me),ee=new yM(B,at,pt),ye=new NM(B,at,pt),pt.programs=le.programs,P.capabilities=tt,P.extensions=at,P.properties=Ue,P.renderLists=Me,P.shadowMap=ve,P.state=me,P.info=pt}l(Ze,"initGLContext"),y!==bn&&(D=new zM(y,t.width,t.height,o,s,r));let pe=new jf(P,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=at.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=at.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(ie,ae,!1))},this.getSize=function(M){return M.set(ie,ae)},this.setSize=function(M,U,Q=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=M,ae=U,t.width=Math.floor(M*ce),t.height=Math.floor(U*ce),Q===!0&&(t.style.width=M+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ie*ce,ae*ce).floor()},this.setDrawingBufferSize=function(M,U,Q){ie=M,ae=U,ce=Q,t.width=Math.floor(M*Q),t.height=Math.floor(U*Q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===bn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,U,Q,Y){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,U,Q,Y),me.viewport($.copy(Pe).multiplyScalar(Ct()).round())},this.getScissor=function(M){return M.copy(Ke)},this.setScissor=function(M,U,Q,Y){M.isVector4?Ke.set(M.x,M.y,M.z,M.w):Ke.set(M,U,Q,Y),me.scissor(ne.copy(Ke).multiplyScalar(Ct()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){me.setScissorTest(je=M)},this.setOpaqueSort=function(M){Ae=M},this.setTransparentSort=function(M){qe=M},this.getClearColor=function(M){return M.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Q=!0){let Y=0;if(M){let Z=!1;if(z!==null){let Se=z.texture.format;Z=_.has(Se)}if(Z){let Se=z.texture.type,Ie=x.has(Se),be=I.getClearColor(),Ce=I.getClearAlpha(),Ne=be.r,Ye=be.g,nt=be.b;Ie?(w[0]=Ne,w[1]=Ye,w[2]=nt,w[3]=Ce,B.clearBufferuiv(B.COLOR,0,w)):(R[0]=Ne,R[1]=Ye,R[2]=nt,R[3]=Ce,B.clearBufferiv(B.COLOR,0,R))}else Y|=B.COLOR_BUFFER_BIT}U&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),I.dispose(),Me.dispose(),se.dispose(),ke.dispose(),Ue.dispose(),A.dispose(),fe.dispose(),X.dispose(),_e.dispose(),Fe.dispose(),le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",_m),pe.removeEventListener("sessionend",vm),ks.stop()};function ze(M){M.preventDefault(),Qa("WebGLRenderer: Context Lost."),O=!0}l(ze,"onContextLost");function $e(){Qa("WebGLRenderer: Context Restored."),O=!1;let M=pt.autoReset,U=ve.enabled,Q=ve.autoUpdate,Y=ve.needsUpdate,Z=ve.type;Ze(),pt.autoReset=M,ve.enabled=U,ve.autoUpdate=Q,ve.needsUpdate=Y,ve.type=Z}l($e,"onContextRestore");function Te(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Te,"onContextCreationError");function dt(M){let U=M.target;U.removeEventListener("dispose",dt),Vt(U)}l(dt,"onMaterialDispose");function Vt(M){rs(M),Ue.remove(M)}l(Vt,"deallocateMaterial");function rs(M){let U=Ue.get(M).programs;U!==void 0&&(U.forEach(function(Q){le.releaseProgram(Q)}),M.isShaderMaterial&&le.releaseShaderCache(M))}l(rs,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,U,Q,Y,Z,Se){U===null&&(U=It);let Ie=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,be=F_(M,U,Q,Y,Z);me.setMaterial(Y,Ie);let Ce=Q.index,Ne=1;if(Y.wireframe===!0){if(Ce=X.getWireframeAttribute(Q),Ce===void 0)return;Ne=2}let Ye=Q.drawRange,nt=Q.attributes.position,Le=Ye.start*Ne,it=(Ye.start+Ye.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),it=Math.min(it,(Se.start+Se.count)*Ne)),Ce!==null?(Le=Math.max(Le,0),it=Math.min(it,Ce.count)):nt!=null&&(Le=Math.max(Le,0),it=Math.min(it,nt.count));let Lt=it-Le;if(Lt<0||Lt===1/0)return;_e.setup(Z,Y,be,Q,Ce);let gt,mt=ee;if(Ce!==null&&(gt=b.get(Ce),mt=ye,mt.setIndex(gt)),Z.isMesh)Y.wireframe===!0?(me.setLineWidth(Y.wireframeLinewidth*Ct()),mt.setMode(B.LINES)):mt.setMode(B.TRIANGLES);else if(Z.isLine){let jt=Y.linewidth;jt===void 0&&(jt=1),me.setLineWidth(jt*Ct()),Z.isLineSegments?mt.setMode(B.LINES):Z.isLineLoop?mt.setMode(B.LINE_LOOP):mt.setMode(B.LINE_STRIP)}else Z.isPoints?mt.setMode(B.POINTS):Z.isSprite&&mt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(at.get("WEBGL_multi_draw"))mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let jt=Z._multiDrawStarts,De=Z._multiDrawCounts,un=Z._multiDrawCount,ct=Ce?b.get(Ce).bytesPerElement:1,Gs=Ue.get(Y).currentProgram.getUniforms();for(let en=0;en<un;en++)Gs.setValue(B,"_gl_DrawID",en),mt.render(jt[en]/ct,De[en])}else if(Z.isInstancedMesh)mt.renderInstances(Le,Lt,Z.count);else if(Q.isInstancedBufferGeometry){let jt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,De=Math.min(Q.instanceCount,jt);mt.renderInstances(Le,Lt,De)}else mt.render(Le,Lt)};function xm(M,U,Q,Y){G!==null&&M.isNodeMaterial&&G.setObject(Y,M),xt===!0&&re.setState(M,Q,!1),M.transparent===!0&&M.side===yi&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,Ba(M,U,Y),M.side=Es,M.needsUpdate=!0,Ba(M,U,Y),M.side=yi):Ba(M,U,Y)}l(xm,"prepareMaterial"),this.compile=function(M,U,Q=null){Q===null&&(Q=M),G!==null&&G.renderStart(M,U,Q),T=se.get(Q),T.init(U),S.push(T),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(U.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),M!==Q&&M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(U.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),_t=this.localClippingEnabled,xt=re.init(this.clippingPlanes,_t),xt===!0&&re.setGlobalState(this.clippingPlanes,U),G!==null&&ve.render(T.state.shadowsArray,Q,U);let Y=new Set;return M.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Se=Z.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];xm(be,Q,U,Z),Y.add(be)}else xm(Se,Q,U,Z),Y.add(Se)}),T=S.pop(),G!==null&&G.renderEnd(),Y},this.compileAsync=function(M,U,Q=null){let Y=this.compile(M,U,Q);return new Promise(Z=>{function Se(){if(Y.forEach(function(Ie){let Ce=Ue.get(Ie).currentProgram;(Ce===void 0||Ce.isReady())&&Y.delete(Ie)}),Y.size===0){Z(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let gh=null;function N_(M){gh&&gh(M)}l(N_,"onAnimationFrame");function _m(){ks.stop()}l(_m,"onXRSessionStart");function vm(){ks.start()}l(vm,"onXRSessionEnd");let ks=new gg;ks.setAnimationLoop(N_),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(M){gh=M,pe.setAnimationLoop(M),M===null?ks.stop():ks.start()},pe.addEventListener("sessionstart",_m),pe.addEventListener("sessionend",vm),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(M,U);let Q=pe.enabled===!0&&pe.isPresenting===!0,Y=D!==null&&(z===null||Q)&&D.begin(P,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,z),T=se.get(M,S.length),T.init(U),T.state.textureUnits=ke.getTextureUnits(),S.push(T),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ut.setFromArrayCamera(U):Be.setFromProjectionMatrix(et,Vn,U.reversedDepth),_t=this.localClippingEnabled,xt=re.init(this.clippingPlanes,_t),C=Me.get(M,v.length),C.init(),v.push(C),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&xh(Ie,U,-1/0,P.sortObjects)}xh(M,U,0,P.sortObjects),C.finish(),G!==null&&G.updateLights(T.state.lightsArray),P.sortObjects===!0&&C.sort(Ae,qe),At=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,At&&I.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),xt===!0&&re.beginShadows();let Z=T.state.shadowsArray;if(ve.render(Z,M,U),xt===!0&&re.endShadows(),(Y&&D.hasRenderPass())===!1){let Ie=C.opaque,be=C.transmissive;if(T.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(be.length>0)for(let Ne=0,Ye=Ce.length;Ne<Ye;Ne++){let nt=Ce[Ne];bm(Ie,be,M,nt)}At&&I.render(M);for(let Ne=0,Ye=Ce.length;Ne<Ye;Ne++){let nt=Ce[Ne];ym(C,M,nt,nt.viewport)}}else be.length>0&&bm(Ie,be,M,U),At&&I.render(M),ym(C,M,U)}z!==null&&N===0&&(ke.updateMultisampleRenderTarget(z),ke.updateRenderTargetMipmap(z)),Y&&D.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),_e.resetDefaultState(),F=-1,k=null,S.pop(),S.length>0?(T=S[S.length-1],ke.setTextureUnits(T.state.textureUnits),xt===!0&&re.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?C=v[v.length-1]:C=null,G!==null&&G.renderEnd()};function xh(M,U,Q,Y){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Ie=U.isArrayCamera?ut:Be;if(!M.frustumCulled||M.intersectsFrustum(Ie)){Y&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let be=fe.update(M),Ce=M.material;Ce.visible&&C.push(M,be,Ce,Q,Xe.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=U.isArrayCamera?ut:Be;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Ce=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Xe.copy(be.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(Ce)){let Ne=be.groups;for(let Ye=0,nt=Ne.length;Ye<nt;Ye++){let Le=Ne[Ye],it=Ce[Le.materialIndex];it&&it.visible&&C.push(M,be,it,Q,Xe.z,Le,U)}}else Ce.visible&&C.push(M,be,Ce,Q,Xe.z,null,U)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)xh(Se[Ie],U,Q,Y)}l(xh,"projectObject");function ym(M,U,Q,Y){let{opaque:Z,transmissive:Se,transparent:Ie}=M;T.setupLightsView(Q),xt===!0&&re.setGlobalState(P.clippingPlanes,Q),Y&&me.viewport($.copy(Y)),Z.length>0&&Sl(Z,U,Q),Se.length>0&&Sl(Se,U,Q),Ie.length>0&&Sl(Ie,U,Q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}l(ym,"renderScene");function bm(M,U,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:Le?Pn:bn,minFilter:Qn,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Se=T.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||$;Se.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let be=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(q),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),At&&I.render(Q);let Ye=P.toneMapping;P.toneMapping=bi;let nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),xt===!0&&re.setGlobalState(P.clippingPlanes,Y),Sl(M,Q,Y),ke.updateMultisampleRenderTarget(Se),ke.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,Lt=U.length;it<Lt;it++){let gt=U[it],{object:mt,geometry:jt,material:De,group:un}=gt;if(De.side===yi&&mt.layers.test(Y.layers)){let ct=De.side;De.side=xn,De.needsUpdate=!0,Mm(mt,Q,Y,jt,De,un),De.side=ct,De.needsUpdate=!0,Le=!0}}Le===!0&&(ke.updateMultisampleRenderTarget(Se),ke.updateRenderTargetMipmap(Se))}P.setRenderTarget(be,Ce,Ne),P.setClearColor(q,de),nt!==void 0&&(Y.viewport=nt),P.toneMapping=Ye}l(bm,"renderTransmissionPass");function Sl(M,U,Q){let Y=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,Se=M.length;Z<Se;Z++){let Ie=M[Z],{object:be,geometry:Ce,group:Ne}=Ie,Ye=Ie.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),be.layers.test(Q.layers)&&Mm(be,U,Q,Ce,Ye,Ne)}}l(Sl,"renderObjects");function Mm(M,U,Q,Y,Z,Se){G!==null&&Z.isNodeMaterial&&G.setObject(M,Z),M.onBeforeRender(P,U,Q,Y,Z,Se),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(P,U,Q,Y,M,Se),Z.transparent===!0&&Z.side===yi&&Z.forceSinglePass===!1?(Z.side=xn,Z.needsUpdate=!0,P.renderBufferDirect(Q,U,Y,Z,M,Se),Z.side=Es,Z.needsUpdate=!0,P.renderBufferDirect(Q,U,Y,Z,M,Se),Z.side=yi):P.renderBufferDirect(Q,U,Y,Z,M,Se),M.onAfterRender(P,U,Q,Y,Z,Se)}l(Mm,"renderObject");function Sm(M){let U=0;for(let Q of M)Q.texture!==null&&U++;return U}l(Sm,"countLightProbeGrids");function Ba(M,U,Q){U.isScene!==!0&&(U=It);let Y=Ue.get(M),Z=T.state.lights,Se=T.state.shadowsArray,Ie=Z.state.version,be=le.getParameters(M,Z.state,Se,U,Q,T.state.lightProbeGridArray),Ce=le.getProgramCacheKey(be),Ne=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,Y.fog=U.fog;let Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=A.get(M.envMap||Y.environment,Ye),Y.envMapRotation=Y.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",dt),Ne=new Map,Y.programs=Ne,Y.programVariants=new Map);let nt=Ne.get(Ce);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===Ie)return Em(M,be),nt}else be.uniforms=le.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,Q,be),M.onBeforeCompile(be,P),nt=le.acquireProgram(be,Ce),Ne.set(Ce,nt),Y.uniforms=be.uniforms;let Le=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=re.uniform),Em(M,be),Y.needsLights=B_(M),Y.lightsStateVersion=Ie,Y.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=Sm(T.state.lightProbeGridArray),Y.currentProgram=nt,Y.uniformsList=null,nt}l(Ba,"getProgram");function U_(M,U,Q,Y,Z){let Se=Ue.get(M),Ie=Se.currentProgram.id+","+Y+","+Z,be=Se.programVariants.get(Ie);return be===void 0?(be=Ba(M,U,Q),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=Y,Se.toneMapping=Z),be}l(U_,"getProgramVariant");function wm(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=oa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}l(wm,"getUniformList");function Em(M,U){let Q=Ue.get(M);Q.outputColorSpace=U.outputColorSpace,Q.batching=U.batching,Q.batchingColor=U.batchingColor,Q.instancing=U.instancing,Q.instancingColor=U.instancingColor,Q.instancingMorph=U.instancingMorph,Q.skinning=U.skinning,Q.morphTargets=U.morphTargets,Q.morphNormals=U.morphNormals,Q.morphColors=U.morphColors,Q.morphTargetsCount=U.morphTargetsCount,Q.numClippingPlanes=U.numClippingPlanes,Q.numIntersection=U.numClipIntersection,Q.vertexAlphas=U.vertexAlphas,Q.vertexTangents=U.vertexTangents,Q.toneMapping=U.toneMapping}l(Em,"updateCommonMaterialProperties");function F_(M,U,Q,Y,Z){U.isScene!==!0&&(U=It),ke.resetTextureUnits();let Se=U.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?U.environment:null,be=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:st.workingColorSpace,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=A.get(Y.envMap||Ie,Ce),Ye=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!Q.morphAttributes.position,it=!!Q.morphAttributes.normal,Lt=!!Q.morphAttributes.color,gt=bi;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=P.toneMapping);let mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,jt=mt!==void 0?mt.length:0,De=Ue.get(Y),un=T.state.lights;if(xt===!0&&(_t===!0||M!==k)){let Tt=M===k&&Y.id===F;re.setState(Y,M,Tt)}let ct=!1,Gs=!1;Y.version===De.__version?De.needsLights&&De.lightsStateVersion!==un.state.version||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==Ne||Y.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Ye||De.vertexTangents!==nt||De.morphTargets!==Le||De.morphNormals!==it||De.morphColors!==Lt||De.morphTargetsCount!==jt||De.numLightProbeGrids!==Sm(T.state.lightProbeGridArray)?ct=!0:(De.outputColorSpace!==be||De.toneMapping!==gt)&&(Gs=!0):(ct=!0,De.__version=Y.version);let en=De.currentProgram;(ct===!0||Gs===!0)&&(en=Gs===!0?U_(Y,U,Z,be,gt):Ba(Y,U,Z),G&&Y.isNodeMaterial&&G.onUpdateProgram(Y,en,De));let wl=!1,as=!1,Vs=!1,lt=en.getUniforms(),$t=De.uniforms;if(me.useProgram(en.program)&&(wl=!0,as=!0,Vs=!0),Y.id!==F&&(F=Y.id,as=!0),wl||k!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(B,"projectionMatrix",M.projectionMatrix),lt.setValue(B,"viewMatrix",M.matrixWorldInverse);let Ht=lt.map.cameraPosition;Ht!==void 0&&Ht.setValue(B,Pt.setFromMatrixPosition(M.matrixWorld)),tt.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,as=!0,Vs=!0)}if(De.needsLights&&(un.state.sunShadowMap.length>0&&lt.setValue(B,"sunShadowMap",un.state.sunShadowMap,ke),un.state.directionalShadowMap.length>0&&lt.setValue(B,"directionalShadowMap",un.state.directionalShadowMap,ke),un.state.spotShadowMap.length>0&&lt.setValue(B,"spotShadowMap",un.state.spotShadowMap,ke),un.state.pointShadowMap.length>0&&lt.setValue(B,"pointShadowMap",un.state.pointShadowMap,ke)),Z.isSkinnedMesh){lt.setOptional(B,Z,"bindMatrix"),lt.setOptional(B,Z,"bindMatrixInverse");let Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),lt.setValue(B,"boneTexture",Tt.boneTexture,ke))}Z.isBatchedMesh&&(lt.setOptional(B,Z,"batchingTexture"),lt.setValue(B,"batchingTexture",Z._matricesTexture,ke),lt.setOptional(B,Z,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",Z._indirectTexture,ke),lt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",Z._colorsTexture,ke));let $n=Q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&oe.update(Z,Q,en),(as||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,lt.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&U.environment!==null&&($t.envMapIntensity.value=U.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=bw()),as){if(lt.setValue(B,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&O_($t,Vs),Se&&Y.fog===!0&&xe.refreshFogUniforms($t,Se),xe.refreshMaterialUniforms($t,Y,ce,ae,T.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Tt=E,Ht=0;for(let Li of T.state.lightProbeGridArray)Li.texture!==null&&(Tt.textures[Ht]=Li.texture,Tt.min[Ht]=Li.boundingBox.min,Tt.max[Ht]=Li.boundingBox.max,Tt.resolution[Ht]=Li.resolution,Ht++);for(let Li in Tt)Tt[Li].length=Ht;$t.probesSH.value=Tt.textures,$t.probesMin.value=Tt.min,$t.probesMax.value=Tt.max,$t.probesResolution.value=Tt.resolution}oa.upload(B,wm(De),$t,ke)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(oa.upload(B,wm(De),$t,ke),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(B,"center",Z.center),lt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),lt.setValue(B,"normalMatrix",Z.normalMatrix),lt.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Tt=Y.uniformsGroups;for(let Ht=0,Li=Tt.length;Ht<Li;Ht++){let Am=Tt[Ht];Fe.update(Am,en),Fe.bind(Am,en)}}return en}l(F_,"setProgram");function O_(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}l(O_,"markUniformsLightsNeedsUpdate");function B_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(B_,"materialNeedsLights"),this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,U,Q){let Y=Ue.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ue.get(M.texture).__webglTexture=U,Ue.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Q=Ue.get(M);Q.__webglFramebuffer=U,Q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Q=0){z=M,te=U,N=Q;let Y=null,Z=!1,Se=!1;if(M){let be=Ue.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),$.copy(M.viewport),ne.copy(M.scissor),he=M.scissorTest,me.viewport($),me.scissor(ne),me.setScissorTest(he),F=-1;return}else if(be.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(be.__hasExternalTextures)ke.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ye=M.depthTexture;if(be.__boundDepthTexture!==Ye){if(Ye!==null&&Ue.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);let Ne=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?Y=Ne[U][Q]:Y=Ne[U],Z=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?Y=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[Q]:Y=Ne,$.copy(M.viewport),ne.copy(M.scissor),he=M.scissorTest}else $.copy(Pe).multiplyScalar(ce).floor(),ne.copy(Ke).multiplyScalar(ce).floor(),he=je;if(Q!==0&&(Y=J),me.bindFramebuffer(B.FRAMEBUFFER,Y)&&me.drawBuffers(M,Y),me.viewport($),me.scissor(ne),me.setScissorTest(he),Z){let be=Ue.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,Q)}else if(Se){let be=U;for(let Ce=0;Ce<M.textures.length;Ce++){let Ne=Ue.get(M.textures[Ce]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,Q,be)}}else if(M!==null&&Q!==0){let be=Ue.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,Q)}F=-1};function Tm(M){let U=Ue.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=tt.textureFormatReadable(M.format),U.__typeReadable=tt.textureTypeReadable(M.type)),U}l(Tm,"getReadableState"),this.readRenderTargetPixels=function(M,U,Q,Y,Z,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){me.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=Tm(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-Y&&Q>=0&&Q<=M.height-Z&&B.readPixels(U,Q,Y,Z,ge.convert(Ye),ge.convert(nt),Se)}finally{let Ne=z!==null?Ue.get(z).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,U,Q,Y,Z,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(U>=0&&U<=M.width-Y&&Q>=0&&Q<=M.height-Z){me.bindFramebuffer(B.FRAMEBUFFER,Ce);let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=Tm(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(U,Q,Y,Z,ge.convert(Ye),ge.convert(nt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Lt=z!==null?Ue.get(z).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Lt);let gt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await k0(B,gt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(it),B.deleteSync(gt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(M.image.width*Y),Se=Math.floor(M.image.height*Y),Ie=U!==null?U.x:0,be=U!==null?U.y:0;ke.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ie,be,Z,Se),me.unbindTexture()},this.copyTextureToTexture=function(M,U,Q=null,Y=null,Z=0,Se=0){let Ie,be,Ce,Ne,Ye,nt,Le,it,Lt,gt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(Q!==null)Ie=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Ne=Q.min.x,Ye=Q.min.y,nt=Q.isBox3?Q.min.z:0;else{let lt=Math.pow(2,-Z);Ie=Math.floor(gt.width*lt),be=Math.floor(gt.height*lt),M.isDataArrayTexture?Ce=gt.depth:M.isData3DTexture?Ce=Math.floor(gt.depth*lt):Ce=1,Ne=0,Ye=0,nt=0}Y!==null?(Le=Y.x,it=Y.y,Lt=Y.z):(Le=0,it=0,Lt=0);let mt=ge.convert(U.format),jt=ge.convert(U.type),De;U.isData3DTexture?(ke.setTexture3D(U,0),De=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),De=B.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),De=B.TEXTURE_2D),me.activeTexture(B.TEXTURE0),me.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),me.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),me.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let un=me.getParameter(B.UNPACK_ROW_LENGTH),ct=me.getParameter(B.UNPACK_IMAGE_HEIGHT),Gs=me.getParameter(B.UNPACK_SKIP_PIXELS),en=me.getParameter(B.UNPACK_SKIP_ROWS),wl=me.getParameter(B.UNPACK_SKIP_IMAGES);me.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),me.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);let as=M.isDataArrayTexture||M.isData3DTexture,Vs=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let lt=Ue.get(M),$t=Ue.get(U),$n=Ue.get(lt.__renderTarget),Tt=Ue.get($t.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,$n.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ht=0;Ht<Ce;Ht++)as&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(M).__webglTexture,Z,nt+Ht),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(U).__webglTexture,Se,Lt+Ht)),B.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,B.DEPTH_BUFFER_BIT,B.NEAREST);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||M.isRenderTargetTexture||Ue.has(M)){let lt=Ue.get(M),$t=Ue.get(U);me.bindFramebuffer(B.READ_FRAMEBUFFER,L),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,K);for(let $n=0;$n<Ce;$n++)as?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,lt.__webglTexture,Z,nt+$n):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,lt.__webglTexture,Z),Vs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,Se,Lt+$n):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,Se),Z!==0?B.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,B.COLOR_BUFFER_BIT,B.NEAREST):Vs?B.copyTexSubImage3D(De,Se,Le,it,Lt+$n,Ne,Ye,Ie,be):B.copyTexSubImage2D(De,Se,Le,it,Ne,Ye,Ie,be);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Vs?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(De,Se,Le,it,Lt,Ie,be,Ce,mt,jt,gt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(De,Se,Le,it,Lt,Ie,be,Ce,mt,gt.data):B.texSubImage3D(De,Se,Le,it,Lt,Ie,be,Ce,mt,jt,gt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,Le,it,Ie,be,mt,jt,gt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,Le,it,gt.width,gt.height,mt,gt.data):B.texSubImage2D(B.TEXTURE_2D,Se,Le,it,Ie,be,mt,jt,gt);me.pixelStorei(B.UNPACK_ROW_LENGTH,un),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Gs),me.pixelStorei(B.UNPACK_SKIP_ROWS,en),me.pixelStorei(B.UNPACK_SKIP_IMAGES,wl),Se===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(M){Ue.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){te=0,N=0,z=null,me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};l(cp,"WebGLRenderer");var Uu=cp;function Cg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ft;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Ag(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let g=Ag(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(Cg,"mergeGeometries");function Ag(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(Ag,"mergeAttributes");var Rg="#c79a72",Mw="#5a4a3a";var rn="#7a5532",dp="#5f6266",Pg="#8a8f96",ni="#5d6447",up="#e8e0cc",Dg="#6e4b2f",nr="#8a8580",Ig="#5b3e27",ca="#7d858c",Sw=new W(0,1,0),Ee=new gi(1,1,1),qt=new xi(.5,.5,1,10),ir=new _i(.5,1,10),ua=new ys(.5,10,8),mp=class mp{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(mp,"Parts");var Yt=mp,ww=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:ua,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ir,colour:dp,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ee,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:qt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:ua,colour:ni,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),Ew=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:qt,colour:rn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:qt,colour:rn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ir,colour:dp,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:qt,colour:rn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ir,colour:Pg,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ee,colour:Pg,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ee,colour:rn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:qt,colour:rn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ee,colour:i==="rifle"?"#3a3a3a":rn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ee,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ee,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:qt,colour:rn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:qt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),Tw={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},fp=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Yt,a=s===void 0?void 0:Tw[s],o=a?.coat??(i==="modern"?ni:t[0]),c=a?.legs??(i==="ancient"?Rg:i==="modern"?ni:Mw);return n&&(r.add({shape:Ee,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Ee,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Ee,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Ee,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Ee,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Ee,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:ua,colour:Rg,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:ua,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:ua,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):ww(i,t,r),s==="parachute"&&r.add({shape:Ee,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),Ew(e,i,t,r),r},"person"),Lg=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),hp=l((i=Dg)=>new Yt().add({shape:Ee,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ee,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ee,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ee,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),Aw=l((i,e,t)=>new Yt().addAll(hp(),[0,0,0]).add({shape:Ee,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(fp(i,e,t,{legs:!1}),[0,.04,0]),"rider"),Cw=l(i=>new Yt().add({shape:Ee,colour:nr,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ee,colour:nr,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:qt,colour:nr,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ee,colour:nr,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:nr,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:nr,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:nr,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ee,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),an=l((i,e=.05)=>({shape:qt,colour:rn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),Rw=l((i,e,t)=>{if(e==="chariot")return new Yt().addAll(hp(),[0,0,.09]).add({shape:Ee,colour:rn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ee,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(an([-.042,.035,-.045],.065)).add(an([.042,.035,-.045],.065)).addAll(fp(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Yt().addAll(hp(t==="ancient"?"#8a7a64":Dg),[0,0,.1]).add({shape:Ee,colour:rn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ee,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(an([-.042,.03,-.03])).add(an([.042,.03,-.03])).add(an([-.042,.03,-.09])).add(an([.042,.03,-.09]));return e==="wagon"?n.add({shape:qt,colour:up,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:up,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ee,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ee,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),Pw=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Yt().add({shape:Ee,colour:rn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ee,colour:rn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ee,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(an([-.045,.03,.04],.045)).add(an([.045,.03,.04],.045)).add(an([-.045,.03,-.04],.045)).add(an([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?ni:dp;return new Yt().add({shape:qt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ee,colour:i==="modern"?ni:rn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ee,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(an([-.04,.035,0],.07)).add(an([.04,.035,0],.07))},"siege"),Iw=l((i,e,t)=>{if(i==="industrial")return new Yt().add({shape:Ee,colour:ca,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ee,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(an([-.045,.025,.06],.045)).add(an([.045,.025,.06],.045)).add(an([-.045,.025,-.06],.045)).add(an([.045,.025,-.06],.045));let n=new Yt().add({shape:Ee,colour:ni,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ee,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ee,colour:ni,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:qt,colour:ni,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:ni,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),Lw=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Yt;switch(i.hull){case"oars":case"sail":{r.add({shape:Ee,colour:Ig,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:ir,colour:Ig,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:qt,colour:rn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ee,colour:o===0?e[1]:up,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Ee,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Ee,colour:rn,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ee,colour:rn,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:qt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ee,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Ee,colour:ca,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Ee,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Ee,colour:ca,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ee,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Ee,colour:i.era==="industrial"?"#4a4a48":ca,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:ir,colour:i.era==="industrial"?"#4a4a48":ca,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:ca,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:qt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ee,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Ee,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:qt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Ee,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),Dw=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Yt().add({shape:qt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ir,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ee,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ee,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ee,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),Nw=l(i=>new Yt().add({shape:ua,colour:ni,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ee,colour:ni,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ee,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Uw=l((i,e)=>{let t=e?1.4:1;return new Yt().add({shape:qt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ir,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Ng=l((i,e)=>{switch(i.shape){case"foot":{let t=new Yt;return Lg(i.squad).forEach(([n,s],r)=>t.addAll(fp(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Yt;return Lg(i.squad).forEach(([n,s])=>t.addAll(Aw(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return Cw(e);case"cart":return Rw(e,i.cart??"wagon",i.era);case"siege":return Pw(i.era,e,i.large===!0);case"vehicle":return Iw(i.era,e,i.large===!0);case"ship":return Lw(i,e);case"aircraft":return Dw(i,e);case"helicopter":return Nw(e);default:return Uw(e,i.large===!0)}},"figureParts"),Fw=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new ft().compose(new W(...i),new pn().setFromAxisAngle(Sw,n).multiply(new pn().setFromEuler(new Cn(...t))),new W(...e)),"partMatrix"),pp=l(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new Oe(r),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(Fw(n)),a.setAttribute("color",new Mt(u,3)),a}),t=Cg(e)??new Ft;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Ug=l((i,e)=>pp(Ng(i,e).parts),"figureGeometry"),Ow=new xi(.19,.2,1,28),Bw=new bs(.22,.014,4,32),Fg=l((i,e,{fortified:t,scale:n,stand:s})=>{let r=i.shape==="ship",a=r?0:s,o=Ng(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return r||o.push({shape:Ow,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&o.push({shape:Bw,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),pp(o)},"unitBodyGeometry"),zw=new _i(.75,.5,4),kw=new bs(.36,.025,6,24),Og=l((i,e,t)=>pp([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:Ee,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:zw,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:kw,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Jt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Po=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),In=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),Io=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),gp=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Bg={Warrior:Jt("ancient","club"),Spearman:Jt("ancient","spear"),Swordman:Jt("ancient","sword"),Archer:Jt("ancient","bow"),Horseman:Po("ancient","spear"),Chariot:gp("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:In("ancient","oars"),Settlers:gp("ancient","wagon"),Diplomat:Jt("ancient","case",1),Caravan:gp("ancient","goods"),Explorer:Jt("ancient","pack",1),Pikeman:Jt("medieval","pike"),Knight:Po("medieval","lance"),Crusader:Po("medieval","sword"),Fanatic:Jt("medieval","sword"),Sail:In("medieval","sail"),Musketman:Jt("renaissance","musket"),Dragoon:Po("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:In("renaissance","sail",!0,1),Galleon:In("renaissance","sail",!0),Rifleman:Jt("industrial","rifle"),AlpineTrooper:{...Jt("industrial","rifle"),dress:"snow"},Partisan:{...Jt("industrial","rifle"),dress:"irregular"},Cavalry:Po("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Jt("industrial","none",2),Ironclad:In("industrial","steam",!1,1),Transport:In("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Jt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Jt("modern","rifle"),Paratrooper:{...Jt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:In("modern","steam",!1,1),Cruiser:In("modern","steam",!0,2),MissileCruiser:In("modern","steam",!0,1,!0),Battleship:In("modern","steam",!0,3),Submarine:In("modern","submarine"),Carrier:In("modern","carrier",!0),Fighter:Io("modern"),StealthFighter:Io("modern",!1,!0),Bomber:Io("modern",!0),StealthBomber:Io("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},zg=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Bg,i)?Bg[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?In("industrial","steam"):e.includes("Air")?Io("modern"):Jt("ancient","spear")),"unitLook");var Gw=.03,Hg="#fff4b0",Vw=.04,zu=.004,xp=.018,kg=.01,Gg=.022,Vg=.03,Wg=.03,Gu=.002,Hw="#4caf50",Ww="#e0b030",Xw="#d04030",qw=256,sr,ii,rr,ar,si,or,$i,da,_p=class _p{constructor(){j(this,sr,new Map);j(this,ii,new Map);j(this,rr,new Map);j(this,ar,new Map);j(this,si,new Map);j(this,or,new Map);j(this,$i,null);j(this,da,0);this.figureMaterial=new Xi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new bs(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=m(this,sr).get(n);return s===void 0&&(s=new Xi({color:new Oe(e),roughness:.75,metalness:.05,...t?{emissive:new Oe(e),emissiveIntensity:.6}:{}}),m(this,sr).set(n,s)),s}body(e,t,n,s=1){let r=JSON.stringify([e,t,n,s]),a=m(this,ar).get(r);return a===void 0&&(a=Fg(e,t,{fortified:n,scale:s,stand:Gw}),m(this,ar).set(r,a)),a}city(e){let t=Jw(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=m(this,si).get(n);return s===void 0&&(s=Og(t,e.colours[0],e.walled),m(this,si).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=m(this,rr).get(n);return s===void 0&&(s=Ug(e,t),m(this,rr).set(n,s)),s}plain(e){let t=m(this,or).get(e);return t===void 0&&(t=new xs({color:new Oe(e),sizeAttenuation:!1,depthTest:!1}),m(this,or).set(e,t)),t}pointer(){if(m(this,$i)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Hg,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new vs(e);n.colorSpace=Nt,H(this,$i,new xs({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return m(this,$i)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=m(this,ii).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new vs(a);h.colorSpace=Nt,r=new xs({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),m(this,ii).set(s,r)}return r}get sweepDue(){return m(this,ii).size+m(this,si).size>Math.max(qw,m(this,da)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof wt&&t.add(s.geometry),s instanceof ea&&t.add(s.material)});m(this,ii).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),m(this,ii).delete(s))}),m(this,si).forEach((n,s)=>{t.has(n)||(n.dispose(),m(this,si).delete(s))}),H(this,da,m(this,ii).size+m(this,si).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),m(this,rr).forEach(e=>e.dispose()),m(this,ar).forEach(e=>e.dispose()),m(this,si).forEach(e=>e.dispose()),m(this,ar).clear(),m(this,si).clear(),this.figureMaterial.dispose(),m(this,or).forEach(e=>e.dispose()),m(this,$i)?.map?.dispose(),m(this,$i)?.dispose(),m(this,or).clear(),H(this,$i,null),m(this,sr).forEach(e=>e.dispose()),m(this,ii).forEach(e=>{e.map?.dispose(),e.dispose()}),m(this,sr).clear(),m(this,ii).clear(),m(this,rr).clear(),H(this,da,0)}};sr=new WeakMap,ii=new WeakMap,rr=new WeakMap,ar=new WeakMap,si=new WeakMap,or=new WeakMap,$i=new WeakMap,da=new WeakMap,l(_p,"MarkerKit");var Hu=_p,Xg=l(i=>{let{r:e,g:t,b:n}=new Oe(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),ha=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),ku=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),Yw=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),$w=3,Zw=4,Lo=l((i,e,t,n,s=$w)=>{let r=new ea(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),qg=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return Lo(i,e*s,e,t)},"label"),Vu=[0,.36,0],Jw=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+ku(i.name,1)*6,r=n===0?0:.12+ku(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+ku(i.name,n+20)*.05,height:(n===0?.13:.05)+ku(i.name,n+40)*.05}})},"buildingsOf"),Kw=l((i,e)=>{let t=new fn;return t.add(new wt(i.city(e),i.figureMaterial)),t.add(ha(qg(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Xg(e.colours[0])),Wg,0),...Vu)),t},"drawCity"),Qw=l((i,e,t=null)=>{let n=new fn,{ring:s}=i.geometries,r=zg(e.type,e.kinds),a=i.body(r,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+Vw,0],u=e.health!==null,h=(t?.over??0)+(u?zu+Gu:0),f=h+kg+Gu,d=Yw(e),p=f+(d===""?0:Gg+Gu),g=new wt(a,i.figureMaterial);if(g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(ha(Lo(i.plain("#202020"),xp,zu,t?.over??0),...c)),y>0){let _=Lo(i.plain(y>.5?Hw:y>.25?Ww:Xw),xp*y,zu*.6,(t?.over??0)+zu*.2);_.center.x=1/(2*y),n.add(ha(_,...c))}}if(n.add(ha(Lo(i.plain(e.colours[0]),xp,kg,h),...c)),d!==""&&n.add(ha(qg(i.label(d,e.colours[0],Xg(e.colours[0])),Gg,f),...c)),e.active){let y=new wt(s,i.material(Hg,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,ha(Lo(i.pointer(),Vg,Vg,p,Zw),...c))}return n},"drawUnit"),Wu="unit",Yg=l((i,e)=>{let t=new fn;if(e.city!==null&&t.add(Kw(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=Qw(i,e.unit,e.city===null?null:{at:[Vu[0],Vu[1],Vu[2]-n],over:Wg+Gu});s.name=Wu,s.position.z=n,t.add(s)}return t},"drawMarker");var Ts=l(i=>i*Math.PI/180,"degrees"),jw=Ts(25),e1=Ts(80),t1=5,n1=90,i1=1.12,Do=Ts(40),yp=Ts(45),s1={above:{yaw:0,pitch:Ts(80)},classic:{yaw:0,pitch:Ts(55)},isometric:{yaw:Ts(45),pitch:Ts(30)}};var $g=l(i=>({focus:i,...s1.classic,distance:24}),"defaultOrbit"),vp=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),Zg=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),lr=l(i=>({...i,yaw:Zg(i.yaw),pitch:vp(i.pitch,jw,e1),distance:vp(i.distance,t1,n1)}),"clampOrbit"),pa=l((i,e)=>lr({...i,distance:i.distance/i1**e}),"zoomed"),Xu=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),qu=l((i,e)=>{let{forward:t}=Xu(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),bp=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=Xu(i),u=qu(i,e),h=[t-u[0],n-u[1],s-u[2]],f=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(a),p=Math.tan(Do/2);return d<=1e-6?null:[f(o)/(d*p*r),f(c)/(d*p)]},"toScreen"),Mp=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=Xu(i),c=Math.tan(Do/2);return{from:qu(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),fa=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=Mp(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),Jg=l((i,e,t,n,s)=>{let r=fa(i,e,t,s),a=fa(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Do/2),{right:h}=Xu(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),Kg=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:Zg(i.yaw),focus:[n(s,e.u),e.v===null?vp(r,0,t):n(r,e.v)]}},"settled"),Qg=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Yu=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var r1=new Oe("#3f8a8c"),a1=new Oe("#173a52"),o1=new Oe("#e8eeee"),jg=`
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
`,l1=`
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
`,As,Hn,Ln,wp=class wp{constructor(e,t){j(this,As);j(this,Hn);j(this,Ln);H(this,As,e),H(this,Hn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<m(this,Hn).length;s+=2)m(this,Hn)[s]=mi.toHalfFloat(0),m(this,Hn)[s+1]=mi.toHalfFloat(1);H(this,Ln,new ta(m(this,Hn),e.columns,e.rows,Mi,Pn)),m(this,Ln).wrapS=$s,m(this,Ln).wrapT=e.wrapsV?$s:Gn,m(this,Ln).magFilter=Xt,m(this,Ln).minFilter=Xt,m(this,Ln).needsUpdate=!0;let n=new gn({uniforms:tr.merge([we.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},shallow:{value:r1.clone()},deep:{value:a1.clone()},foam:{value:o1.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Oe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:jg,fragmentShader:l1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=m(this,Ln),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new wt(new vi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=m(this,As),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;m(this,Hn)[d]=mi.toHalfFloat(e.positions[u*3+1]??0),m(this,Hn)[d+1]=mi.toHalfFloat(e.unseen[u]??0)}}m(this,Ln).needsUpdate=!0}height(e,t){return mi.fromHalfFloat(m(this,Hn)[(t*m(this,As).columns+e)*2]??0)}unseen(e,t){return mi.fromHalfFloat(m(this,Hn)[(t*m(this,As).columns+e)*2+1]??0)>.5}texture(){return m(this,Ln)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,As).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),m(this,Ln).dispose()}};As=new WeakMap,Hn=new WeakMap,Ln=new WeakMap,l(wp,"Water");var Sp=wp,ex=Sp,c1=`
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
`,u1=.18,No,Ep=class Ep{constructor(e,t){j(this,No);H(this,No,t.wrapsV);let n=new gn({uniforms:tr.merge([we.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},extent:{value:new Ve},wrapsV:{value:!1}}]),vertexShader:jg,fragmentShader:c1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new wt(new vi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,No)&&e}follow(e,t,n){this.mesh.position.set(e,u1,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};No=new WeakMap,l(Ep,"Clouds");var $u=Ep;var h1=.6,d1=.05,cr=64,tx=.125,f1=`
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
`,p1=`
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
`,nx=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),m1=l((i,e)=>{let[t]=nx(i.length),n=cr*(1-2*tx);return i.flatMap((s,r)=>{let a=e(s);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:s,x:r%t*cr+(cr-c)/2,y:Math.floor(r/t)*cr+(cr-u)/2,width:c,height:u}]})},"atlasPlaces"),g1=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:s}=i;return[e??(typeof n=="number"?n:0),t??(typeof s=="number"?s:0)]},"imageSize"),Cs,Dn,Uo,ur,Fo,Zu,ma,ix,sx,Ap=class Ap{constructor(e){j(this,ma);j(this,Cs,null);j(this,Dn,null);j(this,Uo,"");j(this,ur);j(this,Fo,new WeakMap);j(this,Zu,1);H(this,ur,e),this.material=new gn({uniforms:tr.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:d1},bias:{value:h1},cells:{value:[1,1]},pad:{value:tx}}]),vertexShader:f1,fragmentShader:p1,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(m(this,Cs)?.dispose(),H(this,Cs,null),e===null||e.count===0)return null;V(this,ma,sx).call(this,e);let t=new go,n=new vi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Hi(e.anchors,3)),t.setAttribute("slot",new Hi(e.slots,2)),t.setAttribute("size",new Hi(e.sizes,1)),t.setAttribute("cell",new Hi(e.cells,1)),t.instanceCount=e.count,H(this,Cs,t),t}make(){let e=new wt(m(this,Cs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){m(this,Cs)?.dispose(),m(this,Dn)?.dispose(),this.material.dispose()}};Cs=new WeakMap,Dn=new WeakMap,Uo=new WeakMap,ur=new WeakMap,Fo=new WeakMap,Zu=new WeakMap,ma=new WeakSet,ix=l(function(e){if(e===null)return 0;let t=m(this,Fo).get(e);return t===void 0&&(t=Rm(this,Zu)._++,m(this,Fo).set(e,t)),t},"#imageId"),sx=l(function(e){let t=e.names.map(o=>`${o}:${V(this,ma,ix).call(this,m(this,ur).call(this,o))}`).join(",");if(t===m(this,Uo)&&m(this,Dn)!==null)return;let[n,s]=nx(e.names.length),r=document.createElement("canvas"),a=r.getContext("2d");r.width=n*cr,r.height=s*cr,a!==null&&(a.imageSmoothingEnabled=!1,m1(e.names,o=>{let c=m(this,ur).call(this,o);return c===null?null:g1(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=m(this,ur).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),m(this,Dn)?.dispose(),H(this,Dn,new vs(r)),m(this,Dn).colorSpace=Nt,m(this,Dn).premultiplyAlpha=!0,m(this,Dn).magFilter=Ut,m(this,Dn).minFilter=Qn,m(this,Dn).generateMipmaps=!0,H(this,Uo,t),this.material.uniforms.atlas.value=m(this,Dn),this.material.uniforms.cells.value=[n,s]},"#drawAtlas"),l(Ap,"YieldIcons");var Tp=Ap,rx=Tp;var Pp=l((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/v1)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),Ju=l(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),x1=l((i,e,t)=>i.unit?.id===e?cx(i,t):Ju(i),"unitOnMarkerAt"),cx=l((i,e)=>{let[t,n,s]=Ju(i),[r,a,o]=Pp(i.slide,e)??[0,0,0];return[t+r,n+a,s+o]},"unitDrawnAt"),_1=l((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||Pp(i.slide,t)===null)return;let n=cx(i,t),s=Ju(e);return{from:[n[0]-s[0],n[1]-s[1],n[2]-s[2]],started:t}},"carriedSlide"),Cp=l((i,e)=>{if(i.slide===void 0)return!1;let t=Pp(i.slide,e),[n,s,r]=t??[0,0,0],[a,o,c]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(Wu)?.position.set(a+n,o+s,c+r)),t!==null},"slideAlong"),v1=260,Rp=10466244,y1=14082796,b1=5984576,M1=16773336,ax=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),S1=l(i=>[new yn(new W(0,0,1),0),new yn(new W(0,0,-1),i)],"polesAt"),w1=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),ox=2048,lx=Math.hypot(30,40,20),ux=l((i,{period:e,ground:t,yieldIcon:n})=>{let s=new Uu({antialias:!0,canvas:i}),r=new no,a=new dn(Do*180/Math.PI,1,.1,400),o=new fn,c=new Xi({roughness:.92,vertexColors:!0}),u=new mo(M1,2.6),h=new Map,f=new Map,d=new Xi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),p=t.rows*t.spacingV,g=S1(p),y=new Map,_=new Set,x=new fn,w=new Hu,R=new fn,E=new rx(n??(()=>null)),C=new ex(t,new Oe(Rp)),T=new $u(C.texture(),t),v=new to(Rp,30,110),S=[[0,0]],D="0,0",P=[[0,0]],O="0,0",G=!1,J=null;s.outputColorSpace=Nt,s.localClippingEnabled=!0,s.toneMapping=_o,s.shadowMap.enabled=!0,s.shadowMap.type=Wc,r.background=new Oe(Rp),r.fog=v,r.add(new ho(y1,b1,.9)),r.add(o),r.add(x),r.add(R),r.add(C.mesh),r.add(T.mesh),u.position.set(30,40,20),u.castShadow=!0,u.shadow.mapSize.set(ox,ox),u.shadow.bias=-4e-4,u.shadow.normalBias=.02,r.add(u),r.add(u.target);let L=l((z,F,k=S)=>k.map(([$,ne])=>{let he=z.make();return he.position.set(z.at[0]+$,z.at[1],z.at[2]+ne),F.add(he),he}),"copiesOf"),K=l(z=>L(z,o,w1(S,z.span,p,e.v,G)),"overlayCopiesOf"),te=l(z=>_.forEach(F=>{let k=y.get(F);(k===void 0||!Cp(k,z))&&_.delete(F)}),"slideMarkers");return{render:l(()=>s.render(r,a),"render"),resize:l((z,F,k)=>{s.setPixelRatio(k),s.setSize(z,F,!1),a.aspect=F>0?z/F:1,a.updateProjectionMatrix()},"resize"),setChunk:l((z,F,k)=>{let $=`${z},${F}`,ne=new Ft;ne.setAttribute("position",new Mt(k.positions,3)),ne.setAttribute("normal",new Mt(k.normals,3)),ne.setAttribute("color",new Mt(k.colours,3)),ne.setIndex(new Mt(k.indices,1)),ne.computeBoundingSphere();let he=h.get($);he!==void 0&&(he.drawn.forEach(de=>o.remove(de)),he.geometry.dispose());let q={geometry:ne,at:[k.u,0,k.v],make:l(()=>{let de=new wt(ne,c);return de.castShadow=!0,de.receiveShadow=!0,de},"make"),drawn:[]};q.drawn=L(q,o),h.set($,q),C.setChunk(k)},"setChunk"),setOverlay:l((z,F,k)=>{let $=`${z},${F}`,ne=f.get($);if(ne!==void 0&&(ne.drawn.forEach(ie=>o.remove(ie)),ne.geometry.dispose(),f.delete($)),k===null)return;let he=new Ft;he.setAttribute("position",new Mt(k.positions,3)),he.setAttribute("normal",new Mt(k.normals,3)),he.setAttribute("color",new Mt(k.colours,3)),he.computeBoundingSphere(),he.computeBoundingBox();let q=he.boundingBox,de={geometry:he,span:[k.v+(q?.min.z??0),k.v+(q?.max.z??0)],at:[k.u,0,k.v],make:l(()=>{let ie=new wt(he,d);return ie.castShadow=!0,ie.receiveShadow=!0,ie},"make"),drawn:[]};de.drawn=K(de),f.set($,de)},"setOverlay"),setMarker:l((z,F,k)=>{let $=y.get(z);if($?.drawn.forEach(ae=>x.remove(ae)),y.delete(z),k===null)return;let ne=Yg(w,k),he=ne.getObjectByName(Wu);ne.traverse(ae=>{ae.castShadow=ae instanceof wt});let q={at:F,make:l(()=>ne.clone(),"make"),drawn:[],original:ne,...k.unit===null||he===void 0?{}:{unit:{id:k.unit.id,at:he.position.toArray()}}},de=performance.now(),ie=_1($,q,de);ie!==void 0&&(q.slide=ie),q.drawn=L(q,x,P),y.set(z,q),q.slide!==void 0&&(_.add(z),Cp(q,de)),w.sweepDue&&w.sweep([...y.values()].flatMap(({original:ae})=>ae===void 0?[]:[ae]))},"setMarker"),slideMarker:l((z,F)=>{let k=y.get(z);if(k===void 0)return;let[$,ne,he]=Ju(k);k.slide={from:[F[0]-$,F[1]-ne,F[2]-he],started:performance.now()},_.add(z),Cp(k,k.slide.started)},"slideMarker"),markerAt:l((z,F)=>{let k=y.get(z);return k===void 0?null:x1(k,F,performance.now())},"markerAt"),sliding:l(()=>_.size>0,"sliding"),setYields:l(z=>{J?.drawn.forEach(F=>R.remove(F)),J=null,E.set(z)!==null&&(J={at:[0,0,0],make:l(()=>E.make(),"make"),drawn:[]},J.drawn=L(J,R))},"setYields"),view:l((z,F,k=e)=>{let[$,ne]=z.focus,[he,q,de]=qu(z,F),{near:ie,far:ae}=Yu(z.distance);a.position.set(he,q,de),a.lookAt($,F,ne),a.far=ae*1.2,a.near=Math.max(.1,z.distance*.02),a.updateProjectionMatrix(),v.near=ie,v.far=ae;let ce=z.distance*2.2,Ae=u.shadow.camera;u.position.set($+30,F+40,ne+20),u.target.position.set($,F,ne),Ae.left=-ce,Ae.right=ce,Ae.top=ce,Ae.bottom=-ce,Ae.near=Math.max(.5,lx-ce*1.6),Ae.far=lx+ce*1.6,Ae.updateProjectionMatrix(),C.follow($,ne,ae*2.2,u.position.clone().sub(u.target.position)),T.follow($,ne,ae*2.2),C.pastThePoles(k.v!==null),T.pastThePoles(k.v!==null),d.clippingPlanes=k.v===null?g:null,G=k.v===null;let qe=ax(z.focus,ae,k),Pe=`${qe.join(";")}${G?" stopped":""}`,Ke=ax(z.focus,Math.min(ae,z.distance*2.2),k),je=Ke.join(";");Pe!==D&&(S=qe,D=Pe,h.forEach(Be=>{Be.drawn.forEach(ut=>o.remove(ut)),Be.drawn=L(Be,o)}),f.forEach(Be=>{Be.drawn.forEach(ut=>o.remove(ut)),Be.drawn=K(Be)}),J!==null&&(J.drawn.forEach(Be=>R.remove(Be)),J.drawn=L(J,R))),E.lean(z.pitch),je!==O&&(P=Ke,O=je,y.forEach(Be=>{Be.drawn.forEach(ut=>x.remove(ut)),Be.drawn=L(Be,x,P)})),te(performance.now())},"view"),stats:l(()=>({drawCalls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries}),"stats"),dispose:l(()=>{h.forEach(({geometry:z})=>z.dispose()),h.clear(),f.forEach(({geometry:z})=>z.dispose()),f.clear(),d.dispose(),y.clear(),w.dispose(),E.dispose(),C.dispose(),T.dispose(),c.dispose(),s.dispose()},"dispose")}},"createStage");var Zi=1/Math.sqrt(3),hx=1.5*Zi,E1=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),T1=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,Zi+r*hx],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Zi],[a+.5,o-Zi/2],[a+.5,o+Zi/2],[a,o+Zi],[a-.5,o+Zi/2],[a-.5,o-Zi/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-Zi,[c,u]=E1(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*hx:null}),"period")}},"hexOddRLayout"),dx=T1;var A1=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),fx=A1;var Ei=Math.SQRT2/2,C1=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*Ei,(r+1)*Ei],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Ei],[a+Ei,o],[a,o+Ei],[a-Ei,o]]},"outline"),tileAt:l((s,r)=>{let a=s/Ei,o=r/Ei,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Ei,v:t?i*Ei:null}),"period")}},"staggeredIsoLayout"),px=C1;var mx={square:fx,"staggered-iso":px,"hex-odd-r":dx},R1=l(i=>{if(!Object.prototype.hasOwnProperty.call(mx,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return mx[i.topologyId](i)},"groundLayoutFor"),gx=R1;var Oo=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var P1=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),xx=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Rs=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,f,d,p)=>{let g=Math.floor(P1(h,f,t)*16)*(Math.PI/8);return Math.cos(g)*d+Math.sin(g)*p},"slope");return(h,f)=>{let d=h/s,p=f/a,g=Math.floor(d),y=Math.floor(p),_=d-g,x=p-y,w=xx(_),R=xx(x),E=o(g),C=o(g+1),T=c(y),v=c(y+1),S=u(E,T,_,x)+(u(C,T,_-1,x)-u(E,T,_,x))*w,D=u(E,v,_,x-1)+(u(C,v,_-1,x-1)-u(E,v,_,x-1))*w;return Math.max(-1,Math.min(1,(S+(D-S)*R)*1.4))}},"periodicNoise"),Ip=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var Ti={shore:-.03,deep:-.15,reach:3},Ku={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},vx={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},_x={Ocean:{relief:{base:Ti.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:vx,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},Qu=l(i=>i==="Unknown"?Ku:(Object.prototype.hasOwnProperty.call(_x,i)?_x[i]:void 0)??vx,"terrainEntry");var ju=.65,Lp=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Ji=.22,eh=.12,Dp={low:.2,high:.5},yx=l((i,e,t,n,s,r,a,o,c)=>{let u=r-t,h=a-n,f=u*u+h*h,d=f===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/f)),p=Oo(Math.hypot(i-t-u*d,e-n-h*d)),g=1-d;return p===0?-1/0:p*p*(s+(o-s)*(1-g*g*g)+c)},"halfRidge"),Bo=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),I1=l((i,e,t)=>({u:(Bo(i,e,t,1)*2-1)*Ji,v:(Bo(i,e,t,2)*2-1)*Ji,scale:.75+Bo(i,e,t,3)*.5}),"peakOf"),L1=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:s,height:r,wrapsY:a}=n,o=i.period(),c=Ip([Rs({cell:.7,period:o,seed:t}),Rs({cell:.35,period:o,seed:t+1}),Rs({cell:.17,period:o,seed:t+2})]),u=Ip([Rs({cell:.45,period:o,seed:t+3}),Rs({cell:.22,period:o,seed:t+4})]),h=l((N,z)=>1-2*Math.abs(u(N,z)),"ridged"),f=Rs({cell:.8,period:o,seed:t+5}),d=Rs({cell:.8,period:o,seed:t+6}),p={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],_=[],x=[],w=[],R=l((N,z)=>{let F=(N%s+s)%s;return!a&&(z<0||z>=r)?null:(z%r+r)%r*s+F},"index"),E=l(N=>{let z=new Array(s*r).fill(1/0),F=[];N.forEach((k,$)=>{k&&(z[$]=0,F.push([$%s,Math.floor($/s)]))});for(let[k,$]of F){let ne=z[$*s+k]??1/0;ne>=Ti.reach||n.neighbours(k,$).forEach(([he,q])=>{let de=q*s+he;(z[de]??1/0)>ne+1&&(z[de]=ne+1,F.push([he,q]))})}return z},"distancesFromLand"),C=l((N,z)=>{let F=n.terrainAt(N,z);return`${F}${F!=="Unknown"&&n.waterAt(N,z)?" water":""}`},"readAs"),T=l(N=>{if(N!==void 0&&y.length>0&&N.every(([ie,ae])=>{let ce=R(ie,ae);return ce===null||y[ce]===C(ie,ae)}))return[];let z=[],F=[],k=[];for(let ie=0;ie<r;ie++)for(let ae=0;ae<s;ae++){let ce=n.terrainAt(ae,ie);z.push(ce),F.push(ce!=="Unknown"&&n.waterAt(ae,ie)),k.push(Qu(ce))}let $=E(z.map((ie,ae)=>ie!=="Unknown"&&!F[ae])),ne=z.map((ie,ae)=>`${ie}${F[ae]?" water":""}`),he=[];ne.forEach((ie,ae)=>{y[ae]!==ie&&he.push([ae%s,Math.floor(ae/s)])}),y=ne,g=k.map((ie,ae)=>{let ce=ie===Ku,Ae=ae%s,qe=Math.floor(ae/s),Pe=I1(Ae,qe,t);if(!F[ae])return{relief:ie.relief,colour:Lp(ie.colour),unknown:ce,peak:Pe};let Ke=Math.min($[ae]??1/0,Ti.reach),je=Ti.shore+(Ti.deep-Ti.shore)*Math.max(0,Ke-1)/Math.max(1,Ti.reach-1);return{relief:{...ie.relief,base:je},colour:Lp(ie.colour),unknown:ce,peak:Pe}});let q=w,de=new Map(he.map(([ie,ae])=>[`${ie},${ae}`,[ie,ae]]));return w=g.map(({relief:ie,unknown:ae},ce)=>!ae&&!F[ce]&&ie.shape==="peaked"),he.some(([ie,ae])=>{let ce=ae*s+ie;return w[ce]===!0||q[ce]===!0})&&([_,x]=J()),he.forEach(([ie,ae])=>{let ce=ae*s+ie;w[ce]!==!0&&q[ce]!==!0||n.neighbours(ie,ae).forEach(([Ae,qe])=>{let Pe=R(Ae,qe);Pe!==null&&w[Pe]===!0&&de.set(`${Ae},${qe}`,[Ae,qe])})}),[...de.values()]},"refresh"),v=l(N=>{let[z,F]=i.centre(0,N);return Math.max(...i.outline(0,N).map(([k,$])=>Math.hypot(k-z,$-F)))},"cornerOf"),S=l((N,z)=>{let[F,k]=i.centre(0,N),$=[];for(let ne=-8;ne<=8;ne++)for(let he=-6;he<=6;he++){let[q,de]=i.centre(he,N+ne);Math.hypot(q-F,de-k)<z+1e-9&&$.push([he,ne])}return $},"offsetsWithin"),D=l((N,z,F,k)=>{if(s>=6&&(!a||r>=6)){let ie=l((Ae,qe)=>{let Pe=(Ae%qe+qe)%qe;return Pe*2<qe?Pe:Pe-qe},"nearest"),ae=ie(F-N,s),ce=a?ie(k-z,r):k-z;return ae===0&&ce===0?[]:[[ae,ce]]}let $=l((ie,ae)=>{let ce=(ie%ae+ae)%ae;return ce===0?[0]:[ce,ce-ae]},"copies"),[ne,he]=i.centre(N,z),q=$(F-N,s).flatMap(ie=>(a?$(k-z,r):[k-z]).flatMap(ae=>{if(ie===0&&ae===0)return[];let[ce,Ae]=i.centre(N+ie,z+ae);return[[ie,ae,Math.hypot(ce-ne,Ae-he)]]})),de=Math.min(...q.map(([,,ie])=>ie));return q.filter(([,,ie])=>ie<=de+1e-9).map(([ie,ae])=>[ie,ae])},"stepsTo"),P=Math.max(...[0,1].flatMap(N=>{let[z,F]=i.centre(0,N);return n.neighbours(0,N).flatMap(([k,$])=>D(0,N,k,$).map(([ne,he])=>{let[q,de]=i.centre(ne,N+he);return Math.hypot(q-z,de-F)}))}),1),O=[0,1].map(N=>{let[z,F]=i.centre(0,N);return S(N,P+Ji*Math.SQRT2+eh+1.2+Math.max(v(0),v(1))).flatMap(([k,$])=>{let[ne,he]=i.centre(k,N+$);return[k,$,ne-z,he-F]})}),G=l((N,z,F,k,$,ne)=>{let he=$-F,q=ne-k,de=he*he+q*q,ie=de===0?0:Math.max(0,Math.min(1,((N-F)*he+(z-k)*q)/de));return Math.hypot(N-F-he*ie,z-k-q*ie)},"toSegment"),J=l(()=>{let N=g.map(()=>[]),z=g.map(()=>[]),F=Math.max(v(0),v(1));return e?(g.forEach((k,$)=>{if(w[$]!==!0)return;let ne=$%s,he=Math.floor($/s),[q,de]=i.centre(ne,he),ie=new Map;n.neighbours(ne,he).forEach(([ae,ce])=>{let Ae=R(ae,ce);Ae!==null&&w[Ae]===!0&&D(ne,he,ae,ce).forEach(([qe,Pe])=>ie.set(`${qe},${Pe}`,[qe,Pe,Ae]))}),ie.forEach(([ae,ce,Ae])=>{let qe=g[Ae];if(qe===void 0||ce<0||ce===0&&ae<0)return;let[Pe,Ke]=i.centre(ne+ae,he+ce),{peak:je,relief:Be}=k,{peak:ut,relief:xt}=qe,_t=je.u,et=je.v,Pt=Pe-q+ut.u,Xe=Ke-de+ut.v,It=Be.base*ju*je.scale,At=xt.base*ju*ut.scale,Ct=Math.hypot(Pt-_t,Xe-et)||1,B=16+(ce+2)*5+(ae+2),Bt=(Bo(ne,he,t,B)*2-1)*eh,at=Dp.low+(Dp.high-Dp.low)*Bo(ne,he,t,B+32),tt=(_t+Pt)/2-(Xe-et)/Ct*Bt,me=(et+Xe)/2+(Pt-_t)/Ct*Bt,pt=Math.max(Math.hypot(_t-tt,et-me),Math.hypot(Pt-tt,Xe-me))+1.2,Ue={au:_t,av:et,ah:It,mu:tt,mv:me,mh:at*Math.min(It,At),bu:Pt,bv:Xe,bh:At,roughness:(Be.roughness+xt.roughness)/2,cu:tt,cv:me,reach:pt*pt},ke=(Math.sqrt(Ue.reach)+F)**2,A=O[he&1]??[];for(let b=0;b<A.length;b+=4){let X=A[b+2],fe=A[b+3];if((X-tt)**2+(fe-me)**2>=ke||Math.min(G(X,fe,_t,et,tt,me),G(X,fe,tt,me,Pt,Xe))>=1.2+F)continue;let le=R(ne+A[b],he+A[b+1]);le!==null&&(N[le]?.push(Ue),z[le]?.push(X,fe))}})}),[N,z]):[N,z]},"ranges"),L=l(N=>{let[z,F]=i.centre(0,N),k=Math.max(...i.outline(0,N).map(([ne,he])=>Math.hypot(ne-z,he-F))),$=[];for(let ne=-6;ne<=6;ne++)for(let he=-4;he<=4;he++){let[q,de]=i.centre(he,N+ne);Math.hypot(q-z,de-F)<1.2+k+Ji*Math.SQRT2+1e-9&&$.push([he,ne])}return $},"offsetsFor"),K=[L(0),L(1)],te=l((N,z)=>{let[F,k]=i.tileAt(N,z),$=R(F,k),ne=$===null?null:g[$]??null;if(ne===null||ne.unknown)return{height:0,colour:Lp(Ku.colour),unseen:!0};let he=null,q=null,de=l(et=>et==="rolling"?he??=c(N,z):q??=h(N,z),"noiseHere"),ie=0,ae=0,ce=0,Ae=0,qe=0,Pe=0,Ke=0,je=N+Ji*f(N,z),Be=z+Ji*d(N,z);(K[k&1]??[]).forEach(([et,Pt])=>{let Xe=F+et,It=k+Pt,At=R(Xe,It);if(At===null)return;let Ct=g[At];if(Ct===void 0)return;let[B,Bt]=i.centre(Xe,It),{relief:at,colour:tt,peak:me}=Ct,pt=Oo(Math.hypot(N-B,z-Bt)),Ue=at.shape==="peaked"?Oo(Math.hypot(N-B-me.u,z-Bt-me.v)):0,ke=Oo(Math.hypot(je-B,Be-Bt))**3;if(pt>0){let A=p[at.shape],b=A===null?0:at.roughness*de(A);at.shape==="peaked"?ae+=pt*(at.base*(1-ju)+b*.5):ae+=pt*(at.base+b),ie+=pt}if(Ue>0){let A=at.roughness*de("ridged");ce+=Ue*Ue*(at.base*ju*me.scale+A*.5)}Ae+=ke,qe+=ke*tt[0],Pe+=ke*tt[1],Ke+=ke*tt[2]});let ut=$===null?[]:_[$]??[],xt=$===null?[]:x[$]??[],_t=ce;if(ut.length>0){let[et,Pt]=i.centre(F,k);ut.forEach((Xe,It)=>{let At=N-et+(xt[It*2]??0),Ct=z-Pt+(xt[It*2+1]??0);if((At-Xe.cu)**2+(Ct-Xe.cv)**2>=Xe.reach)return;let B=Xe.roughness*de("ridged")*.5;_t=Math.max(_t,yx(At,Ct,Xe.au,Xe.av,Xe.ah,Xe.mu,Xe.mv,Xe.mh,B),yx(At,Ct,Xe.bu,Xe.bv,Xe.bh,Xe.mu,Xe.mv,Xe.mh,B))})}return{height:(ie>0?ae/ie:0)+_t,colour:Ae>0?[qe/Ae,Pe/Ae,Ke/Ae]:ne.colour,unseen:!1}},"sample");return T(),{sample:te,height:l((N,z)=>te(N,z).height,"height"),refresh:T}},"createRelief"),bx=L1;var Mx=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),Sx=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((T,v)=>[T*a,v*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),p=(s+1)*(r+1),g=new Float32Array(p*3),y=new Float32Array(p);for(let T=-1;T<=r+1;T++)for(let v=-1;v<=s+1;v++){let S=e.sample(...h(c+v,u+T)),{height:D,colour:P}=S;d[(T+1)*f+(v+1)]=D,v>=0&&v<=s&&T>=0&&T<=r&&(g.set(P,(T*(s+1)+v)*3),y[T*(s+1)+v]=S.unseen?1:0)}let _=l((T,v)=>d[(v+1)*f+(T+1)]??0,"height"),x=new Float32Array(p*3),w=new Float32Array(p*3),[R,E]=h(c,u);for(let T=0;T<=r;T++)for(let v=0;v<=s;v++){let S=T*(s+1)+v,[D,P]=h(c+v,u+T),O=(_(v+1,T)-_(v-1,T))/(2*a),G=(_(v,T+1)-_(v,T-1))/(2*o),J=Math.hypot(O,1,G);x[S*3]=D-R,x[S*3+1]=_(v,T),x[S*3+2]=P-E,w[S*3]=-O/J,w[S*3+1]=1/J,w[S*3+2]=-G/J}let C=new Uint32Array(s*r*6);for(let T=0;T<r;T++)for(let v=0;v<s;v++){let S=T*(s+1)+v,D=S+1,P=S+s+1,O=P+1,G=(T*s+v)*6;C.set([S,P,D,D,P,O],G)}return{u:R,v:E,positions:x,normals:w,colours:g,unseen:y,indices:C}},"buildChunk"),wx=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let p=Math.floor((f-n)/r);p<=Math.floor((f+n)/r);p++){if(!a&&(p<0||p>=i.chunksV))continue;let g=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Nn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),Ex={Forest:{plants:[Nn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Nn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Nn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Nn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Nn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Nn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Nn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Nn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Nn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Nn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Nn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Nn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Nn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},xa=l(i=>Object.prototype.hasOwnProperty.call(Ex,i)?Ex[i]:null,"growthOf");var D1=["River"],Wn=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),N1=["Irrigation","Farmland","Fortress","Airbase"],Tx=l(i=>i.city||N1.some(e=>Wn(i,e))?null:xa(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),U1=l((i,e)=>{if(i.city)return null;let t=Wn(i,"Road"),n=Wn(i,"Railroad"),s=t?e.filter(f=>Wn(f.tile,"Road")).map(({offset:f})=>f):[],r=t?e.filter(f=>!!f.tile.city||Wn(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,d)=>f[0]===d[0]&&f[1]===d[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(f=>!n||!r.some(d=>a(d,f))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:Wn(i,"Farmland")?"farmland":Wn(i,"Irrigation")?"irrigation":null,mine:Wn(i,"Mine"),fortress:Wn(i,"Fortress"),airbase:Wn(i,"Airbase"),pollution:Wn(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!D1.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:xa(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=Tx(i);return u!==null&&(c.woods=e.filter(f=>Tx(f.tile)===u).map(({offset:f})=>f),c.paths=e.filter(f=>!!f.tile.city||Wn(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Ax=U1;var Et=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Cx={Coal:Et("rocks","#26262a",4),Gold:Et("rocks","#d8b13a",3),Gems:Et("rocks","#59c2d6",4,"#b05ad0"),Iron:Et("rocks","#8a5a44",4),Wheat:Et("crop","#d9b84a",5,"#a88a2c"),Spice:Et("crop","#c0452e",4,"#5d7a2a"),Wine:Et("crop","#6a2c5e",4,"#5d7a2a"),Silk:Et("crop","#e9e2cf",3,"#4f7a34"),Fruit:Et("crop","#e08a2a",4,"#3f7a2a"),Horse:Et("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Et("animal","#4a3424",3,"#2a1e16"),Game:Et("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Et("animal","#8f7e66",2,"#e8e2d6"),Furs:Et("animal","#b0602a",2,"#f0e8dc"),Ivory:Et("animal","#8a8580",1,"#f2ead8"),Seal:Et("animal","#6e7072",2,"#4a4c4e"),Pheasant:Et("bird","#8a3a22",2,"#3d6a3a"),Fish:Et("fish","#b8c4cc",5),Whales:Et("whale","#3a4048",1),Oil:Et("derrick","#222224",1,"#121214"),Oasis:Et("oasis","#3f7a32",3,"#3f86a8"),Peat:Et("peat","#4a3624",4),Shield:Et("logs","#7a5532",4,"#c9a47a")},F1=Et("cairn","#9a9690",5),Rx=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Cx,n)?Cx[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??F1},"specialLook");var kp=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Un={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Np=.06,Px="#8c7a58",Ix="#5f5953",O1="#a9abae",B1="#5e432b",z1="#4f87b0",k1="#7da33f",G1=["#c2b448","#8fae3e"],Lx="#9d968a",V1="#4a4c50",Bp="#6b4a2e",H1="#7a6a58",W1="#b89a5a",X1="#c9b48e",Dx="#34322a",Mn=new gi(1,1,1),va=new xi(.5,.5,1,8),Gp=new _i(.5,1,8),q1=new _i(.5,1,4),_a=new ys(.5,8,6),zo=new xi(.5,.5,1,4,1,!0),ko=new _i(.5,1,5,1,!0),th=new ys(.5,5,3),Up={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},Y1=.05,$1=.22,Nx=72,ri=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Ux=new Map,Fp=l(i=>{let e=Ux.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Oe(i);e=[t,n,s],Ux.set(i,e)}return e},"colourOf"),Fx=new WeakMap,Z1=l(i=>{let e=Fx.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Fx.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),J1=new ft,K1=new We,Q1=new W,j1=new pn,eE=new Cn,tE=new W,Ot,zx,on,qp=class qp{constructor(e,t){j(this,Ot);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=Fp(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/Np)),u=Math.max(1,Math.ceil(n/Np)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<c;d++)for(let p=0;p<u;p++){let[g,y]=f(d/c,(p+1)/u),[_,x]=f((d+1)/c,(p+1)/u),[w,R]=f(d/c,p/u),[E,C]=f((d+1)/c,p/u);V(this,Ot,on).call(this,g,y,r,a),V(this,Ot,on).call(this,_,x,r,a),V(this,Ot,on).call(this,w,R,r,a),V(this,Ot,on).call(this,_,x,r,a),V(this,Ot,on).call(this,E,C,r,a),V(this,Ot,on).call(this,w,R,r,a)}}disc(e,t,n,s,r=12){let a=Fp(n),[o,c]=e,u=Math.max(1,Math.ceil(t/Np)),h=l((f,d)=>{let p=d/r*Math.PI*2,g=f/u*t;return[o+Math.cos(p)*g,c+Math.sin(p)*g]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let p=h(f+1,d),g=h(f+1,d+1);if(f===0)V(this,Ot,on).call(this,o,c,s,a),V(this,Ot,on).call(this,...g,s,a),V(this,Ot,on).call(this,...p,s,a);else{let y=h(f,d),_=h(f,d+1);V(this,Ot,on).call(this,...y,s,a),V(this,Ot,on).call(this,..._,s,a),V(this,Ot,on).call(this,...p,s,a),V(this,Ot,on).call(this,..._,s,a),V(this,Ot,on).call(this,...g,s,a),V(this,Ot,on).call(this,...p,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=Z1(e),c=J1.compose(Q1.set(...t),j1.setFromEuler(eE.set(...r)),tE.set(...n)),u=c.elements,h=K1.getNormalMatrix(c).elements,[f,d,p]=Fp(s),g=this.soup;for(let y=0;y<a.length;y+=3){let _=a[y],x=a[y+1],w=a[y+2],R=o[y],E=o[y+1],C=o[y+2],T=h[0]*R+h[3]*E+h[6]*C,v=h[1]*R+h[4]*E+h[7]*C,S=h[2]*R+h[5]*E+h[8]*C,D=Math.hypot(T,v,S)||1;g.positions.push(u[0]*_+u[4]*x+u[8]*w+u[12],u[1]*_+u[5]*x+u[9]*w+u[13],u[2]*_+u[6]*x+u[10]*w+u[14]),g.normals.push(T/D,v/D,S/D),g.colours.push(f,d,p)}}spot(e,t){let n=ri(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-$1-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,hE(e,t,o,c)-Y1-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=ri(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Nx;h++){let f=s+h/Nx*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>c&&(o=d,c=p)}return this.taken.push([o[0],o[1],n]),o}};Ot=new WeakSet,zx=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),on=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...V(this,Ot,zx).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(qp,"Layer");var zp=qp,Vp=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),Hp=l(i=>i.alone||i.joins.length>0,"drawn"),nE=l((i,e)=>{let{place:t}=i;Hp(e)&&(e.joins.forEach(n=>i.strip(t.centre,Vp(t,n),.07,Px,Un.road)),i.disc(t.centre,e.alone?.09:.035,Px,Un.road))},"road"),iE=l((i,e)=>{if(!Hp(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>Vp(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,Ix,Un.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,B1,Un.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,O1,Un.rail))}),i.disc(t.centre,.05,Ix,Un.ballast)},"railroad"),sE=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?G1[o%2]:k1;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,Un.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,z1,Un.field+.001)}}},"fields"),rE=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Mn,[e-.02,n+.05,t],[.01,.11,.01],Bp,[0,0,-.3]),i.solid(Mn,[e+.02,n+.05,t],[.01,.11,.01],Bp,[0,0,.3]),i.solid(va,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(Gp,[a,i.ground(a,o)+.02,o],[.07,.04,.07],H1)})},"mine"),aE=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(Mn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],Lx)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(va,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Lx)})},"fortress"),oE=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,V1,Un.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Un.road+.004),i.solid(Mn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),lE=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Dx,Un.smear,14),i.disc(i.spot(7,.5),e*.25,Dx,Un.smear+.001)},"pollution"),cE=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(ri(i.place.seed,n*31+o*2)-.5)*c,t[1]+(ri(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),f=ri(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(_a,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(va,[c,h+.02,u],[.008,.04,.008],s),i.solid(_a,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(Mn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(Mn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(Mn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(_a,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(Mn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(_a,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(_a,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(Mn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(Mn,[c,h+.008,u],[.08,.016,.08],s),i.solid(q1,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,Un.field+.002);{let[d,p]=r(o+5,.1),g=i.ground(d,p);i.solid(va,[d,g+.06,p],[.012,.12,.012],Bp),i.solid(Gp,[d,g+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?va:Mn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(_a,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),uE=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+ri(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(va,[s,a+.02,r],[.05,.04,.05],X1),i.solid(Gp,[s,a+.055,r],[.065,.035,.065],W1)})},"hut"),kx={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Gx=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(zo,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(ko,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(ko,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(zo,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(th,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(zo,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(ko,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(zo,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(Mn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(th,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(ko,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(ko,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid(th,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Mn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(th,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(zo,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(Mn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),hE=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),dE=l((i,e)=>{let t=xa(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*ri(r,h),d=t.conifers,p=d!==void 0&&ri(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,g=kx[p]*f;for(let y=0;y<6;y++){let _=ri(r,h+2+y*2)*Math.PI*2,x=Math.sqrt(ri(r,h+3+y*2))*s*.92,w=n[0]+Math.cos(_)*x,R=n[1]+Math.sin(_)*x;if(i.hasRoom(w,R,g)){Gx(i,o,p,w,R,f,_),i.taken.push([w,R,g]),i.grown.push([w,R,p]);break}}}})},"plants"),Op=.26,Ox=.3,fE=.15,Bx=.5,nh=[.9,1.3],hr=l((i,e,t)=>ri(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),pE=l((i,e,t)=>{let{centre:n,outline:s,owns:r,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/Op)),f=o.u/h,d=o.v===null?null:Math.max(1,Math.round(o.v/Op)),p=o.v===null||d===null?Op:o.v/d,g=s.map(([v])=>v),y=s.map(([,v])=>v),[_,x]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[w,R]=[Math.floor(Math.min(...y)/p)-1,Math.ceil(Math.max(...y)/p)],E=a.filter(([v,S])=>!i.woods.some(([D,P])=>D===v&&P===S)).map(v=>{let[S,D]=c(v),P=Math.hypot(S-n[0],D-n[1]);return{mu:S,mv:D,length:P}}),C=t.plants.reduce((v,{count:S})=>v+S,0),T=[];for(let v=w;v<=R;v++)for(let S=_;S<=x;S++){let D=(S%h+h)%h,P=d===null?v:(v%d+d)%d,O=(S+.5+(hr(D,P,0)*2-1)*Ox)*f,G=(v+.5+(hr(D,P,1)*2-1)*Ox)*p;if(!r(O,G))continue;let J=E.reduce((F,{mu:k,mv:$,length:ne})=>{let he=ne/2-((O-n[0])*(k-n[0])+(G-n[1])*($-n[1]))/ne;return Math.min(F,Math.max(0,he)/fE)},1);if(hr(D,P,2)>=Bx+(1-Bx)*J)continue;let L=hr(D,P,3)*C,K=t.plants[0];for(let F of t.plants)if(K=F,L-=F.count,L<0)break;let te=t.conifers,N=te!==void 0&&hr(D,P,4)>=te[0]+(te[1]-te[0])*u?"broadleaf":K.kind,z=K.size[0]+(K.size[1]-K.size[0])*hr(D,P,5);T.push({u:O,v:G,kind:N,plant:K,room:kx[N]*z*nh[1],size:z*(nh[0]+(nh[1]-nh[0])*J),facing:hr(D,P,6)*Math.PI*2})}return T},"woodsPlants"),mE=l((i,e,t)=>{let{centre:n,around:s,toward:r,heightAt:a}=i.place,o=Math.max(...s.map(u=>{let[h,f]=r(u);return Math.hypot(h-n[0],f-n[1])})),c=e.paths.map(u=>r(u));c.forEach((u,h)=>c.slice(h+1).forEach(f=>{Math.hypot(f[0]-u[0],f[1]-u[1])<=o+1e-6&&i.lines.push([u,f])})),pE(e,i.place,t).forEach(({u,v:h,kind:f,plant:d,size:p,room:g,facing:y})=>{f!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(Gx(i,d,f,u,h,p,y),i.grown.push([u,h,f]))})},"woods"),Wp=l((i,e,t)=>{let n=new zp(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&Hp(o)&&(o.joins.forEach(c=>n.lines.push([s,Vp(e,c)])),o.alone&&n.lines.push([s,s]))}),i.fortress){let o=r*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[s[0]+u,s[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=r*.75;n.lines.push([[s[0]-o,s[1]+.12],[s[0]+o,s[1]+.12]])}i.irrigation!==null&&sE(n,i.irrigation),i.road!==null&&nE(n,i.road),i.railroad!==null&&iE(n,i.railroad),i.mine&&rE(n,n.claim(...Up.mine,.1)),i.fortress&&aE(n),i.airbase&&oE(n),i.pollution&&lE(n),i.specials.forEach(([o,c],u)=>cE(n,Rx(o,c),n.claim(...Up.special(u),.1),u+1)),i.hut&&uE(n,n.claim(...Up.hut,.13));let a=xa(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?mE(n,i,a):dE(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),gE=l((i,e,t)=>{let n=kp();return t.forEach(({overlay:s,place:r})=>Wp(s,r,n)),Xp(i,e,n)},"overlayMesh"),Xp=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Vx=gE;var Ps,ln,ai,Vo,oi,Fn,_n,ya,Ho,dr,Wo,Xo,yt,Hx,$p,Zp,ih,sh,Wx,Go,Jp=class Jp{constructor(e){j(this,yt);j(this,Ps);j(this,ln);j(this,ai,[]);j(this,Vo);j(this,oi);j(this,Fn,new Set);j(this,_n,null);j(this,ya,null);j(this,Ho,new Map);j(this,dr,[0,0]);j(this,Wo);j(this,Xo);H(this,oi,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=gx({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),H(this,Ps,bx({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:l((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:l((d,p)=>t.directions().map(g=>t.neighbour(d,p,g)).filter(g=>g!==null),"neighbours")}})),H(this,ln,Mx(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[g,y]=this.layout.centre(d,p);return Math.hypot(g-a,y-o)}));H(this,Vo,1.2+c+Ji*Math.SQRT2+Math.max((Ti.reach-1)*u,u/2+Ji*Math.SQRT2+eh));let h=this.layout.outline(0,0),f=h.flatMap(([d,p],g)=>{let[y,_]=h[(g+1)%h.length],x=Math.hypot(y-d,_-p);return x===0?[]:[{away:Math.abs((y-d)*(o-p)-(_-p)*(a-d))/x,normal:[(_-p)/x,(d-y)/x]}]});H(this,Wo,Math.min(...f.map(({away:d})=>d))),H(this,Xo,Math.min(...f.map(({away:d,normal:[p,g]})=>d/(Math.abs(p)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=m(this,ln),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,_)=>{let x=`${y},${_}`,w=n.get(x);return w===void 0&&(w=m(this,Ps).height(y*s,_*r),n.set(x,w)),w},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(p-f)*u;let g=h(a+1,o+1);return g+(p-g)*(1-c)+(d-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=m(this,ln);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return m(this,ln).chunksV*m(this,ln).stepsV*m(this,ln).spacingV}heightAt(e,t){return m(this,Ps).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=m(this,ln),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);H(this,ai,V(this,yt,Go).call(this,r,e,t)),H(this,dr,[e,t]),r.forEach(a=>m(this,Fn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return[];H(this,dr,[t,n]),(e.length===0?[...V(this,yt,sh).call(this).values()].flat():V(this,yt,Wx).call(this,e)).forEach(([o,c])=>{let u=V(this,yt,ih).call(this,o,c);if(m(this,Fn).has(u)||m(this,_n)?.key===u&&!V(this,yt,Hx).call(this,m(this,_n),o,c))return;JSON.stringify(V(this,yt,$p).call(this,o,c))!==(m(this,Ho).get(`${o},${c}`)??"null")&&m(this,Fn).add(u)});let r=m(this,Ps).refresh(s?void 0:e);if(r.length===0)return r;let a=wx(m(this,ln),this.layout,r,m(this,Vo)).map(([o,c])=>`${o},${c}`);return H(this,ai,V(this,yt,Go).call(this,[...new Set([...m(this,ai),...a])],t,n)),r}refocus(e,t){H(this,ai,V(this,yt,Go).call(this,m(this,ai),e,t)),H(this,dr,[e,t])}pending(){return m(this,ai).length}overlaysPending(){return m(this,Fn).size+(m(this,_n)===null||m(this,Fn).has(m(this,_n).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;m(this,ai).length>0;){if(s())return;let r=m(this,ai).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,Sx(m(this,ln),m(this,Ps),a,o)),m(this,Fn).add(r)}for(;m(this,Fn).size>0||m(this,_n)!==null;){if(m(this,_n)!==null&&m(this,Fn).has(m(this,_n).key)&&H(this,_n,null),m(this,_n)===null){let d=V(this,yt,Go).call(this,[...m(this,Fn)],...m(this,dr))[0];m(this,Fn).delete(d),H(this,_n,{key:d,squares:V(this,yt,sh).call(this).get(d)??[],done:0,laid:kp(),heights:new Map})}let r=m(this,_n);for(;r.done<r.squares.length;){let[d,p]=r.squares[r.done],g=V(this,yt,Zp).call(this,d,p,r.heights);if(r.done++,g!==null&&Wp(g.overlay,g.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=m(this,ln);H(this,_n,null),e.setOverlay(a,o,r.laid.positions.length===0?null:Xp(a*c*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=m(this,ln),o=new Map,c=(V(this,yt,sh).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>V(this,yt,Zp).call(this,u,h,o)??[]);return c.length===0?null:Vx(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return V(this,yt,ih).call(this,e,t)}};Ps=new WeakMap,ln=new WeakMap,ai=new WeakMap,Vo=new WeakMap,oi=new WeakMap,Fn=new WeakMap,_n=new WeakMap,ya=new WeakMap,Ho=new WeakMap,dr=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,yt=new WeakSet,Hx=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),$p=l(function(e,t){let n=m(this,oi).topology();return Ax(m(this,oi).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:m(this,oi).get(r[0],r[1])}]}))},"#overlayAt"),Zp=l(function(e,t,n){let s=V(this,yt,$p).call(this,e,t);if(m(this,Ho).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t),o=m(this,oi).topology();return{overlay:s,place:{centre:[r,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:m(this,Wo),inner:m(this,Xo),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,f]=this.layout.tileAt(c,u);return h===e&&f===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),ih=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=m(this,ln),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),sh=l(function(){if(m(this,ya)===null){let e=new Map;for(let t=0;t<m(this,oi).height();t++)for(let n=0;n<m(this,oi).width();n++){let s=V(this,yt,ih).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}H(this,ya,e)}return m(this,ya)},"#chunksOfSquares"),Wx=l(function(e){let t=m(this,oi).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),Go=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=m(this,ln),c=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),p=l(g=>{let[y,_]=g.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((_+.5)*u-n,f))},"distance");return[...e].sort((g,y)=>p(g)-p(y))},"#nearestFirst"),l(Jp,"Land");var Yp=Jp,Xx=Yp;var xE=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),ba=xE;var qx=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var _E=8,vE=.92,yE=.02,Yx=3,bE=50,ME=8,SE=10,$x=250,qo,Yo,Ma,Sa,fr,Is,Kp=class Kp{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){j(this,qo);j(this,Yo);j(this,Ma);j(this,Sa);j(this,fr,!1);j(this,Is);this.pointerId=e,H(this,qo,t),H(this,Yo,n),H(this,Ma,t),H(this,Sa,n),H(this,Is,[{x:t,y:n,time:s}])}dragging(){return m(this,fr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!m(this,fr)&&Math.hypot(t-m(this,qo),n-m(this,Yo))<_E)return null;let r=!m(this,fr),a=m(this,Ma)-t,o=m(this,Sa)-n;return H(this,fr,!0),H(this,Ma,t),H(this,Sa,n),m(this,Is).push({x:t,y:n,time:s}),m(this,Is).length>20&&m(this,Is).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return qx(m(this,Is),e)}};qo=new WeakMap,Yo=new WeakMap,Ma=new WeakMap,Sa=new WeakMap,fr=new WeakMap,Is=new WeakMap,l(Kp,"Press");var rh=Kp,Ai,$o,Qp=class Qp{constructor(e){j(this,Ai,null);j(this,$o);H(this,$o,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>Yx?Yx/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<yE){H(this,Ai,null);return}m(this,$o).call(this,-s*u,-r*u);let h=Math.pow(vE,u/16);s*=h,r*=h,H(this,Ai,window.requestAnimationFrame(o))},"step");H(this,Ai,window.requestAnimationFrame(o))}gliding(){return m(this,Ai)!==null}stop(){m(this,Ai)!==null&&(window.cancelAnimationFrame(m(this,Ai)),H(this,Ai,null))}};Ai=new WeakMap,$o=new WeakMap,l(Qp,"Glide");var ah=Qp,pr,Zo,Jo,wa,jp=class jp{constructor(){j(this,pr,0);j(this,Zo,0);j(this,Jo,-1/0);j(this,wa,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=$x)return 0;let r=Math.sign(s),a=e.timeStamp-m(this,Jo)>$x||r!==m(this,Zo);if(H(this,Jo,e.timeStamp),H(this,Zo,r),a&&(H(this,pr,0),H(this,wa,0)),n&&!e.ctrlKey&&m(this,wa)>=SE)return 0;if(!a&&n){if(H(this,pr,m(this,pr)+s),Math.abs(m(this,pr))<(e.ctrlKey?ME:bE))return 0;H(this,pr,0)}return n&&!e.ctrlKey&&H(this,wa,m(this,wa)+1),s<0?1:-1}};pr=new WeakMap,Zo=new WeakMap,Jo=new WeakMap,wa=new WeakMap,l(jp,"WheelTurn");var oh=jp;var wE=350,EE=.006,Zx=.004,Ci,Kt,vn,Ea,Ri,li,hh,qn,Yn,Ls,Ta,On,Ds,Re,Xn,lh,ch,Jx,tm,Ki,nm,Kx,Qi,Qx,jx,e_,t_,Ko,n_,i_,s_,uh,im=class im{constructor(e,t,n=null){j(this,Re);j(this,Ci);j(this,Kt);j(this,vn,null);j(this,Ea,[0,0]);j(this,Ri,null);j(this,li);j(this,hh,new oh);j(this,qn,new Map);j(this,Yn,null);j(this,Ls,null);j(this,Ta,[]);j(this,On);j(this,Ds,null);H(this,Ci,e),H(this,Kt,t),H(this,On,n),H(this,li,new ah((s,r)=>{let[a,o]=V(this,Re,Jx).call(this);V(this,Re,nm).call(this,[a,o],[a-s,o-r])})),V(this,Re,Xn).call(this,"pointerdown",s=>V(this,Re,Kx).call(this,s)),V(this,Re,Xn).call(this,"pointermove",s=>V(this,Re,jx).call(this,s)),V(this,Re,Xn).call(this,"pointerup",s=>V(this,Re,e_).call(this,s)),V(this,Re,Xn).call(this,"pointercancel",s=>V(this,Re,t_).call(this,s)),V(this,Re,Xn).call(this,"wheel",s=>V(this,Re,i_).call(this,s),{passive:!1}),V(this,Re,Xn).call(this,"gesturestart",s=>V(this,Re,uh).call(this,s,"start"),{passive:!1}),V(this,Re,Xn).call(this,"gesturechange",s=>V(this,Re,uh).call(this,s,"change"),{passive:!1}),V(this,Re,Xn).call(this,"gestureend",s=>V(this,Re,uh).call(this,s,"end"),{passive:!1}),V(this,Re,Xn).call(this,"contextmenu",s=>V(this,Re,Qx).call(this,s)),V(this,Re,Xn).call(this,"pointerleave",()=>m(this,On)?.hover(null)),V(this,Re,Xn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return m(this,vn)?.dragging()===!0||m(this,Ri)!==null}moving(){return this.dragging()||m(this,Yn)!==null||m(this,li).gliding()}dispose(){m(this,li).stop(),V(this,Re,Qi).call(this),m(this,Ta).forEach(([e,t,n])=>m(this,Ci).removeEventListener(e,t,n)),H(this,Ta,[])}};Ci=new WeakMap,Kt=new WeakMap,vn=new WeakMap,Ea=new WeakMap,Ri=new WeakMap,li=new WeakMap,hh=new WeakMap,qn=new WeakMap,Yn=new WeakMap,Ls=new WeakMap,Ta=new WeakMap,On=new WeakMap,Ds=new WeakMap,Re=new WeakSet,Xn=l(function(e,t,n){m(this,Ci).addEventListener(e,t,n),m(this,Ta).push([e,t,n])},"#listen"),lh=l(function(){return{width:m(this,Ci).clientWidth||1,height:m(this,Ci).clientHeight||1}},"#box"),ch=l(function([e,t]){let{width:n,height:s}=V(this,Re,lh).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),Jx=l(function(){let{width:e,height:t}=V(this,Re,lh).call(this);return[e/2,t/2]},"#middle"),tm=l(function(){let{width:e,height:t}=V(this,Re,lh).call(this);return e/t},"#aspect"),Ki=l(function(e){let t=m(this,Ci).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),nm=l(function(e,t){m(this,Kt).setOrbit(Jg(m(this,Kt).orbit(),m(this,Kt).lookHeight(),V(this,Re,ch).call(this,e),V(this,Re,ch).call(this,t),V(this,Re,tm).call(this)))},"#pan"),Kx=l(function(e){if(m(this,li).stop(),m(this,On)?.hover(null),e.pointerType==="touch"&&(m(this,qn).set(e.pointerId,V(this,Re,Ki).call(this,e)),m(this,qn).size===2)){H(this,vn,null),V(this,Re,Qi).call(this),H(this,Yn,V(this,Re,Ko).call(this));return}if(e.isPrimary&&e.button!==2){if(m(this,Ci).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),H(this,Ri,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new rh(e),[n,s]=V(this,Re,Ki).call(this,e),{clientX:r,clientY:a}=e;H(this,vn,t),H(this,Ea,[n,s]),V(this,Re,Qi).call(this),H(this,Ds,window.setTimeout(()=>{H(this,Ds,null),m(this,vn)===t&&!t.dragging()&&m(this,On)?.menu(n,s,r,a,!0)===!0&&H(this,vn,null)},wE))}}},"#down"),Qi=l(function(){m(this,Ds)!==null&&(window.clearTimeout(m(this,Ds)),H(this,Ds,null))},"#stopHold"),Qx=l(function(e){if(m(this,On)===null||!m(this,On).menuOnRightClick()||(e.preventDefault(),m(this,On).menuOpen()))return;let[t,n]=V(this,Re,Ki).call(this,e);m(this,On).menu(t,n,e.clientX,e.clientY,!1)&&(V(this,Re,Qi).call(this),H(this,vn,null))},"#rightClick"),jx=l(function(e){if(m(this,qn).has(e.pointerId)&&(m(this,qn).set(e.pointerId,V(this,Re,Ki).call(this,e)),m(this,Yn)!==null)){V(this,Re,n_).call(this);return}let t=m(this,Ri);if(t!==null&&t.pointerId===e.pointerId){let r=m(this,Kt).orbit();m(this,Kt).setOrbit(lr({...r,yaw:r.yaw-(e.clientX-t.x)*EE,pitch:r.pitch+(e.clientY-t.y)*Zx})),t.x=e.clientX,t.y=e.clientY;return}let n=m(this,vn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!m(this,li).gliding()){let[r,a]=V(this,Re,Ki).call(this,e);m(this,On)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;V(this,Re,Qi).call(this);let s=V(this,Re,Ki).call(this,e);V(this,Re,nm).call(this,m(this,Ea),s),H(this,Ea,s)},"#move"),e_=l(function(e){if(m(this,qn).delete(e.pointerId),m(this,Yn)!==null){H(this,Yn,m(this,qn).size<2?null:V(this,Re,Ko).call(this));return}if(m(this,Ri)?.pointerId===e.pointerId){H(this,Ri,null);return}let t=m(this,vn);if(!(t===null||t.pointerId!==e.pointerId)){if(H(this,vn,null),V(this,Re,Qi).call(this),!t.dragging()){let[n,s]=V(this,Re,Ki).call(this,e);m(this,On)?.click(n,s,e.clientX,e.clientY);return}ba()||m(this,li).start(t.releaseVelocity(e.timeStamp))}},"#up"),t_=l(function(e){m(this,qn).delete(e.pointerId),m(this,Yn)!==null&&H(this,Yn,m(this,qn).size<2?null:V(this,Re,Ko).call(this)),m(this,vn)?.pointerId===e.pointerId&&(H(this,vn,null),V(this,Re,Qi).call(this)),m(this,Ri)?.pointerId===e.pointerId&&H(this,Ri,null)},"#cancel"),Ko=l(function(){let[e,t]=[...m(this,qn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:m(this,Kt).orbit()}},"#measurePair"),n_=l(function(){let e=m(this,Yn),t=V(this,Re,Ko).call(this);e===null||t===null||m(this,Kt).setOrbit(lr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*Zx}))},"#twoFingers"),i_=l(function(e){e.preventDefault();let t=m(this,hh).turned(e,m(this,Ls)?.at??null);t!==0&&(m(this,li).stop(),V(this,Re,s_).call(this,t,V(this,Re,Ki).call(this,e)))},"#wheelTurned"),s_=l(function(e,t){let n=m(this,Kt).orbit(),s=pa(n,e),r=fa(n,m(this,Kt).lookHeight(),V(this,Re,ch).call(this,t),V(this,Re,tm).call(this));if(r===null||s.distance===n.distance){m(this,Kt).setOrbit(s);return}let a=1-s.distance/n.distance;m(this,Kt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),uh=l(function(e,t){if(e.preventDefault(),m(this,Yn)!==null){H(this,Ls,null);return}if(t==="end"){H(this,Ls,null);return}if(t==="start"){m(this,li).stop(),H(this,vn,null),V(this,Re,Qi).call(this),H(this,Ls,{orbit:m(this,Kt).orbit(),at:e.timeStamp});return}let n=m(this,Ls);n!==null&&(n.at=e.timeStamp,m(this,Kt).setOrbit(lr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(im,"CameraInput");var em=im,r_=em;var TE=["#9a9a9a","#4a4a4a"],Qo=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?TE:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),sm=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),AE=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),CE=l((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=sm(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Qo(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:Qo(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:AE(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),a_=CE;var RE=1,PE=.04,IE=12,LE=l((i,e,t,n,s,{water:r=0,ceiling:a=RE}={})=>{let{from:o,direction:c}=Mp(i,e,t,n),[u,h,f]=o,[d,p,g]=c;if(p>-1e-6)return null;let y=l(v=>[u+d*v,h+p*v,f+g*v],"at"),_=l(v=>{let[S,D,P]=y(v);return D-Math.max(r,s(S,P))},"above"),x=Math.max(0,(h-a)/-p),w=(h-r)/-p,R=PE/Math.max(1e-6,Math.hypot(d,g)),E=x;for(let v=x;;v=Math.min(w,v+R)){if(_(v)<=0){let S=E,D=v;for(let G=0;G<IE;G++){let J=(S+D)/2;_(J)>0?S=J:D=J}let[P,,O]=y(D);return[P,O]}if(v>=w)break;E=v}let[C,,T]=y(w);return[C,T]},"pickGround"),o_=LE;var dh=4,Ns,jo,mr,gr,Sn,Aa,Us,ji,el,tl,nl,ci,fh,l_,am,om=class om{constructor(e,t,n,s,r){j(this,ci);j(this,Ns);j(this,jo);j(this,mr);j(this,gr);j(this,Sn);j(this,Aa);j(this,Us);j(this,ji);j(this,el);j(this,tl);j(this,nl,l(e=>{let t=m(this,Ns).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;m(this,tl).call(this,n*m(this,Sn),s*m(this,Aa))},"#click"));H(this,Ns,e),H(this,mr,t),H(this,gr,n),H(this,Sn,t.period().u),H(this,Aa,s),H(this,tl,r),H(this,ji,document.createElement("canvas"));let{v:a}=t.period();H(this,Us,a),H(this,el,[[0,0],[-m(this,Sn),0],...a===null?[]:[[0,-a],[-m(this,Sn),-a]]]);let o=Math.max(1,Math.round(m(this,Sn)*dh)),c=Math.max(1,Math.round(m(this,Aa)*dh));[e,m(this,ji)].forEach(u=>{u.width=o,u.height=c}),H(this,jo,e.getContext("2d")),e.addEventListener("click",m(this,nl))}dispose(){m(this,Ns).removeEventListener("click",m(this,nl))}redraw(){let e=m(this,ji).getContext("2d");if(e===null)return;let t=m(this,gr).width(),n=m(this,gr).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,m(this,ji).width,m(this,ji).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=m(this,gr).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Qu(c).colour,m(this,el).forEach(([f,d])=>{V(this,ci,l_).call(this,e,a,r,f,d),e.fill()});let[u,h]=m(this,mr).centre(a,r);if(o.city)s.push([u,h,Qo(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=sm(o.units,null);f!==null&&s.push([u,h,Qo(f.player)[0],1.4])}}s.forEach(([r,a,o,c])=>V(this,ci,am).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=m(this,jo);if(n===null)return;if(n.clearRect(0,0,m(this,Ns).width,m(this,Ns).height),n.drawImage(m(this,ji),0,0),t!==null){let[h,f]=m(this,mr).centre(t.x,t.y);n.fillStyle="#ffffff",V(this,ci,am).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=m(this,Us),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-m(this,Sn)*Math.floor(r/m(this,Sn)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-m(this,Sn),0,m(this,Sn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],g)=>{let[y,_]=V(this,ci,fh).call(this,d+o+f,p+c+h);g===0?n.moveTo(y,_):n.lineTo(y,_)}),n.closePath(),n.stroke()}))}};Ns=new WeakMap,jo=new WeakMap,mr=new WeakMap,gr=new WeakMap,Sn=new WeakMap,Aa=new WeakMap,Us=new WeakMap,ji=new WeakMap,el=new WeakMap,tl=new WeakMap,nl=new WeakMap,ci=new WeakSet,fh=l(function(e,t){return[e*dh,t*dh]},"#px"),l_=l(function(e,t,n,s=0,r=0){e.beginPath(),m(this,mr).outline(t,n).forEach(([a,o],c)=>{let[u,h]=V(this,ci,fh).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),am=l(function(e,t){return(m(this,Us)===null?[0]:[-m(this,Us),0,m(this,Us)]).flatMap(s=>[-m(this,Sn),0,m(this,Sn)].map(r=>V(this,ci,fh).call(this,e+r,t+s)))},"#everywhere"),l(om,"Minimap3D");var rm=om,c_=rm;var DE=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),u_=l(i=>{let e=DE(i).sort((n,s)=>n._.charCodeAt(0)-s._.charCodeAt(0)).flatMap(({_:n,value:s})=>Array.from({length:s},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,s)=>({_:n,column:s%t,row:Math.floor(s/t)}))}},"tileYieldGrid");var h_=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),d_=l(i=>i.city??i.workedBy??null,"squareCity");var NE=.9,UE=l(i=>{let{columns:e,icons:t}=u_(i),n=Math.min(e,t.length),s=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:a,row:o})=>({_:r,right:a-(n-1)/2,up:(s-1)/2-o}))}},"yieldSlots"),FE=l((i,e)=>NE*e/Math.hypot(i,2),"yieldIconSize"),f_=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return Math.hypot(o-t,c-n)}))},"innerOf"),p_=l(({at:i,yields:e},t)=>{let{columns:n,slots:s}=UE(e);return s.length===0?null:{at:i,size:FE(n,t),slots:s}},"laidYields"),m_=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},s=new Map,r=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=s.get(u);d===void 0&&(d=n.names.push(u)-1,s.set(u,d)),n.anchors[r*3]=a[0],n.anchors[r*3+1]=a[1],n.anchors[r*3+2]=a[2],n.slots[r*2]=h,n.slots[r*2+1]=f,n.sizes[r]=o,n.cells[r]=d,r++})}),n},"yieldMesh");var OE=10,BE=4e3,g_=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),zE=350,kE=500,GE=.25,VE=400,Gt,ol,ll,Qe,Qt,_r,cl,ul,ot,bt,wn,Ca,hl,vr,Os,Ra,dl,fl,Bn,pl,es,ui,ml,Pi,Bs,gl,zn,Pa,Ia,ts,ns,La,zs,yr,Da,is,xl,ss,br,_l,Mr,Ii,Sr,wr,vl,yl,Na,bl,Ua,Ml,Fa,Oa,Er,ue,cm,x_,ph,__,il,v_,y_,b_,um,mh,M_,S_,sl,Fs,rl,w_,E_,hm,xr,T_,A_,C_,dm,al,fm,R_,P_,pm,cn,I_,L_,mm,gm=class gm{constructor(e,t=ux){j(this,ue);j(this,Gt);j(this,ol);j(this,ll,[]);j(this,Qe);j(this,Qt);j(this,_r,null);j(this,cl,0);j(this,ul,"");j(this,ot);j(this,bt,null);j(this,wn,null);j(this,Ca);j(this,hl);j(this,vr);j(this,Os,null);j(this,Ra,null);j(this,dl);j(this,fl,!1);j(this,Bn);j(this,pl);j(this,es,new Map);j(this,ui,new Map);j(this,ml);j(this,Pi,null);j(this,Bs,null);j(this,gl);j(this,zn,l(()=>{let e=m(this,Bs);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),H(this,Bs,null),document.removeEventListener("keydown",m(this,zn),!0),e.open&&m(this,Bn).endTooltip(m(this,Gt)))},"#endHover"));j(this,Pa,null);j(this,Ia,!0);j(this,ts,new Map);j(this,ns,null);j(this,La,new Map);j(this,zs,new Map);j(this,yr,[]);j(this,Da,0);j(this,is,null);j(this,xl,null);j(this,ss,!0);j(this,br);j(this,_l,l(()=>{},"#stopUnitSize"));j(this,Mr,!1);j(this,Ii,!0);j(this,Sr,!1);j(this,wr,new Map);j(this,vl);j(this,yl,l(()=>{},"#stopArtChanged"));j(this,Na,!1);j(this,bl);j(this,Ua);j(this,Ml,"");j(this,Fa,l(()=>V(this,ue,mm).call(this),"#resizeHandler"));j(this,Oa,null);j(this,Er,!1);H(this,Gt,e.mapCanvas),H(this,ol,e.coveredBy),H(this,bl,e.art),H(this,pl,{cityName:e.cityName,unitStatus:e.unitStatus}),H(this,br,e.unitSize?.get()??1),H(this,Ua,e.art.id()),this.world=e.world,H(this,Qe,new Xx(e.world)),H(this,vl,f_(m(this,Qe).layout,e.world.topology())),H(this,yr,e.world.tiles()),H(this,Da,m(this,yr).length),H(this,hl,e.cameraDistance),H(this,dl,e.lockVerticalEdges);let n=e.cameraDistance.get();H(this,ot,V(this,ue,sl).call(this,{...$g(m(this,Qe).layout.centre(0,0)),...n===null?{}:{distance:n}})),H(this,vr,m(this,ot).distance),this.portal=new Dm(e,{centre:l(()=>V(this,ue,M_).call(this),"centre"),centreOn:l((s,r)=>V(this,ue,S_).call(this,s,r),"centreOn"),changed:l(()=>V(this,ue,cn).call(this),"changed"),visible:l((s,r,a)=>V(this,ue,__).call(this,s,r,a),"visible")}),H(this,Qt,t(e.mapCanvas,{period:m(this,Qe).layout.period(),ground:m(this,Qe).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&H(this,Pa,new c_(e.minimapCanvas,m(this,Qe).layout,e.world,m(this,Qe).extentV(),(s,r)=>V(this,ue,rl).call(this,{...m(this,bt)?.to??m(this,ot),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(H(this,_r,V(this,ue,I_).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),m(this,Qe).queueAll(...V(this,ue,mh).call(this)),V(this,ue,al).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),H(this,Bn,e.squares),H(this,gl,e.playerId),H(this,ml,e.transport),H(this,Ca,new r_(e.mapCanvas,{orbit:l(()=>m(this,ot),"orbit"),lookHeight:l(()=>m(this,wn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>V(this,ue,v_).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>V(this,ue,y_).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>m(this,Bn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>m(this,Bn).menuOpen(),"menuOpen"),hover:l(s=>V(this,ue,b_).call(this,s),"hover")})),window.addEventListener("resize",m(this,Fa)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(H(this,Oa,new ResizeObserver(m(this,Fa))),m(this,Oa).observe(e.mapCanvas.parentElement)),V(this,ue,mm).call(this),V(this,ue,cn).call(this),H(this,_l,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==m(this,br)&&!m(this,Er)&&(H(this,br,s),V(this,ue,al).call(this),V(this,ue,cn).call(this))})??(()=>{})),H(this,yl,e.artChanged?.(()=>{m(this,Er)||(H(this,Ii,!0),V(this,ue,cn).call(this))})??(()=>{}))}land(){return m(this,Qe)}orbit(){return m(this,ot)}moving(){return m(this,bt)!==null||m(this,Ca).moving()}setOrbit(e){m(this,zn).call(this),H(this,bt,null),H(this,ot,V(this,ue,sl).call(this,e)),V(this,ue,cn).call(this)}activeUnit(){return{unit:m(this,is),pendingTile:m(this,xl)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=m(this,bt)?.to??m(this,ot);V(this,ue,rl).call(this,{...t,yaw:t.yaw+e*yp},V(this,ue,cm).call(this)+e*yp)}heading(){return{turn:(m(this,bt)?.to??m(this,ot)).yaw,directions:Nm(m(this,Qe).layout,this.world.topology())}}faceNorth(){V(this,ue,rl).call(this,{...m(this,bt)?.to??m(this,ot),yaw:0},g_(-m(this,ot).yaw))}debugViewModes(){return[]}dispose(){V(this,ue,pm).call(this,!0),H(this,Er,!0),m(this,_l).call(this),m(this,yl).call(this),m(this,zn).call(this),m(this,Ca).dispose(),m(this,Pa)?.dispose(),window.removeEventListener("resize",m(this,Fa)),m(this,Oa)?.disconnect(),m(this,ns)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(m(this,ns)),H(this,ns,null),m(this,_r)?.remove(),m(this,Qt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=m(this,Pi);e!==null&&(H(this,Pi,null),m(this,Gt).classList.remove("picking-tile"),e.window?.close())}flush(){V(this,ue,hm).call(this),V(this,ue,cn).call(this)}mapEvent(e){if(e.kind==="moved"){V(this,ue,x_).call(this,e.unit.id,e.from,e.to),V(this,ue,ph).call(this,e.unit.id,e.from,e.to);return}V(this,ue,ph).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),V(this,ue,ph).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=m(this,Gt).getBoundingClientRect();H(this,ll,m(this,ol).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};H(this,Pi,s),m(this,Gt).classList.add("picking-tile"),s.window=m(this,Bn).prompt(n,()=>{m(this,Pi)===s&&(H(this,Pi,null),m(this,Gt).classList.remove("picking-tile"))})}picking(){return m(this,Pi)!==null}queueTile(e){m(this,La).set(`${e.x},${e.y}`,e)}redrawArt(){let e=m(this,bl).id();return e===m(this,Ua)?"unchanged":(H(this,Ua,e),H(this,Ii,!0),"redrawn")}releaseTiles(){m(this,La).forEach((e,t)=>m(this,zs).set(t,e)),m(this,La).clear(),m(this,zs).size>0&&V(this,ue,cn).call(this)}setActiveUnit(e,t){let n=m(this,is)?.tile;H(this,is,e),H(this,xl,t??null),[n,e?.tile].forEach(s=>{s&&V(this,ue,xr).call(this,s.x,s.y)}),V(this,ue,cn).call(this)}setWaiting(e){H(this,Na,e),e&&m(this,zn).call(this)}showActiveUnit(e){m(this,ss)||(H(this,ss,!0),V(this,ue,al).call(this),V(this,ue,cn).call(this))}shown(){return{units:m(this,ss),yields:m(this,Mr),waiting:m(this,Na)}}tilesPending(){return m(this,zs).size}toggleUnits(){H(this,ss,!m(this,ss)),V(this,ue,al).call(this),V(this,ue,cn).call(this)}toggleYields(){H(this,Mr,!m(this,Mr)),H(this,Ii,!0),V(this,ue,cn).call(this)}zoomBy(e){m(this,zn).call(this),H(this,ot,pa(m(this,ot),e)),m(this,bt)!==null&&(m(this,bt).from=pa(m(this,bt).from,e),m(this,bt).to=pa(m(this,bt).to,e)),V(this,ue,cn).call(this)}};Gt=new WeakMap,ol=new WeakMap,ll=new WeakMap,Qe=new WeakMap,Qt=new WeakMap,_r=new WeakMap,cl=new WeakMap,ul=new WeakMap,ot=new WeakMap,bt=new WeakMap,wn=new WeakMap,Ca=new WeakMap,hl=new WeakMap,vr=new WeakMap,Os=new WeakMap,Ra=new WeakMap,dl=new WeakMap,fl=new WeakMap,Bn=new WeakMap,pl=new WeakMap,es=new WeakMap,ui=new WeakMap,ml=new WeakMap,Pi=new WeakMap,Bs=new WeakMap,gl=new WeakMap,zn=new WeakMap,Pa=new WeakMap,Ia=new WeakMap,ts=new WeakMap,ns=new WeakMap,La=new WeakMap,zs=new WeakMap,yr=new WeakMap,Da=new WeakMap,is=new WeakMap,xl=new WeakMap,ss=new WeakMap,br=new WeakMap,_l=new WeakMap,Mr=new WeakMap,Ii=new WeakMap,Sr=new WeakMap,wr=new WeakMap,vl=new WeakMap,yl=new WeakMap,Na=new WeakMap,bl=new WeakMap,Ua=new WeakMap,Ml=new WeakMap,Fa=new WeakMap,Oa=new WeakMap,Er=new WeakMap,ue=new WeakSet,cm=l(function(){let e=m(this,bt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),x_=l(function(e,t,n){let s=performance.now(),r=m(this,ui).get(e);if(m(this,ui).forEach(({until:_},x)=>{_<s&&m(this,ui).delete(x)}),typeof requestAnimationFrame!="function"||ba())return;let[a,o]=m(this,Qe).layout.centre(t.x,t.y),[c,u]=m(this,Qe).layout.centre(n.x,n.y),{u:h,v:f}=m(this,Qe).layout.period(),d=l((_,x)=>x===null?_:_-x*Math.round(_/x),"short"),[p,g,y]=(r!==void 0&&r.until>=s?r.from:null)??m(this,Qt).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,m(this,Qe).surfaceAt(a,o)),o];m(this,ui).set(e,{from:[c+d(p-c,h),g,u+d(y-u,f)],to:`${n.x},${n.y}`,until:s+2e3})},"#setOff"),ph=l(function(e,t,n){let[s,r]=m(this,Qe).layout.centre(t.x,t.y),[a,o]=m(this,Qe).layout.centre(n.x,n.y),{u:c,v:u}=m(this,Qe).layout.period(),h=l((p,g)=>g===null?p:p-g*Math.round(p/g),"short"),f=h(a-s,c),d=h(o-r,u);f===0&&d===0||(m(this,es).delete(e),m(this,es).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),m(this,es).size>BE&&m(this,es).delete(m(this,es).keys().next().value),[t,n].forEach(({x:p,y:g})=>V(this,ue,xr).call(this,p,g)),V(this,ue,cn).call(this))},"#face"),__=l(function(e,t,n){let s=m(this,Gt).clientWidth,r=m(this,Gt).clientHeight;if(s<=0||r<=0)return!1;let a=m(this,bt)?.to??m(this,ot),[o,c]=m(this,Qe).layout.centre(e,t),{u,v:h}=V(this,ue,Fs).call(this),[f,d]=a.focus,p=l((v,S,D)=>D===null?v:v+D*Math.round((S-v)/D),"nearest"),g=[p(o,f,u),Math.max(0,m(this,Qe).heightAt(o,c)),p(c,d,h)],y=s/r,_=m(this,wn)??0,x=bp(a,_,g,y),w=bp(a,_,[g[0]+Math.cos(a.yaw),g[1],g[2]+Math.sin(a.yaw)],y);if(x===null||w===null)return!1;let R=(x[0]+1)/2*s,E=(1-x[1])/2*r,C=Math.abs(w[0]-x[0])*(s/2),T=(n+.5)*C;return R>=T&&R<=s-T&&E>=T&&E<=r-T&&!m(this,ll).some(({left:v,top:S,right:D,bottom:P})=>R>=v-C/2&&R<=D+C/2&&E>=S-C/2&&E<=P+C/2)},"#visible"),il=l(function(e,t){let n=m(this,Gt).clientWidth,s=m(this,Gt).clientHeight;if(n<=0||s<=0)return null;let r=o_(m(this,ot),m(this,wn)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>m(this,Qe).heightAt(f,d));if(r===null)return null;let[a,o]=m(this,Qe).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(V(this,ue,Fs).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),v_=l(function(e,t){let n=V(this,ue,il).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=m(this,Pi);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&m(this,Bn).click(this.portal,n)},"#clicked"),y_=l(function(e,t,n,s,r){let a=m(this,is),o=V(this,ue,il).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),m(this,Bn).menu(this.portal,n,s,a,o,m(this,ml),r),!0)},"#menu"),b_=l(function(e){let t=e===null||m(this,Na)||m(this,Bn).menuOpen()?null:V(this,ue,il).call(this,e.x,e.y),n=m(this,Bs);if(t===null||e===null){m(this,zn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}m(this,zn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,V(this,ue,um).call(this,r)},VE),H(this,Bs,r),document.addEventListener("keydown",m(this,zn),!0)},"#hovered"),um=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===m(this,Gt),n=t?V(this,ue,il).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){m(this,zn).call(this);return}let s=m(this,Bn).tooltip(m(this,Gt),n,m(this,gl),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&m(this,Bn).endTooltip(m(this,Gt)),e.open=s},"#showHover"),mh=l(function(){return[...m(this,ot).focus]},"#focus"),M_=l(function(){let[e,t]=m(this,Qe).layout.tileAt(...m(this,ot).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:V(this,ue,Fs).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),S_=l(function(e,t){let[n,s]=m(this,Qe).layout.centre(e,t),[r,a]=(m(this,bt)?.to??m(this,ot)).focus;if(n===r&&s===a)return;let o={...m(this,bt)?.to??m(this,ot),focus:[n,s]},{u:c,v:u}=V(this,ue,Fs).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[f,d]=m(this,ot).focus,p=Math.hypot(h(n-f,c),h(s-d,u));if(!m(this,fl)||p>m(this,ot).distance*1.5){H(this,fl,!0),this.setOrbit(o);return}V(this,ue,rl).call(this,o)},"#centreOn"),sl=l(function(e){return Kg(lr(e),V(this,ue,Fs).call(this),m(this,Qe).extentV())},"#settle"),Fs=l(function(){let e=m(this,Qe).layout.period();return this.portal?.lockVerticalEdges()??m(this,dl)?{u:e.u,v:null}:e},"#period"),rl=l(function(e,t=V(this,ue,cm).call(this)+g_(e.yaw-(m(this,bt)?.to??m(this,ot)).yaw)){m(this,zn).call(this),typeof requestAnimationFrame!="function"||ba()?(H(this,bt,null),H(this,ot,V(this,ue,sl).call(this,e))):H(this,bt,{from:m(this,ot),to:e,started:null,turn:t,drawn:0}),V(this,ue,cn).call(this)},"#moveTo"),w_=l(function(e){let t=m(this,bt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/zE);return t.drawn=n*n*(3-2*n),H(this,ot,V(this,ue,sl).call(this,Qg(t.from,t.to,n,V(this,ue,Fs).call(this),t.turn))),n>=1&&H(this,bt,null),n<1},"#moveCamera"),E_=l(function(e){let[t,n]=m(this,ot).focus,s=Math.max(0,m(this,Qe).heightAt(t,n));return!e||m(this,wn)===null||ba()?(H(this,wn,s),!1):(H(this,wn,m(this,wn)+(s-m(this,wn))*GE),Math.abs(s-m(this,wn))<.002?(H(this,wn,s),!1):!0)},"#followHeight"),hm=l(function(){let e=[...m(this,zs).values()].map(({x:o,y:c})=>[o,c]),t=this.world.tiles(),n=t!==m(this,yr)||t.length!==m(this,Da);H(this,yr,t),H(this,Da,t.length),m(this,zs).clear();let s=V(this,ue,A_).call(this,m(this,Qe).changed(e,...V(this,ue,mh).call(this),n)),r=new Set(e.map(([o,c])=>`${o},${c}`));e.forEach(([o,c])=>V(this,ue,xr).call(this,o,c)),s.forEach(([o,c])=>{let u=`${o},${c}`;!n&&!r.has(u)&&m(this,ts).has(u)&&V(this,ue,xr).call(this,o,c)}),V(this,ue,T_).call(this,e,s);let a=m(this,Bs);a!==null&&a.open&&e.some(([o,c])=>o===a.x&&c===a.y)&&V(this,ue,um).call(this,a),(e.length>0||n)&&H(this,Ia,!0),n&&(H(this,Ii,!0),m(this,ts).forEach((o,c)=>{let[u,h]=c.split(",").map(Number);V(this,ue,xr).call(this,u,h)}))},"#takeTiles"),xr=l(function(e,t){let n=`${e},${t}`,s=a_(this.world.get(e,t),m(this,is)?.id??null,m(this,ss),m(this,pl),d=>m(this,es).get(d.id)??0,m(this,br)),[r,a]=m(this,Qe).layout.centre(e,t),o=[r,Math.max(0,m(this,Qe).surfaceAt(r,a)),a],c=s===null?null:JSON.stringify([s,o]),u=c!==(m(this,ts).get(n)??null);if(u&&m(this,Qt).setMarker(n,o,s),m(this,ui).size===0){u&&V(this,ue,dm).call(this,n,c);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));m(this,ui).forEach((d,p)=>{if(d.until<h){m(this,ui).delete(p);return}d.to!==n||!f.has(p)||(m(this,ui).delete(p),u&&s?.unit?.id===p&&m(this,Qt).slideMarker(n,d.from))}),u&&V(this,ue,dm).call(this,n,c)},"#mark"),T_=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,s])=>m(this,wr).delete(`${n},${s}`)),t.forEach(([n,s])=>m(this,wr).delete(`${n},${s}`)),H(this,Ii,!0))},"#yieldsChanged"),A_=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([s,r])=>{n.set(`${s},${r}`,[s,r]),t.directions().forEach(a=>{let o=t.neighbour(s,r,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),C_=l(function(){if(!m(this,Mr)){m(this,Sr)&&(m(this,Qt).setYields(null),H(this,Sr,!1));return}if(!m(this,Ii)&&m(this,Sr))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,s=h_(t,d_(t)),r=m(this,wr).get(n);if(r===void 0||r.of!==s){let[a,o]=m(this,Qe).layout.centre(t.x,t.y);r={of:s,laid:s.length===0?null:p_({at:[a,Math.max(0,m(this,Qe).surfaceAt(a,o)),o],yields:s},m(this,vl))},m(this,wr).set(n,r)}r.laid!==null&&e.push(r.laid)}),m(this,Qt).setYields(m_(e)),H(this,Ii,!1),H(this,Sr,!0)},"#showYields"),dm=l(function(e,t){t===null?m(this,ts).delete(e):m(this,ts).set(e,t)},"#remember"),al=l(function(){let e=new Set(m(this,ts).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);V(this,ue,xr).call(this,n,s)})},"#markAll"),fm=l(function(e){let t=performance.now(),n=V(this,ue,w_).call(this,t),[s,r]=V(this,ue,mh).call(this);V(this,ue,hm).call(this),`${s},${r}`!==m(this,ul)&&(H(this,ul,`${s},${r}`),m(this,Qe).refocus(s,r)),m(this,Qe).build(m(this,Qt),e);let a=V(this,ue,E_).call(this,e!==null);V(this,ue,C_).call(this),m(this,Qt).view(m(this,ot),m(this,wn)??0,V(this,ue,Fs).call(this)),m(this,Qt).render(),V(this,ue,R_).call(this),V(this,ue,pm).call(this),H(this,cl,performance.now()-t),V(this,ue,L_).call(this),(m(this,Qe).pending()>0||m(this,Qe).overlaysPending()>0||m(this,Qt).sliding()||n||a)&&V(this,ue,cn).call(this)},"#frameDrawn"),R_=l(function(){let e=m(this,Pa);if(e===null)return;m(this,Ia)&&(H(this,Ia,!1),e.redraw());let t=m(this,is)?.tile??null;e.show(V(this,ue,P_).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),P_=l(function(){let e=m(this,Gt).clientWidth,t=m(this,Gt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=m(this,wn)??0,r=Yu(m(this,ot).distance).far,[a,o]=m(this,ot).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=fa(m(this,ot),s,[h,d],n);if(p!==null){let g=Math.hypot(p[0]-a,p[1]-o),y=g>r?r/g:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),pm=l(function(e=!1){let t=(e?m(this,bt)?.to??m(this,ot):m(this,ot)).distance,n=l(()=>{m(this,Os)!==null&&clearTimeout(m(this,Os)),H(this,Os,null),H(this,Ra,null)},"stop"),s=l(()=>{n(),H(this,vr,t),m(this,hl).set(t)},"keep");if(e){n(),t!==m(this,vr)&&s();return}if(m(this,bt)!==null||t===m(this,vr)){n();return}m(this,Os)!==null&&t===m(this,Ra)||(n(),H(this,Ra,t),H(this,Os,setTimeout(s,kE)))},"#keepDistance"),cn=l(function(){if(!m(this,Er)){if(typeof requestAnimationFrame!="function"){V(this,ue,fm).call(this,null);return}m(this,ns)===null&&H(this,ns,requestAnimationFrame(()=>{H(this,ns,null),V(this,ue,fm).call(this,OE)}))}},"#draw"),I_=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),L_=l(function(){if(m(this,_r)===null)return;let{drawCalls:e,triangles:t,geometries:n}=m(this,Qt).stats();m(this,_r).textContent=[`frame ${m(this,cl).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${m(this,Qe).pending()}`].join(`
`)},"#showStats"),mm=l(function(){let e=m(this,Gt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===m(this,Ml)||(H(this,Ml,r),m(this,Qt).resize(t,n,s),this.measureCovered(),m(this,Qt).render())},"#resize"),l(gm,"MapView3D");var lm=gm,D_=lm;var HE={createMapView3D:l(i=>new D_(i),"createMapView3D")};globalThis[Pm]=HE;})();
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
