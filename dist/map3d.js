"use strict";(()=>{var Zv=Object.create;var id=Object.defineProperty;var Jv=Object.getOwnPropertyDescriptor;var Kv=Object.getOwnPropertyNames;var jv=Object.getPrototypeOf,Qv=Object.prototype.hasOwnProperty;var M0=i=>{throw TypeError(i)};var l=(i,e)=>id(i,"name",{value:e,configurable:!0});var ey=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ty=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Kv(e))!Qv.call(i,s)&&s!==t&&id(i,s,{get:()=>e[s],enumerable:!(n=Jv(e,s))||n.enumerable});return i};var ny=(i,e,t)=>(t=i!=null?Zv(jv(i)):{},ty(e||!i||!i.__esModule?id(t,"default",{value:i,enumerable:!0}):t,i));var sd=(i,e,t)=>e.has(i)||M0("Cannot "+t);var p=(i,e,t)=>(sd(i,e,"read from private field"),t?t.call(i):e.get(i)),Z=(i,e,t)=>e.has(i)?M0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),k=(i,e,t,n)=>(sd(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),I=(i,e,t)=>(sd(i,e,"access private method"),t);var or=(i,e,t,n)=>({set _(s){k(i,e,s,t)},get _(){return p(i,e,n)}});var w0=ey(lr=>{"use strict";var Si,ys=lr&&lr.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(lr,"__esModule",{value:!0}),lr.EventEmitter=void 0;var rd=class rd{constructor(){Si.set(this,{})}on(e,t){e in ys(this,Si,"f")||(ys(this,Si,"f")[e]=[]),ys(this,Si,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in ys(this,Si,"f")))return;let n=ys(this,Si,"f")[e].indexOf(t);n!==-1&&ys(this,Si,"f")[e].splice(n,1)}emit(e,...t){e in ys(this,Si,"f")&&ys(this,Si,"f")[e].forEach((n=>n(...t)))}};l(rd,"i");var sc=rd;lr.EventEmitter=sc,Si=new WeakMap,lr.default=sc});var S0="civMap3D";var E0=ny(w0());var bs,wi,Zr,od=class od extends E0.EventEmitter{constructor(t,n){super();Z(this,bs);Z(this,wi);Z(this,Zr);k(this,wi,t),k(this,Zr,t.lockVerticalEdges),k(this,bs,n)}center(){return p(this,bs).centre()}isVisible(t,n,s=0){return p(this,bs).visible(t,n,s)}lockVerticalEdges(){return p(this,Zr)}nativeTileSize(){return p(this,wi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,wi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,wi).playerId}render(){p(this,bs).changed()}scale(){return p(this,wi).art.scale()}setCenter(t,n){p(this,bs).centreOn(t,n)}setLockVerticalEdges(t){k(this,Zr,t)}setZoom(){}transport(){return p(this,wi).transport}zoom(){return p(this,wi).art.zoom()}};bs=new WeakMap,wi=new WeakMap,Zr=new WeakMap,l(od,"MapPortal3D");var ad=od,A0=ad;var iy=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return[s,[o-t,c-n]]}))},"groundDirections"),T0=iy;var eg=0,Bd=1,tg=2;var Xo=1,Su=2,Aa=3,Bs=0,yn=1,Ni=2,pr=0,Ta=1,zd=2,kd=3,Gd=4,ng=5;var mr=100,ig=101,sg=102,rg=103,ag=104,og=200,lg=201,cg=202,ug=203,Vd=204,Hd=205,hg=206,dg=207,fg=208,pg=209,mg=210,gg=211,xg=212,_g=213,vg=214,Pc=0,Ic=1,Lc=2,ga=3,Dc=4,Nc=5,Uc=6,Fc=7,Wd=0,yg=1,bg=2,Ui=0,Xd=1,qd=2,Yd=3,qo=4,$d=5,Zd=6,Jd=7;var Kd=300,gr=301,Ca=302,wu=303,Eu=304,Ai=1e3,Jn=1001,Oc=1002,Ot=1003,Mg=1004;var Yo=1005;var Bt=1006,Au=1007;var Un=1008;var on=1009,jd=1010,Qd=1011,Ra=1012,Tu=1013,oi=1014,li=1015,Fn=1016,Cu=1017,Ru=1018,xr=1020,ef=35902,tf=35899,nf=1021,sf=1022,On=1023,ss=1026,ls=1027,rf=1028,Pu=1029,Fi=1030,Iu=1031;var Lu=1033,$o=33776,Zo=33777,Jo=33778,Ko=33779,Du=35840,Nu=35841,Uu=35842,Fu=35843,Ou=36196,Bu=37492,zu=37496,ku=37488,Gu=37489,jo=37490,Vu=37491,Hu=37808,Wu=37809,Xu=37810,qu=37811,Yu=37812,$u=37813,Zu=37814,Ju=37815,Ku=37816,ju=37817,Qu=37818,eh=37819,th=37820,nh=37821,ih=36492,sh=36494,rh=36495,ah=36283,oh=36284,Qo=36285,lh=36286;var wo=2300,Bc=2301,Cc=2302,Id=2303,Ld=2400,Dd=2401,Nd=2402;var Sg=3200;var ch=0,wg=1,ci="",Ft="srgb",Eo="srgb-linear",Ao="linear",dt="srgb";var Rc=7680;var Eg=519,Ag=512,Tg=513,Cg=514,af=515,Rg=516,Pg=517,of=518,lf=519,cf=35044;var uf="300 es",Kn=2e3,xa=2001;function sy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(sy,"arrayNeedsUint32");function ry(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(ry,"isTypedArray");function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(To,"createElementNS");function Ig(){let i=To("canvas");return i.style.display="block",i}l(Ig,"createCanvasElement");var C0={},_a=null;function Co(...i){let e="THREE."+i.shift();_a?_a("log",e,...i):console.log(e,...i)}l(Co,"log");function Lg(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(Lg,"enhanceLogMessage");function Ge(...i){i=Lg(i);let e="THREE."+i.shift();if(_a)_a("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ge,"warn");function He(...i){i=Lg(i);let e="THREE."+i.shift();if(_a)_a("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function Mo(...i){let e=i.join(" ");e in C0||(C0[e]=!0,Ge(...i))}l(Mo,"warnOnce");function Dg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(Dg,"probeAsync");var Ng={[Pc]:Pc,[Lc]:Uc,[Dc]:Dc,[ga]:Nc,[Ic]:Ic,[Uc]:Lc,[Fc]:Fc,[Nc]:ga},mf=class mf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(mf,"EventDispatcher");var Ti=mf,rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ld=Math.PI/180,zc=180/Math.PI;function _r(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}l(_r,"generateUUID");function rt(i,e,t){return Math.max(e,Math.min(t,i))}l(rt,"clamp");function ay(i,e){return(i%e+e)%e}l(ay,"euclideanModulo");function cd(i,e,t){return(1-t)*i+t*e}l(cd,"lerp");function Ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(Ug,"floorPowerOfTwo");function uh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(uh,"getNormalizationScale");function Fg(i,e){if(e.constructor===Float32Array)return i;let t=uh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(Fg,"denormalize");function Og(i,e){if(e.constructor===Float32Array)return i;let t=uh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(Og,"normalize");var ou=class ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(ou,"Vector2"),ou.prototype.isVector2=!0;var ke=ou,gf=class gf{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||c!==d||u!==m||h!==g){let x=c*d+u*m+h*g+f*y;x<0&&(d=-d,m=-m,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let S=Math.acos(x),A=Math.sin(S);_=Math.sin(_*S)/A,o=Math.sin(o*S)/A,c=c*_+d*o,u=u*_+m*o,h=h*_+g*o,f=f*_+y*o}else{c=c*_+d*o,u=u*_+m*o,h=h*_+g*o,f=f*_+y*o;let S=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=S,u*=S,h*=S,f*=S}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*f+c*m-u*d,e[t+1]=c*g+h*d+u*f-o*m,e[t+2]=u*g+h*m+o*d-c*f,e[t+3]=h*g-o*f-c*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+u*m*g,this._y=u*m*f-d*h*g,this._z=u*h*g+d*m*f,this._w=u*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+u*m*g,this._y=u*m*f-d*h*g,this._z=u*h*g-d*m*f,this._w=u*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-u*m*g,this._y=u*m*f+d*h*g,this._z=u*h*g+d*m*f,this._w=u*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-u*m*g,this._y=u*m*f+d*h*g,this._z=u*h*g-d*m*f,this._w=u*h*f+d*m*g;break;case"YZX":this._x=d*h*f+u*m*g,this._y=u*m*f+d*h*g,this._z=u*h*g-d*m*f,this._w=u*h*f-d*m*g;break;case"XZY":this._x=d*h*f-u*m*g,this._y=u*m*f-d*h*g,this._z=u*h*g+d*m*f,this._w=u*h*f+d*m*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(gf,"Quaternion");var xn=gf,lu=class lu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-r*f,this.z=s+c*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(lu,"Vector3"),lu.prototype.isVector3=!0;var W=lu,ud=new W,R0=new xn,cu=class cu{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],y=s[0],x=s[3],_=s[6],S=s[1],A=s[4],w=s[7],R=s[2],C=s[5],v=s[8];return r[0]=a*y+o*S+c*R,r[3]=a*x+o*A+c*C,r[6]=a*_+o*w+c*v,r[1]=u*y+h*S+f*R,r[4]=u*x+h*A+f*C,r[7]=u*_+h*w+f*v,r[2]=d*y+m*S+g*R,r[5]=d*x+m*A+g*C,r[8]=d*_+m*w+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*r,m=u*r-a*c,g=t*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,t)),this}rotate(e){return Mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return Mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(cu,"Matrix3"),cu.prototype.isMatrix3=!0;var We=cu,hd=new We,P0=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){let i={enabled:!0,workingColorSpace:Eo,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=ma(s.r),s.g=ma(s.g),s.b=ma(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===ci?Ao:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Eo]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}l(oy,"createColorManagement");var st=oy();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(is,"SRGBToLinear");function ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(ma,"LinearToSRGB");var Jr,xf=class xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=To("canvas")),Jr.width=e.width,Jr.height=e.height;let s=Jr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(xf,"ImageUtils");var kc=xf,ly=0,_f=class _f{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dd(s[a].image)):r.push(dd(s[a]))}else r=dd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(_f,"TextureSource");var va=_f;function dd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}l(dd,"serializeImage");var cy=0,fd=new W,fa=class fa extends Ti{constructor(e=fa.DEFAULT_IMAGE,t=fa.DEFAULT_MAPPING,n=Jn,s=Jn,r=Bt,a=Un,o=On,c=on,u=fa.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=_r(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(fa,"Texture");var _n=fa;_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Kd;_n.DEFAULT_ANISOTROPY=1;var uu=class uu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,w=(m+1)/2,R=(_+1)/2,C=(h+d)/4,v=(f+y)/4,E=(g+x)/4;return A>w&&A>R?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=C/n,r=v/n):w>R?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=v/r,s=E/r),this.set(n,s,r,t),this}let S=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(f-y)/S,this.z=(d-h)/S,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(uu,"Vector4"),uu.prototype.isVector4=!0;var At=uu,vf=class vf extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new va(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(vf,"RenderTarget");var Gc=vf,yf=class yf extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(yf,"WebGLRenderTarget");var Ln=yf,bf=class bf extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(bf,"DataArrayTexture");var fr=bf;var Mf=class Mf extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Mf,"Data3DTexture");var Vc=Mf;var So=class So{constructor(e,t,n,s,r,a,o,c,u,h,f,d,m,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,f,d,m,g,y,x)}set(e,t,n,s,r,a,o,c,u,h,f,d,m,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=m+g*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=g+m*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,g=u*h,y=u*f;t[0]=d+y*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,g=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=g*u-m,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=m*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,hy)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ms.crossVectors(n,Pn),Ms.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ms.crossVectors(n,Pn)),Ms.normalize(),rc.crossVectors(Pn,Ms),s[0]=Ms.x,s[4]=rc.x,s[8]=Pn.x,s[1]=Ms.y,s[5]=rc.y,s[9]=Pn.y,s[2]=Ms.z,s[6]=rc.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],y=n[6],x=n[10],_=n[14],S=n[3],A=n[7],w=n[11],R=n[15],C=s[0],v=s[4],E=s[8],L=s[12],P=s[1],U=s[5],G=s[9],K=s[13],D=s[2],Y=s[6],ne=s[10],F=s[14],j=s[3],V=s[7],Q=s[11],z=s[15];return r[0]=a*C+o*P+c*D+u*j,r[4]=a*v+o*U+c*Y+u*V,r[8]=a*E+o*G+c*ne+u*Q,r[12]=a*L+o*K+c*F+u*z,r[1]=h*C+f*P+d*D+m*j,r[5]=h*v+f*U+d*Y+m*V,r[9]=h*E+f*G+d*ne+m*Q,r[13]=h*L+f*K+d*F+m*z,r[2]=g*C+y*P+x*D+_*j,r[6]=g*v+y*U+x*Y+_*V,r[10]=g*E+y*G+x*ne+_*Q,r[14]=g*L+y*K+x*F+_*z,r[3]=S*C+A*P+w*D+R*j,r[7]=S*v+A*U+w*Y+R*V,r[11]=S*E+A*G+w*ne+R*Q,r[15]=S*L+A*K+w*F+R*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],y=e[7],x=e[11],_=e[15],S=c*m-u*d,A=o*m-u*f,w=o*d-c*f,R=a*m-u*h,C=a*d-c*h,v=a*f-o*h;return t*(y*S-x*A+_*w)-n*(g*S-x*R+_*C)+s*(g*A-y*R+_*v)-r*(g*w-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],y=e[13],x=e[14],_=e[15],S=t*o-n*a,A=t*c-s*a,w=t*u-r*a,R=n*c-s*o,C=n*u-r*o,v=s*u-r*c,E=h*y-f*g,L=h*x-d*g,P=h*_-m*g,U=f*x-d*y,G=f*_-m*y,K=d*_-m*x,D=S*K-A*G+w*U+R*P-C*L+v*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/D;return e[0]=(o*K-c*G+u*U)*Y,e[1]=(s*G-n*K-r*U)*Y,e[2]=(y*v-x*C+_*R)*Y,e[3]=(d*C-f*v-m*R)*Y,e[4]=(c*P-a*K-u*L)*Y,e[5]=(t*K-s*P+r*L)*Y,e[6]=(x*w-g*v-_*A)*Y,e[7]=(h*v-d*w+m*A)*Y,e[8]=(a*G-o*P+u*E)*Y,e[9]=(n*P-t*G-r*E)*Y,e[10]=(g*C-y*w+_*S)*Y,e[11]=(f*w-h*C-m*S)*Y,e[12]=(o*L-a*U-c*E)*Y,e[13]=(t*U-n*L+s*E)*Y,e[14]=(y*A-g*R-x*S)*Y,e[15]=(h*R-f*A+d*S)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,f=o+o,d=r*u,m=r*h,g=r*f,y=a*h,x=a*f,_=o*f,S=c*u,A=c*h,w=c*f,R=n.x,C=n.y,v=n.z;return s[0]=(1-(y+_))*R,s[1]=(m+w)*R,s[2]=(g-A)*R,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(d+_))*C,s[6]=(x+S)*C,s[7]=0,s[8]=(g+A)*v,s[9]=(x-S)*v,s[10]=(1-(d+y))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Kr.set(s[0],s[1],s[2]).length(),o=Kr.set(s[4],s[5],s[6]).length(),c=Kr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),si.copy(this);let u=1/a,h=1/o,f=1/c;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Kn,c=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Kn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===xa)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Kn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===xa)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(So,"Matrix4"),So.prototype.isMatrix4=!0;var mt=So,Kr=new W,si=new mt,uy=new W(0,0,0),hy=new W(1,1,1),Ms=new W,rc=new W,Pn=new W,L0=new mt,D0=new xn,hu=class hu{constructor(e=0,t=0,n=0,s=hu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return L0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(hu,"Euler");var Dn=hu;Dn.DEFAULT_ORDER="XYZ";var Sf=class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Sf,"Layers");var Ro=Sf,dy=0,N0=new W,jr=new xn,Ji=new mt,ac=new W,mo=new W,fy=new W,py=new xn,U0=new W(1,0,0),F0=new W(0,1,0),O0=new W(0,0,1),B0={type:"added"},my={type:"removed"},Qr={type:"childadded",child:null},pd={type:"childremoved",child:null},pa=class pa extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pa.DEFAULT_UP.clone();let e=new W,t=new Dn,n=new xn,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new We}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=pa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(O0,e)}translateOnAxis(e,t){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(O0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ac.copy(e):ac.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(mo,ac,this.up):Ji.lookAt(ac,mo,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),jr.setFromRotationMatrix(Ji),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B0),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(my),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B0),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(pa,"Object3D");var Kt=pa;Kt.DEFAULT_UP=new W(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wf=class wf extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(wf,"Group");var gn=wf,gy={type:"move"},Ef=class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Ef,"WebXRController");var ya=Ef,Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},oc={h:0,s:0,l:0};function md(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(md,"hue2rgb");var Af=class Af{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=ay(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=md(a,r,e+1/3),this.g=md(a,r,e),this.b=md(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Bg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return st.workingToColorSpace(an.copy(this),e),Math.round(rt(an.r*255,0,255))*65536+Math.round(rt(an.g*255,0,255))*256+Math.round(rt(an.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ft){st.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(oc);let n=cd(Ss.h,oc.h,t),s=cd(Ss.s,oc.s,t),r=cd(Ss.l,oc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Af,"Color");var Ue=Af,an=new Ue;Ue.NAMES=Bg;var du=class du{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new du(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(du,"Fog");var Po=du,Tf=class Tf extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Tf,"Scene");var Io=Tf,ri=new W,Ki=new W,gd=new W,ji=new W,ea=new W,ta=new W,z0=new W,xd=new W,_d=new W,vd=new W,yd=new At,bd=new At,Md=new At,Ts=class Ts{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),Ki.subVectors(n,t),gd.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Ki),c=ri.dot(gd),u=Ki.dot(Ki),h=Ki.dot(gd),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(u*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ji.x),c.addScaledVector(a,ji.y),c.addScaledVector(o,ji.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return yd.setScalar(0),bd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,t),bd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yd,r.x),a.addScaledVector(bd,r.y),a.addScaledVector(Md,r.z),a}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),Ki.subVectors(e,t),ri.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),ri.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ts.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ts.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ts.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ts.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ts.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ea.subVectors(s,n),ta.subVectors(r,n),xd.subVectors(e,n);let c=ea.dot(xd),u=ta.dot(xd);if(c<=0&&u<=0)return t.copy(n);_d.subVectors(e,s);let h=ea.dot(_d),f=ta.dot(_d);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(ea,a);vd.subVectors(e,r);let m=ea.dot(vd),g=ta.dot(vd);if(g>=0&&m<=g)return t.copy(r);let y=m*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(ta,o);let x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return z0.subVectors(r,s),o=(f-h)/(f-h+(m-g)),t.copy(s).addScaledVector(z0,o);let _=1/(x+y+d);return a=y*_,o=d*_,t.copy(n).addScaledVector(ea,a).addScaledVector(ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(Ts,"Triangle");var ts=Ts,Cf=class Cf{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),cc.subVectors(this.max,go),na.subVectors(e.a,go),ia.subVectors(e.b,go),sa.subVectors(e.c,go),ws.subVectors(ia,na),Es.subVectors(sa,ia),cr.subVectors(na,sa);let t=[0,-ws.z,ws.y,0,-Es.z,Es.y,0,-cr.z,cr.y,ws.z,0,-ws.x,Es.z,0,-Es.x,cr.z,0,-cr.x,-ws.y,ws.x,0,-Es.y,Es.x,0,-cr.y,cr.x,0];return!Sd(t,na,ia,sa,cc)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,na,ia,sa,cc))?!1:(uc.crossVectors(ws,Es),t=[uc.x,uc.y,uc.z],Sd(t,na,ia,sa,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Cf,"Box3");var Rs=Cf,Qi=[new W,new W,new W,new W,new W,new W,new W,new W],ai=new W,lc=new Rs,na=new W,ia=new W,sa=new W,ws=new W,Es=new W,cr=new W,go=new W,cc=new W,uc=new W,ur=new W;function Sd(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ur.fromArray(i,r);let o=s.x*Math.abs(ur.x)+s.y*Math.abs(ur.y)+s.z*Math.abs(ur.z),c=e.dot(ur),u=t.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Sd,"satForAxes");var ns=xy();function xy(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l(xy,"_generateTables");function _y(i){Math.abs(i)>65504&&Ge("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),ns.floatView[0]=i;let e=ns.uint32View[0],t=e>>23&511;return ns.baseTable[t]+((e&8388607)>>ns.shiftTable[t])}l(_y,"toHalfFloat");function vy(i){let e=i>>10;return ns.uint32View[0]=ns.mantissaTable[ns.offsetTable[e]+(i&1023)]+ns.exponentTable[e],ns.floatView[0]}l(vy,"fromHalfFloat");var Rf=class Rf{static toHalfFloat(e){return _y(e)}static fromHalfFloat(e){return vy(e)}};l(Rf,"DataUtils");var Ci=Rf,Ut=new W,hc=new ke,yy=0,Pf=class Pf extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cf,this.updateRanges=[],this.gpuType=li,this.version=0,this._normalizationScale=e!==void 0?uh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fg(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Og(e,this.array)}};l(Pf,"BufferAttribute");var vt=Pf;var If=class If extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(If,"Uint16BufferAttribute");var Lo=If;var Lf=class Lf extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Lf,"Uint32BufferAttribute");var Do=Lf;var Df=class Df extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Df,"Float32BufferAttribute");var It=Df,by=new Rs,xo=new W,wd=new W,Nf=class Nf{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):by.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(wd)),this.expandByPoint(xo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Nf,"Sphere");var ba=Nf,My=0,Zn=new mt,Ed=new Kt,ra=new W,In=new Rs,_o=new Rs,Yt=new W,fu=class fu extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sy(e)?Do:Lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(In.min,_o.min),In.expandByPoint(Yt),Yt.addVectors(In.max,_o.max),In.expandByPoint(Yt)):(In.expandByPoint(_o.min),In.expandByPoint(_o.max))}In.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Yt.fromBufferAttribute(o,u),c&&(ra.fromBufferAttribute(e,u),Yt.add(ra)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new W,c[L]=new W;let h=new W,f=new W,d=new W,m=new ke,g=new ke,y=new ke,x=new W,_=new W;function S(L,P,U){u[L]=u[P]=u[U]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,U),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,U),f.sub(h),d.sub(h),g.sub(m),y.sub(m);let G=1/(g.x*y.y-y.x*g.y);isFinite(G)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(G),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(G),o[L].add(x),o[P].add(x),o[U].add(x),c[L].add(_),c[P].add(_),c[U].add(_))}l(S,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,P=A.length;L<P;++L){let U=A[L],G=U.start,K=U.count;for(let D=G,Y=G+K;D<Y;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new W,R=new W,C=new W,v=new W;function E(L){C.fromBufferAttribute(s,L),v.copy(C);let P=o[L];w.copy(P),w.sub(C.multiplyScalar(C.dot(P))).normalize(),R.crossVectors(v,P);let G=R.dot(c[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,G)}l(E,"handleVertex");for(let L=0,P=n.count;L<P;++L)u[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,u=new W,h=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),m=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let _=0;_<h;_++)d[g++]=u[m++]}return new vt(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new fu,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let m=u[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(fu,"BufferGeometry");var zt=fu,Uf=class Uf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cf,this.updateRanges=[],this.version=0,this.uuid=_r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=k0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=k0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Uf,"InterleavedBuffer");var No=Uf;function k0(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=_r()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(k0,"getArrayKey");var pn=new W,pu=class pu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?uh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fg(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Og(e,this.data.array)}};l(pu,"InterleavedBufferAttribute");var Ma=pu,Ad=new W,Sy=new W,wy=new We,Ff=class Ff{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ad.subVectors(n,t).cross(Sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ad),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wy.getNormalMatrix(e),s=this.coplanarPoint(Ad).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Ff,"Plane");var wn=Ff,Ey=0,Of=class Of extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Ta,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Hd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rc,this.stencilZFail=Rc,this.stencilZPass=Rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Of,"Material");var rs=Of,Bf=class Bf extends rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Bf,"SpriteMaterial");var Ps=Bf,aa,vo=new W,oa=new W,la=new W,ca=new ke,yo=new ke,zg=new mt,dc=new W,bo=new W,fc=new W,G0=new ke,Td=new ke,V0=new ke,zf=class zf extends Kt{constructor(e=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",aa===void 0){aa=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new No(t,5);aa.setIndex([0,1,2,0,2,3]),aa.setAttribute("position",new Ma(n,3,0,!1)),aa.setAttribute("uv",new Ma(n,2,3,!1))}this.geometry=aa,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oa.setFromMatrixScale(this.matrixWorld),zg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),la.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oa.multiplyScalar(-la.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;pc(dc.set(-.5,-.5,0),la,a,oa,s,r),pc(bo.set(.5,-.5,0),la,a,oa,s,r),pc(fc.set(.5,.5,0),la,a,oa,s,r),G0.set(0,0),Td.set(1,0),V0.set(1,1);let o=e.ray.intersectTriangle(dc,bo,fc,!1,vo);if(o===null&&(pc(bo.set(-.5,.5,0),la,a,oa,s,r),Td.set(0,1),o=e.ray.intersectTriangle(dc,fc,bo,!1,vo),o===null))return;let c=e.ray.origin.distanceTo(vo);c<e.near||c>e.far||t.push({distance:c,point:vo.clone(),uv:ts.getInterpolation(vo,dc,bo,fc,G0,Td,V0,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(zf,"Sprite");var Sa=zf;function pc(i,e,t,n,s,r){ca.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yo.x=r*ca.x-s*ca.y,yo.y=s*ca.x+r*ca.y):yo.copy(ca),i.copy(e),i.x+=yo.x,i.y+=yo.y,i.applyMatrix4(zg)}l(pc,"transformVertex");var es=new W,Cd=new W,mc=new W,gc=new W,kf=class kf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cd.copy(e).add(t).multiplyScalar(.5),mc.copy(t).sub(e).normalize(),gc.copy(this.origin).sub(Cd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(mc),o=gc.dot(this.direction),c=-gc.dot(mc),u=gc.lengthSq(),h=Math.abs(1-a*a),f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+u;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cd).addScaledVector(mc,d),m}intersectSphere(e,t){if(e.radius<0)return null;es.subVectors(e.center,this.origin);let n=es.dot(this.direction),s=es.dot(es)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,S=n.y-a.y,A=n.z-a.z,w=Math.abs(c),R=Math.abs(u),C=Math.abs(h),v,E,L,P,U,G,K,D,Y,ne,F,j;if(w>=R&&w>=C?(L=c,G=f,Y=g,j=_,c>=0?(v=u,E=h,P=d,U=m,K=y,D=x,ne=S,F=A):(v=h,E=u,P=m,U=d,K=x,D=y,ne=A,F=S)):R>=C?(L=u,G=d,Y=y,j=S,u>=0?(v=h,E=c,P=m,U=f,K=x,D=g,ne=A,F=_):(v=c,E=h,P=f,U=m,K=g,D=x,ne=_,F=A)):(L=h,G=m,Y=x,j=A,h>=0?(v=c,E=u,P=f,U=d,K=g,D=y,ne=_,F=S):(v=u,E=c,P=d,U=f,K=y,D=g,ne=S,F=_)),L===0)return null;let V=v/L,Q=E/L,z=1/L,ie=P-V*G,se=U-Q*G,H=K-V*Y,ae=D-Q*Y,te=ne-V*j,de=F-Q*j,ce=te*ae-de*H,Ce=ie*de-se*te,Ve=H*se-ae*ie;if(s){if(ce<0||Ce<0||Ve<0)return null}else if((ce<0||Ce<0||Ve<0)&&(ce>0||Ce>0||Ve>0))return null;let Ee=ce+Ce+Ve;if(Ee===0)return null;let qe=z*(ce*G+Ce*Y+Ve*j);return(Ee>0?qe<0:qe>0)?null:this.at(qe/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(kf,"Ray");var Hc=kf,Gf=class Gf extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Gf,"MeshBasicMaterial");var Wc=Gf,H0=new mt,hr=new Hc,xc=new ba,W0=new W,_c=new W,vc=new W,yc=new W,Rd=new W,bc=new W,X0=new W,Mc=new W,Vf=class Vf extends Kt{constructor(e=new zt,t=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){bc.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],f=r[c];h!==0&&(Rd.fromBufferAttribute(f,e),a?bc.addScaledVector(Rd,h):bc.addScaledVector(Rd.sub(t),h))}t.add(bc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(xc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(xc,W0)===null||hr.origin.distanceToSquared(W0)>(e.far-e.near)**2))&&(H0.copy(r).invert(),hr.copy(e.ray).applyMatrix4(H0),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],S=Math.max(x.start,m.start),A=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let w=S,R=A;w<R;w+=3){let C=o.getX(w),v=o.getX(w+1),E=o.getX(w+2);s=Sc(this,_,e,n,u,h,f,C,v,E),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let S=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);s=Sc(this,a,e,n,u,h,f,S,A,w),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],S=Math.max(x.start,m.start),A=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let w=S,R=A;w<R;w+=3){let C=w,v=w+1,E=w+2;s=Sc(this,_,e,n,u,h,f,C,v,E),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let S=x,A=x+1,w=x+2;s=Sc(this,a,e,n,u,h,f,S,A,w),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};l(Vf,"Mesh");var Tt=Vf;function Ay(i,e,t,n,s,r,a,o){let c;if(e.side===yn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Bs,o),c===null)return null;Mc.copy(o),Mc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Mc);return u<t.near||u>t.far?null:{distance:u,point:Mc.clone(),object:i}}l(Ay,"checkIntersection$1");function Sc(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,_c),i.getVertexPosition(c,vc),i.getVertexPosition(u,yc);let h=Ay(i,e,t,n,_c,vc,yc,X0);if(h){let f=new W;ts.getBarycoord(X0,_c,vc,yc,f),s&&(h.uv=ts.getInterpolatedAttribute(s,o,c,u,f,new ke)),r&&(h.uv1=ts.getInterpolatedAttribute(r,o,c,u,f,new ke)),a&&(h.normal=ts.getInterpolatedAttribute(a,o,c,u,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new W,materialIndex:0};ts.getNormal(_c,vc,yc,d.normal),h.face=d,h.barycoord=f}return h}l(Sc,"checkGeometryIntersection");var Hf=class Hf extends _n{constructor(e=null,t=1,n=1,s,r,a,o,c,u=Ot,h=Ot,f,d){super(null,a,o,c,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Hf,"DataTexture");var wa=Hf;var Wf=class Wf extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(Wf,"InstancedBufferAttribute");var as=Wf;var dr=new ba,Ty=new ke(.5,.5),wc=new W,Xf=class Xf{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],f=r[5],d=r[6],m=r[7],g=r[8],y=r[9],x=r[10],_=r[11],S=r[12],A=r[13],w=r[14],R=r[15];if(s[0].setComponents(u-a,m-h,_-g,R-S).normalize(),s[1].setComponents(u+a,m+h,_+g,R+S).normalize(),s[2].setComponents(u+o,m+f,_+y,R+A).normalize(),s[3].setComponents(u-o,m-f,_-y,R-A).normalize(),n)s[4].setComponents(c,d,x,w).normalize(),s[5].setComponents(u-c,m-d,_-x,R-w).normalize();else if(s[4].setComponents(u-c,m-d,_-x,R-w).normalize(),t===Kn)s[5].setComponents(u+c,m+d,_+x,R+w).normalize();else if(t===xa)s[5].setComponents(c,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=Ty.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wc.x=s.normal.x>0?e.max.x:e.min.x,wc.y=s.normal.y>0?e.max.y:e.min.y,wc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(Xf,"Frustum");var Is=Xf,q0=new mt,mu=class mu{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];q0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Is),n[s].setFromProjectionMatrix(q0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Is),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new mu().copy(this)}};l(mu,"FrustumArray");var Xc=mu;var qf=class qf extends _n{constructor(e=[],t=gr,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(qf,"CubeTexture");var Uo=qf,Yf=class Yf extends _n{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(Yf,"CanvasTexture");var Ls=Yf;var $f=class $f extends _n{constructor(e,t,n=oi,s,r,a,o=Ot,c=Ot,u,h=ss,f=1){if(h!==ss&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l($f,"DepthTexture");var os=$f,Zf=class Zf extends os{constructor(e,t=oi,n=gr,s,r,a=Ot,o=Ot,c,u=ss){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(Zf,"CubeDepthTexture");var Fo=Zf,Jf=class Jf extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(Jf,"ExternalTexture");var Oo=Jf,gu=class gu extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function g(y,x,_,S,A,w,R,C,v,E,L){let P=w/v,U=R/E,G=w/2,K=R/2,D=C/2,Y=v+1,ne=E+1,F=0,j=0,V=new W;for(let Q=0;Q<ne;Q++){let z=Q*U-K;for(let ie=0;ie<Y;ie++){let se=ie*P-G;V[y]=se*S,V[x]=z*A,V[_]=D,u.push(V.x,V.y,V.z),V[y]=0,V[x]=0,V[_]=C>0?1:-1,h.push(V.x,V.y,V.z),f.push(ie/v),f.push(1-Q/E),F+=1}}for(let Q=0;Q<E;Q++)for(let z=0;z<v;z++){let ie=d+z+Y*Q,se=d+z+Y*(Q+1),H=d+(z+1)+Y*(Q+1),ae=d+(z+1)+Y*Q;c.push(ie,se,ae),c.push(se,H,ae),j+=6}o.addGroup(m,j,L),m+=j,d+=F}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(gu,"BoxGeometry");var Ri=gu;var xu=class xu extends zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],m=[],g=0,y=[],x=n/2,_=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function S(){let w=new W,R=new W,C=0,v=(t-e)/n;for(let E=0;E<=r;E++){let L=[],P=E/r,U=P*(t-e)+e;for(let G=0;G<=s;G++){let K=G/s,D=K*c+o,Y=Math.sin(D),ne=Math.cos(D);R.x=U*Y,R.y=-P*n+x,R.z=U*ne,f.push(R.x,R.y,R.z),w.set(Y,v,ne).normalize(),d.push(w.x,w.y,w.z),m.push(K,1-P),L.push(g++)}y.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let P=y[L][E],U=y[L+1][E],G=y[L+1][E+1],K=y[L][E+1];(e>0||L!==0)&&(h.push(P,U,K),C+=3),(t>0||L!==r-1)&&(h.push(U,G,K),C+=3)}u.addGroup(_,C,0),_+=C}l(S,"generateTorso");function A(w){let R=g,C=new ke,v=new W,E=0,L=w===!0?e:t,P=w===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,x*P,0),d.push(0,P,0),m.push(.5,.5),g++;let U=g;for(let G=0;G<=s;G++){let D=G/s*c+o,Y=Math.cos(D),ne=Math.sin(D);v.x=L*ne,v.y=x*P,v.z=L*Y,f.push(v.x,v.y,v.z),d.push(0,P,0),C.x=Y*.5+.5,C.y=ne*.5*P+.5,m.push(C.x,C.y),g++}for(let G=0;G<s;G++){let K=R+G,D=U+G;w===!0?h.push(D,D+1,K):h.push(D+1,D,K),E+=3}u.addGroup(_,E,w===!0?1:2),_+=E}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(xu,"CylinderGeometry");var Pi=xu,_u=class _u extends Pi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _u(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(_u,"ConeGeometry");var Ii=_u;var vu=class vu extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,f=e/o,d=t/c,m=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let S=_*d-a;for(let A=0;A<u;A++){let w=A*f-r;g.push(w,-S,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){let A=S+u*_,w=S+u*(_+1),R=S+1+u*(_+1),C=S+1+u*_;m.push(A,w,C),m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}};l(vu,"PlaneGeometry");var Li=vu;var yu=class yu extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new W,d=new W,m=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let S=[],A=_/n,w=a+A*o,R=e*Math.cos(w),C=Math.sqrt(e*e-R*R),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let L=E/t,P=s+L*r;f.x=-C*Math.cos(P),f.y=R,f.z=C*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),x.push(L+v,1-A),S.push(u++)}h.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){let A=h[_][S+1],w=h[_][S],R=h[_+1][S],C=h[_+1][S+1];(_!==0||a>0)&&m.push(A,w,C),(_!==n-1||c<Math.PI)&&m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(yu,"SphereGeometry");var Ds=yu;var bu=class bu extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],f=[],d=new W,m=new W,g=new W;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=s;_++){let S=_/s*r;m.x=(e+t*Math.cos(x))*Math.cos(S),m.y=(e+t*Math.cos(x))*Math.sin(S),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(_/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let _=(s+1)*y+x-1,S=(s+1)*(y-1)+x-1,A=(s+1)*(y-1)+x,w=(s+1)*y+x;c.push(_,S,w),c.push(S,A,w)}this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(bu,"TorusGeometry");var Ns=bu;function vr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Y0(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Y0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(vr,"cloneUniforms");function ln(i){let e={};for(let t=0;t<i.length;t++){let n=vr(i[t]);for(let s in n)e[s]=n[s]}return e}l(ln,"mergeUniforms");function Y0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Y0,"isThreeObject");function Cy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(Cy,"cloneUniformsGroups");function hf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}l(hf,"getUnlitUniformColorSpace");var yr={clone:vr,merge:ln},Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kf=class Kf extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(Kf,"ShaderMaterial");var vn=Kf,jf=class jf extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(jf,"RawShaderMaterial");var qc=jf,Qf=class Qf extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Qf,"MeshStandardMaterial");var Di=Qf;var ep=class ep extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(ep,"MeshDepthMaterial");var Yc=ep,tp=class tp extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(tp,"MeshDistanceMaterial");var $c=tp;function ua(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(ua,"convertArray");function Ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(Ec,"hasTangents");var np=class np{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(np,"Interpolant");var Us=np,ip=class ip extends Us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dd:r=e,o=2*t-n;break;case Nd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dd:a=e,c=2*n-t;break;case Nd:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),y=g*g,x=y*g,_=-d*x+2*d*y-d*g,S=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,A=(-1-m)*x+(1.5+m)*y+.5*g,w=m*x-m*y;for(let R=0;R!==o;++R)r[R]=_*a[h+R]+S*a[u+R]+A*a[c+R]+w*a[f+R];return r}};l(ip,"CubicInterpolant");var Zc=ip,sp=class sp extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[c+d]*h;return r}};l(sp,"LinearInterpolant");var Jc=sp,rp=class rp extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(rp,"DiscreteInterpolant");var Kc=rp,ap=class ap extends Us{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),y=1-g;for(let x=0;x!==o;++x)r[x]=a[u+x]*y+a[c+x]*g;return r}let d=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=m*d+g*2,S=f[_],A=f[_+1],w=e*d+g*2,R=h[w],C=h[w+1],v=Ly(n,t,S,R,s);r[g]=kg(v,y,A,C,x)}return r}};l(ap,"BezierInterpolant");var jc=ap;function kg(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(kg,"cubicBezier");function Iy(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(Iy,"cubicBezierSlope");function Ly(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=kg(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Iy(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(Ly,"solveBezierParameter");var op=class op{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ec(e.settings)&&(n.settings={inTangents:ua(e.settings.inTangents,Array),outTangents:ua(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Bc:t=this.InterpolantFactoryMethodLinear;break;case Cc:t=this.InterpolantFactoryMethodSmooth;break;case Id:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Bc;case this.InterpolantFactoryMethodSmooth:return Cc;case this.InterpolantFactoryMethodBezier:return Id}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ec(this.settings)&&($0(this.settings.inTangents,e),$0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ec(this.settings)&&(Z0(this.settings.inTangents,e),Z0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ry(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(op,"KeyframeTrack");var Nn=op;function $0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l($0,"shiftTangentTimes");function Z0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Z0,"scaleTangentTimes");Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Bc;var lp=class lp extends Nn{constructor(e,t,n){super(e,t,n)}};l(lp,"BooleanKeyframeTrack");var Fs=lp;Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=wo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var cp=class cp extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};l(cp,"ColorKeyframeTrack");var Qc=cp;Qc.prototype.ValueTypeName="color";var up=class up extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};l(up,"NumberKeyframeTrack");var eu=up;eu.prototype.ValueTypeName="number";var hp=class hp extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)xn.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(hp,"QuaternionLinearInterpolant");var tu=hp,dp=class dp extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}};l(dp,"QuaternionKeyframeTrack");var Bo=dp;Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var fp=class fp extends Nn{constructor(e,t,n){super(e,t,n)}};l(fp,"StringKeyframeTrack");var Os=fp;Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=wo;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var pp=class pp extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};l(pp,"VectorKeyframeTrack");var nu=pp;nu.prototype.ValueTypeName="vector";var mp=class mp{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let m=u[f],g=u[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(mp,"LoadingManager");var iu=mp,Gg=new iu,gp=class gp{constructor(e){this.manager=e!==void 0?e:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(gp,"Loader");var su=gp;su.DEFAULT_MATERIAL_NAME="__DEFAULT";var xp=class xp extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(xp,"Light");var zo=xp,_p=class _p extends zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(_p,"HemisphereLight");var ko=_p,Pd=new mt,J0=new W,K0=new W,vp=class vp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;J0.setFromMatrixPosition(e.matrixWorld),t.position.copy(J0),K0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(K0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Pd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Pd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===xa||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(vp,"LightShadow");var ru=vp,Ac=new W,Tc=new xn,Ei=new W,yp=class yp extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ac,Tc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Tc,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ac,Tc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Tc,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(yp,"Camera");var Go=yp,As=new W,j0=new ke,Q0=new ke,bp=class bp extends Go{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,j0,Q0),t.subVectors(Q0,j0)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ld*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(bp,"PerspectiveCamera");var mn=bp;var Mp=class Mp extends Go{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Mp,"OrthographicCamera");var Vo=Mp,Sp=class Sp extends ru{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Sp,"DirectionalLightShadow");var Ud=Sp,wp=class wp extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Ud}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(wp,"DirectionalLight");var Ho=wp;var Ep=class Ep extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(Ep,"InstancedBufferGeometry");var Wo=Ep;var ha=-90,da=1,Ap=class Ap extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(ha,da,e,t);s.layers=this.layers,this.add(s);let r=new mn(ha,da,e,t);r.layers=this.layers,this.add(r);let a=new mn(ha,da,e,t);a.layers=this.layers,this.add(a);let o=new mn(ha,da,e,t);o.layers=this.layers,this.add(o);let c=new mn(ha,da,e,t);c.layers=this.layers,this.add(c);let u=new mn(ha,da,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(Ap,"CubeCamera");var Ea=Ap,Tp=class Tp extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Tp,"ArrayCamera");var au=Tp;var df="\\[\\]\\.:\\/",Dy=new RegExp("["+df+"]","g"),ff="[^"+df+"]",Ny="[^"+df.replace("\\.","")+"]",Uy=/((?:WC+[\/:])*)/.source.replace("WC",ff),Fy=/(WCOD+)?/.source.replace("WCOD",Ny),Oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),zy=new RegExp("^"+Uy+Fy+Oy+By+"$"),ky=["material","materials","bones","map"],Cp=class Cp{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Cp,"Composite");var Fd=Cp,Cs=class Cs{constructor(e,t,n){this.path=t,this.parsedPath=n||Cs.parseTrackName(t),this.node=Cs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Cs.Composite(e,t,n):new Cs(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dy,"")}static parseTrackName(e){let t=zy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=Cs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Cs,"PropertyBinding");var St=Cs;St.Composite=Fd;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gT=new Float32Array(1);var Mu=class Mu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(Mu,"Matrix2"),Mu.prototype.isMatrix2=!0;var Od=Mu;function pf(i,e,t,n){let s=Gy(n);switch(t){case nf:return i*e;case rf:return i*e/s.components*s.byteLength;case Pu:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case Iu:return i*e*2/s.components*s.byteLength;case sf:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Lu:return i*e*4/s.components*s.byteLength;case $o:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:case Fu:return Math.max(i,16)*Math.max(e,8)/4;case Du:case Uu:return Math.max(i,8)*Math.max(e,8)/2;case Ou:case Bu:case ku:case Gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zu:case jo:case Vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $u:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ju:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ih:case sh:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ah:case oh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case lh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(pf,"getByteLength");function Gy(i){switch(i){case on:case jd:return{byteLength:1,components:1};case Ra:case Qd:case Fn:return{byteLength:2,components:1};case Cu:case Ru:return{byteLength:2,components:4};case oi:case Tu:case li:return{byteLength:4,components:1};case ef:case tf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(Gy,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cx(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(cx,"WebGLAnimation");function Yy(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(Yy,"WebGLAttributes");var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
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
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nb=`#ifdef USE_BATCHING
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
#endif`,ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ob=`#ifdef USE_IRIDESCENCE
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
#endif`,lb=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xb=`#define PI 3.141592653589793
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
} // validated`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zb=`#ifdef USE_ENVMAP
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
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
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
#endif`,Xb=`uniform sampler2D dfgLUT;
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
}`,qb=`
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iM=`#if defined( USE_POINTS_UV )
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
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
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
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
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
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform float backgroundBlurriness;
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
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,eS=`#if DEPTH_PACKING == 3200
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
}`,tS=`#define DISTANCE
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
}`,nS=`#define DISTANCE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
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
}`,aS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,lS=`uniform vec3 diffuse;
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
}`,cS=`#define LAMBERT
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
}`,uS=`#define LAMBERT
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
}`,hS=`#define MATCAP
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
}`,dS=`#define MATCAP
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
}`,fS=`#define NORMAL
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
}`,pS=`#define NORMAL
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
}`,mS=`#define PHONG
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
}`,gS=`#define PHONG
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
}`,xS=`#define STANDARD
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
}`,_S=`#define STANDARD
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
}`,vS=`#define TOON
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
}`,yS=`#define TOON
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
}`,bS=`uniform float size;
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
}`,MS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,wS=`uniform vec3 color;
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
}`,ES=`uniform float rotation;
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
}`,AS=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:$y,alphahash_pars_fragment:Zy,alphamap_fragment:Jy,alphamap_pars_fragment:Ky,alphatest_fragment:jy,alphatest_pars_fragment:Qy,aomap_fragment:eb,aomap_pars_fragment:tb,batching_pars_vertex:nb,batching_vertex:ib,begin_vertex:sb,beginnormal_vertex:rb,bsdfs:ab,iridescence_fragment:ob,bumpmap_pars_fragment:lb,clipping_planes_fragment:cb,clipping_planes_pars_fragment:ub,clipping_planes_pars_vertex:hb,clipping_planes_vertex:db,color_fragment:fb,color_pars_fragment:pb,color_pars_vertex:mb,color_vertex:gb,common:xb,defaultnormal_vertex:_b,displacementmap_pars_vertex:vb,displacementmap_vertex:yb,emissivemap_fragment:bb,emissivemap_pars_fragment:Mb,colorspace_fragment:Sb,colorspace_pars_fragment:wb,envmap_fragment:Eb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Tb,envmap_pars_vertex:Cb,envmap_physical_pars_fragment:zb,envmap_vertex:Rb,fog_vertex:Pb,fog_pars_vertex:Ib,fog_fragment:Lb,fog_pars_fragment:Db,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Ub,lights_lambert_fragment:Fb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Bb,lights_toon_fragment:kb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Vb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Wb,lights_physical_pars_fragment:Xb,lights_fragment_begin:qb,lights_fragment_maps:Yb,lights_fragment_end:$b,lightprobes_pars_fragment:Zb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:Qb,map_fragment:eM,map_pars_fragment:tM,map_particle_fragment:nM,map_particle_pars_fragment:iM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:rM,morphinstance_vertex:aM,morphcolor_vertex:oM,morphnormal_vertex:lM,morphtarget_pars_vertex:cM,morphtarget_vertex:uM,normal_fragment_begin:hM,normal_fragment_maps:dM,normal_pars_fragment:fM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:yM,opaque_fragment:bM,packing:MM,premultiplied_alpha_fragment:SM,project_vertex:wM,dithering_fragment:EM,dithering_pars_fragment:AM,roughnessmap_fragment:TM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:PM,shadowmap_vertex:IM,shadowmask_pars_fragment:LM,skinbase_vertex:DM,skinning_pars_vertex:NM,skinning_vertex:UM,skinnormal_vertex:FM,specularmap_fragment:OM,specularmap_pars_fragment:BM,tonemapping_fragment:zM,tonemapping_pars_fragment:kM,transmission_fragment:GM,transmission_pars_fragment:VM,uv_pars_fragment:HM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:qM,background_vert:YM,background_frag:$M,backgroundCube_vert:ZM,backgroundCube_frag:JM,cube_vert:KM,cube_frag:jM,depth_vert:QM,depth_frag:eS,distance_vert:tS,distance_frag:nS,equirect_vert:iS,equirect_frag:sS,linedashed_vert:rS,linedashed_frag:aS,meshbasic_vert:oS,meshbasic_frag:lS,meshlambert_vert:cS,meshlambert_frag:uS,meshmatcap_vert:hS,meshmatcap_frag:dS,meshnormal_vert:fS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:gS,meshphysical_vert:xS,meshphysical_frag:_S,meshtoon_vert:vS,meshtoon_frag:yS,points_vert:bS,points_frag:MS,shadow_vert:SS,shadow_frag:wS,sprite_vert:ES,sprite_frag:AS},we={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Bi={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Bi.physical={uniforms:ln([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var hh={r:0,b:0,g:0},TS=new mt,ux=new We;ux.set(-1,0,0,0,1,0,0,0,1);function CS(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,c,u,h=null,f=0,d=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let w=S.backgroundBlurriness>0;A=e.get(A,w)}return A}l(m,"getBackground");function g(S){let A=!1,w=m(S);w===null?x(a,o):w&&w.isColor&&(x(w,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(S,A){let w=m(A);w&&w.isCubeTexture?(u===void 0&&(u=new Tt(new Ri(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:vr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TS.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(ux),u.material.toneMapped=st.getTransfer(w.colorSpace)!==dt,(h!==w||f!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Tt(new Li(2,2),new vn({name:"BackgroundMaterial",uniforms:vr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(S,A){S.getRGB(hh,hf(i)),t.buffers.color.setClear(hh.r,hh.g,hh.b,A,r)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(S,A=1){a.set(S),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(S){o=S,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(CS,"WebGLBackground");function RS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,G,K,D,Y){let ne=!1,F=f(U,D,K,G);r!==F&&(r=F,u(r.object)),ne=m(U,D,K,Y),ne&&g(U,D,K,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,w(U,G,K,D),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(U){return i.bindVertexArray(U)}l(u,"bindVertexArrayObject");function h(U){return i.deleteVertexArray(U)}l(h,"deleteVertexArrayObject");function f(U,G,K,D){let Y=D.wireframe===!0,ne=n[G.id];ne===void 0&&(ne={},n[G.id]=ne);let F=U.isInstancedMesh===!0?U.id:0,j=ne[F];j===void 0&&(j={},ne[F]=j);let V=j[K.id];V===void 0&&(V={},j[K.id]=V);let Q=V[Y];return Q===void 0&&(Q=d(c()),V[Y]=Q),Q}l(f,"getBindingState");function d(U){let G=[],K=[],D=[];for(let Y=0;Y<t;Y++)G[Y]=0,K[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:D,object:U,attributes:{},index:null}}l(d,"createBindingState");function m(U,G,K,D){let Y=r.attributes,ne=G.attributes,F=0,j=K.getAttributes();for(let V in j)if(j[V].location>=0){let z=Y[V],ie=ne[V];if(ie===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),z===void 0||z.attribute!==ie||ie&&z.data!==ie.data)return!0;F++}return r.attributesNum!==F||r.index!==D}l(m,"needsUpdate");function g(U,G,K,D){let Y={},ne=G.attributes,F=0,j=K.getAttributes();for(let V in j)if(j[V].location>=0){let z=ne[V];z===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(z=U.instanceColor));let ie={};ie.attribute=z,z&&z.data&&(ie.data=z.data),Y[V]=ie,F++}r.attributes=Y,r.attributesNum=F,r.index=D}l(g,"saveCache");function y(){let U=r.newAttributes;for(let G=0,K=U.length;G<K;G++)U[G]=0}l(y,"initAttributes");function x(U){_(U,0)}l(x,"enableAttribute");function _(U,G){let K=r.newAttributes,D=r.enabledAttributes,Y=r.attributeDivisors;K[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),Y[U]!==G&&(i.vertexAttribDivisor(U,G),Y[U]=G)}l(_,"enableAttributeAndDivisor");function S(){let U=r.newAttributes,G=r.enabledAttributes;for(let K=0,D=G.length;K<D;K++)G[K]!==U[K]&&(i.disableVertexAttribArray(K),G[K]=0)}l(S,"disableUnusedAttributes");function A(U,G,K,D,Y,ne,F){F===!0?i.vertexAttribIPointer(U,G,K,Y,ne):i.vertexAttribPointer(U,G,K,D,Y,ne)}l(A,"vertexAttribPointer");function w(U,G,K,D){y();let Y=D.attributes,ne=K.getAttributes(),F=G.defaultAttributeValues;for(let j in ne){let V=ne[j];if(V.location>=0){let Q=Y[j];if(Q===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let z=Q.normalized,ie=Q.itemSize,se=e.get(Q);if(se===void 0)continue;let H=se.buffer,ae=se.type,te=se.bytesPerElement,de=ae===i.INT||ae===i.UNSIGNED_INT||Q.gpuType===Tu;if(Q.isInterleavedBufferAttribute){let ce=Q.data,Ce=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,Ve=Q.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Ee=0;Ee<V.locationSize;Ee++)_(V.location+Ee,ce.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)x(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Ee=0;Ee<V.locationSize;Ee++)A(V.location+Ee,ie/V.locationSize,ae,z,Ce*te,(Ve+ie/V.locationSize*Ee)*te,de)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)_(V.location+ce,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<V.locationSize;ce++)x(V.location+ce);i.bindBuffer(i.ARRAY_BUFFER,H);for(let ce=0;ce<V.locationSize;ce++)A(V.location+ce,ie/V.locationSize,ae,z,ie*te,ie/V.locationSize*ce*te,de)}}else if(F!==void 0){let z=F[j];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(V.location,z);break;case 3:i.vertexAttrib3fv(V.location,z);break;case 4:i.vertexAttrib4fv(V.location,z);break;default:i.vertexAttrib1fv(V.location,z)}}}}S()}l(w,"setupVertexAttributes");function R(){L();for(let U in n){let G=n[U];for(let K in G){let D=G[K];for(let Y in D){let ne=D[Y];for(let F in ne)h(ne[F].object),delete ne[F];delete D[Y]}}delete n[U]}}l(R,"dispose");function C(U){if(n[U.id]===void 0)return;let G=n[U.id];for(let K in G){let D=G[K];for(let Y in D){let ne=D[Y];for(let F in ne)h(ne[F].object),delete ne[F];delete D[Y]}}delete n[U.id]}l(C,"releaseStatesOfGeometry");function v(U){for(let G in n){let K=n[G];for(let D in K){let Y=K[D];if(Y[U.id]===void 0)continue;let ne=Y[U.id];for(let F in ne)h(ne[F].object),delete ne[F];delete Y[U.id]}}}l(v,"releaseStatesOfProgram");function E(U){for(let G in n){let K=n[G],D=U.isInstancedMesh===!0?U.id:0,Y=K[D];if(Y!==void 0){for(let ne in Y){let F=Y[ne];for(let j in F)h(F[j].object),delete F[j];delete Y[ne]}delete K[D],Object.keys(K).length===0&&delete n[G]}}}l(E,"releaseStatesOfObject");function L(){P(),a=!0,r!==s&&(r=s,u(r.object))}l(L,"reset");function P(){s.geometry=null,s.program=null,s.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:L,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:S}}l(RS,"WebGLBindingStates");function PS(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(PS,"WebGLBufferRenderer");function IS(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(v){return!(v!==On&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let E=v===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==on&&v!==li&&!E&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ge("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:w,maxSamples:R,samples:C}}l(IS,"WebGLCapabilities");function LS(i){let e=this,t=null,n=0,s=!1,r=!1,a=new wn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!x)r?h(null):u();else{let S=r?0:n,A=S*4,w=_.clippingState||null;c.value=w,w=h(g,d,A,m);for(let R=0;R!==A;++R)w[R]=t[R];_.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,m,g){let y=f!==null?f.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=m+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,w=m;A!==y;++A,w+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(x,w),x[w+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(LS,"WebGLClipping");var zp=class zp extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:pr});r.uniforms.tEquirect.value=t;let a=new Tt(s,r),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Bt),new Ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(zp,"WebGLCubeRenderTarget");var nl=zp,Vg=256,DS=3,NS=20,hx=256,dx=16,US=3,FS=new W,OS=new Ue,mh=class mh{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ea(1,10,null),this._boxMesh=new Tt(new Ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=FS}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(OS));let x=new Ea(n,s,h);return x.position.copy(o),x.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Vg,Ug(e))}_fromTexture(e,t){e.mapping===gr||e.mapping===Ca?this._setSize(e.image.length===0?Vg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Hg(e,!1,!1),n=Math.log2(e)-DS;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gr||e.mapping===Ca?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=BS(),this._integrationMaterial=zS());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/dx);for(let a=0;a<=n;a++){let o=mh.lodToRoughness(a,n);if(a>n-US)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(hx*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kS());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(mh,"PMREMGenerator");var fh=mh;function Hg(i,e,t){return new nl(i,{minFilter:Un,generateMipmaps:e,type:Fn,colorSpace:Eo,depthBuffer:t})}l(Hg,"_createRenderTarget");function il(i,e,t){return new vn({name:i,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:yn,blending:pr,depthTest:!1,depthWrite:!1})}l(il,"_getMaterial");function BS(){return il("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hx}u

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
	`)}l(BS,"_getGGXMaterial");function zS(){return il("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dx}},`

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
	`)}l(zS,"_getIntegrationMaterial");function kS(){return il("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${NS}
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
	`)}l(kS,"_getBlurMaterial");function Wg(){return il("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(Wg,"_getEquirectMaterial");function Xg(){return il("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Xg,"_getCubemapMaterial");function GS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}l(s,"get");function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===wu||m===Eu)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new nl(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===wu||m===Eu,y=m===gr||m===Ca;if(g||y){let x=t.get(d),_=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new fh(i)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new fh(i)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}l(a,"getPMREM");function o(d,m){return m===wu?d.mapping=gr:m===Eu&&(d.mapping=Ca),d}l(o,"mapTextureMapping");function c(d){let m=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&m++;return m===g}l(c,"isCubeTextureComplete");function u(d){let m=d.target;m.removeEventListener("dispose",u);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}l(u,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:s,dispose:f}}l(GS,"WebGLEnvironments");function VS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&Mo("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(VS,"WebGLExtensions");function HS(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function f(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let S=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?Do:Lo,w=new A(Math.ceil(S/3)*6,1),R=w.array;if(y!==null){let v=y.array;_=y.version;for(let E=0,L=0;E<S;E+=3){let P=v[E+0],U=v[E+1],G=v[E+2];R[L++]=P,R[L++]=U,R[L++]=U,R[L++]=G,R[L++]=G,R[L++]=P}}else{_=x.version;for(let v=0,E=0;v<S;v+=3){let L=v+0,P=v+1,U=v+2;R[E++]=L,R[E++]=P,R[E++]=P,R[E++]=U,R[E++]=U,R[E++]=L}}w.version=_;let C=r.get(g);C&&e.remove(C),r.set(g,w)}l(f,"updateWireframeAttribute");function d(g){let y=r.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&f(g)}else f(g);return r.get(g)}l(d,"getWireframeAttribute");function m(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:m}}l(HS,"WebGLGeometries");function WS(i,e,t){let n;function s(f){n=f}l(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}l(u,"renderInstances");function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let y=0;for(let x=0;x<m;x++)y+=d[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(WS,"WebGLIndexedBufferRenderer");function XS(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(XS,"WebGLInfo");function qS(i,e,t){let n=new WeakMap,s=new At;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],w=0;g===!0&&(w=1),y===!0&&(w=2),x===!0&&(w=3);let R=o.attributes.position.count*w,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let v=new Float32Array(R*C*4*f),E=new fr(v,R,C,f);E.type=li,E.needsUpdate=!0;let L=w*4;for(let U=0;U<f;U++){let G=_[U],K=S[U],D=A[U],Y=R*C*4*U;for(let ne=0;ne<G.count;ne++){let F=ne*L;g===!0&&(s.fromBufferAttribute(G,ne),v[Y+F+0]=s.x,v[Y+F+1]=s.y,v[Y+F+2]=s.z,v[Y+F+3]=0),y===!0&&(s.fromBufferAttribute(K,ne),v[Y+F+4]=s.x,v[Y+F+5]=s.y,v[Y+F+6]=s.z,v[Y+F+7]=0),x===!0&&(s.fromBufferAttribute(D,ne),v[Y+F+8]=s.x,v[Y+F+9]=s.y,v[Y+F+10]=s.z,v[Y+F+11]=D.itemSize===4?s.w:1)}}d={count:f,texture:E,size:new ke(R,C)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(qS,"WebGLMorphtargets");function YS(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(YS,"WebGLObjects");var $S={[Xd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[Yd]:"CINEON_TONE_MAPPING",[qo]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[Jd]:"NEUTRAL_TONE_MAPPING",[$d]:"CUSTOM_TONE_MAPPING"};function ZS(i,e,t,n,s,r){let a=new Ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new zt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let f=new qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(h,f),m=new Vo(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,S=null,A=[],w=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let v=0;v<A.length;v++){let E=A[v];E.setSize&&E.setSize(R,C)}},this.setEffects=function(R){A=R,w=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new Ln(C,v,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(C,v,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&A.some(L=>L.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&u===null&&(u=new os(C,v),r===!0&&(u.format=ls,u.type=xr)),a.dispose(),a.depthTexture=E?u:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let L=0;L<A.length;L++){let P=A[L];P.setSize&&P.setSize(C,v),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(R,C){if(x||R.toneMapping===Ui&&A.length===0)return!1;if(S=C,C!==null){let v=C.width,E=C.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return w===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Ui,!0},this.hasRenderPass=function(){return w},this.end=function(R,C){R.toneMapping=_,x=!0;let v=a,E=o;for(let L=0;L<A.length;L++){let P=A[L];P.enabled!==!1&&(P.render(R,E,v,C),P.needsSwap!==!1&&(v=E,E=E===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},st.getTransfer(g)===dt&&(f.defines.SRGB_TRANSFER="");let L=$S[y];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(S),R.render(d,m),S=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(ZS,"WebGLOutput");var fx=new _n,px=new os(1,1),mx=new Fo(1),gx=new fr,xx=new Vc,_x=new Uo,qg=[],Yg=[],$g=new Float32Array(16),Zg=new Float32Array(9),Jg=new Float32Array(4);function Ia(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qg[s];if(r===void 0&&(r=new Float32Array(s),qg[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(Ia,"flatten");function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(Vt,"arraysEqual");function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Ht,"copyArray");function gh(i,e){let t=Yg[e];t===void 0&&(t=new Int32Array(e),Yg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(gh,"allocTexUnits");function JS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(JS,"setValueV1f");function KS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}l(KS,"setValueV2f");function jS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}l(jS,"setValueV3f");function QS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}l(QS,"setValueV4f");function ew(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Jg.set(n),i.uniformMatrix2fv(this.addr,!1,Jg),Ht(t,n)}}l(ew,"setValueM2");function tw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Zg.set(n),i.uniformMatrix3fv(this.addr,!1,Zg),Ht(t,n)}}l(tw,"setValueM3");function nw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;$g.set(n),i.uniformMatrix4fv(this.addr,!1,$g),Ht(t,n)}}l(nw,"setValueM4");function iw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(iw,"setValueV1i");function sw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}l(sw,"setValueV2i");function rw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}l(rw,"setValueV3i");function aw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}l(aw,"setValueV4i");function ow(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(ow,"setValueV1ui");function lw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}l(lw,"setValueV2ui");function cw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}l(cw,"setValueV3ui");function uw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}l(uw,"setValueV4ui");function xh(i){return i.version===0&&(i.compareFunction=lf,i.needsUpdate=!0),i}l(xh,"initShadowTexture");function hw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=xh(px):r=fx,t.setTexture2D(e||r,s)}l(hw,"setValueT1");function dw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xx,s)}l(dw,"setValueT3D1");function fw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=xh(mx):r=_x,t.setTextureCube(e||r,s)}l(fw,"setValueT6");function pw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gx,s)}l(pw,"setValueT2DArray1");function mw(i){switch(i){case 5126:return JS;case 35664:return KS;case 35665:return jS;case 35666:return QS;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return aw;case 5125:return ow;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return pw}}l(mw,"getSingularSetter");function gw(i,e){i.uniform1fv(this.addr,e)}l(gw,"setValueV1fArray");function xw(i,e){let t=Ia(e,this.size,2);i.uniform2fv(this.addr,t)}l(xw,"setValueV2fArray");function _w(i,e){let t=Ia(e,this.size,3);i.uniform3fv(this.addr,t)}l(_w,"setValueV3fArray");function vw(i,e){let t=Ia(e,this.size,4);i.uniform4fv(this.addr,t)}l(vw,"setValueV4fArray");function yw(i,e){let t=Ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(yw,"setValueM2Array");function bw(i,e){let t=Ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(bw,"setValueM3Array");function Mw(i,e){let t=Ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(Mw,"setValueM4Array");function Sw(i,e){i.uniform1iv(this.addr,e)}l(Sw,"setValueV1iArray");function ww(i,e){i.uniform2iv(this.addr,e)}l(ww,"setValueV2iArray");function Ew(i,e){i.uniform3iv(this.addr,e)}l(Ew,"setValueV3iArray");function Aw(i,e){i.uniform4iv(this.addr,e)}l(Aw,"setValueV4iArray");function Tw(i,e){i.uniform1uiv(this.addr,e)}l(Tw,"setValueV1uiArray");function Cw(i,e){i.uniform2uiv(this.addr,e)}l(Cw,"setValueV2uiArray");function Rw(i,e){i.uniform3uiv(this.addr,e)}l(Rw,"setValueV3uiArray");function Pw(i,e){i.uniform4uiv(this.addr,e)}l(Pw,"setValueV4uiArray");function Iw(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xh(px):a=fx;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(Iw,"setValueT1Array");function Lw(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xx,r[a])}l(Lw,"setValueT3DArray");function Dw(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=xh(mx):a=_x;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(Dw,"setValueT6Array");function Nw(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gx,r[a])}l(Nw,"setValueT2DArrayArray");function Uw(i){switch(i){case 5126:return gw;case 35664:return xw;case 35665:return _w;case 35666:return vw;case 35674:return yw;case 35675:return bw;case 35676:return Mw;case 5124:case 35670:return Sw;case 35667:case 35671:return ww;case 35668:case 35672:return Ew;case 35669:case 35673:return Aw;case 5125:return Tw;case 36294:return Cw;case 36295:return Rw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Nw}}l(Uw,"getPureArraySetter");var kp=class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mw(t.type)}};l(kp,"SingleUniform");var Ip=kp,Gp=class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uw(t.type)}};l(Gp,"PureArrayUniform");var Lp=Gp,Vp=class Vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(Vp,"StructuredUniform");var Dp=Vp,Rp=/(\w+)(\])?(\[|\.)?/g;function Kg(i,e){i.seq.push(e),i.map[e.id]=e}l(Kg,"addUniform");function Fw(i,e,t){let n=i.name,s=n.length;for(Rp.lastIndex=0;;){let r=Rp.exec(n),a=Rp.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Kg(t,u===void 0?new Ip(o,i,e):new Lp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Dp(o),Kg(t,f)),t=f}}}l(Fw,"parseUniform");var Hp=class Hp{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Fw(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(Hp,"WebGLUniforms");var Pa=Hp;function jg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(jg,"WebGLShader");var Ow=37297,Bw=0;function zw(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(zw,"handleSource");var Qg=new We;function kw(i){st._getMatrix(Qg,st.workingColorSpace,i);let e=`mat3( ${Qg.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Ao:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(kw,"getEncodingComponents");function ex(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zw(i.getShaderSource(e),o)}else return r}l(ex,"getShaderErrors");function Gw(i,e){let t=kw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(Gw,"getTexelEncodingFunction");var Vw={[Xd]:"Linear",[qd]:"Reinhard",[Yd]:"Cineon",[qo]:"ACESFilmic",[Zd]:"AgX",[Jd]:"Neutral",[$d]:"Custom"};function Hw(i,e){let t=Vw[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(Hw,"getToneMappingFunction");var dh=new W;function Ww(){st.getLuminanceCoefficients(dh);let i=dh.x.toFixed(4),e=dh.y.toFixed(4),t=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(Ww,"getLuminanceFunction");function Xw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}l(Xw,"generateVertexExtensions");function qw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(qw,"generateDefines");function Yw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(Yw,"fetchAttributeLocations");function tl(i){return i!==""}l(tl,"filterEmptyLine");function tx(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(tx,"replaceLightNums");function nx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(nx,"replaceClippingPlaneNums");var $w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(i){return i.replace($w,Zw)}l(Np,"resolveIncludes");function Zw(i,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Np(t)}l(Zw,"includeReplacer");var Jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(i){return i.replace(Jw,Kw)}l(ix,"unrollLoops");function Kw(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(Kw,"loopReplacer");function sx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(sx,"generatePrecision");var jw={[Xo]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function Qw(i){return jw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(Qw,"generateShadowMapTypeDefine");var e1={[Ca]:"ENVMAP_MODE_REFRACTION"};function t1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(t1,"generateEnvMapModeDefine");var n1={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[yg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function i1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n1[i.combine]||"ENVMAP_BLENDING_NONE"}l(i1,"generateEnvMapBlendingDefine");function s1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Qw(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=t1(t),f=i1(t),d=Xw(t),m=qw(r),g=s.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tl).join(`
`),x.length>0&&(x+=`
`)):(y=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),x=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Hw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Gw("linearToOutputTexel",t.outputColorSpace),Ww(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tl).join(`
`)),a=Np(a),a=tx(a,t),a=nx(a,t),o=Np(o),o=tx(o,t),o=nx(o,t),a=ix(a),o=ix(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=_+y+a,A=_+x+o,w=jg(s,s.VERTEX_SHADER,S),R=jg(s,s.FRAGMENT_SHADER,A);s.attachShader(g,w),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(w)||"",K=s.getShaderInfoLog(R)||"",D=U.trim(),Y=G.trim(),ne=K.trim(),F=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,R);else{let V=ex(s,w,"vertex"),Q=ex(s,R,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+V+`
`+Q)}else D!==""?Ge("WebGLProgram: Program Info Log:",D):(Y===""||ne==="")&&(j=!1);j&&(P.diagnostics={runnable:F,programLog:D,vertexShader:{log:Y,prefix:y},fragmentShader:{log:ne,prefix:x}})}s.deleteShader(w),s.deleteShader(R),v=new Pa(s,g),E=Yw(s,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,Ow)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}l(s1,"WebGLProgram");var r1=0,Wp=class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fp(e),t.set(e,n)),n}};l(Wp,"WebGLShaderCache");var Up=Wp,Xp=class Xp{constructor(e){this.id=r1++,this.code=e,this.usedTimes=0}};l(Xp,"WebGLShaderStage");var Fp=Xp;function a1(i){return i===Fi||i===jo||i===Qo}l(a1,"isPackedRGFormat");function o1(i,e,t,n,s,r){let a=new Ro,o=new Up,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}l(m,"getChannel");function g(v,E,L,P,U,G){let K=P.fog,D=U.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||Y,ne),j=d[v.type],V=n.precision;v.precision!==null&&(V=n.getMaxPrecision(v.precision),V!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));let Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=Q!==void 0?Q.length:0,ie=0;D.morphAttributes.position!==void 0&&(ie=1),D.morphAttributes.normal!==void 0&&(ie=2),D.morphAttributes.color!==void 0&&(ie=3);let se,H,ae,te;if(j){let Te=Bi[j];se=Te.vertexShader,H=Te.fragmentShader}else{se=v.vertexShader,H=v.fragmentShader;let Te=o.getVertexShaderStage(v),pt=o.getFragmentShaderStage(v);o.update(v,Te,pt),ae=Te.id,te=pt.id}let de=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ce=U.isInstancedMesh===!0,Ve=U.isBatchedMesh===!0,Ee=!!v.map,qe=!!v.matcap,je=!!F,Xe=je&&F.isPMREMTexture===!0,gt=!!v.aoMap,xt=!!v.lightMap,tt=!!v.bumpMap&&v.wireframe===!1,Qe=!!v.normalMap,Dt=!!v.displacementMap,ft=!!v.emissiveMap,Et=!!v.metalnessMap,Lt=!!v.roughnessMap,at=v.anisotropy>0,B=v.clearcoat>0,Pt=v.diffuseRoughness>0,ot=v.dispersion>0,et=v.retroreflectivity>0,me=v.iridescence>0,ut=v.sheen>0,Fe=v.transmission>0,ze=at&&!!v.anisotropyMap,T=B&&!!v.clearcoatMap,b=B&&!!v.clearcoatNormalMap,X=B&&!!v.clearcoatRoughnessMap,fe=Pt&&!!v.diffuseRoughnessMap,le=me&&!!v.iridescenceMap,xe=me&&!!v.iridescenceThicknessMap,Me=ut&&!!v.sheenColorMap,oe=ut&&!!v.sheenRoughnessMap,ue=!!v.specularMap,ve=!!v.specularColorMap,N=!!v.specularIntensityMap,he=Fe&&!!v.transmissionMap,re=Fe&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Oe=!!v.alphaHash,Je=!!v.extensions,pe=Ui;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Be=Xe?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Ze={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:se,fragmentShader:H,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:Ve,batchingColor:Ve&&U._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,instancingMorph:Ce&&U.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:qe,envMap:je,envMapMode:je&&F.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Be.length-1:null,envMapSize:Xe?Be[0].width:null,aoMap:gt,lightMap:xt,bumpMap:tt,normalMap:Qe,displacementMap:Dt,emissiveMap:ft,normalMapObjectSpace:Qe&&v.normalMapType===wg,normalMapTangentSpace:Qe&&v.normalMapType===ch,packedNormalMap:Qe&&v.normalMapType===ch&&a1(v.normalMap.format),metalnessMap:Et,roughnessMap:Lt,anisotropy:at,anisotropyMap:ze,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:Pt,diffuseRoughnessMap:fe,dispersion:ot,retroreflection:et,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:ut,sheenColorMap:Me,sheenRoughnessMap:oe,specularMap:ue,specularColorMap:ve,specularIntensityMap:N,transmission:Fe,transmissionMap:he,thicknessMap:re,gradientMap:ye,opaque:v.transparent===!1&&v.blending===Ta&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Oe,combine:v.combine,mapUv:Ee&&m(v.map.channel),aoMapUv:gt&&m(v.aoMap.channel),lightMapUv:xt&&m(v.lightMap.channel),bumpMapUv:tt&&m(v.bumpMap.channel),normalMapUv:Qe&&m(v.normalMap.channel),displacementMapUv:Dt&&m(v.displacementMap.channel),emissiveMapUv:ft&&m(v.emissiveMap.channel),metalnessMapUv:Et&&m(v.metalnessMap.channel),roughnessMapUv:Lt&&m(v.roughnessMap.channel),anisotropyMapUv:ze&&m(v.anisotropyMap.channel),clearcoatMapUv:T&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(v.sheenRoughnessMap.channel),specularMapUv:ue&&m(v.specularMap.channel),specularColorMapUv:ve&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:ge&&m(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Qe||at),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Ee||ge),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&Qe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ni,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Je&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&v.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}l(g,"getParameters");function y(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(E,v),_(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}l(y,"getProgramCacheKey");function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function S(v){let E=d[v.type],L;if(E){let P=Bi[E];L=yr.clone(P.uniforms)}else L=v.uniforms;return L}l(S,"getUniforms");function A(v,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new s1(i,E,v,s),u.push(L),h.set(E,L)),L}l(A,"acquireProgram");function w(v){if(--v.usedTimes===0){let E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(w,"releaseProgram");function R(v){o.remove(v)}l(R,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}l(o1,"WebGLPrograms");function l1(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(l1,"WebGLProperties");function c1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(c1,"painterSortStable");function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(rx,"reversePainterSortStable");function ax(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(d,m,g,y,x,_){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:m,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:_},i[e]=S):(S.id=d.id,S.object=d,S.geometry=m,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=x,S.group=_),e++,S}l(o,"getNextRenderItem");function c(d,m,g,y,x,_,S){S.reversedDepth===!0&&(x=-x);let A=o(d,m,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}l(c,"push");function u(d,m,g,y,x,_){let S=o(d,m,g,y,x,_);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}l(u,"unshift");function h(d,m){t.length>1&&t.sort(d||c1),n.length>1&&n.sort(m||rx),s.length>1&&s.sort(m||rx)}l(h,"sort");function f(){for(let d=e,m=i.length;d<m;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:f,sort:h}}l(ax,"WebGLRenderList");function u1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ax,i.set(n,[a])):s>=r.length?(a=new ax,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(u1,"WebGLRenderLists");function h1(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Ue};break;case"SpotLight":t={position:new W,direction:new W,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(h1,"UniformsCache");function d1(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(d1,"ShadowUniformsCache");var f1=0;function p1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(p1,"shadowCastingAndTexturingLightsFirst");function m1(i){let e=new h1,t=d1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let s=new W,r=new mt,a=new mt;function o(u){let h=0,f=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,g=0,y=0,x=0,_=0,S=0,A=0,w=0,R=0,C=0,v=0,E=0,L=0,P=0;u.sort(p1);for(let G=0,K=u.length;G<K;G++){let D=u[G],Y=D.color,ne=D.intensity,F=D.distance,j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Fi?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=Y.r*ne,f+=Y.g*ne,d+=Y.b*ne;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],ne);P++}else if(D.isSunLight){let V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=j;let ie=Q.getViewportCount();for(let se=0;se<ie;se++)n.sunShadowMatrix[y+se]=Q.getMatrix(se),n.sunShadowCascade[y+se]=Q._cascadeData[se];y+=ie,g++}n.sun[m]=V,m++}else if(D.isDirectionalLight){let V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,n.directionalShadow[x]=z,n.directionalShadowMap[x]=j,n.directionalShadowMatrix[x]=D.shadow.matrix,R++}n.directional[x]=V,x++}else if(D.isSpotLight){let V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(Y).multiplyScalar(ne),V.distance=F,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[S]=V;let Q=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,Q.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[S]=Q.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=j,v++}S++}else if(D.isRectAreaLight){let V=e.get(D);V.color.copy(Y).multiplyScalar(ne),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=V,A++}else if(D.isPointLight){let V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){let Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=D.shadow.matrix,C++}n.point[_]=V,_++}else if(D.isHemisphereLight){let V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(ne),V.groundColor.copy(D.groundColor).multiplyScalar(ne),n.hemi[w]=V,w++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let U=n.hash;(U.sunLength!==m||U.directionalLength!==x||U.pointLength!==_||U.spotLength!==S||U.rectAreaLength!==A||U.hemiLength!==w||U.numSunShadows!==g||U.numDirectionalShadows!==R||U.numPointShadows!==C||U.numSpotShadows!==v||U.numSpotMaps!==E||U.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=x,n.spot.length=S,n.rectArea.length=A,n.point.length=_,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,U.sunLength=m,U.directionalLength=x,U.pointLength=_,U.spotLength=S,U.rectAreaLength=A,U.hemiLength=w,U.numSunShadows=g,U.numDirectionalShadows=R,U.numPointShadows=C,U.numSpotShadows=v,U.numSpotMaps=E,U.numLightProbes=P,n.version=f1++)}l(o,"setup");function c(u,h){let f=0,d=0,m=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){let w=u[S];if(w.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),f++}else if(w.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),d++}else if(w.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),g++}else if(w.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),a.identity(),r.copy(w.matrixWorld),r.premultiply(_),a.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(m1,"WebGLLights");function ox(i){let e=new m1(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(ox,"WebGLRenderState");function g1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ox(i),e.set(s,[o])):r>=a.length?(o=new ox(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(g1,"WebGLRenderStates");var x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
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
}`,v1=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],y1=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],lx=new mt,el=new W,Pp=new W;function b1(i,e,t){let n=new Is,s=new ke,r=new ke,a=new At,o=new Yc,c=new $c,u={},h=t.maxTextureSize,f={[Bs]:yn,[yn]:Bs,[Ni]:Ni},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:x1,fragmentShader:_1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Tt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let _=this.type;this.render=function(C,v,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Su&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xo);let L=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),G=i.state;G.setBlending(pr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=_!==this.type;K&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Y=>Y.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Y=C.length;D<Y;D++){let ne=C[D],F=ne.shadow;if(F===void 0){Ge("WebGLShadowMap:",ne,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let j=F.getFrameExtents();s.multiply(j),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,F.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||K===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Aa){if(ne.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ln(s.x,s.y,{format:Fi,type:Fn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),F.map.texture.name=ne.name+".shadowMap",F.map.depthTexture=new os(s.x,s.y,li),F.map.depthTexture.name=ne.name+".shadowMapDepth",F.map.depthTexture.format=ss,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot}else ne.isPointLight?(F.map=new nl(s.x),F.map.depthTexture=new Fo(s.x,oi)):(F.map=new Ln(s.x,s.y),F.map.depthTexture=new os(s.x,s.y,oi)),F.map.depthTexture.name=ne.name+".shadowMap",F.map.depthTexture.format=ss,this.type===Xo?(F.map.depthTexture.compareFunction=V?of:af,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let Q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();ne.isPointLight!==!0&&F.updateMatrices(ne,E);let z=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:E.layers;for(let ie=0;ie<Q;ie++){let se=F.getCamera(ie);if(ne.isPointLight){let H=F.camera,ae=F.matrix,te=ne.distance||H.far;te!==H.far&&(H.far=te,H.updateProjectionMatrix()),el.setFromMatrixPosition(ne.matrixWorld),H.position.copy(el),Pp.copy(H.position),Pp.add(v1[ie]),H.up.copy(y1[ie]),H.lookAt(Pp),H.updateMatrixWorld(),ae.makeTranslation(-el.x,-el.y,-el.z),lx.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),F._frustum.setFromProjectionMatrix(lx,H.coordinateSystem,H.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(F.map),i.clear());let H=F.getViewport(ie);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),G.viewport(a)}n=F.getFrustum(ie),w(v,E,se,ne,z,this.type)}F.isPointLightShadow!==!0&&this.type===Aa&&S(F,E),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(L,P,U)};function S(C,v){let E=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new Ln(s.x,s.y,{format:Fi,type:Fn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,E,d,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,E,m,y,null)}l(S,"VSMPass");function A(C,v,E,L){let P=null,U=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)P=U;else if(P=E.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let G=P.uuid,K=v.uuid,D=u[G];D===void 0&&(D={},u[G]=D);let Y=D[K];Y===void 0&&(Y=P.clone(),D[K]=Y,v.addEventListener("dispose",R)),P=Y}if(P.visible=v.visible,P.wireframe=v.wireframe,L===Aa?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:f[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=i.properties.get(P);G.light=E}return P}l(A,"getDepthMaterial");function w(C,v,E,L,P,U){if(C.visible===!1)return;if(C.layers.test(P)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===Aa)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);let D=e.update(C),Y=C.material;if(Array.isArray(Y)){let ne=D.groups;for(let F=0,j=ne.length;F<j;F++){let V=ne[F],Q=Y[V.materialIndex];if(Q&&Q.visible){let z=A(C,Q,L,U);C.onBeforeShadow(i,C,v,E,D,z,V),i.renderBufferDirect(E,null,D,z,C,V),C.onAfterShadow(i,C,v,E,D,z,V)}}}else if(Y.visible){let ne=A(C,Y,L,U);C.onBeforeShadow(i,C,v,E,D,ne,null),i.renderBufferDirect(E,null,D,ne,C,null),C.onAfterShadow(i,C,v,E,D,ne,null)}}let K=C.children;for(let D=0,Y=K.length;D<Y;D++)w(K[D],v,E,L,P,U)}l(w,"renderObject");function R(C){C.target.removeEventListener("dispose",R);for(let E in u){let L=u[E],P=C.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}l(R,"onMaterialDispose")}l(b1,"WebGLShadowMap");function M1(i,e){function t(){let N=!1,he=new At,re=null,ye=new At(0,0,0,0);return{setMask:l(function(ge){re!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),re=ge)},"setMask"),setLocked:l(function(ge){N=ge},"setLocked"),setClear:l(function(ge,_e,Oe,Je,pe){pe===!0&&(ge*=Je,_e*=Je,Oe*=Je),he.set(ge,_e,Oe,Je),ye.equals(he)===!1&&(i.clearColor(ge,_e,Oe,Je),ye.copy(he))},"setClear"),reset:l(function(){N=!1,re=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let N=!1,he=!1,re=null,ye=null,ge=null;return{setReversed:l(function(_e){if(he!==_e){let Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),he=_e;let Je=ge;ge=null,this.setClear(Je)}},"setReversed"),getReversed:l(function(){return he},"getReversed"),setTest:l(function(_e){_e?ce(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){re!==_e&&!N&&(i.depthMask(_e),re=_e)},"setMask"),setFunc:l(function(_e){if(he&&(_e=Ng[_e]),ye!==_e){switch(_e){case Pc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case ga:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){N=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,he&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){N=!1,re=null,ye=null,ge=null,he=!1},"reset")}}l(n,"DepthBuffer");function s(){let N=!1,he=null,re=null,ye=null,ge=null,_e=null,Oe=null,Je=null,pe=null;return{setTest:l(function(Be){N||(Be?ce(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},"setTest"),setMask:l(function(Be){he!==Be&&!N&&(i.stencilMask(Be),he=Be)},"setMask"),setFunc:l(function(Be,Ze,Te){(re!==Be||ye!==Ze||ge!==Te)&&(i.stencilFunc(Be,Ze,Te),re=Be,ye=Ze,ge=Te)},"setFunc"),setOp:l(function(Be,Ze,Te){(_e!==Be||Oe!==Ze||Je!==Te)&&(i.stencilOp(Be,Ze,Te),_e=Be,Oe=Ze,Je=Te)},"setOp"),setLocked:l(function(Be){N=Be},"setLocked"),setClear:l(function(Be){pe!==Be&&(i.clearStencil(Be),pe=Be)},"setClear"),reset:l(function(){N=!1,he=null,re=null,ye=null,ge=null,_e=null,Oe=null,Je=null,pe=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},f={},d={},m=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,w=null,R=null,C=null,v=null,E=new Ue(0,0,0),L=0,P=!1,U=null,G=null,K=null,D=null,Y=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,j=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=j>=2);let Q=null,z={},ie=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),H=new At().fromArray(ie),ae=new At().fromArray(se);function te(N,he,re,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<re;Oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(te,"createTexture");let de={};de[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(ga),tt(!1),Qe(Bd),ce(i.CULL_FACE),gt(pr);function ce(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}l(ce,"enable");function Ce(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}l(Ce,"disable");function Ve(N,he){return d[N]!==he?(i.bindFramebuffer(N,he),d[N]=he,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}l(Ve,"bindFramebuffer");function Ee(N,he){let re=g,ye=!1;if(N){re=m.get(he),re===void 0&&(re=[],m.set(he,re));let ge=N.textures;if(re.length!==ge.length||re[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=ge.length;_e<Oe;_e++)re[_e]=i.COLOR_ATTACHMENT0+_e;re.length=ge.length,ye=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ye=!0);ye&&i.drawBuffers(re)}l(Ee,"drawBuffers");function qe(N){return y!==N?(i.useProgram(N),y=N,!0):!1}l(qe,"useProgram");let je={[mr]:i.FUNC_ADD,[ig]:i.FUNC_SUBTRACT,[sg]:i.FUNC_REVERSE_SUBTRACT};je[rg]=i.MIN,je[ag]=i.MAX;let Xe={[og]:i.ZERO,[lg]:i.ONE,[cg]:i.SRC_COLOR,[Vd]:i.SRC_ALPHA,[mg]:i.SRC_ALPHA_SATURATE,[fg]:i.DST_COLOR,[hg]:i.DST_ALPHA,[ug]:i.ONE_MINUS_SRC_COLOR,[Hd]:i.ONE_MINUS_SRC_ALPHA,[pg]:i.ONE_MINUS_DST_COLOR,[dg]:i.ONE_MINUS_DST_ALPHA,[gg]:i.CONSTANT_COLOR,[xg]:i.ONE_MINUS_CONSTANT_COLOR,[_g]:i.CONSTANT_ALPHA,[vg]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(N,he,re,ye,ge,_e,Oe,Je,pe,Be){if(N===pr){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),N!==ng){if(N!==_||Be!==P){if((S!==mr||R!==mr)&&(i.blendEquation(i.FUNC_ADD),S=mr,R=mr),Be)switch(N){case Ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",N);break}else switch(N){case Ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kd:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",N);break}A=null,w=null,C=null,v=null,E.set(0,0,0),L=0,_=N,P=Be}return}ge=ge||he,_e=_e||re,Oe=Oe||ye,(he!==S||ge!==R)&&(i.blendEquationSeparate(je[he],je[ge]),S=he,R=ge),(re!==A||ye!==w||_e!==C||Oe!==v)&&(i.blendFuncSeparate(Xe[re],Xe[ye],Xe[_e],Xe[Oe]),A=re,w=ye,C=_e,v=Oe),(Je.equals(E)===!1||pe!==L)&&(i.blendColor(Je.r,Je.g,Je.b,pe),E.copy(Je),L=pe),_=N,P=!1}l(gt,"setBlending");function xt(N,he){N.side===Ni?Ce(i.CULL_FACE):ce(i.CULL_FACE);let re=N.side===yn;he&&(re=!re),tt(re),N.blending===Ta&&N.transparent===!1?gt(pr):gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ye=N.stencilWrite;o.setTest(ye),ye&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}l(xt,"setMaterial");function tt(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}l(tt,"setFlipSided");function Qe(N){N!==eg?(ce(i.CULL_FACE),N!==G&&(N===Bd?i.cullFace(i.BACK):N===tg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),G=N}l(Qe,"setCullFace");function Dt(N){N!==K&&(F&&i.lineWidth(N),K=N)}l(Dt,"setLineWidth");function ft(N,he,re){N?(ce(i.POLYGON_OFFSET_FILL),(D!==he||Y!==re)&&(D=he,Y=re,a.getReversed()&&(he=-he,re=-re),i.polygonOffset(he,re))):Ce(i.POLYGON_OFFSET_FILL)}l(ft,"setPolygonOffset");function Et(N){N?ce(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}l(Et,"setScissorTest");function Lt(N){N===void 0&&(N=i.TEXTURE0+ne-1),Q!==N&&(i.activeTexture(N),Q=N)}l(Lt,"activeTexture");function at(N,he,re){re===void 0&&(Q===null?re=i.TEXTURE0+ne-1:re=Q);let ye=z[re];ye===void 0&&(ye={type:void 0,texture:void 0},z[re]=ye),(ye.type!==N||ye.texture!==he)&&(Q!==re&&(i.activeTexture(re),Q=re),i.bindTexture(N,he||de[N]),ye.type=N,ye.texture=he)}l(at,"bindTexture");function B(){let N=z[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}l(B,"unbindTexture");function Pt(){try{i.compressedTexImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(Pt,"compressedTexImage2D");function ot(){try{i.compressedTexImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(ot,"compressedTexImage3D");function et(){try{i.texSubImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(et,"texSubImage2D");function me(){try{i.texSubImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(me,"texSubImage3D");function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(ut,"compressedTexSubImage2D");function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(Fe,"compressedTexSubImage3D");function ze(){try{i.texStorage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(ze,"texStorage2D");function T(){try{i.texStorage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(T,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(b,"texImage2D");function X(){try{i.texImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(X,"texImage3D");function fe(N){return f[N]!==void 0?f[N]:i.getParameter(N)}l(fe,"getParameter");function le(N,he){f[N]!==he&&(i.pixelStorei(N,he),f[N]=he)}l(le,"pixelStorei");function xe(N){H.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),H.copy(N))}l(xe,"scissor");function Me(N){ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}l(Me,"viewport");function oe(N,he){let re=u.get(he);re===void 0&&(re=new WeakMap,u.set(he,re));let ye=re.get(N);ye===void 0&&(ye=i.getUniformBlockIndex(he,N.name),i.uniformBlockBinding(he,ye,ye),re.set(N,ye))}l(oe,"updateUBOMapping");function ue(N,he,re){let ge=u.get(he).get(N);c[ge]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,re),c[ge]=re)}l(ue,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,z={},d={},c={},m=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,w=null,R=null,C=null,v=null,E=new Ue(0,0,0),L=0,P=!1,U=null,G=null,K=null,D=null,Y=null,H.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ce,bindFramebuffer:Ve,drawBuffers:Ee,useProgram:qe,setBlending:gt,setMaterial:xt,setFlipSided:tt,setCullFace:Qe,setLineWidth:Dt,setPolygonOffset:ft,setScissorTest:Et,activeTexture:Lt,bindTexture:at,unbindTexture:B,compressedTexImage2D:Pt,compressedTexImage3D:ot,texImage2D:b,texImage3D:X,pixelStorei:le,getParameter:fe,updateUBOMapping:oe,uniformBlockBinding:ue,texStorage2D:ze,texStorage3D:T,texSubImage2D:et,texSubImage3D:me,compressedTexSubImage2D:ut,compressedTexSubImage3D:Fe,scissor:xe,viewport:Me,reset:ve}}l(M1,"WebGLState");function S1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap,f=new Set,d,m=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return x?new OffscreenCanvas(T,b):To("canvas")}l(_,"createCanvas");function S(T,b,X){let fe=1,le=ze(T);if((le.width>X||le.height>X)&&(fe=X/Math.max(le.width,le.height)),fe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let xe=Math.floor(fe*le.width),Me=Math.floor(fe*le.height);d===void 0&&(d=_(xe,Me));let oe=b?_(xe,Me):d;return oe.width=xe,oe.height=Me,oe.getContext("2d").drawImage(T,0,0,xe,Me),Ge("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Me+")."),oe}else return"data"in T&&Ge("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}l(S,"resizeImage");function A(T){return T.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function w(T){i.generateMipmap(T)}l(w,"generateMipmap");function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function C(T,b,X,fe,le,xe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=b;if(b===i.RED&&(X===i.FLOAT&&(oe=i.R32F),X===i.HALF_FLOAT&&(oe=i.R16F),X===i.UNSIGNED_BYTE&&(oe=i.R8),X===i.UNSIGNED_SHORT&&Me&&(oe=Me.R16_EXT),X===i.SHORT&&Me&&(oe=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.R8UI),X===i.UNSIGNED_SHORT&&(oe=i.R16UI),X===i.UNSIGNED_INT&&(oe=i.R32UI),X===i.BYTE&&(oe=i.R8I),X===i.SHORT&&(oe=i.R16I),X===i.INT&&(oe=i.R32I)),b===i.RG&&(X===i.FLOAT&&(oe=i.RG32F),X===i.HALF_FLOAT&&(oe=i.RG16F),X===i.UNSIGNED_BYTE&&(oe=i.RG8),X===i.UNSIGNED_SHORT&&Me&&(oe=Me.RG16_EXT),X===i.SHORT&&Me&&(oe=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RG8UI),X===i.UNSIGNED_SHORT&&(oe=i.RG16UI),X===i.UNSIGNED_INT&&(oe=i.RG32UI),X===i.BYTE&&(oe=i.RG8I),X===i.SHORT&&(oe=i.RG16I),X===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),X===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),X===i.UNSIGNED_INT&&(oe=i.RGB32UI),X===i.BYTE&&(oe=i.RGB8I),X===i.SHORT&&(oe=i.RGB16I),X===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),X===i.UNSIGNED_INT&&(oe=i.RGBA32UI),X===i.BYTE&&(oe=i.RGBA8I),X===i.SHORT&&(oe=i.RGBA16I),X===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&(X===i.UNSIGNED_SHORT&&Me&&(oe=Me.RGB16_EXT),X===i.SHORT&&Me&&(oe=Me.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),b===i.RGBA){let ue=xe?Ao:st.getTransfer(le);X===i.FLOAT&&(oe=i.RGBA32F),X===i.HALF_FLOAT&&(oe=i.RGBA16F),X===i.UNSIGNED_BYTE&&(oe=ue===dt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Me&&(oe=Me.RGBA16_EXT),X===i.SHORT&&Me&&(oe=Me.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}l(C,"getInternalFormat");function v(T,b){let X;return T?b===null||b===oi||b===xr?X=i.DEPTH24_STENCIL8:b===li?X=i.DEPTH32F_STENCIL8:b===Ra&&(X=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===oi||b===xr?X=i.DEPTH_COMPONENT24:b===li?X=i.DEPTH_COMPONENT32F:b===Ra&&(X=i.DEPTH_COMPONENT16),X}l(v,"getInternalDepthFormat");function E(T,b){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}l(E,"getMipLevels");function L(T){let b=new WeakRef(T);n.get(T).__ref=b,g.add(b),y.register(T,b,b)}l(L,"track");function P(T){let b=n.get(T).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}l(P,"untrack");function U(T){K(T.target)}l(U,"onTextureDispose");function G(T){D(T.target)}l(G,"onRenderTargetDispose");function K(T){T.removeEventListener("dispose",U),P(T),ne(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}l(K,"destroyTexture");function D(T){T.removeEventListener("dispose",G),P(T),j(T)}l(D,"destroyRenderTarget");function Y(){for(let T of g){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):K(b))}g.clear(),f.clear()}l(Y,"dispose");function ne(T){let b=n.get(T);if(b.__webglInit===void 0)return;let X=T.source,fe=m.get(X);if(fe){let le=fe[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&F(T),Object.keys(fe).length===0&&m.delete(X)}n.remove(T)}l(ne,"deallocateTexture");function F(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let X=T.source,fe=m.get(X);delete fe[b.__cacheKey],a.memory.textures--}l(F,"deleteTexture");function j(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=T.depthTexture;if(X&&X.renderTarget===T&&K(X),T.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let xe=0;xe<b.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)i.deleteFramebuffer(b.__webglFramebuffer[le]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=T.textures;for(let le=0,xe=fe.length;le<xe;le++){let Me=n.get(fe[le]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[le])}n.remove(T)}l(j,"deallocateRenderTarget");let V=0;function Q(){V=0}l(Q,"resetTextureUnits");function z(){return V}l(z,"getTextureUnits");function ie(T){V=T}l(ie,"setTextureUnits");function se(){let T=V;return T>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,T}l(se,"allocateTextureUnit");function H(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}l(H,"getTextureCacheKey");function ae(T,b){let X=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&X.__version!==T.version){let fe=T.image;if(fe===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(X,T,b);return}}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}l(ae,"setTexture2D");function te(T,b){let X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){xt(X,T,b);return}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}l(te,"setTexture2DArray");function de(T,b){let X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){xt(X,T,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}l(de,"setTexture3D");function ce(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){tt(X,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}l(ce,"setTextureCube");let Ce={[Ai]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Oc]:i.MIRRORED_REPEAT},Ve={[Ot]:i.NEAREST,[Mg]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Au]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},Ee={[Ag]:i.NEVER,[lf]:i.ALWAYS,[Tg]:i.LESS,[af]:i.LEQUAL,[Cg]:i.EQUAL,[of]:i.GEQUAL,[Rg]:i.GREATER,[Pg]:i.NOTEQUAL};function qe(T,b){if(b.type===li&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===Au||b.magFilter===Yo||b.magFilter===Un||b.minFilter===Bt||b.minFilter===Au||b.minFilter===Yo||b.minFilter===Un)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ce[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ce[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ce[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ve[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ve[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot||b.minFilter!==Yo&&b.minFilter!==Un||b.type===li&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(qe,"setTextureParameters");function je(T,b){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",U),L(b));let fe=b.source,le=m.get(fe);le===void 0&&(le={},m.set(fe,le));let xe=H(b);if(xe!==T.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[xe].usedTimes++;let Me=le[T.__cacheKey];Me!==void 0&&(le[T.__cacheKey].usedTimes--,Me.usedTimes===0&&F(b)),T.__cacheKey=xe,T.__webglTexture=le[xe].texture}return X}l(je,"initTexture");function Xe(T,b,X){return Math.floor(Math.floor(T/X)/b)}l(Xe,"getRow");function gt(T,b,X,fe){let xe=T.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,X,fe,b.data);else{xe.sort((N,he)=>N.start-he.start);let Me=0;for(let N=1;N<xe.length;N++){let he=xe[Me],re=xe[N],ye=he.start+he.count,ge=Xe(re.start,b.width,4),_e=Xe(he.start,b.width,4);re.start<=ye+1&&ge===_e&&Xe(re.start+re.count-1,b.width,4)===ge?he.count=Math.max(he.count,re.start+re.count-he.start):(++Me,xe[Me]=re)}xe.length=Me+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let N=0,he=xe.length;N<he;N++){let re=xe[N],ye=Math.floor(re.start/4),ge=Math.ceil(re.count/4),_e=ye%b.width,Oe=Math.floor(ye/b.width),Je=ge,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Oe,Je,pe,X,fe,b.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(gt,"updateTexture");function xt(T,b,X){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let le=je(T,b),xe=b.source;t.bindTexture(fe,T.__webglTexture,i.TEXTURE0+X);let Me=n.get(xe);if(xe.version!==Me.__version||le===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=st.getPrimaries(st.workingColorSpace),Be=b.colorSpace===ci?null:st.getPrimaries(b.colorSpace),Ze=b.colorSpace===ci||pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ue=S(b.image,!1,s.maxTextureSize);ue=Fe(b,ue);let ve=r.convert(b.format,b.colorSpace),N=r.convert(b.type),he=C(b.internalFormat,ve,N,b.normalized,b.colorSpace,b.isVideoTexture);qe(fe,b);let re,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||le===!0,Oe=xe.dataReady,Je=E(b,ue);if(b.isDepthTexture)he=v(b.format===ls,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,he,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,he,ue.width,ue.height,0,ve,N,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Je,he,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)re=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,re.width,re.height,ve,N,re.data):t.texImage2D(i.TEXTURE_2D,pe,he,re.width,re.height,0,ve,N,re.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,Je,he,ue.width,ue.height),Oe&&gt(b,ue,ve,N)):t.texImage2D(i.TEXTURE_2D,0,he,ue.width,ue.height,0,ve,N,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,he,ye[0].width,ye[0].height,ue.depth);for(let pe=0,Be=ye.length;pe<Be;pe++)if(re=ye[pe],b.format!==On)if(ve!==null)if(ge){if(Oe)if(b.layerUpdates.size>0){let Ze=pf(re.width,re.height,b.format,b.type);for(let Te of b.layerUpdates){let pt=re.data.subarray(Te*Ze/re.data.BYTES_PER_ELEMENT,(Te+1)*Ze/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Te,re.width,re.height,1,ve,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,re.width,re.height,ue.depth,ve,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,he,re.width,re.height,ue.depth,0,re.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,re.width,re.height,ue.depth,ve,N,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,he,re.width,re.height,ue.depth,0,ve,N,re.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Je,he,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)re=ye[pe],b.format!==On?ve!==null?ge?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,he,re.width,re.height,0,re.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,re.width,re.height,ve,N,re.data):t.texImage2D(i.TEXTURE_2D,pe,he,re.width,re.height,0,ve,N,re.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,he,ue.width,ue.height,ue.depth),Oe)if(b.layerUpdates.size>0){let pe=pf(ue.width,ue.height,b.format,b.type);for(let Be of b.layerUpdates){let Ze=ue.data.subarray(Be*pe/ue.data.BYTES_PER_ELEMENT,(Be+1)*pe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ue.width,ue.height,1,ve,N,Ze)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,N,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ue.width,ue.height,ue.depth,0,ve,N,ue.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,Je,he,ue.width,ue.height,ue.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,N,ue.data)):t.texImage3D(i.TEXTURE_3D,0,he,ue.width,ue.height,ue.depth,0,ve,N,ue.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,Je,he,ue.width,ue.height);else{let pe=ue.width,Be=ue.height;for(let Ze=0;Ze<Je;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,he,pe,Be,0,ve,N,null),pe>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ue.parentNode!==pe){pe.appendChild(ue),f.add(b),pe.onpaint=Be=>{let Ze=Be.changedElements;for(let Te of f)Ze.includes(Te.image)&&(Te.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Ze=i.RGBA,Te=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ze,Te,pt,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let pe=ze(ye[0]);t.texStorage2D(i.TEXTURE_2D,Je,he,pe.width,pe.height)}for(let pe=0,Be=ye.length;pe<Be;pe++)re=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve,N,re):t.texImage2D(i.TEXTURE_2D,pe,he,ve,N,re);b.generateMipmaps=!1}else if(ge){if(_e){let pe=ze(ue);t.texStorage2D(i.TEXTURE_2D,Je,he,pe.width,pe.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,N,ue)}else t.texImage2D(i.TEXTURE_2D,0,he,ve,N,ue);A(b)&&b.mipmapsAutoUpdate===!0&&w(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(xt,"uploadTexture");function tt(T,b,X){if(b.image.length!==6)return;let fe=je(T,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+X);let xe=n.get(le);if(le.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+X);let Me=st.getPrimaries(st.workingColorSpace),oe=b.colorSpace===ci?null:st.getPrimaries(b.colorSpace),ue=b.colorSpace===ci||Me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Te=0;Te<6;Te++)!ve&&!N?he[Te]=S(b.image[Te],!0,s.maxCubemapSize):he[Te]=N?b.image[Te].image:b.image[Te],he[Te]=Fe(b,he[Te]);let re=he[0],ye=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),_e=C(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Oe=b.isVideoTexture!==!0,Je=xe.__version===void 0||fe===!0,pe=le.dataReady,Be=E(b,re);qe(i.TEXTURE_CUBE_MAP,b);let Ze;if(b.isDepthTexture){if(_e=v(b.format===ls,b.type),Je)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,re.width,re.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,re.width,re.height,0,ye,ge,null)}else if(ve){Oe&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,re.width,re.height);for(let Te=0;Te<6;Te++){Ze=he[Te].mipmaps;for(let pt=0;pt<Ze.length;pt++){let Xt=Ze[pt];b.format!==On?ye!==null?Oe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,Xt.width,Xt.height,ye,Xt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,_e,Xt.width,Xt.height,0,Xt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,Xt.width,Xt.height,ye,ge,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,_e,Xt.width,Xt.height,0,ye,ge,Xt.data)}}}else{if(Ze=b.mipmaps,Oe&&Je){Ze.length>0&&Be++;let Te=ze(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(N){Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,he[Te].width,he[Te].height,ye,ge,he[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,he[Te].width,he[Te].height,0,ye,ge,he[Te].data);for(let pt=0;pt<Ze.length;pt++){let _s=Ze[pt].image[Te].image;Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,_s.width,_s.height,ye,ge,_s.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,_e,_s.width,_s.height,0,ye,ge,_s.data)}}else{Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,ge,he[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ye,ge,he[Te]);for(let pt=0;pt<Ze.length;pt++){let Xt=Ze[pt];Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,ye,ge,Xt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,_e,ye,ge,Xt.image[Te])}}}A(b)&&b.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),xe.__version=le.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(tt,"uploadCubeTexture");function Qe(T,b,X,fe,le,xe){let Me=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),ue=C(X.internalFormat,Me,oe,X.normalized,X.colorSpace),ve=n.get(b),N=n.get(X);if(N.__renderTarget=b,!ve.__hasExternalTextures){let he=Math.max(1,b.width>>xe),re=Math.max(1,b.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,ue,he,re,b.depth,0,Me,oe,null):t.texImage2D(le,xe,ue,he,re,0,Me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,N.__webglTexture,0,et(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,N.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Qe,"setupFrameBufferTexture");function Dt(T,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let fe=b.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,le),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),xe,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let fe=b.textures;for(let le=0;le<fe.length;le++){let xe=fe[le],Me=r.convert(xe.format,xe.colorSpace),oe=r.convert(xe.type),ue=C(xe.internalFormat,Me,oe,xe.normalized,xe.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),ue,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Dt,"setupRenderBufferStorage");function ft(T,b,X){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(b.depthTexture);le.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!le.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?ce(b.depthTexture,0):ae(b.depthTexture,0);let Me=le.__webglTexture,oe=et(b),ue=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ve=b.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ss)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Me,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Me,0);else if(b.depthTexture.format===ls)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Me,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(ft,"setupDepthTexture");function Et(T){let b=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let fe=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let le=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",le)},"disposeEvent");fe.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=fe}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let fe=0;fe<6;fe++)ft(b.__webglFramebuffer[fe],T,fe);else T.texture.mipmaps.length>0?ft(b.__webglFramebuffer[0],T,0):ft(b.__webglFramebuffer,T,0);else if(X){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Dt(b.__webglDepthbuffer[fe],T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Dt(b.__webglDepthbuffer,T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Et,"setupDepthRenderbuffer");function Lt(T,b,X){let fe=n.get(T);b!==void 0&&Qe(fe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Et(T)}l(Lt,"rebindTextures");function at(T){let b=T.texture,X=n.get(T),fe=n.get(b);T.addEventListener("dispose",G),L(T);let le=T.textures,xe=T.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){X.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0){X.__webglFramebuffer[oe]=[];for(let ue=0;ue<b.mipmaps.length;ue++)X.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else X.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)X.__webglFramebuffer[oe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Me)for(let oe=0,ue=le.length;oe<ue;oe++){let ve=n.get(le[oe]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let oe=0;oe<le.length;oe++){let ue=le[oe];X.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[oe]);let ve=r.convert(ue.format,ue.colorSpace),N=r.convert(ue.type),he=C(ue.internalFormat,ve,N,ue.normalized,ue.colorSpace,T.isXRRenderTarget===!0),re=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,X.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)Qe(X.__webglFramebuffer[oe][ue],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Qe(X.__webglFramebuffer[oe],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(b)?w(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let oe=0,ue=le.length;oe<ue;oe++){let ve=le[oe],N=n.get(ve),he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,N.__webglTexture),qe(he,ve),Qe(X.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+oe,he,0),A(ve)&&w(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,fe.__webglTexture),qe(oe,b),b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)Qe(X.__webglFramebuffer[ue],T,b,i.COLOR_ATTACHMENT0,oe,ue);else Qe(X.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,oe,0);A(b)?w(oe):b.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Et(T)}l(at,"setupRenderTarget");function B(T){let b=T.textures;for(let X=0,fe=b.length;X<fe;X++){let le=b[X];if(A(le)&&le.mipmapsAutoUpdate===!0){let xe=R(T),Me=n.get(le).__webglTexture;t.bindTexture(xe,Me),w(xe),t.unbindTexture()}}}l(B,"updateRenderTargetMipmap");let Pt=[];function ot(T){if(T.samples>0){if(me(T)===!1){let b=T.textures,X=T.width,fe=T.height,le=i.COLOR_BUFFER_BIT,xe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),oe=b.length>1;if(oe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let N=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,X,fe,0,0,X,fe,le,i.NEAREST),c===!0&&(Pt.length=0,Pt.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Pt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let N=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(ot,"updateMultisampleRenderTarget");function et(T){return Math.min(s.maxSamples,T.samples)}l(et,"getRenderTargetSamples");function me(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(me,"useMultisampledRTT");function ut(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}l(ut,"updateVideoTexture");function Fe(T,b){let X=T.colorSpace,fe=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||X!==Eo&&X!==ci&&(st.getTransfer(X)===dt?(fe!==On||le!==on)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",X)),b}l(Fe,"verifyColorSpace");function ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}l(ze,"getDimensions"),this.allocateTextureUnit=se,this.resetTextureUnits=Q,this.getTextureUnits=z,this.setTextureUnits=ie,this.setTexture2D=ae,this.setTexture2DArray=te,this.setTexture3D=de,this.setTextureCube=ce,this.rebindTextures=Lt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=me,this.dispose=Y}l(S1,"WebGLTextures");function w1(i,e){function t(n,s=ci){let r,a=st.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===Cu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jd)return i.BYTE;if(n===Qd)return i.SHORT;if(n===Ra)return i.UNSIGNED_SHORT;if(n===Tu)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===nf)return i.ALPHA;if(n===sf)return i.RGB;if(n===On)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===rf)return i.RED;if(n===Pu)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===Iu)return i.RG_INTEGER;if(n===Lu)return i.RGBA_INTEGER;if(n===$o||n===Zo||n===Jo||n===Ko)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Du||n===Nu||n===Uu||n===Fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ou||n===Bu||n===zu||n===ku||n===Gu||n===jo||n===Vu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ou||n===Bu)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ku)return r.COMPRESSED_R11_EAC;if(n===Gu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return r.COMPRESSED_RG11_EAC;if(n===Vu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hu||n===Wu||n===Xu||n===qu||n===Yu||n===$u||n===Zu||n===Ju||n===Ku||n===ju||n===Qu||n===eh||n===th||n===nh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$u)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ju)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ku)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ju)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===th)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ih||n===sh||n===rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ih)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===oh||n===Qo||n===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ah)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(w1,"WebGLUtils");var E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`,qp=class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:E1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(qp,"WebXRDepthSensing");var Op=qp,Yp=class Yp extends Ti{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,m=null,g=null,y=typeof XRWebGLBinding<"u",x=new Op,_={},S=t.getContextAttributes(),A=null,w=null,R=[],C=[],v=new ke,E=null,L=null,P=new mn;P.viewport=new At;let U=new mn;U.viewport=new At;let G=[P,U],K=new au,D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ae=R[H];return ae===void 0&&(ae=new ya,R[H]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(H){let ae=R[H];return ae===void 0&&(ae=new ya,R[H]=ae),ae.getGripSpace()},this.getHand=function(H){let ae=R[H];return ae===void 0&&(ae=new ya,R[H]=ae),ae.getHandSpace()};function ne(H){let ae=C.indexOf(H.inputSource);if(ae===-1)return;let te=R[ae];te!==void 0&&(te.update(H.inputSource,H.frame,u||a),te.dispatchEvent({type:H.type,data:H.inputSource}))}l(ne,"onSessionEvent");function F(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",j);for(let H=0;H<R.length;H++){let ae=C[H];ae!==null&&(C[H]=null,R[H].disconnect(ae))}D=null,Y=null,x.reset();for(let H in _)delete _[H];if(e.setRenderTarget(A),m=null,d=null,f=null,s=null,w=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),L!==null){let H=L.camera;H.fov=L.fov,H.zoom=L.zoom,H.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}l(F,"onSessionEnd"),this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",F),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,de=null,ce=null;S.depth&&(ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?ls:ss,de=S.stencil?xr:oi);let Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Ln(d.textureWidth,d.textureHeight,{format:On,type:on,depthTexture:new os(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Ln(m.framebufferWidth,m.framebufferHeight,{format:On,type:on,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(H){for(let ae=0;ae<H.removed.length;ae++){let te=H.removed[ae],de=C.indexOf(te);de>=0&&(C[de]=null,R[de].disconnect(te))}for(let ae=0;ae<H.added.length;ae++){let te=H.added[ae],de=C.indexOf(te);if(de===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=C.length){C.push(te),de=Ce;break}else if(C[Ce]===null){C[Ce]=te,de=Ce;break}if(de===-1)break}let ce=R[de];ce&&ce.connect(te)}}l(j,"onInputSourcesChange");function V(H,ae){ae===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ae.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}l(V,"updateCamera"),this.updateCamera=function(H){if(s===null)return;let ae=H.near,te=H.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(te=x.depthFar)),K.near=U.near=P.near=ae,K.far=U.far=P.far=te,(D!==K.near||Y!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),D=K.near,Y=K.far),K.layers.mask=H.layers.mask|6,P.layers.mask=K.layers.mask&-5,U.layers.mask=K.layers.mask&-3;let de=H.parent,ce=K.cameras;V(K,de);for(let Ce=0;Ce<ce.length;Ce++)V(ce[Ce],de);K.projectionMatrix.copy(P.projectionMatrix),K.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&H.isPerspectiveCamera&&(L={camera:H,fov:H.fov,zoom:H.zoom}),Q(H,K,de)};function Q(H,ae,te){te===null?H.matrix.copy(ae.matrixWorld):(H.matrix.copy(te.matrixWorld),H.matrix.invert(),H.matrix.multiply(ae.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=zc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}l(Q,"updateUserCamera"),this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(H){return _[H]};let z=null;function ie(H,ae){if(h=ae.getViewerPose(u||a),g=ae,h!==null){let te=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let de=!1;te.length!==K.cameras.length&&(K.cameras.length=0,de=!0);for(let Ee=0;Ee<te.length;Ee++){let qe=te[Ee],je=null;if(m!==null)je=m.getViewport(qe);else{let gt=f.getViewSubImage(d,qe);je=gt.viewport,Ee===0&&(e.setRenderTargetTextures(w,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(w))}let Xe=G[Ee];Xe===void 0&&(Xe=new mn,Xe.layers.enable(Ee),Xe.viewport=new At,G[Ee]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(je.x,je.y,je.width,je.height),Ee===0&&(K.matrix.copy(Xe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),de===!0&&K.cameras.push(Xe)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ee=f.getDepthInformation(te[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(Ee,s.renderState)}if(ce&&ce.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ee=0;Ee<te.length;Ee++){let qe=te[Ee].camera;if(qe){let je=_[qe];je||(je=new Oo,_[qe]=je);let Xe=f.getCameraImage(qe);je.sourceTexture=Xe}}}}for(let te=0;te<R.length;te++){let de=C[te],ce=R[te];de!==null&&ce!==void 0&&ce.update(de,ae,u||a)}z&&z(H,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}l(ie,"onAnimationFrame");let se=new cx;se.setAnimationLoop(ie),this.setAnimationLoop=function(H){z=H},this.dispose=function(){}}};l(Yp,"WebXRManager");var Bp=Yp,T1=new mt,vx=new We;vx.set(-1,0,0,0,1,0,0,0,1);function C1(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,hf(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function s(x,_,S,A,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),f(x,_)):_.isMeshPhongMaterial?(r(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),d(x,_),_.isMeshPhysicalMaterial&&m(x,_,w)):_.isMeshMatcapMaterial?(r(x,_),g(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),y(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,S,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===yn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===yn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let S=e.get(_),A=S.envMap,w=S.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(vx),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(r,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,S,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*S,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(f,"refreshUniformsToon");function d(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(d,"refreshUniformsStandard");function m(x,_,S){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===yn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let S=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(C1,"WebGLMaterials");function R1(i,e,t,n){let s={},r={};function a(S,A){let w=A.program;n.uniformBlockBinding(S,w,s[S.id])}l(a,"bind");function o(S,A){let w=s[S.id];w===void 0&&(g(S),w=c(S),s[S.id]=w,S.addEventListener("dispose",x));let R=A.program;n.updateUBOMapping(S,R);let C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}l(o,"update");function c(S){let A=i.createBuffer(),w=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(S){let A=s[S.id],w=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=w.length;C<v;C++){let E=w[C];if(Array.isArray(E))for(let L=0,P=E.length;L<P;L++)h(E[L],C,L,R);else h(E,C,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(S,A,w,R){if(d(S,A,w,R)===!0){let C=S.__offset,v=S.value;if(Array.isArray(v)){let E=0;for(let L=0;L<v.length;L++){let P=v[L],U=y(P,!0);f(P,S.__data,E),E+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}l(h,"updateUniform");function f(S,A,w){typeof S=="number"||typeof S=="boolean"?A[w]=S:S.isMatrix3?(A[w]=S.elements[0],A[w+1]=S.elements[1],A[w+2]=S.elements[2],A[w+3]=0,A[w+4]=S.elements[3],A[w+5]=S.elements[4],A[w+6]=S.elements[5],A[w+7]=0,A[w+8]=S.elements[6],A[w+9]=S.elements[7],A[w+10]=S.elements[8],A[w+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-w),w):S.toArray(A,w)}l(f,"writeUniformValue");function d(S,A,w,R){let C=S.value,v=A+"_"+w;if(Array.isArray(C)){R[v]===void 0&&(R[v]=[]);let E=R[v],L=!1;for(let P=0;P<C.length;P++)m(C[P],E,P)===!0&&(L=!0);return L}return m(C,R,v)}l(d,"hasUniformChanged");function m(S,A,w){if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:ArrayBuffer.isView(S)?A[w]=S.slice():A[w]=S.clone(),!0;{let R=A[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return A[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}l(m,"hasValueChanged");function g(S){let A=S.uniforms,w=0,R=16;for(let v=0,E=A.length;v<E;v++){let L=Array.isArray(A[v])?A[v]:[A[v]];for(let P=0,U=L.length;P<U;P++){let G=L[P],K=Array.isArray(G.value)?G.value:[G.value],D=Array.isArray(A[v])||Array.isArray(G.value),Y=w;for(let F=0,j=K.length;F<j;F++){let V=K[F],Q=y(V,D),z=w%R,ie=z%Q.boundary,se=z+ie;w+=ie,se!==0&&R-se<Q.storage&&(w+=R-se),F===0&&(Y=w),w+=Q.storage}let ne=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new ne((w-Y)/Float32Array.BYTES_PER_ELEMENT),G.__offset=Y}}let C=w%R;return C>0&&(w+=R-C),S.__size=w,S.__cache={},this}l(g,"prepareUniformsGroup");function y(S,A){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=16,w.storage=48):S.isMatrix4?(w.boundary=16,w.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}l(y,"getUniformSize");function x(S){let A=S.target;A.removeEventListener("dispose",x),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(R1,"WebGLUniformsGroups");var P1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function I1(){return Oi===null&&(Oi=new wa(P1,16,16,Fi,Fn),Oi.name="DFG_LUT",Oi.minFilter=Bt,Oi.magFilter=Bt,Oi.wrapS=Jn,Oi.wrapT=Jn,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}l(I1,"getDFGLUT");var $p=class $p{constructor(e={}){let{canvas:t=Ig(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=on}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,x=new Set([Lu,Iu,Pu]),_=new Set([on,oi,Ra,xr,Cu,Ru]),S=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},R=null,C=null,v=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,G=null,K=null,D=null,Y=null;this._outputColorSpace=Ft;let ne=0,F=0,j=null,V=-1,Q=null,z=new At,ie=new At,se=null,H=new Ue(0),ae=0,te=t.width,de=t.height,ce=1,Ce=null,Ve=null,Ee=new At(0,0,te,de),qe=new At(0,0,te,de),je=!1,Xe=new Is,gt=new Xc,xt=!1,tt=!1,Qe=new mt,Dt=new W,ft=new At,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function at(){return j===null?ce:1}l(at,"getTargetPixelRatio");let B=n;function Pt(M,O){return t.getContext(M,O)}l(Pt,"getContext");let ot,et,me,ut,Fe,ze,T,b,X,fe,le,xe,Me,oe,ue,ve,N,he,re,ye,ge,_e,Oe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){let O="webgl2";if(B=Pt(O,M),B===null)throw Pt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He("WebGLRenderer: "+M.message),M}function Je(){ot=new VS(B),ot.init(),ge=new w1(B,ot),et=new IS(B,ot,e,ge),me=new M1(B,ot),et.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),K=B.createFramebuffer(),D=B.createFramebuffer(),Y=B.createFramebuffer(),ut=new XS(B),Fe=new l1,ze=new S1(B,ot,me,Fe,et,ge,ut),T=new GS(P),b=new Yy(B),_e=new RS(B,b),X=new HS(B,b,ut,_e),fe=new YS(B,X,b,_e,ut),he=new qS(B,et,ze),ue=new LS(Fe),le=new o1(P,T,ot,et,_e,ue),xe=new C1(P,Fe),Me=new u1,oe=new g1(ot),N=new CS(P,T,me,fe,g,c),ve=new b1(P,fe,et),Oe=new R1(B,ut,et,me),re=new PS(B,ot,ut),ye=new WS(B,ot,ut),ut.programs=le.programs,P.capabilities=et,P.extensions=ot,P.properties=Fe,P.renderLists=Me,P.shadowMap=ve,P.state=me,P.info=ut}l(Je,"initGLContext"),y!==on&&(L=new ZS(y,t.width,t.height,o,s,r));let pe=new Bp(P,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(te,de,!1))},this.getSize=function(M){return M.set(te,de)},this.setSize=function(M,O,ee=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,de=O,t.width=Math.floor(M*ce),t.height=Math.floor(O*ce),ee===!0&&(t.style.width=M+"px",t.style.height=O+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(te*ce,de*ce).floor()},this.setDrawingBufferSize=function(M,O,ee){te=M,de=O,ce=ee,t.width=Math.floor(M*ee),t.height=Math.floor(O*ee),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(y===on){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,O,ee,$){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,O,ee,$),me.viewport(z.copy(Ee).multiplyScalar(at()).round())},this.getScissor=function(M){return M.copy(qe)},this.setScissor=function(M,O,ee,$){M.isVector4?qe.set(M.x,M.y,M.z,M.w):qe.set(M,O,ee,$),me.scissor(ie.copy(qe).multiplyScalar(at()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){me.setScissorTest(je=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){Ve=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,ee=!0){let $=0;if(M){let J=!1;if(j!==null){let Se=j.texture.format;J=x.has(Se)}if(J){let Se=j.texture.type,Ie=_.has(Se),be=N.getClearColor(),Re=N.getClearAlpha(),Ne=be.r,Ye=be.g,nt=be.b;Ie?(S[0]=Ne,S[1]=Ye,S[2]=nt,S[3]=Re,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=Ne,A[1]=Ye,A[2]=nt,A[3]=Re,B.clearBufferiv(B.COLOR,0,A))}else $|=B.COLOR_BUFFER_BIT}O&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),N.dispose(),Me.dispose(),oe.dispose(),ze.dispose(),Fe.dispose(),T.dispose(),fe.dispose(),X.dispose(),_e.dispose(),Oe.dispose(),le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",d0),pe.removeEventListener("sessionend",f0),sr.stop()};function Be(M){M.preventDefault(),Co("WebGLRenderer: Context Lost."),U=!0}l(Be,"onContextLost");function Ze(){Co("WebGLRenderer: Context Restored."),U=!1;let M=ut.autoReset,O=ve.enabled,ee=ve.autoUpdate,$=ve.needsUpdate,J=ve.type;Je(),ut.autoReset=M,ve.enabled=O,ve.autoUpdate=ee,ve.needsUpdate=$,ve.type=J}l(Ze,"onContextRestore");function Te(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Te,"onContextCreationError");function pt(M){let O=M.target;O.removeEventListener("dispose",pt),Xt(O)}l(pt,"onMaterialDispose");function Xt(M){_s(M),Fe.remove(M)}l(Xt,"deallocateMaterial");function _s(M){let O=Fe.get(M).programs;O!==void 0&&(O.forEach(function(ee){le.releaseProgram(ee)}),M.isShaderMaterial&&le.releaseShaderCache(M))}l(_s,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,O,ee,$,J,Se){O===null&&(O=Et);let Ie=J.isMesh&&J.matrixWorld.determinantAffine()<0,be=qv(M,O,ee,$,J);me.setMaterial($,Ie);let Re=ee.index,Ne=1;if($.wireframe===!0){if(Re=X.getWireframeAttribute(ee),Re===void 0)return;Ne=2}let Ye=ee.drawRange,nt=ee.attributes.position,Le=Ye.start*Ne,it=(Ye.start+Ye.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),it=Math.min(it,(Se.start+Se.count)*Ne)),Re!==null?(Le=Math.max(Le,0),it=Math.min(it,Re.count)):nt!=null&&(Le=Math.max(Le,0),it=Math.min(it,nt.count));let Nt=it-Le;if(Nt<0||Nt===1/0)return;_e.setup(J,$,be,ee,Re);let bt,_t=re;if(Re!==null&&(bt=b.get(Re),_t=ye,_t.setIndex(bt)),J.isMesh)$.wireframe===!0?(me.setLineWidth($.wireframeLinewidth*at()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(J.isLine){let nn=$.linewidth;nn===void 0&&(nn=1),me.setLineWidth(nn*at()),J.isLineSegments?_t.setMode(B.LINES):J.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else J.isPoints?_t.setMode(B.POINTS):J.isSprite&&_t.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))_t.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let nn=J._multiDrawStarts,De=J._multiDrawCounts,fn=J._multiDrawCount,ht=Re?b.get(Re).bytesPerElement:1,rr=Fe.get($).currentProgram.getUniforms();for(let sn=0;sn<fn;sn++)rr.setValue(B,"_gl_DrawID",sn),_t.render(nn[sn]/ht,De[sn])}else if(J.isInstancedMesh)_t.renderInstances(Le,Nt,J.count);else if(ee.isInstancedBufferGeometry){let nn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,De=Math.min(ee.instanceCount,nn);_t.renderInstances(Le,Nt,De)}else _t.render(Le,Nt)};function h0(M,O,ee,$){G!==null&&M.isNodeMaterial&&G.setObject($,M),xt===!0&&ue.setState(M,ee,!1),M.transparent===!0&&M.side===Ni&&M.forceSinglePass===!1?(M.side=yn,M.needsUpdate=!0,po(M,O,$),M.side=Bs,M.needsUpdate=!0,po(M,O,$),M.side=Ni):po(M,O,$)}l(h0,"prepareMaterial"),this.compile=function(M,O,ee=null){ee===null&&(ee=M),G!==null&&G.renderStart(M,O,ee),C=oe.get(ee),C.init(O),E.push(C),ee.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),M!==ee&&M.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights(),G!==null&&G.updateLights(C.state.lightsArray),tt=this.localClippingEnabled,xt=ue.init(this.clippingPlanes,tt),xt===!0&&ue.setGlobalState(this.clippingPlanes,O),G!==null&&ve.render(C.state.shadowsArray,ee,O);let $=new Set;return M.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Se=J.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];h0(be,ee,O,J),$.add(be)}else h0(Se,ee,O,J),$.add(Se)}),C=E.pop(),G!==null&&G.renderEnd(),$},this.compileAsync=function(M,O,ee=null){let $=this.compile(M,O,ee);return new Promise(J=>{function Se(){if($.forEach(function(Ie){let Re=Fe.get(Ie).currentProgram;(Re===void 0||Re.isReady())&&$.delete(Ie)}),$.size===0){J(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),ot.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let td=null;function Wv(M){td&&td(M)}l(Wv,"onAnimationFrame");function d0(){sr.stop()}l(d0,"onXRSessionStart");function f0(){sr.start()}l(f0,"onXRSessionEnd");let sr=new cx;sr.setAnimationLoop(Wv),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(M){td=M,pe.setAnimationLoop(M),M===null?sr.stop():sr.start()},pe.addEventListener("sessionstart",d0),pe.addEventListener("sessionend",f0),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(M,O);let ee=pe.enabled===!0&&pe.isPresenting===!0,$=L!==null&&(j===null||ee)&&L.begin(P,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,O,j),C=oe.get(M,E.length),C.init(O),C.state.textureUnits=ze.getTextureUnits(),E.push(C),Qe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?gt.setFromArrayCamera(O):Xe.setFromProjectionMatrix(Qe,Kn,O.reversedDepth),tt=this.localClippingEnabled,xt=ue.init(this.clippingPlanes,tt),R=Me.get(M,v.length),R.init(),v.push(R),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&nd(Ie,O,-1/0,P.sortObjects)}nd(M,O,0,P.sortObjects),R.finish(),G!==null&&G.updateLights(C.state.lightsArray),P.sortObjects===!0&&R.sort(Ce,Ve),Lt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Lt&&N.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),xt===!0&&ue.beginShadows();let J=C.state.shadowsArray;if(ve.render(J,M,O),xt===!0&&ue.endShadows(),($&&L.hasRenderPass())===!1){let Ie=R.opaque,be=R.transmissive;if(C.setupLights(),O.isArrayCamera){let Re=O.cameras;if(be.length>0)for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++){let nt=Re[Ne];m0(Ie,be,M,nt)}Lt&&N.render(M);for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++){let nt=Re[Ne];p0(R,M,nt,nt.viewport)}}else be.length>0&&m0(Ie,be,M,O),Lt&&N.render(M),p0(R,M,O)}j!==null&&F===0&&(ze.updateMultisampleRenderTarget(j),ze.updateRenderTargetMipmap(j)),$&&L.end(P),M.isScene===!0&&M.onAfterRender(P,M,O),_e.resetDefaultState(),V=-1,Q=null,E.pop(),E.length>0?(C=E[E.length-1],ze.setTextureUnits(C.state.textureUnits),xt===!0&&ue.setGlobalState(P.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,G!==null&&G.renderEnd()};function nd(M,O,ee,$){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){let Ie=O.isArrayCamera?gt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){$&&ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Qe);let be=fe.update(M),Re=M.material;Re.visible&&R.push(M,be,Re,ee,ft.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=O.isArrayCamera?gt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Re=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ft.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ft.copy(be.boundingSphere.center)),ft.applyMatrix4(M.matrixWorld).applyMatrix4(Qe)),Array.isArray(Re)){let Ne=be.groups;for(let Ye=0,nt=Ne.length;Ye<nt;Ye++){let Le=Ne[Ye],it=Re[Le.materialIndex];it&&it.visible&&R.push(M,be,it,ee,ft.z,Le,O)}}else Re.visible&&R.push(M,be,Re,ee,ft.z,null,O)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)nd(Se[Ie],O,ee,$)}l(nd,"projectObject");function p0(M,O,ee,$){let{opaque:J,transmissive:Se,transparent:Ie}=M;C.setupLightsView(ee),xt===!0&&ue.setGlobalState(P.clippingPlanes,ee),$&&me.viewport(z.copy($)),J.length>0&&nc(J,O,ee),Se.length>0&&nc(Se,O,ee),Ie.length>0&&nc(Ie,O,ee),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}l(p0,"renderScene");function m0(M,O,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){let Le=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Ln(1,1,{generateMipmaps:!0,type:Le?Fn:on,minFilter:Un,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Se=C.state.transmissionRenderTarget[$.id],Ie=$.viewport||z;Se.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let be=P.getRenderTarget(),Re=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(H),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),Lt&&N.render(ee);let Ye=P.toneMapping;P.toneMapping=Ui;let nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),xt===!0&&ue.setGlobalState(P.clippingPlanes,$),nc(M,ee,$),ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,Nt=O.length;it<Nt;it++){let bt=O[it],{object:_t,geometry:nn,material:De,group:fn}=bt;if(De.side===Ni&&_t.layers.test($.layers)){let ht=De.side;De.side=yn,De.needsUpdate=!0,g0(_t,ee,$,nn,De,fn),De.side=ht,De.needsUpdate=!0,Le=!0}}Le===!0&&(ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se))}P.setRenderTarget(be,Re,Ne),P.setClearColor(H,ae),nt!==void 0&&($.viewport=nt),P.toneMapping=Ye}l(m0,"renderTransmissionPass");function nc(M,O,ee){let $=O.isScene===!0?O.overrideMaterial:null;for(let J=0,Se=M.length;J<Se;J++){let Ie=M[J],{object:be,geometry:Re,group:Ne}=Ie,Ye=Ie.material;Ye.allowOverride===!0&&$!==null&&(Ye=$),be.layers.test(ee.layers)&&g0(be,O,ee,Re,Ye,Ne)}}l(nc,"renderObjects");function g0(M,O,ee,$,J,Se){G!==null&&J.isNodeMaterial&&G.setObject(M,J),M.onBeforeRender(P,O,ee,$,J,Se),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),J.onBeforeRender(P,O,ee,$,M,Se),J.transparent===!0&&J.side===Ni&&J.forceSinglePass===!1?(J.side=yn,J.needsUpdate=!0,P.renderBufferDirect(ee,O,$,J,M,Se),J.side=Bs,J.needsUpdate=!0,P.renderBufferDirect(ee,O,$,J,M,Se),J.side=Ni):P.renderBufferDirect(ee,O,$,J,M,Se),M.onAfterRender(P,O,ee,$,J,Se)}l(g0,"renderObject");function x0(M){let O=0;for(let ee of M)ee.texture!==null&&O++;return O}l(x0,"countLightProbeGrids");function po(M,O,ee){O.isScene!==!0&&(O=Et);let $=Fe.get(M),J=C.state.lights,Se=C.state.shadowsArray,Ie=J.state.version,be=le.getParameters(M,J.state,Se,O,ee,C.state.lightProbeGridArray),Re=le.getProgramCacheKey(be),Ne=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,$.fog=O.fog;let Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=T.get(M.envMap||$.environment,Ye),$.envMapRotation=$.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",pt),Ne=new Map,$.programs=Ne,$.programVariants=new Map);let nt=Ne.get(Re);if(nt!==void 0){if($.currentProgram===nt&&$.lightsStateVersion===Ie)return v0(M,be),nt}else be.uniforms=le.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,ee,be),M.onBeforeCompile(be,P),nt=le.acquireProgram(be,Re),Ne.set(Re,nt),$.uniforms=be.uniforms;let Le=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ue.uniform),v0(M,be),$.needsLights=$v(M),$.lightsStateVersion=Ie,$.needsLights&&(Le.ambientLightColor.value=J.state.ambient,Le.lightProbe.value=J.state.probe,Le.sunLights.value=J.state.sun,Le.sunLightShadows.value=J.state.sunShadow,Le.directionalLights.value=J.state.directional,Le.directionalLightShadows.value=J.state.directionalShadow,Le.spotLights.value=J.state.spot,Le.spotLightShadows.value=J.state.spotShadow,Le.rectAreaLights.value=J.state.rectArea,Le.ltc_1.value=J.state.rectAreaLTC1,Le.ltc_2.value=J.state.rectAreaLTC2,Le.pointLights.value=J.state.point,Le.pointLightShadows.value=J.state.pointShadow,Le.hemisphereLights.value=J.state.hemi,Le.sunShadowMatrix.value=J.state.sunShadowMatrix,Le.sunShadowCascade.value=J.state.sunShadowCascade,Le.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Le.spotLightMatrix.value=J.state.spotLightMatrix,Le.spotLightMap.value=J.state.spotLightMap,Le.pointShadowMatrix.value=J.state.pointShadowMatrix),$.numLightProbeGrids=x0(C.state.lightProbeGridArray),$.currentProgram=nt,$.uniformsList=null,nt}l(po,"getProgram");function Xv(M,O,ee,$,J){let Se=Fe.get(M),Ie=Se.currentProgram.id+","+$+","+J,be=Se.programVariants.get(Ie);return be===void 0?(be=po(M,O,ee),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=$,Se.toneMapping=J),be}l(Xv,"getProgramVariant");function _0(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Pa.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}l(_0,"getUniformList");function v0(M,O){let ee=Fe.get(M);ee.outputColorSpace=O.outputColorSpace,ee.batching=O.batching,ee.batchingColor=O.batchingColor,ee.instancing=O.instancing,ee.instancingColor=O.instancingColor,ee.instancingMorph=O.instancingMorph,ee.skinning=O.skinning,ee.morphTargets=O.morphTargets,ee.morphNormals=O.morphNormals,ee.morphColors=O.morphColors,ee.morphTargetsCount=O.morphTargetsCount,ee.numClippingPlanes=O.numClippingPlanes,ee.numIntersection=O.numClipIntersection,ee.vertexAlphas=O.vertexAlphas,ee.vertexTangents=O.vertexTangents,ee.toneMapping=O.toneMapping}l(v0,"updateCommonMaterialProperties");function qv(M,O,ee,$,J){O.isScene!==!0&&(O=Et),ze.resetTextureUnits();let Se=O.fog,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?O.environment:null,be=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:st.workingColorSpace,Re=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ne=T.get($.envMap||Ie,Re),Ye=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!ee.morphAttributes.position,it=!!ee.morphAttributes.normal,Nt=!!ee.morphAttributes.color,bt=Ui;$.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(bt=P.toneMapping);let _t=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,nn=_t!==void 0?_t.length:0,De=Fe.get($),fn=C.state.lights;if(xt===!0&&(tt===!0||M!==Q)){let Rt=M===Q&&$.id===V;ue.setState($,M,Rt)}let ht=!1,rr=!1;$.version===De.__version?De.needsLights&&De.lightsStateVersion!==fn.state.version||J.isBatchedMesh&&De.batching===!1||!J.isBatchedMesh&&De.batching===!0||J.isBatchedMesh&&De.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&De.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&De.instancing===!1||!J.isInstancedMesh&&De.instancing===!0||J.isSkinnedMesh&&De.skinning===!1||!J.isSkinnedMesh&&De.skinning===!0||J.isInstancedMesh&&De.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&De.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&De.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&De.instancingMorph===!1&&J.morphTexture!==null||De.envMap!==Ne||$.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==Ye||De.vertexTangents!==nt||De.morphTargets!==Le||De.morphNormals!==it||De.morphColors!==Nt||De.morphTargetsCount!==nn||De.numLightProbeGrids!==x0(C.state.lightProbeGridArray)?ht=!0:(De.outputColorSpace!==be||De.toneMapping!==bt)&&(rr=!0):(ht=!0,De.__version=$.version);let sn=De.currentProgram;(ht===!0||rr===!0)&&(sn=rr===!0?Xv($,O,J,be,bt):po($,O,J),G&&$.isNodeMaterial&&G.onUpdateProgram($,sn,De));let ic=!1,vs=!1,ar=!1,ct=sn.getUniforms(),Jt=De.uniforms;if(me.useProgram(sn.program)&&(ic=!0,vs=!0,ar=!0),$.id!==V&&(V=$.id,vs=!0),ic||Q!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(B,"projectionMatrix",M.projectionMatrix),ct.setValue(B,"viewMatrix",M.matrixWorldInverse);let qt=ct.map.cameraPosition;qt!==void 0&&qt.setValue(B,Dt.setFromMatrixPosition(M.matrixWorld)),et.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ct.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,vs=!0,ar=!0)}if(De.needsLights&&(fn.state.sunShadowMap.length>0&&ct.setValue(B,"sunShadowMap",fn.state.sunShadowMap,ze),fn.state.directionalShadowMap.length>0&&ct.setValue(B,"directionalShadowMap",fn.state.directionalShadowMap,ze),fn.state.spotShadowMap.length>0&&ct.setValue(B,"spotShadowMap",fn.state.spotShadowMap,ze),fn.state.pointShadowMap.length>0&&ct.setValue(B,"pointShadowMap",fn.state.pointShadowMap,ze)),J.isSkinnedMesh){ct.setOptional(B,J,"bindMatrix"),ct.setOptional(B,J,"bindMatrixInverse");let Rt=J.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(B,"boneTexture",Rt.boneTexture,ze))}J.isBatchedMesh&&(ct.setOptional(B,J,"batchingTexture"),ct.setValue(B,"batchingTexture",J._matricesTexture,ze),ct.setOptional(B,J,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",J._indirectTexture,ze),ct.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",J._colorsTexture,ze));let ii=ee.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&he.update(J,ee,sn),(vs||De.receiveShadow!==J.receiveShadow)&&(De.receiveShadow=J.receiveShadow,ct.setValue(B,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&O.environment!==null&&(Jt.envMapIntensity.value=O.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=I1()),vs){if(ct.setValue(B,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&Yv(Jt,ar),Se&&$.fog===!0&&xe.refreshFogUniforms(Jt,Se),xe.refreshMaterialUniforms(Jt,$,ce,de,C.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Rt=w,qt=0;for(let Zi of C.state.lightProbeGridArray)Zi.texture!==null&&(Rt.textures[qt]=Zi.texture,Rt.min[qt]=Zi.boundingBox.min,Rt.max[qt]=Zi.boundingBox.max,Rt.resolution[qt]=Zi.resolution,qt++);for(let Zi in Rt)Rt[Zi].length=qt;Jt.probesSH.value=Rt.textures,Jt.probesMin.value=Rt.min,Jt.probesMax.value=Rt.max,Jt.probesResolution.value=Rt.resolution}Pa.upload(B,_0(De),Jt,ze)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pa.upload(B,_0(De),Jt,ze),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ct.setValue(B,"center",J.center),ct.setValue(B,"modelViewMatrix",J.modelViewMatrix),ct.setValue(B,"normalMatrix",J.normalMatrix),ct.setValue(B,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let Rt=$.uniformsGroups;for(let qt=0,Zi=Rt.length;qt<Zi;qt++){let b0=Rt[qt];Oe.update(b0,sn),Oe.bind(b0,sn)}}return sn}l(qv,"setProgram");function Yv(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}l(Yv,"markUniformsLightsNeedsUpdate");function $v(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l($v,"materialNeedsLights"),this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,O,ee){let $=Fe.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Fe.get(M.texture).__webglTexture=O,Fe.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let ee=Fe.get(M);ee.__webglFramebuffer=O,ee.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,ee=0){j=M,ne=O,F=ee;let $=null,J=!1,Se=!1;if(M){let be=Fe.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),z.copy(M.viewport),ie.copy(M.scissor),se=M.scissorTest,me.viewport(z),me.scissor(ie),me.setScissorTest(se),V=-1;return}else if(be.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(be.__hasExternalTextures)ze.rebindTextures(M,Fe.get(M.texture).__webglTexture,Fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ye=M.depthTexture;if(be.__boundDepthTexture!==Ye){if(Ye!==null&&Fe.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}let Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let Ne=Fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?$=Ne[O][ee]:$=Ne[O],J=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?$=Fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[ee]:$=Ne,z.copy(M.viewport),ie.copy(M.scissor),se=M.scissorTest}else z.copy(Ee).multiplyScalar(ce).floor(),ie.copy(qe).multiplyScalar(ce).floor(),se=je;if(ee!==0&&($=K),me.bindFramebuffer(B.FRAMEBUFFER,$)&&me.drawBuffers(M,$),me.viewport(z),me.scissor(ie),me.setScissorTest(se),J){let be=Fe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,ee)}else if(Se){let be=O;for(let Re=0;Re<M.textures.length;Re++){let Ne=Fe.get(M.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,ee,be)}}else if(M!==null&&ee!==0){let be=Fe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,ee)}V=-1};function y0(M){let O=Fe.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=et.textureFormatReadable(M.format),O.__typeReadable=et.textureTypeReadable(M.type)),O}l(y0,"getReadableState"),this.readRenderTargetPixels=function(M,O,ee,$,J,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re){me.bindFramebuffer(B.FRAMEBUFFER,Re);try{let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=y0(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-$&&ee>=0&&ee<=M.height-J&&B.readPixels(O,ee,$,J,ge.convert(Ye),ge.convert(nt),Se)}finally{let Ne=j!==null?Fe.get(j).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,O,ee,$,J,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re)if(O>=0&&O<=M.width-$&&ee>=0&&ee<=M.height-J){me.bindFramebuffer(B.FRAMEBUFFER,Re);let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=y0(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(O,ee,$,J,ge.convert(Ye),ge.convert(nt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Nt=j!==null?Fe.get(j).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Nt);let bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Dg(B,bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(it),B.deleteSync(bt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,ee=0){let $=Math.pow(2,-ee),J=Math.floor(M.image.width*$),Se=Math.floor(M.image.height*$),Ie=O!==null?O.x:0,be=O!==null?O.y:0;ze.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ie,be,J,Se),me.unbindTexture()},this.copyTextureToTexture=function(M,O,ee=null,$=null,J=0,Se=0){let Ie,be,Re,Ne,Ye,nt,Le,it,Nt,bt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(ee!==null)Ie=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Re=ee.isBox3?ee.max.z-ee.min.z:1,Ne=ee.min.x,Ye=ee.min.y,nt=ee.isBox3?ee.min.z:0;else{let ct=Math.pow(2,-J);Ie=Math.floor(bt.width*ct),be=Math.floor(bt.height*ct),M.isDataArrayTexture?Re=bt.depth:M.isData3DTexture?Re=Math.floor(bt.depth*ct):Re=1,Ne=0,Ye=0,nt=0}$!==null?(Le=$.x,it=$.y,Nt=$.z):(Le=0,it=0,Nt=0);let _t=ge.convert(O.format),nn=ge.convert(O.type),De;O.isData3DTexture?(ze.setTexture3D(O,0),De=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ze.setTexture2DArray(O,0),De=B.TEXTURE_2D_ARRAY):(ze.setTexture2D(O,0),De=B.TEXTURE_2D),me.activeTexture(B.TEXTURE0),me.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),me.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),me.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let fn=me.getParameter(B.UNPACK_ROW_LENGTH),ht=me.getParameter(B.UNPACK_IMAGE_HEIGHT),rr=me.getParameter(B.UNPACK_SKIP_PIXELS),sn=me.getParameter(B.UNPACK_SKIP_ROWS),ic=me.getParameter(B.UNPACK_SKIP_IMAGES);me.pixelStorei(B.UNPACK_ROW_LENGTH,bt.width),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt.height),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),me.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);let vs=M.isDataArrayTexture||M.isData3DTexture,ar=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ct=Fe.get(M),Jt=Fe.get(O),ii=Fe.get(ct.__renderTarget),Rt=Fe.get(Jt.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,ii.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let qt=0;qt<Re;qt++)vs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(M).__webglTexture,J,nt+qt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(O).__webglTexture,Se,Nt+qt)),B.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,B.DEPTH_BUFFER_BIT,B.NEAREST);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||M.isRenderTargetTexture||Fe.has(M)){let ct=Fe.get(M),Jt=Fe.get(O);me.bindFramebuffer(B.READ_FRAMEBUFFER,D),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let ii=0;ii<Re;ii++)vs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ct.__webglTexture,J,nt+ii):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ct.__webglTexture,J),ar?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,Se,Nt+ii):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,Se),J!==0?B.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,B.COLOR_BUFFER_BIT,B.NEAREST):ar?B.copyTexSubImage3D(De,Se,Le,it,Nt+ii,Ne,Ye,Ie,be):B.copyTexSubImage2D(De,Se,Le,it,Ne,Ye,Ie,be);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ar?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,nn,bt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,bt.data):B.texSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,nn,bt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,Le,it,Ie,be,_t,nn,bt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,Le,it,bt.width,bt.height,_t,bt.data):B.texSubImage2D(B.TEXTURE_2D,Se,Le,it,Ie,be,_t,nn,bt);me.pixelStorei(B.UNPACK_ROW_LENGTH,fn),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),me.pixelStorei(B.UNPACK_SKIP_PIXELS,rr),me.pixelStorei(B.UNPACK_SKIP_ROWS,sn),me.pixelStorei(B.UNPACK_SKIP_IMAGES,ic),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(M){Fe.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){ne=0,F=0,j=null,me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};l($p,"WebGLRenderer");var ph=$p;var En=["grass","plains","sand","rock","snow","forest","mud","tundra"],zi={shore:-.03,deep:-.15,reach:3},_h={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},bx={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},yx={Ocean:{relief:{base:zi.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:bx,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},br=l(i=>i==="Unknown"?_h:(Object.prototype.hasOwnProperty.call(yx,i)?yx[i]:void 0)??bx,"terrainEntry");var L1=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),Mx=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),Sx=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),ki=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,f,d,m)=>{let g=Math.floor(L1(h,f,t)*16)*2;return(Mx[g]??0)*d+(Mx[g+1]??0)*m},"slope");return(h,f)=>{let d=h/s,m=f/a,g=Math.floor(d),y=Math.floor(m),x=d-g,_=m-y,S=Sx(x),A=Sx(_),w=o(g),R=o(g+1),C=c(y),v=c(y+1),E=u(w,C,x,_)+(u(R,C,x-1,_)-u(w,C,x,_))*S,L=u(w,v,x,_-1)+(u(R,v,x-1,_-1)-u(w,v,x,_-1))*S;return Math.max(-1,Math.min(1,(E+(L-E)*A)*1.4))}},"periodicNoise"),Bn=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var zs=128,bh=.5,vh=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),D1={grass:{grain:l(({noise:i})=>Bn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>Bn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>Bn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>Bn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),s=i(64,9),r=i(32,10);return(a,o)=>.7*n(a+t(6)*s(a,o),o)+.3*r(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),s=i(64,9);return(r,a)=>n(r+t(6)*s(r,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>Bn([vh(i(24,11)),vh(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>Bn([vh(i(24,11)),vh(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>Bn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>Bn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>Bn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},yh=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),N1=l((i=zs,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*En.length),s={u:i,v:i};return En.forEach((r,a)=>{let o=D1[r],c=l((A,w)=>ki({cell:A*i/zs,period:s,seed:7919*(a+1)+w}),"noise"),u=l((A,w)=>(R,C)=>Math.sin(2*Math.PI*(A*R+w*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/zs,"texels")},f=o.grain(h),d=o.bumps(h),m=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++)g[A*i+w]=d(w+e,A+t);let y=l((A,w)=>g[(w+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let w=0;w<i;w++)x[A*i+w]=f(w+e,A+t),_+=x[A*i+w]??0;let S=_/(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++){let R=m+(A*i+w)*4,C=(x[A*i+w]??0)-S,v=(y(w+1,A)-y(w-1,A))/2*(i/zs),E=(y(w,A+1)-y(w,A-1))/2*(i/zs);n[R]=yh(o.shade*C+.5),n[R+1]=yh((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[R+2]=yh((1-Math.max(-1,Math.min(1,E*o.steep)))/2),n[R+3]=yh(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),wx=N1;var ui={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var hi=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),Ex=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${hi(ui.rockTo)}, ${hi(ui.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${hi(ui.snowAtEquator)} + (${hi(ui.snowAtPoles)} - ${hi(ui.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${hi(ui.snowDeepens)}, height) * smoothstep(${hi(ui.snowSlips)}, ${hi(ui.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${hi(ui.wetFrom)}, ${hi(ui.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${hi(ui.wetUpTo)}, height));
}
`;var U1=l(i=>[i.u/Math.max(1,Math.round(i.u/bh)),i.v===null?bh:i.v/Math.max(1,Math.round(i.v/bh))],"surfaceTile"),F1=En.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),O1=null,B1=l(()=>O1??=wx(),"made"),z1=l((i,e)=>{let t=new fr(B1(),zs,zs,En.length),n=new Di({roughness:.92,vertexColors:!0}),[s,r]=U1(i);return t.format=On,t.type=on,t.wrapS=Ai,t.wrapT=Ai,t.magFilter=Bt,t.minFilter=Un,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=ci,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new ke(s,r)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Ue(br("Mountains").colour)},a.uniforms.snowColour={value:new Ue(br("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${Ex}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${F1}
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
  surface = mix(surface, surface${En.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${En.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),Ax=z1;function Cx(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new zt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Tx(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][d]);let g=Tx(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(Cx,"mergeGeometries");function Tx(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new vt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(Tx,"mergeAttributes");var Rx="#c79a72",k1="#5a4a3a";var cn="#7a5532",Kp="#5f6266",Px="#8a8f96",di="#5d6447",Zp="#e8e0cc",Dx="#6e4b2f",Mr="#8a8580",Ix="#5b3e27",La="#7d858c",G1=new W(0,1,0),Ae=new Ri(1,1,1),$t=new Pi(.5,.5,1,10),Sr=new Ii(.5,1,10),Da=new Ds(.5,10,8),em=class em{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(em,"Parts");var Zt=em,V1=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:Da,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Sr,colour:Kp,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ae,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:$t,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Da,colour:di,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),H1=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:$t,colour:cn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:$t,colour:cn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Sr,colour:Kp,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:$t,colour:cn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Sr,colour:Px,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ae,colour:Px,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ae,colour:cn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:$t,colour:cn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ae,colour:i==="rifle"?"#3a3a3a":cn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ae,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ae,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:$t,colour:cn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:$t,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),W1={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},jp=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Zt,a=s===void 0?void 0:W1[s],o=a?.coat??(i==="modern"?di:t[0]),c=a?.legs??(i==="ancient"?Rx:i==="modern"?di:k1);return n&&(r.add({shape:Ae,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Ae,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Ae,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Ae,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Ae,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Ae,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Da,colour:Rx,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:Da,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:Da,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):V1(i,t,r),s==="parachute"&&r.add({shape:Ae,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),H1(e,i,t,r),r},"person"),Lx=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Jp=l((i=Dx)=>new Zt().add({shape:Ae,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ae,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ae,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ae,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),X1=l((i,e,t)=>new Zt().addAll(Jp(),[0,0,0]).add({shape:Ae,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(jp(i,e,t,{legs:!1}),[0,.04,0]),"rider"),q1=l(i=>new Zt().add({shape:Ae,colour:Mr,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ae,colour:Mr,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:$t,colour:Mr,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ae,colour:Mr,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:Mr,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:Mr,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:Mr,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ae,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),un=l((i,e=.05)=>({shape:$t,colour:cn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),Y1=l((i,e,t)=>{if(e==="chariot")return new Zt().addAll(Jp(),[0,0,.09]).add({shape:Ae,colour:cn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ae,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(un([-.042,.035,-.045],.065)).add(un([.042,.035,-.045],.065)).addAll(jp(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Zt().addAll(Jp(t==="ancient"?"#8a7a64":Dx),[0,0,.1]).add({shape:Ae,colour:cn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ae,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(un([-.042,.03,-.03])).add(un([.042,.03,-.03])).add(un([-.042,.03,-.09])).add(un([.042,.03,-.09]));return e==="wagon"?n.add({shape:$t,colour:Zp,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:Zp,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ae,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ae,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),$1=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Zt().add({shape:Ae,colour:cn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ae,colour:cn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ae,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(un([-.045,.03,.04],.045)).add(un([.045,.03,.04],.045)).add(un([-.045,.03,-.04],.045)).add(un([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?di:Kp;return new Zt().add({shape:$t,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ae,colour:i==="modern"?di:cn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ae,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(un([-.04,.035,0],.07)).add(un([.04,.035,0],.07))},"siege"),Z1=l((i,e,t)=>{if(i==="industrial")return new Zt().add({shape:Ae,colour:La,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ae,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(un([-.045,.025,.06],.045)).add(un([.045,.025,.06],.045)).add(un([-.045,.025,-.06],.045)).add(un([.045,.025,-.06],.045));let n=new Zt().add({shape:Ae,colour:di,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ae,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ae,colour:di,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:$t,colour:di,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:di,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),J1=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Zt;switch(i.hull){case"oars":case"sail":{r.add({shape:Ae,colour:Ix,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:Sr,colour:Ix,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:$t,colour:cn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ae,colour:o===0?e[1]:Zp,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Ae,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Ae,colour:cn,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ae,colour:cn,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:$t,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ae,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Ae,colour:La,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Ae,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Ae,colour:La,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ae,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Ae,colour:i.era==="industrial"?"#4a4a48":La,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:Sr,colour:i.era==="industrial"?"#4a4a48":La,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:La,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:$t,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ae,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Ae,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:$t,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Ae,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),K1=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Zt().add({shape:$t,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Sr,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ae,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ae,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ae,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),j1=l(i=>new Zt().add({shape:Da,colour:di,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ae,colour:di,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ae,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Q1=l((i,e)=>{let t=e?1.4:1;return new Zt().add({shape:$t,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Sr,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ae,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ae,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Nx=l((i,e)=>{switch(i.shape){case"foot":{let t=new Zt;return Lx(i.squad).forEach(([n,s],r)=>t.addAll(jp(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Zt;return Lx(i.squad).forEach(([n,s])=>t.addAll(X1(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return q1(e);case"cart":return Y1(e,i.cart??"wagon",i.era);case"siege":return $1(i.era,e,i.large===!0);case"vehicle":return Z1(i.era,e,i.large===!0);case"ship":return J1(i,e);case"aircraft":return K1(i,e);case"helicopter":return j1(e);default:return Q1(e,i.large===!0)}},"figureParts"),eE=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new mt().compose(new W(...i),new xn().setFromAxisAngle(G1,n).multiply(new xn().setFromEuler(new Dn(...t))),new W(...e)),"partMatrix"),Qp=l(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new Ue(r),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(eE(n)),a.setAttribute("color",new vt(u,3)),a}),t=Cx(e)??new zt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Ux=l((i,e)=>Qp(Nx(i,e).parts),"figureGeometry"),tE=new Pi(.19,.2,1,28),nE=new Ns(.22,.014,4,32),Fx=l((i,e,{fortified:t,scale:n,stand:s})=>{let r=i.shape==="ship",a=r?0:s,o=Nx(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return r||o.push({shape:tE,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&o.push({shape:nE,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Qp(o)},"unitBodyGeometry"),iE=new Ii(.75,.5,4),sE=new Ns(.36,.025,6,24),Ox=l((i,e,t)=>Qp([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:Ae,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:iE,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:sE,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var jt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),sl=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),zn=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),rl=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),tm=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Bx={Warrior:jt("ancient","club"),Spearman:jt("ancient","spear"),Swordman:jt("ancient","sword"),Archer:jt("ancient","bow"),Horseman:sl("ancient","spear"),Chariot:tm("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:zn("ancient","oars"),Settlers:tm("ancient","wagon"),Diplomat:jt("ancient","case",1),Caravan:tm("ancient","goods"),Explorer:jt("ancient","pack",1),Pikeman:jt("medieval","pike"),Knight:sl("medieval","lance"),Crusader:sl("medieval","sword"),Fanatic:jt("medieval","sword"),Sail:zn("medieval","sail"),Musketman:jt("renaissance","musket"),Dragoon:sl("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:zn("renaissance","sail",!0,1),Galleon:zn("renaissance","sail",!0),Rifleman:jt("industrial","rifle"),AlpineTrooper:{...jt("industrial","rifle"),dress:"snow"},Partisan:{...jt("industrial","rifle"),dress:"irregular"},Cavalry:sl("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:jt("industrial","none",2),Ironclad:zn("industrial","steam",!1,1),Transport:zn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:jt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:jt("modern","rifle"),Paratrooper:{...jt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:zn("modern","steam",!1,1),Cruiser:zn("modern","steam",!0,2),MissileCruiser:zn("modern","steam",!0,1,!0),Battleship:zn("modern","steam",!0,3),Submarine:zn("modern","submarine"),Carrier:zn("modern","carrier",!0),Fighter:rl("modern"),StealthFighter:rl("modern",!1,!0),Bomber:rl("modern",!0),StealthBomber:rl("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},zx=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Bx,i)?Bx[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?zn("industrial","steam"):e.includes("Air")?rl("modern"):jt("ancient","spear")),"unitLook");var rE=.03,Hx="#fff4b0",aE=.04,Mh=.004,nm=.018,kx=.01,Gx=.022,Vx=.03,Wx=.03,wh=.002,oE="#4caf50",lE="#e0b030",cE="#d04030",uE=256,wr,fi,Er,Ar,pi,Tr,cs,Ua,rm=class rm{constructor(){Z(this,wr,new Map);Z(this,fi,new Map);Z(this,Er,new Map);Z(this,Ar,new Map);Z(this,pi,new Map);Z(this,Tr,new Map);Z(this,cs,null);Z(this,Ua,0);this.figureMaterial=new Di({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Ns(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=p(this,wr).get(n);return s===void 0&&(s=new Di({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),p(this,wr).set(n,s)),s}body(e,t,n,s=1){let r=JSON.stringify([e,t,n,s]),a=p(this,Ar).get(r);return a===void 0&&(a=Fx(e,t,{fortified:n,scale:s,stand:rE}),p(this,Ar).set(r,a)),a}city(e){let t=pE(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=p(this,pi).get(n);return s===void 0&&(s=Ox(t,e.colours[0],e.walled),p(this,pi).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=p(this,Er).get(n);return s===void 0&&(s=Ux(e,t),p(this,Er).set(n,s)),s}plain(e){let t=p(this,Tr).get(e);return t===void 0&&(t=new Ps({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),p(this,Tr).set(e,t)),t}pointer(){if(p(this,cs)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Hx,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Ls(e);n.colorSpace=Ft,k(this,cs,new Ps({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,cs)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=p(this,fi).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Ls(a);h.colorSpace=Ft,r=new Ps({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,fi).set(s,r)}return r}get sweepDue(){return p(this,fi).size+p(this,pi).size>Math.max(uE,p(this,Ua)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof Tt&&t.add(s.geometry),s instanceof Sa&&t.add(s.material)});p(this,fi).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,fi).delete(s))}),p(this,pi).forEach((n,s)=>{t.has(n)||(n.dispose(),p(this,pi).delete(s))}),k(this,Ua,p(this,fi).size+p(this,pi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,Er).forEach(e=>e.dispose()),p(this,Ar).forEach(e=>e.dispose()),p(this,pi).forEach(e=>e.dispose()),p(this,Ar).clear(),p(this,pi).clear(),this.figureMaterial.dispose(),p(this,Tr).forEach(e=>e.dispose()),p(this,cs)?.map?.dispose(),p(this,cs)?.dispose(),p(this,Tr).clear(),k(this,cs,null),p(this,wr).forEach(e=>e.dispose()),p(this,fi).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,wr).clear(),p(this,fi).clear(),p(this,Er).clear(),k(this,Ua,0)}};wr=new WeakMap,fi=new WeakMap,Er=new WeakMap,Ar=new WeakMap,pi=new WeakMap,Tr=new WeakMap,cs=new WeakMap,Ua=new WeakMap,l(rm,"MarkerKit");var Ah=rm,Xx=l(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Na=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),Sh=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),hE=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),dE=3,fE=4,al=l((i,e,t,n,s=dE)=>{let r=new Sa(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),qx=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return al(i,e*s,e,t)},"label"),Eh=[0,.36,0],pE=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+Sh(i.name,1)*6,r=n===0?0:.12+Sh(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+Sh(i.name,n+20)*.05,height:(n===0?.13:.05)+Sh(i.name,n+40)*.05}})},"buildingsOf"),mE=l((i,e)=>{let t=new gn;return t.add(new Tt(i.city(e),i.figureMaterial)),t.add(Na(qx(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Xx(e.colours[0])),Wx,0),...Eh)),t},"drawCity"),gE=l((i,e,t=null)=>{let n=new gn,{ring:s}=i.geometries,r=zx(e.type,e.kinds),a=i.body(r,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+aE,0],u=e.health!==null,h=(t?.over??0)+(u?Mh+wh:0),f=h+kx+wh,d=hE(e),m=f+(d===""?0:Gx+wh),g=new Tt(a,i.figureMaterial);if(g.name=im,g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(Na(al(i.plain("#202020"),nm,Mh,t?.over??0),...c)),y>0){let x=al(i.plain(y>.5?oE:y>.25?lE:cE),nm*y,Mh*.6,(t?.over??0)+Mh*.2);x.center.x=1/(2*y),n.add(Na(x,...c))}}if(n.add(Na(al(i.plain(e.colours[0]),nm,kx,h),...c)),d!==""&&n.add(Na(qx(i.label(d,e.colours[0],Xx(e.colours[0])),Gx,f),...c)),e.active){let y=new Tt(s,i.material(Hx,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,Na(al(i.pointer(),Vx,Vx,m,fE),...c))}return n},"drawUnit"),xE="unit",im="figures",sm=.26,Yx=l((i,e)=>{let t=new gn;if(e.city!==null&&t.add(mE(i,e.city)),e.unit!==null){let n=e.city===null?0:sm,s=gE(i,e.unit,e.city===null?null:{at:[Eh[0],Eh[1],Eh[2]-n],over:Wx+wh});s.name=xE,s.position.z=n,t.add(s)}return t},"drawMarker");var ks=l(i=>i*Math.PI/180,"degrees"),_E=ks(25),vE=ks(80),yE=5,bE=90,ME=1.12,ol=ks(40),om=ks(45),SE={above:{yaw:0,pitch:ks(80)},classic:{yaw:0,pitch:ks(55)},isometric:{yaw:ks(45),pitch:ks(30)}};var $x=l(i=>({focus:i,...SE.classic,distance:24}),"defaultOrbit"),am=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),Zx=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),Cr=l(i=>({...i,yaw:Zx(i.yaw),pitch:am(i.pitch,_E,vE),distance:am(i.distance,yE,bE)}),"clampOrbit"),Oa=l((i,e)=>Cr({...i,distance:i.distance/ME**e}),"zoomed"),Th=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),Ch=l((i,e)=>{let{forward:t}=Th(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),lm=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=Th(i),u=Ch(i,e),h=[t-u[0],n-u[1],s-u[2]],f=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(a),m=Math.tan(ol/2);return d<=1e-6?null:[f(o)/(d*m*r),f(c)/(d*m)]},"toScreen"),cm=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=Th(i),c=Math.tan(ol/2);return{from:Ch(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),Fa=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=cm(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),Jx=l((i,e,t,n,s)=>{let r=Fa(i,e,t,s),a=Fa(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(ol/2),{right:h}=Th(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),Kx=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:Zx(i.yaw),focus:[n(s,e.u),e.v===null?am(r,0,t):n(r,e.v)]}},"settled"),jx=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Rh=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var wE=new Ue("#3f8a8c"),EE=new Ue("#173a52"),AE=new Ue("#e8eeee"),Qx=`
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
`,TE=`
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
`,Gs,jn,kn,hm=class hm{constructor(e,t){Z(this,Gs);Z(this,jn);Z(this,kn);k(this,Gs,e),k(this,jn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<p(this,jn).length;s+=2)p(this,jn)[s]=Ci.toHalfFloat(0),p(this,jn)[s+1]=Ci.toHalfFloat(1);k(this,kn,new wa(p(this,jn),e.columns,e.rows,Fi,Fn)),p(this,kn).wrapS=Ai,p(this,kn).wrapT=e.wrapsV?Ai:Jn,p(this,kn).magFilter=Bt,p(this,kn).minFilter=Bt,p(this,kn).needsUpdate=!0;let n=new vn({uniforms:yr.merge([we.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:wE.clone()},deep:{value:EE.clone()},foam:{value:AE.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Qx,fragmentShader:TE,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,kn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new Tt(new Li(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=p(this,Gs),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;p(this,jn)[d]=Ci.toHalfFloat(e.positions[u*3+1]??0),p(this,jn)[d+1]=Ci.toHalfFloat(e.unseen[u]??0)}}p(this,kn).needsUpdate=!0}height(e,t){return Ci.fromHalfFloat(p(this,jn)[(t*p(this,Gs).columns+e)*2]??0)}unseen(e,t){return Ci.fromHalfFloat(p(this,jn)[(t*p(this,Gs).columns+e)*2+1]??0)>.5}texture(){return p(this,kn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Gs).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,kn).dispose()}};Gs=new WeakMap,jn=new WeakMap,kn=new WeakMap,l(hm,"Water");var um=hm,e_=um,CE=`
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
`,RE=.18,ll,dm=class dm{constructor(e,t){Z(this,ll);k(this,ll,t.wrapsV);let n=new vn({uniforms:yr.merge([we.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:Qx,fragmentShader:CE,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new Tt(new Li(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,ll)&&e}follow(e,t,n){this.mesh.position.set(e,RE,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};ll=new WeakMap,l(dm,"Clouds");var Ph=dm;var PE=.6,IE=.05,Rr=64,t_=.125,LE=`
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
`,DE=`
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
`,n_=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),NE=l((i,e)=>{let[t]=n_(i.length),n=Rr*(1-2*t_);return i.flatMap((s,r)=>{let a=e(s);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:s,x:r%t*Rr+(Rr-c)/2,y:Math.floor(r/t)*Rr+(Rr-u)/2,width:c,height:u}]})},"atlasPlaces"),UE=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:s}=i;return[e??(typeof n=="number"?n:0),t??(typeof s=="number"?s:0)]},"imageSize"),Vs,Gn,cl,Pr,ul,Ih,Ba,i_,s_,pm=class pm{constructor(e){Z(this,Ba);Z(this,Vs,null);Z(this,Gn,null);Z(this,cl,"");Z(this,Pr);Z(this,ul,new WeakMap);Z(this,Ih,1);k(this,Pr,e),this.material=new vn({uniforms:yr.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:IE},bias:{value:PE},cells:{value:[1,1]},pad:{value:t_}}]),vertexShader:LE,fragmentShader:DE,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,Vs)?.dispose(),k(this,Vs,null),e===null||e.count===0)return null;I(this,Ba,s_).call(this,e);let t=new Wo,n=new Li(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new as(e.anchors,3)),t.setAttribute("slot",new as(e.slots,2)),t.setAttribute("size",new as(e.sizes,1)),t.setAttribute("cell",new as(e.cells,1)),t.instanceCount=e.count,k(this,Vs,t),t}make(){let e=new Tt(p(this,Vs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,Vs)?.dispose(),p(this,Gn)?.dispose(),this.material.dispose()}};Vs=new WeakMap,Gn=new WeakMap,cl=new WeakMap,Pr=new WeakMap,ul=new WeakMap,Ih=new WeakMap,Ba=new WeakSet,i_=l(function(e){if(e===null)return 0;let t=p(this,ul).get(e);return t===void 0&&(t=or(this,Ih)._++,p(this,ul).set(e,t)),t},"#imageId"),s_=l(function(e){let t=e.names.map(o=>`${o}:${I(this,Ba,i_).call(this,p(this,Pr).call(this,o))}`).join(",");if(t===p(this,cl)&&p(this,Gn)!==null)return;let[n,s]=n_(e.names.length),r=document.createElement("canvas"),a=r.getContext("2d");r.width=n*Rr,r.height=s*Rr,a!==null&&(a.imageSmoothingEnabled=!1,NE(e.names,o=>{let c=p(this,Pr).call(this,o);return c===null?null:UE(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=p(this,Pr).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),p(this,Gn)?.dispose(),k(this,Gn,new Ls(r)),p(this,Gn).colorSpace=Ft,p(this,Gn).premultiplyAlpha=!0,p(this,Gn).magFilter=Ot,p(this,Gn).minFilter=Un,p(this,Gn).generateMipmaps=!0,k(this,cl,t),this.material.uniforms.atlas.value=p(this,Gn),this.material.uniforms.cells.value=[n,s]},"#drawAtlas"),l(pm,"YieldIcons");var fm=pm,r_=fm;var mm=10466244,FE=14082796,OE=5984576,BE=16773336,a_=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),zE=l(i=>[new wn(new W(0,0,1),0),new wn(new W(0,0,-1),i)],"polesAt"),kE=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),o_=2048,l_=Math.hypot(30,40,20),c_=l((i,{period:e,ground:t,yieldIcon:n})=>{let s=new ph({antialias:!0,canvas:i}),r=new Io,a=new mn(ol*180/Math.PI,1,.1,400),o=new gn,{material:c,detail:u}=Ax(e,t.rows*t.spacingV),h=new Ho(BE,2.6),f=new Map,d=new Map,m=new Di({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=zE(g),x=new Map,_=new Map,S=new gn,A=new Ah,w=new gn,R=new r_(n??(()=>null)),C=new e_(t,new Ue(mm)),v=new Ph(C.texture(),t),E=new Po(mm,30,110),L=[[0,0]],P="0,0",U=[[0,0]],G="0,0",K=!1,D=null;s.outputColorSpace=Ft,s.localClippingEnabled=!0,s.toneMapping=qo,s.shadowMap.enabled=!0,s.shadowMap.type=Su,r.background=new Ue(mm),r.fog=E,r.add(new ko(FE,OE,.9)),r.add(o),r.add(S),r.add(w),r.add(C.mesh),r.add(v.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(o_,o_),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,r.add(h),r.add(h.target);let Y=l((z,ie,se=L)=>se.map(([H,ae])=>{let te=z.make();return te.position.set(z.at[0]+H,z.at[1],z.at[2]+ae),ie.add(te),te}),"copiesOf"),ne=l(z=>Y(z,o,kE(L,z.span,g,e.v,K)),"overlayCopiesOf"),F=l(z=>z.drawn.forEach(ie=>{let se=ie.getObjectByName(im);se!==void 0&&(se.rotation.y=z.facing)}),"face"),j=l(z=>{let ie=Yx(A,z);return ie.traverse(se=>{se.castShadow=se instanceof Tt}),ie},"markerOf"),V=l(()=>{A.sweepDue&&A.sweep([...x.values(),..._.values()].flatMap(({original:z})=>z===void 0?[]:[z]))},"sweep");return{render:l(()=>s.render(r,a),"render"),resize:l((z,ie,se)=>{s.setPixelRatio(se),s.setSize(z,ie,!1),a.aspect=ie>0?z/ie:1,a.updateProjectionMatrix()},"resize"),setChunk:l((z,ie,se)=>{let H=`${z},${ie}`,ae=new zt;ae.setAttribute("position",new vt(se.positions,3)),ae.setAttribute("normal",new vt(se.normals,3)),ae.setAttribute("color",new vt(se.colours,3)),ae.setAttribute("surfacesA",new vt(se.surfacesA,4,!0)),ae.setAttribute("surfacesB",new vt(se.surfacesB,4,!0)),ae.setAttribute("shore",new vt(se.shore,1,!0)),ae.setIndex(new vt(se.indices,1)),ae.computeBoundingSphere();let te=f.get(H);te!==void 0&&(te.drawn.forEach(ce=>o.remove(ce)),te.geometry.dispose());let de={geometry:ae,at:[se.u,0,se.v],make:l(()=>{let ce=new Tt(ae,c);return ce.castShadow=!0,ce.receiveShadow=!0,ce},"make"),drawn:[]};de.drawn=Y(de,o),f.set(H,de),C.setChunk(se)},"setChunk"),setOverlay:l((z,ie,se)=>{let H=`${z},${ie}`,ae=d.get(H);if(ae!==void 0&&(ae.drawn.forEach(Ce=>o.remove(Ce)),ae.geometry.dispose(),d.delete(H)),se===null)return;let te=new zt;te.setAttribute("position",new vt(se.positions,3)),te.setAttribute("normal",new vt(se.normals,3)),te.setAttribute("color",new vt(se.colours,3)),te.computeBoundingSphere(),te.computeBoundingBox();let de=te.boundingBox,ce={geometry:te,span:[se.v+(de?.min.z??0),se.v+(de?.max.z??0)],at:[se.u,0,se.v],make:l(()=>{let Ce=new Tt(te,m);return Ce.castShadow=!0,Ce.receiveShadow=!0,Ce},"make"),drawn:[]};ce.drawn=ne(ce),d.set(H,ce)},"setOverlay"),setMarker:l((z,ie,se)=>{if(x.get(z)?.drawn.forEach(te=>S.remove(te)),x.delete(z),se===null)return;let H=j(se),ae={at:ie,make:l(()=>H.clone(),"make"),drawn:[],original:H};ae.drawn=Y(ae,S,U),x.set(z,ae),V()},"setMarker"),setWalker:l((z,ie)=>{let se=_.get(z);if(se?.drawn.forEach(te=>S.remove(te)),_.delete(z),ie===null)return;let H=j(ie),ae={at:se?.at??[0,0,0],facing:se?.facing??ie.unit?.facing??0,make:l(()=>H.clone(),"make"),drawn:[],original:H};ae.drawn=Y(ae,S,U),F(ae),_.set(z,ae),V()},"setWalker"),placeWalker:l((z,ie,se)=>{let H=_.get(z);H!==void 0&&(H.at=ie,H.facing=se,H.drawn.forEach((ae,te)=>{let[de,ce]=U[te]??[0,0];ae.position.set(ie[0]+de,ie[1],ie[2]+ce)}),F(H))},"placeWalker"),setYields:l(z=>{D?.drawn.forEach(ie=>w.remove(ie)),D=null,R.set(z)!==null&&(D={at:[0,0,0],make:l(()=>R.make(),"make"),drawn:[]},D.drawn=Y(D,w))},"setYields"),view:l((z,ie,se=e)=>{let[H,ae]=z.focus,[te,de,ce]=Ch(z,ie),{near:Ce,far:Ve}=Rh(z.distance);a.position.set(te,de,ce),a.lookAt(H,ie,ae),a.far=Ve*1.2,a.near=Math.max(.1,z.distance*.02),a.updateProjectionMatrix(),E.near=Ce,E.far=Ve;let Ee=z.distance*2.2,qe=h.shadow.camera;h.position.set(H+30,ie+40,ae+20),h.target.position.set(H,ie,ae),qe.left=-Ee,qe.right=Ee,qe.top=Ee,qe.bottom=-Ee,qe.near=Math.max(.5,l_-Ee*1.6),qe.far=l_+Ee*1.6,qe.updateProjectionMatrix(),C.follow(H,ae,Ve*2.2,h.position.clone().sub(h.target.position)),v.follow(H,ae,Ve*2.2),C.pastThePoles(se.v!==null),v.pastThePoles(se.v!==null),m.clippingPlanes=se.v===null?y:null,K=se.v===null;let je=a_(z.focus,Ve,se),Xe=`${je.join(";")}${K?" stopped":""}`,gt=a_(z.focus,Math.min(Ve,z.distance*2.2),se),xt=gt.join(";");Xe!==P&&(L=je,P=Xe,f.forEach(tt=>{tt.drawn.forEach(Qe=>o.remove(Qe)),tt.drawn=Y(tt,o)}),d.forEach(tt=>{tt.drawn.forEach(Qe=>o.remove(Qe)),tt.drawn=ne(tt)}),D!==null&&(D.drawn.forEach(tt=>w.remove(tt)),D.drawn=Y(D,w))),R.lean(z.pitch),xt!==G&&(U=gt,G=xt,[...x.values(),..._.values()].forEach(tt=>{tt.drawn.forEach(Qe=>S.remove(Qe)),tt.drawn=Y(tt,S,U)}),_.forEach(F))},"view"),stats:l(()=>({drawCalls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries}),"stats"),dispose:l(()=>{f.forEach(({geometry:z})=>z.dispose()),f.clear(),d.forEach(({geometry:z})=>z.dispose()),d.clear(),m.dispose(),x.clear(),_.clear(),A.dispose(),R.dispose(),C.dispose(),v.dispose(),c.dispose(),u.dispose(),s.dispose()},"dispose")}},"createStage");var us=1/Math.sqrt(3),u_=1.5*us,GE=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),VE=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,us+r*u_],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-us],[a+.5,o-us/2],[a+.5,o+us/2],[a,o+us],[a-.5,o+us/2],[a-.5,o-us/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-us,[c,u]=GE(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*u_:null}),"period")}},"hexOddRLayout"),h_=VE;var HE=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),d_=HE;var Gi=Math.SQRT2/2,WE=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*Gi,(r+1)*Gi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Gi],[a+Gi,o],[a,o+Gi],[a-Gi,o]]},"outline"),tileAt:l((s,r)=>{let a=s/Gi,o=r/Gi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Gi,v:t?i*Gi:null}),"period")}},"staggeredIsoLayout"),f_=WE;var p_={square:d_,"staggered-iso":f_,"hex-odd-r":h_},XE=l(i=>{if(!Object.prototype.hasOwnProperty.call(p_,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return p_[i.topologyId](i)},"groundLayoutFor"),m_=XE;var hl=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Lh=.65,gm=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),hs=.22,Dh=.12,xm={low:.2,high:.5},g_=l((i,e,t,n,s,r,a,o,c)=>{let u=r-t,h=a-n,f=u*u+h*h,d=f===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/f)),m=hl(Math.hypot(i-t-u*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(s+(o-s)*(1-g*g*g)+c)},"halfRidge"),dl=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),qE=l((i,e,t)=>({u:(dl(i,e,t,1)*2-1)*hs,v:(dl(i,e,t,2)*2-1)*hs,scale:.75+dl(i,e,t,3)*.5}),"peakOf"),YE=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:s,height:r,wrapsY:a}=n,o=i.period(),c=Bn([ki({cell:.7,period:o,seed:t}),ki({cell:.35,period:o,seed:t+1}),ki({cell:.17,period:o,seed:t+2})]),u=Bn([ki({cell:.45,period:o,seed:t+3}),ki({cell:.22,period:o,seed:t+4})]),h=l((F,j)=>1-2*Math.abs(u(F,j)),"ridged"),f=ki({cell:.8,period:o,seed:t+5}),d=ki({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],S=[],A=l((F,j)=>{let V=(F%s+s)%s;return!a&&(j<0||j>=r)?null:(j%r+r)%r*s+V},"index"),w=l(F=>{let j=new Array(s*r).fill(1/0),V=[];F.forEach((Q,z)=>{Q&&(j[z]=0,V.push([z%s,Math.floor(z/s)]))});for(let[Q,z]of V){let ie=j[z*s+Q]??1/0;ie>=zi.reach||n.neighbours(Q,z).forEach(([se,H])=>{let ae=H*s+se;(j[ae]??1/0)>ie+1&&(j[ae]=ie+1,V.push([se,H]))})}return j},"distancesFromLand"),R=l((F,j)=>{let V=n.terrainAt(F,j);return`${V}${V!=="Unknown"&&n.waterAt(F,j)?" water":""}`},"readAs"),C=l(F=>{if(F!==void 0&&y.length>0&&F.every(([te,de])=>{let ce=A(te,de);return ce===null||y[ce]===R(te,de)}))return[];let j=[],V=[],Q=[];for(let te=0;te<r;te++)for(let de=0;de<s;de++){let ce=n.terrainAt(de,te);j.push(ce),V.push(ce!=="Unknown"&&n.waterAt(de,te)),Q.push(br(ce))}let z=w(j.map((te,de)=>te!=="Unknown"&&!V[de])),ie=j.map((te,de)=>`${te}${V[de]?" water":""}`),se=[];ie.forEach((te,de)=>{y[de]!==te&&se.push([de%s,Math.floor(de/s)])}),y=ie,g=Q.map((te,de)=>{let ce=te===_h,Ce=de%s,Ve=Math.floor(de/s),Ee=qE(Ce,Ve,t);if(!V[de])return{relief:te.relief,colour:gm(te.colour),surface:En.indexOf(te.surface),water:!1,unknown:ce,peak:Ee};let qe=Math.min(z[de]??1/0,zi.reach),je=zi.shore+(zi.deep-zi.shore)*Math.max(0,qe-1)/Math.max(1,zi.reach-1);return{relief:{...te.relief,base:je},colour:gm(te.colour),surface:En.indexOf("sand"),water:!0,unknown:ce,peak:Ee}});let H=S,ae=new Map(se.map(([te,de])=>[`${te},${de}`,[te,de]]));return S=g.map(({relief:te,unknown:de},ce)=>!de&&!V[ce]&&te.shape==="peaked"),se.some(([te,de])=>{let ce=de*s+te;return S[ce]===!0||H[ce]===!0})&&([x,_]=K()),se.forEach(([te,de])=>{let ce=de*s+te;S[ce]!==!0&&H[ce]!==!0||n.neighbours(te,de).forEach(([Ce,Ve])=>{let Ee=A(Ce,Ve);Ee!==null&&S[Ee]===!0&&ae.set(`${Ce},${Ve}`,[Ce,Ve])})}),[...ae.values()]},"refresh"),v=l(F=>{let[j,V]=i.centre(0,F);return Math.max(...i.outline(0,F).map(([Q,z])=>Math.hypot(Q-j,z-V)))},"cornerOf"),E=l((F,j)=>{let[V,Q]=i.centre(0,F),z=[];for(let ie=-8;ie<=8;ie++)for(let se=-6;se<=6;se++){let[H,ae]=i.centre(se,F+ie);Math.hypot(H-V,ae-Q)<j+1e-9&&z.push([se,ie])}return z},"offsetsWithin"),L=l((F,j,V,Q)=>{if(s>=6&&(!a||r>=6)){let te=l((Ce,Ve)=>{let Ee=(Ce%Ve+Ve)%Ve;return Ee*2<Ve?Ee:Ee-Ve},"nearest"),de=te(V-F,s),ce=a?te(Q-j,r):Q-j;return de===0&&ce===0?[]:[[de,ce]]}let z=l((te,de)=>{let ce=(te%de+de)%de;return ce===0?[0]:[ce,ce-de]},"copies"),[ie,se]=i.centre(F,j),H=z(V-F,s).flatMap(te=>(a?z(Q-j,r):[Q-j]).flatMap(de=>{if(te===0&&de===0)return[];let[ce,Ce]=i.centre(F+te,j+de);return[[te,de,Math.hypot(ce-ie,Ce-se)]]})),ae=Math.min(...H.map(([,,te])=>te));return H.filter(([,,te])=>te<=ae+1e-9).map(([te,de])=>[te,de])},"stepsTo"),P=Math.max(...[0,1].flatMap(F=>{let[j,V]=i.centre(0,F);return n.neighbours(0,F).flatMap(([Q,z])=>L(0,F,Q,z).map(([ie,se])=>{let[H,ae]=i.centre(ie,F+se);return Math.hypot(H-j,ae-V)}))}),1),U=[0,1].map(F=>{let[j,V]=i.centre(0,F);return E(F,P+hs*Math.SQRT2+Dh+1.2+Math.max(v(0),v(1))).flatMap(([Q,z])=>{let[ie,se]=i.centre(Q,F+z);return[Q,z,ie-j,se-V]})}),G=l((F,j,V,Q,z,ie)=>{let se=z-V,H=ie-Q,ae=se*se+H*H,te=ae===0?0:Math.max(0,Math.min(1,((F-V)*se+(j-Q)*H)/ae));return Math.hypot(F-V-se*te,j-Q-H*te)},"toSegment"),K=l(()=>{let F=g.map(()=>[]),j=g.map(()=>[]),V=Math.max(v(0),v(1));return e?(g.forEach((Q,z)=>{if(S[z]!==!0)return;let ie=z%s,se=Math.floor(z/s),[H,ae]=i.centre(ie,se),te=new Map;n.neighbours(ie,se).forEach(([de,ce])=>{let Ce=A(de,ce);Ce!==null&&S[Ce]===!0&&L(ie,se,de,ce).forEach(([Ve,Ee])=>te.set(`${Ve},${Ee}`,[Ve,Ee,Ce]))}),te.forEach(([de,ce,Ce])=>{let Ve=g[Ce];if(Ve===void 0||ce<0||ce===0&&de<0)return;let[Ee,qe]=i.centre(ie+de,se+ce),{peak:je,relief:Xe}=Q,{peak:gt,relief:xt}=Ve,tt=je.u,Qe=je.v,Dt=Ee-H+gt.u,ft=qe-ae+gt.v,Et=Xe.base*Lh*je.scale,Lt=xt.base*Lh*gt.scale,at=Math.hypot(Dt-tt,ft-Qe)||1,B=16+(ce+2)*5+(de+2),Pt=(dl(ie,se,t,B)*2-1)*Dh,ot=xm.low+(xm.high-xm.low)*dl(ie,se,t,B+32),et=(tt+Dt)/2-(ft-Qe)/at*Pt,me=(Qe+ft)/2+(Dt-tt)/at*Pt,ut=Math.max(Math.hypot(tt-et,Qe-me),Math.hypot(Dt-et,ft-me))+1.2,Fe={au:tt,av:Qe,ah:Et,mu:et,mv:me,mh:ot*Math.min(Et,Lt),bu:Dt,bv:ft,bh:Lt,roughness:(Xe.roughness+xt.roughness)/2,cu:et,cv:me,reach:ut*ut},ze=(Math.sqrt(Fe.reach)+V)**2,T=U[se&1]??[];for(let b=0;b<T.length;b+=4){let X=T[b+2],fe=T[b+3];if((X-et)**2+(fe-me)**2>=ze||Math.min(G(X,fe,tt,Qe,et,me),G(X,fe,et,me,Dt,ft))>=1.2+V)continue;let le=A(ie+T[b],se+T[b+1]);le!==null&&(F[le]?.push(Fe),j[le]?.push(X,fe))}})}),[F,j]):[F,j]},"ranges"),D=l(F=>{let[j,V]=i.centre(0,F),Q=Math.max(...i.outline(0,F).map(([ie,se])=>Math.hypot(ie-j,se-V))),z=[];for(let ie=-6;ie<=6;ie++)for(let se=-4;se<=4;se++){let[H,ae]=i.centre(se,F+ie);Math.hypot(H-j,ae-V)<1.2+Q+hs*Math.SQRT2+1e-9&&z.push([se,ie])}return z},"offsetsFor"),Y=[D(0),D(1)],ne=l((F,j)=>{let[V,Q]=i.tileAt(F,j),z=A(V,Q),ie=z===null?null:g[z]??null;if(ie===null||ie.unknown)return{height:0,colour:gm(_h.colour),surfaces:En.map(()=>0),shore:0,unseen:!0};let se=null,H=null,ae=l(Et=>Et==="rolling"?se??=c(F,j):H??=h(F,j),"noiseHere"),te=0,de=0,ce=0,Ce=0,Ve=En.map(()=>0),Ee=0,qe=0,je=0,Xe=0,gt=0,xt=F+hs*f(F,j),tt=j+hs*d(F,j);(Y[Q&1]??[]).forEach(([Et,Lt])=>{let at=V+Et,B=Q+Lt,Pt=A(at,B);if(Pt===null)return;let ot=g[Pt];if(ot===void 0)return;let[et,me]=i.centre(at,B),{relief:ut,colour:Fe,peak:ze,surface:T}=ot,b=hl(Math.hypot(F-et,j-me)),X=ut.shape==="peaked"?hl(Math.hypot(F-et-ze.u,j-me-ze.v)):0,fe=hl(Math.hypot(xt-et,tt-me))**3;if(b>0){let le=m[ut.shape],xe=le===null?0:ut.roughness*ae(le);ut.shape==="peaked"?de+=b*(ut.base*(1-Lh)+xe*.5):de+=b*(ut.base+xe),te+=b}if(X>0){let le=ut.roughness*ae("ridged");ce+=X*X*(ut.base*Lh*ze.scale+le*.5)}Ce+=fe,ot.unknown||(Ve[T]=(Ve[T]??0)+fe,Ee+=fe,qe+=ot.water?fe:0),je+=fe*Fe[0],Xe+=fe*Fe[1],gt+=fe*Fe[2]});let Qe=z===null?[]:x[z]??[],Dt=z===null?[]:_[z]??[],ft=ce;if(Qe.length>0){let[Et,Lt]=i.centre(V,Q);Qe.forEach((at,B)=>{let Pt=F-Et+(Dt[B*2]??0),ot=j-Lt+(Dt[B*2+1]??0);if((Pt-at.cu)**2+(ot-at.cv)**2>=at.reach)return;let et=at.roughness*ae("ridged")*.5;ft=Math.max(ft,g_(Pt,ot,at.au,at.av,at.ah,at.mu,at.mv,at.mh,et),g_(Pt,ot,at.bu,at.bv,at.bh,at.mu,at.mv,at.mh,et))})}return{height:(te>0?de/te:0)+ft,colour:Ce>0?[je/Ce,Xe/Ce,gt/Ce]:ie.colour,surfaces:Ee>0?Ve.map(Et=>Et/Ee):En.map((Et,Lt)=>Lt===ie.surface?1:0),shore:Ee>0?qe/Ee:ie.water?1:0,unseen:!1}},"sample");return C(),{sample:ne,height:l((F,j)=>ne(F,j).height,"height"),refresh:C}},"createRelief"),x_=YE;var __=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),v_=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((L,P)=>[L*a,P*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),m=(s+1)*(r+1),g=new Float32Array(m*3),y=new Uint8Array(m*4),x=new Uint8Array(m*4),_=new Uint8Array(m),S=new Float32Array(m);for(let L=-1;L<=r+1;L++)for(let P=-1;P<=s+1;P++){let U=e.sample(...h(c+P,u+L)),{height:G,colour:K}=U;if(d[(L+1)*f+(P+1)]=G,P>=0&&P<=s&&L>=0&&L<=r){let D=L*(s+1)+P;g.set(K,D*3),U.surfaces.forEach((Y,ne)=>{(ne<4?y:x)[D*4+ne%4]=Math.round(Y*255)}),_[D]=Math.round(U.shore*255),S[D]=U.unseen?1:0}}let A=l((L,P)=>d[(P+1)*f+(L+1)]??0,"height"),w=new Float32Array(m*3),R=new Float32Array(m*3),[C,v]=h(c,u);for(let L=0;L<=r;L++)for(let P=0;P<=s;P++){let U=L*(s+1)+P,[G,K]=h(c+P,u+L),D=(A(P+1,L)-A(P-1,L))/(2*a),Y=(A(P,L+1)-A(P,L-1))/(2*o),ne=Math.hypot(D,1,Y);w[U*3]=G-C,w[U*3+1]=A(P,L),w[U*3+2]=K-v,R[U*3]=-D/ne,R[U*3+1]=1/ne,R[U*3+2]=-Y/ne}let E=new Uint32Array(s*r*6);for(let L=0;L<r;L++)for(let P=0;P<s;P++){let U=L*(s+1)+P,G=U+1,K=U+s+1,D=K+1,Y=(L*s+P)*6;E.set([U,K,G,G,K,D],Y)}return{u:C,v,positions:w,normals:R,colours:g,surfacesA:y,surfacesB:x,shore:_,unseen:S,indices:E}},"buildChunk"),y_=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let m=Math.floor((f-n)/r);m<=Math.floor((f+n)/r);m++){if(!a&&(m<0||m>=i.chunksV))continue;let g=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Vn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),b_={Forest:{plants:[Vn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Vn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Vn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Vn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Vn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Vn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Vn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Vn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Vn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Vn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Vn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Vn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Vn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},ka=l(i=>Object.prototype.hasOwnProperty.call(b_,i)?b_[i]:null,"growthOf");var $E=["River"],Qn=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),ZE=["Irrigation","Farmland","Fortress","Airbase"],M_=l(i=>i.city||ZE.some(e=>Qn(i,e))?null:ka(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),JE=l((i,e)=>{if(i.city)return null;let t=Qn(i,"Road"),n=Qn(i,"Railroad"),s=t?e.filter(f=>Qn(f.tile,"Road")).map(({offset:f})=>f):[],r=t?e.filter(f=>!!f.tile.city||Qn(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,d)=>f[0]===d[0]&&f[1]===d[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(f=>!n||!r.some(d=>a(d,f))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:Qn(i,"Farmland")?"farmland":Qn(i,"Irrigation")?"irrigation":null,mine:Qn(i,"Mine"),fortress:Qn(i,"Fortress"),airbase:Qn(i,"Airbase"),pollution:Qn(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!$E.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:ka(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=M_(i);return u!==null&&(c.woods=e.filter(f=>M_(f.tile)===u).map(({offset:f})=>f),c.paths=e.filter(f=>!!f.tile.city||Qn(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),S_=JE;var Ct=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),w_={Coal:Ct("rocks","#26262a",4),Gold:Ct("rocks","#d8b13a",3),Gems:Ct("rocks","#59c2d6",4,"#b05ad0"),Iron:Ct("rocks","#8a5a44",4),Wheat:Ct("crop","#d9b84a",5,"#a88a2c"),Spice:Ct("crop","#c0452e",4,"#5d7a2a"),Wine:Ct("crop","#6a2c5e",4,"#5d7a2a"),Silk:Ct("crop","#e9e2cf",3,"#4f7a34"),Fruit:Ct("crop","#e08a2a",4,"#3f7a2a"),Horse:Ct("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Ct("animal","#4a3424",3,"#2a1e16"),Game:Ct("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Ct("animal","#8f7e66",2,"#e8e2d6"),Furs:Ct("animal","#b0602a",2,"#f0e8dc"),Ivory:Ct("animal","#8a8580",1,"#f2ead8"),Seal:Ct("animal","#6e7072",2,"#4a4c4e"),Pheasant:Ct("bird","#8a3a22",2,"#3d6a3a"),Fish:Ct("fish","#b8c4cc",5),Whales:Ct("whale","#3a4048",1),Oil:Ct("derrick","#222224",1,"#121214"),Oasis:Ct("oasis","#3f7a32",3,"#3f86a8"),Peat:Ct("peat","#4a3624",4),Shield:Ct("logs","#7a5532",4,"#c9a47a")},KE=Ct("cairn","#9a9690",5),E_=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(w_,n)?w_[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??KE},"specialLook");var wm=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Hn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},_m=.06,A_="#8c7a58",T_="#5f5953",jE="#a9abae",QE="#5e432b",eA="#4f87b0",tA="#7da33f",nA=["#c2b448","#8fae3e"],C_="#9d968a",iA="#4a4c50",Mm="#6b4a2e",sA="#7a6a58",rA="#b89a5a",aA="#c9b48e",R_="#34322a",An=new Ri(1,1,1),Va=new Pi(.5,.5,1,8),Em=new Ii(.5,1,8),oA=new Ii(.5,1,4),Ga=new Ds(.5,8,6),fl=new Pi(.5,.5,1,4,1,!0),pl=new Ii(.5,1,5,1,!0),Nh=new Ds(.5,5,3),vm={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},lA=.05,cA=.22,P_=72,mi=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),I_=new Map,ym=l(i=>{let e=I_.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Ue(i);e=[t,n,s],I_.set(i,e)}return e},"colourOf"),L_=new WeakMap,uA=l(i=>{let e=L_.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},L_.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),hA=new mt,dA=new We,fA=new W,pA=new xn,mA=new Dn,gA=new W,kt,U_,hn,Pm=class Pm{constructor(e,t){Z(this,kt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=ym(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/_m)),u=Math.max(1,Math.ceil(n/_m)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<c;d++)for(let m=0;m<u;m++){let[g,y]=f(d/c,(m+1)/u),[x,_]=f((d+1)/c,(m+1)/u),[S,A]=f(d/c,m/u),[w,R]=f((d+1)/c,m/u);I(this,kt,hn).call(this,g,y,r,a),I(this,kt,hn).call(this,x,_,r,a),I(this,kt,hn).call(this,S,A,r,a),I(this,kt,hn).call(this,x,_,r,a),I(this,kt,hn).call(this,w,R,r,a),I(this,kt,hn).call(this,S,A,r,a)}}disc(e,t,n,s,r=12){let a=ym(n),[o,c]=e,u=Math.max(1,Math.ceil(t/_m)),h=l((f,d)=>{let m=d/r*Math.PI*2,g=f/u*t;return[o+Math.cos(m)*g,c+Math.sin(m)*g]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let m=h(f+1,d),g=h(f+1,d+1);if(f===0)I(this,kt,hn).call(this,o,c,s,a),I(this,kt,hn).call(this,...g,s,a),I(this,kt,hn).call(this,...m,s,a);else{let y=h(f,d),x=h(f,d+1);I(this,kt,hn).call(this,...y,s,a),I(this,kt,hn).call(this,...x,s,a),I(this,kt,hn).call(this,...m,s,a),I(this,kt,hn).call(this,...x,s,a),I(this,kt,hn).call(this,...g,s,a),I(this,kt,hn).call(this,...m,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=uA(e),c=hA.compose(fA.set(...t),pA.setFromEuler(mA.set(...r)),gA.set(...n)),u=c.elements,h=dA.getNormalMatrix(c).elements,[f,d,m]=ym(s),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],S=a[y+2],A=o[y],w=o[y+1],R=o[y+2],C=h[0]*A+h[3]*w+h[6]*R,v=h[1]*A+h[4]*w+h[7]*R,E=h[2]*A+h[5]*w+h[8]*R,L=Math.hypot(C,v,E)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*S+u[12],u[1]*x+u[5]*_+u[9]*S+u[13],u[2]*x+u[6]*_+u[10]*S+u[14]),g.normals.push(C/L,v/L,E/L),g.colours.push(f,d,m)}}spot(e,t){let n=mi(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-cA-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,AA(e,t,o,c)-lA-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=mi(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<P_;h++){let f=s+h/P_*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>c&&(o=d,c=m)}return this.taken.push([o[0],o[1],n]),o}};kt=new WeakSet,U_=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),hn=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...I(this,kt,U_).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(Pm,"Layer");var Sm=Pm,Am=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),Tm=l(i=>i.alone||i.joins.length>0,"drawn"),xA=l((i,e)=>{let{place:t}=i;Tm(e)&&(e.joins.forEach(n=>i.strip(t.centre,Am(t,n),.07,A_,Hn.road)),i.disc(t.centre,e.alone?.09:.035,A_,Hn.road))},"road"),_A=l((i,e)=>{if(!Tm(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>Am(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,T_,Hn.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,QE,Hn.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,jE,Hn.rail))}),i.disc(t.centre,.05,T_,Hn.ballast)},"railroad"),vA=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?nA[o%2]:tA;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,Hn.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,eA,Hn.field+.001)}}},"fields"),yA=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(An,[e-.02,n+.05,t],[.01,.11,.01],Mm,[0,0,-.3]),i.solid(An,[e+.02,n+.05,t],[.01,.11,.01],Mm,[0,0,.3]),i.solid(Va,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(Em,[a,i.ground(a,o)+.02,o],[.07,.04,.07],sA)})},"mine"),bA=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(An,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],C_)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(Va,[o,i.ground(o,c)+.035,c],[.045,.07,.045],C_)})},"fortress"),MA=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,iA,Hn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Hn.road+.004),i.solid(An,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),SA=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,R_,Hn.smear,14),i.disc(i.spot(7,.5),e*.25,R_,Hn.smear+.001)},"pollution"),wA=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(mi(i.place.seed,n*31+o*2)-.5)*c,t[1]+(mi(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),f=mi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Ga,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(Va,[c,h+.02,u],[.008,.04,.008],s),i.solid(Ga,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(An,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(An,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(An,[c,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(Ga,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(An,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(Ga,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(Ga,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(An,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(An,[c,h+.008,u],[.08,.016,.08],s),i.solid(oA,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,Hn.field+.002);{let[d,m]=r(o+5,.1),g=i.ground(d,m);i.solid(Va,[d,g+.06,m],[.012,.12,.012],Mm),i.solid(Em,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Va:An,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(Ga,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),EA=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+mi(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(Va,[s,a+.02,r],[.05,.04,.05],aA),i.solid(Em,[s,a+.055,r],[.065,.035,.065],rA)})},"hut"),F_={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},O_=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(fl,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(pl,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(pl,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(fl,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(Nh,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(fl,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(pl,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(fl,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(An,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(Nh,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(pl,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(pl,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid(Nh,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(An,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(Nh,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(fl,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(An,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),AA=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),TA=l((i,e)=>{let t=ka(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*mi(r,h),d=t.conifers,m=d!==void 0&&mi(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,g=F_[m]*f;for(let y=0;y<6;y++){let x=mi(r,h+2+y*2)*Math.PI*2,_=Math.sqrt(mi(r,h+3+y*2))*s*.92,S=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(S,A,g)){O_(i,o,m,S,A,f,x),i.taken.push([S,A,g]),i.grown.push([S,A,m]);break}}}})},"plants"),bm=.26,D_=.3,CA=.15,N_=.5,Uh=[.9,1.3],Ir=l((i,e,t)=>mi(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),RA=l((i,e,t)=>{let{centre:n,outline:s,owns:r,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/bm)),f=o.u/h,d=o.v===null?null:Math.max(1,Math.round(o.v/bm)),m=o.v===null||d===null?bm:o.v/d,g=s.map(([v])=>v),y=s.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[S,A]=[Math.floor(Math.min(...y)/m)-1,Math.ceil(Math.max(...y)/m)],w=a.filter(([v,E])=>!i.woods.some(([L,P])=>L===v&&P===E)).map(v=>{let[E,L]=c(v),P=Math.hypot(E-n[0],L-n[1]);return{mu:E,mv:L,length:P}}),R=t.plants.reduce((v,{count:E})=>v+E,0),C=[];for(let v=S;v<=A;v++)for(let E=x;E<=_;E++){let L=(E%h+h)%h,P=d===null?v:(v%d+d)%d,U=(E+.5+(Ir(L,P,0)*2-1)*D_)*f,G=(v+.5+(Ir(L,P,1)*2-1)*D_)*m;if(!r(U,G))continue;let K=w.reduce((V,{mu:Q,mv:z,length:ie})=>{let se=ie/2-((U-n[0])*(Q-n[0])+(G-n[1])*(z-n[1]))/ie;return Math.min(V,Math.max(0,se)/CA)},1);if(Ir(L,P,2)>=N_+(1-N_)*K)continue;let D=Ir(L,P,3)*R,Y=t.plants[0];for(let V of t.plants)if(Y=V,D-=V.count,D<0)break;let ne=t.conifers,F=ne!==void 0&&Ir(L,P,4)>=ne[0]+(ne[1]-ne[0])*u?"broadleaf":Y.kind,j=Y.size[0]+(Y.size[1]-Y.size[0])*Ir(L,P,5);C.push({u:U,v:G,kind:F,plant:Y,room:F_[F]*j*Uh[1],size:j*(Uh[0]+(Uh[1]-Uh[0])*K),facing:Ir(L,P,6)*Math.PI*2})}return C},"woodsPlants"),PA=l((i,e,t)=>{let{centre:n,around:s,toward:r,heightAt:a}=i.place,o=Math.max(...s.map(u=>{let[h,f]=r(u);return Math.hypot(h-n[0],f-n[1])})),c=e.paths.map(u=>r(u));c.forEach((u,h)=>c.slice(h+1).forEach(f=>{Math.hypot(f[0]-u[0],f[1]-u[1])<=o+1e-6&&i.lines.push([u,f])})),RA(e,i.place,t).forEach(({u,v:h,kind:f,plant:d,size:m,room:g,facing:y})=>{f!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(O_(i,d,f,u,h,m,y),i.grown.push([u,h,f]))})},"woods"),Cm=l((i,e,t)=>{let n=new Sm(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&Tm(o)&&(o.joins.forEach(c=>n.lines.push([s,Am(e,c)])),o.alone&&n.lines.push([s,s]))}),i.fortress){let o=r*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[s[0]+u,s[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=r*.75;n.lines.push([[s[0]-o,s[1]+.12],[s[0]+o,s[1]+.12]])}i.irrigation!==null&&vA(n,i.irrigation),i.road!==null&&xA(n,i.road),i.railroad!==null&&_A(n,i.railroad),i.mine&&yA(n,n.claim(...vm.mine,.1)),i.fortress&&bA(n),i.airbase&&MA(n),i.pollution&&SA(n),i.specials.forEach(([o,c],u)=>wA(n,E_(o,c),n.claim(...vm.special(u),.1),u+1)),i.hut&&EA(n,n.claim(...vm.hut,.13));let a=ka(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?PA(n,i,a):TA(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),IA=l((i,e,t)=>{let n=wm();return t.forEach(({overlay:s,place:r})=>Cm(s,r,n)),Rm(i,e,n)},"overlayMesh"),Rm=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),B_=IA;var Hs,dn,gi,gl,xi,Wn,bn,Ha,xl,Lr,_l,vl,wt,z_,Lm,Dm,Fh,Oh,k_,ml,Nm=class Nm{constructor(e){Z(this,wt);Z(this,Hs);Z(this,dn);Z(this,gi,[]);Z(this,gl);Z(this,xi);Z(this,Wn,new Set);Z(this,bn,null);Z(this,Ha,null);Z(this,xl,new Map);Z(this,Lr,[0,0]);Z(this,_l);Z(this,vl);k(this,xi,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=m_({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),k(this,Hs,x_({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:l((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:l((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),k(this,dn,__(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-a,m-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,y]=this.layout.centre(d,m);return Math.hypot(g-a,y-o)}));k(this,gl,1.2+c+hs*Math.SQRT2+Math.max((zi.reach-1)*u,u/2+hs*Math.SQRT2+Dh));let h=this.layout.outline(0,0),f=h.flatMap(([d,m],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-d,x-m);return _===0?[]:[{away:Math.abs((y-d)*(o-m)-(x-m)*(a-d))/_,normal:[(x-m)/_,(d-y)/_]}]});k(this,_l,Math.min(...f.map(({away:d})=>d))),k(this,vl,Math.min(...f.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=p(this,dn),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,x)=>{let _=`${y},${x}`,S=n.get(_);return S===void 0&&(S=p(this,Hs).height(y*s,x*r),n.set(_,S)),S},"at"),f=h(a,o),d=h(a+1,o),m=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(m-f)*u;let g=h(a+1,o+1);return g+(m-g)*(1-c)+(d-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=p(this,dn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,dn).chunksV*p(this,dn).stepsV*p(this,dn).spacingV}heightAt(e,t){return p(this,Hs).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=p(this,dn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);k(this,gi,I(this,wt,ml).call(this,r,e,t)),k(this,Lr,[e,t]),r.forEach(a=>p(this,Wn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return[];k(this,Lr,[t,n]),(e.length===0?[...I(this,wt,Oh).call(this).values()].flat():I(this,wt,k_).call(this,e)).forEach(([o,c])=>{let u=I(this,wt,Fh).call(this,o,c);if(p(this,Wn).has(u)||p(this,bn)?.key===u&&!I(this,wt,z_).call(this,p(this,bn),o,c))return;JSON.stringify(I(this,wt,Lm).call(this,o,c))!==(p(this,xl).get(`${o},${c}`)??"null")&&p(this,Wn).add(u)});let r=p(this,Hs).refresh(s?void 0:e);if(r.length===0)return r;let a=y_(p(this,dn),this.layout,r,p(this,gl)).map(([o,c])=>`${o},${c}`);return k(this,gi,I(this,wt,ml).call(this,[...new Set([...p(this,gi),...a])],t,n)),r}refocus(e,t){k(this,gi,I(this,wt,ml).call(this,p(this,gi),e,t)),k(this,Lr,[e,t])}pending(){return p(this,gi).length}overlaysPending(){return p(this,Wn).size+(p(this,bn)===null||p(this,Wn).has(p(this,bn).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,gi).length>0;){if(s())return;let r=p(this,gi).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,v_(p(this,dn),p(this,Hs),a,o)),p(this,Wn).add(r)}for(;p(this,Wn).size>0||p(this,bn)!==null;){if(p(this,bn)!==null&&p(this,Wn).has(p(this,bn).key)&&k(this,bn,null),p(this,bn)===null){let d=I(this,wt,ml).call(this,[...p(this,Wn)],...p(this,Lr))[0];p(this,Wn).delete(d),k(this,bn,{key:d,squares:I(this,wt,Oh).call(this).get(d)??[],done:0,laid:wm(),heights:new Map})}let r=p(this,bn);for(;r.done<r.squares.length;){let[d,m]=r.squares[r.done],g=I(this,wt,Dm).call(this,d,m,r.heights);if(r.done++,g!==null&&Cm(g.overlay,g.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=p(this,dn);k(this,bn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:Rm(a*c*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=p(this,dn),o=new Map,c=(I(this,wt,Oh).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>I(this,wt,Dm).call(this,u,h,o)??[]);return c.length===0?null:B_(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return I(this,wt,Fh).call(this,e,t)}};Hs=new WeakMap,dn=new WeakMap,gi=new WeakMap,gl=new WeakMap,xi=new WeakMap,Wn=new WeakMap,bn=new WeakMap,Ha=new WeakMap,xl=new WeakMap,Lr=new WeakMap,_l=new WeakMap,vl=new WeakMap,wt=new WeakSet,z_=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),Lm=l(function(e,t){let n=p(this,xi).topology();return S_(p(this,xi).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:p(this,xi).get(r[0],r[1])}]}))},"#overlayAt"),Dm=l(function(e,t,n){let s=I(this,wt,Lm).call(this,e,t);if(p(this,xl).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t),o=p(this,xi).topology();return{overlay:s,place:{centre:[r,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:p(this,_l),inner:p(this,vl),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,f]=this.layout.tileAt(c,u);return h===e&&f===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),Fh=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=p(this,dn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),Oh=l(function(){if(p(this,Ha)===null){let e=new Map;for(let t=0;t<p(this,xi).height();t++)for(let n=0;n<p(this,xi).width();n++){let s=I(this,wt,Fh).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}k(this,Ha,e)}return p(this,Ha)},"#chunksOfSquares"),k_=l(function(e){let t=p(this,xi).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),ml=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=p(this,dn),c=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),m=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((x+.5)*u-n,f))},"distance");return[...e].sort((g,y)=>m(g)-m(y))},"#nearestFirst"),l(Nm,"Land");var Im=Nm,G_=Im;var LA=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Dr=LA;var V_=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var DA=8,NA=.92,UA=.02,H_=3,FA=50,OA=8,BA=10,W_=250,yl,bl,Wa,Xa,Nr,Ws,Um=class Um{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){Z(this,yl);Z(this,bl);Z(this,Wa);Z(this,Xa);Z(this,Nr,!1);Z(this,Ws);this.pointerId=e,k(this,yl,t),k(this,bl,n),k(this,Wa,t),k(this,Xa,n),k(this,Ws,[{x:t,y:n,time:s}])}dragging(){return p(this,Nr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!p(this,Nr)&&Math.hypot(t-p(this,yl),n-p(this,bl))<DA)return null;let r=!p(this,Nr),a=p(this,Wa)-t,o=p(this,Xa)-n;return k(this,Nr,!0),k(this,Wa,t),k(this,Xa,n),p(this,Ws).push({x:t,y:n,time:s}),p(this,Ws).length>20&&p(this,Ws).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return V_(p(this,Ws),e)}};yl=new WeakMap,bl=new WeakMap,Wa=new WeakMap,Xa=new WeakMap,Nr=new WeakMap,Ws=new WeakMap,l(Um,"Press");var Bh=Um,Vi,Ml,Fm=class Fm{constructor(e){Z(this,Vi,null);Z(this,Ml);k(this,Ml,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>H_?H_/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<UA){k(this,Vi,null);return}p(this,Ml).call(this,-s*u,-r*u);let h=Math.pow(NA,u/16);s*=h,r*=h,k(this,Vi,window.requestAnimationFrame(o))},"step");k(this,Vi,window.requestAnimationFrame(o))}gliding(){return p(this,Vi)!==null}stop(){p(this,Vi)!==null&&(window.cancelAnimationFrame(p(this,Vi)),k(this,Vi,null))}};Vi=new WeakMap,Ml=new WeakMap,l(Fm,"Glide");var zh=Fm,Ur,Sl,wl,qa,Om=class Om{constructor(){Z(this,Ur,0);Z(this,Sl,0);Z(this,wl,-1/0);Z(this,qa,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=W_)return 0;let r=Math.sign(s),a=e.timeStamp-p(this,wl)>W_||r!==p(this,Sl);if(k(this,wl,e.timeStamp),k(this,Sl,r),a&&(k(this,Ur,0),k(this,qa,0)),n&&!e.ctrlKey&&p(this,qa)>=BA)return 0;if(!a&&n){if(k(this,Ur,p(this,Ur)+s),Math.abs(p(this,Ur))<(e.ctrlKey?OA:FA))return 0;k(this,Ur,0)}return n&&!e.ctrlKey&&k(this,qa,p(this,qa)+1),s<0?1:-1}};Ur=new WeakMap,Sl=new WeakMap,wl=new WeakMap,qa=new WeakMap,l(Om,"WheelTurn");var kh=Om;var zA=350,kA=.006,X_=.004,Hi,Qt,Mn,Ya,Wi,_i,Wh,ti,ni,Xs,$a,Xn,qs,Pe,ei,Gh,Vh,q_,zm,ds,km,Y_,fs,$_,Z_,J_,K_,El,j_,Q_,ev,Hh,Gm=class Gm{constructor(e,t,n=null){Z(this,Pe);Z(this,Hi);Z(this,Qt);Z(this,Mn,null);Z(this,Ya,[0,0]);Z(this,Wi,null);Z(this,_i);Z(this,Wh,new kh);Z(this,ti,new Map);Z(this,ni,null);Z(this,Xs,null);Z(this,$a,[]);Z(this,Xn);Z(this,qs,null);k(this,Hi,e),k(this,Qt,t),k(this,Xn,n),k(this,_i,new zh((s,r)=>{let[a,o]=I(this,Pe,q_).call(this);I(this,Pe,km).call(this,[a,o],[a-s,o-r])})),I(this,Pe,ei).call(this,"pointerdown",s=>I(this,Pe,Y_).call(this,s)),I(this,Pe,ei).call(this,"pointermove",s=>I(this,Pe,Z_).call(this,s)),I(this,Pe,ei).call(this,"pointerup",s=>I(this,Pe,J_).call(this,s)),I(this,Pe,ei).call(this,"pointercancel",s=>I(this,Pe,K_).call(this,s)),I(this,Pe,ei).call(this,"wheel",s=>I(this,Pe,Q_).call(this,s),{passive:!1}),I(this,Pe,ei).call(this,"gesturestart",s=>I(this,Pe,Hh).call(this,s,"start"),{passive:!1}),I(this,Pe,ei).call(this,"gesturechange",s=>I(this,Pe,Hh).call(this,s,"change"),{passive:!1}),I(this,Pe,ei).call(this,"gestureend",s=>I(this,Pe,Hh).call(this,s,"end"),{passive:!1}),I(this,Pe,ei).call(this,"contextmenu",s=>I(this,Pe,$_).call(this,s)),I(this,Pe,ei).call(this,"pointerleave",()=>p(this,Xn)?.hover(null)),I(this,Pe,ei).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return p(this,Mn)?.dragging()===!0||p(this,Wi)!==null}moving(){return this.dragging()||p(this,ni)!==null||p(this,_i).gliding()}dispose(){p(this,_i).stop(),I(this,Pe,fs).call(this),p(this,$a).forEach(([e,t,n])=>p(this,Hi).removeEventListener(e,t,n)),k(this,$a,[])}};Hi=new WeakMap,Qt=new WeakMap,Mn=new WeakMap,Ya=new WeakMap,Wi=new WeakMap,_i=new WeakMap,Wh=new WeakMap,ti=new WeakMap,ni=new WeakMap,Xs=new WeakMap,$a=new WeakMap,Xn=new WeakMap,qs=new WeakMap,Pe=new WeakSet,ei=l(function(e,t,n){p(this,Hi).addEventListener(e,t,n),p(this,$a).push([e,t,n])},"#listen"),Gh=l(function(){return{width:p(this,Hi).clientWidth||1,height:p(this,Hi).clientHeight||1}},"#box"),Vh=l(function([e,t]){let{width:n,height:s}=I(this,Pe,Gh).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),q_=l(function(){let{width:e,height:t}=I(this,Pe,Gh).call(this);return[e/2,t/2]},"#middle"),zm=l(function(){let{width:e,height:t}=I(this,Pe,Gh).call(this);return e/t},"#aspect"),ds=l(function(e){let t=p(this,Hi).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),km=l(function(e,t){p(this,Qt).setOrbit(Jx(p(this,Qt).orbit(),p(this,Qt).lookHeight(),I(this,Pe,Vh).call(this,e),I(this,Pe,Vh).call(this,t),I(this,Pe,zm).call(this)))},"#pan"),Y_=l(function(e){if(p(this,_i).stop(),p(this,Xn)?.hover(null),e.pointerType==="touch"&&(p(this,ti).set(e.pointerId,I(this,Pe,ds).call(this,e)),p(this,ti).size===2)){k(this,Mn,null),I(this,Pe,fs).call(this),k(this,ni,I(this,Pe,El).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Hi).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,Wi,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Bh(e),[n,s]=I(this,Pe,ds).call(this,e),{clientX:r,clientY:a}=e;k(this,Mn,t),k(this,Ya,[n,s]),I(this,Pe,fs).call(this),k(this,qs,window.setTimeout(()=>{k(this,qs,null),p(this,Mn)===t&&!t.dragging()&&p(this,Xn)?.menu(n,s,r,a,!0)===!0&&k(this,Mn,null)},zA))}}},"#down"),fs=l(function(){p(this,qs)!==null&&(window.clearTimeout(p(this,qs)),k(this,qs,null))},"#stopHold"),$_=l(function(e){if(p(this,Xn)===null||!p(this,Xn).menuOnRightClick()||(e.preventDefault(),p(this,Xn).menuOpen()))return;let[t,n]=I(this,Pe,ds).call(this,e);p(this,Xn).menu(t,n,e.clientX,e.clientY,!1)&&(I(this,Pe,fs).call(this),k(this,Mn,null))},"#rightClick"),Z_=l(function(e){if(p(this,ti).has(e.pointerId)&&(p(this,ti).set(e.pointerId,I(this,Pe,ds).call(this,e)),p(this,ni)!==null)){I(this,Pe,j_).call(this);return}let t=p(this,Wi);if(t!==null&&t.pointerId===e.pointerId){let r=p(this,Qt).orbit();p(this,Qt).setOrbit(Cr({...r,yaw:r.yaw-(e.clientX-t.x)*kA,pitch:r.pitch+(e.clientY-t.y)*X_})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,Mn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,_i).gliding()){let[r,a]=I(this,Pe,ds).call(this,e);p(this,Xn)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;I(this,Pe,fs).call(this);let s=I(this,Pe,ds).call(this,e);I(this,Pe,km).call(this,p(this,Ya),s),k(this,Ya,s)},"#move"),J_=l(function(e){if(p(this,ti).delete(e.pointerId),p(this,ni)!==null){k(this,ni,p(this,ti).size<2?null:I(this,Pe,El).call(this));return}if(p(this,Wi)?.pointerId===e.pointerId){k(this,Wi,null);return}let t=p(this,Mn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,Mn,null),I(this,Pe,fs).call(this),!t.dragging()){let[n,s]=I(this,Pe,ds).call(this,e);p(this,Xn)?.click(n,s,e.clientX,e.clientY);return}Dr()||p(this,_i).start(t.releaseVelocity(e.timeStamp))}},"#up"),K_=l(function(e){p(this,ti).delete(e.pointerId),p(this,ni)!==null&&k(this,ni,p(this,ti).size<2?null:I(this,Pe,El).call(this)),p(this,Mn)?.pointerId===e.pointerId&&(k(this,Mn,null),I(this,Pe,fs).call(this)),p(this,Wi)?.pointerId===e.pointerId&&k(this,Wi,null)},"#cancel"),El=l(function(){let[e,t]=[...p(this,ti).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,Qt).orbit()}},"#measurePair"),j_=l(function(){let e=p(this,ni),t=I(this,Pe,El).call(this);e===null||t===null||p(this,Qt).setOrbit(Cr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*X_}))},"#twoFingers"),Q_=l(function(e){e.preventDefault();let t=p(this,Wh).turned(e,p(this,Xs)?.at??null);t!==0&&(p(this,_i).stop(),I(this,Pe,ev).call(this,t,I(this,Pe,ds).call(this,e)))},"#wheelTurned"),ev=l(function(e,t){let n=p(this,Qt).orbit(),s=Oa(n,e),r=Fa(n,p(this,Qt).lookHeight(),I(this,Pe,Vh).call(this,t),I(this,Pe,zm).call(this));if(r===null||s.distance===n.distance){p(this,Qt).setOrbit(s);return}let a=1-s.distance/n.distance;p(this,Qt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),Hh=l(function(e,t){if(e.preventDefault(),p(this,ni)!==null){k(this,Xs,null);return}if(t==="end"){k(this,Xs,null);return}if(t==="start"){p(this,_i).stop(),k(this,Mn,null),I(this,Pe,fs).call(this),k(this,Xs,{orbit:p(this,Qt).orbit(),at:e.timeStamp});return}let n=p(this,Xs);n!==null&&(n.at=e.timeStamp,p(this,Qt).setOrbit(Cr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(Gm,"CameraInput");var Bm=Gm,tv=Bm;var GA=["#9a9a9a","#4a4a4a"],Al=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?GA:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Vm=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),VA=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),HA=l((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=Vm(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Al(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:Al(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:VA(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),Hm=HA;var sv={step:250,ramp:100,most:2e3},rv={step:125,ramp:50,most:1e3},av=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),WA=50,XA=.05,Wm=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),nv=l((i,e)=>{let{started:t,from:n,speed:s,rising:r,rise:a,top:o,going:c,stopping:u,fall:h,to:f}=i,d=Math.max(0,e-t);if(d<r)return{along:n+s*d+a*d*d/2,speed:s+a*d};let m=n+(s+o)/2*r;if(d<r+c)return{along:m+o*(d-r),speed:o};let g=m+o*c,y=d-r-c;return y<u?{along:g+o*y-h*y*y/2,speed:o-h*y}:{along:f,speed:0}},"motionAt"),Xh=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),iv=l((i,e,t,n,s)=>{let r=Math.max(0,n-e),a=Math.max(1,s.ramp),o=Math.max(1/s.step,s.most>a*2?r/(s.most-a):0),c=o/a;if(r<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=r){let x=2*r/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let u=Math.min(o,Math.sqrt(c*r+t*t/2)),h=Math.abs(u-t)/c,f=u>=t?c:-c,d=u/c,m=(t+u)/2*h,g=u*d/2,y=Math.max(0,(r-m-g)/u);return{started:i,from:e,speed:t,rising:h,rise:f,top:u,going:y,stopping:d,fall:c,to:n}},"plan"),Za=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),qA=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),Xm=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),Ka,Sn,vi,Tl,Cl,yt,ov,lv,Ym,$m,cv,Zm,qh,Ja,Jm=class Jm{constructor(e){Z(this,yt);Z(this,Ka);Z(this,Sn,new Map);Z(this,vi,new Map);Z(this,Tl,[]);Z(this,Cl,0);k(this,Ka,e)}walking(e){return p(this,vi).has(e)}size(){return p(this,Sn).size}step(e,t,n,s,r,a,o){let c=p(this,vi).get(e),u=c===void 0?void 0:p(this,Sn).get(c),h=u===void 0?s:I(this,yt,qh).call(this,u,a),f=[...p(this,Sn).values()].find(d=>d!==u&&I(this,yt,ov).call(this,d,t,n,a)&&I(this,yt,cv).call(this,I(this,yt,qh).call(this,d,d.stepped),u===void 0?s:I(this,yt,qh).call(this,u,d.stepped)));if(f!==void 0)return u!==void 0&&I(this,yt,$m).call(this,u,e),f.units.push(e),p(this,vi).set(e,f.id),f.id;if(u!==void 0&&Wm(u.squares[u.squares.length-1],t)){if(u.units.length>1){let d={...u,id:`walk-${++or(this,Cl)._}`,units:u.units.filter(m=>m!==e),points:[...u.points],squares:[...u.squares]};p(this,Sn).set(d.id,d),d.units.forEach(m=>p(this,vi).set(m,d.id)),u.units=[e]}return I(this,yt,Ym).call(this,u,n,r,a,o),u.id}return u!==void 0&&I(this,yt,$m).call(this,u,e),I(this,yt,lv).call(this,e,t,n,h,r,a,o)}at(e){let t=[],n=[];return p(this,Sn).forEach(s=>{let r=I(this,yt,Ja).call(this,s,e);if(e>=Xh(s.motion)){n.push(r),I(this,yt,Zm).call(this,s);return}t.push(r)}),{going:t,ended:n}}dropped(){return p(this,Tl).splice(0)}nextEnd(){let e=null;return p(this,Sn).forEach(t=>{let n=Xh(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return p(this,Sn).forEach(s=>{e(s.units)&&(n.push(I(this,yt,Ja).call(this,s,Math.max(t,Xh(s.motion)))),I(this,yt,Zm).call(this,s))}),n}endAll(e){let t=[...p(this,Sn).values()].map(n=>I(this,yt,Ja).call(this,n,Math.max(e,Xh(n.motion))));return p(this,Sn).clear(),p(this,vi).clear(),t}};Ka=new WeakMap,Sn=new WeakMap,vi=new WeakMap,Tl=new WeakMap,Cl=new WeakMap,yt=new WeakSet,ov=l(function(e,t,n,s){let r=e.squares.length-1;return r>0&&s-e.stepped<=WA&&Wm(e.squares[r-1],t)&&Wm(e.squares[r],n)},"#justMade"),lv=l(function(e,t,n,s,r,a,o){let c=`walk-${++or(this,Cl)._}`,u={id:c,units:[e],from:t,points:[s],squares:[t],stepped:a,motion:iv(a,0,0,0,o),turned:null};return p(this,Sn).set(c,u),p(this,vi).set(e,c),I(this,yt,Ym).call(this,u,n,r,a,o),c},"#setOff"),Ym=l(function(e,t,n,s,r){let{u:a,v:o}=p(this,Ka),c=e.points[e.points.length-1],u=c.middle??c.at,{along:h,speed:f}=nv(e.motion,s),d=Math.max(0,Math.floor(h)-1),m=e.points.length>1?I(this,yt,Ja).call(this,e,s).facing:null,g=e.points.length-1,y=h-(g-1);c.middle!==void 0&&y*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[g]={at:c.middle,lift:0,middle:c.middle}),e.points.splice(0,d),e.squares.splice(0,d),e.points.push({at:[Za(n.at[0],c.at[0],a),Za(n.at[1],c.at[1],o)],lift:n.lift,...n.middle===void 0?{}:{middle:[Za(n.middle[0],u[0],a),Za(n.middle[1],u[1],o)]}}),e.squares.push(t),e.stepped=s,e.turned=m===null?null:{facing:m,at:s,over:r.step/2},e.motion=iv(s,h-d,f,e.points.length-1,r)},"#goOn"),$m=l(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,vi).delete(t),e.units.length===0&&(p(this,Sn).delete(e.id),p(this,Tl).push(e.id))},"#leave"),cv=l(function(e,t){let{u:n,v:s}=p(this,Ka);return Math.hypot(Za(e.at[0],t.at[0],n)-t.at[0],Za(e.at[1],t.at[1],s)-t.at[1])<XA},"#beside"),Zm=l(function(e){p(this,Sn).delete(e.id),e.units.forEach(t=>p(this,vi).delete(t))},"#end"),qh=l(function(e,t){let{at:n,lift:s}=I(this,yt,Ja).call(this,e,t);return{at:n,lift:s}},"#drawn"),Ja=l(function(e,t){let{points:n,squares:s,turned:r}=e,a=n.length-1,o=Math.min(a,Math.max(0,nv(e.motion,t).along)),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],f=n[c+1]??h,d=[h.at[0]+(f.at[0]-h.at[0])*u,h.at[1]+(f.at[1]-h.at[1])*u],m=l(S=>n[S].middle??n[S].at,"middle"),g=l(S=>S<0||S>=a?null:qA(m(S),m(S+1)),"way"),y=g(c)??0,x=u>.75&&g(c+1)!==null?Xm(y,g(c+1),(u-.75)*2):u<.25&&g(c-1)!==null?Xm(g(c-1),y,(u+.25)*2):y,_=r!==null&&t-r.at<r.over?Xm(r.facing,x,Math.max(0,t-r.at)/r.over):x;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(f.lift-h.lift)*u,facing:_,from:e.from,before:s[a-1]??s[a],to:s[a]}},"#walker"),l(Jm,"Walks");var qm=Jm,uv=qm;var YA=1,$A=.04,ZA=12,JA=l((i,e,t,n,s,{water:r=0,ceiling:a=YA}={})=>{let{from:o,direction:c}=cm(i,e,t,n),[u,h,f]=o,[d,m,g]=c;if(m>-1e-6)return null;let y=l(v=>[u+d*v,h+m*v,f+g*v],"at"),x=l(v=>{let[E,L,P]=y(v);return L-Math.max(r,s(E,P))},"above"),_=Math.max(0,(h-a)/-m),S=(h-r)/-m,A=$A/Math.max(1e-6,Math.hypot(d,g)),w=_;for(let v=_;;v=Math.min(S,v+A)){if(x(v)<=0){let E=w,L=v;for(let G=0;G<ZA;G++){let K=(E+L)/2;x(K)>0?E=K:L=K}let[P,,U]=y(L);return[P,U]}if(v>=S)break;w=v}let[R,,C]=y(S);return[R,C]},"pickGround"),hv=JA;var Yh=4,Ys,Rl,Fr,Or,Tn,ja,$s,ps,Pl,Il,Ll,yi,$h,dv,jm,Qm=class Qm{constructor(e,t,n,s,r){Z(this,yi);Z(this,Ys);Z(this,Rl);Z(this,Fr);Z(this,Or);Z(this,Tn);Z(this,ja);Z(this,$s);Z(this,ps);Z(this,Pl);Z(this,Il);Z(this,Ll,l(e=>{let t=p(this,Ys).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;p(this,Il).call(this,n*p(this,Tn),s*p(this,ja))},"#click"));k(this,Ys,e),k(this,Fr,t),k(this,Or,n),k(this,Tn,t.period().u),k(this,ja,s),k(this,Il,r),k(this,ps,document.createElement("canvas"));let{v:a}=t.period();k(this,$s,a),k(this,Pl,[[0,0],[-p(this,Tn),0],...a===null?[]:[[0,-a],[-p(this,Tn),-a]]]);let o=Math.max(1,Math.round(p(this,Tn)*Yh)),c=Math.max(1,Math.round(p(this,ja)*Yh));[e,p(this,ps)].forEach(u=>{u.width=o,u.height=c}),k(this,Rl,e.getContext("2d")),e.addEventListener("click",p(this,Ll))}dispose(){p(this,Ys).removeEventListener("click",p(this,Ll))}redraw(){let e=p(this,ps).getContext("2d");if(e===null)return;let t=p(this,Or).width(),n=p(this,Or).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,ps).width,p(this,ps).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=p(this,Or).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=br(c).colour,p(this,Pl).forEach(([f,d])=>{I(this,yi,dv).call(this,e,a,r,f,d),e.fill()});let[u,h]=p(this,Fr).centre(a,r);if(o.city)s.push([u,h,Al(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=Vm(o.units,null);f!==null&&s.push([u,h,Al(f.player)[0],1.4])}}s.forEach(([r,a,o,c])=>I(this,yi,jm).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=p(this,Rl);if(n===null)return;if(n.clearRect(0,0,p(this,Ys).width,p(this,Ys).height),n.drawImage(p(this,ps),0,0),t!==null){let[h,f]=p(this,Fr).centre(t.x,t.y);n.fillStyle="#ffffff",I(this,yi,jm).call(this,h,f).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=p(this,$s),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-p(this,Tn)*Math.floor(r/p(this,Tn)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-p(this,Tn),0,p(this,Tn)].forEach(f=>{n.beginPath(),e.forEach(([d,m],g)=>{let[y,x]=I(this,yi,$h).call(this,d+o+f,m+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};Ys=new WeakMap,Rl=new WeakMap,Fr=new WeakMap,Or=new WeakMap,Tn=new WeakMap,ja=new WeakMap,$s=new WeakMap,ps=new WeakMap,Pl=new WeakMap,Il=new WeakMap,Ll=new WeakMap,yi=new WeakSet,$h=l(function(e,t){return[e*Yh,t*Yh]},"#px"),dv=l(function(e,t,n,s=0,r=0){e.beginPath(),p(this,Fr).outline(t,n).forEach(([a,o],c)=>{let[u,h]=I(this,yi,$h).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),jm=l(function(e,t){return(p(this,$s)===null?[0]:[-p(this,$s),0,p(this,$s)]).flatMap(s=>[-p(this,Tn),0,p(this,Tn)].map(r=>I(this,yi,$h).call(this,e+r,t+s)))},"#everywhere"),l(Qm,"Minimap3D");var Km=Qm,fv=Km;var KA=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),pv=l(i=>{let e=KA(i).sort((n,s)=>n._.charCodeAt(0)-s._.charCodeAt(0)).flatMap(({_:n,value:s})=>Array.from({length:s},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,s)=>({_:n,column:s%t,row:Math.floor(s/t)}))}},"tileYieldGrid");var mv=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),gv=l(i=>i.city??i.workedBy??null,"squareCity");var jA=.9,QA=l(i=>{let{columns:e,icons:t}=pv(i),n=Math.min(e,t.length),s=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:a,row:o})=>({_:r,right:a-(n-1)/2,up:(s-1)/2-o}))}},"yieldSlots"),eT=l((i,e)=>jA*e/Math.hypot(i,2),"yieldIconSize"),xv=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return Math.hypot(o-t,c-n)}))},"innerOf"),_v=l(({at:i,yields:e},t)=>{let{columns:n,slots:s}=QA(e);return s.length===0?null:{at:i,size:eT(n,t),slots:s}},"laidYields"),vv=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},s=new Map,r=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=s.get(u);d===void 0&&(d=n.names.push(u)-1,s.set(u,d)),n.anchors[r*3]=a[0],n.anchors[r*3+1]=a[1],n.anchors[r*3+2]=a[2],n.slots[r*2]=h,n.slots[r*2+1]=f,n.sizes[r]=o,n.cells[r]=d,r++})}),n},"yieldMesh");var tT=10,nT=4e3,yv=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),iT=350,sT=500,rT=.25,aT=400,Gt,zl,kl,$e,en,zr,Gl,Vl,lt,Mt,Cn,Qa,Hl,kr,Ks,eo,Wl,Xl,qn,to,ms,tn,js,Gr,Vr,Yn,Qs,er,ql,no,io,Hr,Rn,Xi,qi,Yl,$l,Zl,Yi,tr,so,$n,ro,ao,gs,xs,oo,nr,Wr,lo,bi,Jl,Mi,ir,Kl,Xr,$i,qr,Yr,jl,Ql,co,ec,uo,tc,ho,fo,$r,q,t0,bv,n0,Mv,Zh,Sv,Dl,Jh,wv,i0,Nl,Ev,Br,Kh,Av,Tv,Cv,jh,Qh,Ul,Rv,Pv,Iv,s0,ed,Lv,r0,Fl,Zs,Ol,Dv,Nv,a0,Js,Uv,Fv,Ov,Bv,Bl,o0,zv,kv,l0,Wt,Gv,Vv,c0,u0=class u0{constructor(e,t=c_){Z(this,q);Z(this,Gt);Z(this,zl);Z(this,kl,[]);Z(this,$e);Z(this,en);Z(this,zr,null);Z(this,Gl,0);Z(this,Vl,"");Z(this,lt);Z(this,Mt,null);Z(this,Cn,null);Z(this,Qa);Z(this,Hl);Z(this,kr);Z(this,Ks,null);Z(this,eo,null);Z(this,Wl);Z(this,Xl,!1);Z(this,qn);Z(this,to);Z(this,ms,new Map);Z(this,tn);Z(this,js,new Map);Z(this,Gr,new Map);Z(this,Vr,new Map);Z(this,Yn,new Map);Z(this,Qs,new Set);Z(this,er,new Map);Z(this,ql,0);Z(this,no,new Map);Z(this,io,new Map);Z(this,Hr);Z(this,Rn,null);Z(this,Xi,null);Z(this,qi,null);Z(this,Yl,l(()=>{I(this,q,Br).call(this)&&k(this,qi,null),I(this,q,Kh).call(this)},"#pressed"));Z(this,$l,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||I(this,q,Kh).call(this)},"#keyed"));Z(this,Zl);Z(this,Yi,null);Z(this,tr,null);Z(this,so);Z(this,$n,l(()=>{let e=p(this,tr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,tr,null),document.removeEventListener("keydown",p(this,$n),!0),e.open&&p(this,qn).endTooltip(p(this,Gt)))},"#endHover"));Z(this,ro,null);Z(this,ao,!0);Z(this,gs,new Map);Z(this,xs,null);Z(this,oo,new Map);Z(this,nr,new Map);Z(this,Wr,[]);Z(this,lo,0);Z(this,bi,null);Z(this,Jl,null);Z(this,Mi,!0);Z(this,ir);Z(this,Kl,l(()=>{},"#stopUnitSize"));Z(this,Xr,!1);Z(this,$i,!0);Z(this,qr,!1);Z(this,Yr,new Map);Z(this,jl);Z(this,Ql,l(()=>{},"#stopArtChanged"));Z(this,co,!1);Z(this,ec);Z(this,uo);Z(this,tc,"");Z(this,ho,l(()=>I(this,q,c0).call(this),"#resizeHandler"));Z(this,fo,null);Z(this,$r,!1);k(this,Gt,e.mapCanvas),k(this,zl,e.coveredBy),k(this,ec,e.art),k(this,to,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,ir,e.unitSize?.get()??1),k(this,uo,e.art.id()),this.world=e.world,k(this,$e,new G_(e.world)),k(this,tn,new uv(p(this,$e).layout.period())),k(this,Hr,e.walks),k(this,jl,xv(p(this,$e).layout,e.world.topology())),k(this,Wr,e.world.tiles()),k(this,lo,p(this,Wr).length),k(this,Hl,e.cameraDistance),k(this,Wl,e.lockVerticalEdges);let n=e.cameraDistance.get();k(this,lt,I(this,q,Fl).call(this,{...$x(p(this,$e).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,kr,p(this,lt).distance),this.portal=new A0(e,{centre:l(()=>I(this,q,Lv).call(this),"centre"),centreOn:l((s,r)=>I(this,q,Tv).call(this,s,r),"centreOn"),changed:l(()=>I(this,q,Wt).call(this),"changed"),visible:l((s,r,a)=>I(this,q,Qh).call(this,s,r,a),"visible")}),k(this,en,t(e.mapCanvas,{period:p(this,$e).layout.period(),ground:p(this,$e).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,ro,new fv(e.minimapCanvas,p(this,$e).layout,e.world,p(this,$e).extentV(),(s,r)=>{k(this,qi,null),I(this,q,Ol).call(this,{...p(this,Mt)?.to??p(this,lt),focus:[s,r]})})),e.debug&&e.mapCanvas.parentElement&&(k(this,zr,I(this,q,Gv).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,$e).queueAll(...I(this,q,ed).call(this)),I(this,q,Bl).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),k(this,qn,e.squares),k(this,so,e.playerId),k(this,Zl,e.transport),k(this,Qa,new tv(e.mapCanvas,{orbit:l(()=>p(this,lt),"orbit"),lookHeight:l(()=>p(this,Cn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>I(this,q,Rv).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>I(this,q,Pv).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>p(this,qn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>p(this,qn).menuOpen(),"menuOpen"),hover:l(s=>I(this,q,Iv).call(this,s),"hover")})),window.addEventListener("resize",p(this,ho)),document.addEventListener("keydown",p(this,$l),!0),e.mapCanvas.addEventListener("pointerdown",p(this,Yl),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,fo,new ResizeObserver(p(this,ho))),p(this,fo).observe(e.mapCanvas.parentElement)),I(this,q,c0).call(this),I(this,q,Wt).call(this),k(this,Kl,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==p(this,ir)&&!p(this,$r)&&(k(this,ir,s),I(this,q,Bl).call(this),I(this,q,Wt).call(this))})??(()=>{})),k(this,Ql,e.artChanged?.(()=>{p(this,$r)||(k(this,$i,!0),I(this,q,Wt).call(this))})??(()=>{}))}land(){return p(this,$e)}orbit(){return p(this,lt)}moving(){return p(this,Mt)!==null||p(this,Qa).moving()}setOrbit(e){p(this,$n).call(this),k(this,Mt,null),k(this,lt,I(this,q,Fl).call(this,e)),I(this,q,Wt).call(this)}activeUnit(){return{unit:p(this,bi),pendingTile:p(this,Jl)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,Mt)?.to??p(this,lt);I(this,q,Ol).call(this,{...t,yaw:t.yaw+e*om},I(this,q,t0).call(this)+e*om)}heading(){return{turn:(p(this,Mt)?.to??p(this,lt)).yaw,directions:T0(p(this,$e).layout,this.world.topology())}}faceNorth(){I(this,q,Ol).call(this,{...p(this,Mt)?.to??p(this,lt),yaw:0},yv(-p(this,lt).yaw))}debugViewModes(){return[]}dispose(){I(this,q,l0).call(this,!0),k(this,$r,!0),p(this,tn).endAll(0),p(this,Yn).clear(),p(this,Qs).clear(),p(this,er).clear(),document.removeEventListener("keydown",p(this,$l),!0),p(this,Gt).removeEventListener("pointerdown",p(this,Yl),!0),p(this,Kl).call(this),p(this,Ql).call(this),p(this,$n).call(this),p(this,Qa).dispose(),p(this,ro)?.dispose(),window.removeEventListener("resize",p(this,ho)),p(this,fo)?.disconnect(),p(this,xs)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,xs)),k(this,xs,null),p(this,zr)?.remove(),p(this,en).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Yi);e!==null&&(k(this,Yi,null),p(this,Gt).classList.remove("picking-tile"),e.window?.close())}flush(){I(this,q,a0).call(this),I(this,q,Wt).call(this)}mapEvent(e){if(e.kind==="moved"){I(this,q,bv).call(this,e.unit,e.from,e.to),I(this,q,jh).call(this,e.unit.id,e.from,e.to);return}I(this,q,jh).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),I(this,q,jh).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=p(this,Gt).getBoundingClientRect();k(this,kl,p(this,zl).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};k(this,Yi,s),p(this,Gt).classList.add("picking-tile"),s.window=p(this,qn).prompt(n,()=>{p(this,Yi)===s&&(k(this,Yi,null),p(this,Gt).classList.remove("picking-tile"))})}picking(){return p(this,Yi)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,oo).set(t,e),p(this,no).set(t,++or(this,ql)._)}redrawArt(){let e=p(this,ec).id();return e===p(this,uo)?"unchanged":(k(this,uo,e),k(this,$i,!0),"redrawn")}releaseTiles(){p(this,oo).forEach((e,t)=>{p(this,nr).set(t,e),p(this,io).set(t,p(this,no).get(t)??0)}),p(this,oo).clear(),p(this,no).clear(),p(this,nr).size>0&&I(this,q,Wt).call(this)}setActiveUnit(e,t){let n=p(this,bi)?.tile;if(k(this,bi,e),k(this,Jl,t??null),I(this,q,Br).call(this)&&I(this,q,Av).call(this)&&I(this,q,Kh).call(this),I(this,q,Br).call(this)){I(this,q,Wt).call(this);return}k(this,qi,null);let s=p(this,Xi);k(this,Rn,e?.id??null),k(this,Xi,e?.tile??null),[n,s,e?.tile].forEach(r=>{r&&I(this,q,Js).call(this,r.x,r.y)}),I(this,q,Wt).call(this)}setWaiting(e){k(this,co,e),e&&p(this,$n).call(this)}showActiveUnit(e){p(this,Mi)||(k(this,Mi,!0),I(this,q,Bl).call(this),I(this,q,Wt).call(this))}shown(){return{units:p(this,Mi),yields:p(this,Xr),waiting:p(this,co)}}tilesPending(){return p(this,nr).size}toggleUnits(){k(this,Mi,!p(this,Mi)),I(this,q,Bl).call(this),I(this,q,Wt).call(this)}toggleYields(){k(this,Xr,!p(this,Xr)),k(this,$i,!0),I(this,q,Wt).call(this)}zoomBy(e){p(this,$n).call(this),k(this,lt,Oa(p(this,lt),e)),p(this,Mt)!==null&&(p(this,Mt).from=Oa(p(this,Mt).from,e),p(this,Mt).to=Oa(p(this,Mt).to,e)),I(this,q,Wt).call(this)}};Gt=new WeakMap,zl=new WeakMap,kl=new WeakMap,$e=new WeakMap,en=new WeakMap,zr=new WeakMap,Gl=new WeakMap,Vl=new WeakMap,lt=new WeakMap,Mt=new WeakMap,Cn=new WeakMap,Qa=new WeakMap,Hl=new WeakMap,kr=new WeakMap,Ks=new WeakMap,eo=new WeakMap,Wl=new WeakMap,Xl=new WeakMap,qn=new WeakMap,to=new WeakMap,ms=new WeakMap,tn=new WeakMap,js=new WeakMap,Gr=new WeakMap,Vr=new WeakMap,Yn=new WeakMap,Qs=new WeakMap,er=new WeakMap,ql=new WeakMap,no=new WeakMap,io=new WeakMap,Hr=new WeakMap,Rn=new WeakMap,Xi=new WeakMap,qi=new WeakMap,Yl=new WeakMap,$l=new WeakMap,Zl=new WeakMap,Yi=new WeakMap,tr=new WeakMap,so=new WeakMap,$n=new WeakMap,ro=new WeakMap,ao=new WeakMap,gs=new WeakMap,xs=new WeakMap,oo=new WeakMap,nr=new WeakMap,Wr=new WeakMap,lo=new WeakMap,bi=new WeakMap,Jl=new WeakMap,Mi=new WeakMap,ir=new WeakMap,Kl=new WeakMap,Xr=new WeakMap,$i=new WeakMap,qr=new WeakMap,Yr=new WeakMap,jl=new WeakMap,Ql=new WeakMap,co=new WeakMap,ec=new WeakMap,uo=new WeakMap,tc=new WeakMap,ho=new WeakMap,fo=new WeakMap,$r=new WeakMap,q=new WeakSet,t0=l(function(){let e=p(this,Mt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),bv=l(function(e,t,n){let s=p(this,Hr)?.speed()??"normal";if(e.id===p(this,Rn)&&k(this,Xi,n),typeof requestAnimationFrame!="function"||Dr()||s==="off")return;let r=p(this,tn).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:u})=>u===e.id)??(I(this,q,Zh).call(this,e.id)?p(this,js).get(e.id):void 0),o=e.player===p(this,so);if(a===void 0||!o&&!r&&(!(p(this,Hr)?.rivals()??!0)||!I(this,q,Qh).call(this,t.x,t.y,-.5)&&!I(this,q,Qh).call(this,n.x,n.y,-.5)))return;let c=o?sv:rv;p(this,js).set(e.id,a),p(this,er).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,ql)}),I(this,q,Mv).call(this,e.id),p(this,tn).step(e.id,t,n,I(this,q,n0).call(this,t),I(this,q,n0).call(this,n),performance.now(),s==="fast"?av(c):c),I(this,q,Wt).call(this)},"#walk"),n0=l(function({x:e,y:t}){let[n,s]=p(this,$e).layout.centre(e,t),r=Math.max(0,p(this,$e).surfaceAt(n,s)),a=p(this,Mi)&&this.world.get(e,t).city,o=[n,s+(a?sm:0)];return{at:o,lift:r-Math.max(0,p(this,$e).surfaceAt(...o)),middle:[n,s]}},"#standing"),Mv=l(function(e){p(this,Qs).delete(e)&&p(this,Yn).forEach((t,n)=>{let s=t.units.filter(r=>r!==e);if(s.length!==t.units.length){if(s.length===0){p(this,Yn).delete(n),I(this,q,Jh).call(this,n);return}p(this,Yn).set(n,{...t,units:s})}})},"#stepsOn"),Zh=l(function(e){return p(this,tn).walking(e)||p(this,Qs).has(e)},"#leftOff"),Sv=l(function(e){if(p(this,tn).dropped().forEach(s=>I(this,q,Jh).call(this,s)),p(this,Yn).forEach(s=>I(this,q,Dl).call(this,s)),p(this,tn).size()===0)return;if(Dr()||(p(this,Hr)?.speed()??"normal")==="off"){I(this,q,Nl).call(this,p(this,tn).endAll(e));return}let{going:t,ended:n}=p(this,tn).at(e);I(this,q,Nl).call(this,n),t.forEach(s=>I(this,q,Dl).call(this,s))},"#placeWalkers"),Dl=l(function(e){let t=I(this,q,wv).call(this,e),n=t===null?null:JSON.stringify(t),{u:s,v:r}=p(this,$e).layout.period(),a=l((u,h)=>h===null?u:(u%h+h)%h,"within");if(n!==(p(this,Vr).get(e.id)??null)&&(p(this,en).setWalker(e.id,t),n===null?p(this,Vr).delete(e.id):p(this,Vr).set(e.id,n)),t===null)return;let o=a(e.at[0],s),c=a(e.at[1],r);p(this,en).placeWalker(e.id,[o,Math.max(0,p(this,$e).surfaceAt(o,c))+e.lift,c],e.facing)},"#drawWalker"),Jh=l(function(e){p(this,Vr).delete(e)&&p(this,en).setWalker(e,null)},"#takeAway"),wv=l(function(e){let t=e.units.flatMap(n=>{let s=p(this,js).get(n);return s===void 0?[]:[s]});return Hm({city:null,units:t},p(this,Rn),p(this,Mi),p(this,to),()=>0,p(this,ir))},"#walkerMarker"),i0=l(function({units:e}){return e.some(t=>p(this,er).has(t))},"#awaitsPatch"),Nl=l(function(e){let t=new Set;e.forEach(n=>{if(I(this,q,i0).call(this,n)){p(this,Yn).set(n.id,n),n.units.forEach(s=>p(this,Qs).add(s)),I(this,q,Dl).call(this,n);return}I(this,q,Jh).call(this,n.id),n.units.forEach(s=>{p(this,Qs).delete(s),!p(this,tn).walking(s)&&(p(this,Gr).get(s)?.forEach(r=>t.add(r)),p(this,Gr).delete(s),p(this,js).delete(s))})}),p(this,Rn)!==null&&p(this,Rn)!==(p(this,bi)?.id??null)&&!p(this,tn).walking(p(this,Rn))&&I(this,q,Ev).call(this,t),t.forEach(n=>{let[s,r]=n.split(",").map(Number);I(this,q,Js).call(this,s,r)})},"#walksEnded"),Ev=l(function(e){let t=p(this,bi);[p(this,Xi),t?.tile].forEach(s=>{s&&e.add(`${s.x},${s.y}`)}),k(this,Rn,t?.id??null),k(this,Xi,t?.tile??null),p(this,Yn).forEach(s=>I(this,q,Dl).call(this,s));let n=p(this,qi);n!==null&&(k(this,qi,null),I(this,q,r0).call(this,n.x,n.y))},"#caughtUp"),Br=l(function(){let e=p(this,Rn);return e!==null&&e!==(p(this,bi)?.id??null)&&p(this,tn).walking(e)},"#holding"),Kh=l(function(){let e=p(this,Rn);e===null||!I(this,q,Br).call(this)||(I(this,q,Nl).call(this,p(this,tn).endWhere(t=>t.includes(e),performance.now())),I(this,q,Wt).call(this))},"#hurry"),Av=l(function(){let e=p(this,Xi),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===p(this,Rn));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),Tv=l(function(e,t){if(I(this,q,Br).call(this)){k(this,qi,{x:e,y:t});return}I(this,q,r0).call(this,e,t)},"#centreSoon"),Cv=l(function(e){if(p(this,er).forEach(({squares:n,after:s},r)=>{n.some(a=>(e.get(a)??0)>s)&&p(this,er).delete(r)}),p(this,Yn).size===0)return;let t=[...p(this,Yn).values()].filter(n=>!I(this,q,i0).call(this,n));t.forEach(n=>p(this,Yn).delete(n.id)),I(this,q,Nl).call(this,t)},"#patched"),jh=l(function(e,t,n){let[s,r]=p(this,$e).layout.centre(t.x,t.y),[a,o]=p(this,$e).layout.centre(n.x,n.y),{u:c,v:u}=p(this,$e).layout.period(),h=l((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),f=h(a-s,c),d=h(o-r,u);f===0&&d===0||(p(this,ms).delete(e),p(this,ms).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),p(this,ms).size>nT&&p(this,ms).delete(p(this,ms).keys().next().value),[t,n].forEach(({x:m,y:g})=>I(this,q,Js).call(this,m,g)),I(this,q,Wt).call(this))},"#face"),Qh=l(function(e,t,n){let s=p(this,Gt).clientWidth,r=p(this,Gt).clientHeight;if(s<=0||r<=0)return!1;let a=p(this,qi),o=a===null?p(this,Mt)?.to??p(this,lt):{...p(this,Mt)?.to??p(this,lt),focus:p(this,$e).layout.centre(a.x,a.y)},[c,u]=p(this,$e).layout.centre(e,t),{u:h,v:f}=I(this,q,Zs).call(this),[d,m]=o.focus,g=l((E,L,P)=>P===null?E:E+P*Math.round((L-E)/P),"nearest"),y=[g(c,d,h),Math.max(0,p(this,$e).heightAt(c,u)),g(u,m,f)],x=s/r,_=p(this,Cn)??0,S=lm(o,_,y,x),A=lm(o,_,[y[0]+Math.cos(o.yaw),y[1],y[2]+Math.sin(o.yaw)],x);if(S===null||A===null)return!1;let w=(S[0]+1)/2*s,R=(1-S[1])/2*r,C=Math.abs(A[0]-S[0])*(s/2),v=(n+.5)*C;return w>=v&&w<=s-v&&R>=v&&R<=r-v&&!p(this,kl).some(({left:E,top:L,right:P,bottom:U})=>w>=E-C/2&&w<=P+C/2&&R>=L-C/2&&R<=U+C/2)},"#visible"),Ul=l(function(e,t){let n=p(this,Gt).clientWidth,s=p(this,Gt).clientHeight;if(n<=0||s<=0)return null;let r=hv(p(this,lt),p(this,Cn)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>p(this,$e).heightAt(f,d));if(r===null)return null;let[a,o]=p(this,$e).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(I(this,q,Zs).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),Rv=l(function(e,t){let n=I(this,q,Ul).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=p(this,Yi);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&p(this,qn).click(this.portal,n)},"#clicked"),Pv=l(function(e,t,n,s,r){let a=p(this,bi),o=I(this,q,Ul).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),p(this,qn).menu(this.portal,n,s,a,o,p(this,Zl),r),!0)},"#menu"),Iv=l(function(e){let t=e===null||p(this,co)||p(this,qn).menuOpen()?null:I(this,q,Ul).call(this,e.x,e.y),n=p(this,tr);if(t===null||e===null){p(this,$n).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,$n).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,I(this,q,s0).call(this,r)},aT),k(this,tr,r),document.addEventListener("keydown",p(this,$n),!0)},"#hovered"),s0=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,Gt),n=t?I(this,q,Ul).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){p(this,$n).call(this);return}let s=p(this,qn).tooltip(p(this,Gt),n,p(this,so),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&p(this,qn).endTooltip(p(this,Gt)),e.open=s},"#showHover"),ed=l(function(){return[...p(this,lt).focus]},"#focus"),Lv=l(function(){let[e,t]=p(this,$e).layout.tileAt(...p(this,lt).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:I(this,q,Zs).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),r0=l(function(e,t){let[n,s]=p(this,$e).layout.centre(e,t),[r,a]=(p(this,Mt)?.to??p(this,lt)).focus;if(n===r&&s===a)return;let o={...p(this,Mt)?.to??p(this,lt),focus:[n,s]},{u:c,v:u}=I(this,q,Zs).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[f,d]=p(this,lt).focus,m=Math.hypot(h(n-f,c),h(s-d,u));if(!p(this,Xl)||m>p(this,lt).distance*1.5){k(this,Xl,!0),this.setOrbit(o);return}I(this,q,Ol).call(this,o)},"#centreOn"),Fl=l(function(e){return Kx(Cr(e),I(this,q,Zs).call(this),p(this,$e).extentV())},"#settle"),Zs=l(function(){let e=p(this,$e).layout.period();return this.portal?.lockVerticalEdges()??p(this,Wl)?{u:e.u,v:null}:e},"#period"),Ol=l(function(e,t=I(this,q,t0).call(this)+yv(e.yaw-(p(this,Mt)?.to??p(this,lt)).yaw)){p(this,$n).call(this),typeof requestAnimationFrame!="function"||Dr()?(k(this,Mt,null),k(this,lt,I(this,q,Fl).call(this,e))):k(this,Mt,{from:p(this,lt),to:e,started:null,turn:t,drawn:0}),I(this,q,Wt).call(this)},"#moveTo"),Dv=l(function(e){let t=p(this,Mt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/iT);return t.drawn=n*n*(3-2*n),k(this,lt,I(this,q,Fl).call(this,jx(t.from,t.to,n,I(this,q,Zs).call(this),t.turn))),n>=1&&k(this,Mt,null),n<1},"#moveCamera"),Nv=l(function(e){let[t,n]=p(this,lt).focus,s=Math.max(0,p(this,$e).heightAt(t,n));return!e||p(this,Cn)===null||Dr()?(k(this,Cn,s),!1):(k(this,Cn,p(this,Cn)+(s-p(this,Cn))*rT),Math.abs(s-p(this,Cn))<.002?(k(this,Cn,s),!1):!0)},"#followHeight"),a0=l(function(){let e=[...p(this,nr).values()].map(({x:c,y:u})=>[c,u]),t=this.world.tiles(),n=t!==p(this,Wr)||t.length!==p(this,lo);k(this,Wr,t),k(this,lo,t.length),p(this,nr).clear();let s=I(this,q,Fv).call(this,p(this,$e).changed(e,...I(this,q,ed).call(this),n)),r=new Set(e.map(([c,u])=>`${c},${u}`)),a=new Map([...r].map(c=>[c,p(this,io).get(c)??0]));p(this,io).clear(),e.forEach(([c,u])=>I(this,q,Js).call(this,c,u)),s.forEach(([c,u])=>{let h=`${c},${u}`;!n&&!r.has(h)&&p(this,gs).has(h)&&I(this,q,Js).call(this,c,u)}),I(this,q,Uv).call(this,e,s);let o=p(this,tr);o!==null&&o.open&&e.some(([c,u])=>c===o.x&&u===o.y)&&I(this,q,s0).call(this,o),(e.length>0||n)&&k(this,ao,!0),n&&(k(this,$i,!0),p(this,gs).forEach((c,u)=>{let[h,f]=u.split(",").map(Number);I(this,q,Js).call(this,h,f)})),e.length>0&&I(this,q,Cv).call(this,a)},"#takeTiles"),Js=l(function(e,t){let n=`${e},${t}`,s=this.world.get(e,t),r=s.units.filter(({id:d})=>I(this,q,Zh).call(this,d));r.forEach(d=>{let m=p(this,Gr).get(d.id)??new Set;m.add(n),p(this,Gr).set(d.id,m),p(this,js).set(d.id,d)});let a=Hm(r.length===0?s:{city:s.city,units:s.units.filter(({id:d})=>!I(this,q,Zh).call(this,d))},p(this,Rn),p(this,Mi),p(this,to),d=>p(this,ms).get(d.id)??0,p(this,ir)),[o,c]=p(this,$e).layout.centre(e,t),u=[o,Math.max(0,p(this,$e).surfaceAt(o,c)),c],h=a===null?null:JSON.stringify([a,u]);h!==(p(this,gs).get(n)??null)&&(p(this,en).setMarker(n,u,a),I(this,q,Bv).call(this,n,h))},"#mark"),Uv=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,s])=>p(this,Yr).delete(`${n},${s}`)),t.forEach(([n,s])=>p(this,Yr).delete(`${n},${s}`)),k(this,$i,!0))},"#yieldsChanged"),Fv=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([s,r])=>{n.set(`${s},${r}`,[s,r]),t.directions().forEach(a=>{let o=t.neighbour(s,r,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),Ov=l(function(){if(!p(this,Xr)){p(this,qr)&&(p(this,en).setYields(null),k(this,qr,!1));return}if(!p(this,$i)&&p(this,qr))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,s=mv(t,gv(t)),r=p(this,Yr).get(n);if(r===void 0||r.of!==s){let[a,o]=p(this,$e).layout.centre(t.x,t.y);r={of:s,laid:s.length===0?null:_v({at:[a,Math.max(0,p(this,$e).surfaceAt(a,o)),o],yields:s},p(this,jl))},p(this,Yr).set(n,r)}r.laid!==null&&e.push(r.laid)}),p(this,en).setYields(vv(e)),k(this,$i,!1),k(this,qr,!0)},"#showYields"),Bv=l(function(e,t){t===null?p(this,gs).delete(e):p(this,gs).set(e,t)},"#remember"),Bl=l(function(){let e=new Set(p(this,gs).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);I(this,q,Js).call(this,n,s)})},"#markAll"),o0=l(function(e){let t=performance.now(),n=I(this,q,Dv).call(this,t),[s,r]=I(this,q,ed).call(this);I(this,q,a0).call(this),I(this,q,Sv).call(this,t),`${s},${r}`!==p(this,Vl)&&(k(this,Vl,`${s},${r}`),p(this,$e).refocus(s,r)),p(this,$e).build(p(this,en),e);let a=I(this,q,Nv).call(this,e!==null);I(this,q,Ov).call(this),p(this,en).view(p(this,lt),p(this,Cn)??0,I(this,q,Zs).call(this)),p(this,en).render(),I(this,q,zv).call(this),I(this,q,l0).call(this),k(this,Gl,performance.now()-t),I(this,q,Vv).call(this),(p(this,$e).pending()>0||p(this,$e).overlaysPending()>0||p(this,tn).size()>0||n||a)&&I(this,q,Wt).call(this)},"#frameDrawn"),zv=l(function(){let e=p(this,ro);if(e===null)return;p(this,ao)&&(k(this,ao,!1),e.redraw());let t=I(this,q,Br).call(this)?p(this,Xi):p(this,bi)?.tile??null;e.show(I(this,q,kv).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),kv=l(function(){let e=p(this,Gt).clientWidth,t=p(this,Gt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=p(this,Cn)??0,r=Rh(p(this,lt).distance).far,[a,o]=p(this,lt).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let m=Fa(p(this,lt),s,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-a,m[1]-o),y=g>r?r/g:1;return[a+(m[0]-a)*y,o+(m[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),l0=l(function(e=!1){let t=(e?p(this,Mt)?.to??p(this,lt):p(this,lt)).distance,n=l(()=>{p(this,Ks)!==null&&clearTimeout(p(this,Ks)),k(this,Ks,null),k(this,eo,null)},"stop"),s=l(()=>{n(),k(this,kr,t),p(this,Hl).set(t)},"keep");if(e){n(),t!==p(this,kr)&&s();return}if(p(this,Mt)!==null||t===p(this,kr)){n();return}p(this,Ks)!==null&&t===p(this,eo)||(n(),k(this,eo,t),k(this,Ks,setTimeout(s,sT)))},"#keepDistance"),Wt=l(function(){if(!p(this,$r)){if(typeof requestAnimationFrame!="function"){I(this,q,o0).call(this,null);return}p(this,xs)===null&&k(this,xs,requestAnimationFrame(()=>{k(this,xs,null),I(this,q,o0).call(this,tT)}))}},"#draw"),Gv=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),Vv=l(function(){if(p(this,zr)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,en).stats();p(this,zr).textContent=[`frame ${p(this,Gl).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,$e).pending()}`].join(`
`)},"#showStats"),c0=l(function(){let e=p(this,Gt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===p(this,tc)||(k(this,tc,r),p(this,en).resize(t,n,s),this.measureCovered(),p(this,en).render())},"#resize"),l(u0,"MapView3D");var e0=u0,Hv=e0;var oT={createMapView3D:l(i=>new Hv(i),"createMapView3D")};globalThis[S0]=oT;})();
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
