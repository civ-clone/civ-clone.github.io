"use strict";(()=>{var Tb=Object.create;var $d=Object.defineProperty;var Cb=Object.getOwnPropertyDescriptor;var Rb=Object.getOwnPropertyNames;var Pb=Object.getPrototypeOf,Ib=Object.prototype.hasOwnProperty;var Ug=i=>{throw TypeError(i)};var l=(i,e)=>$d(i,"name",{value:e,configurable:!0});var Lb=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Db=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Rb(e))!Ib.call(i,r)&&r!==t&&$d(i,r,{get:()=>e[r],enumerable:!(n=Cb(e,r))||n.enumerable});return i};var Nb=(i,e,t)=>(t=i!=null?Tb(Pb(i)):{},Db(e||!i||!i.__esModule?$d(t,"default",{value:i,enumerable:!0}):t,i));var Zd=(i,e,t)=>e.has(i)||Ug("Cannot "+t);var d=(i,e,t)=>(Zd(i,e,"read from private field"),t?t.call(i):e.get(i)),V=(i,e,t)=>e.has(i)?Ug("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),z=(i,e,t,n)=>(Zd(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),T=(i,e,t)=>(Zd(i,e,"access private method"),t);var mi=(i,e,t,n)=>({set _(r){z(i,e,r,t)},get _(){return d(i,e,n)}});var Og=Lb(Is=>{"use strict";var Oi,Hr=Is&&Is.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Is,"__esModule",{value:!0}),Is.EventEmitter=void 0;var Jd=class Jd{constructor(){Oi.set(this,{})}on(e,t){e in Hr(this,Oi,"f")||(Hr(this,Oi,"f")[e]=[]),Hr(this,Oi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Hr(this,Oi,"f")))return;let n=Hr(this,Oi,"f")[e].indexOf(t);n!==-1&&Hr(this,Oi,"f")[e].splice(n,1)}emit(e,...t){e in Hr(this,Oi,"f")&&Hr(this,Oi,"f")[e].forEach((n=>n(...t)))}};l(Jd,"i");var kc=Jd;Is.EventEmitter=kc,Oi=new WeakMap,Is.default=kc});var Fg="civMap3D";var Bg=Nb(Og());var Wr,Bi,va,jd=class jd extends Bg.EventEmitter{constructor(t,n){super();V(this,Wr);V(this,Bi);V(this,va);z(this,Bi,t),z(this,va,t.lockVerticalEdges),z(this,Wr,n)}center(){return d(this,Wr).centre()}isVisible(t,n,r=0){return d(this,Wr).visible(t,n,r)}lockVerticalEdges(){return d(this,va)}nativeTileSize(){return d(this,Bi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=d(this,Bi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return d(this,Bi).playerId}render(){d(this,Wr).changed()}scale(){return d(this,Bi).art.scale()}setCenter(t,n){d(this,Wr).centreOn(t,n)}setLockVerticalEdges(t){z(this,va,t)}setZoom(){}transport(){return d(this,Bi).transport}zoom(){return d(this,Bi).art.zoom()}};Wr=new WeakMap,Bi=new WeakMap,va=new WeakMap,l(jd,"MapPortal3D");var Kd=jd,kg=Kd;var Ub=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),zg=Ub;var fx=0,Pf=1,px=2;var vl=1,ah=2,Ja=3,as=0,Sn=1,ti=2,Os=0,Ka=1,If=2,Lf=3,Df=4,mx=5;var Bs=100,gx=101,xx=102,_x=103,vx=104,yx=200,bx=201,Mx=202,Sx=203,Nf=204,Uf=205,wx=206,Ex=207,Ax=208,Tx=209,Cx=210,Rx=211,Px=212,Ix=213,Lx=214,hu=0,du=1,fu=2,za=3,pu=4,mu=5,gu=6,xu=7,Ff=0,Dx=1,Nx=2,Yi=0,Of=1,Bf=2,kf=3,yl=4,zf=5,Gf=6,Vf=7;var Hf=300,ks=301,ja=302,oh=303,lh=304,zi=1e3,Qn=1001,_u=1002,Vt=1003,Ux=1004;var bl=1005;var Ht=1006,ch=1007;var On=1008;var hn=1009,Wf=1010,Xf=1011,Qa=1012,uh=1013,yi=1014,bi=1015,Bn=1016,hh=1017,dh=1018,zs=1020,qf=35902,Yf=35899,$f=1021,Zf=1022,kn=1023,Mr=1026,Cr=1027,Jf=1028,fh=1029,$i=1030,ph=1031;var mh=1033,Ml=33776,Sl=33777,wl=33778,El=33779,gh=35840,xh=35841,_h=35842,vh=35843,yh=36196,bh=37492,Mh=37496,Sh=37488,wh=37489,Al=37490,Eh=37491,Ah=37808,Th=37809,Ch=37810,Rh=37811,Ph=37812,Ih=37813,Lh=37814,Dh=37815,Nh=37816,Uh=37817,Fh=37818,Oh=37819,Bh=37820,kh=37821,zh=36492,Gh=36494,Vh=36495,Hh=36283,Wh=36284,Tl=36285,Xh=36286;var Ko=2300,vu=2301,cu=2302,Sf=2303,wf=2400,Ef=2401,Af=2402;var Fx=3200;var qh=0,Ox=1,Mi="",Gt="srgb",jo="srgb-linear",Qo="linear",xt="srgb";var uu=7680;var Bx=519,kx=512,zx=513,Gx=514,Kf=515,Vx=516,Hx=517,jf=518,Qf=519,ep=35044;var tp="300 es",ei=2e3,Ga=2001;function Fb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(Fb,"arrayNeedsUint32");function Ob(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(Ob,"isTypedArray");function el(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(el,"createElementNS");function Wx(){let i=el("canvas");return i.style.display="block",i}l(Wx,"createCanvasElement");var Gg={},Va=null;function tl(...i){let e="THREE."+i.shift();Va?Va("log",e,...i):console.log(e,...i)}l(tl,"log");function Xx(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(Xx,"enhanceLogMessage");function qe(...i){i=Xx(i);let e="THREE."+i.shift();if(Va)Va("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(qe,"warn");function Ye(...i){i=Xx(i);let e="THREE."+i.shift();if(Va)Va("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(Ye,"error");function Zo(...i){let e=i.join(" ");e in Gg||(Gg[e]=!0,qe(...i))}l(Zo,"warnOnce");function qx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(qx,"probeAsync");var Yx={[hu]:hu,[fu]:gu,[pu]:pu,[za]:mu,[du]:du,[gu]:fu,[xu]:xu,[mu]:za},ap=class ap{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(ap,"EventDispatcher");var Gi=ap,cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qd=Math.PI/180,yu=180/Math.PI;function Gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}l(Gs,"generateUUID");function dt(i,e,t){return Math.max(e,Math.min(t,i))}l(dt,"clamp");function Bb(i,e){return(i%e+e)%e}l(Bb,"euclideanModulo");function ef(i,e,t){return(1-t)*i+t*e}l(ef,"lerp");function $x(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l($x,"floorPowerOfTwo");function Yh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Yh,"getNormalizationScale");function Zx(i,e){if(e.constructor===Float32Array)return i;let t=Yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(Zx,"denormalize");function Jx(i,e){if(e.constructor===Float32Array)return i;let t=Yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(Jx,"normalize");var Vu=class Vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Vu,"Vector2"),Vu.prototype.isVector2=!0;var He=Vu,op=class op{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],p=n[r+3],f=s[a+0],m=s[a+1],g=s[a+2],y=s[a+3];if(p!==y||c!==f||u!==m||h!==g){let x=c*f+u*m+h*g+p*y;x<0&&(f=-f,m=-m,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let b=Math.acos(x),A=Math.sin(b);_=Math.sin(_*b)/A,o=Math.sin(o*b)/A,c=c*_+f*o,u=u*_+m*o,h=h*_+g*o,p=p*_+y*o}else{c=c*_+f*o,u=u*_+m*o,h=h*_+g*o,p=p*_+y*o;let b=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=b,u*=b,h*=b,p*=b}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],p=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*p+c*m-u*f,e[t+1]=c*g+h*f+u*p-o*m,e[t+2]=u*g+h*m+o*f-c*p,e[t+3]=h*g-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),p=o(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"YXZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"ZXY":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"ZYX":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"YZX":this._x=f*h*p+u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p-f*m*g;break;case"XZY":this._x=f*h*p-u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p+f*m*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(op,"Quaternion");var yn=op,Hu=class Hu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*u+a*p-o*h,this.y=n+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Hu,"Vector3"),Hu.prototype.isVector3=!0;var W=Hu,tf=new W,Vg=new yn,Wu=class Wu{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],g=n[8],y=r[0],x=r[3],_=r[6],b=r[1],A=r[4],w=r[7],R=r[2],C=r[5],v=r[8];return s[0]=a*y+o*b+c*R,s[3]=a*x+o*A+c*C,s[6]=a*_+o*w+c*v,s[1]=u*y+h*b+p*R,s[4]=u*x+h*A+p*C,s[7]=u*_+h*w+p*v,s[2]=f*y+m*b+g*R,s[5]=f*x+m*A+g*C,s[8]=f*_+m*w+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,g=t*p+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=p*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Zo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nf.makeScale(e,t)),this}rotate(e){return Zo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return Zo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Wu,"Matrix3"),Wu.prototype.isMatrix3=!0;var $e=Wu,nf=new $e,Hg=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wg=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){let i={enabled:!0,workingColorSpace:jo,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=ka(r.r),r.g=ka(r.g),r.b=ka(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===Mi?Qo:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jo]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:Hg,fromXYZ:Wg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Hg,fromXYZ:Wg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}l(kb,"createColorManagement");var ht=kb();function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(br,"SRGBToLinear");function ka(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(ka,"LinearToSRGB");var ya,lp=class lp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ya===void 0&&(ya=el("canvas")),ya.width=e.width,ya.height=e.height;let r=ya.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ya}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=el("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=br(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(lp,"ImageUtils");var bu=lp,zb=0,cp=class cp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(rf(r[a].image)):s.push(rf(r[a]))}else s=rf(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(cp,"TextureSource");var Ha=cp;function rf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}l(rf,"serializeImage");var Gb=0,sf=new W,Oa=class Oa extends Gi{constructor(e=Oa.DEFAULT_IMAGE,t=Oa.DEFAULT_MAPPING,n=Qn,r=Qn,s=Ht,a=On,o=kn,c=hn,u=Oa.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Gs(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sf).x}get height(){return this.source.getSize(sf).y}get depth(){return this.source.getSize(sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case _u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case _u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Oa,"Texture");var bn=Oa;bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Hf;bn.DEFAULT_ANISOTROPY=1;var Xu=class Xu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,w=(m+1)/2,R=(_+1)/2,C=(h+f)/4,v=(p+y)/4,S=(g+x)/4;return A>w&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=C/n,s=v/n):w>R?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=C/r,s=S/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=v/s,r=S/s),this.set(n,r,s,t),this}let b=Math.sqrt((x-g)*(x-g)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(x-g)/b,this.y=(p-y)/b,this.z=(f-h)/b,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Xu,"Vector4"),Xu.prototype.isVector4=!0;var Dt=Xu,up=class up extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new bn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ha(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(up,"RenderTarget");var Mu=up,hp=class hp extends Mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(hp,"WebGLRenderTarget");var Nn=hp,dp=class dp extends bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(dp,"DataArrayTexture");var Fs=dp;var fp=class fp extends bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(fp,"Data3DTexture");var Su=fp;var Jo=class Jo{constructor(e,t,n,r,s,a,o,c,u,h,p,f,m,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,p,f,m,g,y,x)}set(e,t,n,r,s,a,o,c,u,h,p,f,m,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=p,_[14]=f,_[3]=m,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ba.setFromMatrixColumn(e,0).length(),s=1/ba.setFromMatrixColumn(e,1).length(),a=1/ba.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=a*h,m=a*p,g=o*h,y=o*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+g*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=g+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*p,g=u*h,y=u*p;t[0]=f+y*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*p,g=u*h,y=u*p;t[0]=f-y*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*p,g=o*h,y=o*p;t[0]=c*h,t[4]=g*u-m,t[8]=f*u+y,t[1]=c*p,t[5]=y*u+f,t[9]=m*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-f*p,t[8]=g*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*p+g,t[10]=f-y*p}else if(e.order==="XZY"){let f=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+y,t[5]=a*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*h,t[10]=y*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vb,e,Hb)}lookAt(e,t,n){let r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xr.crossVectors(n,Ln),Xr.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xr.crossVectors(n,Ln)),Xr.normalize(),zc.crossVectors(Ln,Xr),r[0]=Xr.x,r[4]=zc.x,r[8]=Ln.x,r[1]=Xr.y,r[5]=zc.y,r[9]=Ln.y,r[2]=Xr.z,r[6]=zc.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],g=n[2],y=n[6],x=n[10],_=n[14],b=n[3],A=n[7],w=n[11],R=n[15],C=r[0],v=r[4],S=r[8],L=r[12],I=r[1],F=r[5],G=r[9],J=r[13],U=r[2],q=r[6],ie=r[10],O=r[14],K=r[3],H=r[7],Z=r[11],j=r[15];return s[0]=a*C+o*I+c*U+u*K,s[4]=a*v+o*F+c*q+u*H,s[8]=a*S+o*G+c*ie+u*Z,s[12]=a*L+o*J+c*O+u*j,s[1]=h*C+p*I+f*U+m*K,s[5]=h*v+p*F+f*q+m*H,s[9]=h*S+p*G+f*ie+m*Z,s[13]=h*L+p*J+f*O+m*j,s[2]=g*C+y*I+x*U+_*K,s[6]=g*v+y*F+x*q+_*H,s[10]=g*S+y*G+x*ie+_*Z,s[14]=g*L+y*J+x*O+_*j,s[3]=b*C+A*I+w*U+R*K,s[7]=b*v+A*F+w*q+R*H,s[11]=b*S+A*G+w*ie+R*Z,s[15]=b*L+A*J+w*O+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],g=e[3],y=e[7],x=e[11],_=e[15],b=c*m-u*f,A=o*m-u*p,w=o*f-c*p,R=a*m-u*h,C=a*f-c*h,v=a*p-o*h;return t*(y*b-x*A+_*w)-n*(g*b-x*R+_*C)+r*(g*A-y*R+_*v)-s*(g*w-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],g=e[12],y=e[13],x=e[14],_=e[15],b=t*o-n*a,A=t*c-r*a,w=t*u-s*a,R=n*c-r*o,C=n*u-s*o,v=r*u-s*c,S=h*y-p*g,L=h*x-f*g,I=h*_-m*g,F=p*x-f*y,G=p*_-m*y,J=f*_-m*x,U=b*J-A*G+w*F+R*I-C*L+v*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/U;return e[0]=(o*J-c*G+u*F)*q,e[1]=(r*G-n*J-s*F)*q,e[2]=(y*v-x*C+_*R)*q,e[3]=(f*C-p*v-m*R)*q,e[4]=(c*I-a*J-u*L)*q,e[5]=(t*J-r*I+s*L)*q,e[6]=(x*w-g*v-_*A)*q,e[7]=(h*v-f*w+m*A)*q,e[8]=(a*G-o*I+u*S)*q,e[9]=(n*I-t*G-s*S)*q,e[10]=(g*C-y*w+_*b)*q,e[11]=(p*w-h*C-m*b)*q,e[12]=(o*L-a*F-c*S)*q,e[13]=(t*F-n*L+r*S)*q,e[14]=(y*A-g*R-x*b)*q,e[15]=(h*R-p*A+f*b)*q,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,g=s*p,y=a*h,x=a*p,_=o*p,b=c*u,A=c*h,w=c*p,R=n.x,C=n.y,v=n.z;return r[0]=(1-(y+_))*R,r[1]=(m+w)*R,r[2]=(g-A)*R,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(f+_))*C,r[6]=(x+b)*C,r[7]=0,r[8]=(g+A)*v,r[9]=(x-b)*v,r[10]=(1-(f+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ba.set(r[0],r[1],r[2]).length(),o=ba.set(r[4],r[5],r[6]).length(),c=ba.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gi.copy(this);let u=1/a,h=1/o,p=1/c;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,t.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=ei,c=!1){let u=this.elements,h=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===ei)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Ga)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ei,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===ei)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Ga)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Jo,"Matrix4"),Jo.prototype.isMatrix4=!0;var vt=Jo,ba=new W,gi=new vt,Vb=new W(0,0,0),Hb=new W(1,1,1),Xr=new W,zc=new W,Ln=new W,Xg=new vt,qg=new yn,qu=class qu{constructor(e=0,t=0,n=0,r=qu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(qu,"Euler");var Un=qu;Un.DEFAULT_ORDER="XYZ";var pp=class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(pp,"Layers");var nl=pp,Wb=0,Yg=new W,Ma=new yn,pr=new vt,Gc=new W,Vo=new W,Xb=new W,qb=new yn,$g=new W(1,0,0),Zg=new W(0,1,0),Jg=new W(0,0,1),Kg={type:"added"},Yb={type:"removed"},Sa={type:"childadded",child:null},af={type:"childremoved",child:null},Ba=class Ba extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ba.DEFAULT_UP.clone();let e=new W,t=new Un,n=new yn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new $e}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ba.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ba.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,t){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gc.copy(e):Gc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Vo,Gc,this.up):pr.lookAt(Gc,Vo,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),Ma.setFromRotationMatrix(pr),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kg),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yb),af.child=e,this.dispatchEvent(af),af.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kg),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Xb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,qb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Ba,"Object3D");var rn=Ba;rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mp=class mp extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(mp,"Group");var nn=mp,$b={type:"move"},gp=class gp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($b)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(gp,"WebXRController");var Wa=gp,Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function of(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(of,"hue2rgb");var xp=class xp{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=Bb(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=of(a,s,e+1/3),this.g=of(a,s,e),this.b=of(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Kx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ht.workingToColorSpace(un.copy(this),e),Math.round(dt(un.r*255,0,255))*65536+Math.round(dt(un.g*255,0,255))*256+Math.round(dt(un.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(un.copy(this),t);let n=un.r,r=un.g,s=un.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Gt){ht.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,r=un.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Vc);let n=ef(qr.h,Vc.h,t),r=ef(qr.s,Vc.s,t),s=ef(qr.l,Vc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(xp,"Color");var Be=xp,un=new Be;Be.NAMES=Kx;var Yu=class Yu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new Yu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Yu,"Fog");var il=Yu,_p=class _p extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(_p,"Scene");var rl=_p,xi=new W,mr=new W,lf=new W,gr=new W,wa=new W,Ea=new W,jg=new W,cf=new W,uf=new W,hf=new W,df=new Dt,ff=new Dt,pf=new Dt,Jr=class Jr{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xi.subVectors(e,t),r.cross(xi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xi.subVectors(r,t),mr.subVectors(n,t),lf.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(mr),c=xi.dot(lf),u=mr.dot(mr),h=mr.dot(lf),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;let f=1/p,m=(u*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,gr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gr.x),c.addScaledVector(a,gr.y),c.addScaledVector(o,gr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return df.setScalar(0),ff.setScalar(0),pf.setScalar(0),df.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,n),pf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(df,s.x),a.addScaledVector(ff,s.y),a.addScaledVector(pf,s.z),a}static isFrontFacing(e,t,n,r){return xi.subVectors(n,t),mr.subVectors(e,t),xi.cross(mr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),xi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;wa.subVectors(r,n),Ea.subVectors(s,n),cf.subVectors(e,n);let c=wa.dot(cf),u=Ea.dot(cf);if(c<=0&&u<=0)return t.copy(n);uf.subVectors(e,r);let h=wa.dot(uf),p=Ea.dot(uf);if(h>=0&&p<=h)return t.copy(r);let f=c*p-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(wa,a);hf.subVectors(e,s);let m=wa.dot(hf),g=Ea.dot(hf);if(g>=0&&m<=g)return t.copy(s);let y=m*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Ea,o);let x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return jg.subVectors(s,r),o=(p-h)/(p-h+(m-g)),t.copy(r).addScaledVector(jg,o);let _=1/(x+y+f);return a=y*_,o=f*_,t.copy(n).addScaledVector(wa,a).addScaledVector(Ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(Jr,"Triangle");var vr=Jr,vp=class vp{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hc.copy(n.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Wc.subVectors(this.max,Ho),Aa.subVectors(e.a,Ho),Ta.subVectors(e.b,Ho),Ca.subVectors(e.c,Ho),Yr.subVectors(Ta,Aa),$r.subVectors(Ca,Ta),Ls.subVectors(Aa,Ca);let t=[0,-Yr.z,Yr.y,0,-$r.z,$r.y,0,-Ls.z,Ls.y,Yr.z,0,-Yr.x,$r.z,0,-$r.x,Ls.z,0,-Ls.x,-Yr.y,Yr.x,0,-$r.y,$r.x,0,-Ls.y,Ls.x,0];return!mf(t,Aa,Ta,Ca,Wc)||(t=[1,0,0,0,1,0,0,0,1],!mf(t,Aa,Ta,Ca,Wc))?!1:(Xc.crossVectors(Yr,$r),t=[Xc.x,Xc.y,Xc.z],mf(t,Aa,Ta,Ca,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(vp,"Box3");var jr=vp,xr=[new W,new W,new W,new W,new W,new W,new W,new W],_i=new W,Hc=new jr,Aa=new W,Ta=new W,Ca=new W,Yr=new W,$r=new W,Ls=new W,Ho=new W,Wc=new W,Xc=new W,Ds=new W;function mf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ds.fromArray(i,s);let o=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),c=e.dot(Ds),u=t.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(mf,"satForAxes");var yr=Zb();function Zb(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(Zb,"_generateTables");function Jb(i){Math.abs(i)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),i=dt(i,-65504,65504),yr.floatView[0]=i;let e=yr.uint32View[0],t=e>>23&511;return yr.baseTable[t]+((e&8388607)>>yr.shiftTable[t])}l(Jb,"toHalfFloat");function Kb(i){let e=i>>10;return yr.uint32View[0]=yr.mantissaTable[yr.offsetTable[e]+(i&1023)]+yr.exponentTable[e],yr.floatView[0]}l(Kb,"fromHalfFloat");var yp=class yp{static toHalfFloat(e){return Jb(e)}static fromHalfFloat(e){return Kb(e)}};l(yp,"DataUtils");var Vi=yp,zt=new W,qc=new He,jb=0,bp=class bp extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ep,this.updateRanges=[],this.gpuType=bi,this.version=0,this._normalizationScale=e!==void 0?Yh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qc.fromBufferAttribute(this,t),qc.applyMatrix3(e),this.setXY(t,qc.x,qc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zx(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jx(e,this.array)}};l(bp,"BufferAttribute");var bt=bp;var Mp=class Mp extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Mp,"Uint16BufferAttribute");var sl=Mp;var Sp=class Sp extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Sp,"Uint32BufferAttribute");var al=Sp;var wp=class wp extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(wp,"Float32BufferAttribute");var Pt=wp,Qb=new jr,Wo=new W,gf=new W,Ep=class Ep{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qb.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Wo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(gf)),this.expandByPoint(Wo.copy(e.center).sub(gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Ep,"Sphere");var Xa=Ep,eM=0,jn=new vt,xf=new rn,Ra=new W,Dn=new jr,Xo=new jr,Jt=new W,$u=class $u extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fb(e)?al:sl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ra).negate(),this.translate(Ra.x,Ra.y,Ra.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xo.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Dn.min,Xo.min),Dn.expandByPoint(Jt),Jt.addVectors(Dn.max,Xo.max),Dn.expandByPoint(Jt)):(Dn.expandByPoint(Xo.min),Dn.expandByPoint(Xo.max))}Dn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Jt.fromBufferAttribute(o,u),c&&(Ra.fromBufferAttribute(e,u),Jt.add(Ra)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new W,c[L]=new W;let h=new W,p=new W,f=new W,m=new He,g=new He,y=new He,x=new W,_=new W;function b(L,I,F){u[L]=u[I]=u[F]=1,h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,I),f.fromBufferAttribute(n,F),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,I),y.fromBufferAttribute(s,F),p.sub(h),f.sub(h),g.sub(m),y.sub(m);let G=1/(g.x*y.y-y.x*g.y);isFinite(G)&&(x.copy(p).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(G),_.copy(f).multiplyScalar(g.x).addScaledVector(p,-y.x).multiplyScalar(G),o[L].add(x),o[I].add(x),o[F].add(x),c[L].add(_),c[I].add(_),c[F].add(_))}l(b,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,I=A.length;L<I;++L){let F=A[L],G=F.start,J=F.count;for(let U=G,q=G+J;U<q;U+=3)b(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let w=new W,R=new W,C=new W,v=new W;function S(L){C.fromBufferAttribute(r,L),v.copy(C);let I=o[L];w.copy(I),w.sub(C.multiplyScalar(C.dot(I))).normalize(),R.crossVectors(v,I);let G=R.dot(c[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,G)}l(S,"handleVertex");for(let L=0,I=n.count;L<I;++L)u[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,p=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),y=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h),m=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let _=0;_<h;_++)f[g++]=u[m++]}return new bt(f,h,p)}if(l(e,"convertBufferAttribute"),this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new $u,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){let f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l($u,"BufferGeometry");var Ft=$u,Ap=class Ap{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ep,this.updateRanges=[],this.version=0,this.uuid=Gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Ap,"InterleavedBuffer");var ol=Ap;function Qg(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Gs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(Qg,"getArrayKey");var _n=new W,Zu=class Zu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?Yh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zx(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jx(e,this.data.array)}};l(Zu,"InterleavedBufferAttribute");var qa=Zu,_f=new W,tM=new W,nM=new $e,Tp=class Tp{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_f.subVectors(n,t).cross(tM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(_f),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nM.getNormalMatrix(e),r=this.coplanarPoint(_f).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Tp,"Plane");var An=Tp,iM=0,Cp=class Cp extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ka,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Uf,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uu,this.stencilZFail=uu,this.stencilZPass=uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Cp,"Material");var Sr=Cp,Rp=class Rp extends Sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Rp,"SpriteMaterial");var Qr=Rp,Pa,qo=new W,Ia=new W,La=new W,Da=new He,Yo=new He,jx=new vt,Yc=new W,$o=new W,$c=new W,ex=new He,vf=new He,tx=new He,Pp=class Pp extends rn{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",Pa===void 0){Pa=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ol(t,5);Pa.setIndex([0,1,2,0,2,3]),Pa.setAttribute("position",new qa(n,3,0,!1)),Pa.setAttribute("uv",new qa(n,2,3,!1))}this.geometry=Pa,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ia.setFromMatrixScale(this.matrixWorld),jx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),La.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ia.multiplyScalar(-La.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Zc(Yc.set(-.5,-.5,0),La,a,Ia,r,s),Zc($o.set(.5,-.5,0),La,a,Ia,r,s),Zc($c.set(.5,.5,0),La,a,Ia,r,s),ex.set(0,0),vf.set(1,0),tx.set(1,1);let o=e.ray.intersectTriangle(Yc,$o,$c,!1,qo);if(o===null&&(Zc($o.set(-.5,.5,0),La,a,Ia,r,s),vf.set(0,1),o=e.ray.intersectTriangle(Yc,$c,$o,!1,qo),o===null))return;let c=e.ray.origin.distanceTo(qo);c<e.near||c>e.far||t.push({distance:c,point:qo.clone(),uv:vr.getInterpolation(qo,Yc,$o,$c,ex,vf,tx,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Pp,"Sprite");var wr=Pp;function Zc(i,e,t,n,r,s){Da.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Yo.x=s*Da.x-r*Da.y,Yo.y=r*Da.x+s*Da.y):Yo.copy(Da),i.copy(e),i.x+=Yo.x,i.y+=Yo.y,i.applyMatrix4(jx)}l(Zc,"transformVertex");var _r=new W,yf=new W,Jc=new W,Kc=new W,Ip=class Ip{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yf.copy(e).add(t).multiplyScalar(.5),Jc.copy(t).sub(e).normalize(),Kc.copy(this.origin).sub(yf);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Jc),o=Kc.dot(this.direction),c=-Kc.dot(Jc),u=Kc.lengthSq(),h=Math.abs(1-a*a),p,f,m,g;if(h>0)if(p=a*c-o,f=a*o-c,g=s*h,p>=0)if(f>=-g)if(f<=g){let y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-g?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(yf).addScaledVector(Jc,f),m}intersectSphere(e,t){if(e.radius<0)return null;_r.subVectors(e.center,this.origin);let n=_r.dot(this.direction),r=_r.dot(_r)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,b=n.y-a.y,A=n.z-a.z,w=Math.abs(c),R=Math.abs(u),C=Math.abs(h),v,S,L,I,F,G,J,U,q,ie,O,K;if(w>=R&&w>=C?(L=c,G=p,q=g,K=_,c>=0?(v=u,S=h,I=f,F=m,J=y,U=x,ie=b,O=A):(v=h,S=u,I=m,F=f,J=x,U=y,ie=A,O=b)):R>=C?(L=u,G=f,q=y,K=b,u>=0?(v=h,S=c,I=m,F=p,J=x,U=g,ie=A,O=_):(v=c,S=h,I=p,F=m,J=g,U=x,ie=_,O=A)):(L=h,G=m,q=x,K=A,h>=0?(v=c,S=u,I=p,F=f,J=g,U=y,ie=_,O=b):(v=u,S=c,I=f,F=p,J=y,U=g,ie=b,O=_)),L===0)return null;let H=v/L,Z=S/L,j=1/L,fe=I-H*G,ge=F-Z*G,Q=J-H*q,pe=U-Z*q,le=ie-H*K,he=O-Z*K,ue=le*pe-he*Q,ee=fe*he-ge*le,me=Q*ge-pe*fe;if(r){if(ue<0||ee<0||me<0)return null}else if((ue<0||ee<0||me<0)&&(ue>0||ee>0||me>0))return null;let ne=ue+ee+me;if(ne===0)return null;let xe=j*(ue*G+ee*q+me*K);return(ne>0?xe<0:xe>0)?null:this.at(xe/ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Ip,"Ray");var wu=Ip,Lp=class Lp extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Lp,"MeshBasicMaterial");var Ya=Lp,nx=new vt,Ns=new wu,jc=new Xa,ix=new W,Qc=new W,eu=new W,tu=new W,bf=new W,nu=new W,rx=new W,iu=new W,Dp=class Dp extends rn{constructor(e=new Ft,t=new Ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){nu.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],p=s[c];h!==0&&(bf.fromBufferAttribute(p,e),a?nu.addScaledVector(bf,h):nu.addScaledVector(bf.sub(t),h))}t.add(nu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(s),Ns.copy(e.ray).recast(e.near),!(jc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(jc,ix)===null||Ns.origin.distanceToSquared(ix)>(e.far-e.near)**2))&&(nx.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(nx),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let x=f[g],_=a[x.materialIndex],b=Math.max(x.start,m.start),A=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let w=b,R=A;w<R;w+=3){let C=o.getX(w),v=o.getX(w+1),S=o.getX(w+2);r=ru(this,_,e,n,u,h,p,C,v,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let b=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);r=ru(this,a,e,n,u,h,p,b,A,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let x=f[g],_=a[x.materialIndex],b=Math.max(x.start,m.start),A=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let w=b,R=A;w<R;w+=3){let C=w,v=w+1,S=w+2;r=ru(this,_,e,n,u,h,p,C,v,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let b=x,A=x+1,w=x+2;r=ru(this,a,e,n,u,h,p,b,A,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};l(Dp,"Mesh");var yt=Dp;function rM(i,e,t,n,r,s,a,o){let c;if(e.side===Sn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===as,o),c===null)return null;iu.copy(o),iu.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(iu);return u<t.near||u>t.far?null:{distance:u,point:iu.clone(),object:i}}l(rM,"checkIntersection$1");function ru(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Qc),i.getVertexPosition(c,eu),i.getVertexPosition(u,tu);let h=rM(i,e,t,n,Qc,eu,tu,rx);if(h){let p=new W;vr.getBarycoord(rx,Qc,eu,tu,p),r&&(h.uv=vr.getInterpolatedAttribute(r,o,c,u,p,new He)),s&&(h.uv1=vr.getInterpolatedAttribute(s,o,c,u,p,new He)),a&&(h.normal=vr.getInterpolatedAttribute(a,o,c,u,p,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new W,materialIndex:0};vr.getNormal(Qc,eu,tu,f.normal),h.face=f,h.barycoord=p}return h}l(ru,"checkGeometryIntersection");var Np=class Np extends bn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Vt,h=Vt,p,f){super(null,a,o,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Np,"DataTexture");var $a=Np;var Up=class Up extends bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(Up,"InstancedBufferAttribute");var Er=Up;var Us=new Xa,sM=new He(.5,.5),su=new W,Fp=class Fp{constructor(e=new An,t=new An,n=new An,r=new An,s=new An,a=new An){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],g=s[8],y=s[9],x=s[10],_=s[11],b=s[12],A=s[13],w=s[14],R=s[15];if(r[0].setComponents(u-a,m-h,_-g,R-b).normalize(),r[1].setComponents(u+a,m+h,_+g,R+b).normalize(),r[2].setComponents(u+o,m+p,_+y,R+A).normalize(),r[3].setComponents(u-o,m-p,_-y,R-A).normalize(),n)r[4].setComponents(c,f,x,w).normalize(),r[5].setComponents(u-c,m-f,_-x,R-w).normalize();else if(r[4].setComponents(u-c,m-f,_-x,R-w).normalize(),t===ei)r[5].setComponents(u+c,m+f,_+x,R+w).normalize();else if(t===Ga)r[5].setComponents(c,f,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=sM.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(su.x=r.normal.x>0?e.max.x:e.min.x,su.y=r.normal.y>0?e.max.y:e.min.y,su.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(Fp,"Frustum");var es=Fp,sx=new vt,Ju=class Ju{constructor(){this.coordinateSystem=ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];sx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new es),n[r].setFromProjectionMatrix(sx,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new es),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Ju().copy(this)}};l(Ju,"FrustumArray");var Eu=Ju;var Op=class Op extends bn{constructor(e=[],t=ks,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(Op,"CubeTexture");var ll=Op,Bp=class Bp extends bn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(Bp,"CanvasTexture");var ts=Bp;var kp=class kp extends bn{constructor(e,t,n=yi,r,s,a,o=Vt,c=Vt,u,h=Mr,p=1){if(h!==Mr&&h!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(kp,"DepthTexture");var Ar=kp,zp=class zp extends Ar{constructor(e,t=yi,n=ks,r,s,a=Vt,o=Vt,c,u=Mr){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(zp,"CubeDepthTexture");var cl=zp,Gp=class Gp extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(Gp,"ExternalTexture");var ul=Gp,Ku=class Ku extends Ft{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],p=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function g(y,x,_,b,A,w,R,C,v,S,L){let I=w/v,F=R/S,G=w/2,J=R/2,U=C/2,q=v+1,ie=S+1,O=0,K=0,H=new W;for(let Z=0;Z<ie;Z++){let j=Z*F-J;for(let fe=0;fe<q;fe++){let ge=fe*I-G;H[y]=ge*b,H[x]=j*A,H[_]=U,u.push(H.x,H.y,H.z),H[y]=0,H[x]=0,H[_]=C>0?1:-1,h.push(H.x,H.y,H.z),p.push(fe/v),p.push(1-Z/S),O+=1}}for(let Z=0;Z<S;Z++)for(let j=0;j<v;j++){let fe=f+j+q*Z,ge=f+j+q*(Z+1),Q=f+(j+1)+q*(Z+1),pe=f+(j+1)+q*Z;c.push(fe,ge,pe),c.push(ge,Q,pe),K+=6}o.addGroup(m,K,L),m+=K,f+=O}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Ku,"BoxGeometry");var Hi=Ku;var ju=class ju extends Ft{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],f=[],m=[],g=0,y=[],x=n/2,_=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(m,2));function b(){let w=new W,R=new W,C=0,v=(t-e)/n;for(let S=0;S<=s;S++){let L=[],I=S/s,F=I*(t-e)+e;for(let G=0;G<=r;G++){let J=G/r,U=J*c+o,q=Math.sin(U),ie=Math.cos(U);R.x=F*q,R.y=-I*n+x,R.z=F*ie,p.push(R.x,R.y,R.z),w.set(q,v,ie).normalize(),f.push(w.x,w.y,w.z),m.push(J,1-I),L.push(g++)}y.push(L)}for(let S=0;S<r;S++)for(let L=0;L<s;L++){let I=y[L][S],F=y[L+1][S],G=y[L+1][S+1],J=y[L][S+1];(e>0||L!==0)&&(h.push(I,F,J),C+=3),(t>0||L!==s-1)&&(h.push(F,G,J),C+=3)}u.addGroup(_,C,0),_+=C}l(b,"generateTorso");function A(w){let R=g,C=new He,v=new W,S=0,L=w===!0?e:t,I=w===!0?1:-1;for(let G=1;G<=r;G++)p.push(0,x*I,0),f.push(0,I,0),m.push(.5,.5),g++;let F=g;for(let G=0;G<=r;G++){let U=G/r*c+o,q=Math.cos(U),ie=Math.sin(U);v.x=L*ie,v.y=x*I,v.z=L*q,p.push(v.x,v.y,v.z),f.push(0,I,0),C.x=q*.5+.5,C.y=ie*.5*I+.5,m.push(C.x,C.y),g++}for(let G=0;G<r;G++){let J=R+G,U=F+G;w===!0?h.push(U,U+1,J):h.push(U+1,U,J),S+=3}u.addGroup(_,S,w===!0?1:2),_+=S}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(ju,"CylinderGeometry");var Wi=ju,Qu=class Qu extends Wi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Qu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Qu,"ConeGeometry");var Xi=Qu,eh=class eh extends Ft{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),h(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new W,w=new W,R=new W;for(let C=0;C<t.length;C+=3)m(t[C+0],A),m(t[C+1],w),m(t[C+2],R),c(A,w,R,b)}l(o,"subdivide");function c(b,A,w,R){let C=R+1,v=[];for(let S=0;S<=C;S++){v[S]=[];let L=b.clone().lerp(w,S/C),I=A.clone().lerp(w,S/C),F=C-S;for(let G=0;G<=F;G++)G===0&&S===C?v[S][G]=L:v[S][G]=L.clone().lerp(I,G/F)}for(let S=0;S<C;S++)for(let L=0;L<2*(C-S)-1;L++){let I=Math.floor(L/2);L%2===0?(f(v[S][I+1]),f(v[S+1][I]),f(v[S][I])):(f(v[S][I+1]),f(v[S+1][I+1]),f(v[S+1][I]))}}l(c,"subdivideFace");function u(b){let A=new W;for(let w=0;w<s.length;w+=3)A.x=s[w+0],A.y=s[w+1],A.z=s[w+2],A.normalize().multiplyScalar(b),s[w+0]=A.x,s[w+1]=A.y,s[w+2]=A.z}l(u,"applyRadius");function h(){let b=new W;for(let A=0;A<s.length;A+=3){b.x=s[A+0],b.y=s[A+1],b.z=s[A+2];let w=x(b)/2/Math.PI+.5,R=_(b)/Math.PI+.5;a.push(w,1-R)}g(),p()}l(h,"generateUVs");function p(){for(let b=0;b<a.length;b+=6){let A=a[b+0],w=a[b+2],R=a[b+4],C=Math.max(A,w,R),v=Math.min(A,w,R);C>.9&&v<.1&&(A<.2&&(a[b+0]+=1),w<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}l(p,"correctSeam");function f(b){s.push(b.x,b.y,b.z)}l(f,"pushVertex");function m(b,A){let w=b*3;A.x=e[w+0],A.y=e[w+1],A.z=e[w+2]}l(m,"getVertexByIndex");function g(){let b=new W,A=new W,w=new W,R=new W,C=new He,v=new He,S=new He;for(let L=0,I=0;L<s.length;L+=9,I+=6){b.set(s[L+0],s[L+1],s[L+2]),A.set(s[L+3],s[L+4],s[L+5]),w.set(s[L+6],s[L+7],s[L+8]),C.set(a[I+0],a[I+1]),v.set(a[I+2],a[I+3]),S.set(a[I+4],a[I+5]),R.copy(b).add(A).add(w).divideScalar(3);let F=x(R);y(C,I+0,b,F),y(v,I+2,A,F),y(S,I+4,w,F)}}l(g,"correctUVs");function y(b,A,w,R){R<0&&b.x===1&&(a[A]=b.x-1),w.x===0&&w.z===0&&(a[A]=R/2/Math.PI+.5)}l(y,"correctUV");function x(b){return Math.atan2(b.z,-b.x)}l(x,"azimuth");function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}l(_,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.vertices,e.indices,e.radius,e.detail)}};l(eh,"PolyhedronGeometry");var Au=eh;var th=class th extends Au{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new th(e.radius,e.detail)}};l(th,"IcosahedronGeometry");var hl=th;var nh=class nh extends Ft{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=t/c,m=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let b=_*f-a;for(let A=0;A<u;A++){let w=A*p-s;g.push(w,-b,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<o;b++){let A=b+u*_,w=b+u*(_+1),R=b+1+u*(_+1),C=b+1+u*_;m.push(A,w,C),m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.width,e.height,e.widthSegments,e.heightSegments)}};l(nh,"PlaneGeometry");var qi=nh;var ih=class ih extends Ft{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],p=new W,f=new W,m=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let b=[],A=_/n,w=a+A*o,R=e*Math.cos(w),C=Math.sqrt(e*e-R*R),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let L=S/t,I=r+L*s;p.x=-C*Math.cos(I),p.y=R,p.z=C*Math.sin(I),g.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),x.push(L+v,1-A),b.push(u++)}h.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){let A=h[_][b+1],w=h[_][b],R=h[_+1][b],C=h[_+1][b+1];(_!==0||a>0)&&m.push(A,w,C),(_!==n-1||c<Math.PI)&&m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(ih,"SphereGeometry");var ns=ih;var rh=class rh extends Ft{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],p=[],f=new W,m=new W,g=new W;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=r;_++){let b=_/r*s;m.x=(e+t*Math.cos(x))*Math.cos(b),m.y=(e+t*Math.cos(x))*Math.sin(b),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),g.subVectors(m,f).normalize(),h.push(g.x,g.y,g.z),p.push(_/r),p.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let _=(r+1)*y+x-1,b=(r+1)*(y-1)+x-1,A=(r+1)*(y-1)+x,w=(r+1)*y+x;c.push(_,b,w),c.push(b,A,w)}this.setIndex(c),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(rh,"TorusGeometry");var Tr=rh;function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(ax(r))r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ax(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(Vs,"cloneUniforms");function dn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let r in n)e[r]=n[r]}return e}l(dn,"mergeUniforms");function ax(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(ax,"isThreeObject");function aM(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(aM,"cloneUniformsGroups");function np(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}l(np,"getUnlitUniformColorSpace");var Hs={clone:Vs,merge:dn},oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vp=class Vp extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new He().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(Vp,"ShaderMaterial");var Mn=Vp,Hp=class Hp extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(Hp,"RawShaderMaterial");var Tu=Hp,Wp=class Wp extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Wp,"MeshStandardMaterial");var vi=Wp;var Xp=class Xp extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Xp,"MeshDepthMaterial");var Cu=Xp,qp=class qp extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(qp,"MeshDistanceMaterial");var Ru=qp;function Na(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Na,"convertArray");function au(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(au,"hasTangents");var Yp=class Yp{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Yp,"Interpolant");var is=Yp,$p=class $p extends is{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wf,endingEnd:wf}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ef:s=e,o=2*t-n;break;case Af:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ef:a=e,c=2*n-t;break;case Af:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),y=g*g,x=y*g,_=-f*x+2*f*y-f*g,b=(1+f)*x+(-1.5-2*f)*y+(-.5+f)*g+1,A=(-1-m)*x+(1.5+m)*y+.5*g,w=m*x-m*y;for(let R=0;R!==o;++R)s[R]=_*a[h+R]+b*a[u+R]+A*a[c+R]+w*a[p+R];return s}};l($p,"CubicInterpolant");var Pu=$p,Zp=class Zp extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),p=1-h;for(let f=0;f!==o;++f)s[f]=a[u+f]*p+a[c+f]*h;return s}};l(Zp,"LinearInterpolant");var Iu=Zp,Jp=class Jp extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(Jp,"DiscreteInterpolant");var Lu=Jp,Kp=class Kp extends is{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(r-t),y=1-g;for(let x=0;x!==o;++x)s[x]=a[u+x]*y+a[c+x]*g;return s}let f=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=m*f+g*2,b=p[_],A=p[_+1],w=e*f+g*2,R=h[w],C=h[w+1],v=uM(n,t,b,R,r);s[g]=Qx(v,y,A,C,x)}return s}};l(Kp,"BezierInterpolant");var Du=Kp;function Qx(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l(Qx,"cubicBezier");function cM(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(cM,"cubicBezierSlope");function uM(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Qx(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=cM(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(uM,"solveBezierParameter");var jp=class jp{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),au(e.settings)&&(n.settings={inTangents:Na(e.settings.inTangents,Array),outTangents:Na(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Du(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ko:t=this.InterpolantFactoryMethodDiscrete;break;case vu:t=this.InterpolantFactoryMethodLinear;break;case cu:t=this.InterpolantFactoryMethodSmooth;break;case Sf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return vu;case this.InterpolantFactoryMethodSmooth:return cu;case this.InterpolantFactoryMethodBezier:return Sf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;au(this.settings)&&(ox(this.settings.inTangents,e),ox(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;au(this.settings)&&(lx(this.settings.inTangents,e),lx(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Ob(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){Ye("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===cu,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let p=o*n,f=p-n,m=p+n;for(let g=0;g!==n;++g){let y=t[p+g];if(y!==t[f+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,au(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(jp,"KeyframeTrack");var Fn=jp;function ox(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(ox,"shiftTangentTimes");function lx(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(lx,"scaleTangentTimes");Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=vu;var Qp=class Qp extends Fn{constructor(e,t,n){super(e,t,n)}};l(Qp,"BooleanKeyframeTrack");var rs=Qp;rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ko;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var em=class em extends Fn{constructor(e,t,n,r){super(e,t,n,r)}};l(em,"ColorKeyframeTrack");var Nu=em;Nu.prototype.ValueTypeName="color";var tm=class tm extends Fn{constructor(e,t,n,r){super(e,t,n,r)}};l(tm,"NumberKeyframeTrack");var Uu=tm;Uu.prototype.ValueTypeName="number";var nm=class nm extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)yn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(nm,"QuaternionLinearInterpolant");var Fu=nm,im=class im extends Fn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}};l(im,"QuaternionKeyframeTrack");var dl=im;dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var rm=class rm extends Fn{constructor(e,t,n){super(e,t,n)}};l(rm,"StringKeyframeTrack");var ss=rm;ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ko;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var sm=class sm extends Fn{constructor(e,t,n,r){super(e,t,n,r)}};l(sm,"VectorKeyframeTrack");var Ou=sm;Ou.prototype.ValueTypeName="vector";var am=class am{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],g=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(am,"LoadingManager");var Bu=am,e_=new Bu,om=class om{constructor(e){this.manager=e!==void 0?e:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(om,"Loader");var ku=om;ku.DEFAULT_MATERIAL_NAME="__DEFAULT";var lm=class lm extends rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(lm,"Light");var fl=lm,cm=class cm extends fl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(cm,"HemisphereLight");var pl=cm,Mf=new vt,cx=new W,ux=new W,um=class um{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cx.setFromMatrixPosition(e.matrixWorld),t.position.copy(cx),ux.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ux),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Mf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Ga||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(um,"LightShadow");var zu=um,ou=new W,lu=new yn,ki=new W,hm=class hm extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ou,lu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,lu,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ou,lu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,lu,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(hm,"Camera");var ml=hm,Zr=new W,hx=new He,dx=new He,dm=class dm extends ml{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yu*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,hx,dx),t.subVectors(dx,hx)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qd*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(dm,"PerspectiveCamera");var vn=dm;var fm=class fm extends ml{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(fm,"OrthographicCamera");var gl=fm,pm=class pm extends zu{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(pm,"DirectionalLightShadow");var Tf=pm,mm=class mm extends fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(mm,"DirectionalLight");var xl=mm;var gm=class gm extends Ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(gm,"InstancedBufferGeometry");var _l=gm;var Ua=-90,Fa=1,xm=class xm extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(Ua,Fa,e,t);r.layers=this.layers,this.add(r);let s=new vn(Ua,Fa,e,t);s.layers=this.layers,this.add(s);let a=new vn(Ua,Fa,e,t);a.layers=this.layers,this.add(a);let o=new vn(Ua,Fa,e,t);o.layers=this.layers,this.add(o);let c=new vn(Ua,Fa,e,t);c.layers=this.layers,this.add(c);let u=new vn(Ua,Fa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(xm,"CubeCamera");var Za=xm,_m=class _m extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(_m,"ArrayCamera");var Gu=_m;var ip="\\[\\]\\.:\\/",hM=new RegExp("["+ip+"]","g"),rp="[^"+ip+"]",dM="[^"+ip.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",rp),pM=/(WCOD+)?/.source.replace("WCOD",dM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rp),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rp),xM=new RegExp("^"+fM+pM+mM+gM+"$"),_M=["material","materials","bones","map"],vm=class vm{constructor(e,t,n){let r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(vm,"Composite");var Cf=vm,Kr=class Kr{constructor(e,t,n){this.path=t,this.parsedPath=n||Kr.parseTrackName(t),this.node=Kr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Kr.Composite(e,t,n):new Kr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hM,"")}static parseTrackName(e){let t=xM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);_M.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=Kr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Kr,"PropertyBinding");var Rt=Kr;Rt.Composite=Cf;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dR=new Float32Array(1);var sh=class sh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(sh,"Matrix2"),sh.prototype.isMatrix2=!0;var Rf=sh;function sp(i,e,t,n){let r=vM(n);switch(t){case $f:return i*e;case Jf:return i*e/r.components*r.byteLength;case fh:return i*e/r.components*r.byteLength;case $i:return i*e*2/r.components*r.byteLength;case ph:return i*e*2/r.components*r.byteLength;case Zf:return i*e*3/r.components*r.byteLength;case kn:return i*e*4/r.components*r.byteLength;case mh:return i*e*4/r.components*r.byteLength;case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xh:case vh:return Math.max(i,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(i,8)*Math.max(e,8)/2;case yh:case bh:case Sh:case wh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mh:case Al:case Eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zh:case Gh:case Vh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hh:case Wh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Tl:case Xh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(sp,"getByteLength");function vM(i){switch(i){case hn:case Wf:return{byteLength:1,components:1};case Qa:case Xf:case Bn:return{byteLength:2,components:1};case hh:case dh:return{byteLength:2,components:4};case yi:case uh:case bi:return{byteLength:4,components:1};case qf:case Yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(vM,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function M_(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(M_,"WebGLAnimation");function EM(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){let g=p[f],y=p[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,p[f]=y)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){let y=p[m];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l(EM,"WebGLAttributes");var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
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
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
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
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
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
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,zM=`#ifdef USE_BUMPMAP
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ZM=`#define PI 3.141592653589793
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
} // validated`,JM=`vec3 transformedNormal = objectNormal;
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
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,lS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
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
}`,fS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xS=`#ifdef USE_ENVMAP
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
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
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
#endif`,SS=`uniform sampler2D dfgLUT;
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
}`,wS=`
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
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
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,CS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,US=`#if defined( USE_POINTS_UV )
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
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kS=`#if defined( USE_MORPHCOLORS )
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
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
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
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
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
#endif`,ZS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uw=`float getShadowMask() {
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
}`,hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vw=`#ifdef USE_TRANSMISSION
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
#endif`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`uniform float backgroundBlurriness;
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`#include <common>
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
}`,Lw=`#if DEPTH_PACKING == 3200
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
}`,Dw=`#define DISTANCE
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
}`,Nw=`#define DISTANCE
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`uniform float scale;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,zw=`uniform vec3 diffuse;
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
}`,Gw=`#define LAMBERT
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
}`,Vw=`#define LAMBERT
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
}`,Hw=`#define MATCAP
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
}`,Ww=`#define MATCAP
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
}`,Xw=`#define NORMAL
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
}`,qw=`#define NORMAL
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
}`,Yw=`#define PHONG
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
}`,$w=`#define PHONG
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
}`,Zw=`#define STANDARD
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
}`,Jw=`#define STANDARD
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
}`,Kw=`#define TOON
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
}`,jw=`#define TOON
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
}`,Qw=`uniform float size;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 color;
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
}`,i1=`uniform float rotation;
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
}`,r1=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:AM,alphahash_pars_fragment:TM,alphamap_fragment:CM,alphamap_pars_fragment:RM,alphatest_fragment:PM,alphatest_pars_fragment:IM,aomap_fragment:LM,aomap_pars_fragment:DM,batching_pars_vertex:NM,batching_vertex:UM,begin_vertex:FM,beginnormal_vertex:OM,bsdfs:BM,iridescence_fragment:kM,bumpmap_pars_fragment:zM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:WM,color_fragment:XM,color_pars_fragment:qM,color_pars_vertex:YM,color_vertex:$M,common:ZM,defaultnormal_vertex:JM,displacementmap_pars_vertex:KM,displacementmap_vertex:jM,emissivemap_fragment:QM,emissivemap_pars_fragment:eS,colorspace_fragment:tS,colorspace_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:rS,envmap_pars_fragment:sS,envmap_pars_vertex:aS,envmap_physical_pars_fragment:xS,envmap_vertex:oS,fog_vertex:lS,fog_pars_vertex:cS,fog_fragment:uS,fog_pars_fragment:hS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:fS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:_S,lights_toon_pars_fragment:vS,lights_phong_fragment:yS,lights_phong_pars_fragment:bS,lights_physical_fragment:MS,lights_physical_pars_fragment:SS,lights_fragment_begin:wS,lights_fragment_maps:ES,lights_fragment_end:AS,lightprobes_pars_fragment:TS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:IS,map_fragment:LS,map_pars_fragment:DS,map_particle_fragment:NS,map_particle_pars_fragment:US,metalnessmap_fragment:FS,metalnessmap_pars_fragment:OS,morphinstance_vertex:BS,morphcolor_vertex:kS,morphnormal_vertex:zS,morphtarget_pars_vertex:GS,morphtarget_vertex:VS,normal_fragment_begin:HS,normal_fragment_maps:WS,normal_pars_fragment:XS,normal_pars_vertex:qS,normal_vertex:YS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:ZS,clearcoat_normal_fragment_maps:JS,clearcoat_pars_fragment:KS,iridescence_pars_fragment:jS,opaque_fragment:QS,packing:ew,premultiplied_alpha_fragment:tw,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:rw,roughnessmap_fragment:sw,roughnessmap_pars_fragment:aw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:lw,shadowmap_vertex:cw,shadowmask_pars_fragment:uw,skinbase_vertex:hw,skinning_pars_vertex:dw,skinning_vertex:fw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:xw,tonemapping_pars_fragment:_w,transmission_fragment:vw,transmission_pars_fragment:yw,uv_pars_fragment:bw,uv_pars_vertex:Mw,uv_vertex:Sw,worldpos_vertex:ww,background_vert:Ew,background_frag:Aw,backgroundCube_vert:Tw,backgroundCube_frag:Cw,cube_vert:Rw,cube_frag:Pw,depth_vert:Iw,depth_frag:Lw,distance_vert:Dw,distance_frag:Nw,equirect_vert:Uw,equirect_frag:Fw,linedashed_vert:Ow,linedashed_frag:Bw,meshbasic_vert:kw,meshbasic_frag:zw,meshlambert_vert:Gw,meshlambert_frag:Vw,meshmatcap_vert:Hw,meshmatcap_frag:Ww,meshnormal_vert:Xw,meshnormal_frag:qw,meshphong_vert:Yw,meshphong_frag:$w,meshphysical_vert:Zw,meshphysical_frag:Jw,meshtoon_vert:Kw,meshtoon_frag:jw,points_vert:Qw,points_frag:e1,shadow_vert:t1,shadow_frag:n1,sprite_vert:i1,sprite_frag:r1},Pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ji={basic:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:dn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:dn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:dn([Pe.points,Pe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:dn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:dn([Pe.common,Pe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:dn([Pe.sprite,Pe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:dn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:dn([Pe.lights,Pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ji.physical={uniforms:dn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var $h={r:0,b:0,g:0},s1=new vt,S_=new $e;S_.set(-1,0,0,0,1,0,0,0,1);function a1(i,e,t,n,r,s){let a=new Be(0),o=r===!0?0:1,c,u,h=null,p=0,f=null;function m(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let w=b.backgroundBlurriness>0;A=e.get(A,w)}return A}l(m,"getBackground");function g(b){let A=!1,w=m(b);w===null?x(a,o):w&&w.isColor&&(x(w,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(b,A){let w=m(A);w&&w.isCubeTexture?(u===void 0&&(u=new yt(new Hi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Vs(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(S_),u.material.toneMapped=ht.getTransfer(w.colorSpace)!==xt,(h!==w||p!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,p=w.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new yt(new qi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Vs(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ht.getTransfer(w.colorSpace)!==xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,p=w.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(b,A){b.getRGB($h,np(i)),t.buffers.color.setClear($h.r,$h.g,$h.b,A,s)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(b,A=1){a.set(b),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(b){o=b,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(a1,"WebGLBackground");function o1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(F,G,J,U,q){let ie=!1,O=p(F,U,J,G);s!==O&&(s=O,u(s.object)),ie=m(F,U,J,q),ie&&g(F,U,J,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,w(F,G,J,U),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(F){return i.bindVertexArray(F)}l(u,"bindVertexArrayObject");function h(F){return i.deleteVertexArray(F)}l(h,"deleteVertexArrayObject");function p(F,G,J,U){let q=U.wireframe===!0,ie=n[G.id];ie===void 0&&(ie={},n[G.id]=ie);let O=F.isInstancedMesh===!0?F.id:0,K=ie[O];K===void 0&&(K={},ie[O]=K);let H=K[J.id];H===void 0&&(H={},K[J.id]=H);let Z=H[q];return Z===void 0&&(Z=f(c()),H[q]=Z),Z}l(p,"getBindingState");function f(F){let G=[],J=[],U=[];for(let q=0;q<t;q++)G[q]=0,J[q]=0,U[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:U,object:F,attributes:{},index:null}}l(f,"createBindingState");function m(F,G,J,U){let q=s.attributes,ie=G.attributes,O=0,K=J.getAttributes();for(let H in K)if(K[H].location>=0){let j=q[H],fe=ie[H];if(fe===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;O++}return s.attributesNum!==O||s.index!==U}l(m,"needsUpdate");function g(F,G,J,U){let q={},ie=G.attributes,O=0,K=J.getAttributes();for(let H in K)if(K[H].location>=0){let j=ie[H];j===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));let fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),q[H]=fe,O++}s.attributes=q,s.attributesNum=O,s.index=U}l(g,"saveCache");function y(){let F=s.newAttributes;for(let G=0,J=F.length;G<J;G++)F[G]=0}l(y,"initAttributes");function x(F){_(F,0)}l(x,"enableAttribute");function _(F,G){let J=s.newAttributes,U=s.enabledAttributes,q=s.attributeDivisors;J[F]=1,U[F]===0&&(i.enableVertexAttribArray(F),U[F]=1),q[F]!==G&&(i.vertexAttribDivisor(F,G),q[F]=G)}l(_,"enableAttributeAndDivisor");function b(){let F=s.newAttributes,G=s.enabledAttributes;for(let J=0,U=G.length;J<U;J++)G[J]!==F[J]&&(i.disableVertexAttribArray(J),G[J]=0)}l(b,"disableUnusedAttributes");function A(F,G,J,U,q,ie,O){O===!0?i.vertexAttribIPointer(F,G,J,q,ie):i.vertexAttribPointer(F,G,J,U,q,ie)}l(A,"vertexAttribPointer");function w(F,G,J,U){y();let q=U.attributes,ie=J.getAttributes(),O=G.defaultAttributeValues;for(let K in ie){let H=ie[K];if(H.location>=0){let Z=q[K];if(Z===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let j=Z.normalized,fe=Z.itemSize,ge=e.get(Z);if(ge===void 0)continue;let Q=ge.buffer,pe=ge.type,le=ge.bytesPerElement,he=pe===i.INT||pe===i.UNSIGNED_INT||Z.gpuType===uh;if(Z.isInterleavedBufferAttribute){let ue=Z.data,ee=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,me=Z.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)_(H.location+ne,ue.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<H.locationSize;ne++)x(H.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ne=0;ne<H.locationSize;ne++)A(H.location+ne,fe/H.locationSize,pe,j,ee*le,(me+fe/H.locationSize*ne)*le,he)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)_(H.location+ue,Z.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<H.locationSize;ue++)x(H.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ue=0;ue<H.locationSize;ue++)A(H.location+ue,fe/H.locationSize,pe,j,fe*le,fe/H.locationSize*ue*le,he)}}else if(O!==void 0){let j=O[K];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}b()}l(w,"setupVertexAttributes");function R(){L();for(let F in n){let G=n[F];for(let J in G){let U=G[J];for(let q in U){let ie=U[q];for(let O in ie)h(ie[O].object),delete ie[O];delete U[q]}}delete n[F]}}l(R,"dispose");function C(F){if(n[F.id]===void 0)return;let G=n[F.id];for(let J in G){let U=G[J];for(let q in U){let ie=U[q];for(let O in ie)h(ie[O].object),delete ie[O];delete U[q]}}delete n[F.id]}l(C,"releaseStatesOfGeometry");function v(F){for(let G in n){let J=n[G];for(let U in J){let q=J[U];if(q[F.id]===void 0)continue;let ie=q[F.id];for(let O in ie)h(ie[O].object),delete ie[O];delete q[F.id]}}}l(v,"releaseStatesOfProgram");function S(F){for(let G in n){let J=n[G],U=F.isInstancedMesh===!0?F.id:0,q=J[U];if(q!==void 0){for(let ie in q){let O=q[ie];for(let K in O)h(O[K].object),delete O[K];delete q[ie]}delete J[U],Object.keys(J).length===0&&delete n[G]}}}l(S,"releaseStatesOfObject");function L(){I(),a=!0,s!==r&&(s=r,u(s.object))}l(L,"reset");function I(){r.geometry=null,r.program=null,r.wireframe=!1}return l(I,"resetDefaultState"),{setup:o,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:b}}l(o1,"WebGLBindingStates");function l1(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(l1,"WebGLBufferRenderer");function c1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(v){return!(v!==kn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let S=v===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==hn&&v!==bi&&!S&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(qe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:w,maxSamples:R,samples:C}}l(c1,"WebGLCapabilities");function u1(i){let e=this,t=null,n=0,r=!1,s=!1,a=new An,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let g=p.clippingPlanes,y=p.clipIntersection,x=p.clipShadows,_=i.get(p);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{let b=s?0:n,A=b*4,w=_.clippingState||null;c.value=w,w=h(g,f,A,m);for(let R=0;R!==A;++R)w[R]=t[R];_.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(p,f,m,g){let y=p!==null?p.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=m+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,w=m;A!==y;++A,w+=4)a.copy(p[A]).applyMatrix4(b,o),a.normal.toArray(x,w),x[w+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(u1,"WebGLClipping");var Pm=class Pm extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ll(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Os});s.uniforms.tEquirect.value=t;let a=new yt(r,s),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Ht),new Za(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(Pm,"WebGLCubeRenderTarget");var Pl=Pm,t_=256,h1=3,d1=20,w_=256,E_=16,f1=3,p1=new W,m1=new Be,jh=class jh{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Za(1,10,null),this._boxMesh=new yt(new Hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=p1}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(m1));let x=new Za(n,r,h);return x.position.copy(o),x.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(t_,$x(e))}_fromTexture(e,t){e.mapping===ks||e.mapping===ja?this._setSize(e.image.length===0?t_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=n_(e,!1,!1),n=Math.log2(e)-h1;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=n_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ks||e.mapping===ja?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=i_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=g1(),this._integrationMaterial=x1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/E_);for(let a=0;a<=n;a++){let o=jh.lodToRoughness(a,n);if(a>n-f1)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(w_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_1());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(jh,"PMREMGenerator");var Jh=jh;function n_(i,e,t){return new Pl(i,{minFilter:On,generateMipmaps:e,type:Bn,colorSpace:jo,depthBuffer:t})}l(n_,"_createRenderTarget");function Il(i,e,t){return new Mn({name:i,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:Sn,blending:Os,depthTest:!1,depthWrite:!1})}l(Il,"_getMaterial");function g1(){return Il("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${w_}u

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
	`)}l(g1,"_getGGXMaterial");function x1(){return Il("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:E_}},`

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
	`)}l(x1,"_getIntegrationMaterial");function _1(){return Il("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d1}
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
	`)}l(_1,"_getBlurMaterial");function i_(){return Il("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(i_,"_getEquirectMaterial");function r_(){return Il("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(r_,"_getCubemapMaterial");function v1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}l(r,"get");function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===oh||m===lh)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Pl(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}l(s,"getCube");function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===oh||m===lh,y=m===ks||m===ja;if(g||y){let x=t.get(f),_=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Jh(i)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let b=f.image;return g&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new Jh(i)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}l(a,"getPMREM");function o(f,m){return m===oh?f.mapping=ks:m===lh&&(f.mapping=ja),f}l(o,"mapTextureMapping");function c(f){let m=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&m++;return m===g}l(c,"isCubeTextureComplete");function u(f){let m=f.target;m.removeEventListener("dispose",u);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}l(u,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}l(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:r,dispose:p}}l(v1,"WebGLEnvironments");function y1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&Zo("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(y1,"WebGLExtensions");function b1(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);let y=s.get(g);y&&(e.remove(y),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function p(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let b=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?al:sl,w=new A(Math.ceil(b/3)*6,1),R=w.array;if(y!==null){let v=y.array;_=y.version;for(let S=0,L=0;S<b;S+=3){let I=v[S+0],F=v[S+1],G=v[S+2];R[L++]=I,R[L++]=F,R[L++]=F,R[L++]=G,R[L++]=G,R[L++]=I}}else{_=x.version;for(let v=0,S=0;v<b;v+=3){let L=v+0,I=v+1,F=v+2;R[S++]=L,R[S++]=I,R[S++]=I,R[S++]=F,R[S++]=F,R[S++]=L}}w.version=_;let C=s.get(g);C&&e.remove(C),s.set(g,w)}l(p,"updateWireframeAttribute");function f(g){let y=s.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return s.get(g)}l(f,"getWireframeAttribute");function m(){for(let g in r){let y=r[g].deref();y!==void 0&&c(y)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:f,dispose:m}}l(b1,"WebGLGeometries");function M1(i,e,t){let n;function r(p){n=p}l(r,"setMode");let s,a;function o(p){s=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}l(c,"render");function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,p*a,m),t.update(f,n,m))}l(u,"renderInstances");function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,m);let y=0;for(let x=0;x<m;x++)y+=f[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(M1,"WebGLIndexedBufferRenderer");function S1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(S1,"WebGLInfo");function w1(i,e,t){let n=new WeakMap,r=new Dt;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==p){let I=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var m=I;l(I,"disposeTexture"),f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],w=0;g===!0&&(w=1),y===!0&&(w=2),x===!0&&(w=3);let R=o.attributes.position.count*w,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let v=new Float32Array(R*C*4*p),S=new Fs(v,R,C,p);S.type=bi,S.needsUpdate=!0;let L=w*4;for(let F=0;F<p;F++){let G=_[F],J=b[F],U=A[F],q=R*C*4*F;for(let ie=0;ie<G.count;ie++){let O=ie*L;g===!0&&(r.fromBufferAttribute(G,ie),v[q+O+0]=r.x,v[q+O+1]=r.y,v[q+O+2]=r.z,v[q+O+3]=0),y===!0&&(r.fromBufferAttribute(J,ie),v[q+O+4]=r.x,v[q+O+5]=r.y,v[q+O+6]=r.z,v[q+O+7]=0),x===!0&&(r.fromBufferAttribute(U,ie),v[q+O+8]=r.x,v[q+O+9]=r.y,v[q+O+10]=r.z,v[q+O+11]=U.itemSize===4?r.w:1)}}f={count:p,texture:S,size:new He(R,C)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(s,"update"),{update:s}}l(w1,"WebGLMorphtargets");function E1(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(E1,"WebGLObjects");var A1={[Of]:"LINEAR_TONE_MAPPING",[Bf]:"REINHARD_TONE_MAPPING",[kf]:"CINEON_TONE_MAPPING",[yl]:"ACES_FILMIC_TONE_MAPPING",[Gf]:"AGX_TONE_MAPPING",[Vf]:"NEUTRAL_TONE_MAPPING",[zf]:"CUSTOM_TONE_MAPPING"};function T1(i,e,t,n,r,s){let a=new Nn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Ft;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let p=new Tu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new yt(h,p),m=new gl(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,b=null,A=[],w=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let v=0;v<A.length;v++){let S=A[v];S.setSize&&S.setSize(R,C)}},this.setEffects=function(R){A=R,w=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new Nn(C,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(C,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));let S=r===!0&&A.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Ar(C,v),s===!0&&(u.format=Cr,u.type=zs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<A.length;L++){let I=A[L];I.setSize&&I.setSize(C,v),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(R,C){if(x||R.toneMapping===Yi&&A.length===0)return!1;if(b=C,C!==null){let v=C.width,S=C.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return w===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Yi,!0},this.hasRenderPass=function(){return w},this.end=function(R,C){R.toneMapping=_,x=!0;let v=a,S=o;for(let L=0;L<A.length;L++){let I=A[L];I.enabled!==!1&&(I.render(R,S,v,C),I.needsSwap!==!1&&(v=S,S=S===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,p.defines={},ht.getTransfer(g)===xt&&(p.defines.SRGB_TRANSFER="");let L=A1[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(b),R.render(f,m),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}l(T1,"WebGLOutput");var A_=new bn,T_=new Ar(1,1),C_=new cl(1),R_=new Fs,P_=new Su,I_=new ll,s_=[],a_=[],o_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function to(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=s_[r];if(s===void 0&&(s=new Float32Array(r),s_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(to,"flatten");function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(Xt,"arraysEqual");function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(qt,"copyArray");function Qh(i,e){let t=a_[e];t===void 0&&(t=new Int32Array(e),a_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Qh,"allocTexUnits");function C1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(C1,"setValueV1f");function R1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}l(R1,"setValueV2f");function P1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}l(P1,"setValueV3f");function I1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}l(I1,"setValueV4f");function L1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;c_.set(n),i.uniformMatrix2fv(this.addr,!1,c_),qt(t,n)}}l(L1,"setValueM2");function D1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;l_.set(n),i.uniformMatrix3fv(this.addr,!1,l_),qt(t,n)}}l(D1,"setValueM3");function N1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;o_.set(n),i.uniformMatrix4fv(this.addr,!1,o_),qt(t,n)}}l(N1,"setValueM4");function U1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(U1,"setValueV1i");function F1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}l(F1,"setValueV2i");function O1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}l(O1,"setValueV3i");function B1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}l(B1,"setValueV4i");function k1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(k1,"setValueV1ui");function z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}l(z1,"setValueV2ui");function G1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}l(G1,"setValueV3ui");function V1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}l(V1,"setValueV4ui");function ed(i){return i.version===0&&(i.compareFunction=Qf,i.needsUpdate=!0),i}l(ed,"initShadowTexture");function H1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=ed(T_):s=A_,t.setTexture2D(e||s,r)}l(H1,"setValueT1");function W1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||P_,r)}l(W1,"setValueT3D1");function X1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=ed(C_):s=I_,t.setTextureCube(e||s,r)}l(X1,"setValueT6");function q1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||R_,r)}l(q1,"setValueT2DArray1");function Y1(i){switch(i){case 5126:return C1;case 35664:return R1;case 35665:return P1;case 35666:return I1;case 35674:return L1;case 35675:return D1;case 35676:return N1;case 5124:case 35670:return U1;case 35667:case 35671:return F1;case 35668:case 35672:return O1;case 35669:case 35673:return B1;case 5125:return k1;case 36294:return z1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}l(Y1,"getSingularSetter");function $1(i,e){i.uniform1fv(this.addr,e)}l($1,"setValueV1fArray");function Z1(i,e){let t=to(e,this.size,2);i.uniform2fv(this.addr,t)}l(Z1,"setValueV2fArray");function J1(i,e){let t=to(e,this.size,3);i.uniform3fv(this.addr,t)}l(J1,"setValueV3fArray");function K1(i,e){let t=to(e,this.size,4);i.uniform4fv(this.addr,t)}l(K1,"setValueV4fArray");function j1(i,e){let t=to(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(j1,"setValueM2Array");function Q1(i,e){let t=to(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(Q1,"setValueM3Array");function eE(i,e){let t=to(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(eE,"setValueM4Array");function tE(i,e){i.uniform1iv(this.addr,e)}l(tE,"setValueV1iArray");function nE(i,e){i.uniform2iv(this.addr,e)}l(nE,"setValueV2iArray");function iE(i,e){i.uniform3iv(this.addr,e)}l(iE,"setValueV3iArray");function rE(i,e){i.uniform4iv(this.addr,e)}l(rE,"setValueV4iArray");function sE(i,e){i.uniform1uiv(this.addr,e)}l(sE,"setValueV1uiArray");function aE(i,e){i.uniform2uiv(this.addr,e)}l(aE,"setValueV2uiArray");function oE(i,e){i.uniform3uiv(this.addr,e)}l(oE,"setValueV3uiArray");function lE(i,e){i.uniform4uiv(this.addr,e)}l(lE,"setValueV4uiArray");function cE(i,e,t){let n=this.cache,r=e.length,s=Qh(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ed(T_):a=A_;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(cE,"setValueT1Array");function uE(i,e,t){let n=this.cache,r=e.length,s=Qh(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||P_,s[a])}l(uE,"setValueT3DArray");function hE(i,e,t){let n=this.cache,r=e.length,s=Qh(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ed(C_):a=I_;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(hE,"setValueT6Array");function dE(i,e,t){let n=this.cache,r=e.length,s=Qh(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||R_,s[a])}l(dE,"setValueT2DArrayArray");function fE(i){switch(i){case 5126:return $1;case 35664:return Z1;case 35665:return J1;case 35666:return K1;case 35674:return j1;case 35675:return Q1;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 5125:return sE;case 36294:return aE;case 36295:return oE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return dE}}l(fE,"getPureArraySetter");var Im=class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y1(t.type)}};l(Im,"SingleUniform");var Mm=Im,Lm=class Lm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fE(t.type)}};l(Lm,"PureArrayUniform");var Sm=Lm,Dm=class Dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(Dm,"StructuredUniform");var wm=Dm,ym=/(\w+)(\])?(\[|\.)?/g;function u_(i,e){i.seq.push(e),i.map[e.id]=e}l(u_,"addUniform");function pE(i,e,t){let n=i.name,r=n.length;for(ym.lastIndex=0;;){let s=ym.exec(n),a=ym.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){u_(t,u===void 0?new Mm(o,i,e):new Sm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new wm(o),u_(t,p)),t=p}}}l(pE,"parseUniform");var Nm=class Nm{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pE(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(Nm,"WebGLUniforms");var eo=Nm;function h_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(h_,"WebGLShader");var mE=37297,gE=0;function xE(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(xE,"handleSource");var d_=new $e;function _E(i){ht._getMatrix(d_,ht.workingColorSpace,i);let e=`mat3( ${d_.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Qo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(_E,"getEncodingComponents");function f_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xE(i.getShaderSource(e),o)}else return s}l(f_,"getShaderErrors");function vE(i,e){let t=_E(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(vE,"getTexelEncodingFunction");var yE={[Of]:"Linear",[Bf]:"Reinhard",[kf]:"Cineon",[yl]:"ACESFilmic",[Gf]:"AgX",[Vf]:"Neutral",[zf]:"Custom"};function bE(i,e){let t=yE[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(bE,"getToneMappingFunction");var Zh=new W;function ME(){ht.getLuminanceCoefficients(Zh);let i=Zh.x.toFixed(4),e=Zh.y.toFixed(4),t=Zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(ME,"getLuminanceFunction");function SE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}l(SE,"generateVertexExtensions");function wE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(wE,"generateDefines");function EE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(EE,"fetchAttributeLocations");function Rl(i){return i!==""}l(Rl,"filterEmptyLine");function p_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(p_,"replaceLightNums");function m_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(m_,"replaceClippingPlaneNums");var AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(i){return i.replace(AE,TE)}l(Em,"resolveIncludes");function TE(i,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Em(t)}l(TE,"includeReplacer");var CE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(i){return i.replace(CE,RE)}l(g_,"unrollLoops");function RE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(RE,"loopReplacer");function x_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(x_,"generatePrecision");var PE={[vl]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function IE(i){return PE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(IE,"generateShadowMapTypeDefine");var LE={[ja]:"ENVMAP_MODE_REFRACTION"};function DE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":LE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(DE,"generateEnvMapModeDefine");var NE={[Ff]:"ENVMAP_BLENDING_MULTIPLY",[Dx]:"ENVMAP_BLENDING_MIX",[Nx]:"ENVMAP_BLENDING_ADD"};function UE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":NE[i.combine]||"ENVMAP_BLENDING_NONE"}l(UE,"generateEnvMapBlendingDefine");function FE(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=IE(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DE(t),p=UE(t),f=SE(t),m=wE(s),g=r.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rl).join(`
`),x.length>0&&(x+=`
`)):(y=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),x=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?it.tonemapping_pars_fragment:"",t.toneMapping!==Yi?bE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,vE("linearToOutputTexel",t.outputColorSpace),ME(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rl).join(`
`)),a=Em(a),a=p_(a,t),a=m_(a,t),o=Em(o),o=p_(o,t),o=m_(o,t),a=g_(a),o=g_(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=_+y+a,A=_+x+o,w=h_(r,r.VERTEX_SHADER,b),R=h_(r,r.FRAGMENT_SHADER,A);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(I){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(g)||"",G=r.getShaderInfoLog(w)||"",J=r.getShaderInfoLog(R)||"",U=F.trim(),q=G.trim(),ie=J.trim(),O=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,R);else{let H=f_(r,w,"vertex"),Z=f_(r,R,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+H+`
`+Z)}else U!==""?qe("WebGLProgram: Program Info Log:",U):(q===""||ie==="")&&(K=!1);K&&(I.diagnostics={runnable:O,programLog:U,vertexShader:{log:q,prefix:y},fragmentShader:{log:ie,prefix:x}})}r.deleteShader(w),r.deleteShader(R),v=new eo(r,g),S=EE(r,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(g,mE)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}l(FE,"WebGLProgram");var OE=0,Um=class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tm(e),t.set(e,n)),n}};l(Um,"WebGLShaderCache");var Am=Um,Fm=class Fm{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}};l(Fm,"WebGLShaderStage");var Tm=Fm;function BE(i){return i===$i||i===Al||i===Tl}l(BE,"isPackedRGFormat");function kE(i,e,t,n,r,s){let a=new nl,o=new Am,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}l(m,"getChannel");function g(v,S,L,I,F,G){let J=I.fog,U=F.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||q,ie),K=f[v.type],H=n.precision;v.precision!==null&&(H=n.getMaxPrecision(v.precision),H!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",H,"instead."));let Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=Z!==void 0?Z.length:0,fe=0;U.morphAttributes.position!==void 0&&(fe=1),U.morphAttributes.normal!==void 0&&(fe=2),U.morphAttributes.color!==void 0&&(fe=3);let ge,Q,pe,le;if(K){let Le=Ji[K];ge=Le.vertexShader,Q=Le.fragmentShader}else{ge=v.vertexShader,Q=v.fragmentShader;let Le=o.getVertexShaderStage(v),_t=o.getFragmentShaderStage(v);o.update(v,Le,_t),pe=Le.id,le=_t.id}let he=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),ee=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,ne=!!v.map,xe=!!v.matcap,Se=!!O,ye=Se&&O.isPMREMTexture===!0,Xe=!!v.aoMap,Ke=!!v.lightMap,at=!!v.bumpMap&&v.wireframe===!1,je=!!v.normalMap,Mt=!!v.displacementMap,ot=!!v.emissiveMap,St=!!v.metalnessMap,Lt=!!v.roughnessMap,st=v.anisotropy>0,k=v.clearcoat>0,Ze=v.diffuseRoughness>0,et=v.dispersion>0,rt=v.retroreflectivity>0,ve=v.iridescence>0,mt=v.sheen>0,ze=v.transmission>0,We=st&&!!v.anisotropyMap,P=k&&!!v.clearcoatMap,M=k&&!!v.clearcoatNormalMap,X=k&&!!v.clearcoatRoughnessMap,de=Ze&&!!v.diffuseRoughnessMap,ae=ve&&!!v.iridescenceMap,Me=ve&&!!v.iridescenceThicknessMap,Ce=mt&&!!v.sheenColorMap,se=mt&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Ee=!!v.specularColorMap,N=!!v.specularIntensityMap,ce=ze&&!!v.transmissionMap,re=ze&&!!v.thicknessMap,Ae=!!v.gradientMap,be=!!v.alphaMap,we=v.alphaTest>0,Ge=!!v.alphaHash,nt=!!v.extensions,_e=Yi;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ve=ye?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,tt={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:Q,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:H,batching:me,batchingColor:me&&F._colorsTexture!==null,instancing:ee,instancingColor:ee&&F.instanceColor!==null,instancingMorph:ee&&F.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ne,matcap:xe,envMap:Se,envMapMode:Se&&O.mapping,envMapPMREM:ye,envMapMaxLod:ye?Ve.length-1:null,envMapSize:ye?Ve[0].width:null,aoMap:Xe,lightMap:Ke,bumpMap:at,normalMap:je,displacementMap:Mt,emissiveMap:ot,normalMapObjectSpace:je&&v.normalMapType===Ox,normalMapTangentSpace:je&&v.normalMapType===qh,packedNormalMap:je&&v.normalMapType===qh&&BE(v.normalMap.format),metalnessMap:St,roughnessMap:Lt,anisotropy:st,anisotropyMap:We,clearcoat:k,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:X,diffuseRoughness:Ze,diffuseRoughnessMap:de,dispersion:et,retroreflection:rt,iridescence:ve,iridescenceMap:ae,iridescenceThicknessMap:Me,sheen:mt,sheenColorMap:Ce,sheenRoughnessMap:se,specularMap:oe,specularColorMap:Ee,specularIntensityMap:N,transmission:ze,transmissionMap:ce,thicknessMap:re,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===Ka&&v.alphaToCoverage===!1,alphaMap:be,alphaTest:we,alphaHash:Ge,combine:v.combine,mapUv:ne&&m(v.map.channel),aoMapUv:Xe&&m(v.aoMap.channel),lightMapUv:Ke&&m(v.lightMap.channel),bumpMapUv:at&&m(v.bumpMap.channel),normalMapUv:je&&m(v.normalMap.channel),displacementMapUv:Mt&&m(v.displacementMap.channel),emissiveMapUv:ot&&m(v.emissiveMap.channel),metalnessMapUv:St&&m(v.metalnessMap.channel),roughnessMapUv:Lt&&m(v.roughnessMap.channel),anisotropyMapUv:We&&m(v.anisotropyMap.channel),clearcoatMapUv:P&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(v.sheenRoughnessMap.channel),specularMapUv:oe&&m(v.specularMap.channel),specularColorMapUv:Ee&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:ce&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:be&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(je||st),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(ne||be),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&je===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:fe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.filter(Le=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:ne&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ti,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:nt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&v.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}l(g,"getParameters");function y(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(S,v),_(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}l(y,"getProgramCacheKey");function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function b(v){let S=f[v.type],L;if(S){let I=Ji[S];L=Hs.clone(I.uniforms)}else L=v.uniforms;return L}l(b,"getUniforms");function A(v,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new FE(i,S,v,r),u.push(L),h.set(S,L)),L}l(A,"acquireProgram");function w(v){if(--v.usedTimes===0){let S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(w,"releaseProgram");function R(v){o.remove(v)}l(R,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}l(kE,"WebGLPrograms");function zE(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(zE,"WebGLProperties");function GE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(GE,"painterSortStable");function __(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(__,"reversePainterSortStable");function v_(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(f,m,g,y,x,_){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:m,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:x,group:_},i[e]=b):(b.id=f.id,b.object=f,b.geometry=m,b.material=g,b.materialVariant=a(f),b.groupOrder=y,b.renderOrder=f.renderOrder,b.z=x,b.group=_),e++,b}l(o,"getNextRenderItem");function c(f,m,g,y,x,_,b){b.reversedDepth===!0&&(x=-x);let A=o(f,m,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):t.push(A)}l(c,"push");function u(f,m,g,y,x,_){let b=o(f,m,g,y,x,_);g.transmission>0?n.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}l(u,"unshift");function h(f,m){t.length>1&&t.sort(f||GE),n.length>1&&n.sort(m||__),r.length>1&&r.sort(m||__)}l(h,"sort");function p(){for(let f=e,m=i.length;f<m;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}l(v_,"WebGLRenderList");function VE(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new v_,i.set(n,[a])):r>=s.length?(a=new v_,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(VE,"WebGLRenderLists");function HE(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(HE,"UniformsCache");function WE(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(WE,"ShadowUniformsCache");var XE=0;function qE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(qE,"shadowCastingAndTexturingLightsFirst");function YE(i){let e=new HE,t=WE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let r=new W,s=new vt,a=new vt;function o(u){let h=0,p=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,g=0,y=0,x=0,_=0,b=0,A=0,w=0,R=0,C=0,v=0,S=0,L=0,I=0;u.sort(qE);for(let G=0,J=u.length;G<J;G++){let U=u[G],q=U.color,ie=U.intensity,O=U.distance,K=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===$i?K=U.shadow.map.texture:K=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=q.r*ie,p+=q.g*ie,f+=q.b*ie;else if(U.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(U.sh.coefficients[H],ie);I++}else if(U.isSunLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,j=t.get(U);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=K;let fe=Z.getViewportCount();for(let ge=0;ge<fe;ge++)n.sunShadowMatrix[y+ge]=Z.getMatrix(ge),n.sunShadowCascade[y+ge]=Z._cascadeData[ge];y+=fe,g++}n.sun[m]=H,m++}else if(U.isDirectionalLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,j=t.get(U);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[x]=j,n.directionalShadowMap[x]=K,n.directionalShadowMatrix[x]=U.shadow.matrix,R++}n.directional[x]=H,x++}else if(U.isSpotLight){let H=e.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(q).multiplyScalar(ie),H.distance=O,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,n.spot[b]=H;let Z=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,Z.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[b]=Z.matrix,U.castShadow){let j=t.get(U);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=K,v++}b++}else if(U.isRectAreaLight){let H=e.get(U);H.color.copy(q).multiplyScalar(ie),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=H,A++}else if(U.isPointLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){let Z=U.shadow,j=t.get(U);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=U.shadow.matrix,C++}n.point[_]=H,_++}else if(U.isHemisphereLight){let H=e.get(U);H.skyColor.copy(U.color).multiplyScalar(ie),H.groundColor.copy(U.groundColor).multiplyScalar(ie),n.hemi[w]=H,w++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let F=n.hash;(F.sunLength!==m||F.directionalLength!==x||F.pointLength!==_||F.spotLength!==b||F.rectAreaLength!==A||F.hemiLength!==w||F.numSunShadows!==g||F.numDirectionalShadows!==R||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==S||F.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=x,n.spot.length=b,n.rectArea.length=A,n.point.length=_,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,F.sunLength=m,F.directionalLength=x,F.pointLength=_,F.spotLength=b,F.rectAreaLength=A,F.hemiLength=w,F.numSunShadows=g,F.numDirectionalShadows=R,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=S,F.numLightProbes=I,n.version=XE++)}l(o,"setup");function c(u,h){let p=0,f=0,m=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let b=0,A=u.length;b<A;b++){let w=u[b];if(w.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),p++}else if(w.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),f++}else if(w.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(w.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(w.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(YE,"WebGLLights");function y_(i){let e=new YE(i),t=[],n=[],r=[];function s(p){h.camera=p,t.length=0,n.length=0,r.length=0}l(s,"init");function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}l(c,"setupLights");function u(p){e.setupView(t,p)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(y_,"WebGLRenderState");function $E(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new y_(i),e.set(r,[o])):s>=a.length?(o=new y_(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l($E,"WebGLRenderStates");var ZE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
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
}`,KE=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],jE=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],b_=new vt,Cl=new W,bm=new W;function QE(i,e,t){let n=new es,r=new He,s=new He,a=new Dt,o=new Cu,c=new Ru,u={},h=t.maxTextureSize,p={[as]:Sn,[Sn]:as,[ti]:ti},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:ZE,fragmentShader:JE}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new yt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let _=this.type;this.render=function(C,v,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===ah&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vl);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Os),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=_!==this.type;J&&v.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(q=>q.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,q=C.length;U<q;U++){let ie=C[U],O=ie.shadow;if(O===void 0){qe("WebGLShadowMap:",ie,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let K=O.getFrameExtents();r.multiply(K),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,O.mapSize.y=s.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||J===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ja){if(ie.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(r.x,r.y,{format:$i,type:Bn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),O.map.texture.name=ie.name+".shadowMap",O.map.depthTexture=new Ar(r.x,r.y,bi),O.map.depthTexture.name=ie.name+".shadowMapDepth",O.map.depthTexture.format=Mr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Vt,O.map.depthTexture.magFilter=Vt}else ie.isPointLight?(O.map=new Pl(r.x),O.map.depthTexture=new cl(r.x,yi)):(O.map=new Nn(r.x,r.y),O.map.depthTexture=new Ar(r.x,r.y,yi)),O.map.depthTexture.name=ie.name+".shadowMap",O.map.depthTexture.format=Mr,this.type===vl?(O.map.depthTexture.compareFunction=H?jf:Kf,O.map.depthTexture.minFilter=Ht,O.map.depthTexture.magFilter=Ht):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Vt,O.map.depthTexture.magFilter=Vt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);let Z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();ie.isPointLight!==!0&&O.updateMatrices(ie,S);let j=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let fe=0;fe<Z;fe++){let ge=O.getCamera(fe);if(ie.isPointLight){let Q=O.camera,pe=O.matrix,le=ie.distance||Q.far;le!==Q.far&&(Q.far=le,Q.updateProjectionMatrix()),Cl.setFromMatrixPosition(ie.matrixWorld),Q.position.copy(Cl),bm.copy(Q.position),bm.add(KE[fe]),Q.up.copy(jE[fe]),Q.lookAt(bm),Q.updateMatrixWorld(),pe.makeTranslation(-Cl.x,-Cl.y,-Cl.z),b_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(b_,Q.coordinateSystem,Q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(O.map),i.clear());let Q=O.getViewport(fe);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),G.viewport(a)}n=O.getFrustum(fe),w(v,S,ge,ie,j,this.type)}O.isPointLightShadow!==!0&&this.type===Ja&&b(O,S),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(L,I,F)};function b(C,v){let S=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new Nn(r.x,r.y,{format:$i,type:Bn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,S,f,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,S,m,y,null)}l(b,"VSMPass");function A(C,v,S,L){let I=null,F=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)I=F;else if(I=S.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let G=I.uuid,J=v.uuid,U=u[G];U===void 0&&(U={},u[G]=U);let q=U[J];q===void 0&&(q=I.clone(),U[J]=q,v.addEventListener("dispose",R)),I=q}if(I.visible=v.visible,I.wireframe=v.wireframe,L===Ja?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:p[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let G=i.properties.get(I);G.light=S}return I}l(A,"getDepthMaterial");function w(C,v,S,L,I,F){if(C.visible===!1)return;if(C.layers.test(I)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===Ja)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);let U=e.update(C),q=C.material;if(Array.isArray(q)){let ie=U.groups;for(let O=0,K=ie.length;O<K;O++){let H=ie[O],Z=q[H.materialIndex];if(Z&&Z.visible){let j=A(C,Z,L,F);C.onBeforeShadow(i,C,v,S,U,j,H),i.renderBufferDirect(S,null,U,j,C,H),C.onAfterShadow(i,C,v,S,U,j,H)}}}else if(q.visible){let ie=A(C,q,L,F);C.onBeforeShadow(i,C,v,S,U,ie,null),i.renderBufferDirect(S,null,U,ie,C,null),C.onAfterShadow(i,C,v,S,U,ie,null)}}let J=C.children;for(let U=0,q=J.length;U<q;U++)w(J[U],v,S,L,I,F)}l(w,"renderObject");function R(C){C.target.removeEventListener("dispose",R);for(let S in u){let L=u[S],I=C.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}l(R,"onMaterialDispose")}l(QE,"WebGLShadowMap");function eA(i,e){function t(){let N=!1,ce=new Dt,re=null,Ae=new Dt(0,0,0,0);return{setMask:l(function(be){re!==be&&!N&&(i.colorMask(be,be,be,be),re=be)},"setMask"),setLocked:l(function(be){N=be},"setLocked"),setClear:l(function(be,we,Ge,nt,_e){_e===!0&&(be*=nt,we*=nt,Ge*=nt),ce.set(be,we,Ge,nt),Ae.equals(ce)===!1&&(i.clearColor(be,we,Ge,nt),Ae.copy(ce))},"setClear"),reset:l(function(){N=!1,re=null,Ae.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let N=!1,ce=!1,re=null,Ae=null,be=null;return{setReversed:l(function(we){if(ce!==we){let Ge=e.get("EXT_clip_control");we?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ce=we;let nt=be;be=null,this.setClear(nt)}},"setReversed"),getReversed:l(function(){return ce},"getReversed"),setTest:l(function(we){we?ue(i.DEPTH_TEST):ee(i.DEPTH_TEST)},"setTest"),setMask:l(function(we){re!==we&&!N&&(i.depthMask(we),re=we)},"setMask"),setFunc:l(function(we){if(ce&&(we=Yx[we]),Ae!==we){switch(we){case hu:i.depthFunc(i.NEVER);break;case du:i.depthFunc(i.ALWAYS);break;case fu:i.depthFunc(i.LESS);break;case za:i.depthFunc(i.LEQUAL);break;case pu:i.depthFunc(i.EQUAL);break;case mu:i.depthFunc(i.GEQUAL);break;case gu:i.depthFunc(i.GREATER);break;case xu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=we}},"setFunc"),setLocked:l(function(we){N=we},"setLocked"),setClear:l(function(we){be!==we&&(be=we,ce&&(we=1-we),i.clearDepth(we))},"setClear"),reset:l(function(){N=!1,re=null,Ae=null,be=null,ce=!1},"reset")}}l(n,"DepthBuffer");function r(){let N=!1,ce=null,re=null,Ae=null,be=null,we=null,Ge=null,nt=null,_e=null;return{setTest:l(function(Ve){N||(Ve?ue(i.STENCIL_TEST):ee(i.STENCIL_TEST))},"setTest"),setMask:l(function(Ve){ce!==Ve&&!N&&(i.stencilMask(Ve),ce=Ve)},"setMask"),setFunc:l(function(Ve,tt,Le){(re!==Ve||Ae!==tt||be!==Le)&&(i.stencilFunc(Ve,tt,Le),re=Ve,Ae=tt,be=Le)},"setFunc"),setOp:l(function(Ve,tt,Le){(we!==Ve||Ge!==tt||nt!==Le)&&(i.stencilOp(Ve,tt,Le),we=Ve,Ge=tt,nt=Le)},"setOp"),setLocked:l(function(Ve){N=Ve},"setLocked"),setClear:l(function(Ve){_e!==Ve&&(i.clearStencil(Ve),_e=Ve)},"setClear"),reset:l(function(){N=!1,ce=null,re=null,Ae=null,be=null,we=null,Ge=null,nt=null,_e=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},p={},f={},m=new WeakMap,g=[],y=null,x=!1,_=null,b=null,A=null,w=null,R=null,C=null,v=null,S=new Be(0,0,0),L=0,I=!1,F=null,G=null,J=null,U=null,q=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=K>=2);let Z=null,j={},fe=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Q=new Dt().fromArray(fe),pe=new Dt().fromArray(ge);function le(N,ce,re,Ae){let be=new Uint8Array(4),we=i.createTexture();i.bindTexture(N,we),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<re;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ce+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return we}l(le,"createTexture");let he={};he[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(za),at(!1),je(Pf),ue(i.CULL_FACE),Xe(Os);function ue(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}l(ue,"enable");function ee(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}l(ee,"disable");function me(N,ce){return f[N]!==ce?(i.bindFramebuffer(N,ce),f[N]=ce,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}l(me,"bindFramebuffer");function ne(N,ce){let re=g,Ae=!1;if(N){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let be=N.textures;if(re.length!==be.length||re[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ge=be.length;we<Ge;we++)re[we]=i.COLOR_ATTACHMENT0+we;re.length=be.length,Ae=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(re)}l(ne,"drawBuffers");function xe(N){return y!==N?(i.useProgram(N),y=N,!0):!1}l(xe,"useProgram");let Se={[Bs]:i.FUNC_ADD,[gx]:i.FUNC_SUBTRACT,[xx]:i.FUNC_REVERSE_SUBTRACT};Se[_x]=i.MIN,Se[vx]=i.MAX;let ye={[yx]:i.ZERO,[bx]:i.ONE,[Mx]:i.SRC_COLOR,[Nf]:i.SRC_ALPHA,[Cx]:i.SRC_ALPHA_SATURATE,[Ax]:i.DST_COLOR,[wx]:i.DST_ALPHA,[Sx]:i.ONE_MINUS_SRC_COLOR,[Uf]:i.ONE_MINUS_SRC_ALPHA,[Tx]:i.ONE_MINUS_DST_COLOR,[Ex]:i.ONE_MINUS_DST_ALPHA,[Rx]:i.CONSTANT_COLOR,[Px]:i.ONE_MINUS_CONSTANT_COLOR,[Ix]:i.CONSTANT_ALPHA,[Lx]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(N,ce,re,Ae,be,we,Ge,nt,_e,Ve){if(N===Os){x===!0&&(ee(i.BLEND),x=!1);return}if(x===!1&&(ue(i.BLEND),x=!0),N!==mx){if(N!==_||Ve!==I){if((b!==Bs||R!==Bs)&&(i.blendEquation(i.FUNC_ADD),b=Bs,R=Bs),Ve)switch(N){case Ka:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case If:i.blendFunc(i.ONE,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case Ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case If:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lf:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Df:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}A=null,w=null,C=null,v=null,S.set(0,0,0),L=0,_=N,I=Ve}return}be=be||ce,we=we||re,Ge=Ge||Ae,(ce!==b||be!==R)&&(i.blendEquationSeparate(Se[ce],Se[be]),b=ce,R=be),(re!==A||Ae!==w||we!==C||Ge!==v)&&(i.blendFuncSeparate(ye[re],ye[Ae],ye[we],ye[Ge]),A=re,w=Ae,C=we,v=Ge),(nt.equals(S)===!1||_e!==L)&&(i.blendColor(nt.r,nt.g,nt.b,_e),S.copy(nt),L=_e),_=N,I=!1}l(Xe,"setBlending");function Ke(N,ce){N.side===ti?ee(i.CULL_FACE):ue(i.CULL_FACE);let re=N.side===Sn;ce&&(re=!re),at(re),N.blending===Ka&&N.transparent===!1?Xe(Os):Xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let Ae=N.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}l(Ke,"setMaterial");function at(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}l(at,"setFlipSided");function je(N){N!==fx?(ue(i.CULL_FACE),N!==G&&(N===Pf?i.cullFace(i.BACK):N===px?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),G=N}l(je,"setCullFace");function Mt(N){N!==J&&(O&&i.lineWidth(N),J=N)}l(Mt,"setLineWidth");function ot(N,ce,re){N?(ue(i.POLYGON_OFFSET_FILL),(U!==ce||q!==re)&&(U=ce,q=re,a.getReversed()&&(ce=-ce,re=-re),i.polygonOffset(ce,re))):ee(i.POLYGON_OFFSET_FILL)}l(ot,"setPolygonOffset");function St(N){N?ue(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}l(St,"setScissorTest");function Lt(N){N===void 0&&(N=i.TEXTURE0+ie-1),Z!==N&&(i.activeTexture(N),Z=N)}l(Lt,"activeTexture");function st(N,ce,re){re===void 0&&(Z===null?re=i.TEXTURE0+ie-1:re=Z);let Ae=j[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[re]=Ae),(Ae.type!==N||Ae.texture!==ce)&&(Z!==re&&(i.activeTexture(re),Z=re),i.bindTexture(N,ce||he[N]),Ae.type=N,Ae.texture=ce)}l(st,"bindTexture");function k(){let N=j[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}l(k,"unbindTexture");function Ze(){try{i.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(Ze,"compressedTexImage2D");function et(){try{i.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(et,"compressedTexImage3D");function rt(){try{i.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(rt,"texSubImage2D");function ve(){try{i.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(ve,"texSubImage3D");function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(mt,"compressedTexSubImage2D");function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(ze,"compressedTexSubImage3D");function We(){try{i.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(We,"texStorage2D");function P(){try{i.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(P,"texStorage3D");function M(){try{i.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(M,"texImage2D");function X(){try{i.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(X,"texImage3D");function de(N){return p[N]!==void 0?p[N]:i.getParameter(N)}l(de,"getParameter");function ae(N,ce){p[N]!==ce&&(i.pixelStorei(N,ce),p[N]=ce)}l(ae,"pixelStorei");function Me(N){Q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}l(Me,"scissor");function Ce(N){pe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}l(Ce,"viewport");function se(N,ce){let re=u.get(ce);re===void 0&&(re=new WeakMap,u.set(ce,re));let Ae=re.get(N);Ae===void 0&&(Ae=i.getUniformBlockIndex(ce,N.name),i.uniformBlockBinding(ce,Ae,Ae),re.set(N,Ae))}l(se,"updateUBOMapping");function oe(N,ce,re){let be=u.get(ce).get(N);c[be]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,be,re),c[be]=re)}l(oe,"uniformBlockBinding");function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Z=null,j={},f={},c={},m=new WeakMap,g=[],y=null,x=!1,_=null,b=null,A=null,w=null,R=null,C=null,v=null,S=new Be(0,0,0),L=0,I=!1,F=null,G=null,J=null,U=null,q=null,Q.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(Ee,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:ee,bindFramebuffer:me,drawBuffers:ne,useProgram:xe,setBlending:Xe,setMaterial:Ke,setFlipSided:at,setCullFace:je,setLineWidth:Mt,setPolygonOffset:ot,setScissorTest:St,activeTexture:Lt,bindTexture:st,unbindTexture:k,compressedTexImage2D:Ze,compressedTexImage3D:et,texImage2D:M,texImage3D:X,pixelStorei:ae,getParameter:de,updateUBOMapping:se,uniformBlockBinding:oe,texStorage2D:We,texStorage3D:P,texSubImage2D:rt,texSubImage3D:ve,compressedTexSubImage2D:mt,compressedTexSubImage3D:ze,scissor:Me,viewport:Ce,reset:Ee}}l(eA,"WebGLState");function tA(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,h=new WeakMap,p=new Set,f,m=new WeakMap,g=new Set,y=new FinalizationRegistry(P=>g.delete(P)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return x?new OffscreenCanvas(P,M):el("canvas")}l(_,"createCanvas");function b(P,M,X){let de=1,ae=We(P);if((ae.width>X||ae.height>X)&&(de=X/Math.max(ae.width,ae.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Me=Math.floor(de*ae.width),Ce=Math.floor(de*ae.height);f===void 0&&(f=_(Me,Ce));let se=M?_(Me,Ce):f;return se.width=Me,se.height=Ce,se.getContext("2d").drawImage(P,0,0,Me,Ce),qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Me+"x"+Ce+")."),se}else return"data"in P&&qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}l(b,"resizeImage");function A(P){return P.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function w(P){i.generateMipmap(P)}l(w,"generateMipmap");function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function C(P,M,X,de,ae,Me=!1){if(P!==null){if(i[P]!==void 0)return i[P];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ce;de&&(Ce=e.get("EXT_texture_norm16"),Ce||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=M;if(M===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8),X===i.UNSIGNED_SHORT&&Ce&&(se=Ce.R16_EXT),X===i.SHORT&&Ce&&(se=Ce.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),M===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8),X===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RG16_EXT),X===i.SHORT&&Ce&&(se=Ce.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RG8UI),X===i.UNSIGNED_SHORT&&(se=i.RG16UI),X===i.UNSIGNED_INT&&(se=i.RG32UI),X===i.BYTE&&(se=i.RG8I),X===i.SHORT&&(se=i.RG16I),X===i.INT&&(se=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGB8UI),X===i.UNSIGNED_SHORT&&(se=i.RGB16UI),X===i.UNSIGNED_INT&&(se=i.RGB32UI),X===i.BYTE&&(se=i.RGB8I),X===i.SHORT&&(se=i.RGB16I),X===i.INT&&(se=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),X===i.UNSIGNED_INT&&(se=i.RGBA32UI),X===i.BYTE&&(se=i.RGBA8I),X===i.SHORT&&(se=i.RGBA16I),X===i.INT&&(se=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGB16_EXT),X===i.SHORT&&Ce&&(se=Ce.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),M===i.RGBA){let oe=Me?Qo:ht.getTransfer(ae);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=oe===xt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGBA16_EXT),X===i.SHORT&&Ce&&(se=Ce.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}l(C,"getInternalFormat");function v(P,M){let X;return P?M===null||M===yi||M===zs?X=i.DEPTH24_STENCIL8:M===bi?X=i.DEPTH32F_STENCIL8:M===Qa&&(X=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===zs?X=i.DEPTH_COMPONENT24:M===bi?X=i.DEPTH_COMPONENT32F:M===Qa&&(X=i.DEPTH_COMPONENT16),X}l(v,"getInternalDepthFormat");function S(P,M){return A(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==Ht?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}l(S,"getMipLevels");function L(P){let M=new WeakRef(P);n.get(P).__ref=M,g.add(M),y.register(P,M,M)}l(L,"track");function I(P){let M=n.get(P).__ref;M!==void 0&&(g.delete(M),y.unregister(M))}l(I,"untrack");function F(P){J(P.target)}l(F,"onTextureDispose");function G(P){U(P.target)}l(G,"onRenderTargetDispose");function J(P){P.removeEventListener("dispose",F),I(P),ie(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}l(J,"destroyTexture");function U(P){P.removeEventListener("dispose",G),I(P),K(P)}l(U,"destroyRenderTarget");function q(){for(let P of g){let M=P.deref();M!==void 0&&(M.isRenderTarget===!0?U(M):J(M))}g.clear(),p.clear()}l(q,"dispose");function ie(P){let M=n.get(P);if(M.__webglInit===void 0)return;let X=P.source,de=m.get(X);if(de){let ae=de[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&O(P),Object.keys(de).length===0&&m.delete(X)}n.remove(P)}l(ie,"deallocateTexture");function O(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let X=P.source,de=m.get(X);delete de[M.__cacheKey],a.memory.textures--}l(O,"deleteTexture");function K(P){let M=n.get(P);M.__depthDisposeCallback&&M.__depthDisposeCallback();let X=P.depthTexture;if(X&&X.renderTarget===P&&J(X),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(M.__webglFramebuffer[ae]))for(let Me=0;Me<M.__webglFramebuffer[ae].length;Me++)i.deleteFramebuffer(M.__webglFramebuffer[ae][Me]);else i.deleteFramebuffer(M.__webglFramebuffer[ae]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ae])}else{if(Array.isArray(M.__webglFramebuffer))for(let ae=0;ae<M.__webglFramebuffer.length;ae++)i.deleteFramebuffer(M.__webglFramebuffer[ae]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ae=0;ae<M.__webglColorRenderbuffer.length;ae++)M.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ae]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let de=P.textures;for(let ae=0,Me=de.length;ae<Me;ae++){let Ce=n.get(de[ae]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(de[ae])}n.remove(P)}l(K,"deallocateRenderTarget");let H=0;function Z(){H=0}l(Z,"resetTextureUnits");function j(){return H}l(j,"getTextureUnits");function fe(P){H=P}l(fe,"setTextureUnits");function ge(){let P=H;return P>=r.maxTextures&&qe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,P}l(ge,"allocateTextureUnit");function Q(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}l(Q,"getTextureCacheKey");function pe(P,M){let X=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let de=P.image;if(de===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(X,P,M);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}l(pe,"setTexture2D");function le(P,M){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Ke(X,P,M);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}l(le,"setTexture2DArray");function he(P,M){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Ke(X,P,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}l(he,"setTexture3D");function ue(P,M){let X=n.get(P);if(P.version>0&&X.__version!==P.version){at(X,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}l(ue,"setTextureCube");let ee={[zi]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[_u]:i.MIRRORED_REPEAT},me={[Vt]:i.NEAREST,[Ux]:i.NEAREST_MIPMAP_NEAREST,[bl]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[ch]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},ne={[kx]:i.NEVER,[Qf]:i.ALWAYS,[zx]:i.LESS,[Kf]:i.LEQUAL,[Gx]:i.EQUAL,[jf]:i.GEQUAL,[Vx]:i.GREATER,[Hx]:i.NOTEQUAL};function xe(P,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ht||M.magFilter===ch||M.magFilter===bl||M.magFilter===On||M.minFilter===Ht||M.minFilter===ch||M.minFilter===bl||M.minFilter===On)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==bl&&M.minFilter!==On||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}l(xe,"setTextureParameters");function Se(P,M){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F),L(M));let de=M.source,ae=m.get(de);ae===void 0&&(ae={},m.set(de,ae));let Me=Q(M);if(Me!==P.__cacheKey){ae[Me]===void 0&&(ae[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ae[Me].usedTimes++;let Ce=ae[P.__cacheKey];Ce!==void 0&&(ae[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&O(M)),P.__cacheKey=Me,P.__webglTexture=ae[Me].texture}return X}l(Se,"initTexture");function ye(P,M,X){return Math.floor(Math.floor(P/X)/M)}l(ye,"getRow");function Xe(P,M,X,de){let Me=P.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,de,M.data);else{Me.sort((N,ce)=>N.start-ce.start);let Ce=0;for(let N=1;N<Me.length;N++){let ce=Me[Ce],re=Me[N],Ae=ce.start+ce.count,be=ye(re.start,M.width,4),we=ye(ce.start,M.width,4);re.start<=Ae+1&&be===we&&ye(re.start+re.count-1,M.width,4)===be?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ce,Me[Ce]=re)}Me.length=Ce+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let N=0,ce=Me.length;N<ce;N++){let re=Me[N],Ae=Math.floor(re.start/4),be=Math.ceil(re.count/4),we=Ae%M.width,Ge=Math.floor(Ae/M.width),nt=be,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,we,Ge,nt,_e,X,de,M.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}l(Xe,"updateTexture");function Ke(P,M,X){let de=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=i.TEXTURE_3D);let ae=Se(P,M),Me=M.source;t.bindTexture(de,P.__webglTexture,i.TEXTURE0+X);let Ce=n.get(Me);if(Me.version!==Ce.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let _e=ht.getPrimaries(ht.workingColorSpace),Ve=M.colorSpace===Mi?null:ht.getPrimaries(M.colorSpace),tt=M.colorSpace===Mi||_e===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let oe=b(M.image,!1,r.maxTextureSize);oe=ze(M,oe);let Ee=s.convert(M.format,M.colorSpace),N=s.convert(M.type),ce=C(M.internalFormat,Ee,N,M.normalized,M.colorSpace,M.isVideoTexture);xe(de,M);let re,Ae=M.mipmaps,be=M.isVideoTexture!==!0,we=Ce.__version===void 0||ae===!0,Ge=Me.dataReady,nt=S(M,oe);if(M.isDepthTexture)ce=v(M.format===Cr,M.type),we&&(be?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,N,null));else if(M.isDataTexture)if(Ae.length>0){be&&we&&t.texStorage2D(i.TEXTURE_2D,nt,ce,Ae[0].width,Ae[0].height);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],be?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,N,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ee,N,re.data);M.generateMipmaps=!1}else be?(we&&t.texStorage2D(i.TEXTURE_2D,nt,ce,oe.width,oe.height),Ge&&Xe(M,oe,Ee,N)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,N,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){be&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ce,Ae[0].width,Ae[0].height,oe.depth);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)if(re=Ae[_e],M.format!==kn)if(Ee!==null)if(be){if(Ge)if(M.layerUpdates.size>0){let tt=sp(re.width,re.height,M.format,M.type);for(let Le of M.layerUpdates){let _t=re.data.subarray(Le*tt/re.data.BYTES_PER_ELEMENT,(Le+1)*tt/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Le,re.width,re.height,1,Ee,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ee,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,re.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ee,N,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,Ee,N,re.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{be&&we&&t.texStorage2D(i.TEXTURE_2D,nt,ce,Ae[0].width,Ae[0].height);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],M.format!==kn?Ee!==null?be?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,re.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,re.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,N,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ee,N,re.data)}else if(M.isDataArrayTexture)if(be){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ce,oe.width,oe.height,oe.depth),Ge)if(M.layerUpdates.size>0){let _e=sp(oe.width,oe.height,M.format,M.type);for(let Ve of M.layerUpdates){let tt=oe.data.subarray(Ve*_e/oe.data.BYTES_PER_ELEMENT,(Ve+1)*_e/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,oe.width,oe.height,1,Ee,N,tt)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,N,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Ee,N,oe.data);else if(M.isData3DTexture)be?(we&&t.texStorage3D(i.TEXTURE_3D,nt,ce,oe.width,oe.height,oe.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,N,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Ee,N,oe.data);else if(M.isFramebufferTexture){if(we)if(be)t.texStorage2D(i.TEXTURE_2D,nt,ce,oe.width,oe.height);else{let _e=oe.width,Ve=oe.height;for(let tt=0;tt<nt;tt++)t.texImage2D(i.TEXTURE_2D,tt,ce,_e,Ve,0,Ee,N,null),_e>>=1,Ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),oe.parentNode!==_e){_e.appendChild(oe),p.add(M),_e.onpaint=Ve=>{let tt=Ve.changedElements;for(let Le of p)tt.includes(Le.image)&&(Le.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let tt=i.RGBA,Le=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Le,_t,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(be&&we){let _e=We(Ae[0]);t.texStorage2D(i.TEXTURE_2D,nt,ce,_e.width,_e.height)}for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],be?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ee,N,re):t.texImage2D(i.TEXTURE_2D,_e,ce,Ee,N,re);M.generateMipmaps=!1}else if(be){if(we){let _e=We(oe);t.texStorage2D(i.TEXTURE_2D,nt,ce,_e.width,_e.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,N,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Ee,N,oe);A(M)&&M.mipmapsAutoUpdate===!0&&w(de),Ce.__version=Me.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}l(Ke,"uploadTexture");function at(P,M,X){if(M.image.length!==6)return;let de=Se(P,M),ae=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);let Me=n.get(ae);if(ae.version!==Me.__version||de===!0){t.activeTexture(i.TEXTURE0+X);let Ce=ht.getPrimaries(ht.workingColorSpace),se=M.colorSpace===Mi?null:ht.getPrimaries(M.colorSpace),oe=M.colorSpace===Mi||Ce===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let Le=0;Le<6;Le++)!Ee&&!N?ce[Le]=b(M.image[Le],!0,r.maxCubemapSize):ce[Le]=N?M.image[Le].image:M.image[Le],ce[Le]=ze(M,ce[Le]);let re=ce[0],Ae=s.convert(M.format,M.colorSpace),be=s.convert(M.type),we=C(M.internalFormat,Ae,be,M.normalized,M.colorSpace),Ge=M.isVideoTexture!==!0,nt=Me.__version===void 0||de===!0,_e=ae.dataReady,Ve=S(M,re);xe(i.TEXTURE_CUBE_MAP,M);let tt;if(M.isDepthTexture){if(we=v(M.format===Cr,M.type),nt)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,we,re.width,re.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,re.width,re.height,0,Ae,be,null)}else if(Ee){Ge&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,re.width,re.height);for(let Le=0;Le<6;Le++){tt=ce[Le].mipmaps;for(let _t=0;_t<tt.length;_t++){let $t=tt[_t];M.format!==kn?Ae!==null?Ge?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,0,0,$t.width,$t.height,Ae,$t.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,we,$t.width,$t.height,0,$t.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,0,0,$t.width,$t.height,Ae,be,$t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,we,$t.width,$t.height,0,Ae,be,$t.data)}}}else{if(tt=M.mipmaps,Ge&&nt){tt.length>0&&Ve++;let Le=We(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(N){Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ce[Le].width,ce[Le].height,Ae,be,ce[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,ce[Le].width,ce[Le].height,0,Ae,be,ce[Le].data);for(let _t=0;_t<tt.length;_t++){let Gr=tt[_t].image[Le].image;Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,0,0,Gr.width,Gr.height,Ae,be,Gr.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,we,Gr.width,Gr.height,0,Ae,be,Gr.data)}}else{Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ae,be,ce[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,Ae,be,ce[Le]);for(let _t=0;_t<tt.length;_t++){let $t=tt[_t];Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,0,0,Ae,be,$t.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,we,Ae,be,$t.image[Le])}}}A(M)&&M.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),Me.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}l(at,"uploadCubeTexture");function je(P,M,X,de,ae,Me){let Ce=s.convert(X.format,X.colorSpace),se=s.convert(X.type),oe=C(X.internalFormat,Ce,se,X.normalized,X.colorSpace),Ee=n.get(M),N=n.get(X);if(N.__renderTarget=M,!Ee.__hasExternalTextures){let ce=Math.max(1,M.width>>Me),re=Math.max(1,M.height>>Me);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Me,oe,ce,re,M.depth,0,Ce,se,null):t.texImage2D(ae,Me,oe,ce,re,0,Ce,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,N.__webglTexture,0,rt(M)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,N.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(je,"setupFrameBufferTexture");function Mt(P,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let de=M.depthTexture,ae=de&&de.isDepthTexture?de.type:null,Me=v(M.stencilBuffer,ae),Ce=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(M),Me,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(M),Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,P)}else{let de=M.textures;for(let ae=0;ae<de.length;ae++){let Me=de[ae],Ce=s.convert(Me.format,Me.colorSpace),se=s.convert(Me.type),oe=C(Me.internalFormat,Ce,se,Me.normalized,Me.colorSpace);ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(M),oe,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(M),oe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,oe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Mt,"setupRenderBufferStorage");function ot(P,M,X){let de=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(M.depthTexture);ae.__renderTarget=M;let Me=de?M.depthTexture.image[0]:M.depthTexture.image;(!ae.__webglTexture||Me.width!==M.width||Me.height!==M.height)&&(Me.width=M.width,Me.height=M.height,M.depthTexture.needsUpdate=!0),de?ue(M.depthTexture,0):pe(M.depthTexture,0);let Ce=ae.__webglTexture,se=rt(M),oe=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,Ee=M.depthTexture.format===Cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Mr)ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else if(M.depthTexture.format===Cr)ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(ot,"setupDepthTexture");function St(P){let M=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let de=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){let ae=l(()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",ae)},"disposeEvent");de.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=de}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let de=0;de<6;de++)ot(M.__webglFramebuffer[de],P,de);else P.texture.mipmaps.length>0?ot(M.__webglFramebuffer[0],P,0):ot(M.__webglFramebuffer,P,0);else if(X){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=i.createRenderbuffer(),Mt(M.__webglDepthbuffer[de],P,!1);else{let ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Mt(M.__webglDepthbuffer,P,!1);else{let ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(St,"setupDepthRenderbuffer");function Lt(P,M,X){let de=n.get(P);M!==void 0&&je(de.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&St(P)}l(Lt,"rebindTextures");function st(P){let M=P.texture,X=n.get(P),de=n.get(M);P.addEventListener("dispose",G),L(P);let ae=P.textures,Me=P.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=M.version,a.memory.textures++),Me){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let oe=0;oe<M.mipmaps.length;oe++)X.__webglFramebuffer[se][oe]=i.createFramebuffer()}else X.__webglFramebuffer[se]=i.createFramebuffer()}else{if(M.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)X.__webglFramebuffer[se]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let se=0,oe=ae.length;se<oe;se++){let Ee=n.get(ae[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ve(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<ae.length;se++){let oe=ae[se];X.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[se]);let Ee=s.convert(oe.format,oe.colorSpace),N=s.convert(oe.type),ce=C(oe.internalFormat,Ee,N,oe.normalized,oe.colorSpace,P.isXRRenderTarget===!0),re=rt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,X.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),xe(i.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)je(X.__webglFramebuffer[se][oe],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else je(X.__webglFramebuffer[se],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(M)?w(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let se=0,oe=ae.length;se<oe;se++){let Ee=ae[se],N=n.get(Ee),ce=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,N.__webglTexture),xe(ce,Ee),je(X.__webglFramebuffer,P,Ee,i.COLOR_ATTACHMENT0+se,ce,0),A(Ee)&&w(ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,de.__webglTexture),xe(se,M),M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)je(X.__webglFramebuffer[oe],P,M,i.COLOR_ATTACHMENT0,se,oe);else je(X.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,se,0);A(M)?w(se):M.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&St(P)}l(st,"setupRenderTarget");function k(P){let M=P.textures;for(let X=0,de=M.length;X<de;X++){let ae=M[X];if(A(ae)&&ae.mipmapsAutoUpdate===!0){let Me=R(P),Ce=n.get(ae).__webglTexture;t.bindTexture(Me,Ce),w(Me),t.unbindTexture()}}}l(k,"updateRenderTargetMipmap");let Ze=[];function et(P){if(P.samples>0){if(ve(P)===!1){let M=P.textures,X=P.width,de=P.height,ae=i.COLOR_BUFFER_BIT,Me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(P),se=M.length>1;if(se)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let N=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,X,de,0,0,X,de,ae,i.NEAREST),c===!0&&(Ze.length=0,Ze.push(i.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ze.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let N=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}l(et,"updateMultisampleRenderTarget");function rt(P){return Math.min(r.maxSamples,P.samples)}l(rt,"getRenderTargetSamples");function ve(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}l(ve,"useMultisampledRTT");function mt(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}l(mt,"updateVideoTexture");function ze(P,M){let X=P.colorSpace,de=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==jo&&X!==Mi&&(ht.getTransfer(X)===xt?(de!==kn||ae!==hn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",X)),M}l(ze,"verifyColorSpace");function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}l(We,"getDimensions"),this.allocateTextureUnit=ge,this.resetTextureUnits=Z,this.getTextureUnits=j,this.setTextureUnits=fe,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=he,this.setTextureCube=ue,this.rebindTextures=Lt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ve,this.dispose=q}l(tA,"WebGLTextures");function nA(i,e){function t(n,r=Mi){let s,a=ht.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wf)return i.BYTE;if(n===Xf)return i.SHORT;if(n===Qa)return i.UNSIGNED_SHORT;if(n===uh)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===$f)return i.ALPHA;if(n===Zf)return i.RGB;if(n===kn)return i.RGBA;if(n===Mr)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===Jf)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===ph)return i.RG_INTEGER;if(n===mh)return i.RGBA_INTEGER;if(n===Ml||n===Sl||n===wl||n===El)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===xh||n===_h||n===vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===bh||n===Mh||n===Sh||n===wh||n===Al||n===Eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yh||n===bh)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sh)return s.COMPRESSED_R11_EAC;if(n===wh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return s.COMPRESSED_RG11_EAC;if(n===Eh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ah||n===Th||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ah)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ch)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ph)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ih)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zh||n===Gh||n===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===zh)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===Wh||n===Tl||n===Xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(nA,"WebGLUtils");var iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
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

}`,Om=class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:iA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(Om,"WebXRDepthSensing");var Cm=Om,Bm=class Bm extends Gi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,g=null,y=typeof XRWebGLBinding<"u",x=new Cm,_={},b=t.getContextAttributes(),A=null,w=null,R=[],C=[],v=new He,S=null,L=null,I=new vn;I.viewport=new Dt;let F=new vn;F.viewport=new Dt;let G=[I,F],J=new Gu,U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=R[Q];return pe===void 0&&(pe=new Wa,R[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=R[Q];return pe===void 0&&(pe=new Wa,R[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=R[Q];return pe===void 0&&(pe=new Wa,R[Q]=pe),pe.getHandSpace()};function ie(Q){let pe=C.indexOf(Q.inputSource);if(pe===-1)return;let le=R[pe];le!==void 0&&(le.update(Q.inputSource,Q.frame,u||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}l(ie,"onSessionEvent");function O(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",K);for(let Q=0;Q<R.length;Q++){let pe=C[Q];pe!==null&&(C[Q]=null,R[Q].disconnect(pe))}U=null,q=null,x.reset();for(let Q in _)delete _[Q];if(e.setRenderTarget(A),m=null,f=null,p=null,r=null,w=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),L!==null){let Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}l(O,"onSessionEnd"),this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",O),r.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,he=null,ue=null;b.depth&&(ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?Cr:Mr,he=b.stencil?zs:yi);let ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Nn(f.textureWidth,f.textureHeight,{format:kn,type:hn,depthTexture:new Ar(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Nn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(Q){for(let pe=0;pe<Q.removed.length;pe++){let le=Q.removed[pe],he=C.indexOf(le);he>=0&&(C[he]=null,R[he].disconnect(le))}for(let pe=0;pe<Q.added.length;pe++){let le=Q.added[pe],he=C.indexOf(le);if(he===-1){for(let ee=0;ee<R.length;ee++)if(ee>=C.length){C.push(le),he=ee;break}else if(C[ee]===null){C[ee]=le,he=ee;break}if(he===-1)break}let ue=R[he];ue&&ue.connect(le)}}l(K,"onInputSourcesChange");function H(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}l(H,"updateCamera"),this.updateCamera=function(Q){if(r===null)return;let pe=Q.near,le=Q.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(le=x.depthFar)),J.near=F.near=I.near=pe,J.far=F.far=I.far=le,(U!==J.near||q!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),U=J.near,q=J.far),J.layers.mask=Q.layers.mask|6,I.layers.mask=J.layers.mask&-5,F.layers.mask=J.layers.mask&-3;let he=Q.parent,ue=J.cameras;H(J,he);for(let ee=0;ee<ue.length;ee++)H(ue[ee],he);J.projectionMatrix.copy(I.projectionMatrix),J.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),Z(Q,J,he)};function Z(Q,pe,le){le===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=yu*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}l(Z,"updateUserCamera"),this.getCamera=function(){return J},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(Q){return _[Q]};let j=null;function fe(Q,pe){if(h=pe.getViewerPose(u||a),g=pe,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let he=!1;le.length!==J.cameras.length&&(J.cameras.length=0,he=!0);for(let ne=0;ne<le.length;ne++){let xe=le[ne],Se=null;if(m!==null)Se=m.getViewport(xe);else{let Xe=p.getViewSubImage(f,xe);Se=Xe.viewport,ne===0&&(e.setRenderTargetTextures(w,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(w))}let ye=G[ne];ye===void 0&&(ye=new vn,ye.layers.enable(ne),ye.viewport=new Dt,G[ne]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),ne===0&&(J.matrix.copy(ye.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),he===!0&&J.cameras.push(ye)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let ne=p.getDepthInformation(le[0]);ne&&ne.isValid&&ne.texture&&x.init(ne,r.renderState)}if(ue&&ue.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let ne=0;ne<le.length;ne++){let xe=le[ne].camera;if(xe){let Se=_[xe];Se||(Se=new ul,_[xe]=Se);let ye=p.getCameraImage(xe);Se.sourceTexture=ye}}}}for(let le=0;le<R.length;le++){let he=C[le],ue=R[le];he!==null&&ue!==void 0&&ue.update(he,pe,u||a)}j&&j(Q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}l(fe,"onAnimationFrame");let ge=new M_;ge.setAnimationLoop(fe),this.setAnimationLoop=function(Q){j=Q},this.dispose=function(){}}};l(Bm,"WebXRManager");var Rm=Bm,sA=new vt,L_=new $e;L_.set(-1,0,0,0,1,0,0,0,1);function aA(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,np(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function r(x,_,b,A,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),f(x,_),_.isMeshPhysicalMaterial&&m(x,_,w)):_.isMeshMatcapMaterial?(s(x,_),g(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),y(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,b,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Sn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Sn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let b=e.get(_),A=b.envMap,w=b.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(L_),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(s,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,b,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*b,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(p,"refreshUniformsToon");function f(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(f,"refreshUniformsStandard");function m(x,_,b){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Sn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let b=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(aA,"WebGLMaterials");function oA(i,e,t,n){let r={},s={};function a(b,A){let w=A.program;n.uniformBlockBinding(b,w,r[b.id])}l(a,"bind");function o(b,A){let w=r[b.id];w===void 0&&(g(b),w=c(b),r[b.id]=w,b.addEventListener("dispose",x));let R=A.program;n.updateUBOMapping(b,R);let C=e.render.frame;s[b.id]!==C&&(u(b),s[b.id]=C)}l(o,"update");function c(b){let A=i.createBuffer(),w=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(b){let A=r[b.id],w=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=w.length;C<v;C++){let S=w[C];if(Array.isArray(S))for(let L=0,I=S.length;L<I;L++)h(S[L],C,L,R);else h(S,C,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(b,A,w,R){if(f(b,A,w,R)===!0){let C=b.__offset,v=b.value;if(Array.isArray(v)){let S=0;for(let L=0;L<v.length;L++){let I=v[L],F=y(I,!0);p(I,b.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}l(h,"updateUniform");function p(b,A,w){typeof b=="number"||typeof b=="boolean"?A[w]=b:b.isMatrix3?(A[w]=b.elements[0],A[w+1]=b.elements[1],A[w+2]=b.elements[2],A[w+3]=0,A[w+4]=b.elements[3],A[w+5]=b.elements[4],A[w+6]=b.elements[5],A[w+7]=0,A[w+8]=b.elements[6],A[w+9]=b.elements[7],A[w+10]=b.elements[8],A[w+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-w),w):b.toArray(A,w)}l(p,"writeUniformValue");function f(b,A,w,R){let C=b.value,v=A+"_"+w;if(Array.isArray(C)){R[v]===void 0&&(R[v]=[]);let S=R[v],L=!1;for(let I=0;I<C.length;I++)m(C[I],S,I)===!0&&(L=!0);return L}return m(C,R,v)}l(f,"hasUniformChanged");function m(b,A,w){if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:ArrayBuffer.isView(b)?A[w]=b.slice():A[w]=b.clone(),!0;{let R=A[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}l(m,"hasValueChanged");function g(b){let A=b.uniforms,w=0,R=16;for(let v=0,S=A.length;v<S;v++){let L=Array.isArray(A[v])?A[v]:[A[v]];for(let I=0,F=L.length;I<F;I++){let G=L[I],J=Array.isArray(G.value)?G.value:[G.value],U=Array.isArray(A[v])||Array.isArray(G.value),q=w;for(let O=0,K=J.length;O<K;O++){let H=J[O],Z=y(H,U),j=w%R,fe=j%Z.boundary,ge=j+fe;w+=fe,ge!==0&&R-ge<Z.storage&&(w+=R-ge),O===0&&(q=w),w+=Z.storage}let ie=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new ie((w-q)/Float32Array.BYTES_PER_ELEMENT),G.__offset=q}}let C=w%R;return C>0&&(w+=R-C),b.__size=w,b.__cache={},this}l(g,"prepareUniformsGroup");function y(b,A){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=16,w.storage=48):b.isMatrix4?(w.boundary=16,w.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}l(y,"getUniformSize");function x(b){let A=b.target;A.removeEventListener("dispose",x),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let b in r)i.deleteBuffer(r[b]);r={},s={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(oA,"WebGLUniformsGroups");var lA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function cA(){return Zi===null&&(Zi=new $a(lA,16,16,$i,Bn),Zi.name="DFG_LUT",Zi.minFilter=Ht,Zi.magFilter=Ht,Zi.wrapS=Qn,Zi.wrapT=Qn,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}l(cA,"getDFGLUT");var km=class km{constructor(e={}){let{canvas:t=Wx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=hn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,x=new Set([mh,ph,fh]),_=new Set([hn,yi,Qa,zs,hh,dh]),b=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},R=null,C=null,v=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,G=null,J=null,U=null,q=null;this._outputColorSpace=Gt;let ie=0,O=0,K=null,H=-1,Z=null,j=new Dt,fe=new Dt,ge=null,Q=new Be(0),pe=0,le=t.width,he=t.height,ue=1,ee=null,me=null,ne=new Dt(0,0,le,he),xe=new Dt(0,0,le,he),Se=!1,ye=new es,Xe=new Eu,Ke=!1,at=!1,je=new vt,Mt=new W,ot=new Dt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function st(){return K===null?ue:1}l(st,"getTargetPixelRatio");let k=n;function Ze(E,B){return t.getContext(E,B)}l(Ze,"getContext");let et,rt,ve,mt,ze,We,P,M,X,de,ae,Me,Ce,se,oe,Ee,N,ce,re,Ae,be,we,Ge;try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),k===null){let B="webgl2";if(k=Ze(B,E),k===null)throw Ze(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(E){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ye("WebGLRenderer: "+E.message),E}function nt(){et=new y1(k),et.init(),be=new nA(k,et),rt=new c1(k,et,e,be),ve=new eA(k,et),rt.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),J=k.createFramebuffer(),U=k.createFramebuffer(),q=k.createFramebuffer(),mt=new S1(k),ze=new zE,We=new tA(k,et,ve,ze,rt,be,mt),P=new v1(I),M=new EM(k),we=new o1(k,M),X=new b1(k,M,mt,we),de=new E1(k,X,M,we,mt),ce=new w1(k,rt,We),oe=new u1(ze),ae=new kE(I,P,et,rt,we,oe),Me=new aA(I,ze),Ce=new VE,se=new $E(et),N=new a1(I,P,ve,de,g,c),Ee=new QE(I,de,rt),Ge=new oA(k,mt,rt,ve),re=new l1(k,et,mt),Ae=new M1(k,et,mt),mt.programs=ae.programs,I.capabilities=rt,I.extensions=et,I.properties=ze,I.renderLists=Ce,I.shadowMap=Ee,I.state=ve,I.info=mt}l(nt,"initGLContext"),y!==hn&&(L=new T1(y,t.width,t.height,o,r,s));let _e=new Rm(I,k);this.xr=_e,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(E){E!==void 0&&(ue=E,this.setSize(le,he,!1))},this.getSize=function(E){return E.set(le,he)},this.setSize=function(E,B,te=!0){if(_e.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}le=E,he=B,t.width=Math.floor(E*ue),t.height=Math.floor(B*ue),te===!0&&(t.style.width=E+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(le*ue,he*ue).floor()},this.setDrawingBufferSize=function(E,B,te){le=E,he=B,ue=te,t.width=Math.floor(E*te),t.height=Math.floor(B*te),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(y===hn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,B,te,Y){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,B,te,Y),ve.viewport(j.copy(ne).multiplyScalar(st()).round())},this.getScissor=function(E){return E.copy(xe)},this.setScissor=function(E,B,te,Y){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,B,te,Y),ve.scissor(fe.copy(xe).multiplyScalar(st()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){ve.setScissorTest(Se=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,te=!0){let Y=0;if(E){let $=!1;if(K!==null){let Re=K.texture.format;$=x.has(Re)}if($){let Re=K.texture.type,Ue=_.has(Re),Te=N.getClearColor(),De=N.getClearAlpha(),ke=Te.r,Qe=Te.g,ct=Te.b;Ue?(b[0]=ke,b[1]=Qe,b[2]=ct,b[3]=De,k.clearBufferuiv(k.COLOR,0,b)):(A[0]=ke,A[1]=Qe,A[2]=ct,A[3]=De,k.clearBufferiv(k.COLOR,0,A))}else Y|=k.COLOR_BUFFER_BIT}B&&(Y|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),N.dispose(),Ce.dispose(),se.dispose(),We.dispose(),ze.dispose(),P.dispose(),de.dispose(),X.dispose(),we.dispose(),Ge.dispose(),ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Eg),_e.removeEventListener("sessionend",Ag),Cs.stop()};function Ve(E){E.preventDefault(),tl("WebGLRenderer: Context Lost."),F=!0}l(Ve,"onContextLost");function tt(){tl("WebGLRenderer: Context Restored."),F=!1;let E=mt.autoReset,B=Ee.enabled,te=Ee.autoUpdate,Y=Ee.needsUpdate,$=Ee.type;nt(),mt.autoReset=E,Ee.enabled=B,Ee.autoUpdate=te,Ee.needsUpdate=Y,Ee.type=$}l(tt,"onContextRestore");function Le(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}l(Le,"onContextCreationError");function _t(E){let B=E.target;B.removeEventListener("dispose",_t),$t(B)}l(_t,"onMaterialDispose");function $t(E){Gr(E),ze.remove(E)}l($t,"deallocateMaterial");function Gr(E){let B=ze.get(E).programs;B!==void 0&&(B.forEach(function(te){ae.releaseProgram(te)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}l(Gr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(E,B,te,Y,$,Re){B===null&&(B=St);let Ue=$.isMesh&&$.matrixWorld.determinantAffine()<0,Te=wb(E,B,te,Y,$);ve.setMaterial(Y,Ue);let De=te.index,ke=1;if(Y.wireframe===!0){if(De=X.getWireframeAttribute(te),De===void 0)return;ke=2}let Qe=te.drawRange,ct=te.attributes.position,Fe=Qe.start*ke,ut=(Qe.start+Qe.count)*ke;Re!==null&&(Fe=Math.max(Fe,Re.start*ke),ut=Math.min(ut,(Re.start+Re.count)*ke)),De!==null?(Fe=Math.max(Fe,0),ut=Math.min(ut,De.count)):ct!=null&&(Fe=Math.max(Fe,0),ut=Math.min(ut,ct.count));let kt=ut-Fe;if(kt<0||kt===1/0)return;we.setup($,Y,Te,te,De);let At,wt=re;if(De!==null&&(At=M.get(De),wt=Ae,wt.setIndex(At)),$.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*st()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if($.isLine){let on=Y.linewidth;on===void 0&&(on=1),ve.setLineWidth(on*st()),$.isLineSegments?wt.setMode(k.LINES):$.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else $.isPoints?wt.setMode(k.POINTS):$.isSprite&&wt.setMode(k.TRIANGLES);if($.isBatchedMesh)if(et.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let on=$._multiDrawStarts,Oe=$._multiDrawCounts,xn=$._multiDrawCount,gt=De?M.get(De).bytesPerElement:1,Rs=ze.get(Y).currentProgram.getUniforms();for(let ln=0;ln<xn;ln++)Rs.setValue(k,"_gl_DrawID",ln),wt.render(on[ln]/gt,Oe[ln])}else if($.isInstancedMesh)wt.renderInstances(Fe,kt,$.count);else if(te.isInstancedBufferGeometry){let on=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oe=Math.min(te.instanceCount,on);wt.renderInstances(Fe,kt,Oe)}else wt.render(Fe,kt)};function wg(E,B,te,Y){G!==null&&E.isNodeMaterial&&G.setObject(Y,E),Ke===!0&&oe.setState(E,te,!1),E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,Go(E,B,Y),E.side=as,E.needsUpdate=!0,Go(E,B,Y),E.side=ti):Go(E,B,Y)}l(wg,"prepareMaterial"),this.compile=function(E,B,te=null){te===null&&(te=E),G!==null&&G.renderStart(E,B,te),C=se.get(te),C.init(B),S.push(C),te.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),E!==te&&E.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights(),G!==null&&G.updateLights(C.state.lightsArray),at=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,at),Ke===!0&&oe.setGlobalState(this.clippingPlanes,B),G!==null&&Ee.render(C.state.shadowsArray,te,B);let Y=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Re=$.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let Te=Re[Ue];wg(Te,te,B,$),Y.add(Te)}else wg(Re,te,B,$),Y.add(Re)}),C=S.pop(),G!==null&&G.renderEnd(),Y},this.compileAsync=function(E,B,te=null){let Y=this.compile(E,B,te);return new Promise($=>{function Re(){if(Y.forEach(function(Ue){let De=ze.get(Ue).currentProgram;(De===void 0||De.isReady())&&Y.delete(Ue)}),Y.size===0){$(E);return}setTimeout(Re,10)}l(Re,"checkMaterialsReady"),et.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qd=null;function Mb(E){qd&&qd(E)}l(Mb,"onAnimationFrame");function Eg(){Cs.stop()}l(Eg,"onXRSessionStart");function Ag(){Cs.start()}l(Ag,"onXRSessionEnd");let Cs=new M_;Cs.setAnimationLoop(Mb),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(E){qd=E,_e.setAnimationLoop(E),E===null?Cs.stop():Cs.start()},_e.addEventListener("sessionstart",Eg),_e.addEventListener("sessionend",Ag),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(E,B);let te=_e.enabled===!0&&_e.isPresenting===!0,Y=L!==null&&(K===null||te)&&L.begin(I,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,B,K),C=se.get(E,S.length),C.init(B),C.state.textureUnits=We.getTextureUnits(),S.push(C),je.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Xe.setFromArrayCamera(B):ye.setFromProjectionMatrix(je,ei,B.reversedDepth),at=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,at),R=Ce.get(E,v.length),R.init(),v.push(R),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Ue=I.xr.getDepthSensingMesh();Ue!==null&&Yd(Ue,B,-1/0,I.sortObjects)}Yd(E,B,0,I.sortObjects),R.finish(),G!==null&&G.updateLights(C.state.lightsArray),I.sortObjects===!0&&R.sort(ee,me),Lt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Lt&&N.addToRenderList(R,E),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&oe.beginShadows();let $=C.state.shadowsArray;if(Ee.render($,E,B),Ke===!0&&oe.endShadows(),(Y&&L.hasRenderPass())===!1){let Ue=R.opaque,Te=R.transmissive;if(C.setupLights(),B.isArrayCamera){let De=B.cameras;if(Te.length>0)for(let ke=0,Qe=De.length;ke<Qe;ke++){let ct=De[ke];Cg(Ue,Te,E,ct)}Lt&&N.render(E);for(let ke=0,Qe=De.length;ke<Qe;ke++){let ct=De[ke];Tg(R,E,ct,ct.viewport)}}else Te.length>0&&Cg(Ue,Te,E,B),Lt&&N.render(E),Tg(R,E,B)}K!==null&&O===0&&(We.updateMultisampleRenderTarget(K),We.updateRenderTargetMipmap(K)),Y&&L.end(I),E.isScene===!0&&E.onAfterRender(I,E,B),we.resetDefaultState(),H=-1,Z=null,S.pop(),S.length>0?(C=S[S.length-1],We.setTextureUnits(C.state.textureUnits),Ke===!0&&oe.setGlobalState(I.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,G!==null&&G.renderEnd()};function Yd(E,B,te,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){let Ue=B.isArrayCamera?Xe:ye;if(!E.frustumCulled||E.intersectsFrustum(Ue)){Y&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(je);let Te=de.update(E),De=E.material;De.visible&&R.push(E,Te,De,te,ot.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let Ue=B.isArrayCamera?Xe:ye;if(!E.frustumCulled||E.intersectsFrustum(Ue)){let Te=de.update(E),De=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ot.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ot.copy(Te.boundingSphere.center)),ot.applyMatrix4(E.matrixWorld).applyMatrix4(je)),Array.isArray(De)){let ke=Te.groups;for(let Qe=0,ct=ke.length;Qe<ct;Qe++){let Fe=ke[Qe],ut=De[Fe.materialIndex];ut&&ut.visible&&R.push(E,Te,ut,te,ot.z,Fe,B)}}else De.visible&&R.push(E,Te,De,te,ot.z,null,B)}}}let Re=E.children;for(let Ue=0,Te=Re.length;Ue<Te;Ue++)Yd(Re[Ue],B,te,Y)}l(Yd,"projectObject");function Tg(E,B,te,Y){let{opaque:$,transmissive:Re,transparent:Ue}=E;C.setupLightsView(te),Ke===!0&&oe.setGlobalState(I.clippingPlanes,te),Y&&ve.viewport(j.copy(Y)),$.length>0&&Oc($,B,te),Re.length>0&&Oc(Re,B,te),Ue.length>0&&Oc(Ue,B,te),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}l(Tg,"renderScene");function Cg(E,B,te,Y){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Y.id]===void 0){let Fe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Y.id]=new Nn(1,1,{generateMipmaps:!0,type:Fe?Bn:hn,minFilter:On,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Re=C.state.transmissionRenderTarget[Y.id],Ue=Y.viewport||j;Re.setSize(Ue.z*I.transmissionResolutionScale,Ue.w*I.transmissionResolutionScale);let Te=I.getRenderTarget(),De=I.getActiveCubeFace(),ke=I.getActiveMipmapLevel();I.setRenderTarget(Re),I.getClearColor(Q),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),Lt&&N.render(te);let Qe=I.toneMapping;I.toneMapping=Yi;let ct=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),C.setupLightsView(Y),Ke===!0&&oe.setGlobalState(I.clippingPlanes,Y),Oc(E,te,Y),We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re),et.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ut=0,kt=B.length;ut<kt;ut++){let At=B[ut],{object:wt,geometry:on,material:Oe,group:xn}=At;if(Oe.side===ti&&wt.layers.test(Y.layers)){let gt=Oe.side;Oe.side=Sn,Oe.needsUpdate=!0,Rg(wt,te,Y,on,Oe,xn),Oe.side=gt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re))}I.setRenderTarget(Te,De,ke),I.setClearColor(Q,pe),ct!==void 0&&(Y.viewport=ct),I.toneMapping=Qe}l(Cg,"renderTransmissionPass");function Oc(E,B,te){let Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Re=E.length;$<Re;$++){let Ue=E[$],{object:Te,geometry:De,group:ke}=Ue,Qe=Ue.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),Te.layers.test(te.layers)&&Rg(Te,B,te,De,Qe,ke)}}l(Oc,"renderObjects");function Rg(E,B,te,Y,$,Re){G!==null&&$.isNodeMaterial&&G.setObject(E,$),E.onBeforeRender(I,B,te,Y,$,Re),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(I,B,te,Y,E,Re),$.transparent===!0&&$.side===ti&&$.forceSinglePass===!1?($.side=Sn,$.needsUpdate=!0,I.renderBufferDirect(te,B,Y,$,E,Re),$.side=as,$.needsUpdate=!0,I.renderBufferDirect(te,B,Y,$,E,Re),$.side=ti):I.renderBufferDirect(te,B,Y,$,E,Re),E.onAfterRender(I,B,te,Y,$,Re)}l(Rg,"renderObject");function Pg(E){let B=0;for(let te of E)te.texture!==null&&B++;return B}l(Pg,"countLightProbeGrids");function Go(E,B,te){B.isScene!==!0&&(B=St);let Y=ze.get(E),$=C.state.lights,Re=C.state.shadowsArray,Ue=$.state.version,Te=ae.getParameters(E,$.state,Re,B,te,C.state.lightProbeGridArray),De=ae.getProgramCacheKey(Te),ke=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=P.get(E.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",_t),ke=new Map,Y.programs=ke,Y.programVariants=new Map);let ct=ke.get(De);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===Ue)return Lg(E,Te),ct}else Te.uniforms=ae.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,te,Te),E.onBeforeCompile(Te,I),ct=ae.acquireProgram(Te,De),ke.set(De,ct),Y.uniforms=Te.uniforms;let Fe=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),Lg(E,Te),Y.needsLights=Ab(E),Y.lightsStateVersion=Ue,Y.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.sunLights.value=$.state.sun,Fe.sunLightShadows.value=$.state.sunShadow,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.sunShadowMatrix.value=$.state.sunShadowMatrix,Fe.sunShadowCascade.value=$.state.sunShadowCascade,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.numLightProbeGrids=Pg(C.state.lightProbeGridArray),Y.currentProgram=ct,Y.uniformsList=null,ct}l(Go,"getProgram");function Sb(E,B,te,Y,$){let Re=ze.get(E),Ue=Re.currentProgram.id+","+Y+","+$,Te=Re.programVariants.get(Ue);return Te===void 0?(Te=Go(E,B,te),Re.programVariants.set(Ue,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=Y,Re.toneMapping=$),Te}l(Sb,"getProgramVariant");function Ig(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=eo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}l(Ig,"getUniformList");function Lg(E,B){let te=ze.get(E);te.outputColorSpace=B.outputColorSpace,te.batching=B.batching,te.batchingColor=B.batchingColor,te.instancing=B.instancing,te.instancingColor=B.instancingColor,te.instancingMorph=B.instancingMorph,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}l(Lg,"updateCommonMaterialProperties");function wb(E,B,te,Y,$){B.isScene!==!0&&(B=St),We.resetTextureUnits();let Re=B.fog,Ue=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Te=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ht.workingColorSpace,De=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ke=P.get(Y.envMap||Ue,De),Qe=Y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ct=!!te.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!te.morphAttributes.position,ut=!!te.morphAttributes.normal,kt=!!te.morphAttributes.color,At=Yi;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(At=I.toneMapping);let wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,on=wt!==void 0?wt.length:0,Oe=ze.get(Y),xn=C.state.lights;if(Ke===!0&&(at===!0||E!==Z)){let Ut=E===Z&&Y.id===H;oe.setState(Y,E,Ut)}let gt=!1,Rs=!1;Y.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==xn.state.version||$.isBatchedMesh&&Oe.batching===!1||!$.isBatchedMesh&&Oe.batching===!0||$.isBatchedMesh&&Oe.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Oe.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Oe.instancingMorph===!1&&$.morphTexture!==null||Oe.envMap!==ke||Y.fog===!0&&Oe.fog!==Re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Qe||Oe.vertexTangents!==ct||Oe.morphTargets!==Fe||Oe.morphNormals!==ut||Oe.morphColors!==kt||Oe.morphTargetsCount!==on||Oe.numLightProbeGrids!==Pg(C.state.lightProbeGridArray)?gt=!0:(Oe.outputColorSpace!==Te||Oe.toneMapping!==At)&&(Rs=!0):(gt=!0,Oe.__version=Y.version);let ln=Oe.currentProgram;(gt===!0||Rs===!0)&&(ln=Rs===!0?Sb(Y,B,$,Te,At):Go(Y,B,$),G&&Y.isNodeMaterial&&G.onUpdateProgram(Y,ln,Oe));let Bc=!1,Vr=!1,Ps=!1,pt=ln.getUniforms(),tn=Oe.uniforms;if(ve.useProgram(ln.program)&&(Bc=!0,Vr=!0,Ps=!0),Y.id!==H&&(H=Y.id,Vr=!0),Bc||Z!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(k,"projectionMatrix",E.projectionMatrix),pt.setValue(k,"viewMatrix",E.matrixWorldInverse);let Zt=pt.map.cameraPosition;Zt!==void 0&&Zt.setValue(k,Mt.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&pt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Vr=!0,Ps=!0)}if(Oe.needsLights&&(xn.state.sunShadowMap.length>0&&pt.setValue(k,"sunShadowMap",xn.state.sunShadowMap,We),xn.state.directionalShadowMap.length>0&&pt.setValue(k,"directionalShadowMap",xn.state.directionalShadowMap,We),xn.state.spotShadowMap.length>0&&pt.setValue(k,"spotShadowMap",xn.state.spotShadowMap,We),xn.state.pointShadowMap.length>0&&pt.setValue(k,"pointShadowMap",xn.state.pointShadowMap,We)),$.isSkinnedMesh){pt.setOptional(k,$,"bindMatrix"),pt.setOptional(k,$,"bindMatrixInverse");let Ut=$.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),pt.setValue(k,"boneTexture",Ut.boneTexture,We))}$.isBatchedMesh&&(pt.setOptional(k,$,"batchingTexture"),pt.setValue(k,"batchingTexture",$._matricesTexture,We),pt.setOptional(k,$,"batchingIdTexture"),pt.setValue(k,"batchingIdTexture",$._indirectTexture,We),pt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&pt.setValue(k,"batchingColorTexture",$._colorsTexture,We));let pi=te.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&ce.update($,te,ln),(Vr||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,pt.setValue(k,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(tn.envMapIntensity.value=B.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=cA()),Vr){if(pt.setValue(k,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&Eb(tn,Ps),Re&&Y.fog===!0&&Me.refreshFogUniforms(tn,Re),Me.refreshMaterialUniforms(tn,Y,ue,he,C.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Ut=w,Zt=0;for(let fr of C.state.lightProbeGridArray)fr.texture!==null&&(Ut.textures[Zt]=fr.texture,Ut.min[Zt]=fr.boundingBox.min,Ut.max[Zt]=fr.boundingBox.max,Ut.resolution[Zt]=fr.resolution,Zt++);for(let fr in Ut)Ut[fr].length=Zt;tn.probesSH.value=Ut.textures,tn.probesMin.value=Ut.min,tn.probesMax.value=Ut.max,tn.probesResolution.value=Ut.resolution}eo.upload(k,Ig(Oe),tn,We)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(eo.upload(k,Ig(Oe),tn,We),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(k,"center",$.center),pt.setValue(k,"modelViewMatrix",$.modelViewMatrix),pt.setValue(k,"normalMatrix",$.normalMatrix),pt.setValue(k,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Ut=Y.uniformsGroups;for(let Zt=0,fr=Ut.length;Zt<fr;Zt++){let Ng=Ut[Zt];Ge.update(Ng,ln),Ge.bind(Ng,ln)}}return ln}l(wb,"setProgram");function Eb(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}l(Eb,"markUniformsLightsNeedsUpdate");function Ab(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}l(Ab,"materialNeedsLights"),this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,B,te){let Y=ze.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ze.get(E.texture).__webglTexture=B,ze.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:te,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let te=ze.get(E);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,te=0){K=E,ie=B,O=te;let Y=null,$=!1,Re=!1;if(E){let Te=ze.get(E);if(Te.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(k.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(E.viewport),fe.copy(E.scissor),ge=E.scissorTest,ve.viewport(j),ve.scissor(fe),ve.setScissorTest(ge),H=-1;return}else if(Te.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(Te.__hasExternalTextures)We.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qe=E.depthTexture;if(Te.__boundDepthTexture!==Qe){if(Qe!==null&&ze.has(Qe)&&(E.width!==Qe.image.width||E.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let ke=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?Y=ke[B][te]:Y=ke[B],$=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?Y=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[te]:Y=ke,j.copy(E.viewport),fe.copy(E.scissor),ge=E.scissorTest}else j.copy(ne).multiplyScalar(ue).floor(),fe.copy(xe).multiplyScalar(ue).floor(),ge=Se;if(te!==0&&(Y=J),ve.bindFramebuffer(k.FRAMEBUFFER,Y)&&ve.drawBuffers(E,Y),ve.viewport(j),ve.scissor(fe),ve.setScissorTest(ge),$){let Te=ze.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,te)}else if(Re){let Te=B;for(let De=0;De<E.textures.length;De++){let ke=ze.get(E.textures[De]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+De,ke.__webglTexture,te,Te)}}else if(E!==null&&te!==0){let Te=ze.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Te.__webglTexture,te)}H=-1};function Dg(E){let B=ze.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=rt.textureFormatReadable(E.format),B.__typeReadable=rt.textureTypeReadable(E.type)),B}l(Dg,"getReadableState"),this.readRenderTargetPixels=function(E,B,te,Y,$,Re,Ue,Te=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){ve.bindFramebuffer(k.FRAMEBUFFER,De);try{let ke=E.textures[Te],Qe=ke.format,ct=ke.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te);let Fe=Dg(ke);if(Fe.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&te>=0&&te<=E.height-$&&k.readPixels(B,te,Y,$,be.convert(Qe),be.convert(ct),Re)}finally{let ke=K!==null?ze.get(K).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,B,te,Y,$,Re,Ue,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(B>=0&&B<=E.width-Y&&te>=0&&te<=E.height-$){ve.bindFramebuffer(k.FRAMEBUFFER,De);let ke=E.textures[Te],Qe=ke.format,ct=ke.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te);let Fe=Dg(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.bufferData(k.PIXEL_PACK_BUFFER,Re.byteLength,k.STREAM_READ),k.readPixels(B,te,Y,$,be.convert(Qe),be.convert(ct),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let kt=K!==null?ze.get(K).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,kt);let At=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qx(k,At,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Re),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ut),k.deleteSync(At),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,te=0){let Y=Math.pow(2,-te),$=Math.floor(E.image.width*Y),Re=Math.floor(E.image.height*Y),Ue=B!==null?B.x:0,Te=B!==null?B.y:0;We.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,Ue,Te,$,Re),ve.unbindTexture()},this.copyTextureToTexture=function(E,B,te=null,Y=null,$=0,Re=0){let Ue,Te,De,ke,Qe,ct,Fe,ut,kt,At=E.isCompressedTexture?E.mipmaps[Re]:E.image;if(te!==null)Ue=te.max.x-te.min.x,Te=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,Qe=te.min.y,ct=te.isBox3?te.min.z:0;else{let pt=Math.pow(2,-$);Ue=Math.floor(At.width*pt),Te=Math.floor(At.height*pt),E.isDataArrayTexture?De=At.depth:E.isData3DTexture?De=Math.floor(At.depth*pt):De=1,ke=0,Qe=0,ct=0}Y!==null?(Fe=Y.x,ut=Y.y,kt=Y.z):(Fe=0,ut=0,kt=0);let wt=be.convert(B.format),on=be.convert(B.type),Oe;B.isData3DTexture?(We.setTexture3D(B,0),Oe=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(We.setTexture2DArray(B,0),Oe=k.TEXTURE_2D_ARRAY):(We.setTexture2D(B,0),Oe=k.TEXTURE_2D),ve.activeTexture(k.TEXTURE0),ve.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),ve.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ve.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let xn=ve.getParameter(k.UNPACK_ROW_LENGTH),gt=ve.getParameter(k.UNPACK_IMAGE_HEIGHT),Rs=ve.getParameter(k.UNPACK_SKIP_PIXELS),ln=ve.getParameter(k.UNPACK_SKIP_ROWS),Bc=ve.getParameter(k.UNPACK_SKIP_IMAGES);ve.pixelStorei(k.UNPACK_ROW_LENGTH,At.width),ve.pixelStorei(k.UNPACK_IMAGE_HEIGHT,At.height),ve.pixelStorei(k.UNPACK_SKIP_PIXELS,ke),ve.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),ve.pixelStorei(k.UNPACK_SKIP_IMAGES,ct);let Vr=E.isDataArrayTexture||E.isData3DTexture,Ps=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let pt=ze.get(E),tn=ze.get(B),pi=ze.get(pt.__renderTarget),Ut=ze.get(tn.__renderTarget);ve.bindFramebuffer(k.READ_FRAMEBUFFER,pi.__webglFramebuffer),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Zt=0;Zt<De;Zt++)Vr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,$,ct+Zt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(B).__webglTexture,Re,kt+Zt)),k.blitFramebuffer(ke,Qe,ke+Ue,Qe+Te,Fe,ut,Fe+Ue,ut+Te,k.DEPTH_BUFFER_BIT,k.NEAREST);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||ze.has(E)){let pt=ze.get(E),tn=ze.get(B);ve.bindFramebuffer(k.READ_FRAMEBUFFER,U),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,q);for(let pi=0;pi<De;pi++)Vr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pt.__webglTexture,$,ct+pi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pt.__webglTexture,$),Ps?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,Re,kt+pi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,Re),$!==0?k.blitFramebuffer(ke,Qe,ke+Ue,Qe+Te,Fe,ut,Fe+Ue,ut+Te,k.COLOR_BUFFER_BIT,k.NEAREST):Ps?k.copyTexSubImage3D(Oe,Re,Fe,ut,kt+pi,ke,Qe,Ue,Te):k.copyTexSubImage2D(Oe,Re,Fe,ut,ke,Qe,Ue,Te);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ps?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Oe,Re,Fe,ut,kt,Ue,Te,De,wt,on,At.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Oe,Re,Fe,ut,kt,Ue,Te,De,wt,At.data):k.texSubImage3D(Oe,Re,Fe,ut,kt,Ue,Te,De,wt,on,At):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Re,Fe,ut,Ue,Te,wt,on,At.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Re,Fe,ut,At.width,At.height,wt,At.data):k.texSubImage2D(k.TEXTURE_2D,Re,Fe,ut,Ue,Te,wt,on,At);ve.pixelStorei(k.UNPACK_ROW_LENGTH,xn),ve.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),ve.pixelStorei(k.UNPACK_SKIP_PIXELS,Rs),ve.pixelStorei(k.UNPACK_SKIP_ROWS,ln),ve.pixelStorei(k.UNPACK_SKIP_IMAGES,Bc),Re===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(Oe),ve.unbindTexture()},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){ie=0,O=0,K=null,ve.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};l(km,"WebGLRenderer");var Kh=km;var D_=l(i=>{let e=Math.min(1,Math.max(0,i))**.5;return 4*e*(1-e)},"swell"),uA=l(i=>1-(1-i)*(1-i),"easeOut"),td=l(i=>{let e=Math.sin(i*12.9898)*43758.5453;return e-Math.floor(e)},"share"),zm=l((i,e=0)=>{let t=Math.min(1,Math.max(0,i)),n=uA(t);return Array.from({length:7},(r,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*D_(t),shade:0};let a=(s-1)/6*Math.PI*2+(td(e+s*7)-.5)*.6,o=(.12+td(e+s*13)*.08)*n,c=.05+(.08+td(e+s*17)*.1)*n;return{at:[Math.cos(a)*o,c,Math.sin(a)*o],size:(.055+td(e+s*19)*.03)*D_(t*1.1),shade:s%2===0?0:1}})},"puffAt");var Tn=["grass","plains","sand","rock","snow","forest","mud","tundra"],Ki={shore:-.03,deep:-.15,reach:3},nd={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},U_={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},N_={Ocean:{relief:{base:Ki.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:U_,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Ws=l(i=>i==="Unknown"?nd:(Object.prototype.hasOwnProperty.call(N_,i)?N_[i]:void 0)??U_,"terrainEntry");var hA=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),F_=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),O_=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),ji=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,p,f,m)=>{let g=Math.floor(hA(h,p,t)*16)*2;return(F_[g]??0)*f+(F_[g+1]??0)*m},"slope");return(h,p)=>{let f=h/r,m=p/a,g=Math.floor(f),y=Math.floor(m),x=f-g,_=m-y,b=O_(x),A=O_(_),w=o(g),R=o(g+1),C=c(y),v=c(y+1),S=u(w,C,x,_)+(u(R,C,x-1,_)-u(w,C,x,_))*b,L=u(w,v,x,_-1)+(u(R,v,x-1,_-1)-u(w,v,x,_-1))*b;return Math.max(-1,Math.min(1,(S+(L-S)*A)*1.4))}},"periodicNoise"),zn=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var os=128,sd=.5,id=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),dA={grass:{grain:l(({noise:i})=>zn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>zn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>zn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>zn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>zn([id(i(24,11)),id(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>zn([id(i(24,11)),id(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>zn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>zn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>zn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},rd=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),fA=l((i=os,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*Tn.length),r={u:i,v:i};return Tn.forEach((s,a)=>{let o=dA[s],c=l((A,w)=>ji({cell:A*i/os,period:r,seed:7919*(a+1)+w}),"noise"),u=l((A,w)=>(R,C)=>Math.sin(2*Math.PI*(A*R+w*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/os,"texels")},p=o.grain(h),f=o.bumps(h),m=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++)g[A*i+w]=f(w+e,A+t);let y=l((A,w)=>g[(w+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let w=0;w<i;w++)x[A*i+w]=p(w+e,A+t),_+=x[A*i+w]??0;let b=_/(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++){let R=m+(A*i+w)*4,C=(x[A*i+w]??0)-b,v=(y(w+1,A)-y(w-1,A))/2*(i/os),S=(y(w,A+1)-y(w,A-1))/2*(i/os);n[R]=rd(o.shade*C+.5),n[R+1]=rd((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[R+2]=rd((1-Math.max(-1,Math.min(1,S*o.steep)))/2),n[R+3]=rd(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),B_=fA;var Si={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var wi=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),k_=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${wi(Si.rockTo)}, ${wi(Si.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${wi(Si.snowAtEquator)} + (${wi(Si.snowAtPoles)} - ${wi(Si.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${wi(Si.snowDeepens)}, height) * smoothstep(${wi(Si.snowSlips)}, ${wi(Si.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${wi(Si.wetFrom)}, ${wi(Si.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${wi(Si.wetUpTo)}, height));
}
`;var pA=l(i=>[i.u/Math.max(1,Math.round(i.u/sd)),i.v===null?sd:i.v/Math.max(1,Math.round(i.v/sd))],"surfaceTile"),mA=Tn.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),gA=null,xA=l(()=>gA??=B_(),"made"),_A=l((i,e)=>{let t=new Fs(xA(),os,os,Tn.length),n=new vi({roughness:.92,vertexColors:!0}),[r,s]=pA(i);return t.format=kn,t.type=hn,t.wrapS=zi,t.wrapT=zi,t.magFilter=Ht,t.minFilter=On,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=Mi,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new He(r,s)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Be(Ws("Mountains").colour)},a.uniforms.snowColour={value:new Be(Ws("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${k_}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${mA}
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
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),z_=_A;function V_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Ft;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let p=i[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(p.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,p=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let g=0;g<m.count;++g)p.push(m.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(let h in s){let p=G_(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][f]);let g=G_(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(V_,"mergeGeometries");function G_(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new bt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<t;g++){let y=h.getComponent(f,g);o.setComponent(f+p,g,y)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(G_,"mergeAttributes");var H_="#c79a72",vA="#5a4a3a";var fn="#7a5532",Hm="#5f6266",W_="#8a8f96",Ei="#5d6447",Gm="#e8e0cc",Y_="#6e4b2f",Xs="#8a8580",X_="#5b3e27",no="#7d858c",yA=new W(0,1,0),Ie=new Hi(1,1,1),Kt=new Wi(.5,.5,1,10),qs=new Xi(.5,1,10),io=new ns(.5,10,8),Xm=class Xm{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(Xm,"Parts");var jt=Xm,bA=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:io,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:qs,colour:Hm,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ie,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Kt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:io,colour:Ei,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),MA=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Kt,colour:fn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Kt,colour:fn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:qs,colour:Hm,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Kt,colour:fn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:qs,colour:W_,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ie,colour:W_,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ie,colour:fn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Kt,colour:fn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ie,colour:i==="rifle"?"#3a3a3a":fn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ie,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ie,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Kt,colour:fn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Kt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),SA={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},Wm=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new jt,a=r===void 0?void 0:SA[r],o=a?.coat??(i==="modern"?Ei:t[0]),c=a?.legs??(i==="ancient"?H_:i==="modern"?Ei:vA);return n&&(s.add({shape:Ie,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ie,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ie,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ie,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ie,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ie,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:io,colour:H_,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:io,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:io,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):bA(i,t,s),r==="parachute"&&s.add({shape:Ie,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),MA(e,i,t,s),s},"person"),q_=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Vm=l((i=Y_)=>new jt().add({shape:Ie,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ie,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ie,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ie,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),wA=l((i,e,t)=>new jt().addAll(Vm(),[0,0,0]).add({shape:Ie,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(Wm(i,e,t,{legs:!1}),[0,.04,0]),"rider"),EA=l(i=>new jt().add({shape:Ie,colour:Xs,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ie,colour:Xs,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Kt,colour:Xs,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ie,colour:Xs,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Xs,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Xs,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Xs,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ie,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),pn=l((i,e=.05)=>({shape:Kt,colour:fn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),AA=l((i,e,t)=>{if(e==="chariot")return new jt().addAll(Vm(),[0,0,.09]).add({shape:Ie,colour:fn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ie,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(pn([-.042,.035,-.045],.065)).add(pn([.042,.035,-.045],.065)).addAll(Wm(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new jt().addAll(Vm(t==="ancient"?"#8a7a64":Y_),[0,0,.1]).add({shape:Ie,colour:fn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ie,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(pn([-.042,.03,-.03])).add(pn([.042,.03,-.03])).add(pn([-.042,.03,-.09])).add(pn([.042,.03,-.09]));return e==="wagon"?n.add({shape:Kt,colour:Gm,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Gm,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ie,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ie,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),TA=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new jt().add({shape:Ie,colour:fn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ie,colour:fn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ie,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(pn([-.045,.03,.04],.045)).add(pn([.045,.03,.04],.045)).add(pn([-.045,.03,-.04],.045)).add(pn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?Ei:Hm;return new jt().add({shape:Kt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ie,colour:i==="modern"?Ei:fn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ie,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(pn([-.04,.035,0],.07)).add(pn([.04,.035,0],.07))},"siege"),CA=l((i,e,t)=>{if(i==="industrial")return new jt().add({shape:Ie,colour:no,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ie,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(pn([-.045,.025,.06],.045)).add(pn([.045,.025,.06],.045)).add(pn([-.045,.025,-.06],.045)).add(pn([.045,.025,-.06],.045));let n=new jt().add({shape:Ie,colour:Ei,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ie,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ie,colour:Ei,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Kt,colour:Ei,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Ei,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),RA=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new jt;switch(i.hull){case"oars":case"sail":{s.add({shape:Ie,colour:X_,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:qs,colour:X_,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:Kt,colour:fn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ie,colour:o===0?e[1]:Gm,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ie,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ie,colour:fn,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ie,colour:fn,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:Kt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ie,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ie,colour:no,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ie,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ie,colour:no,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ie,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ie,colour:i.era==="industrial"?"#4a4a48":no,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:qs,colour:i.era==="industrial"?"#4a4a48":no,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:no,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:Kt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ie,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ie,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Kt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ie,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),PA=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new jt().add({shape:Kt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:qs,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ie,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ie,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ie,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),IA=l(i=>new jt().add({shape:io,colour:Ei,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ie,colour:Ei,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ie,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),LA=l((i,e)=>{let t=e?1.4:1;return new jt().add({shape:Kt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:qs,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),$_=l((i,e)=>{switch(i.shape){case"foot":{let t=new jt;return q_(i.squad).forEach(([n,r],s)=>t.addAll(Wm(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new jt;return q_(i.squad).forEach(([n,r])=>t.addAll(wA(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return EA(e);case"cart":return AA(e,i.cart??"wagon",i.era);case"siege":return TA(i.era,e,i.large===!0);case"vehicle":return CA(i.era,e,i.large===!0);case"ship":return RA(i,e);case"aircraft":return PA(i,e);case"helicopter":return IA(e);default:return LA(e,i.large===!0)}},"figureParts"),DA=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new vt().compose(new W(...i),new yn().setFromAxisAngle(yA,n).multiply(new yn().setFromEuler(new Un(...t))),new W(...e)),"partMatrix"),ad=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Be(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(DA(n)),a.setAttribute("color",new bt(u,3)),a}),t=V_(e)??new Ft;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Z_=l((i,e)=>ad($_(i,e).parts),"figureGeometry"),NA=new Wi(.19,.2,1,28),UA=new Tr(.22,.014,4,32),FA=new Tr(1,.03,3,40),OA="#dfe9ea",BA=[[.11,.2],[.16,.27]],J_=l((i,e,{fortified:t,scale:n,stand:r,part:s="whole",ripples:a=!1})=>{let o=i.shape==="ship",c=o?0:r,u=s==="base"?[]:$_(i,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+c,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return ad(u);if(o||u.push({shape:NA,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),o&&a&&s==="whole"){let h=(i.large?1.25:1)*n;BA.forEach(([p,f])=>u.push({shape:FA,colour:OA,at:[0,.006,0],size:[p*h,f*h,.15],turn:[Math.PI/2,0,0]}))}return t&&u.push({shape:UA,colour:"#b5ab98",at:[0,c+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),ad(u)},"unitBodyGeometry"),kA=new Xi(.75,.5,4),zA=new Tr(.36,.025,6,24),K_=l((i,e,t)=>ad([...i.flatMap(({x:n,z:r,width:s,height:a})=>[{shape:Ie,colour:"#b5ab98",at:[n,a/2,r],size:[s,a,s]},{shape:kA,colour:e,at:[n,a+s*.2,r],size:[s,s*.8,s],turn:[0,Math.PI/4,0]}]),...t?[{shape:zA,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var sn=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Ll=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Gn=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),Dl=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),qm=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),j_={Warrior:sn("ancient","club"),Spearman:sn("ancient","spear"),Swordman:sn("ancient","sword"),Archer:sn("ancient","bow"),Horseman:Ll("ancient","spear"),Chariot:qm("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Gn("ancient","oars"),Settlers:qm("ancient","wagon"),Diplomat:sn("ancient","case",1),Caravan:qm("ancient","goods"),Explorer:sn("ancient","pack",1),Pikeman:sn("medieval","pike"),Knight:Ll("medieval","lance"),Crusader:Ll("medieval","sword"),Fanatic:sn("medieval","sword"),Sail:Gn("medieval","sail"),Musketman:sn("renaissance","musket"),Dragoon:Ll("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Gn("renaissance","sail",!0,1),Galleon:Gn("renaissance","sail",!0),Rifleman:sn("industrial","rifle"),AlpineTrooper:{...sn("industrial","rifle"),dress:"snow"},Partisan:{...sn("industrial","rifle"),dress:"irregular"},Cavalry:Ll("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:sn("industrial","none",2),Ironclad:Gn("industrial","steam",!1,1),Transport:Gn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:sn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:sn("modern","rifle"),Paratrooper:{...sn("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Gn("modern","steam",!1,1),Cruiser:Gn("modern","steam",!0,2),MissileCruiser:Gn("modern","steam",!0,1,!0),Battleship:Gn("modern","steam",!0,3),Submarine:Gn("modern","submarine"),Carrier:Gn("modern","carrier",!0),Fighter:Dl("modern"),StealthFighter:Dl("modern",!1,!0),Bomber:Dl("modern",!0),StealthBomber:Dl("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Nl=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(j_,i)?j_[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Gn("industrial","steam"):e.includes("Air")?Dl("modern"):sn("ancient","spear")),"unitLook"),od=l(i=>i.shape==="aircraft"||i.shape==="helicopter"||i.shape==="missile","airborne");var GA=.03,nv="#fff4b0",VA=.04,ld=.004,Ym=.018,Q_=.01,ev=.022,tv=.03,iv=.03,ud=.002,HA="#4caf50",WA="#e0b030",XA="#d04030",qA=256,Ys,Ai,$s,Zs,Ti,Js,Rr,so,jm=class jm{constructor(){V(this,Ys,new Map);V(this,Ai,new Map);V(this,$s,new Map);V(this,Zs,new Map);V(this,Ti,new Map);V(this,Js,new Map);V(this,Rr,null);V(this,so,0);this.figureMaterial=new vi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Tr(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=d(this,Ys).get(n);return r===void 0&&(r=new vi({color:new Be(e),roughness:.75,metalness:.05,...t?{emissive:new Be(e),emissiveIntensity:.6}:{}}),d(this,Ys).set(n,r)),r}body(e,t,n,r=1,s="whole",a=!1){let o=a&&e.shape==="ship"&&s==="whole",c=JSON.stringify([e,t,n,r,s,o]),u=d(this,Zs).get(c);return u===void 0&&(u=J_(e,t,{fortified:n,scale:r,stand:GA,part:s,ripples:o}),d(this,Zs).set(c,u)),u}city(e){let t=JA(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),r=d(this,Ti).get(n);return r===void 0&&(r=K_(t,e.colours[0],e.walled),d(this,Ti).set(n,r)),r}figure(e,t){let n=JSON.stringify([e,t]),r=d(this,$s).get(n);return r===void 0&&(r=Z_(e,t),d(this,$s).set(n,r)),r}plain(e){let t=d(this,Js).get(e);return t===void 0&&(t=new Qr({color:new Be(e),sizeAttenuation:!1,depthTest:!1}),d(this,Js).set(e,t)),t}pointer(){if(d(this,Rr)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=nv,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new ts(e);n.colorSpace=Gt,z(this,Rr,new Qr({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return d(this,Rr)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=d(this,Ai).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new ts(a);h.colorSpace=Gt,s=new Qr({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),d(this,Ai).set(r,s)}return s}get sweepDue(){return d(this,Ai).size+d(this,Ti).size>Math.max(qA,d(this,so)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof yt&&t.add(r.geometry),r instanceof wr&&t.add(r.material)});d(this,Ai).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),d(this,Ai).delete(r))}),d(this,Ti).forEach((n,r)=>{t.has(n)||(n.dispose(),d(this,Ti).delete(r))}),z(this,so,d(this,Ai).size+d(this,Ti).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),d(this,$s).forEach(e=>e.dispose()),d(this,Zs).forEach(e=>e.dispose()),d(this,Ti).forEach(e=>e.dispose()),d(this,Zs).clear(),d(this,Ti).clear(),this.figureMaterial.dispose(),d(this,Js).forEach(e=>e.dispose()),d(this,Rr)?.map?.dispose(),d(this,Rr)?.dispose(),d(this,Js).clear(),z(this,Rr,null),d(this,Ys).forEach(e=>e.dispose()),d(this,Ai).forEach(e=>{e.map?.dispose(),e.dispose()}),d(this,Ys).clear(),d(this,Ai).clear(),d(this,$s).clear(),z(this,so,0)}};Ys=new WeakMap,Ai=new WeakMap,$s=new WeakMap,Zs=new WeakMap,Ti=new WeakMap,Js=new WeakMap,Rr=new WeakMap,so=new WeakMap,l(jm,"MarkerKit");var dd=jm,rv=l(i=>{let{r:e,g:t,b:n}=new Be(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),ro=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),cd=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),YA=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),$A=3,ZA=4,Ul=l((i,e,t,n,r=$A)=>{let s=new wr(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),sv=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return Ul(i,e*r,e,t)},"label"),hd=[0,.36,0],JA=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let r=n/e*Math.PI*2+cd(i.name,1)*6,s=n===0?0:.12+cd(i.name,n+2)*.18;return{x:Math.cos(r)*s,z:Math.sin(r)*s,width:.07+cd(i.name,n+20)*.05,height:(n===0?.13:.05)+cd(i.name,n+40)*.05}})},"buildingsOf"),KA=l((i,e)=>{let t=new nn;return t.add(new yt(i.city(e),i.figureMaterial)),t.add(ro(sv(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],rv(e.colours[0])),iv,0),...hd)),t},"drawCity"),jA=l((i,e,t=null,n=!1)=>{let r=new nn,{ring:s}=i.geometries,a=Nl(e.type,e.kinds),o=n&&od(a),c=i.body(a,e.colours,e.fortified,e.size,o?"figures":"whole",t===null),u=o?new nn:r,h=c.boundingBox?.max.y??.3,p=t?.at??[0,h+VA,0],f=e.health!==null,m=(t?.over??0)+(f?ld+ud:0),g=m+Q_+ud,y=YA(e),x=g+(y===""?0:ev+ud),_=new yt(c,i.figureMaterial);if(_.name=Zm,_.rotation.y=e.facing,u.add(_),o&&(u.name=Jm,r.add(new yt(i.body(a,e.colours,e.fortified,e.size,"base"),i.figureMaterial),u)),e.health!==null){let b=Math.max(0,Math.min(1,e.health));if(u.add(ro(Ul(i.plain("#202020"),Ym,ld,t?.over??0),...p)),b>0){let A=Ul(i.plain(b>.5?HA:b>.25?WA:XA),Ym*b,ld*.6,(t?.over??0)+ld*.2);A.center.x=1/(2*b),u.add(ro(A,...p))}}if(u.add(ro(Ul(i.plain(e.colours[0]),Ym,Q_,m),...p)),y!==""&&u.add(ro(sv(i.label(y,e.colours[0],rv(e.colours[0])),ev,g),...p)),e.active){let b=new yt(s,i.material(nv,!0));b.rotation.x=Math.PI/2,b.position.y=.01,r.add(b),u.add(ro(Ul(i.pointer(),tv,tv,x,ZA),...p))}return r},"drawUnit"),$m="unit",Zm="figures",Jm="aloft",Km=.26,av=l((i,e,t=!1)=>{let n=new nn;if(e.city!==null&&n.add(KA(i,e.city)),e.unit!==null){let r=e.city===null?0:Km,s=jA(i,e.unit,e.city===null?null:{at:[hd[0],hd[1],hd[2]-r],over:iv+ud},t);s.name=$m,s.position.z=r,n.add(s)}return n},"drawMarker"),Fl=new WeakMap,fd=new WeakMap,QA=.5,Ol=l((i,e,t)=>{i.forEach(n=>n.traverse(r=>{if(!(r instanceof yt||r instanceof wr))return;let s=Fl.get(r)??r.material,a=t.get(s);a===void 0&&(a=s.clone(),r instanceof wr?a.transparent=!0:a.alphaHash=!0,t.set(s,a)),Fl.has(r)||(Fl.set(r,s),fd.set(r,r.castShadow)),r.material=a,r.castShadow=(fd.get(r)??!1)&&e>=QA})),t.forEach((n,r)=>{n.opacity=r.opacity*e})},"fade"),ov=l((i,e)=>{i.forEach(t=>t.traverse(n=>{let r=Fl.get(n);r===void 0||!(n instanceof yt||n instanceof wr)||(n.material=r,n.castShadow=fd.get(n)??n.castShadow,Fl.delete(n),fd.delete(n))})),ao(e)},"unfaded"),ao=l(i=>{i.forEach(e=>e.dispose()),i.clear()},"unfade");var ls=l(i=>i*Math.PI/180,"degrees"),eT=ls(25),tT=ls(80),nT=5,iT=90,rT=1.12,Bl=ls(40),e0=ls(45),sT={above:{yaw:0,pitch:ls(80)},classic:{yaw:0,pitch:ls(55)},isometric:{yaw:ls(45),pitch:ls(30)}};var lv=l(i=>({focus:i,...sT.classic,distance:24}),"defaultOrbit"),Qm=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),cv=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),Ks=l(i=>({...i,yaw:cv(i.yaw),pitch:Qm(i.pitch,eT,tT),distance:Qm(i.distance,nT,iT)}),"clampOrbit"),lo=l((i,e)=>Ks({...i,distance:i.distance/rT**e}),"zoomed"),pd=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),md=l((i,e)=>{let{forward:t}=pd(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),t0=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=pd(i),u=md(i,e),h=[t-u[0],n-u[1],r-u[2]],p=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),f=p(a),m=Math.tan(Bl/2);return f<=1e-6?null:[p(o)/(f*m*s),p(c)/(f*m)]},"toScreen"),n0=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=pd(i),c=Math.tan(Bl/2);return{from:md(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),oo=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=n0(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),uv=l((i,e,t,n,r)=>{let s=oo(i,e,t,r),a=oo(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Bl/2),{right:h}=pd(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(p[0]??0))*u,i.focus[1]+(o*h[2]+c*(p[1]??0))*u]}},"panned"),hv=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:cv(i.yaw),focus:[n(r,e.u),e.v===null?Qm(s,0,t):n(s,e.v)]}},"settled"),dv=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),gd=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var aT=new Be("#3f8a8c"),oT=new Be("#173a52"),lT=new Be("#e8eeee"),fv=`
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
`,cT=`
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
`,cs,ni,Vn,r0=class r0{constructor(e,t){V(this,cs);V(this,ni);V(this,Vn);z(this,cs,e),z(this,ni,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<d(this,ni).length;r+=2)d(this,ni)[r]=Vi.toHalfFloat(0),d(this,ni)[r+1]=Vi.toHalfFloat(1);z(this,Vn,new $a(d(this,ni),e.columns,e.rows,$i,Bn)),d(this,Vn).wrapS=zi,d(this,Vn).wrapT=e.wrapsV?zi:Qn,d(this,Vn).magFilter=Ht,d(this,Vn).minFilter=Ht,d(this,Vn).needsUpdate=!0;let n=new Mn({uniforms:Hs.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},shallow:{value:aT.clone()},deep:{value:oT.clone()},foam:{value:lT.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Be("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:fv,fragmentShader:cT,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=d(this,Vn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new yt(new qi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=d(this,cs),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),p=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&p>=0&&p<n){let f=(p*t+h)*2;d(this,ni)[f]=Vi.toHalfFloat(e.positions[u*3+1]??0),d(this,ni)[f+1]=Vi.toHalfFloat(e.unseen[u]??0)}}d(this,Vn).needsUpdate=!0}height(e,t){return Vi.fromHalfFloat(d(this,ni)[(t*d(this,cs).columns+e)*2]??0)}unseen(e,t){return Vi.fromHalfFloat(d(this,ni)[(t*d(this,cs).columns+e)*2+1]??0)>.5}texture(){return d(this,Vn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,cs).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),d(this,Vn).dispose()}};cs=new WeakMap,ni=new WeakMap,Vn=new WeakMap,l(r0,"Water");var i0=r0,pv=i0,uT=`
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
`,hT=.18,kl,s0=class s0{constructor(e,t){V(this,kl);z(this,kl,t.wrapsV);let n=new Mn({uniforms:Hs.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},extent:{value:new He},wrapsV:{value:!1}}]),vertexShader:fv,fragmentShader:uT,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new yt(new qi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,kl)&&e}follow(e,t,n){this.mesh.position.set(e,hT,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};kl=new WeakMap,l(s0,"Clouds");var xd=s0;var dT=.6,fT=.05,js=64,mv=.125,pT=`
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
`,mT=`
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
`,gv=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),gT=l((i,e)=>{let[t]=gv(i.length),n=js*(1-2*mv);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*js+(js-c)/2,y:Math.floor(s/t)*js+(js-u)/2,width:c,height:u}]})},"atlasPlaces"),xT=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),us,Hn,zl,Qs,Gl,_d,co,xv,_v,o0=class o0{constructor(e){V(this,co);V(this,us,null);V(this,Hn,null);V(this,zl,"");V(this,Qs);V(this,Gl,new WeakMap);V(this,_d,1);z(this,Qs,e),this.material=new Mn({uniforms:Hs.merge([Pe.fog,{atlas:{value:null},lean:{value:1},lift:{value:fT},bias:{value:dT},cells:{value:[1,1]},pad:{value:mv}}]),vertexShader:pT,fragmentShader:mT,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(d(this,us)?.dispose(),z(this,us,null),e===null||e.count===0)return null;T(this,co,_v).call(this,e);let t=new _l,n=new qi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Er(e.anchors,3)),t.setAttribute("slot",new Er(e.slots,2)),t.setAttribute("size",new Er(e.sizes,1)),t.setAttribute("cell",new Er(e.cells,1)),t.instanceCount=e.count,z(this,us,t),t}make(){let e=new yt(d(this,us)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){d(this,us)?.dispose(),d(this,Hn)?.dispose(),this.material.dispose()}};us=new WeakMap,Hn=new WeakMap,zl=new WeakMap,Qs=new WeakMap,Gl=new WeakMap,_d=new WeakMap,co=new WeakSet,xv=l(function(e){if(e===null)return 0;let t=d(this,Gl).get(e);return t===void 0&&(t=mi(this,_d)._++,d(this,Gl).set(e,t)),t},"#imageId"),_v=l(function(e){let t=e.names.map(o=>`${o}:${T(this,co,xv).call(this,d(this,Qs).call(this,o))}`).join(",");if(t===d(this,zl)&&d(this,Hn)!==null)return;let[n,r]=gv(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*js,s.height=r*js,a!==null&&(a.imageSmoothingEnabled=!1,gT(e.names,o=>{let c=d(this,Qs).call(this,o);return c===null?null:xT(c)}).forEach(({_:o,x:c,y:u,width:h,height:p})=>{let f=d(this,Qs).call(this,o);f!==null&&a.drawImage(f,c,u,h,p)})),d(this,Hn)?.dispose(),z(this,Hn,new ts(s)),d(this,Hn).colorSpace=Gt,d(this,Hn).premultiplyAlpha=!0,d(this,Hn).magFilter=Vt,d(this,Hn).minFilter=On,d(this,Hn).generateMipmaps=!0,z(this,zl,t),this.material.uniforms.atlas.value=d(this,Hn),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(o0,"YieldIcons");var a0=o0,vv=a0;var l0=10466244,_T=14082796,vT=5984576,yT=16773336,yv=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),bT=l(i=>[new An(new W(0,0,1),0),new An(new W(0,0,-1),i)],"polesAt"),MT=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),bv=2048,Mv=Math.hypot(30,40,20),Sv=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new Kh({antialias:!0,canvas:i}),s=new rl,a=new vn(Bl*180/Math.PI,1,.1,400),o=new nn,{material:c,detail:u}=z_(e,t.rows*t.spacingV),h=new xl(yT,2.6),p=new Map,f=new Map,m=new vi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=bT(g),x=new Map,_=new Map,b=new Map,A=new hl(1,1),w=l(ee=>new vi({color:new Be(ee),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),R=[w("#d8d5cf"),w("#a9a59d")],C=new Map,v=new Ya({color:new Be("#dfe8e8"),side:ti}),S=new nn,L=new dd,I=new nn,F=new vv(n??(()=>null)),G=new pv(t,new Be(l0)),J=new xd(G.texture(),t),U=new il(l0,30,110),q=[[0,0]],ie="0,0",O=[[0,0]],K="0,0",H=!1,Z=null;r.outputColorSpace=Gt,r.localClippingEnabled=!0,r.toneMapping=yl,r.shadowMap.enabled=!0,r.shadowMap.type=ah,s.background=new Be(l0),s.fog=U,s.add(new pl(_T,vT,.9)),s.add(o),s.add(S),s.add(I),s.add(G.mesh),s.add(J.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(bv,bv),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let j=l((ee,me,ne=q)=>ne.map(([xe,Se])=>{let ye=ee.make();return ye.position.set(ee.at[0]+xe,ee.at[1],ee.at[2]+Se),me.add(ye),ye}),"copiesOf"),fe=l(ee=>j(ee,o,MT(q,ee.span,g,e.v,H)),"overlayCopiesOf"),ge=l(ee=>ee.flatMap(me=>{let ne=me.getObjectByName($m);return ne===void 0?[]:[ne]}),"unitParts"),Q=l(ee=>ee.drawn.forEach(me=>{let ne=me.getObjectByName(Zm),xe=me.getObjectByName(Jm);ne!==void 0&&(ne.rotation.y=ee.facing),xe!==void 0&&(xe.position.y=ee.aloft)}),"pose"),pe=l(ee=>{let me=zm(ee.through,ee.seed);ee.drawn.forEach(ne=>ne.children.forEach((xe,Se)=>{let ye=me[Se];if(ye===void 0){xe.visible=!1;return}xe.position.set(...ye.at),xe.scale.setScalar(Math.max(ye.size,1e-4)),xe.visible=ye.size>0}))},"shapePuff"),le=l((ee,me=!1)=>{let ne=av(L,ee,me);return ne.traverse(xe=>{xe.castShadow=xe instanceof yt}),ne},"markerOf"),he=l(()=>{L.sweepDue&&L.sweep([...x.values(),..._.values()].flatMap(({original:ee})=>ee===void 0?[]:[ee]))},"sweep");return{render:l(()=>r.render(s,a),"render"),resize:l((ee,me,ne)=>{r.setPixelRatio(ne),r.setSize(ee,me,!1),a.aspect=me>0?ee/me:1,a.updateProjectionMatrix()},"resize"),setChunk:l((ee,me,ne)=>{let xe=`${ee},${me}`,Se=new Ft;Se.setAttribute("position",new bt(ne.positions,3)),Se.setAttribute("normal",new bt(ne.normals,3)),Se.setAttribute("color",new bt(ne.colours,3)),Se.setAttribute("surfacesA",new bt(ne.surfacesA,4,!0)),Se.setAttribute("surfacesB",new bt(ne.surfacesB,4,!0)),Se.setAttribute("shore",new bt(ne.shore,1,!0)),Se.setIndex(new bt(ne.indices,1)),Se.computeBoundingSphere();let ye=p.get(xe);ye!==void 0&&(ye.drawn.forEach(Ke=>o.remove(Ke)),ye.geometry.dispose());let Xe={geometry:Se,at:[ne.u,0,ne.v],make:l(()=>{let Ke=new yt(Se,c);return Ke.castShadow=!0,Ke.receiveShadow=!0,Ke},"make"),drawn:[]};Xe.drawn=j(Xe,o),p.set(xe,Xe),G.setChunk(ne)},"setChunk"),setOverlay:l((ee,me,ne)=>{let xe=`${ee},${me}`,Se=f.get(xe);if(Se!==void 0&&(Se.drawn.forEach(at=>o.remove(at)),Se.geometry.dispose(),f.delete(xe)),ne===null)return;let ye=new Ft;ye.setAttribute("position",new bt(ne.positions,3)),ye.setAttribute("normal",new bt(ne.normals,3)),ye.setAttribute("color",new bt(ne.colours,3)),ye.computeBoundingSphere(),ye.computeBoundingBox();let Xe=ye.boundingBox,Ke={geometry:ye,span:[ne.v+(Xe?.min.z??0),ne.v+(Xe?.max.z??0)],at:[ne.u,0,ne.v],make:l(()=>{let at=new yt(ye,m);return at.castShadow=!0,at.receiveShadow=!0,at},"make"),drawn:[]};Ke.drawn=fe(Ke),f.set(xe,Ke)},"setOverlay"),setMarker:l((ee,me,ne)=>{let xe=x.get(ee);if(xe?.drawn.forEach(Xe=>S.remove(Xe)),xe?.faded!==void 0&&ao(xe.faded),x.delete(ee),ne===null)return;let Se=le(ne),ye={at:me,make:l(()=>Se.clone(),"make"),drawn:[],original:Se};ye.drawn=j(ye,S,O),x.set(ee,ye),he()},"setMarker"),setWalker:l((ee,me)=>{let ne=_.get(ee);if(ne?.drawn.forEach(ye=>S.remove(ye)),ne!==void 0&&ao(ne.faded),_.delete(ee),me===null)return;let xe=le(me,!0),Se={at:ne?.at??[0,0,0],facing:ne?.facing??me.unit?.facing??0,aloft:ne?.aloft??0,opacity:1,faded:new Map,make:l(()=>xe.clone(),"make"),drawn:[],original:xe};Se.drawn=j(Se,S,O),Q(Se),_.set(ee,Se),he()},"setWalker"),placeWalker:l((ee,me,ne,xe=0)=>{let Se=_.get(ee);Se!==void 0&&(Se.at=me,Se.facing=ne,Se.aloft=xe,Se.drawn.forEach((ye,Xe)=>{let[Ke,at]=O[Xe]??[0,0];ye.position.set(me[0]+Ke,me[1],me[2]+at)}),Q(Se))},"placeWalker"),fadeMarker:l((ee,me)=>{let ne=x.get(ee),xe=Math.min(1,Math.max(0,me));if(!(ne===void 0||xe===(ne.opacity??1))){if(ne.opacity=xe,ne.faded??=new Map,xe===1){ov(ge(ne.drawn),ne.faded);return}Ol(ge(ne.drawn),xe,ne.faded)}},"fadeMarker"),wake:l((ee,me,ne=[])=>{let xe=C.get(ee);if(me===null){xe?.drawn.forEach(Xe=>S.remove(Xe)),xe?.shape.dispose(),C.delete(ee);return}let Se=new Ft;Se.setAttribute("position",new bt(Float32Array.from(ne),3));let ye=xe??{at:me,shape:Se,make:l(()=>new yt(ye.shape,v),"make"),drawn:[]};xe===void 0?(ye.drawn=j(ye,S,O),C.set(ee,ye)):(xe.shape.dispose(),xe.shape=Se,xe.drawn.forEach(Xe=>{Xe.geometry=Se})),ye.at=me,ye.drawn.forEach((Xe,Ke)=>{let[at,je]=O[Ke]??[0,0];Xe.position.set(me[0]+at,me[1],me[2]+je)})},"wake"),puff:l((ee,me,ne=0)=>{let xe=b.get(ee);if(me===null){xe?.drawn.forEach(Xe=>S.remove(Xe)),b.delete(ee);return}let Se=Number(ee.replace(/\D/g,""))||0,ye=xe??{at:me,through:ne,seed:Se,make:l(()=>{let Xe=new nn;return zm(0,Se).forEach(({shade:Ke})=>Xe.add(new yt(A,R[Ke]))),Xe},"make"),drawn:[]};xe===void 0&&(ye.drawn=j(ye,S,O),b.set(ee,ye)),ye.at=me,ye.through=ne,ye.drawn.forEach((Xe,Ke)=>{let[at,je]=O[Ke]??[0,0];Xe.position.set(me[0]+at,me[1],me[2]+je)}),pe(ye)},"puff"),fadeWalker:l((ee,me)=>{let ne=_.get(ee),xe=Math.min(1,Math.max(0,me));ne===void 0||xe===ne.opacity||(ne.opacity=xe,Ol(ne.drawn,xe,ne.faded))},"fadeWalker"),setYields:l(ee=>{Z?.drawn.forEach(me=>I.remove(me)),Z=null,F.set(ee)!==null&&(Z={at:[0,0,0],make:l(()=>F.make(),"make"),drawn:[]},Z.drawn=j(Z,I))},"setYields"),view:l((ee,me,ne=e)=>{let[xe,Se]=ee.focus,[ye,Xe,Ke]=md(ee,me),{near:at,far:je}=gd(ee.distance);a.position.set(ye,Xe,Ke),a.lookAt(xe,me,Se),a.far=je*1.2,a.near=Math.max(.1,ee.distance*.02),a.updateProjectionMatrix(),U.near=at,U.far=je;let Mt=ee.distance*2.2,ot=h.shadow.camera;h.position.set(xe+30,me+40,Se+20),h.target.position.set(xe,me,Se),ot.left=-Mt,ot.right=Mt,ot.top=Mt,ot.bottom=-Mt,ot.near=Math.max(.5,Mv-Mt*1.6),ot.far=Mv+Mt*1.6,ot.updateProjectionMatrix(),G.follow(xe,Se,je*2.2,h.position.clone().sub(h.target.position)),J.follow(xe,Se,je*2.2),G.pastThePoles(ne.v!==null),J.pastThePoles(ne.v!==null),m.clippingPlanes=ne.v===null?y:null,H=ne.v===null;let St=yv(ee.focus,je,ne),Lt=`${St.join(";")}${H?" stopped":""}`,st=yv(ee.focus,Math.min(je,ee.distance*2.2),ne),k=st.join(";");Lt!==ie&&(q=St,ie=Lt,p.forEach(Ze=>{Ze.drawn.forEach(et=>o.remove(et)),Ze.drawn=j(Ze,o)}),f.forEach(Ze=>{Ze.drawn.forEach(et=>o.remove(et)),Ze.drawn=fe(Ze)}),Z!==null&&(Z.drawn.forEach(Ze=>I.remove(Ze)),Z.drawn=j(Z,I))),F.lean(ee.pitch),k!==K&&(O=st,K=k,[...x.values(),..._.values(),...b.values(),...C.values()].forEach(Ze=>{Ze.drawn.forEach(et=>S.remove(et)),Ze.drawn=j(Ze,S,O)}),_.forEach(Q),b.forEach(pe),_.forEach(Ze=>{Ze.opacity<1&&Ol(Ze.drawn,Ze.opacity,Ze.faded)}),x.forEach(Ze=>{Ze.faded!==void 0&&(Ze.opacity??1)<1&&Ol(ge(Ze.drawn),Ze.opacity??1,Ze.faded)}))},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{p.forEach(({geometry:ee})=>ee.dispose()),p.clear(),f.forEach(({geometry:ee})=>ee.dispose()),f.clear(),m.dispose(),x.forEach(({faded:ee})=>ee!==void 0&&ao(ee)),x.clear(),_.forEach(({faded:ee})=>ao(ee)),_.clear(),b.clear(),C.forEach(({shape:ee})=>ee.dispose()),C.clear(),v.dispose(),A.dispose(),R.forEach(ee=>ee.dispose()),L.dispose(),F.dispose(),G.dispose(),J.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var Pr=1/Math.sqrt(3),wv=1.5*Pr,ST=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),wT=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,Pr+s*wv],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Pr],[a+.5,o-Pr/2],[a+.5,o+Pr/2],[a,o+Pr],[a-.5,o+Pr/2],[a-.5,o-Pr/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-Pr,[c,u]=ST(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*wv:null}),"period")}},"hexOddRLayout"),Ev=wT;var ET=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),Av=ET;var Qi=Math.SQRT2/2,AT=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*Qi,(s+1)*Qi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Qi],[a+Qi,o],[a,o+Qi],[a-Qi,o]]},"outline"),tileAt:l((r,s)=>{let a=r/Qi,o=s/Qi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Qi,v:t?i*Qi:null}),"period")}},"staggeredIsoLayout"),Tv=AT;var Cv={square:Av,"staggered-iso":Tv,"hex-odd-r":Ev},TT=l(i=>{if(!Object.prototype.hasOwnProperty.call(Cv,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Cv[i.topologyId](i)},"groundLayoutFor"),Rv=TT;var Vl=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var vd=.65,c0=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Ir=.22,yd=.12,u0={low:.2,high:.5},Pv=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,p=u*u+h*h,f=p===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/p)),m=Vl(Math.hypot(i-t-u*f,e-n-h*f)),g=1-f;return m===0?-1/0:m*m*(r+(o-r)*(1-g*g*g)+c)},"halfRidge"),Hl=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),CT=l((i,e,t)=>({u:(Hl(i,e,t,1)*2-1)*Ir,v:(Hl(i,e,t,2)*2-1)*Ir,scale:.75+Hl(i,e,t,3)*.5}),"peakOf"),RT=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=zn([ji({cell:.7,period:o,seed:t}),ji({cell:.35,period:o,seed:t+1}),ji({cell:.17,period:o,seed:t+2})]),u=zn([ji({cell:.45,period:o,seed:t+3}),ji({cell:.22,period:o,seed:t+4})]),h=l((O,K)=>1-2*Math.abs(u(O,K)),"ridged"),p=ji({cell:.8,period:o,seed:t+5}),f=ji({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],b=[],A=l((O,K)=>{let H=(O%r+r)%r;return!a&&(K<0||K>=s)?null:(K%s+s)%s*r+H},"index"),w=l(O=>{let K=new Array(r*s).fill(1/0),H=[];O.forEach((Z,j)=>{Z&&(K[j]=0,H.push([j%r,Math.floor(j/r)]))});for(let[Z,j]of H){let fe=K[j*r+Z]??1/0;fe>=Ki.reach||n.neighbours(Z,j).forEach(([ge,Q])=>{let pe=Q*r+ge;(K[pe]??1/0)>fe+1&&(K[pe]=fe+1,H.push([ge,Q]))})}return K},"distancesFromLand"),R=l((O,K)=>{let H=n.terrainAt(O,K);return`${H}${H!=="Unknown"&&n.waterAt(O,K)?" water":""}`},"readAs"),C=l(O=>{if(O!==void 0&&y.length>0&&O.every(([le,he])=>{let ue=A(le,he);return ue===null||y[ue]===R(le,he)}))return[];let K=[],H=[],Z=[];for(let le=0;le<s;le++)for(let he=0;he<r;he++){let ue=n.terrainAt(he,le);K.push(ue),H.push(ue!=="Unknown"&&n.waterAt(he,le)),Z.push(Ws(ue))}let j=w(K.map((le,he)=>le!=="Unknown"&&!H[he])),fe=K.map((le,he)=>`${le}${H[he]?" water":""}`),ge=[];fe.forEach((le,he)=>{y[he]!==le&&ge.push([he%r,Math.floor(he/r)])}),y=fe,g=Z.map((le,he)=>{let ue=le===nd,ee=he%r,me=Math.floor(he/r),ne=CT(ee,me,t);if(!H[he])return{relief:le.relief,colour:c0(le.colour),surface:Tn.indexOf(le.surface),water:!1,unknown:ue,peak:ne};let xe=Math.min(j[he]??1/0,Ki.reach),Se=Ki.shore+(Ki.deep-Ki.shore)*Math.max(0,xe-1)/Math.max(1,Ki.reach-1);return{relief:{...le.relief,base:Se},colour:c0(le.colour),surface:Tn.indexOf("sand"),water:!0,unknown:ue,peak:ne}});let Q=b,pe=new Map(ge.map(([le,he])=>[`${le},${he}`,[le,he]]));return b=g.map(({relief:le,unknown:he},ue)=>!he&&!H[ue]&&le.shape==="peaked"),ge.some(([le,he])=>{let ue=he*r+le;return b[ue]===!0||Q[ue]===!0})&&([x,_]=J()),ge.forEach(([le,he])=>{let ue=he*r+le;b[ue]!==!0&&Q[ue]!==!0||n.neighbours(le,he).forEach(([ee,me])=>{let ne=A(ee,me);ne!==null&&b[ne]===!0&&pe.set(`${ee},${me}`,[ee,me])})}),[...pe.values()]},"refresh"),v=l(O=>{let[K,H]=i.centre(0,O);return Math.max(...i.outline(0,O).map(([Z,j])=>Math.hypot(Z-K,j-H)))},"cornerOf"),S=l((O,K)=>{let[H,Z]=i.centre(0,O),j=[];for(let fe=-8;fe<=8;fe++)for(let ge=-6;ge<=6;ge++){let[Q,pe]=i.centre(ge,O+fe);Math.hypot(Q-H,pe-Z)<K+1e-9&&j.push([ge,fe])}return j},"offsetsWithin"),L=l((O,K,H,Z)=>{if(r>=6&&(!a||s>=6)){let le=l((ee,me)=>{let ne=(ee%me+me)%me;return ne*2<me?ne:ne-me},"nearest"),he=le(H-O,r),ue=a?le(Z-K,s):Z-K;return he===0&&ue===0?[]:[[he,ue]]}let j=l((le,he)=>{let ue=(le%he+he)%he;return ue===0?[0]:[ue,ue-he]},"copies"),[fe,ge]=i.centre(O,K),Q=j(H-O,r).flatMap(le=>(a?j(Z-K,s):[Z-K]).flatMap(he=>{if(le===0&&he===0)return[];let[ue,ee]=i.centre(O+le,K+he);return[[le,he,Math.hypot(ue-fe,ee-ge)]]})),pe=Math.min(...Q.map(([,,le])=>le));return Q.filter(([,,le])=>le<=pe+1e-9).map(([le,he])=>[le,he])},"stepsTo"),I=Math.max(...[0,1].flatMap(O=>{let[K,H]=i.centre(0,O);return n.neighbours(0,O).flatMap(([Z,j])=>L(0,O,Z,j).map(([fe,ge])=>{let[Q,pe]=i.centre(fe,O+ge);return Math.hypot(Q-K,pe-H)}))}),1),F=[0,1].map(O=>{let[K,H]=i.centre(0,O);return S(O,I+Ir*Math.SQRT2+yd+1.2+Math.max(v(0),v(1))).flatMap(([Z,j])=>{let[fe,ge]=i.centre(Z,O+j);return[Z,j,fe-K,ge-H]})}),G=l((O,K,H,Z,j,fe)=>{let ge=j-H,Q=fe-Z,pe=ge*ge+Q*Q,le=pe===0?0:Math.max(0,Math.min(1,((O-H)*ge+(K-Z)*Q)/pe));return Math.hypot(O-H-ge*le,K-Z-Q*le)},"toSegment"),J=l(()=>{let O=g.map(()=>[]),K=g.map(()=>[]),H=Math.max(v(0),v(1));return e?(g.forEach((Z,j)=>{if(b[j]!==!0)return;let fe=j%r,ge=Math.floor(j/r),[Q,pe]=i.centre(fe,ge),le=new Map;n.neighbours(fe,ge).forEach(([he,ue])=>{let ee=A(he,ue);ee!==null&&b[ee]===!0&&L(fe,ge,he,ue).forEach(([me,ne])=>le.set(`${me},${ne}`,[me,ne,ee]))}),le.forEach(([he,ue,ee])=>{let me=g[ee];if(me===void 0||ue<0||ue===0&&he<0)return;let[ne,xe]=i.centre(fe+he,ge+ue),{peak:Se,relief:ye}=Z,{peak:Xe,relief:Ke}=me,at=Se.u,je=Se.v,Mt=ne-Q+Xe.u,ot=xe-pe+Xe.v,St=ye.base*vd*Se.scale,Lt=Ke.base*vd*Xe.scale,st=Math.hypot(Mt-at,ot-je)||1,k=16+(ue+2)*5+(he+2),Ze=(Hl(fe,ge,t,k)*2-1)*yd,et=u0.low+(u0.high-u0.low)*Hl(fe,ge,t,k+32),rt=(at+Mt)/2-(ot-je)/st*Ze,ve=(je+ot)/2+(Mt-at)/st*Ze,mt=Math.max(Math.hypot(at-rt,je-ve),Math.hypot(Mt-rt,ot-ve))+1.2,ze={au:at,av:je,ah:St,mu:rt,mv:ve,mh:et*Math.min(St,Lt),bu:Mt,bv:ot,bh:Lt,roughness:(ye.roughness+Ke.roughness)/2,cu:rt,cv:ve,reach:mt*mt},We=(Math.sqrt(ze.reach)+H)**2,P=F[ge&1]??[];for(let M=0;M<P.length;M+=4){let X=P[M+2],de=P[M+3];if((X-rt)**2+(de-ve)**2>=We||Math.min(G(X,de,at,je,rt,ve),G(X,de,rt,ve,Mt,ot))>=1.2+H)continue;let ae=A(fe+P[M],ge+P[M+1]);ae!==null&&(O[ae]?.push(ze),K[ae]?.push(X,de))}})}),[O,K]):[O,K]},"ranges"),U=l(O=>{let[K,H]=i.centre(0,O),Z=Math.max(...i.outline(0,O).map(([fe,ge])=>Math.hypot(fe-K,ge-H))),j=[];for(let fe=-6;fe<=6;fe++)for(let ge=-4;ge<=4;ge++){let[Q,pe]=i.centre(ge,O+fe);Math.hypot(Q-K,pe-H)<1.2+Z+Ir*Math.SQRT2+1e-9&&j.push([ge,fe])}return j},"offsetsFor"),q=[U(0),U(1)],ie=l((O,K)=>{let[H,Z]=i.tileAt(O,K),j=A(H,Z),fe=j===null?null:g[j]??null;if(fe===null||fe.unknown)return{height:0,colour:c0(nd.colour),surfaces:Tn.map(()=>0),shore:0,unseen:!0};let ge=null,Q=null,pe=l(St=>St==="rolling"?ge??=c(O,K):Q??=h(O,K),"noiseHere"),le=0,he=0,ue=0,ee=0,me=Tn.map(()=>0),ne=0,xe=0,Se=0,ye=0,Xe=0,Ke=O+Ir*p(O,K),at=K+Ir*f(O,K);(q[Z&1]??[]).forEach(([St,Lt])=>{let st=H+St,k=Z+Lt,Ze=A(st,k);if(Ze===null)return;let et=g[Ze];if(et===void 0)return;let[rt,ve]=i.centre(st,k),{relief:mt,colour:ze,peak:We,surface:P}=et,M=Vl(Math.hypot(O-rt,K-ve)),X=mt.shape==="peaked"?Vl(Math.hypot(O-rt-We.u,K-ve-We.v)):0,de=Vl(Math.hypot(Ke-rt,at-ve))**3;if(M>0){let ae=m[mt.shape],Me=ae===null?0:mt.roughness*pe(ae);mt.shape==="peaked"?he+=M*(mt.base*(1-vd)+Me*.5):he+=M*(mt.base+Me),le+=M}if(X>0){let ae=mt.roughness*pe("ridged");ue+=X*X*(mt.base*vd*We.scale+ae*.5)}ee+=de,et.unknown||(me[P]=(me[P]??0)+de,ne+=de,xe+=et.water?de:0),Se+=de*ze[0],ye+=de*ze[1],Xe+=de*ze[2]});let je=j===null?[]:x[j]??[],Mt=j===null?[]:_[j]??[],ot=ue;if(je.length>0){let[St,Lt]=i.centre(H,Z);je.forEach((st,k)=>{let Ze=O-St+(Mt[k*2]??0),et=K-Lt+(Mt[k*2+1]??0);if((Ze-st.cu)**2+(et-st.cv)**2>=st.reach)return;let rt=st.roughness*pe("ridged")*.5;ot=Math.max(ot,Pv(Ze,et,st.au,st.av,st.ah,st.mu,st.mv,st.mh,rt),Pv(Ze,et,st.bu,st.bv,st.bh,st.mu,st.mv,st.mh,rt))})}return{height:(le>0?he/le:0)+ot,colour:ee>0?[Se/ee,ye/ee,Xe/ee]:fe.colour,surfaces:ne>0?me.map(St=>St/ne):Tn.map((St,Lt)=>Lt===fe.surface?1:0),shore:ne>0?xe/ne:fe.water?1:0,unseen:!1}},"sample");return C(),{sample:ie,height:l((O,K)=>ie(O,K).height,"height"),refresh:C}},"createRelief"),Iv=RT;var Lv=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),Dv=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((L,I)=>[L*a,I*o],"at"),p=r+3,f=new Float64Array(p*(s+3)),m=(r+1)*(s+1),g=new Float32Array(m*3),y=new Uint8Array(m*4),x=new Uint8Array(m*4),_=new Uint8Array(m),b=new Float32Array(m);for(let L=-1;L<=s+1;L++)for(let I=-1;I<=r+1;I++){let F=e.sample(...h(c+I,u+L)),{height:G,colour:J}=F;if(f[(L+1)*p+(I+1)]=G,I>=0&&I<=r&&L>=0&&L<=s){let U=L*(r+1)+I;g.set(J,U*3),F.surfaces.forEach((q,ie)=>{(ie<4?y:x)[U*4+ie%4]=Math.round(q*255)}),_[U]=Math.round(F.shore*255),b[U]=F.unseen?1:0}}let A=l((L,I)=>f[(I+1)*p+(L+1)]??0,"height"),w=new Float32Array(m*3),R=new Float32Array(m*3),[C,v]=h(c,u);for(let L=0;L<=s;L++)for(let I=0;I<=r;I++){let F=L*(r+1)+I,[G,J]=h(c+I,u+L),U=(A(I+1,L)-A(I-1,L))/(2*a),q=(A(I,L+1)-A(I,L-1))/(2*o),ie=Math.hypot(U,1,q);w[F*3]=G-C,w[F*3+1]=A(I,L),w[F*3+2]=J-v,R[F*3]=-U/ie,R[F*3+1]=1/ie,R[F*3+2]=-q/ie}let S=new Uint32Array(r*s*6);for(let L=0;L<s;L++)for(let I=0;I<r;I++){let F=L*(r+1)+I,G=F+1,J=F+r+1,U=J+1,q=(L*r+I)*6;S.set([F,J,G,G,J,U],q)}return{u:C,v,positions:w,normals:R,colours:g,surfacesA:y,surfacesB:x,shore:_,unseen:b,indices:S}},"buildChunk"),Nv=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,p]=e.centre(c,u);for(let f=Math.floor((h-n)/r);f<=Math.floor((h+n)/r);f++)for(let m=Math.floor((p-n)/s);m<=Math.floor((p+n)/s);m++){if(!a&&(m<0||m>=i.chunksV))continue;let g=(f%i.chunksU+i.chunksU)%i.chunksU,y=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Wn=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),Uv={Forest:{plants:[Wn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Wn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Wn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Wn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Wn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Wn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Wn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Wn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Wn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Wn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Wn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Wn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Wn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},ho=l(i=>Object.prototype.hasOwnProperty.call(Uv,i)?Uv[i]:null,"growthOf");var PT=["River"],ii=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),IT=["Irrigation","Farmland","Fortress","Airbase"],Fv=l(i=>i.city||IT.some(e=>ii(i,e))?null:ho(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),LT=l((i,e)=>{if(i.city)return null;let t=ii(i,"Road"),n=ii(i,"Railroad"),r=t?e.filter(p=>ii(p.tile,"Road")).map(({offset:p})=>p):[],s=t?e.filter(p=>!!p.tile.city||ii(p.tile,"Railroad")).map(({offset:p})=>p):[],a=l((p,f)=>p[0]===f[0]&&p[1]===f[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(p=>!n||!s.some(f=>a(f,p))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:ii(i,"Farmland")?"farmland":ii(i,"Irrigation")?"irrigation":null,mine:ii(i,"Mine"),fortress:ii(i,"Fortress"),airbase:ii(i,"Airbase"),pollution:ii(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:p})=>p).filter(p=>!PT.includes(p)).map(p=>[i.terrain._,p]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:ho(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=Fv(i);return u!==null&&(c.woods=e.filter(p=>Fv(p.tile)===u).map(({offset:p})=>p),c.paths=e.filter(p=>!!p.tile.city||ii(p.tile,"Road")).map(({offset:p})=>p)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Ov=LT;var Nt=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Bv={Coal:Nt("rocks","#26262a",4),Gold:Nt("rocks","#d8b13a",3),Gems:Nt("rocks","#59c2d6",4,"#b05ad0"),Iron:Nt("rocks","#8a5a44",4),Wheat:Nt("crop","#d9b84a",5,"#a88a2c"),Spice:Nt("crop","#c0452e",4,"#5d7a2a"),Wine:Nt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Nt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Nt("crop","#e08a2a",4,"#3f7a2a"),Horse:Nt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Nt("animal","#4a3424",3,"#2a1e16"),Game:Nt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Nt("animal","#8f7e66",2,"#e8e2d6"),Furs:Nt("animal","#b0602a",2,"#f0e8dc"),Ivory:Nt("animal","#8a8580",1,"#f2ead8"),Seal:Nt("animal","#6e7072",2,"#4a4c4e"),Pheasant:Nt("bird","#8a3a22",2,"#3d6a3a"),Fish:Nt("fish","#b8c4cc",5),Whales:Nt("whale","#3a4048",1),Oil:Nt("derrick","#222224",1,"#121214"),Oasis:Nt("oasis","#3f7a32",3,"#3f86a8"),Peat:Nt("peat","#4a3624",4),Shield:Nt("logs","#7a5532",4,"#c9a47a")},DT=Nt("cairn","#9a9690",5),kv=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Bv,n)?Bv[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??DT},"specialLook");var m0=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Xn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},po=.06,zv="#8c7a58",Gv="#5f5953",NT="#a9abae",UT="#5e432b",FT="#4f87b0",OT="#7da33f",BT=["#c2b448","#8fae3e"],Vv="#9d968a",kT="#4a4c50",f0="#6b4a2e",zT="#7a6a58",GT="#b89a5a",VT="#c9b48e",Hv="#34322a",Cn=new Hi(1,1,1),mo=new Wi(.5,.5,1,8),g0=new Xi(.5,1,8),HT=new Xi(.5,1,4),fo=new ns(.5,8,6),Wl=new Wi(.5,.5,1,4,1,!0),Xl=new Xi(.5,1,5,1,!0),bd=new ns(.5,5,3),h0={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},WT=.05,XT=.22,Wv=72,ri=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Xv=new Map,Md=l(i=>{let e=Xv.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Be(i);e=[t,n,r],Xv.set(i,e)}return e},"colourOf"),qv=new WeakMap,qT=l(i=>{let e=qv.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},qv.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),YT=new vt,$T=new $e,ZT=new W,JT=new yn,KT=new Un,jT=new W,Tt,Zv,Ot,b0=class b0{constructor(e,t){V(this,Tt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=Md(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/po)),u=Math.max(1,Math.ceil(n/po)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],p=l((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<c;f++)for(let m=0;m<u;m++){let[g,y]=p(f/c,(m+1)/u),[x,_]=p((f+1)/c,(m+1)/u),[b,A]=p(f/c,m/u),[w,R]=p((f+1)/c,m/u);T(this,Tt,Ot).call(this,g,y,s,a),T(this,Tt,Ot).call(this,x,_,s,a),T(this,Tt,Ot).call(this,b,A,s,a),T(this,Tt,Ot).call(this,x,_,s,a),T(this,Tt,Ot).call(this,w,R,s,a),T(this,Tt,Ot).call(this,b,A,s,a)}}ribbon(e,t,n,r,s){let a=Md(n),o=e.map((c,u)=>{let h=e[u-1]??c,p=e[u+1]??c,[f,m]=s?.[u]??[p[0]-h[0],p[1]-h[1]],g=Math.hypot(f,m);return g===0?[0,0]:[-m/g*t,f/g*t]});for(let c=0;c+1<e.length;c++){let u=e[c],h=e[c+1],p=o[c],f=o[c+1],m=Math.hypot(h[0]-u[0],h[1]-u[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/po)),y=Math.max(1,Math.ceil(t/po)),x=l((_,b)=>[u[0]+(h[0]-u[0])*_+(p[0]+(f[0]-p[0])*_)*(b-.5),u[1]+(h[1]-u[1])*_+(p[1]+(f[1]-p[1])*_)*(b-.5)],"at");for(let _=0;_<g;_++)for(let b=0;b<y;b++){let[A,w]=x(_/g,(b+1)/y),[R,C]=x((_+1)/g,(b+1)/y),[v,S]=x(_/g,b/y),[L,I]=x((_+1)/g,b/y);T(this,Tt,Ot).call(this,A,w,r,a),T(this,Tt,Ot).call(this,R,C,r,a),T(this,Tt,Ot).call(this,v,S,r,a),T(this,Tt,Ot).call(this,R,C,r,a),T(this,Tt,Ot).call(this,L,I,r,a),T(this,Tt,Ot).call(this,v,S,r,a)}}}disc(e,t,n,r,s=12){let a=Md(n),[o,c]=e,u=Math.max(1,Math.ceil(t/po)),h=l((p,f)=>{let m=f/s*Math.PI*2,g=p/u*t;return[o+Math.cos(m)*g,c+Math.sin(m)*g]},"at");for(let p=0;p<u;p++)for(let f=0;f<s;f++){let m=h(p+1,f),g=h(p+1,f+1);if(p===0)T(this,Tt,Ot).call(this,o,c,r,a),T(this,Tt,Ot).call(this,...g,r,a),T(this,Tt,Ot).call(this,...m,r,a);else{let y=h(p,f),x=h(p,f+1);T(this,Tt,Ot).call(this,...y,r,a),T(this,Tt,Ot).call(this,...x,r,a),T(this,Tt,Ot).call(this,...m,r,a),T(this,Tt,Ot).call(this,...x,r,a),T(this,Tt,Ot).call(this,...g,r,a),T(this,Tt,Ot).call(this,...m,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=qT(e),c=YT.compose(ZT.set(...t),JT.setFromEuler(KT.set(...s)),jT.set(...n)),u=c.elements,h=$T.getNormalMatrix(c).elements,[p,f,m]=Md(r),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],b=a[y+2],A=o[y],w=o[y+1],R=o[y+2],C=h[0]*A+h[3]*w+h[6]*R,v=h[1]*A+h[4]*w+h[7]*R,S=h[2]*A+h[5]*w+h[8]*R,L=Math.hypot(C,v,S)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*b+u[12],u[1]*x+u[5]*_+u[9]*b+u[13],u[2]*x+u[6]*_+u[10]*b+u[14]),g.normals.push(C/L,v/L,S/L),g.colours.push(p,f,m)}}spot(e,t){let n=ri(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-XT-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,hC(e,t,o,c)-WT-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=ri(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Wv;h++){let p=r+h/Wv*Math.PI*2,f=[s+Math.cos(p)*u*this.place.radius,a+Math.sin(p)*u*this.place.radius],m=this.clearance(f[0],f[1],n);if(m>=0)return this.taken.push([f[0],f[1],n]),f;m>c&&(o=f,c=m)}return this.taken.push([o[0],o[1],n]),o}};Tt=new WeakSet,Zv=l(function(e,t){let r=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,s=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),Ot=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...T(this,Tt,Zv).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(b0,"Layer");var p0=b0,x0=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),_0=l(i=>i.alone||i.joins.length>0,"drawn"),QT=.09,eC=8,tC=l(([i,e])=>300+(i+3)*7+(e+3),"wayIndex"),Jv=l((i,e)=>{let[t,n]=i.centre,[r,s]=x0(i,e),a=r-t,o=s-n,c=Math.hypot(a,o);if(c===0)return{points:[[t,n]],ways:[[0,0]]};let u=(ri(i.seed,tC(e))*2-1)*QT*c/(4/9),h=[-o/c,a/c],p=[t+a/3+h[0]*u,n+o/3+h[1]*u],f=[t+a*2/3,n+o*2/3],m=Math.max(eC,Math.ceil(c*1.02/po)),g=Array.from({length:m+1},(y,x)=>x/m);return{points:g.map(y=>{let x=(1-y)**3,_=3*(1-y)**2*y,b=3*(1-y)*y**2,A=y**3;return[x*t+_*p[0]+b*f[0]+A*r,x*n+_*p[1]+b*f[1]+A*s]}),ways:g.map(y=>{let x=3*(1-y)**2,_=6*(1-y)*y,b=3*y**2,A=x*(p[0]-t)+_*(f[0]-p[0])+b*(r-f[0]),w=x*(p[1]-n)+_*(f[1]-p[1])+b*(s-f[1]),R=Math.hypot(A,w);return R===0?[a/c,o/c]:[A/R,w/R]})}},"roadHalf"),nC=l((i,e)=>{let{place:t}=i;_0(e)&&(e.joins.forEach(n=>{let{points:r,ways:s}=Jv(t,n);i.ribbon(r,.07,zv,Xn.road,s)}),i.disc(t.centre,e.alone?.09:.035,zv,Xn.road))},"road"),iC=l((i,e)=>{if(!_0(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>x0(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,Gv,Xn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,UT,Xn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,NT,Xn.rail))}),i.disc(t.centre,.05,Gv,Xn.ballast)},"railroad"),rC=l((i,e)=>{let{centre:t,inner:n}=i.place,r=e==="farmland"?6:4,s=n*.9,a=s*2/r;for(let o=0;o<r;o++){let c=t[1]-s+a*(o+.5),u=e==="farmland"?BT[o%2]:OT;if(i.strip([t[0]-s,c],[t[0]+s,c],a*.8,u,Xn.field),o>0){let h=t[1]-s+a*o;i.strip([t[0]-s,h],[t[0]+s,h],.016,FT,Xn.field+.001)}}},"fields"),sC=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Cn,[e-.02,n+.05,t],[.01,.11,.01],f0,[0,0,-.3]),i.solid(Cn,[e+.02,n+.05,t],[.01,.11,.01],f0,[0,0,.3]),i.solid(mo,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid(g0,[a,i.ground(a,o)+.02,o],[.07,.04,.07],zT)})},"mine"),aC=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(Cn,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],Vv)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(mo,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Vv)})},"fortress"),oC=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,kT,Xn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Xn.road+.004),i.solid(Cn,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),lC=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Hv,Xn.smear,14),i.disc(i.spot(7,.5),e*.25,Hv,Xn.smear+.001)},"pollution"),cC=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(ri(i.place.seed,n*31+o*2)-.5)*c,t[1]+(ri(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),p=ri(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(fo,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,p,0]);break;case"crop":i.solid(mo,[c,h+.02,u],[.008,.04,.008],r),i.solid(fo,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let f=e.count===1?1.5:1;i.solid(Cn,[c,h+.04*f,u],[.035*f,.03*f,.07*f],e.colour,[0,p,0]),i.solid(Cn,[c+Math.sin(p)*.04*f,h+.055*f,u+Math.cos(p)*.04*f],[.022*f,.024*f,.03*f],r,[0,p,0]),i.solid(Cn,[c,h+.013*f,u],[.03*f,.026*f,.055*f],r,[0,p,0]);break}case"bird":i.solid(fo,[c,h+.02,u],[.03,.025,.04],e.colour,[0,p,0]),i.solid(Cn,[c-Math.sin(p)*.03,h+.025,u-Math.cos(p)*.03],[.008,.006,.04],r,[.4,p,0]);break;case"fish":i.solid(fo,[c,h+.006,u],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":i.solid(fo,[c,h,u],[.07,.05,.2],e.colour,[0,p,0]),i.solid(Cn,[c-Math.sin(p)*.11,h+.02,u-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":i.solid(Cn,[c,h+.008,u],[.08,.016,.08],r),i.solid(HT,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,Xn.field+.002);{let[f,m]=s(o+5,.1),g=i.ground(f,m);i.solid(mo,[f,g+.06,m],[.012,.12,.012],f0),i.solid(g0,[f,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?mo:Cn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:i.solid(fo,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),uC=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+ri(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(mo,[r,a+.02,s],[.05,.04,.05],VT),i.solid(g0,[r,a+.055,s],[.065,.035,.065],GT)})},"hut"),Kv={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},jv=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(Wl,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(Xl,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(Xl,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(Wl,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(bd,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(Wl,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(Xl,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(Wl,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(Cn,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(bd,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(Xl,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(Xl,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(bd,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Cn,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(bd,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(Wl,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(Cn,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),hC=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),dC=l((i,e)=>{let t=ho(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,p=o.size[0]+(o.size[1]-o.size[0])*ri(s,h),f=t.conifers,m=f!==void 0&&ri(s,h+1)>=f[0]+(f[1]-f[0])*a?"broadleaf":o.kind,g=Kv[m]*p;for(let y=0;y<6;y++){let x=ri(s,h+2+y*2)*Math.PI*2,_=Math.sqrt(ri(s,h+3+y*2))*r*.92,b=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(b,A,g)){jv(i,o,m,b,A,p,x),i.taken.push([b,A,g]),i.grown.push([b,A,m]);break}}}})},"plants"),d0=.26,Yv=.3,fC=.15,$v=.5,Sd=[.9,1.3],ea=l((i,e,t)=>ri(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),pC=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/d0)),p=o.u/h,f=o.v===null?null:Math.max(1,Math.round(o.v/d0)),m=o.v===null||f===null?d0:o.v/f,g=r.map(([v])=>v),y=r.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/p)-1,Math.ceil(Math.max(...g)/p)],[b,A]=[Math.floor(Math.min(...y)/m)-1,Math.ceil(Math.max(...y)/m)],w=a.filter(([v,S])=>!i.woods.some(([L,I])=>L===v&&I===S)).map(v=>{let[S,L]=c(v),I=Math.hypot(S-n[0],L-n[1]);return{mu:S,mv:L,length:I}}),R=t.plants.reduce((v,{count:S})=>v+S,0),C=[];for(let v=b;v<=A;v++)for(let S=x;S<=_;S++){let L=(S%h+h)%h,I=f===null?v:(v%f+f)%f,F=(S+.5+(ea(L,I,0)*2-1)*Yv)*p,G=(v+.5+(ea(L,I,1)*2-1)*Yv)*m;if(!s(F,G))continue;let J=w.reduce((H,{mu:Z,mv:j,length:fe})=>{let ge=fe/2-((F-n[0])*(Z-n[0])+(G-n[1])*(j-n[1]))/fe;return Math.min(H,Math.max(0,ge)/fC)},1);if(ea(L,I,2)>=$v+(1-$v)*J)continue;let U=ea(L,I,3)*R,q=t.plants[0];for(let H of t.plants)if(q=H,U-=H.count,U<0)break;let ie=t.conifers,O=ie!==void 0&&ea(L,I,4)>=ie[0]+(ie[1]-ie[0])*u?"broadleaf":q.kind,K=q.size[0]+(q.size[1]-q.size[0])*ea(L,I,5);C.push({u:F,v:G,kind:O,plant:q,room:Kv[O]*K*Sd[1],size:K*(Sd[0]+(Sd[1]-Sd[0])*J),facing:ea(L,I,6)*Math.PI*2})}return C},"woodsPlants"),mC=l((i,e,t)=>{let{centre:n,around:r,toward:s,heightAt:a}=i.place,o=Math.max(...r.map(u=>{let[h,p]=s(u);return Math.hypot(h-n[0],p-n[1])})),c=e.paths.map(u=>s(u));c.forEach((u,h)=>c.slice(h+1).forEach(p=>{Math.hypot(p[0]-u[0],p[1]-u[1])<=o+1e-6&&i.lines.push([u,p])})),pC(e,i.place,t).forEach(({u,v:h,kind:p,plant:f,size:m,room:g,facing:y})=>{p!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(jv(i,f,p,u,h,m,y),i.grown.push([u,h,p]))})},"woods"),v0=l((i,e,t)=>{let n=new p0(t,e),{centre:r,radius:s}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&_0(o)&&(o.joins.forEach(c=>{if(o===i.road){let u=Jv(e,c).points;u.slice(1).forEach((h,p)=>n.lines.push([u[p],h]));return}n.lines.push([r,x0(e,c)])}),o.alone&&n.lines.push([r,r]))}),i.fortress){let o=s*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[r[0]+u,r[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=s*.75;n.lines.push([[r[0]-o,r[1]+.12],[r[0]+o,r[1]+.12]])}i.irrigation!==null&&rC(n,i.irrigation),i.road!==null&&nC(n,i.road),i.railroad!==null&&iC(n,i.railroad),i.mine&&sC(n,n.claim(...h0.mine,.1)),i.fortress&&aC(n),i.airbase&&oC(n),i.pollution&&lC(n),i.specials.forEach(([o,c],u)=>cC(n,kv(o,c),n.claim(...h0.special(u),.1),u+1)),i.hut&&uC(n,n.claim(...h0.hut,.13));let a=ho(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?mC(n,i,a):dC(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),gC=l((i,e,t)=>{let n=m0();return t.forEach(({overlay:r,place:s})=>v0(r,s,n)),y0(i,e,n)},"overlayMesh"),y0=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Qv=gC;var hs,mn,Ci,Yl,Ri,qn,wn,go,$l,ta,Zl,Jl,It,ey,S0,w0,wd,Ed,ty,ql,E0=class E0{constructor(e){V(this,It);V(this,hs);V(this,mn);V(this,Ci,[]);V(this,Yl);V(this,Ri);V(this,qn,new Set);V(this,wn,null);V(this,go,null);V(this,$l,new Map);V(this,ta,[0,0]);V(this,Zl);V(this,Jl);z(this,Ri,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=Rv({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),z(this,hs,Iv({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:l((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:l((f,m)=>t.directions().map(g=>t.neighbour(f,m,g)).filter(g=>g!==null),"neighbours")}})),z(this,mn,Lv(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-a,m-o))),u=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[g,y]=this.layout.centre(f,m);return Math.hypot(g-a,y-o)}));z(this,Yl,1.2+c+Ir*Math.SQRT2+Math.max((Ki.reach-1)*u,u/2+Ir*Math.SQRT2+yd));let h=this.layout.outline(0,0),p=h.flatMap(([f,m],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-f,x-m);return _===0?[]:[{away:Math.abs((y-f)*(o-m)-(x-m)*(a-f))/_,normal:[(x-m)/_,(f-y)/_]}]});z(this,Zl,Math.min(...p.map(({away:f})=>f))),z(this,Jl,Math.min(...p.map(({away:f,normal:[m,g]})=>f/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=d(this,mn),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((y,x)=>{let _=`${y},${x}`,b=n.get(_);return b===void 0&&(b=d(this,hs).height(y*r,x*s),n.set(_,b)),b},"at"),p=h(a,o),f=h(a+1,o),m=h(a,o+1);if(c+u<=1)return p+(f-p)*c+(m-p)*u;let g=h(a+1,o+1);return g+(m-g)*(1-c)+(f-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,mn);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return d(this,mn).chunksV*d(this,mn).stepsV*d(this,mn).spacingV}heightAt(e,t){return d(this,hs).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=d(this,mn),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);z(this,Ci,T(this,It,ql).call(this,s,e,t)),z(this,ta,[e,t]),s.forEach(a=>d(this,qn).add(a))}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];z(this,ta,[t,n]),(e.length===0?[...T(this,It,Ed).call(this).values()].flat():T(this,It,ty).call(this,e)).forEach(([o,c])=>{let u=T(this,It,wd).call(this,o,c);if(d(this,qn).has(u)||d(this,wn)?.key===u&&!T(this,It,ey).call(this,d(this,wn),o,c))return;JSON.stringify(T(this,It,S0).call(this,o,c))!==(d(this,$l).get(`${o},${c}`)??"null")&&d(this,qn).add(u)});let s=d(this,hs).refresh(r?void 0:e);if(s.length===0)return s;let a=Nv(d(this,mn),this.layout,s,d(this,Yl)).map(([o,c])=>`${o},${c}`);return z(this,Ci,T(this,It,ql).call(this,[...new Set([...d(this,Ci),...a])],t,n)),s}refocus(e,t){z(this,Ci,T(this,It,ql).call(this,d(this,Ci),e,t)),z(this,ta,[e,t])}pending(){return d(this,Ci).length}overlaysPending(){return d(this,qn).size+(d(this,wn)===null||d(this,qn).has(d(this,wn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;d(this,Ci).length>0;){if(r())return;let s=d(this,Ci).shift(),[a,o]=s.split(",").map(Number);e.setChunk(a,o,Dv(d(this,mn),d(this,hs),a,o)),d(this,qn).add(s)}for(;d(this,qn).size>0||d(this,wn)!==null;){if(d(this,wn)!==null&&d(this,qn).has(d(this,wn).key)&&z(this,wn,null),d(this,wn)===null){let f=T(this,It,ql).call(this,[...d(this,qn)],...d(this,ta))[0];d(this,qn).delete(f),z(this,wn,{key:f,squares:T(this,It,Ed).call(this).get(f)??[],done:0,laid:m0(),heights:new Map})}let s=d(this,wn);for(;s.done<s.squares.length;){let[f,m]=s.squares[s.done],g=T(this,It,w0).call(this,f,m,s.heights);if(s.done++,g!==null&&v0(g.overlay,g.place,s.laid),s.done<s.squares.length&&r())return}let[a,o]=s.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:p}=d(this,mn);z(this,wn,null),e.setOverlay(a,o,s.laid.positions.length===0?null:y0(a*c*h,o*u*p,s.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,mn),o=new Map,c=(T(this,It,Ed).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>T(this,It,w0).call(this,u,h,o)??[]);return c.length===0?null:Qv(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return T(this,It,wd).call(this,e,t)}};hs=new WeakMap,mn=new WeakMap,Ci=new WeakMap,Yl=new WeakMap,Ri=new WeakMap,qn=new WeakMap,wn=new WeakMap,go=new WeakMap,$l=new WeakMap,ta=new WeakMap,Zl=new WeakMap,Jl=new WeakMap,It=new WeakSet,ey=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),S0=l(function(e,t){let n=d(this,Ri).topology();return Ov(d(this,Ri).get(e,t),n.directions().flatMap(r=>{let s=n.neighbour(e,t,r);return s===null?[]:[{offset:n.offset(r,e,t),tile:d(this,Ri).get(s[0],s[1])}]}))},"#overlayAt"),w0=l(function(e,t,n){let r=T(this,It,S0).call(this,e,t);if(d(this,$l).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=d(this,Ri).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:d(this,Zl),inner:d(this,Jl),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,p]=this.layout.tileAt(c,u);return h===e&&p===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),wd=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=d(this,mn),[u,h]=this.layout.centre(e,t),p=Math.floor(u/(s*o)),f=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,p))},${Math.min(r-1,Math.max(0,f))}`},"#chunkOf"),Ed=l(function(){if(d(this,go)===null){let e=new Map;for(let t=0;t<d(this,Ri).height();t++)for(let n=0;n<d(this,Ri).width();n++){let r=T(this,It,wd).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}z(this,go,e)}return d(this,go)},"#chunksOfSquares"),ty=l(function(e){let t=d(this,Ri).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),ql=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=d(this,mn),c=r*a,u=s*o,{u:h,v:p}=this.layout.period(),f=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),m=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(f((y+.5)*c-t,h),f((x+.5)*u-n,p))},"distance");return[...e].sort((g,y)=>m(g)-m(y))},"#nearestFirst"),l(E0,"Land");var M0=E0,ny=M0;var xC=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Pi=xC;var iy=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var _C=8,vC=.92,yC=.02,ry=3,bC=50,MC=8,SC=10,sy=250,Kl,jl,xo,_o,na,ds,A0=class A0{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){V(this,Kl);V(this,jl);V(this,xo);V(this,_o);V(this,na,!1);V(this,ds);this.pointerId=e,z(this,Kl,t),z(this,jl,n),z(this,xo,t),z(this,_o,n),z(this,ds,[{x:t,y:n,time:r}])}dragging(){return d(this,na)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!d(this,na)&&Math.hypot(t-d(this,Kl),n-d(this,jl))<_C)return null;let s=!d(this,na),a=d(this,xo)-t,o=d(this,_o)-n;return z(this,na,!0),z(this,xo,t),z(this,_o,n),d(this,ds).push({x:t,y:n,time:r}),d(this,ds).length>20&&d(this,ds).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return iy(d(this,ds),e)}};Kl=new WeakMap,jl=new WeakMap,xo=new WeakMap,_o=new WeakMap,na=new WeakMap,ds=new WeakMap,l(A0,"Press");var Ad=A0,er,Ql,T0=class T0{constructor(e){V(this,er,null);V(this,Ql);z(this,Ql,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>ry?ry/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<yC){z(this,er,null);return}d(this,Ql).call(this,-r*u,-s*u);let h=Math.pow(vC,u/16);r*=h,s*=h,z(this,er,window.requestAnimationFrame(o))},"step");z(this,er,window.requestAnimationFrame(o))}gliding(){return d(this,er)!==null}stop(){d(this,er)!==null&&(window.cancelAnimationFrame(d(this,er)),z(this,er,null))}};er=new WeakMap,Ql=new WeakMap,l(T0,"Glide");var Td=T0,ia,ec,tc,vo,C0=class C0{constructor(){V(this,ia,0);V(this,ec,0);V(this,tc,-1/0);V(this,vo,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=sy)return 0;let s=Math.sign(r),a=e.timeStamp-d(this,tc)>sy||s!==d(this,ec);if(z(this,tc,e.timeStamp),z(this,ec,s),a&&(z(this,ia,0),z(this,vo,0)),n&&!e.ctrlKey&&d(this,vo)>=SC)return 0;if(!a&&n){if(z(this,ia,d(this,ia)+r),Math.abs(d(this,ia))<(e.ctrlKey?MC:bC))return 0;z(this,ia,0)}return n&&!e.ctrlKey&&z(this,vo,d(this,vo)+1),r<0?1:-1}};ia=new WeakMap,ec=new WeakMap,tc=new WeakMap,vo=new WeakMap,l(C0,"WheelTurn");var Cd=C0;var wC=350,EC=.006,ay=.004,tr,an,En,yo,nr,Ii,Ld,ai,oi,fs,bo,Yn,ps,Ne,si,Rd,Pd,oy,P0,Lr,I0,ly,Dr,cy,uy,hy,dy,nc,fy,py,my,Id,L0=class L0{constructor(e,t,n=null){V(this,Ne);V(this,tr);V(this,an);V(this,En,null);V(this,yo,[0,0]);V(this,nr,null);V(this,Ii);V(this,Ld,new Cd);V(this,ai,new Map);V(this,oi,null);V(this,fs,null);V(this,bo,[]);V(this,Yn);V(this,ps,null);z(this,tr,e),z(this,an,t),z(this,Yn,n),z(this,Ii,new Td((r,s)=>{let[a,o]=T(this,Ne,oy).call(this);T(this,Ne,I0).call(this,[a,o],[a-r,o-s])})),T(this,Ne,si).call(this,"pointerdown",r=>T(this,Ne,ly).call(this,r)),T(this,Ne,si).call(this,"pointermove",r=>T(this,Ne,uy).call(this,r)),T(this,Ne,si).call(this,"pointerup",r=>T(this,Ne,hy).call(this,r)),T(this,Ne,si).call(this,"pointercancel",r=>T(this,Ne,dy).call(this,r)),T(this,Ne,si).call(this,"wheel",r=>T(this,Ne,py).call(this,r),{passive:!1}),T(this,Ne,si).call(this,"gesturestart",r=>T(this,Ne,Id).call(this,r,"start"),{passive:!1}),T(this,Ne,si).call(this,"gesturechange",r=>T(this,Ne,Id).call(this,r,"change"),{passive:!1}),T(this,Ne,si).call(this,"gestureend",r=>T(this,Ne,Id).call(this,r,"end"),{passive:!1}),T(this,Ne,si).call(this,"contextmenu",r=>T(this,Ne,cy).call(this,r)),T(this,Ne,si).call(this,"pointerleave",()=>d(this,Yn)?.hover(null)),T(this,Ne,si).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return d(this,En)?.dragging()===!0||d(this,nr)!==null}moving(){return this.dragging()||d(this,oi)!==null||d(this,Ii).gliding()}dispose(){d(this,Ii).stop(),T(this,Ne,Dr).call(this),d(this,bo).forEach(([e,t,n])=>d(this,tr).removeEventListener(e,t,n)),z(this,bo,[])}};tr=new WeakMap,an=new WeakMap,En=new WeakMap,yo=new WeakMap,nr=new WeakMap,Ii=new WeakMap,Ld=new WeakMap,ai=new WeakMap,oi=new WeakMap,fs=new WeakMap,bo=new WeakMap,Yn=new WeakMap,ps=new WeakMap,Ne=new WeakSet,si=l(function(e,t,n){d(this,tr).addEventListener(e,t,n),d(this,bo).push([e,t,n])},"#listen"),Rd=l(function(){return{width:d(this,tr).clientWidth||1,height:d(this,tr).clientHeight||1}},"#box"),Pd=l(function([e,t]){let{width:n,height:r}=T(this,Ne,Rd).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),oy=l(function(){let{width:e,height:t}=T(this,Ne,Rd).call(this);return[e/2,t/2]},"#middle"),P0=l(function(){let{width:e,height:t}=T(this,Ne,Rd).call(this);return e/t},"#aspect"),Lr=l(function(e){let t=d(this,tr).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),I0=l(function(e,t){d(this,an).setOrbit(uv(d(this,an).orbit(),d(this,an).lookHeight(),T(this,Ne,Pd).call(this,e),T(this,Ne,Pd).call(this,t),T(this,Ne,P0).call(this)))},"#pan"),ly=l(function(e){if(d(this,Ii).stop(),d(this,Yn)?.hover(null),e.pointerType==="touch"&&(d(this,ai).set(e.pointerId,T(this,Ne,Lr).call(this,e)),d(this,ai).size===2)){z(this,En,null),T(this,Ne,Dr).call(this),z(this,oi,T(this,Ne,nc).call(this));return}if(e.isPrimary&&e.button!==2){if(d(this,tr).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),z(this,nr,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Ad(e),[n,r]=T(this,Ne,Lr).call(this,e),{clientX:s,clientY:a}=e;z(this,En,t),z(this,yo,[n,r]),T(this,Ne,Dr).call(this),z(this,ps,window.setTimeout(()=>{z(this,ps,null),d(this,En)===t&&!t.dragging()&&d(this,Yn)?.menu(n,r,s,a,!0)===!0&&z(this,En,null)},wC))}}},"#down"),Dr=l(function(){d(this,ps)!==null&&(window.clearTimeout(d(this,ps)),z(this,ps,null))},"#stopHold"),cy=l(function(e){if(d(this,Yn)===null||!d(this,Yn).menuOnRightClick()||(e.preventDefault(),d(this,Yn).menuOpen()))return;let[t,n]=T(this,Ne,Lr).call(this,e);d(this,Yn).menu(t,n,e.clientX,e.clientY,!1)&&(T(this,Ne,Dr).call(this),z(this,En,null))},"#rightClick"),uy=l(function(e){if(d(this,ai).has(e.pointerId)&&(d(this,ai).set(e.pointerId,T(this,Ne,Lr).call(this,e)),d(this,oi)!==null)){T(this,Ne,fy).call(this);return}let t=d(this,nr);if(t!==null&&t.pointerId===e.pointerId){let s=d(this,an).orbit();d(this,an).setOrbit(Ks({...s,yaw:s.yaw-(e.clientX-t.x)*EC,pitch:s.pitch+(e.clientY-t.y)*ay})),t.x=e.clientX,t.y=e.clientY;return}let n=d(this,En);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!d(this,Ii).gliding()){let[s,a]=T(this,Ne,Lr).call(this,e);d(this,Yn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;T(this,Ne,Dr).call(this);let r=T(this,Ne,Lr).call(this,e);T(this,Ne,I0).call(this,d(this,yo),r),z(this,yo,r)},"#move"),hy=l(function(e){if(d(this,ai).delete(e.pointerId),d(this,oi)!==null){z(this,oi,d(this,ai).size<2?null:T(this,Ne,nc).call(this));return}if(d(this,nr)?.pointerId===e.pointerId){z(this,nr,null);return}let t=d(this,En);if(!(t===null||t.pointerId!==e.pointerId)){if(z(this,En,null),T(this,Ne,Dr).call(this),!t.dragging()){let[n,r]=T(this,Ne,Lr).call(this,e);d(this,Yn)?.click(n,r,e.clientX,e.clientY);return}Pi()||d(this,Ii).start(t.releaseVelocity(e.timeStamp))}},"#up"),dy=l(function(e){d(this,ai).delete(e.pointerId),d(this,oi)!==null&&z(this,oi,d(this,ai).size<2?null:T(this,Ne,nc).call(this)),d(this,En)?.pointerId===e.pointerId&&(z(this,En,null),T(this,Ne,Dr).call(this)),d(this,nr)?.pointerId===e.pointerId&&z(this,nr,null)},"#cancel"),nc=l(function(){let[e,t]=[...d(this,ai).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:d(this,an).orbit()}},"#measurePair"),fy=l(function(){let e=d(this,oi),t=T(this,Ne,nc).call(this);e===null||t===null||d(this,an).setOrbit(Ks({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*ay}))},"#twoFingers"),py=l(function(e){e.preventDefault();let t=d(this,Ld).turned(e,d(this,fs)?.at??null);t!==0&&(d(this,Ii).stop(),T(this,Ne,my).call(this,t,T(this,Ne,Lr).call(this,e)))},"#wheelTurned"),my=l(function(e,t){let n=d(this,an).orbit(),r=lo(n,e),s=oo(n,d(this,an).lookHeight(),T(this,Ne,Pd).call(this,t),T(this,Ne,P0).call(this));if(s===null||r.distance===n.distance){d(this,an).setOrbit(r);return}let a=1-r.distance/n.distance;d(this,an).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),Id=l(function(e,t){if(e.preventDefault(),d(this,oi)!==null){z(this,fs,null);return}if(t==="end"){z(this,fs,null);return}if(t==="start"){d(this,Ii).stop(),z(this,En,null),T(this,Ne,Dr).call(this),z(this,fs,{orbit:d(this,an).orbit(),at:e.timeStamp});return}let n=d(this,fs);n!==null&&(n.at=e.timeStamp,d(this,an).setOrbit(Ks({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(L0,"CameraInput");var R0=L0,gy=R0;var AC=["#9a9a9a","#4a4a4a"],ic=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?AC:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),D0=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),TC=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),CC=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=D0(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:ic(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:ic(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:p})=>p==="Fortified"),veteran:(o.improvements??[]).some(({_:p})=>p==="Veteran"),health:TC(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),N0=CC;var by={step:250,ramp:100,most:2e3},My={step:125,ramp:50,most:1e3},Sy=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),RC=50,xy=.3,_y=1,PC=.05,IC=.02,U0=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),vy=l((i,e)=>{let{started:t,from:n,speed:r,rising:s,rise:a,top:o,going:c,stopping:u,fall:h,to:p}=i,f=Math.max(0,e-t);if(f<s)return{along:n+r*f+a*f*f/2,speed:r+a*f};let m=n+(r+o)/2*s;if(f<s+c)return{along:m+o*(f-s),speed:o};let g=m+o*c,y=f-s-c;return y<u?{along:g+o*y-h*y*y/2,speed:o-h*y}:{along:p,speed:0}},"motionAt"),rc=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),yy=l((i,e,t,n,r)=>{let s=Math.max(0,n-e),a=Math.max(1,r.ramp),o=Math.max(1/r.step,r.most>a*2?s/(r.most-a):0),c=o/a;if(s<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=s){let x=2*s/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let u=Math.min(o,Math.sqrt(c*s+t*t/2)),h=Math.abs(u-t)/c,p=u>=t?c:-c,f=u/c,m=(t+u)/2*h,g=u*f/2,y=Math.max(0,(s-m-g)/u);return{started:i,from:e,speed:t,rising:h,rise:p,top:u,going:y,stopping:f,fall:c,to:n}},"plan"),Mo=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),LC=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),F0=l(i=>i*i*(3-2*i),"eased"),O0=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),wo,gn,li,oc,lc,lt,wy,Ey,k0,z0,Ay,G0,Dd,sc,ac,So,V0=class V0{constructor(e){V(this,lt);V(this,wo);V(this,gn,new Map);V(this,li,new Map);V(this,oc,[]);V(this,lc,0);z(this,wo,e)}walking(e){return d(this,li).has(e)}size(){return d(this,gn).size}step(e,t,n,r,s,a,o,c=!1){let u=d(this,li).get(e),h=u===void 0?void 0:d(this,gn).get(u),p=h===void 0?r:T(this,lt,Dd).call(this,h,a),f=h===void 0?0:T(this,lt,ac).call(this,h,T(this,lt,sc).call(this,h,a)),m=[...d(this,gn).values()].find(g=>g!==h&&(c||!g.flies)&&T(this,lt,wy).call(this,g,t,n,a)&&T(this,lt,Ay).call(this,T(this,lt,Dd).call(this,g,g.stepped),h===void 0?r:T(this,lt,Dd).call(this,h,g.stepped))&&xy*Math.abs(F0(T(this,lt,ac).call(this,g,T(this,lt,sc).call(this,g,a)))-F0(f))<IC);if(m!==void 0)return h!==void 0&&T(this,lt,z0).call(this,h,e),m.units.push(e),d(this,li).set(e,m.id),m.id;if(h!==void 0&&U0(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++mi(this,lc)._}`,units:h.units.filter(y=>y!==e),points:[...h.points],squares:[...h.squares]};d(this,gn).set(g.id,g),g.units.forEach(y=>d(this,li).set(y,g.id)),h.units=[e]}return T(this,lt,k0).call(this,h,n,s,a,o,c),h.id}return h!==void 0&&T(this,lt,z0).call(this,h,e),T(this,lt,Ey).call(this,e,t,n,p,s,a,o,{flies:c,climbed:f})}at(e){let t=[],n=[];return d(this,gn).forEach(r=>{let s=T(this,lt,So).call(this,r,e);if(e>=rc(r.motion)){n.push(s),T(this,lt,G0).call(this,r);return}t.push(s)}),{going:t,ended:n}}dropped(){return d(this,oc).splice(0)}endsAt(e){let t=d(this,li).get(e),n=t===void 0?void 0:d(this,gn).get(t);return n===void 0?null:rc(n.motion)}nextEnd(){let e=null;return d(this,gn).forEach(t=>{let n=rc(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return d(this,gn).forEach(r=>{e(r.units)&&(n.push(T(this,lt,So).call(this,r,Math.max(t,rc(r.motion)))),T(this,lt,G0).call(this,r))}),n}endAll(e){let t=[...d(this,gn).values()].map(n=>T(this,lt,So).call(this,n,Math.max(e,rc(n.motion))));return d(this,gn).clear(),d(this,li).clear(),t}};wo=new WeakMap,gn=new WeakMap,li=new WeakMap,oc=new WeakMap,lc=new WeakMap,lt=new WeakSet,wy=l(function(e,t,n,r){let s=e.squares.length-1;return s>0&&r-e.stepped<=RC&&U0(e.squares[s-1],t)&&U0(e.squares[s],n)},"#justMade"),Ey=l(function(e,t,n,r,s,a,o,{flies:c,climbed:u}){let h=`walk-${++mi(this,lc)._}`,p={id:h,units:[e],from:t,points:[r],squares:[t],stepped:a,motion:yy(a,0,0,0,o),turned:null,flies:c,flown:0,climb:{from:u,at:0}};return d(this,gn).set(h,p),d(this,li).set(e,h),T(this,lt,k0).call(this,p,n,s,a,o,c),h},"#setOff"),k0=l(function(e,t,n,r,s,a){let{u:o,v:c}=d(this,wo),u=e.points[e.points.length-1],h=u.middle??u.at,{along:p,speed:f}=vy(e.motion,r),m=Math.max(0,Math.floor(p)-1),g=e.points.length>1?T(this,lt,So).call(this,e,r).facing:null,y=e.points.length-1,x=p-(y-1),_=T(this,lt,sc).call(this,e,r);e.points.length>1&&(e.climb={from:T(this,lt,ac).call(this,e,_),at:e.flown+_}),e.flies=a,u.middle!==void 0&&x*Math.hypot(u.middle[0]-u.at[0],u.middle[1]-u.at[1])<.01&&(e.points[y]={at:u.middle,lift:0,middle:u.middle}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[Mo(n.at[0],u.at[0],o),Mo(n.at[1],u.at[1],c)],lift:n.lift,...n.middle===void 0?{}:{middle:[Mo(n.middle[0],h[0],o),Mo(n.middle[1],h[1],c)]}}),e.squares.push(t),e.stepped=r,e.turned=g===null?null:{facing:g,at:r,over:s.step/2},e.motion=yy(r,p-m,f,e.points.length-1,s)},"#goOn"),z0=l(function(e,t){e.units=e.units.filter(n=>n!==t),d(this,li).delete(t),e.units.length===0&&(d(this,gn).delete(e.id),d(this,oc).push(e.id))},"#leave"),Ay=l(function(e,t){let{u:n,v:r}=d(this,wo);return Math.hypot(Mo(e.at[0],t.at[0],n)-t.at[0],Mo(e.at[1],t.at[1],r)-t.at[1])<PC},"#beside"),G0=l(function(e){d(this,gn).delete(e.id),e.units.forEach(t=>d(this,li).delete(t))},"#end"),Dd=l(function(e,t){let{at:n,lift:r}=T(this,lt,So).call(this,e,t);return{at:n,lift:r}},"#drawn"),sc=l(function(e,t){return Math.min(e.points.length-1,Math.max(0,vy(e.motion,t).along))},"#along"),ac=l(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/_y,(e.points.length-1-t)/_y)):0},"#climbed"),So=l(function(e,t){let{points:n,squares:r,turned:s}=e,a=n.length-1,o=T(this,lt,sc).call(this,e,t),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],p=n[c+1]??h,f=[h.at[0]+(p.at[0]-h.at[0])*u,h.at[1]+(p.at[1]-h.at[1])*u],m=l(b=>n[b].middle??n[b].at,"middle"),g=l(b=>b<0||b>=a?null:LC(m(b),m(b+1)),"way"),y=g(c)??0,x=u>.75&&g(c+1)!==null?O0(y,g(c+1),(u-.75)*2):u<.25&&g(c-1)!==null?O0(g(c-1),y,(u+.25)*2):y,_=s!==null&&t-s.at<s.over?O0(s.facing,x,Math.max(0,t-s.at)/s.over):x;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(p.lift-h.lift)*u,aloft:xy*F0(T(this,lt,ac).call(this,e,o)),facing:_,from:e.from,before:r[a-1]??r[a],to:r[a]}},"#walker"),l(V0,"Walks");var B0=V0,Ty=B0;var DC=l(({kind:i,start:e,duration:t},n)=>{let r=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return i==="in"?r:1-r},"fadeAt"),ir,Nd,W0=class W0{constructor(){V(this,ir,new Map);V(this,Nd,0)}size(){return d(this,ir).size}add(e,t,n=500){let r=`fade-${++mi(this,Nd)._}`;return d(this,ir).set(r,{id:r,kind:e,start:t,duration:n}),r}at(e){let t=[],n=[];return d(this,ir).forEach((r,s)=>{if(e>=r.start+r.duration){n.push(s),d(this,ir).delete(s);return}t.push({id:s,kind:r.kind,opacity:DC(r,e)})}),{going:t,ended:n}}end(e){d(this,ir).delete(e)}endAll(){let e=[...d(this,ir).keys()];return d(this,ir).clear(),e}};ir=new WeakMap,Nd=new WeakMap,l(W0,"Fades");var H0=W0,Cy=H0;var rr,Y0=class Y0{constructor(){V(this,rr,new Map)}size(){return d(this,rr).size}trail(e,t,n){let r=d(this,rr).get(e),[s,a]=r?.points??[];if(r===void 0||s===void 0||a===void 0||n-a.time>=1200){d(this,rr).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let o=t[0]-a.at[0],c=t[1]-a.at[1],u=Math.hypot(o,c),h=Math.floor(u/.04),[p,f]=a.at,m=a.time;r.points.splice(1,0,...Array.from({length:h},(g,y)=>{let x=(h-y)*.04/u;return{at:[p+o*x,f+c*x],time:m+(n-m)*x}}))}at(e){let t=[],n=[];return d(this,rr).forEach((r,s)=>{if(r.points=r.points.filter(({time:a})=>e-a<1200),r.points.length===0){d(this,rr).delete(s),n.push(s);return}t.push({id:s,points:r.points.map(({at:a,time:o})=>({at:a,age:Math.max(0,e-o)}))})}),{going:t,gone:n}}endAll(){let e=[...d(this,rr).keys()];return d(this,rr).clear(),e}};rr=new WeakMap,l(Y0,"Wakes");var q0=Y0,X0={start:.03,by:.17,over:.5},NC=.016,UC=.004,Ry=l(i=>{let[e]=i,t=[];if(e===void 0)return t;let n=i.map((a,o)=>{let c=i[o-1]??a,u=i[o+1]??a,h=c.at[0]-u.at[0],p=c.at[1]-u.at[1],f=Math.hypot(h,p);return f===0?null:[-p/f,h/f]}),r=i.reduce((a,o,c)=>{let u=i[c-1];return a.push(u===void 0?0:a[c-1]+Math.hypot(o.at[0]-u.at[0],o.at[1]-u.at[1])),a},[]),s=l((a,o)=>{let c=i[a],u=n[a],h=Math.min(1,c.age/1200);if(u==null)return null;let p=X0.start+X0.by*Math.min(1,r[a]/X0.over),f=NC*(1-h),m=[c.at[0]-e.at[0]+u[0]*p*o,c.at[1]-e.at[1]+u[1]*p*o];return[[m[0]-u[0]*f/2,m[1]-u[1]*f/2],[m[0]+u[0]*f/2,m[1]+u[1]*f/2]]},"edges");for(let a=0;a+1<i.length;a++)[1,-1].forEach(o=>{let c=s(a,o),u=s(a+1,o);if(c===null||u===null)return;let[h,p]=c,[f,m]=u;[h,f,p,p,f,m].forEach(([g,y])=>t.push(g,UC,y))});return t},"wakeShape"),Py=q0;var eg={reach:200,back:300,fade:600},Iy=l(i=>({reach:i.reach/2,back:i.back/2,fade:i.fade/2}),"quickerBattle"),tg=.45,cc=l(i=>i.start+i.pace.reach,"blowAt"),$0=l(i=>cc(i)+(i.won?Math.max(i.pace.back,i.pace.fade):i.pace.fade),"battleEnds"),Z0=l(i=>Math.min(1,Math.max(0,i)),"clamp"),FC=l(i=>i*i,"easeIn"),OC=l(i=>i*i*(3-2*i),"easeInOut"),BC=l((i,e)=>{let{reach:t,back:n,fade:r}=i.pace,s=e-cc(i),a=1-Z0(r<=0?1:s/r);return s<0?{reach:FC(Z0(t<=0?1:(e-i.start)/t)),attacker:1,fallen:1}:i.won?{reach:1-OC(Z0(n<=0?1:s/n)),attacker:1,fallen:a}:{reach:1,attacker:a,fallen:0}},"battleAt"),J0=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),kC=l((i,e)=>i.attacker===e.attacker||i.attacker===e.defender,"waitsFor"),Qt,sr,Ud,ar,j0,Q0,Ly,ng=class ng{constructor(){V(this,ar);V(this,Qt,[]);V(this,sr,new Set);V(this,Ud,0)}size(){return d(this,Qt).length}attacking(e){return d(this,Qt).some(t=>t.attacker===e)}fighting(e){return d(this,Qt).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return d(this,Qt).find(t=>!d(this,sr).has(t.id)&&J0(t.defenderSquare,e))??null}add(e,t,n,r=t){let s={...e,id:`battle-${++mi(this,Ud)._}`,start:T(this,ar,j0).call(this,e,n,d(this,Qt),Math.max(t,r)),notBefore:r,pace:n};return d(this,Qt).push(s),s}at(e){let t=[],n=[],r=[],s=new Set;return d(this,Qt).forEach(a=>{if(e>=cc(a)&&!d(this,sr).has(a.id)&&(d(this,sr).add(a.id),n.push(a)),e>=$0(a)){r.push(a);return}t.push(...T(this,ar,Ly).call(this,a,e,s))}),T(this,ar,Q0).call(this,r),{going:t,struck:n,ended:r}}endWhere(e,t){let n=d(this,Qt).filter(e),r=d(this,Qt).filter((a,o)=>n.includes(a)||!d(this,sr).has(a.id)&&n.some(c=>d(this,Qt).indexOf(c)>o&&J0(c.defenderSquare,a.defenderSquare))),s=r.filter(a=>!d(this,sr).has(a.id));return s.forEach(a=>d(this,sr).add(a.id)),T(this,ar,Q0).call(this,r),r.length>0&&d(this,Qt).forEach((a,o)=>{a.start>t&&(a.start=T(this,ar,j0).call(this,a,a.pace,d(this,Qt).slice(0,o),Math.max(t,a.notBefore)))}),{struck:s,ended:r}}busyUntil(e){return d(this,Qt).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,$0(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};Qt=new WeakMap,sr=new WeakMap,Ud=new WeakMap,ar=new WeakSet,j0=l(function(e,t,n,r){return n.reduce((s,a)=>kC(a,e)?Math.max(s,$0(a)):J0(a.defenderSquare,e.defenderSquare)?Math.max(s,cc(a)-t.reach):s,r)},"#startOf"),Q0=l(function(e){e.length!==0&&(z(this,Qt,d(this,Qt).filter(t=>!e.includes(t))),e.forEach(t=>d(this,sr).delete(t.id)))},"#take"),Ly=l(function(e,t,n){let{reach:r,attacker:s,fallen:a}=BC(e,t),{from:o,edge:c,fallsAt:u}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),s>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[o.at[0]+(c[0]-o.at[0])*r,o.at[1]+(c[1]-o.at[1])*r],lift:o.lift*(1-r),facing:e.facing,opacity:s}),e.won&&t>=cc(e)&&a>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[u.at[0],u.at[1]],lift:u.lift,facing:e.defenderFacing,opacity:a}),h},"#fighters"),l(ng,"Battles");var K0=ng,Dy=K0;var zC=1,GC=.04,VC=12,HC=l((i,e,t,n,r,{water:s=0,ceiling:a=zC}={})=>{let{from:o,direction:c}=n0(i,e,t,n),[u,h,p]=o,[f,m,g]=c;if(m>-1e-6)return null;let y=l(v=>[u+f*v,h+m*v,p+g*v],"at"),x=l(v=>{let[S,L,I]=y(v);return L-Math.max(s,r(S,I))},"above"),_=Math.max(0,(h-a)/-m),b=(h-s)/-m,A=GC/Math.max(1e-6,Math.hypot(f,g)),w=_;for(let v=_;;v=Math.min(b,v+A)){if(x(v)<=0){let S=w,L=v;for(let G=0;G<VC;G++){let J=(S+L)/2;x(J)>0?S=J:L=J}let[I,,F]=y(L);return[I,F]}if(v>=b)break;w=v}let[R,,C]=y(b);return[R,C]},"pickGround"),Ny=HC;var Fd=4,ms,uc,ra,sa,Rn,Eo,gs,Nr,hc,dc,fc,Li,Od,Uy,rg,sg=class sg{constructor(e,t,n,r,s){V(this,Li);V(this,ms);V(this,uc);V(this,ra);V(this,sa);V(this,Rn);V(this,Eo);V(this,gs);V(this,Nr);V(this,hc);V(this,dc);V(this,fc,l(e=>{let t=d(this,ms).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;d(this,dc).call(this,n*d(this,Rn),r*d(this,Eo))},"#click"));z(this,ms,e),z(this,ra,t),z(this,sa,n),z(this,Rn,t.period().u),z(this,Eo,r),z(this,dc,s),z(this,Nr,document.createElement("canvas"));let{v:a}=t.period();z(this,gs,a),z(this,hc,[[0,0],[-d(this,Rn),0],...a===null?[]:[[0,-a],[-d(this,Rn),-a]]]);let o=Math.max(1,Math.round(d(this,Rn)*Fd)),c=Math.max(1,Math.round(d(this,Eo)*Fd));[e,d(this,Nr)].forEach(u=>{u.width=o,u.height=c}),z(this,uc,e.getContext("2d")),e.addEventListener("click",d(this,fc))}dispose(){d(this,ms).removeEventListener("click",d(this,fc))}redraw(){let e=d(this,Nr).getContext("2d");if(e===null)return;let t=d(this,sa).width(),n=d(this,sa).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,d(this,Nr).width,d(this,Nr).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=d(this,sa).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Ws(c).colour,d(this,hc).forEach(([p,f])=>{T(this,Li,Uy).call(this,e,a,s,p,f),e.fill()});let[u,h]=d(this,ra).centre(a,s);if(o.city)r.push([u,h,ic(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=D0(o.units,null);p!==null&&r.push([u,h,ic(p.player)[0],1.4])}}r.forEach(([s,a,o,c])=>T(this,Li,rg).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=d(this,uc);if(n===null)return;if(n.clearRect(0,0,d(this,ms).width,d(this,ms).height),n.drawImage(d(this,Nr),0,0),t!==null){let[h,p]=d(this,ra).centre(t.x,t.y);n.fillStyle="#ffffff",T(this,Li,rg).call(this,h,p).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=d(this,gs),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-d(this,Rn)*Math.floor(s/d(this,Rn)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-d(this,Rn),0,d(this,Rn)].forEach(p=>{n.beginPath(),e.forEach(([f,m],g)=>{let[y,x]=T(this,Li,Od).call(this,f+o+p,m+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};ms=new WeakMap,uc=new WeakMap,ra=new WeakMap,sa=new WeakMap,Rn=new WeakMap,Eo=new WeakMap,gs=new WeakMap,Nr=new WeakMap,hc=new WeakMap,dc=new WeakMap,fc=new WeakMap,Li=new WeakSet,Od=l(function(e,t){return[e*Fd,t*Fd]},"#px"),Uy=l(function(e,t,n,r=0,s=0){e.beginPath(),d(this,ra).outline(t,n).forEach(([a,o],c)=>{let[u,h]=T(this,Li,Od).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),rg=l(function(e,t){return(d(this,gs)===null?[0]:[-d(this,gs),0,d(this,gs)]).flatMap(r=>[-d(this,Rn),0,d(this,Rn)].map(s=>T(this,Li,Od).call(this,e+s,t+r)))},"#everywhere"),l(sg,"Minimap3D");var ig=sg,Fy=ig;var WC=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),Oy=l(i=>{let e=WC(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var By=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),ky=l(i=>i.city??i.workedBy??null,"squareCity");var XC=.9,qC=l(i=>{let{columns:e,icons:t}=Oy(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),YC=l((i,e)=>XC*e/Math.hypot(i,2),"yieldIconSize"),zy=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),Gy=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=qC(e);return r.length===0?null:{at:i,size:YC(n,t),slots:r}},"laidYields"),Vy=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:p})=>{let f=r.get(u);f===void 0&&(f=n.names.push(u)-1,r.set(u,f)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=p,n.sizes[s]=o,n.cells[s]=f,s++})}),n},"yieldMesh");var $C=10,ZC=4e3,Wy=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),JC=350,KC=2e3,jC=8,Xy=l(i=>({...i,...i.hitPoints?{hitPoints:{...i.hitPoints}}:{},...i.defence?{defence:{...i.defence}}:{},...i.improvements?{improvements:[...i.improvements]}:{}}),"keptUnit"),QC=l(i=>i&&{...i,...i.growth?{growth:{...i.growth}}:{}},"keptCity"),eR=500,tR=.25,nR=400,Wt,yc,bc,Je,Et,la,Mc,Sc,ft,Ct,Pn,Co,wc,ca,ys,Ro,Ec,Ac,$n,Po,ci,en,Ni,ua,ha,In,Ur,ui,bs,Io,Lo,Yt,Zn,Ms,or,Fr,lr,Or,Tc,Ss,ws,hi,da,Do,di,Jn,fi,cr,ur,Cc,Rc,Pc,hr,Es,Br,Kn,No,Uo,kr,zr,fa,As,pa,Fo,Ui,Ic,Fi,Ts,Lc,ma,dr,ga,xa,Dc,Nc,Oo,Uc,Bo,Fc,ko,zo,_a,D,og,qy,Yy,Ao,lg,xs,$y,Zy,To,Bd,cg,ug,_s,hg,kd,dg,pc,fg,pg,Jy,Ky,zd,mc,mg,jy,Gd,Qy,eb,tb,Vd,nb,gg,ib,aa,Hd,rb,sb,ab,Wd,oa,gc,ob,lb,cb,xg,Xd,ub,_g,xc,vs,_c,hb,db,vg,Di,fb,pb,mb,gb,vc,yg,xb,_b,bg,Bt,vb,yb,Mg,Sg=class Sg{constructor(e,t=Sv){V(this,D);V(this,Wt);V(this,yc);V(this,bc,[]);V(this,Je);V(this,Et);V(this,la,null);V(this,Mc,0);V(this,Sc,"");V(this,ft);V(this,Ct,null);V(this,Pn,null);V(this,Co);V(this,wc);V(this,ca);V(this,ys,null);V(this,Ro,null);V(this,Ec);V(this,Ac,!1);V(this,$n);V(this,Po);V(this,ci,new Map);V(this,en);V(this,Ni,new Map);V(this,ua,new Map);V(this,ha,new Map);V(this,In,new Map);V(this,Ur,new Set);V(this,ui,new Map);V(this,bs,0);V(this,Io,new Map);V(this,Lo,new Map);V(this,Yt,new Dy);V(this,Zn,new Cy);V(this,Ms,new Py);V(this,or,new Map);V(this,Fr,new Map);V(this,lr,new Map);V(this,Or,new Map);V(this,Tc,!1);V(this,Ss,new Map);V(this,ws,null);V(this,hi,new Map);V(this,da,new Map);V(this,Do,new Set);V(this,di,new Set);V(this,Jn);V(this,fi,null);V(this,cr,null);V(this,ur,null);V(this,Cc,l(()=>{T(this,D,aa).call(this)&&z(this,ur,null),T(this,D,Hd).call(this)},"#pressed"));V(this,Rc,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||T(this,D,Hd).call(this)},"#keyed"));V(this,Pc);V(this,hr,null);V(this,Es,null);V(this,Br);V(this,Kn,l(()=>{let e=d(this,Es);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),z(this,Es,null),document.removeEventListener("keydown",d(this,Kn),!0),e.open&&d(this,$n).endTooltip(d(this,Wt)))},"#endHover"));V(this,No,null);V(this,Uo,!0);V(this,kr,new Map);V(this,zr,null);V(this,fa,new Map);V(this,As,new Map);V(this,pa,[]);V(this,Fo,0);V(this,Ui,null);V(this,Ic,null);V(this,Fi,!0);V(this,Ts);V(this,Lc,l(()=>{},"#stopUnitSize"));V(this,ma,!1);V(this,dr,!0);V(this,ga,!1);V(this,xa,new Map);V(this,Dc);V(this,Nc,l(()=>{},"#stopArtChanged"));V(this,Oo,!1);V(this,Uc);V(this,Bo);V(this,Fc,"");V(this,ko,l(()=>T(this,D,Mg).call(this),"#resizeHandler"));V(this,zo,null);V(this,_a,!1);z(this,Wt,e.mapCanvas),z(this,yc,e.coveredBy),z(this,Uc,e.art),z(this,Po,{cityName:e.cityName,unitStatus:e.unitStatus}),z(this,Ts,e.unitSize?.get()??1),z(this,Bo,e.art.id()),this.world=e.world,z(this,Je,new ny(e.world)),z(this,en,new Ty(d(this,Je).layout.period())),z(this,Jn,e.walks),z(this,Dc,zy(d(this,Je).layout,e.world.topology())),z(this,pa,e.world.tiles()),z(this,Fo,d(this,pa).length),z(this,wc,e.cameraDistance),z(this,Ec,e.lockVerticalEdges);let n=e.cameraDistance.get();z(this,ft,T(this,D,xc).call(this,{...lv(d(this,Je).layout.centre(0,0)),...n===null?{}:{distance:n}})),z(this,ca,d(this,ft).distance),this.portal=new kg(e,{centre:l(()=>T(this,D,ub).call(this),"centre"),centreOn:l((r,s)=>T(this,D,sb).call(this,r,s),"centreOn"),changed:l(()=>T(this,D,Bt).call(this),"changed"),visible:l((r,s,a)=>T(this,D,oa).call(this,r,s,a),"visible")}),z(this,Et,t(e.mapCanvas,{period:d(this,Je).layout.period(),ground:d(this,Je).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&z(this,No,new Fy(e.minimapCanvas,d(this,Je).layout,e.world,d(this,Je).extentV(),(r,s)=>{z(this,ur,null),T(this,D,_c).call(this,{...d(this,Ct)?.to??d(this,ft),focus:[r,s]})})),e.debug&&e.mapCanvas.parentElement&&(z(this,la,T(this,D,vb).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),d(this,Je).queueAll(...T(this,D,Xd).call(this)),T(this,D,vc).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),z(this,$n,e.squares),z(this,Br,e.playerId),z(this,Pc,e.transport),z(this,Co,new gy(e.mapCanvas,{orbit:l(()=>d(this,ft),"orbit"),lookHeight:l(()=>d(this,Pn)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>T(this,D,ob).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>T(this,D,lb).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>d(this,$n).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>d(this,$n).menuOpen(),"menuOpen"),hover:l(r=>T(this,D,cb).call(this,r),"hover")})),window.addEventListener("resize",d(this,ko)),document.addEventListener("keydown",d(this,Rc),!0),e.mapCanvas.addEventListener("pointerdown",d(this,Cc),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(z(this,zo,new ResizeObserver(d(this,ko))),d(this,zo).observe(e.mapCanvas.parentElement)),T(this,D,Mg).call(this),T(this,D,Bt).call(this),z(this,Lc,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==d(this,Ts)&&!d(this,_a)&&(z(this,Ts,r),T(this,D,vc).call(this),T(this,D,Bt).call(this))})??(()=>{})),z(this,Nc,e.artChanged?.(()=>{d(this,_a)||(z(this,dr,!0),T(this,D,Bt).call(this))})??(()=>{}))}land(){return d(this,Je)}orbit(){return d(this,ft)}moving(){return d(this,Ct)!==null||d(this,Co).moving()}setOrbit(e){d(this,Kn).call(this),z(this,Ct,null),z(this,ft,T(this,D,xc).call(this,e)),T(this,D,Bt).call(this)}activeUnit(){return{unit:d(this,Ui),pendingTile:d(this,Ic)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=d(this,Ct)?.to??d(this,ft);T(this,D,_c).call(this,{...t,yaw:t.yaw+e*e0},T(this,D,og).call(this)+e*e0)}heading(){return{turn:(d(this,Ct)?.to??d(this,ft)).yaw,directions:zg(d(this,Je).layout,this.world.topology())}}faceNorth(){T(this,D,_c).call(this,{...d(this,Ct)?.to??d(this,ft),yaw:0},Wy(-d(this,ft).yaw))}debugViewModes(){return[]}dispose(){T(this,D,bg).call(this,!0),z(this,_a,!0),d(this,en).endAll(0),d(this,Yt).endAll(0),d(this,Zn).endAll(),d(this,lr).clear(),d(this,Or).clear(),d(this,Ss).clear(),z(this,ws,null),d(this,or).clear(),d(this,Fr).clear(),d(this,hi).clear(),d(this,da).clear(),d(this,di).clear(),d(this,In).clear(),d(this,Ur).clear(),d(this,ui).clear(),document.removeEventListener("keydown",d(this,Rc),!0),d(this,Wt).removeEventListener("pointerdown",d(this,Cc),!0),d(this,Lc).call(this),d(this,Nc).call(this),d(this,Kn).call(this),d(this,Co).dispose(),d(this,No)?.dispose(),window.removeEventListener("resize",d(this,ko)),d(this,zo)?.disconnect(),d(this,zr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(d(this,zr)),z(this,zr,null),d(this,la)?.remove(),d(this,Et).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=d(this,hr);e!==null&&(z(this,hr,null),d(this,Wt).classList.remove("picking-tile"),e.window?.close())}flush(){T(this,D,vg).call(this),T(this,D,Bt).call(this)}mapEvent(e){if(e.kind==="moved"){T(this,D,Yy).call(this,e.unit,e.from,e.to),T(this,D,Wd).call(this,e.unit.id,e.from,e.to);return}T(this,D,Wd).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),T(this,D,Wd).call(this,e.defender.id,e.defender.tile,e.attacker.tile),T(this,D,qy).call(this,e)}measureCovered(){let e=d(this,Wt).getBoundingClientRect();z(this,bc,d(this,yc).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};z(this,hr,r),d(this,Wt).classList.add("picking-tile"),r.window=d(this,$n).prompt(n,()=>{d(this,hr)===r&&(z(this,hr,null),d(this,Wt).classList.remove("picking-tile"))})}picking(){return d(this,hr)!==null}queueTile(e){let t=`${e.x},${e.y}`;d(this,fa).set(t,e),d(this,Io).set(t,++mi(this,bs)._)}redrawArt(){let e=d(this,Uc).id();return e===d(this,Bo)?"unchanged":(z(this,Bo,e),z(this,dr,!0),"redrawn")}releaseTiles(){let e=d(this,Tc)&&T(this,D,Gd).call(this);e&&d(this,fa).size>0&&d(this,ws)===null&&z(this,ws,new Set([...d(this,Fr).keys(),...d(this,Ni).keys()])),d(this,fa).forEach((t,n)=>{let r=d(this,Io).get(n)??0;e&&!d(this,Ss).has(n)&&d(this,Ss).set(n,d(this,or).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),d(this,As).set(n,t),d(this,Lo).set(n,r),d(this,hi).forEach(s=>{s.square===n&&r>s.after&&(s.patched=!0)})}),d(this,fa).clear(),d(this,Io).clear(),d(this,As).size>0&&T(this,D,Bt).call(this)}setActiveUnit(e,t){let n=d(this,Ui)?.tile;if(z(this,Ui,e),z(this,Ic,t??null),T(this,D,aa).call(this)&&T(this,D,rb).call(this)&&T(this,D,Hd).call(this),T(this,D,aa).call(this)){T(this,D,Bt).call(this);return}z(this,ur,null);let r=d(this,cr);z(this,fi,e?.id??null),z(this,cr,e?.tile??null),[n,r,e?.tile].forEach(s=>{s&&T(this,D,Di).call(this,s.x,s.y)}),T(this,D,Bt).call(this)}setWaiting(e){z(this,Oo,e),e&&d(this,Kn).call(this)}showActiveUnit(e){d(this,Fi)||(z(this,Fi,!0),T(this,D,vc).call(this),T(this,D,Bt).call(this))}shown(){return{units:d(this,Fi),yields:d(this,ma),waiting:d(this,Oo)}}tilesPending(){return d(this,As).size}toggleUnits(){z(this,Fi,!d(this,Fi)),T(this,D,vc).call(this),T(this,D,Bt).call(this)}toggleYields(){z(this,ma,!d(this,ma)),z(this,dr,!0),T(this,D,Bt).call(this)}zoomBy(e){d(this,Kn).call(this),z(this,ft,lo(d(this,ft),e)),d(this,Ct)!==null&&(d(this,Ct).from=lo(d(this,Ct).from,e),d(this,Ct).to=lo(d(this,Ct).to,e)),T(this,D,Bt).call(this)}};Wt=new WeakMap,yc=new WeakMap,bc=new WeakMap,Je=new WeakMap,Et=new WeakMap,la=new WeakMap,Mc=new WeakMap,Sc=new WeakMap,ft=new WeakMap,Ct=new WeakMap,Pn=new WeakMap,Co=new WeakMap,wc=new WeakMap,ca=new WeakMap,ys=new WeakMap,Ro=new WeakMap,Ec=new WeakMap,Ac=new WeakMap,$n=new WeakMap,Po=new WeakMap,ci=new WeakMap,en=new WeakMap,Ni=new WeakMap,ua=new WeakMap,ha=new WeakMap,In=new WeakMap,Ur=new WeakMap,ui=new WeakMap,bs=new WeakMap,Io=new WeakMap,Lo=new WeakMap,Yt=new WeakMap,Zn=new WeakMap,Ms=new WeakMap,or=new WeakMap,Fr=new WeakMap,lr=new WeakMap,Or=new WeakMap,Tc=new WeakMap,Ss=new WeakMap,ws=new WeakMap,hi=new WeakMap,da=new WeakMap,Do=new WeakMap,di=new WeakMap,Jn=new WeakMap,fi=new WeakMap,cr=new WeakMap,ur=new WeakMap,Cc=new WeakMap,Rc=new WeakMap,Pc=new WeakMap,hr=new WeakMap,Es=new WeakMap,Br=new WeakMap,Kn=new WeakMap,No=new WeakMap,Uo=new WeakMap,kr=new WeakMap,zr=new WeakMap,fa=new WeakMap,As=new WeakMap,pa=new WeakMap,Fo=new WeakMap,Ui=new WeakMap,Ic=new WeakMap,Fi=new WeakMap,Ts=new WeakMap,Lc=new WeakMap,ma=new WeakMap,dr=new WeakMap,ga=new WeakMap,xa=new WeakMap,Dc=new WeakMap,Nc=new WeakMap,Oo=new WeakMap,Uc=new WeakMap,Bo=new WeakMap,Fc=new WeakMap,ko=new WeakMap,zo=new WeakMap,_a=new WeakMap,D=new WeakSet,og=l(function(){let e=d(this,Ct);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),qy=l(function({attacker:e,defender:t,winner:n}){let r=d(this,Jn)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Pi()||r==="off"||e.player!==d(this,Br)&&t.player!==d(this,Br)&&!(d(this,Jn)?.rivals()??!0)||!T(this,D,oa).call(this,e.tile.x,e.tile.y,-.5)&&!T(this,D,oa).call(this,t.tile.x,t.tile.y,-.5))return;let a=this.world.get(e.tile.x,e.tile.y).units.find(({id:v})=>v===e.id),o=`${t.tile.x},${t.tile.y}`,c=this.world.get(t.tile.x,t.tile.y),u=[...d(this,hi).values()].filter(({square:v,patched:S})=>v===o&&!S).at(-1),h=u===void 0?c.units.filter(({id:v})=>!d(this,di).has(v)).map(Xy):u.units.filter(({id:v})=>!(u.won&&v===u.defender));if(d(this,di).has(e.id)||!h.some(({id:v})=>v===t.id))return;let p=d(this,Yt).busyUntil([e.id,t.id]);p!==null&&p-s>KC&&T(this,D,mc).call(this,d(this,Yt).endWhere(v=>v.attacker===e.id||v.attacker===t.id,s)),T(this,D,lg).call(this,e.id);let[f,m]=d(this,Je).layout.centre(e.tile.x,e.tile.y),[g,y]=d(this,Je).layout.centre(t.tile.x,t.tile.y),{u:x,v:_}=d(this,Je).layout.period(),b=l((v,S)=>S===null?v:v-S*Math.round(v/S),"short"),A=b(g-f,x),w=b(y-m,_),R=`${e.tile.x},${e.tile.y}`,C=d(this,Yt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:T(this,D,Ao).call(this,e.tile),edge:[f+A*tg,m+w*tg],fallsAt:T(this,D,Ao).call(this,t.tile),facing:d(this,ci).get(e.id)??Math.atan2(A,w),defenderFacing:d(this,ci).get(t.id)??Math.atan2(-A,-w)},s,r==="fast"?Iy(eg):eg,d(this,en).endsAt(e.id)??s);d(this,hi).set(C.id,{square:o,city:u?.city??QC(c.city),units:h,after:d(this,bs),won:n==="attacker",defender:t.id,patched:!1}),a!==void 0&&d(this,Ni).set(e.id,a),[e.id,t.id].forEach(v=>d(this,ui).set(v,{squares:[R,o],after:d(this,bs)})),T(this,D,Di).call(this,e.tile.x,e.tile.y),T(this,D,Di).call(this,t.tile.x,t.tile.y),T(this,D,Bt).call(this)},"#fight"),Yy=l(function(e,t,n){let r=d(this,Jn)?.speed()??"normal";if(e.id===d(this,fi)&&z(this,cr,n),typeof requestAnimationFrame!="function"||Pi()||r==="off")return;if(e.player!==d(this,Br)&&d(this,Yt).attacking(e.id)){d(this,ui).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,bs)});return}T(this,D,mc).call(this,d(this,Yt).endWhere(({attacker:u,defender:h})=>u===e.id||h===e.id,performance.now()));let s=d(this,en).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:u})=>u===e.id)??(T(this,D,xs).call(this,e.id)?d(this,Ni).get(e.id):void 0),o=e.player===d(this,Br);if(a===void 0||!o&&!s&&(!(d(this,Jn)?.rivals()??!0)||!T(this,D,oa).call(this,t.x,t.y,-.5)&&!T(this,D,oa).call(this,n.x,n.y,-.5)))return;let c=o?by:My;d(this,Ni).set(e.id,a),d(this,ui).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,bs)}),T(this,D,lg).call(this,e.id),d(this,en).step(e.id,t,n,T(this,D,Ao).call(this,t),T(this,D,Ao).call(this,n),performance.now(),r==="fast"?Sy(c):c,od(Nl(a._,a.__??[]))),T(this,D,Bt).call(this)},"#walk"),Ao=l(function({x:e,y:t},n=d(this,Fi)&&!!this.world.get(e,t).city){let[r,s]=d(this,Je).layout.centre(e,t),a=Math.max(0,d(this,Je).surfaceAt(r,s)),o=[r,s+(n?Km:0)];return{at:o,lift:a-Math.max(0,d(this,Je).surfaceAt(...o)),middle:[r,s]}},"#standing"),lg=l(function(e){d(this,Ur).delete(e)&&d(this,In).forEach((t,n)=>{let r=t.units.filter(s=>s!==e);if(r.length!==t.units.length){if(r.length===0){d(this,In).delete(n),T(this,D,_s).call(this,n);return}d(this,In).set(n,{...t,units:r})}})},"#stepsOn"),xs=l(function(e){return d(this,en).walking(e)||d(this,Ur).has(e)||d(this,Yt).attacking(e)||d(this,di).has(e)},"#leftOff"),$y=l(function(e){if(d(this,en).dropped().forEach(r=>T(this,D,_s).call(this,r)),d(this,In).forEach(r=>T(this,D,To).call(this,r)),d(this,en).size()===0)return;if(Pi()||(d(this,Jn)?.speed()??"normal")==="off"){T(this,D,pc).call(this,d(this,en).endAll(e));return}let{going:t,ended:n}=d(this,en).at(e);T(this,D,pc).call(this,n),t.forEach(r=>{T(this,D,To).call(this,r)!==null&&r.units.some(a=>{let o=d(this,Ni).get(a);return o!==void 0&&Nl(o._,o.__??[]).shape==="ship"})&&d(this,Ms).trail(r.id,r.at,e)})},"#placeWalkers"),Zy=l(function(e){if(d(this,Ms).size()===0)return;if(Pi()||(d(this,Jn)?.speed()??"normal")==="off"){d(this,Ms).endAll().forEach(r=>d(this,Et).wake(r,null));return}let{going:t,gone:n}=d(this,Ms).at(e);n.forEach(r=>d(this,Et).wake(r,null)),t.forEach(({id:r,points:s})=>{let[a]=s;if(a===void 0){d(this,Et).wake(r,null);return}let[o,c]=T(this,D,cg).call(this,a.at);d(this,Et).wake(r,[o,0,c],Ry(s))})},"#placeWakes"),To=l(function(e){let t=T(this,D,hg).call(this,e.units);return T(this,D,Bd).call(this,e,t),t},"#drawWalker"),Bd=l(function({id:e,at:t,lift:n,facing:r,aloft:s=0},a,o=1){let c=a===null?null:JSON.stringify(a);c!==(d(this,ha).get(e)??null)&&(d(this,Et).setWalker(e,a),c===null?d(this,ha).delete(e):d(this,ha).set(e,c)),a!==null&&(d(this,Et).placeWalker(e,T(this,D,ug).call(this,t,n),r,s),d(this,Et).fadeWalker(e,o))},"#drawFigure"),cg=l(function(e){let{u:t,v:n}=d(this,Je).layout.period(),r=l((s,a)=>a===null?s:(s%a+a)%a,"within");return[r(e[0],t),r(e[1],n)]},"#wrapped"),ug=l(function(e,t){let[n,r]=T(this,D,cg).call(this,e);return[n,Math.max(0,d(this,Je).surfaceAt(n,r))+t,r]},"#onLand"),_s=l(function(e){d(this,ha).delete(e)&&d(this,Et).setWalker(e,null)},"#takeAway"),hg=l(function(e){let t=e.flatMap(n=>{let r=d(this,Ni).get(n);return r===void 0?[]:[r]});return T(this,D,kd).call(this,t)},"#walkerMarker"),kd=l(function(e,t=d(this,fi)){return N0({city:null,units:e},t,d(this,Fi),d(this,Po),()=>0,d(this,Ts))},"#unitsMarker"),dg=l(function({units:e}){return e.some(t=>d(this,ui).has(t))},"#awaitsPatch"),pc=l(function(e){let t=new Set;e.forEach(n=>{let r={...n,units:n.units.filter(s=>!d(this,Yt).attacking(s))};if(r.units.length>0&&T(this,D,dg).call(this,r)){d(this,In).set(r.id,r),r.units.forEach(s=>d(this,Ur).add(s)),T(this,D,To).call(this,r);return}T(this,D,_s).call(this,n.id),n.units.forEach(s=>d(this,Ur).delete(s)),T(this,D,fg).call(this,n.units,t)}),T(this,D,pg).call(this,t)},"#walksEnded"),fg=l(function(e,t){e.forEach(n=>{T(this,D,xs).call(this,n)&&!d(this,di).has(n)||(d(this,ua).get(n)?.forEach(r=>t.add(r)),d(this,ua).delete(n),d(this,Ni).delete(n))})},"#release"),pg=l(function(e){let t=d(this,fi);t!==null&&t!==(d(this,Ui)?.id??null)&&!d(this,en).walking(t)&&!d(this,Yt).attacking(t)&&T(this,D,ib).call(this,e),e.forEach(n=>{let[r,s]=n.split(",").map(Number);T(this,D,Di).call(this,r,s)})},"#released"),Jy=l(function(e){let t=new Set;if(d(this,Yt).size()===0){T(this,D,zd).call(this,t);return}if(Pi()||(d(this,Jn)?.speed()??"normal")==="off"){T(this,D,mc).call(this,d(this,Yt).endAll(e)),T(this,D,zd).call(this,t);return}let{going:n,struck:r,ended:s}=d(this,Yt).at(e);r.forEach(a=>T(this,D,mg).call(this,a,!0)),n.forEach(a=>{if(!a.fallen&&d(this,en).walking(a.unit)){T(this,D,_s).call(this,a.id);return}T(this,D,nb).call(this,a)&&t.add(T(this,D,Ky).call(this,a))}),T(this,D,gg).call(this,s),T(this,D,zd).call(this,t)},"#placeBattles"),Ky=l(function({battle:e,at:t,lift:n,opacity:r}){let s=`${e}-puff`;return d(this,Do).add(s),d(this,Et).puff(s,T(this,D,ug).call(this,t,n),1-r),s},"#puff"),zd=l(function(e){d(this,Do).forEach(t=>{e.has(t)||(d(this,Do).delete(t),d(this,Et).puff(t,null))})},"#puffsOver"),mc=l(function({struck:e,ended:t}){e.forEach(n=>T(this,D,mg).call(this,n,!1)),T(this,D,gg).call(this,t)},"#battlesOver"),mg=l(function(e,t){let{square:n,units:r}=d(this,hi).get(e.id)??{square:"",units:[]},{x:s,y:a}=e.defenderSquare,o=[...d(this,hi).entries()].find(([p,f])=>p!==e.id&&f.square===n)?.[1],c=new Set((o?.units??this.world.get(s,a).units).map(({id:p})=>p)),u=e.won?e.defender:e.attacker,h=r.filter(({id:p})=>e.won&&p===e.defender||!c.has(p)&&!T(this,D,xs).call(this,p));d(this,hi).delete(e.id),d(this,ui).has(u)&&d(this,di).add(u),t&&e.won&&h.length>0&&d(this,da).set(e.id,h),T(this,D,Di).call(this,s,a)},"#blow"),jy=l(function(e,t,{shown:n,ringed:r,inCity:s}){if((d(this,or).get(e)?.units??[]).forEach(({id:a})=>{d(this,Fr).get(a)===e&&d(this,Fr).delete(a)}),t.length===0?d(this,or).delete(e):d(this,or).set(e,{units:t.map(Xy),shown:n,ringed:r,inCity:s}),t.forEach(({id:a})=>d(this,Fr).set(a,e)),d(this,lr).size>0){let a=[...d(this,lr).entries()].filter(([,o])=>o.units.some(c=>t.some(({id:u})=>u===c.id))).map(([o])=>o);a.forEach(o=>d(this,Zn).end(o)),T(this,D,Vd).call(this,a)}},"#drawnOn"),Gd=l(function(){return typeof requestAnimationFrame=="function"&&!Pi()&&(d(this,Jn)?.speed()??"normal")!=="off"},"#fadesShown"),Qy=l(function(e){return d(this,Fr).has(e)||T(this,D,xs).call(this,e)},"#drawnAnywhere"),eb=l(function(e,t){let n=[],r=[];if(e.forEach((c,u)=>{let h=c.units.filter(({id:f})=>!T(this,D,Qy).call(this,f)),p=d(this,or).get(u)?.shown??null;c.shown!==null&&h.some(({id:f})=>f===c.shown)&&n.push([u,c,h]),c.units.length===0&&p!==null&&!t.has(p)&&r.push([u,p])}),n.length+r.length===0||n.length+r.length>jC)return;let s=l(([c])=>{let[u,h]=c.split(",").map(Number);return T(this,D,oa).call(this,u,h,0)},"onScreen"),a=performance.now(),o=(d(this,Jn)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([c,u,h])=>{let[p,f]=c.split(",").map(Number);d(this,lr).set(d(this,Zn).add("out",a,o),{units:[...h.filter(({id:m})=>m===u.shown),...h.filter(({id:m})=>m!==u.shown)],shown:u.ringed?u.shown:null,at:T(this,D,Ao).call(this,{x:p,y:f},u.inCity),facing:u.shown===null?0:d(this,ci).get(u.shown)??0})}),r.filter(s).forEach(([c,u])=>{d(this,Or).set(d(this,Zn).add("in",a,o),{key:c,unit:u}),d(this,Et).fadeMarker(c,0)}),T(this,D,Bt).call(this)},"#fadeChanged"),tb=l(function(e){if(d(this,Zn).size()===0)return;if(!T(this,D,Gd).call(this)){T(this,D,Vd).call(this,d(this,Zn).endAll());return}let{going:t,ended:n}=d(this,Zn).at(e),r=[];t.forEach(({id:s,opacity:a})=>{let o=d(this,lr).get(s),c=d(this,Or).get(s);if(o!==void 0){let u=T(this,D,kd).call(this,o.units,o.shown);if(u===null){d(this,Zn).end(s),r.push(s);return}T(this,D,Bd).call(this,{id:s,at:[o.at.at[0],o.at.at[1]],lift:o.at.lift,facing:o.facing},u,a);return}if(c!==void 0){if((d(this,or).get(c.key)?.shown??null)!==c.unit){d(this,Zn).end(s),r.push(s);return}d(this,Et).fadeMarker(c.key,a)}}),T(this,D,Vd).call(this,[...n,...r])},"#placeFades"),Vd=l(function(e){e.forEach(t=>{let n=d(this,Or).get(t);d(this,lr).delete(t)&&T(this,D,_s).call(this,t),n!==void 0&&(d(this,Or).delete(t),[...d(this,Or).values()].some(({key:r})=>r===n.key)||d(this,Et).fadeMarker(n.key,1))})},"#fadesOver"),nb=l(function(e){let t=d(this,da).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?T(this,D,kd).call(this,t):T(this,D,hg).call(this,[e.unit]);return T(this,D,Bd).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),gg=l(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:r,attacker:s,won:a,from:o,attackerSquare:c,facing:u}=n;if(T(this,D,_s).call(this,`${r}-fallen`),d(this,da).delete(r),d(this,hi).delete(r),d(this,ui).has(s)&&!T(this,D,xs).call(this,s))if(!a)d(this,di).add(s);else{let h={id:r,units:[s],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:u,from:c,before:c,to:c};d(this,In).set(r,h),d(this,Ur).add(s),T(this,D,To).call(this,h);return}T(this,D,_s).call(this,r),T(this,D,fg).call(this,[s],t)}),T(this,D,pg).call(this,t)},"#battlesEnded"),ib=l(function(e){let t=d(this,Ui);[d(this,cr),t?.tile].forEach(r=>{r&&e.add(`${r.x},${r.y}`)}),z(this,fi,t?.id??null),z(this,cr,t?.tile??null),d(this,In).forEach(r=>T(this,D,To).call(this,r));let n=d(this,ur);n!==null&&(z(this,ur,null),T(this,D,_g).call(this,n.x,n.y))},"#caughtUp"),aa=l(function(){let e=d(this,fi);return e!==null&&e!==(d(this,Ui)?.id??null)&&(d(this,en).walking(e)||d(this,Yt).attacking(e))},"#holding"),Hd=l(function(){let e=d(this,fi);e===null||!T(this,D,aa).call(this)||(T(this,D,pc).call(this,d(this,en).endWhere(t=>t.includes(e),performance.now())),T(this,D,mc).call(this,d(this,Yt).endWhere(({attacker:t})=>t===e,performance.now())),T(this,D,Bt).call(this))},"#hurry"),rb=l(function(){let e=d(this,cr),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===d(this,fi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),sb=l(function(e,t){if(T(this,D,aa).call(this)){z(this,ur,{x:e,y:t});return}T(this,D,_g).call(this,e,t)},"#centreSoon"),ab=l(function(e){if(d(this,ui).forEach(({squares:n,after:r},s)=>{n.some(a=>(e.get(a)??0)>r)&&(d(this,ui).delete(s),d(this,di).delete(s))}),d(this,In).size===0)return;let t=[...d(this,In).values()].filter(n=>!T(this,D,dg).call(this,n));t.forEach(n=>d(this,In).delete(n.id)),T(this,D,pc).call(this,t)},"#patched"),Wd=l(function(e,t,n){let[r,s]=d(this,Je).layout.centre(t.x,t.y),[a,o]=d(this,Je).layout.centre(n.x,n.y),{u:c,v:u}=d(this,Je).layout.period(),h=l((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),p=h(a-r,c),f=h(o-s,u);p===0&&f===0||(d(this,ci).delete(e),d(this,ci).set(e,Math.round(Math.atan2(p,f)*1e3)/1e3),d(this,ci).size>ZC&&d(this,ci).delete(d(this,ci).keys().next().value),[t,n].forEach(({x:m,y:g})=>T(this,D,Di).call(this,m,g)),T(this,D,Bt).call(this))},"#face"),oa=l(function(e,t,n){let r=d(this,Wt).clientWidth,s=d(this,Wt).clientHeight;if(r<=0||s<=0)return!1;let a=d(this,ur),o=a===null?d(this,Ct)?.to??d(this,ft):{...d(this,Ct)?.to??d(this,ft),focus:d(this,Je).layout.centre(a.x,a.y)},[c,u]=d(this,Je).layout.centre(e,t),{u:h,v:p}=T(this,D,vs).call(this),[f,m]=o.focus,g=l((S,L,I)=>I===null?S:S+I*Math.round((L-S)/I),"nearest"),y=[g(c,f,h),Math.max(0,d(this,Je).heightAt(c,u)),g(u,m,p)],x=r/s,_=d(this,Pn)??0,b=t0(o,_,y,x),A=t0(o,_,[y[0]+Math.cos(o.yaw),y[1],y[2]+Math.sin(o.yaw)],x);if(b===null||A===null)return!1;let w=(b[0]+1)/2*r,R=(1-b[1])/2*s,C=Math.abs(A[0]-b[0])*(r/2),v=(n+.5)*C;return w>=v&&w<=r-v&&R>=v&&R<=s-v&&!d(this,bc).some(({left:S,top:L,right:I,bottom:F})=>w>=S-C/2&&w<=I+C/2&&R>=L-C/2&&R<=F+C/2)},"#visible"),gc=l(function(e,t){let n=d(this,Wt).clientWidth,r=d(this,Wt).clientHeight;if(n<=0||r<=0)return null;let s=Ny(d(this,ft),d(this,Pn)??0,[e/n*2-1,1-t/r*2],n/r,(p,f)=>d(this,Je).heightAt(p,f));if(s===null)return null;let[a,o]=d(this,Je).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(T(this,D,vs).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),ob=l(function(e,t){let n=T(this,D,gc).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=d(this,hr);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&d(this,$n).click(this.portal,n)},"#clicked"),lb=l(function(e,t,n,r,s){let a=d(this,Ui),o=T(this,D,gc).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),d(this,$n).menu(this.portal,n,r,a,o,d(this,Pc),s),!0)},"#menu"),cb=l(function(e){let t=e===null||d(this,Oo)||d(this,$n).menuOpen()?null:T(this,D,gc).call(this,e.x,e.y),n=d(this,Es);if(t===null||e===null){d(this,Kn).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}d(this,Kn).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,T(this,D,xg).call(this,s)},nR),z(this,Es,s),document.addEventListener("keydown",d(this,Kn),!0)},"#hovered"),xg=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===d(this,Wt),n=t?T(this,D,gc).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){d(this,Kn).call(this);return}let r=d(this,$n).tooltip(d(this,Wt),n,d(this,Br),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&d(this,$n).endTooltip(d(this,Wt)),e.open=r},"#showHover"),Xd=l(function(){return[...d(this,ft).focus]},"#focus"),ub=l(function(){let[e,t]=d(this,Je).layout.tileAt(...d(this,ft).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:T(this,D,vs).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),_g=l(function(e,t){let[n,r]=d(this,Je).layout.centre(e,t),[s,a]=(d(this,Ct)?.to??d(this,ft)).focus;if(n===s&&r===a)return;let o={...d(this,Ct)?.to??d(this,ft),focus:[n,r]},{u:c,v:u}=T(this,D,vs).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[p,f]=d(this,ft).focus,m=Math.hypot(h(n-p,c),h(r-f,u));if(!d(this,Ac)||m>d(this,ft).distance*1.5){z(this,Ac,!0),this.setOrbit(o);return}T(this,D,_c).call(this,o)},"#centreOn"),xc=l(function(e){return hv(Ks(e),T(this,D,vs).call(this),d(this,Je).extentV())},"#settle"),vs=l(function(){let e=d(this,Je).layout.period();return this.portal?.lockVerticalEdges()??d(this,Ec)?{u:e.u,v:null}:e},"#period"),_c=l(function(e,t=T(this,D,og).call(this)+Wy(e.yaw-(d(this,Ct)?.to??d(this,ft)).yaw)){d(this,Kn).call(this),typeof requestAnimationFrame!="function"||Pi()?(z(this,Ct,null),z(this,ft,T(this,D,xc).call(this,e))):z(this,Ct,{from:d(this,ft),to:e,started:null,turn:t,drawn:0}),T(this,D,Bt).call(this)},"#moveTo"),hb=l(function(e){let t=d(this,Ct);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/JC);return t.drawn=n*n*(3-2*n),z(this,ft,T(this,D,xc).call(this,dv(t.from,t.to,n,T(this,D,vs).call(this),t.turn))),n>=1&&z(this,Ct,null),n<1},"#moveCamera"),db=l(function(e){let[t,n]=d(this,ft).focus,r=Math.max(0,d(this,Je).heightAt(t,n));return!e||d(this,Pn)===null||Pi()?(z(this,Pn,r),!1):(z(this,Pn,d(this,Pn)+(r-d(this,Pn))*tR),Math.abs(r-d(this,Pn))<.002?(z(this,Pn,r),!1):!0)},"#followHeight"),vg=l(function(){let e=[...d(this,As).values()].map(({x:h,y:p})=>[h,p]),t=this.world.tiles(),n=t!==d(this,pa)||t.length!==d(this,Fo);z(this,pa,t),z(this,Fo,t.length),d(this,As).clear();let r=T(this,D,pb).call(this,d(this,Je).changed(e,...T(this,D,Xd).call(this),n)),s=new Set(e.map(([h,p])=>`${h},${p}`)),a=new Map([...s].map(h=>[h,d(this,Lo).get(h)??0]));d(this,Lo).clear();let o=d(this,Ss),c=d(this,ws);z(this,Ss,new Map),z(this,ws,null),d(this,lr).forEach(({units:[h]})=>{h!==void 0&&c?.add(h.id)}),e.forEach(([h,p])=>T(this,D,Di).call(this,h,p)),r.forEach(([h,p])=>{let f=`${h},${p}`;!n&&!s.has(f)&&d(this,kr).has(f)&&T(this,D,Di).call(this,h,p)}),T(this,D,fb).call(this,e,r);let u=d(this,Es);u!==null&&u.open&&e.some(([h,p])=>h===u.x&&p===u.y)&&T(this,D,xg).call(this,u),(e.length>0||n)&&z(this,Uo,!0),n&&(z(this,dr,!0),d(this,kr).forEach((h,p)=>{let[f,m]=p.split(",").map(Number);T(this,D,Di).call(this,f,m)})),c!==null&&T(this,D,Gd).call(this)&&!(n&&s.size*2>=t.length)&&T(this,D,eb).call(this,o,c),e.length>0&&T(this,D,ab).call(this,a)},"#takeTiles"),Di=l(function(e,t){let n=`${e},${t}`,r=this.world.get(e,t),s=d(this,Yt).awaitingBlow({x:e,y:t}),a=s===null?void 0:d(this,hi).get(s.id),o=a===void 0?r.units:[...a.units,...r.units.filter(({id:x})=>!a.units.some(_=>_.id===x))];r.units.filter(({id:x})=>T(this,D,xs).call(this,x)&&!d(this,di).has(x)).forEach(x=>{let _=d(this,ua).get(x.id)??new Set;_.add(n),d(this,ua).set(x.id,_),d(this,Ni).set(x.id,x)});let u=o.filter(({id:x})=>!T(this,D,xs).call(this,x)),h=N0(a===void 0&&u.length===r.units.length?r:{city:a===void 0?r.city:a.city,units:u},d(this,fi),d(this,Fi),d(this,Po),x=>d(this,ci).get(x.id)??0,d(this,Ts));T(this,D,jy).call(this,n,u,{shown:h?.unit?.id??null,ringed:h?.unit?.active===!0,inCity:(h?.unit??null)!==null&&h?.city!==null});let[p,f]=d(this,Je).layout.centre(e,t),m=[p,Math.max(0,d(this,Je).surfaceAt(p,f)),f],g=h===null?null:JSON.stringify([h,m]);g!==(d(this,kr).get(n)??null)&&(d(this,Et).setMarker(n,m,h),T(this,D,gb).call(this,n,g))},"#mark"),fb=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>d(this,xa).delete(`${n},${r}`)),t.forEach(([n,r])=>d(this,xa).delete(`${n},${r}`)),z(this,dr,!0))},"#yieldsChanged"),pb=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),mb=l(function(){if(!d(this,ma)){d(this,ga)&&(d(this,Et).setYields(null),z(this,ga,!1));return}if(!d(this,dr)&&d(this,ga))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=By(t,ky(t)),s=d(this,xa).get(n);if(s===void 0||s.of!==r){let[a,o]=d(this,Je).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:Gy({at:[a,Math.max(0,d(this,Je).surfaceAt(a,o)),o],yields:r},d(this,Dc))},d(this,xa).set(n,s)}s.laid!==null&&e.push(s.laid)}),d(this,Et).setYields(Vy(e)),z(this,dr,!1),z(this,ga,!0)},"#showYields"),gb=l(function(e,t){t===null?d(this,kr).delete(e):d(this,kr).set(e,t)},"#remember"),vc=l(function(){let e=new Set(d(this,kr).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);T(this,D,Di).call(this,n,r)})},"#markAll"),yg=l(function(e){let t=performance.now(),n=T(this,D,hb).call(this,t),[r,s]=T(this,D,Xd).call(this);T(this,D,vg).call(this),T(this,D,$y).call(this,t),T(this,D,Zy).call(this,t),T(this,D,Jy).call(this,t),T(this,D,tb).call(this,t),`${r},${s}`!==d(this,Sc)&&(z(this,Sc,`${r},${s}`),d(this,Je).refocus(r,s)),d(this,Je).build(d(this,Et),e);let a=T(this,D,db).call(this,e!==null);T(this,D,mb).call(this),d(this,Et).view(d(this,ft),d(this,Pn)??0,T(this,D,vs).call(this)),d(this,Et).render(),T(this,D,xb).call(this),T(this,D,bg).call(this),z(this,Mc,performance.now()-t),z(this,Tc,!0),T(this,D,yb).call(this),(d(this,Je).pending()>0||d(this,Je).overlaysPending()>0||d(this,en).size()>0||d(this,Yt).size()>0||d(this,Zn).size()>0||d(this,Ms).size()>0||n||a)&&T(this,D,Bt).call(this)},"#frameDrawn"),xb=l(function(){let e=d(this,No);if(e===null)return;d(this,Uo)&&(z(this,Uo,!1),e.redraw());let t=T(this,D,aa).call(this)?d(this,cr):d(this,Ui)?.tile??null;e.show(T(this,D,_b).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),_b=l(function(){let e=d(this,Wt).clientWidth,t=d(this,Wt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=d(this,Pn)??0,s=gd(d(this,ft).distance).far,[a,o]=d(this,ft).focus,c=l((h,p)=>{for(let f=p;f>=-1;f-=.05){let m=oo(d(this,ft),r,[h,f],n);if(m!==null){let g=Math.hypot(m[0]-a,m[1]-o),y=g>s?s/g:1;return[a+(m[0]-a)*y,o+(m[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),bg=l(function(e=!1){let t=(e?d(this,Ct)?.to??d(this,ft):d(this,ft)).distance,n=l(()=>{d(this,ys)!==null&&clearTimeout(d(this,ys)),z(this,ys,null),z(this,Ro,null)},"stop"),r=l(()=>{n(),z(this,ca,t),d(this,wc).set(t)},"keep");if(e){n(),t!==d(this,ca)&&r();return}if(d(this,Ct)!==null||t===d(this,ca)){n();return}d(this,ys)!==null&&t===d(this,Ro)||(n(),z(this,Ro,t),z(this,ys,setTimeout(r,eR)))},"#keepDistance"),Bt=l(function(){if(!d(this,_a)){if(typeof requestAnimationFrame!="function"){T(this,D,yg).call(this,null);return}d(this,zr)===null&&z(this,zr,requestAnimationFrame(()=>{z(this,zr,null),T(this,D,yg).call(this,$C)}))}},"#draw"),vb=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),yb=l(function(){if(d(this,la)===null)return;let{drawCalls:e,triangles:t,geometries:n}=d(this,Et).stats();d(this,la).textContent=[`frame ${d(this,Mc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${d(this,Je).pending()}`].join(`
`)},"#showStats"),Mg=l(function(){let e=d(this,Wt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===d(this,Fc)||(z(this,Fc,s),d(this,Et).resize(t,n,r),this.measureCovered(),d(this,Et).render())},"#resize"),l(Sg,"MapView3D");var ag=Sg,bb=ag;var iR={createMapView3D:l(i=>new bb(i),"createMapView3D")};globalThis[Fg]=iR;})();
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
