"use strict";(()=>{var T_=Object.create;var dh=Object.defineProperty;var C_=Object.getOwnPropertyDescriptor;var R_=Object.getOwnPropertyNames;var P_=Object.getPrototypeOf,I_=Object.prototype.hasOwnProperty;var Mm=i=>{throw TypeError(i)};var l=(i,e)=>dh(i,"name",{value:e,configurable:!0});var L_=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var D_=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of R_(e))!I_.call(i,s)&&s!==t&&dh(i,s,{get:()=>e[s],enumerable:!(n=C_(e,s))||n.enumerable});return i};var N_=(i,e,t)=>(t=i!=null?T_(P_(i)):{},D_(e||!i||!i.__esModule?dh(t,"default",{value:i,enumerable:!0}):t,i));var fh=(i,e,t)=>e.has(i)||Mm("Cannot "+t);var m=(i,e,t)=>(fh(i,e,"read from private field"),t?t.call(i):e.get(i)),Q=(i,e,t)=>e.has(i)?Mm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),k=(i,e,t,n)=>(fh(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),z=(i,e,t)=>(fh(i,e,"access private method"),t);var Sm=(i,e,t,n)=>({set _(s){k(i,e,s,t)},get _(){return m(i,e,n)}});var Em=L_(Hs=>{"use strict";var li,rs=Hs&&Hs.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Hs,"__esModule",{value:!0}),Hs.EventEmitter=void 0;var ph=class ph{constructor(){li.set(this,{})}on(e,t){e in rs(this,li,"f")||(rs(this,li,"f")[e]=[]),rs(this,li,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in rs(this,li,"f")))return;let n=rs(this,li,"f")[e].indexOf(t);n!==-1&&rs(this,li,"f")[e].splice(n,1)}emit(e,...t){e in rs(this,li,"f")&&rs(this,li,"f")[e].forEach((n=>n(...t)))}};l(ph,"i");var yl=ph;Hs.EventEmitter=yl,li=new WeakMap,Hs.default=yl});var wm="civMap3D";var Am=N_(Em());var as,ci,wr,gh=class gh extends Am.EventEmitter{constructor(t,n){super();Q(this,as);Q(this,ci);Q(this,wr);k(this,ci,t),k(this,wr,t.lockVerticalEdges),k(this,as,n)}center(){return m(this,as).centre()}isVisible(t,n,s=0){return m(this,as).visible(t,n,s)}lockVerticalEdges(){return m(this,wr)}nativeTileSize(){return m(this,ci).art.nativeTileSize()}openCity(t){let{cityOpener:n}=m(this,ci);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return m(this,ci).playerId}render(){m(this,as).changed()}scale(){return m(this,ci).art.scale()}setCenter(t,n){m(this,as).centreOn(t,n)}setLockVerticalEdges(t){k(this,wr,t)}setZoom(){}transport(){return m(this,ci).transport}zoom(){return m(this,ci).art.zoom()}};as=new WeakMap,ci=new WeakMap,wr=new WeakMap,l(gh,"MapPortal3D");var mh=gh,Tm=mh;var U_=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return[s,[o-t,c-n]]}))},"groundDirections"),Cm=U_;var t0=0,Yh=1,n0=2;var po=1,zc=2,ta=3,Ss=0,dn=1,xi=2,$s=0,na=1,Zh=2,$h=3,Jh=4,i0=5;var Js=100,s0=101,r0=102,a0=103,o0=104,l0=200,c0=201,u0=202,h0=203,Kh=204,Qh=205,d0=206,f0=207,p0=208,m0=209,g0=210,x0=211,_0=212,v0=213,y0=214,ql=0,Yl=1,Zl=2,Xr=3,$l=4,Jl=5,Kl=6,Ql=7,jh=0,b0=1,M0=2,_i=0,ed=1,td=2,nd=3,mo=4,id=5,sd=6,rd=7;var ad=300,Ks=301,ia=302,kc=303,Gc=304,Zs=1e3,Gn=1001,jl=1002,Ct=1003,S0=1004;var go=1005;var kt=1006,Vc=1007;var Kn=1008;var gn=1009,od=1010,ld=1011,sa=1012,Hc=1013,Qn=1014,jn=1015,An=1016,Wc=1017,Xc=1018,Qs=1020,cd=35902,ud=35899,hd=1021,dd=1022,ei=1023,Gi=1026,qi=1027,fd=1028,qc=1029,vi=1030,Yc=1031;var Zc=1033,xo=33776,_o=33777,vo=33778,yo=33779,$c=35840,Jc=35841,Kc=35842,Qc=35843,jc=36196,eu=37492,tu=37496,nu=37488,iu=37489,bo=37490,su=37491,ru=37808,au=37809,ou=37810,lu=37811,cu=37812,uu=37813,hu=37814,du=37815,fu=37816,pu=37817,mu=37818,gu=37819,xu=37820,_u=37821,vu=36492,yu=36494,bu=36495,Mu=36283,Su=36284,Mo=36285,wu=36286;var Xa=2300,ec=2301,Wl=2302,kh=2303,Gh=2400,Vh=2401,Hh=2402;var w0=3200;var Eu=0,E0=1,Yi="",Tt="srgb",qa="srgb-linear",Ya="linear",rt="srgb";var Xl=7680;var A0=519,T0=512,C0=513,R0=514,pd=515,P0=516,I0=517,md=518,gd=519,xd=35044;var _d="300 es",Vn=2e3,qr=2001;function F_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(F_,"arrayNeedsUint32");function O_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(O_,"isTypedArray");function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(Za,"createElementNS");function L0(){let i=Za("canvas");return i.style.display="block",i}l(L0,"createCanvasElement");var Rm={},Yr=null;function $a(...i){let e="THREE."+i.shift();Yr?Yr("log",e,...i):console.log(e,...i)}l($a,"log");function D0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(D0,"enhanceLogMessage");function ke(...i){i=D0(i);let e="THREE."+i.shift();if(Yr)Yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(ke,"warn");function Ve(...i){i=D0(i);let e="THREE."+i.shift();if(Yr)Yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(Ve,"error");function Ha(...i){let e=i.join(" ");e in Rm||(Rm[e]=!0,ke(...i))}l(Ha,"warnOnce");function N0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(N0,"probeAsync");var U0={[ql]:ql,[Zl]:Kl,[$l]:$l,[Xr]:Jl,[Yl]:Yl,[Kl]:Zl,[Ql]:Ql,[Jl]:Xr},Sd=class Sd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(Sd,"EventDispatcher");var hi=Sd,Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xh=Math.PI/180,tc=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}l(js,"generateUUID");function et(i,e,t){return Math.max(e,Math.min(t,i))}l(et,"clamp");function B_(i,e){return(i%e+e)%e}l(B_,"euclideanModulo");function _h(i,e,t){return(1-t)*i+t*e}l(_h,"lerp");function F0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(F0,"floorPowerOfTwo");function Au(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Au,"getNormalizationScale");function O0(i,e){if(e.constructor===Float32Array)return i;let t=Au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(O0,"denormalize");function B0(i,e){if(e.constructor===Float32Array)return i;let t=Au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(B0,"normalize");var Sc=class Sc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Sc,"Vector2"),Sc.prototype.isVector2=!0;var Ge=Sc,wd=class wd{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],v=r[a+2],y=r[a+3];if(f!==y||c!==d||u!==p||h!==v){let _=c*d+u*p+h*v+f*y;_<0&&(d=-d,p=-p,v=-v,y=-y,_=-_);let x=1-o;if(_<.9995){let w=Math.acos(_),R=Math.sin(w);x=Math.sin(x*w)/R,o=Math.sin(o*w)/R,c=c*x+d*o,u=u*x+p*o,h=h*x+v*o,f=f*x+y*o}else{c=c*x+d*o,u=u*x+p*o,h=h*x+v*o,f=f*x+y*o;let w=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=w,u*=w,h*=w,f*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+h*f+c*p-u*d,e[t+1]=c*v+h*d+u*f-o*p,e[t+2]=u*v+h*p+o*d-c*f,e[t+3]=h*v-o*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*h*f+u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f+d*p*v;break;case"YZX":this._x=d*h*f+u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f-d*p*v;break;case"XZY":this._x=d*h*f-u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f+d*p*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(wd,"Quaternion");var cn=wd,wc=class wc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-r*f,this.z=s+c*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(wc,"Vector3"),wc.prototype.isVector3=!0;var G=wc,vh=new G,Pm=new cn,Ec=class Ec{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],v=n[8],y=s[0],_=s[3],x=s[6],w=s[1],R=s[4],A=s[7],C=s[2],E=s[5],g=s[8];return r[0]=a*y+o*w+c*C,r[3]=a*_+o*R+c*E,r[6]=a*x+o*A+c*g,r[1]=u*y+h*w+f*C,r[4]=u*_+h*R+f*E,r[7]=u*x+h*A+f*g,r[2]=d*y+p*w+v*C,r[5]=d*_+p*R+v*E,r[8]=d*x+p*A+v*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*r,p=u*r-a*c,v=t*f+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return e[0]=f*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,t)),this}rotate(e){return Ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return Ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Ec,"Matrix3"),Ec.prototype.isMatrix3=!0;var He=Ec,yh=new He,Im=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){let i={enabled:!0,workingColorSpace:qa,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===Yi?Ya:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qa]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}l(z_,"createColorManagement");var je=z_();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(ki,"SRGBToLinear");function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Wr,"LinearToSRGB");var Er,Ed=class Ed{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=Za("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Ed,"ImageUtils");var nc=Ed,k_=0,Ad=class Ad{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bh(s[a].image)):r.push(bh(s[a]))}else r=bh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(Ad,"TextureSource");var Zr=Ad;function bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}l(bh,"serializeImage");var G_=0,Mh=new G,Vr=class Vr extends hi{constructor(e=Vr.DEFAULT_IMAGE,t=Vr.DEFAULT_MAPPING,n=Gn,s=Gn,r=kt,a=Kn,o=ei,c=gn,u=Vr.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=js(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Vr,"Texture");var un=Vr;un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=ad;un.DEFAULT_ANISOTROPY=1;var Ac=class Ac{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],v=c[9],y=c[2],_=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+_)<.1&&Math.abs(u+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,A=(p+1)/2,C=(x+1)/2,E=(h+d)/4,g=(f+y)/4,S=(v+_)/4;return R>A&&R>C?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=g/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=E/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=g/r,s=S/r),this.set(n,s,r,t),this}let w=Math.sqrt((_-v)*(_-v)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(_-v)/w,this.y=(f-y)/w,this.z=(d-h)/w,this.w=Math.acos((u+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Ac,"Vector4"),Ac.prototype.isVector4=!0;var vt=Ac,Td=class Td extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Td,"RenderTarget");var ic=Td,Cd=class Cd extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Cd,"WebGLRenderTarget");var Sn=Cd,Rd=class Rd extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Rd,"DataArrayTexture");var Ja=Rd;var Pd=class Pd extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Pd,"Data3DTexture");var sc=Pd;var Wa=class Wa{constructor(e,t,n,s,r,a,o,c,u,h,f,d,p,v,y,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,f,d,p,v,y,_)}set(e,t,n,s,r,a,o,c,u,h,f,d,p,v,y,_){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=c,x[2]=u,x[6]=h,x[10]=f,x[14]=d,x[3]=p,x[7]=v,x[11]=y,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,v=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+v*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=v+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,v=u*h,y=u*f;t[0]=d+y*o,t[4]=v*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,v=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,v=o*h,y=o*f;t[0]=c*h,t[4]=v*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,v=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=v*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+v,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,v=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,H_)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),os.crossVectors(n,bn),os.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),os.crossVectors(n,bn)),os.normalize(),bl.crossVectors(bn,os),s[0]=os.x,s[4]=bl.x,s[8]=bn.x,s[1]=os.y,s[5]=bl.y,s[9]=bn.y,s[2]=os.z,s[6]=bl.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],v=n[2],y=n[6],_=n[10],x=n[14],w=n[3],R=n[7],A=n[11],C=n[15],E=s[0],g=s[4],S=s[8],D=s[12],I=s[1],N=s[5],F=s[9],B=s[13],P=s[2],X=s[6],ee=s[10],Z=s[14],$=s[3],V=s[7],q=s[11],ie=s[15];return r[0]=a*E+o*I+c*P+u*$,r[4]=a*g+o*N+c*X+u*V,r[8]=a*S+o*F+c*ee+u*q,r[12]=a*D+o*B+c*Z+u*ie,r[1]=h*E+f*I+d*P+p*$,r[5]=h*g+f*N+d*X+p*V,r[9]=h*S+f*F+d*ee+p*q,r[13]=h*D+f*B+d*Z+p*ie,r[2]=v*E+y*I+_*P+x*$,r[6]=v*g+y*N+_*X+x*V,r[10]=v*S+y*F+_*ee+x*q,r[14]=v*D+y*B+_*Z+x*ie,r[3]=w*E+R*I+A*P+C*$,r[7]=w*g+R*N+A*X+C*V,r[11]=w*S+R*F+A*ee+C*q,r[15]=w*D+R*B+A*Z+C*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],y=e[7],_=e[11],x=e[15],w=c*p-u*d,R=o*p-u*f,A=o*d-c*f,C=a*p-u*h,E=a*d-c*h,g=a*f-o*h;return t*(y*w-_*R+x*A)-n*(v*w-_*C+x*E)+s*(v*R-y*C+x*g)-r*(v*A-y*E+_*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],y=e[13],_=e[14],x=e[15],w=t*o-n*a,R=t*c-s*a,A=t*u-r*a,C=n*c-s*o,E=n*u-r*o,g=s*u-r*c,S=h*y-f*v,D=h*_-d*v,I=h*x-p*v,N=f*_-d*y,F=f*x-p*y,B=d*x-p*_,P=w*B-R*F+A*N+C*I-E*D+g*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*B-c*F+u*N)*X,e[1]=(s*F-n*B-r*N)*X,e[2]=(y*g-_*E+x*C)*X,e[3]=(d*E-f*g-p*C)*X,e[4]=(c*I-a*B-u*D)*X,e[5]=(t*B-s*I+r*D)*X,e[6]=(_*A-v*g-x*R)*X,e[7]=(h*g-d*A+p*R)*X,e[8]=(a*F-o*I+u*S)*X,e[9]=(n*I-t*F-r*S)*X,e[10]=(v*E-y*A+x*w)*X,e[11]=(f*A-h*E-p*w)*X,e[12]=(o*D-a*N-c*S)*X,e[13]=(t*N-n*D+s*S)*X,e[14]=(y*R-v*C-_*w)*X,e[15]=(h*C-f*R+d*w)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,f=o+o,d=r*u,p=r*h,v=r*f,y=a*h,_=a*f,x=o*f,w=c*u,R=c*h,A=c*f,C=n.x,E=n.y,g=n.z;return s[0]=(1-(y+x))*C,s[1]=(p+A)*C,s[2]=(v-R)*C,s[3]=0,s[4]=(p-A)*E,s[5]=(1-(d+x))*E,s[6]=(_+w)*E,s[7]=0,s[8]=(v+R)*g,s[9]=(_-w)*g,s[10]=(1-(d+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),c=Ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let u=1/a,h=1/o,f=1/c;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Vn,c=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),v,y;if(c)v=r/(a-r),y=a*r/(a-r);else if(o===Vn)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===qr)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),v,y;if(c)v=1/(a-r),y=a/(a-r);else if(o===Vn)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===qr)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Wa,"Matrix4"),Wa.prototype.isMatrix4=!0;var ot=Wa,Ar=new G,Zn=new ot,V_=new G(0,0,0),H_=new G(1,1,1),os=new G,bl=new G,bn=new G,Dm=new ot,Nm=new cn,Tc=class Tc{constructor(e=0,t=0,n=0,s=Tc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Tc,"Euler");var wn=Tc;wn.DEFAULT_ORDER="XYZ";var Id=class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Id,"Layers");var Ka=Id,W_=0,Um=new G,Tr=new cn,Di=new ot,Ml=new G,Fa=new G,X_=new G,q_=new cn,Fm=new G(1,0,0),Om=new G(0,1,0),Bm=new G(0,0,1),zm={type:"added"},Y_={type:"removed"},Cr={type:"childadded",child:null},Sh={type:"childremoved",child:null},Hr=class Hr extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hr.DEFAULT_UP.clone();let e=new G,t=new wn,n=new cn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new He}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Hr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Fa,Ml,this.up):Di.lookAt(Ml,Fa,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(Di),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Hr,"Object3D");var Wt=Hr;Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ld=class Ld extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Ld,"Group");var ln=Ld,Z_={type:"move"},Dd=class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,n),x=this._getHandJoint(u,y);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Dd,"WebXRController");var $r=Dd,z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function wh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(wh,"hue2rgb");var Nd=class Nd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=B_(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wh(a,r,e+1/3),this.g=wh(a,r,e),this.b=wh(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=z0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return je.workingToColorSpace(Kt.copy(this),e),Math.round(et(Kt.r*255,0,255))*65536+Math.round(et(Kt.g*255,0,255))*256+Math.round(et(Kt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Tt){je.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Sl);let n=_h(ls.h,Sl.h,t),s=_h(ls.s,Sl.s,t),r=_h(ls.l,Sl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Nd,"Color");var Ue=Nd,Kt=new Ue;Ue.NAMES=z0;var Cc=class Cc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Cc,"Fog");var Qa=Cc,Ud=class Ud extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Ud,"Scene");var ja=Ud,$n=new G,Ni=new G,Eh=new G,Ui=new G,Rr=new G,Pr=new G,km=new G,Ah=new G,Th=new G,Ch=new G,Rh=new vt,Ph=new vt,Ih=new vt,ds=class ds{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ni.subVectors(n,t),Eh.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ni),c=$n.dot(Eh),u=Ni.dot(Ni),h=Ni.dot(Eh),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(u*c-o*h)*d,v=(a*h-o*c)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(a,Ui.y),c.addScaledVector(o,Ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rh.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Rh.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,n),Ih.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rh,r.x),a.addScaledVector(Ph,r.y),a.addScaledVector(Ih,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ni.subVectors(e,t),$n.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),$n.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ds.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ds.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ds.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ds.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ds.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Rr.subVectors(s,n),Pr.subVectors(r,n),Ah.subVectors(e,n);let c=Rr.dot(Ah),u=Pr.dot(Ah);if(c<=0&&u<=0)return t.copy(n);Th.subVectors(e,s);let h=Rr.dot(Th),f=Pr.dot(Th);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Rr,a);Ch.subVectors(e,r);let p=Rr.dot(Ch),v=Pr.dot(Ch);if(v>=0&&p<=v)return t.copy(r);let y=p*u-c*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Pr,o);let _=h*v-p*f;if(_<=0&&f-h>=0&&p-v>=0)return km.subVectors(r,s),o=(f-h)/(f-h+(p-v)),t.copy(s).addScaledVector(km,o);let x=1/(_+y+d);return a=y*x,o=d*x,t.copy(n).addScaledVector(Rr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(ds,"Triangle");var Bi=ds,Fd=class Fd{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wl.copy(n.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),El.subVectors(this.max,Oa),Ir.subVectors(e.a,Oa),Lr.subVectors(e.b,Oa),Dr.subVectors(e.c,Oa),cs.subVectors(Lr,Ir),us.subVectors(Dr,Lr),Ws.subVectors(Ir,Dr);let t=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Ws.z,Ws.y,cs.z,0,-cs.x,us.z,0,-us.x,Ws.z,0,-Ws.x,-cs.y,cs.x,0,-us.y,us.x,0,-Ws.y,Ws.x,0];return!Lh(t,Ir,Lr,Dr,El)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,Ir,Lr,Dr,El))?!1:(Al.crossVectors(cs,us),t=[Al.x,Al.y,Al.z],Lh(t,Ir,Lr,Dr,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Fd,"Box3");var ps=Fd,Fi=[new G,new G,new G,new G,new G,new G,new G,new G],Jn=new G,wl=new ps,Ir=new G,Lr=new G,Dr=new G,cs=new G,us=new G,Ws=new G,Oa=new G,El=new G,Al=new G,Xs=new G;function Lh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),c=e.dot(Xs),u=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Lh,"satForAxes");var zi=$_();function $_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l($_,"_generateTables");function J_(i){Math.abs(i)>65504&&ke("DataUtils.toHalfFloat(): Value out of range."),i=et(i,-65504,65504),zi.floatView[0]=i;let e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}l(J_,"toHalfFloat");function K_(i){let e=i>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(i&1023)]+zi.exponentTable[e],zi.floatView[0]}l(K_,"fromHalfFloat");var Od=class Od{static toHalfFloat(e){return J_(e)}static fromHalfFloat(e){return K_(e)}};l(Od,"DataUtils");var di=Od,At=new G,Tl=new Ge,Q_=0,Bd=class Bd extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xd,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?Au(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):O0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):B0(e,this.array)}};l(Bd,"BufferAttribute");var _t=Bd;var zd=class zd extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(zd,"Uint16BufferAttribute");var eo=zd;var kd=class kd extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(kd,"Uint32BufferAttribute");var to=kd;var Gd=class Gd extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Gd,"Float32BufferAttribute");var wt=Gd,j_=new ps,Ba=new G,Dh=new G,Vd=class Vd{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):j_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);let t=Ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ba,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(Dh)),this.expandByPoint(Ba.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Vd,"Sphere");var Jr=Vd,ev=0,kn=new ot,Nh=new Wt,Nr=new G,Mn=new ps,za=new ps,zt=new G,Rc=class Rc extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?to:eo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];za.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Mn.min,za.min),Mn.expandByPoint(zt),zt.addVectors(Mn.max,za.max),Mn.expandByPoint(zt)):(Mn.expandByPoint(za.min),Mn.expandByPoint(za.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)zt.fromBufferAttribute(o,u),c&&(Nr.fromBufferAttribute(e,u),zt.add(Nr)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new G,c[D]=new G;let h=new G,f=new G,d=new G,p=new Ge,v=new Ge,y=new Ge,_=new G,x=new G;function w(D,I,N){u[D]=u[I]=u[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,N),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),f.sub(h),d.sub(h),v.sub(p),y.sub(p);let F=1/(v.x*y.y-y.x*v.y);isFinite(F)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(d,-v.y).multiplyScalar(F),x.copy(d).multiplyScalar(v.x).addScaledVector(f,-y.x).multiplyScalar(F),o[D].add(_),o[I].add(_),o[N].add(_),c[D].add(x),c[I].add(x),c[N].add(x))}l(w,"handleTriangle");let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,I=R.length;D<I;++D){let N=R[D],F=N.start,B=N.count;for(let P=F,X=F+B;P<X;P+=3)w(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let A=new G,C=new G,E=new G,g=new G;function S(D){E.fromBufferAttribute(s,D),g.copy(E);let I=o[D];A.copy(I),A.sub(E.multiplyScalar(E.dot(I))).normalize(),C.crossVectors(g,I);let F=C.dot(c[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,F)}l(S,"handleVertex");for(let D=0,I=n.count;D<I;++D)u[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,u=new G,h=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){let v=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),p=0,v=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let x=0;x<h;x++)d[v++]=u[p++]}return new _t(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Rc,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Rc,"BufferGeometry");var Rt=Rc,Hd=class Hd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xd,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Hd,"InterleavedBuffer");var no=Hd;function Gm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=js()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(Gm,"getArrayKey");var an=new G,Pc=class Pc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Au(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):O0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):B0(e,this.data.array)}};l(Pc,"InterleavedBufferAttribute");var Kr=Pc,Uh=new G,tv=new G,nv=new He,Wd=class Wd{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Uh.subVectors(n,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Uh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nv.getNormalMatrix(e),s=this.coplanarPoint(Uh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Wd,"Plane");var mn=Wd,iv=0,Xd=class Xd extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=js(),this.name="",this.type="Material",this.blending=na,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Xd,"Material");var Vi=Xd,qd=class qd extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(qd,"SpriteMaterial");var ms=qd,Ur,ka=new G,Fr=new G,Or=new G,Br=new Ge,Ga=new Ge,k0=new ot,Cl=new G,Va=new G,Rl=new G,Vm=new Ge,Fh=new Ge,Hm=new Ge,Yd=class Yd extends Wt{constructor(e=new ms){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new no(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new Kr(n,3,0,!1)),Ur.setAttribute("uv",new Kr(n,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),k0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pl(Cl.set(-.5,-.5,0),Or,a,Fr,s,r),Pl(Va.set(.5,-.5,0),Or,a,Fr,s,r),Pl(Rl.set(.5,.5,0),Or,a,Fr,s,r),Vm.set(0,0),Fh.set(1,0),Hm.set(1,1);let o=e.ray.intersectTriangle(Cl,Va,Rl,!1,ka);if(o===null&&(Pl(Va.set(-.5,.5,0),Or,a,Fr,s,r),Fh.set(0,1),o=e.ray.intersectTriangle(Cl,Rl,Va,!1,ka),o===null))return;let c=e.ray.origin.distanceTo(ka);c<e.near||c>e.far||t.push({distance:c,point:ka.clone(),uv:Bi.getInterpolation(ka,Cl,Va,Rl,Vm,Fh,Hm,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Yd,"Sprite");var Qr=Yd;function Pl(i,e,t,n,s,r){Br.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ga.x=r*Br.x-s*Br.y,Ga.y=s*Br.x+r*Br.y):Ga.copy(Br),i.copy(e),i.x+=Ga.x,i.y+=Ga.y,i.applyMatrix4(k0)}l(Pl,"transformVertex");var Oi=new G,Oh=new G,Il=new G,Ll=new G,Zd=class Zd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oh.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Ll.copy(this.origin).sub(Oh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Il),o=Ll.dot(this.direction),c=-Ll.dot(Il),u=Ll.lengthSq(),h=Math.abs(1-a*a),f,d,p,v;if(h>0)if(f=a*c-o,d=a*o-c,v=r*h,f>=0)if(d>=-v)if(d<=v){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u):d<=v?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oh).addScaledVector(Il,d),p}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,v=t.x-a.x,y=t.y-a.y,_=t.z-a.z,x=n.x-a.x,w=n.y-a.y,R=n.z-a.z,A=Math.abs(c),C=Math.abs(u),E=Math.abs(h),g,S,D,I,N,F,B,P,X,ee,Z,$;if(A>=C&&A>=E?(D=c,F=f,X=v,$=x,c>=0?(g=u,S=h,I=d,N=p,B=y,P=_,ee=w,Z=R):(g=h,S=u,I=p,N=d,B=_,P=y,ee=R,Z=w)):C>=E?(D=u,F=d,X=y,$=w,u>=0?(g=h,S=c,I=p,N=f,B=_,P=v,ee=R,Z=x):(g=c,S=h,I=f,N=p,B=v,P=_,ee=x,Z=R)):(D=h,F=p,X=_,$=R,h>=0?(g=c,S=u,I=f,N=d,B=v,P=y,ee=x,Z=w):(g=u,S=c,I=d,N=f,B=y,P=v,ee=w,Z=x)),D===0)return null;let V=g/D,q=S/D,ie=1/D,ue=I-V*F,Te=N-q*F,K=B-V*X,ce=P-q*X,Me=ee-V*$,Ce=Z-q*$,pe=Me*ce-Ce*K,Fe=ue*Ce-Te*Me,ut=K*Te-ce*ue;if(s){if(pe<0||Fe<0||ut<0)return null}else if((pe<0||Fe<0||ut<0)&&(pe>0||Fe>0||ut>0))return null;let Ne=pe+Fe+ut;if(Ne===0)return null;let qe=ie*(pe*F+Fe*X+ut*$);return(Ne>0?qe<0:qe>0)?null:this.at(qe/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Zd,"Ray");var rc=Zd,$d=class $d extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l($d,"MeshBasicMaterial");var ac=$d,Wm=new ot,qs=new rc,Dl=new Jr,Xm=new G,Nl=new G,Ul=new G,Fl=new G,Bh=new G,Ol=new G,qm=new G,Bl=new G,Jd=class Jd extends Wt{constructor(e=new Rt,t=new ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ol.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],f=r[c];h!==0&&(Bh.fromBufferAttribute(f,e),a?Ol.addScaledVector(Bh,h):Ol.addScaledVector(Bh.sub(t),h))}t.add(Ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(Dl.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Dl,Xm)===null||qs.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(r).invert(),qs.copy(e.ray).applyMatrix4(Wm),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){let _=d[v],x=a[_.materialIndex],w=Math.max(_.start,p.start),R=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let A=w,C=R;A<C;A+=3){let E=o.getX(A),g=o.getX(A+1),S=o.getX(A+2);s=zl(this,x,e,n,u,h,f,E,g,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=v,x=y;_<x;_+=3){let w=o.getX(_),R=o.getX(_+1),A=o.getX(_+2);s=zl(this,a,e,n,u,h,f,w,R,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){let _=d[v],x=a[_.materialIndex],w=Math.max(_.start,p.start),R=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let A=w,C=R;A<C;A+=3){let E=A,g=A+1,S=A+2;s=zl(this,x,e,n,u,h,f,E,g,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=v,x=y;_<x;_+=3){let w=_,R=_+1,A=_+2;s=zl(this,a,e,n,u,h,f,w,R,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};l(Jd,"Mesh");var yt=Jd;function sv(i,e,t,n,s,r,a,o){let c;if(e.side===dn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ss,o),c===null)return null;Bl.copy(o),Bl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Bl);return u<t.near||u>t.far?null:{distance:u,point:Bl.clone(),object:i}}l(sv,"checkIntersection$1");function zl(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,Nl),i.getVertexPosition(c,Ul),i.getVertexPosition(u,Fl);let h=sv(i,e,t,n,Nl,Ul,Fl,qm);if(h){let f=new G;Bi.getBarycoord(qm,Nl,Ul,Fl,f),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,c,u,f,new Ge)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,c,u,f,new Ge)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,c,u,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new G,materialIndex:0};Bi.getNormal(Nl,Ul,Fl,d.normal),h.face=d,h.barycoord=f}return h}l(zl,"checkGeometryIntersection");var Kd=class Kd extends un{constructor(e=null,t=1,n=1,s,r,a,o,c,u=Ct,h=Ct,f,d){super(null,a,o,c,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Kd,"DataTexture");var jr=Kd;var Qd=class Qd extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(Qd,"InstancedBufferAttribute");var Hi=Qd;var Ys=new Jr,rv=new Ge(.5,.5),kl=new G,jd=class jd{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],f=r[5],d=r[6],p=r[7],v=r[8],y=r[9],_=r[10],x=r[11],w=r[12],R=r[13],A=r[14],C=r[15];if(s[0].setComponents(u-a,p-h,x-v,C-w).normalize(),s[1].setComponents(u+a,p+h,x+v,C+w).normalize(),s[2].setComponents(u+o,p+f,x+y,C+R).normalize(),s[3].setComponents(u-o,p-f,x-y,C-R).normalize(),n)s[4].setComponents(c,d,_,A).normalize(),s[5].setComponents(u-c,p-d,x-_,C-A).normalize();else if(s[4].setComponents(u-c,p-d,x-_,C-A).normalize(),t===Vn)s[5].setComponents(u+c,p+d,x+_,C+A).normalize();else if(t===qr)s[5].setComponents(c,d,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=rv.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(kl.x=s.normal.x>0?e.max.x:e.min.x,kl.y=s.normal.y>0?e.max.y:e.min.y,kl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(jd,"Frustum");var gs=jd,Ym=new ot,Ic=class Ic{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ym.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new gs),n[s].setFromProjectionMatrix(Ym,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Ic().copy(this)}};l(Ic,"FrustumArray");var oc=Ic;var ef=class ef extends un{constructor(e=[],t=Ks,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(ef,"CubeTexture");var io=ef,tf=class tf extends un{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(tf,"CanvasTexture");var xs=tf;var nf=class nf extends un{constructor(e,t,n=Qn,s,r,a,o=Ct,c=Ct,u,h=Gi,f=1){if(h!==Gi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(nf,"DepthTexture");var Wi=nf,sf=class sf extends Wi{constructor(e,t=Qn,n=Ks,s,r,a=Ct,o=Ct,c,u=Gi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(sf,"CubeDepthTexture");var so=sf,rf=class rf extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(rf,"ExternalTexture");var ro=rf,Lc=class Lc extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2));function v(y,_,x,w,R,A,C,E,g,S,D){let I=A/g,N=C/S,F=A/2,B=C/2,P=E/2,X=g+1,ee=S+1,Z=0,$=0,V=new G;for(let q=0;q<ee;q++){let ie=q*N-B;for(let ue=0;ue<X;ue++){let Te=ue*I-F;V[y]=Te*w,V[_]=ie*R,V[x]=P,u.push(V.x,V.y,V.z),V[y]=0,V[_]=0,V[x]=E>0?1:-1,h.push(V.x,V.y,V.z),f.push(ue/g),f.push(1-q/S),Z+=1}}for(let q=0;q<S;q++)for(let ie=0;ie<g;ie++){let ue=d+ie+X*q,Te=d+ie+X*(q+1),K=d+(ie+1)+X*(q+1),ce=d+(ie+1)+X*q;c.push(ue,Te,ce),c.push(Te,K,ce),$+=6}o.addGroup(p,$,D),p+=$,d+=Z}l(v,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Lc,"BoxGeometry");var fi=Lc;var Dc=class Dc extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],v=0,y=[],_=n/2,x=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function w(){let A=new G,C=new G,E=0,g=(t-e)/n;for(let S=0;S<=r;S++){let D=[],I=S/r,N=I*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,P=B*c+o,X=Math.sin(P),ee=Math.cos(P);C.x=N*X,C.y=-I*n+_,C.z=N*ee,f.push(C.x,C.y,C.z),A.set(X,g,ee).normalize(),d.push(A.x,A.y,A.z),p.push(B,1-I),D.push(v++)}y.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){let I=y[D][S],N=y[D+1][S],F=y[D+1][S+1],B=y[D][S+1];(e>0||D!==0)&&(h.push(I,N,B),E+=3),(t>0||D!==r-1)&&(h.push(N,F,B),E+=3)}u.addGroup(x,E,0),x+=E}l(w,"generateTorso");function R(A){let C=v,E=new Ge,g=new G,S=0,D=A===!0?e:t,I=A===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,_*I,0),d.push(0,I,0),p.push(.5,.5),v++;let N=v;for(let F=0;F<=s;F++){let P=F/s*c+o,X=Math.cos(P),ee=Math.sin(P);g.x=D*ee,g.y=_*I,g.z=D*X,f.push(g.x,g.y,g.z),d.push(0,I,0),E.x=X*.5+.5,E.y=ee*.5*I+.5,p.push(E.x,E.y),v++}for(let F=0;F<s;F++){let B=C+F,P=N+F;A===!0?h.push(P,P+1,B):h.push(P+1,P,B),S+=3}u.addGroup(x,S,A===!0?1:2),x+=S}l(R,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Dc,"CylinderGeometry");var pi=Dc,Nc=class Nc extends pi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Nc,"ConeGeometry");var mi=Nc;var Uc=class Uc extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,f=e/o,d=t/c,p=[],v=[],y=[],_=[];for(let x=0;x<h;x++){let w=x*d-a;for(let R=0;R<u;R++){let A=R*f-r;v.push(A,-w,0),y.push(0,0,1),_.push(R/o),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<o;w++){let R=w+u*x,A=w+u*(x+1),C=w+1+u*(x+1),E=w+1+u*x;p.push(R,A,E),p.push(A,C,E)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Uc,"PlaneGeometry");var gi=Uc;var Fc=class Fc extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new G,d=new G,p=[],v=[],y=[],_=[];for(let x=0;x<=n;x++){let w=[],R=x/n,A=a+R*o,C=e*Math.cos(A),E=Math.sqrt(e*e-C*C),g=0;x===0&&a===0?g=.5/t:x===n&&c===Math.PI&&(g=-.5/t);for(let S=0;S<=t;S++){let D=S/t,I=s+D*r;f.x=-E*Math.cos(I),f.y=C,f.z=E*Math.sin(I),v.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),_.push(D+g,1-R),w.push(u++)}h.push(w)}for(let x=0;x<n;x++)for(let w=0;w<t;w++){let R=h[x][w+1],A=h[x][w],C=h[x+1][w],E=h[x+1][w+1];(x!==0||a>0)&&p.push(R,A,E),(x!==n-1||c<Math.PI)&&p.push(A,C,E)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Fc,"SphereGeometry");var _s=Fc;var Oc=class Oc extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],f=[],d=new G,p=new G,v=new G;for(let y=0;y<=n;y++){let _=a+y/n*o;for(let x=0;x<=s;x++){let w=x/s*r;p.x=(e+t*Math.cos(_))*Math.cos(w),p.y=(e+t*Math.cos(_))*Math.sin(w),p.z=t*Math.sin(_),u.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),v.subVectors(p,d).normalize(),h.push(v.x,v.y,v.z),f.push(x/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let _=1;_<=s;_++){let x=(s+1)*y+_-1,w=(s+1)*(y-1)+_-1,R=(s+1)*(y-1)+_,A=(s+1)*y+_;c.push(x,w,A),c.push(w,R,A)}this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Oc,"TorusGeometry");var vs=Oc;function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Zm(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(er,"cloneUniforms");function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}l(Qt,"mergeUniforms");function Zm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Zm,"isThreeObject");function av(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(av,"cloneUniformsGroups");function vd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}l(vd,"getUnlitUniformColorSpace");var tr={clone:er,merge:Qt},ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,af=class af extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ov,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(af,"ShaderMaterial");var hn=af,of=class of extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(of,"RawShaderMaterial");var lc=of,lf=class lf extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(lf,"MeshStandardMaterial");var Xi=lf;var cf=class cf extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(cf,"MeshDepthMaterial");var cc=cf,uf=class uf extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(uf,"MeshDistanceMaterial");var uc=uf;function zr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(zr,"convertArray");function Gl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(Gl,"hasTangents");var hf=class hf{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(hf,"Interpolant");var ys=hf,df=class df extends ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vh:r=e,o=2*t-n;break;case Hh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vh:a=e,c=2*n-t;break;case Hh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),y=v*v,_=y*v,x=-d*_+2*d*y-d*v,w=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*v+1,R=(-1-p)*_+(1.5+p)*y+.5*v,A=p*_-p*y;for(let C=0;C!==o;++C)r[C]=x*a[h+C]+w*a[u+C]+R*a[c+C]+A*a[f+C];return r}};l(df,"CubicInterpolant");var hc=df,ff=class ff extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[c+d]*h;return r}};l(ff,"LinearInterpolant");var dc=ff,pf=class pf extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(pf,"DiscreteInterpolant");var fc=pf,mf=class mf extends ys{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let v=(n-t)/(s-t),y=1-v;for(let _=0;_!==o;++_)r[_]=a[u+_]*y+a[c+_]*v;return r}let d=o*2,p=e-1;for(let v=0;v!==o;++v){let y=a[u+v],_=a[c+v],x=p*d+v*2,w=f[x],R=f[x+1],A=e*d+v*2,C=h[A],E=h[A+1],g=uv(n,t,w,C,s);r[v]=G0(g,y,R,E,_)}return r}};l(mf,"BezierInterpolant");var pc=mf;function G0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(G0,"cubicBezier");function cv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(cv,"cubicBezierSlope");function uv(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=G0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=cv(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(uv,"solveBezierParameter");var gf=class gf{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Gl(e.settings)&&(n.settings={inTangents:zr(e.settings.inTangents,Array),outTangents:zr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xa:t=this.InterpolantFactoryMethodDiscrete;break;case ec:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break;case kh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return kh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Gl(this.settings)&&($m(this.settings.inTangents,e),$m(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Gl(this.settings)&&(Jm(this.settings.inTangents,e),Jm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&O_(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){Ve("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let v=0;v!==n;++v){let y=t[f+v];if(y!==t[d+v]||y!==t[p+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Gl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(gf,"KeyframeTrack");var En=gf;function $m(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l($m,"shiftTangentTimes");function Jm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Jm,"scaleTangentTimes");En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ec;var xf=class xf extends En{constructor(e,t,n){super(e,t,n)}};l(xf,"BooleanKeyframeTrack");var bs=xf;bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Xa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class _f extends En{constructor(e,t,n,s){super(e,t,n,s)}};l(_f,"ColorKeyframeTrack");var mc=_f;mc.prototype.ValueTypeName="color";var vf=class vf extends En{constructor(e,t,n,s){super(e,t,n,s)}};l(vf,"NumberKeyframeTrack");var gc=vf;gc.prototype.ValueTypeName="number";var yf=class yf extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)cn.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(yf,"QuaternionLinearInterpolant");var xc=yf,bf=class bf extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};l(bf,"QuaternionKeyframeTrack");var ao=bf;ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Mf=class Mf extends En{constructor(e,t,n){super(e,t,n)}};l(Mf,"StringKeyframeTrack");var Ms=Mf;Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Xa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Sf=class Sf extends En{constructor(e,t,n,s){super(e,t,n,s)}};l(Sf,"VectorKeyframeTrack");var _c=Sf;_c.prototype.ValueTypeName="vector";var wf=class wf{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],v=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(wf,"LoadingManager");var vc=wf,V0=new vc,Ef=class Ef{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Ef,"Loader");var yc=Ef;yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Af=class Af extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Af,"Light");var oo=Af,Tf=class Tf extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Tf,"HemisphereLight");var lo=Tf,zh=new ot,Km=new G,Qm=new G,Cf=class Cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),Qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Cf,"LightShadow");var bc=Cf,Vl=new G,Hl=new cn,ui=new G,Rf=class Rf extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vl,Hl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Rf,"Camera");var co=Rf,hs=new G,jm=new Ge,e0=new Ge,Pf=class Pf extends co{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,jm,e0),t.subVectors(e0,jm)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Pf,"PerspectiveCamera");var on=Pf;var If=class If extends co{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(If,"OrthographicCamera");var uo=If,Lf=class Lf extends bc{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Lf,"DirectionalLightShadow");var Wh=Lf,Df=class Df extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Df,"DirectionalLight");var ho=Df;var Nf=class Nf extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(Nf,"InstancedBufferGeometry");var fo=Nf;var kr=-90,Gr=1,Uf=class Uf extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(kr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new on(kr,Gr,e,t);r.layers=this.layers,this.add(r);let a=new on(kr,Gr,e,t);a.layers=this.layers,this.add(a);let o=new on(kr,Gr,e,t);o.layers=this.layers,this.add(o);let c=new on(kr,Gr,e,t);c.layers=this.layers,this.add(c);let u=new on(kr,Gr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}};l(Uf,"CubeCamera");var ea=Uf,Ff=class Ff extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Ff,"ArrayCamera");var Mc=Ff;var yd="\\[\\]\\.:\\/",hv=new RegExp("["+yd+"]","g"),bd="[^"+yd+"]",dv="[^"+yd.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",bd),pv=/(WCOD+)?/.source.replace("WCOD",dv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),xv=new RegExp("^"+fv+pv+mv+gv+"$"),_v=["material","materials","bones","map"],Of=class Of{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Of,"Composite");var Xh=Of,fs=class fs{constructor(e,t,n){this.path=t,this.parsedPath=n||fs.parseTrackName(t),this.node=fs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new fs.Composite(e,t,n):new fs(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(e){let t=xv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=fs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(fs,"PropertyBinding");var ft=fs;ft.Composite=Xh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BE=new Float32Array(1);var Bc=class Bc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(Bc,"Matrix2"),Bc.prototype.isMatrix2=!0;var qh=Bc;function Md(i,e,t,n){let s=vv(n);switch(t){case hd:return i*e;case fd:return i*e/s.components*s.byteLength;case qc:return i*e/s.components*s.byteLength;case vi:return i*e*2/s.components*s.byteLength;case Yc:return i*e*2/s.components*s.byteLength;case dd:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case Zc:return i*e*4/s.components*s.byteLength;case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jc:case Qc:return Math.max(i,16)*Math.max(e,8)/4;case $c:case Kc:return Math.max(i,8)*Math.max(e,8)/2;case jc:case eu:case nu:case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tu:case bo:case su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ou:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _u:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vu:case yu:case bu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mu:case Su:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mo:case wu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Md,"getByteLength");function vv(i){switch(i){case gn:case od:return{byteLength:1,components:1};case sa:case ld:case An:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Qn:case Hc:case jn:return{byteLength:4,components:1};case cd:case ud:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(vv,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ug(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(ug,"WebGLAnimation");function Ev(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){let v=f[d],y=f[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(Ev,"WebGLAttributes");var Av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
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
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lv=`#ifdef USE_AOMAP
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
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
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
#endif`,Uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zv=`#ifdef USE_IRIDESCENCE
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
#endif`,kv=`#ifdef USE_BUMPMAP
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$v=`#define PI 3.141592653589793
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
} // validated`,Jv=`vec3 transformedNormal = objectNormal;
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
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dy=`#ifdef USE_GRADIENTMAP
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
}`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xy=`#ifdef USE_ENVMAP
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
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,My=`PhysicalMaterial material;
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
#endif`,Sy=`uniform sampler2D dfgLUT;
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
}`,wy=`
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uy=`#if defined( USE_POINTS_UV )
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
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zy=`#if defined( USE_MORPHCOLORS )
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
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
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
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ub=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform float backgroundBlurriness;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,Lb=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Nb=`#define DISTANCE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,kb=`uniform vec3 diffuse;
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
}`,Gb=`#define LAMBERT
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
}`,Vb=`#define LAMBERT
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
}`,Hb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,Xb=`#define NORMAL
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
}`,qb=`#define NORMAL
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
}`,Yb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,Jb=`#define STANDARD
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
}`,Kb=`#define TOON
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
}`,Qb=`#define TOON
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
}`,jb=`uniform float size;
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#include <common>
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
}`,nM=`uniform vec3 color;
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
}`,iM=`uniform float rotation;
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
}`,sM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Av,alphahash_pars_fragment:Tv,alphamap_fragment:Cv,alphamap_pars_fragment:Rv,alphatest_fragment:Pv,alphatest_pars_fragment:Iv,aomap_fragment:Lv,aomap_pars_fragment:Dv,batching_pars_vertex:Nv,batching_vertex:Uv,begin_vertex:Fv,beginnormal_vertex:Ov,bsdfs:Bv,iridescence_fragment:zv,bumpmap_pars_fragment:kv,clipping_planes_fragment:Gv,clipping_planes_pars_fragment:Vv,clipping_planes_pars_vertex:Hv,clipping_planes_vertex:Wv,color_fragment:Xv,color_pars_fragment:qv,color_pars_vertex:Yv,color_vertex:Zv,common:$v,defaultnormal_vertex:Jv,displacementmap_pars_vertex:Kv,displacementmap_vertex:Qv,emissivemap_fragment:jv,emissivemap_pars_fragment:ey,colorspace_fragment:ty,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:sy,envmap_pars_fragment:ry,envmap_pars_vertex:ay,envmap_physical_pars_fragment:xy,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:hy,gradientmap_pars_fragment:dy,lightmap_pars_fragment:fy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:yy,lights_phong_pars_fragment:by,lights_physical_fragment:My,lights_physical_pars_fragment:Sy,lights_fragment_begin:wy,lights_fragment_maps:Ey,lights_fragment_end:Ay,lightprobes_pars_fragment:Ty,logdepthbuf_fragment:Cy,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Iy,map_fragment:Ly,map_pars_fragment:Dy,map_particle_fragment:Ny,map_particle_pars_fragment:Uy,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:Oy,morphinstance_vertex:By,morphcolor_vertex:zy,morphnormal_vertex:ky,morphtarget_pars_vertex:Gy,morphtarget_vertex:Vy,normal_fragment_begin:Hy,normal_fragment_maps:Wy,normal_pars_fragment:Xy,normal_pars_vertex:qy,normal_vertex:Yy,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Jy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Qy,opaque_fragment:jy,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:ub,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:fb,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:xb,tonemapping_pars_fragment:_b,transmission_fragment:vb,transmission_pars_fragment:yb,uv_pars_fragment:bb,uv_pars_vertex:Mb,uv_vertex:Sb,worldpos_vertex:wb,background_vert:Eb,background_frag:Ab,backgroundCube_vert:Tb,backgroundCube_frag:Cb,cube_vert:Rb,cube_frag:Pb,depth_vert:Ib,depth_frag:Lb,distance_vert:Db,distance_frag:Nb,equirect_vert:Ub,equirect_frag:Fb,linedashed_vert:Ob,linedashed_frag:Bb,meshbasic_vert:zb,meshbasic_frag:kb,meshlambert_vert:Gb,meshlambert_frag:Vb,meshmatcap_vert:Hb,meshmatcap_frag:Wb,meshnormal_vert:Xb,meshnormal_frag:qb,meshphong_vert:Yb,meshphong_frag:Zb,meshphysical_vert:$b,meshphysical_frag:Jb,meshtoon_vert:Kb,meshtoon_frag:Qb,points_vert:jb,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:sM},ye={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},bi={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};bi.physical={uniforms:Qt([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Tu={r:0,b:0,g:0},rM=new ot,hg=new He;hg.set(-1,0,0,0,1,0,0,0,1);function aM(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,c,u,h=null,f=0,d=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let A=w.backgroundBlurriness>0;R=e.get(R,A)}return R}l(p,"getBackground");function v(w){let R=!1,A=p(w);A===null?_(a,o):A&&A.isColor&&(_(A,1),R=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(v,"render");function y(w,R){let A=p(R);A&&A.isCubeTexture?(u===void 0&&(u=new yt(new fi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:er(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=A,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rM.makeRotationFromEuler(R.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(hg),u.material.toneMapped=je.getTransfer(A.colorSpace)!==rt,(h!==A||f!==A.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new yt(new gi(2,2),new hn({name:"BackgroundMaterial",uniforms:er(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=je.getTransfer(A.colorSpace)!==rt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function _(w,R){w.getRGB(Tu,vd(i)),t.buffers.color.setClear(Tu.r,Tu.g,Tu.b,R,r)}l(_,"setClear");function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(x,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(w,R=1){a.set(w),o=R,_(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(w){o=w,_(a,o)},"setClearAlpha"),render:v,addToRenderList:y,dispose:x}}l(aM,"WebGLBackground");function oM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,F,B,P,X){let ee=!1,Z=f(N,P,B,F);r!==Z&&(r=Z,u(r.object)),ee=p(N,P,B,X),ee&&v(N,P,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,A(N,F,B,P),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(N){return i.bindVertexArray(N)}l(u,"bindVertexArrayObject");function h(N){return i.deleteVertexArray(N)}l(h,"deleteVertexArrayObject");function f(N,F,B,P){let X=P.wireframe===!0,ee=n[F.id];ee===void 0&&(ee={},n[F.id]=ee);let Z=N.isInstancedMesh===!0?N.id:0,$=ee[Z];$===void 0&&($={},ee[Z]=$);let V=$[B.id];V===void 0&&(V={},$[B.id]=V);let q=V[X];return q===void 0&&(q=d(c()),V[X]=q),q}l(f,"getBindingState");function d(N){let F=[],B=[],P=[];for(let X=0;X<t;X++)F[X]=0,B[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:P,object:N,attributes:{},index:null}}l(d,"createBindingState");function p(N,F,B,P){let X=r.attributes,ee=F.attributes,Z=0,$=B.getAttributes();for(let V in $)if($[V].location>=0){let ie=X[V],ue=ee[V];if(ue===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;Z++}return r.attributesNum!==Z||r.index!==P}l(p,"needsUpdate");function v(N,F,B,P){let X={},ee=F.attributes,Z=0,$=B.getAttributes();for(let V in $)if($[V].location>=0){let ie=ee[V];ie===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));let ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),X[V]=ue,Z++}r.attributes=X,r.attributesNum=Z,r.index=P}l(v,"saveCache");function y(){let N=r.newAttributes;for(let F=0,B=N.length;F<B;F++)N[F]=0}l(y,"initAttributes");function _(N){x(N,0)}l(_,"enableAttribute");function x(N,F){let B=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;B[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),X[N]!==F&&(i.vertexAttribDivisor(N,F),X[N]=F)}l(x,"enableAttributeAndDivisor");function w(){let N=r.newAttributes,F=r.enabledAttributes;for(let B=0,P=F.length;B<P;B++)F[B]!==N[B]&&(i.disableVertexAttribArray(B),F[B]=0)}l(w,"disableUnusedAttributes");function R(N,F,B,P,X,ee,Z){Z===!0?i.vertexAttribIPointer(N,F,B,X,ee):i.vertexAttribPointer(N,F,B,P,X,ee)}l(R,"vertexAttribPointer");function A(N,F,B,P){y();let X=P.attributes,ee=B.getAttributes(),Z=F.defaultAttributeValues;for(let $ in ee){let V=ee[$];if(V.location>=0){let q=X[$];if(q===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){let ie=q.normalized,ue=q.itemSize,Te=e.get(q);if(Te===void 0)continue;let K=Te.buffer,ce=Te.type,Me=Te.bytesPerElement,Ce=ce===i.INT||ce===i.UNSIGNED_INT||q.gpuType===Hc;if(q.isInterleavedBufferAttribute){let pe=q.data,Fe=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,ut=q.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ne=0;Ne<V.locationSize;Ne++)x(V.location+Ne,pe.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)_(V.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Ne=0;Ne<V.locationSize;Ne++)R(V.location+Ne,ue/V.locationSize,ce,ie,Fe*Me,(ut+ue/V.locationSize*Ne)*Me,Ce)}else{if(q.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)x(V.location+pe,q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<V.locationSize;pe++)_(V.location+pe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let pe=0;pe<V.locationSize;pe++)R(V.location+pe,ue/V.locationSize,ce,ie,ue*Me,ue/V.locationSize*pe*Me,Ce)}}else if(Z!==void 0){let ie=Z[$];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(V.location,ie);break;case 3:i.vertexAttrib3fv(V.location,ie);break;case 4:i.vertexAttrib4fv(V.location,ie);break;default:i.vertexAttrib1fv(V.location,ie)}}}}w()}l(A,"setupVertexAttributes");function C(){D();for(let N in n){let F=n[N];for(let B in F){let P=F[B];for(let X in P){let ee=P[X];for(let Z in ee)h(ee[Z].object),delete ee[Z];delete P[X]}}delete n[N]}}l(C,"dispose");function E(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let B in F){let P=F[B];for(let X in P){let ee=P[X];for(let Z in ee)h(ee[Z].object),delete ee[Z];delete P[X]}}delete n[N.id]}l(E,"releaseStatesOfGeometry");function g(N){for(let F in n){let B=n[F];for(let P in B){let X=B[P];if(X[N.id]===void 0)continue;let ee=X[N.id];for(let Z in ee)h(ee[Z].object),delete ee[Z];delete X[N.id]}}}l(g,"releaseStatesOfProgram");function S(N){for(let F in n){let B=n[F],P=N.isInstancedMesh===!0?N.id:0,X=B[P];if(X!==void 0){for(let ee in X){let Z=X[ee];for(let $ in Z)h(Z[$].object),delete Z[$];delete X[ee]}delete B[P],Object.keys(B).length===0&&delete n[F]}}}l(S,"releaseStatesOfObject");function D(){I(),a=!0,r!==s&&(r=s,u(r.object))}l(D,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return l(I,"resetDefaultState"),{setup:o,reset:D,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:_,disableUnusedAttributes:w}}l(oM,"WebGLBindingStates");function lM(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(lM,"WebGLBufferRenderer");function cM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(g){return!(g!==ei&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(g){let S=g===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==gn&&g!==jn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(ke("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:A,maxSamples:C,samples:E}}l(cM,"WebGLCapabilities");function uM(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let v=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,x=i.get(f);if(!s||v===null||v.length===0||r&&!_)r?h(null):u();else{let w=r?0:n,R=w*4,A=x.clippingState||null;c.value=A,A=h(v,d,R,p);for(let C=0;C!==R;++C)A[C]=t[C];x.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,p,v){let y=f!==null?f.length:0,_=null;if(y!==0){if(_=c.value,v!==!0||_===null){let x=p+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(_===null||_.length<x)&&(_=new Float32Array(x));for(let R=0,A=p;R!==y;++R,A+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(_,A),_[A+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}l(h,"projectPlanes")}l(uM,"WebGLClipping");var Zf=class Zf extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:$s});r.uniforms.tEquirect.value=t;let a=new yt(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=kt),new ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(Zf,"WebGLCubeRenderTarget");var Eo=Zf,H0=256,hM=3,dM=20,dg=256,fg=16,fM=3,pM=new G,mM=new Ue,Iu=class Iu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ea(1,10,null),this._boxMesh=new yt(new fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=pM}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,v=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(mM));let _=new ea(n,s,h);return _.position.copy(o),_.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=v,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(H0,F0(e))}_fromTexture(e,t){e.mapping===Ks||e.mapping===ia?this._setSize(e.image.length===0?H0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=W0(e,!1,!1),n=Math.log2(e)-hM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=W0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ks||e.mapping===ia?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=X0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gM(),this._integrationMaterial=xM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/fg);for(let a=0;a<=n;a++){let o=Iu.lodToRoughness(a,n);if(a>n-fM)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(dg*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_M());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(Iu,"PMREMGenerator");var Ru=Iu;function W0(i,e,t){return new Eo(i,{minFilter:Kn,generateMipmaps:e,type:An,colorSpace:qa,depthBuffer:t})}l(W0,"_createRenderTarget");function Ao(i,e,t){return new hn({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:dn,blending:$s,depthTest:!1,depthWrite:!1})}l(Ao,"_getMaterial");function gM(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${dg}u

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
	`)}l(gM,"_getGGXMaterial");function xM(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fg}},`

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
	`)}l(xM,"_getIntegrationMaterial");function _M(){return Ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dM}
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
	`)}l(_M,"_getBlurMaterial");function X0(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(X0,"_getEquirectMaterial");function q0(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(q0,"_getCubemapMaterial");function vM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}l(s,"get");function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===kc||p===Gc)if(e.has(d)){let v=e.get(d).texture;return o(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let y=new Eo(v.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,v=p===kc||p===Gc,y=p===Ks||p===ia;if(v||y){let _=t.get(d),x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Ru(i)),_=v?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{let w=d.image;return v&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new Ru(i)),_=v?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}l(a,"getPMREM");function o(d,p){return p===kc?d.mapping=Ks:p===Gc&&(d.mapping=ia),d}l(o,"mapTextureMapping");function c(d){let p=0,v=6;for(let y=0;y<v;y++)d[y]!==void 0&&p++;return p===v}l(c,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}l(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:s,dispose:f}}l(vM,"WebGLEnvironments");function yM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&Ha("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(yM,"WebGLExtensions");function bM(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){c(v.target)}l(o,"onGeometryDispose");function c(v){v.index!==null&&e.remove(v.index);for(let _ in v.attributes)e.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);let y=r.get(v);y&&(e.remove(y),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(v,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(v){let y=v.attributes;for(let _ in y)e.update(y[_],i.ARRAY_BUFFER)}l(h,"update");function f(v){let y=v.index,_=v.attributes.position,x=0;if(_===void 0)return;let w=y!==null?y.array.length:_.array.length/3-1,R=_.count>=65535?to:eo,A=new R(Math.ceil(w/3)*6,1),C=A.array;if(y!==null){let g=y.array;x=y.version;for(let S=0,D=0;S<w;S+=3){let I=g[S+0],N=g[S+1],F=g[S+2];C[D++]=I,C[D++]=N,C[D++]=N,C[D++]=F,C[D++]=F,C[D++]=I}}else{x=_.version;for(let g=0,S=0;g<w;g+=3){let D=g+0,I=g+1,N=g+2;C[S++]=D,C[S++]=I,C[S++]=I,C[S++]=N,C[S++]=N,C[S++]=D}}A.version=x;let E=r.get(v);E&&e.remove(E),r.set(v,A)}l(f,"updateWireframeAttribute");function d(v){let y=r.get(v);if(y){let _=v.index;_!==null&&y.version<_.version&&f(v)}else f(v);return r.get(v)}l(d,"getWireframeAttribute");function p(){for(let v in s){let y=s[v].deref();y!==void 0&&c(y)}}return l(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}l(bM,"WebGLGeometries");function MM(i,e,t){let n;function s(f){n=f}l(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}l(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let y=0;for(let _=0;_<p;_++)y+=d[_];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(MM,"WebGLIndexedBufferRenderer");function SM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(SM,"WebGLInfo");function wM(i,e,t){let n=new WeakMap,s=new vt;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var p=I;l(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],A=0;v===!0&&(A=1),y===!0&&(A=2),_===!0&&(A=3);let C=o.attributes.position.count*A,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let g=new Float32Array(C*E*4*f),S=new Ja(g,C,E,f);S.type=jn,S.needsUpdate=!0;let D=A*4;for(let N=0;N<f;N++){let F=x[N],B=w[N],P=R[N],X=C*E*4*N;for(let ee=0;ee<F.count;ee++){let Z=ee*D;v===!0&&(s.fromBufferAttribute(F,ee),g[X+Z+0]=s.x,g[X+Z+1]=s.y,g[X+Z+2]=s.z,g[X+Z+3]=0),y===!0&&(s.fromBufferAttribute(B,ee),g[X+Z+4]=s.x,g[X+Z+5]=s.y,g[X+Z+6]=s.z,g[X+Z+7]=0),_===!0&&(s.fromBufferAttribute(P,ee),g[X+Z+8]=s.x,g[X+Z+9]=s.y,g[X+Z+10]=s.z,g[X+Z+11]=P.itemSize===4?s.w:1)}}d={count:f,texture:S,size:new Ge(C,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let _=0;_<u.length;_++)v+=u[_];let y=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(wM,"WebGLMorphtargets");function EM(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(EM,"WebGLObjects");var AM={[ed]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[nd]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[sd]:"AGX_TONE_MAPPING",[rd]:"NEUTRAL_TONE_MAPPING",[id]:"CUSTOM_TONE_MAPPING"};function TM(i,e,t,n,s,r){let a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Rt;h.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wt([0,2,0,0,2,0],2));let f=new lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new yt(h,f),p=new uo(-1,1,1,-1,0,1),v=null,y=null,_=!1,x,w=null,R=[],A=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),c!==null&&c.setSize(C,E);for(let g=0;g<R.length;g++){let S=R[g];S.setSize&&S.setSize(C,E)}},this.setEffects=function(C){R=C,A=R.length>0&&R[0].isRenderPass===!0;let E=a.width,g=a.height;R.length>0&&o===null&&(o=new Sn(E,g,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(E,g,{type:An,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Wi(E,g),r===!0&&(u.format=qi,u.type=Qs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<R.length;D++){let I=R[D];I.setSize&&I.setSize(E,g),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(C,E){if(_||C.toneMapping===_i&&R.length===0)return!1;if(w=E,E!==null){let g=E.width,S=E.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return A===!1&&C.setRenderTarget(a),x=C.toneMapping,C.toneMapping=_i,!0},this.hasRenderPass=function(){return A},this.end=function(C,E){C.toneMapping=x,_=!0;let g=a,S=o;for(let D=0;D<R.length;D++){let I=R[D];I.enabled!==!1&&(I.render(C,S,g,E),I.needsSwap!==!1&&(g=S,S=S===o?c:o))}if(v!==C.outputColorSpace||y!==C.toneMapping){v=C.outputColorSpace,y=C.toneMapping,f.defines={},je.getTransfer(v)===rt&&(f.defines.SRGB_TRANSFER="");let D=AM[y];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(w),C.render(d,p),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(TM,"WebGLOutput");var pg=new un,mg=new Wi(1,1),gg=new so(1),xg=new Ja,_g=new sc,vg=new io,Y0=[],Z0=[],$0=new Float32Array(16),J0=new Float32Array(9),K0=new Float32Array(4);function aa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Y0[s];if(r===void 0&&(r=new Float32Array(s),Y0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(aa,"flatten");function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(Dt,"arraysEqual");function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Nt,"copyArray");function Lu(i,e){let t=Z0[e];t===void 0&&(t=new Int32Array(e),Z0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Lu,"allocTexUnits");function CM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(CM,"setValueV1f");function RM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}l(RM,"setValueV2f");function PM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}l(PM,"setValueV3f");function IM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}l(IM,"setValueV4f");function LM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;K0.set(n),i.uniformMatrix2fv(this.addr,!1,K0),Nt(t,n)}}l(LM,"setValueM2");function DM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;J0.set(n),i.uniformMatrix3fv(this.addr,!1,J0),Nt(t,n)}}l(DM,"setValueM3");function NM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;$0.set(n),i.uniformMatrix4fv(this.addr,!1,$0),Nt(t,n)}}l(NM,"setValueM4");function UM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(UM,"setValueV1i");function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}l(FM,"setValueV2i");function OM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}l(OM,"setValueV3i");function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}l(BM,"setValueV4i");function zM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(zM,"setValueV1ui");function kM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}l(kM,"setValueV2ui");function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}l(GM,"setValueV3ui");function VM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}l(VM,"setValueV4ui");function Du(i){return i.version===0&&(i.compareFunction=gd,i.needsUpdate=!0),i}l(Du,"initShadowTexture");function HM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Du(mg):r=pg,t.setTexture2D(e||r,s)}l(HM,"setValueT1");function WM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_g,s)}l(WM,"setValueT3D1");function XM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Du(gg):r=vg,t.setTextureCube(e||r,s)}l(XM,"setValueT6");function qM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xg,s)}l(qM,"setValueT2DArray1");function YM(i){switch(i){case 5126:return CM;case 35664:return RM;case 35665:return PM;case 35666:return IM;case 35674:return LM;case 35675:return DM;case 35676:return NM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return kM;case 36295:return GM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}l(YM,"getSingularSetter");function ZM(i,e){i.uniform1fv(this.addr,e)}l(ZM,"setValueV1fArray");function $M(i,e){let t=aa(e,this.size,2);i.uniform2fv(this.addr,t)}l($M,"setValueV2fArray");function JM(i,e){let t=aa(e,this.size,3);i.uniform3fv(this.addr,t)}l(JM,"setValueV3fArray");function KM(i,e){let t=aa(e,this.size,4);i.uniform4fv(this.addr,t)}l(KM,"setValueV4fArray");function QM(i,e){let t=aa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(QM,"setValueM2Array");function jM(i,e){let t=aa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(jM,"setValueM3Array");function eS(i,e){let t=aa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(eS,"setValueM4Array");function tS(i,e){i.uniform1iv(this.addr,e)}l(tS,"setValueV1iArray");function nS(i,e){i.uniform2iv(this.addr,e)}l(nS,"setValueV2iArray");function iS(i,e){i.uniform3iv(this.addr,e)}l(iS,"setValueV3iArray");function sS(i,e){i.uniform4iv(this.addr,e)}l(sS,"setValueV4iArray");function rS(i,e){i.uniform1uiv(this.addr,e)}l(rS,"setValueV1uiArray");function aS(i,e){i.uniform2uiv(this.addr,e)}l(aS,"setValueV2uiArray");function oS(i,e){i.uniform3uiv(this.addr,e)}l(oS,"setValueV3uiArray");function lS(i,e){i.uniform4uiv(this.addr,e)}l(lS,"setValueV4uiArray");function cS(i,e,t){let n=this.cache,s=e.length,r=Lu(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Du(mg):a=pg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(cS,"setValueT1Array");function uS(i,e,t){let n=this.cache,s=e.length,r=Lu(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_g,r[a])}l(uS,"setValueT3DArray");function hS(i,e,t){let n=this.cache,s=e.length,r=Lu(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Du(gg):a=vg;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(hS,"setValueT6Array");function dS(i,e,t){let n=this.cache,s=e.length,r=Lu(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xg,r[a])}l(dS,"setValueT2DArrayArray");function fS(i){switch(i){case 5126:return ZM;case 35664:return $M;case 35665:return JM;case 35666:return KM;case 35674:return QM;case 35675:return jM;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return aS;case 36295:return oS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return dS}}l(fS,"getPureArraySetter");var $f=class $f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}};l($f,"SingleUniform");var kf=$f,Jf=class Jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fS(t.type)}};l(Jf,"PureArrayUniform");var Gf=Jf,Kf=class Kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(Kf,"StructuredUniform");var Vf=Kf,Bf=/(\w+)(\])?(\[|\.)?/g;function Q0(i,e){i.seq.push(e),i.map[e.id]=e}l(Q0,"addUniform");function pS(i,e,t){let n=i.name,s=n.length;for(Bf.lastIndex=0;;){let r=Bf.exec(n),a=Bf.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Q0(t,u===void 0?new kf(o,i,e):new Gf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Vf(o),Q0(t,f)),t=f}}}l(pS,"parseUniform");var Qf=class Qf{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(Qf,"WebGLUniforms");var ra=Qf;function j0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(j0,"WebGLShader");var mS=37297,gS=0;function xS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(xS,"handleSource");var eg=new He;function _S(i){je._getMatrix(eg,je.workingColorSpace,i);let e=`mat3( ${eg.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Ya:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(_S,"getEncodingComponents");function tg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xS(i.getShaderSource(e),o)}else return r}l(tg,"getShaderErrors");function vS(i,e){let t=_S(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(vS,"getTexelEncodingFunction");var yS={[ed]:"Linear",[td]:"Reinhard",[nd]:"Cineon",[mo]:"ACESFilmic",[sd]:"AgX",[rd]:"Neutral",[id]:"Custom"};function bS(i,e){let t=yS[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(bS,"getToneMappingFunction");var Cu=new G;function MS(){je.getLuminanceCoefficients(Cu);let i=Cu.x.toFixed(4),e=Cu.y.toFixed(4),t=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(MS,"getLuminanceFunction");function SS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}l(SS,"generateVertexExtensions");function wS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(wS,"generateDefines");function ES(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(ES,"fetchAttributeLocations");function wo(i){return i!==""}l(wo,"filterEmptyLine");function ng(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(ng,"replaceLightNums");function ig(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(ig,"replaceClippingPlaneNums");var AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(i){return i.replace(AS,TS)}l(Hf,"resolveIncludes");function TS(i,e){let t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hf(t)}l(TS,"includeReplacer");var CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(i){return i.replace(CS,RS)}l(sg,"unrollLoops");function RS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(RS,"loopReplacer");function rg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(rg,"generatePrecision");var PS={[po]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function IS(i){return PS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(IS,"generateShadowMapTypeDefine");var LS={[ia]:"ENVMAP_MODE_REFRACTION"};function DS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":LS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(DS,"generateEnvMapModeDefine");var NS={[jh]:"ENVMAP_BLENDING_MULTIPLY",[b0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function US(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":NS[i.combine]||"ENVMAP_BLENDING_NONE"}l(US,"generateEnvMapBlendingDefine");function FS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=IS(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DS(t),f=US(t),d=SS(t),p=wS(r),v=s.createProgram(),y,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(y=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,vS("linearToOutputTexel",t.outputColorSpace),MS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),a=Hf(a),a=ng(a,t),a=ig(a,t),o=Hf(o),o=ng(o,t),o=ig(o,t),a=sg(a),o=sg(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=x+y+a,R=x+_+o,A=j0(s,s.VERTEX_SHADER,w),C=j0(s,s.FRAGMENT_SHADER,R);s.attachShader(v,A),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(A)||"",B=s.getShaderInfoLog(C)||"",P=N.trim(),X=F.trim(),ee=B.trim(),Z=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,C);else{let V=tg(s,A,"vertex"),q=tg(s,C,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+V+`
`+q)}else P!==""?ke("WebGLProgram: Program Info Log:",P):(X===""||ee==="")&&($=!1);$&&(I.diagnostics={runnable:Z,programLog:P,vertexShader:{log:X,prefix:y},fragmentShader:{log:ee,prefix:_}})}s.deleteShader(A),s.deleteShader(C),g=new ra(s,v),S=ES(s,v)}l(E,"onFirstUse");let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,mS)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}l(FS,"WebGLProgram");var OS=0,jf=class jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xf(e),t.set(e,n)),n}};l(jf,"WebGLShaderCache");var Wf=jf,ep=class ep{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}};l(ep,"WebGLShaderStage");var Xf=ep;function BS(i){return i===vi||i===bo||i===Mo}l(BS,"isPackedRGFormat");function zS(i,e,t,n,s,r){let a=new Ka,o=new Wf,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}l(p,"getChannel");function v(g,S,D,I,N,F){let B=I.fog,P=N.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,ee=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=e.get(g.envMap||X,ee),$=d[g.type],V=n.precision;g.precision!==null&&(V=n.getMaxPrecision(g.precision),V!==g.precision&&ke("WebGLProgram.getParameters:",g.precision,"not supported, using",V,"instead."));let q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=q!==void 0?q.length:0,ue=0;P.morphAttributes.position!==void 0&&(ue=1),P.morphAttributes.normal!==void 0&&(ue=2),P.morphAttributes.color!==void 0&&(ue=3);let Te,K,ce,Me;if($){let we=bi[$];Te=we.vertexShader,K=we.fragmentShader}else{Te=g.vertexShader,K=g.fragmentShader;let we=o.getVertexShaderStage(g),at=o.getFragmentShaderStage(g);o.update(g,we,at),ce=we.id,Me=at.id}let Ce=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,Ne=!!g.map,qe=!!g.matcap,tt=!!Z,Oe=tt&&Z.isPMREMTexture===!0,lt=!!g.aoMap,Mt=!!g.lightMap,It=!!g.bumpMap&&g.wireframe===!1,ct=!!g.normalMap,yn=!!g.displacementMap,Ft=!!g.emissiveMap,Fn=!!g.metalnessMap,On=!!g.roughnessMap,Bn=g.anisotropy>0,O=g.clearcoat>0,zn=g.diffuseRoughness>0,gt=g.dispersion>0,xt=g.retroreflectivity>0,be=g.iridescence>0,Lt=g.sheen>0,ze=g.transmission>0,We=Bn&&!!g.anisotropyMap,T=O&&!!g.clearcoatMap,b=O&&!!g.clearcoatNormalMap,W=O&&!!g.clearcoatRoughnessMap,oe=zn&&!!g.diffuseRoughnessMap,re=be&&!!g.iridescenceMap,de=be&&!!g.iridescenceThicknessMap,_e=Lt&&!!g.sheenColorMap,te=Lt&&!!g.sheenRoughnessMap,ne=!!g.specularMap,me=!!g.specularColorMap,L=!!g.specularIntensityMap,se=ze&&!!g.transmissionMap,j=ze&&!!g.thicknessMap,ge=!!g.gradientMap,he=!!g.alphaMap,fe=g.alphaTest>0,De=!!g.alphaHash,Ze=!!g.extensions,le=_i;g.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(le=i.toneMapping);let Be=Oe?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,Ye={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:Te,fragmentShader:K,defines:g.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:V,batching:ut,batchingColor:ut&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ne,matcap:qe,envMap:tt,envMapMode:tt&&Z.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?Be.length-1:null,envMapSize:Oe?Be[0].width:null,aoMap:lt,lightMap:Mt,bumpMap:It,normalMap:ct,displacementMap:yn,emissiveMap:Ft,normalMapObjectSpace:ct&&g.normalMapType===E0,normalMapTangentSpace:ct&&g.normalMapType===Eu,packedNormalMap:ct&&g.normalMapType===Eu&&BS(g.normalMap.format),metalnessMap:Fn,roughnessMap:On,anisotropy:Bn,anisotropyMap:We,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:zn,diffuseRoughnessMap:oe,dispersion:gt,retroreflection:xt,iridescence:be,iridescenceMap:re,iridescenceThicknessMap:de,sheen:Lt,sheenColorMap:_e,sheenRoughnessMap:te,specularMap:ne,specularColorMap:me,specularIntensityMap:L,transmission:ze,transmissionMap:se,thicknessMap:j,gradientMap:ge,opaque:g.transparent===!1&&g.blending===na&&g.alphaToCoverage===!1,alphaMap:he,alphaTest:fe,alphaHash:De,combine:g.combine,mapUv:Ne&&p(g.map.channel),aoMapUv:lt&&p(g.aoMap.channel),lightMapUv:Mt&&p(g.lightMap.channel),bumpMapUv:It&&p(g.bumpMap.channel),normalMapUv:ct&&p(g.normalMap.channel),displacementMapUv:yn&&p(g.displacementMap.channel),emissiveMapUv:Ft&&p(g.emissiveMap.channel),metalnessMapUv:Fn&&p(g.metalnessMap.channel),roughnessMapUv:On&&p(g.roughnessMap.channel),anisotropyMapUv:We&&p(g.anisotropyMap.channel),clearcoatMapUv:T&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(g.sheenRoughnessMap.channel),specularMapUv:ne&&p(g.specularMap.channel),specularColorMapUv:me&&p(g.specularColorMap.channel),specularIntensityMapUv:L&&p(g.specularIntensityMap.channel),transmissionMapUv:se&&p(g.transmissionMap.channel),thicknessMapUv:j&&p(g.thicknessMap.channel),alphaMapUv:he&&p(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ct||Bn),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ne||he),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ue,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(we=>we.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ne&&g.map.isVideoTexture===!0&&je.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:Ft&&g.emissiveMap.isVideoTexture===!0&&je.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xi,flipSided:g.side===dn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&g.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}l(v,"getParameters");function y(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)S.push(D),S.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(_(S,g),x(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}l(y,"getProgramCacheKey");function _(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}l(_,"getProgramCacheKeyParameters");function x(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}l(x,"getProgramCacheKeyBooleans");function w(g){let S=d[g.type],D;if(S){let I=bi[S];D=tr.clone(I.uniforms)}else D=g.uniforms;return D}l(w,"getUniforms");function R(g,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new FS(i,S,g,s),u.push(D),h.set(S,D)),D}l(R,"acquireProgram");function A(g){if(--g.usedTimes===0){let S=u.indexOf(g);u[S]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}l(A,"releaseProgram");function C(g){o.remove(g)}l(C,"releaseShaderCache");function E(){o.dispose()}return l(E,"dispose"),{getParameters:v,getProgramCacheKey:y,getUniforms:w,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:E}}l(zS,"WebGLPrograms");function kS(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(kS,"WebGLProperties");function GS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(GS,"painterSortStable");function ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(ag,"reversePainterSortStable");function og(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}l(a,"materialVariant");function o(d,p,v,y,_,x){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:_,group:x},i[e]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=v,w.materialVariant=a(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=_,w.group=x),e++,w}l(o,"getNextRenderItem");function c(d,p,v,y,_,x,w){w.reversedDepth===!0&&(_=-_);let R=o(d,p,v,y,_,x);v.transmission>0?n.push(R):v.transparent===!0?s.push(R):t.push(R)}l(c,"push");function u(d,p,v,y,_,x){let w=o(d,p,v,y,_,x);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}l(u,"unshift");function h(d,p){t.length>1&&t.sort(d||GS),n.length>1&&n.sort(p||ag),s.length>1&&s.sort(p||ag)}l(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:f,sort:h}}l(og,"WebGLRenderList");function VS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new og,i.set(n,[a])):s>=r.length?(a=new og,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(VS,"WebGLRenderLists");function HS(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ue};break;case"SpotLight":t={position:new G,direction:new G,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t},"get")}}l(HS,"UniformsCache");function WS(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(WS,"ShadowUniformsCache");var XS=0;function qS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(qS,"shadowCastingAndTexturingLightsFirst");function YS(i){let e=new HS,t=WS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);let s=new G,r=new ot,a=new ot;function o(u){let h=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,v=0,y=0,_=0,x=0,w=0,R=0,A=0,C=0,E=0,g=0,S=0,D=0,I=0;u.sort(qS);for(let F=0,B=u.length;F<B;F++){let P=u[F],X=P.color,ee=P.intensity,Z=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vi?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=X.r*ee,f+=X.g*ee,d+=X.b*ee;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],ee);I++}else if(P.isSunLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,ie=t.get(P);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[v]=ie,n.sunShadowMap[v]=$;let ue=q.getViewportCount();for(let Te=0;Te<ue;Te++)n.sunShadowMatrix[y+Te]=q.getMatrix(Te),n.sunShadowCascade[y+Te]=q._cascadeData[Te];y+=ue,v++}n.sun[p]=V,p++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,ie=t.get(P);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.directionalShadow[_]=ie,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=P.shadow.matrix,C++}n.directional[_]=V,_++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(X).multiplyScalar(ee),V.distance=Z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[w]=V;let q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,q.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[w]=q.matrix,P.castShadow){let ie=t.get(P);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.spotShadow[w]=ie,n.spotShadowMap[w]=$,g++}w++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(X).multiplyScalar(ee),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[R]=V,R++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let q=P.shadow,ie=t.get(P);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,n.pointShadow[x]=ie,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=P.shadow.matrix,E++}n.point[x]=V,x++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(ee),V.groundColor.copy(P.groundColor).multiplyScalar(ee),n.hemi[A]=V,A++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let N=n.hash;(N.sunLength!==p||N.directionalLength!==_||N.pointLength!==x||N.spotLength!==w||N.rectAreaLength!==R||N.hemiLength!==A||N.numSunShadows!==v||N.numDirectionalShadows!==C||N.numPointShadows!==E||N.numSpotShadows!==g||N.numSpotMaps!==S||N.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=_,n.spot.length=w,n.rectArea.length=R,n.point.length=x,n.hemi.length=A,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,N.sunLength=p,N.directionalLength=_,N.pointLength=x,N.spotLength=w,N.rectAreaLength=R,N.hemiLength=A,N.numSunShadows=v,N.numDirectionalShadows=C,N.numPointShadows=E,N.numSpotShadows=g,N.numSpotMaps=S,N.numLightProbes=I,n.version=XS++)}l(o,"setup");function c(u,h){let f=0,d=0,p=0,v=0,y=0,_=0,x=h.matrixWorldInverse;for(let w=0,R=u.length;w<R;w++){let A=u[w];if(A.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(x),f++}else if(A.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),d++}else if(A.isSpotLight){let C=n.spot[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),v++}else if(A.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),a.identity(),r.copy(A.matrixWorld),r.premultiply(x),a.extractRotation(r),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(A.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),p++}else if(A.isHemisphereLight){let C=n.hemi[_];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(x),_++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(YS,"WebGLLights");function lg(i){let e=new YS(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(lg,"WebGLRenderState");function ZS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new lg(i),e.set(s,[o])):r>=a.length?(o=new lg(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(ZS,"WebGLRenderStates");var $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
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
}`,KS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],QS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],cg=new ot,So=new G,zf=new G;function jS(i,e,t){let n=new gs,s=new Ge,r=new Ge,a=new vt,o=new cc,c=new uc,u={},h=t.maxTextureSize,f={[Ss]:dn,[dn]:Ss,[xi]:xi},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:$S,fragmentShader:JS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let v=new Rt;v.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new yt(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let x=this.type;this.render=function(E,g,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===zc&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);let D=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending($s),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=x!==this.type;B&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=E.length;P<X;P++){let ee=E[P],Z=ee.shadow;if(Z===void 0){ke("WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let $=Z.getFrameExtents();s.multiply($),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Z.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=V,Z.map===null||B===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ta){if(ee.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Sn(s.x,s.y,{format:vi,type:An,minFilter:kt,magFilter:kt,generateMipmaps:!1}),Z.map.texture.name=ee.name+".shadowMap",Z.map.depthTexture=new Wi(s.x,s.y,jn),Z.map.depthTexture.name=ee.name+".shadowMapDepth",Z.map.depthTexture.format=Gi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ct,Z.map.depthTexture.magFilter=Ct}else ee.isPointLight?(Z.map=new Eo(s.x),Z.map.depthTexture=new so(s.x,Qn)):(Z.map=new Sn(s.x,s.y),Z.map.depthTexture=new Wi(s.x,s.y,Qn)),Z.map.depthTexture.name=ee.name+".shadowMap",Z.map.depthTexture.format=Gi,this.type===po?(Z.map.depthTexture.compareFunction=V?md:pd,Z.map.depthTexture.minFilter=kt,Z.map.depthTexture.magFilter=kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ct,Z.map.depthTexture.magFilter=Ct);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();ee.isPointLight!==!0&&Z.updateMatrices(ee,S);let ie=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:S.layers;for(let ue=0;ue<q;ue++){let Te=Z.getCamera(ue);if(ee.isPointLight){let K=Z.camera,ce=Z.matrix,Me=ee.distance||K.far;Me!==K.far&&(K.far=Me,K.updateProjectionMatrix()),So.setFromMatrixPosition(ee.matrixWorld),K.position.copy(So),zf.copy(K.position),zf.add(KS[ue]),K.up.copy(QS[ue]),K.lookAt(zf),K.updateMatrixWorld(),ce.makeTranslation(-So.x,-So.y,-So.z),cg.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(cg,K.coordinateSystem,K.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,ue),i.clear();else{ue===0&&(i.setRenderTarget(Z.map),i.clear());let K=Z.getViewport(ue);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),F.viewport(a)}n=Z.getFrustum(ue),A(g,S,Te,ee,ie,this.type)}Z.isPointLightShadow!==!0&&this.type===ta&&w(Z,S),Z.needsUpdate=!1}x=this.type,_.needsUpdate=!1,i.setRenderTarget(D,I,N)};function w(E,g){let S=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Sn(s.x,s.y,{format:vi,type:An}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,S,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,S,p,y,null)}l(w,"VSMPass");function R(E,g,S,D){let I=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let F=I.uuid,B=g.uuid,P=u[F];P===void 0&&(P={},u[F]=P);let X=P[B];X===void 0&&(X=I.clone(),P[B]=X,g.addEventListener("dispose",C)),I=X}if(I.visible=g.visible,I.wireframe=g.wireframe,D===ta?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:f[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=S}return I}l(R,"getDepthMaterial");function A(E,g,S,D,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ta)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=e.update(E),X=E.material;if(Array.isArray(X)){let ee=P.groups;for(let Z=0,$=ee.length;Z<$;Z++){let V=ee[Z],q=X[V.materialIndex];if(q&&q.visible){let ie=R(E,q,D,N);E.onBeforeShadow(i,E,g,S,P,ie,V),i.renderBufferDirect(S,null,P,ie,E,V),E.onAfterShadow(i,E,g,S,P,ie,V)}}}else if(X.visible){let ee=R(E,X,D,N);E.onBeforeShadow(i,E,g,S,P,ee,null),i.renderBufferDirect(S,null,P,ee,E,null),E.onAfterShadow(i,E,g,S,P,ee,null)}}let B=E.children;for(let P=0,X=B.length;P<X;P++)A(B[P],g,S,D,I,N)}l(A,"renderObject");function C(E){E.target.removeEventListener("dispose",C);for(let S in u){let D=u[S],I=E.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}l(C,"onMaterialDispose")}l(jS,"WebGLShadowMap");function ew(i,e){function t(){let L=!1,se=new vt,j=null,ge=new vt(0,0,0,0);return{setMask:l(function(he){j!==he&&!L&&(i.colorMask(he,he,he,he),j=he)},"setMask"),setLocked:l(function(he){L=he},"setLocked"),setClear:l(function(he,fe,De,Ze,le){le===!0&&(he*=Ze,fe*=Ze,De*=Ze),se.set(he,fe,De,Ze),ge.equals(se)===!1&&(i.clearColor(he,fe,De,Ze),ge.copy(se))},"setClear"),reset:l(function(){L=!1,j=null,ge.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let L=!1,se=!1,j=null,ge=null,he=null;return{setReversed:l(function(fe){if(se!==fe){let De=e.get("EXT_clip_control");fe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),se=fe;let Ze=he;he=null,this.setClear(Ze)}},"setReversed"),getReversed:l(function(){return se},"getReversed"),setTest:l(function(fe){fe?pe(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},"setTest"),setMask:l(function(fe){j!==fe&&!L&&(i.depthMask(fe),j=fe)},"setMask"),setFunc:l(function(fe){if(se&&(fe=U0[fe]),ge!==fe){switch(fe){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case $l:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},"setFunc"),setLocked:l(function(fe){L=fe},"setLocked"),setClear:l(function(fe){he!==fe&&(he=fe,se&&(fe=1-fe),i.clearDepth(fe))},"setClear"),reset:l(function(){L=!1,j=null,ge=null,he=null,se=!1},"reset")}}l(n,"DepthBuffer");function s(){let L=!1,se=null,j=null,ge=null,he=null,fe=null,De=null,Ze=null,le=null;return{setTest:l(function(Be){L||(Be?pe(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},"setTest"),setMask:l(function(Be){se!==Be&&!L&&(i.stencilMask(Be),se=Be)},"setMask"),setFunc:l(function(Be,Ye,we){(j!==Be||ge!==Ye||he!==we)&&(i.stencilFunc(Be,Ye,we),j=Be,ge=Ye,he=we)},"setFunc"),setOp:l(function(Be,Ye,we){(fe!==Be||De!==Ye||Ze!==we)&&(i.stencilOp(Be,Ye,we),fe=Be,De=Ye,Ze=we)},"setOp"),setLocked:l(function(Be){L=Be},"setLocked"),setClear:l(function(Be){le!==Be&&(i.clearStencil(Be),le=Be)},"setClear"),reset:l(function(){L=!1,se=null,j=null,ge=null,he=null,fe=null,De=null,Ze=null,le=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},f={},d={},p=new WeakMap,v=[],y=null,_=!1,x=null,w=null,R=null,A=null,C=null,E=null,g=null,S=new Ue(0,0,0),D=0,I=!1,N=null,F=null,B=null,P=null,X=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,$=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=$>=2);let q=null,ie={},ue=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),K=new vt().fromArray(ue),ce=new vt().fromArray(Te);function Me(L,se,j,ge){let he=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<j;De++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(se+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return fe}l(Me,"createTexture");let Ce={};Ce[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(Xr),It(!1),ct(Yh),pe(i.CULL_FACE),lt($s);function pe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}l(pe,"enable");function Fe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}l(Fe,"disable");function ut(L,se){return d[L]!==se?(i.bindFramebuffer(L,se),d[L]=se,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}l(ut,"bindFramebuffer");function Ne(L,se){let j=v,ge=!1;if(L){j=p.get(se),j===void 0&&(j=[],p.set(se,j));let he=L.textures;if(j.length!==he.length||j[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,De=he.length;fe<De;fe++)j[fe]=i.COLOR_ATTACHMENT0+fe;j.length=he.length,ge=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ge=!0);ge&&i.drawBuffers(j)}l(Ne,"drawBuffers");function qe(L){return y!==L?(i.useProgram(L),y=L,!0):!1}l(qe,"useProgram");let tt={[Js]:i.FUNC_ADD,[s0]:i.FUNC_SUBTRACT,[r0]:i.FUNC_REVERSE_SUBTRACT};tt[a0]=i.MIN,tt[o0]=i.MAX;let Oe={[l0]:i.ZERO,[c0]:i.ONE,[u0]:i.SRC_COLOR,[Kh]:i.SRC_ALPHA,[g0]:i.SRC_ALPHA_SATURATE,[p0]:i.DST_COLOR,[d0]:i.DST_ALPHA,[h0]:i.ONE_MINUS_SRC_COLOR,[Qh]:i.ONE_MINUS_SRC_ALPHA,[m0]:i.ONE_MINUS_DST_COLOR,[f0]:i.ONE_MINUS_DST_ALPHA,[x0]:i.CONSTANT_COLOR,[_0]:i.ONE_MINUS_CONSTANT_COLOR,[v0]:i.CONSTANT_ALPHA,[y0]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(L,se,j,ge,he,fe,De,Ze,le,Be){if(L===$s){_===!0&&(Fe(i.BLEND),_=!1);return}if(_===!1&&(pe(i.BLEND),_=!0),L!==i0){if(L!==x||Be!==I){if((w!==Js||C!==Js)&&(i.blendEquation(i.FUNC_ADD),w=Js,C=Js),Be)switch(L){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zh:i.blendFunc(i.ONE,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $h:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}R=null,A=null,E=null,g=null,S.set(0,0,0),D=0,x=L,I=Be}return}he=he||se,fe=fe||j,De=De||ge,(se!==w||he!==C)&&(i.blendEquationSeparate(tt[se],tt[he]),w=se,C=he),(j!==R||ge!==A||fe!==E||De!==g)&&(i.blendFuncSeparate(Oe[j],Oe[ge],Oe[fe],Oe[De]),R=j,A=ge,E=fe,g=De),(Ze.equals(S)===!1||le!==D)&&(i.blendColor(Ze.r,Ze.g,Ze.b,le),S.copy(Ze),D=le),x=L,I=!1}l(lt,"setBlending");function Mt(L,se){L.side===xi?Fe(i.CULL_FACE):pe(i.CULL_FACE);let j=L.side===dn;se&&(j=!j),It(j),L.blending===na&&L.transparent===!1?lt($s):lt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}l(Mt,"setMaterial");function It(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}l(It,"setFlipSided");function ct(L){L!==t0?(pe(i.CULL_FACE),L!==F&&(L===Yh?i.cullFace(i.BACK):L===n0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),F=L}l(ct,"setCullFace");function yn(L){L!==B&&(Z&&i.lineWidth(L),B=L)}l(yn,"setLineWidth");function Ft(L,se,j){L?(pe(i.POLYGON_OFFSET_FILL),(P!==se||X!==j)&&(P=se,X=j,a.getReversed()&&(se=-se,j=-j),i.polygonOffset(se,j))):Fe(i.POLYGON_OFFSET_FILL)}l(Ft,"setPolygonOffset");function Fn(L){L?pe(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}l(Fn,"setScissorTest");function On(L){L===void 0&&(L=i.TEXTURE0+ee-1),q!==L&&(i.activeTexture(L),q=L)}l(On,"activeTexture");function Bn(L,se,j){j===void 0&&(q===null?j=i.TEXTURE0+ee-1:j=q);let ge=ie[j];ge===void 0&&(ge={type:void 0,texture:void 0},ie[j]=ge),(ge.type!==L||ge.texture!==se)&&(q!==j&&(i.activeTexture(j),q=j),i.bindTexture(L,se||Ce[L]),ge.type=L,ge.texture=se)}l(Bn,"bindTexture");function O(){let L=ie[q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}l(O,"unbindTexture");function zn(){try{i.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(zn,"compressedTexImage2D");function gt(){try{i.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(gt,"compressedTexImage3D");function xt(){try{i.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(xt,"texSubImage2D");function be(){try{i.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(be,"texSubImage3D");function Lt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(Lt,"compressedTexSubImage2D");function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(ze,"compressedTexSubImage3D");function We(){try{i.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(We,"texStorage2D");function T(){try{i.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(T,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(b,"texImage2D");function W(){try{i.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}l(W,"texImage3D");function oe(L){return f[L]!==void 0?f[L]:i.getParameter(L)}l(oe,"getParameter");function re(L,se){f[L]!==se&&(i.pixelStorei(L,se),f[L]=se)}l(re,"pixelStorei");function de(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}l(de,"scissor");function _e(L){ce.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}l(_e,"viewport");function te(L,se){let j=u.get(se);j===void 0&&(j=new WeakMap,u.set(se,j));let ge=j.get(L);ge===void 0&&(ge=i.getUniformBlockIndex(se,L.name),i.uniformBlockBinding(se,ge,ge),j.set(L,ge))}l(te,"updateUBOMapping");function ne(L,se,j){let he=u.get(se).get(L);c[he]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,j),c[he]=j)}l(ne,"uniformBlockBinding");function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},q=null,ie={},d={},c={},p=new WeakMap,v=[],y=null,_=!1,x=null,w=null,R=null,A=null,C=null,E=null,g=null,S=new Ue(0,0,0),D=0,I=!1,N=null,F=null,B=null,P=null,X=null,K.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(me,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Fe,bindFramebuffer:ut,drawBuffers:Ne,useProgram:qe,setBlending:lt,setMaterial:Mt,setFlipSided:It,setCullFace:ct,setLineWidth:yn,setPolygonOffset:Ft,setScissorTest:Fn,activeTexture:On,bindTexture:Bn,unbindTexture:O,compressedTexImage2D:zn,compressedTexImage3D:gt,texImage2D:b,texImage3D:W,pixelStorei:re,getParameter:oe,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:We,texStorage3D:T,texSubImage2D:xt,texSubImage3D:be,compressedTexSubImage2D:Lt,compressedTexSubImage3D:ze,scissor:de,viewport:_e,reset:me}}l(ew,"WebGLState");function tw(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,h=new WeakMap,f=new Set,d,p=new WeakMap,v=new Set,y=new FinalizationRegistry(T=>v.delete(T)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,b){return _?new OffscreenCanvas(T,b):Za("canvas")}l(x,"createCanvas");function w(T,b,W){let oe=1,re=We(T);if((re.width>W||re.height>W)&&(oe=W/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let de=Math.floor(oe*re.width),_e=Math.floor(oe*re.height);d===void 0&&(d=x(de,_e));let te=b?x(de,_e):d;return te.width=de,te.height=_e,te.getContext("2d").drawImage(T,0,0,de,_e),ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+_e+")."),te}else return"data"in T&&ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}l(w,"resizeImage");function R(T){return T.generateMipmaps}l(R,"textureNeedsGenerateMipmaps");function A(T){i.generateMipmap(T)}l(A,"generateMipmap");function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(C,"getTargetType");function E(T,b,W,oe,re,de=!1){if(T!==null){if(i[T]!==void 0)return i[T];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=b;if(b===i.RED&&(W===i.FLOAT&&(te=i.R32F),W===i.HALF_FLOAT&&(te=i.R16F),W===i.UNSIGNED_BYTE&&(te=i.R8),W===i.UNSIGNED_SHORT&&_e&&(te=_e.R16_EXT),W===i.SHORT&&_e&&(te=_e.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.R8UI),W===i.UNSIGNED_SHORT&&(te=i.R16UI),W===i.UNSIGNED_INT&&(te=i.R32UI),W===i.BYTE&&(te=i.R8I),W===i.SHORT&&(te=i.R16I),W===i.INT&&(te=i.R32I)),b===i.RG&&(W===i.FLOAT&&(te=i.RG32F),W===i.HALF_FLOAT&&(te=i.RG16F),W===i.UNSIGNED_BYTE&&(te=i.RG8),W===i.UNSIGNED_SHORT&&_e&&(te=_e.RG16_EXT),W===i.SHORT&&_e&&(te=_e.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RG8UI),W===i.UNSIGNED_SHORT&&(te=i.RG16UI),W===i.UNSIGNED_INT&&(te=i.RG32UI),W===i.BYTE&&(te=i.RG8I),W===i.SHORT&&(te=i.RG16I),W===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGB8UI),W===i.UNSIGNED_SHORT&&(te=i.RGB16UI),W===i.UNSIGNED_INT&&(te=i.RGB32UI),W===i.BYTE&&(te=i.RGB8I),W===i.SHORT&&(te=i.RGB16I),W===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),W===i.UNSIGNED_INT&&(te=i.RGBA32UI),W===i.BYTE&&(te=i.RGBA8I),W===i.SHORT&&(te=i.RGBA16I),W===i.INT&&(te=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&_e&&(te=_e.RGB16_EXT),W===i.SHORT&&_e&&(te=_e.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),b===i.RGBA){let ne=de?Ya:je.getTransfer(re);W===i.FLOAT&&(te=i.RGBA32F),W===i.HALF_FLOAT&&(te=i.RGBA16F),W===i.UNSIGNED_BYTE&&(te=ne===rt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_e&&(te=_e.RGBA16_EXT),W===i.SHORT&&_e&&(te=_e.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}l(E,"getInternalFormat");function g(T,b){let W;return T?b===null||b===Qn||b===Qs?W=i.DEPTH24_STENCIL8:b===jn?W=i.DEPTH32F_STENCIL8:b===sa&&(W=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qn||b===Qs?W=i.DEPTH_COMPONENT24:b===jn?W=i.DEPTH_COMPONENT32F:b===sa&&(W=i.DEPTH_COMPONENT16),W}l(g,"getInternalDepthFormat");function S(T,b){return R(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==kt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}l(S,"getMipLevels");function D(T){let b=new WeakRef(T);n.get(T).__ref=b,v.add(b),y.register(T,b,b)}l(D,"track");function I(T){let b=n.get(T).__ref;b!==void 0&&(v.delete(b),y.unregister(b))}l(I,"untrack");function N(T){B(T.target)}l(N,"onTextureDispose");function F(T){P(T.target)}l(F,"onRenderTargetDispose");function B(T){T.removeEventListener("dispose",N),I(T),ee(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}l(B,"destroyTexture");function P(T){T.removeEventListener("dispose",F),I(T),$(T)}l(P,"destroyRenderTarget");function X(){for(let T of v){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):B(b))}v.clear(),f.clear()}l(X,"dispose");function ee(T){let b=n.get(T);if(b.__webglInit===void 0)return;let W=T.source,oe=p.get(W);if(oe){let re=oe[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&Z(T),Object.keys(oe).length===0&&p.delete(W)}n.remove(T)}l(ee,"deallocateTexture");function Z(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let W=T.source,oe=p.get(W);delete oe[b.__cacheKey],a.memory.textures--}l(Z,"deleteTexture");function $(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=T.depthTexture;if(W&&W.renderTarget===T&&B(W),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let de=0;de<b.__webglFramebuffer[re].length;de++)i.deleteFramebuffer(b.__webglFramebuffer[re][de]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let oe=T.textures;for(let re=0,de=oe.length;re<de;re++){let _e=n.get(oe[re]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(oe[re])}n.remove(T)}l($,"deallocateRenderTarget");let V=0;function q(){V=0}l(q,"resetTextureUnits");function ie(){return V}l(ie,"getTextureUnits");function ue(T){V=T}l(ue,"setTextureUnits");function Te(){let T=V;return T>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,T}l(Te,"allocateTextureUnit");function K(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}l(K,"getTextureCacheKey");function ce(T,b){let W=n.get(T);if(T.isVideoTexture&&Lt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&W.__version!==T.version){let oe=T.image;if(oe===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(W,T,b);return}}else T.isExternalTexture&&(W.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}l(ce,"setTexture2D");function Me(T,b){let W=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){Mt(W,T,b);return}else T.isExternalTexture&&(W.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}l(Me,"setTexture2DArray");function Ce(T,b){let W=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){Mt(W,T,b);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}l(Ce,"setTexture3D");function pe(T,b){let W=n.get(T);if(T.version>0&&W.__version!==T.version){It(W,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}l(pe,"setTextureCube");let Fe={[Zs]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[jl]:i.MIRRORED_REPEAT},ut={[Ct]:i.NEAREST,[S0]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Vc]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Ne={[T0]:i.NEVER,[gd]:i.ALWAYS,[C0]:i.LESS,[pd]:i.LEQUAL,[R0]:i.EQUAL,[md]:i.GEQUAL,[P0]:i.GREATER,[I0]:i.NOTEQUAL};function qe(T,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kt||b.magFilter===Vc||b.magFilter===go||b.magFilter===Kn||b.minFilter===kt||b.minFilter===Vc||b.minFilter===go||b.minFilter===Kn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Fe[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Fe[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Fe[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ct||b.minFilter!==go&&b.minFilter!==Kn||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(qe,"setTextureParameters");function tt(T,b){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",N),D(b));let oe=b.source,re=p.get(oe);re===void 0&&(re={},p.set(oe,re));let de=K(b);if(de!==T.__cacheKey){re[de]===void 0&&(re[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),re[de].usedTimes++;let _e=re[T.__cacheKey];_e!==void 0&&(re[T.__cacheKey].usedTimes--,_e.usedTimes===0&&Z(b)),T.__cacheKey=de,T.__webglTexture=re[de].texture}return W}l(tt,"initTexture");function Oe(T,b,W){return Math.floor(Math.floor(T/W)/b)}l(Oe,"getRow");function lt(T,b,W,oe){let de=T.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,oe,b.data);else{de.sort((L,se)=>L.start-se.start);let _e=0;for(let L=1;L<de.length;L++){let se=de[_e],j=de[L],ge=se.start+se.count,he=Oe(j.start,b.width,4),fe=Oe(se.start,b.width,4);j.start<=ge+1&&he===fe&&Oe(j.start+j.count-1,b.width,4)===he?se.count=Math.max(se.count,j.start+j.count-se.start):(++_e,de[_e]=j)}de.length=_e+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,se=de.length;L<se;L++){let j=de[L],ge=Math.floor(j.start/4),he=Math.ceil(j.count/4),fe=ge%b.width,De=Math.floor(ge/b.width),Ze=he,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,fe,De,Ze,le,W,oe,b.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}l(lt,"updateTexture");function Mt(T,b,W){let oe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=i.TEXTURE_3D);let re=tt(T,b),de=b.source;t.bindTexture(oe,T.__webglTexture,i.TEXTURE0+W);let _e=n.get(de);if(de.version!==_e.__version||re===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=je.getPrimaries(je.workingColorSpace),Be=b.colorSpace===Yi?null:je.getPrimaries(b.colorSpace),Ye=b.colorSpace===Yi||le===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ne=w(b.image,!1,s.maxTextureSize);ne=ze(b,ne);let me=r.convert(b.format,b.colorSpace),L=r.convert(b.type),se=E(b.internalFormat,me,L,b.normalized,b.colorSpace,b.isVideoTexture);qe(oe,b);let j,ge=b.mipmaps,he=b.isVideoTexture!==!0,fe=_e.__version===void 0||re===!0,De=de.dataReady,Ze=S(b,ne);if(b.isDepthTexture)se=g(b.format===qi,b.type),fe&&(he?t.texStorage2D(i.TEXTURE_2D,1,se,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,se,ne.width,ne.height,0,me,L,null));else if(b.isDataTexture)if(ge.length>0){he&&fe&&t.texStorage2D(i.TEXTURE_2D,Ze,se,ge[0].width,ge[0].height);for(let le=0,Be=ge.length;le<Be;le++)j=ge[le],he?De&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,j.width,j.height,me,L,j.data):t.texImage2D(i.TEXTURE_2D,le,se,j.width,j.height,0,me,L,j.data);b.generateMipmaps=!1}else he?(fe&&t.texStorage2D(i.TEXTURE_2D,Ze,se,ne.width,ne.height),De&&lt(b,ne,me,L)):t.texImage2D(i.TEXTURE_2D,0,se,ne.width,ne.height,0,me,L,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){he&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,se,ge[0].width,ge[0].height,ne.depth);for(let le=0,Be=ge.length;le<Be;le++)if(j=ge[le],b.format!==ei)if(me!==null)if(he){if(De)if(b.layerUpdates.size>0){let Ye=Md(j.width,j.height,b.format,b.type);for(let we of b.layerUpdates){let at=j.data.subarray(we*Ye/j.data.BYTES_PER_ELEMENT,(we+1)*Ye/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,we,j.width,j.height,1,me,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,j.width,j.height,ne.depth,me,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,se,j.width,j.height,ne.depth,0,j.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,j.width,j.height,ne.depth,me,L,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,se,j.width,j.height,ne.depth,0,me,L,j.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{he&&fe&&t.texStorage2D(i.TEXTURE_2D,Ze,se,ge[0].width,ge[0].height);for(let le=0,Be=ge.length;le<Be;le++)j=ge[le],b.format!==ei?me!==null?he?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,j.width,j.height,me,j.data):t.compressedTexImage2D(i.TEXTURE_2D,le,se,j.width,j.height,0,j.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?De&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,j.width,j.height,me,L,j.data):t.texImage2D(i.TEXTURE_2D,le,se,j.width,j.height,0,me,L,j.data)}else if(b.isDataArrayTexture)if(he){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,se,ne.width,ne.height,ne.depth),De)if(b.layerUpdates.size>0){let le=Md(ne.width,ne.height,b.format,b.type);for(let Be of b.layerUpdates){let Ye=ne.data.subarray(Be*le/ne.data.BYTES_PER_ELEMENT,(Be+1)*le/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ne.width,ne.height,1,me,L,Ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,L,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ne.width,ne.height,ne.depth,0,me,L,ne.data);else if(b.isData3DTexture)he?(fe&&t.texStorage3D(i.TEXTURE_3D,Ze,se,ne.width,ne.height,ne.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,L,ne.data)):t.texImage3D(i.TEXTURE_3D,0,se,ne.width,ne.height,ne.depth,0,me,L,ne.data);else if(b.isFramebufferTexture){if(fe)if(he)t.texStorage2D(i.TEXTURE_2D,Ze,se,ne.width,ne.height);else{let le=ne.width,Be=ne.height;for(let Ye=0;Ye<Ze;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,se,le,Be,0,me,L,null),le>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ne.parentNode!==le){le.appendChild(ne),f.add(b),le.onpaint=Be=>{let Ye=Be.changedElements;for(let we of f)Ye.includes(we.image)&&(we.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Ye=i.RGBA,we=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ye,we,at,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(he&&fe){let le=We(ge[0]);t.texStorage2D(i.TEXTURE_2D,Ze,se,le.width,le.height)}for(let le=0,Be=ge.length;le<Be;le++)j=ge[le],he?De&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me,L,j):t.texImage2D(i.TEXTURE_2D,le,se,me,L,j);b.generateMipmaps=!1}else if(he){if(fe){let le=We(ne);t.texStorage2D(i.TEXTURE_2D,Ze,se,le.width,le.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,L,ne)}else t.texImage2D(i.TEXTURE_2D,0,se,me,L,ne);R(b)&&b.mipmapsAutoUpdate===!0&&A(oe),_e.__version=de.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(Mt,"uploadTexture");function It(T,b,W){if(b.image.length!==6)return;let oe=tt(T,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let de=n.get(re);if(re.version!==de.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);let _e=je.getPrimaries(je.workingColorSpace),te=b.colorSpace===Yi?null:je.getPrimaries(b.colorSpace),ne=b.colorSpace===Yi||_e===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let me=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,se=[];for(let we=0;we<6;we++)!me&&!L?se[we]=w(b.image[we],!0,s.maxCubemapSize):se[we]=L?b.image[we].image:b.image[we],se[we]=ze(b,se[we]);let j=se[0],ge=r.convert(b.format,b.colorSpace),he=r.convert(b.type),fe=E(b.internalFormat,ge,he,b.normalized,b.colorSpace),De=b.isVideoTexture!==!0,Ze=de.__version===void 0||oe===!0,le=re.dataReady,Be=S(b,j);qe(i.TEXTURE_CUBE_MAP,b);let Ye;if(b.isDepthTexture){if(fe=g(b.format===qi,b.type),Ze)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,j.width,j.height);else for(let we=0;we<6;we++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,fe,j.width,j.height,0,ge,he,null)}else if(me){De&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,fe,j.width,j.height);for(let we=0;we<6;we++){Ye=se[we].mipmaps;for(let at=0;at<Ye.length;at++){let Ot=Ye[at];b.format!==ei?ge!==null?De?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at,0,0,Ot.width,Ot.height,ge,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at,fe,Ot.width,Ot.height,0,Ot.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at,0,0,Ot.width,Ot.height,ge,he,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at,fe,Ot.width,Ot.height,0,ge,he,Ot.data)}}}else{if(Ye=b.mipmaps,De&&Ze){Ye.length>0&&Be++;let we=We(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,fe,we.width,we.height)}for(let we=0;we<6;we++)if(L){De?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,se[we].width,se[we].height,ge,he,se[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,fe,se[we].width,se[we].height,0,ge,he,se[we].data);for(let at=0;at<Ye.length;at++){let is=Ye[at].image[we].image;De?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at+1,0,0,is.width,is.height,ge,he,is.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at+1,fe,is.width,is.height,0,ge,he,is.data)}}else{De?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ge,he,se[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,fe,ge,he,se[we]);for(let at=0;at<Ye.length;at++){let Ot=Ye[at];De?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at+1,0,0,ge,he,Ot.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,at+1,fe,ge,he,Ot.image[we])}}}R(b)&&b.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),de.__version=re.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(It,"uploadCubeTexture");function ct(T,b,W,oe,re,de){let _e=r.convert(W.format,W.colorSpace),te=r.convert(W.type),ne=E(W.internalFormat,_e,te,W.normalized,W.colorSpace),me=n.get(b),L=n.get(W);if(L.__renderTarget=b,!me.__hasExternalTextures){let se=Math.max(1,b.width>>de),j=Math.max(1,b.height>>de);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,de,ne,se,j,b.depth,0,_e,te,null):t.texImage2D(re,de,ne,se,j,0,_e,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),be(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,L.__webglTexture,0,xt(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,L.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(ct,"setupFrameBufferTexture");function yn(T,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let oe=b.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,de=g(b.stencilBuffer,re),_e=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(b),de,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(b),de,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{let oe=b.textures;for(let re=0;re<oe.length;re++){let de=oe[re],_e=r.convert(de.format,de.colorSpace),te=r.convert(de.type),ne=E(de.internalFormat,_e,te,de.normalized,de.colorSpace);be(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(b),ne,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(b),ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ne,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(yn,"setupRenderBufferStorage");function Ft(T,b,W){let oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(b.depthTexture);re.__renderTarget=b;let de=oe?b.depthTexture.image[0]:b.depthTexture.image;(!re.__webglTexture||de.width!==b.width||de.height!==b.height)&&(de.width=b.width,de.height=b.height,b.depthTexture.needsUpdate=!0),oe?pe(b.depthTexture,0):ce(b.depthTexture,0);let _e=re.__webglTexture,te=xt(b),ne=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,me=b.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gi)be(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ne,_e,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,me,ne,_e,0);else if(b.depthTexture.format===qi)be(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ne,_e,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,me,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(Ft,"setupDepthTexture");function Fn(T){let b=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let oe=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){let re=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",re)},"disposeEvent");oe.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=oe}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let oe=0;oe<6;oe++)Ft(b.__webglFramebuffer[oe],T,oe);else T.texture.mipmaps.length>0?Ft(b.__webglFramebuffer[0],T,0):Ft(b.__webglFramebuffer,T,0);else if(W){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=i.createRenderbuffer(),yn(b.__webglDepthbuffer[oe],T,!1);else{let re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),yn(b.__webglDepthbuffer,T,!1);else{let re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Fn,"setupDepthRenderbuffer");function On(T,b,W){let oe=n.get(T);b!==void 0&&ct(oe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Fn(T)}l(On,"rebindTextures");function Bn(T){let b=T.texture,W=n.get(T),oe=n.get(b);T.addEventListener("dispose",F),D(T);let re=T.textures,de=T.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=b.version,a.memory.textures++),de){W.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps.length>0){W.__webglFramebuffer[te]=[];for(let ne=0;ne<b.mipmaps.length;ne++)W.__webglFramebuffer[te][ne]=i.createFramebuffer()}else W.__webglFramebuffer[te]=i.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)W.__webglFramebuffer[te]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_e)for(let te=0,ne=re.length;te<ne;te++){let me=n.get(re[te]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&be(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let te=0;te<re.length;te++){let ne=re[te];W.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[te]);let me=r.convert(ne.format,ne.colorSpace),L=r.convert(ne.type),se=E(ne.internalFormat,me,L,ne.normalized,ne.colorSpace,T.isXRRenderTarget===!0),j=xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,se,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,W.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),yn(W.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)ct(W.__webglFramebuffer[te][ne],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else ct(W.__webglFramebuffer[te],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);R(b)?A(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let te=0,ne=re.length;te<ne;te++){let me=re[te],L=n.get(me),se=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,L.__webglTexture),qe(se,me),ct(W.__webglFramebuffer,T,me,i.COLOR_ATTACHMENT0+te,se,0),R(me)&&A(se)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,oe.__webglTexture),qe(te,b),b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)ct(W.__webglFramebuffer[ne],T,b,i.COLOR_ATTACHMENT0,te,ne);else ct(W.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,te,0);R(b)?A(te):b.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Fn(T)}l(Bn,"setupRenderTarget");function O(T){let b=T.textures;for(let W=0,oe=b.length;W<oe;W++){let re=b[W];if(R(re)&&re.mipmapsAutoUpdate===!0){let de=C(T),_e=n.get(re).__webglTexture;t.bindTexture(de,_e),A(de),t.unbindTexture()}}}l(O,"updateRenderTargetMipmap");let zn=[];function gt(T){if(T.samples>0){if(be(T)===!1){let b=T.textures,W=T.width,oe=T.height,re=i.COLOR_BUFFER_BIT,de=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),te=b.length>1;if(te)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<b.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let L=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,W,oe,0,0,W,oe,re,i.NEAREST),c===!0&&(zn.length=0,zn.push(i.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&zn.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let L=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(gt,"updateMultisampleRenderTarget");function xt(T){return Math.min(s.maxSamples,T.samples)}l(xt,"getRenderTargetSamples");function be(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(be,"useMultisampledRTT");function Lt(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}l(Lt,"updateVideoTexture");function ze(T,b){let W=T.colorSpace,oe=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==qa&&W!==Yi&&(je.getTransfer(W)===rt?(oe!==ei||re!==gn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",W)),b}l(ze,"verifyColorSpace");function We(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}l(We,"getDimensions"),this.allocateTextureUnit=Te,this.resetTextureUnits=q,this.getTextureUnits=ie,this.setTextureUnits=ue,this.setTexture2D=ce,this.setTexture2DArray=Me,this.setTexture3D=Ce,this.setTextureCube=pe,this.rebindTextures=On,this.setupRenderTarget=Bn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Fn,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=be,this.dispose=X}l(tw,"WebGLTextures");function nw(i,e){function t(n,s=Yi){let r,a=je.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ud)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===od)return i.BYTE;if(n===ld)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===hd)return i.ALPHA;if(n===dd)return i.RGB;if(n===ei)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===fd)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===xo||n===_o||n===vo||n===yo)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Jc||n===Kc||n===Qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===eu||n===tu||n===nu||n===iu||n===bo||n===su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===eu)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nu)return r.COMPRESSED_R11_EAC;if(n===iu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return r.COMPRESSED_RG11_EAC;if(n===su)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ru||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===xu||n===_u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ru)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ou)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_u)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vu||n===yu||n===bu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vu)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mu||n===Su||n===Mo||n===wu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(nw,"WebGLUtils");var iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sw=`
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

}`,tp=class tp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:iw,fragmentShader:sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(tp,"WebXRDepthSensing");var qf=tp,np=class np extends hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,v=null,y=typeof XRWebGLBinding<"u",_=new qf,x={},w=t.getContextAttributes(),R=null,A=null,C=[],E=[],g=new Ge,S=null,D=null,I=new on;I.viewport=new vt;let N=new on;N.viewport=new vt;let F=[I,N],B=new Mc,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=C[K];return ce===void 0&&(ce=new $r,C[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=C[K];return ce===void 0&&(ce=new $r,C[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=C[K];return ce===void 0&&(ce=new $r,C[K]=ce),ce.getHandSpace()};function ee(K){let ce=E.indexOf(K.inputSource);if(ce===-1)return;let Me=C[ce];Me!==void 0&&(Me.update(K.inputSource,K.frame,u||a),Me.dispatchEvent({type:K.type,data:K.inputSource}))}l(ee,"onSessionEvent");function Z(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",$);for(let K=0;K<C.length;K++){let ce=E[K];ce!==null&&(E[K]=null,C[K].disconnect(ce))}P=null,X=null,_.reset();for(let K in x)delete x[K];if(e.setRenderTarget(R),p=null,d=null,f=null,s=null,A=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(g.width,g.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}l(Z,"onSessionEnd"),this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ce=null,pe=null;w.depth&&(pe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=w.stencil?qi:Gi,Ce=w.stencil?Qs:Qn);let Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Sn(d.textureWidth,d.textureHeight,{format:ei,type:gn,depthTexture:new Wi(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Sn(p.framebufferWidth,p.framebufferHeight,{format:ei,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let ce=0;ce<K.removed.length;ce++){let Me=K.removed[ce],Ce=E.indexOf(Me);Ce>=0&&(E[Ce]=null,C[Ce].disconnect(Me))}for(let ce=0;ce<K.added.length;ce++){let Me=K.added[ce],Ce=E.indexOf(Me);if(Ce===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=E.length){E.push(Me),Ce=Fe;break}else if(E[Fe]===null){E[Fe]=Me,Ce=Fe;break}if(Ce===-1)break}let pe=C[Ce];pe&&pe.connect(Me)}}l($,"onInputSourcesChange");function V(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}l(V,"updateCamera"),this.updateCamera=function(K){if(s===null)return;let ce=K.near,Me=K.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),B.near=N.near=I.near=ce,B.far=N.far=I.far=Me,(P!==B.near||X!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,X=B.far),B.layers.mask=K.layers.mask|6,I.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Ce=K.parent,pe=B.cameras;V(B,Ce);for(let Fe=0;Fe<pe.length;Fe++)V(pe[Fe],Ce);B.projectionMatrix.copy(I.projectionMatrix),B.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),q(K,B,Ce)};function q(K,ce,Me){Me===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=tc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}l(q,"updateUserCamera"),this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(K){return x[K]};let ie=null;function ue(K,ce){if(h=ce.getViewerPose(u||a),v=ce,h!==null){let Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Ce=!1;Me.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let Ne=0;Ne<Me.length;Ne++){let qe=Me[Ne],tt=null;if(p!==null)tt=p.getViewport(qe);else{let lt=f.getViewSubImage(d,qe);tt=lt.viewport,Ne===0&&(e.setRenderTargetTextures(A,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(A))}let Oe=F[Ne];Oe===void 0&&(Oe=new on,Oe.layers.enable(Ne),Oe.viewport=new vt,F[Ne]=Oe),Oe.matrix.fromArray(qe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(qe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ne===0&&(B.matrix.copy(Oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(Oe)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ne=f.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(Ne,s.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ne=0;Ne<Me.length;Ne++){let qe=Me[Ne].camera;if(qe){let tt=x[qe];tt||(tt=new ro,x[qe]=tt);let Oe=f.getCameraImage(qe);tt.sourceTexture=Oe}}}}for(let Me=0;Me<C.length;Me++){let Ce=E[Me],pe=C[Me];Ce!==null&&pe!==void 0&&pe.update(Ce,ce,u||a)}ie&&ie(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}l(ue,"onAnimationFrame");let Te=new ug;Te.setAnimationLoop(ue),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}};l(np,"WebXRManager");var Yf=np,rw=new ot,yg=new He;yg.set(-1,0,0,0,1,0,0,0,1);function aw(i,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}l(t,"refreshTransformUniform");function n(_,x){x.color.getRGB(_.fogColor.value,vd(i)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}l(n,"refreshFogUniforms");function s(_,x,w,R,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(_,x):x.isMeshLambertMaterial?(r(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(_,x),f(_,x)):x.isMeshPhongMaterial?(r(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(_,x),d(_,x),x.isMeshPhysicalMaterial&&p(_,x,A)):x.isMeshMatcapMaterial?(r(_,x),v(_,x)):x.isMeshDepthMaterial?r(_,x):x.isMeshDistanceMaterial?(r(_,x),y(_,x)):x.isMeshNormalMaterial?r(_,x):x.isLineBasicMaterial?(a(_,x),x.isLineDashedMaterial&&o(_,x)):x.isPointsMaterial?c(_,x,w,R):x.isSpriteMaterial?u(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===dn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===dn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);let w=e.get(x),R=w.envMap,A=w.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(A)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(yg),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}l(r,"refreshUniformsCommon");function a(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}l(a,"refreshUniformsLine");function o(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}l(o,"refreshUniformsDash");function c(_,x,w,R){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*w,_.scale.value=R*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}l(c,"refreshUniformsPoints");function u(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}l(u,"refreshUniformsSprites");function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}l(f,"refreshUniformsToon");function d(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}l(d,"refreshUniformsStandard");function p(_,x,w){_.ior.value=x.ior,x.diffuseRoughness>0&&(_.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===dn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.retroreflectivity>0&&(_.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function v(_,x){x.matcap&&(_.matcap.value=x.matcap)}l(v,"refreshUniformsMatcap");function y(_,x){let w=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(aw,"WebGLMaterials");function ow(i,e,t,n){let s={},r={};function a(w,R){let A=R.program;n.uniformBlockBinding(w,A,s[w.id])}l(a,"bind");function o(w,R){let A=s[w.id];A===void 0&&(v(w),A=c(w),s[w.id]=A,w.addEventListener("dispose",_));let C=R.program;n.updateUBOMapping(w,C);let E=e.render.frame;r[w.id]!==E&&(u(w),r[w.id]=E)}l(o,"update");function c(w){let R=i.createBuffer(),A=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),R}l(c,"createBuffer");function u(w){let R=s[w.id],A=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let E=0,g=A.length;E<g;E++){let S=A[E];if(Array.isArray(S))for(let D=0,I=S.length;D<I;D++)h(S[D],E,D,C);else h(S,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(w,R,A,C){if(d(w,R,A,C)===!0){let E=w.__offset,g=w.value;if(Array.isArray(g)){let S=0;for(let D=0;D<g.length;D++){let I=g[D],N=y(I,!0);f(I,w.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}l(h,"updateUniform");function f(w,R,A){typeof w=="number"||typeof w=="boolean"?R[A]=w:w.isMatrix3?(R[A]=w.elements[0],R[A+1]=w.elements[1],R[A+2]=w.elements[2],R[A+3]=0,R[A+4]=w.elements[3],R[A+5]=w.elements[4],R[A+6]=w.elements[5],R[A+7]=0,R[A+8]=w.elements[6],R[A+9]=w.elements[7],R[A+10]=w.elements[8],R[A+11]=0):ArrayBuffer.isView(w)?R.set(w.subarray(0,R.length-A),A):w.toArray(R,A)}l(f,"writeUniformValue");function d(w,R,A,C){let E=w.value,g=R+"_"+A;if(Array.isArray(E)){C[g]===void 0&&(C[g]=[]);let S=C[g],D=!1;for(let I=0;I<E.length;I++)p(E[I],S,I)===!0&&(D=!0);return D}return p(E,C,g)}l(d,"hasUniformChanged");function p(w,R,A){if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:ArrayBuffer.isView(w)?R[A]=w.slice():R[A]=w.clone(),!0;{let C=R[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[A]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(C.equals(w)===!1)return C.copy(w),!0}}return!1}l(p,"hasValueChanged");function v(w){let R=w.uniforms,A=0,C=16;for(let g=0,S=R.length;g<S;g++){let D=Array.isArray(R[g])?R[g]:[R[g]];for(let I=0,N=D.length;I<N;I++){let F=D[I],B=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(R[g])||Array.isArray(F.value),X=A;for(let Z=0,$=B.length;Z<$;Z++){let V=B[Z],q=y(V,P),ie=A%C,ue=ie%q.boundary,Te=ie+ue;A+=ue,Te!==0&&C-Te<q.storage&&(A+=C-Te),Z===0&&(X=A),A+=q.storage}let ee=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new ee((A-X)/Float32Array.BYTES_PER_ELEMENT),F.__offset=X}}let E=A%C;return E>0&&(A+=C-E),w.__size=A,w.__cache={},this}l(v,"prepareUniformsGroup");function y(w,R){let A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=16,A.storage=48):w.isMatrix4?(A.boundary=16,A.storage=64):w.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(A.boundary=16,A.storage=w.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",w),R===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}l(y,"getUniformSize");function _(w){let R=w.target;R.removeEventListener("dispose",_),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}l(_,"onUniformsGroupsDispose");function x(){for(let w in s)i.deleteBuffer(s[w]);s={},r={}}return l(x,"dispose"),{bind:a,update:o,dispose:x}}l(ow,"WebGLUniformsGroups");var lw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function cw(){return yi===null&&(yi=new jr(lw,16,16,vi,An),yi.name="DFG_LUT",yi.minFilter=kt,yi.magFilter=kt,yi.wrapS=Gn,yi.wrapT=Gn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}l(cw,"getDFGLUT");var ip=class ip{constructor(e={}){let{canvas:t=L0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let y=p,_=new Set([Zc,Yc,qc]),x=new Set([gn,Qn,sa,Qs,Wc,Xc]),w=new Uint32Array(4),R=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},C=null,E=null,g=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,F=null,B=null,P=null,X=null;this._outputColorSpace=Tt;let ee=0,Z=0,$=null,V=-1,q=null,ie=new vt,ue=new vt,Te=null,K=new Ue(0),ce=0,Me=t.width,Ce=t.height,pe=1,Fe=null,ut=null,Ne=new vt(0,0,Me,Ce),qe=new vt(0,0,Me,Ce),tt=!1,Oe=new gs,lt=new oc,Mt=!1,It=!1,ct=new ot,yn=new G,Ft=new vt,Fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},On=!1;function Bn(){return $===null?pe:1}l(Bn,"getTargetPixelRatio");let O=n;function zn(M,U){return t.getContext(M,U)}l(zn,"getContext");let gt,xt,be,Lt,ze,We,T,b,W,oe,re,de,_e,te,ne,me,L,se,j,ge,he,fe,De;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",we,!1),O===null){let U="webgl2";if(O=zn(U,M),O===null)throw zn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ve("WebGLRenderer: "+M.message),M}function Ze(){gt=new yM(O),gt.init(),he=new nw(O,gt),xt=new cM(O,gt,e,he),be=new ew(O,gt),xt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),B=O.createFramebuffer(),P=O.createFramebuffer(),X=O.createFramebuffer(),Lt=new SM(O),ze=new kS,We=new tw(O,gt,be,ze,xt,he,Lt),T=new vM(I),b=new Ev(O),fe=new oM(O,b),W=new bM(O,b,Lt,fe),oe=new EM(O,W,b,fe,Lt),se=new wM(O,xt,We),ne=new uM(ze),re=new zS(I,T,gt,xt,fe,ne),de=new aw(I,ze),_e=new VS,te=new ZS(gt),L=new aM(I,T,be,oe,v,c),me=new jS(I,oe,xt),De=new ow(O,Lt,xt,be),j=new lM(O,gt,Lt),ge=new MM(O,gt,Lt),Lt.programs=re.programs,I.capabilities=xt,I.extensions=gt,I.properties=ze,I.renderLists=_e,I.shadowMap=me,I.state=be,I.info=Lt}l(Ze,"initGLContext"),y!==gn&&(D=new TM(y,t.width,t.height,o,s,r));let le=new Yf(I,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(M){M!==void 0&&(pe=M,this.setSize(Me,Ce,!1))},this.getSize=function(M){return M.set(Me,Ce)},this.setSize=function(M,U,J=!0){if(le.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,Ce=U,t.width=Math.floor(M*pe),t.height=Math.floor(U*pe),J===!0&&(t.style.width=M+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Me*pe,Ce*pe).floor()},this.setDrawingBufferSize=function(M,U,J){Me=M,Ce=U,pe=J,t.width=Math.floor(M*J),t.height=Math.floor(U*J),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===gn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(Ne)},this.setViewport=function(M,U,J,H){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,U,J,H),be.viewport(ie.copy(Ne).multiplyScalar(Bn()).round())},this.getScissor=function(M){return M.copy(qe)},this.setScissor=function(M,U,J,H){M.isVector4?qe.set(M.x,M.y,M.z,M.w):qe.set(M,U,J,H),be.scissor(ue.copy(qe).multiplyScalar(Bn()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){be.setScissorTest(tt=M)},this.setOpaqueSort=function(M){Fe=M},this.setTransparentSort=function(M){ut=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,J=!0){let H=0;if(M){let Y=!1;if($!==null){let ve=$.texture.format;Y=_.has(ve)}if(Y){let ve=$.texture.type,Re=x.has(ve),xe=L.getClearColor(),Ee=L.getClearAlpha(),Le=xe.r,Xe=xe.g,Ke=xe.b;Re?(w[0]=Le,w[1]=Xe,w[2]=Ke,w[3]=Ee,O.clearBufferuiv(O.COLOR,0,w)):(R[0]=Le,R[1]=Xe,R[2]=Ke,R[3]=Ee,O.clearBufferiv(O.COLOR,0,R))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",we,!1),L.dispose(),_e.dispose(),te.dispose(),We.dispose(),ze.dispose(),T.dispose(),oe.dispose(),W.dispose(),fe.dispose(),De.dispose(),re.dispose(),le.dispose(),le.removeEventListener("sessionstart",dm),le.removeEventListener("sessionend",fm),ks.stop()};function Be(M){M.preventDefault(),$a("WebGLRenderer: Context Lost."),N=!0}l(Be,"onContextLost");function Ye(){$a("WebGLRenderer: Context Restored."),N=!1;let M=Lt.autoReset,U=me.enabled,J=me.autoUpdate,H=me.needsUpdate,Y=me.type;Ze(),Lt.autoReset=M,me.enabled=U,me.autoUpdate=J,me.needsUpdate=H,me.type=Y}l(Ye,"onContextRestore");function we(M){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(we,"onContextCreationError");function at(M){let U=M.target;U.removeEventListener("dispose",at),Ot(U)}l(at,"onMaterialDispose");function Ot(M){is(M),ze.remove(M)}l(Ot,"deallocateMaterial");function is(M){let U=ze.get(M).programs;U!==void 0&&(U.forEach(function(J){re.releaseProgram(J)}),M.isShaderMaterial&&re.releaseShaderCache(M))}l(is,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,U,J,H,Y,ve){U===null&&(U=Fn);let Re=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,xe=w_(M,U,J,H,Y);be.setMaterial(H,Re);let Ee=J.index,Le=1;if(H.wireframe===!0){if(Ee=W.getWireframeAttribute(J),Ee===void 0)return;Le=2}let Xe=J.drawRange,Ke=J.attributes.position,Pe=Xe.start*Le,Qe=(Xe.start+Xe.count)*Le;ve!==null&&(Pe=Math.max(Pe,ve.start*Le),Qe=Math.min(Qe,(ve.start+ve.count)*Le)),Ee!==null?(Pe=Math.max(Pe,0),Qe=Math.min(Qe,Ee.count)):Ke!=null&&(Pe=Math.max(Pe,0),Qe=Math.min(Qe,Ke.count));let Et=Qe-Pe;if(Et<0||Et===1/0)return;fe.setup(Y,H,xe,J,Ee);let dt,ht=j;if(Ee!==null&&(dt=b.get(Ee),ht=ge,ht.setIndex(dt)),Y.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Bn()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(Y.isLine){let Zt=H.linewidth;Zt===void 0&&(Zt=1),be.setLineWidth(Zt*Bn()),Y.isLineSegments?ht.setMode(O.LINES):Y.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else Y.isPoints?ht.setMode(O.POINTS):Y.isSprite&&ht.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Zt=Y._multiDrawStarts,Ie=Y._multiDrawCounts,rn=Y._multiDrawCount,st=Ee?b.get(Ee).bytesPerElement:1,Gs=ze.get(H).currentProgram.getUniforms();for(let $t=0;$t<rn;$t++)Gs.setValue(O,"_gl_DrawID",$t),ht.render(Zt[$t]/st,Ie[$t])}else if(Y.isInstancedMesh)ht.renderInstances(Pe,Et,Y.count);else if(J.isInstancedBufferGeometry){let Zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ie=Math.min(J.instanceCount,Zt);ht.renderInstances(Pe,Et,Ie)}else ht.render(Pe,Et)};function hm(M,U,J,H){F!==null&&M.isNodeMaterial&&F.setObject(H,M),Mt===!0&&ne.setState(M,J,!1),M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=dn,M.needsUpdate=!0,Ua(M,U,H),M.side=Ss,M.needsUpdate=!0,Ua(M,U,H),M.side=xi):Ua(M,U,H)}l(hm,"prepareMaterial"),this.compile=function(M,U,J=null){J===null&&(J=M),F!==null&&F.renderStart(M,U,J),E=te.get(J),E.init(U),S.push(E),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),M!==J&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),It=this.localClippingEnabled,Mt=ne.init(this.clippingPlanes,It),Mt===!0&&ne.setGlobalState(this.clippingPlanes,U),F!==null&&me.render(E.state.shadowsArray,J,U);let H=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ve=Y.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let xe=ve[Re];hm(xe,J,U,Y),H.add(xe)}else hm(ve,J,U,Y),H.add(ve)}),E=S.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(M,U,J=null){let H=this.compile(M,U,J);return new Promise(Y=>{function ve(){if(H.forEach(function(Re){let Ee=ze.get(Re).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(Re)}),H.size===0){Y(M);return}setTimeout(ve,10)}l(ve,"checkMaterialsReady"),gt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let uh=null;function M_(M){uh&&uh(M)}l(M_,"onAnimationFrame");function dm(){ks.stop()}l(dm,"onXRSessionStart");function fm(){ks.start()}l(fm,"onXRSessionEnd");let ks=new ug;ks.setAnimationLoop(M_),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(M){uh=M,le.setAnimationLoop(M),M===null?ks.stop():ks.start()},le.addEventListener("sessionstart",dm),le.addEventListener("sessionend",fm),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(M,U);let J=le.enabled===!0&&le.isPresenting===!0,H=D!==null&&($===null||J)&&D.begin(I,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,$),E=te.get(M,S.length),E.init(U),E.state.textureUnits=We.getTextureUnits(),S.push(E),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?lt.setFromArrayCamera(U):Oe.setFromProjectionMatrix(ct,Vn,U.reversedDepth),It=this.localClippingEnabled,Mt=ne.init(this.clippingPlanes,It),C=_e.get(M,g.length),C.init(),g.push(C),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Re=I.xr.getDepthSensingMesh();Re!==null&&hh(Re,U,-1/0,I.sortObjects)}hh(M,U,0,I.sortObjects),C.finish(),F!==null&&F.updateLights(E.state.lightsArray),I.sortObjects===!0&&C.sort(Fe,ut),On=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,On&&L.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&ne.beginShadows();let Y=E.state.shadowsArray;if(me.render(Y,M,U),Mt===!0&&ne.endShadows(),(H&&D.hasRenderPass())===!1){let Re=C.opaque,xe=C.transmissive;if(E.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(xe.length>0)for(let Le=0,Xe=Ee.length;Le<Xe;Le++){let Ke=Ee[Le];mm(Re,xe,M,Ke)}On&&L.render(M);for(let Le=0,Xe=Ee.length;Le<Xe;Le++){let Ke=Ee[Le];pm(C,M,Ke,Ke.viewport)}}else xe.length>0&&mm(Re,xe,M,U),On&&L.render(M),pm(C,M,U)}$!==null&&Z===0&&(We.updateMultisampleRenderTarget($),We.updateRenderTargetMipmap($)),H&&D.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),fe.resetDefaultState(),V=-1,q=null,S.pop(),S.length>0?(E=S[S.length-1],We.setTextureUnits(E.state.textureUnits),Mt===!0&&ne.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,F!==null&&F.renderEnd()};function hh(M,U,J,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Re=U.isArrayCamera?lt:Oe;if(!M.frustumCulled||M.intersectsFrustum(Re)){H&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let xe=oe.update(M),Ee=M.material;Ee.visible&&C.push(M,xe,Ee,J,Ft.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Re=U.isArrayCamera?lt:Oe;if(!M.frustumCulled||M.intersectsFrustum(Re)){let xe=oe.update(M),Ee=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ft.copy(xe.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(Ee)){let Le=xe.groups;for(let Xe=0,Ke=Le.length;Xe<Ke;Xe++){let Pe=Le[Xe],Qe=Ee[Pe.materialIndex];Qe&&Qe.visible&&C.push(M,xe,Qe,J,Ft.z,Pe,U)}}else Ee.visible&&C.push(M,xe,Ee,J,Ft.z,null,U)}}}let ve=M.children;for(let Re=0,xe=ve.length;Re<xe;Re++)hh(ve[Re],U,J,H)}l(hh,"projectObject");function pm(M,U,J,H){let{opaque:Y,transmissive:ve,transparent:Re}=M;E.setupLightsView(J),Mt===!0&&ne.setGlobalState(I.clippingPlanes,J),H&&be.viewport(ie.copy(H)),Y.length>0&&_l(Y,U,J),ve.length>0&&_l(ve,U,J),Re.length>0&&_l(Re,U,J),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}l(pm,"renderScene");function mm(M,U,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Pe=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:Pe?An:gn,minFilter:Kn,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ve=E.state.transmissionRenderTarget[H.id],Re=H.viewport||ie;ve.setSize(Re.z*I.transmissionResolutionScale,Re.w*I.transmissionResolutionScale);let xe=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(ve),I.getClearColor(K),ce=I.getClearAlpha(),ce<1&&I.setClearColor(16777215,.5),I.clear(),On&&L.render(J);let Xe=I.toneMapping;I.toneMapping=_i;let Ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Mt===!0&&ne.setGlobalState(I.clippingPlanes,H),_l(M,J,H),We.updateMultisampleRenderTarget(ve),We.updateRenderTargetMipmap(ve),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Qe=0,Et=U.length;Qe<Et;Qe++){let dt=U[Qe],{object:ht,geometry:Zt,material:Ie,group:rn}=dt;if(Ie.side===xi&&ht.layers.test(H.layers)){let st=Ie.side;Ie.side=dn,Ie.needsUpdate=!0,gm(ht,J,H,Zt,Ie,rn),Ie.side=st,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(We.updateMultisampleRenderTarget(ve),We.updateRenderTargetMipmap(ve))}I.setRenderTarget(xe,Ee,Le),I.setClearColor(K,ce),Ke!==void 0&&(H.viewport=Ke),I.toneMapping=Xe}l(mm,"renderTransmissionPass");function _l(M,U,J){let H=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,ve=M.length;Y<ve;Y++){let Re=M[Y],{object:xe,geometry:Ee,group:Le}=Re,Xe=Re.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),xe.layers.test(J.layers)&&gm(xe,U,J,Ee,Xe,Le)}}l(_l,"renderObjects");function gm(M,U,J,H,Y,ve){F!==null&&Y.isNodeMaterial&&F.setObject(M,Y),M.onBeforeRender(I,U,J,H,Y,ve),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(I,U,J,H,M,ve),Y.transparent===!0&&Y.side===xi&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,I.renderBufferDirect(J,U,H,Y,M,ve),Y.side=Ss,Y.needsUpdate=!0,I.renderBufferDirect(J,U,H,Y,M,ve),Y.side=xi):I.renderBufferDirect(J,U,H,Y,M,ve),M.onAfterRender(I,U,J,H,Y,ve)}l(gm,"renderObject");function xm(M){let U=0;for(let J of M)J.texture!==null&&U++;return U}l(xm,"countLightProbeGrids");function Ua(M,U,J){U.isScene!==!0&&(U=Fn);let H=ze.get(M),Y=E.state.lights,ve=E.state.shadowsArray,Re=Y.state.version,xe=re.getParameters(M,Y.state,ve,U,J,E.state.lightProbeGridArray),Ee=re.getProgramCacheKey(xe),Le=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=T.get(M.envMap||H.environment,Xe),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",at),Le=new Map,H.programs=Le,H.programVariants=new Map);let Ke=Le.get(Ee);if(Ke!==void 0){if(H.currentProgram===Ke&&H.lightsStateVersion===Re)return vm(M,xe),Ke}else xe.uniforms=re.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,J,xe),M.onBeforeCompile(xe,I),Ke=re.acquireProgram(xe,Ee),Le.set(Ee,Ke),H.uniforms=xe.uniforms;let Pe=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=ne.uniform),vm(M,xe),H.needsLights=A_(M),H.lightsStateVersion=Re,H.needsLights&&(Pe.ambientLightColor.value=Y.state.ambient,Pe.lightProbe.value=Y.state.probe,Pe.sunLights.value=Y.state.sun,Pe.sunLightShadows.value=Y.state.sunShadow,Pe.directionalLights.value=Y.state.directional,Pe.directionalLightShadows.value=Y.state.directionalShadow,Pe.spotLights.value=Y.state.spot,Pe.spotLightShadows.value=Y.state.spotShadow,Pe.rectAreaLights.value=Y.state.rectArea,Pe.ltc_1.value=Y.state.rectAreaLTC1,Pe.ltc_2.value=Y.state.rectAreaLTC2,Pe.pointLights.value=Y.state.point,Pe.pointLightShadows.value=Y.state.pointShadow,Pe.hemisphereLights.value=Y.state.hemi,Pe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Pe.sunShadowCascade.value=Y.state.sunShadowCascade,Pe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pe.spotLightMatrix.value=Y.state.spotLightMatrix,Pe.spotLightMap.value=Y.state.spotLightMap,Pe.pointShadowMatrix.value=Y.state.pointShadowMatrix),H.numLightProbeGrids=xm(E.state.lightProbeGridArray),H.currentProgram=Ke,H.uniformsList=null,Ke}l(Ua,"getProgram");function S_(M,U,J,H,Y){let ve=ze.get(M),Re=ve.currentProgram.id+","+H+","+Y,xe=ve.programVariants.get(Re);return xe===void 0?(xe=Ua(M,U,J),ve.programVariants.set(Re,xe)):(ve.currentProgram=xe,ve.uniformsList=null,ve.outputColorSpace=H,ve.toneMapping=Y),xe}l(S_,"getProgramVariant");function _m(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ra.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}l(_m,"getUniformList");function vm(M,U){let J=ze.get(M);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}l(vm,"updateCommonMaterialProperties");function w_(M,U,J,H,Y){U.isScene!==!0&&(U=Fn),We.resetTextureUnits();let ve=U.fog,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,xe=$===null?I.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:je.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Le=T.get(H.envMap||Re,Ee),Xe=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ke=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!J.morphAttributes.position,Qe=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color,dt=_i;H.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(dt=I.toneMapping);let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Zt=ht!==void 0?ht.length:0,Ie=ze.get(H),rn=E.state.lights;if(Mt===!0&&(It===!0||M!==q)){let St=M===q&&H.id===V;ne.setState(H,M,St)}let st=!1,Gs=!1;H.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==rn.state.version||Y.isBatchedMesh&&Ie.batching===!1||!Y.isBatchedMesh&&Ie.batching===!0||Y.isBatchedMesh&&Ie.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ie.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Y.isInstancedMesh&&Ie.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ie.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ie.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ie.instancingMorph===!1&&Y.morphTexture!==null||Ie.envMap!==Le||H.fog===!0&&Ie.fog!==ve||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ne.numPlanes||Ie.numIntersection!==ne.numIntersection)||Ie.vertexAlphas!==Xe||Ie.vertexTangents!==Ke||Ie.morphTargets!==Pe||Ie.morphNormals!==Qe||Ie.morphColors!==Et||Ie.morphTargetsCount!==Zt||Ie.numLightProbeGrids!==xm(E.state.lightProbeGridArray)?st=!0:(Ie.outputColorSpace!==xe||Ie.toneMapping!==dt)&&(Gs=!0):(st=!0,Ie.__version=H.version);let $t=Ie.currentProgram;(st===!0||Gs===!0)&&($t=Gs===!0?S_(H,U,Y,xe,dt):Ua(H,U,Y),F&&H.isNodeMaterial&&F.onUpdateProgram(H,$t,Ie));let vl=!1,ss=!1,Vs=!1,it=$t.getUniforms(),Ht=Ie.uniforms;if(be.useProgram($t.program)&&(vl=!0,ss=!0,Vs=!0),H.id!==V&&(V=H.id,ss=!0),vl||q!==M){be.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),it.setValue(O,"projectionMatrix",M.projectionMatrix),it.setValue(O,"viewMatrix",M.matrixWorldInverse);let Bt=it.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,yn.setFromMatrixPosition(M.matrixWorld)),xt.logarithmicDepthBuffer&&it.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,ss=!0,Vs=!0)}if(Ie.needsLights&&(rn.state.sunShadowMap.length>0&&it.setValue(O,"sunShadowMap",rn.state.sunShadowMap,We),rn.state.directionalShadowMap.length>0&&it.setValue(O,"directionalShadowMap",rn.state.directionalShadowMap,We),rn.state.spotShadowMap.length>0&&it.setValue(O,"spotShadowMap",rn.state.spotShadowMap,We),rn.state.pointShadowMap.length>0&&it.setValue(O,"pointShadowMap",rn.state.pointShadowMap,We)),Y.isSkinnedMesh){it.setOptional(O,Y,"bindMatrix"),it.setOptional(O,Y,"bindMatrixInverse");let St=Y.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),it.setValue(O,"boneTexture",St.boneTexture,We))}Y.isBatchedMesh&&(it.setOptional(O,Y,"batchingTexture"),it.setValue(O,"batchingTexture",Y._matricesTexture,We),it.setOptional(O,Y,"batchingIdTexture"),it.setValue(O,"batchingIdTexture",Y._indirectTexture,We),it.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&it.setValue(O,"batchingColorTexture",Y._colorsTexture,We));let Yn=J.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&se.update(Y,J,$t),(ss||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,it.setValue(O,"receiveShadow",Y.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=cw()),ss){if(it.setValue(O,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&E_(Ht,Vs),ve&&H.fog===!0&&de.refreshFogUniforms(Ht,ve),de.refreshMaterialUniforms(Ht,H,pe,Ce,E.state.transmissionRenderTarget[M.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let St=A,Bt=0;for(let Li of E.state.lightProbeGridArray)Li.texture!==null&&(St.textures[Bt]=Li.texture,St.min[Bt]=Li.boundingBox.min,St.max[Bt]=Li.boundingBox.max,St.resolution[Bt]=Li.resolution,Bt++);for(let Li in St)St[Li].length=Bt;Ht.probesSH.value=St.textures,Ht.probesMin.value=St.min,Ht.probesMax.value=St.max,Ht.probesResolution.value=St.resolution}ra.upload(O,_m(Ie),Ht,We)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ra.upload(O,_m(Ie),Ht,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(O,"center",Y.center),it.setValue(O,"modelViewMatrix",Y.modelViewMatrix),it.setValue(O,"normalMatrix",Y.normalMatrix),it.setValue(O,"modelMatrix",Y.matrixWorld),H.uniformsGroups!==void 0){let St=H.uniformsGroups;for(let Bt=0,Li=St.length;Bt<Li;Bt++){let bm=St[Bt];De.update(bm,$t),De.bind(bm,$t)}}return $t}l(w_,"setProgram");function E_(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}l(E_,"markUniformsLightsNeedsUpdate");function A_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(A_,"materialNeedsLights"),this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,U,J){let H=ze.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ze.get(M.texture).__webglTexture=U,ze.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let J=ze.get(M);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,J=0){$=M,ee=U,Z=J;let H=null,Y=!1,ve=!1;if(M){let xe=ze.get(M);if(xe.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),ie.copy(M.viewport),ue.copy(M.scissor),Te=M.scissorTest,be.viewport(ie),be.scissor(ue),be.setScissorTest(Te),V=-1;return}else if(xe.__webglFramebuffer===void 0)We.setupRenderTarget(M);else if(xe.__hasExternalTextures)We.rebindTextures(M,ze.get(M.texture).__webglTexture,ze.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Xe=M.depthTexture;if(xe.__boundDepthTexture!==Xe){if(Xe!==null&&ze.has(Xe)&&(M.width!==Xe.image.width||M.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(M)}}let Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);let Le=ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?H=Le[U][J]:H=Le[U],Y=!0):M.samples>0&&We.useMultisampledRTT(M)===!1?H=ze.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[J]:H=Le,ie.copy(M.viewport),ue.copy(M.scissor),Te=M.scissorTest}else ie.copy(Ne).multiplyScalar(pe).floor(),ue.copy(qe).multiplyScalar(pe).floor(),Te=tt;if(J!==0&&(H=B),be.bindFramebuffer(O.FRAMEBUFFER,H)&&be.drawBuffers(M,H),be.viewport(ie),be.scissor(ue),be.setScissorTest(Te),Y){let xe=ze.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,J)}else if(ve){let xe=U;for(let Ee=0;Ee<M.textures.length;Ee++){let Le=ze.get(M.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,J,xe)}}else if(M!==null&&J!==0){let xe=ze.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,J)}V=-1};function ym(M){let U=ze.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=xt.textureFormatReadable(M.format),U.__typeReadable=xt.textureTypeReadable(M.type)),U}l(ym,"getReadableState"),this.readRenderTargetPixels=function(M,U,J,H,Y,ve,Re,xe=0){if(!(M&&M.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){be.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Le=M.textures[xe],Xe=Le.format,Ke=Le.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let Pe=ym(Le);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&J>=0&&J<=M.height-Y&&O.readPixels(U,J,H,Y,he.convert(Xe),he.convert(Ke),ve)}finally{let Le=$!==null?ze.get($).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,U,J,H,Y,ve,Re,xe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=M.width-H&&J>=0&&J<=M.height-Y){be.bindFramebuffer(O.FRAMEBUFFER,Ee);let Le=M.textures[xe],Xe=Le.format,Ke=Le.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let Pe=ym(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qe),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(U,J,H,Y,he.convert(Xe),he.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Et=$!==null?ze.get($).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Et);let dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await N0(O,dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Qe),O.deleteSync(dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,J=0){let H=Math.pow(2,-J),Y=Math.floor(M.image.width*H),ve=Math.floor(M.image.height*H),Re=U!==null?U.x:0,xe=U!==null?U.y:0;We.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Re,xe,Y,ve),be.unbindTexture()},this.copyTextureToTexture=function(M,U,J=null,H=null,Y=0,ve=0){let Re,xe,Ee,Le,Xe,Ke,Pe,Qe,Et,dt=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(J!==null)Re=J.max.x-J.min.x,xe=J.max.y-J.min.y,Ee=J.isBox3?J.max.z-J.min.z:1,Le=J.min.x,Xe=J.min.y,Ke=J.isBox3?J.min.z:0;else{let it=Math.pow(2,-Y);Re=Math.floor(dt.width*it),xe=Math.floor(dt.height*it),M.isDataArrayTexture?Ee=dt.depth:M.isData3DTexture?Ee=Math.floor(dt.depth*it):Ee=1,Le=0,Xe=0,Ke=0}H!==null?(Pe=H.x,Qe=H.y,Et=H.z):(Pe=0,Qe=0,Et=0);let ht=he.convert(U.format),Zt=he.convert(U.type),Ie;U.isData3DTexture?(We.setTexture3D(U,0),Ie=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(We.setTexture2DArray(U,0),Ie=O.TEXTURE_2D_ARRAY):(We.setTexture2D(U,0),Ie=O.TEXTURE_2D),be.activeTexture(O.TEXTURE0),be.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),be.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),be.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let rn=be.getParameter(O.UNPACK_ROW_LENGTH),st=be.getParameter(O.UNPACK_IMAGE_HEIGHT),Gs=be.getParameter(O.UNPACK_SKIP_PIXELS),$t=be.getParameter(O.UNPACK_SKIP_ROWS),vl=be.getParameter(O.UNPACK_SKIP_IMAGES);be.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Le),be.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),be.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let ss=M.isDataArrayTexture||M.isData3DTexture,Vs=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let it=ze.get(M),Ht=ze.get(U),Yn=ze.get(it.__renderTarget),St=ze.get(Ht.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,Yn.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Bt=0;Bt<Ee;Bt++)ss&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(M).__webglTexture,Y,Ke+Bt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(U).__webglTexture,ve,Et+Bt)),O.blitFramebuffer(Le,Xe,Le+Re,Xe+xe,Pe,Qe,Pe+Re,Qe+xe,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||ze.has(M)){let it=ze.get(M),Ht=ze.get(U);be.bindFramebuffer(O.READ_FRAMEBUFFER,P),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,X);for(let Yn=0;Yn<Ee;Yn++)ss?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,it.__webglTexture,Y,Ke+Yn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,it.__webglTexture,Y),Vs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,ve,Et+Yn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,ve),Y!==0?O.blitFramebuffer(Le,Xe,Le+Re,Xe+xe,Pe,Qe,Pe+Re,Qe+xe,O.COLOR_BUFFER_BIT,O.NEAREST):Vs?O.copyTexSubImage3D(Ie,ve,Pe,Qe,Et+Yn,Le,Xe,Re,xe):O.copyTexSubImage2D(Ie,ve,Pe,Qe,Le,Xe,Re,xe);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Vs?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Ie,ve,Pe,Qe,Et,Re,xe,Ee,ht,Zt,dt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,ve,Pe,Qe,Et,Re,xe,Ee,ht,dt.data):O.texSubImage3D(Ie,ve,Pe,Qe,Et,Re,xe,Ee,ht,Zt,dt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,Pe,Qe,Re,xe,ht,Zt,dt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,Pe,Qe,dt.width,dt.height,ht,dt.data):O.texSubImage2D(O.TEXTURE_2D,ve,Pe,Qe,Re,xe,ht,Zt,dt);be.pixelStorei(O.UNPACK_ROW_LENGTH,rn),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Gs),be.pixelStorei(O.UNPACK_SKIP_ROWS,$t),be.pixelStorei(O.UNPACK_SKIP_IMAGES,vl),ve===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Ie),be.unbindTexture()},this.initRenderTarget=function(M){ze.get(M).__webglFramebuffer===void 0&&We.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){ee=0,Z=0,$=null,be.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};l(ip,"WebGLRenderer");var Pu=ip;function Mg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Rt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let v in f.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(f.attributes[v]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let v in f.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[v].length!==i[0].morphAttributes[v].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+v+'" morph attribute.'),null;a[v]===void 0&&(a[v]=[]),a[v].push(f.morphAttributes[v]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let v;if(t)v=f.index.count;else if(f.attributes.position!==void 0)v=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,v,h),u+=v}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=bg(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let v=bg(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(v)}}}return c}l(Mg,"mergeGeometries");function bg(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new _t(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let v=0;v<t;v++){let y=h.getComponent(d,v);o.setComponent(d+f,v,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(bg,"mergeAttributes");var Sg="#c79a72",uw="#5a4a3a";var jt="#7a5532",ap="#5f6266",wg="#8a8f96",ti="#5d6447",sp="#e8e0cc",Tg="#6e4b2f",nr="#8a8580",Eg="#5b3e27",oa="#7d858c",hw=new G(0,1,0),Se=new fi(1,1,1),Gt=new pi(.5,.5,1,10),ir=new mi(.5,1,10),la=new _s(.5,10,8),cp=class cp{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(cp,"Parts");var Vt=cp,dw=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:la,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ir,colour:ap,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Se,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Gt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:la,colour:ti,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),fw=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Gt,colour:jt,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Gt,colour:jt,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ir,colour:ap,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Gt,colour:jt,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ir,colour:wg,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Se,colour:wg,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Se,colour:jt,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Gt,colour:jt,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Se,colour:i==="rifle"?"#3a3a3a":jt,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Se,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Se,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Gt,colour:jt,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Gt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),pw={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},op=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Vt,a=s===void 0?void 0:pw[s],o=a?.coat??(i==="modern"?ti:t[0]),c=a?.legs??(i==="ancient"?Sg:i==="modern"?ti:uw);return n&&(r.add({shape:Se,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Se,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Se,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Se,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Se,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Se,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:la,colour:Sg,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:la,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:la,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):dw(i,t,r),s==="parachute"&&r.add({shape:Se,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),fw(e,i,t,r),r},"person"),Ag=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),rp=l((i=Tg)=>new Vt().add({shape:Se,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Se,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Se,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Se,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Se,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Se,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Se,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),mw=l((i,e,t)=>new Vt().addAll(rp(),[0,0,0]).add({shape:Se,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(op(i,e,t,{legs:!1}),[0,.04,0]),"rider"),gw=l(i=>new Vt().add({shape:Se,colour:nr,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Se,colour:nr,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Gt,colour:nr,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Se,colour:nr,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Se,colour:nr,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Se,colour:nr,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Se,colour:nr,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Se,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Se,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),en=l((i,e=.05)=>({shape:Gt,colour:jt,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),xw=l((i,e,t)=>{if(e==="chariot")return new Vt().addAll(rp(),[0,0,.09]).add({shape:Se,colour:jt,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Se,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(en([-.042,.035,-.045],.065)).add(en([.042,.035,-.045],.065)).addAll(op(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Vt().addAll(rp(t==="ancient"?"#8a7a64":Tg),[0,0,.1]).add({shape:Se,colour:jt,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Se,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(en([-.042,.03,-.03])).add(en([.042,.03,-.03])).add(en([-.042,.03,-.09])).add(en([.042,.03,-.09]));return e==="wagon"?n.add({shape:Gt,colour:sp,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Se,colour:sp,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Se,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Se,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),_w=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Vt().add({shape:Se,colour:jt,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Se,colour:jt,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Se,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(en([-.045,.03,.04],.045)).add(en([.045,.03,.04],.045)).add(en([-.045,.03,-.04],.045)).add(en([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?ti:ap;return new Vt().add({shape:Gt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Se,colour:i==="modern"?ti:jt,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Se,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(en([-.04,.035,0],.07)).add(en([.04,.035,0],.07))},"siege"),vw=l((i,e,t)=>{if(i==="industrial")return new Vt().add({shape:Se,colour:oa,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Se,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(en([-.045,.025,.06],.045)).add(en([.045,.025,.06],.045)).add(en([-.045,.025,-.06],.045)).add(en([.045,.025,-.06],.045));let n=new Vt().add({shape:Se,colour:ti,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Se,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Se,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Se,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Se,colour:ti,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Gt,colour:ti,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Se,colour:ti,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),yw=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Vt;switch(i.hull){case"oars":case"sail":{r.add({shape:Se,colour:Eg,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:ir,colour:Eg,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Se,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:Gt,colour:jt,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Se,colour:o===0?e[1]:sp,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Se,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Se,colour:jt,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Se,colour:jt,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Gt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Se,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Se,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Se,colour:oa,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Se,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Se,colour:oa,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Se,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Se,colour:i.era==="industrial"?"#4a4a48":oa,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:ir,colour:i.era==="industrial"?"#4a4a48":oa,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Se,colour:oa,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Gt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Se,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Se,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Gt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Se,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),bw=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Vt().add({shape:Gt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ir,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Se,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Se,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Se,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Se,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),Mw=l(i=>new Vt().add({shape:la,colour:ti,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Se,colour:ti,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Se,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Se,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Se,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Sw=l((i,e)=>{let t=e?1.4:1;return new Vt().add({shape:Gt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ir,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Se,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Se,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Cg=l((i,e)=>{switch(i.shape){case"foot":{let t=new Vt;return Ag(i.squad).forEach(([n,s],r)=>t.addAll(op(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Vt;return Ag(i.squad).forEach(([n,s])=>t.addAll(mw(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return gw(e);case"cart":return xw(e,i.cart??"wagon",i.era);case"siege":return _w(i.era,e,i.large===!0);case"vehicle":return vw(i.era,e,i.large===!0);case"ship":return yw(i,e);case"aircraft":return bw(i,e);case"helicopter":return Mw(e);default:return Sw(e,i.large===!0)}},"figureParts"),ww=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new ot().compose(new G(...i),new cn().setFromAxisAngle(hw,n).multiply(new cn().setFromEuler(new wn(...t))),new G(...e)),"partMatrix"),lp=l(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new Ue(r),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(ww(n)),a.setAttribute("color",new _t(u,3)),a}),t=Mg(e)??new Rt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Rg=l((i,e)=>lp(Cg(i,e).parts),"figureGeometry"),Ew=new pi(.19,.2,1,28),Aw=new vs(.22,.014,4,32),Pg=l((i,e,{fortified:t,scale:n,stand:s})=>{let r=i.shape==="ship",a=r?0:s,o=Cg(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return r||o.push({shape:Ew,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&o.push({shape:Aw,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),lp(o)},"unitBodyGeometry"),Tw=new mi(.75,.5,4),Cw=new vs(.36,.025,6,24),Ig=l((i,e,t)=>lp([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:Se,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:Tw,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:Cw,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Xt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),To=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Tn=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),Co=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),up=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Lg={Warrior:Xt("ancient","club"),Spearman:Xt("ancient","spear"),Swordman:Xt("ancient","sword"),Archer:Xt("ancient","bow"),Horseman:To("ancient","spear"),Chariot:up("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Tn("ancient","oars"),Settlers:up("ancient","wagon"),Diplomat:Xt("ancient","case",1),Caravan:up("ancient","goods"),Explorer:Xt("ancient","pack",1),Pikeman:Xt("medieval","pike"),Knight:To("medieval","lance"),Crusader:To("medieval","sword"),Fanatic:Xt("medieval","sword"),Sail:Tn("medieval","sail"),Musketman:Xt("renaissance","musket"),Dragoon:To("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Tn("renaissance","sail",!0,1),Galleon:Tn("renaissance","sail",!0),Rifleman:Xt("industrial","rifle"),AlpineTrooper:{...Xt("industrial","rifle"),dress:"snow"},Partisan:{...Xt("industrial","rifle"),dress:"irregular"},Cavalry:To("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Xt("industrial","none",2),Ironclad:Tn("industrial","steam",!1,1),Transport:Tn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Xt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Xt("modern","rifle"),Paratrooper:{...Xt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Tn("modern","steam",!1,1),Cruiser:Tn("modern","steam",!0,2),MissileCruiser:Tn("modern","steam",!0,1,!0),Battleship:Tn("modern","steam",!0,3),Submarine:Tn("modern","submarine"),Carrier:Tn("modern","carrier",!0),Fighter:Co("modern"),StealthFighter:Co("modern",!1,!0),Bomber:Co("modern",!0),StealthBomber:Co("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Dg=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Lg,i)?Lg[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Tn("industrial","steam"):e.includes("Air")?Co("modern"):Xt("ancient","spear")),"unitLook");var Rw=.03,Og="#fff4b0",Pw=.04,Nu=.004,hp=.018,Ng=.01,Ug=.022,Fg=.03,Bg=.03,Fu=.002,Iw="#4caf50",Lw="#e0b030",Dw="#d04030",Nw=256,sr,ni,rr,ar,ii,or,Zi,ua,dp=class dp{constructor(){Q(this,sr,new Map);Q(this,ni,new Map);Q(this,rr,new Map);Q(this,ar,new Map);Q(this,ii,new Map);Q(this,or,new Map);Q(this,Zi,null);Q(this,ua,0);this.figureMaterial=new Xi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new vs(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=m(this,sr).get(n);return s===void 0&&(s=new Xi({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),m(this,sr).set(n,s)),s}body(e,t,n,s=1){let r=JSON.stringify([e,t,n,s]),a=m(this,ar).get(r);return a===void 0&&(a=Pg(e,t,{fortified:n,scale:s,stand:Rw}),m(this,ar).set(r,a)),a}city(e){let t=Bw(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=m(this,ii).get(n);return s===void 0&&(s=Ig(t,e.colours[0],e.walled),m(this,ii).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=m(this,rr).get(n);return s===void 0&&(s=Rg(e,t),m(this,rr).set(n,s)),s}plain(e){let t=m(this,or).get(e);return t===void 0&&(t=new ms({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),m(this,or).set(e,t)),t}pointer(){if(m(this,Zi)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Og,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new xs(e);n.colorSpace=Tt,k(this,Zi,new ms({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return m(this,Zi)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=m(this,ni).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new xs(a);h.colorSpace=Tt,r=new ms({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),m(this,ni).set(s,r)}return r}get sweepDue(){return m(this,ni).size+m(this,ii).size>Math.max(Nw,m(this,ua)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof yt&&t.add(s.geometry),s instanceof Qr&&t.add(s.material)});m(this,ni).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),m(this,ni).delete(s))}),m(this,ii).forEach((n,s)=>{t.has(n)||(n.dispose(),m(this,ii).delete(s))}),k(this,ua,m(this,ni).size+m(this,ii).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),m(this,rr).forEach(e=>e.dispose()),m(this,ar).forEach(e=>e.dispose()),m(this,ii).forEach(e=>e.dispose()),m(this,ar).clear(),m(this,ii).clear(),this.figureMaterial.dispose(),m(this,or).forEach(e=>e.dispose()),m(this,Zi)?.map?.dispose(),m(this,Zi)?.dispose(),m(this,or).clear(),k(this,Zi,null),m(this,sr).forEach(e=>e.dispose()),m(this,ni).forEach(e=>{e.map?.dispose(),e.dispose()}),m(this,sr).clear(),m(this,ni).clear(),m(this,rr).clear(),k(this,ua,0)}};sr=new WeakMap,ni=new WeakMap,rr=new WeakMap,ar=new WeakMap,ii=new WeakMap,or=new WeakMap,Zi=new WeakMap,ua=new WeakMap,l(dp,"MarkerKit");var Bu=dp,zg=l(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),ca=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),Uu=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),Uw=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),Fw=3,Ow=4,Ro=l((i,e,t,n,s=Fw)=>{let r=new Qr(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),kg=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return Ro(i,e*s,e,t)},"label"),Ou=[0,.36,0],Bw=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+Uu(i.name,1)*6,r=n===0?0:.12+Uu(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+Uu(i.name,n+20)*.05,height:(n===0?.13:.05)+Uu(i.name,n+40)*.05}})},"buildingsOf"),zw=l((i,e)=>{let t=new ln;return t.add(new yt(i.city(e),i.figureMaterial)),t.add(ca(kg(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],zg(e.colours[0])),Bg,0),...Ou)),t},"drawCity"),kw=l((i,e,t=null)=>{let n=new ln,{ring:s}=i.geometries,r=Dg(e.type,e.kinds),a=i.body(r,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+Pw,0],u=e.health!==null,h=(t?.over??0)+(u?Nu+Fu:0),f=h+Ng+Fu,d=Uw(e),p=f+(d===""?0:Ug+Fu),v=new yt(a,i.figureMaterial);if(v.rotation.y=e.facing,n.add(v),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(ca(Ro(i.plain("#202020"),hp,Nu,t?.over??0),...c)),y>0){let _=Ro(i.plain(y>.5?Iw:y>.25?Lw:Dw),hp*y,Nu*.6,(t?.over??0)+Nu*.2);_.center.x=1/(2*y),n.add(ca(_,...c))}}if(n.add(ca(Ro(i.plain(e.colours[0]),hp,Ng,h),...c)),d!==""&&n.add(ca(kg(i.label(d,e.colours[0],zg(e.colours[0])),Ug,f),...c)),e.active){let y=new yt(s,i.material(Og,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,ca(Ro(i.pointer(),Fg,Fg,p,Ow),...c))}return n},"drawUnit"),zu="unit",Gg=l((i,e)=>{let t=new ln;if(e.city!==null&&t.add(zw(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=kw(i,e.unit,e.city===null?null:{at:[Ou[0],Ou[1],Ou[2]-n],over:Bg+Fu});s.name=zu,s.position.z=n,t.add(s)}return t},"drawMarker");var ws=l(i=>i*Math.PI/180,"degrees"),Gw=ws(25),Vw=ws(80),Hw=5,Ww=90,Xw=1.12,Po=ws(40),pp=ws(45),qw={above:{yaw:0,pitch:ws(80)},classic:{yaw:0,pitch:ws(55)},isometric:{yaw:ws(45),pitch:ws(30)}};var Vg=l(i=>({focus:i,...qw.classic,distance:24}),"defaultOrbit"),fp=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),Hg=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),lr=l(i=>({...i,yaw:Hg(i.yaw),pitch:fp(i.pitch,Gw,Vw),distance:fp(i.distance,Hw,Ww)}),"clampOrbit"),da=l((i,e)=>lr({...i,distance:i.distance/Xw**e}),"zoomed"),ku=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),Gu=l((i,e)=>{let{forward:t}=ku(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),mp=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=ku(i),u=Gu(i,e),h=[t-u[0],n-u[1],s-u[2]],f=l(v=>(h[0]??0)*v[0]+(h[1]??0)*v[1]+(h[2]??0)*v[2],"dot"),d=f(a),p=Math.tan(Po/2);return d<=1e-6?null:[f(o)/(d*p*r),f(c)/(d*p)]},"toScreen"),gp=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=ku(i),c=Math.tan(Po/2);return{from:Gu(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),ha=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=gp(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),Wg=l((i,e,t,n,s)=>{let r=ha(i,e,t,s),a=ha(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Po/2),{right:h}=ku(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),Xg=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:Hg(i.yaw),focus:[n(s,e.u),e.v===null?fp(r,0,t):n(r,e.v)]}},"settled"),qg=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Vu=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var Yw=new Ue("#3f8a8c"),Zw=new Ue("#173a52"),$w=new Ue("#e8eeee"),Yg=`
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
`,Jw=`
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
`,Es,Hn,Cn,_p=class _p{constructor(e,t){Q(this,Es);Q(this,Hn);Q(this,Cn);k(this,Es,e),k(this,Hn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<m(this,Hn).length;s+=2)m(this,Hn)[s]=di.toHalfFloat(0),m(this,Hn)[s+1]=di.toHalfFloat(1);k(this,Cn,new jr(m(this,Hn),e.columns,e.rows,vi,An)),m(this,Cn).wrapS=Zs,m(this,Cn).wrapT=e.wrapsV?Zs:Gn,m(this,Cn).magFilter=kt,m(this,Cn).minFilter=kt,m(this,Cn).needsUpdate=!0;let n=new hn({uniforms:tr.merge([ye.fog,{ground:{value:null},cell:{value:new Ge},size:{value:new Ge},shallow:{value:Yw.clone()},deep:{value:Zw.clone()},foam:{value:$w.clone()},sky:{value:t.clone()},sunDirection:{value:new G(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Yg,fragmentShader:Jw,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=m(this,Cn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new yt(new gi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=m(this,Es),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;m(this,Hn)[d]=di.toHalfFloat(e.positions[u*3+1]??0),m(this,Hn)[d+1]=di.toHalfFloat(e.unseen[u]??0)}}m(this,Cn).needsUpdate=!0}height(e,t){return di.fromHalfFloat(m(this,Hn)[(t*m(this,Es).columns+e)*2]??0)}unseen(e,t){return di.fromHalfFloat(m(this,Hn)[(t*m(this,Es).columns+e)*2+1]??0)>.5}texture(){return m(this,Cn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,Es).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),m(this,Cn).dispose()}};Es=new WeakMap,Hn=new WeakMap,Cn=new WeakMap,l(_p,"Water");var xp=_p,Zg=xp,Kw=`
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
`,Qw=.18,Io,vp=class vp{constructor(e,t){Q(this,Io);k(this,Io,t.wrapsV);let n=new hn({uniforms:tr.merge([ye.fog,{ground:{value:null},cell:{value:new Ge},size:{value:new Ge},extent:{value:new Ge},wrapsV:{value:!1}}]),vertexShader:Yg,fragmentShader:Kw,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new yt(new gi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,Io)&&e}follow(e,t,n){this.mesh.position.set(e,Qw,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Io=new WeakMap,l(vp,"Clouds");var Hu=vp;var jw=.6,e1=.05,cr=64,$g=.125,t1=`
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
`,n1=`
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
`,Jg=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),i1=l((i,e)=>{let[t]=Jg(i.length),n=cr*(1-2*$g);return i.flatMap((s,r)=>{let a=e(s);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:s,x:r%t*cr+(cr-c)/2,y:Math.floor(r/t)*cr+(cr-u)/2,width:c,height:u}]})},"atlasPlaces"),s1=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:s}=i;return[e??(typeof n=="number"?n:0),t??(typeof s=="number"?s:0)]},"imageSize"),As,Rn,Lo,ur,Do,Wu,fa,Kg,Qg,bp=class bp{constructor(e){Q(this,fa);Q(this,As,null);Q(this,Rn,null);Q(this,Lo,"");Q(this,ur);Q(this,Do,new WeakMap);Q(this,Wu,1);k(this,ur,e),this.material=new hn({uniforms:tr.merge([ye.fog,{atlas:{value:null},lean:{value:1},lift:{value:e1},bias:{value:jw},cells:{value:[1,1]},pad:{value:$g}}]),vertexShader:t1,fragmentShader:n1,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(m(this,As)?.dispose(),k(this,As,null),e===null||e.count===0)return null;z(this,fa,Qg).call(this,e);let t=new fo,n=new gi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Hi(e.anchors,3)),t.setAttribute("slot",new Hi(e.slots,2)),t.setAttribute("size",new Hi(e.sizes,1)),t.setAttribute("cell",new Hi(e.cells,1)),t.instanceCount=e.count,k(this,As,t),t}make(){let e=new yt(m(this,As)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){m(this,As)?.dispose(),m(this,Rn)?.dispose(),this.material.dispose()}};As=new WeakMap,Rn=new WeakMap,Lo=new WeakMap,ur=new WeakMap,Do=new WeakMap,Wu=new WeakMap,fa=new WeakSet,Kg=l(function(e){if(e===null)return 0;let t=m(this,Do).get(e);return t===void 0&&(t=Sm(this,Wu)._++,m(this,Do).set(e,t)),t},"#imageId"),Qg=l(function(e){let t=e.names.map(o=>`${o}:${z(this,fa,Kg).call(this,m(this,ur).call(this,o))}`).join(",");if(t===m(this,Lo)&&m(this,Rn)!==null)return;let[n,s]=Jg(e.names.length),r=document.createElement("canvas"),a=r.getContext("2d");r.width=n*cr,r.height=s*cr,a!==null&&(a.imageSmoothingEnabled=!1,i1(e.names,o=>{let c=m(this,ur).call(this,o);return c===null?null:s1(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=m(this,ur).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),m(this,Rn)?.dispose(),k(this,Rn,new xs(r)),m(this,Rn).colorSpace=Tt,m(this,Rn).premultiplyAlpha=!0,m(this,Rn).magFilter=Ct,m(this,Rn).minFilter=Kn,m(this,Rn).generateMipmaps=!0,k(this,Lo,t),this.material.uniforms.atlas.value=m(this,Rn),this.material.uniforms.cells.value=[n,s]},"#drawAtlas"),l(bp,"YieldIcons");var yp=bp,jg=yp;var wp=l((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/o1)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),Xu=l(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),r1=l((i,e,t)=>i.unit?.id===e?ix(i,t):Xu(i),"unitOnMarkerAt"),ix=l((i,e)=>{let[t,n,s]=Xu(i),[r,a,o]=wp(i.slide,e)??[0,0,0];return[t+r,n+a,s+o]},"unitDrawnAt"),a1=l((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||wp(i.slide,t)===null)return;let n=ix(i,t),s=Xu(e);return{from:[n[0]-s[0],n[1]-s[1],n[2]-s[2]],started:t}},"carriedSlide"),Mp=l((i,e)=>{if(i.slide===void 0)return!1;let t=wp(i.slide,e),[n,s,r]=t??[0,0,0],[a,o,c]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(zu)?.position.set(a+n,o+s,c+r)),t!==null},"slideAlong"),o1=260,Sp=10466244,l1=14082796,c1=5984576,u1=16773336,ex=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),h1=l(i=>[new mn(new G(0,0,1),0),new mn(new G(0,0,-1),i)],"polesAt"),d1=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),tx=2048,nx=Math.hypot(30,40,20),sx=l((i,{period:e,ground:t,yieldIcon:n})=>{let s=new Pu({antialias:!0,canvas:i}),r=new ja,a=new on(Po*180/Math.PI,1,.1,400),o=new ln,c=new Xi({roughness:.92,vertexColors:!0}),u=new ho(u1,2.6),h=new Map,f=new Map,d=new Xi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),p=t.rows*t.spacingV,v=h1(p),y=new Map,_=new Set,x=new ln,w=new Bu,R=new ln,A=new jg(n??(()=>null)),C=new Zg(t,new Ue(Sp)),E=new Hu(C.texture(),t),g=new Qa(Sp,30,110),S=[[0,0]],D="0,0",I=[[0,0]],N="0,0",F=!1,B=null;s.outputColorSpace=Tt,s.localClippingEnabled=!0,s.toneMapping=mo,s.shadowMap.enabled=!0,s.shadowMap.type=zc,r.background=new Ue(Sp),r.fog=g,r.add(new lo(l1,c1,.9)),r.add(o),r.add(x),r.add(R),r.add(C.mesh),r.add(E.mesh),u.position.set(30,40,20),u.castShadow=!0,u.shadow.mapSize.set(tx,tx),u.shadow.bias=-4e-4,u.shadow.normalBias=.02,r.add(u),r.add(u.target);let P=l(($,V,q=S)=>q.map(([ie,ue])=>{let Te=$.make();return Te.position.set($.at[0]+ie,$.at[1],$.at[2]+ue),V.add(Te),Te}),"copiesOf"),X=l($=>P($,o,d1(S,$.span,p,e.v,F)),"overlayCopiesOf"),ee=l($=>_.forEach(V=>{let q=y.get(V);(q===void 0||!Mp(q,$))&&_.delete(V)}),"slideMarkers");return{render:l(()=>s.render(r,a),"render"),resize:l(($,V,q)=>{s.setPixelRatio(q),s.setSize($,V,!1),a.aspect=V>0?$/V:1,a.updateProjectionMatrix()},"resize"),setChunk:l(($,V,q)=>{let ie=`${$},${V}`,ue=new Rt;ue.setAttribute("position",new _t(q.positions,3)),ue.setAttribute("normal",new _t(q.normals,3)),ue.setAttribute("color",new _t(q.colours,3)),ue.setIndex(new _t(q.indices,1)),ue.computeBoundingSphere();let Te=h.get(ie);Te!==void 0&&(Te.drawn.forEach(ce=>o.remove(ce)),Te.geometry.dispose());let K={geometry:ue,at:[q.u,0,q.v],make:l(()=>{let ce=new yt(ue,c);return ce.castShadow=!0,ce.receiveShadow=!0,ce},"make"),drawn:[]};K.drawn=P(K,o),h.set(ie,K),C.setChunk(q)},"setChunk"),setOverlay:l(($,V,q)=>{let ie=`${$},${V}`,ue=f.get(ie);if(ue!==void 0&&(ue.drawn.forEach(Me=>o.remove(Me)),ue.geometry.dispose(),f.delete(ie)),q===null)return;let Te=new Rt;Te.setAttribute("position",new _t(q.positions,3)),Te.setAttribute("normal",new _t(q.normals,3)),Te.setAttribute("color",new _t(q.colours,3)),Te.computeBoundingSphere(),Te.computeBoundingBox();let K=Te.boundingBox,ce={geometry:Te,span:[q.v+(K?.min.z??0),q.v+(K?.max.z??0)],at:[q.u,0,q.v],make:l(()=>{let Me=new yt(Te,d);return Me.castShadow=!0,Me.receiveShadow=!0,Me},"make"),drawn:[]};ce.drawn=X(ce),f.set(ie,ce)},"setOverlay"),setMarker:l(($,V,q)=>{let ie=y.get($);if(ie?.drawn.forEach(Ce=>x.remove(Ce)),y.delete($),q===null)return;let ue=Gg(w,q),Te=ue.getObjectByName(zu);ue.traverse(Ce=>{Ce.castShadow=Ce instanceof yt});let K={at:V,make:l(()=>ue.clone(),"make"),drawn:[],original:ue,...q.unit===null||Te===void 0?{}:{unit:{id:q.unit.id,at:Te.position.toArray()}}},ce=performance.now(),Me=a1(ie,K,ce);Me!==void 0&&(K.slide=Me),K.drawn=P(K,x,I),y.set($,K),K.slide!==void 0&&(_.add($),Mp(K,ce)),w.sweepDue&&w.sweep([...y.values()].flatMap(({original:Ce})=>Ce===void 0?[]:[Ce]))},"setMarker"),slideMarker:l(($,V)=>{let q=y.get($);if(q===void 0)return;let[ie,ue,Te]=Xu(q);q.slide={from:[V[0]-ie,V[1]-ue,V[2]-Te],started:performance.now()},_.add($),Mp(q,q.slide.started)},"slideMarker"),markerAt:l(($,V)=>{let q=y.get($);return q===void 0?null:r1(q,V,performance.now())},"markerAt"),sliding:l(()=>_.size>0,"sliding"),setYields:l($=>{B?.drawn.forEach(V=>R.remove(V)),B=null,A.set($)!==null&&(B={at:[0,0,0],make:l(()=>A.make(),"make"),drawn:[]},B.drawn=P(B,R))},"setYields"),view:l(($,V,q=e)=>{let[ie,ue]=$.focus,[Te,K,ce]=Gu($,V),{near:Me,far:Ce}=Vu($.distance);a.position.set(Te,K,ce),a.lookAt(ie,V,ue),a.far=Ce*1.2,a.near=Math.max(.1,$.distance*.02),a.updateProjectionMatrix(),g.near=Me,g.far=Ce;let pe=$.distance*2.2,Fe=u.shadow.camera;u.position.set(ie+30,V+40,ue+20),u.target.position.set(ie,V,ue),Fe.left=-pe,Fe.right=pe,Fe.top=pe,Fe.bottom=-pe,Fe.near=Math.max(.5,nx-pe*1.6),Fe.far=nx+pe*1.6,Fe.updateProjectionMatrix(),C.follow(ie,ue,Ce*2.2,u.position.clone().sub(u.target.position)),E.follow(ie,ue,Ce*2.2),C.pastThePoles(q.v!==null),E.pastThePoles(q.v!==null),d.clippingPlanes=q.v===null?v:null,F=q.v===null;let ut=ex($.focus,Ce,q),Ne=`${ut.join(";")}${F?" stopped":""}`,qe=ex($.focus,Math.min(Ce,$.distance*2.2),q),tt=qe.join(";");Ne!==D&&(S=ut,D=Ne,h.forEach(Oe=>{Oe.drawn.forEach(lt=>o.remove(lt)),Oe.drawn=P(Oe,o)}),f.forEach(Oe=>{Oe.drawn.forEach(lt=>o.remove(lt)),Oe.drawn=X(Oe)}),B!==null&&(B.drawn.forEach(Oe=>R.remove(Oe)),B.drawn=P(B,R))),A.lean($.pitch),tt!==N&&(I=qe,N=tt,y.forEach(Oe=>{Oe.drawn.forEach(lt=>x.remove(lt)),Oe.drawn=P(Oe,x,I)})),ee(performance.now())},"view"),stats:l(()=>({drawCalls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries}),"stats"),dispose:l(()=>{h.forEach(({geometry:$})=>$.dispose()),h.clear(),f.forEach(({geometry:$})=>$.dispose()),f.clear(),d.dispose(),y.clear(),w.dispose(),A.dispose(),C.dispose(),E.dispose(),c.dispose(),s.dispose()},"dispose")}},"createStage");var $i=1/Math.sqrt(3),rx=1.5*$i,f1=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),p1=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,$i+r*rx],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-$i],[a+.5,o-$i/2],[a+.5,o+$i/2],[a,o+$i],[a-.5,o+$i/2],[a-.5,o-$i/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-$i,[c,u]=f1(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*rx:null}),"period")}},"hexOddRLayout"),ax=p1;var m1=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),ox=m1;var Mi=Math.SQRT2/2,g1=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*Mi,(r+1)*Mi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Mi],[a+Mi,o],[a,o+Mi],[a-Mi,o]]},"outline"),tileAt:l((s,r)=>{let a=s/Mi,o=r/Mi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Mi,v:t?i*Mi:null}),"period")}},"staggeredIsoLayout"),lx=g1;var cx={square:ox,"staggered-iso":lx,"hex-odd-r":ax},x1=l(i=>{if(!Object.prototype.hasOwnProperty.call(cx,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return cx[i.topologyId](i)},"groundLayoutFor"),ux=x1;var qu=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var _1=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),hx=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Ts=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,f,d,p)=>{let v=Math.floor(_1(h,f,t)*16)*(Math.PI/8);return Math.cos(v)*d+Math.sin(v)*p},"slope");return(h,f)=>{let d=h/s,p=f/a,v=Math.floor(d),y=Math.floor(p),_=d-v,x=p-y,w=hx(_),R=hx(x),A=o(v),C=o(v+1),E=c(y),g=c(y+1),S=u(A,E,_,x)+(u(C,E,_-1,x)-u(A,E,_,x))*w,D=u(A,g,_,x-1)+(u(C,g,_-1,x-1)-u(A,g,_,x-1))*w;return Math.max(-1,Math.min(1,(S+(D-S)*R)*1.4))}},"periodicNoise"),Ep=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var Si={shore:-.03,deep:-.15,reach:3},Yu={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},fx={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},dx={Ocean:{relief:{base:Si.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:fx,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},Zu=l(i=>i==="Unknown"?Yu:(Object.prototype.hasOwnProperty.call(dx,i)?dx[i]:void 0)??fx,"terrainEntry");var px=.65,Ap=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),hr=.22,Tp=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),v1=l((i,e,t)=>({u:(Tp(i,e,t,1)*2-1)*hr,v:(Tp(i,e,t,2)*2-1)*hr,scale:.75+Tp(i,e,t,3)*.5}),"peakOf"),y1=l(({layout:i,seed:e=1,source:t})=>{let{width:n,height:s,wrapsY:r}=t,a=i.period(),o=Ep([Ts({cell:.7,period:a,seed:e}),Ts({cell:.35,period:a,seed:e+1}),Ts({cell:.17,period:a,seed:e+2})]),c=Ep([Ts({cell:.45,period:a,seed:e+3}),Ts({cell:.22,period:a,seed:e+4})]),u=l((E,g)=>1-2*Math.abs(c(E,g)),"ridged"),h=Ts({cell:.8,period:a,seed:e+5}),f=Ts({cell:.8,period:a,seed:e+6}),d={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},p=[],v=[],y=l((E,g)=>{let S=(E%n+n)%n;return!r&&(g<0||g>=s)?null:(g%s+s)%s*n+S},"index"),_=l(E=>{let g=new Array(n*s).fill(1/0),S=[];E.forEach((D,I)=>{D&&(g[I]=0,S.push([I%n,Math.floor(I/n)]))});for(let[D,I]of S){let N=g[I*n+D]??1/0;N>=Si.reach||t.neighbours(D,I).forEach(([F,B])=>{let P=B*n+F;(g[P]??1/0)>N+1&&(g[P]=N+1,S.push([F,B]))})}return g},"distancesFromLand"),x=l((E,g)=>{let S=t.terrainAt(E,g);return`${S}${S!=="Unknown"&&t.waterAt(E,g)?" water":""}`},"readAs"),w=l(E=>{if(E!==void 0&&v.length>0&&E.every(([B,P])=>{let X=y(B,P);return X===null||v[X]===x(B,P)}))return[];let g=[],S=[],D=[];for(let B=0;B<s;B++)for(let P=0;P<n;P++){let X=t.terrainAt(P,B);g.push(X),S.push(X!=="Unknown"&&t.waterAt(P,B)),D.push(Zu(X))}let I=_(g.map((B,P)=>B!=="Unknown"&&!S[P])),N=g.map((B,P)=>`${B}${S[P]?" water":""}`),F=[];return N.forEach((B,P)=>{v[P]!==B&&F.push([P%n,Math.floor(P/n)])}),v=N,p=D.map((B,P)=>{let X=B===Yu,ee=P%n,Z=Math.floor(P/n),$=v1(ee,Z,e);if(!S[P])return{relief:B.relief,colour:Ap(B.colour),unknown:X,peak:$};let V=Math.min(I[P]??1/0,Si.reach),q=Si.shore+(Si.deep-Si.shore)*Math.max(0,V-1)/Math.max(1,Si.reach-1);return{relief:{...B.relief,base:q},colour:Ap(B.colour),unknown:X,peak:$}}),F},"refresh"),R=l(E=>{let[g,S]=i.centre(0,E),D=Math.max(...i.outline(0,E).map(([N,F])=>Math.hypot(N-g,F-S))),I=[];for(let N=-6;N<=6;N++)for(let F=-4;F<=4;F++){let[B,P]=i.centre(F,E+N);Math.hypot(B-g,P-S)<1.2+D+hr*Math.SQRT2+1e-9&&I.push([F,N])}return I},"offsetsFor"),A=[R(0),R(1)],C=l((E,g)=>{let[S,D]=i.tileAt(E,g),I=y(S,D),N=I===null?null:p[I]??null;if(N===null||N.unknown)return{height:0,colour:Ap(Yu.colour),unseen:!0};let F=null,B=null,P=l(K=>K==="rolling"?F??=o(E,g):B??=u(E,g),"noiseHere"),X=0,ee=0,Z=0,$=0,V=0,q=0,ie=0,ue=E+hr*h(E,g),Te=g+hr*f(E,g);return(A[D&1]??[]).forEach(([K,ce])=>{let Me=S+K,Ce=D+ce,pe=y(Me,Ce);if(pe===null)return;let Fe=p[pe];if(Fe===void 0)return;let[ut,Ne]=i.centre(Me,Ce),{relief:qe,colour:tt,peak:Oe}=Fe,lt=qu(Math.hypot(E-ut,g-Ne)),Mt=qe.shape==="peaked"?qu(Math.hypot(E-ut-Oe.u,g-Ne-Oe.v)):0,It=qu(Math.hypot(ue-ut,Te-Ne))**3;if(lt>0){let ct=d[qe.shape],yn=ct===null?0:qe.roughness*P(ct);qe.shape==="peaked"?ee+=lt*(qe.base*(1-px)+yn*.5):ee+=lt*(qe.base+yn),X+=lt}if(Mt>0){let ct=qe.roughness*P("ridged");Z+=Mt*Mt*(qe.base*px*Oe.scale+ct*.5)}$+=It,V+=It*tt[0],q+=It*tt[1],ie+=It*tt[2]}),{height:(X>0?ee/X:0)+Z,colour:$>0?[V/$,q/$,ie/$]:N.colour,unseen:!1}},"sample");return w(),{sample:C,height:l((E,g)=>C(E,g).height,"height"),refresh:w}},"createRelief"),mx=y1;var gx=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),xx=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((E,g)=>[E*a,g*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),p=(s+1)*(r+1),v=new Float32Array(p*3),y=new Float32Array(p);for(let E=-1;E<=r+1;E++)for(let g=-1;g<=s+1;g++){let S=e.sample(...h(c+g,u+E)),{height:D,colour:I}=S;d[(E+1)*f+(g+1)]=D,g>=0&&g<=s&&E>=0&&E<=r&&(v.set(I,(E*(s+1)+g)*3),y[E*(s+1)+g]=S.unseen?1:0)}let _=l((E,g)=>d[(g+1)*f+(E+1)]??0,"height"),x=new Float32Array(p*3),w=new Float32Array(p*3),[R,A]=h(c,u);for(let E=0;E<=r;E++)for(let g=0;g<=s;g++){let S=E*(s+1)+g,[D,I]=h(c+g,u+E),N=(_(g+1,E)-_(g-1,E))/(2*a),F=(_(g,E+1)-_(g,E-1))/(2*o),B=Math.hypot(N,1,F);x[S*3]=D-R,x[S*3+1]=_(g,E),x[S*3+2]=I-A,w[S*3]=-N/B,w[S*3+1]=1/B,w[S*3+2]=-F/B}let C=new Uint32Array(s*r*6);for(let E=0;E<r;E++)for(let g=0;g<s;g++){let S=E*(s+1)+g,D=S+1,I=S+s+1,N=I+1,F=(E*s+g)*6;C.set([S,I,D,D,I,N],F)}return{u:R,v:A,positions:x,normals:w,colours:v,unseen:y,indices:C}},"buildChunk"),_x=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let p=Math.floor((f-n)/r);p<=Math.floor((f+n)/r);p++){if(!a&&(p<0||p>=i.chunksV))continue;let v=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${v},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Pn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),vx={Forest:{plants:[Pn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95]},Jungle:{plants:[Pn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Pn("palm",2,[.9,1.2],"#3f8a34","#6b5236")]},Swamp:{plants:[Pn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Pn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")]},Grassland:{plants:[Pn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Pn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Pn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Pn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Pn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Pn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Pn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Pn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},$u=l(i=>Object.prototype.hasOwnProperty.call(vx,i)?vx[i]:null,"growthOf");var b1=["River"],wi=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),M1=l((i,e)=>{if(i.city)return null;let t=wi(i,"Road"),n=wi(i,"Railroad"),s=t?e.filter(h=>wi(h.tile,"Road")).map(({offset:h})=>h):[],r=t?e.filter(h=>!!h.tile.city||wi(h.tile,"Railroad")).map(({offset:h})=>h):[],a=l((h,f)=>h[0]===f[0]&&h[1]===f[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(h=>!n||!r.some(f=>a(f,h))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:wi(i,"Farmland")?"farmland":wi(i,"Irrigation")?"irrigation":null,mine:wi(i,"Mine"),fortress:wi(i,"Fortress"),airbase:wi(i,"Airbase"),pollution:wi(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:h})=>h).filter(h=>!b1.includes(h)).map(h=>[i.terrain._,h]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:$u(i.terrain?._??"Unknown")!==null};return c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),yx=M1;var bt=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),bx={Coal:bt("rocks","#26262a",4),Gold:bt("rocks","#d8b13a",3),Gems:bt("rocks","#59c2d6",4,"#b05ad0"),Iron:bt("rocks","#8a5a44",4),Wheat:bt("crop","#d9b84a",5,"#a88a2c"),Spice:bt("crop","#c0452e",4,"#5d7a2a"),Wine:bt("crop","#6a2c5e",4,"#5d7a2a"),Silk:bt("crop","#e9e2cf",3,"#4f7a34"),Fruit:bt("crop","#e08a2a",4,"#3f7a2a"),Horse:bt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:bt("animal","#4a3424",3,"#2a1e16"),Game:bt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":bt("animal","#8f7e66",2,"#e8e2d6"),Furs:bt("animal","#b0602a",2,"#f0e8dc"),Ivory:bt("animal","#8a8580",1,"#f2ead8"),Seal:bt("animal","#6e7072",2,"#4a4c4e"),Pheasant:bt("bird","#8a3a22",2,"#3d6a3a"),Fish:bt("fish","#b8c4cc",5),Whales:bt("whale","#3a4048",1),Oil:bt("derrick","#222224",1,"#121214"),Oasis:bt("oasis","#3f7a32",3,"#3f86a8"),Peat:bt("peat","#4a3624",4),Shield:bt("logs","#7a5532",4,"#c9a47a")},S1=bt("cairn","#9a9690",5),Mx=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(bx,n)?bx[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??S1},"specialLook");var Np=l(()=>({positions:[],normals:[],colours:[]}),"soup"),In={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Rp=.06,Sx="#8c7a58",wx="#5f5953",w1="#a9abae",E1="#5e432b",A1="#4f87b0",T1="#7da33f",C1=["#c2b448","#8fae3e"],Ex="#9d968a",R1="#4a4c50",Lp="#6b4a2e",P1="#7a6a58",I1="#b89a5a",L1="#c9b48e",Ax="#34322a",xn=new fi(1,1,1),ma=new pi(.5,.5,1,8),Up=new mi(.5,1,8),D1=new mi(.5,1,4),pa=new _s(.5,8,6),No=new pi(.5,.5,1,4,1,!0),Uo=new mi(.5,1,5,1,!0),Ju=new _s(.5,5,3),Pp={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},N1=.05,U1=.22,Tx=72,Ei=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Cx=new Map,Ip=l(i=>{let e=Cx.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Ue(i);e=[t,n,s],Cx.set(i,e)}return e},"colourOf"),Rx=new WeakMap,F1=l(i=>{let e=Rx.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Rx.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),O1=new ot,B1=new He,z1=new G,k1=new cn,G1=new wn,V1=new G,Pt,Px,tn,kp=class kp{constructor(e,t){Q(this,Pt);this.lines=[];this.taken=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=Ip(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/Rp)),u=Math.max(1,Math.ceil(n/Rp)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<c;d++)for(let p=0;p<u;p++){let[v,y]=f(d/c,(p+1)/u),[_,x]=f((d+1)/c,(p+1)/u),[w,R]=f(d/c,p/u),[A,C]=f((d+1)/c,p/u);z(this,Pt,tn).call(this,v,y,r,a),z(this,Pt,tn).call(this,_,x,r,a),z(this,Pt,tn).call(this,w,R,r,a),z(this,Pt,tn).call(this,_,x,r,a),z(this,Pt,tn).call(this,A,C,r,a),z(this,Pt,tn).call(this,w,R,r,a)}}disc(e,t,n,s,r=12){let a=Ip(n),[o,c]=e,u=Math.max(1,Math.ceil(t/Rp)),h=l((f,d)=>{let p=d/r*Math.PI*2,v=f/u*t;return[o+Math.cos(p)*v,c+Math.sin(p)*v]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let p=h(f+1,d),v=h(f+1,d+1);if(f===0)z(this,Pt,tn).call(this,o,c,s,a),z(this,Pt,tn).call(this,...v,s,a),z(this,Pt,tn).call(this,...p,s,a);else{let y=h(f,d),_=h(f,d+1);z(this,Pt,tn).call(this,...y,s,a),z(this,Pt,tn).call(this,..._,s,a),z(this,Pt,tn).call(this,...p,s,a),z(this,Pt,tn).call(this,..._,s,a),z(this,Pt,tn).call(this,...v,s,a),z(this,Pt,tn).call(this,...p,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=F1(e),c=O1.compose(z1.set(...t),k1.setFromEuler(G1.set(...r)),V1.set(...n)),u=c.elements,h=B1.getNormalMatrix(c).elements,[f,d,p]=Ip(s),v=this.soup;for(let y=0;y<a.length;y+=3){let _=a[y],x=a[y+1],w=a[y+2],R=o[y],A=o[y+1],C=o[y+2],E=h[0]*R+h[3]*A+h[6]*C,g=h[1]*R+h[4]*A+h[7]*C,S=h[2]*R+h[5]*A+h[8]*C,D=Math.hypot(E,g,S)||1;v.positions.push(u[0]*_+u[4]*x+u[8]*w+u[12],u[1]*_+u[5]*x+u[9]*w+u[13],u[2]*_+u[6]*x+u[10]*w+u[14]),v.normals.push(E/D,g/D,S/D),v.colours.push(f,d,p)}}spot(e,t){let n=Ei(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-U1-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,eE(e,t,o,c)-N1-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=Ei(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Tx;h++){let f=s+h/Tx*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>c&&(o=d,c=p)}return this.taken.push([o[0],o[1],n]),o}};Pt=new WeakSet,Px=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),tn=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...z(this,Pt,Px).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(kp,"Layer");var Dp=kp,Fp=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),Op=l(i=>i.alone||i.joins.length>0,"drawn"),H1=l((i,e)=>{let{place:t}=i;Op(e)&&(e.joins.forEach(n=>i.strip(t.centre,Fp(t,n),.07,Sx,In.road)),i.disc(t.centre,e.alone?.09:.035,Sx,In.road))},"road"),W1=l((i,e)=>{if(!Op(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>Fp(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,wx,In.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,E1,In.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,w1,In.rail))}),i.disc(t.centre,.05,wx,In.ballast)},"railroad"),X1=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?C1[o%2]:T1;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,In.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,A1,In.field+.001)}}},"fields"),q1=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(xn,[e-.02,n+.05,t],[.01,.11,.01],Lp,[0,0,-.3]),i.solid(xn,[e+.02,n+.05,t],[.01,.11,.01],Lp,[0,0,.3]),i.solid(ma,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(Up,[a,i.ground(a,o)+.02,o],[.07,.04,.07],P1)})},"mine"),Y1=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(xn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],Ex)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(ma,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Ex)})},"fortress"),Z1=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,R1,In.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",In.road+.004),i.solid(xn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),$1=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Ax,In.smear,14),i.disc(i.spot(7,.5),e*.25,Ax,In.smear+.001)},"pollution"),J1=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(Ei(i.place.seed,n*31+o*2)-.5)*c,t[1]+(Ei(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),f=Ei(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(pa,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(ma,[c,h+.02,u],[.008,.04,.008],s),i.solid(pa,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(xn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(xn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(xn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(pa,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(xn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(pa,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(pa,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(xn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(xn,[c,h+.008,u],[.08,.016,.08],s),i.solid(D1,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,In.field+.002);{let[d,p]=r(o+5,.1),v=i.ground(d,p);i.solid(ma,[d,v+.06,p],[.012,.12,.012],Lp),i.solid(Up,[d,v+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?ma:xn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(pa,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),K1=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Ei(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(ma,[s,a+.02,r],[.05,.04,.05],L1),i.solid(Up,[s,a+.055,r],[.065,.035,.065],I1)})},"hut"),Q1={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},j1=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(No,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(Uo,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(Uo,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(No,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(Ju,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(No,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(Uo,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(No,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(xn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(Ju,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(Uo,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(Uo,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid(Ju,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(xn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(Ju,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(No,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(xn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),eE=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),tE=l((i,e)=>{let t=$u(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*Ei(r,h),d=t.conifers,p=d!==void 0&&Ei(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,v=Q1[p]*f;for(let y=0;y<6;y++){let _=Ei(r,h+2+y*2)*Math.PI*2,x=Math.sqrt(Ei(r,h+3+y*2))*s*.92,w=n[0]+Math.cos(_)*x,R=n[1]+Math.sin(_)*x;if(i.hasRoom(w,R,v)){j1(i,o,p,w,R,f,_),i.taken.push([w,R,v]);break}}}})},"plants"),Bp=l((i,e,t)=>{let n=new Dp(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(a=>{a!==null&&Op(a)&&(a.joins.forEach(o=>n.lines.push([s,Fp(e,o)])),a.alone&&n.lines.push([s,s]))}),i.fortress){let a=r*.62,o=[[-a,-a],[a,-a],[a,a],[-a,a]].map(([c,u])=>[s[0]+c,s[1]+u]);o.forEach((c,u)=>n.lines.push([c,o[(u+1)%4]]))}if(i.airbase){let a=r*.75;n.lines.push([[s[0]-a,s[1]+.12],[s[0]+a,s[1]+.12]])}return i.irrigation!==null&&X1(n,i.irrigation),i.road!==null&&H1(n,i.road),i.railroad!==null&&W1(n,i.railroad),i.mine&&q1(n,n.claim(...Pp.mine,.1)),i.fortress&&Y1(n),i.airbase&&Z1(n),i.pollution&&$1(n),i.specials.forEach(([a,o],c)=>J1(n,Mx(a,o),n.claim(...Pp.special(c),.1),c+1)),i.hut&&K1(n,n.claim(...Pp.hut,.13)),i.vegetation&&i.irrigation===null&&!i.fortress&&!i.airbase&&tE(n,i),{taken:n.taken,lines:n.lines}},"layOverlay"),nE=l((i,e,t)=>{let n=Np();return t.forEach(({overlay:s,place:r})=>Bp(s,r,n)),zp(i,e,n)},"overlayMesh"),zp=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Ix=nE;var Cs,nn,si,Oo,Ai,Ln,fn,ga,Bo,dr,zo,ko,pt,Lx,Vp,Hp,Ku,Qu,Dx,Fo,Wp=class Wp{constructor(e){Q(this,pt);Q(this,Cs);Q(this,nn);Q(this,si,[]);Q(this,Oo);Q(this,Ai);Q(this,Ln,new Set);Q(this,fn,null);Q(this,ga,null);Q(this,Bo,new Map);Q(this,dr,[0,0]);Q(this,zo);Q(this,ko);k(this,Ai,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=ux({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),k(this,Cs,mx({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:l((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:l((d,p)=>t.directions().map(v=>t.neighbour(d,p,v)).filter(v=>v!==null),"neighbours")}})),k(this,nn,gx(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[v,y]=this.layout.centre(d,p);return Math.hypot(v-a,y-o)}));k(this,Oo,1.2+c+hr*Math.SQRT2+(Si.reach-1)*u);let h=this.layout.outline(0,0),f=h.flatMap(([d,p],v)=>{let[y,_]=h[(v+1)%h.length],x=Math.hypot(y-d,_-p);return x===0?[]:[{away:Math.abs((y-d)*(o-p)-(_-p)*(a-d))/x,normal:[(_-p)/x,(d-y)/x]}]});k(this,zo,Math.min(...f.map(({away:d})=>d))),k(this,ko,Math.min(...f.map(({away:d,normal:[p,v]})=>d/(Math.abs(p)+Math.abs(v)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=m(this,nn),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,_)=>{let x=`${y},${_}`,w=n.get(x);return w===void 0&&(w=m(this,Cs).height(y*s,_*r),n.set(x,w)),w},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(p-f)*u;let v=h(a+1,o+1);return v+(p-v)*(1-c)+(d-v)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=m(this,nn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return m(this,nn).chunksV*m(this,nn).stepsV*m(this,nn).spacingV}heightAt(e,t){return m(this,Cs).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=m(this,nn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);k(this,si,z(this,pt,Fo).call(this,r,e,t)),k(this,dr,[e,t]),r.forEach(a=>m(this,Ln).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return[];k(this,dr,[t,n]),(e.length===0?[...z(this,pt,Qu).call(this).values()].flat():z(this,pt,Dx).call(this,e)).forEach(([o,c])=>{let u=z(this,pt,Ku).call(this,o,c);if(m(this,Ln).has(u)||m(this,fn)?.key===u&&!z(this,pt,Lx).call(this,m(this,fn),o,c))return;JSON.stringify(z(this,pt,Vp).call(this,o,c))!==(m(this,Bo).get(`${o},${c}`)??"null")&&m(this,Ln).add(u)});let r=m(this,Cs).refresh(s?void 0:e);if(r.length===0)return r;let a=_x(m(this,nn),this.layout,r,m(this,Oo)).map(([o,c])=>`${o},${c}`);return k(this,si,z(this,pt,Fo).call(this,[...new Set([...m(this,si),...a])],t,n)),r}refocus(e,t){k(this,si,z(this,pt,Fo).call(this,m(this,si),e,t)),k(this,dr,[e,t])}pending(){return m(this,si).length}overlaysPending(){return m(this,Ln).size+(m(this,fn)===null||m(this,Ln).has(m(this,fn).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;m(this,si).length>0;){if(s())return;let r=m(this,si).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,xx(m(this,nn),m(this,Cs),a,o)),m(this,Ln).add(r)}for(;m(this,Ln).size>0||m(this,fn)!==null;){if(m(this,fn)!==null&&m(this,Ln).has(m(this,fn).key)&&k(this,fn,null),m(this,fn)===null){let d=z(this,pt,Fo).call(this,[...m(this,Ln)],...m(this,dr))[0];m(this,Ln).delete(d),k(this,fn,{key:d,squares:z(this,pt,Qu).call(this).get(d)??[],done:0,laid:Np(),heights:new Map})}let r=m(this,fn);for(;r.done<r.squares.length;){let[d,p]=r.squares[r.done],v=z(this,pt,Hp).call(this,d,p,r.heights);if(r.done++,v!==null&&Bp(v.overlay,v.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=m(this,nn);k(this,fn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:zp(a*c*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=m(this,nn),o=new Map,c=(z(this,pt,Qu).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>z(this,pt,Hp).call(this,u,h,o)??[]);return c.length===0?null:Ix(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return z(this,pt,Ku).call(this,e,t)}};Cs=new WeakMap,nn=new WeakMap,si=new WeakMap,Oo=new WeakMap,Ai=new WeakMap,Ln=new WeakMap,fn=new WeakMap,ga=new WeakMap,Bo=new WeakMap,dr=new WeakMap,zo=new WeakMap,ko=new WeakMap,pt=new WeakSet,Lx=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),Vp=l(function(e,t){let n=m(this,Ai).topology();return yx(m(this,Ai).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:m(this,Ai).get(r[0],r[1])}]}))},"#overlayAt"),Hp=l(function(e,t,n){let s=z(this,pt,Vp).call(this,e,t);if(m(this,Bo).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t);return{overlay:s,place:{centre:[r,a],toward:l(([o,c])=>this.layout.centre(e+o,t+c),"toward"),radius:m(this,zo),inner:m(this,ko),heightAt:l((o,c)=>this.surfaceAt(o,c,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1))}}},"#square"),Ku=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=m(this,nn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),Qu=l(function(){if(m(this,ga)===null){let e=new Map;for(let t=0;t<m(this,Ai).height();t++)for(let n=0;n<m(this,Ai).width();n++){let s=z(this,pt,Ku).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}k(this,ga,e)}return m(this,ga)},"#chunksOfSquares"),Dx=l(function(e){let t=m(this,Ai).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),Fo=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=m(this,nn),c=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=l((v,y)=>Math.abs(y===null?v:v-y*Math.round(v/y)),"round"),p=l(v=>{let[y,_]=v.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((_+.5)*u-n,f))},"distance");return[...e].sort((v,y)=>p(v)-p(y))},"#nearestFirst"),l(Wp,"Land");var Gp=Wp,Nx=Gp;var iE=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),xa=iE;var Ux=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var sE=8,rE=.92,aE=.02,Fx=3,oE=50,lE=8,cE=10,Ox=250,Go,Vo,_a,va,fr,Rs,Xp=class Xp{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){Q(this,Go);Q(this,Vo);Q(this,_a);Q(this,va);Q(this,fr,!1);Q(this,Rs);this.pointerId=e,k(this,Go,t),k(this,Vo,n),k(this,_a,t),k(this,va,n),k(this,Rs,[{x:t,y:n,time:s}])}dragging(){return m(this,fr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!m(this,fr)&&Math.hypot(t-m(this,Go),n-m(this,Vo))<sE)return null;let r=!m(this,fr),a=m(this,_a)-t,o=m(this,va)-n;return k(this,fr,!0),k(this,_a,t),k(this,va,n),m(this,Rs).push({x:t,y:n,time:s}),m(this,Rs).length>20&&m(this,Rs).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return Ux(m(this,Rs),e)}};Go=new WeakMap,Vo=new WeakMap,_a=new WeakMap,va=new WeakMap,fr=new WeakMap,Rs=new WeakMap,l(Xp,"Press");var ju=Xp,Ti,Ho,qp=class qp{constructor(e){Q(this,Ti,null);Q(this,Ho);k(this,Ho,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>Fx?Fx/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<aE){k(this,Ti,null);return}m(this,Ho).call(this,-s*u,-r*u);let h=Math.pow(rE,u/16);s*=h,r*=h,k(this,Ti,window.requestAnimationFrame(o))},"step");k(this,Ti,window.requestAnimationFrame(o))}gliding(){return m(this,Ti)!==null}stop(){m(this,Ti)!==null&&(window.cancelAnimationFrame(m(this,Ti)),k(this,Ti,null))}};Ti=new WeakMap,Ho=new WeakMap,l(qp,"Glide");var eh=qp,pr,Wo,Xo,ya,Yp=class Yp{constructor(){Q(this,pr,0);Q(this,Wo,0);Q(this,Xo,-1/0);Q(this,ya,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=Ox)return 0;let r=Math.sign(s),a=e.timeStamp-m(this,Xo)>Ox||r!==m(this,Wo);if(k(this,Xo,e.timeStamp),k(this,Wo,r),a&&(k(this,pr,0),k(this,ya,0)),n&&!e.ctrlKey&&m(this,ya)>=cE)return 0;if(!a&&n){if(k(this,pr,m(this,pr)+s),Math.abs(m(this,pr))<(e.ctrlKey?lE:oE))return 0;k(this,pr,0)}return n&&!e.ctrlKey&&k(this,ya,m(this,ya)+1),s<0?1:-1}};pr=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,ya=new WeakMap,l(Yp,"WheelTurn");var th=Yp;var uE=350,hE=.006,Bx=.004,Ci,qt,pn,ba,Ri,ri,rh,Xn,qn,Ps,Ma,Dn,Is,Ae,Wn,nh,ih,zx,$p,Ji,Jp,kx,Ki,Gx,Vx,Hx,Wx,qo,Xx,qx,Yx,sh,Kp=class Kp{constructor(e,t,n=null){Q(this,Ae);Q(this,Ci);Q(this,qt);Q(this,pn,null);Q(this,ba,[0,0]);Q(this,Ri,null);Q(this,ri);Q(this,rh,new th);Q(this,Xn,new Map);Q(this,qn,null);Q(this,Ps,null);Q(this,Ma,[]);Q(this,Dn);Q(this,Is,null);k(this,Ci,e),k(this,qt,t),k(this,Dn,n),k(this,ri,new eh((s,r)=>{let[a,o]=z(this,Ae,zx).call(this);z(this,Ae,Jp).call(this,[a,o],[a-s,o-r])})),z(this,Ae,Wn).call(this,"pointerdown",s=>z(this,Ae,kx).call(this,s)),z(this,Ae,Wn).call(this,"pointermove",s=>z(this,Ae,Vx).call(this,s)),z(this,Ae,Wn).call(this,"pointerup",s=>z(this,Ae,Hx).call(this,s)),z(this,Ae,Wn).call(this,"pointercancel",s=>z(this,Ae,Wx).call(this,s)),z(this,Ae,Wn).call(this,"wheel",s=>z(this,Ae,qx).call(this,s),{passive:!1}),z(this,Ae,Wn).call(this,"gesturestart",s=>z(this,Ae,sh).call(this,s,"start"),{passive:!1}),z(this,Ae,Wn).call(this,"gesturechange",s=>z(this,Ae,sh).call(this,s,"change"),{passive:!1}),z(this,Ae,Wn).call(this,"gestureend",s=>z(this,Ae,sh).call(this,s,"end"),{passive:!1}),z(this,Ae,Wn).call(this,"contextmenu",s=>z(this,Ae,Gx).call(this,s)),z(this,Ae,Wn).call(this,"pointerleave",()=>m(this,Dn)?.hover(null)),z(this,Ae,Wn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return m(this,pn)?.dragging()===!0||m(this,Ri)!==null}moving(){return this.dragging()||m(this,qn)!==null||m(this,ri).gliding()}dispose(){m(this,ri).stop(),z(this,Ae,Ki).call(this),m(this,Ma).forEach(([e,t,n])=>m(this,Ci).removeEventListener(e,t,n)),k(this,Ma,[])}};Ci=new WeakMap,qt=new WeakMap,pn=new WeakMap,ba=new WeakMap,Ri=new WeakMap,ri=new WeakMap,rh=new WeakMap,Xn=new WeakMap,qn=new WeakMap,Ps=new WeakMap,Ma=new WeakMap,Dn=new WeakMap,Is=new WeakMap,Ae=new WeakSet,Wn=l(function(e,t,n){m(this,Ci).addEventListener(e,t,n),m(this,Ma).push([e,t,n])},"#listen"),nh=l(function(){return{width:m(this,Ci).clientWidth||1,height:m(this,Ci).clientHeight||1}},"#box"),ih=l(function([e,t]){let{width:n,height:s}=z(this,Ae,nh).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),zx=l(function(){let{width:e,height:t}=z(this,Ae,nh).call(this);return[e/2,t/2]},"#middle"),$p=l(function(){let{width:e,height:t}=z(this,Ae,nh).call(this);return e/t},"#aspect"),Ji=l(function(e){let t=m(this,Ci).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Jp=l(function(e,t){m(this,qt).setOrbit(Wg(m(this,qt).orbit(),m(this,qt).lookHeight(),z(this,Ae,ih).call(this,e),z(this,Ae,ih).call(this,t),z(this,Ae,$p).call(this)))},"#pan"),kx=l(function(e){if(m(this,ri).stop(),m(this,Dn)?.hover(null),e.pointerType==="touch"&&(m(this,Xn).set(e.pointerId,z(this,Ae,Ji).call(this,e)),m(this,Xn).size===2)){k(this,pn,null),z(this,Ae,Ki).call(this),k(this,qn,z(this,Ae,qo).call(this));return}if(e.isPrimary&&e.button!==2){if(m(this,Ci).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,Ri,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new ju(e),[n,s]=z(this,Ae,Ji).call(this,e),{clientX:r,clientY:a}=e;k(this,pn,t),k(this,ba,[n,s]),z(this,Ae,Ki).call(this),k(this,Is,window.setTimeout(()=>{k(this,Is,null),m(this,pn)===t&&!t.dragging()&&m(this,Dn)?.menu(n,s,r,a,!0)===!0&&k(this,pn,null)},uE))}}},"#down"),Ki=l(function(){m(this,Is)!==null&&(window.clearTimeout(m(this,Is)),k(this,Is,null))},"#stopHold"),Gx=l(function(e){if(m(this,Dn)===null||!m(this,Dn).menuOnRightClick()||(e.preventDefault(),m(this,Dn).menuOpen()))return;let[t,n]=z(this,Ae,Ji).call(this,e);m(this,Dn).menu(t,n,e.clientX,e.clientY,!1)&&(z(this,Ae,Ki).call(this),k(this,pn,null))},"#rightClick"),Vx=l(function(e){if(m(this,Xn).has(e.pointerId)&&(m(this,Xn).set(e.pointerId,z(this,Ae,Ji).call(this,e)),m(this,qn)!==null)){z(this,Ae,Xx).call(this);return}let t=m(this,Ri);if(t!==null&&t.pointerId===e.pointerId){let r=m(this,qt).orbit();m(this,qt).setOrbit(lr({...r,yaw:r.yaw-(e.clientX-t.x)*hE,pitch:r.pitch+(e.clientY-t.y)*Bx})),t.x=e.clientX,t.y=e.clientY;return}let n=m(this,pn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!m(this,ri).gliding()){let[r,a]=z(this,Ae,Ji).call(this,e);m(this,Dn)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;z(this,Ae,Ki).call(this);let s=z(this,Ae,Ji).call(this,e);z(this,Ae,Jp).call(this,m(this,ba),s),k(this,ba,s)},"#move"),Hx=l(function(e){if(m(this,Xn).delete(e.pointerId),m(this,qn)!==null){k(this,qn,m(this,Xn).size<2?null:z(this,Ae,qo).call(this));return}if(m(this,Ri)?.pointerId===e.pointerId){k(this,Ri,null);return}let t=m(this,pn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,pn,null),z(this,Ae,Ki).call(this),!t.dragging()){let[n,s]=z(this,Ae,Ji).call(this,e);m(this,Dn)?.click(n,s,e.clientX,e.clientY);return}xa()||m(this,ri).start(t.releaseVelocity(e.timeStamp))}},"#up"),Wx=l(function(e){m(this,Xn).delete(e.pointerId),m(this,qn)!==null&&k(this,qn,m(this,Xn).size<2?null:z(this,Ae,qo).call(this)),m(this,pn)?.pointerId===e.pointerId&&(k(this,pn,null),z(this,Ae,Ki).call(this)),m(this,Ri)?.pointerId===e.pointerId&&k(this,Ri,null)},"#cancel"),qo=l(function(){let[e,t]=[...m(this,Xn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:m(this,qt).orbit()}},"#measurePair"),Xx=l(function(){let e=m(this,qn),t=z(this,Ae,qo).call(this);e===null||t===null||m(this,qt).setOrbit(lr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*Bx}))},"#twoFingers"),qx=l(function(e){e.preventDefault();let t=m(this,rh).turned(e,m(this,Ps)?.at??null);t!==0&&(m(this,ri).stop(),z(this,Ae,Yx).call(this,t,z(this,Ae,Ji).call(this,e)))},"#wheelTurned"),Yx=l(function(e,t){let n=m(this,qt).orbit(),s=da(n,e),r=ha(n,m(this,qt).lookHeight(),z(this,Ae,ih).call(this,t),z(this,Ae,$p).call(this));if(r===null||s.distance===n.distance){m(this,qt).setOrbit(s);return}let a=1-s.distance/n.distance;m(this,qt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),sh=l(function(e,t){if(e.preventDefault(),m(this,qn)!==null){k(this,Ps,null);return}if(t==="end"){k(this,Ps,null);return}if(t==="start"){m(this,ri).stop(),k(this,pn,null),z(this,Ae,Ki).call(this),k(this,Ps,{orbit:m(this,qt).orbit(),at:e.timeStamp});return}let n=m(this,Ps);n!==null&&(n.at=e.timeStamp,m(this,qt).setOrbit(lr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(Kp,"CameraInput");var Zp=Kp,Zx=Zp;var dE=["#9a9a9a","#4a4a4a"],Yo=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?dE:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Qp=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),fE=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),pE=l((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=Qp(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Yo(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:Yo(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:fE(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),$x=pE;var mE=1,gE=.04,xE=12,_E=l((i,e,t,n,s,{water:r=0,ceiling:a=mE}={})=>{let{from:o,direction:c}=gp(i,e,t,n),[u,h,f]=o,[d,p,v]=c;if(p>-1e-6)return null;let y=l(g=>[u+d*g,h+p*g,f+v*g],"at"),_=l(g=>{let[S,D,I]=y(g);return D-Math.max(r,s(S,I))},"above"),x=Math.max(0,(h-a)/-p),w=(h-r)/-p,R=gE/Math.max(1e-6,Math.hypot(d,v)),A=x;for(let g=x;;g=Math.min(w,g+R)){if(_(g)<=0){let S=A,D=g;for(let F=0;F<xE;F++){let B=(S+D)/2;_(B)>0?S=B:D=B}let[I,,N]=y(D);return[I,N]}if(g>=w)break;A=g}let[C,,E]=y(w);return[C,E]},"pickGround"),Jx=_E;var ah=4,Ls,Zo,mr,gr,_n,Sa,Ds,Qi,$o,Jo,Ko,ai,oh,Kx,em,tm=class tm{constructor(e,t,n,s,r){Q(this,ai);Q(this,Ls);Q(this,Zo);Q(this,mr);Q(this,gr);Q(this,_n);Q(this,Sa);Q(this,Ds);Q(this,Qi);Q(this,$o);Q(this,Jo);Q(this,Ko,l(e=>{let t=m(this,Ls).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;m(this,Jo).call(this,n*m(this,_n),s*m(this,Sa))},"#click"));k(this,Ls,e),k(this,mr,t),k(this,gr,n),k(this,_n,t.period().u),k(this,Sa,s),k(this,Jo,r),k(this,Qi,document.createElement("canvas"));let{v:a}=t.period();k(this,Ds,a),k(this,$o,[[0,0],[-m(this,_n),0],...a===null?[]:[[0,-a],[-m(this,_n),-a]]]);let o=Math.max(1,Math.round(m(this,_n)*ah)),c=Math.max(1,Math.round(m(this,Sa)*ah));[e,m(this,Qi)].forEach(u=>{u.width=o,u.height=c}),k(this,Zo,e.getContext("2d")),e.addEventListener("click",m(this,Ko))}dispose(){m(this,Ls).removeEventListener("click",m(this,Ko))}redraw(){let e=m(this,Qi).getContext("2d");if(e===null)return;let t=m(this,gr).width(),n=m(this,gr).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,m(this,Qi).width,m(this,Qi).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=m(this,gr).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Zu(c).colour,m(this,$o).forEach(([f,d])=>{z(this,ai,Kx).call(this,e,a,r,f,d),e.fill()});let[u,h]=m(this,mr).centre(a,r);if(o.city)s.push([u,h,Yo(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=Qp(o.units,null);f!==null&&s.push([u,h,Yo(f.player)[0],1.4])}}s.forEach(([r,a,o,c])=>z(this,ai,em).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=m(this,Zo);if(n===null)return;if(n.clearRect(0,0,m(this,Ls).width,m(this,Ls).height),n.drawImage(m(this,Qi),0,0),t!==null){let[h,f]=m(this,mr).centre(t.x,t.y);n.fillStyle="#ffffff",z(this,ai,em).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=m(this,Ds),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-m(this,_n)*Math.floor(r/m(this,_n)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-m(this,_n),0,m(this,_n)].forEach(f=>{n.beginPath(),e.forEach(([d,p],v)=>{let[y,_]=z(this,ai,oh).call(this,d+o+f,p+c+h);v===0?n.moveTo(y,_):n.lineTo(y,_)}),n.closePath(),n.stroke()}))}};Ls=new WeakMap,Zo=new WeakMap,mr=new WeakMap,gr=new WeakMap,_n=new WeakMap,Sa=new WeakMap,Ds=new WeakMap,Qi=new WeakMap,$o=new WeakMap,Jo=new WeakMap,Ko=new WeakMap,ai=new WeakSet,oh=l(function(e,t){return[e*ah,t*ah]},"#px"),Kx=l(function(e,t,n,s=0,r=0){e.beginPath(),m(this,mr).outline(t,n).forEach(([a,o],c)=>{let[u,h]=z(this,ai,oh).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),em=l(function(e,t){return(m(this,Ds)===null?[0]:[-m(this,Ds),0,m(this,Ds)]).flatMap(s=>[-m(this,_n),0,m(this,_n)].map(r=>z(this,ai,oh).call(this,e+r,t+s)))},"#everywhere"),l(tm,"Minimap3D");var jp=tm,Qx=jp;var vE=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),jx=l(i=>{let e=vE(i).sort((n,s)=>n._.charCodeAt(0)-s._.charCodeAt(0)).flatMap(({_:n,value:s})=>Array.from({length:s},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,s)=>({_:n,column:s%t,row:Math.floor(s/t)}))}},"tileYieldGrid");var e_=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),t_=l(i=>i.city??i.workedBy??null,"squareCity");var yE=.9,bE=l(i=>{let{columns:e,icons:t}=jx(i),n=Math.min(e,t.length),s=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:a,row:o})=>({_:r,right:a-(n-1)/2,up:(s-1)/2-o}))}},"yieldSlots"),ME=l((i,e)=>yE*e/Math.hypot(i,2),"yieldIconSize"),n_=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return Math.hypot(o-t,c-n)}))},"innerOf"),i_=l(({at:i,yields:e},t)=>{let{columns:n,slots:s}=bE(e);return s.length===0?null:{at:i,size:ME(n,t),slots:s}},"laidYields"),s_=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},s=new Map,r=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=s.get(u);d===void 0&&(d=n.names.push(u)-1,s.set(u,d)),n.anchors[r*3]=a[0],n.anchors[r*3+1]=a[1],n.anchors[r*3+2]=a[2],n.slots[r*2]=h,n.slots[r*2+1]=f,n.sizes[r]=o,n.cells[r]=d,r++})}),n},"yieldMesh");var SE=10,wE=4e3,r_=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),EE=350,AE=500,TE=.25,CE=400,Ut,nl,il,Je,Yt,xr,sl,rl,nt,mt,vn,Ea,al,_r,Us,Aa,ol,ll,Nn,cl,ji,oi,ul,Pi,Fs,hl,Un,Ta,Ca,Os,es,Ra,Bs,vr,Pa,ts,dl,ns,yr,fl,br,Ii,Mr,zs,pl,ml,Ia,gl,La,xl,Da,Na,Sr,ae,im,a_,lh,o_,Qo,l_,c_,u_,sm,ch,h_,d_,jo,Ns,el,f_,p_,rm,wa,m_,g_,am,tl,om,x_,__,lm,sn,v_,y_,cm,um=class um{constructor(e,t=sx){Q(this,ae);Q(this,Ut);Q(this,nl);Q(this,il,[]);Q(this,Je);Q(this,Yt);Q(this,xr,null);Q(this,sl,0);Q(this,rl,"");Q(this,nt);Q(this,mt,null);Q(this,vn,null);Q(this,Ea);Q(this,al);Q(this,_r);Q(this,Us,null);Q(this,Aa,null);Q(this,ol);Q(this,ll,!1);Q(this,Nn);Q(this,cl);Q(this,ji,new Map);Q(this,oi,new Map);Q(this,ul);Q(this,Pi,null);Q(this,Fs,null);Q(this,hl);Q(this,Un,l(()=>{let e=m(this,Fs);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,Fs,null),document.removeEventListener("keydown",m(this,Un),!0),e.open&&m(this,Nn).endTooltip(m(this,Ut)))},"#endHover"));Q(this,Ta,null);Q(this,Ca,!0);Q(this,Os,new Map);Q(this,es,null);Q(this,Ra,new Map);Q(this,Bs,new Map);Q(this,vr,[]);Q(this,Pa,0);Q(this,ts,null);Q(this,dl,null);Q(this,ns,!0);Q(this,yr);Q(this,fl,l(()=>{},"#stopUnitSize"));Q(this,br,!1);Q(this,Ii,!0);Q(this,Mr,!1);Q(this,zs,new Map);Q(this,pl);Q(this,ml,l(()=>{},"#stopArtChanged"));Q(this,Ia,!1);Q(this,gl);Q(this,La);Q(this,xl,"");Q(this,Da,l(()=>z(this,ae,cm).call(this),"#resizeHandler"));Q(this,Na,null);Q(this,Sr,!1);k(this,Ut,e.mapCanvas),k(this,nl,e.coveredBy),k(this,gl,e.art),k(this,cl,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,yr,e.unitSize?.get()??1),k(this,La,e.art.id()),this.world=e.world,k(this,Je,new Nx(e.world)),k(this,pl,n_(m(this,Je).layout,e.world.topology())),k(this,vr,e.world.tiles()),k(this,Pa,m(this,vr).length),k(this,al,e.cameraDistance),k(this,ol,e.lockVerticalEdges);let n=e.cameraDistance.get();k(this,nt,z(this,ae,jo).call(this,{...Vg(m(this,Je).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,_r,m(this,nt).distance),this.portal=new Tm(e,{centre:l(()=>z(this,ae,h_).call(this),"centre"),centreOn:l((s,r)=>z(this,ae,d_).call(this,s,r),"centreOn"),changed:l(()=>z(this,ae,sn).call(this),"changed"),visible:l((s,r,a)=>z(this,ae,o_).call(this,s,r,a),"visible")}),k(this,Yt,t(e.mapCanvas,{period:m(this,Je).layout.period(),ground:m(this,Je).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,Ta,new Qx(e.minimapCanvas,m(this,Je).layout,e.world,m(this,Je).extentV(),(s,r)=>z(this,ae,el).call(this,{...m(this,mt)?.to??m(this,nt),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(k(this,xr,z(this,ae,v_).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),m(this,Je).queueAll(...z(this,ae,ch).call(this)),z(this,ae,tl).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),k(this,Nn,e.squares),k(this,hl,e.playerId),k(this,ul,e.transport),k(this,Ea,new Zx(e.mapCanvas,{orbit:l(()=>m(this,nt),"orbit"),lookHeight:l(()=>m(this,vn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>z(this,ae,l_).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>z(this,ae,c_).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>m(this,Nn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>m(this,Nn).menuOpen(),"menuOpen"),hover:l(s=>z(this,ae,u_).call(this,s),"hover")})),window.addEventListener("resize",m(this,Da)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,Na,new ResizeObserver(m(this,Da))),m(this,Na).observe(e.mapCanvas.parentElement)),z(this,ae,cm).call(this),z(this,ae,sn).call(this),k(this,fl,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==m(this,yr)&&!m(this,Sr)&&(k(this,yr,s),z(this,ae,tl).call(this),z(this,ae,sn).call(this))})??(()=>{})),k(this,ml,e.artChanged?.(()=>{m(this,Sr)||(k(this,Ii,!0),z(this,ae,sn).call(this))})??(()=>{}))}land(){return m(this,Je)}orbit(){return m(this,nt)}moving(){return m(this,mt)!==null||m(this,Ea).moving()}setOrbit(e){m(this,Un).call(this),k(this,mt,null),k(this,nt,z(this,ae,jo).call(this,e)),z(this,ae,sn).call(this)}activeUnit(){return{unit:m(this,ts),pendingTile:m(this,dl)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=m(this,mt)?.to??m(this,nt);z(this,ae,el).call(this,{...t,yaw:t.yaw+e*pp},z(this,ae,im).call(this)+e*pp)}heading(){return{turn:(m(this,mt)?.to??m(this,nt)).yaw,directions:Cm(m(this,Je).layout,this.world.topology())}}faceNorth(){z(this,ae,el).call(this,{...m(this,mt)?.to??m(this,nt),yaw:0},r_(-m(this,nt).yaw))}debugViewModes(){return[]}dispose(){z(this,ae,lm).call(this,!0),k(this,Sr,!0),m(this,fl).call(this),m(this,ml).call(this),m(this,Un).call(this),m(this,Ea).dispose(),m(this,Ta)?.dispose(),window.removeEventListener("resize",m(this,Da)),m(this,Na)?.disconnect(),m(this,es)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(m(this,es)),k(this,es,null),m(this,xr)?.remove(),m(this,Yt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=m(this,Pi);e!==null&&(k(this,Pi,null),m(this,Ut).classList.remove("picking-tile"),e.window?.close())}flush(){z(this,ae,rm).call(this),z(this,ae,sn).call(this)}mapEvent(e){if(e.kind==="moved"){z(this,ae,a_).call(this,e.unit.id,e.from,e.to),z(this,ae,lh).call(this,e.unit.id,e.from,e.to);return}z(this,ae,lh).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),z(this,ae,lh).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=m(this,Ut).getBoundingClientRect();k(this,il,m(this,nl).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};k(this,Pi,s),m(this,Ut).classList.add("picking-tile"),s.window=m(this,Nn).prompt(n,()=>{m(this,Pi)===s&&(k(this,Pi,null),m(this,Ut).classList.remove("picking-tile"))})}picking(){return m(this,Pi)!==null}queueTile(e){m(this,Ra).set(`${e.x},${e.y}`,e)}redrawArt(){let e=m(this,gl).id();return e===m(this,La)?"unchanged":(k(this,La,e),k(this,Ii,!0),"redrawn")}releaseTiles(){m(this,Ra).forEach((e,t)=>m(this,Bs).set(t,e)),m(this,Ra).clear(),m(this,Bs).size>0&&z(this,ae,sn).call(this)}setActiveUnit(e,t){let n=m(this,ts)?.tile;k(this,ts,e),k(this,dl,t??null),[n,e?.tile].forEach(s=>{s&&z(this,ae,wa).call(this,s.x,s.y)}),z(this,ae,sn).call(this)}setWaiting(e){k(this,Ia,e),e&&m(this,Un).call(this)}showActiveUnit(e){m(this,ns)||(k(this,ns,!0),z(this,ae,tl).call(this),z(this,ae,sn).call(this))}shown(){return{units:m(this,ns),yields:m(this,br),waiting:m(this,Ia)}}tilesPending(){return m(this,Bs).size}toggleUnits(){k(this,ns,!m(this,ns)),z(this,ae,tl).call(this),z(this,ae,sn).call(this)}toggleYields(){k(this,br,!m(this,br)),k(this,Ii,!0),z(this,ae,sn).call(this)}zoomBy(e){m(this,Un).call(this),k(this,nt,da(m(this,nt),e)),m(this,mt)!==null&&(m(this,mt).from=da(m(this,mt).from,e),m(this,mt).to=da(m(this,mt).to,e)),z(this,ae,sn).call(this)}};Ut=new WeakMap,nl=new WeakMap,il=new WeakMap,Je=new WeakMap,Yt=new WeakMap,xr=new WeakMap,sl=new WeakMap,rl=new WeakMap,nt=new WeakMap,mt=new WeakMap,vn=new WeakMap,Ea=new WeakMap,al=new WeakMap,_r=new WeakMap,Us=new WeakMap,Aa=new WeakMap,ol=new WeakMap,ll=new WeakMap,Nn=new WeakMap,cl=new WeakMap,ji=new WeakMap,oi=new WeakMap,ul=new WeakMap,Pi=new WeakMap,Fs=new WeakMap,hl=new WeakMap,Un=new WeakMap,Ta=new WeakMap,Ca=new WeakMap,Os=new WeakMap,es=new WeakMap,Ra=new WeakMap,Bs=new WeakMap,vr=new WeakMap,Pa=new WeakMap,ts=new WeakMap,dl=new WeakMap,ns=new WeakMap,yr=new WeakMap,fl=new WeakMap,br=new WeakMap,Ii=new WeakMap,Mr=new WeakMap,zs=new WeakMap,pl=new WeakMap,ml=new WeakMap,Ia=new WeakMap,gl=new WeakMap,La=new WeakMap,xl=new WeakMap,Da=new WeakMap,Na=new WeakMap,Sr=new WeakMap,ae=new WeakSet,im=l(function(){let e=m(this,mt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),a_=l(function(e,t,n){let s=performance.now(),r=m(this,oi).get(e);if(m(this,oi).forEach(({until:_},x)=>{_<s&&m(this,oi).delete(x)}),typeof requestAnimationFrame!="function"||xa())return;let[a,o]=m(this,Je).layout.centre(t.x,t.y),[c,u]=m(this,Je).layout.centre(n.x,n.y),{u:h,v:f}=m(this,Je).layout.period(),d=l((_,x)=>x===null?_:_-x*Math.round(_/x),"short"),[p,v,y]=(r!==void 0&&r.until>=s?r.from:null)??m(this,Yt).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,m(this,Je).surfaceAt(a,o)),o];m(this,oi).set(e,{from:[c+d(p-c,h),v,u+d(y-u,f)],to:`${n.x},${n.y}`,until:s+2e3})},"#setOff"),lh=l(function(e,t,n){let[s,r]=m(this,Je).layout.centre(t.x,t.y),[a,o]=m(this,Je).layout.centre(n.x,n.y),{u:c,v:u}=m(this,Je).layout.period(),h=l((p,v)=>v===null?p:p-v*Math.round(p/v),"short"),f=h(a-s,c),d=h(o-r,u);f===0&&d===0||(m(this,ji).delete(e),m(this,ji).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),m(this,ji).size>wE&&m(this,ji).delete(m(this,ji).keys().next().value),[t,n].forEach(({x:p,y:v})=>z(this,ae,wa).call(this,p,v)),z(this,ae,sn).call(this))},"#face"),o_=l(function(e,t,n){let s=m(this,Ut).clientWidth,r=m(this,Ut).clientHeight;if(s<=0||r<=0)return!1;let a=m(this,mt)?.to??m(this,nt),[o,c]=m(this,Je).layout.centre(e,t),{u,v:h}=z(this,ae,Ns).call(this),[f,d]=a.focus,p=l((g,S,D)=>D===null?g:g+D*Math.round((S-g)/D),"nearest"),v=[p(o,f,u),Math.max(0,m(this,Je).heightAt(o,c)),p(c,d,h)],y=s/r,_=m(this,vn)??0,x=mp(a,_,v,y),w=mp(a,_,[v[0]+Math.cos(a.yaw),v[1],v[2]+Math.sin(a.yaw)],y);if(x===null||w===null)return!1;let R=(x[0]+1)/2*s,A=(1-x[1])/2*r,C=Math.abs(w[0]-x[0])*(s/2),E=(n+.5)*C;return R>=E&&R<=s-E&&A>=E&&A<=r-E&&!m(this,il).some(({left:g,top:S,right:D,bottom:I})=>R>=g-C/2&&R<=D+C/2&&A>=S-C/2&&A<=I+C/2)},"#visible"),Qo=l(function(e,t){let n=m(this,Ut).clientWidth,s=m(this,Ut).clientHeight;if(n<=0||s<=0)return null;let r=Jx(m(this,nt),m(this,vn)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>m(this,Je).heightAt(f,d));if(r===null)return null;let[a,o]=m(this,Je).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(z(this,ae,Ns).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),l_=l(function(e,t){let n=z(this,ae,Qo).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=m(this,Pi);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&m(this,Nn).click(this.portal,n)},"#clicked"),c_=l(function(e,t,n,s,r){let a=m(this,ts),o=z(this,ae,Qo).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),m(this,Nn).menu(this.portal,n,s,a,o,m(this,ul),r),!0)},"#menu"),u_=l(function(e){let t=e===null||m(this,Ia)||m(this,Nn).menuOpen()?null:z(this,ae,Qo).call(this,e.x,e.y),n=m(this,Fs);if(t===null||e===null){m(this,Un).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}m(this,Un).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,z(this,ae,sm).call(this,r)},CE),k(this,Fs,r),document.addEventListener("keydown",m(this,Un),!0)},"#hovered"),sm=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===m(this,Ut),n=t?z(this,ae,Qo).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){m(this,Un).call(this);return}let s=m(this,Nn).tooltip(m(this,Ut),n,m(this,hl),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&m(this,Nn).endTooltip(m(this,Ut)),e.open=s},"#showHover"),ch=l(function(){return[...m(this,nt).focus]},"#focus"),h_=l(function(){let[e,t]=m(this,Je).layout.tileAt(...m(this,nt).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:z(this,ae,Ns).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),d_=l(function(e,t){let[n,s]=m(this,Je).layout.centre(e,t),[r,a]=(m(this,mt)?.to??m(this,nt)).focus;if(n===r&&s===a)return;let o={...m(this,mt)?.to??m(this,nt),focus:[n,s]},{u:c,v:u}=z(this,ae,Ns).call(this),h=l((v,y)=>y===null?v:v-y*Math.round(v/y),"short"),[f,d]=m(this,nt).focus,p=Math.hypot(h(n-f,c),h(s-d,u));if(!m(this,ll)||p>m(this,nt).distance*1.5){k(this,ll,!0),this.setOrbit(o);return}z(this,ae,el).call(this,o)},"#centreOn"),jo=l(function(e){return Xg(lr(e),z(this,ae,Ns).call(this),m(this,Je).extentV())},"#settle"),Ns=l(function(){let e=m(this,Je).layout.period();return this.portal?.lockVerticalEdges()??m(this,ol)?{u:e.u,v:null}:e},"#period"),el=l(function(e,t=z(this,ae,im).call(this)+r_(e.yaw-(m(this,mt)?.to??m(this,nt)).yaw)){m(this,Un).call(this),typeof requestAnimationFrame!="function"||xa()?(k(this,mt,null),k(this,nt,z(this,ae,jo).call(this,e))):k(this,mt,{from:m(this,nt),to:e,started:null,turn:t,drawn:0}),z(this,ae,sn).call(this)},"#moveTo"),f_=l(function(e){let t=m(this,mt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/EE);return t.drawn=n*n*(3-2*n),k(this,nt,z(this,ae,jo).call(this,qg(t.from,t.to,n,z(this,ae,Ns).call(this),t.turn))),n>=1&&k(this,mt,null),n<1},"#moveCamera"),p_=l(function(e){let[t,n]=m(this,nt).focus,s=Math.max(0,m(this,Je).heightAt(t,n));return!e||m(this,vn)===null||xa()?(k(this,vn,s),!1):(k(this,vn,m(this,vn)+(s-m(this,vn))*TE),Math.abs(s-m(this,vn))<.002?(k(this,vn,s),!1):!0)},"#followHeight"),rm=l(function(){let e=[...m(this,Bs).values()].map(({x:a,y:o})=>[a,o]),t=this.world.tiles(),n=t!==m(this,vr)||t.length!==m(this,Pa);k(this,vr,t),k(this,Pa,t.length),m(this,Bs).clear();let s=m(this,Je).changed(e,...z(this,ae,ch).call(this),n);e.forEach(([a,o])=>z(this,ae,wa).call(this,a,o)),z(this,ae,m_).call(this,e,s);let r=m(this,Fs);r!==null&&r.open&&e.some(([a,o])=>a===r.x&&o===r.y)&&z(this,ae,sm).call(this,r),(e.length>0||n)&&k(this,Ca,!0),n&&(k(this,Ii,!0),m(this,Os).forEach((a,o)=>{let[c,u]=o.split(",").map(Number);z(this,ae,wa).call(this,c,u)}))},"#takeTiles"),wa=l(function(e,t){let n=`${e},${t}`,s=$x(this.world.get(e,t),m(this,ts)?.id??null,m(this,ns),m(this,cl),d=>m(this,ji).get(d.id)??0,m(this,yr)),[r,a]=m(this,Je).layout.centre(e,t),o=[r,Math.max(0,m(this,Je).surfaceAt(r,a)),a],c=s===null?null:JSON.stringify([s,o]),u=c!==(m(this,Os).get(n)??null);if(u&&m(this,Yt).setMarker(n,o,s),m(this,oi).size===0){u&&z(this,ae,am).call(this,n,c);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));m(this,oi).forEach((d,p)=>{if(d.until<h){m(this,oi).delete(p);return}d.to!==n||!f.has(p)||(m(this,oi).delete(p),u&&s?.unit?.id===p&&m(this,Yt).slideMarker(n,d.from))}),u&&z(this,ae,am).call(this,n,c)},"#mark"),m_=l(function(e,t){if(e.length===0&&t.length===0)return;let n=this.world.topology();e.forEach(([s,r])=>m(this,zs).delete(`${s},${r}`)),t.forEach(([s,r])=>{m(this,zs).delete(`${s},${r}`),n.directions().forEach(a=>{let o=n.neighbour(s,r,a);o!==null&&m(this,zs).delete(`${o[0]},${o[1]}`)})}),k(this,Ii,!0)},"#yieldsChanged"),g_=l(function(){if(!m(this,br)){m(this,Mr)&&(m(this,Yt).setYields(null),k(this,Mr,!1));return}if(!m(this,Ii)&&m(this,Mr))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,s=e_(t,t_(t)),r=m(this,zs).get(n);if(r===void 0||r.of!==s){let[a,o]=m(this,Je).layout.centre(t.x,t.y);r={of:s,laid:s.length===0?null:i_({at:[a,Math.max(0,m(this,Je).surfaceAt(a,o)),o],yields:s},m(this,pl))},m(this,zs).set(n,r)}r.laid!==null&&e.push(r.laid)}),m(this,Yt).setYields(s_(e)),k(this,Ii,!1),k(this,Mr,!0)},"#showYields"),am=l(function(e,t){t===null?m(this,Os).delete(e):m(this,Os).set(e,t)},"#remember"),tl=l(function(){let e=new Set(m(this,Os).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);z(this,ae,wa).call(this,n,s)})},"#markAll"),om=l(function(e){let t=performance.now(),n=z(this,ae,f_).call(this,t),[s,r]=z(this,ae,ch).call(this);z(this,ae,rm).call(this),`${s},${r}`!==m(this,rl)&&(k(this,rl,`${s},${r}`),m(this,Je).refocus(s,r)),m(this,Je).build(m(this,Yt),e);let a=z(this,ae,p_).call(this,e!==null);z(this,ae,g_).call(this),m(this,Yt).view(m(this,nt),m(this,vn)??0,z(this,ae,Ns).call(this)),m(this,Yt).render(),z(this,ae,x_).call(this),z(this,ae,lm).call(this),k(this,sl,performance.now()-t),z(this,ae,y_).call(this),(m(this,Je).pending()>0||m(this,Je).overlaysPending()>0||m(this,Yt).sliding()||n||a)&&z(this,ae,sn).call(this)},"#frameDrawn"),x_=l(function(){let e=m(this,Ta);if(e===null)return;m(this,Ca)&&(k(this,Ca,!1),e.redraw());let t=m(this,ts)?.tile??null;e.show(z(this,ae,__).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),__=l(function(){let e=m(this,Ut).clientWidth,t=m(this,Ut).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=m(this,vn)??0,r=Vu(m(this,nt).distance).far,[a,o]=m(this,nt).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=ha(m(this,nt),s,[h,d],n);if(p!==null){let v=Math.hypot(p[0]-a,p[1]-o),y=v>r?r/v:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),lm=l(function(e=!1){let t=(e?m(this,mt)?.to??m(this,nt):m(this,nt)).distance,n=l(()=>{m(this,Us)!==null&&clearTimeout(m(this,Us)),k(this,Us,null),k(this,Aa,null)},"stop"),s=l(()=>{n(),k(this,_r,t),m(this,al).set(t)},"keep");if(e){n(),t!==m(this,_r)&&s();return}if(m(this,mt)!==null||t===m(this,_r)){n();return}m(this,Us)!==null&&t===m(this,Aa)||(n(),k(this,Aa,t),k(this,Us,setTimeout(s,AE)))},"#keepDistance"),sn=l(function(){if(!m(this,Sr)){if(typeof requestAnimationFrame!="function"){z(this,ae,om).call(this,null);return}m(this,es)===null&&k(this,es,requestAnimationFrame(()=>{k(this,es,null),z(this,ae,om).call(this,SE)}))}},"#draw"),v_=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),y_=l(function(){if(m(this,xr)===null)return;let{drawCalls:e,triangles:t,geometries:n}=m(this,Yt).stats();m(this,xr).textContent=[`frame ${m(this,sl).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${m(this,Je).pending()}`].join(`
`)},"#showStats"),cm=l(function(){let e=m(this,Ut).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===m(this,xl)||(k(this,xl,r),m(this,Yt).resize(t,n,s),this.measureCovered(),m(this,Yt).render())},"#resize"),l(um,"MapView3D");var nm=um,b_=nm;var RE={createMapView3D:l(i=>new b_(i),"createMapView3D")};globalThis[wm]=RE;})();
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
