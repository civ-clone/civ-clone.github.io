"use strict";(()=>{var Py=Object.create;var pd=Object.defineProperty;var Iy=Object.getOwnPropertyDescriptor;var Ly=Object.getOwnPropertyNames;var Dy=Object.getPrototypeOf,Ny=Object.prototype.hasOwnProperty;var j0=i=>{throw TypeError(i)};var l=(i,e)=>pd(i,"name",{value:e,configurable:!0});var Uy=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Fy=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ly(e))!Ny.call(i,s)&&s!==t&&pd(i,s,{get:()=>e[s],enumerable:!(n=Iy(e,s))||n.enumerable});return i};var Oy=(i,e,t)=>(t=i!=null?Py(Dy(i)):{},Fy(e||!i||!i.__esModule?pd(t,"default",{value:i,enumerable:!0}):t,i));var md=(i,e,t)=>e.has(i)||j0("Cannot "+t);var d=(i,e,t)=>(md(i,e,"read from private field"),t?t.call(i):e.get(i)),Y=(i,e,t)=>e.has(i)?j0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),G=(i,e,t,n)=>(md(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),R=(i,e,t)=>(md(i,e,"access private method"),t);var as=(i,e,t,n)=>({set _(s){G(i,e,s,t)},get _(){return d(i,e,n)}});var eg=Uy(vr=>{"use strict";var Pi,Ns=vr&&vr.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(vr,"__esModule",{value:!0}),vr.EventEmitter=void 0;var gd=class gd{constructor(){Pi.set(this,{})}on(e,t){e in Ns(this,Pi,"f")||(Ns(this,Pi,"f")[e]=[]),Ns(this,Pi,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Ns(this,Pi,"f")))return;let n=Ns(this,Pi,"f")[e].indexOf(t);n!==-1&&Ns(this,Pi,"f")[e].splice(n,1)}emit(e,...t){e in Ns(this,Pi,"f")&&Ns(this,Pi,"f")[e].forEach((n=>n(...t)))}};l(gd,"i");var _c=gd;vr.EventEmitter=_c,Pi=new WeakMap,vr.default=_c});var Q0="civMap3D";var tg=Oy(eg());var Us,Ii,oa,_d=class _d extends tg.EventEmitter{constructor(t,n){super();Y(this,Us);Y(this,Ii);Y(this,oa);G(this,Ii,t),G(this,oa,t.lockVerticalEdges),G(this,Us,n)}center(){return d(this,Us).centre()}isVisible(t,n,s=0){return d(this,Us).visible(t,n,s)}lockVerticalEdges(){return d(this,oa)}nativeTileSize(){return d(this,Ii).art.nativeTileSize()}openCity(t){let{cityOpener:n}=d(this,Ii);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return d(this,Ii).playerId}render(){d(this,Us).changed()}scale(){return d(this,Ii).art.scale()}setCenter(t,n){d(this,Us).centreOn(t,n)}setLockVerticalEdges(t){G(this,oa,t)}setZoom(){}transport(){return d(this,Ii).transport}zoom(){return d(this,Ii).art.zoom()}};Us=new WeakMap,Ii=new WeakMap,oa=new WeakMap,l(_d,"MapPortal3D");var xd=_d,ng=xd;var By=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return[s,[o-t,c-n]]}))},"groundDirections"),ig=By;var Pg=0,Zd=1,Ig=2;var il=1,Ou=2,Oa=3,js=0,Sn=1,Gi=2,Ar=0,Ba=1,Jd=2,Kd=3,jd=4,Lg=5;var Tr=100,Dg=101,Ng=102,Ug=103,Fg=104,Og=200,Bg=201,kg=202,zg=203,Qd=204,ef=205,Gg=206,Vg=207,Hg=208,Wg=209,Xg=210,qg=211,Yg=212,$g=213,Zg=214,Wc=0,Xc=1,qc=2,Ca=3,Yc=4,$c=5,Zc=6,Jc=7,tf=0,Jg=1,Kg=2,Vi=0,nf=1,sf=2,rf=3,sl=4,af=5,of=6,lf=7;var cf=300,Cr=301,ka=302,Bu=303,ku=304,Di=1e3,Kn=1001,Kc=1002,Ot=1003,jg=1004;var rl=1005;var Bt=1006,zu=1007;var On=1008;var cn=1009,uf=1010,hf=1011,za=1012,Gu=1013,fi=1014,pi=1015,Bn=1016,Vu=1017,Hu=1018,Rr=1020,df=35902,ff=35899,pf=1021,mf=1022,kn=1023,ms=1026,vs=1027,gf=1028,Wu=1029,Hi=1030,Xu=1031;var qu=1033,al=33776,ol=33777,ll=33778,cl=33779,Yu=35840,$u=35841,Zu=35842,Ju=35843,Ku=36196,ju=37492,Qu=37496,eh=37488,th=37489,ul=37490,nh=37491,ih=37808,sh=37809,rh=37810,ah=37811,oh=37812,lh=37813,ch=37814,uh=37815,hh=37816,dh=37817,fh=37818,ph=37819,mh=37820,gh=37821,xh=36492,_h=36494,vh=36495,yh=36283,bh=36284,hl=36285,Mh=36286;var Fo=2300,jc=2301,Vc=2302,Vd=2303,Hd=2400,Wd=2401,Xd=2402;var Qg=3200;var Sh=0,ex=1,mi="",Ft="srgb",Oo="srgb-linear",Bo="linear",dt="srgb";var Hc=7680;var tx=519,nx=512,ix=513,sx=514,xf=515,rx=516,ax=517,_f=518,vf=519,yf=35044;var bf="300 es",jn=2e3,Ra=2001;function ky(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(ky,"arrayNeedsUint32");function zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(zy,"isTypedArray");function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(ko,"createElementNS");function ox(){let i=ko("canvas");return i.style.display="block",i}l(ox,"createCanvasElement");var sg={},Pa=null;function zo(...i){let e="THREE."+i.shift();Pa?Pa("log",e,...i):console.log(e,...i)}l(zo,"log");function lx(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(lx,"enhanceLogMessage");function Ge(...i){i=lx(i);let e="THREE."+i.shift();if(Pa)Pa("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ge,"warn");function He(...i){i=lx(i);let e="THREE."+i.shift();if(Pa)Pa("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function No(...i){let e=i.join(" ");e in sg||(sg[e]=!0,Ge(...i))}l(No,"warnOnce");function cx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(cx,"probeAsync");var ux={[Wc]:Wc,[qc]:Zc,[Yc]:Yc,[Ca]:$c,[Xc]:Xc,[Zc]:qc,[Jc]:Jc,[$c]:Ca},Af=class Af{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(Af,"EventDispatcher");var Ni=Af,on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vd=Math.PI/180,Qc=180/Math.PI;function Pr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}l(Pr,"generateUUID");function rt(i,e,t){return Math.max(e,Math.min(t,i))}l(rt,"clamp");function Gy(i,e){return(i%e+e)%e}l(Gy,"euclideanModulo");function yd(i,e,t){return(1-t)*i+t*e}l(yd,"lerp");function hx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(hx,"floorPowerOfTwo");function wh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(wh,"getNormalizationScale");function dx(i,e){if(e.constructor===Float32Array)return i;let t=wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(dx,"denormalize");function fx(i,e){if(e.constructor===Float32Array)return i;let t=wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(fx,"normalize");var bu=class bu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(bu,"Vector2"),bu.prototype.isVector2=!0;var ze=bu,Tf=class Tf{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(p!==y||c!==f||u!==m||h!==g){let x=c*f+u*m+h*g+p*y;x<0&&(f=-f,m=-m,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let S=Math.acos(x),A=Math.sin(S);_=Math.sin(_*S)/A,o=Math.sin(o*S)/A,c=c*_+f*o,u=u*_+m*o,h=h*_+g*o,p=p*_+y*o}else{c=c*_+f*o,u=u*_+m*o,h=h*_+g*o,p=p*_+y*o;let S=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=S,u*=S,h*=S,p*=S}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],p=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*p+c*m-u*f,e[t+1]=c*g+h*f+u*p-o*m,e[t+2]=u*g+h*m+o*f-c*p,e[t+3]=h*g-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),p=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"YXZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"ZXY":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"ZYX":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"YZX":this._x=f*h*p+u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p-f*m*g;break;case"XZY":this._x=f*h*p-u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p+f*m*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Tf,"Quaternion");var yn=Tf,Mu=class Mu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*u+a*p-o*h,this.y=n+c*h+o*u-r*p,this.z=s+c*p+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Mu,"Vector3"),Mu.prototype.isVector3=!0;var X=Mu,bd=new X,rg=new yn,Su=class Su{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],g=n[8],y=s[0],x=s[3],_=s[6],S=s[1],A=s[4],E=s[7],P=s[2],C=s[5],v=s[8];return r[0]=a*y+o*S+c*P,r[3]=a*x+o*A+c*C,r[6]=a*_+o*E+c*v,r[1]=u*y+h*S+p*P,r[4]=u*x+h*A+p*C,r[7]=u*_+h*E+p*v,r[2]=f*y+m*S+g*P,r[5]=f*x+m*A+g*C,r[8]=f*_+m*E+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*r,m=u*r-a*c,g=t*p+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=p*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return No("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Md.makeScale(e,t)),this}rotate(e){return No("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return No("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Su,"Matrix3"),Su.prototype.isMatrix3=!0;var We=Su,Md=new We,ag=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vy(){let i={enabled:!0,workingColorSpace:Oo,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=Ta(s.r),s.g=Ta(s.g),s.b=Ta(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===mi?Bo:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oo]:{primaries:e,whitePoint:n,transfer:Bo,toXYZ:ag,fromXYZ:og,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:ag,fromXYZ:og,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}l(Vy,"createColorManagement");var st=Vy();function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(ps,"SRGBToLinear");function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Ta,"LinearToSRGB");var la,Cf=class Cf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{la===void 0&&(la=ko("canvas")),la.width=e.width,la.height=e.height;let s=la.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=la}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ps(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Cf,"ImageUtils");var eu=Cf,Hy=0,Rf=class Rf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sd(s[a].image)):r.push(Sd(s[a]))}else r=Sd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(Rf,"TextureSource");var Ia=Rf;function Sd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}l(Sd,"serializeImage");var Wy=0,wd=new X,Ea=class Ea extends Ni{constructor(e=Ea.DEFAULT_IMAGE,t=Ea.DEFAULT_MAPPING,n=Kn,s=Kn,r=Bt,a=On,o=kn,c=cn,u=Ea.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Pr(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Ea,"Texture");var bn=Ea;bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=cf;bn.DEFAULT_ANISOTROPY=1;var wu=class wu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,E=(m+1)/2,P=(_+1)/2,C=(h+f)/4,v=(p+y)/4,w=(g+x)/4;return A>E&&A>P?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=C/n,r=v/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=w/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=v/r,s=w/r),this.set(n,s,r,t),this}let S=Math.sqrt((x-g)*(x-g)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(p-y)/S,this.z=(f-h)/S,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(wu,"Vector4"),wu.prototype.isVector4=!0;var Tt=wu,Pf=class Pf extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new bn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Pf,"RenderTarget");var tu=Pf,If=class If extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(If,"WebGLRenderTarget");var Nn=If,Lf=class Lf extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Lf,"DataArrayTexture");var wr=Lf;var Df=class Df extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Df,"Data3DTexture");var nu=Df;var Uo=class Uo{constructor(e,t,n,s,r,a,o,c,u,h,p,f,m,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,p,f,m,g,y,x)}set(e,t,n,s,r,a,o,c,u,h,p,f,m,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=p,_[14]=f,_[3]=m,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ca.setFromMatrixColumn(e,0).length(),r=1/ca.setFromMatrixColumn(e,1).length(),a=1/ca.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*p,g=o*h,y=o*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+g*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=g+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*p,g=u*h,y=u*p;t[0]=f+y*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*p,g=u*h,y=u*p;t[0]=f-y*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*p,g=o*h,y=o*p;t[0]=c*h,t[4]=g*u-m,t[8]=f*u+y,t[1]=c*p,t[5]=y*u+f,t[9]=m*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-f*p,t[8]=g*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*p+g,t[10]=f-y*p}else if(e.order==="XZY"){let f=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+y,t[5]=a*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*h,t[10]=y*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,qy)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Fs.crossVectors(n,Ln),Fs.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Fs.crossVectors(n,Ln)),Fs.normalize(),vc.crossVectors(Ln,Fs),s[0]=Fs.x,s[4]=vc.x,s[8]=Ln.x,s[1]=Fs.y,s[5]=vc.y,s[9]=Ln.y,s[2]=Fs.z,s[6]=vc.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],g=n[2],y=n[6],x=n[10],_=n[14],S=n[3],A=n[7],E=n[11],P=n[15],C=s[0],v=s[4],w=s[8],L=s[12],I=s[1],F=s[5],V=s[9],K=s[13],D=s[2],$=s[6],ie=s[10],O=s[14],j=s[3],H=s[7],Q=s[11],z=s[15];return r[0]=a*C+o*I+c*D+u*j,r[4]=a*v+o*F+c*$+u*H,r[8]=a*w+o*V+c*ie+u*Q,r[12]=a*L+o*K+c*O+u*z,r[1]=h*C+p*I+f*D+m*j,r[5]=h*v+p*F+f*$+m*H,r[9]=h*w+p*V+f*ie+m*Q,r[13]=h*L+p*K+f*O+m*z,r[2]=g*C+y*I+x*D+_*j,r[6]=g*v+y*F+x*$+_*H,r[10]=g*w+y*V+x*ie+_*Q,r[14]=g*L+y*K+x*O+_*z,r[3]=S*C+A*I+E*D+P*j,r[7]=S*v+A*F+E*$+P*H,r[11]=S*w+A*V+E*ie+P*Q,r[15]=S*L+A*K+E*O+P*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],g=e[3],y=e[7],x=e[11],_=e[15],S=c*m-u*f,A=o*m-u*p,E=o*f-c*p,P=a*m-u*h,C=a*f-c*h,v=a*p-o*h;return t*(y*S-x*A+_*E)-n*(g*S-x*P+_*C)+s*(g*A-y*P+_*v)-r*(g*E-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],g=e[12],y=e[13],x=e[14],_=e[15],S=t*o-n*a,A=t*c-s*a,E=t*u-r*a,P=n*c-s*o,C=n*u-r*o,v=s*u-r*c,w=h*y-p*g,L=h*x-f*g,I=h*_-m*g,F=p*x-f*y,V=p*_-m*y,K=f*_-m*x,D=S*K-A*V+E*F+P*I-C*L+v*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/D;return e[0]=(o*K-c*V+u*F)*$,e[1]=(s*V-n*K-r*F)*$,e[2]=(y*v-x*C+_*P)*$,e[3]=(f*C-p*v-m*P)*$,e[4]=(c*I-a*K-u*L)*$,e[5]=(t*K-s*I+r*L)*$,e[6]=(x*E-g*v-_*A)*$,e[7]=(h*v-f*E+m*A)*$,e[8]=(a*V-o*I+u*w)*$,e[9]=(n*I-t*V-r*w)*$,e[10]=(g*C-y*E+_*S)*$,e[11]=(p*E-h*C-m*S)*$,e[12]=(o*L-a*F-c*w)*$,e[13]=(t*F-n*L+s*w)*$,e[14]=(y*A-g*P-x*S)*$,e[15]=(h*P-p*A+f*S)*$,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,p=o+o,f=r*u,m=r*h,g=r*p,y=a*h,x=a*p,_=o*p,S=c*u,A=c*h,E=c*p,P=n.x,C=n.y,v=n.z;return s[0]=(1-(y+_))*P,s[1]=(m+E)*P,s[2]=(g-A)*P,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(f+_))*C,s[6]=(x+S)*C,s[7]=0,s[8]=(g+A)*v,s[9]=(x-S)*v,s[10]=(1-(f+y))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ca.set(s[0],s[1],s[2]).length(),o=ca.set(s[4],s[5],s[6]).length(),c=ca.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let u=1/a,h=1/o,p=1/c;return ui.elements[0]*=u,ui.elements[1]*=u,ui.elements[2]*=u,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=p,ui.elements[9]*=p,ui.elements[10]*=p,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=jn,c=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===jn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ra)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===jn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ra)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Uo,"Matrix4"),Uo.prototype.isMatrix4=!0;var mt=Uo,ca=new X,ui=new mt,Xy=new X(0,0,0),qy=new X(1,1,1),Fs=new X,vc=new X,Ln=new X,lg=new mt,cg=new yn,Eu=class Eu{constructor(e=0,t=0,n=0,s=Eu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],p=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Eu,"Euler");var Un=Eu;Un.DEFAULT_ORDER="XYZ";var Nf=class Nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Nf,"Layers");var Go=Nf,Yy=0,ug=new X,ua=new yn,os=new mt,yc=new X,To=new X,$y=new X,Zy=new yn,hg=new X(1,0,0),dg=new X(0,1,0),fg=new X(0,0,1),pg={type:"added"},Jy={type:"removed"},ha={type:"childadded",child:null},Ed={type:"childremoved",child:null},Aa=class Aa extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Aa.DEFAULT_UP.clone();let e=new X,t=new Un,n=new yn,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new We}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Aa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Aa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,t){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yc.copy(e):yc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(To,yc,this.up):os.lookAt(yc,To,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),ua.setFromRotationMatrix(os),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),ha.child=e,this.dispatchEvent(ha),ha.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jy),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,$y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Aa,"Object3D");var tn=Aa;tn.DEFAULT_UP=new X(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Uf=class Uf extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Uf,"Group");var vn=Uf,Ky={type:"move"},Ff=class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Ff,"WebXRController");var La=Ff,px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Ad(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Ad,"hue2rgb");var Of=class Of{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Gy(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ad(a,r,e+1/3),this.g=Ad(a,r,e),this.b=Ad(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=px[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return st.workingToColorSpace(ln.copy(this),e),Math.round(rt(ln.r*255,0,255))*65536+Math.round(rt(ln.g*255,0,255))*256+Math.round(rt(ln.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Ft){st.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+t,Os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Os),e.getHSL(bc);let n=yd(Os.h,bc.h,t),s=yd(Os.s,bc.s,t),r=yd(Os.l,bc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Of,"Color");var Ue=Of,ln=new Ue;Ue.NAMES=px;var Au=class Au{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Au(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Au,"Fog");var Vo=Au,Bf=class Bf extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Bf,"Scene");var Ho=Bf,hi=new X,ls=new X,Td=new X,cs=new X,da=new X,fa=new X,mg=new X,Cd=new X,Rd=new X,Pd=new X,Id=new Tt,Ld=new Tt,Dd=new Tt,Gs=class Gs{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),ls.subVectors(n,t),Td.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(ls),c=hi.dot(Td),u=ls.dot(ls),h=ls.dot(Td),p=a*u-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,m=(u*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(a,cs.y),c.addScaledVector(o,cs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Id.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Id.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,n),Dd.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Id,r.x),a.addScaledVector(Ld,r.y),a.addScaledVector(Dd,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),ls.subVectors(e,t),hi.cross(ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),hi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gs.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gs.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Gs.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Gs.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gs.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;da.subVectors(s,n),fa.subVectors(r,n),Cd.subVectors(e,n);let c=da.dot(Cd),u=fa.dot(Cd);if(c<=0&&u<=0)return t.copy(n);Rd.subVectors(e,s);let h=da.dot(Rd),p=fa.dot(Rd);if(h>=0&&p<=h)return t.copy(s);let f=c*p-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(da,a);Pd.subVectors(e,r);let m=da.dot(Pd),g=fa.dot(Pd);if(g>=0&&m<=g)return t.copy(r);let y=m*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(fa,o);let x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return mg.subVectors(r,s),o=(p-h)/(p-h+(m-g)),t.copy(s).addScaledVector(mg,o);let _=1/(x+y+f);return a=y*_,o=f*_,t.copy(n).addScaledVector(da,a).addScaledVector(fa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(Gs,"Triangle");var ds=Gs,kf=class kf{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Sc.subVectors(this.max,Co),pa.subVectors(e.a,Co),ma.subVectors(e.b,Co),ga.subVectors(e.c,Co),Bs.subVectors(ma,pa),ks.subVectors(ga,ma),yr.subVectors(pa,ga);let t=[0,-Bs.z,Bs.y,0,-ks.z,ks.y,0,-yr.z,yr.y,Bs.z,0,-Bs.x,ks.z,0,-ks.x,yr.z,0,-yr.x,-Bs.y,Bs.x,0,-ks.y,ks.x,0,-yr.y,yr.x,0];return!Nd(t,pa,ma,ga,Sc)||(t=[1,0,0,0,1,0,0,0,1],!Nd(t,pa,ma,ga,Sc))?!1:(wc.crossVectors(Bs,ks),t=[wc.x,wc.y,wc.z],Nd(t,pa,ma,ga,Sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(kf,"Box3");var Hs=kf,us=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,Mc=new Hs,pa=new X,ma=new X,ga=new X,Bs=new X,ks=new X,yr=new X,Co=new X,Sc=new X,wc=new X,br=new X;function Nd(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){br.fromArray(i,r);let o=s.x*Math.abs(br.x)+s.y*Math.abs(br.y)+s.z*Math.abs(br.z),c=e.dot(br),u=t.dot(br),h=n.dot(br);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Nd,"satForAxes");var fs=jy();function jy(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l(jy,"_generateTables");function Qy(i){Math.abs(i)>65504&&Ge("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),fs.floatView[0]=i;let e=fs.uint32View[0],t=e>>23&511;return fs.baseTable[t]+((e&8388607)>>fs.shiftTable[t])}l(Qy,"toHalfFloat");function eb(i){let e=i>>10;return fs.uint32View[0]=fs.mantissaTable[fs.offsetTable[e]+(i&1023)]+fs.exponentTable[e],fs.floatView[0]}l(eb,"fromHalfFloat");var zf=class zf{static toHalfFloat(e){return Qy(e)}static fromHalfFloat(e){return eb(e)}};l(zf,"DataUtils");var Ui=zf,Ut=new X,Ec=new ze,tb=0,Gf=class Gf extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yf,this.updateRanges=[],this.gpuType=pi,this.version=0,this._normalizationScale=e!==void 0?wh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dx(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fx(e,this.array)}};l(Gf,"BufferAttribute");var vt=Gf;var Vf=class Vf extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Vf,"Uint16BufferAttribute");var Wo=Vf;var Hf=class Hf extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Hf,"Uint32BufferAttribute");var Xo=Hf;var Wf=class Wf extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Wf,"Float32BufferAttribute");var It=Wf,nb=new Hs,Ro=new X,Ud=new X,Xf=class Xf{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):nb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);let t=Ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ud)),this.expandByPoint(Ro.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Xf,"Sphere");var Da=Xf,ib=0,Jn=new mt,Fd=new tn,xa=new X,Dn=new Hs,Po=new Hs,$t=new X,Tu=class Tu extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Po.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Dn.min,Po.min),Dn.expandByPoint($t),$t.addVectors(Dn.max,Po.max),Dn.expandByPoint($t)):(Dn.expandByPoint(Po.min),Dn.expandByPoint(Po.max))}Dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)$t.fromBufferAttribute(o,u),c&&(xa.fromBufferAttribute(e,u),$t.add(xa)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new X,c[L]=new X;let h=new X,p=new X,f=new X,m=new ze,g=new ze,y=new ze,x=new X,_=new X;function S(L,I,F){u[L]=u[I]=u[F]=1,h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,I),f.fromBufferAttribute(n,F),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,F),p.sub(h),f.sub(h),g.sub(m),y.sub(m);let V=1/(g.x*y.y-y.x*g.y);isFinite(V)&&(x.copy(p).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(V),_.copy(f).multiplyScalar(g.x).addScaledVector(p,-y.x).multiplyScalar(V),o[L].add(x),o[I].add(x),o[F].add(x),c[L].add(_),c[I].add(_),c[F].add(_))}l(S,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,I=A.length;L<I;++L){let F=A[L],V=F.start,K=F.count;for(let D=V,$=V+K;D<$;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let E=new X,P=new X,C=new X,v=new X;function w(L){C.fromBufferAttribute(s,L),v.copy(C);let I=o[L];E.copy(I),E.sub(C.multiplyScalar(C.dot(I))).normalize(),P.crossVectors(v,I);let V=P.dot(c[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,V)}l(w,"handleVertex");for(let L=0,I=n.count;L<I;++L)u[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,u=new X,h=new X,p=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),y=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h),m=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let _=0;_<h;_++)f[g++]=u[m++]}return new vt(f,h,p)}if(l(e,"convertBufferAttribute"),this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Tu,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,p=u.length;h<p;h++){let f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Tu,"BufferGeometry");var kt=Tu,qf=class qf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yf,this.updateRanges=[],this.version=0,this.uuid=Pr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(qf,"InterleavedBuffer");var qo=qf;function gg(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Pr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(gg,"getArrayKey");var xn=new X,Cu=class Cu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?wh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dx(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fx(e,this.data.array)}};l(Cu,"InterleavedBufferAttribute");var Na=Cu,Od=new X,sb=new X,rb=new We,Yf=class Yf{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Od.subVectors(n,t).cross(sb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Od),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rb.getNormalMatrix(e),s=this.coplanarPoint(Od).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Yf,"Plane");var An=Yf,ab=0,$f=class $f extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Ba,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=ef,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hc,this.stencilZFail=Hc,this.stencilZPass=Hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l($f,"Material");var gs=$f,Zf=class Zf extends gs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Zf,"SpriteMaterial");var Ws=Zf,_a,Io=new X,va=new X,ya=new X,ba=new ze,Lo=new ze,mx=new mt,Ac=new X,Do=new X,Tc=new X,xg=new ze,Bd=new ze,_g=new ze,Jf=class Jf extends tn{constructor(e=new Ws){if(super(),this.isSprite=!0,this.type="Sprite",_a===void 0){_a=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qo(t,5);_a.setIndex([0,1,2,0,2,3]),_a.setAttribute("position",new Na(n,3,0,!1)),_a.setAttribute("uv",new Na(n,2,3,!1))}this.geometry=_a,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),mx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ya.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-ya.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Cc(Ac.set(-.5,-.5,0),ya,a,va,s,r),Cc(Do.set(.5,-.5,0),ya,a,va,s,r),Cc(Tc.set(.5,.5,0),ya,a,va,s,r),xg.set(0,0),Bd.set(1,0),_g.set(1,1);let o=e.ray.intersectTriangle(Ac,Do,Tc,!1,Io);if(o===null&&(Cc(Do.set(-.5,.5,0),ya,a,va,s,r),Bd.set(0,1),o=e.ray.intersectTriangle(Ac,Tc,Do,!1,Io),o===null))return;let c=e.ray.origin.distanceTo(Io);c<e.near||c>e.far||t.push({distance:c,point:Io.clone(),uv:ds.getInterpolation(Io,Ac,Do,Tc,xg,Bd,_g,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Jf,"Sprite");var Er=Jf;function Cc(i,e,t,n,s,r){ba.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Lo.x=r*ba.x-s*ba.y,Lo.y=s*ba.x+r*ba.y):Lo.copy(ba),i.copy(e),i.x+=Lo.x,i.y+=Lo.y,i.applyMatrix4(mx)}l(Cc,"transformVertex");var hs=new X,kd=new X,Rc=new X,Pc=new X,Kf=class Kf{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hs.copy(this.origin).addScaledVector(this.direction,t),hs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kd.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),Pc.copy(this.origin).sub(kd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Rc),o=Pc.dot(this.direction),c=-Pc.dot(Rc),u=Pc.lengthSq(),h=Math.abs(1-a*a),p,f,m,g;if(h>0)if(p=a*c-o,f=a*o-c,g=r*h,p>=0)if(f>=-g)if(f<=g){let y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+u):f<=g?(p=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+u):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+u);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(kd).addScaledVector(Rc,f),m}intersectSphere(e,t){if(e.radius<0)return null;hs.subVectors(e.center,this.origin);let n=hs.dot(this.direction),s=hs.dot(hs)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hs)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,S=n.y-a.y,A=n.z-a.z,E=Math.abs(c),P=Math.abs(u),C=Math.abs(h),v,w,L,I,F,V,K,D,$,ie,O,j;if(E>=P&&E>=C?(L=c,V=p,$=g,j=_,c>=0?(v=u,w=h,I=f,F=m,K=y,D=x,ie=S,O=A):(v=h,w=u,I=m,F=f,K=x,D=y,ie=A,O=S)):P>=C?(L=u,V=f,$=y,j=S,u>=0?(v=h,w=c,I=m,F=p,K=x,D=g,ie=A,O=_):(v=c,w=h,I=p,F=m,K=g,D=x,ie=_,O=A)):(L=h,V=m,$=x,j=A,h>=0?(v=c,w=u,I=p,F=f,K=g,D=y,ie=_,O=S):(v=u,w=c,I=f,F=p,K=y,D=g,ie=S,O=_)),L===0)return null;let H=v/L,Q=w/L,z=1/L,se=I-H*V,ne=F-Q*V,W=K-H*$,ae=D-Q*$,te=ie-H*j,de=O-Q*j,ce=te*ae-de*W,Ce=se*de-ne*te,Ve=W*ne-ae*se;if(s){if(ce<0||Ce<0||Ve<0)return null}else if((ce<0||Ce<0||Ve<0)&&(ce>0||Ce>0||Ve>0))return null;let Ee=ce+Ce+Ve;if(Ee===0)return null;let Ye=z*(ce*V+Ce*$+Ve*j);return(Ee>0?Ye<0:Ye>0)?null:this.at(Ye/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Kf,"Ray");var iu=Kf,jf=class jf extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(jf,"MeshBasicMaterial");var su=jf,vg=new mt,Mr=new iu,Ic=new Da,yg=new X,Lc=new X,Dc=new X,Nc=new X,zd=new X,Uc=new X,bg=new X,Fc=new X,Qf=class Qf extends tn{constructor(e=new kt,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Uc.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],p=r[c];h!==0&&(zd.fromBufferAttribute(p,e),a?Uc.addScaledVector(zd,h):Uc.addScaledVector(zd.sub(t),h))}t.add(Uc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(Ic.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Ic,yg)===null||Mr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(vg.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(vg),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let x=f[g],_=a[x.materialIndex],S=Math.max(x.start,m.start),A=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let E=S,P=A;E<P;E+=3){let C=o.getX(E),v=o.getX(E+1),w=o.getX(E+2);s=Oc(this,_,e,n,u,h,p,C,v,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let S=o.getX(x),A=o.getX(x+1),E=o.getX(x+2);s=Oc(this,a,e,n,u,h,p,S,A,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let x=f[g],_=a[x.materialIndex],S=Math.max(x.start,m.start),A=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let E=S,P=A;E<P;E+=3){let C=E,v=E+1,w=E+2;s=Oc(this,_,e,n,u,h,p,C,v,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let S=x,A=x+1,E=x+2;s=Oc(this,a,e,n,u,h,p,S,A,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};l(Qf,"Mesh");var wt=Qf;function ob(i,e,t,n,s,r,a,o){let c;if(e.side===Sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===js,o),c===null)return null;Fc.copy(o),Fc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Fc);return u<t.near||u>t.far?null:{distance:u,point:Fc.clone(),object:i}}l(ob,"checkIntersection$1");function Oc(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,Lc),i.getVertexPosition(c,Dc),i.getVertexPosition(u,Nc);let h=ob(i,e,t,n,Lc,Dc,Nc,bg);if(h){let p=new X;ds.getBarycoord(bg,Lc,Dc,Nc,p),s&&(h.uv=ds.getInterpolatedAttribute(s,o,c,u,p,new ze)),r&&(h.uv1=ds.getInterpolatedAttribute(r,o,c,u,p,new ze)),a&&(h.normal=ds.getInterpolatedAttribute(a,o,c,u,p,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new X,materialIndex:0};ds.getNormal(Lc,Dc,Nc,f.normal),h.face=f,h.barycoord=p}return h}l(Oc,"checkGeometryIntersection");var ep=class ep extends bn{constructor(e=null,t=1,n=1,s,r,a,o,c,u=Ot,h=Ot,p,f){super(null,a,o,c,u,h,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(ep,"DataTexture");var Ua=ep;var tp=class tp extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(tp,"InstancedBufferAttribute");var xs=tp;var Sr=new Da,lb=new ze(.5,.5),Bc=new X,np=class np{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],p=r[5],f=r[6],m=r[7],g=r[8],y=r[9],x=r[10],_=r[11],S=r[12],A=r[13],E=r[14],P=r[15];if(s[0].setComponents(u-a,m-h,_-g,P-S).normalize(),s[1].setComponents(u+a,m+h,_+g,P+S).normalize(),s[2].setComponents(u+o,m+p,_+y,P+A).normalize(),s[3].setComponents(u-o,m-p,_-y,P-A).normalize(),n)s[4].setComponents(c,f,x,E).normalize(),s[5].setComponents(u-c,m-f,_-x,P-E).normalize();else if(s[4].setComponents(u-c,m-f,_-x,P-E).normalize(),t===jn)s[5].setComponents(u+c,m+f,_+x,P+E).normalize();else if(t===Ra)s[5].setComponents(c,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);let t=lb.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Bc.x=s.normal.x>0?e.max.x:e.min.x,Bc.y=s.normal.y>0?e.max.y:e.min.y,Bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(np,"Frustum");var Xs=np,Mg=new mt,Ru=class Ru{constructor(){this.coordinateSystem=jn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Mg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Xs),n[s].setFromProjectionMatrix(Mg,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Ru().copy(this)}};l(Ru,"FrustumArray");var ru=Ru;var ip=class ip extends bn{constructor(e=[],t=Cr,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(ip,"CubeTexture");var Yo=ip,sp=class sp extends bn{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(sp,"CanvasTexture");var qs=sp;var rp=class rp extends bn{constructor(e,t,n=fi,s,r,a,o=Ot,c=Ot,u,h=ms,p=1){if(h!==ms&&h!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(rp,"DepthTexture");var _s=rp,ap=class ap extends _s{constructor(e,t=fi,n=Cr,s,r,a=Ot,o=Ot,c,u=ms){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(ap,"CubeDepthTexture");var $o=ap,op=class op extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(op,"ExternalTexture");var Zo=op,Pu=class Pu extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],p=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function g(y,x,_,S,A,E,P,C,v,w,L){let I=E/v,F=P/w,V=E/2,K=P/2,D=C/2,$=v+1,ie=w+1,O=0,j=0,H=new X;for(let Q=0;Q<ie;Q++){let z=Q*F-K;for(let se=0;se<$;se++){let ne=se*I-V;H[y]=ne*S,H[x]=z*A,H[_]=D,u.push(H.x,H.y,H.z),H[y]=0,H[x]=0,H[_]=C>0?1:-1,h.push(H.x,H.y,H.z),p.push(se/v),p.push(1-Q/w),O+=1}}for(let Q=0;Q<w;Q++)for(let z=0;z<v;z++){let se=f+z+$*Q,ne=f+z+$*(Q+1),W=f+(z+1)+$*(Q+1),ae=f+(z+1)+$*Q;c.push(se,ne,ae),c.push(ne,W,ae),j+=6}o.addGroup(m,j,L),m+=j,f+=O}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Pu,"BoxGeometry");var Fi=Pu;var Iu=class Iu extends kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],m=[],g=0,y=[],x=n/2,_=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(m,2));function S(){let E=new X,P=new X,C=0,v=(t-e)/n;for(let w=0;w<=r;w++){let L=[],I=w/r,F=I*(t-e)+e;for(let V=0;V<=s;V++){let K=V/s,D=K*c+o,$=Math.sin(D),ie=Math.cos(D);P.x=F*$,P.y=-I*n+x,P.z=F*ie,p.push(P.x,P.y,P.z),E.set($,v,ie).normalize(),f.push(E.x,E.y,E.z),m.push(K,1-I),L.push(g++)}y.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let I=y[L][w],F=y[L+1][w],V=y[L+1][w+1],K=y[L][w+1];(e>0||L!==0)&&(h.push(I,F,K),C+=3),(t>0||L!==r-1)&&(h.push(F,V,K),C+=3)}u.addGroup(_,C,0),_+=C}l(S,"generateTorso");function A(E){let P=g,C=new ze,v=new X,w=0,L=E===!0?e:t,I=E===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,x*I,0),f.push(0,I,0),m.push(.5,.5),g++;let F=g;for(let V=0;V<=s;V++){let D=V/s*c+o,$=Math.cos(D),ie=Math.sin(D);v.x=L*ie,v.y=x*I,v.z=L*$,p.push(v.x,v.y,v.z),f.push(0,I,0),C.x=$*.5+.5,C.y=ie*.5*I+.5,m.push(C.x,C.y),g++}for(let V=0;V<s;V++){let K=P+V,D=F+V;E===!0?h.push(D,D+1,K):h.push(D+1,D,K),w+=3}u.addGroup(_,w,E===!0?1:2),_+=w}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Iu,"CylinderGeometry");var Oi=Iu,Lu=class Lu extends Oi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Lu,"ConeGeometry");var Bi=Lu;var Du=class Du extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,p=e/o,f=t/c,m=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let S=_*f-a;for(let A=0;A<u;A++){let E=A*p-r;g.push(E,-S,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){let A=S+u*_,E=S+u*(_+1),P=S+1+u*(_+1),C=S+1+u*_;m.push(A,E,C),m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Du,"PlaneGeometry");var ki=Du;var Nu=class Nu extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],p=new X,f=new X,m=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let S=[],A=_/n,E=a+A*o,P=e*Math.cos(E),C=Math.sqrt(e*e-P*P),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let L=w/t,I=s+L*r;p.x=-C*Math.cos(I),p.y=P,p.z=C*Math.sin(I),g.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),x.push(L+v,1-A),S.push(u++)}h.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){let A=h[_][S+1],E=h[_][S],P=h[_+1][S],C=h[_+1][S+1];(_!==0||a>0)&&m.push(A,E,C),(_!==n-1||c<Math.PI)&&m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Nu,"SphereGeometry");var Ys=Nu;var Uu=class Uu extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],p=[],f=new X,m=new X,g=new X;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=s;_++){let S=_/s*r;m.x=(e+t*Math.cos(x))*Math.cos(S),m.y=(e+t*Math.cos(x))*Math.sin(S),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),g.subVectors(m,f).normalize(),h.push(g.x,g.y,g.z),p.push(_/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let _=(s+1)*y+x-1,S=(s+1)*(y-1)+x-1,A=(s+1)*(y-1)+x,E=(s+1)*y+x;c.push(_,S,E),c.push(S,A,E)}this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Uu,"TorusGeometry");var $s=Uu;function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Sg(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Sg(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(Ir,"cloneUniforms");function un(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let s in n)e[s]=n[s]}return e}l(un,"mergeUniforms");function Sg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Sg,"isThreeObject");function cb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(cb,"cloneUniformsGroups");function Mf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}l(Mf,"getUnlitUniformColorSpace");var Lr={clone:Ir,merge:un},ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lp=class lp extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ub,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(lp,"ShaderMaterial");var Mn=lp,cp=class cp extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(cp,"RawShaderMaterial");var au=cp,up=class up extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(up,"MeshStandardMaterial");var zi=up;var hp=class hp extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(hp,"MeshDepthMaterial");var ou=hp,dp=class dp extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(dp,"MeshDistanceMaterial");var lu=dp;function Ma(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Ma,"convertArray");function kc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(kc,"hasTangents");var fp=class fp{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(fp,"Interpolant");var Zs=fp,pp=class pp extends Zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hd,endingEnd:Hd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wd:r=e,o=2*t-n;break;case Xd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wd:a=e,c=2*n-t;break;case Xd:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),y=g*g,x=y*g,_=-f*x+2*f*y-f*g,S=(1+f)*x+(-1.5-2*f)*y+(-.5+f)*g+1,A=(-1-m)*x+(1.5+m)*y+.5*g,E=m*x-m*y;for(let P=0;P!==o;++P)r[P]=_*a[h+P]+S*a[u+P]+A*a[c+P]+E*a[p+P];return r}};l(pp,"CubicInterpolant");var cu=pp,mp=class mp extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),p=1-h;for(let f=0;f!==o;++f)r[f]=a[u+f]*p+a[c+f]*h;return r}};l(mp,"LinearInterpolant");var uu=mp,gp=class gp extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(gp,"DiscreteInterpolant");var hu=gp,xp=class xp extends Zs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(s-t),y=1-g;for(let x=0;x!==o;++x)r[x]=a[u+x]*y+a[c+x]*g;return r}let f=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=m*f+g*2,S=p[_],A=p[_+1],E=e*f+g*2,P=h[E],C=h[E+1],v=fb(n,t,S,P,s);r[g]=gx(v,y,A,C,x)}return r}};l(xp,"BezierInterpolant");var du=xp;function gx(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(gx,"cubicBezier");function db(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(db,"cubicBezierSlope");function fb(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=gx(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=db(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(fb,"solveBezierParameter");var _p=class _p{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),kc(e.settings)&&(n.settings={inTangents:Ma(e.settings.inTangents,Array),outTangents:Ma(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new du(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case jc:t=this.InterpolantFactoryMethodLinear;break;case Vc:t=this.InterpolantFactoryMethodSmooth;break;case Vd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return Vc;case this.InterpolantFactoryMethodBezier:return Vd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;kc(this.settings)&&(wg(this.settings.inTangents,e),wg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;kc(this.settings)&&(Eg(this.settings.inTangents,e),Eg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&zy(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let p=o*n,f=p-n,m=p+n;for(let g=0;g!==n;++g){let y=t[p+g];if(y!==t[f+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,kc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(_p,"KeyframeTrack");var Fn=_p;function wg(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(wg,"shiftTangentTimes");function Eg(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Eg,"scaleTangentTimes");Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=jc;var vp=class vp extends Fn{constructor(e,t,n){super(e,t,n)}};l(vp,"BooleanKeyframeTrack");var Js=vp;Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Fo;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var yp=class yp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};l(yp,"ColorKeyframeTrack");var fu=yp;fu.prototype.ValueTypeName="color";var bp=class bp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};l(bp,"NumberKeyframeTrack");var pu=bp;pu.prototype.ValueTypeName="number";var Mp=class Mp extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)yn.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(Mp,"QuaternionLinearInterpolant");var mu=Mp,Sp=class Sp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};l(Sp,"QuaternionKeyframeTrack");var Jo=Sp;Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var wp=class wp extends Fn{constructor(e,t,n){super(e,t,n)}};l(wp,"StringKeyframeTrack");var Ks=wp;Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Fo;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Ep=class Ep extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};l(Ep,"VectorKeyframeTrack");var gu=Ep;gu.prototype.ValueTypeName="vector";var Ap=class Ap{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],g=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Ap,"LoadingManager");var xu=Ap,xx=new xu,Tp=class Tp{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Tp,"Loader");var _u=Tp;_u.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cp=class Cp extends tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Cp,"Light");var Ko=Cp,Rp=class Rp extends Ko{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Rp,"HemisphereLight");var jo=Rp,Gd=new mt,Ag=new X,Tg=new X,Pp=class Pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ag.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ag),Tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Ra||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Pp,"LightShadow");var vu=Pp,zc=new X,Gc=new yn,Li=new X,Ip=class Ip extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Gc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Gc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zc,Gc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Gc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Ip,"Camera");var Qo=Ip,zs=new X,Cg=new ze,Rg=new ze,Lp=class Lp extends Qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,Cg,Rg),t.subVectors(Rg,Cg)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vd*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Lp,"PerspectiveCamera");var _n=Lp;var Dp=class Dp extends Qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Dp,"OrthographicCamera");var el=Dp,Np=class Np extends vu{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Np,"DirectionalLightShadow");var qd=Np,Up=class Up extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new qd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Up,"DirectionalLight");var tl=Up;var Fp=class Fp extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(Fp,"InstancedBufferGeometry");var nl=Fp;var Sa=-90,wa=1,Op=class Op extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Sa,wa,e,t);s.layers=this.layers,this.add(s);let r=new _n(Sa,wa,e,t);r.layers=this.layers,this.add(r);let a=new _n(Sa,wa,e,t);a.layers=this.layers,this.add(a);let o=new _n(Sa,wa,e,t);o.layers=this.layers,this.add(o);let c=new _n(Sa,wa,e,t);c.layers=this.layers,this.add(c);let u=new _n(Sa,wa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(Op,"CubeCamera");var Fa=Op,Bp=class Bp extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Bp,"ArrayCamera");var yu=Bp;var Sf="\\[\\]\\.:\\/",pb=new RegExp("["+Sf+"]","g"),wf="[^"+Sf+"]",mb="[^"+Sf.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",wf),xb=/(WCOD+)?/.source.replace("WCOD",mb),_b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wf),vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wf),yb=new RegExp("^"+gb+xb+_b+vb+"$"),bb=["material","materials","bones","map"],kp=class kp{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(kp,"Composite");var Yd=kp,Vs=class Vs{constructor(e,t,n){this.path=t,this.parsedPath=n||Vs.parseTrackName(t),this.node=Vs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Vs.Composite(e,t,n):new Vs(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(e){let t=yb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=Vs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Vs,"PropertyBinding");var St=Vs;St.Composite=Yd;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rC=new Float32Array(1);var Fu=class Fu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(Fu,"Matrix2"),Fu.prototype.isMatrix2=!0;var $d=Fu;function Ef(i,e,t,n){let s=Mb(n);switch(t){case pf:return i*e;case gf:return i*e/s.components*s.byteLength;case Wu:return i*e/s.components*s.byteLength;case Hi:return i*e*2/s.components*s.byteLength;case Xu:return i*e*2/s.components*s.byteLength;case mf:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case qu:return i*e*4/s.components*s.byteLength;case al:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $u:case Ju:return Math.max(i,16)*Math.max(e,8)/4;case Yu:case Zu:return Math.max(i,8)*Math.max(e,8)/2;case Ku:case ju:case eh:case th:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qu:case ul:case nh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xh:case _h:case vh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yh:case bh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hl:case Mh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Ef,"getByteLength");function Mb(i){switch(i){case cn:case uf:return{byteLength:1,components:1};case za:case hf:case Bn:return{byteLength:2,components:1};case Vu:case Hu:return{byteLength:2,components:4};case fi:case Gu:case pi:return{byteLength:4,components:1};case df:case ff:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(Mb,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kx(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(kx,"WebGLAnimation");function Cb(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){let g=p[f],y=p[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,p[f]=y)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){let y=p[m];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(Cb,"WebGLAttributes");var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
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
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ob=`#ifdef USE_BATCHING
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
#endif`,Bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vb=`#ifdef USE_IRIDESCENCE
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
#endif`,Hb=`#ifdef USE_BUMPMAP
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jb=`#define PI 3.141592653589793
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
} // validated`,Qb=`vec3 transformedNormal = objectNormal;
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
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
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
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yM=`#ifdef USE_ENVMAP
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
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EM=`PhysicalMaterial material;
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
#endif`,AM=`uniform sampler2D dfgLUT;
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
}`,TM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BM=`#if defined( USE_POINTS_UV )
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
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VM=`#if defined( USE_MORPHCOLORS )
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
#endif`,HM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
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
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
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
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,_S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`uniform float backgroundBlurriness;
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
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
}`,US=`#if DEPTH_PACKING == 3200
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
}`,FS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
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
}`,GS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,HS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define MATCAP
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
}`,YS=`#define MATCAP
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
}`,$S=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,JS=`#define PHONG
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
}`,KS=`#define PHONG
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
}`,jS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,ew=`#define TOON
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
}`,tw=`#define TOON
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
}`,nw=`uniform float size;
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
}`,iw=`uniform vec3 diffuse;
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
}`,sw=`#include <common>
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
}`,rw=`uniform vec3 color;
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
}`,aw=`uniform float rotation;
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
}`,ow=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Rb,alphahash_pars_fragment:Pb,alphamap_fragment:Ib,alphamap_pars_fragment:Lb,alphatest_fragment:Db,alphatest_pars_fragment:Nb,aomap_fragment:Ub,aomap_pars_fragment:Fb,batching_pars_vertex:Ob,batching_vertex:Bb,begin_vertex:kb,beginnormal_vertex:zb,bsdfs:Gb,iridescence_fragment:Vb,bumpmap_pars_fragment:Hb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Yb,color_fragment:$b,color_pars_fragment:Zb,color_pars_vertex:Jb,color_vertex:Kb,common:jb,defaultnormal_vertex:Qb,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:sM,colorspace_pars_fragment:rM,envmap_fragment:aM,envmap_common_pars_fragment:oM,envmap_pars_fragment:lM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:yM,envmap_vertex:uM,fog_vertex:hM,fog_pars_vertex:dM,fog_fragment:fM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:_M,lights_pars_begin:vM,lights_toon_fragment:bM,lights_toon_pars_fragment:MM,lights_phong_fragment:SM,lights_phong_pars_fragment:wM,lights_physical_fragment:EM,lights_physical_pars_fragment:AM,lights_fragment_begin:TM,lights_fragment_maps:CM,lights_fragment_end:RM,lightprobes_pars_fragment:PM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:NM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:OM,map_particle_pars_fragment:BM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:zM,morphinstance_vertex:GM,morphcolor_vertex:VM,morphnormal_vertex:HM,morphtarget_pars_vertex:WM,morphtarget_vertex:XM,normal_fragment_begin:qM,normal_fragment_maps:YM,normal_pars_fragment:$M,normal_pars_vertex:ZM,normal_vertex:JM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:sS,project_vertex:rS,dithering_fragment:aS,dithering_pars_fragment:oS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:hS,shadowmap_vertex:dS,shadowmask_pars_fragment:fS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:xS,specularmap_fragment:_S,specularmap_pars_fragment:vS,tonemapping_fragment:yS,tonemapping_pars_fragment:bS,transmission_fragment:MS,transmission_pars_fragment:SS,uv_pars_fragment:wS,uv_pars_vertex:ES,uv_vertex:AS,worldpos_vertex:TS,background_vert:CS,background_frag:RS,backgroundCube_vert:PS,backgroundCube_frag:IS,cube_vert:LS,cube_frag:DS,depth_vert:NS,depth_frag:US,distance_vert:FS,distance_frag:OS,equirect_vert:BS,equirect_frag:kS,linedashed_vert:zS,linedashed_frag:GS,meshbasic_vert:VS,meshbasic_frag:HS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:qS,meshmatcap_frag:YS,meshnormal_vert:$S,meshnormal_frag:ZS,meshphong_vert:JS,meshphong_frag:KS,meshphysical_vert:jS,meshphysical_frag:QS,meshtoon_vert:ew,meshtoon_frag:tw,points_vert:nw,points_frag:iw,shadow_vert:sw,shadow_frag:rw,sprite_vert:aw,sprite_frag:ow},we={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Xi={basic:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ue(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:un([we.points,we.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:un([we.common,we.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:un([we.sprite,we.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:un([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:un([we.lights,we.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Xi.physical={uniforms:un([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Eh={r:0,b:0,g:0},lw=new mt,zx=new We;zx.set(-1,0,0,0,1,0,0,0,1);function cw(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,c,u,h=null,p=0,f=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let E=S.backgroundBlurriness>0;A=e.get(A,E)}return A}l(m,"getBackground");function g(S){let A=!1,E=m(S);E===null?x(a,o):E&&E.isColor&&(x(E,1),A=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(S,A){let E=m(A);E&&E.isCubeTexture?(u===void 0&&(u=new wt(new Fi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ir(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lw.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(zx),u.material.toneMapped=st.getTransfer(E.colorSpace)!==dt,(h!==E||p!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,p=E.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new wt(new ki(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ir(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(S,A){S.getRGB(Eh,Mf(i)),t.buffers.color.setClear(Eh.r,Eh.g,Eh.b,A,r)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(S,A=1){a.set(S),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(S){o=S,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(cw,"WebGLBackground");function uw(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(F,V,K,D,$){let ie=!1,O=p(F,D,K,V);r!==O&&(r=O,u(r.object)),ie=m(F,D,K,$),ie&&g(F,D,K,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,E(F,V,K,D),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(F){return i.bindVertexArray(F)}l(u,"bindVertexArrayObject");function h(F){return i.deleteVertexArray(F)}l(h,"deleteVertexArrayObject");function p(F,V,K,D){let $=D.wireframe===!0,ie=n[V.id];ie===void 0&&(ie={},n[V.id]=ie);let O=F.isInstancedMesh===!0?F.id:0,j=ie[O];j===void 0&&(j={},ie[O]=j);let H=j[K.id];H===void 0&&(H={},j[K.id]=H);let Q=H[$];return Q===void 0&&(Q=f(c()),H[$]=Q),Q}l(p,"getBindingState");function f(F){let V=[],K=[],D=[];for(let $=0;$<t;$++)V[$]=0,K[$]=0,D[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:D,object:F,attributes:{},index:null}}l(f,"createBindingState");function m(F,V,K,D){let $=r.attributes,ie=V.attributes,O=0,j=K.getAttributes();for(let H in j)if(j[H].location>=0){let z=$[H],se=ie[H];if(se===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),z===void 0||z.attribute!==se||se&&z.data!==se.data)return!0;O++}return r.attributesNum!==O||r.index!==D}l(m,"needsUpdate");function g(F,V,K,D){let $={},ie=V.attributes,O=0,j=K.getAttributes();for(let H in j)if(j[H].location>=0){let z=ie[H];z===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(z=F.instanceColor));let se={};se.attribute=z,z&&z.data&&(se.data=z.data),$[H]=se,O++}r.attributes=$,r.attributesNum=O,r.index=D}l(g,"saveCache");function y(){let F=r.newAttributes;for(let V=0,K=F.length;V<K;V++)F[V]=0}l(y,"initAttributes");function x(F){_(F,0)}l(x,"enableAttribute");function _(F,V){let K=r.newAttributes,D=r.enabledAttributes,$=r.attributeDivisors;K[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),$[F]!==V&&(i.vertexAttribDivisor(F,V),$[F]=V)}l(_,"enableAttributeAndDivisor");function S(){let F=r.newAttributes,V=r.enabledAttributes;for(let K=0,D=V.length;K<D;K++)V[K]!==F[K]&&(i.disableVertexAttribArray(K),V[K]=0)}l(S,"disableUnusedAttributes");function A(F,V,K,D,$,ie,O){O===!0?i.vertexAttribIPointer(F,V,K,$,ie):i.vertexAttribPointer(F,V,K,D,$,ie)}l(A,"vertexAttribPointer");function E(F,V,K,D){y();let $=D.attributes,ie=K.getAttributes(),O=V.defaultAttributeValues;for(let j in ie){let H=ie[j];if(H.location>=0){let Q=$[j];if(Q===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let z=Q.normalized,se=Q.itemSize,ne=e.get(Q);if(ne===void 0)continue;let W=ne.buffer,ae=ne.type,te=ne.bytesPerElement,de=ae===i.INT||ae===i.UNSIGNED_INT||Q.gpuType===Gu;if(Q.isInterleavedBufferAttribute){let ce=Q.data,Ce=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,Ve=Q.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Ee=0;Ee<H.locationSize;Ee++)_(H.location+Ee,ce.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Ee=0;Ee<H.locationSize;Ee++)A(H.location+Ee,se/H.locationSize,ae,z,Ce*te,(Ve+se/H.locationSize*Ee)*te,de)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)_(H.location+ce,Q.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<H.locationSize;ce++)x(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ce=0;ce<H.locationSize;ce++)A(H.location+ce,se/H.locationSize,ae,z,se*te,se/H.locationSize*ce*te,de)}}else if(O!==void 0){let z=O[j];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(H.location,z);break;case 3:i.vertexAttrib3fv(H.location,z);break;case 4:i.vertexAttrib4fv(H.location,z);break;default:i.vertexAttrib1fv(H.location,z)}}}}S()}l(E,"setupVertexAttributes");function P(){L();for(let F in n){let V=n[F];for(let K in V){let D=V[K];for(let $ in D){let ie=D[$];for(let O in ie)h(ie[O].object),delete ie[O];delete D[$]}}delete n[F]}}l(P,"dispose");function C(F){if(n[F.id]===void 0)return;let V=n[F.id];for(let K in V){let D=V[K];for(let $ in D){let ie=D[$];for(let O in ie)h(ie[O].object),delete ie[O];delete D[$]}}delete n[F.id]}l(C,"releaseStatesOfGeometry");function v(F){for(let V in n){let K=n[V];for(let D in K){let $=K[D];if($[F.id]===void 0)continue;let ie=$[F.id];for(let O in ie)h(ie[O].object),delete ie[O];delete $[F.id]}}}l(v,"releaseStatesOfProgram");function w(F){for(let V in n){let K=n[V],D=F.isInstancedMesh===!0?F.id:0,$=K[D];if($!==void 0){for(let ie in $){let O=$[ie];for(let j in O)h(O[j].object),delete O[j];delete $[ie]}delete K[D],Object.keys(K).length===0&&delete n[V]}}}l(w,"releaseStatesOfObject");function L(){I(),a=!0,r!==s&&(r=s,u(r.object))}l(L,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return l(I,"resetDefaultState"),{setup:o,reset:L,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:S}}l(uw,"WebGLBindingStates");function hw(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(hw,"WebGLBufferRenderer");function dw(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(v){return!(v!==kn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let w=v===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==cn&&v!==pi&&!w&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ge("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:E,maxSamples:P,samples:C}}l(dw,"WebGLCapabilities");function fw(i){let e=this,t=null,n=0,s=!1,r=!1,a=new An,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let g=p.clippingPlanes,y=p.clipIntersection,x=p.clipShadows,_=i.get(p);if(!s||g===null||g.length===0||r&&!x)r?h(null):u();else{let S=r?0:n,A=S*4,E=_.clippingState||null;c.value=E,E=h(g,f,A,m);for(let P=0;P!==A;++P)E[P]=t[P];_.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(p,f,m,g){let y=p!==null?p.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=m+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,E=m;A!==y;++A,E+=4)a.copy(p[A]).applyMatrix4(S,o),a.normal.toArray(x,E),x[E+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(fw,"WebGLClipping");var Jp=class Jp extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ar});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Bt),new Fa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(Jp,"WebGLCubeRenderTarget");var pl=Jp,_x=256,pw=3,mw=20,Gx=256,Vx=16,gw=3,xw=new X,_w=new Ue,Rh=class Rh{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fa(1,10,null),this._boxMesh=new wt(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=xw}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(_w));let x=new Fa(n,s,h);return x.position.copy(o),x.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_x,hx(e))}_fromTexture(e,t){e.mapping===Cr||e.mapping===ka?this._setSize(e.image.length===0?_x:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=vx(e,!1,!1),n=Math.log2(e)-pw;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cr||e.mapping===ka?(this._cubemapMaterial===null&&(this._cubemapMaterial=bx()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vw(),this._integrationMaterial=yw());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vx);for(let a=0;a<=n;a++){let o=Rh.lodToRoughness(a,n);if(a>n-gw)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Gx*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bw());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(Rh,"PMREMGenerator");var Th=Rh;function vx(i,e,t){return new pl(i,{minFilter:On,generateMipmaps:e,type:Bn,colorSpace:Oo,depthBuffer:t})}l(vx,"_createRenderTarget");function ml(i,e,t){return new Mn({name:i,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:Sn,blending:Ar,depthTest:!1,depthWrite:!1})}l(ml,"_getMaterial");function vw(){return ml("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gx}u

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
	`)}l(vw,"_getGGXMaterial");function yw(){return ml("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vx}},`

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
	`)}l(yw,"_getIntegrationMaterial");function bw(){return ml("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${mw}
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
	`)}l(bw,"_getBlurMaterial");function yx(){return ml("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(yx,"_getEquirectMaterial");function bx(){return ml("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(bx,"_getCubemapMaterial");function Mw(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}l(s,"get");function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===Bu||m===ku)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new pl(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}l(r,"getCube");function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===Bu||m===ku,y=m===Cr||m===ka;if(g||y){let x=t.get(f),_=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Th(i)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let S=f.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new Th(i)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}l(a,"getPMREM");function o(f,m){return m===Bu?f.mapping=Cr:m===ku&&(f.mapping=ka),f}l(o,"mapTextureMapping");function c(f){let m=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&m++;return m===g}l(c,"isCubeTextureComplete");function u(f){let m=f.target;m.removeEventListener("dispose",u);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}l(u,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}l(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:s,dispose:p}}l(Mw,"WebGLEnvironments");function Sw(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&No("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(Sw,"WebGLExtensions");function ww(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function p(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let S=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?Xo:Wo,E=new A(Math.ceil(S/3)*6,1),P=E.array;if(y!==null){let v=y.array;_=y.version;for(let w=0,L=0;w<S;w+=3){let I=v[w+0],F=v[w+1],V=v[w+2];P[L++]=I,P[L++]=F,P[L++]=F,P[L++]=V,P[L++]=V,P[L++]=I}}else{_=x.version;for(let v=0,w=0;v<S;v+=3){let L=v+0,I=v+1,F=v+2;P[w++]=L,P[w++]=I,P[w++]=I,P[w++]=F,P[w++]=F,P[w++]=L}}E.version=_;let C=r.get(g);C&&e.remove(C),r.set(g,E)}l(p,"updateWireframeAttribute");function f(g){let y=r.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return r.get(g)}l(f,"getWireframeAttribute");function m(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:f,dispose:m}}l(ww,"WebGLGeometries");function Ew(i,e,t){let n;function s(p){n=p}l(s,"setMode");let r,a;function o(p){r=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}l(c,"render");function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,p*a,m),t.update(f,n,m))}l(u,"renderInstances");function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,m);let y=0;for(let x=0;x<m;x++)y+=f[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(Ew,"WebGLIndexedBufferRenderer");function Aw(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(Aw,"WebGLInfo");function Tw(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==p){let I=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var m=I;l(I,"disposeTexture"),f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),x===!0&&(E=3);let P=o.attributes.position.count*E,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let v=new Float32Array(P*C*4*p),w=new wr(v,P,C,p);w.type=pi,w.needsUpdate=!0;let L=E*4;for(let F=0;F<p;F++){let V=_[F],K=S[F],D=A[F],$=P*C*4*F;for(let ie=0;ie<V.count;ie++){let O=ie*L;g===!0&&(s.fromBufferAttribute(V,ie),v[$+O+0]=s.x,v[$+O+1]=s.y,v[$+O+2]=s.z,v[$+O+3]=0),y===!0&&(s.fromBufferAttribute(K,ie),v[$+O+4]=s.x,v[$+O+5]=s.y,v[$+O+6]=s.z,v[$+O+7]=0),x===!0&&(s.fromBufferAttribute(D,ie),v[$+O+8]=s.x,v[$+O+9]=s.y,v[$+O+10]=s.z,v[$+O+11]=D.itemSize===4?s.w:1)}}f={count:p,texture:w,size:new ze(P,C)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(r,"update"),{update:r}}l(Tw,"WebGLMorphtargets");function Cw(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,p=u.geometry,f=e.get(u,p);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(Cw,"WebGLObjects");var Rw={[nf]:"LINEAR_TONE_MAPPING",[sf]:"REINHARD_TONE_MAPPING",[rf]:"CINEON_TONE_MAPPING",[sl]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[lf]:"NEUTRAL_TONE_MAPPING",[af]:"CUSTOM_TONE_MAPPING"};function Pw(i,e,t,n,s,r){let a=new Nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new kt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let p=new au({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new wt(h,p),m=new el(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,S=null,A=[],E=!1;this.setSize=function(P,C){a.setSize(P,C),o!==null&&o.setSize(P,C),c!==null&&c.setSize(P,C);for(let v=0;v<A.length;v++){let w=A[v];w.setSize&&w.setSize(P,C)}},this.setEffects=function(P){A=P,E=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new Nn(C,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(C,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&A.some(L=>L.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&u===null&&(u=new _s(C,v),r===!0&&(u.format=vs,u.type=Rr)),a.dispose(),a.depthTexture=w?u:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let L=0;L<A.length;L++){let I=A[L];I.setSize&&I.setSize(C,v),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(P,C){if(x||P.toneMapping===Vi&&A.length===0)return!1;if(S=C,C!==null){let v=C.width,w=C.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return E===!1&&P.setRenderTarget(a),_=P.toneMapping,P.toneMapping=Vi,!0},this.hasRenderPass=function(){return E},this.end=function(P,C){P.toneMapping=_,x=!0;let v=a,w=o;for(let L=0;L<A.length;L++){let I=A[L];I.enabled!==!1&&(I.render(P,w,v,C),I.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(g!==P.outputColorSpace||y!==P.toneMapping){g=P.outputColorSpace,y=P.toneMapping,p.defines={},st.getTransfer(g)===dt&&(p.defines.SRGB_TRANSFER="");let L=Rw[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,P.setRenderTarget(S),P.render(f,m),S=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}l(Pw,"WebGLOutput");var Hx=new bn,Wx=new _s(1,1),Xx=new $o(1),qx=new wr,Yx=new nu,$x=new Yo,Mx=[],Sx=[],wx=new Float32Array(16),Ex=new Float32Array(9),Ax=new Float32Array(4);function Va(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mx[s];if(r===void 0&&(r=new Float32Array(s),Mx[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(Va,"flatten");function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(Ht,"arraysEqual");function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Wt,"copyArray");function Ph(i,e){let t=Sx[e];t===void 0&&(t=new Int32Array(e),Sx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Ph,"allocTexUnits");function Iw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(Iw,"setValueV1f");function Lw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}l(Lw,"setValueV2f");function Dw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}l(Dw,"setValueV3f");function Nw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}l(Nw,"setValueV4f");function Uw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Ax.set(n),i.uniformMatrix2fv(this.addr,!1,Ax),Wt(t,n)}}l(Uw,"setValueM2");function Fw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Ex.set(n),i.uniformMatrix3fv(this.addr,!1,Ex),Wt(t,n)}}l(Fw,"setValueM3");function Ow(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;wx.set(n),i.uniformMatrix4fv(this.addr,!1,wx),Wt(t,n)}}l(Ow,"setValueM4");function Bw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(Bw,"setValueV1i");function kw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}l(kw,"setValueV2i");function zw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}l(zw,"setValueV3i");function Gw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}l(Gw,"setValueV4i");function Vw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(Vw,"setValueV1ui");function Hw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}l(Hw,"setValueV2ui");function Ww(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}l(Ww,"setValueV3ui");function Xw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}l(Xw,"setValueV4ui");function Ih(i){return i.version===0&&(i.compareFunction=vf,i.needsUpdate=!0),i}l(Ih,"initShadowTexture");function qw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ih(Wx):r=Hx,t.setTexture2D(e||r,s)}l(qw,"setValueT1");function Yw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yx,s)}l(Yw,"setValueT3D1");function $w(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ih(Xx):r=$x,t.setTextureCube(e||r,s)}l($w,"setValueT6");function Zw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qx,s)}l(Zw,"setValueT2DArray1");function Jw(i){switch(i){case 5126:return Iw;case 35664:return Lw;case 35665:return Dw;case 35666:return Nw;case 35674:return Uw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return Bw;case 35667:case 35671:return kw;case 35668:case 35672:return zw;case 35669:case 35673:return Gw;case 5125:return Vw;case 36294:return Hw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return Zw}}l(Jw,"getSingularSetter");function Kw(i,e){i.uniform1fv(this.addr,e)}l(Kw,"setValueV1fArray");function jw(i,e){let t=Va(e,this.size,2);i.uniform2fv(this.addr,t)}l(jw,"setValueV2fArray");function Qw(i,e){let t=Va(e,this.size,3);i.uniform3fv(this.addr,t)}l(Qw,"setValueV3fArray");function e1(i,e){let t=Va(e,this.size,4);i.uniform4fv(this.addr,t)}l(e1,"setValueV4fArray");function t1(i,e){let t=Va(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(t1,"setValueM2Array");function n1(i,e){let t=Va(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(n1,"setValueM3Array");function i1(i,e){let t=Va(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(i1,"setValueM4Array");function s1(i,e){i.uniform1iv(this.addr,e)}l(s1,"setValueV1iArray");function r1(i,e){i.uniform2iv(this.addr,e)}l(r1,"setValueV2iArray");function a1(i,e){i.uniform3iv(this.addr,e)}l(a1,"setValueV3iArray");function o1(i,e){i.uniform4iv(this.addr,e)}l(o1,"setValueV4iArray");function l1(i,e){i.uniform1uiv(this.addr,e)}l(l1,"setValueV1uiArray");function c1(i,e){i.uniform2uiv(this.addr,e)}l(c1,"setValueV2uiArray");function u1(i,e){i.uniform3uiv(this.addr,e)}l(u1,"setValueV3uiArray");function h1(i,e){i.uniform4uiv(this.addr,e)}l(h1,"setValueV4uiArray");function d1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ih(Wx):a=Hx;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(d1,"setValueT1Array");function f1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yx,r[a])}l(f1,"setValueT3DArray");function p1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ih(Xx):a=$x;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(p1,"setValueT6Array");function m1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qx,r[a])}l(m1,"setValueT2DArrayArray");function g1(i){switch(i){case 5126:return Kw;case 35664:return jw;case 35665:return Qw;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}l(g1,"getPureArraySetter");var Kp=class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jw(t.type)}};l(Kp,"SingleUniform");var Vp=Kp,jp=class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}};l(jp,"PureArrayUniform");var Hp=jp,Qp=class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(Qp,"StructuredUniform");var Wp=Qp,zp=/(\w+)(\])?(\[|\.)?/g;function Tx(i,e){i.seq.push(e),i.map[e.id]=e}l(Tx,"addUniform");function x1(i,e,t){let n=i.name,s=n.length;for(zp.lastIndex=0;;){let r=zp.exec(n),a=zp.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Tx(t,u===void 0?new Vp(o,i,e):new Hp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Wp(o),Tx(t,p)),t=p}}}l(x1,"parseUniform");var em=class em{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);x1(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(em,"WebGLUniforms");var Ga=em;function Cx(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(Cx,"WebGLShader");var _1=37297,v1=0;function y1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(y1,"handleSource");var Rx=new We;function b1(i){st._getMatrix(Rx,st.workingColorSpace,i);let e=`mat3( ${Rx.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Bo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(b1,"getEncodingComponents");function Px(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y1(i.getShaderSource(e),o)}else return r}l(Px,"getShaderErrors");function M1(i,e){let t=b1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(M1,"getTexelEncodingFunction");var S1={[nf]:"Linear",[sf]:"Reinhard",[rf]:"Cineon",[sl]:"ACESFilmic",[of]:"AgX",[lf]:"Neutral",[af]:"Custom"};function w1(i,e){let t=S1[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(w1,"getToneMappingFunction");var Ah=new X;function E1(){st.getLuminanceCoefficients(Ah);let i=Ah.x.toFixed(4),e=Ah.y.toFixed(4),t=Ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(E1,"getLuminanceFunction");function A1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}l(A1,"generateVertexExtensions");function T1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(T1,"generateDefines");function C1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(C1,"fetchAttributeLocations");function fl(i){return i!==""}l(fl,"filterEmptyLine");function Ix(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(Ix,"replaceLightNums");function Lx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(Lx,"replaceClippingPlaneNums");var R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(i){return i.replace(R1,P1)}l(Xp,"resolveIncludes");function P1(i,e){let t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xp(t)}l(P1,"includeReplacer");var I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dx(i){return i.replace(I1,L1)}l(Dx,"unrollLoops");function L1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(L1,"loopReplacer");function Nx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(Nx,"generatePrecision");var D1={[il]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function N1(i){return D1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(N1,"generateShadowMapTypeDefine");var U1={[ka]:"ENVMAP_MODE_REFRACTION"};function F1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(F1,"generateEnvMapModeDefine");var O1={[tf]:"ENVMAP_BLENDING_MULTIPLY",[Jg]:"ENVMAP_BLENDING_MIX",[Kg]:"ENVMAP_BLENDING_ADD"};function B1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O1[i.combine]||"ENVMAP_BLENDING_NONE"}l(B1,"generateEnvMapBlendingDefine");function k1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=N1(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=F1(t),p=B1(t),f=A1(t),m=T1(r),g=s.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fl).join(`
`),x.length>0&&(x+=`
`)):(y=[Nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),x=[Nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?je.tonemapping_pars_fragment:"",t.toneMapping!==Vi?w1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,M1("linearToOutputTexel",t.outputColorSpace),E1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),a=Xp(a),a=Ix(a,t),a=Lx(a,t),o=Xp(o),o=Ix(o,t),o=Lx(o,t),a=Dx(a),o=Dx(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=_+y+a,A=_+x+o,E=Cx(s,s.VERTEX_SHADER,S),P=Cx(s,s.FRAGMENT_SHADER,A);s.attachShader(g,E),s.attachShader(g,P),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",V=s.getShaderInfoLog(E)||"",K=s.getShaderInfoLog(P)||"",D=F.trim(),$=V.trim(),ie=K.trim(),O=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,P);else{let H=Px(s,E,"vertex"),Q=Px(s,P,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+H+`
`+Q)}else D!==""?Ge("WebGLProgram: Program Info Log:",D):($===""||ie==="")&&(j=!1);j&&(I.diagnostics={runnable:O,programLog:D,vertexShader:{log:$,prefix:y},fragmentShader:{log:ie,prefix:x}})}s.deleteShader(E),s.deleteShader(P),v=new Ga(s,g),w=C1(s,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,_1)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=P,this}l(k1,"WebGLProgram");var z1=0,tm=class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}};l(tm,"WebGLShaderCache");var qp=tm,nm=class nm{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}};l(nm,"WebGLShaderStage");var Yp=nm;function G1(i){return i===Hi||i===ul||i===hl}l(G1,"isPackedRGFormat");function V1(i,e,t,n,s,r){let a=new Go,o=new qp,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}l(m,"getChannel");function g(v,w,L,I,F,V){let K=I.fog,D=F.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||$,ie),j=f[v.type],H=n.precision;v.precision!==null&&(H=n.getMaxPrecision(v.precision),H!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",H,"instead."));let Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=Q!==void 0?Q.length:0,se=0;D.morphAttributes.position!==void 0&&(se=1),D.morphAttributes.normal!==void 0&&(se=2),D.morphAttributes.color!==void 0&&(se=3);let ne,W,ae,te;if(j){let Te=Xi[j];ne=Te.vertexShader,W=Te.fragmentShader}else{ne=v.vertexShader,W=v.fragmentShader;let Te=o.getVertexShaderStage(v),pt=o.getFragmentShaderStage(v);o.update(v,Te,pt),ae=Te.id,te=pt.id}let de=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,Ee=!!v.map,Ye=!!v.matcap,Qe=!!O,Xe=Qe&&O.isPMREMTexture===!0,gt=!!v.aoMap,xt=!!v.lightMap,Ze=!!v.bumpMap&&v.wireframe===!1,et=!!v.normalMap,Dt=!!v.displacementMap,ft=!!v.emissiveMap,At=!!v.metalnessMap,Lt=!!v.roughnessMap,at=v.anisotropy>0,k=v.clearcoat>0,Pt=v.diffuseRoughness>0,ot=v.dispersion>0,tt=v.retroreflectivity>0,me=v.iridescence>0,ut=v.sheen>0,Fe=v.transmission>0,ke=at&&!!v.anisotropyMap,T=k&&!!v.clearcoatMap,b=k&&!!v.clearcoatNormalMap,q=k&&!!v.clearcoatRoughnessMap,fe=Pt&&!!v.diffuseRoughnessMap,le=me&&!!v.iridescenceMap,xe=me&&!!v.iridescenceThicknessMap,Me=ut&&!!v.sheenColorMap,oe=ut&&!!v.sheenRoughnessMap,ue=!!v.specularMap,ve=!!v.specularColorMap,N=!!v.specularIntensityMap,he=Fe&&!!v.transmissionMap,re=Fe&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Oe=!!v.alphaHash,Ke=!!v.extensions,pe=Vi;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Be=Xe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Je={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:W,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:H,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Ye,envMap:Qe,envMapMode:Qe&&O.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Be.length-1:null,envMapSize:Xe?Be[0].width:null,aoMap:gt,lightMap:xt,bumpMap:Ze,normalMap:et,displacementMap:Dt,emissiveMap:ft,normalMapObjectSpace:et&&v.normalMapType===ex,normalMapTangentSpace:et&&v.normalMapType===Sh,packedNormalMap:et&&v.normalMapType===Sh&&G1(v.normalMap.format),metalnessMap:At,roughnessMap:Lt,anisotropy:at,anisotropyMap:ke,clearcoat:k,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:q,diffuseRoughness:Pt,diffuseRoughnessMap:fe,dispersion:ot,retroreflection:tt,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:ut,sheenColorMap:Me,sheenRoughnessMap:oe,specularMap:ue,specularColorMap:ve,specularIntensityMap:N,transmission:Fe,transmissionMap:he,thicknessMap:re,gradientMap:ye,opaque:v.transparent===!1&&v.blending===Ba&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Oe,combine:v.combine,mapUv:Ee&&m(v.map.channel),aoMapUv:gt&&m(v.aoMap.channel),lightMapUv:xt&&m(v.lightMap.channel),bumpMapUv:Ze&&m(v.bumpMap.channel),normalMapUv:et&&m(v.normalMap.channel),displacementMapUv:Dt&&m(v.displacementMap.channel),emissiveMapUv:ft&&m(v.emissiveMap.channel),metalnessMapUv:At&&m(v.metalnessMap.channel),roughnessMapUv:Lt&&m(v.roughnessMap.channel),anisotropyMapUv:ke&&m(v.anisotropyMap.channel),clearcoatMapUv:T&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(v.sheenRoughnessMap.channel),specularMapUv:ue&&m(v.specularMap.channel),specularColorMapUv:ve&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:ge&&m(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(et||at),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Ee||ge),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&et===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:se,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gi,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ke&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&v.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}l(g,"getParameters");function y(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(w,v),_(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}l(y,"getProgramCacheKey");function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function S(v){let w=f[v.type],L;if(w){let I=Xi[w];L=Lr.clone(I.uniforms)}else L=v.uniforms;return L}l(S,"getUniforms");function A(v,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new k1(i,w,v,s),u.push(L),h.set(w,L)),L}l(A,"acquireProgram");function E(v){if(--v.usedTimes===0){let w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(E,"releaseProgram");function P(v){o.remove(v)}l(P,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:u,dispose:C}}l(V1,"WebGLPrograms");function H1(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(H1,"WebGLProperties");function W1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(W1,"painterSortStable");function Ux(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(Ux,"reversePainterSortStable");function Fx(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(f,m,g,y,x,_){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:m,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:x,group:_},i[e]=S):(S.id=f.id,S.object=f,S.geometry=m,S.material=g,S.materialVariant=a(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=x,S.group=_),e++,S}l(o,"getNextRenderItem");function c(f,m,g,y,x,_,S){S.reversedDepth===!0&&(x=-x);let A=o(f,m,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}l(c,"push");function u(f,m,g,y,x,_){let S=o(f,m,g,y,x,_);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}l(u,"unshift");function h(f,m){t.length>1&&t.sort(f||W1),n.length>1&&n.sort(m||Ux),s.length>1&&s.sort(m||Ux)}l(h,"sort");function p(){for(let f=e,m=i.length;f<m;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:p,sort:h}}l(Fx,"WebGLRenderList");function X1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fx,i.set(n,[a])):s>=r.length?(a=new Fx,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(X1,"WebGLRenderLists");function q1(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Ue};break;case"SpotLight":t={position:new X,direction:new X,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t},"get")}}l(q1,"UniformsCache");function Y1(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(Y1,"ShadowUniformsCache");var $1=0;function Z1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(Z1,"shadowCastingAndTexturingLightsFirst");function J1(i){let e=new q1,t=Y1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);let s=new X,r=new mt,a=new mt;function o(u){let h=0,p=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let m=0,g=0,y=0,x=0,_=0,S=0,A=0,E=0,P=0,C=0,v=0,w=0,L=0,I=0;u.sort(Z1);for(let V=0,K=u.length;V<K;V++){let D=u[V],$=D.color,ie=D.intensity,O=D.distance,j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hi?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=$.r*ie,p+=$.g*ie,f+=$.b*ie;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],ie);I++}else if(D.isSunLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=j;let se=Q.getViewportCount();for(let ne=0;ne<se;ne++)n.sunShadowMatrix[y+ne]=Q.getMatrix(ne),n.sunShadowCascade[y+ne]=Q._cascadeData[ne];y+=se,g++}n.sun[m]=H,m++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,n.directionalShadow[x]=z,n.directionalShadowMap[x]=j,n.directionalShadowMatrix[x]=D.shadow.matrix,P++}n.directional[x]=H,x++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy($).multiplyScalar(ie),H.distance=O,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[S]=H;let Q=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[S]=Q.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=j,v++}S++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy($).multiplyScalar(ie),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=H,A++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=D.shadow.matrix,C++}n.point[_]=H,_++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(ie),H.groundColor.copy(D.groundColor).multiplyScalar(ie),n.hemi[E]=H,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let F=n.hash;(F.sunLength!==m||F.directionalLength!==x||F.pointLength!==_||F.spotLength!==S||F.rectAreaLength!==A||F.hemiLength!==E||F.numSunShadows!==g||F.numDirectionalShadows!==P||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==w||F.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=x,n.spot.length=S,n.rectArea.length=A,n.point.length=_,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,F.sunLength=m,F.directionalLength=x,F.pointLength=_,F.spotLength=S,F.rectAreaLength=A,F.hemiLength=E,F.numSunShadows=g,F.numDirectionalShadows=P,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=w,F.numLightProbes=I,n.version=$1++)}l(o,"setup");function c(u,h){let p=0,f=0,m=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){let E=u[S];if(E.isSunLight){let P=n.sun[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(_),p++}else if(E.isDirectionalLight){let P=n.directional[f];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),f++}else if(E.isSpotLight){let P=n.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),g++}else if(E.isRectAreaLight){let P=n.rectArea[y];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(_),a.identity(),r.copy(E.matrixWorld),r.premultiply(_),a.extractRotation(r),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let P=n.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){let P=n.hemi[x];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(J1,"WebGLLights");function Ox(i){let e=new J1(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}l(r,"init");function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}l(c,"setupLights");function u(p){e.setupView(t,p)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(Ox,"WebGLRenderState");function K1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ox(i),e.set(s,[o])):r>=a.length?(o=new Ox(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(K1,"WebGLRenderStates");var j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
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
}`,eE=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],tE=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Bx=new mt,dl=new X,Gp=new X;function nE(i,e,t){let n=new Xs,s=new ze,r=new ze,a=new Tt,o=new ou,c=new lu,u={},h=t.maxTextureSize,p={[js]:Sn,[Sn]:js,[Gi]:Gi},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:j1,fragmentShader:Q1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let _=this.type;this.render=function(C,v,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Ou&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=il);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ar),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let K=_!==this.type;K&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach($=>$.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,$=C.length;D<$;D++){let ie=C[D],O=ie.shadow;if(O===void 0){Ge("WebGLShadowMap:",ie,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let j=O.getFrameExtents();s.multiply(j),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||K===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Oa){if(ie.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(s.x,s.y,{format:Hi,type:Bn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),O.map.texture.name=ie.name+".shadowMap",O.map.depthTexture=new _s(s.x,s.y,pi),O.map.depthTexture.name=ie.name+".shadowMapDepth",O.map.depthTexture.format=ms,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot}else ie.isPointLight?(O.map=new pl(s.x),O.map.depthTexture=new $o(s.x,fi)):(O.map=new Nn(s.x,s.y),O.map.depthTexture=new _s(s.x,s.y,fi)),O.map.depthTexture.name=ie.name+".shadowMap",O.map.depthTexture.format=ms,this.type===il?(O.map.depthTexture.compareFunction=H?_f:xf,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let Q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();ie.isPointLight!==!0&&O.updateMatrices(ie,w);let z=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let se=0;se<Q;se++){let ne=O.getCamera(se);if(ie.isPointLight){let W=O.camera,ae=O.matrix,te=ie.distance||W.far;te!==W.far&&(W.far=te,W.updateProjectionMatrix()),dl.setFromMatrixPosition(ie.matrixWorld),W.position.copy(dl),Gp.copy(W.position),Gp.add(eE[se]),W.up.copy(tE[se]),W.lookAt(Gp),W.updateMatrixWorld(),ae.makeTranslation(-dl.x,-dl.y,-dl.z),Bx.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Bx,W.coordinateSystem,W.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,se),i.clear();else{se===0&&(i.setRenderTarget(O.map),i.clear());let W=O.getViewport(se);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),V.viewport(a)}n=O.getFrustum(se),E(v,w,ne,ie,z,this.type)}O.isPointLightShadow!==!0&&this.type===Oa&&S(O,w),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(L,I,F)};function S(C,v){let w=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new Nn(s.x,s.y,{format:Hi,type:Bn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,w,f,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,w,m,y,null)}l(S,"VSMPass");function A(C,v,w,L){let I=null,F=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)I=F;else if(I=w.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let V=I.uuid,K=v.uuid,D=u[V];D===void 0&&(D={},u[V]=D);let $=D[K];$===void 0&&($=I.clone(),D[K]=$,v.addEventListener("dispose",P)),I=$}if(I.visible=v.visible,I.wireframe=v.wireframe,L===Oa?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:p[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let V=i.properties.get(I);V.light=w}return I}l(A,"getDepthMaterial");function E(C,v,w,L,I,F){if(C.visible===!1)return;if(C.layers.test(I)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===Oa)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);let D=e.update(C),$=C.material;if(Array.isArray($)){let ie=D.groups;for(let O=0,j=ie.length;O<j;O++){let H=ie[O],Q=$[H.materialIndex];if(Q&&Q.visible){let z=A(C,Q,L,F);C.onBeforeShadow(i,C,v,w,D,z,H),i.renderBufferDirect(w,null,D,z,C,H),C.onAfterShadow(i,C,v,w,D,z,H)}}}else if($.visible){let ie=A(C,$,L,F);C.onBeforeShadow(i,C,v,w,D,ie,null),i.renderBufferDirect(w,null,D,ie,C,null),C.onAfterShadow(i,C,v,w,D,ie,null)}}let K=C.children;for(let D=0,$=K.length;D<$;D++)E(K[D],v,w,L,I,F)}l(E,"renderObject");function P(C){C.target.removeEventListener("dispose",P);for(let w in u){let L=u[w],I=C.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}l(P,"onMaterialDispose")}l(nE,"WebGLShadowMap");function iE(i,e){function t(){let N=!1,he=new Tt,re=null,ye=new Tt(0,0,0,0);return{setMask:l(function(ge){re!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),re=ge)},"setMask"),setLocked:l(function(ge){N=ge},"setLocked"),setClear:l(function(ge,_e,Oe,Ke,pe){pe===!0&&(ge*=Ke,_e*=Ke,Oe*=Ke),he.set(ge,_e,Oe,Ke),ye.equals(he)===!1&&(i.clearColor(ge,_e,Oe,Ke),ye.copy(he))},"setClear"),reset:l(function(){N=!1,re=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let N=!1,he=!1,re=null,ye=null,ge=null;return{setReversed:l(function(_e){if(he!==_e){let Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),he=_e;let Ke=ge;ge=null,this.setClear(Ke)}},"setReversed"),getReversed:l(function(){return he},"getReversed"),setTest:l(function(_e){_e?ce(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){re!==_e&&!N&&(i.depthMask(_e),re=_e)},"setMask"),setFunc:l(function(_e){if(he&&(_e=ux[_e]),ye!==_e){switch(_e){case Wc:i.depthFunc(i.NEVER);break;case Xc:i.depthFunc(i.ALWAYS);break;case qc:i.depthFunc(i.LESS);break;case Ca:i.depthFunc(i.LEQUAL);break;case Yc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){N=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,he&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){N=!1,re=null,ye=null,ge=null,he=!1},"reset")}}l(n,"DepthBuffer");function s(){let N=!1,he=null,re=null,ye=null,ge=null,_e=null,Oe=null,Ke=null,pe=null;return{setTest:l(function(Be){N||(Be?ce(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},"setTest"),setMask:l(function(Be){he!==Be&&!N&&(i.stencilMask(Be),he=Be)},"setMask"),setFunc:l(function(Be,Je,Te){(re!==Be||ye!==Je||ge!==Te)&&(i.stencilFunc(Be,Je,Te),re=Be,ye=Je,ge=Te)},"setFunc"),setOp:l(function(Be,Je,Te){(_e!==Be||Oe!==Je||Ke!==Te)&&(i.stencilOp(Be,Je,Te),_e=Be,Oe=Je,Ke=Te)},"setOp"),setLocked:l(function(Be){N=Be},"setLocked"),setClear:l(function(Be){pe!==Be&&(i.clearStencil(Be),pe=Be)},"setClear"),reset:l(function(){N=!1,he=null,re=null,ye=null,ge=null,_e=null,Oe=null,Ke=null,pe=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},p={},f={},m=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,E=null,P=null,C=null,v=null,w=new Ue(0,0,0),L=0,I=!1,F=null,V=null,K=null,D=null,$=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,j=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=j>=2);let Q=null,z={},se=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),W=new Tt().fromArray(se),ae=new Tt().fromArray(ne);function te(N,he,re,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<re;Oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(te,"createTexture");let de={};de[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Ca),Ze(!1),et(Zd),ce(i.CULL_FACE),gt(Ar);function ce(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}l(ce,"enable");function Ce(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}l(Ce,"disable");function Ve(N,he){return f[N]!==he?(i.bindFramebuffer(N,he),f[N]=he,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}l(Ve,"bindFramebuffer");function Ee(N,he){let re=g,ye=!1;if(N){re=m.get(he),re===void 0&&(re=[],m.set(he,re));let ge=N.textures;if(re.length!==ge.length||re[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=ge.length;_e<Oe;_e++)re[_e]=i.COLOR_ATTACHMENT0+_e;re.length=ge.length,ye=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ye=!0);ye&&i.drawBuffers(re)}l(Ee,"drawBuffers");function Ye(N){return y!==N?(i.useProgram(N),y=N,!0):!1}l(Ye,"useProgram");let Qe={[Tr]:i.FUNC_ADD,[Dg]:i.FUNC_SUBTRACT,[Ng]:i.FUNC_REVERSE_SUBTRACT};Qe[Ug]=i.MIN,Qe[Fg]=i.MAX;let Xe={[Og]:i.ZERO,[Bg]:i.ONE,[kg]:i.SRC_COLOR,[Qd]:i.SRC_ALPHA,[Xg]:i.SRC_ALPHA_SATURATE,[Hg]:i.DST_COLOR,[Gg]:i.DST_ALPHA,[zg]:i.ONE_MINUS_SRC_COLOR,[ef]:i.ONE_MINUS_SRC_ALPHA,[Wg]:i.ONE_MINUS_DST_COLOR,[Vg]:i.ONE_MINUS_DST_ALPHA,[qg]:i.CONSTANT_COLOR,[Yg]:i.ONE_MINUS_CONSTANT_COLOR,[$g]:i.CONSTANT_ALPHA,[Zg]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(N,he,re,ye,ge,_e,Oe,Ke,pe,Be){if(N===Ar){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),N!==Lg){if(N!==_||Be!==I){if((S!==Tr||P!==Tr)&&(i.blendEquation(i.FUNC_ADD),S=Tr,P=Tr),Be)switch(N){case Ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jd:i.blendFunc(i.ONE,i.ONE);break;case Kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",N);break}else switch(N){case Ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kd:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jd:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",N);break}A=null,E=null,C=null,v=null,w.set(0,0,0),L=0,_=N,I=Be}return}ge=ge||he,_e=_e||re,Oe=Oe||ye,(he!==S||ge!==P)&&(i.blendEquationSeparate(Qe[he],Qe[ge]),S=he,P=ge),(re!==A||ye!==E||_e!==C||Oe!==v)&&(i.blendFuncSeparate(Xe[re],Xe[ye],Xe[_e],Xe[Oe]),A=re,E=ye,C=_e,v=Oe),(Ke.equals(w)===!1||pe!==L)&&(i.blendColor(Ke.r,Ke.g,Ke.b,pe),w.copy(Ke),L=pe),_=N,I=!1}l(gt,"setBlending");function xt(N,he){N.side===Gi?Ce(i.CULL_FACE):ce(i.CULL_FACE);let re=N.side===Sn;he&&(re=!re),Ze(re),N.blending===Ba&&N.transparent===!1?gt(Ar):gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ye=N.stencilWrite;o.setTest(ye),ye&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}l(xt,"setMaterial");function Ze(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}l(Ze,"setFlipSided");function et(N){N!==Pg?(ce(i.CULL_FACE),N!==V&&(N===Zd?i.cullFace(i.BACK):N===Ig?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),V=N}l(et,"setCullFace");function Dt(N){N!==K&&(O&&i.lineWidth(N),K=N)}l(Dt,"setLineWidth");function ft(N,he,re){N?(ce(i.POLYGON_OFFSET_FILL),(D!==he||$!==re)&&(D=he,$=re,a.getReversed()&&(he=-he,re=-re),i.polygonOffset(he,re))):Ce(i.POLYGON_OFFSET_FILL)}l(ft,"setPolygonOffset");function At(N){N?ce(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}l(At,"setScissorTest");function Lt(N){N===void 0&&(N=i.TEXTURE0+ie-1),Q!==N&&(i.activeTexture(N),Q=N)}l(Lt,"activeTexture");function at(N,he,re){re===void 0&&(Q===null?re=i.TEXTURE0+ie-1:re=Q);let ye=z[re];ye===void 0&&(ye={type:void 0,texture:void 0},z[re]=ye),(ye.type!==N||ye.texture!==he)&&(Q!==re&&(i.activeTexture(re),Q=re),i.bindTexture(N,he||de[N]),ye.type=N,ye.texture=he)}l(at,"bindTexture");function k(){let N=z[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}l(k,"unbindTexture");function Pt(){try{i.compressedTexImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(Pt,"compressedTexImage2D");function ot(){try{i.compressedTexImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(ot,"compressedTexImage3D");function tt(){try{i.texSubImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(tt,"texSubImage2D");function me(){try{i.texSubImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(me,"texSubImage3D");function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(ut,"compressedTexSubImage2D");function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(Fe,"compressedTexSubImage3D");function ke(){try{i.texStorage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(ke,"texStorage2D");function T(){try{i.texStorage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(T,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(b,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(q,"texImage3D");function fe(N){return p[N]!==void 0?p[N]:i.getParameter(N)}l(fe,"getParameter");function le(N,he){p[N]!==he&&(i.pixelStorei(N,he),p[N]=he)}l(le,"pixelStorei");function xe(N){W.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),W.copy(N))}l(xe,"scissor");function Me(N){ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}l(Me,"viewport");function oe(N,he){let re=u.get(he);re===void 0&&(re=new WeakMap,u.set(he,re));let ye=re.get(N);ye===void 0&&(ye=i.getUniformBlockIndex(he,N.name),i.uniformBlockBinding(he,ye,ye),re.set(N,ye))}l(oe,"updateUBOMapping");function ue(N,he,re){let ge=u.get(he).get(N);c[ge]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,re),c[ge]=re)}l(ue,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,z={},f={},c={},m=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,E=null,P=null,C=null,v=null,w=new Ue(0,0,0),L=0,I=!1,F=null,V=null,K=null,D=null,$=null,W.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ce,bindFramebuffer:Ve,drawBuffers:Ee,useProgram:Ye,setBlending:gt,setMaterial:xt,setFlipSided:Ze,setCullFace:et,setLineWidth:Dt,setPolygonOffset:ft,setScissorTest:At,activeTexture:Lt,bindTexture:at,unbindTexture:k,compressedTexImage2D:Pt,compressedTexImage3D:ot,texImage2D:b,texImage3D:q,pixelStorei:le,getParameter:fe,updateUBOMapping:oe,uniformBlockBinding:ue,texStorage2D:ke,texStorage3D:T,texSubImage2D:tt,texSubImage3D:me,compressedTexSubImage2D:ut,compressedTexSubImage3D:Fe,scissor:xe,viewport:Me,reset:ve}}l(iE,"WebGLState");function sE(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,h=new WeakMap,p=new Set,f,m=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return x?new OffscreenCanvas(T,b):ko("canvas")}l(_,"createCanvas");function S(T,b,q){let fe=1,le=ke(T);if((le.width>q||le.height>q)&&(fe=q/Math.max(le.width,le.height)),fe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let xe=Math.floor(fe*le.width),Me=Math.floor(fe*le.height);f===void 0&&(f=_(xe,Me));let oe=b?_(xe,Me):f;return oe.width=xe,oe.height=Me,oe.getContext("2d").drawImage(T,0,0,xe,Me),Ge("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Me+")."),oe}else return"data"in T&&Ge("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}l(S,"resizeImage");function A(T){return T.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function E(T){i.generateMipmap(T)}l(E,"generateMipmap");function P(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(P,"getTargetType");function C(T,b,q,fe,le,xe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=b;if(b===i.RED&&(q===i.FLOAT&&(oe=i.R32F),q===i.HALF_FLOAT&&(oe=i.R16F),q===i.UNSIGNED_BYTE&&(oe=i.R8),q===i.UNSIGNED_SHORT&&Me&&(oe=Me.R16_EXT),q===i.SHORT&&Me&&(oe=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.R8UI),q===i.UNSIGNED_SHORT&&(oe=i.R16UI),q===i.UNSIGNED_INT&&(oe=i.R32UI),q===i.BYTE&&(oe=i.R8I),q===i.SHORT&&(oe=i.R16I),q===i.INT&&(oe=i.R32I)),b===i.RG&&(q===i.FLOAT&&(oe=i.RG32F),q===i.HALF_FLOAT&&(oe=i.RG16F),q===i.UNSIGNED_BYTE&&(oe=i.RG8),q===i.UNSIGNED_SHORT&&Me&&(oe=Me.RG16_EXT),q===i.SHORT&&Me&&(oe=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RG8UI),q===i.UNSIGNED_SHORT&&(oe=i.RG16UI),q===i.UNSIGNED_INT&&(oe=i.RG32UI),q===i.BYTE&&(oe=i.RG8I),q===i.SHORT&&(oe=i.RG16I),q===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),q===i.UNSIGNED_INT&&(oe=i.RGB32UI),q===i.BYTE&&(oe=i.RGB8I),q===i.SHORT&&(oe=i.RGB16I),q===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),q===i.UNSIGNED_INT&&(oe=i.RGBA32UI),q===i.BYTE&&(oe=i.RGBA8I),q===i.SHORT&&(oe=i.RGBA16I),q===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_SHORT&&Me&&(oe=Me.RGB16_EXT),q===i.SHORT&&Me&&(oe=Me.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),b===i.RGBA){let ue=xe?Bo:st.getTransfer(le);q===i.FLOAT&&(oe=i.RGBA32F),q===i.HALF_FLOAT&&(oe=i.RGBA16F),q===i.UNSIGNED_BYTE&&(oe=ue===dt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Me&&(oe=Me.RGBA16_EXT),q===i.SHORT&&Me&&(oe=Me.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}l(C,"getInternalFormat");function v(T,b){let q;return T?b===null||b===fi||b===Rr?q=i.DEPTH24_STENCIL8:b===pi?q=i.DEPTH32F_STENCIL8:b===za&&(q=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fi||b===Rr?q=i.DEPTH_COMPONENT24:b===pi?q=i.DEPTH_COMPONENT32F:b===za&&(q=i.DEPTH_COMPONENT16),q}l(v,"getInternalDepthFormat");function w(T,b){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}l(w,"getMipLevels");function L(T){let b=new WeakRef(T);n.get(T).__ref=b,g.add(b),y.register(T,b,b)}l(L,"track");function I(T){let b=n.get(T).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}l(I,"untrack");function F(T){K(T.target)}l(F,"onTextureDispose");function V(T){D(T.target)}l(V,"onRenderTargetDispose");function K(T){T.removeEventListener("dispose",F),I(T),ie(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}l(K,"destroyTexture");function D(T){T.removeEventListener("dispose",V),I(T),j(T)}l(D,"destroyRenderTarget");function $(){for(let T of g){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):K(b))}g.clear(),p.clear()}l($,"dispose");function ie(T){let b=n.get(T);if(b.__webglInit===void 0)return;let q=T.source,fe=m.get(q);if(fe){let le=fe[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&O(T),Object.keys(fe).length===0&&m.delete(q)}n.remove(T)}l(ie,"deallocateTexture");function O(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let q=T.source,fe=m.get(q);delete fe[b.__cacheKey],a.memory.textures--}l(O,"deleteTexture");function j(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let q=T.depthTexture;if(q&&q.renderTarget===T&&K(q),T.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let xe=0;xe<b.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)i.deleteFramebuffer(b.__webglFramebuffer[le]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=T.textures;for(let le=0,xe=fe.length;le<xe;le++){let Me=n.get(fe[le]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[le])}n.remove(T)}l(j,"deallocateRenderTarget");let H=0;function Q(){H=0}l(Q,"resetTextureUnits");function z(){return H}l(z,"getTextureUnits");function se(T){H=T}l(se,"setTextureUnits");function ne(){let T=H;return T>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,T}l(ne,"allocateTextureUnit");function W(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}l(W,"getTextureCacheKey");function ae(T,b){let q=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&q.__version!==T.version){let fe=T.image;if(fe===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(q,T,b);return}}else T.isExternalTexture&&(q.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}l(ae,"setTexture2D");function te(T,b){let q=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){xt(q,T,b);return}else T.isExternalTexture&&(q.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}l(te,"setTexture2DArray");function de(T,b){let q=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){xt(q,T,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}l(de,"setTexture3D");function ce(T,b){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Ze(q,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}l(ce,"setTextureCube");let Ce={[Di]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Kc]:i.MIRRORED_REPEAT},Ve={[Ot]:i.NEAREST,[jg]:i.NEAREST_MIPMAP_NEAREST,[rl]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[zu]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Ee={[nx]:i.NEVER,[vf]:i.ALWAYS,[ix]:i.LESS,[xf]:i.LEQUAL,[sx]:i.EQUAL,[_f]:i.GEQUAL,[rx]:i.GREATER,[ax]:i.NOTEQUAL};function Ye(T,b){if(b.type===pi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===zu||b.magFilter===rl||b.magFilter===On||b.minFilter===Bt||b.minFilter===zu||b.minFilter===rl||b.minFilter===On)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ce[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ce[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ce[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ve[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ve[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot||b.minFilter!==rl&&b.minFilter!==On||b.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(Ye,"setTextureParameters");function Qe(T,b){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",F),L(b));let fe=b.source,le=m.get(fe);le===void 0&&(le={},m.set(fe,le));let xe=W(b);if(xe!==T.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),le[xe].usedTimes++;let Me=le[T.__cacheKey];Me!==void 0&&(le[T.__cacheKey].usedTimes--,Me.usedTimes===0&&O(b)),T.__cacheKey=xe,T.__webglTexture=le[xe].texture}return q}l(Qe,"initTexture");function Xe(T,b,q){return Math.floor(Math.floor(T/q)/b)}l(Xe,"getRow");function gt(T,b,q,fe){let xe=T.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,fe,b.data);else{xe.sort((N,he)=>N.start-he.start);let Me=0;for(let N=1;N<xe.length;N++){let he=xe[Me],re=xe[N],ye=he.start+he.count,ge=Xe(re.start,b.width,4),_e=Xe(he.start,b.width,4);re.start<=ye+1&&ge===_e&&Xe(re.start+re.count-1,b.width,4)===ge?he.count=Math.max(he.count,re.start+re.count-he.start):(++Me,xe[Me]=re)}xe.length=Me+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let N=0,he=xe.length;N<he;N++){let re=xe[N],ye=Math.floor(re.start/4),ge=Math.ceil(re.count/4),_e=ye%b.width,Oe=Math.floor(ye/b.width),Ke=ge,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Oe,Ke,pe,q,fe,b.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(gt,"updateTexture");function xt(T,b,q){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let le=Qe(T,b),xe=b.source;t.bindTexture(fe,T.__webglTexture,i.TEXTURE0+q);let Me=n.get(xe);if(xe.version!==Me.__version||le===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=st.getPrimaries(st.workingColorSpace),Be=b.colorSpace===mi?null:st.getPrimaries(b.colorSpace),Je=b.colorSpace===mi||pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ue=S(b.image,!1,s.maxTextureSize);ue=Fe(b,ue);let ve=r.convert(b.format,b.colorSpace),N=r.convert(b.type),he=C(b.internalFormat,ve,N,b.normalized,b.colorSpace,b.isVideoTexture);Ye(fe,b);let re,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||le===!0,Oe=xe.dataReady,Ke=w(b,ue);if(b.isDepthTexture)he=v(b.format===vs,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,he,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,he,ue.width,ue.height,0,ve,N,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Ke,he,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)re=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,re.width,re.height,ve,N,re.data):t.texImage2D(i.TEXTURE_2D,pe,he,re.width,re.height,0,ve,N,re.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,Ke,he,ue.width,ue.height),Oe&&gt(b,ue,ve,N)):t.texImage2D(i.TEXTURE_2D,0,he,ue.width,ue.height,0,ve,N,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,he,ye[0].width,ye[0].height,ue.depth);for(let pe=0,Be=ye.length;pe<Be;pe++)if(re=ye[pe],b.format!==kn)if(ve!==null)if(ge){if(Oe)if(b.layerUpdates.size>0){let Je=Ef(re.width,re.height,b.format,b.type);for(let Te of b.layerUpdates){let pt=re.data.subarray(Te*Je/re.data.BYTES_PER_ELEMENT,(Te+1)*Je/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Te,re.width,re.height,1,ve,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,re.width,re.height,ue.depth,ve,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,he,re.width,re.height,ue.depth,0,re.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,re.width,re.height,ue.depth,ve,N,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,he,re.width,re.height,ue.depth,0,ve,N,re.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Ke,he,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)re=ye[pe],b.format!==kn?ve!==null?ge?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,he,re.width,re.height,0,re.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,re.width,re.height,ve,N,re.data):t.texImage2D(i.TEXTURE_2D,pe,he,re.width,re.height,0,ve,N,re.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,he,ue.width,ue.height,ue.depth),Oe)if(b.layerUpdates.size>0){let pe=Ef(ue.width,ue.height,b.format,b.type);for(let Be of b.layerUpdates){let Je=ue.data.subarray(Be*pe/ue.data.BYTES_PER_ELEMENT,(Be+1)*pe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ue.width,ue.height,1,ve,N,Je)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,N,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ue.width,ue.height,ue.depth,0,ve,N,ue.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,Ke,he,ue.width,ue.height,ue.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,N,ue.data)):t.texImage3D(i.TEXTURE_3D,0,he,ue.width,ue.height,ue.depth,0,ve,N,ue.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,Ke,he,ue.width,ue.height);else{let pe=ue.width,Be=ue.height;for(let Je=0;Je<Ke;Je++)t.texImage2D(i.TEXTURE_2D,Je,he,pe,Be,0,ve,N,null),pe>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ue.parentNode!==pe){pe.appendChild(ue),p.add(b),pe.onpaint=Be=>{let Je=Be.changedElements;for(let Te of p)Je.includes(Te.image)&&(Te.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Je=i.RGBA,Te=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,Te,pt,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let pe=ke(ye[0]);t.texStorage2D(i.TEXTURE_2D,Ke,he,pe.width,pe.height)}for(let pe=0,Be=ye.length;pe<Be;pe++)re=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve,N,re):t.texImage2D(i.TEXTURE_2D,pe,he,ve,N,re);b.generateMipmaps=!1}else if(ge){if(_e){let pe=ke(ue);t.texStorage2D(i.TEXTURE_2D,Ke,he,pe.width,pe.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,N,ue)}else t.texImage2D(i.TEXTURE_2D,0,he,ve,N,ue);A(b)&&b.mipmapsAutoUpdate===!0&&E(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(xt,"uploadTexture");function Ze(T,b,q){if(b.image.length!==6)return;let fe=Qe(T,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+q);let xe=n.get(le);if(le.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Me=st.getPrimaries(st.workingColorSpace),oe=b.colorSpace===mi?null:st.getPrimaries(b.colorSpace),ue=b.colorSpace===mi||Me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Te=0;Te<6;Te++)!ve&&!N?he[Te]=S(b.image[Te],!0,s.maxCubemapSize):he[Te]=N?b.image[Te].image:b.image[Te],he[Te]=Fe(b,he[Te]);let re=he[0],ye=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),_e=C(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Oe=b.isVideoTexture!==!0,Ke=xe.__version===void 0||fe===!0,pe=le.dataReady,Be=w(b,re);Ye(i.TEXTURE_CUBE_MAP,b);let Je;if(b.isDepthTexture){if(_e=v(b.format===vs,b.type),Ke)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,re.width,re.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,re.width,re.height,0,ye,ge,null)}else if(ve){Oe&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,re.width,re.height);for(let Te=0;Te<6;Te++){Je=he[Te].mipmaps;for(let pt=0;pt<Je.length;pt++){let qt=Je[pt];b.format!==kn?ye!==null?Oe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,qt.width,qt.height,ye,qt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,_e,qt.width,qt.height,0,qt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,qt.width,qt.height,ye,ge,qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,_e,qt.width,qt.height,0,ye,ge,qt.data)}}}else{if(Je=b.mipmaps,Oe&&Ke){Je.length>0&&Be++;let Te=ke(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(N){Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,he[Te].width,he[Te].height,ye,ge,he[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,he[Te].width,he[Te].height,0,ye,ge,he[Te].data);for(let pt=0;pt<Je.length;pt++){let Ls=Je[pt].image[Te].image;Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,Ls.width,Ls.height,ye,ge,Ls.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,_e,Ls.width,Ls.height,0,ye,ge,Ls.data)}}else{Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,ge,he[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ye,ge,he[Te]);for(let pt=0;pt<Je.length;pt++){let qt=Je[pt];Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,ye,ge,qt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,_e,ye,ge,qt.image[Te])}}}A(b)&&b.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),xe.__version=le.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(Ze,"uploadCubeTexture");function et(T,b,q,fe,le,xe){let Me=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),ue=C(q.internalFormat,Me,oe,q.normalized,q.colorSpace),ve=n.get(b),N=n.get(q);if(N.__renderTarget=b,!ve.__hasExternalTextures){let he=Math.max(1,b.width>>xe),re=Math.max(1,b.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,ue,he,re,b.depth,0,Me,oe,null):t.texImage2D(le,xe,ue,he,re,0,Me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,N.__webglTexture,0,tt(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,N.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(et,"setupFrameBufferTexture");function Dt(T,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let fe=b.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,le),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),xe,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let fe=b.textures;for(let le=0;le<fe.length;le++){let xe=fe[le],Me=r.convert(xe.format,xe.colorSpace),oe=r.convert(xe.type),ue=C(xe.internalFormat,Me,oe,xe.normalized,xe.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),ue,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Dt,"setupRenderBufferStorage");function ft(T,b,q){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(b.depthTexture);le.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!le.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?ce(b.depthTexture,0):ae(b.depthTexture,0);let Me=le.__webglTexture,oe=tt(b),ue=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ve=b.depthTexture.format===vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ms)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Me,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Me,0);else if(b.depthTexture.format===vs)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Me,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(ft,"setupDepthTexture");function At(T){let b=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let fe=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let le=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",le)},"disposeEvent");fe.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=fe}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)ft(b.__webglFramebuffer[fe],T,fe);else T.texture.mipmaps.length>0?ft(b.__webglFramebuffer[0],T,0):ft(b.__webglFramebuffer,T,0);else if(q){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Dt(b.__webglDepthbuffer[fe],T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Dt(b.__webglDepthbuffer,T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(At,"setupDepthRenderbuffer");function Lt(T,b,q){let fe=n.get(T);b!==void 0&&et(fe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&At(T)}l(Lt,"rebindTextures");function at(T){let b=T.texture,q=n.get(T),fe=n.get(b);T.addEventListener("dispose",V),L(T);let le=T.textures,xe=T.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0){q.__webglFramebuffer[oe]=[];for(let ue=0;ue<b.mipmaps.length;ue++)q.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else q.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(b.mipmaps.length>0){q.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)q.__webglFramebuffer[oe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Me)for(let oe=0,ue=le.length;oe<ue;oe++){let ve=n.get(le[oe]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let oe=0;oe<le.length;oe++){let ue=le[oe];q.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[oe]);let ve=r.convert(ue.format,ue.colorSpace),N=r.convert(ue.type),he=C(ue.internalFormat,ve,N,ue.normalized,ue.colorSpace,T.isXRRenderTarget===!0),re=tt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,q.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(q.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)et(q.__webglFramebuffer[oe][ue],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else et(q.__webglFramebuffer[oe],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(b)?E(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let oe=0,ue=le.length;oe<ue;oe++){let ve=le[oe],N=n.get(ve),he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,N.__webglTexture),Ye(he,ve),et(q.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+oe,he,0),A(ve)&&E(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,fe.__webglTexture),Ye(oe,b),b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)et(q.__webglFramebuffer[ue],T,b,i.COLOR_ATTACHMENT0,oe,ue);else et(q.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,oe,0);A(b)?E(oe):b.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&At(T)}l(at,"setupRenderTarget");function k(T){let b=T.textures;for(let q=0,fe=b.length;q<fe;q++){let le=b[q];if(A(le)&&le.mipmapsAutoUpdate===!0){let xe=P(T),Me=n.get(le).__webglTexture;t.bindTexture(xe,Me),E(xe),t.unbindTexture()}}}l(k,"updateRenderTargetMipmap");let Pt=[];function ot(T){if(T.samples>0){if(me(T)===!1){let b=T.textures,q=T.width,fe=T.height,le=i.COLOR_BUFFER_BIT,xe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),oe=b.length>1;if(oe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let N=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,le,i.NEAREST),c===!0&&(Pt.length=0,Pt.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Pt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let N=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(ot,"updateMultisampleRenderTarget");function tt(T){return Math.min(s.maxSamples,T.samples)}l(tt,"getRenderTargetSamples");function me(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(me,"useMultisampledRTT");function ut(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}l(ut,"updateVideoTexture");function Fe(T,b){let q=T.colorSpace,fe=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==Oo&&q!==mi&&(st.getTransfer(q)===dt?(fe!==kn||le!==cn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",q)),b}l(Fe,"verifyColorSpace");function ke(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}l(ke,"getDimensions"),this.allocateTextureUnit=ne,this.resetTextureUnits=Q,this.getTextureUnits=z,this.setTextureUnits=se,this.setTexture2D=ae,this.setTexture2DArray=te,this.setTexture3D=de,this.setTextureCube=ce,this.rebindTextures=Lt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=et,this.useMultisampledRTT=me,this.dispose=$}l(sE,"WebGLTextures");function rE(i,e){function t(n,s=mi){let r,a=st.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Vu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ff)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uf)return i.BYTE;if(n===hf)return i.SHORT;if(n===za)return i.UNSIGNED_SHORT;if(n===Gu)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===pf)return i.ALPHA;if(n===mf)return i.RGB;if(n===kn)return i.RGBA;if(n===ms)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===gf)return i.RED;if(n===Wu)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===Xu)return i.RG_INTEGER;if(n===qu)return i.RGBA_INTEGER;if(n===al||n===ol||n===ll||n===cl)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yu||n===$u||n===Zu||n===Ju)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$u)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ju)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ku||n===ju||n===Qu||n===eh||n===th||n===ul||n===nh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ku||n===ju)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qu)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eh)return r.COMPRESSED_R11_EAC;if(n===th)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ul)return r.COMPRESSED_RG11_EAC;if(n===nh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===uh||n===hh||n===dh||n===fh||n===ph||n===mh||n===gh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ih)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ah)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ch)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ph)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xh||n===_h||n===vh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xh)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===bh||n===hl||n===Mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(rE,"WebGLUtils");var aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oE=`
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

}`,im=class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:aE,fragmentShader:oE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(im,"WebXRDepthSensing");var $p=im,sm=class sm extends Ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,g=null,y=typeof XRWebGLBinding<"u",x=new $p,_={},S=t.getContextAttributes(),A=null,E=null,P=[],C=[],v=new ze,w=null,L=null,I=new _n;I.viewport=new Tt;let F=new _n;F.viewport=new Tt;let V=[I,F],K=new yu,D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=P[W];return ae===void 0&&(ae=new La,P[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=P[W];return ae===void 0&&(ae=new La,P[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=P[W];return ae===void 0&&(ae=new La,P[W]=ae),ae.getHandSpace()};function ie(W){let ae=C.indexOf(W.inputSource);if(ae===-1)return;let te=P[ae];te!==void 0&&(te.update(W.inputSource,W.frame,u||a),te.dispatchEvent({type:W.type,data:W.inputSource}))}l(ie,"onSessionEvent");function O(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let W=0;W<P.length;W++){let ae=C[W];ae!==null&&(C[W]=null,P[W].disconnect(ae))}D=null,$=null,x.reset();for(let W in _)delete _[W];if(e.setRenderTarget(A),m=null,f=null,p=null,s=null,E=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),L!==null){let W=L.camera;W.fov=L.fov,W.zoom=L.zoom,W.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}l(O,"onSessionEnd"),this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,de=null,ce=null;S.depth&&(ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?vs:ms,de=S.stencil?Rr:fi);let Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Nn(f.textureWidth,f.textureHeight,{format:kn,type:cn,depthTexture:new _s(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Nn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(W){for(let ae=0;ae<W.removed.length;ae++){let te=W.removed[ae],de=C.indexOf(te);de>=0&&(C[de]=null,P[de].disconnect(te))}for(let ae=0;ae<W.added.length;ae++){let te=W.added[ae],de=C.indexOf(te);if(de===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=C.length){C.push(te),de=Ce;break}else if(C[Ce]===null){C[Ce]=te,de=Ce;break}if(de===-1)break}let ce=P[de];ce&&ce.connect(te)}}l(j,"onInputSourcesChange");function H(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}l(H,"updateCamera"),this.updateCamera=function(W){if(s===null)return;let ae=W.near,te=W.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(te=x.depthFar)),K.near=F.near=I.near=ae,K.far=F.far=I.far=te,(D!==K.near||$!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),D=K.near,$=K.far),K.layers.mask=W.layers.mask|6,I.layers.mask=K.layers.mask&-5,F.layers.mask=K.layers.mask&-3;let de=W.parent,ce=K.cameras;H(K,de);for(let Ce=0;Ce<ce.length;Ce++)H(ce[Ce],de);K.projectionMatrix.copy(I.projectionMatrix),K.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&W.isPerspectiveCamera&&(L={camera:W,fov:W.fov,zoom:W.zoom}),Q(W,K,de)};function Q(W,ae,te){te===null?W.matrix.copy(ae.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(ae.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Qc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}l(Q,"updateUserCamera"),this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(W){return _[W]};let z=null;function se(W,ae){if(h=ae.getViewerPose(u||a),g=ae,h!==null){let te=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let de=!1;te.length!==K.cameras.length&&(K.cameras.length=0,de=!0);for(let Ee=0;Ee<te.length;Ee++){let Ye=te[Ee],Qe=null;if(m!==null)Qe=m.getViewport(Ye);else{let gt=p.getViewSubImage(f,Ye);Qe=gt.viewport,Ee===0&&(e.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(E))}let Xe=V[Ee];Xe===void 0&&(Xe=new _n,Xe.layers.enable(Ee),Xe.viewport=new Tt,V[Ee]=Xe),Xe.matrix.fromArray(Ye.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ye.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ee===0&&(K.matrix.copy(Xe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),de===!0&&K.cameras.push(Xe)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let Ee=p.getDepthInformation(te[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(Ee,s.renderState)}if(ce&&ce.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let Ee=0;Ee<te.length;Ee++){let Ye=te[Ee].camera;if(Ye){let Qe=_[Ye];Qe||(Qe=new Zo,_[Ye]=Qe);let Xe=p.getCameraImage(Ye);Qe.sourceTexture=Xe}}}}for(let te=0;te<P.length;te++){let de=C[te],ce=P[te];de!==null&&ce!==void 0&&ce.update(de,ae,u||a)}z&&z(W,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}l(se,"onAnimationFrame");let ne=new kx;ne.setAnimationLoop(se),this.setAnimationLoop=function(W){z=W},this.dispose=function(){}}};l(sm,"WebXRManager");var Zp=sm,lE=new mt,Zx=new We;Zx.set(-1,0,0,0,1,0,0,0,1);function cE(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,Mf(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function s(x,_,S,A,E){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),p(x,_)):_.isMeshPhongMaterial?(r(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),f(x,_),_.isMeshPhysicalMaterial&&m(x,_,E)):_.isMeshMatcapMaterial?(r(x,_),g(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),y(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,S,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Sn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Sn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let S=e.get(_),A=S.envMap,E=S.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zx),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(r,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,S,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*S,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(p,"refreshUniformsToon");function f(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(f,"refreshUniformsStandard");function m(x,_,S){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Sn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let S=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(cE,"WebGLMaterials");function uE(i,e,t,n){let s={},r={};function a(S,A){let E=A.program;n.uniformBlockBinding(S,E,s[S.id])}l(a,"bind");function o(S,A){let E=s[S.id];E===void 0&&(g(S),E=c(S),s[S.id]=E,S.addEventListener("dispose",x));let P=A.program;n.updateUBOMapping(S,P);let C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}l(o,"update");function c(S){let A=i.createBuffer(),E=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,P),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(S){let A=s[S.id],E=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=E.length;C<v;C++){let w=E[C];if(Array.isArray(w))for(let L=0,I=w.length;L<I;L++)h(w[L],C,L,P);else h(w,C,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(S,A,E,P){if(f(S,A,E,P)===!0){let C=S.__offset,v=S.value;if(Array.isArray(v)){let w=0;for(let L=0;L<v.length;L++){let I=v[L],F=y(I,!0);p(I,S.__data,w),w+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}l(h,"updateUniform");function p(S,A,E){typeof S=="number"||typeof S=="boolean"?A[E]=S:S.isMatrix3?(A[E]=S.elements[0],A[E+1]=S.elements[1],A[E+2]=S.elements[2],A[E+3]=0,A[E+4]=S.elements[3],A[E+5]=S.elements[4],A[E+6]=S.elements[5],A[E+7]=0,A[E+8]=S.elements[6],A[E+9]=S.elements[7],A[E+10]=S.elements[8],A[E+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-E),E):S.toArray(A,E)}l(p,"writeUniformValue");function f(S,A,E,P){let C=S.value,v=A+"_"+E;if(Array.isArray(C)){P[v]===void 0&&(P[v]=[]);let w=P[v],L=!1;for(let I=0;I<C.length;I++)m(C[I],w,I)===!0&&(L=!0);return L}return m(C,P,v)}l(f,"hasUniformChanged");function m(S,A,E){if(A[E]===void 0)return typeof S=="number"||typeof S=="boolean"?A[E]=S:ArrayBuffer.isView(S)?A[E]=S.slice():A[E]=S.clone(),!0;{let P=A[E];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return A[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}l(m,"hasValueChanged");function g(S){let A=S.uniforms,E=0,P=16;for(let v=0,w=A.length;v<w;v++){let L=Array.isArray(A[v])?A[v]:[A[v]];for(let I=0,F=L.length;I<F;I++){let V=L[I],K=Array.isArray(V.value)?V.value:[V.value],D=Array.isArray(A[v])||Array.isArray(V.value),$=E;for(let O=0,j=K.length;O<j;O++){let H=K[O],Q=y(H,D),z=E%P,se=z%Q.boundary,ne=z+se;E+=se,ne!==0&&P-ne<Q.storage&&(E+=P-ne),O===0&&($=E),E+=Q.storage}let ie=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new ie((E-$)/Float32Array.BYTES_PER_ELEMENT),V.__offset=$}}let C=E%P;return C>0&&(E+=P-C),S.__size=E,S.__cache={},this}l(g,"prepareUniformsGroup");function y(S,A){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}l(y,"getUniformSize");function x(S){let A=S.target;A.removeEventListener("dispose",x),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(uE,"WebGLUniformsGroups");var hE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function dE(){return Wi===null&&(Wi=new Ua(hE,16,16,Hi,Bn),Wi.name="DFG_LUT",Wi.minFilter=Bt,Wi.magFilter=Bt,Wi.wrapS=Kn,Wi.wrapT=Kn,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}l(dE,"getDFGLUT");var rm=class rm{constructor(e={}){let{canvas:t=ox(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,x=new Set([qu,Xu,Wu]),_=new Set([cn,fi,za,Rr,Vu,Hu]),S=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},P=null,C=null,v=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,V=null,K=null,D=null,$=null;this._outputColorSpace=Ft;let ie=0,O=0,j=null,H=-1,Q=null,z=new Tt,se=new Tt,ne=null,W=new Ue(0),ae=0,te=t.width,de=t.height,ce=1,Ce=null,Ve=null,Ee=new Tt(0,0,te,de),Ye=new Tt(0,0,te,de),Qe=!1,Xe=new Xs,gt=new ru,xt=!1,Ze=!1,et=new mt,Dt=new X,ft=new Tt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function at(){return j===null?ce:1}l(at,"getTargetPixelRatio");let k=n;function Pt(M,B){return t.getContext(M,B)}l(Pt,"getContext");let ot,tt,me,ut,Fe,ke,T,b,q,fe,le,xe,Me,oe,ue,ve,N,he,re,ye,ge,_e,Oe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Te,!1),k===null){let B="webgl2";if(k=Pt(B,M),k===null)throw Pt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He("WebGLRenderer: "+M.message),M}function Ke(){ot=new Sw(k),ot.init(),ge=new rE(k,ot),tt=new dw(k,ot,e,ge),me=new iE(k,ot),tt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),K=k.createFramebuffer(),D=k.createFramebuffer(),$=k.createFramebuffer(),ut=new Aw(k),Fe=new H1,ke=new sE(k,ot,me,Fe,tt,ge,ut),T=new Mw(I),b=new Cb(k),_e=new uw(k,b),q=new ww(k,b,ut,_e),fe=new Cw(k,q,b,_e,ut),he=new Tw(k,tt,ke),ue=new fw(Fe),le=new V1(I,T,ot,tt,_e,ue),xe=new cE(I,Fe),Me=new X1,oe=new K1(ot),N=new cw(I,T,me,fe,g,c),ve=new nE(I,fe,tt),Oe=new uE(k,ut,tt,me),re=new hw(k,ot,ut),ye=new Ew(k,ot,ut),ut.programs=le.programs,I.capabilities=tt,I.extensions=ot,I.properties=Fe,I.renderLists=Me,I.shadowMap=ve,I.state=me,I.info=ut}l(Ke,"initGLContext"),y!==cn&&(L=new Pw(y,t.width,t.height,o,s,r));let pe=new Zp(I,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(te,de,!1))},this.getSize=function(M){return M.set(te,de)},this.setSize=function(M,B,ee=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,de=B,t.width=Math.floor(M*ce),t.height=Math.floor(B*ce),ee===!0&&(t.style.width=M+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(te*ce,de*ce).floor()},this.setDrawingBufferSize=function(M,B,ee){te=M,de=B,ce=ee,t.width=Math.floor(M*ee),t.height=Math.floor(B*ee),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(y===cn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,B,ee,Z){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,B,ee,Z),me.viewport(z.copy(Ee).multiplyScalar(at()).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,B,ee,Z){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,B,ee,Z),me.scissor(se.copy(Ye).multiplyScalar(at()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){me.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){Ve=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,ee=!0){let Z=0;if(M){let J=!1;if(j!==null){let Se=j.texture.format;J=x.has(Se)}if(J){let Se=j.texture.type,Ie=_.has(Se),be=N.getClearColor(),Re=N.getClearAlpha(),Ne=be.r,$e=be.g,nt=be.b;Ie?(S[0]=Ne,S[1]=$e,S[2]=nt,S[3]=Re,k.clearBufferuiv(k.COLOR,0,S)):(A[0]=Ne,A[1]=$e,A[2]=nt,A[3]=Re,k.clearBufferiv(k.COLOR,0,A))}else Z|=k.COLOR_BUFFER_BIT}B&&(Z|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),N.dispose(),Me.dispose(),oe.dispose(),ke.dispose(),Fe.dispose(),T.dispose(),fe.dispose(),q.dispose(),_e.dispose(),Oe.dispose(),le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",V0),pe.removeEventListener("sessionend",H0),gr.stop()};function Be(M){M.preventDefault(),zo("WebGLRenderer: Context Lost."),F=!0}l(Be,"onContextLost");function Je(){zo("WebGLRenderer: Context Restored."),F=!1;let M=ut.autoReset,B=ve.enabled,ee=ve.autoUpdate,Z=ve.needsUpdate,J=ve.type;Ke(),ut.autoReset=M,ve.enabled=B,ve.autoUpdate=ee,ve.needsUpdate=Z,ve.type=J}l(Je,"onContextRestore");function Te(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Te,"onContextCreationError");function pt(M){let B=M.target;B.removeEventListener("dispose",pt),qt(B)}l(pt,"onMaterialDispose");function qt(M){Ls(M),Fe.remove(M)}l(qt,"deallocateMaterial");function Ls(M){let B=Fe.get(M).programs;B!==void 0&&(B.forEach(function(ee){le.releaseProgram(ee)}),M.isShaderMaterial&&le.releaseShaderCache(M))}l(Ls,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,B,ee,Z,J,Se){B===null&&(B=At);let Ie=J.isMesh&&J.matrixWorld.determinantAffine()<0,be=Ty(M,B,ee,Z,J);me.setMaterial(Z,Ie);let Re=ee.index,Ne=1;if(Z.wireframe===!0){if(Re=q.getWireframeAttribute(ee),Re===void 0)return;Ne=2}let $e=ee.drawRange,nt=ee.attributes.position,Le=$e.start*Ne,it=($e.start+$e.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),it=Math.min(it,(Se.start+Se.count)*Ne)),Re!==null?(Le=Math.max(Le,0),it=Math.min(it,Re.count)):nt!=null&&(Le=Math.max(Le,0),it=Math.min(it,nt.count));let Nt=it-Le;if(Nt<0||Nt===1/0)return;_e.setup(J,Z,be,ee,Re);let bt,_t=re;if(Re!==null&&(bt=b.get(Re),_t=ye,_t.setIndex(bt)),J.isMesh)Z.wireframe===!0?(me.setLineWidth(Z.wireframeLinewidth*at()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(J.isLine){let rn=Z.linewidth;rn===void 0&&(rn=1),me.setLineWidth(rn*at()),J.isLineSegments?_t.setMode(k.LINES):J.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else J.isPoints?_t.setMode(k.POINTS):J.isSprite&&_t.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))_t.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let rn=J._multiDrawStarts,De=J._multiDrawCounts,gn=J._multiDrawCount,ht=Re?b.get(Re).bytesPerElement:1,xr=Fe.get(Z).currentProgram.getUniforms();for(let an=0;an<gn;an++)xr.setValue(k,"_gl_DrawID",an),_t.render(rn[an]/ht,De[an])}else if(J.isInstancedMesh)_t.renderInstances(Le,Nt,J.count);else if(ee.isInstancedBufferGeometry){let rn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,De=Math.min(ee.instanceCount,rn);_t.renderInstances(Le,Nt,De)}else _t.render(Le,Nt)};function G0(M,B,ee,Z){V!==null&&M.isNodeMaterial&&V.setObject(Z,M),xt===!0&&ue.setState(M,ee,!1),M.transparent===!0&&M.side===Gi&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,Ao(M,B,Z),M.side=js,M.needsUpdate=!0,Ao(M,B,Z),M.side=Gi):Ao(M,B,Z)}l(G0,"prepareMaterial"),this.compile=function(M,B,ee=null){ee===null&&(ee=M),V!==null&&V.renderStart(M,B,ee),C=oe.get(ee),C.init(B),w.push(C),ee.traverseVisible(function(J){J.isLight&&J.layers.test(B.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),M!==ee&&M.traverseVisible(function(J){J.isLight&&J.layers.test(B.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights(),V!==null&&V.updateLights(C.state.lightsArray),Ze=this.localClippingEnabled,xt=ue.init(this.clippingPlanes,Ze),xt===!0&&ue.setGlobalState(this.clippingPlanes,B),V!==null&&ve.render(C.state.shadowsArray,ee,B);let Z=new Set;return M.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Se=J.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];G0(be,ee,B,J),Z.add(be)}else G0(Se,ee,B,J),Z.add(Se)}),C=w.pop(),V!==null&&V.renderEnd(),Z},this.compileAsync=function(M,B,ee=null){let Z=this.compile(M,B,ee);return new Promise(J=>{function Se(){if(Z.forEach(function(Ie){let Re=Fe.get(Ie).currentProgram;(Re===void 0||Re.isReady())&&Z.delete(Ie)}),Z.size===0){J(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),ot.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dd=null;function Ey(M){dd&&dd(M)}l(Ey,"onAnimationFrame");function V0(){gr.stop()}l(V0,"onXRSessionStart");function H0(){gr.start()}l(H0,"onXRSessionEnd");let gr=new kx;gr.setAnimationLoop(Ey),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(M){dd=M,pe.setAnimationLoop(M),M===null?gr.stop():gr.start()},pe.addEventListener("sessionstart",V0),pe.addEventListener("sessionend",H0),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(M,B);let ee=pe.enabled===!0&&pe.isPresenting===!0,Z=L!==null&&(j===null||ee)&&L.begin(I,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(B),B=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,B,j),C=oe.get(M,w.length),C.init(B),C.state.textureUnits=ke.getTextureUnits(),w.push(C),et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?gt.setFromArrayCamera(B):Xe.setFromProjectionMatrix(et,jn,B.reversedDepth),Ze=this.localClippingEnabled,xt=ue.init(this.clippingPlanes,Ze),P=Me.get(M,v.length),P.init(),v.push(P),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ie=I.xr.getDepthSensingMesh();Ie!==null&&fd(Ie,B,-1/0,I.sortObjects)}fd(M,B,0,I.sortObjects),P.finish(),V!==null&&V.updateLights(C.state.lightsArray),I.sortObjects===!0&&P.sort(Ce,Ve),Lt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Lt&&N.addToRenderList(P,M),this.info.autoReset===!0&&this.info.reset(),xt===!0&&ue.beginShadows();let J=C.state.shadowsArray;if(ve.render(J,M,B),xt===!0&&ue.endShadows(),(Z&&L.hasRenderPass())===!1){let Ie=P.opaque,be=P.transmissive;if(C.setupLights(),B.isArrayCamera){let Re=B.cameras;if(be.length>0)for(let Ne=0,$e=Re.length;Ne<$e;Ne++){let nt=Re[Ne];X0(Ie,be,M,nt)}Lt&&N.render(M);for(let Ne=0,$e=Re.length;Ne<$e;Ne++){let nt=Re[Ne];W0(P,M,nt,nt.viewport)}}else be.length>0&&X0(Ie,be,M,B),Lt&&N.render(M),W0(P,M,B)}j!==null&&O===0&&(ke.updateMultisampleRenderTarget(j),ke.updateRenderTargetMipmap(j)),Z&&L.end(I),M.isScene===!0&&M.onAfterRender(I,M,B),_e.resetDefaultState(),H=-1,Q=null,w.pop(),w.length>0?(C=w[w.length-1],ke.setTextureUnits(C.state.textureUnits),xt===!0&&ue.setGlobalState(I.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?P=v[v.length-1]:P=null,V!==null&&V.renderEnd()};function fd(M,B,ee,Z){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){let Ie=B.isArrayCamera?gt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){Z&&ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let be=fe.update(M),Re=M.material;Re.visible&&P.push(M,be,Re,ee,ft.z,null,B)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=B.isArrayCamera?gt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Re=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ft.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ft.copy(be.boundingSphere.center)),ft.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(Re)){let Ne=be.groups;for(let $e=0,nt=Ne.length;$e<nt;$e++){let Le=Ne[$e],it=Re[Le.materialIndex];it&&it.visible&&P.push(M,be,it,ee,ft.z,Le,B)}}else Re.visible&&P.push(M,be,Re,ee,ft.z,null,B)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)fd(Se[Ie],B,ee,Z)}l(fd,"projectObject");function W0(M,B,ee,Z){let{opaque:J,transmissive:Se,transparent:Ie}=M;C.setupLightsView(ee),xt===!0&&ue.setGlobalState(I.clippingPlanes,ee),Z&&me.viewport(z.copy(Z)),J.length>0&&gc(J,B,ee),Se.length>0&&gc(Se,B,ee),Ie.length>0&&gc(Ie,B,ee),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}l(W0,"renderScene");function X0(M,B,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){let Le=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new Nn(1,1,{generateMipmaps:!0,type:Le?Bn:cn,minFilter:On,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Se=C.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||z;Se.setSize(Ie.z*I.transmissionResolutionScale,Ie.w*I.transmissionResolutionScale);let be=I.getRenderTarget(),Re=I.getActiveCubeFace(),Ne=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(W),ae=I.getClearAlpha(),ae<1&&I.setClearColor(16777215,.5),I.clear(),Lt&&N.render(ee);let $e=I.toneMapping;I.toneMapping=Vi;let nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),xt===!0&&ue.setGlobalState(I.clippingPlanes,Z),gc(M,ee,Z),ke.updateMultisampleRenderTarget(Se),ke.updateRenderTargetMipmap(Se),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,Nt=B.length;it<Nt;it++){let bt=B[it],{object:_t,geometry:rn,material:De,group:gn}=bt;if(De.side===Gi&&_t.layers.test(Z.layers)){let ht=De.side;De.side=Sn,De.needsUpdate=!0,q0(_t,ee,Z,rn,De,gn),De.side=ht,De.needsUpdate=!0,Le=!0}}Le===!0&&(ke.updateMultisampleRenderTarget(Se),ke.updateRenderTargetMipmap(Se))}I.setRenderTarget(be,Re,Ne),I.setClearColor(W,ae),nt!==void 0&&(Z.viewport=nt),I.toneMapping=$e}l(X0,"renderTransmissionPass");function gc(M,B,ee){let Z=B.isScene===!0?B.overrideMaterial:null;for(let J=0,Se=M.length;J<Se;J++){let Ie=M[J],{object:be,geometry:Re,group:Ne}=Ie,$e=Ie.material;$e.allowOverride===!0&&Z!==null&&($e=Z),be.layers.test(ee.layers)&&q0(be,B,ee,Re,$e,Ne)}}l(gc,"renderObjects");function q0(M,B,ee,Z,J,Se){V!==null&&J.isNodeMaterial&&V.setObject(M,J),M.onBeforeRender(I,B,ee,Z,J,Se),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),J.onBeforeRender(I,B,ee,Z,M,Se),J.transparent===!0&&J.side===Gi&&J.forceSinglePass===!1?(J.side=Sn,J.needsUpdate=!0,I.renderBufferDirect(ee,B,Z,J,M,Se),J.side=js,J.needsUpdate=!0,I.renderBufferDirect(ee,B,Z,J,M,Se),J.side=Gi):I.renderBufferDirect(ee,B,Z,J,M,Se),M.onAfterRender(I,B,ee,Z,J,Se)}l(q0,"renderObject");function Y0(M){let B=0;for(let ee of M)ee.texture!==null&&B++;return B}l(Y0,"countLightProbeGrids");function Ao(M,B,ee){B.isScene!==!0&&(B=At);let Z=Fe.get(M),J=C.state.lights,Se=C.state.shadowsArray,Ie=J.state.version,be=le.getParameters(M,J.state,Se,B,ee,C.state.lightProbeGridArray),Re=le.getProgramCacheKey(be),Ne=Z.programs;Z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let $e=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Z.envMap=T.get(M.envMap||Z.environment,$e),Z.envMapRotation=Z.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",pt),Ne=new Map,Z.programs=Ne,Z.programVariants=new Map);let nt=Ne.get(Re);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===Ie)return Z0(M,be),nt}else be.uniforms=le.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,ee,be),M.onBeforeCompile(be,I),nt=le.acquireProgram(be,Re),Ne.set(Re,nt),Z.uniforms=be.uniforms;let Le=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ue.uniform),Z0(M,be),Z.needsLights=Ry(M),Z.lightsStateVersion=Ie,Z.needsLights&&(Le.ambientLightColor.value=J.state.ambient,Le.lightProbe.value=J.state.probe,Le.sunLights.value=J.state.sun,Le.sunLightShadows.value=J.state.sunShadow,Le.directionalLights.value=J.state.directional,Le.directionalLightShadows.value=J.state.directionalShadow,Le.spotLights.value=J.state.spot,Le.spotLightShadows.value=J.state.spotShadow,Le.rectAreaLights.value=J.state.rectArea,Le.ltc_1.value=J.state.rectAreaLTC1,Le.ltc_2.value=J.state.rectAreaLTC2,Le.pointLights.value=J.state.point,Le.pointLightShadows.value=J.state.pointShadow,Le.hemisphereLights.value=J.state.hemi,Le.sunShadowMatrix.value=J.state.sunShadowMatrix,Le.sunShadowCascade.value=J.state.sunShadowCascade,Le.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Le.spotLightMatrix.value=J.state.spotLightMatrix,Le.spotLightMap.value=J.state.spotLightMap,Le.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.numLightProbeGrids=Y0(C.state.lightProbeGridArray),Z.currentProgram=nt,Z.uniformsList=null,nt}l(Ao,"getProgram");function Ay(M,B,ee,Z,J){let Se=Fe.get(M),Ie=Se.currentProgram.id+","+Z+","+J,be=Se.programVariants.get(Ie);return be===void 0?(be=Ao(M,B,ee),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=Z,Se.toneMapping=J),be}l(Ay,"getProgramVariant");function $0(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Ga.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}l($0,"getUniformList");function Z0(M,B){let ee=Fe.get(M);ee.outputColorSpace=B.outputColorSpace,ee.batching=B.batching,ee.batchingColor=B.batchingColor,ee.instancing=B.instancing,ee.instancingColor=B.instancingColor,ee.instancingMorph=B.instancingMorph,ee.skinning=B.skinning,ee.morphTargets=B.morphTargets,ee.morphNormals=B.morphNormals,ee.morphColors=B.morphColors,ee.morphTargetsCount=B.morphTargetsCount,ee.numClippingPlanes=B.numClippingPlanes,ee.numIntersection=B.numClipIntersection,ee.vertexAlphas=B.vertexAlphas,ee.vertexTangents=B.vertexTangents,ee.toneMapping=B.toneMapping}l(Z0,"updateCommonMaterialProperties");function Ty(M,B,ee,Z,J){B.isScene!==!0&&(B=At),ke.resetTextureUnits();let Se=B.fog,Ie=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,be=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:st.workingColorSpace,Re=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ne=T.get(Z.envMap||Ie,Re),$e=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Le=!!ee.morphAttributes.position,it=!!ee.morphAttributes.normal,Nt=!!ee.morphAttributes.color,bt=Vi;Z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(bt=I.toneMapping);let _t=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,rn=_t!==void 0?_t.length:0,De=Fe.get(Z),gn=C.state.lights;if(xt===!0&&(Ze===!0||M!==Q)){let Rt=M===Q&&Z.id===H;ue.setState(Z,M,Rt)}let ht=!1,xr=!1;Z.version===De.__version?De.needsLights&&De.lightsStateVersion!==gn.state.version||J.isBatchedMesh&&De.batching===!1||!J.isBatchedMesh&&De.batching===!0||J.isBatchedMesh&&De.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&De.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&De.instancing===!1||!J.isInstancedMesh&&De.instancing===!0||J.isSkinnedMesh&&De.skinning===!1||!J.isSkinnedMesh&&De.skinning===!0||J.isInstancedMesh&&De.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&De.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&De.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&De.instancingMorph===!1&&J.morphTexture!==null||De.envMap!==Ne||Z.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==$e||De.vertexTangents!==nt||De.morphTargets!==Le||De.morphNormals!==it||De.morphColors!==Nt||De.morphTargetsCount!==rn||De.numLightProbeGrids!==Y0(C.state.lightProbeGridArray)?ht=!0:(De.outputColorSpace!==be||De.toneMapping!==bt)&&(xr=!0):(ht=!0,De.__version=Z.version);let an=De.currentProgram;(ht===!0||xr===!0)&&(an=xr===!0?Ay(Z,B,J,be,bt):Ao(Z,B,J),V&&Z.isNodeMaterial&&V.onUpdateProgram(Z,an,De));let xc=!1,Ds=!1,_r=!1,ct=an.getUniforms(),en=De.uniforms;if(me.useProgram(an.program)&&(xc=!0,Ds=!0,_r=!0),Z.id!==H&&(H=Z.id,Ds=!0),xc||Q!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(k,"projectionMatrix",M.projectionMatrix),ct.setValue(k,"viewMatrix",M.matrixWorldInverse);let Yt=ct.map.cameraPosition;Yt!==void 0&&Yt.setValue(k,Dt.setFromMatrixPosition(M.matrixWorld)),tt.logarithmicDepthBuffer&&ct.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ct.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Ds=!0,_r=!0)}if(De.needsLights&&(gn.state.sunShadowMap.length>0&&ct.setValue(k,"sunShadowMap",gn.state.sunShadowMap,ke),gn.state.directionalShadowMap.length>0&&ct.setValue(k,"directionalShadowMap",gn.state.directionalShadowMap,ke),gn.state.spotShadowMap.length>0&&ct.setValue(k,"spotShadowMap",gn.state.spotShadowMap,ke),gn.state.pointShadowMap.length>0&&ct.setValue(k,"pointShadowMap",gn.state.pointShadowMap,ke)),J.isSkinnedMesh){ct.setOptional(k,J,"bindMatrix"),ct.setOptional(k,J,"bindMatrixInverse");let Rt=J.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(k,"boneTexture",Rt.boneTexture,ke))}J.isBatchedMesh&&(ct.setOptional(k,J,"batchingTexture"),ct.setValue(k,"batchingTexture",J._matricesTexture,ke),ct.setOptional(k,J,"batchingIdTexture"),ct.setValue(k,"batchingIdTexture",J._indirectTexture,ke),ct.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&ct.setValue(k,"batchingColorTexture",J._colorsTexture,ke));let ci=ee.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&he.update(J,ee,an),(Ds||De.receiveShadow!==J.receiveShadow)&&(De.receiveShadow=J.receiveShadow,ct.setValue(k,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=dE()),Ds){if(ct.setValue(k,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&Cy(en,_r),Se&&Z.fog===!0&&xe.refreshFogUniforms(en,Se),xe.refreshMaterialUniforms(en,Z,ce,de,C.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Rt=E,Yt=0;for(let rs of C.state.lightProbeGridArray)rs.texture!==null&&(Rt.textures[Yt]=rs.texture,Rt.min[Yt]=rs.boundingBox.min,Rt.max[Yt]=rs.boundingBox.max,Rt.resolution[Yt]=rs.resolution,Yt++);for(let rs in Rt)Rt[rs].length=Yt;en.probesSH.value=Rt.textures,en.probesMin.value=Rt.min,en.probesMax.value=Rt.max,en.probesResolution.value=Rt.resolution}Ga.upload(k,$0(De),en,ke)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ga.upload(k,$0(De),en,ke),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ct.setValue(k,"center",J.center),ct.setValue(k,"modelViewMatrix",J.modelViewMatrix),ct.setValue(k,"normalMatrix",J.normalMatrix),ct.setValue(k,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Rt=Z.uniformsGroups;for(let Yt=0,rs=Rt.length;Yt<rs;Yt++){let K0=Rt[Yt];Oe.update(K0,an),Oe.bind(K0,an)}}return an}l(Ty,"setProgram");function Cy(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}l(Cy,"markUniformsLightsNeedsUpdate");function Ry(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(Ry,"materialNeedsLights"),this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,B,ee){let Z=Fe.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Fe.get(M.texture).__webglTexture=B,Fe.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let ee=Fe.get(M);ee.__webglFramebuffer=B,ee.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,ee=0){j=M,ie=B,O=ee;let Z=null,J=!1,Se=!1;if(M){let be=Fe.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(k.FRAMEBUFFER,be.__webglFramebuffer),z.copy(M.viewport),se.copy(M.scissor),ne=M.scissorTest,me.viewport(z),me.scissor(se),me.setScissorTest(ne),H=-1;return}else if(be.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(be.__hasExternalTextures)ke.rebindTextures(M,Fe.get(M.texture).__webglTexture,Fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $e=M.depthTexture;if(be.__boundDepthTexture!==$e){if($e!==null&&Fe.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}let Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let Ne=Fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?Z=Ne[B][ee]:Z=Ne[B],J=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?Z=Fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?Z=Ne[ee]:Z=Ne,z.copy(M.viewport),se.copy(M.scissor),ne=M.scissorTest}else z.copy(Ee).multiplyScalar(ce).floor(),se.copy(Ye).multiplyScalar(ce).floor(),ne=Qe;if(ee!==0&&(Z=K),me.bindFramebuffer(k.FRAMEBUFFER,Z)&&me.drawBuffers(M,Z),me.viewport(z),me.scissor(se),me.setScissorTest(ne),J){let be=Fe.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,ee)}else if(Se){let be=B;for(let Re=0;Re<M.textures.length;Re++){let Ne=Fe.get(M.textures[Re]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,ee,be)}}else if(M!==null&&ee!==0){let be=Fe.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,be.__webglTexture,ee)}H=-1};function J0(M){let B=Fe.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=tt.textureFormatReadable(M.format),B.__typeReadable=tt.textureTypeReadable(M.type)),B}l(J0,"getReadableState"),this.readRenderTargetPixels=function(M,B,ee,Z,J,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re){me.bindFramebuffer(k.FRAMEBUFFER,Re);try{let Ne=M.textures[be],$e=Ne.format,nt=Ne.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);let Le=J0(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-Z&&ee>=0&&ee<=M.height-J&&k.readPixels(B,ee,Z,J,ge.convert($e),ge.convert(nt),Se)}finally{let Ne=j!==null?Fe.get(j).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,B,ee,Z,J,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re)if(B>=0&&B<=M.width-Z&&ee>=0&&ee<=M.height-J){me.bindFramebuffer(k.FRAMEBUFFER,Re);let Ne=M.textures[be],$e=Ne.format,nt=Ne.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);let Le=J0(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),k.readPixels(B,ee,Z,J,ge.convert($e),ge.convert(nt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Nt=j!==null?Fe.get(j).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Nt);let bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await cx(k,bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(it),k.deleteSync(bt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,ee=0){let Z=Math.pow(2,-ee),J=Math.floor(M.image.width*Z),Se=Math.floor(M.image.height*Z),Ie=B!==null?B.x:0,be=B!==null?B.y:0;ke.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Ie,be,J,Se),me.unbindTexture()},this.copyTextureToTexture=function(M,B,ee=null,Z=null,J=0,Se=0){let Ie,be,Re,Ne,$e,nt,Le,it,Nt,bt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(ee!==null)Ie=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Re=ee.isBox3?ee.max.z-ee.min.z:1,Ne=ee.min.x,$e=ee.min.y,nt=ee.isBox3?ee.min.z:0;else{let ct=Math.pow(2,-J);Ie=Math.floor(bt.width*ct),be=Math.floor(bt.height*ct),M.isDataArrayTexture?Re=bt.depth:M.isData3DTexture?Re=Math.floor(bt.depth*ct):Re=1,Ne=0,$e=0,nt=0}Z!==null?(Le=Z.x,it=Z.y,Nt=Z.z):(Le=0,it=0,Nt=0);let _t=ge.convert(B.format),rn=ge.convert(B.type),De;B.isData3DTexture?(ke.setTexture3D(B,0),De=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ke.setTexture2DArray(B,0),De=k.TEXTURE_2D_ARRAY):(ke.setTexture2D(B,0),De=k.TEXTURE_2D),me.activeTexture(k.TEXTURE0),me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),me.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let gn=me.getParameter(k.UNPACK_ROW_LENGTH),ht=me.getParameter(k.UNPACK_IMAGE_HEIGHT),xr=me.getParameter(k.UNPACK_SKIP_PIXELS),an=me.getParameter(k.UNPACK_SKIP_ROWS),xc=me.getParameter(k.UNPACK_SKIP_IMAGES);me.pixelStorei(k.UNPACK_ROW_LENGTH,bt.width),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt.height),me.pixelStorei(k.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(k.UNPACK_SKIP_ROWS,$e),me.pixelStorei(k.UNPACK_SKIP_IMAGES,nt);let Ds=M.isDataArrayTexture||M.isData3DTexture,_r=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let ct=Fe.get(M),en=Fe.get(B),ci=Fe.get(ct.__renderTarget),Rt=Fe.get(en.__renderTarget);me.bindFramebuffer(k.READ_FRAMEBUFFER,ci.__webglFramebuffer),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Yt=0;Yt<Re;Yt++)Ds&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(M).__webglTexture,J,nt+Yt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(B).__webglTexture,Se,Nt+Yt)),k.blitFramebuffer(Ne,$e,Ne+Ie,$e+be,Le,it,Le+Ie,it+be,k.DEPTH_BUFFER_BIT,k.NEAREST);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||M.isRenderTargetTexture||Fe.has(M)){let ct=Fe.get(M),en=Fe.get(B);me.bindFramebuffer(k.READ_FRAMEBUFFER,D),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,$);for(let ci=0;ci<Re;ci++)Ds?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ct.__webglTexture,J,nt+ci):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ct.__webglTexture,J),_r?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,Se,Nt+ci):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,Se),J!==0?k.blitFramebuffer(Ne,$e,Ne+Ie,$e+be,Le,it,Le+Ie,it+be,k.COLOR_BUFFER_BIT,k.NEAREST):_r?k.copyTexSubImage3D(De,Se,Le,it,Nt+ci,Ne,$e,Ie,be):k.copyTexSubImage2D(De,Se,Le,it,Ne,$e,Ie,be);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else _r?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,rn,bt.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,bt.data):k.texSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,rn,bt):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,Le,it,Ie,be,_t,rn,bt.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,Le,it,bt.width,bt.height,_t,bt.data):k.texSubImage2D(k.TEXTURE_2D,Se,Le,it,Ie,be,_t,rn,bt);me.pixelStorei(k.UNPACK_ROW_LENGTH,gn),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht),me.pixelStorei(k.UNPACK_SKIP_PIXELS,xr),me.pixelStorei(k.UNPACK_SKIP_ROWS,an),me.pixelStorei(k.UNPACK_SKIP_IMAGES,xc),Se===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(M){Fe.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){ie=0,O=0,j=null,me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};l(rm,"WebGLRenderer");var Ch=rm;var Tn=["grass","plains","sand","rock","snow","forest","mud","tundra"],qi={shore:-.03,deep:-.15,reach:3},Lh={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},Kx={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},Jx={Ocean:{relief:{base:qi.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:Kx,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Dr=l(i=>i==="Unknown"?Lh:(Object.prototype.hasOwnProperty.call(Jx,i)?Jx[i]:void 0)??Kx,"terrainEntry");var fE=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),jx=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),Qx=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Yi=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,p,f,m)=>{let g=Math.floor(fE(h,p,t)*16)*2;return(jx[g]??0)*f+(jx[g+1]??0)*m},"slope");return(h,p)=>{let f=h/s,m=p/a,g=Math.floor(f),y=Math.floor(m),x=f-g,_=m-y,S=Qx(x),A=Qx(_),E=o(g),P=o(g+1),C=c(y),v=c(y+1),w=u(E,C,x,_)+(u(P,C,x-1,_)-u(E,C,x,_))*S,L=u(E,v,x,_-1)+(u(P,v,x-1,_-1)-u(E,v,x,_-1))*S;return Math.max(-1,Math.min(1,(w+(L-w)*A)*1.4))}},"periodicNoise"),zn=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var Qs=128,Uh=.5,Dh=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),pE={grass:{grain:l(({noise:i})=>zn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>zn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>zn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>zn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),s=i(64,9),r=i(32,10);return(a,o)=>.7*n(a+t(6)*s(a,o),o)+.3*r(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),s=i(64,9);return(r,a)=>n(r+t(6)*s(r,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>zn([Dh(i(24,11)),Dh(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>zn([Dh(i(24,11)),Dh(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>zn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>zn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>zn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},Nh=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),mE=l((i=Qs,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*Tn.length),s={u:i,v:i};return Tn.forEach((r,a)=>{let o=pE[r],c=l((A,E)=>Yi({cell:A*i/Qs,period:s,seed:7919*(a+1)+E}),"noise"),u=l((A,E)=>(P,C)=>Math.sin(2*Math.PI*(A*P+E*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/Qs,"texels")},p=o.grain(h),f=o.bumps(h),m=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let E=0;E<i;E++)g[A*i+E]=f(E+e,A+t);let y=l((A,E)=>g[(E+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let E=0;E<i;E++)x[A*i+E]=p(E+e,A+t),_+=x[A*i+E]??0;let S=_/(i*i);for(let A=0;A<i;A++)for(let E=0;E<i;E++){let P=m+(A*i+E)*4,C=(x[A*i+E]??0)-S,v=(y(E+1,A)-y(E-1,A))/2*(i/Qs),w=(y(E,A+1)-y(E,A-1))/2*(i/Qs);n[P]=Nh(o.shade*C+.5),n[P+1]=Nh((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[P+2]=Nh((1-Math.max(-1,Math.min(1,w*o.steep)))/2),n[P+3]=Nh(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),e_=mE;var gi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var xi=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),t_=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${xi(gi.rockTo)}, ${xi(gi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${xi(gi.snowAtEquator)} + (${xi(gi.snowAtPoles)} - ${xi(gi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${xi(gi.snowDeepens)}, height) * smoothstep(${xi(gi.snowSlips)}, ${xi(gi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${xi(gi.wetFrom)}, ${xi(gi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${xi(gi.wetUpTo)}, height));
}
`;var gE=l(i=>[i.u/Math.max(1,Math.round(i.u/Uh)),i.v===null?Uh:i.v/Math.max(1,Math.round(i.v/Uh))],"surfaceTile"),xE=Tn.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),_E=null,vE=l(()=>_E??=e_(),"made"),yE=l((i,e)=>{let t=new wr(vE(),Qs,Qs,Tn.length),n=new zi({roughness:.92,vertexColors:!0}),[s,r]=gE(i);return t.format=kn,t.type=cn,t.wrapS=Di,t.wrapT=Di,t.magFilter=Bt,t.minFilter=On,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=mi,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new ze(s,r)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Ue(Dr("Mountains").colour)},a.uniforms.snowColour={value:new Ue(Dr("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${t_}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${xE}
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
  surface = mix(surface, surface${Tn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${Tn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),n_=yE;function s_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new kt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let p=i[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,p=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let g=0;g<m.count;++g)p.push(m.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(let h in r){let p=i_(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][f]);let g=i_(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(s_,"mergeGeometries");function i_(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new vt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<t;g++){let y=h.getComponent(f,g);o.setComponent(f+p,g,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(i_,"mergeAttributes");var r_="#c79a72",bE="#5a4a3a";var hn="#7a5532",lm="#5f6266",a_="#8a8f96",_i="#5d6447",am="#e8e0cc",c_="#6e4b2f",Nr="#8a8580",o_="#5b3e27",Ha="#7d858c",ME=new X(0,1,0),Ae=new Fi(1,1,1),Zt=new Oi(.5,.5,1,10),Ur=new Bi(.5,1,10),Wa=new Ys(.5,10,8),hm=class hm{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(hm,"Parts");var Jt=hm,SE=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:Wa,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Ur,colour:lm,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ae,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Zt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Wa,colour:_i,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),wE=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Zt,colour:hn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Zt,colour:hn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Ur,colour:lm,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Zt,colour:hn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Ur,colour:a_,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ae,colour:a_,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ae,colour:hn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Zt,colour:hn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ae,colour:i==="rifle"?"#3a3a3a":hn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ae,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ae,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Zt,colour:hn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Zt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),EE={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},cm=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Jt,a=s===void 0?void 0:EE[s],o=a?.coat??(i==="modern"?_i:t[0]),c=a?.legs??(i==="ancient"?r_:i==="modern"?_i:bE);return n&&(r.add({shape:Ae,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Ae,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Ae,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Ae,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Ae,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Ae,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Wa,colour:r_,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:Wa,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:Wa,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):SE(i,t,r),s==="parachute"&&r.add({shape:Ae,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),wE(e,i,t,r),r},"person"),l_=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),om=l((i=c_)=>new Jt().add({shape:Ae,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ae,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ae,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ae,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),AE=l((i,e,t)=>new Jt().addAll(om(),[0,0,0]).add({shape:Ae,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(cm(i,e,t,{legs:!1}),[0,.04,0]),"rider"),TE=l(i=>new Jt().add({shape:Ae,colour:Nr,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ae,colour:Nr,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Zt,colour:Nr,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ae,colour:Nr,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:Nr,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:Nr,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:Nr,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ae,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),dn=l((i,e=.05)=>({shape:Zt,colour:hn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),CE=l((i,e,t)=>{if(e==="chariot")return new Jt().addAll(om(),[0,0,.09]).add({shape:Ae,colour:hn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ae,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(dn([-.042,.035,-.045],.065)).add(dn([.042,.035,-.045],.065)).addAll(cm(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Jt().addAll(om(t==="ancient"?"#8a7a64":c_),[0,0,.1]).add({shape:Ae,colour:hn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ae,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(dn([-.042,.03,-.03])).add(dn([.042,.03,-.03])).add(dn([-.042,.03,-.09])).add(dn([.042,.03,-.09]));return e==="wagon"?n.add({shape:Zt,colour:am,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:am,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ae,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ae,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),RE=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Jt().add({shape:Ae,colour:hn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ae,colour:hn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ae,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(dn([-.045,.03,.04],.045)).add(dn([.045,.03,.04],.045)).add(dn([-.045,.03,-.04],.045)).add(dn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?_i:lm;return new Jt().add({shape:Zt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ae,colour:i==="modern"?_i:hn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ae,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(dn([-.04,.035,0],.07)).add(dn([.04,.035,0],.07))},"siege"),PE=l((i,e,t)=>{if(i==="industrial")return new Jt().add({shape:Ae,colour:Ha,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ae,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(dn([-.045,.025,.06],.045)).add(dn([.045,.025,.06],.045)).add(dn([-.045,.025,-.06],.045)).add(dn([.045,.025,-.06],.045));let n=new Jt().add({shape:Ae,colour:_i,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ae,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ae,colour:_i,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Zt,colour:_i,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:_i,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),IE=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Jt;switch(i.hull){case"oars":case"sail":{r.add({shape:Ae,colour:o_,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:Ur,colour:o_,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:Zt,colour:hn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ae,colour:o===0?e[1]:am,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Ae,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Ae,colour:hn,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ae,colour:hn,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Zt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ae,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Ae,colour:Ha,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Ae,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Ae,colour:Ha,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ae,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Ae,colour:i.era==="industrial"?"#4a4a48":Ha,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:Ur,colour:i.era==="industrial"?"#4a4a48":Ha,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:Ha,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Zt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ae,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Ae,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Zt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Ae,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),LE=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Jt().add({shape:Zt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ur,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ae,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ae,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ae,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),DE=l(i=>new Jt().add({shape:Wa,colour:_i,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ae,colour:_i,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ae,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),NE=l((i,e)=>{let t=e?1.4:1;return new Jt().add({shape:Zt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Ur,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ae,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ae,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),u_=l((i,e)=>{switch(i.shape){case"foot":{let t=new Jt;return l_(i.squad).forEach(([n,s],r)=>t.addAll(cm(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Jt;return l_(i.squad).forEach(([n,s])=>t.addAll(AE(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return TE(e);case"cart":return CE(e,i.cart??"wagon",i.era);case"siege":return RE(i.era,e,i.large===!0);case"vehicle":return PE(i.era,e,i.large===!0);case"ship":return IE(i,e);case"aircraft":return LE(i,e);case"helicopter":return DE(e);default:return NE(e,i.large===!0)}},"figureParts"),UE=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new mt().compose(new X(...i),new yn().setFromAxisAngle(ME,n).multiply(new yn().setFromEuler(new Un(...t))),new X(...e)),"partMatrix"),um=l(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new Ue(r),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(UE(n)),a.setAttribute("color",new vt(u,3)),a}),t=s_(e)??new kt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),h_=l((i,e)=>um(u_(i,e).parts),"figureGeometry"),FE=new Oi(.19,.2,1,28),OE=new $s(.22,.014,4,32),d_=l((i,e,{fortified:t,scale:n,stand:s})=>{let r=i.shape==="ship",a=r?0:s,o=u_(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return r||o.push({shape:FE,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&o.push({shape:OE,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),um(o)},"unitBodyGeometry"),BE=new Bi(.75,.5,4),kE=new $s(.36,.025,6,24),f_=l((i,e,t)=>um([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:Ae,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:BE,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:kE,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var nn=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),gl=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Gn=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),xl=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),dm=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),p_={Warrior:nn("ancient","club"),Spearman:nn("ancient","spear"),Swordman:nn("ancient","sword"),Archer:nn("ancient","bow"),Horseman:gl("ancient","spear"),Chariot:dm("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Gn("ancient","oars"),Settlers:dm("ancient","wagon"),Diplomat:nn("ancient","case",1),Caravan:dm("ancient","goods"),Explorer:nn("ancient","pack",1),Pikeman:nn("medieval","pike"),Knight:gl("medieval","lance"),Crusader:gl("medieval","sword"),Fanatic:nn("medieval","sword"),Sail:Gn("medieval","sail"),Musketman:nn("renaissance","musket"),Dragoon:gl("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Gn("renaissance","sail",!0,1),Galleon:Gn("renaissance","sail",!0),Rifleman:nn("industrial","rifle"),AlpineTrooper:{...nn("industrial","rifle"),dress:"snow"},Partisan:{...nn("industrial","rifle"),dress:"irregular"},Cavalry:gl("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:nn("industrial","none",2),Ironclad:Gn("industrial","steam",!1,1),Transport:Gn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:nn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:nn("modern","rifle"),Paratrooper:{...nn("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Gn("modern","steam",!1,1),Cruiser:Gn("modern","steam",!0,2),MissileCruiser:Gn("modern","steam",!0,1,!0),Battleship:Gn("modern","steam",!0,3),Submarine:Gn("modern","submarine"),Carrier:Gn("modern","carrier",!0),Fighter:xl("modern"),StealthFighter:xl("modern",!1,!0),Bomber:xl("modern",!0),StealthBomber:xl("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},m_=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(p_,i)?p_[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Gn("industrial","steam"):e.includes("Air")?xl("modern"):nn("ancient","spear")),"unitLook");var zE=.03,y_="#fff4b0",GE=.04,Fh=.004,fm=.018,g_=.01,x_=.022,__=.03,b_=.03,Bh=.002,VE="#4caf50",HE="#e0b030",WE="#d04030",XE=256,Fr,vi,Or,Br,yi,kr,ys,qa,vm=class vm{constructor(){Y(this,Fr,new Map);Y(this,vi,new Map);Y(this,Or,new Map);Y(this,Br,new Map);Y(this,yi,new Map);Y(this,kr,new Map);Y(this,ys,null);Y(this,qa,0);this.figureMaterial=new zi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new $s(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=d(this,Fr).get(n);return s===void 0&&(s=new zi({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),d(this,Fr).set(n,s)),s}body(e,t,n,s=1){let r=JSON.stringify([e,t,n,s]),a=d(this,Br).get(r);return a===void 0&&(a=d_(e,t,{fortified:n,scale:s,stand:zE}),d(this,Br).set(r,a)),a}city(e){let t=ZE(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=d(this,yi).get(n);return s===void 0&&(s=f_(t,e.colours[0],e.walled),d(this,yi).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=d(this,Or).get(n);return s===void 0&&(s=h_(e,t),d(this,Or).set(n,s)),s}plain(e){let t=d(this,kr).get(e);return t===void 0&&(t=new Ws({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),d(this,kr).set(e,t)),t}pointer(){if(d(this,ys)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=y_,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new qs(e);n.colorSpace=Ft,G(this,ys,new Ws({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return d(this,ys)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=d(this,vi).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new qs(a);h.colorSpace=Ft,r=new Ws({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),d(this,vi).set(s,r)}return r}get sweepDue(){return d(this,vi).size+d(this,yi).size>Math.max(XE,d(this,qa)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof wt&&t.add(s.geometry),s instanceof Er&&t.add(s.material)});d(this,vi).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),d(this,vi).delete(s))}),d(this,yi).forEach((n,s)=>{t.has(n)||(n.dispose(),d(this,yi).delete(s))}),G(this,qa,d(this,vi).size+d(this,yi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),d(this,Or).forEach(e=>e.dispose()),d(this,Br).forEach(e=>e.dispose()),d(this,yi).forEach(e=>e.dispose()),d(this,Br).clear(),d(this,yi).clear(),this.figureMaterial.dispose(),d(this,kr).forEach(e=>e.dispose()),d(this,ys)?.map?.dispose(),d(this,ys)?.dispose(),d(this,kr).clear(),G(this,ys,null),d(this,Fr).forEach(e=>e.dispose()),d(this,vi).forEach(e=>{e.map?.dispose(),e.dispose()}),d(this,Fr).clear(),d(this,vi).clear(),d(this,Or).clear(),G(this,qa,0)}};Fr=new WeakMap,vi=new WeakMap,Or=new WeakMap,Br=new WeakMap,yi=new WeakMap,kr=new WeakMap,ys=new WeakMap,qa=new WeakMap,l(vm,"MarkerKit");var zh=vm,M_=l(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Xa=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),Oh=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),qE=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),YE=3,$E=4,_l=l((i,e,t,n,s=YE)=>{let r=new Er(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),S_=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return _l(i,e*s,e,t)},"label"),kh=[0,.36,0],ZE=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+Oh(i.name,1)*6,r=n===0?0:.12+Oh(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+Oh(i.name,n+20)*.05,height:(n===0?.13:.05)+Oh(i.name,n+40)*.05}})},"buildingsOf"),JE=l((i,e)=>{let t=new vn;return t.add(new wt(i.city(e),i.figureMaterial)),t.add(Xa(S_(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],M_(e.colours[0])),b_,0),...kh)),t},"drawCity"),KE=l((i,e,t=null)=>{let n=new vn,{ring:s}=i.geometries,r=m_(e.type,e.kinds),a=i.body(r,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+GE,0],u=e.health!==null,h=(t?.over??0)+(u?Fh+Bh:0),p=h+g_+Bh,f=qE(e),m=p+(f===""?0:x_+Bh),g=new wt(a,i.figureMaterial);if(g.name=mm,g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(Xa(_l(i.plain("#202020"),fm,Fh,t?.over??0),...c)),y>0){let x=_l(i.plain(y>.5?VE:y>.25?HE:WE),fm*y,Fh*.6,(t?.over??0)+Fh*.2);x.center.x=1/(2*y),n.add(Xa(x,...c))}}if(n.add(Xa(_l(i.plain(e.colours[0]),fm,g_,h),...c)),f!==""&&n.add(Xa(S_(i.label(f,e.colours[0],M_(e.colours[0])),x_,p),...c)),e.active){let y=new wt(s,i.material(y_,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,Xa(_l(i.pointer(),__,__,m,$E),...c))}return n},"drawUnit"),jE="unit",mm="figures",gm=.26,w_=l((i,e)=>{let t=new vn;if(e.city!==null&&t.add(JE(i,e.city)),e.unit!==null){let n=e.city===null?0:gm,s=KE(i,e.unit,e.city===null?null:{at:[kh[0],kh[1],kh[2]-n],over:b_+Bh});s.name=jE,s.position.z=n,t.add(s)}return t},"drawMarker"),pm=new WeakMap,v_=new WeakMap,QE=.5,xm=l((i,e,t)=>{i.forEach(n=>n.traverse(s=>{if(!(s instanceof wt||s instanceof Er))return;let r=pm.get(s)??s.material,a=t.get(r);a===void 0&&(a=r.clone(),a.transparent=!0,t.set(r,a)),pm.has(s)||(pm.set(s,r),v_.set(s,s.castShadow)),s.material=a,s.castShadow=(v_.get(s)??!1)&&e>=QE})),t.forEach((n,s)=>{n.opacity=s.opacity*e})},"fade"),_m=l(i=>{i.forEach(e=>e.dispose()),i.clear()},"unfade");var er=l(i=>i*Math.PI/180,"degrees"),eA=er(25),tA=er(80),nA=5,iA=90,sA=1.12,vl=er(40),bm=er(45),rA={above:{yaw:0,pitch:er(80)},classic:{yaw:0,pitch:er(55)},isometric:{yaw:er(45),pitch:er(30)}};var E_=l(i=>({focus:i,...rA.classic,distance:24}),"defaultOrbit"),ym=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),A_=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),zr=l(i=>({...i,yaw:A_(i.yaw),pitch:ym(i.pitch,eA,tA),distance:ym(i.distance,nA,iA)}),"clampOrbit"),$a=l((i,e)=>zr({...i,distance:i.distance/sA**e}),"zoomed"),Gh=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),Vh=l((i,e)=>{let{forward:t}=Gh(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),Mm=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=Gh(i),u=Vh(i,e),h=[t-u[0],n-u[1],s-u[2]],p=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),f=p(a),m=Math.tan(vl/2);return f<=1e-6?null:[p(o)/(f*m*r),p(c)/(f*m)]},"toScreen"),Sm=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=Gh(i),c=Math.tan(vl/2);return{from:Vh(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),Ya=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=Sm(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),T_=l((i,e,t,n,s)=>{let r=Ya(i,e,t,s),a=Ya(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(vl/2),{right:h}=Gh(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(p[0]??0))*u,i.focus[1]+(o*h[2]+c*(p[1]??0))*u]}},"panned"),C_=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:A_(i.yaw),focus:[n(s,e.u),e.v===null?ym(r,0,t):n(r,e.v)]}},"settled"),R_=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Hh=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var aA=new Ue("#3f8a8c"),oA=new Ue("#173a52"),lA=new Ue("#e8eeee"),P_=`
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
`,cA=`
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
`,tr,Qn,Vn,Em=class Em{constructor(e,t){Y(this,tr);Y(this,Qn);Y(this,Vn);G(this,tr,e),G(this,Qn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<d(this,Qn).length;s+=2)d(this,Qn)[s]=Ui.toHalfFloat(0),d(this,Qn)[s+1]=Ui.toHalfFloat(1);G(this,Vn,new Ua(d(this,Qn),e.columns,e.rows,Hi,Bn)),d(this,Vn).wrapS=Di,d(this,Vn).wrapT=e.wrapsV?Di:Kn,d(this,Vn).magFilter=Bt,d(this,Vn).minFilter=Bt,d(this,Vn).needsUpdate=!0;let n=new Mn({uniforms:Lr.merge([we.fog,{ground:{value:null},cell:{value:new ze},size:{value:new ze},shallow:{value:aA.clone()},deep:{value:oA.clone()},foam:{value:lA.clone()},sky:{value:t.clone()},sunDirection:{value:new X(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:P_,fragmentShader:cA,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=d(this,Vn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new wt(new ki(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=d(this,tr),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),p=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&p>=0&&p<n){let f=(p*t+h)*2;d(this,Qn)[f]=Ui.toHalfFloat(e.positions[u*3+1]??0),d(this,Qn)[f+1]=Ui.toHalfFloat(e.unseen[u]??0)}}d(this,Vn).needsUpdate=!0}height(e,t){return Ui.fromHalfFloat(d(this,Qn)[(t*d(this,tr).columns+e)*2]??0)}unseen(e,t){return Ui.fromHalfFloat(d(this,Qn)[(t*d(this,tr).columns+e)*2+1]??0)>.5}texture(){return d(this,Vn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,tr).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),d(this,Vn).dispose()}};tr=new WeakMap,Qn=new WeakMap,Vn=new WeakMap,l(Em,"Water");var wm=Em,I_=wm,uA=`
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
`,hA=.18,yl,Am=class Am{constructor(e,t){Y(this,yl);G(this,yl,t.wrapsV);let n=new Mn({uniforms:Lr.merge([we.fog,{ground:{value:null},cell:{value:new ze},size:{value:new ze},extent:{value:new ze},wrapsV:{value:!1}}]),vertexShader:P_,fragmentShader:uA,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new wt(new ki(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,yl)&&e}follow(e,t,n){this.mesh.position.set(e,hA,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};yl=new WeakMap,l(Am,"Clouds");var Wh=Am;var dA=.6,fA=.05,Gr=64,L_=.125,pA=`
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
`,mA=`
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
`,D_=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),gA=l((i,e)=>{let[t]=D_(i.length),n=Gr*(1-2*L_);return i.flatMap((s,r)=>{let a=e(s);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:s,x:r%t*Gr+(Gr-c)/2,y:Math.floor(r/t)*Gr+(Gr-u)/2,width:c,height:u}]})},"atlasPlaces"),xA=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:s}=i;return[e??(typeof n=="number"?n:0),t??(typeof s=="number"?s:0)]},"imageSize"),nr,Hn,bl,Vr,Ml,Xh,Za,N_,U_,Cm=class Cm{constructor(e){Y(this,Za);Y(this,nr,null);Y(this,Hn,null);Y(this,bl,"");Y(this,Vr);Y(this,Ml,new WeakMap);Y(this,Xh,1);G(this,Vr,e),this.material=new Mn({uniforms:Lr.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:fA},bias:{value:dA},cells:{value:[1,1]},pad:{value:L_}}]),vertexShader:pA,fragmentShader:mA,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(d(this,nr)?.dispose(),G(this,nr,null),e===null||e.count===0)return null;R(this,Za,U_).call(this,e);let t=new nl,n=new ki(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new xs(e.anchors,3)),t.setAttribute("slot",new xs(e.slots,2)),t.setAttribute("size",new xs(e.sizes,1)),t.setAttribute("cell",new xs(e.cells,1)),t.instanceCount=e.count,G(this,nr,t),t}make(){let e=new wt(d(this,nr)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){d(this,nr)?.dispose(),d(this,Hn)?.dispose(),this.material.dispose()}};nr=new WeakMap,Hn=new WeakMap,bl=new WeakMap,Vr=new WeakMap,Ml=new WeakMap,Xh=new WeakMap,Za=new WeakSet,N_=l(function(e){if(e===null)return 0;let t=d(this,Ml).get(e);return t===void 0&&(t=as(this,Xh)._++,d(this,Ml).set(e,t)),t},"#imageId"),U_=l(function(e){let t=e.names.map(o=>`${o}:${R(this,Za,N_).call(this,d(this,Vr).call(this,o))}`).join(",");if(t===d(this,bl)&&d(this,Hn)!==null)return;let[n,s]=D_(e.names.length),r=document.createElement("canvas"),a=r.getContext("2d");r.width=n*Gr,r.height=s*Gr,a!==null&&(a.imageSmoothingEnabled=!1,gA(e.names,o=>{let c=d(this,Vr).call(this,o);return c===null?null:xA(c)}).forEach(({_:o,x:c,y:u,width:h,height:p})=>{let f=d(this,Vr).call(this,o);f!==null&&a.drawImage(f,c,u,h,p)})),d(this,Hn)?.dispose(),G(this,Hn,new qs(r)),d(this,Hn).colorSpace=Ft,d(this,Hn).premultiplyAlpha=!0,d(this,Hn).magFilter=Ot,d(this,Hn).minFilter=On,d(this,Hn).generateMipmaps=!0,G(this,bl,t),this.material.uniforms.atlas.value=d(this,Hn),this.material.uniforms.cells.value=[n,s]},"#drawAtlas"),l(Cm,"YieldIcons");var Tm=Cm,F_=Tm;var Rm=10466244,_A=14082796,vA=5984576,yA=16773336,O_=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),bA=l(i=>[new An(new X(0,0,1),0),new An(new X(0,0,-1),i)],"polesAt"),MA=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),B_=2048,k_=Math.hypot(30,40,20),z_=l((i,{period:e,ground:t,yieldIcon:n})=>{let s=new Ch({antialias:!0,canvas:i}),r=new Ho,a=new _n(vl*180/Math.PI,1,.1,400),o=new vn,{material:c,detail:u}=n_(e,t.rows*t.spacingV),h=new tl(yA,2.6),p=new Map,f=new Map,m=new zi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=bA(g),x=new Map,_=new Map,S=new vn,A=new zh,E=new vn,P=new F_(n??(()=>null)),C=new I_(t,new Ue(Rm)),v=new Wh(C.texture(),t),w=new Vo(Rm,30,110),L=[[0,0]],I="0,0",F=[[0,0]],V="0,0",K=!1,D=null;s.outputColorSpace=Ft,s.localClippingEnabled=!0,s.toneMapping=sl,s.shadowMap.enabled=!0,s.shadowMap.type=Ou,r.background=new Ue(Rm),r.fog=w,r.add(new jo(_A,vA,.9)),r.add(o),r.add(S),r.add(E),r.add(C.mesh),r.add(v.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(B_,B_),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,r.add(h),r.add(h.target);let $=l((z,se,ne=L)=>ne.map(([W,ae])=>{let te=z.make();return te.position.set(z.at[0]+W,z.at[1],z.at[2]+ae),se.add(te),te}),"copiesOf"),ie=l(z=>$(z,o,MA(L,z.span,g,e.v,K)),"overlayCopiesOf"),O=l(z=>z.drawn.forEach(se=>{let ne=se.getObjectByName(mm);ne!==void 0&&(ne.rotation.y=z.facing)}),"face"),j=l(z=>{let se=w_(A,z);return se.traverse(ne=>{ne.castShadow=ne instanceof wt}),se},"markerOf"),H=l(()=>{A.sweepDue&&A.sweep([...x.values(),..._.values()].flatMap(({original:z})=>z===void 0?[]:[z]))},"sweep");return{render:l(()=>s.render(r,a),"render"),resize:l((z,se,ne)=>{s.setPixelRatio(ne),s.setSize(z,se,!1),a.aspect=se>0?z/se:1,a.updateProjectionMatrix()},"resize"),setChunk:l((z,se,ne)=>{let W=`${z},${se}`,ae=new kt;ae.setAttribute("position",new vt(ne.positions,3)),ae.setAttribute("normal",new vt(ne.normals,3)),ae.setAttribute("color",new vt(ne.colours,3)),ae.setAttribute("surfacesA",new vt(ne.surfacesA,4,!0)),ae.setAttribute("surfacesB",new vt(ne.surfacesB,4,!0)),ae.setAttribute("shore",new vt(ne.shore,1,!0)),ae.setIndex(new vt(ne.indices,1)),ae.computeBoundingSphere();let te=p.get(W);te!==void 0&&(te.drawn.forEach(ce=>o.remove(ce)),te.geometry.dispose());let de={geometry:ae,at:[ne.u,0,ne.v],make:l(()=>{let ce=new wt(ae,c);return ce.castShadow=!0,ce.receiveShadow=!0,ce},"make"),drawn:[]};de.drawn=$(de,o),p.set(W,de),C.setChunk(ne)},"setChunk"),setOverlay:l((z,se,ne)=>{let W=`${z},${se}`,ae=f.get(W);if(ae!==void 0&&(ae.drawn.forEach(Ce=>o.remove(Ce)),ae.geometry.dispose(),f.delete(W)),ne===null)return;let te=new kt;te.setAttribute("position",new vt(ne.positions,3)),te.setAttribute("normal",new vt(ne.normals,3)),te.setAttribute("color",new vt(ne.colours,3)),te.computeBoundingSphere(),te.computeBoundingBox();let de=te.boundingBox,ce={geometry:te,span:[ne.v+(de?.min.z??0),ne.v+(de?.max.z??0)],at:[ne.u,0,ne.v],make:l(()=>{let Ce=new wt(te,m);return Ce.castShadow=!0,Ce.receiveShadow=!0,Ce},"make"),drawn:[]};ce.drawn=ie(ce),f.set(W,ce)},"setOverlay"),setMarker:l((z,se,ne)=>{if(x.get(z)?.drawn.forEach(te=>S.remove(te)),x.delete(z),ne===null)return;let W=j(ne),ae={at:se,make:l(()=>W.clone(),"make"),drawn:[],original:W};ae.drawn=$(ae,S,F),x.set(z,ae),H()},"setMarker"),setWalker:l((z,se)=>{let ne=_.get(z);if(ne?.drawn.forEach(te=>S.remove(te)),ne!==void 0&&_m(ne.faded),_.delete(z),se===null)return;let W=j(se),ae={at:ne?.at??[0,0,0],facing:ne?.facing??se.unit?.facing??0,opacity:1,faded:new Map,make:l(()=>W.clone(),"make"),drawn:[],original:W};ae.drawn=$(ae,S,F),O(ae),_.set(z,ae),H()},"setWalker"),placeWalker:l((z,se,ne)=>{let W=_.get(z);W!==void 0&&(W.at=se,W.facing=ne,W.drawn.forEach((ae,te)=>{let[de,ce]=F[te]??[0,0];ae.position.set(se[0]+de,se[1],se[2]+ce)}),O(W))},"placeWalker"),fadeWalker:l((z,se)=>{let ne=_.get(z),W=Math.min(1,Math.max(0,se));ne===void 0||W===ne.opacity||(ne.opacity=W,xm(ne.drawn,W,ne.faded))},"fadeWalker"),setYields:l(z=>{D?.drawn.forEach(se=>E.remove(se)),D=null,P.set(z)!==null&&(D={at:[0,0,0],make:l(()=>P.make(),"make"),drawn:[]},D.drawn=$(D,E))},"setYields"),view:l((z,se,ne=e)=>{let[W,ae]=z.focus,[te,de,ce]=Vh(z,se),{near:Ce,far:Ve}=Hh(z.distance);a.position.set(te,de,ce),a.lookAt(W,se,ae),a.far=Ve*1.2,a.near=Math.max(.1,z.distance*.02),a.updateProjectionMatrix(),w.near=Ce,w.far=Ve;let Ee=z.distance*2.2,Ye=h.shadow.camera;h.position.set(W+30,se+40,ae+20),h.target.position.set(W,se,ae),Ye.left=-Ee,Ye.right=Ee,Ye.top=Ee,Ye.bottom=-Ee,Ye.near=Math.max(.5,k_-Ee*1.6),Ye.far=k_+Ee*1.6,Ye.updateProjectionMatrix(),C.follow(W,ae,Ve*2.2,h.position.clone().sub(h.target.position)),v.follow(W,ae,Ve*2.2),C.pastThePoles(ne.v!==null),v.pastThePoles(ne.v!==null),m.clippingPlanes=ne.v===null?y:null,K=ne.v===null;let Qe=O_(z.focus,Ve,ne),Xe=`${Qe.join(";")}${K?" stopped":""}`,gt=O_(z.focus,Math.min(Ve,z.distance*2.2),ne),xt=gt.join(";");Xe!==I&&(L=Qe,I=Xe,p.forEach(Ze=>{Ze.drawn.forEach(et=>o.remove(et)),Ze.drawn=$(Ze,o)}),f.forEach(Ze=>{Ze.drawn.forEach(et=>o.remove(et)),Ze.drawn=ie(Ze)}),D!==null&&(D.drawn.forEach(Ze=>E.remove(Ze)),D.drawn=$(D,E))),P.lean(z.pitch),xt!==V&&(F=gt,V=xt,[...x.values(),..._.values()].forEach(Ze=>{Ze.drawn.forEach(et=>S.remove(et)),Ze.drawn=$(Ze,S,F)}),_.forEach(O),_.forEach(Ze=>{Ze.opacity<1&&xm(Ze.drawn,Ze.opacity,Ze.faded)}))},"view"),stats:l(()=>({drawCalls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries}),"stats"),dispose:l(()=>{p.forEach(({geometry:z})=>z.dispose()),p.clear(),f.forEach(({geometry:z})=>z.dispose()),f.clear(),m.dispose(),x.clear(),_.forEach(({faded:z})=>_m(z)),_.clear(),A.dispose(),P.dispose(),C.dispose(),v.dispose(),c.dispose(),u.dispose(),s.dispose()},"dispose")}},"createStage");var bs=1/Math.sqrt(3),G_=1.5*bs,SA=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),wA=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,bs+r*G_],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-bs],[a+.5,o-bs/2],[a+.5,o+bs/2],[a,o+bs],[a-.5,o+bs/2],[a-.5,o-bs/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-bs,[c,u]=SA(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*G_:null}),"period")}},"hexOddRLayout"),V_=wA;var EA=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),H_=EA;var $i=Math.SQRT2/2,AA=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*$i,(r+1)*$i],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-$i],[a+$i,o],[a,o+$i],[a-$i,o]]},"outline"),tileAt:l((s,r)=>{let a=s/$i,o=r/$i,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*$i,v:t?i*$i:null}),"period")}},"staggeredIsoLayout"),W_=AA;var X_={square:H_,"staggered-iso":W_,"hex-odd-r":V_},TA=l(i=>{if(!Object.prototype.hasOwnProperty.call(X_,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return X_[i.topologyId](i)},"groundLayoutFor"),q_=TA;var Sl=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var qh=.65,Pm=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Ms=.22,Yh=.12,Im={low:.2,high:.5},Y_=l((i,e,t,n,s,r,a,o,c)=>{let u=r-t,h=a-n,p=u*u+h*h,f=p===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/p)),m=Sl(Math.hypot(i-t-u*f,e-n-h*f)),g=1-f;return m===0?-1/0:m*m*(s+(o-s)*(1-g*g*g)+c)},"halfRidge"),wl=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),CA=l((i,e,t)=>({u:(wl(i,e,t,1)*2-1)*Ms,v:(wl(i,e,t,2)*2-1)*Ms,scale:.75+wl(i,e,t,3)*.5}),"peakOf"),RA=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:s,height:r,wrapsY:a}=n,o=i.period(),c=zn([Yi({cell:.7,period:o,seed:t}),Yi({cell:.35,period:o,seed:t+1}),Yi({cell:.17,period:o,seed:t+2})]),u=zn([Yi({cell:.45,period:o,seed:t+3}),Yi({cell:.22,period:o,seed:t+4})]),h=l((O,j)=>1-2*Math.abs(u(O,j)),"ridged"),p=Yi({cell:.8,period:o,seed:t+5}),f=Yi({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],S=[],A=l((O,j)=>{let H=(O%s+s)%s;return!a&&(j<0||j>=r)?null:(j%r+r)%r*s+H},"index"),E=l(O=>{let j=new Array(s*r).fill(1/0),H=[];O.forEach((Q,z)=>{Q&&(j[z]=0,H.push([z%s,Math.floor(z/s)]))});for(let[Q,z]of H){let se=j[z*s+Q]??1/0;se>=qi.reach||n.neighbours(Q,z).forEach(([ne,W])=>{let ae=W*s+ne;(j[ae]??1/0)>se+1&&(j[ae]=se+1,H.push([ne,W]))})}return j},"distancesFromLand"),P=l((O,j)=>{let H=n.terrainAt(O,j);return`${H}${H!=="Unknown"&&n.waterAt(O,j)?" water":""}`},"readAs"),C=l(O=>{if(O!==void 0&&y.length>0&&O.every(([te,de])=>{let ce=A(te,de);return ce===null||y[ce]===P(te,de)}))return[];let j=[],H=[],Q=[];for(let te=0;te<r;te++)for(let de=0;de<s;de++){let ce=n.terrainAt(de,te);j.push(ce),H.push(ce!=="Unknown"&&n.waterAt(de,te)),Q.push(Dr(ce))}let z=E(j.map((te,de)=>te!=="Unknown"&&!H[de])),se=j.map((te,de)=>`${te}${H[de]?" water":""}`),ne=[];se.forEach((te,de)=>{y[de]!==te&&ne.push([de%s,Math.floor(de/s)])}),y=se,g=Q.map((te,de)=>{let ce=te===Lh,Ce=de%s,Ve=Math.floor(de/s),Ee=CA(Ce,Ve,t);if(!H[de])return{relief:te.relief,colour:Pm(te.colour),surface:Tn.indexOf(te.surface),water:!1,unknown:ce,peak:Ee};let Ye=Math.min(z[de]??1/0,qi.reach),Qe=qi.shore+(qi.deep-qi.shore)*Math.max(0,Ye-1)/Math.max(1,qi.reach-1);return{relief:{...te.relief,base:Qe},colour:Pm(te.colour),surface:Tn.indexOf("sand"),water:!0,unknown:ce,peak:Ee}});let W=S,ae=new Map(ne.map(([te,de])=>[`${te},${de}`,[te,de]]));return S=g.map(({relief:te,unknown:de},ce)=>!de&&!H[ce]&&te.shape==="peaked"),ne.some(([te,de])=>{let ce=de*s+te;return S[ce]===!0||W[ce]===!0})&&([x,_]=K()),ne.forEach(([te,de])=>{let ce=de*s+te;S[ce]!==!0&&W[ce]!==!0||n.neighbours(te,de).forEach(([Ce,Ve])=>{let Ee=A(Ce,Ve);Ee!==null&&S[Ee]===!0&&ae.set(`${Ce},${Ve}`,[Ce,Ve])})}),[...ae.values()]},"refresh"),v=l(O=>{let[j,H]=i.centre(0,O);return Math.max(...i.outline(0,O).map(([Q,z])=>Math.hypot(Q-j,z-H)))},"cornerOf"),w=l((O,j)=>{let[H,Q]=i.centre(0,O),z=[];for(let se=-8;se<=8;se++)for(let ne=-6;ne<=6;ne++){let[W,ae]=i.centre(ne,O+se);Math.hypot(W-H,ae-Q)<j+1e-9&&z.push([ne,se])}return z},"offsetsWithin"),L=l((O,j,H,Q)=>{if(s>=6&&(!a||r>=6)){let te=l((Ce,Ve)=>{let Ee=(Ce%Ve+Ve)%Ve;return Ee*2<Ve?Ee:Ee-Ve},"nearest"),de=te(H-O,s),ce=a?te(Q-j,r):Q-j;return de===0&&ce===0?[]:[[de,ce]]}let z=l((te,de)=>{let ce=(te%de+de)%de;return ce===0?[0]:[ce,ce-de]},"copies"),[se,ne]=i.centre(O,j),W=z(H-O,s).flatMap(te=>(a?z(Q-j,r):[Q-j]).flatMap(de=>{if(te===0&&de===0)return[];let[ce,Ce]=i.centre(O+te,j+de);return[[te,de,Math.hypot(ce-se,Ce-ne)]]})),ae=Math.min(...W.map(([,,te])=>te));return W.filter(([,,te])=>te<=ae+1e-9).map(([te,de])=>[te,de])},"stepsTo"),I=Math.max(...[0,1].flatMap(O=>{let[j,H]=i.centre(0,O);return n.neighbours(0,O).flatMap(([Q,z])=>L(0,O,Q,z).map(([se,ne])=>{let[W,ae]=i.centre(se,O+ne);return Math.hypot(W-j,ae-H)}))}),1),F=[0,1].map(O=>{let[j,H]=i.centre(0,O);return w(O,I+Ms*Math.SQRT2+Yh+1.2+Math.max(v(0),v(1))).flatMap(([Q,z])=>{let[se,ne]=i.centre(Q,O+z);return[Q,z,se-j,ne-H]})}),V=l((O,j,H,Q,z,se)=>{let ne=z-H,W=se-Q,ae=ne*ne+W*W,te=ae===0?0:Math.max(0,Math.min(1,((O-H)*ne+(j-Q)*W)/ae));return Math.hypot(O-H-ne*te,j-Q-W*te)},"toSegment"),K=l(()=>{let O=g.map(()=>[]),j=g.map(()=>[]),H=Math.max(v(0),v(1));return e?(g.forEach((Q,z)=>{if(S[z]!==!0)return;let se=z%s,ne=Math.floor(z/s),[W,ae]=i.centre(se,ne),te=new Map;n.neighbours(se,ne).forEach(([de,ce])=>{let Ce=A(de,ce);Ce!==null&&S[Ce]===!0&&L(se,ne,de,ce).forEach(([Ve,Ee])=>te.set(`${Ve},${Ee}`,[Ve,Ee,Ce]))}),te.forEach(([de,ce,Ce])=>{let Ve=g[Ce];if(Ve===void 0||ce<0||ce===0&&de<0)return;let[Ee,Ye]=i.centre(se+de,ne+ce),{peak:Qe,relief:Xe}=Q,{peak:gt,relief:xt}=Ve,Ze=Qe.u,et=Qe.v,Dt=Ee-W+gt.u,ft=Ye-ae+gt.v,At=Xe.base*qh*Qe.scale,Lt=xt.base*qh*gt.scale,at=Math.hypot(Dt-Ze,ft-et)||1,k=16+(ce+2)*5+(de+2),Pt=(wl(se,ne,t,k)*2-1)*Yh,ot=Im.low+(Im.high-Im.low)*wl(se,ne,t,k+32),tt=(Ze+Dt)/2-(ft-et)/at*Pt,me=(et+ft)/2+(Dt-Ze)/at*Pt,ut=Math.max(Math.hypot(Ze-tt,et-me),Math.hypot(Dt-tt,ft-me))+1.2,Fe={au:Ze,av:et,ah:At,mu:tt,mv:me,mh:ot*Math.min(At,Lt),bu:Dt,bv:ft,bh:Lt,roughness:(Xe.roughness+xt.roughness)/2,cu:tt,cv:me,reach:ut*ut},ke=(Math.sqrt(Fe.reach)+H)**2,T=F[ne&1]??[];for(let b=0;b<T.length;b+=4){let q=T[b+2],fe=T[b+3];if((q-tt)**2+(fe-me)**2>=ke||Math.min(V(q,fe,Ze,et,tt,me),V(q,fe,tt,me,Dt,ft))>=1.2+H)continue;let le=A(se+T[b],ne+T[b+1]);le!==null&&(O[le]?.push(Fe),j[le]?.push(q,fe))}})}),[O,j]):[O,j]},"ranges"),D=l(O=>{let[j,H]=i.centre(0,O),Q=Math.max(...i.outline(0,O).map(([se,ne])=>Math.hypot(se-j,ne-H))),z=[];for(let se=-6;se<=6;se++)for(let ne=-4;ne<=4;ne++){let[W,ae]=i.centre(ne,O+se);Math.hypot(W-j,ae-H)<1.2+Q+Ms*Math.SQRT2+1e-9&&z.push([ne,se])}return z},"offsetsFor"),$=[D(0),D(1)],ie=l((O,j)=>{let[H,Q]=i.tileAt(O,j),z=A(H,Q),se=z===null?null:g[z]??null;if(se===null||se.unknown)return{height:0,colour:Pm(Lh.colour),surfaces:Tn.map(()=>0),shore:0,unseen:!0};let ne=null,W=null,ae=l(At=>At==="rolling"?ne??=c(O,j):W??=h(O,j),"noiseHere"),te=0,de=0,ce=0,Ce=0,Ve=Tn.map(()=>0),Ee=0,Ye=0,Qe=0,Xe=0,gt=0,xt=O+Ms*p(O,j),Ze=j+Ms*f(O,j);($[Q&1]??[]).forEach(([At,Lt])=>{let at=H+At,k=Q+Lt,Pt=A(at,k);if(Pt===null)return;let ot=g[Pt];if(ot===void 0)return;let[tt,me]=i.centre(at,k),{relief:ut,colour:Fe,peak:ke,surface:T}=ot,b=Sl(Math.hypot(O-tt,j-me)),q=ut.shape==="peaked"?Sl(Math.hypot(O-tt-ke.u,j-me-ke.v)):0,fe=Sl(Math.hypot(xt-tt,Ze-me))**3;if(b>0){let le=m[ut.shape],xe=le===null?0:ut.roughness*ae(le);ut.shape==="peaked"?de+=b*(ut.base*(1-qh)+xe*.5):de+=b*(ut.base+xe),te+=b}if(q>0){let le=ut.roughness*ae("ridged");ce+=q*q*(ut.base*qh*ke.scale+le*.5)}Ce+=fe,ot.unknown||(Ve[T]=(Ve[T]??0)+fe,Ee+=fe,Ye+=ot.water?fe:0),Qe+=fe*Fe[0],Xe+=fe*Fe[1],gt+=fe*Fe[2]});let et=z===null?[]:x[z]??[],Dt=z===null?[]:_[z]??[],ft=ce;if(et.length>0){let[At,Lt]=i.centre(H,Q);et.forEach((at,k)=>{let Pt=O-At+(Dt[k*2]??0),ot=j-Lt+(Dt[k*2+1]??0);if((Pt-at.cu)**2+(ot-at.cv)**2>=at.reach)return;let tt=at.roughness*ae("ridged")*.5;ft=Math.max(ft,Y_(Pt,ot,at.au,at.av,at.ah,at.mu,at.mv,at.mh,tt),Y_(Pt,ot,at.bu,at.bv,at.bh,at.mu,at.mv,at.mh,tt))})}return{height:(te>0?de/te:0)+ft,colour:Ce>0?[Qe/Ce,Xe/Ce,gt/Ce]:se.colour,surfaces:Ee>0?Ve.map(At=>At/Ee):Tn.map((At,Lt)=>Lt===se.surface?1:0),shore:Ee>0?Ye/Ee:se.water?1:0,unseen:!1}},"sample");return C(),{sample:ie,height:l((O,j)=>ie(O,j).height,"height"),refresh:C}},"createRelief"),$_=RA;var Z_=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),J_=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((L,I)=>[L*a,I*o],"at"),p=s+3,f=new Float64Array(p*(r+3)),m=(s+1)*(r+1),g=new Float32Array(m*3),y=new Uint8Array(m*4),x=new Uint8Array(m*4),_=new Uint8Array(m),S=new Float32Array(m);for(let L=-1;L<=r+1;L++)for(let I=-1;I<=s+1;I++){let F=e.sample(...h(c+I,u+L)),{height:V,colour:K}=F;if(f[(L+1)*p+(I+1)]=V,I>=0&&I<=s&&L>=0&&L<=r){let D=L*(s+1)+I;g.set(K,D*3),F.surfaces.forEach(($,ie)=>{(ie<4?y:x)[D*4+ie%4]=Math.round($*255)}),_[D]=Math.round(F.shore*255),S[D]=F.unseen?1:0}}let A=l((L,I)=>f[(I+1)*p+(L+1)]??0,"height"),E=new Float32Array(m*3),P=new Float32Array(m*3),[C,v]=h(c,u);for(let L=0;L<=r;L++)for(let I=0;I<=s;I++){let F=L*(s+1)+I,[V,K]=h(c+I,u+L),D=(A(I+1,L)-A(I-1,L))/(2*a),$=(A(I,L+1)-A(I,L-1))/(2*o),ie=Math.hypot(D,1,$);E[F*3]=V-C,E[F*3+1]=A(I,L),E[F*3+2]=K-v,P[F*3]=-D/ie,P[F*3+1]=1/ie,P[F*3+2]=-$/ie}let w=new Uint32Array(s*r*6);for(let L=0;L<r;L++)for(let I=0;I<s;I++){let F=L*(s+1)+I,V=F+1,K=F+s+1,D=K+1,$=(L*s+I)*6;w.set([F,K,V,V,K,D],$)}return{u:C,v,positions:E,normals:P,colours:g,surfacesA:y,surfacesB:x,shore:_,unseen:S,indices:w}},"buildChunk"),K_=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,p]=e.centre(c,u);for(let f=Math.floor((h-n)/s);f<=Math.floor((h+n)/s);f++)for(let m=Math.floor((p-n)/r);m<=Math.floor((p+n)/r);m++){if(!a&&(m<0||m>=i.chunksV))continue;let g=(f%i.chunksU+i.chunksU)%i.chunksU,y=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Wn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),j_={Forest:{plants:[Wn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Wn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Wn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Wn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Wn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Wn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Wn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Wn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Wn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Wn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Wn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Wn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Wn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Ka=l(i=>Object.prototype.hasOwnProperty.call(j_,i)?j_[i]:null,"growthOf");var PA=["River"],ei=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),IA=["Irrigation","Farmland","Fortress","Airbase"],Q_=l(i=>i.city||IA.some(e=>ei(i,e))?null:Ka(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),LA=l((i,e)=>{if(i.city)return null;let t=ei(i,"Road"),n=ei(i,"Railroad"),s=t?e.filter(p=>ei(p.tile,"Road")).map(({offset:p})=>p):[],r=t?e.filter(p=>!!p.tile.city||ei(p.tile,"Railroad")).map(({offset:p})=>p):[],a=l((p,f)=>p[0]===f[0]&&p[1]===f[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(p=>!n||!r.some(f=>a(f,p))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:ei(i,"Farmland")?"farmland":ei(i,"Irrigation")?"irrigation":null,mine:ei(i,"Mine"),fortress:ei(i,"Fortress"),airbase:ei(i,"Airbase"),pollution:ei(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:p})=>p).filter(p=>!PA.includes(p)).map(p=>[i.terrain._,p]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:Ka(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=Q_(i);return u!==null&&(c.woods=e.filter(p=>Q_(p.tile)===u).map(({offset:p})=>p),c.paths=e.filter(p=>!!p.tile.city||ei(p.tile,"Road")).map(({offset:p})=>p)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),ev=LA;var Ct=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),tv={Coal:Ct("rocks","#26262a",4),Gold:Ct("rocks","#d8b13a",3),Gems:Ct("rocks","#59c2d6",4,"#b05ad0"),Iron:Ct("rocks","#8a5a44",4),Wheat:Ct("crop","#d9b84a",5,"#a88a2c"),Spice:Ct("crop","#c0452e",4,"#5d7a2a"),Wine:Ct("crop","#6a2c5e",4,"#5d7a2a"),Silk:Ct("crop","#e9e2cf",3,"#4f7a34"),Fruit:Ct("crop","#e08a2a",4,"#3f7a2a"),Horse:Ct("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Ct("animal","#4a3424",3,"#2a1e16"),Game:Ct("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Ct("animal","#8f7e66",2,"#e8e2d6"),Furs:Ct("animal","#b0602a",2,"#f0e8dc"),Ivory:Ct("animal","#8a8580",1,"#f2ead8"),Seal:Ct("animal","#6e7072",2,"#4a4c4e"),Pheasant:Ct("bird","#8a3a22",2,"#3d6a3a"),Fish:Ct("fish","#b8c4cc",5),Whales:Ct("whale","#3a4048",1),Oil:Ct("derrick","#222224",1,"#121214"),Oasis:Ct("oasis","#3f7a32",3,"#3f86a8"),Peat:Ct("peat","#4a3624",4),Shield:Ct("logs","#7a5532",4,"#c9a47a")},DA=Ct("cairn","#9a9690",5),nv=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(tv,n)?tv[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??DA},"specialLook");var Bm=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Xn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Lm=.06,iv="#8c7a58",sv="#5f5953",NA="#a9abae",UA="#5e432b",FA="#4f87b0",OA="#7da33f",BA=["#c2b448","#8fae3e"],rv="#9d968a",kA="#4a4c50",Fm="#6b4a2e",zA="#7a6a58",GA="#b89a5a",VA="#c9b48e",av="#34322a",Cn=new Fi(1,1,1),Qa=new Oi(.5,.5,1,8),km=new Bi(.5,1,8),HA=new Bi(.5,1,4),ja=new Ys(.5,8,6),El=new Oi(.5,.5,1,4,1,!0),Al=new Bi(.5,1,5,1,!0),$h=new Ys(.5,5,3),Dm={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},WA=.05,XA=.22,ov=72,bi=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),lv=new Map,Nm=l(i=>{let e=lv.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Ue(i);e=[t,n,s],lv.set(i,e)}return e},"colourOf"),cv=new WeakMap,qA=l(i=>{let e=cv.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},cv.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),YA=new mt,$A=new We,ZA=new X,JA=new yn,KA=new Un,jA=new X,zt,dv,fn,Wm=class Wm{constructor(e,t){Y(this,zt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=Nm(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/Lm)),u=Math.max(1,Math.ceil(n/Lm)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],p=l((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<c;f++)for(let m=0;m<u;m++){let[g,y]=p(f/c,(m+1)/u),[x,_]=p((f+1)/c,(m+1)/u),[S,A]=p(f/c,m/u),[E,P]=p((f+1)/c,m/u);R(this,zt,fn).call(this,g,y,r,a),R(this,zt,fn).call(this,x,_,r,a),R(this,zt,fn).call(this,S,A,r,a),R(this,zt,fn).call(this,x,_,r,a),R(this,zt,fn).call(this,E,P,r,a),R(this,zt,fn).call(this,S,A,r,a)}}disc(e,t,n,s,r=12){let a=Nm(n),[o,c]=e,u=Math.max(1,Math.ceil(t/Lm)),h=l((p,f)=>{let m=f/r*Math.PI*2,g=p/u*t;return[o+Math.cos(m)*g,c+Math.sin(m)*g]},"at");for(let p=0;p<u;p++)for(let f=0;f<r;f++){let m=h(p+1,f),g=h(p+1,f+1);if(p===0)R(this,zt,fn).call(this,o,c,s,a),R(this,zt,fn).call(this,...g,s,a),R(this,zt,fn).call(this,...m,s,a);else{let y=h(p,f),x=h(p,f+1);R(this,zt,fn).call(this,...y,s,a),R(this,zt,fn).call(this,...x,s,a),R(this,zt,fn).call(this,...m,s,a),R(this,zt,fn).call(this,...x,s,a),R(this,zt,fn).call(this,...g,s,a),R(this,zt,fn).call(this,...m,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=qA(e),c=YA.compose(ZA.set(...t),JA.setFromEuler(KA.set(...r)),jA.set(...n)),u=c.elements,h=$A.getNormalMatrix(c).elements,[p,f,m]=Nm(s),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],S=a[y+2],A=o[y],E=o[y+1],P=o[y+2],C=h[0]*A+h[3]*E+h[6]*P,v=h[1]*A+h[4]*E+h[7]*P,w=h[2]*A+h[5]*E+h[8]*P,L=Math.hypot(C,v,w)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*S+u[12],u[1]*x+u[5]*_+u[9]*S+u[13],u[2]*x+u[6]*_+u[10]*S+u[14]),g.normals.push(C/L,v/L,w/L),g.colours.push(p,f,m)}}spot(e,t){let n=bi(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-XA-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,lT(e,t,o,c)-WA-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=bi(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<ov;h++){let p=s+h/ov*Math.PI*2,f=[r+Math.cos(p)*u*this.place.radius,a+Math.sin(p)*u*this.place.radius],m=this.clearance(f[0],f[1],n);if(m>=0)return this.taken.push([f[0],f[1],n]),f;m>c&&(o=f,c=m)}return this.taken.push([o[0],o[1],n]),o}};zt=new WeakSet,dv=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),fn=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...R(this,zt,dv).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(Wm,"Layer");var Om=Wm,zm=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),Gm=l(i=>i.alone||i.joins.length>0,"drawn"),QA=l((i,e)=>{let{place:t}=i;Gm(e)&&(e.joins.forEach(n=>i.strip(t.centre,zm(t,n),.07,iv,Xn.road)),i.disc(t.centre,e.alone?.09:.035,iv,Xn.road))},"road"),eT=l((i,e)=>{if(!Gm(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>zm(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,sv,Xn.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,UA,Xn.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,NA,Xn.rail))}),i.disc(t.centre,.05,sv,Xn.ballast)},"railroad"),tT=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?BA[o%2]:OA;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,Xn.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,FA,Xn.field+.001)}}},"fields"),nT=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Cn,[e-.02,n+.05,t],[.01,.11,.01],Fm,[0,0,-.3]),i.solid(Cn,[e+.02,n+.05,t],[.01,.11,.01],Fm,[0,0,.3]),i.solid(Qa,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(km,[a,i.ground(a,o)+.02,o],[.07,.04,.07],zA)})},"mine"),iT=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(Cn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],rv)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(Qa,[o,i.ground(o,c)+.035,c],[.045,.07,.045],rv)})},"fortress"),sT=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,kA,Xn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Xn.road+.004),i.solid(Cn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),rT=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,av,Xn.smear,14),i.disc(i.spot(7,.5),e*.25,av,Xn.smear+.001)},"pollution"),aT=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(bi(i.place.seed,n*31+o*2)-.5)*c,t[1]+(bi(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),p=bi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(ja,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,p,0]);break;case"crop":i.solid(Qa,[c,h+.02,u],[.008,.04,.008],s),i.solid(ja,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let f=e.count===1?1.5:1;i.solid(Cn,[c,h+.04*f,u],[.035*f,.03*f,.07*f],e.colour,[0,p,0]),i.solid(Cn,[c+Math.sin(p)*.04*f,h+.055*f,u+Math.cos(p)*.04*f],[.022*f,.024*f,.03*f],s,[0,p,0]),i.solid(Cn,[c,h+.013*f,u],[.03*f,.026*f,.055*f],s,[0,p,0]);break}case"bird":i.solid(ja,[c,h+.02,u],[.03,.025,.04],e.colour,[0,p,0]),i.solid(Cn,[c-Math.sin(p)*.03,h+.025,u-Math.cos(p)*.03],[.008,.006,.04],s,[.4,p,0]);break;case"fish":i.solid(ja,[c,h+.006,u],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":i.solid(ja,[c,h,u],[.07,.05,.2],e.colour,[0,p,0]),i.solid(Cn,[c-Math.sin(p)*.11,h+.02,u-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":i.solid(Cn,[c,h+.008,u],[.08,.016,.08],s),i.solid(HA,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,Xn.field+.002);{let[f,m]=r(o+5,.1),g=i.ground(f,m);i.solid(Qa,[f,g+.06,m],[.012,.12,.012],Fm),i.solid(km,[f,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Qa:Cn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:i.solid(ja,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),oT=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+bi(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(Qa,[s,a+.02,r],[.05,.04,.05],VA),i.solid(km,[s,a+.055,r],[.065,.035,.065],GA)})},"hut"),fv={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},pv=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(El,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(Al,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(Al,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(El,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid($h,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(El,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(Al,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(El,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(Cn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid($h,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(Al,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(Al,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid($h,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Cn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid($h,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(El,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(Cn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),lT=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),cT=l((i,e)=>{let t=Ka(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,p=o.size[0]+(o.size[1]-o.size[0])*bi(r,h),f=t.conifers,m=f!==void 0&&bi(r,h+1)>=f[0]+(f[1]-f[0])*a?"broadleaf":o.kind,g=fv[m]*p;for(let y=0;y<6;y++){let x=bi(r,h+2+y*2)*Math.PI*2,_=Math.sqrt(bi(r,h+3+y*2))*s*.92,S=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(S,A,g)){pv(i,o,m,S,A,p,x),i.taken.push([S,A,g]),i.grown.push([S,A,m]);break}}}})},"plants"),Um=.26,uv=.3,uT=.15,hv=.5,Zh=[.9,1.3],Hr=l((i,e,t)=>bi(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),hT=l((i,e,t)=>{let{centre:n,outline:s,owns:r,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/Um)),p=o.u/h,f=o.v===null?null:Math.max(1,Math.round(o.v/Um)),m=o.v===null||f===null?Um:o.v/f,g=s.map(([v])=>v),y=s.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/p)-1,Math.ceil(Math.max(...g)/p)],[S,A]=[Math.floor(Math.min(...y)/m)-1,Math.ceil(Math.max(...y)/m)],E=a.filter(([v,w])=>!i.woods.some(([L,I])=>L===v&&I===w)).map(v=>{let[w,L]=c(v),I=Math.hypot(w-n[0],L-n[1]);return{mu:w,mv:L,length:I}}),P=t.plants.reduce((v,{count:w})=>v+w,0),C=[];for(let v=S;v<=A;v++)for(let w=x;w<=_;w++){let L=(w%h+h)%h,I=f===null?v:(v%f+f)%f,F=(w+.5+(Hr(L,I,0)*2-1)*uv)*p,V=(v+.5+(Hr(L,I,1)*2-1)*uv)*m;if(!r(F,V))continue;let K=E.reduce((H,{mu:Q,mv:z,length:se})=>{let ne=se/2-((F-n[0])*(Q-n[0])+(V-n[1])*(z-n[1]))/se;return Math.min(H,Math.max(0,ne)/uT)},1);if(Hr(L,I,2)>=hv+(1-hv)*K)continue;let D=Hr(L,I,3)*P,$=t.plants[0];for(let H of t.plants)if($=H,D-=H.count,D<0)break;let ie=t.conifers,O=ie!==void 0&&Hr(L,I,4)>=ie[0]+(ie[1]-ie[0])*u?"broadleaf":$.kind,j=$.size[0]+($.size[1]-$.size[0])*Hr(L,I,5);C.push({u:F,v:V,kind:O,plant:$,room:fv[O]*j*Zh[1],size:j*(Zh[0]+(Zh[1]-Zh[0])*K),facing:Hr(L,I,6)*Math.PI*2})}return C},"woodsPlants"),dT=l((i,e,t)=>{let{centre:n,around:s,toward:r,heightAt:a}=i.place,o=Math.max(...s.map(u=>{let[h,p]=r(u);return Math.hypot(h-n[0],p-n[1])})),c=e.paths.map(u=>r(u));c.forEach((u,h)=>c.slice(h+1).forEach(p=>{Math.hypot(p[0]-u[0],p[1]-u[1])<=o+1e-6&&i.lines.push([u,p])})),hT(e,i.place,t).forEach(({u,v:h,kind:p,plant:f,size:m,room:g,facing:y})=>{p!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(pv(i,f,p,u,h,m,y),i.grown.push([u,h,p]))})},"woods"),Vm=l((i,e,t)=>{let n=new Om(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&Gm(o)&&(o.joins.forEach(c=>n.lines.push([s,zm(e,c)])),o.alone&&n.lines.push([s,s]))}),i.fortress){let o=r*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[s[0]+u,s[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=r*.75;n.lines.push([[s[0]-o,s[1]+.12],[s[0]+o,s[1]+.12]])}i.irrigation!==null&&tT(n,i.irrigation),i.road!==null&&QA(n,i.road),i.railroad!==null&&eT(n,i.railroad),i.mine&&nT(n,n.claim(...Dm.mine,.1)),i.fortress&&iT(n),i.airbase&&sT(n),i.pollution&&rT(n),i.specials.forEach(([o,c],u)=>aT(n,nv(o,c),n.claim(...Dm.special(u),.1),u+1)),i.hut&&oT(n,n.claim(...Dm.hut,.13));let a=Ka(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?dT(n,i,a):cT(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),fT=l((i,e,t)=>{let n=Bm();return t.forEach(({overlay:s,place:r})=>Vm(s,r,n)),Hm(i,e,n)},"overlayMesh"),Hm=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),mv=fT;var ir,pn,Mi,Cl,Si,qn,wn,eo,Rl,Wr,Pl,Il,Et,gv,qm,Ym,Jh,Kh,xv,Tl,$m=class $m{constructor(e){Y(this,Et);Y(this,ir);Y(this,pn);Y(this,Mi,[]);Y(this,Cl);Y(this,Si);Y(this,qn,new Set);Y(this,wn,null);Y(this,eo,null);Y(this,Rl,new Map);Y(this,Wr,[0,0]);Y(this,Pl);Y(this,Il);G(this,Si,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=q_({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),G(this,ir,$_({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:l((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:l((f,m)=>t.directions().map(g=>t.neighbour(f,m,g)).filter(g=>g!==null),"neighbours")}})),G(this,pn,Z_(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-a,m-o))),u=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[g,y]=this.layout.centre(f,m);return Math.hypot(g-a,y-o)}));G(this,Cl,1.2+c+Ms*Math.SQRT2+Math.max((qi.reach-1)*u,u/2+Ms*Math.SQRT2+Yh));let h=this.layout.outline(0,0),p=h.flatMap(([f,m],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-f,x-m);return _===0?[]:[{away:Math.abs((y-f)*(o-m)-(x-m)*(a-f))/_,normal:[(x-m)/_,(f-y)/_]}]});G(this,Pl,Math.min(...p.map(({away:f})=>f))),G(this,Il,Math.min(...p.map(({away:f,normal:[m,g]})=>f/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=d(this,pn),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,x)=>{let _=`${y},${x}`,S=n.get(_);return S===void 0&&(S=d(this,ir).height(y*s,x*r),n.set(_,S)),S},"at"),p=h(a,o),f=h(a+1,o),m=h(a,o+1);if(c+u<=1)return p+(f-p)*c+(m-p)*u;let g=h(a+1,o+1);return g+(m-g)*(1-c)+(f-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=d(this,pn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return d(this,pn).chunksV*d(this,pn).stepsV*d(this,pn).spacingV}heightAt(e,t){return d(this,ir).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=d(this,pn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);G(this,Mi,R(this,Et,Tl).call(this,r,e,t)),G(this,Wr,[e,t]),r.forEach(a=>d(this,qn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return[];G(this,Wr,[t,n]),(e.length===0?[...R(this,Et,Kh).call(this).values()].flat():R(this,Et,xv).call(this,e)).forEach(([o,c])=>{let u=R(this,Et,Jh).call(this,o,c);if(d(this,qn).has(u)||d(this,wn)?.key===u&&!R(this,Et,gv).call(this,d(this,wn),o,c))return;JSON.stringify(R(this,Et,qm).call(this,o,c))!==(d(this,Rl).get(`${o},${c}`)??"null")&&d(this,qn).add(u)});let r=d(this,ir).refresh(s?void 0:e);if(r.length===0)return r;let a=K_(d(this,pn),this.layout,r,d(this,Cl)).map(([o,c])=>`${o},${c}`);return G(this,Mi,R(this,Et,Tl).call(this,[...new Set([...d(this,Mi),...a])],t,n)),r}refocus(e,t){G(this,Mi,R(this,Et,Tl).call(this,d(this,Mi),e,t)),G(this,Wr,[e,t])}pending(){return d(this,Mi).length}overlaysPending(){return d(this,qn).size+(d(this,wn)===null||d(this,qn).has(d(this,wn).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;d(this,Mi).length>0;){if(s())return;let r=d(this,Mi).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,J_(d(this,pn),d(this,ir),a,o)),d(this,qn).add(r)}for(;d(this,qn).size>0||d(this,wn)!==null;){if(d(this,wn)!==null&&d(this,qn).has(d(this,wn).key)&&G(this,wn,null),d(this,wn)===null){let f=R(this,Et,Tl).call(this,[...d(this,qn)],...d(this,Wr))[0];d(this,qn).delete(f),G(this,wn,{key:f,squares:R(this,Et,Kh).call(this).get(f)??[],done:0,laid:Bm(),heights:new Map})}let r=d(this,wn);for(;r.done<r.squares.length;){let[f,m]=r.squares[r.done],g=R(this,Et,Ym).call(this,f,m,r.heights);if(r.done++,g!==null&&Vm(g.overlay,g.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:p}=d(this,pn);G(this,wn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:Hm(a*c*h,o*u*p,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=d(this,pn),o=new Map,c=(R(this,Et,Kh).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>R(this,Et,Ym).call(this,u,h,o)??[]);return c.length===0?null:mv(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return R(this,Et,Jh).call(this,e,t)}};ir=new WeakMap,pn=new WeakMap,Mi=new WeakMap,Cl=new WeakMap,Si=new WeakMap,qn=new WeakMap,wn=new WeakMap,eo=new WeakMap,Rl=new WeakMap,Wr=new WeakMap,Pl=new WeakMap,Il=new WeakMap,Et=new WeakSet,gv=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),qm=l(function(e,t){let n=d(this,Si).topology();return ev(d(this,Si).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:d(this,Si).get(r[0],r[1])}]}))},"#overlayAt"),Ym=l(function(e,t,n){let s=R(this,Et,qm).call(this,e,t);if(d(this,Rl).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t),o=d(this,Si).topology();return{overlay:s,place:{centre:[r,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:d(this,Pl),inner:d(this,Il),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,p]=this.layout.tileAt(c,u);return h===e&&p===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),Jh=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=d(this,pn),[u,h]=this.layout.centre(e,t),p=Math.floor(u/(r*o)),f=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,p))},${Math.min(s-1,Math.max(0,f))}`},"#chunkOf"),Kh=l(function(){if(d(this,eo)===null){let e=new Map;for(let t=0;t<d(this,Si).height();t++)for(let n=0;n<d(this,Si).width();n++){let s=R(this,Et,Jh).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}G(this,eo,e)}return d(this,eo)},"#chunksOfSquares"),xv=l(function(e){let t=d(this,Si).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),Tl=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=d(this,pn),c=s*a,u=r*o,{u:h,v:p}=this.layout.period(),f=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),m=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(f((y+.5)*c-t,h),f((x+.5)*u-n,p))},"distance");return[...e].sort((g,y)=>m(g)-m(y))},"#nearestFirst"),l($m,"Land");var Xm=$m,_v=Xm;var pT=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ss=pT;var vv=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var mT=8,gT=.92,xT=.02,yv=3,_T=50,vT=8,yT=10,bv=250,Ll,Dl,to,no,Xr,sr,Zm=class Zm{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){Y(this,Ll);Y(this,Dl);Y(this,to);Y(this,no);Y(this,Xr,!1);Y(this,sr);this.pointerId=e,G(this,Ll,t),G(this,Dl,n),G(this,to,t),G(this,no,n),G(this,sr,[{x:t,y:n,time:s}])}dragging(){return d(this,Xr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!d(this,Xr)&&Math.hypot(t-d(this,Ll),n-d(this,Dl))<mT)return null;let r=!d(this,Xr),a=d(this,to)-t,o=d(this,no)-n;return G(this,Xr,!0),G(this,to,t),G(this,no,n),d(this,sr).push({x:t,y:n,time:s}),d(this,sr).length>20&&d(this,sr).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return vv(d(this,sr),e)}};Ll=new WeakMap,Dl=new WeakMap,to=new WeakMap,no=new WeakMap,Xr=new WeakMap,sr=new WeakMap,l(Zm,"Press");var jh=Zm,Zi,Nl,Jm=class Jm{constructor(e){Y(this,Zi,null);Y(this,Nl);G(this,Nl,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>yv?yv/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<xT){G(this,Zi,null);return}d(this,Nl).call(this,-s*u,-r*u);let h=Math.pow(gT,u/16);s*=h,r*=h,G(this,Zi,window.requestAnimationFrame(o))},"step");G(this,Zi,window.requestAnimationFrame(o))}gliding(){return d(this,Zi)!==null}stop(){d(this,Zi)!==null&&(window.cancelAnimationFrame(d(this,Zi)),G(this,Zi,null))}};Zi=new WeakMap,Nl=new WeakMap,l(Jm,"Glide");var Qh=Jm,qr,Ul,Fl,io,Km=class Km{constructor(){Y(this,qr,0);Y(this,Ul,0);Y(this,Fl,-1/0);Y(this,io,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=bv)return 0;let r=Math.sign(s),a=e.timeStamp-d(this,Fl)>bv||r!==d(this,Ul);if(G(this,Fl,e.timeStamp),G(this,Ul,r),a&&(G(this,qr,0),G(this,io,0)),n&&!e.ctrlKey&&d(this,io)>=yT)return 0;if(!a&&n){if(G(this,qr,d(this,qr)+s),Math.abs(d(this,qr))<(e.ctrlKey?vT:_T))return 0;G(this,qr,0)}return n&&!e.ctrlKey&&G(this,io,d(this,io)+1),s<0?1:-1}};qr=new WeakMap,Ul=new WeakMap,Fl=new WeakMap,io=new WeakMap,l(Km,"WheelTurn");var ed=Km;var bT=350,MT=.006,Mv=.004,Ji,sn,En,so,Ki,wi,sd,ni,ii,rr,ro,Yn,ar,Pe,ti,td,nd,Sv,Qm,ws,e0,wv,Es,Ev,Av,Tv,Cv,Ol,Rv,Pv,Iv,id,t0=class t0{constructor(e,t,n=null){Y(this,Pe);Y(this,Ji);Y(this,sn);Y(this,En,null);Y(this,so,[0,0]);Y(this,Ki,null);Y(this,wi);Y(this,sd,new ed);Y(this,ni,new Map);Y(this,ii,null);Y(this,rr,null);Y(this,ro,[]);Y(this,Yn);Y(this,ar,null);G(this,Ji,e),G(this,sn,t),G(this,Yn,n),G(this,wi,new Qh((s,r)=>{let[a,o]=R(this,Pe,Sv).call(this);R(this,Pe,e0).call(this,[a,o],[a-s,o-r])})),R(this,Pe,ti).call(this,"pointerdown",s=>R(this,Pe,wv).call(this,s)),R(this,Pe,ti).call(this,"pointermove",s=>R(this,Pe,Av).call(this,s)),R(this,Pe,ti).call(this,"pointerup",s=>R(this,Pe,Tv).call(this,s)),R(this,Pe,ti).call(this,"pointercancel",s=>R(this,Pe,Cv).call(this,s)),R(this,Pe,ti).call(this,"wheel",s=>R(this,Pe,Pv).call(this,s),{passive:!1}),R(this,Pe,ti).call(this,"gesturestart",s=>R(this,Pe,id).call(this,s,"start"),{passive:!1}),R(this,Pe,ti).call(this,"gesturechange",s=>R(this,Pe,id).call(this,s,"change"),{passive:!1}),R(this,Pe,ti).call(this,"gestureend",s=>R(this,Pe,id).call(this,s,"end"),{passive:!1}),R(this,Pe,ti).call(this,"contextmenu",s=>R(this,Pe,Ev).call(this,s)),R(this,Pe,ti).call(this,"pointerleave",()=>d(this,Yn)?.hover(null)),R(this,Pe,ti).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return d(this,En)?.dragging()===!0||d(this,Ki)!==null}moving(){return this.dragging()||d(this,ii)!==null||d(this,wi).gliding()}dispose(){d(this,wi).stop(),R(this,Pe,Es).call(this),d(this,ro).forEach(([e,t,n])=>d(this,Ji).removeEventListener(e,t,n)),G(this,ro,[])}};Ji=new WeakMap,sn=new WeakMap,En=new WeakMap,so=new WeakMap,Ki=new WeakMap,wi=new WeakMap,sd=new WeakMap,ni=new WeakMap,ii=new WeakMap,rr=new WeakMap,ro=new WeakMap,Yn=new WeakMap,ar=new WeakMap,Pe=new WeakSet,ti=l(function(e,t,n){d(this,Ji).addEventListener(e,t,n),d(this,ro).push([e,t,n])},"#listen"),td=l(function(){return{width:d(this,Ji).clientWidth||1,height:d(this,Ji).clientHeight||1}},"#box"),nd=l(function([e,t]){let{width:n,height:s}=R(this,Pe,td).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),Sv=l(function(){let{width:e,height:t}=R(this,Pe,td).call(this);return[e/2,t/2]},"#middle"),Qm=l(function(){let{width:e,height:t}=R(this,Pe,td).call(this);return e/t},"#aspect"),ws=l(function(e){let t=d(this,Ji).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),e0=l(function(e,t){d(this,sn).setOrbit(T_(d(this,sn).orbit(),d(this,sn).lookHeight(),R(this,Pe,nd).call(this,e),R(this,Pe,nd).call(this,t),R(this,Pe,Qm).call(this)))},"#pan"),wv=l(function(e){if(d(this,wi).stop(),d(this,Yn)?.hover(null),e.pointerType==="touch"&&(d(this,ni).set(e.pointerId,R(this,Pe,ws).call(this,e)),d(this,ni).size===2)){G(this,En,null),R(this,Pe,Es).call(this),G(this,ii,R(this,Pe,Ol).call(this));return}if(e.isPrimary&&e.button!==2){if(d(this,Ji).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),G(this,Ki,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new jh(e),[n,s]=R(this,Pe,ws).call(this,e),{clientX:r,clientY:a}=e;G(this,En,t),G(this,so,[n,s]),R(this,Pe,Es).call(this),G(this,ar,window.setTimeout(()=>{G(this,ar,null),d(this,En)===t&&!t.dragging()&&d(this,Yn)?.menu(n,s,r,a,!0)===!0&&G(this,En,null)},bT))}}},"#down"),Es=l(function(){d(this,ar)!==null&&(window.clearTimeout(d(this,ar)),G(this,ar,null))},"#stopHold"),Ev=l(function(e){if(d(this,Yn)===null||!d(this,Yn).menuOnRightClick()||(e.preventDefault(),d(this,Yn).menuOpen()))return;let[t,n]=R(this,Pe,ws).call(this,e);d(this,Yn).menu(t,n,e.clientX,e.clientY,!1)&&(R(this,Pe,Es).call(this),G(this,En,null))},"#rightClick"),Av=l(function(e){if(d(this,ni).has(e.pointerId)&&(d(this,ni).set(e.pointerId,R(this,Pe,ws).call(this,e)),d(this,ii)!==null)){R(this,Pe,Rv).call(this);return}let t=d(this,Ki);if(t!==null&&t.pointerId===e.pointerId){let r=d(this,sn).orbit();d(this,sn).setOrbit(zr({...r,yaw:r.yaw-(e.clientX-t.x)*MT,pitch:r.pitch+(e.clientY-t.y)*Mv})),t.x=e.clientX,t.y=e.clientY;return}let n=d(this,En);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!d(this,wi).gliding()){let[r,a]=R(this,Pe,ws).call(this,e);d(this,Yn)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;R(this,Pe,Es).call(this);let s=R(this,Pe,ws).call(this,e);R(this,Pe,e0).call(this,d(this,so),s),G(this,so,s)},"#move"),Tv=l(function(e){if(d(this,ni).delete(e.pointerId),d(this,ii)!==null){G(this,ii,d(this,ni).size<2?null:R(this,Pe,Ol).call(this));return}if(d(this,Ki)?.pointerId===e.pointerId){G(this,Ki,null);return}let t=d(this,En);if(!(t===null||t.pointerId!==e.pointerId)){if(G(this,En,null),R(this,Pe,Es).call(this),!t.dragging()){let[n,s]=R(this,Pe,ws).call(this,e);d(this,Yn)?.click(n,s,e.clientX,e.clientY);return}Ss()||d(this,wi).start(t.releaseVelocity(e.timeStamp))}},"#up"),Cv=l(function(e){d(this,ni).delete(e.pointerId),d(this,ii)!==null&&G(this,ii,d(this,ni).size<2?null:R(this,Pe,Ol).call(this)),d(this,En)?.pointerId===e.pointerId&&(G(this,En,null),R(this,Pe,Es).call(this)),d(this,Ki)?.pointerId===e.pointerId&&G(this,Ki,null)},"#cancel"),Ol=l(function(){let[e,t]=[...d(this,ni).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:d(this,sn).orbit()}},"#measurePair"),Rv=l(function(){let e=d(this,ii),t=R(this,Pe,Ol).call(this);e===null||t===null||d(this,sn).setOrbit(zr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*Mv}))},"#twoFingers"),Pv=l(function(e){e.preventDefault();let t=d(this,sd).turned(e,d(this,rr)?.at??null);t!==0&&(d(this,wi).stop(),R(this,Pe,Iv).call(this,t,R(this,Pe,ws).call(this,e)))},"#wheelTurned"),Iv=l(function(e,t){let n=d(this,sn).orbit(),s=$a(n,e),r=Ya(n,d(this,sn).lookHeight(),R(this,Pe,nd).call(this,t),R(this,Pe,Qm).call(this));if(r===null||s.distance===n.distance){d(this,sn).setOrbit(s);return}let a=1-s.distance/n.distance;d(this,sn).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),id=l(function(e,t){if(e.preventDefault(),d(this,ii)!==null){G(this,rr,null);return}if(t==="end"){G(this,rr,null);return}if(t==="start"){d(this,wi).stop(),G(this,En,null),R(this,Pe,Es).call(this),G(this,rr,{orbit:d(this,sn).orbit(),at:e.timeStamp});return}let n=d(this,rr);n!==null&&(n.at=e.timeStamp,d(this,sn).setOrbit(zr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(t0,"CameraInput");var jm=t0,Lv=jm;var ST=["#9a9a9a","#4a4a4a"],Bl=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?ST:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),n0=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),wT=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),ET=l((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=n0(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Bl(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:Bl(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:p})=>p==="Fortified"),veteran:(o.improvements??[]).some(({_:p})=>p==="Veteran"),health:wT(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),i0=ET;var Uv={step:250,ramp:100,most:2e3},Fv={step:125,ramp:50,most:1e3},Ov=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),AT=50,TT=.05,s0=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),Dv=l((i,e)=>{let{started:t,from:n,speed:s,rising:r,rise:a,top:o,going:c,stopping:u,fall:h,to:p}=i,f=Math.max(0,e-t);if(f<r)return{along:n+s*f+a*f*f/2,speed:s+a*f};let m=n+(s+o)/2*r;if(f<r+c)return{along:m+o*(f-r),speed:o};let g=m+o*c,y=f-r-c;return y<u?{along:g+o*y-h*y*y/2,speed:o-h*y}:{along:p,speed:0}},"motionAt"),kl=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),Nv=l((i,e,t,n,s)=>{let r=Math.max(0,n-e),a=Math.max(1,s.ramp),o=Math.max(1/s.step,s.most>a*2?r/(s.most-a):0),c=o/a;if(r<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=r){let x=2*r/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let u=Math.min(o,Math.sqrt(c*r+t*t/2)),h=Math.abs(u-t)/c,p=u>=t?c:-c,f=u/c,m=(t+u)/2*h,g=u*f/2,y=Math.max(0,(r-m-g)/u);return{started:i,from:e,speed:t,rising:h,rise:p,top:u,going:y,stopping:f,fall:c,to:n}},"plan"),ao=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),CT=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),r0=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),lo,mn,si,zl,Gl,yt,Bv,kv,o0,l0,zv,c0,rd,oo,u0=class u0{constructor(e){Y(this,yt);Y(this,lo);Y(this,mn,new Map);Y(this,si,new Map);Y(this,zl,[]);Y(this,Gl,0);G(this,lo,e)}walking(e){return d(this,si).has(e)}size(){return d(this,mn).size}step(e,t,n,s,r,a,o){let c=d(this,si).get(e),u=c===void 0?void 0:d(this,mn).get(c),h=u===void 0?s:R(this,yt,rd).call(this,u,a),p=[...d(this,mn).values()].find(f=>f!==u&&R(this,yt,Bv).call(this,f,t,n,a)&&R(this,yt,zv).call(this,R(this,yt,rd).call(this,f,f.stepped),u===void 0?s:R(this,yt,rd).call(this,u,f.stepped)));if(p!==void 0)return u!==void 0&&R(this,yt,l0).call(this,u,e),p.units.push(e),d(this,si).set(e,p.id),p.id;if(u!==void 0&&s0(u.squares[u.squares.length-1],t)){if(u.units.length>1){let f={...u,id:`walk-${++as(this,Gl)._}`,units:u.units.filter(m=>m!==e),points:[...u.points],squares:[...u.squares]};d(this,mn).set(f.id,f),f.units.forEach(m=>d(this,si).set(m,f.id)),u.units=[e]}return R(this,yt,o0).call(this,u,n,r,a,o),u.id}return u!==void 0&&R(this,yt,l0).call(this,u,e),R(this,yt,kv).call(this,e,t,n,h,r,a,o)}at(e){let t=[],n=[];return d(this,mn).forEach(s=>{let r=R(this,yt,oo).call(this,s,e);if(e>=kl(s.motion)){n.push(r),R(this,yt,c0).call(this,s);return}t.push(r)}),{going:t,ended:n}}dropped(){return d(this,zl).splice(0)}endsAt(e){let t=d(this,si).get(e),n=t===void 0?void 0:d(this,mn).get(t);return n===void 0?null:kl(n.motion)}nextEnd(){let e=null;return d(this,mn).forEach(t=>{let n=kl(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return d(this,mn).forEach(s=>{e(s.units)&&(n.push(R(this,yt,oo).call(this,s,Math.max(t,kl(s.motion)))),R(this,yt,c0).call(this,s))}),n}endAll(e){let t=[...d(this,mn).values()].map(n=>R(this,yt,oo).call(this,n,Math.max(e,kl(n.motion))));return d(this,mn).clear(),d(this,si).clear(),t}};lo=new WeakMap,mn=new WeakMap,si=new WeakMap,zl=new WeakMap,Gl=new WeakMap,yt=new WeakSet,Bv=l(function(e,t,n,s){let r=e.squares.length-1;return r>0&&s-e.stepped<=AT&&s0(e.squares[r-1],t)&&s0(e.squares[r],n)},"#justMade"),kv=l(function(e,t,n,s,r,a,o){let c=`walk-${++as(this,Gl)._}`,u={id:c,units:[e],from:t,points:[s],squares:[t],stepped:a,motion:Nv(a,0,0,0,o),turned:null};return d(this,mn).set(c,u),d(this,si).set(e,c),R(this,yt,o0).call(this,u,n,r,a,o),c},"#setOff"),o0=l(function(e,t,n,s,r){let{u:a,v:o}=d(this,lo),c=e.points[e.points.length-1],u=c.middle??c.at,{along:h,speed:p}=Dv(e.motion,s),f=Math.max(0,Math.floor(h)-1),m=e.points.length>1?R(this,yt,oo).call(this,e,s).facing:null,g=e.points.length-1,y=h-(g-1);c.middle!==void 0&&y*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[g]={at:c.middle,lift:0,middle:c.middle}),e.points.splice(0,f),e.squares.splice(0,f),e.points.push({at:[ao(n.at[0],c.at[0],a),ao(n.at[1],c.at[1],o)],lift:n.lift,...n.middle===void 0?{}:{middle:[ao(n.middle[0],u[0],a),ao(n.middle[1],u[1],o)]}}),e.squares.push(t),e.stepped=s,e.turned=m===null?null:{facing:m,at:s,over:r.step/2},e.motion=Nv(s,h-f,p,e.points.length-1,r)},"#goOn"),l0=l(function(e,t){e.units=e.units.filter(n=>n!==t),d(this,si).delete(t),e.units.length===0&&(d(this,mn).delete(e.id),d(this,zl).push(e.id))},"#leave"),zv=l(function(e,t){let{u:n,v:s}=d(this,lo);return Math.hypot(ao(e.at[0],t.at[0],n)-t.at[0],ao(e.at[1],t.at[1],s)-t.at[1])<TT},"#beside"),c0=l(function(e){d(this,mn).delete(e.id),e.units.forEach(t=>d(this,si).delete(t))},"#end"),rd=l(function(e,t){let{at:n,lift:s}=R(this,yt,oo).call(this,e,t);return{at:n,lift:s}},"#drawn"),oo=l(function(e,t){let{points:n,squares:s,turned:r}=e,a=n.length-1,o=Math.min(a,Math.max(0,Dv(e.motion,t).along)),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],p=n[c+1]??h,f=[h.at[0]+(p.at[0]-h.at[0])*u,h.at[1]+(p.at[1]-h.at[1])*u],m=l(S=>n[S].middle??n[S].at,"middle"),g=l(S=>S<0||S>=a?null:CT(m(S),m(S+1)),"way"),y=g(c)??0,x=u>.75&&g(c+1)!==null?r0(y,g(c+1),(u-.75)*2):u<.25&&g(c-1)!==null?r0(g(c-1),y,(u+.25)*2):y,_=r!==null&&t-r.at<r.over?r0(r.facing,x,Math.max(0,t-r.at)/r.over):x;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(p.lift-h.lift)*u,facing:_,from:e.from,before:s[a-1]??s[a],to:s[a]}},"#walker"),l(u0,"Walks");var a0=u0,Gv=a0;var x0={reach:200,back:300,fade:600},Vv=l(i=>({reach:i.reach/2,back:i.back/2,fade:i.fade/2}),"quickerBattle"),_0=.45,Vl=l(i=>i.start+i.pace.reach,"blowAt"),h0=l(i=>Vl(i)+(i.won?Math.max(i.pace.back,i.pace.fade):i.pace.fade),"battleEnds"),d0=l(i=>Math.min(1,Math.max(0,i)),"clamp"),RT=l(i=>i*i,"easeIn"),PT=l(i=>i*i*(3-2*i),"easeInOut"),IT=l((i,e)=>{let{reach:t,back:n,fade:s}=i.pace,r=e-Vl(i),a=1-d0(s<=0?1:r/s);return r<0?{reach:RT(d0(t<=0?1:(e-i.start)/t)),attacker:1,fallen:1}:i.won?{reach:1-PT(d0(n<=0?1:r/n)),attacker:1,fallen:a}:{reach:1,attacker:a,fallen:0}},"battleAt"),f0=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),LT=l((i,e)=>i.attacker===e.attacker||i.attacker===e.defender,"waitsFor"),Kt,ji,ad,Qi,m0,g0,Hv,v0=class v0{constructor(){Y(this,Qi);Y(this,Kt,[]);Y(this,ji,new Set);Y(this,ad,0)}size(){return d(this,Kt).length}attacking(e){return d(this,Kt).some(t=>t.attacker===e)}fighting(e){return d(this,Kt).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return d(this,Kt).find(t=>!d(this,ji).has(t.id)&&f0(t.defenderSquare,e))??null}add(e,t,n,s=t){let r={...e,id:`battle-${++as(this,ad)._}`,start:R(this,Qi,m0).call(this,e,n,d(this,Kt),Math.max(t,s)),notBefore:s,pace:n};return d(this,Kt).push(r),r}at(e){let t=[],n=[],s=[],r=new Set;return d(this,Kt).forEach(a=>{if(e>=Vl(a)&&!d(this,ji).has(a.id)&&(d(this,ji).add(a.id),n.push(a)),e>=h0(a)){s.push(a);return}t.push(...R(this,Qi,Hv).call(this,a,e,r))}),R(this,Qi,g0).call(this,s),{going:t,struck:n,ended:s}}endWhere(e,t){let n=d(this,Kt).filter(e),s=d(this,Kt).filter((a,o)=>n.includes(a)||!d(this,ji).has(a.id)&&n.some(c=>d(this,Kt).indexOf(c)>o&&f0(c.defenderSquare,a.defenderSquare))),r=s.filter(a=>!d(this,ji).has(a.id));return r.forEach(a=>d(this,ji).add(a.id)),R(this,Qi,g0).call(this,s),s.length>0&&d(this,Kt).forEach((a,o)=>{a.start>t&&(a.start=R(this,Qi,m0).call(this,a,a.pace,d(this,Kt).slice(0,o),Math.max(t,a.notBefore)))}),{struck:r,ended:s}}busyUntil(e){return d(this,Kt).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,h0(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};Kt=new WeakMap,ji=new WeakMap,ad=new WeakMap,Qi=new WeakSet,m0=l(function(e,t,n,s){return n.reduce((r,a)=>LT(a,e)?Math.max(r,h0(a)):f0(a.defenderSquare,e.defenderSquare)?Math.max(r,Vl(a)-t.reach):r,s)},"#startOf"),g0=l(function(e){e.length!==0&&(G(this,Kt,d(this,Kt).filter(t=>!e.includes(t))),e.forEach(t=>d(this,ji).delete(t.id)))},"#take"),Hv=l(function(e,t,n){let{reach:s,attacker:r,fallen:a}=IT(e,t),{from:o,edge:c,fallsAt:u}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),r>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[o.at[0]+(c[0]-o.at[0])*s,o.at[1]+(c[1]-o.at[1])*s],lift:o.lift*(1-s),facing:e.facing,opacity:r}),e.won&&t>=Vl(e)&&a>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[u.at[0],u.at[1]],lift:u.lift,facing:e.defenderFacing,opacity:a}),h},"#fighters"),l(v0,"Battles");var p0=v0,Wv=p0;var DT=1,NT=.04,UT=12,FT=l((i,e,t,n,s,{water:r=0,ceiling:a=DT}={})=>{let{from:o,direction:c}=Sm(i,e,t,n),[u,h,p]=o,[f,m,g]=c;if(m>-1e-6)return null;let y=l(v=>[u+f*v,h+m*v,p+g*v],"at"),x=l(v=>{let[w,L,I]=y(v);return L-Math.max(r,s(w,I))},"above"),_=Math.max(0,(h-a)/-m),S=(h-r)/-m,A=NT/Math.max(1e-6,Math.hypot(f,g)),E=_;for(let v=_;;v=Math.min(S,v+A)){if(x(v)<=0){let w=E,L=v;for(let V=0;V<UT;V++){let K=(w+L)/2;x(K)>0?w=K:L=K}let[I,,F]=y(L);return[I,F]}if(v>=S)break;E=v}let[P,,C]=y(S);return[P,C]},"pickGround"),Xv=FT;var od=4,or,Hl,Yr,$r,Rn,co,lr,As,Wl,Xl,ql,Ei,ld,qv,b0,M0=class M0{constructor(e,t,n,s,r){Y(this,Ei);Y(this,or);Y(this,Hl);Y(this,Yr);Y(this,$r);Y(this,Rn);Y(this,co);Y(this,lr);Y(this,As);Y(this,Wl);Y(this,Xl);Y(this,ql,l(e=>{let t=d(this,or).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;d(this,Xl).call(this,n*d(this,Rn),s*d(this,co))},"#click"));G(this,or,e),G(this,Yr,t),G(this,$r,n),G(this,Rn,t.period().u),G(this,co,s),G(this,Xl,r),G(this,As,document.createElement("canvas"));let{v:a}=t.period();G(this,lr,a),G(this,Wl,[[0,0],[-d(this,Rn),0],...a===null?[]:[[0,-a],[-d(this,Rn),-a]]]);let o=Math.max(1,Math.round(d(this,Rn)*od)),c=Math.max(1,Math.round(d(this,co)*od));[e,d(this,As)].forEach(u=>{u.width=o,u.height=c}),G(this,Hl,e.getContext("2d")),e.addEventListener("click",d(this,ql))}dispose(){d(this,or).removeEventListener("click",d(this,ql))}redraw(){let e=d(this,As).getContext("2d");if(e===null)return;let t=d(this,$r).width(),n=d(this,$r).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,d(this,As).width,d(this,As).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=d(this,$r).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Dr(c).colour,d(this,Wl).forEach(([p,f])=>{R(this,Ei,qv).call(this,e,a,r,p,f),e.fill()});let[u,h]=d(this,Yr).centre(a,r);if(o.city)s.push([u,h,Bl(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=n0(o.units,null);p!==null&&s.push([u,h,Bl(p.player)[0],1.4])}}s.forEach(([r,a,o,c])=>R(this,Ei,b0).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=d(this,Hl);if(n===null)return;if(n.clearRect(0,0,d(this,or).width,d(this,or).height),n.drawImage(d(this,As),0,0),t!==null){let[h,p]=d(this,Yr).centre(t.x,t.y);n.fillStyle="#ffffff",R(this,Ei,b0).call(this,h,p).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=d(this,lr),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-d(this,Rn)*Math.floor(r/d(this,Rn)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-d(this,Rn),0,d(this,Rn)].forEach(p=>{n.beginPath(),e.forEach(([f,m],g)=>{let[y,x]=R(this,Ei,ld).call(this,f+o+p,m+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};or=new WeakMap,Hl=new WeakMap,Yr=new WeakMap,$r=new WeakMap,Rn=new WeakMap,co=new WeakMap,lr=new WeakMap,As=new WeakMap,Wl=new WeakMap,Xl=new WeakMap,ql=new WeakMap,Ei=new WeakSet,ld=l(function(e,t){return[e*od,t*od]},"#px"),qv=l(function(e,t,n,s=0,r=0){e.beginPath(),d(this,Yr).outline(t,n).forEach(([a,o],c)=>{let[u,h]=R(this,Ei,ld).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),b0=l(function(e,t){return(d(this,lr)===null?[0]:[-d(this,lr),0,d(this,lr)]).flatMap(s=>[-d(this,Rn),0,d(this,Rn)].map(r=>R(this,Ei,ld).call(this,e+r,t+s)))},"#everywhere"),l(M0,"Minimap3D");var y0=M0,Yv=y0;var OT=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),$v=l(i=>{let e=OT(i).sort((n,s)=>n._.charCodeAt(0)-s._.charCodeAt(0)).flatMap(({_:n,value:s})=>Array.from({length:s},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,s)=>({_:n,column:s%t,row:Math.floor(s/t)}))}},"tileYieldGrid");var Zv=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),Jv=l(i=>i.city??i.workedBy??null,"squareCity");var BT=.9,kT=l(i=>{let{columns:e,icons:t}=$v(i),n=Math.min(e,t.length),s=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:a,row:o})=>({_:r,right:a-(n-1)/2,up:(s-1)/2-o}))}},"yieldSlots"),zT=l((i,e)=>BT*e/Math.hypot(i,2),"yieldIconSize"),Kv=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return Math.hypot(o-t,c-n)}))},"innerOf"),jv=l(({at:i,yields:e},t)=>{let{columns:n,slots:s}=kT(e);return s.length===0?null:{at:i,size:zT(n,t),slots:s}},"laidYields"),Qv=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},s=new Map,r=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:p})=>{let f=s.get(u);f===void 0&&(f=n.names.push(u)-1,s.set(u,f)),n.anchors[r*3]=a[0],n.anchors[r*3+1]=a[1],n.anchors[r*3+2]=a[2],n.slots[r*2]=h,n.slots[r*2+1]=p,n.sizes[r]=o,n.cells[r]=f,r++})}),n},"yieldMesh");var GT=10,VT=4e3,ey=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),HT=350,WT=2e3,XT=l(i=>({...i,...i.hitPoints?{hitPoints:{...i.hitPoints}}:{},...i.defence?{defence:{...i.defence}}:{},...i.improvements?{improvements:[...i.improvements]}:{}}),"keptUnit"),qT=l(i=>i&&{...i,...i.growth?{growth:{...i.growth}}:{}},"keptCity"),YT=500,$T=.25,ZT=400,Vt,ec,tc,qe,jt,Kr,nc,ic,lt,Mt,Pn,fo,sc,jr,hr,po,rc,ac,$n,mo,Ti,Qt,Ts,Qr,ea,In,Cs,ri,dr,go,xo,Xt,ai,ta,oi,es,li,ts,ns,oc,lc,cc,is,fr,Rs,Zn,_o,vo,Ps,Is,yo,pr,na,bo,Ci,uc,Ri,mr,hc,ia,ss,sa,ra,dc,fc,Mo,pc,So,mc,wo,Eo,aa,U,w0,ty,ny,Yl,E0,cr,iy,uo,A0,Zr,T0,C0,R0,$l,P0,I0,sy,Zl,L0,ry,D0,ay,Jr,cd,oy,ly,cy,ud,ho,Jl,uy,hy,dy,N0,hd,fy,U0,Kl,ur,jl,py,my,F0,Ai,gy,xy,_y,vy,Ql,O0,yy,by,B0,Gt,My,Sy,k0,z0=class z0{constructor(e,t=z_){Y(this,U);Y(this,Vt);Y(this,ec);Y(this,tc,[]);Y(this,qe);Y(this,jt);Y(this,Kr,null);Y(this,nc,0);Y(this,ic,"");Y(this,lt);Y(this,Mt,null);Y(this,Pn,null);Y(this,fo);Y(this,sc);Y(this,jr);Y(this,hr,null);Y(this,po,null);Y(this,rc);Y(this,ac,!1);Y(this,$n);Y(this,mo);Y(this,Ti,new Map);Y(this,Qt);Y(this,Ts,new Map);Y(this,Qr,new Map);Y(this,ea,new Map);Y(this,In,new Map);Y(this,Cs,new Set);Y(this,ri,new Map);Y(this,dr,0);Y(this,go,new Map);Y(this,xo,new Map);Y(this,Xt,new Wv);Y(this,ai,new Map);Y(this,ta,new Map);Y(this,oi,new Set);Y(this,es);Y(this,li,null);Y(this,ts,null);Y(this,ns,null);Y(this,oc,l(()=>{R(this,U,Jr).call(this)&&G(this,ns,null),R(this,U,cd).call(this)},"#pressed"));Y(this,lc,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||R(this,U,cd).call(this)},"#keyed"));Y(this,cc);Y(this,is,null);Y(this,fr,null);Y(this,Rs);Y(this,Zn,l(()=>{let e=d(this,fr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),G(this,fr,null),document.removeEventListener("keydown",d(this,Zn),!0),e.open&&d(this,$n).endTooltip(d(this,Vt)))},"#endHover"));Y(this,_o,null);Y(this,vo,!0);Y(this,Ps,new Map);Y(this,Is,null);Y(this,yo,new Map);Y(this,pr,new Map);Y(this,na,[]);Y(this,bo,0);Y(this,Ci,null);Y(this,uc,null);Y(this,Ri,!0);Y(this,mr);Y(this,hc,l(()=>{},"#stopUnitSize"));Y(this,ia,!1);Y(this,ss,!0);Y(this,sa,!1);Y(this,ra,new Map);Y(this,dc);Y(this,fc,l(()=>{},"#stopArtChanged"));Y(this,Mo,!1);Y(this,pc);Y(this,So);Y(this,mc,"");Y(this,wo,l(()=>R(this,U,k0).call(this),"#resizeHandler"));Y(this,Eo,null);Y(this,aa,!1);G(this,Vt,e.mapCanvas),G(this,ec,e.coveredBy),G(this,pc,e.art),G(this,mo,{cityName:e.cityName,unitStatus:e.unitStatus}),G(this,mr,e.unitSize?.get()??1),G(this,So,e.art.id()),this.world=e.world,G(this,qe,new _v(e.world)),G(this,Qt,new Gv(d(this,qe).layout.period())),G(this,es,e.walks),G(this,dc,Kv(d(this,qe).layout,e.world.topology())),G(this,na,e.world.tiles()),G(this,bo,d(this,na).length),G(this,sc,e.cameraDistance),G(this,rc,e.lockVerticalEdges);let n=e.cameraDistance.get();G(this,lt,R(this,U,Kl).call(this,{...E_(d(this,qe).layout.centre(0,0)),...n===null?{}:{distance:n}})),G(this,jr,d(this,lt).distance),this.portal=new ng(e,{centre:l(()=>R(this,U,fy).call(this),"centre"),centreOn:l((s,r)=>R(this,U,ly).call(this,s,r),"centreOn"),changed:l(()=>R(this,U,Gt).call(this),"changed"),visible:l((s,r,a)=>R(this,U,ho).call(this,s,r,a),"visible")}),G(this,jt,t(e.mapCanvas,{period:d(this,qe).layout.period(),ground:d(this,qe).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&G(this,_o,new Yv(e.minimapCanvas,d(this,qe).layout,e.world,d(this,qe).extentV(),(s,r)=>{G(this,ns,null),R(this,U,jl).call(this,{...d(this,Mt)?.to??d(this,lt),focus:[s,r]})})),e.debug&&e.mapCanvas.parentElement&&(G(this,Kr,R(this,U,My).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),d(this,qe).queueAll(...R(this,U,hd).call(this)),R(this,U,Ql).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),G(this,$n,e.squares),G(this,Rs,e.playerId),G(this,cc,e.transport),G(this,fo,new Lv(e.mapCanvas,{orbit:l(()=>d(this,lt),"orbit"),lookHeight:l(()=>d(this,Pn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>R(this,U,uy).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>R(this,U,hy).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>d(this,$n).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>d(this,$n).menuOpen(),"menuOpen"),hover:l(s=>R(this,U,dy).call(this,s),"hover")})),window.addEventListener("resize",d(this,wo)),document.addEventListener("keydown",d(this,lc),!0),e.mapCanvas.addEventListener("pointerdown",d(this,oc),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(G(this,Eo,new ResizeObserver(d(this,wo))),d(this,Eo).observe(e.mapCanvas.parentElement)),R(this,U,k0).call(this),R(this,U,Gt).call(this),G(this,hc,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==d(this,mr)&&!d(this,aa)&&(G(this,mr,s),R(this,U,Ql).call(this),R(this,U,Gt).call(this))})??(()=>{})),G(this,fc,e.artChanged?.(()=>{d(this,aa)||(G(this,ss,!0),R(this,U,Gt).call(this))})??(()=>{}))}land(){return d(this,qe)}orbit(){return d(this,lt)}moving(){return d(this,Mt)!==null||d(this,fo).moving()}setOrbit(e){d(this,Zn).call(this),G(this,Mt,null),G(this,lt,R(this,U,Kl).call(this,e)),R(this,U,Gt).call(this)}activeUnit(){return{unit:d(this,Ci),pendingTile:d(this,uc)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=d(this,Mt)?.to??d(this,lt);R(this,U,jl).call(this,{...t,yaw:t.yaw+e*bm},R(this,U,w0).call(this)+e*bm)}heading(){return{turn:(d(this,Mt)?.to??d(this,lt)).yaw,directions:ig(d(this,qe).layout,this.world.topology())}}faceNorth(){R(this,U,jl).call(this,{...d(this,Mt)?.to??d(this,lt),yaw:0},ey(-d(this,lt).yaw))}debugViewModes(){return[]}dispose(){R(this,U,B0).call(this,!0),G(this,aa,!0),d(this,Qt).endAll(0),d(this,Xt).endAll(0),d(this,ai).clear(),d(this,ta).clear(),d(this,oi).clear(),d(this,In).clear(),d(this,Cs).clear(),d(this,ri).clear(),document.removeEventListener("keydown",d(this,lc),!0),d(this,Vt).removeEventListener("pointerdown",d(this,oc),!0),d(this,hc).call(this),d(this,fc).call(this),d(this,Zn).call(this),d(this,fo).dispose(),d(this,_o)?.dispose(),window.removeEventListener("resize",d(this,wo)),d(this,Eo)?.disconnect(),d(this,Is)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(d(this,Is)),G(this,Is,null),d(this,Kr)?.remove(),d(this,jt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=d(this,is);e!==null&&(G(this,is,null),d(this,Vt).classList.remove("picking-tile"),e.window?.close())}flush(){R(this,U,F0).call(this),R(this,U,Gt).call(this)}mapEvent(e){if(e.kind==="moved"){R(this,U,ny).call(this,e.unit,e.from,e.to),R(this,U,ud).call(this,e.unit.id,e.from,e.to);return}R(this,U,ud).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),R(this,U,ud).call(this,e.defender.id,e.defender.tile,e.attacker.tile),R(this,U,ty).call(this,e)}measureCovered(){let e=d(this,Vt).getBoundingClientRect();G(this,tc,d(this,ec).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};G(this,is,s),d(this,Vt).classList.add("picking-tile"),s.window=d(this,$n).prompt(n,()=>{d(this,is)===s&&(G(this,is,null),d(this,Vt).classList.remove("picking-tile"))})}picking(){return d(this,is)!==null}queueTile(e){let t=`${e.x},${e.y}`;d(this,yo).set(t,e),d(this,go).set(t,++as(this,dr)._)}redrawArt(){let e=d(this,pc).id();return e===d(this,So)?"unchanged":(G(this,So,e),G(this,ss,!0),"redrawn")}releaseTiles(){d(this,yo).forEach((e,t)=>{let n=d(this,go).get(t)??0;d(this,pr).set(t,e),d(this,xo).set(t,n),d(this,ai).forEach(s=>{s.square===t&&n>s.after&&(s.patched=!0)})}),d(this,yo).clear(),d(this,go).clear(),d(this,pr).size>0&&R(this,U,Gt).call(this)}setActiveUnit(e,t){let n=d(this,Ci)?.tile;if(G(this,Ci,e),G(this,uc,t??null),R(this,U,Jr).call(this)&&R(this,U,oy).call(this)&&R(this,U,cd).call(this),R(this,U,Jr).call(this)){R(this,U,Gt).call(this);return}G(this,ns,null);let s=d(this,ts);G(this,li,e?.id??null),G(this,ts,e?.tile??null),[n,s,e?.tile].forEach(r=>{r&&R(this,U,Ai).call(this,r.x,r.y)}),R(this,U,Gt).call(this)}setWaiting(e){G(this,Mo,e),e&&d(this,Zn).call(this)}showActiveUnit(e){d(this,Ri)||(G(this,Ri,!0),R(this,U,Ql).call(this),R(this,U,Gt).call(this))}shown(){return{units:d(this,Ri),yields:d(this,ia),waiting:d(this,Mo)}}tilesPending(){return d(this,pr).size}toggleUnits(){G(this,Ri,!d(this,Ri)),R(this,U,Ql).call(this),R(this,U,Gt).call(this)}toggleYields(){G(this,ia,!d(this,ia)),G(this,ss,!0),R(this,U,Gt).call(this)}zoomBy(e){d(this,Zn).call(this),G(this,lt,$a(d(this,lt),e)),d(this,Mt)!==null&&(d(this,Mt).from=$a(d(this,Mt).from,e),d(this,Mt).to=$a(d(this,Mt).to,e)),R(this,U,Gt).call(this)}};Vt=new WeakMap,ec=new WeakMap,tc=new WeakMap,qe=new WeakMap,jt=new WeakMap,Kr=new WeakMap,nc=new WeakMap,ic=new WeakMap,lt=new WeakMap,Mt=new WeakMap,Pn=new WeakMap,fo=new WeakMap,sc=new WeakMap,jr=new WeakMap,hr=new WeakMap,po=new WeakMap,rc=new WeakMap,ac=new WeakMap,$n=new WeakMap,mo=new WeakMap,Ti=new WeakMap,Qt=new WeakMap,Ts=new WeakMap,Qr=new WeakMap,ea=new WeakMap,In=new WeakMap,Cs=new WeakMap,ri=new WeakMap,dr=new WeakMap,go=new WeakMap,xo=new WeakMap,Xt=new WeakMap,ai=new WeakMap,ta=new WeakMap,oi=new WeakMap,es=new WeakMap,li=new WeakMap,ts=new WeakMap,ns=new WeakMap,oc=new WeakMap,lc=new WeakMap,cc=new WeakMap,is=new WeakMap,fr=new WeakMap,Rs=new WeakMap,Zn=new WeakMap,_o=new WeakMap,vo=new WeakMap,Ps=new WeakMap,Is=new WeakMap,yo=new WeakMap,pr=new WeakMap,na=new WeakMap,bo=new WeakMap,Ci=new WeakMap,uc=new WeakMap,Ri=new WeakMap,mr=new WeakMap,hc=new WeakMap,ia=new WeakMap,ss=new WeakMap,sa=new WeakMap,ra=new WeakMap,dc=new WeakMap,fc=new WeakMap,Mo=new WeakMap,pc=new WeakMap,So=new WeakMap,mc=new WeakMap,wo=new WeakMap,Eo=new WeakMap,aa=new WeakMap,U=new WeakSet,w0=l(function(){let e=d(this,Mt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),ty=l(function({attacker:e,defender:t,winner:n}){let s=d(this,es)?.speed()??"normal",r=performance.now();if(typeof requestAnimationFrame!="function"||Ss()||s==="off"||e.player!==d(this,Rs)&&t.player!==d(this,Rs)&&!(d(this,es)?.rivals()??!0)||!R(this,U,ho).call(this,e.tile.x,e.tile.y,-.5)&&!R(this,U,ho).call(this,t.tile.x,t.tile.y,-.5))return;let a=this.world.get(e.tile.x,e.tile.y).units.find(({id:v})=>v===e.id),o=`${t.tile.x},${t.tile.y}`,c=this.world.get(t.tile.x,t.tile.y),u=[...d(this,ai).values()].filter(({square:v,patched:w})=>v===o&&!w).at(-1),h=u===void 0?c.units.filter(({id:v})=>!d(this,oi).has(v)).map(XT):u.units.filter(({id:v})=>!(u.won&&v===u.defender));if(d(this,oi).has(e.id)||!h.some(({id:v})=>v===t.id))return;let p=d(this,Xt).busyUntil([e.id,t.id]);p!==null&&p-r>WT&&R(this,U,Zl).call(this,d(this,Xt).endWhere(v=>v.attacker===e.id||v.attacker===t.id,r)),R(this,U,E0).call(this,e.id);let[f,m]=d(this,qe).layout.centre(e.tile.x,e.tile.y),[g,y]=d(this,qe).layout.centre(t.tile.x,t.tile.y),{u:x,v:_}=d(this,qe).layout.period(),S=l((v,w)=>w===null?v:v-w*Math.round(v/w),"short"),A=S(g-f,x),E=S(y-m,_),P=`${e.tile.x},${e.tile.y}`,C=d(this,Xt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:R(this,U,Yl).call(this,e.tile),edge:[f+A*_0,m+E*_0],fallsAt:R(this,U,Yl).call(this,t.tile),facing:d(this,Ti).get(e.id)??Math.atan2(A,E),defenderFacing:d(this,Ti).get(t.id)??Math.atan2(-A,-E)},r,s==="fast"?Vv(x0):x0,d(this,Qt).endsAt(e.id)??r);d(this,ai).set(C.id,{square:o,city:u?.city??qT(c.city),units:h,after:d(this,dr),won:n==="attacker",defender:t.id,patched:!1}),a!==void 0&&d(this,Ts).set(e.id,a),[e.id,t.id].forEach(v=>d(this,ri).set(v,{squares:[P,o],after:d(this,dr)})),R(this,U,Ai).call(this,e.tile.x,e.tile.y),R(this,U,Ai).call(this,t.tile.x,t.tile.y),R(this,U,Gt).call(this)},"#fight"),ny=l(function(e,t,n){let s=d(this,es)?.speed()??"normal";if(e.id===d(this,li)&&G(this,ts,n),typeof requestAnimationFrame!="function"||Ss()||s==="off")return;if(e.player!==d(this,Rs)&&d(this,Xt).attacking(e.id)){d(this,ri).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,dr)});return}R(this,U,Zl).call(this,d(this,Xt).endWhere(({attacker:u,defender:h})=>u===e.id||h===e.id,performance.now()));let r=d(this,Qt).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:u})=>u===e.id)??(R(this,U,cr).call(this,e.id)?d(this,Ts).get(e.id):void 0),o=e.player===d(this,Rs);if(a===void 0||!o&&!r&&(!(d(this,es)?.rivals()??!0)||!R(this,U,ho).call(this,t.x,t.y,-.5)&&!R(this,U,ho).call(this,n.x,n.y,-.5)))return;let c=o?Uv:Fv;d(this,Ts).set(e.id,a),d(this,ri).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,dr)}),R(this,U,E0).call(this,e.id),d(this,Qt).step(e.id,t,n,R(this,U,Yl).call(this,t),R(this,U,Yl).call(this,n),performance.now(),s==="fast"?Ov(c):c),R(this,U,Gt).call(this)},"#walk"),Yl=l(function({x:e,y:t}){let[n,s]=d(this,qe).layout.centre(e,t),r=Math.max(0,d(this,qe).surfaceAt(n,s)),a=d(this,Ri)&&this.world.get(e,t).city,o=[n,s+(a?gm:0)];return{at:o,lift:r-Math.max(0,d(this,qe).surfaceAt(...o)),middle:[n,s]}},"#standing"),E0=l(function(e){d(this,Cs).delete(e)&&d(this,In).forEach((t,n)=>{let s=t.units.filter(r=>r!==e);if(s.length!==t.units.length){if(s.length===0){d(this,In).delete(n),R(this,U,Zr).call(this,n);return}d(this,In).set(n,{...t,units:s})}})},"#stepsOn"),cr=l(function(e){return d(this,Qt).walking(e)||d(this,Cs).has(e)||d(this,Xt).attacking(e)||d(this,oi).has(e)},"#leftOff"),iy=l(function(e){if(d(this,Qt).dropped().forEach(s=>R(this,U,Zr).call(this,s)),d(this,In).forEach(s=>R(this,U,uo).call(this,s)),d(this,Qt).size()===0)return;if(Ss()||(d(this,es)?.speed()??"normal")==="off"){R(this,U,$l).call(this,d(this,Qt).endAll(e));return}let{going:t,ended:n}=d(this,Qt).at(e);R(this,U,$l).call(this,n),t.forEach(s=>R(this,U,uo).call(this,s))},"#placeWalkers"),uo=l(function(e){R(this,U,A0).call(this,e,R(this,U,T0).call(this,e.units))},"#drawWalker"),A0=l(function({id:e,at:t,lift:n,facing:s},r,a=1){let o=r===null?null:JSON.stringify(r),{u:c,v:u}=d(this,qe).layout.period(),h=l((m,g)=>g===null?m:(m%g+g)%g,"within");if(o!==(d(this,ea).get(e)??null)&&(d(this,jt).setWalker(e,r),o===null?d(this,ea).delete(e):d(this,ea).set(e,o)),r===null)return;let p=h(t[0],c),f=h(t[1],u);d(this,jt).placeWalker(e,[p,Math.max(0,d(this,qe).surfaceAt(p,f))+n,f],s),d(this,jt).fadeWalker(e,a)},"#drawFigure"),Zr=l(function(e){d(this,ea).delete(e)&&d(this,jt).setWalker(e,null)},"#takeAway"),T0=l(function(e){let t=e.flatMap(n=>{let s=d(this,Ts).get(n);return s===void 0?[]:[s]});return R(this,U,C0).call(this,t)},"#walkerMarker"),C0=l(function(e){return i0({city:null,units:e},d(this,li),d(this,Ri),d(this,mo),()=>0,d(this,mr))},"#unitsMarker"),R0=l(function({units:e}){return e.some(t=>d(this,ri).has(t))},"#awaitsPatch"),$l=l(function(e){let t=new Set;e.forEach(n=>{let s={...n,units:n.units.filter(r=>!d(this,Xt).attacking(r))};if(s.units.length>0&&R(this,U,R0).call(this,s)){d(this,In).set(s.id,s),s.units.forEach(r=>d(this,Cs).add(r)),R(this,U,uo).call(this,s);return}R(this,U,Zr).call(this,n.id),n.units.forEach(r=>d(this,Cs).delete(r)),R(this,U,P0).call(this,n.units,t)}),R(this,U,I0).call(this,t)},"#walksEnded"),P0=l(function(e,t){e.forEach(n=>{R(this,U,cr).call(this,n)&&!d(this,oi).has(n)||(d(this,Qr).get(n)?.forEach(s=>t.add(s)),d(this,Qr).delete(n),d(this,Ts).delete(n))})},"#release"),I0=l(function(e){let t=d(this,li);t!==null&&t!==(d(this,Ci)?.id??null)&&!d(this,Qt).walking(t)&&!d(this,Xt).attacking(t)&&R(this,U,ay).call(this,e),e.forEach(n=>{let[s,r]=n.split(",").map(Number);R(this,U,Ai).call(this,s,r)})},"#released"),sy=l(function(e){if(d(this,Xt).size()===0)return;if(Ss()||(d(this,es)?.speed()??"normal")==="off"){R(this,U,Zl).call(this,d(this,Xt).endAll(e));return}let{going:t,struck:n,ended:s}=d(this,Xt).at(e);n.forEach(r=>R(this,U,L0).call(this,r,!0)),t.forEach(r=>{if(!r.fallen&&d(this,Qt).walking(r.unit)){R(this,U,Zr).call(this,r.id);return}R(this,U,ry).call(this,r)}),R(this,U,D0).call(this,s)},"#placeBattles"),Zl=l(function({struck:e,ended:t}){e.forEach(n=>R(this,U,L0).call(this,n,!1)),R(this,U,D0).call(this,t)},"#battlesOver"),L0=l(function(e,t){let{square:n,units:s}=d(this,ai).get(e.id)??{square:"",units:[]},{x:r,y:a}=e.defenderSquare,o=[...d(this,ai).entries()].find(([p,f])=>p!==e.id&&f.square===n)?.[1],c=new Set((o?.units??this.world.get(r,a).units).map(({id:p})=>p)),u=e.won?e.defender:e.attacker,h=s.filter(({id:p})=>e.won&&p===e.defender||!c.has(p)&&!R(this,U,cr).call(this,p));d(this,ai).delete(e.id),d(this,ri).has(u)&&d(this,oi).add(u),t&&e.won&&h.length>0&&d(this,ta).set(e.id,h),R(this,U,Ai).call(this,r,a)},"#blow"),ry=l(function(e){let t=d(this,ta).get(e.battle);e.fallen&&t===void 0||R(this,U,A0).call(this,e,e.fallen?R(this,U,C0).call(this,t):R(this,U,T0).call(this,[e.unit]),e.opacity)},"#drawFighter"),D0=l(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:s,attacker:r,won:a,from:o,attackerSquare:c,facing:u}=n;if(R(this,U,Zr).call(this,`${s}-fallen`),d(this,ta).delete(s),d(this,ai).delete(s),d(this,ri).has(r)&&!R(this,U,cr).call(this,r))if(!a)d(this,oi).add(r);else{let h={id:s,units:[r],at:[o.at[0],o.at[1]],lift:o.lift,facing:u,from:c,before:c,to:c};d(this,In).set(s,h),d(this,Cs).add(r),R(this,U,uo).call(this,h);return}R(this,U,Zr).call(this,s),R(this,U,P0).call(this,[r],t)}),R(this,U,I0).call(this,t)},"#battlesEnded"),ay=l(function(e){let t=d(this,Ci);[d(this,ts),t?.tile].forEach(s=>{s&&e.add(`${s.x},${s.y}`)}),G(this,li,t?.id??null),G(this,ts,t?.tile??null),d(this,In).forEach(s=>R(this,U,uo).call(this,s));let n=d(this,ns);n!==null&&(G(this,ns,null),R(this,U,U0).call(this,n.x,n.y))},"#caughtUp"),Jr=l(function(){let e=d(this,li);return e!==null&&e!==(d(this,Ci)?.id??null)&&(d(this,Qt).walking(e)||d(this,Xt).attacking(e))},"#holding"),cd=l(function(){let e=d(this,li);e===null||!R(this,U,Jr).call(this)||(R(this,U,$l).call(this,d(this,Qt).endWhere(t=>t.includes(e),performance.now())),R(this,U,Zl).call(this,d(this,Xt).endWhere(({attacker:t})=>t===e,performance.now())),R(this,U,Gt).call(this))},"#hurry"),oy=l(function(){let e=d(this,ts),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===d(this,li));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),ly=l(function(e,t){if(R(this,U,Jr).call(this)){G(this,ns,{x:e,y:t});return}R(this,U,U0).call(this,e,t)},"#centreSoon"),cy=l(function(e){if(d(this,ri).forEach(({squares:n,after:s},r)=>{n.some(a=>(e.get(a)??0)>s)&&(d(this,ri).delete(r),d(this,oi).delete(r))}),d(this,In).size===0)return;let t=[...d(this,In).values()].filter(n=>!R(this,U,R0).call(this,n));t.forEach(n=>d(this,In).delete(n.id)),R(this,U,$l).call(this,t)},"#patched"),ud=l(function(e,t,n){let[s,r]=d(this,qe).layout.centre(t.x,t.y),[a,o]=d(this,qe).layout.centre(n.x,n.y),{u:c,v:u}=d(this,qe).layout.period(),h=l((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),p=h(a-s,c),f=h(o-r,u);p===0&&f===0||(d(this,Ti).delete(e),d(this,Ti).set(e,Math.round(Math.atan2(p,f)*1e3)/1e3),d(this,Ti).size>VT&&d(this,Ti).delete(d(this,Ti).keys().next().value),[t,n].forEach(({x:m,y:g})=>R(this,U,Ai).call(this,m,g)),R(this,U,Gt).call(this))},"#face"),ho=l(function(e,t,n){let s=d(this,Vt).clientWidth,r=d(this,Vt).clientHeight;if(s<=0||r<=0)return!1;let a=d(this,ns),o=a===null?d(this,Mt)?.to??d(this,lt):{...d(this,Mt)?.to??d(this,lt),focus:d(this,qe).layout.centre(a.x,a.y)},[c,u]=d(this,qe).layout.centre(e,t),{u:h,v:p}=R(this,U,ur).call(this),[f,m]=o.focus,g=l((w,L,I)=>I===null?w:w+I*Math.round((L-w)/I),"nearest"),y=[g(c,f,h),Math.max(0,d(this,qe).heightAt(c,u)),g(u,m,p)],x=s/r,_=d(this,Pn)??0,S=Mm(o,_,y,x),A=Mm(o,_,[y[0]+Math.cos(o.yaw),y[1],y[2]+Math.sin(o.yaw)],x);if(S===null||A===null)return!1;let E=(S[0]+1)/2*s,P=(1-S[1])/2*r,C=Math.abs(A[0]-S[0])*(s/2),v=(n+.5)*C;return E>=v&&E<=s-v&&P>=v&&P<=r-v&&!d(this,tc).some(({left:w,top:L,right:I,bottom:F})=>E>=w-C/2&&E<=I+C/2&&P>=L-C/2&&P<=F+C/2)},"#visible"),Jl=l(function(e,t){let n=d(this,Vt).clientWidth,s=d(this,Vt).clientHeight;if(n<=0||s<=0)return null;let r=Xv(d(this,lt),d(this,Pn)??0,[e/n*2-1,1-t/s*2],n/s,(p,f)=>d(this,qe).heightAt(p,f));if(r===null)return null;let[a,o]=d(this,qe).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(R(this,U,ur).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),uy=l(function(e,t){let n=R(this,U,Jl).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=d(this,is);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&d(this,$n).click(this.portal,n)},"#clicked"),hy=l(function(e,t,n,s,r){let a=d(this,Ci),o=R(this,U,Jl).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),d(this,$n).menu(this.portal,n,s,a,o,d(this,cc),r),!0)},"#menu"),dy=l(function(e){let t=e===null||d(this,Mo)||d(this,$n).menuOpen()?null:R(this,U,Jl).call(this,e.x,e.y),n=d(this,fr);if(t===null||e===null){d(this,Zn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}d(this,Zn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,R(this,U,N0).call(this,r)},ZT),G(this,fr,r),document.addEventListener("keydown",d(this,Zn),!0)},"#hovered"),N0=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===d(this,Vt),n=t?R(this,U,Jl).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){d(this,Zn).call(this);return}let s=d(this,$n).tooltip(d(this,Vt),n,d(this,Rs),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&d(this,$n).endTooltip(d(this,Vt)),e.open=s},"#showHover"),hd=l(function(){return[...d(this,lt).focus]},"#focus"),fy=l(function(){let[e,t]=d(this,qe).layout.tileAt(...d(this,lt).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:R(this,U,ur).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),U0=l(function(e,t){let[n,s]=d(this,qe).layout.centre(e,t),[r,a]=(d(this,Mt)?.to??d(this,lt)).focus;if(n===r&&s===a)return;let o={...d(this,Mt)?.to??d(this,lt),focus:[n,s]},{u:c,v:u}=R(this,U,ur).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[p,f]=d(this,lt).focus,m=Math.hypot(h(n-p,c),h(s-f,u));if(!d(this,ac)||m>d(this,lt).distance*1.5){G(this,ac,!0),this.setOrbit(o);return}R(this,U,jl).call(this,o)},"#centreOn"),Kl=l(function(e){return C_(zr(e),R(this,U,ur).call(this),d(this,qe).extentV())},"#settle"),ur=l(function(){let e=d(this,qe).layout.period();return this.portal?.lockVerticalEdges()??d(this,rc)?{u:e.u,v:null}:e},"#period"),jl=l(function(e,t=R(this,U,w0).call(this)+ey(e.yaw-(d(this,Mt)?.to??d(this,lt)).yaw)){d(this,Zn).call(this),typeof requestAnimationFrame!="function"||Ss()?(G(this,Mt,null),G(this,lt,R(this,U,Kl).call(this,e))):G(this,Mt,{from:d(this,lt),to:e,started:null,turn:t,drawn:0}),R(this,U,Gt).call(this)},"#moveTo"),py=l(function(e){let t=d(this,Mt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/HT);return t.drawn=n*n*(3-2*n),G(this,lt,R(this,U,Kl).call(this,R_(t.from,t.to,n,R(this,U,ur).call(this),t.turn))),n>=1&&G(this,Mt,null),n<1},"#moveCamera"),my=l(function(e){let[t,n]=d(this,lt).focus,s=Math.max(0,d(this,qe).heightAt(t,n));return!e||d(this,Pn)===null||Ss()?(G(this,Pn,s),!1):(G(this,Pn,d(this,Pn)+(s-d(this,Pn))*$T),Math.abs(s-d(this,Pn))<.002?(G(this,Pn,s),!1):!0)},"#followHeight"),F0=l(function(){let e=[...d(this,pr).values()].map(({x:c,y:u})=>[c,u]),t=this.world.tiles(),n=t!==d(this,na)||t.length!==d(this,bo);G(this,na,t),G(this,bo,t.length),d(this,pr).clear();let s=R(this,U,xy).call(this,d(this,qe).changed(e,...R(this,U,hd).call(this),n)),r=new Set(e.map(([c,u])=>`${c},${u}`)),a=new Map([...r].map(c=>[c,d(this,xo).get(c)??0]));d(this,xo).clear(),e.forEach(([c,u])=>R(this,U,Ai).call(this,c,u)),s.forEach(([c,u])=>{let h=`${c},${u}`;!n&&!r.has(h)&&d(this,Ps).has(h)&&R(this,U,Ai).call(this,c,u)}),R(this,U,gy).call(this,e,s);let o=d(this,fr);o!==null&&o.open&&e.some(([c,u])=>c===o.x&&u===o.y)&&R(this,U,N0).call(this,o),(e.length>0||n)&&G(this,vo,!0),n&&(G(this,ss,!0),d(this,Ps).forEach((c,u)=>{let[h,p]=u.split(",").map(Number);R(this,U,Ai).call(this,h,p)})),e.length>0&&R(this,U,cy).call(this,a)},"#takeTiles"),Ai=l(function(e,t){let n=`${e},${t}`,s=this.world.get(e,t),r=d(this,Xt).awaitingBlow({x:e,y:t}),a=r===null?void 0:d(this,ai).get(r.id),o=a===void 0?s.units:[...a.units,...s.units.filter(({id:y})=>!a.units.some(x=>x.id===y))];s.units.filter(({id:y})=>R(this,U,cr).call(this,y)&&!d(this,oi).has(y)).forEach(y=>{let x=d(this,Qr).get(y.id)??new Set;x.add(n),d(this,Qr).set(y.id,x),d(this,Ts).set(y.id,y)});let u=i0(a===void 0&&!o.some(({id:y})=>R(this,U,cr).call(this,y))?s:{city:a===void 0?s.city:a.city,units:o.filter(({id:y})=>!R(this,U,cr).call(this,y))},d(this,li),d(this,Ri),d(this,mo),y=>d(this,Ti).get(y.id)??0,d(this,mr)),[h,p]=d(this,qe).layout.centre(e,t),f=[h,Math.max(0,d(this,qe).surfaceAt(h,p)),p],m=u===null?null:JSON.stringify([u,f]);m!==(d(this,Ps).get(n)??null)&&(d(this,jt).setMarker(n,f,u),R(this,U,vy).call(this,n,m))},"#mark"),gy=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,s])=>d(this,ra).delete(`${n},${s}`)),t.forEach(([n,s])=>d(this,ra).delete(`${n},${s}`)),G(this,ss,!0))},"#yieldsChanged"),xy=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([s,r])=>{n.set(`${s},${r}`,[s,r]),t.directions().forEach(a=>{let o=t.neighbour(s,r,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),_y=l(function(){if(!d(this,ia)){d(this,sa)&&(d(this,jt).setYields(null),G(this,sa,!1));return}if(!d(this,ss)&&d(this,sa))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,s=Zv(t,Jv(t)),r=d(this,ra).get(n);if(r===void 0||r.of!==s){let[a,o]=d(this,qe).layout.centre(t.x,t.y);r={of:s,laid:s.length===0?null:jv({at:[a,Math.max(0,d(this,qe).surfaceAt(a,o)),o],yields:s},d(this,dc))},d(this,ra).set(n,r)}r.laid!==null&&e.push(r.laid)}),d(this,jt).setYields(Qv(e)),G(this,ss,!1),G(this,sa,!0)},"#showYields"),vy=l(function(e,t){t===null?d(this,Ps).delete(e):d(this,Ps).set(e,t)},"#remember"),Ql=l(function(){let e=new Set(d(this,Ps).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);R(this,U,Ai).call(this,n,s)})},"#markAll"),O0=l(function(e){let t=performance.now(),n=R(this,U,py).call(this,t),[s,r]=R(this,U,hd).call(this);R(this,U,F0).call(this),R(this,U,iy).call(this,t),R(this,U,sy).call(this,t),`${s},${r}`!==d(this,ic)&&(G(this,ic,`${s},${r}`),d(this,qe).refocus(s,r)),d(this,qe).build(d(this,jt),e);let a=R(this,U,my).call(this,e!==null);R(this,U,_y).call(this),d(this,jt).view(d(this,lt),d(this,Pn)??0,R(this,U,ur).call(this)),d(this,jt).render(),R(this,U,yy).call(this),R(this,U,B0).call(this),G(this,nc,performance.now()-t),R(this,U,Sy).call(this),(d(this,qe).pending()>0||d(this,qe).overlaysPending()>0||d(this,Qt).size()>0||d(this,Xt).size()>0||n||a)&&R(this,U,Gt).call(this)},"#frameDrawn"),yy=l(function(){let e=d(this,_o);if(e===null)return;d(this,vo)&&(G(this,vo,!1),e.redraw());let t=R(this,U,Jr).call(this)?d(this,ts):d(this,Ci)?.tile??null;e.show(R(this,U,by).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),by=l(function(){let e=d(this,Vt).clientWidth,t=d(this,Vt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=d(this,Pn)??0,r=Hh(d(this,lt).distance).far,[a,o]=d(this,lt).focus,c=l((h,p)=>{for(let f=p;f>=-1;f-=.05){let m=Ya(d(this,lt),s,[h,f],n);if(m!==null){let g=Math.hypot(m[0]-a,m[1]-o),y=g>r?r/g:1;return[a+(m[0]-a)*y,o+(m[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),B0=l(function(e=!1){let t=(e?d(this,Mt)?.to??d(this,lt):d(this,lt)).distance,n=l(()=>{d(this,hr)!==null&&clearTimeout(d(this,hr)),G(this,hr,null),G(this,po,null)},"stop"),s=l(()=>{n(),G(this,jr,t),d(this,sc).set(t)},"keep");if(e){n(),t!==d(this,jr)&&s();return}if(d(this,Mt)!==null||t===d(this,jr)){n();return}d(this,hr)!==null&&t===d(this,po)||(n(),G(this,po,t),G(this,hr,setTimeout(s,YT)))},"#keepDistance"),Gt=l(function(){if(!d(this,aa)){if(typeof requestAnimationFrame!="function"){R(this,U,O0).call(this,null);return}d(this,Is)===null&&G(this,Is,requestAnimationFrame(()=>{G(this,Is,null),R(this,U,O0).call(this,GT)}))}},"#draw"),My=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),Sy=l(function(){if(d(this,Kr)===null)return;let{drawCalls:e,triangles:t,geometries:n}=d(this,jt).stats();d(this,Kr).textContent=[`frame ${d(this,nc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${d(this,qe).pending()}`].join(`
`)},"#showStats"),k0=l(function(){let e=d(this,Vt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===d(this,mc)||(G(this,mc,r),d(this,jt).resize(t,n,s),this.measureCovered(),d(this,jt).render())},"#resize"),l(z0,"MapView3D");var S0=z0,wy=S0;var JT={createMapView3D:l(i=>new wy(i),"createMapView3D")};globalThis[Q0]=JT;})();
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
