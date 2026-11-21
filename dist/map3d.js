"use strict";(()=>{var VM=Object.create;var If=Object.defineProperty;var HM=Object.getOwnPropertyDescriptor;var WM=Object.getOwnPropertyNames;var XM=Object.getPrototypeOf,qM=Object.prototype.hasOwnProperty;var Px=i=>{throw TypeError(i)};var l=(i,e)=>If(i,"name",{value:e,configurable:!0});var YM=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var $M=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of WM(e))!qM.call(i,r)&&r!==t&&If(i,r,{get:()=>e[r],enumerable:!(n=HM(e,r))||n.enumerable});return i};var ZM=(i,e,t)=>(t=i!=null?VM(XM(i)):{},$M(e||!i||!i.__esModule?If(t,"default",{value:i,enumerable:!0}):t,i));var Lf=(i,e,t)=>e.has(i)||Px("Cannot "+t);var d=(i,e,t)=>(Lf(i,e,"read from private field"),t?t.call(i):e.get(i)),V=(i,e,t)=>e.has(i)?Px("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),k=(i,e,t,n)=>(Lf(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),C=(i,e,t)=>(Lf(i,e,"access private method"),t);var yi=(i,e,t,n)=>({set _(r){k(i,e,r,t)},get _(){return d(i,e,n)}});var Lx=YM(Hs=>{"use strict";var zi,Jr=Hs&&Hs.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Hs,"__esModule",{value:!0}),Hs.EventEmitter=void 0;var Df=class Df{constructor(){zi.set(this,{})}on(e,t){e in Jr(this,zi,"f")||(Jr(this,zi,"f")[e]=[]),Jr(this,zi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Jr(this,zi,"f")))return;let n=Jr(this,zi,"f")[e].indexOf(t);n!==-1&&Jr(this,zi,"f")[e].splice(n,1)}emit(e,...t){e in Jr(this,zi,"f")&&Jr(this,zi,"f")[e].forEach((n=>n(...t)))}};l(Df,"i");var mu=Df;Hs.EventEmitter=mu,zi=new WeakMap,Hs.default=mu});var Ix="civMap3D";var Dx=ZM(Lx());var br,Gi,Ua,Uf=class Uf extends Dx.EventEmitter{constructor(t,n){super();V(this,br);V(this,Gi);V(this,Ua);k(this,Gi,t),k(this,Ua,t.lockVerticalEdges),k(this,br,n)}center(){return d(this,br).centre()}isVisible(t,n,r=0){return d(this,br).visible(t,n,r)}lockVerticalEdges(){return d(this,Ua)}nativeTileSize(){return d(this,Gi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=d(this,Gi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return d(this,Gi).playerId}render(){d(this,br).changed()}scale(){return d(this,Gi).art.scale()}setCenter(t,n){d(this,br).centreOn(t,n)}setLockVerticalEdges(t){k(this,Ua,t)}setZoom(){d(this,br).changed()}transport(){return d(this,Gi).transport}zoom(){return d(this,Gi).art.zoom()}};br=new WeakMap,Gi=new WeakMap,Ua=new WeakMap,l(Uf,"MapPortal3D");var Nf=Uf,Nx=Nf;var JM=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),Ux=JM;var lb=0,dp=1,cb=2;var Hl=1,Fh=2,fo=3,ds=0,An=1,ai=2,Zs=0,po=1,fp=2,pp=3,mp=4,ub=5;var Js=100,hb=101,db=102,fb=103,pb=104,mb=200,gb=201,xb=202,bb=203,gp=204,xp=205,_b=206,yb=207,vb=208,Mb=209,Sb=210,wb=211,Eb=212,Ab=213,Tb=214,Gu=0,Vu=1,Hu=2,no=3,Wu=4,Xu=5,qu=6,Yu=7,bp=0,Cb=1,Rb=2,Zi=0,_p=1,yp=2,vp=3,Wl=4,Mp=5,Sp=6,wp=7;var Ep=300,Ks=301,mo=302,Oh=303,Bh=304,Hi=1e3,ri=1001,$u=1002,Wt=1003,Pb=1004;var Xl=1005;var Xt=1006,kh=1007;var Gn=1008;var pn=1009,Ap=1010,Tp=1011,go=1012,zh=1013,Ei=1014,Ai=1015,Vn=1016,Gh=1017,Vh=1018,js=1020,Cp=35902,Rp=35899,Pp=1021,Ip=1022,Hn=1023,Tr=1026,Nr=1027,Lp=1028,Hh=1029,Ji=1030,Wh=1031;var Xh=1033,ql=33776,Yl=33777,$l=33778,Zl=33779,qh=35840,Yh=35841,$h=35842,Zh=35843,Jh=36196,Kh=37492,jh=37496,Qh=37488,ed=37489,Jl=37490,td=37491,nd=37808,id=37809,rd=37810,sd=37811,ad=37812,od=37813,ld=37814,cd=37815,ud=37816,hd=37817,dd=37818,fd=37819,pd=37820,md=37821,gd=36492,xd=36494,bd=36495,_d=36283,yd=36284,Kl=36285,vd=36286;var vl=2300,Zu=2301,ku=2302,sp=2303,ap=2400,op=2401,lp=2402;var Ib=3200;var Md=0,Lb=1,Ti="",Ht="srgb",Ml="srgb-linear",Sl="linear",bt="srgb";var zu=7680;var Db=519,Nb=512,Ub=513,Fb=514,Dp=515,Ob=516,Bb=517,Np=518,Up=519,Fp=35044;var Op="300 es",si=2e3,io=2001;function KM(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(KM,"arrayNeedsUint32");function jM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(jM,"isTypedArray");function wl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(wl,"createElementNS");function kb(){let i=wl("canvas");return i.style.display="block",i}l(kb,"createCanvasElement");var Fx={},ro=null;function El(...i){let e="THREE."+i.shift();ro?ro("log",e,...i):console.log(e,...i)}l(El,"log");function zb(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(zb,"enhanceLogMessage");function Ye(...i){i=zb(i);let e="THREE."+i.shift();if(ro)ro("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ye,"warn");function $e(...i){i=zb(i);let e="THREE."+i.shift();if(ro)ro("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l($e,"error");function _l(...i){let e=i.join(" ");e in Fx||(Fx[e]=!0,Ye(...i))}l(_l,"warnOnce");function Gb(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(Gb,"probeAsync");var Vb={[Gu]:Gu,[Hu]:qu,[Wu]:Wu,[no]:Xu,[Vu]:Vu,[qu]:Hu,[Yu]:Yu,[Xu]:no},Vp=class Vp{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(Vp,"EventDispatcher");var Wi=Vp,dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ff=Math.PI/180,Ju=180/Math.PI;function Qs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}l(Qs,"generateUUID");function ft(i,e,t){return Math.max(e,Math.min(t,i))}l(ft,"clamp");function QM(i,e){return(i%e+e)%e}l(QM,"euclideanModulo");function Of(i,e,t){return(1-t)*i+t*e}l(Of,"lerp");function Hb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(Hb,"floorPowerOfTwo");function Sd(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Sd,"getNormalizationScale");function Wb(i,e){if(e.constructor===Float32Array)return i;let t=Sd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(Wb,"denormalize");function Xb(i,e){if(e.constructor===Float32Array)return i;let t=Sd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(Xb,"normalize");var bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(bh,"Vector2"),bh.prototype.isVector2=!0;var He=bh,Hp=class Hp{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],p=n[r+3],f=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(p!==v||c!==f||u!==m||h!==x){let g=c*f+u*m+h*x+p*v;g<0&&(f=-f,m=-m,x=-x,v=-v,g=-g);let b=1-o;if(g<.9995){let y=Math.acos(g),w=Math.sin(y);b=Math.sin(b*y)/w,o=Math.sin(o*y)/w,c=c*b+f*o,u=u*b+m*o,h=h*b+x*o,p=p*b+v*o}else{c=c*b+f*o,u=u*b+m*o,h=h*b+x*o,p=p*b+v*o;let y=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=y,u*=y,h*=y,p*=y}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],p=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+h*p+c*m-u*f,e[t+1]=c*x+h*f+u*p-o*m,e[t+2]=u*x+h*m+o*f-c*p,e[t+3]=h*x-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),p=o(s/2),f=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"YZX":this._x=f*h*p+u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p-f*m*x;break;case"XZY":this._x=f*h*p-u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p+f*m*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Hp,"Quaternion");var Sn=Hp,_h=class _h{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ox.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ox.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*u+a*p-o*h,this.y=n+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(_h,"Vector3"),_h.prototype.isVector3=!0;var W=_h,Bf=new W,Ox=new Sn,yh=class yh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],x=n[8],v=r[0],g=r[3],b=r[6],y=r[1],w=r[4],M=r[7],R=r[2],A=r[5],_=r[8];return s[0]=a*v+o*y+c*R,s[3]=a*g+o*w+c*A,s[6]=a*b+o*M+c*_,s[1]=u*v+h*y+p*R,s[4]=u*g+h*w+p*A,s[7]=u*b+h*M+p*_,s[2]=f*v+m*y+x*R,s[5]=f*g+m*w+x*A,s[8]=f*b+m*M+x*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,x=t*p+n*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=p*v,e[1]=(r*u-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*c-u*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return _l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kf.makeScale(e,t)),this}rotate(e){return _l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kf.makeRotation(-e)),this}translate(e,t){return _l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(yh,"Matrix3"),yh.prototype.isMatrix3=!0;var Ze=yh,kf=new Ze,Bx=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kx=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eS(){let i={enabled:!0,workingColorSpace:Ml,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===Ti?Sl:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ml]:{primaries:e,whitePoint:n,transfer:Sl,toXYZ:Bx,fromXYZ:kx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Bx,fromXYZ:kx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}l(eS,"createColorManagement");var dt=eS();function Ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(Ar,"SRGBToLinear");function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(to,"LinearToSRGB");var Fa,Wp=class Wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fa===void 0&&(Fa=wl("canvas")),Fa.width=e.width,Fa.height=e.height;let r=Fa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Fa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ar(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ar(t[n]/255)*255):t[n]=Ar(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Wp,"ImageUtils");var Ku=Wp,tS=0,Xp=class Xp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zf(r[a].image)):s.push(zf(r[a]))}else s=zf(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(Xp,"TextureSource");var so=Xp;function zf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}l(zf,"serializeImage");var nS=0,Gf=new W,Qa=class Qa extends Wi{constructor(e=Qa.DEFAULT_IMAGE,t=Qa.DEFAULT_MAPPING,n=ri,r=ri,s=Xt,a=Gn,o=Hn,c=pn,u=Qa.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Qs(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gf).x}get height(){return this.source.getSize(Gf).y}get depth(){return this.source.getSize(Gf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case $u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case $u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Qa,"Texture");var wn=Qa;wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Ep;wn.DEFAULT_ANISOTROPY=1;var vh=class vh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],x=c[9],v=c[2],g=c[6],b=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(x+g)<.1&&Math.abs(u+m+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(u+1)/2,M=(m+1)/2,R=(b+1)/2,A=(h+f)/4,_=(p+v)/4,S=(x+g)/4;return w>M&&w>R?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=A/n,s=_/n):M>R?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=S/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=_/s,r=S/s),this.set(n,r,s,t),this}let y=Math.sqrt((g-x)*(g-x)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(p-v)/y,this.z=(f-h)/y,this.w=Math.acos((u+m+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(vh,"Vector4"),vh.prototype.isVector4=!0;var Nt=vh,qp=class qp extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new wn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new so(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(qp,"RenderTarget");var ju=qp,Yp=class Yp extends ju{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Yp,"WebGLRenderTarget");var Bn=Yp,$p=class $p extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l($p,"DataArrayTexture");var $s=$p;var Zp=class Zp extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Zp,"Data3DTexture");var Qu=Zp;var yl=class yl{constructor(e,t,n,r,s,a,o,c,u,h,p,f,m,x,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,p,f,m,x,v,g)}set(e,t,n,r,s,a,o,c,u,h,p,f,m,x,v,g){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=r,b[1]=s,b[5]=a,b[9]=o,b[13]=c,b[2]=u,b[6]=h,b[10]=p,b[14]=f,b[3]=m,b[7]=x,b[11]=v,b[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Oa.setFromMatrixColumn(e,0).length(),s=1/Oa.setFromMatrixColumn(e,1).length(),a=1/Oa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=a*h,m=a*p,x=o*h,v=o*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+x*u,t[5]=f-v*u,t[9]=-o*c,t[2]=v-f*u,t[6]=x+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*p,x=u*h,v=u*p;t[0]=f+v*o,t[4]=x*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*p,x=u*h,v=u*p;t[0]=f-v*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*p,x=o*h,v=o*p;t[0]=c*h,t[4]=x*u-m,t[8]=f*u+v,t[1]=c*p,t[5]=v*u+f,t[9]=m*u-x,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,x=o*c,v=o*u;t[0]=c*h,t[4]=v-f*p,t[8]=x*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*p+x,t[10]=f-v*p}else if(e.order==="XZY"){let f=a*c,m=a*u,x=o*c,v=o*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+v,t[5]=a*h,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*h,t[10]=v*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iS,e,rS)}lookAt(e,t,n){let r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Kr.crossVectors(n,Fn),Kr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Kr.crossVectors(n,Fn)),Kr.normalize(),gu.crossVectors(Fn,Kr),r[0]=Kr.x,r[4]=gu.x,r[8]=Fn.x,r[1]=Kr.y,r[5]=gu.y,r[9]=Fn.y,r[2]=Kr.z,r[6]=gu.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],x=n[2],v=n[6],g=n[10],b=n[14],y=n[3],w=n[7],M=n[11],R=n[15],A=r[0],_=r[4],S=r[8],I=r[12],P=r[1],N=r[5],U=r[9],X=r[13],F=r[2],Y=r[6],ne=r[10],B=r[14],J=r[3],H=r[7],$=r[11],j=r[15];return s[0]=a*A+o*P+c*F+u*J,s[4]=a*_+o*N+c*Y+u*H,s[8]=a*S+o*U+c*ne+u*$,s[12]=a*I+o*X+c*B+u*j,s[1]=h*A+p*P+f*F+m*J,s[5]=h*_+p*N+f*Y+m*H,s[9]=h*S+p*U+f*ne+m*$,s[13]=h*I+p*X+f*B+m*j,s[2]=x*A+v*P+g*F+b*J,s[6]=x*_+v*N+g*Y+b*H,s[10]=x*S+v*U+g*ne+b*$,s[14]=x*I+v*X+g*B+b*j,s[3]=y*A+w*P+M*F+R*J,s[7]=y*_+w*N+M*Y+R*H,s[11]=y*S+w*U+M*ne+R*$,s[15]=y*I+w*X+M*B+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],v=e[7],g=e[11],b=e[15],y=c*m-u*f,w=o*m-u*p,M=o*f-c*p,R=a*m-u*h,A=a*f-c*h,_=a*p-o*h;return t*(v*y-g*w+b*M)-n*(x*y-g*R+b*A)+r*(x*w-v*R+b*_)-s*(x*M-v*A+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],v=e[13],g=e[14],b=e[15],y=t*o-n*a,w=t*c-r*a,M=t*u-s*a,R=n*c-r*o,A=n*u-s*o,_=r*u-s*c,S=h*v-p*x,I=h*g-f*x,P=h*b-m*x,N=p*g-f*v,U=p*b-m*v,X=f*b-m*g,F=y*X-w*U+M*N+R*P-A*I+_*S;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/F;return e[0]=(o*X-c*U+u*N)*Y,e[1]=(r*U-n*X-s*N)*Y,e[2]=(v*_-g*A+b*R)*Y,e[3]=(f*A-p*_-m*R)*Y,e[4]=(c*P-a*X-u*I)*Y,e[5]=(t*X-r*P+s*I)*Y,e[6]=(g*M-x*_-b*w)*Y,e[7]=(h*_-f*M+m*w)*Y,e[8]=(a*U-o*P+u*S)*Y,e[9]=(n*P-t*U-s*S)*Y,e[10]=(x*A-v*M+b*y)*Y,e[11]=(p*M-h*A-m*y)*Y,e[12]=(o*I-a*N-c*S)*Y,e[13]=(t*N-n*I+r*S)*Y,e[14]=(v*w-x*R-g*y)*Y,e[15]=(h*R-p*w+f*y)*Y,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,x=s*p,v=a*h,g=a*p,b=o*p,y=c*u,w=c*h,M=c*p,R=n.x,A=n.y,_=n.z;return r[0]=(1-(v+b))*R,r[1]=(m+M)*R,r[2]=(x-w)*R,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+b))*A,r[6]=(g+y)*A,r[7]=0,r[8]=(x+w)*_,r[9]=(g-y)*_,r[10]=(1-(f+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Oa.set(r[0],r[1],r[2]).length(),o=Oa.set(r[4],r[5],r[6]).length(),c=Oa.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vi.copy(this);let u=1/a,h=1/o,p=1/c;return vi.elements[0]*=u,vi.elements[1]*=u,vi.elements[2]*=u,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=p,vi.elements[9]*=p,vi.elements[10]*=p,t.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=si,c=!1){let u=this.elements,h=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),x,v;if(c)x=s/(a-s),v=a*s/(a-s);else if(o===si)x=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===io)x=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=si,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),x,v;if(c)x=1/(a-s),v=a/(a-s);else if(o===si)x=-2/(a-s),v=-(a+s)/(a-s);else if(o===io)x=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(yl,"Matrix4"),yl.prototype.isMatrix4=!0;var yt=yl,Oa=new W,vi=new yt,iS=new W(0,0,0),rS=new W(1,1,1),Kr=new W,gu=new W,Fn=new W,zx=new yt,Gx=new Sn,Mh=class Mh{constructor(e=0,t=0,n=0,r=Mh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gx.setFromEuler(this),this.setFromQuaternion(Gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Mh,"Euler");var kn=Mh;kn.DEFAULT_ORDER="XYZ";var Jp=class Jp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Jp,"Layers");var Al=Jp,sS=0,Vx=new W,Ba=new Sn,_r=new yt,xu=new W,dl=new W,aS=new W,oS=new Sn,Hx=new W(1,0,0),Wx=new W(0,1,0),Xx=new W(0,0,1),qx={type:"added"},lS={type:"removed"},ka={type:"childadded",child:null},Vf={type:"childremoved",child:null},eo=class eo extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eo.DEFAULT_UP.clone();let e=new W,t=new kn,n=new Sn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=eo.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=eo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.multiply(Ba),this}rotateOnWorldAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.premultiply(Ba),this}rotateX(e){return this.rotateOnAxis(Hx,e)}rotateY(e){return this.rotateOnAxis(Wx,e)}rotateZ(e){return this.rotateOnAxis(Xx,e)}translateOnAxis(e,t){return Vx.copy(e).applyQuaternion(this.quaternion),this.position.add(Vx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hx,e)}translateY(e){return this.translateOnAxis(Wx,e)}translateZ(e){return this.translateOnAxis(Xx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xu.copy(e):xu.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(dl,xu,this.up):_r.lookAt(xu,dl,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),Ba.setFromRotationMatrix(_r),this.quaternion.premultiply(Ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qx),ka.child=e,this.dispatchEvent(ka),ka.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lS),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qx),ka.child=e,this.dispatchEvent(ka),ka.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,aS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(eo,"Object3D");var on=eo;on.DEFAULT_UP=new W(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kp=class Kp extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Kp,"Group");var an=Kp,cS={type:"move"},jp=class jp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),b=this._getHandJoint(u,v);g!==null&&(b.matrix.fromArray(g.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=g.radius),b.visible=g!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(jp,"WebXRController");var ao=jp,qb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},bu={h:0,s:0,l:0};function Hf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Hf,"hue2rgb");var Qp=class Qp{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=QM(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Hf(a,s,e+1/3),this.g=Hf(a,s,e),this.b=Hf(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=qb[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return dt.workingToColorSpace(fn.copy(this),e),Math.round(ft(fn.r*255,0,255))*65536+Math.round(ft(fn.g*255,0,255))*256+Math.round(ft(fn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(fn.copy(this),t);let n=fn.r,r=fn.g,s=fn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Ht){dt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,r=fn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(bu);let n=Of(jr.h,bu.h,t),r=Of(jr.s,bu.s,t),s=Of(jr.l,bu.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Qp,"Color");var Be=Qp,fn=new Be;Be.NAMES=qb;var Sh=class Sh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new Sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Sh,"Fog");var Tl=Sh,em=class em extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(em,"Scene");var Cl=em,Mi=new W,yr=new W,Wf=new W,vr=new W,za=new W,Ga=new W,Yx=new W,Xf=new W,qf=new W,Yf=new W,$f=new Nt,Zf=new Nt,Jf=new Nt,ns=class ns{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mi.subVectors(e,t),r.cross(Mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mi.subVectors(r,t),yr.subVectors(n,t),Wf.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(yr),c=Mi.dot(Wf),u=yr.dot(yr),h=yr.dot(Wf),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;let f=1/p,m=(u*c-o*h)*f,x=(a*h-o*c)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,vr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vr.x),c.addScaledVector(a,vr.y),c.addScaledVector(o,vr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return $f.setScalar(0),Zf.setScalar(0),Jf.setScalar(0),$f.fromBufferAttribute(e,t),Zf.fromBufferAttribute(e,n),Jf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($f,s.x),a.addScaledVector(Zf,s.y),a.addScaledVector(Jf,s.z),a}static isFrontFacing(e,t,n,r){return Mi.subVectors(n,t),yr.subVectors(e,t),Mi.cross(yr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Mi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ns.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ns.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ns.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ns.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ns.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;za.subVectors(r,n),Ga.subVectors(s,n),Xf.subVectors(e,n);let c=za.dot(Xf),u=Ga.dot(Xf);if(c<=0&&u<=0)return t.copy(n);qf.subVectors(e,r);let h=za.dot(qf),p=Ga.dot(qf);if(h>=0&&p<=h)return t.copy(r);let f=c*p-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(za,a);Yf.subVectors(e,s);let m=za.dot(Yf),x=Ga.dot(Yf);if(x>=0&&m<=x)return t.copy(s);let v=m*u-c*x;if(v<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(Ga,o);let g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return Yx.subVectors(s,r),o=(p-h)/(p-h+(m-x)),t.copy(r).addScaledVector(Yx,o);let b=1/(g+v+f);return a=v*b,o=f*b,t.copy(n).addScaledVector(za,a).addScaledVector(Ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(ns,"Triangle");var wr=ns,tm=class tm{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_u.copy(n.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),yu.subVectors(this.max,fl),Va.subVectors(e.a,fl),Ha.subVectors(e.b,fl),Wa.subVectors(e.c,fl),Qr.subVectors(Ha,Va),es.subVectors(Wa,Ha),Ws.subVectors(Va,Wa);let t=[0,-Qr.z,Qr.y,0,-es.z,es.y,0,-Ws.z,Ws.y,Qr.z,0,-Qr.x,es.z,0,-es.x,Ws.z,0,-Ws.x,-Qr.y,Qr.x,0,-es.y,es.x,0,-Ws.y,Ws.x,0];return!Kf(t,Va,Ha,Wa,yu)||(t=[1,0,0,0,1,0,0,0,1],!Kf(t,Va,Ha,Wa,yu))?!1:(vu.crossVectors(Qr,es),t=[vu.x,vu.y,vu.z],Kf(t,Va,Ha,Wa,yu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(tm,"Box3");var rs=tm,Mr=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,_u=new rs,Va=new W,Ha=new W,Wa=new W,Qr=new W,es=new W,Ws=new W,fl=new W,yu=new W,vu=new W,Xs=new W;function Kf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Xs.fromArray(i,s);let o=r.x*Math.abs(Xs.x)+r.y*Math.abs(Xs.y)+r.z*Math.abs(Xs.z),c=e.dot(Xs),u=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Kf,"satForAxes");var Er=uS();function uS(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(uS,"_generateTables");function hS(i){Math.abs(i)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),i=ft(i,-65504,65504),Er.floatView[0]=i;let e=Er.uint32View[0],t=e>>23&511;return Er.baseTable[t]+((e&8388607)>>Er.shiftTable[t])}l(hS,"toHalfFloat");function dS(i){let e=i>>10;return Er.uint32View[0]=Er.mantissaTable[Er.offsetTable[e]+(i&1023)]+Er.exponentTable[e],Er.floatView[0]}l(dS,"fromHalfFloat");var nm=class nm{static toHalfFloat(e){return hS(e)}static fromHalfFloat(e){return dS(e)}};l(nm,"DataUtils");var Xi=nm,Vt=new W,Mu=new He,fS=0,im=class im extends Wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fp,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=e!==void 0?Sd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mu.fromBufferAttribute(this,t),Mu.applyMatrix3(e),this.setXY(t,Mu.x,Mu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wb(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xb(e,this.array)}};l(im,"BufferAttribute");var Mt=im;var rm=class rm extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(rm,"Uint16BufferAttribute");var Rl=rm;var sm=class sm extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(sm,"Uint32BufferAttribute");var Pl=sm;var am=class am extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(am,"Float32BufferAttribute");var It=am,pS=new rs,pl=new W,jf=new W,om=class om{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pS.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);let t=pl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(jf)),this.expandByPoint(pl.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(om,"Sphere");var oo=om,mS=0,ii=new yt,Qf=new on,Xa=new W,On=new rs,ml=new rs,jt=new W,wh=class wh extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KM(e)?Pl:Rl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Qf.lookAt(e),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ml.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(On.min,ml.min),On.expandByPoint(jt),jt.addVectors(On.max,ml.max),On.expandByPoint(jt)):(On.expandByPoint(ml.min),On.expandByPoint(ml.max))}On.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)jt.fromBufferAttribute(o,u),c&&(Xa.fromBufferAttribute(e,u),jt.add(Xa)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new W,c[I]=new W;let h=new W,p=new W,f=new W,m=new He,x=new He,v=new He,g=new W,b=new W;function y(I,P,N){u[I]=u[P]=u[N]=1,h.fromBufferAttribute(n,I),p.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),m.fromBufferAttribute(s,I),x.fromBufferAttribute(s,P),v.fromBufferAttribute(s,N),p.sub(h),f.sub(h),x.sub(m),v.sub(m);let U=1/(x.x*v.y-v.x*x.y);isFinite(U)&&(g.copy(p).multiplyScalar(v.y).addScaledVector(f,-x.y).multiplyScalar(U),b.copy(f).multiplyScalar(x.x).addScaledVector(p,-v.x).multiplyScalar(U),o[I].add(g),o[P].add(g),o[N].add(g),c[I].add(b),c[P].add(b),c[N].add(b))}l(y,"handleTriangle");let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,P=w.length;I<P;++I){let N=w[I],U=N.start,X=N.count;for(let F=U,Y=U+X;F<Y;F+=3)y(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new W,R=new W,A=new W,_=new W;function S(I){A.fromBufferAttribute(r,I),_.copy(A);let P=o[I];M.copy(P),M.sub(A.multiplyScalar(A.dot(P))).normalize(),R.crossVectors(_,P);let U=R.dot(c[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,U)}l(S,"handleVertex");for(let I=0,P=n.count;I<P;++I)u[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,p=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){let x=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),o.add(h),c.add(h),u.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h),m=0,x=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let b=0;b<h;b++)f[x++]=u[m++]}return new Mt(f,h,p)}if(l(e,"convertBufferAttribute"),this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new wh,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){let f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(wh,"BufferGeometry");var Bt=wh,lm=class lm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fp,this.updateRanges=[],this.version=0,this.uuid=Qs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=$x(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=$x(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(lm,"InterleavedBuffer");var Il=lm;function $x(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Qs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l($x,"getArrayKey");var vn=new W,Eh=class Eh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?Sd(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){El("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){El("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wb(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xb(e,this.data.array)}};l(Eh,"InterleavedBufferAttribute");var lo=Eh,ep=new W,gS=new W,xS=new Ze,cm=class cm{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ep.subVectors(n,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ep),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xS.getNormalMatrix(e),r=this.coplanarPoint(ep).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(cm,"Plane");var In=cm,bS=0,um=class um extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=po,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gp,this.blendDst=xp,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Db,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zu,this.stencilZFail=zu,this.stencilZPass=zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new In().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(um,"Material");var Cr=um,hm=class hm extends Cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(hm,"SpriteMaterial");var ss=hm,qa,gl=new W,Ya=new W,$a=new W,Za=new He,xl=new He,Yb=new yt,Su=new W,bl=new W,wu=new W,Zx=new He,tp=new He,Jx=new He,dm=class dm extends on{constructor(e=new ss){if(super(),this.isSprite=!0,this.type="Sprite",qa===void 0){qa=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Il(t,5);qa.setIndex([0,1,2,0,2,3]),qa.setAttribute("position",new lo(n,3,0,!1)),qa.setAttribute("uv",new lo(n,2,3,!1))}this.geometry=qa,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ya.setFromMatrixScale(this.matrixWorld),Yb.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$a.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ya.multiplyScalar(-$a.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Eu(Su.set(-.5,-.5,0),$a,a,Ya,r,s),Eu(bl.set(.5,-.5,0),$a,a,Ya,r,s),Eu(wu.set(.5,.5,0),$a,a,Ya,r,s),Zx.set(0,0),tp.set(1,0),Jx.set(1,1);let o=e.ray.intersectTriangle(Su,bl,wu,!1,gl);if(o===null&&(Eu(bl.set(-.5,.5,0),$a,a,Ya,r,s),tp.set(0,1),o=e.ray.intersectTriangle(Su,wu,bl,!1,gl),o===null))return;let c=e.ray.origin.distanceTo(gl);c<e.near||c>e.far||t.push({distance:c,point:gl.clone(),uv:wr.getInterpolation(gl,Su,bl,wu,Zx,tp,Jx,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(dm,"Sprite");var Rr=dm;function Eu(i,e,t,n,r,s){Za.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(xl.x=s*Za.x-r*Za.y,xl.y=r*Za.x+s*Za.y):xl.copy(Za),i.copy(e),i.x+=xl.x,i.y+=xl.y,i.applyMatrix4(Yb)}l(Eu,"transformVertex");var Sr=new W,np=new W,Au=new W,Tu=new W,fm=class fm{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){np.copy(e).add(t).multiplyScalar(.5),Au.copy(t).sub(e).normalize(),Tu.copy(this.origin).sub(np);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Au),o=Tu.dot(this.direction),c=-Tu.dot(Au),u=Tu.lengthSq(),h=Math.abs(1-a*a),p,f,m,x;if(h>0)if(p=a*c-o,f=a*o-c,x=s*h,p>=0)if(f>=-x)if(f<=x){let v=1/h;p*=v,f*=v,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-x?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=x?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(np).addScaledVector(Au,f),m}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);let n=Sr.dot(this.direction),r=Sr.dot(Sr)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,x=t.x-a.x,v=t.y-a.y,g=t.z-a.z,b=n.x-a.x,y=n.y-a.y,w=n.z-a.z,M=Math.abs(c),R=Math.abs(u),A=Math.abs(h),_,S,I,P,N,U,X,F,Y,ne,B,J;if(M>=R&&M>=A?(I=c,U=p,Y=x,J=b,c>=0?(_=u,S=h,P=f,N=m,X=v,F=g,ne=y,B=w):(_=h,S=u,P=m,N=f,X=g,F=v,ne=w,B=y)):R>=A?(I=u,U=f,Y=v,J=y,u>=0?(_=h,S=c,P=m,N=p,X=g,F=x,ne=w,B=b):(_=c,S=h,P=p,N=m,X=x,F=g,ne=b,B=w)):(I=h,U=m,Y=g,J=w,h>=0?(_=c,S=u,P=p,N=f,X=x,F=v,ne=b,B=y):(_=u,S=c,P=f,N=p,X=v,F=x,ne=y,B=b)),I===0)return null;let H=_/I,$=S/I,j=1/I,he=P-H*U,ge=N-$*U,Q=X-H*Y,pe=F-$*Y,le=ne-H*J,de=B-$*J,ue=le*pe-de*Q,ee=he*de-ge*le,me=Q*ge-pe*he;if(r){if(ue<0||ee<0||me<0)return null}else if((ue<0||ee<0||me<0)&&(ue>0||ee>0||me>0))return null;let ie=ue+ee+me;if(ie===0)return null;let xe=j*(ue*U+ee*Y+me*J);return(ie>0?xe<0:xe>0)?null:this.at(xe/ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(fm,"Ray");var eh=fm,pm=class pm extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(pm,"MeshBasicMaterial");var co=pm,Kx=new yt,qs=new eh,Cu=new oo,jx=new W,Ru=new W,Pu=new W,Iu=new W,ip=new W,Lu=new W,Qx=new W,Du=new W,mm=class mm extends on{constructor(e=new Bt,t=new co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Lu.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],p=s[c];h!==0&&(ip.fromBufferAttribute(p,e),a?Lu.addScaledVector(ip,h):Lu.addScaledVector(ip.sub(t),h))}t.add(Lu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cu.copy(n.boundingSphere),Cu.applyMatrix4(s),qs.copy(e.ray).recast(e.near),!(Cu.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Cu,jx)===null||qs.origin.distanceToSquared(jx)>(e.far-e.near)**2))&&(Kx.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Kx),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){let g=f[x],b=a[g.materialIndex],y=Math.max(g.start,m.start),w=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=y,R=w;M<R;M+=3){let A=o.getX(M),_=o.getX(M+1),S=o.getX(M+2);r=Nu(this,b,e,n,u,h,p,A,_,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=x,b=v;g<b;g+=3){let y=o.getX(g),w=o.getX(g+1),M=o.getX(g+2);r=Nu(this,a,e,n,u,h,p,y,w,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){let g=f[x],b=a[g.materialIndex],y=Math.max(g.start,m.start),w=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let M=y,R=w;M<R;M+=3){let A=M,_=M+1,S=M+2;r=Nu(this,b,e,n,u,h,p,A,_,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=x,b=v;g<b;g+=3){let y=g,w=g+1,M=g+2;r=Nu(this,a,e,n,u,h,p,y,w,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};l(mm,"Mesh");var vt=mm;function _S(i,e,t,n,r,s,a,o){let c;if(e.side===An?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ds,o),c===null)return null;Du.copy(o),Du.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Du);return u<t.near||u>t.far?null:{distance:u,point:Du.clone(),object:i}}l(_S,"checkIntersection$1");function Nu(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Ru),i.getVertexPosition(c,Pu),i.getVertexPosition(u,Iu);let h=_S(i,e,t,n,Ru,Pu,Iu,Qx);if(h){let p=new W;wr.getBarycoord(Qx,Ru,Pu,Iu,p),r&&(h.uv=wr.getInterpolatedAttribute(r,o,c,u,p,new He)),s&&(h.uv1=wr.getInterpolatedAttribute(s,o,c,u,p,new He)),a&&(h.normal=wr.getInterpolatedAttribute(a,o,c,u,p,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new W,materialIndex:0};wr.getNormal(Ru,Pu,Iu,f.normal),h.face=f,h.barycoord=p}return h}l(Nu,"checkGeometryIntersection");var gm=class gm extends wn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Wt,h=Wt,p,f){super(null,a,o,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(gm,"DataTexture");var uo=gm;var xm=class xm extends Mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(xm,"InstancedBufferAttribute");var Pr=xm;var Ys=new oo,yS=new He(.5,.5),Uu=new W,bm=class bm{constructor(e=new In,t=new In,n=new In,r=new In,s=new In,a=new In){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],x=s[8],v=s[9],g=s[10],b=s[11],y=s[12],w=s[13],M=s[14],R=s[15];if(r[0].setComponents(u-a,m-h,b-x,R-y).normalize(),r[1].setComponents(u+a,m+h,b+x,R+y).normalize(),r[2].setComponents(u+o,m+p,b+v,R+w).normalize(),r[3].setComponents(u-o,m-p,b-v,R-w).normalize(),n)r[4].setComponents(c,f,g,M).normalize(),r[5].setComponents(u-c,m-f,b-g,R-M).normalize();else if(r[4].setComponents(u-c,m-f,b-g,R-M).normalize(),t===si)r[5].setComponents(u+c,m+f,b+g,R+M).normalize();else if(t===io)r[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=yS.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Uu.x=r.normal.x>0?e.max.x:e.min.x,Uu.y=r.normal.y>0?e.max.y:e.min.y,Uu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(bm,"Frustum");var as=bm,eb=new yt,Ah=class Ah{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];eb.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new as),n[r].setFromProjectionMatrix(eb,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new as),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Ah().copy(this)}};l(Ah,"FrustumArray");var th=Ah;var _m=class _m extends wn{constructor(e=[],t=Ks,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(_m,"CubeTexture");var Ll=_m,ym=class ym extends wn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(ym,"CanvasTexture");var os=ym;var vm=class vm extends wn{constructor(e,t,n=Ei,r,s,a,o=Wt,c=Wt,u,h=Tr,p=1){if(h!==Tr&&h!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(vm,"DepthTexture");var Ir=vm,Mm=class Mm extends Ir{constructor(e,t=Ei,n=Ks,r,s,a=Wt,o=Wt,c,u=Tr){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(Mm,"CubeDepthTexture");var Dl=Mm,Sm=class Sm extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(Sm,"ExternalTexture");var Nl=Sm,Th=class Th extends Bt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],p=[],f=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function x(v,g,b,y,w,M,R,A,_,S,I){let P=M/_,N=R/S,U=M/2,X=R/2,F=A/2,Y=_+1,ne=S+1,B=0,J=0,H=new W;for(let $=0;$<ne;$++){let j=$*N-X;for(let he=0;he<Y;he++){let ge=he*P-U;H[v]=ge*y,H[g]=j*w,H[b]=F,u.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[b]=A>0?1:-1,h.push(H.x,H.y,H.z),p.push(he/_),p.push(1-$/S),B+=1}}for(let $=0;$<S;$++)for(let j=0;j<_;j++){let he=f+j+Y*$,ge=f+j+Y*($+1),Q=f+(j+1)+Y*($+1),pe=f+(j+1)+Y*$;c.push(he,ge,pe),c.push(ge,Q,pe),J+=6}o.addGroup(m,J,I),m+=J,f+=B}l(x,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Th,"BoxGeometry");var qi=Th;var Ch=class Ch extends Bt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],f=[],m=[],x=0,v=[],g=n/2,b=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(m,2));function y(){let M=new W,R=new W,A=0,_=(t-e)/n;for(let S=0;S<=s;S++){let I=[],P=S/s,N=P*(t-e)+e;for(let U=0;U<=r;U++){let X=U/r,F=X*c+o,Y=Math.sin(F),ne=Math.cos(F);R.x=N*Y,R.y=-P*n+g,R.z=N*ne,p.push(R.x,R.y,R.z),M.set(Y,_,ne).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-P),I.push(x++)}v.push(I)}for(let S=0;S<r;S++)for(let I=0;I<s;I++){let P=v[I][S],N=v[I+1][S],U=v[I+1][S+1],X=v[I][S+1];(e>0||I!==0)&&(h.push(P,N,X),A+=3),(t>0||I!==s-1)&&(h.push(N,U,X),A+=3)}u.addGroup(b,A,0),b+=A}l(y,"generateTorso");function w(M){let R=x,A=new He,_=new W,S=0,I=M===!0?e:t,P=M===!0?1:-1;for(let U=1;U<=r;U++)p.push(0,g*P,0),f.push(0,P,0),m.push(.5,.5),x++;let N=x;for(let U=0;U<=r;U++){let F=U/r*c+o,Y=Math.cos(F),ne=Math.sin(F);_.x=I*ne,_.y=g*P,_.z=I*Y,p.push(_.x,_.y,_.z),f.push(0,P,0),A.x=Y*.5+.5,A.y=ne*.5*P+.5,m.push(A.x,A.y),x++}for(let U=0;U<r;U++){let X=R+U,F=N+U;M===!0?h.push(F,F+1,X):h.push(F+1,F,X),S+=3}u.addGroup(b,S,M===!0?1:2),b+=S}l(w,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Ch,"CylinderGeometry");var Yi=Ch,Rh=class Rh extends Yi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Rh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Rh,"ConeGeometry");var Lr=Rh,Ph=class Ph extends Bt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),h(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let w=new W,M=new W,R=new W;for(let A=0;A<t.length;A+=3)m(t[A+0],w),m(t[A+1],M),m(t[A+2],R),c(w,M,R,y)}l(o,"subdivide");function c(y,w,M,R){let A=R+1,_=[];for(let S=0;S<=A;S++){_[S]=[];let I=y.clone().lerp(M,S/A),P=w.clone().lerp(M,S/A),N=A-S;for(let U=0;U<=N;U++)U===0&&S===A?_[S][U]=I:_[S][U]=I.clone().lerp(P,U/N)}for(let S=0;S<A;S++)for(let I=0;I<2*(A-S)-1;I++){let P=Math.floor(I/2);I%2===0?(f(_[S][P+1]),f(_[S+1][P]),f(_[S][P])):(f(_[S][P+1]),f(_[S+1][P+1]),f(_[S+1][P]))}}l(c,"subdivideFace");function u(y){let w=new W;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(y),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}l(u,"applyRadius");function h(){let y=new W;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];let M=g(y)/2/Math.PI+.5,R=b(y)/Math.PI+.5;a.push(M,1-R)}x(),p()}l(h,"generateUVs");function p(){for(let y=0;y<a.length;y+=6){let w=a[y+0],M=a[y+2],R=a[y+4],A=Math.max(w,M,R),_=Math.min(w,M,R);A>.9&&_<.1&&(w<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}l(p,"correctSeam");function f(y){s.push(y.x,y.y,y.z)}l(f,"pushVertex");function m(y,w){let M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}l(m,"getVertexByIndex");function x(){let y=new W,w=new W,M=new W,R=new W,A=new He,_=new He,S=new He;for(let I=0,P=0;I<s.length;I+=9,P+=6){y.set(s[I+0],s[I+1],s[I+2]),w.set(s[I+3],s[I+4],s[I+5]),M.set(s[I+6],s[I+7],s[I+8]),A.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),S.set(a[P+4],a[P+5]),R.copy(y).add(w).add(M).divideScalar(3);let N=g(R);v(A,P+0,y,N),v(_,P+2,w,N),v(S,P+4,M,N)}}l(x,"correctUVs");function v(y,w,M,R){R<0&&y.x===1&&(a[w]=y.x-1),M.x===0&&M.z===0&&(a[w]=R/2/Math.PI+.5)}l(v,"correctUV");function g(y){return Math.atan2(y.z,-y.x)}l(g,"azimuth");function b(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}l(b,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.vertices,e.indices,e.radius,e.detail)}};l(Ph,"PolyhedronGeometry");var nh=Ph;var Ih=class Ih extends nh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ih(e.radius,e.detail)}};l(Ih,"IcosahedronGeometry");var Ul=Ih;var Lh=class Lh extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=t/c,m=[],x=[],v=[],g=[];for(let b=0;b<h;b++){let y=b*f-a;for(let w=0;w<u;w++){let M=w*p-s;x.push(M,-y,0),v.push(0,0,1),g.push(w/o),g.push(1-b/c)}}for(let b=0;b<c;b++)for(let y=0;y<o;y++){let w=y+u*b,M=y+u*(b+1),R=y+1+u*(b+1),A=y+1+u*b;m.push(w,M,A),m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Lh,"PlaneGeometry");var $i=Lh;var Dh=class Dh extends Bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],p=new W,f=new W,m=[],x=[],v=[],g=[];for(let b=0;b<=n;b++){let y=[],w=b/n,M=a+w*o,R=e*Math.cos(M),A=Math.sqrt(e*e-R*R),_=0;b===0&&a===0?_=.5/t:b===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let I=S/t,P=r+I*s;p.x=-A*Math.cos(P),p.y=R,p.z=A*Math.sin(P),x.push(p.x,p.y,p.z),f.copy(p).normalize(),v.push(f.x,f.y,f.z),g.push(I+_,1-w),y.push(u++)}h.push(y)}for(let b=0;b<n;b++)for(let y=0;y<t;y++){let w=h[b][y+1],M=h[b][y],R=h[b+1][y],A=h[b+1][y+1];(b!==0||a>0)&&m.push(w,M,A),(b!==n-1||c<Math.PI)&&m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Dh,"SphereGeometry");var ls=Dh;var Nh=class Nh extends Bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],p=[],f=new W,m=new W,x=new W;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let b=0;b<=r;b++){let y=b/r*s;m.x=(e+t*Math.cos(g))*Math.cos(y),m.y=(e+t*Math.cos(g))*Math.sin(y),m.z=t*Math.sin(g),u.push(m.x,m.y,m.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),x.subVectors(m,f).normalize(),h.push(x.x,x.y,x.z),p.push(b/r),p.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=r;g++){let b=(r+1)*v+g-1,y=(r+1)*(v-1)+g-1,w=(r+1)*(v-1)+g,M=(r+1)*v+g;c.push(b,y,M),c.push(y,w,M)}this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Nh,"TorusGeometry");var Dr=Nh;function ea(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(tb(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(tb(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(ea,"cloneUniforms");function mn(i){let e={};for(let t=0;t<i.length;t++){let n=ea(i[t]);for(let r in n)e[r]=n[r]}return e}l(mn,"mergeUniforms");function tb(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(tb,"isThreeObject");function vS(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(vS,"cloneUniformsGroups");function Bp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}l(Bp,"getUnlitUniformColorSpace");var ta={clone:ea,merge:mn},MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wm=class wm extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=vS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new He().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(wm,"ShaderMaterial");var En=wm,Em=class Em extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(Em,"RawShaderMaterial");var ih=Em,Am=class Am extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Am,"MeshStandardMaterial");var wi=Am;var Tm=class Tm extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Tm,"MeshDepthMaterial");var rh=Tm,Cm=class Cm extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(Cm,"MeshDistanceMaterial");var sh=Cm;function Ja(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Ja,"convertArray");function Fu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(Fu,"hasTangents");var Rm=class Rm{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Rm,"Interpolant");var cs=Rm,Pm=class Pm extends cs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ap,endingEnd:ap}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case op:s=e,o=2*t-n;break;case lp:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case op:a=e,c=2*n-t;break;case lp:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(r-t),v=x*x,g=v*x,b=-f*g+2*f*v-f*x,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*x+1,w=(-1-m)*g+(1.5+m)*v+.5*x,M=m*g-m*v;for(let R=0;R!==o;++R)s[R]=b*a[h+R]+y*a[u+R]+w*a[c+R]+M*a[p+R];return s}};l(Pm,"CubicInterpolant");var ah=Pm,Im=class Im extends cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),p=1-h;for(let f=0;f!==o;++f)s[f]=a[u+f]*p+a[c+f]*h;return s}};l(Im,"LinearInterpolant");var oh=Im,Lm=class Lm extends cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(Lm,"DiscreteInterpolant");var lh=Lm,Dm=class Dm extends cs{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let x=(n-t)/(r-t),v=1-x;for(let g=0;g!==o;++g)s[g]=a[u+g]*v+a[c+g]*x;return s}let f=o*2,m=e-1;for(let x=0;x!==o;++x){let v=a[u+x],g=a[c+x],b=m*f+x*2,y=p[b],w=p[b+1],M=e*f+x*2,R=h[M],A=h[M+1],_=ES(n,t,y,R,r);s[x]=$b(_,v,w,A,g)}return s}};l(Dm,"BezierInterpolant");var ch=Dm;function $b(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l($b,"cubicBezier");function wS(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(wS,"cubicBezierSlope");function ES(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=$b(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=wS(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(ES,"solveBezierParameter");var Nm=class Nm{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ja(t,this.TimeBufferType),this.values=Ja(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ja(e.times,Array),values:Ja(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Fu(e.settings)&&(n.settings={inTangents:Ja(e.settings.inTangents,Array),outTangents:Ja(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ch(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vl:t=this.InterpolantFactoryMethodDiscrete;break;case Zu:t=this.InterpolantFactoryMethodLinear;break;case ku:t=this.InterpolantFactoryMethodSmooth;break;case sp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vl;case this.InterpolantFactoryMethodLinear:return Zu;case this.InterpolantFactoryMethodSmooth:return ku;case this.InterpolantFactoryMethodBezier:return sp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Fu(this.settings)&&(nb(this.settings.inTangents,e),nb(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Fu(this.settings)&&(ib(this.settings.inTangents,e),ib(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&jM(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){$e("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ku,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let p=o*n,f=p-n,m=p+n;for(let x=0;x!==n;++x){let v=t[p+x];if(v!==t[f+x]||v!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Fu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(Nm,"KeyframeTrack");var zn=Nm;function nb(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(nb,"shiftTangentTimes");function ib(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(ib,"scaleTangentTimes");zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Zu;var Um=class Um extends zn{constructor(e,t,n){super(e,t,n)}};l(Um,"BooleanKeyframeTrack");var us=Um;us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=vl;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Fm=class Fm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(Fm,"ColorKeyframeTrack");var uh=Fm;uh.prototype.ValueTypeName="color";var Om=class Om extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(Om,"NumberKeyframeTrack");var hh=Om;hh.prototype.ValueTypeName="number";var Bm=class Bm extends cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)Sn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(Bm,"QuaternionLinearInterpolant");var dh=Bm,km=class km extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}};l(km,"QuaternionKeyframeTrack");var Fl=km;Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;var zm=class zm extends zn{constructor(e,t,n){super(e,t,n)}};l(zm,"StringKeyframeTrack");var hs=zm;hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=vl;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gm=class Gm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(Gm,"VectorKeyframeTrack");var fh=Gm;fh.prototype.ValueTypeName="vector";var Vm=class Vm{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],x=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Vm,"LoadingManager");var ph=Vm,Zb=new ph,Hm=class Hm{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Hm,"Loader");var mh=Hm;mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wm=class Wm extends on{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Wm,"Light");var Ol=Wm,Xm=class Xm extends Ol{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Xm,"HemisphereLight");var Bl=Xm,rp=new yt,rb=new W,sb=new W,qm=class qm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rb.setFromMatrixPosition(e.matrixWorld),t.position.copy(rb),sb.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sb),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){rp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rp,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===io||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(rp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(qm,"LightShadow");var gh=qm,Ou=new W,Bu=new Sn,Vi=new W,Ym=class Ym extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ou,Bu,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Bu,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ou,Bu,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Bu,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Ym,"Camera");var kl=Ym,ts=new W,ab=new He,ob=new He,$m=class $m extends kl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ju*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ju*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,ab,ob),t.subVectors(ob,ab)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ff*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l($m,"PerspectiveCamera");var Mn=$m;var Zm=class Zm extends kl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Zm,"OrthographicCamera");var zl=Zm,Jm=class Jm extends gh{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Jm,"DirectionalLightShadow");var cp=Jm,Km=class Km extends Ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new cp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Km,"DirectionalLight");var Gl=Km;var jm=class jm extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(jm,"InstancedBufferGeometry");var Vl=jm;var Ka=-90,ja=1,Qm=class Qm extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(Ka,ja,e,t);r.layers=this.layers,this.add(r);let s=new Mn(Ka,ja,e,t);s.layers=this.layers,this.add(s);let a=new Mn(Ka,ja,e,t);a.layers=this.layers,this.add(a);let o=new Mn(Ka,ja,e,t);o.layers=this.layers,this.add(o);let c=new Mn(Ka,ja,e,t);c.layers=this.layers,this.add(c);let u=new Mn(Ka,ja,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};l(Qm,"CubeCamera");var ho=Qm,e0=class e0 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(e0,"ArrayCamera");var xh=e0;var kp="\\[\\]\\.:\\/",AS=new RegExp("["+kp+"]","g"),zp="[^"+kp+"]",TS="[^"+kp.replace("\\.","")+"]",CS=/((?:WC+[\/:])*)/.source.replace("WC",zp),RS=/(WCOD+)?/.source.replace("WCOD",TS),PS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zp),IS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zp),LS=new RegExp("^"+CS+RS+PS+IS+"$"),DS=["material","materials","bones","map"],t0=class t0{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(t0,"Composite");var up=t0,is=class is{constructor(e,t,n){this.path=t,this.parsedPath=n||is.parseTrackName(t),this.node=is.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new is.Composite(e,t,n):new is(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AS,"")}static parseTrackName(e){let t=LS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);DS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=is.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(is,"PropertyBinding");var Pt=is;Pt.Composite=up;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V2=new Float32Array(1);var Uh=class Uh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(Uh,"Matrix2"),Uh.prototype.isMatrix2=!0;var hp=Uh;function Gp(i,e,t,n){let r=NS(n);switch(t){case Pp:return i*e;case Lp:return i*e/r.components*r.byteLength;case Hh:return i*e/r.components*r.byteLength;case Ji:return i*e*2/r.components*r.byteLength;case Wh:return i*e*2/r.components*r.byteLength;case Ip:return i*e*3/r.components*r.byteLength;case Hn:return i*e*4/r.components*r.byteLength;case Xh:return i*e*4/r.components*r.byteLength;case ql:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yh:case Zh:return Math.max(i,16)*Math.max(e,8)/4;case qh:case $h:return Math.max(i,8)*Math.max(e,8)/2;case Jh:case Kh:case Qh:case ed:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jh:case Jl:case td:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gd:case xd:case bd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _d:case yd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kl:case vd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Gp,"getByteLength");function NS(i){switch(i){case pn:case Ap:return{byteLength:1,components:1};case go:case Tp:case Vn:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case Ei:case zh:case Ai:return{byteLength:4,components:1};case Cp:case Rp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(NS,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function x_(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(x_,"WebGLAnimation");function zS(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<p.length;m++){let x=p[f],v=p[m];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,p[f]=v)}p.length=f+1;for(let m=0,x=p.length;m<x;m++){let v=p[m];i.bufferSubData(u,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l(zS,"WebGLAttributes");var GS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
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
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZS=`#ifdef USE_BATCHING
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
#endif`,JS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ew=`#ifdef USE_IRIDESCENCE
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
#endif`,tw=`#ifdef USE_BUMPMAP
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
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uw=`#define PI 3.141592653589793
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
} // validated`,hw=`vec3 transformedNormal = objectNormal;
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
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bw=`#ifdef USE_ENVMAP
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
#endif`,_w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tw=`#ifdef USE_GRADIENTMAP
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
}`,Cw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ow=`PhysicalMaterial material;
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
#endif`,Bw=`uniform sampler2D dfgLUT;
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
}`,kw=`
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
#endif`,zw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jw=`#if defined( USE_POINTS_UV )
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
#endif`,Kw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
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
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
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
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,P1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform float backgroundBlurriness;
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
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
}`,Y1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,Z1=`#define DISTANCE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,eE=`#include <common>
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
}`,tE=`uniform vec3 diffuse;
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define LAMBERT
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
}`,rE=`#define MATCAP
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
}`,sE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,oE=`#define NORMAL
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
}`,lE=`#define PHONG
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
}`,cE=`#define PHONG
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
}`,uE=`#define STANDARD
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
}`,hE=`#define STANDARD
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
}`,dE=`#define TOON
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
}`,fE=`#define TOON
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
}`,pE=`uniform float size;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,xE=`uniform vec3 color;
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
}`,bE=`uniform float rotation;
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
}`,_E=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:GS,alphahash_pars_fragment:VS,alphamap_fragment:HS,alphamap_pars_fragment:WS,alphatest_fragment:XS,alphatest_pars_fragment:qS,aomap_fragment:YS,aomap_pars_fragment:$S,batching_pars_vertex:ZS,batching_vertex:JS,begin_vertex:KS,beginnormal_vertex:jS,bsdfs:QS,iridescence_fragment:ew,bumpmap_pars_fragment:tw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:iw,clipping_planes_pars_vertex:rw,clipping_planes_vertex:sw,color_fragment:aw,color_pars_fragment:ow,color_pars_vertex:lw,color_vertex:cw,common:uw,defaultnormal_vertex:hw,displacementmap_pars_vertex:dw,displacementmap_vertex:fw,emissivemap_fragment:pw,emissivemap_pars_fragment:mw,colorspace_fragment:gw,colorspace_pars_fragment:xw,envmap_fragment:bw,envmap_common_pars_fragment:_w,envmap_pars_fragment:yw,envmap_pars_vertex:vw,envmap_physical_pars_fragment:Lw,envmap_vertex:Mw,fog_vertex:Sw,fog_pars_vertex:ww,fog_fragment:Ew,fog_pars_fragment:Aw,gradientmap_pars_fragment:Tw,lightmap_pars_fragment:Cw,lights_lambert_fragment:Rw,lights_lambert_pars_fragment:Pw,lights_pars_begin:Iw,lights_toon_fragment:Dw,lights_toon_pars_fragment:Nw,lights_phong_fragment:Uw,lights_phong_pars_fragment:Fw,lights_physical_fragment:Ow,lights_physical_pars_fragment:Bw,lights_fragment_begin:kw,lights_fragment_maps:zw,lights_fragment_end:Gw,lightprobes_pars_fragment:Vw,logdepthbuf_fragment:Hw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:qw,map_fragment:Yw,map_pars_fragment:$w,map_particle_fragment:Zw,map_particle_pars_fragment:Jw,metalnessmap_fragment:Kw,metalnessmap_pars_fragment:jw,morphinstance_vertex:Qw,morphcolor_vertex:e1,morphnormal_vertex:t1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:r1,normal_fragment_maps:s1,normal_pars_fragment:a1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:h1,clearcoat_pars_fragment:d1,iridescence_pars_fragment:f1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:x1,dithering_fragment:b1,dithering_pars_fragment:_1,roughnessmap_fragment:y1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:S1,shadowmap_vertex:w1,shadowmask_pars_fragment:E1,skinbase_vertex:A1,skinning_pars_vertex:T1,skinning_vertex:C1,skinnormal_vertex:R1,specularmap_fragment:P1,specularmap_pars_fragment:I1,tonemapping_fragment:L1,tonemapping_pars_fragment:D1,transmission_fragment:N1,transmission_pars_fragment:U1,uv_pars_fragment:F1,uv_pars_vertex:O1,uv_vertex:B1,worldpos_vertex:k1,background_vert:z1,background_frag:G1,backgroundCube_vert:V1,backgroundCube_frag:H1,cube_vert:W1,cube_frag:X1,depth_vert:q1,depth_frag:Y1,distance_vert:$1,distance_frag:Z1,equirect_vert:J1,equirect_frag:K1,linedashed_vert:j1,linedashed_frag:Q1,meshbasic_vert:eE,meshbasic_frag:tE,meshlambert_vert:nE,meshlambert_frag:iE,meshmatcap_vert:rE,meshmatcap_frag:sE,meshnormal_vert:aE,meshnormal_frag:oE,meshphong_vert:lE,meshphong_frag:cE,meshphysical_vert:uE,meshphysical_frag:hE,meshtoon_vert:dE,meshtoon_frag:fE,points_vert:pE,points_frag:mE,shadow_vert:gE,shadow_frag:xE,sprite_vert:bE,sprite_frag:_E},Pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ji={basic:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:mn([Pe.lights,Pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ji.physical={uniforms:mn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var wd={r:0,b:0,g:0},yE=new yt,b_=new Ze;b_.set(-1,0,0,0,1,0,0,0,1);function vE(i,e,t,n,r,s){let a=new Be(0),o=r===!0?0:1,c,u,h=null,p=0,f=null;function m(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}l(m,"getBackground");function x(y){let w=!1,M=m(y);M===null?g(a,o):M&&M.isColor&&(g(M,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(x,"render");function v(y,w){let M=m(w);M&&M.isCubeTexture?(u===void 0&&(u=new vt(new qi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ea(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yE.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(b_),u.material.toneMapped=dt.getTransfer(M.colorSpace)!==bt,(h!==M||p!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new $i(2,2),new En({name:"BackgroundMaterial",uniforms:ea(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=dt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}l(v,"addToRenderList");function g(y,w){y.getRGB(wd,Bp(i)),t.buffers.color.setClear(wd.r,wd.g,wd.b,w,s)}l(g,"setClear");function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(b,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(y,w=1){a.set(y),o=w,g(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(y){o=y,g(a,o)},"setClearAlpha"),render:x,addToRenderList:v,dispose:b}}l(vE,"WebGLBackground");function ME(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(N,U,X,F,Y){let ne=!1,B=p(N,F,X,U);s!==B&&(s=B,u(s.object)),ne=m(N,F,X,Y),ne&&x(N,F,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,M(N,U,X,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(N){return i.bindVertexArray(N)}l(u,"bindVertexArrayObject");function h(N){return i.deleteVertexArray(N)}l(h,"deleteVertexArrayObject");function p(N,U,X,F){let Y=F.wireframe===!0,ne=n[U.id];ne===void 0&&(ne={},n[U.id]=ne);let B=N.isInstancedMesh===!0?N.id:0,J=ne[B];J===void 0&&(J={},ne[B]=J);let H=J[X.id];H===void 0&&(H={},J[X.id]=H);let $=H[Y];return $===void 0&&($=f(c()),H[Y]=$),$}l(p,"getBindingState");function f(N){let U=[],X=[],F=[];for(let Y=0;Y<t;Y++)U[Y]=0,X[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:F,object:N,attributes:{},index:null}}l(f,"createBindingState");function m(N,U,X,F){let Y=s.attributes,ne=U.attributes,B=0,J=X.getAttributes();for(let H in J)if(J[H].location>=0){let j=Y[H],he=ne[H];if(he===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;B++}return s.attributesNum!==B||s.index!==F}l(m,"needsUpdate");function x(N,U,X,F){let Y={},ne=U.attributes,B=0,J=X.getAttributes();for(let H in J)if(J[H].location>=0){let j=ne[H];j===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let he={};he.attribute=j,j&&j.data&&(he.data=j.data),Y[H]=he,B++}s.attributes=Y,s.attributesNum=B,s.index=F}l(x,"saveCache");function v(){let N=s.newAttributes;for(let U=0,X=N.length;U<X;U++)N[U]=0}l(v,"initAttributes");function g(N){b(N,0)}l(g,"enableAttribute");function b(N,U){let X=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;X[N]=1,F[N]===0&&(i.enableVertexAttribArray(N),F[N]=1),Y[N]!==U&&(i.vertexAttribDivisor(N,U),Y[N]=U)}l(b,"enableAttributeAndDivisor");function y(){let N=s.newAttributes,U=s.enabledAttributes;for(let X=0,F=U.length;X<F;X++)U[X]!==N[X]&&(i.disableVertexAttribArray(X),U[X]=0)}l(y,"disableUnusedAttributes");function w(N,U,X,F,Y,ne,B){B===!0?i.vertexAttribIPointer(N,U,X,Y,ne):i.vertexAttribPointer(N,U,X,F,Y,ne)}l(w,"vertexAttribPointer");function M(N,U,X,F){v();let Y=F.attributes,ne=X.getAttributes(),B=U.defaultAttributeValues;for(let J in ne){let H=ne[J];if(H.location>=0){let $=Y[J];if($===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){let j=$.normalized,he=$.itemSize,ge=e.get($);if(ge===void 0)continue;let Q=ge.buffer,pe=ge.type,le=ge.bytesPerElement,de=pe===i.INT||pe===i.UNSIGNED_INT||$.gpuType===zh;if($.isInterleavedBufferAttribute){let ue=$.data,ee=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,me=$.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)b(H.location+ie,ue.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<H.locationSize;ie++)g(H.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ie=0;ie<H.locationSize;ie++)w(H.location+ie,he/H.locationSize,pe,j,ee*le,(me+he/H.locationSize*ie)*le,de)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)b(H.location+ue,$.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<H.locationSize;ue++)g(H.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ue=0;ue<H.locationSize;ue++)w(H.location+ue,he/H.locationSize,pe,j,he*le,he/H.locationSize*ue*le,de)}}else if(B!==void 0){let j=B[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}y()}l(M,"setupVertexAttributes");function R(){I();for(let N in n){let U=n[N];for(let X in U){let F=U[X];for(let Y in F){let ne=F[Y];for(let B in ne)h(ne[B].object),delete ne[B];delete F[Y]}}delete n[N]}}l(R,"dispose");function A(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let X in U){let F=U[X];for(let Y in F){let ne=F[Y];for(let B in ne)h(ne[B].object),delete ne[B];delete F[Y]}}delete n[N.id]}l(A,"releaseStatesOfGeometry");function _(N){for(let U in n){let X=n[U];for(let F in X){let Y=X[F];if(Y[N.id]===void 0)continue;let ne=Y[N.id];for(let B in ne)h(ne[B].object),delete ne[B];delete Y[N.id]}}}l(_,"releaseStatesOfProgram");function S(N){for(let U in n){let X=n[U],F=N.isInstancedMesh===!0?N.id:0,Y=X[F];if(Y!==void 0){for(let ne in Y){let B=Y[ne];for(let J in B)h(B[J].object),delete B[J];delete Y[ne]}delete X[F],Object.keys(X).length===0&&delete n[U]}}}l(S,"releaseStatesOfObject");function I(){P(),a=!0,s!==r&&(s=r,u(s.object))}l(I,"reset");function P(){r.geometry=null,r.program=null,r.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:I,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}l(ME,"WebGLBindingStates");function SE(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(SE,"WebGLBufferRenderer");function wE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(_){return!(_!==Hn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(_){let S=_===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==pn&&_!==Ai&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ye("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:R,samples:A}}l(wE,"WebGLCapabilities");function EE(i){let e=this,t=null,n=0,r=!1,s=!1,a=new In,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let x=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,b=i.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{let y=s?0:n,w=y*4,M=b.clippingState||null;c.value=M,M=h(x,f,w,m);for(let R=0;R!==w;++R)M[R]=t[R];b.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(p,f,m,x){let v=p!==null?p.length:0,g=null;if(v!==0){if(g=c.value,x!==!0||g===null){let b=m+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<b)&&(g=new Float32Array(b));for(let w=0,M=m;w!==v;++w,M+=4)a.copy(p[w]).applyMatrix4(y,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}l(h,"projectPlanes")}l(EE,"WebGLClipping");var d0=class d0 extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ll(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Zs});s.uniforms.tEquirect.value=t;let a=new vt(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Xt),new ho(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(d0,"WebGLCubeRenderTarget");var ec=d0,Jb=256,AE=3,TE=20,__=256,y_=16,CE=3,RE=new W,PE=new Be,Cd=class Cd{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ho(1,10,null),this._boxMesh=new vt(new qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=RE}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(PE));let g=new ho(n,r,h);return g.position.copy(o),g.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=x,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jb,Hb(e))}_fromTexture(e,t){e.mapping===Ks||e.mapping===mo?this._setSize(e.image.length===0?Jb:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Kb(e,!1,!1),n=Math.log2(e)-AE;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kb(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ks||e.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qb()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jb()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=IE(),this._integrationMaterial=LE());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/y_);for(let a=0;a<=n;a++){let o=Cd.lodToRoughness(a,n);if(a>n-CE)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(__*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=DE());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(Cd,"PMREMGenerator");var Ad=Cd;function Kb(i,e,t){return new ec(i,{minFilter:Gn,generateMipmaps:e,type:Vn,colorSpace:Ml,depthBuffer:t})}l(Kb,"_createRenderTarget");function tc(i,e,t){return new En({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:An,blending:Zs,depthTest:!1,depthWrite:!1})}l(tc,"_getMaterial");function IE(){return tc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${__}u

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
	`)}l(IE,"_getGGXMaterial");function LE(){return tc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:y_}},`

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
	`)}l(LE,"_getIntegrationMaterial");function DE(){return tc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${TE}
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
	`)}l(DE,"_getBlurMaterial");function jb(){return tc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(jb,"_getEquirectMaterial");function Qb(){return tc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Qb,"_getCubemapMaterial");function NE(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}l(r,"get");function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Oh||m===Bh)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let v=new ec(x.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",u),o(v.texture,f.mapping)}else return null}}return f}l(s,"getCube");function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,x=m===Oh||m===Bh,v=m===Ks||m===mo;if(x||v){let g=t.get(f),b=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==b)return n===null&&(n=new Ad(i)),g=x?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return x&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new Ad(i)),g=x?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}l(a,"getPMREM");function o(f,m){return m===Oh?f.mapping=Ks:m===Bh&&(f.mapping=mo),f}l(o,"mapTextureMapping");function c(f){let m=0,x=6;for(let v=0;v<x;v++)f[v]!==void 0&&m++;return m===x}l(c,"isCubeTextureComplete");function u(f){let m=f.target;m.removeEventListener("dispose",u);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}l(u,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}l(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:r,dispose:p}}l(NE,"WebGLEnvironments");function UE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&_l("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(UE,"WebGLExtensions");function FE(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(x=>delete r[x]);function o(x){c(x.target)}l(o,"onGeometryDispose");function c(x){x.index!==null&&e.remove(x.index);for(let g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete r[x.id],a.unregister(x);let v=s.get(x);v&&(e.remove(v),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(x,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}l(u,"get");function h(x){let v=x.attributes;for(let g in v)e.update(v[g],i.ARRAY_BUFFER)}l(h,"update");function p(x){let v=x.index,g=x.attributes.position,b=0;if(g===void 0)return;let y=v!==null?v.array.length:g.array.length/3-1,w=g.count>=65535?Pl:Rl,M=new w(Math.ceil(y/3)*6,1),R=M.array;if(v!==null){let _=v.array;b=v.version;for(let S=0,I=0;S<y;S+=3){let P=_[S+0],N=_[S+1],U=_[S+2];R[I++]=P,R[I++]=N,R[I++]=N,R[I++]=U,R[I++]=U,R[I++]=P}}else{b=g.version;for(let _=0,S=0;_<y;_+=3){let I=_+0,P=_+1,N=_+2;R[S++]=I,R[S++]=P,R[S++]=P,R[S++]=N,R[S++]=N,R[S++]=I}}M.version=b;let A=s.get(x);A&&e.remove(A),s.set(x,M)}l(p,"updateWireframeAttribute");function f(x){let v=s.get(x);if(v){let g=x.index;g!==null&&v.version<g.version&&p(x)}else p(x);return s.get(x)}l(f,"getWireframeAttribute");function m(){for(let x in r){let v=r[x].deref();v!==void 0&&c(v)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:f,dispose:m}}l(FE,"WebGLGeometries");function OE(i,e,t){let n;function r(p){n=p}l(r,"setMode");let s,a;function o(p){s=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}l(c,"render");function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,p*a,m),t.update(f,n,m))}l(u,"renderInstances");function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,m);let v=0;for(let g=0;g<m;g++)v+=f[g];t.update(v,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(OE,"WebGLIndexedBufferRenderer");function BE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(BE,"WebGLInfo");function kE(i,e,t){let n=new WeakMap,r=new Nt;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==p){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;l(P,"disposeTexture"),f!==void 0&&f.texture.dispose();let x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;x===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let _=new Float32Array(R*A*4*p),S=new $s(_,R,A,p);S.type=Ai,S.needsUpdate=!0;let I=M*4;for(let N=0;N<p;N++){let U=b[N],X=y[N],F=w[N],Y=R*A*4*N;for(let ne=0;ne<U.count;ne++){let B=ne*I;x===!0&&(r.fromBufferAttribute(U,ne),_[Y+B+0]=r.x,_[Y+B+1]=r.y,_[Y+B+2]=r.z,_[Y+B+3]=0),v===!0&&(r.fromBufferAttribute(X,ne),_[Y+B+4]=r.x,_[Y+B+5]=r.y,_[Y+B+6]=r.z,_[Y+B+7]=0),g===!0&&(r.fromBufferAttribute(F,ne),_[Y+B+8]=r.x,_[Y+B+9]=r.y,_[Y+B+10]=r.z,_[Y+B+11]=F.itemSize===4?r.w:1)}}f={count:p,texture:S,size:new He(R,A)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];let v=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(s,"update"),{update:s}}l(kE,"WebGLMorphtargets");function zE(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(zE,"WebGLObjects");var GE={[_p]:"LINEAR_TONE_MAPPING",[yp]:"REINHARD_TONE_MAPPING",[vp]:"CINEON_TONE_MAPPING",[Wl]:"ACES_FILMIC_TONE_MAPPING",[Sp]:"AGX_TONE_MAPPING",[wp]:"NEUTRAL_TONE_MAPPING",[Mp]:"CUSTOM_TONE_MAPPING"};function VE(i,e,t,n,r,s){let a=new Bn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Bt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let p=new ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new vt(h,p),m=new zl(-1,1,1,-1,0,1),x=null,v=null,g=!1,b,y=null,w=[],M=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),c!==null&&c.setSize(R,A);for(let _=0;_<w.length;_++){let S=w[_];S.setSize&&S.setSize(R,A)}},this.setEffects=function(R){w=R,M=w.length>0&&w[0].isRenderPass===!0;let A=a.width,_=a.height;w.length>0&&o===null&&(o=new Bn(A,_,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new Bn(A,_,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));let S=r===!0&&w.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Ir(A,_),s===!0&&(u.format=Nr,u.type=js)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<w.length;I++){let P=w[I];P.setSize&&P.setSize(A,_),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(R,A){if(g||R.toneMapping===Zi&&w.length===0)return!1;if(y=A,A!==null){let _=A.width,S=A.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return M===!1&&R.setRenderTarget(a),b=R.toneMapping,R.toneMapping=Zi,!0},this.hasRenderPass=function(){return M},this.end=function(R,A){R.toneMapping=b,g=!0;let _=a,S=o;for(let I=0;I<w.length;I++){let P=w[I];P.enabled!==!1&&(P.render(R,S,_,A),P.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(x!==R.outputColorSpace||v!==R.toneMapping){x=R.outputColorSpace,v=R.toneMapping,p.defines={},dt.getTransfer(x)===bt&&(p.defines.SRGB_TRANSFER="");let I=GE[v];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(y),R.render(f,m),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}l(VE,"WebGLOutput");var v_=new wn,M_=new Ir(1,1),S_=new Dl(1),w_=new $s,E_=new Qu,A_=new Ll,e_=[],t_=[],n_=new Float32Array(16),i_=new Float32Array(9),r_=new Float32Array(4);function bo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=e_[r];if(s===void 0&&(s=new Float32Array(r),e_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(bo,"flatten");function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(qt,"arraysEqual");function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Yt,"copyArray");function Rd(i,e){let t=t_[e];t===void 0&&(t=new Int32Array(e),t_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Rd,"allocTexUnits");function HE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(HE,"setValueV1f");function WE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}l(WE,"setValueV2f");function XE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}l(XE,"setValueV3f");function qE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}l(qE,"setValueV4f");function YE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;r_.set(n),i.uniformMatrix2fv(this.addr,!1,r_),Yt(t,n)}}l(YE,"setValueM2");function $E(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;i_.set(n),i.uniformMatrix3fv(this.addr,!1,i_),Yt(t,n)}}l($E,"setValueM3");function ZE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;n_.set(n),i.uniformMatrix4fv(this.addr,!1,n_),Yt(t,n)}}l(ZE,"setValueM4");function JE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(JE,"setValueV1i");function KE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}l(KE,"setValueV2i");function jE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}l(jE,"setValueV3i");function QE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}l(QE,"setValueV4i");function eA(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(eA,"setValueV1ui");function tA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}l(tA,"setValueV2ui");function nA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}l(nA,"setValueV3ui");function iA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}l(iA,"setValueV4ui");function Pd(i){return i.version===0&&(i.compareFunction=Up,i.needsUpdate=!0),i}l(Pd,"initShadowTexture");function rA(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Pd(M_):s=v_,t.setTexture2D(e||s,r)}l(rA,"setValueT1");function sA(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||E_,r)}l(sA,"setValueT3D1");function aA(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Pd(S_):s=A_,t.setTextureCube(e||s,r)}l(aA,"setValueT6");function oA(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||w_,r)}l(oA,"setValueT2DArray1");function lA(i){switch(i){case 5126:return HE;case 35664:return WE;case 35665:return XE;case 35666:return qE;case 35674:return YE;case 35675:return $E;case 35676:return ZE;case 5124:case 35670:return JE;case 35667:case 35671:return KE;case 35668:case 35672:return jE;case 35669:case 35673:return QE;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return oA}}l(lA,"getSingularSetter");function cA(i,e){i.uniform1fv(this.addr,e)}l(cA,"setValueV1fArray");function uA(i,e){let t=bo(e,this.size,2);i.uniform2fv(this.addr,t)}l(uA,"setValueV2fArray");function hA(i,e){let t=bo(e,this.size,3);i.uniform3fv(this.addr,t)}l(hA,"setValueV3fArray");function dA(i,e){let t=bo(e,this.size,4);i.uniform4fv(this.addr,t)}l(dA,"setValueV4fArray");function fA(i,e){let t=bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(fA,"setValueM2Array");function pA(i,e){let t=bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(pA,"setValueM3Array");function mA(i,e){let t=bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(mA,"setValueM4Array");function gA(i,e){i.uniform1iv(this.addr,e)}l(gA,"setValueV1iArray");function xA(i,e){i.uniform2iv(this.addr,e)}l(xA,"setValueV2iArray");function bA(i,e){i.uniform3iv(this.addr,e)}l(bA,"setValueV3iArray");function _A(i,e){i.uniform4iv(this.addr,e)}l(_A,"setValueV4iArray");function yA(i,e){i.uniform1uiv(this.addr,e)}l(yA,"setValueV1uiArray");function vA(i,e){i.uniform2uiv(this.addr,e)}l(vA,"setValueV2uiArray");function MA(i,e){i.uniform3uiv(this.addr,e)}l(MA,"setValueV3uiArray");function SA(i,e){i.uniform4uiv(this.addr,e)}l(SA,"setValueV4uiArray");function wA(i,e,t){let n=this.cache,r=e.length,s=Rd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pd(M_):a=v_;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(wA,"setValueT1Array");function EA(i,e,t){let n=this.cache,r=e.length,s=Rd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||E_,s[a])}l(EA,"setValueT3DArray");function AA(i,e,t){let n=this.cache,r=e.length,s=Rd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Pd(S_):a=A_;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(AA,"setValueT6Array");function TA(i,e,t){let n=this.cache,r=e.length,s=Rd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||w_,s[a])}l(TA,"setValueT2DArrayArray");function CA(i){switch(i){case 5126:return cA;case 35664:return uA;case 35665:return hA;case 35666:return dA;case 35674:return fA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return xA;case 35668:case 35672:return bA;case 35669:case 35673:return _A;case 5125:return yA;case 36294:return vA;case 36295:return MA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return TA}}l(CA,"getPureArraySetter");var f0=class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lA(t.type)}};l(f0,"SingleUniform");var r0=f0,p0=class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CA(t.type)}};l(p0,"PureArrayUniform");var s0=p0,m0=class m0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(m0,"StructuredUniform");var a0=m0,n0=/(\w+)(\])?(\[|\.)?/g;function s_(i,e){i.seq.push(e),i.map[e.id]=e}l(s_,"addUniform");function RA(i,e,t){let n=i.name,r=n.length;for(n0.lastIndex=0;;){let s=n0.exec(n),a=n0.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){s_(t,u===void 0?new r0(o,i,e):new s0(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new a0(o),s_(t,p)),t=p}}}l(RA,"parseUniform");var g0=class g0{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);RA(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(g0,"WebGLUniforms");var xo=g0;function a_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(a_,"WebGLShader");var PA=37297,IA=0;function LA(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(LA,"handleSource");var o_=new Ze;function DA(i){dt._getMatrix(o_,dt.workingColorSpace,i);let e=`mat3( ${o_.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Sl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(DA,"getEncodingComponents");function l_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+LA(i.getShaderSource(e),o)}else return s}l(l_,"getShaderErrors");function NA(i,e){let t=DA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(NA,"getTexelEncodingFunction");var UA={[_p]:"Linear",[yp]:"Reinhard",[vp]:"Cineon",[Wl]:"ACESFilmic",[Sp]:"AgX",[wp]:"Neutral",[Mp]:"Custom"};function FA(i,e){let t=UA[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(FA,"getToneMappingFunction");var Ed=new W;function OA(){dt.getLuminanceCoefficients(Ed);let i=Ed.x.toFixed(4),e=Ed.y.toFixed(4),t=Ed.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(OA,"getLuminanceFunction");function BA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ql).join(`
`)}l(BA,"generateVertexExtensions");function kA(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(kA,"generateDefines");function zA(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(zA,"fetchAttributeLocations");function Ql(i){return i!==""}l(Ql,"filterEmptyLine");function c_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(c_,"replaceLightNums");function u_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(u_,"replaceClippingPlaneNums");var GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function o0(i){return i.replace(GA,VA)}l(o0,"resolveIncludes");function VA(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return o0(t)}l(VA,"includeReplacer");var HA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(i){return i.replace(HA,WA)}l(h_,"unrollLoops");function WA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(WA,"loopReplacer");function d_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(d_,"generatePrecision");var XA={[Hl]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function qA(i){return XA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(qA,"generateShadowMapTypeDefine");var YA={[mo]:"ENVMAP_MODE_REFRACTION"};function $A(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":YA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l($A,"generateEnvMapModeDefine");var ZA={[bp]:"ENVMAP_BLENDING_MULTIPLY",[Cb]:"ENVMAP_BLENDING_MIX",[Rb]:"ENVMAP_BLENDING_ADD"};function JA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ZA[i.combine]||"ENVMAP_BLENDING_NONE"}l(JA,"generateEnvMapBlendingDefine");function KA(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=qA(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$A(t),p=JA(t),f=BA(t),m=kA(s),x=r.createProgram(),v,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ql).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ql).join(`
`),g.length>0&&(g+=`
`)):(v=[d_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ql).join(`
`),g=[d_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?st.tonemapping_pars_fragment:"",t.toneMapping!==Zi?FA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,NA("linearToOutputTexel",t.outputColorSpace),OA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ql).join(`
`)),a=o0(a),a=c_(a,t),a=u_(a,t),o=o0(o),o=c_(o,t),o=u_(o,t),a=h_(a),o=h_(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=b+v+a,w=b+g+o,M=a_(r,r.VERTEX_SHADER,y),R=a_(r,r.FRAGMENT_SHADER,w);r.attachShader(x,M),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(x)||"",U=r.getShaderInfoLog(M)||"",X=r.getShaderInfoLog(R)||"",F=N.trim(),Y=U.trim(),ne=X.trim(),B=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,R);else{let H=l_(r,M,"vertex"),$=l_(r,R,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+H+`
`+$)}else F!==""?Ye("WebGLProgram: Program Info Log:",F):(Y===""||ne==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:F,vertexShader:{log:Y,prefix:v},fragmentShader:{log:ne,prefix:g}})}r.deleteShader(M),r.deleteShader(R),_=new xo(r,x),S=zA(r,x)}l(A,"onFirstUse");let _;this.getUniforms=function(){return _===void 0&&A(this),_};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(x,PA)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=R,this}l(KA,"WebGLProgram");var jA=0,x0=class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new c0(e),t.set(e,n)),n}};l(x0,"WebGLShaderCache");var l0=x0,b0=class b0{constructor(e){this.id=jA++,this.code=e,this.usedTimes=0}};l(b0,"WebGLShaderStage");var c0=b0;function QA(i){return i===Ji||i===Jl||i===Kl}l(QA,"isPackedRGFormat");function eT(i,e,t,n,r,s){let a=new Al,o=new l0,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}l(m,"getChannel");function x(_,S,I,P,N,U){let X=P.fog,F=N.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,ne=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||Y,ne),J=f[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Ye("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,j=$!==void 0?$.length:0,he=0;F.morphAttributes.position!==void 0&&(he=1),F.morphAttributes.normal!==void 0&&(he=2),F.morphAttributes.color!==void 0&&(he=3);let ge,Q,pe,le;if(J){let Le=ji[J];ge=Le.vertexShader,Q=Le.fragmentShader}else{ge=_.vertexShader,Q=_.fragmentShader;let Le=o.getVertexShaderStage(_),_t=o.getFragmentShaderStage(_);o.update(_,Le,_t),pe=Le.id,le=_t.id}let de=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),ee=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,ie=!!_.map,xe=!!_.matcap,Se=!!B,ye=Se&&B.isPMREMTexture===!0,qe=!!_.aoMap,Ke=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,et=!!_.normalMap,St=!!_.displacementMap,ct=!!_.emissiveMap,wt=!!_.metalnessMap,Dt=!!_.roughnessMap,ot=_.anisotropy>0,G=_.clearcoat>0,Je=_.diffuseRoughness>0,tt=_.dispersion>0,at=_.retroreflectivity>0,_e=_.iridescence>0,gt=_.sheen>0,ze=_.transmission>0,Xe=ot&&!!_.anisotropyMap,L=G&&!!_.clearcoatMap,E=G&&!!_.clearcoatNormalMap,q=G&&!!_.clearcoatRoughnessMap,fe=Je&&!!_.diffuseRoughnessMap,ae=_e&&!!_.iridescenceMap,Me=_e&&!!_.iridescenceThicknessMap,Ce=gt&&!!_.sheenColorMap,se=gt&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Ee=!!_.specularColorMap,O=!!_.specularIntensityMap,ce=ze&&!!_.transmissionMap,re=ze&&!!_.thicknessMap,Ae=!!_.gradientMap,ve=!!_.alphaMap,we=_.alphaTest>0,Ge=!!_.alphaHash,rt=!!_.extensions,be=Zi;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(be=i.toneMapping);let Ve=ye?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,nt={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:ge,fragmentShader:Q,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:ee,instancingColor:ee&&N.instanceColor!==null,instancingMorph:ee&&N.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ie,matcap:xe,envMap:Se,envMapMode:Se&&B.mapping,envMapPMREM:ye,envMapMaxLod:ye?Ve.length-1:null,envMapSize:ye?Ve[0].width:null,aoMap:qe,lightMap:Ke,bumpMap:lt,normalMap:et,displacementMap:St,emissiveMap:ct,normalMapObjectSpace:et&&_.normalMapType===Lb,normalMapTangentSpace:et&&_.normalMapType===Md,packedNormalMap:et&&_.normalMapType===Md&&QA(_.normalMap.format),metalnessMap:wt,roughnessMap:Dt,anisotropy:ot,anisotropyMap:Xe,clearcoat:G,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:Je,diffuseRoughnessMap:fe,dispersion:tt,retroreflection:at,iridescence:_e,iridescenceMap:ae,iridescenceThicknessMap:Me,sheen:gt,sheenColorMap:Ce,sheenRoughnessMap:se,specularMap:oe,specularColorMap:Ee,specularIntensityMap:O,transmission:ze,transmissionMap:ce,thicknessMap:re,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===po&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:we,alphaHash:Ge,combine:_.combine,mapUv:ie&&m(_.map.channel),aoMapUv:qe&&m(_.aoMap.channel),lightMapUv:Ke&&m(_.lightMap.channel),bumpMapUv:lt&&m(_.bumpMap.channel),normalMapUv:et&&m(_.normalMap.channel),displacementMapUv:St&&m(_.displacementMap.channel),emissiveMapUv:ct&&m(_.emissiveMap.channel),metalnessMapUv:wt&&m(_.metalnessMap.channel),roughnessMapUv:Dt&&m(_.roughnessMap.channel),anisotropyMapUv:Xe&&m(_.anisotropyMap.channel),clearcoatMapUv:L&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(_.sheenRoughnessMap.channel),specularMapUv:oe&&m(_.specularMap.channel),specularColorMapUv:Ee&&m(_.specularColorMap.channel),specularIntensityMapUv:O&&m(_.specularIntensityMap.channel),transmissionMapUv:ce&&m(_.transmissionMap.channel),thicknessMapUv:re&&m(_.thicknessMap.channel),alphaMapUv:ve&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(et||ot),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(ie||ve),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Le=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:ie&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===bt,decodeVideoTextureEmissive:ct&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ai,flipSided:_.side===An,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}l(x,"getParameters");function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(S,_),b(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}l(v,"getProgramCacheKey");function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}l(g,"getProgramCacheKeyParameters");function b(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}l(b,"getProgramCacheKeyBooleans");function y(_){let S=f[_.type],I;if(S){let P=ji[S];I=ta.clone(P.uniforms)}else I=_.uniforms;return I}l(y,"getUniforms");function w(_,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new KA(i,S,_,r),u.push(I),h.set(S,I)),I}l(w,"acquireProgram");function M(_){if(--_.usedTimes===0){let S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}l(M,"releaseProgram");function R(_){o.remove(_)}l(R,"releaseShaderCache");function A(){o.dispose()}return l(A,"dispose"),{getParameters:x,getProgramCacheKey:v,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:A}}l(eT,"WebGLPrograms");function tT(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(tT,"WebGLProperties");function nT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(nT,"painterSortStable");function f_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(f_,"reversePainterSortStable");function p_(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(f,m,x,v,g,b){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:b},i[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=x,y.materialVariant=a(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=g,y.group=b),e++,y}l(o,"getNextRenderItem");function c(f,m,x,v,g,b,y){y.reversedDepth===!0&&(g=-g);let w=o(f,m,x,v,g,b);x.transmission>0?n.push(w):x.transparent===!0?r.push(w):t.push(w)}l(c,"push");function u(f,m,x,v,g,b){let y=o(f,m,x,v,g,b);x.transmission>0?n.unshift(y):x.transparent===!0?r.unshift(y):t.unshift(y)}l(u,"unshift");function h(f,m){t.length>1&&t.sort(f||nT),n.length>1&&n.sort(m||f_),r.length>1&&r.sort(m||f_)}l(h,"sort");function p(){for(let f=e,m=i.length;f<m;f++){let x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}l(p_,"WebGLRenderList");function iT(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new p_,i.set(n,[a])):r>=s.length?(a=new p_,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(iT,"WebGLRenderLists");function rT(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(rT,"UniformsCache");function sT(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(sT,"ShadowUniformsCache");var aT=0;function oT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(oT,"shadowCastingAndTexturingLightsFirst");function lT(i){let e=new rT,t=sT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let r=new W,s=new yt,a=new yt;function o(u){let h=0,p=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,x=0,v=0,g=0,b=0,y=0,w=0,M=0,R=0,A=0,_=0,S=0,I=0,P=0;u.sort(oT);for(let U=0,X=u.length;U<X;U++){let F=u[U],Y=F.color,ne=F.intensity,B=F.distance,J=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ji?J=F.shadow.map.texture:J=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=Y.r*ne,p+=Y.g*ne,f+=Y.b*ne;else if(F.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(F.sh.coefficients[H],ne);P++}else if(F.isSunLight){let H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=J;let he=$.getViewportCount();for(let ge=0;ge<he;ge++)n.sunShadowMatrix[v+ge]=$.getMatrix(ge),n.sunShadowCascade[v+ge]=$._cascadeData[ge];v+=he,x++}n.sun[m]=H,m++}else if(F.isDirectionalLight){let H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=F.shadow.matrix,R++}n.directional[g]=H,g++}else if(F.isSpotLight){let H=e.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(Y).multiplyScalar(ne),H.distance=B,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,n.spot[y]=H;let $=F.shadow;if(F.map&&(n.spotLightMap[S]=F.map,S++,$.updateMatrices(F),F.castShadow&&I++),n.spotLightMatrix[y]=$.matrix,F.castShadow){let j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=J,_++}y++}else if(F.isRectAreaLight){let H=e.get(F);H.color.copy(Y).multiplyScalar(ne),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=H,w++}else if(F.isPointLight){let H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),H.distance=F.distance,H.decay=F.decay,F.castShadow){let $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[b]=j,n.pointShadowMap[b]=J,n.pointShadowMatrix[b]=F.shadow.matrix,A++}n.point[b]=H,b++}else if(F.isHemisphereLight){let H=e.get(F);H.skyColor.copy(F.color).multiplyScalar(ne),H.groundColor.copy(F.groundColor).multiplyScalar(ne),n.hemi[M]=H,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let N=n.hash;(N.sunLength!==m||N.directionalLength!==g||N.pointLength!==b||N.spotLength!==y||N.rectAreaLength!==w||N.hemiLength!==M||N.numSunShadows!==x||N.numDirectionalShadows!==R||N.numPointShadows!==A||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=g,n.spot.length=y,n.rectArea.length=w,n.point.length=b,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,N.sunLength=m,N.directionalLength=g,N.pointLength=b,N.spotLength=y,N.rectAreaLength=w,N.hemiLength=M,N.numSunShadows=x,N.numDirectionalShadows=R,N.numPointShadows=A,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=P,n.version=aT++)}l(o,"setup");function c(u,h){let p=0,f=0,m=0,x=0,v=0,g=0,b=h.matrixWorldInverse;for(let y=0,w=u.length;y<w;y++){let M=u[y];if(M.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(b),p++}else if(M.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(b),f++}else if(M.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(b),x++}else if(M.isRectAreaLight){let R=n.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),a.identity(),s.copy(M.matrixWorld),s.premultiply(b),a.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),m++}else if(M.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(b),g++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(lT,"WebGLLights");function m_(i){let e=new lT(i),t=[],n=[],r=[];function s(p){h.camera=p,t.length=0,n.length=0,r.length=0}l(s,"init");function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}l(c,"setupLights");function u(p){e.setupView(t,p)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(m_,"WebGLRenderState");function cT(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new m_(i),e.set(r,[o])):s>=a.length?(o=new m_(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(cT,"WebGLRenderStates");var uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
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
}`,dT=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],fT=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],g_=new yt,jl=new W,i0=new W;function pT(i,e,t){let n=new as,r=new He,s=new He,a=new Nt,o=new rh,c=new sh,u={},h=t.maxTextureSize,p={[ds]:An,[An]:ds,[ai]:ai},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:uT,fragmentShader:hT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new Bt;x.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let b=this.type;this.render=function(A,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Fh&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hl);let I=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Zs),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=b!==this.type;X&&_.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Y=>Y.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Y=A.length;F<Y;F++){let ne=A[F],B=ne.shadow;if(B===void 0){Ye("WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let J=B.getFrameExtents();r.multiply(J),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,B.mapSize.y=s.y));let H=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===fo){if(ne.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Bn(r.x,r.y,{format:Ji,type:Vn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),B.map.texture.name=ne.name+".shadowMap",B.map.depthTexture=new Ir(r.x,r.y,Ai),B.map.depthTexture.name=ne.name+".shadowMapDepth",B.map.depthTexture.format=Tr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt}else ne.isPointLight?(B.map=new ec(r.x),B.map.depthTexture=new Dl(r.x,Ei)):(B.map=new Bn(r.x,r.y),B.map.depthTexture=new Ir(r.x,r.y,Ei)),B.map.depthTexture.name=ne.name+".shadowMap",B.map.depthTexture.format=Tr,this.type===Hl?(B.map.depthTexture.compareFunction=H?Np:Dp,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);let $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();ne.isPointLight!==!0&&B.updateMatrices(ne,S);let j=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let he=0;he<$;he++){let ge=B.getCamera(he);if(ne.isPointLight){let Q=B.camera,pe=B.matrix,le=ne.distance||Q.far;le!==Q.far&&(Q.far=le,Q.updateProjectionMatrix()),jl.setFromMatrixPosition(ne.matrixWorld),Q.position.copy(jl),i0.copy(Q.position),i0.add(dT[he]),Q.up.copy(fT[he]),Q.lookAt(i0),Q.updateMatrixWorld(),pe.makeTranslation(-jl.x,-jl.y,-jl.z),g_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(g_,Q.coordinateSystem,Q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,he),i.clear();else{he===0&&(i.setRenderTarget(B.map),i.clear());let Q=B.getViewport(he);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),U.viewport(a)}n=B.getFrustum(he),M(_,S,ge,ne,j,this.type)}B.isPointLightShadow!==!0&&this.type===fo&&y(B,S),B.needsUpdate=!1}b=this.type,g.needsUpdate=!1,i.setRenderTarget(I,P,N)};function y(A,_){let S=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new Bn(r.x,r.y,{format:Ji,type:Vn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,S,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,S,m,v,null)}l(y,"VSMPass");function w(A,_,S,I){let P=null,N=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=P.uuid,X=_.uuid,F=u[U];F===void 0&&(F={},u[U]=F);let Y=F[X];Y===void 0&&(Y=P.clone(),F[X]=Y,_.addEventListener("dispose",R)),P=Y}if(P.visible=_.visible,P.wireframe=_.wireframe,I===fo?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:p[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=S}return P}l(w,"getDepthMaterial");function M(A,_,S,I,P,N){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===fo)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let F=e.update(A),Y=A.material;if(Array.isArray(Y)){let ne=F.groups;for(let B=0,J=ne.length;B<J;B++){let H=ne[B],$=Y[H.materialIndex];if($&&$.visible){let j=w(A,$,I,N);A.onBeforeShadow(i,A,_,S,F,j,H),i.renderBufferDirect(S,null,F,j,A,H),A.onAfterShadow(i,A,_,S,F,j,H)}}}else if(Y.visible){let ne=w(A,Y,I,N);A.onBeforeShadow(i,A,_,S,F,ne,null),i.renderBufferDirect(S,null,F,ne,A,null),A.onAfterShadow(i,A,_,S,F,ne,null)}}let X=A.children;for(let F=0,Y=X.length;F<Y;F++)M(X[F],_,S,I,P,N)}l(M,"renderObject");function R(A){A.target.removeEventListener("dispose",R);for(let S in u){let I=u[S],P=A.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}l(R,"onMaterialDispose")}l(pT,"WebGLShadowMap");function mT(i,e){function t(){let O=!1,ce=new Nt,re=null,Ae=new Nt(0,0,0,0);return{setMask:l(function(ve){re!==ve&&!O&&(i.colorMask(ve,ve,ve,ve),re=ve)},"setMask"),setLocked:l(function(ve){O=ve},"setLocked"),setClear:l(function(ve,we,Ge,rt,be){be===!0&&(ve*=rt,we*=rt,Ge*=rt),ce.set(ve,we,Ge,rt),Ae.equals(ce)===!1&&(i.clearColor(ve,we,Ge,rt),Ae.copy(ce))},"setClear"),reset:l(function(){O=!1,re=null,Ae.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let O=!1,ce=!1,re=null,Ae=null,ve=null;return{setReversed:l(function(we){if(ce!==we){let Ge=e.get("EXT_clip_control");we?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ce=we;let rt=ve;ve=null,this.setClear(rt)}},"setReversed"),getReversed:l(function(){return ce},"getReversed"),setTest:l(function(we){we?ue(i.DEPTH_TEST):ee(i.DEPTH_TEST)},"setTest"),setMask:l(function(we){re!==we&&!O&&(i.depthMask(we),re=we)},"setMask"),setFunc:l(function(we){if(ce&&(we=Vb[we]),Ae!==we){switch(we){case Gu:i.depthFunc(i.NEVER);break;case Vu:i.depthFunc(i.ALWAYS);break;case Hu:i.depthFunc(i.LESS);break;case no:i.depthFunc(i.LEQUAL);break;case Wu:i.depthFunc(i.EQUAL);break;case Xu:i.depthFunc(i.GEQUAL);break;case qu:i.depthFunc(i.GREATER);break;case Yu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=we}},"setFunc"),setLocked:l(function(we){O=we},"setLocked"),setClear:l(function(we){ve!==we&&(ve=we,ce&&(we=1-we),i.clearDepth(we))},"setClear"),reset:l(function(){O=!1,re=null,Ae=null,ve=null,ce=!1},"reset")}}l(n,"DepthBuffer");function r(){let O=!1,ce=null,re=null,Ae=null,ve=null,we=null,Ge=null,rt=null,be=null;return{setTest:l(function(Ve){O||(Ve?ue(i.STENCIL_TEST):ee(i.STENCIL_TEST))},"setTest"),setMask:l(function(Ve){ce!==Ve&&!O&&(i.stencilMask(Ve),ce=Ve)},"setMask"),setFunc:l(function(Ve,nt,Le){(re!==Ve||Ae!==nt||ve!==Le)&&(i.stencilFunc(Ve,nt,Le),re=Ve,Ae=nt,ve=Le)},"setFunc"),setOp:l(function(Ve,nt,Le){(we!==Ve||Ge!==nt||rt!==Le)&&(i.stencilOp(Ve,nt,Le),we=Ve,Ge=nt,rt=Le)},"setOp"),setLocked:l(function(Ve){O=Ve},"setLocked"),setClear:l(function(Ve){be!==Ve&&(i.clearStencil(Ve),be=Ve)},"setClear"),reset:l(function(){O=!1,ce=null,re=null,Ae=null,ve=null,we=null,Ge=null,rt=null,be=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},p={},f={},m=new WeakMap,x=[],v=null,g=!1,b=null,y=null,w=null,M=null,R=null,A=null,_=null,S=new Be(0,0,0),I=0,P=!1,N=null,U=null,X=null,F=null,Y=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=J>=2);let $=null,j={},he=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Q=new Nt().fromArray(he),pe=new Nt().fromArray(ge);function le(O,ce,re,Ae){let ve=new Uint8Array(4),we=i.createTexture();i.bindTexture(O,we),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<re;Ge++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ce+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return we}l(le,"createTexture");let de={};de[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(no),lt(!1),et(dp),ue(i.CULL_FACE),qe(Zs);function ue(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}l(ue,"enable");function ee(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}l(ee,"disable");function me(O,ce){return f[O]!==ce?(i.bindFramebuffer(O,ce),f[O]=ce,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}l(me,"bindFramebuffer");function ie(O,ce){let re=x,Ae=!1;if(O){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let ve=O.textures;if(re.length!==ve.length||re[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ge=ve.length;we<Ge;we++)re[we]=i.COLOR_ATTACHMENT0+we;re.length=ve.length,Ae=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(re)}l(ie,"drawBuffers");function xe(O){return v!==O?(i.useProgram(O),v=O,!0):!1}l(xe,"useProgram");let Se={[Js]:i.FUNC_ADD,[hb]:i.FUNC_SUBTRACT,[db]:i.FUNC_REVERSE_SUBTRACT};Se[fb]=i.MIN,Se[pb]=i.MAX;let ye={[mb]:i.ZERO,[gb]:i.ONE,[xb]:i.SRC_COLOR,[gp]:i.SRC_ALPHA,[Sb]:i.SRC_ALPHA_SATURATE,[vb]:i.DST_COLOR,[_b]:i.DST_ALPHA,[bb]:i.ONE_MINUS_SRC_COLOR,[xp]:i.ONE_MINUS_SRC_ALPHA,[Mb]:i.ONE_MINUS_DST_COLOR,[yb]:i.ONE_MINUS_DST_ALPHA,[wb]:i.CONSTANT_COLOR,[Eb]:i.ONE_MINUS_CONSTANT_COLOR,[Ab]:i.CONSTANT_ALPHA,[Tb]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(O,ce,re,Ae,ve,we,Ge,rt,be,Ve){if(O===Zs){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),O!==ub){if(O!==b||Ve!==P){if((y!==Js||R!==Js)&&(i.blendEquation(i.FUNC_ADD),y=Js,R=Js),Ve)switch(O){case po:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fp:i.blendFunc(i.ONE,i.ONE);break;case pp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mp:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",O);break}else switch(O){case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fp:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mp:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",O);break}w=null,M=null,A=null,_=null,S.set(0,0,0),I=0,b=O,P=Ve}return}ve=ve||ce,we=we||re,Ge=Ge||Ae,(ce!==y||ve!==R)&&(i.blendEquationSeparate(Se[ce],Se[ve]),y=ce,R=ve),(re!==w||Ae!==M||we!==A||Ge!==_)&&(i.blendFuncSeparate(ye[re],ye[Ae],ye[we],ye[Ge]),w=re,M=Ae,A=we,_=Ge),(rt.equals(S)===!1||be!==I)&&(i.blendColor(rt.r,rt.g,rt.b,be),S.copy(rt),I=be),b=O,P=!1}l(qe,"setBlending");function Ke(O,ce){O.side===ai?ee(i.CULL_FACE):ue(i.CULL_FACE);let re=O.side===An;ce&&(re=!re),lt(re),O.blending===po&&O.transparent===!1?qe(Zs):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);let Ae=O.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ct(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}l(Ke,"setMaterial");function lt(O){N!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),N=O)}l(lt,"setFlipSided");function et(O){O!==lb?(ue(i.CULL_FACE),O!==U&&(O===dp?i.cullFace(i.BACK):O===cb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),U=O}l(et,"setCullFace");function St(O){O!==X&&(B&&i.lineWidth(O),X=O)}l(St,"setLineWidth");function ct(O,ce,re){O?(ue(i.POLYGON_OFFSET_FILL),(F!==ce||Y!==re)&&(F=ce,Y=re,a.getReversed()&&(ce=-ce,re=-re),i.polygonOffset(ce,re))):ee(i.POLYGON_OFFSET_FILL)}l(ct,"setPolygonOffset");function wt(O){O?ue(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}l(wt,"setScissorTest");function Dt(O){O===void 0&&(O=i.TEXTURE0+ne-1),$!==O&&(i.activeTexture(O),$=O)}l(Dt,"activeTexture");function ot(O,ce,re){re===void 0&&($===null?re=i.TEXTURE0+ne-1:re=$);let Ae=j[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[re]=Ae),(Ae.type!==O||Ae.texture!==ce)&&($!==re&&(i.activeTexture(re),$=re),i.bindTexture(O,ce||de[O]),Ae.type=O,Ae.texture=ce)}l(ot,"bindTexture");function G(){let O=j[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}l(G,"unbindTexture");function Je(){try{i.compressedTexImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}l(Je,"compressedTexImage2D");function tt(){try{i.compressedTexImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}l(tt,"compressedTexImage3D");function at(){try{i.texSubImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}l(at,"texSubImage2D");function _e(){try{i.texSubImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}l(_e,"texSubImage3D");function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}l(gt,"compressedTexSubImage2D");function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}l(ze,"compressedTexSubImage3D");function Xe(){try{i.texStorage2D(...arguments)}catch(O){$e("WebGLState:",O)}}l(Xe,"texStorage2D");function L(){try{i.texStorage3D(...arguments)}catch(O){$e("WebGLState:",O)}}l(L,"texStorage3D");function E(){try{i.texImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}l(E,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}l(q,"texImage3D");function fe(O){return p[O]!==void 0?p[O]:i.getParameter(O)}l(fe,"getParameter");function ae(O,ce){p[O]!==ce&&(i.pixelStorei(O,ce),p[O]=ce)}l(ae,"pixelStorei");function Me(O){Q.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Q.copy(O))}l(Me,"scissor");function Ce(O){pe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}l(Ce,"viewport");function se(O,ce){let re=u.get(ce);re===void 0&&(re=new WeakMap,u.set(ce,re));let Ae=re.get(O);Ae===void 0&&(Ae=i.getUniformBlockIndex(ce,O.name),i.uniformBlockBinding(ce,Ae,Ae),re.set(O,Ae))}l(se,"updateUBOMapping");function oe(O,ce,re){let ve=u.get(ce).get(O);c[ve]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ve,re),c[ve]=re)}l(oe,"uniformBlockBinding");function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,j={},f={},c={},m=new WeakMap,x=[],v=null,g=!1,b=null,y=null,w=null,M=null,R=null,A=null,_=null,S=new Be(0,0,0),I=0,P=!1,N=null,U=null,X=null,F=null,Y=null,Q.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(Ee,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:ee,bindFramebuffer:me,drawBuffers:ie,useProgram:xe,setBlending:qe,setMaterial:Ke,setFlipSided:lt,setCullFace:et,setLineWidth:St,setPolygonOffset:ct,setScissorTest:wt,activeTexture:Dt,bindTexture:ot,unbindTexture:G,compressedTexImage2D:Je,compressedTexImage3D:tt,texImage2D:E,texImage3D:q,pixelStorei:ae,getParameter:fe,updateUBOMapping:se,uniformBlockBinding:oe,texStorage2D:Xe,texStorage3D:L,texSubImage2D:at,texSubImage3D:_e,compressedTexSubImage2D:gt,compressedTexSubImage3D:ze,scissor:Me,viewport:Ce,reset:Ee}}l(mT,"WebGLState");function gT(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,h=new WeakMap,p=new Set,f,m=new WeakMap,x=new Set,v=new FinalizationRegistry(L=>x.delete(L)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return g?new OffscreenCanvas(L,E):wl("canvas")}l(b,"createCanvas");function y(L,E,q){let fe=1,ae=Xe(L);if((ae.width>q||ae.height>q)&&(fe=q/Math.max(ae.width,ae.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Me=Math.floor(fe*ae.width),Ce=Math.floor(fe*ae.height);f===void 0&&(f=b(Me,Ce));let se=E?b(Me,Ce):f;return se.width=Me,se.height=Ce,se.getContext("2d").drawImage(L,0,0,Me,Ce),Ye("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Me+"x"+Ce+")."),se}else return"data"in L&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}l(y,"resizeImage");function w(L){return L.generateMipmaps}l(w,"textureNeedsGenerateMipmaps");function M(L){i.generateMipmap(L)}l(M,"generateMipmap");function R(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function A(L,E,q,fe,ae,Me=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ce;fe&&(Ce=e.get("EXT_texture_norm16"),Ce||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=E;if(E===i.RED&&(q===i.FLOAT&&(se=i.R32F),q===i.HALF_FLOAT&&(se=i.R16F),q===i.UNSIGNED_BYTE&&(se=i.R8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.R16_EXT),q===i.SHORT&&Ce&&(se=Ce.R16_SNORM_EXT)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.R8UI),q===i.UNSIGNED_SHORT&&(se=i.R16UI),q===i.UNSIGNED_INT&&(se=i.R32UI),q===i.BYTE&&(se=i.R8I),q===i.SHORT&&(se=i.R16I),q===i.INT&&(se=i.R32I)),E===i.RG&&(q===i.FLOAT&&(se=i.RG32F),q===i.HALF_FLOAT&&(se=i.RG16F),q===i.UNSIGNED_BYTE&&(se=i.RG8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RG16_EXT),q===i.SHORT&&Ce&&(se=Ce.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RG8UI),q===i.UNSIGNED_SHORT&&(se=i.RG16UI),q===i.UNSIGNED_INT&&(se=i.RG32UI),q===i.BYTE&&(se=i.RG8I),q===i.SHORT&&(se=i.RG16I),q===i.INT&&(se=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGB8UI),q===i.UNSIGNED_SHORT&&(se=i.RGB16UI),q===i.UNSIGNED_INT&&(se=i.RGB32UI),q===i.BYTE&&(se=i.RGB8I),q===i.SHORT&&(se=i.RGB16I),q===i.INT&&(se=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),q===i.UNSIGNED_INT&&(se=i.RGBA32UI),q===i.BYTE&&(se=i.RGBA8I),q===i.SHORT&&(se=i.RGBA16I),q===i.INT&&(se=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGB16_EXT),q===i.SHORT&&Ce&&(se=Ce.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),E===i.RGBA){let oe=Me?Sl:dt.getTransfer(ae);q===i.FLOAT&&(se=i.RGBA32F),q===i.HALF_FLOAT&&(se=i.RGBA16F),q===i.UNSIGNED_BYTE&&(se=oe===bt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGBA16_EXT),q===i.SHORT&&Ce&&(se=Ce.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}l(A,"getInternalFormat");function _(L,E){let q;return L?E===null||E===Ei||E===js?q=i.DEPTH24_STENCIL8:E===Ai?q=i.DEPTH32F_STENCIL8:E===go&&(q=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ei||E===js?q=i.DEPTH_COMPONENT24:E===Ai?q=i.DEPTH_COMPONENT32F:E===go&&(q=i.DEPTH_COMPONENT16),q}l(_,"getInternalDepthFormat");function S(L,E){return w(L)===!0||L.isFramebufferTexture&&L.minFilter!==Wt&&L.minFilter!==Xt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}l(S,"getMipLevels");function I(L){let E=new WeakRef(L);n.get(L).__ref=E,x.add(E),v.register(L,E,E)}l(I,"track");function P(L){let E=n.get(L).__ref;E!==void 0&&(x.delete(E),v.unregister(E))}l(P,"untrack");function N(L){X(L.target)}l(N,"onTextureDispose");function U(L){F(L.target)}l(U,"onRenderTargetDispose");function X(L){L.removeEventListener("dispose",N),P(L),ne(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&p.delete(L)}l(X,"destroyTexture");function F(L){L.removeEventListener("dispose",U),P(L),J(L)}l(F,"destroyRenderTarget");function Y(){for(let L of x){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?F(E):X(E))}x.clear(),p.clear()}l(Y,"dispose");function ne(L){let E=n.get(L);if(E.__webglInit===void 0)return;let q=L.source,fe=m.get(q);if(fe){let ae=fe[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&B(L),Object.keys(fe).length===0&&m.delete(q)}n.remove(L)}l(ne,"deallocateTexture");function B(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let q=L.source,fe=m.get(q);delete fe[E.__cacheKey],a.memory.textures--}l(B,"deleteTexture");function J(L){let E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let q=L.depthTexture;if(q&&q.renderTarget===L&&X(q),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let Me=0;Me<E.__webglFramebuffer[ae].length;Me++)i.deleteFramebuffer(E.__webglFramebuffer[ae][Me]);else i.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ae]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let fe=L.textures;for(let ae=0,Me=fe.length;ae<Me;ae++){let Ce=n.get(fe[ae]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(fe[ae])}n.remove(L)}l(J,"deallocateRenderTarget");let H=0;function $(){H=0}l($,"resetTextureUnits");function j(){return H}l(j,"getTextureUnits");function he(L){H=L}l(he,"setTextureUnits");function ge(){let L=H;return L>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,L}l(ge,"allocateTextureUnit");function Q(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}l(Q,"getTextureCacheKey");function pe(L,E){let q=n.get(L);if(L.isVideoTexture&&gt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let fe=L.image;if(fe===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}l(pe,"setTexture2D");function le(L,E){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Ke(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}l(le,"setTexture2DArray");function de(L,E){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Ke(q,L,E);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}l(de,"setTexture3D");function ue(L,E){let q=n.get(L);if(L.version>0&&q.__version!==L.version){lt(q,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}l(ue,"setTextureCube");let ee={[Hi]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[$u]:i.MIRRORED_REPEAT},me={[Wt]:i.NEAREST,[Pb]:i.NEAREST_MIPMAP_NEAREST,[Xl]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[kh]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ie={[Nb]:i.NEVER,[Up]:i.ALWAYS,[Ub]:i.LESS,[Dp]:i.LEQUAL,[Fb]:i.EQUAL,[Np]:i.GEQUAL,[Ob]:i.GREATER,[Bb]:i.NOTEQUAL};function xe(L,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xt||E.magFilter===kh||E.magFilter===Xl||E.magFilter===Gn||E.minFilter===Xt||E.minFilter===kh||E.minFilter===Xl||E.minFilter===Gn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ee[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ee[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ee[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,me[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==Xl&&E.minFilter!==Gn||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}l(xe,"setTextureParameters");function Se(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",N),I(E));let fe=E.source,ae=m.get(fe);ae===void 0&&(ae={},m.set(fe,ae));let Me=Q(E);if(Me!==L.__cacheKey){ae[Me]===void 0&&(ae[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[Me].usedTimes++;let Ce=ae[L.__cacheKey];Ce!==void 0&&(ae[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(E)),L.__cacheKey=Me,L.__webglTexture=ae[Me].texture}return q}l(Se,"initTexture");function ye(L,E,q){return Math.floor(Math.floor(L/q)/E)}l(ye,"getRow");function qe(L,E,q,fe){let Me=L.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,fe,E.data);else{Me.sort((O,ce)=>O.start-ce.start);let Ce=0;for(let O=1;O<Me.length;O++){let ce=Me[Ce],re=Me[O],Ae=ce.start+ce.count,ve=ye(re.start,E.width,4),we=ye(ce.start,E.width,4);re.start<=Ae+1&&ve===we&&ye(re.start+re.count-1,E.width,4)===ve?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ce,Me[Ce]=re)}Me.length=Ce+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let O=0,ce=Me.length;O<ce;O++){let re=Me[O],Ae=Math.floor(re.start/4),ve=Math.ceil(re.count/4),we=Ae%E.width,Ge=Math.floor(Ae/E.width),rt=ve,be=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,we,Ge,rt,be,q,fe,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}l(qe,"updateTexture");function Ke(L,E,q){let fe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=i.TEXTURE_3D);let ae=Se(L,E),Me=E.source;t.bindTexture(fe,L.__webglTexture,i.TEXTURE0+q);let Ce=n.get(Me);if(Me.version!==Ce.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let be=dt.getPrimaries(dt.workingColorSpace),Ve=E.colorSpace===Ti?null:dt.getPrimaries(E.colorSpace),nt=E.colorSpace===Ti||be===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let oe=y(E.image,!1,r.maxTextureSize);oe=ze(E,oe);let Ee=s.convert(E.format,E.colorSpace),O=s.convert(E.type),ce=A(E.internalFormat,Ee,O,E.normalized,E.colorSpace,E.isVideoTexture);xe(fe,E);let re,Ae=E.mipmaps,ve=E.isVideoTexture!==!0,we=Ce.__version===void 0||ae===!0,Ge=Me.dataReady,rt=S(E,oe);if(E.isDepthTexture)ce=_(E.format===Nr,E.type),we&&(ve?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,O,null));else if(E.isDataTexture)if(Ae.length>0){ve&&we&&t.texStorage2D(i.TEXTURE_2D,rt,ce,Ae[0].width,Ae[0].height);for(let be=0,Ve=Ae.length;be<Ve;be++)re=Ae[be],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,re.width,re.height,Ee,O,re.data):t.texImage2D(i.TEXTURE_2D,be,ce,re.width,re.height,0,Ee,O,re.data);E.generateMipmaps=!1}else ve?(we&&t.texStorage2D(i.TEXTURE_2D,rt,ce,oe.width,oe.height),Ge&&qe(E,oe,Ee,O)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,O,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ce,Ae[0].width,Ae[0].height,oe.depth);for(let be=0,Ve=Ae.length;be<Ve;be++)if(re=Ae[be],E.format!==Hn)if(Ee!==null)if(ve){if(Ge)if(E.layerUpdates.size>0){let nt=Gp(re.width,re.height,E.format,E.type);for(let Le of E.layerUpdates){let _t=re.data.subarray(Le*nt/re.data.BYTES_PER_ELEMENT,(Le+1)*nt/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,Le,re.width,re.height,1,Ee,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,re.width,re.height,oe.depth,Ee,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,ce,re.width,re.height,oe.depth,0,re.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,re.width,re.height,oe.depth,Ee,O,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,ce,re.width,re.height,oe.depth,0,Ee,O,re.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ve&&we&&t.texStorage2D(i.TEXTURE_2D,rt,ce,Ae[0].width,Ae[0].height);for(let be=0,Ve=Ae.length;be<Ve;be++)re=Ae[be],E.format!==Hn?Ee!==null?ve?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,re.width,re.height,Ee,re.data):t.compressedTexImage2D(i.TEXTURE_2D,be,ce,re.width,re.height,0,re.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,re.width,re.height,Ee,O,re.data):t.texImage2D(i.TEXTURE_2D,be,ce,re.width,re.height,0,Ee,O,re.data)}else if(E.isDataArrayTexture)if(ve){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ce,oe.width,oe.height,oe.depth),Ge)if(E.layerUpdates.size>0){let be=Gp(oe.width,oe.height,E.format,E.type);for(let Ve of E.layerUpdates){let nt=oe.data.subarray(Ve*be/oe.data.BYTES_PER_ELEMENT,(Ve+1)*be/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,oe.width,oe.height,1,Ee,O,nt)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,O,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Ee,O,oe.data);else if(E.isData3DTexture)ve?(we&&t.texStorage3D(i.TEXTURE_3D,rt,ce,oe.width,oe.height,oe.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,O,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Ee,O,oe.data);else if(E.isFramebufferTexture){if(we)if(ve)t.texStorage2D(i.TEXTURE_2D,rt,ce,oe.width,oe.height);else{let be=oe.width,Ve=oe.height;for(let nt=0;nt<rt;nt++)t.texImage2D(i.TEXTURE_2D,nt,ce,be,Ve,0,Ee,O,null),be>>=1,Ve>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let be=i.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),oe.parentNode!==be){be.appendChild(oe),p.add(E),be.onpaint=Ve=>{let nt=Ve.changedElements;for(let Le of p)nt.includes(Le.image)&&(Le.needsUpdate=!0)},be.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let nt=i.RGBA,Le=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Le,_t,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ve&&we){let be=Xe(Ae[0]);t.texStorage2D(i.TEXTURE_2D,rt,ce,be.width,be.height)}for(let be=0,Ve=Ae.length;be<Ve;be++)re=Ae[be],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Ee,O,re):t.texImage2D(i.TEXTURE_2D,be,ce,Ee,O,re);E.generateMipmaps=!1}else if(ve){if(we){let be=Xe(oe);t.texStorage2D(i.TEXTURE_2D,rt,ce,be.width,be.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,O,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Ee,O,oe);w(E)&&E.mipmapsAutoUpdate===!0&&M(fe),Ce.__version=Me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}l(Ke,"uploadTexture");function lt(L,E,q){if(E.image.length!==6)return;let fe=Se(L,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let Me=n.get(ae);if(ae.version!==Me.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Ce=dt.getPrimaries(dt.workingColorSpace),se=E.colorSpace===Ti?null:dt.getPrimaries(E.colorSpace),oe=E.colorSpace===Ti||Ce===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,O=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let Le=0;Le<6;Le++)!Ee&&!O?ce[Le]=y(E.image[Le],!0,r.maxCubemapSize):ce[Le]=O?E.image[Le].image:E.image[Le],ce[Le]=ze(E,ce[Le]);let re=ce[0],Ae=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),we=A(E.internalFormat,Ae,ve,E.normalized,E.colorSpace),Ge=E.isVideoTexture!==!0,rt=Me.__version===void 0||fe===!0,be=ae.dataReady,Ve=S(E,re);xe(i.TEXTURE_CUBE_MAP,E);let nt;if(E.isDepthTexture){if(we=_(E.format===Nr,E.type),rt)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,we,re.width,re.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,re.width,re.height,0,Ae,ve,null)}else if(Ee){Ge&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,re.width,re.height);for(let Le=0;Le<6;Le++){nt=ce[Le].mipmaps;for(let _t=0;_t<nt.length;_t++){let Jt=nt[_t];E.format!==Hn?Ae!==null?Ge?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,0,0,Jt.width,Jt.height,Ae,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,we,Jt.width,Jt.height,0,Jt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,0,0,Jt.width,Jt.height,Ae,ve,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,we,Jt.width,Jt.height,0,Ae,ve,Jt.data)}}}else{if(nt=E.mipmaps,Ge&&rt){nt.length>0&&Ve++;let Le=Xe(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(O){Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ce[Le].width,ce[Le].height,Ae,ve,ce[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,ce[Le].width,ce[Le].height,0,Ae,ve,ce[Le].data);for(let _t=0;_t<nt.length;_t++){let $r=nt[_t].image[Le].image;Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,0,0,$r.width,$r.height,Ae,ve,$r.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,we,$r.width,$r.height,0,Ae,ve,$r.data)}}else{Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ae,ve,ce[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,Ae,ve,ce[Le]);for(let _t=0;_t<nt.length;_t++){let Jt=nt[_t];Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,0,0,Ae,ve,Jt.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,we,Ae,ve,Jt.image[Le])}}}w(E)&&E.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Me.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}l(lt,"uploadCubeTexture");function et(L,E,q,fe,ae,Me){let Ce=s.convert(q.format,q.colorSpace),se=s.convert(q.type),oe=A(q.internalFormat,Ce,se,q.normalized,q.colorSpace),Ee=n.get(E),O=n.get(q);if(O.__renderTarget=E,!Ee.__hasExternalTextures){let ce=Math.max(1,E.width>>Me),re=Math.max(1,E.height>>Me);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Me,oe,ce,re,E.depth,0,Ce,se,null):t.texImage2D(ae,Me,oe,ce,re,0,Ce,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),_e(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,O.__webglTexture,0,at(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,O.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(et,"setupFrameBufferTexture");function St(L,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let fe=E.depthTexture,ae=fe&&fe.isDepthTexture?fe.type:null,Me=_(E.stencilBuffer,ae),Ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(E),Me,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(E),Me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,L)}else{let fe=E.textures;for(let ae=0;ae<fe.length;ae++){let Me=fe[ae],Ce=s.convert(Me.format,Me.colorSpace),se=s.convert(Me.type),oe=A(Me.internalFormat,Ce,se,Me.normalized,Me.colorSpace);_e(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(E),oe,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(E),oe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,oe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(St,"setupRenderBufferStorage");function ct(L,E,q){let fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(E.depthTexture);ae.__renderTarget=E;let Me=fe?E.depthTexture.image[0]:E.depthTexture.image;(!ae.__webglTexture||Me.width!==E.width||Me.height!==E.height)&&(Me.width=E.width,Me.height=E.height,E.depthTexture.needsUpdate=!0),fe?ue(E.depthTexture,0):pe(E.depthTexture,0);let Ce=ae.__webglTexture,se=at(E),oe=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Ee=E.depthTexture.format===Nr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Tr)_e(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else if(E.depthTexture.format===Nr)_e(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(ct,"setupDepthTexture");function wt(L){let E=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let fe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){let ae=l(()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",ae)},"disposeEvent");fe.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=fe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)ct(E.__webglFramebuffer[fe],L,fe);else L.texture.mipmaps.length>0?ct(E.__webglFramebuffer[0],L,0):ct(E.__webglFramebuffer,L,0);else if(q){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=i.createRenderbuffer(),St(E.__webglDepthbuffer[fe],L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),St(E.__webglDepthbuffer,L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(wt,"setupDepthRenderbuffer");function Dt(L,E,q){let fe=n.get(L);E!==void 0&&et(fe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(L)}l(Dt,"rebindTextures");function ot(L){let E=L.texture,q=n.get(L),fe=n.get(E);L.addEventListener("dispose",U),I(L);let ae=L.textures,Me=L.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=E.version,a.memory.textures++),Me){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let oe=0;oe<E.mipmaps.length;oe++)q.__webglFramebuffer[se][oe]=i.createFramebuffer()}else q.__webglFramebuffer[se]=i.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)q.__webglFramebuffer[se]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let se=0,oe=ae.length;se<oe;se++){let Ee=n.get(ae[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&_e(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<ae.length;se++){let oe=ae[se];q.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let Ee=s.convert(oe.format,oe.colorSpace),O=s.convert(oe.type),ce=A(oe.internalFormat,Ee,O,oe.normalized,oe.colorSpace,L.isXRRenderTarget===!0),re=at(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ce,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,q.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),St(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(i.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps.length>0)for(let oe=0;oe<E.mipmaps.length;oe++)et(q.__webglFramebuffer[se][oe],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else et(q.__webglFramebuffer[se],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);w(E)?M(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let se=0,oe=ae.length;se<oe;se++){let Ee=ae[se],O=n.get(Ee),ce=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,O.__webglTexture),xe(ce,Ee),et(q.__webglFramebuffer,L,Ee,i.COLOR_ATTACHMENT0+se,ce,0),w(Ee)&&M(ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,fe.__webglTexture),xe(se,E),E.mipmaps.length>0)for(let oe=0;oe<E.mipmaps.length;oe++)et(q.__webglFramebuffer[oe],L,E,i.COLOR_ATTACHMENT0,se,oe);else et(q.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,se,0);w(E)?M(se):E.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&wt(L)}l(ot,"setupRenderTarget");function G(L){let E=L.textures;for(let q=0,fe=E.length;q<fe;q++){let ae=E[q];if(w(ae)&&ae.mipmapsAutoUpdate===!0){let Me=R(L),Ce=n.get(ae).__webglTexture;t.bindTexture(Me,Ce),M(Me),t.unbindTexture()}}}l(G,"updateRenderTargetMipmap");let Je=[];function tt(L){if(L.samples>0){if(_e(L)===!1){let E=L.textures,q=L.width,fe=L.height,ae=i.COLOR_BUFFER_BIT,Me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(L),se=E.length>1;if(se)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let O=n.get(E[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,ae,i.NEAREST),c===!0&&(Je.length=0,Je.push(i.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Je.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let O=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}l(tt,"updateMultisampleRenderTarget");function at(L){return Math.min(r.maxSamples,L.samples)}l(at,"getRenderTargetSamples");function _e(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}l(_e,"useMultisampledRTT");function gt(L){let E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}l(gt,"updateVideoTexture");function ze(L,E){let q=L.colorSpace,fe=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Ml&&q!==Ti&&(dt.getTransfer(q)===bt?(fe!==Hn||ae!==pn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",q)),E}l(ze,"verifyColorSpace");function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}l(Xe,"getDimensions"),this.allocateTextureUnit=ge,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=he,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=de,this.setTextureCube=ue,this.rebindTextures=Dt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=_e,this.dispose=Y}l(gT,"WebGLTextures");function xT(i,e){function t(n,r=Ti){let s,a=dt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ap)return i.BYTE;if(n===Tp)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===zh)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Pp)return i.ALPHA;if(n===Ip)return i.RGB;if(n===Hn)return i.RGBA;if(n===Tr)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===Lp)return i.RED;if(n===Hh)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Wh)return i.RG_INTEGER;if(n===Xh)return i.RGBA_INTEGER;if(n===ql||n===Yl||n===$l||n===Zl)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qh||n===Yh||n===$h||n===Zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jh||n===Kh||n===jh||n===Qh||n===ed||n===Jl||n===td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jh||n===Kh)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qh)return s.COMPRESSED_R11_EAC;if(n===ed)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Jl)return s.COMPRESSED_RG11_EAC;if(n===td)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nd||n===id||n===rd||n===sd||n===ad||n===od||n===ld||n===cd||n===ud||n===hd||n===dd||n===fd||n===pd||n===md)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===id)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ad)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===od)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ld)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ud)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===md)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gd||n===xd||n===bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===gd)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_d||n===yd||n===Kl||n===vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_d)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(xT,"WebGLUtils");var bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_T=`
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

}`,_0=class _0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:bT,fragmentShader:_T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(_0,"WebXRDepthSensing");var u0=_0,y0=class y0 extends Wi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,x=null,v=typeof XRWebGLBinding<"u",g=new u0,b={},y=t.getContextAttributes(),w=null,M=null,R=[],A=[],_=new He,S=null,I=null,P=new Mn;P.viewport=new Nt;let N=new Mn;N.viewport=new Nt;let U=[P,N],X=new xh,F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=R[Q];return pe===void 0&&(pe=new ao,R[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=R[Q];return pe===void 0&&(pe=new ao,R[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=R[Q];return pe===void 0&&(pe=new ao,R[Q]=pe),pe.getHandSpace()};function ne(Q){let pe=A.indexOf(Q.inputSource);if(pe===-1)return;let le=R[pe];le!==void 0&&(le.update(Q.inputSource,Q.frame,u||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}l(ne,"onSessionEvent");function B(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",J);for(let Q=0;Q<R.length;Q++){let pe=A[Q];pe!==null&&(A[Q]=null,R[Q].disconnect(pe))}F=null,Y=null,g.reset();for(let Q in b)delete b[Q];if(e.setRenderTarget(w),m=null,f=null,p=null,r=null,M=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),I!==null){let Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}l(B,"onSessionEnd"),this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",B),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,ue=null;y.depth&&(ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=y.stencil?Nr:Tr,de=y.stencil?js:Ei);let ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Bn(f.textureWidth,f.textureHeight,{format:Hn,type:pn,depthTexture:new Ir(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Q){for(let pe=0;pe<Q.removed.length;pe++){let le=Q.removed[pe],de=A.indexOf(le);de>=0&&(A[de]=null,R[de].disconnect(le))}for(let pe=0;pe<Q.added.length;pe++){let le=Q.added[pe],de=A.indexOf(le);if(de===-1){for(let ee=0;ee<R.length;ee++)if(ee>=A.length){A.push(le),de=ee;break}else if(A[ee]===null){A[ee]=le,de=ee;break}if(de===-1)break}let ue=R[de];ue&&ue.connect(le)}}l(J,"onInputSourcesChange");function H(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}l(H,"updateCamera"),this.updateCamera=function(Q){if(r===null)return;let pe=Q.near,le=Q.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),X.near=N.near=P.near=pe,X.far=N.far=P.far=le,(F!==X.near||Y!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,Y=X.far),X.layers.mask=Q.layers.mask|6,P.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;let de=Q.parent,ue=X.cameras;H(X,de);for(let ee=0;ee<ue.length;ee++)H(ue[ee],de);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),$(Q,X,de)};function $(Q,pe,le){le===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ju*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}l($,"updateUserCamera"),this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(Q){return b[Q]};let j=null;function he(Q,pe){if(h=pe.getViewerPose(u||a),x=pe,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let de=!1;le.length!==X.cameras.length&&(X.cameras.length=0,de=!0);for(let ie=0;ie<le.length;ie++){let xe=le[ie],Se=null;if(m!==null)Se=m.getViewport(xe);else{let qe=p.getViewSubImage(f,xe);Se=qe.viewport,ie===0&&(e.setRenderTargetTextures(M,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(M))}let ye=U[ie];ye===void 0&&(ye=new Mn,ye.layers.enable(ie),ye.viewport=new Nt,U[ie]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),ie===0&&(X.matrix.copy(ye.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),de===!0&&X.cameras.push(ye)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let ie=p.getDepthInformation(le[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,r.renderState)}if(ue&&ue.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let ie=0;ie<le.length;ie++){let xe=le[ie].camera;if(xe){let Se=b[xe];Se||(Se=new Nl,b[xe]=Se);let ye=p.getCameraImage(xe);Se.sourceTexture=ye}}}}for(let le=0;le<R.length;le++){let de=A[le],ue=R[le];de!==null&&ue!==void 0&&ue.update(de,pe,u||a)}j&&j(Q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}l(he,"onAnimationFrame");let ge=new x_;ge.setAnimationLoop(he),this.setAnimationLoop=function(Q){j=Q},this.dispose=function(){}}};l(y0,"WebXRManager");var h0=y0,yT=new yt,T_=new Ze;T_.set(-1,0,0,0,1,0,0,0,1);function vT(i,e){function t(g,b){g.matrixAutoUpdate===!0&&g.updateMatrix(),b.value.copy(g.matrix)}l(t,"refreshTransformUniform");function n(g,b){b.color.getRGB(g.fogColor.value,Bp(i)),b.isFog?(g.fogNear.value=b.near,g.fogFar.value=b.far):b.isFogExp2&&(g.fogDensity.value=b.density)}l(n,"refreshFogUniforms");function r(g,b,y,w,M){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?s(g,b):b.isMeshLambertMaterial?(s(g,b),b.envMap&&(g.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(s(g,b),p(g,b)):b.isMeshPhongMaterial?(s(g,b),h(g,b),b.envMap&&(g.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(s(g,b),f(g,b),b.isMeshPhysicalMaterial&&m(g,b,M)):b.isMeshMatcapMaterial?(s(g,b),x(g,b)):b.isMeshDepthMaterial?s(g,b):b.isMeshDistanceMaterial?(s(g,b),v(g,b)):b.isMeshNormalMaterial?s(g,b):b.isLineBasicMaterial?(a(g,b),b.isLineDashedMaterial&&o(g,b)):b.isPointsMaterial?c(g,b,y,w):b.isSpriteMaterial?u(g,b):b.isShadowMaterial?(g.color.value.copy(b.color),g.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(g,b){g.opacity.value=b.opacity,b.color&&g.diffuse.value.copy(b.color),b.emissive&&g.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(g.map.value=b.map,t(b.map,g.mapTransform)),b.alphaMap&&(g.alphaMap.value=b.alphaMap,t(b.alphaMap,g.alphaMapTransform)),b.bumpMap&&(g.bumpMap.value=b.bumpMap,t(b.bumpMap,g.bumpMapTransform),g.bumpScale.value=b.bumpScale,b.side===An&&(g.bumpScale.value*=-1)),b.normalMap&&(g.normalMap.value=b.normalMap,t(b.normalMap,g.normalMapTransform),g.normalScale.value.copy(b.normalScale),b.side===An&&g.normalScale.value.negate()),b.displacementMap&&(g.displacementMap.value=b.displacementMap,t(b.displacementMap,g.displacementMapTransform),g.displacementScale.value=b.displacementScale,g.displacementBias.value=b.displacementBias),b.emissiveMap&&(g.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,g.emissiveMapTransform)),b.specularMap&&(g.specularMap.value=b.specularMap,t(b.specularMap,g.specularMapTransform)),b.alphaTest>0&&(g.alphaTest.value=b.alphaTest);let y=e.get(b),w=y.envMap,M=y.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(yT.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(T_),g.reflectivity.value=b.reflectivity,g.ior.value=b.ior,g.refractionRatio.value=b.refractionRatio),b.lightMap&&(g.lightMap.value=b.lightMap,g.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,g.lightMapTransform)),b.aoMap&&(g.aoMap.value=b.aoMap,g.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,g.aoMapTransform))}l(s,"refreshUniformsCommon");function a(g,b){g.diffuse.value.copy(b.color),g.opacity.value=b.opacity,b.map&&(g.map.value=b.map,t(b.map,g.mapTransform))}l(a,"refreshUniformsLine");function o(g,b){g.dashSize.value=b.dashSize,g.totalSize.value=b.dashSize+b.gapSize,g.scale.value=b.scale}l(o,"refreshUniformsDash");function c(g,b,y,w){g.diffuse.value.copy(b.color),g.opacity.value=b.opacity,g.size.value=b.size*y,g.scale.value=w*.5,b.map&&(g.map.value=b.map,t(b.map,g.uvTransform)),b.alphaMap&&(g.alphaMap.value=b.alphaMap,t(b.alphaMap,g.alphaMapTransform)),b.alphaTest>0&&(g.alphaTest.value=b.alphaTest)}l(c,"refreshUniformsPoints");function u(g,b){g.diffuse.value.copy(b.color),g.opacity.value=b.opacity,g.rotation.value=b.rotation,b.map&&(g.map.value=b.map,t(b.map,g.mapTransform)),b.alphaMap&&(g.alphaMap.value=b.alphaMap,t(b.alphaMap,g.alphaMapTransform)),b.alphaTest>0&&(g.alphaTest.value=b.alphaTest)}l(u,"refreshUniformsSprites");function h(g,b){g.specular.value.copy(b.specular),g.shininess.value=Math.max(b.shininess,1e-4)}l(h,"refreshUniformsPhong");function p(g,b){b.gradientMap&&(g.gradientMap.value=b.gradientMap)}l(p,"refreshUniformsToon");function f(g,b){g.metalness.value=b.metalness,b.metalnessMap&&(g.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,g.metalnessMapTransform)),g.roughness.value=b.roughness,b.roughnessMap&&(g.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,g.roughnessMapTransform)),b.envMap&&(g.envMapIntensity.value=b.envMapIntensity)}l(f,"refreshUniformsStandard");function m(g,b,y){g.ior.value=b.ior,b.diffuseRoughness>0&&(g.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),b.sheen>0&&(g.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),g.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(g.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,g.sheenColorMapTransform)),b.sheenRoughnessMap&&(g.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,g.sheenRoughnessMapTransform))),b.clearcoat>0&&(g.clearcoat.value=b.clearcoat,g.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(g.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,g.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(g.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===An&&g.clearcoatNormalScale.value.negate())),b.dispersion>0&&(g.dispersion.value=b.dispersion),b.retroreflectivity>0&&(g.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(g.iridescence.value=b.iridescence,g.iridescenceIOR.value=b.iridescenceIOR,g.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(g.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,g.iridescenceMapTransform)),b.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),b.transmission>0&&(g.transmission.value=b.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),b.transmissionMap&&(g.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,g.transmissionMapTransform)),g.thickness.value=b.thickness,b.thicknessMap&&(g.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=b.attenuationDistance,g.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(g.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(g.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=b.specularIntensity,g.specularColor.value.copy(b.specularColor),b.specularColorMap&&(g.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,g.specularColorMapTransform)),b.specularIntensityMap&&(g.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,g.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function x(g,b){b.matcap&&(g.matcap.value=b.matcap)}l(x,"refreshUniformsMatcap");function v(g,b){let y=e.get(b).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return l(v,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(vT,"WebGLMaterials");function MT(i,e,t,n){let r={},s={};function a(y,w){let M=w.program;n.uniformBlockBinding(y,M,r[y.id])}l(a,"bind");function o(y,w){let M=r[y.id];M===void 0&&(x(y),M=c(y),r[y.id]=M,y.addEventListener("dispose",g));let R=w.program;n.updateUBOMapping(y,R);let A=e.render.frame;s[y.id]!==A&&(u(y),s[y.id]=A)}l(o,"update");function c(y){let w=i.createBuffer(),M=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}l(c,"createBuffer");function u(y){let w=r[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,_=M.length;A<_;A++){let S=M[A];if(Array.isArray(S))for(let I=0,P=S.length;I<P;I++)h(S[I],A,I,R);else h(S,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(y,w,M,R){if(f(y,w,M,R)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let I=0;I<_.length;I++){let P=_[I],N=v(P,!0);p(P,y.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,y.__data)}}l(h,"updateUniform");function p(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}l(p,"writeUniformValue");function f(y,w,M,R){let A=y.value,_=w+"_"+M;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let S=R[_],I=!1;for(let P=0;P<A.length;P++)m(A[P],S,P)===!0&&(I=!0);return I}return m(A,R,_)}l(f,"hasUniformChanged");function m(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let R=w[M];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}l(m,"hasValueChanged");function x(y){let w=y.uniforms,M=0,R=16;for(let _=0,S=w.length;_<S;_++){let I=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,N=I.length;P<N;P++){let U=I[P],X=Array.isArray(U.value)?U.value:[U.value],F=Array.isArray(w[_])||Array.isArray(U.value),Y=M;for(let B=0,J=X.length;B<J;B++){let H=X[B],$=v(H,F),j=M%R,he=j%$.boundary,ge=j+he;M+=he,ge!==0&&R-ge<$.storage&&(M+=R-ge),B===0&&(Y=M),M+=$.storage}let ne=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new ne((M-Y)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Y}}let A=M%R;return A>0&&(M+=R-A),y.__size=M,y.__cache={},this}l(x,"prepareUniformsGroup");function v(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}l(v,"getUniformSize");function g(y){let w=y.target;w.removeEventListener("dispose",g),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}l(g,"onUniformsGroupsDispose");function b(){for(let y in r)i.deleteBuffer(r[y]);r={},s={}}return l(b,"dispose"),{bind:a,update:o,dispose:b}}l(MT,"WebGLUniformsGroups");var ST=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function wT(){return Ki===null&&(Ki=new uo(ST,16,16,Ji,Vn),Ki.name="DFG_LUT",Ki.minFilter=Xt,Ki.magFilter=Xt,Ki.wrapS=ri,Ki.wrapT=ri,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}l(wT,"getDFGLUT");var v0=class v0{constructor(e={}){let{canvas:t=kb(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=pn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let v=m,g=new Set([Xh,Wh,Hh]),b=new Set([pn,Ei,go,js,Gh,Vh]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,U=null,X=null,F=null,Y=null;this._outputColorSpace=Ht;let ne=0,B=0,J=null,H=-1,$=null,j=new Nt,he=new Nt,ge=null,Q=new Be(0),pe=0,le=t.width,de=t.height,ue=1,ee=null,me=null,ie=new Nt(0,0,le,de),xe=new Nt(0,0,le,de),Se=!1,ye=new as,qe=new th,Ke=!1,lt=!1,et=new yt,St=new W,ct=new Nt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function ot(){return J===null?ue:1}l(ot,"getTargetPixelRatio");let G=n;function Je(T,z){return t.getContext(T,z)}l(Je,"getContext");let tt,at,_e,gt,ze,Xe,L,E,q,fe,ae,Me,Ce,se,oe,Ee,O,ce,re,Ae,ve,we,Ge;try{let T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),G===null){let z="webgl2";if(G=Je(z,T),G===null)throw Je(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(T){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),$e("WebGLRenderer: "+T.message),T}function rt(){tt=new UE(G),tt.init(),ve=new xT(G,tt),at=new wE(G,tt,e,ve),_e=new mT(G,tt),at.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),X=G.createFramebuffer(),F=G.createFramebuffer(),Y=G.createFramebuffer(),gt=new BE(G),ze=new tT,Xe=new gT(G,tt,_e,ze,at,ve,gt),L=new NE(P),E=new zS(G),we=new ME(G,E),q=new FE(G,E,gt,we),fe=new zE(G,q,E,we,gt),ce=new kE(G,at,Xe),oe=new EE(ze),ae=new eT(P,L,tt,at,we,oe),Me=new vT(P,ze),Ce=new iT,se=new cT(tt),O=new vE(P,L,_e,fe,x,c),Ee=new pT(P,fe,at),Ge=new MT(G,gt,at,_e),re=new SE(G,tt,gt),Ae=new OE(G,tt,gt),gt.programs=ae.programs,P.capabilities=at,P.extensions=tt,P.properties=ze,P.renderLists=Ce,P.shadowMap=Ee,P.state=_e,P.info=gt}l(rt,"initGLContext"),v!==pn&&(I=new VE(v,t.width,t.height,o,r,s));let be=new h0(P,G);this.xr=be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(T){T!==void 0&&(ue=T,this.setSize(le,de,!1))},this.getSize=function(T){return T.set(le,de)},this.setSize=function(T,z,te=!0){if(be.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,de=z,t.width=Math.floor(T*ue),t.height=Math.floor(z*ue),te===!0&&(t.style.width=T+"px",t.style.height=z+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(le*ue,de*ue).floor()},this.setDrawingBufferSize=function(T,z,te){le=T,de=z,ue=te,t.width=Math.floor(T*te),t.height=Math.floor(z*te),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(v===pn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,z,te,Z){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,z,te,Z),_e.viewport(j.copy(ie).multiplyScalar(ot()).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,z,te,Z){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,z,te,Z),_e.scissor(he.copy(xe).multiplyScalar(ot()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){_e.setScissorTest(Se=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,te=!0){let Z=0;if(T){let K=!1;if(J!==null){let Re=J.texture.format;K=g.has(Re)}if(K){let Re=J.texture.type,Ue=b.has(Re),Te=O.getClearColor(),De=O.getClearAlpha(),ke=Te.r,je=Te.g,ut=Te.b;Ue?(y[0]=ke,y[1]=je,y[2]=ut,y[3]=De,G.clearBufferuiv(G.COLOR,0,y)):(w[0]=ke,w[1]=je,w[2]=ut,w[3]=De,G.clearBufferiv(G.COLOR,0,w))}else Z|=G.COLOR_BUFFER_BIT}z&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),O.dispose(),Ce.dispose(),se.dispose(),Xe.dispose(),ze.dispose(),L.dispose(),fe.dispose(),q.dispose(),we.dispose(),Ge.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",yx),be.removeEventListener("sessionend",vx),zs.stop()};function Ve(T){T.preventDefault(),El("WebGLRenderer: Context Lost."),N=!0}l(Ve,"onContextLost");function nt(){El("WebGLRenderer: Context Restored."),N=!1;let T=gt.autoReset,z=Ee.enabled,te=Ee.autoUpdate,Z=Ee.needsUpdate,K=Ee.type;rt(),gt.autoReset=T,Ee.enabled=z,Ee.autoUpdate=te,Ee.needsUpdate=Z,Ee.type=K}l(nt,"onContextRestore");function Le(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}l(Le,"onContextCreationError");function _t(T){let z=T.target;z.removeEventListener("dispose",_t),Jt(z)}l(_t,"onMaterialDispose");function Jt(T){$r(T),ze.remove(T)}l(Jt,"deallocateMaterial");function $r(T){let z=ze.get(T).programs;z!==void 0&&(z.forEach(function(te){ae.releaseProgram(te)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}l($r,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(T,z,te,Z,K,Re){z===null&&(z=wt);let Ue=K.isMesh&&K.matrixWorld.determinantAffine()<0,Te=kM(T,z,te,Z,K);_e.setMaterial(Z,Ue);let De=te.index,ke=1;if(Z.wireframe===!0){if(De=q.getWireframeAttribute(te),De===void 0)return;ke=2}let je=te.drawRange,ut=te.attributes.position,Fe=je.start*ke,ht=(je.start+je.count)*ke;Re!==null&&(Fe=Math.max(Fe,Re.start*ke),ht=Math.min(ht,(Re.start+Re.count)*ke)),De!==null?(Fe=Math.max(Fe,0),ht=Math.min(ht,De.count)):ut!=null&&(Fe=Math.max(Fe,0),ht=Math.min(ht,ut.count));let Gt=ht-Fe;if(Gt<0||Gt===1/0)return;we.setup(K,Z,Te,te,De);let Tt,Et=re;if(De!==null&&(Tt=E.get(De),Et=Ae,Et.setIndex(Tt)),K.isMesh)Z.wireframe===!0?(_e.setLineWidth(Z.wireframeLinewidth*ot()),Et.setMode(G.LINES)):Et.setMode(G.TRIANGLES);else if(K.isLine){let un=Z.linewidth;un===void 0&&(un=1),_e.setLineWidth(un*ot()),K.isLineSegments?Et.setMode(G.LINES):K.isLineLoop?Et.setMode(G.LINE_LOOP):Et.setMode(G.LINE_STRIP)}else K.isPoints?Et.setMode(G.POINTS):K.isSprite&&Et.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let un=K._multiDrawStarts,Oe=K._multiDrawCounts,yn=K._multiDrawCount,xt=De?E.get(De).bytesPerElement:1,Gs=ze.get(Z).currentProgram.getUniforms();for(let hn=0;hn<yn;hn++)Gs.setValue(G,"_gl_DrawID",hn),Et.render(un[hn]/xt,Oe[hn])}else if(K.isInstancedMesh)Et.renderInstances(Fe,Gt,K.count);else if(te.isInstancedBufferGeometry){let un=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oe=Math.min(te.instanceCount,un);Et.renderInstances(Fe,Gt,Oe)}else Et.render(Fe,Gt)};function _x(T,z,te,Z){U!==null&&T.isNodeMaterial&&U.setObject(Z,T),Ke===!0&&oe.setState(T,te,!1),T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,hl(T,z,Z),T.side=ds,T.needsUpdate=!0,hl(T,z,Z),T.side=ai):hl(T,z,Z)}l(_x,"prepareMaterial"),this.compile=function(T,z,te=null){te===null&&(te=T),U!==null&&U.renderStart(T,z,te),A=se.get(te),A.init(z),S.push(A),te.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),T!==te&&T.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),lt=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,lt),Ke===!0&&oe.setGlobalState(this.clippingPlanes,z),U!==null&&Ee.render(A.state.shadowsArray,te,z);let Z=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Re=K.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let Te=Re[Ue];_x(Te,te,z,K),Z.add(Te)}else _x(Re,te,z,K),Z.add(Re)}),A=S.pop(),U!==null&&U.renderEnd(),Z},this.compileAsync=function(T,z,te=null){let Z=this.compile(T,z,te);return new Promise(K=>{function Re(){if(Z.forEach(function(Ue){let De=ze.get(Ue).currentProgram;(De===void 0||De.isReady())&&Z.delete(Ue)}),Z.size===0){K(T);return}setTimeout(Re,10)}l(Re,"checkMaterialsReady"),tt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Rf=null;function OM(T){Rf&&Rf(T)}l(OM,"onAnimationFrame");function yx(){zs.stop()}l(yx,"onXRSessionStart");function vx(){zs.start()}l(vx,"onXRSessionEnd");let zs=new x_;zs.setAnimationLoop(OM),typeof self<"u"&&zs.setContext(self),this.setAnimationLoop=function(T){Rf=T,be.setAnimationLoop(T),T===null?zs.stop():zs.start()},be.addEventListener("sessionstart",yx),be.addEventListener("sessionend",vx),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(T,z);let te=be.enabled===!0&&be.isPresenting===!0,Z=I!==null&&(J===null||te)&&I.begin(P,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(z),z=be.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,z,J),A=se.get(T,S.length),A.init(z),A.state.textureUnits=Xe.getTextureUnits(),S.push(A),et.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?qe.setFromArrayCamera(z):ye.setFromProjectionMatrix(et,si,z.reversedDepth),lt=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,lt),R=Ce.get(T,_.length),R.init(),_.push(R),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Ue=P.xr.getDepthSensingMesh();Ue!==null&&Pf(Ue,z,-1/0,P.sortObjects)}Pf(T,z,0,P.sortObjects),R.finish(),U!==null&&U.updateLights(A.state.lightsArray),P.sortObjects===!0&&R.sort(ee,me),Dt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Dt&&O.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&oe.beginShadows();let K=A.state.shadowsArray;if(Ee.render(K,T,z),Ke===!0&&oe.endShadows(),(Z&&I.hasRenderPass())===!1){let Ue=R.opaque,Te=R.transmissive;if(A.setupLights(),z.isArrayCamera){let De=z.cameras;if(Te.length>0)for(let ke=0,je=De.length;ke<je;ke++){let ut=De[ke];Sx(Ue,Te,T,ut)}Dt&&O.render(T);for(let ke=0,je=De.length;ke<je;ke++){let ut=De[ke];Mx(R,T,ut,ut.viewport)}}else Te.length>0&&Sx(Ue,Te,T,z),Dt&&O.render(T),Mx(R,T,z)}J!==null&&B===0&&(Xe.updateMultisampleRenderTarget(J),Xe.updateRenderTargetMipmap(J)),Z&&I.end(P),T.isScene===!0&&T.onAfterRender(P,T,z),we.resetDefaultState(),H=-1,$=null,S.pop(),S.length>0?(A=S[S.length-1],Xe.setTextureUnits(A.state.textureUnits),Ke===!0&&oe.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,U!==null&&U.renderEnd()};function Pf(T,z,te,Z){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let Ue=z.isArrayCamera?qe:ye;if(!T.frustumCulled||T.intersectsFrustum(Ue)){Z&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);let Te=fe.update(T),De=T.material;De.visible&&R.push(T,Te,De,te,ct.z,null,z)}}else if(T.isMesh||T.isLine||T.isPoints){let Ue=z.isArrayCamera?qe:ye;if(!T.frustumCulled||T.intersectsFrustum(Ue)){let Te=fe.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ct.copy(Te.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(et)),Array.isArray(De)){let ke=Te.groups;for(let je=0,ut=ke.length;je<ut;je++){let Fe=ke[je],ht=De[Fe.materialIndex];ht&&ht.visible&&R.push(T,Te,ht,te,ct.z,Fe,z)}}else De.visible&&R.push(T,Te,De,te,ct.z,null,z)}}}let Re=T.children;for(let Ue=0,Te=Re.length;Ue<Te;Ue++)Pf(Re[Ue],z,te,Z)}l(Pf,"projectObject");function Mx(T,z,te,Z){let{opaque:K,transmissive:Re,transparent:Ue}=T;A.setupLightsView(te),Ke===!0&&oe.setGlobalState(P.clippingPlanes,te),Z&&_e.viewport(j.copy(Z)),K.length>0&&fu(K,z,te),Re.length>0&&fu(Re,z,te),Ue.length>0&&fu(Ue,z,te),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}l(Mx,"renderScene");function Sx(T,z,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Z.id]===void 0){let Fe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Z.id]=new Bn(1,1,{generateMipmaps:!0,type:Fe?Vn:pn,minFilter:Gn,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Re=A.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||j;Re.setSize(Ue.z*P.transmissionResolutionScale,Ue.w*P.transmissionResolutionScale);let Te=P.getRenderTarget(),De=P.getActiveCubeFace(),ke=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(Q),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Dt&&O.render(te);let je=P.toneMapping;P.toneMapping=Zi;let ut=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),A.setupLightsView(Z),Ke===!0&&oe.setGlobalState(P.clippingPlanes,Z),fu(T,te,Z),Xe.updateMultisampleRenderTarget(Re),Xe.updateRenderTargetMipmap(Re),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ht=0,Gt=z.length;ht<Gt;ht++){let Tt=z[ht],{object:Et,geometry:un,material:Oe,group:yn}=Tt;if(Oe.side===ai&&Et.layers.test(Z.layers)){let xt=Oe.side;Oe.side=An,Oe.needsUpdate=!0,wx(Et,te,Z,un,Oe,yn),Oe.side=xt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(Xe.updateMultisampleRenderTarget(Re),Xe.updateRenderTargetMipmap(Re))}P.setRenderTarget(Te,De,ke),P.setClearColor(Q,pe),ut!==void 0&&(Z.viewport=ut),P.toneMapping=je}l(Sx,"renderTransmissionPass");function fu(T,z,te){let Z=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Re=T.length;K<Re;K++){let Ue=T[K],{object:Te,geometry:De,group:ke}=Ue,je=Ue.material;je.allowOverride===!0&&Z!==null&&(je=Z),Te.layers.test(te.layers)&&wx(Te,z,te,De,je,ke)}}l(fu,"renderObjects");function wx(T,z,te,Z,K,Re){U!==null&&K.isNodeMaterial&&U.setObject(T,K),T.onBeforeRender(P,z,te,Z,K,Re),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(P,z,te,Z,T,Re),K.transparent===!0&&K.side===ai&&K.forceSinglePass===!1?(K.side=An,K.needsUpdate=!0,P.renderBufferDirect(te,z,Z,K,T,Re),K.side=ds,K.needsUpdate=!0,P.renderBufferDirect(te,z,Z,K,T,Re),K.side=ai):P.renderBufferDirect(te,z,Z,K,T,Re),T.onAfterRender(P,z,te,Z,K,Re)}l(wx,"renderObject");function Ex(T){let z=0;for(let te of T)te.texture!==null&&z++;return z}l(Ex,"countLightProbeGrids");function hl(T,z,te){z.isScene!==!0&&(z=wt);let Z=ze.get(T),K=A.state.lights,Re=A.state.shadowsArray,Ue=K.state.version,Te=ae.getParameters(T,K.state,Re,z,te,A.state.lightProbeGridArray),De=ae.getProgramCacheKey(Te),ke=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;let je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=L.get(T.envMap||Z.environment,je),Z.envMapRotation=Z.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",_t),ke=new Map,Z.programs=ke,Z.programVariants=new Map);let ut=ke.get(De);if(ut!==void 0){if(Z.currentProgram===ut&&Z.lightsStateVersion===Ue)return Tx(T,Te),ut}else Te.uniforms=ae.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,te,Te),T.onBeforeCompile(Te,P),ut=ae.acquireProgram(Te,De),ke.set(De,ut),Z.uniforms=Te.uniforms;let Fe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),Tx(T,Te),Z.needsLights=GM(T),Z.lightsStateVersion=Ue,Z.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.sunLights.value=K.state.sun,Fe.sunLightShadows.value=K.state.sunShadow,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.sunShadowMatrix.value=K.state.sunShadowMatrix,Fe.sunShadowCascade.value=K.state.sunShadowCascade,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=Ex(A.state.lightProbeGridArray),Z.currentProgram=ut,Z.uniformsList=null,ut}l(hl,"getProgram");function BM(T,z,te,Z,K){let Re=ze.get(T),Ue=Re.currentProgram.id+","+Z+","+K,Te=Re.programVariants.get(Ue);return Te===void 0?(Te=hl(T,z,te),Re.programVariants.set(Ue,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=Z,Re.toneMapping=K),Te}l(BM,"getProgramVariant");function Ax(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}l(Ax,"getUniformList");function Tx(T,z){let te=ze.get(T);te.outputColorSpace=z.outputColorSpace,te.batching=z.batching,te.batchingColor=z.batchingColor,te.instancing=z.instancing,te.instancingColor=z.instancingColor,te.instancingMorph=z.instancingMorph,te.skinning=z.skinning,te.morphTargets=z.morphTargets,te.morphNormals=z.morphNormals,te.morphColors=z.morphColors,te.morphTargetsCount=z.morphTargetsCount,te.numClippingPlanes=z.numClippingPlanes,te.numIntersection=z.numClipIntersection,te.vertexAlphas=z.vertexAlphas,te.vertexTangents=z.vertexTangents,te.toneMapping=z.toneMapping}l(Tx,"updateCommonMaterialProperties");function kM(T,z,te,Z,K){z.isScene!==!0&&(z=wt),Xe.resetTextureUnits();let Re=z.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,Te=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dt.workingColorSpace,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ke=L.get(Z.envMap||Ue,De),je=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,Gt=!!te.morphAttributes.color,Tt=Zi;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Tt=P.toneMapping);let Et=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,un=Et!==void 0?Et.length:0,Oe=ze.get(Z),yn=A.state.lights;if(Ke===!0&&(lt===!0||T!==$)){let Ot=T===$&&Z.id===H;oe.setState(Z,T,Ot)}let xt=!1,Gs=!1;Z.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==yn.state.version||K.isBatchedMesh&&Oe.batching===!1||!K.isBatchedMesh&&Oe.batching===!0||K.isBatchedMesh&&Oe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Oe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||K.isInstancedMesh&&Oe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Oe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Oe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Oe.instancingMorph===!1&&K.morphTexture!==null||Oe.envMap!==ke||Z.fog===!0&&Oe.fog!==Re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==ut||Oe.morphTargets!==Fe||Oe.morphNormals!==ht||Oe.morphColors!==Gt||Oe.morphTargetsCount!==un||Oe.numLightProbeGrids!==Ex(A.state.lightProbeGridArray)?xt=!0:(Oe.outputColorSpace!==Te||Oe.toneMapping!==Tt)&&(Gs=!0):(xt=!0,Oe.__version=Z.version);let hn=Oe.currentProgram;(xt===!0||Gs===!0)&&(hn=Gs===!0?BM(Z,z,K,Te,Tt):hl(Z,z,K),U&&Z.isNodeMaterial&&U.onUpdateProgram(Z,hn,Oe));let pu=!1,Zr=!1,Vs=!1,mt=hn.getUniforms(),sn=Oe.uniforms;if(_e.useProgram(hn.program)&&(pu=!0,Zr=!0,Vs=!0),Z.id!==H&&(H=Z.id,Zr=!0),pu||$!==T){_e.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),mt.setValue(G,"projectionMatrix",T.projectionMatrix),mt.setValue(G,"viewMatrix",T.matrixWorldInverse);let Kt=mt.map.cameraPosition;Kt!==void 0&&Kt.setValue(G,St.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&mt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Zr=!0,Vs=!0)}if(Oe.needsLights&&(yn.state.sunShadowMap.length>0&&mt.setValue(G,"sunShadowMap",yn.state.sunShadowMap,Xe),yn.state.directionalShadowMap.length>0&&mt.setValue(G,"directionalShadowMap",yn.state.directionalShadowMap,Xe),yn.state.spotShadowMap.length>0&&mt.setValue(G,"spotShadowMap",yn.state.spotShadowMap,Xe),yn.state.pointShadowMap.length>0&&mt.setValue(G,"pointShadowMap",yn.state.pointShadowMap,Xe)),K.isSkinnedMesh){mt.setOptional(G,K,"bindMatrix"),mt.setOptional(G,K,"bindMatrixInverse");let Ot=K.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(G,"boneTexture",Ot.boneTexture,Xe))}K.isBatchedMesh&&(mt.setOptional(G,K,"batchingTexture"),mt.setValue(G,"batchingTexture",K._matricesTexture,Xe),mt.setOptional(G,K,"batchingIdTexture"),mt.setValue(G,"batchingIdTexture",K._indirectTexture,Xe),mt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&mt.setValue(G,"batchingColorTexture",K._colorsTexture,Xe));let _i=te.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&ce.update(K,te,hn),(Zr||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,mt.setValue(G,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(sn.envMapIntensity.value=z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=wT()),Zr){if(mt.setValue(G,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&zM(sn,Vs),Re&&Z.fog===!0&&Me.refreshFogUniforms(sn,Re),Me.refreshMaterialUniforms(sn,Z,ue,de,A.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Ot=M,Kt=0;for(let xr of A.state.lightProbeGridArray)xr.texture!==null&&(Ot.textures[Kt]=xr.texture,Ot.min[Kt]=xr.boundingBox.min,Ot.max[Kt]=xr.boundingBox.max,Ot.resolution[Kt]=xr.resolution,Kt++);for(let xr in Ot)Ot[xr].length=Kt;sn.probesSH.value=Ot.textures,sn.probesMin.value=Ot.min,sn.probesMax.value=Ot.max,sn.probesResolution.value=Ot.resolution}xo.upload(G,Ax(Oe),sn,Xe)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(xo.upload(G,Ax(Oe),sn,Xe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(G,"center",K.center),mt.setValue(G,"modelViewMatrix",K.modelViewMatrix),mt.setValue(G,"normalMatrix",K.normalMatrix),mt.setValue(G,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ot=Z.uniformsGroups;for(let Kt=0,xr=Ot.length;Kt<xr;Kt++){let Rx=Ot[Kt];Ge.update(Rx,hn),Ge.bind(Rx,hn)}}return hn}l(kM,"setProgram");function zM(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}l(zM,"markUniformsLightsNeedsUpdate");function GM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}l(GM,"materialNeedsLights"),this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,z,te){let Z=ze.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ze.get(T.texture).__webglTexture=z,ze.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let te=ze.get(T);te.__webglFramebuffer=z,te.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,te=0){J=T,ne=z,B=te;let Z=null,K=!1,Re=!1;if(T){let Te=ze.get(T);if(Te.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(T.viewport),he.copy(T.scissor),ge=T.scissorTest,_e.viewport(j),_e.scissor(he),_e.setScissorTest(ge),H=-1;return}else if(Te.__webglFramebuffer===void 0)Xe.setupRenderTarget(T);else if(Te.__hasExternalTextures)Xe.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let je=T.depthTexture;if(Te.__boundDepthTexture!==je){if(je!==null&&ze.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(T)}}let De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let ke=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?Z=ke[z][te]:Z=ke[z],K=!0):T.samples>0&&Xe.useMultisampledRTT(T)===!1?Z=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[te]:Z=ke,j.copy(T.viewport),he.copy(T.scissor),ge=T.scissorTest}else j.copy(ie).multiplyScalar(ue).floor(),he.copy(xe).multiplyScalar(ue).floor(),ge=Se;if(te!==0&&(Z=X),_e.bindFramebuffer(G.FRAMEBUFFER,Z)&&_e.drawBuffers(T,Z),_e.viewport(j),_e.scissor(he),_e.setScissorTest(ge),K){let Te=ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,te)}else if(Re){let Te=z;for(let De=0;De<T.textures.length;De++){let ke=ze.get(T.textures[De]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+De,ke.__webglTexture,te,Te)}}else if(T!==null&&te!==0){let Te=ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,te)}H=-1};function Cx(T){let z=ze.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=at.textureFormatReadable(T.format),z.__typeReadable=at.textureTypeReadable(T.type)),z}l(Cx,"getReadableState"),this.readRenderTargetPixels=function(T,z,te,Z,K,Re,Ue,Te=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){_e.bindFramebuffer(G.FRAMEBUFFER,De);try{let ke=T.textures[Te],je=ke.format,ut=ke.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let Fe=Cx(ke);if(Fe.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Z&&te>=0&&te<=T.height-K&&G.readPixels(z,te,Z,K,ve.convert(je),ve.convert(ut),Re)}finally{let ke=J!==null?ze.get(J).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,z,te,Z,K,Re,Ue,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(z>=0&&z<=T.width-Z&&te>=0&&te<=T.height-K){_e.bindFramebuffer(G.FRAMEBUFFER,De);let ke=T.textures[Te],je=ke.format,ut=ke.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let Fe=Cx(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(z,te,Z,K,ve.convert(je),ve.convert(ut),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Gt=J!==null?ze.get(J).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,Gt);let Tt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gb(G,Tt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ht),G.deleteSync(Tt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,te=0){let Z=Math.pow(2,-te),K=Math.floor(T.image.width*Z),Re=Math.floor(T.image.height*Z),Ue=z!==null?z.x:0,Te=z!==null?z.y:0;Xe.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Ue,Te,K,Re),_e.unbindTexture()},this.copyTextureToTexture=function(T,z,te=null,Z=null,K=0,Re=0){let Ue,Te,De,ke,je,ut,Fe,ht,Gt,Tt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(te!==null)Ue=te.max.x-te.min.x,Te=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,je=te.min.y,ut=te.isBox3?te.min.z:0;else{let mt=Math.pow(2,-K);Ue=Math.floor(Tt.width*mt),Te=Math.floor(Tt.height*mt),T.isDataArrayTexture?De=Tt.depth:T.isData3DTexture?De=Math.floor(Tt.depth*mt):De=1,ke=0,je=0,ut=0}Z!==null?(Fe=Z.x,ht=Z.y,Gt=Z.z):(Fe=0,ht=0,Gt=0);let Et=ve.convert(z.format),un=ve.convert(z.type),Oe;z.isData3DTexture?(Xe.setTexture3D(z,0),Oe=G.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Xe.setTexture2DArray(z,0),Oe=G.TEXTURE_2D_ARRAY):(Xe.setTexture2D(z,0),Oe=G.TEXTURE_2D),_e.activeTexture(G.TEXTURE0),_e.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),_e.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_e.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);let yn=_e.getParameter(G.UNPACK_ROW_LENGTH),xt=_e.getParameter(G.UNPACK_IMAGE_HEIGHT),Gs=_e.getParameter(G.UNPACK_SKIP_PIXELS),hn=_e.getParameter(G.UNPACK_SKIP_ROWS),pu=_e.getParameter(G.UNPACK_SKIP_IMAGES);_e.pixelStorei(G.UNPACK_ROW_LENGTH,Tt.width),_e.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt.height),_e.pixelStorei(G.UNPACK_SKIP_PIXELS,ke),_e.pixelStorei(G.UNPACK_SKIP_ROWS,je),_e.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);let Zr=T.isDataArrayTexture||T.isData3DTexture,Vs=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let mt=ze.get(T),sn=ze.get(z),_i=ze.get(mt.__renderTarget),Ot=ze.get(sn.__renderTarget);_e.bindFramebuffer(G.READ_FRAMEBUFFER,_i.__webglFramebuffer),_e.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Kt=0;Kt<De;Kt++)Zr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,K,ut+Kt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.get(z).__webglTexture,Re,Gt+Kt)),G.blitFramebuffer(ke,je,ke+Ue,je+Te,Fe,ht,Fe+Ue,ht+Te,G.DEPTH_BUFFER_BIT,G.NEAREST);_e.bindFramebuffer(G.READ_FRAMEBUFFER,null),_e.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||ze.has(T)){let mt=ze.get(T),sn=ze.get(z);_e.bindFramebuffer(G.READ_FRAMEBUFFER,F),_e.bindFramebuffer(G.DRAW_FRAMEBUFFER,Y);for(let _i=0;_i<De;_i++)Zr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mt.__webglTexture,K,ut+_i):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mt.__webglTexture,K),Vs?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,Re,Gt+_i):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,Re),K!==0?G.blitFramebuffer(ke,je,ke+Ue,je+Te,Fe,ht,Fe+Ue,ht+Te,G.COLOR_BUFFER_BIT,G.NEAREST):Vs?G.copyTexSubImage3D(Oe,Re,Fe,ht,Gt+_i,ke,je,Ue,Te):G.copyTexSubImage2D(Oe,Re,Fe,ht,ke,je,Ue,Te);_e.bindFramebuffer(G.READ_FRAMEBUFFER,null),_e.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Vs?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Oe,Re,Fe,ht,Gt,Ue,Te,De,Et,un,Tt.data):z.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,Re,Fe,ht,Gt,Ue,Te,De,Et,Tt.data):G.texSubImage3D(Oe,Re,Fe,ht,Gt,Ue,Te,De,Et,un,Tt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Fe,ht,Ue,Te,Et,un,Tt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Fe,ht,Tt.width,Tt.height,Et,Tt.data):G.texSubImage2D(G.TEXTURE_2D,Re,Fe,ht,Ue,Te,Et,un,Tt);_e.pixelStorei(G.UNPACK_ROW_LENGTH,yn),_e.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),_e.pixelStorei(G.UNPACK_SKIP_PIXELS,Gs),_e.pixelStorei(G.UNPACK_SKIP_ROWS,hn),_e.pixelStorei(G.UNPACK_SKIP_IMAGES,pu),Re===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&G.generateMipmap(Oe),_e.unbindTexture()},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&Xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xe.setTextureCube(T,0):T.isData3DTexture?Xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xe.setTexture2DArray(T,0):Xe.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){ne=0,B=0,J=null,_e.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};l(v0,"WebGLRenderer");var Td=v0;var C_=l(i=>{let e=Math.min(1,Math.max(0,i))**.5;return 4*e*(1-e)},"swell"),ET=l(i=>1-(1-i)*(1-i),"easeOut"),Id=l(i=>{let e=Math.sin(i*12.9898)*43758.5453;return e-Math.floor(e)},"share"),M0=l((i,e=0)=>{let t=Math.min(1,Math.max(0,i)),n=ET(t);return Array.from({length:7},(r,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*C_(t),shade:0};let a=(s-1)/6*Math.PI*2+(Id(e+s*7)-.5)*.6,o=(.12+Id(e+s*13)*.08)*n,c=.05+(.08+Id(e+s*17)*.1)*n;return{at:[Math.cos(a)*o,c,Math.sin(a)*o],size:(.055+Id(e+s*19)*.03)*C_(t*1.1),shade:s%2===0?0:1}})},"puffAt");var Ln=["grass","plains","sand","rock","snow","forest","mud","tundra"],Qi={shore:-.03,deep:-.15,reach:3},Ld={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},P_={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},R_={Ocean:{relief:{base:Qi.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:P_,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},na=l(i=>i==="Unknown"?Ld:(Object.prototype.hasOwnProperty.call(R_,i)?R_[i]:void 0)??P_,"terrainEntry");var AT=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),I_=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),L_=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),er=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,p,f,m)=>{let x=Math.floor(AT(h,p,t)*16)*2;return(I_[x]??0)*f+(I_[x+1]??0)*m},"slope");return(h,p)=>{let f=h/r,m=p/a,x=Math.floor(f),v=Math.floor(m),g=f-x,b=m-v,y=L_(g),w=L_(b),M=o(x),R=o(x+1),A=c(v),_=c(v+1),S=u(M,A,g,b)+(u(R,A,g-1,b)-u(M,A,g,b))*y,I=u(M,_,g,b-1)+(u(R,_,g-1,b-1)-u(M,_,g,b-1))*y;return Math.max(-1,Math.min(1,(S+(I-S)*w)*1.4))}},"periodicNoise"),Wn=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var fs=128,Ud=.5,Dd=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),TT={grass:{grain:l(({noise:i})=>Wn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>Wn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>Wn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>Wn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>Wn([Dd(i(24,11)),Dd(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>Wn([Dd(i(24,11)),Dd(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>Wn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>Wn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>Wn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},Nd=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),CT=l((i=fs,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*Ln.length),r={u:i,v:i};return Ln.forEach((s,a)=>{let o=TT[s],c=l((w,M)=>er({cell:w*i/fs,period:r,seed:7919*(a+1)+M}),"noise"),u=l((w,M)=>(R,A)=>Math.sin(2*Math.PI*(w*R+M*A)/i),"wave"),h={noise:c,wave:u,texels:l(w=>w*i/fs,"texels")},p=o.grain(h),f=o.bumps(h),m=a*i*i*4,x=new Float32Array(i*i);for(let w=0;w<i;w++)for(let M=0;M<i;M++)x[w*i+M]=f(M+e,w+t);let v=l((w,M)=>x[(M+i)%i*i+(w+i)%i]??0,"height"),g=new Float32Array(i*i),b=0;for(let w=0;w<i;w++)for(let M=0;M<i;M++)g[w*i+M]=p(M+e,w+t),b+=g[w*i+M]??0;let y=b/(i*i);for(let w=0;w<i;w++)for(let M=0;M<i;M++){let R=m+(w*i+M)*4,A=(g[w*i+M]??0)-y,_=(v(M+1,w)-v(M-1,w))/2*(i/fs),S=(v(M,w+1)-v(M,w-1))/2*(i/fs);n[R]=Nd(o.shade*A+.5),n[R+1]=Nd((1-Math.max(-1,Math.min(1,_*o.steep)))/2),n[R+2]=Nd((1-Math.max(-1,Math.min(1,S*o.steep)))/2),n[R+3]=Nd(o.rough+o.roughVaries*A)}}),n},"surfaceTextures"),D_=CT;var Ci={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Ri=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),N_=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Ri(Ci.rockTo)}, ${Ri(Ci.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Ri(Ci.snowAtEquator)} + (${Ri(Ci.snowAtPoles)} - ${Ri(Ci.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Ri(Ci.snowDeepens)}, height) * smoothstep(${Ri(Ci.snowSlips)}, ${Ri(Ci.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Ri(Ci.wetFrom)}, ${Ri(Ci.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Ri(Ci.wetUpTo)}, height));
}
`;var RT=l(i=>[i.u/Math.max(1,Math.round(i.u/Ud)),i.v===null?Ud:i.v/Math.max(1,Math.round(i.v/Ud))],"surfaceTile"),PT=Ln.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),IT=null,LT=l(()=>IT??=D_(),"made"),DT=l((i,e)=>{let t=new $s(LT(),fs,fs,Ln.length),n=new wi({roughness:.92,vertexColors:!0}),[r,s]=RT(i);return t.format=Hn,t.type=pn,t.wrapS=Hi,t.wrapT=Hi,t.magFilter=Xt,t.minFilter=Gn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=Ti,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new He(r,s)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Be(na("Mountains").colour)},a.uniforms.snowColour={value:new Be(na("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${N_}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${PT}
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
  surface = mix(surface, surface${Ln.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${Ln.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),U_=DT;function O_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Bt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let p=i[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;s[x]===void 0&&(s[x]=[]),s[x].push(p.attributes[x]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[x].length!==i[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(p.morphAttributes[x]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(let h in s){let p=F_(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let v=0;v<a[h].length;++v)m.push(a[h][v][f]);let x=F_(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}l(O_,"mergeGeometries");function F_(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let f=0,m=h.count;f<m;f++)for(let x=0;x<t;x++){let v=h.getComponent(f,x);o.setComponent(f+p,x,v)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(F_,"mergeAttributes");var ia={radius:.42,thickness:.025},S0=ia.radius-ia.thickness,Fd=.07,ic=.04,A0=.25,Lt=.004,w0=.08,nc=.012,Bd=.045,kd=.02,H_=625341585,NT=.18,UT=30,FT=5,OT=l(i=>Math.min(UT,FT+Math.max(0,i-1)*2),"lotsFor"),BT=l(i=>Math.floor(Math.max(0,i-1)/6),"tierFor"),T0=l(i=>{let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0},"citySeed"),W_=l((i,e,t,n=[])=>({seed:i,lots:OT(e),tier:BT(e),ways:[...t],sea:[...n]}),"planFor"),kT=l((i,e)=>{let[t,n]=i.centre,r=e.map(c=>{let[u,h]=i.toward(c),p=Math.hypot(u-t,h-n);return{offset:c,du:p===0?0:(u-t)/p,dv:p===0?0:(h-n)/p}}),s=r.reduce((c,{du:u})=>c+u,0),a=r.reduce((c,{dv:u})=>c+u,0),o=l(({du:c,dv:u})=>c*s+u*a,"most");return r.length===0?[]:[r.reduce((c,u)=>o(u)>o(c)?u:c).offset]},"quayOf"),Dn=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),rc=l((i,e,t)=>{let n=t[0]-e[0],r=t[1]-e[1],s=n*n+r*r;return s===0?0:((i[0]-e[0])*n+(i[1]-e[1])*r)/s},"along"),yo=l(({at:[i,e],width:t,facing:n})=>{let r=t/2,s=[Math.cos(n)*r,-Math.sin(n)*r],a=[Math.sin(n)*r,Math.cos(n)*r];return[[i-s[0]-a[0],e-s[1]-a[1]],[i+s[0]-a[0],e+s[1]-a[1]],[i+s[0]+a[0],e+s[1]+a[1]],[i-s[0]+a[0],e-s[1]+a[1]]]},"footprintOf"),zT=l(([i,e])=>{let t=Math.hypot(e[0]-i[0],e[1]-i[1]),n=-(e[1]-i[1])/t*(ic/2),r=(e[0]-i[0])/t*(ic/2);return[[i[0]+n,i[1]+r],[e[0]+n,e[1]+r],[e[0]-n,e[1]-r],[i[0]-n,i[1]-r]]},"stripOf"),zd=l((i,e,t)=>[i,e].some(n=>n.some((r,s)=>{let a=n[(s+1)%n.length],o=Math.hypot(a[0]-r[0],a[1]-r[1]),c=-(a[1]-r[1])/o,u=(a[0]-r[0])/o,h=l(m=>m.map(([x,v])=>x*c+v*u),"onto"),p=h(i),f=h(e);return Math.min(...f)-Math.max(...p)>=t||Math.min(...p)-Math.max(...f)>=t})),"apart"),_o=l((i,e)=>{let[t,n,,r]=e,s=rc(i,t,n),a=rc(i,t,r),o=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-s,s-1),Math.max(0,-a,a-1))*o},"fromFootprint"),X_=l((i,{seed:e,lots:t,tier:n,ways:r,sea:s},a)=>{let[o,c]=i.centre,u=[...r,...kT(i,s)].flatMap(g=>{let[b,y]=i.toward(g),w=[(o+b)/2,(c+y)/2],M=w[0]-o,R=w[1]-c,A=Math.hypot(M,R);return A===0?[]:[[[o+M/A*Fd,c+R/A*Fd],w]]}),h=u.map(zT),p=l((g,b)=>{let y=u.map(([w,M])=>{let R=rc(g,w,M),A=[w[0]+(M[0]-w[0])*R,w[1]+(M[1]-w[1])*R];return{t:R,near:A,off:Math.hypot(A[0]-g[0],A[1]-g[1])}}).filter(({t:w,off:M})=>w>=0&&w<=1&&M<=ic/2+b+Lt&&M>0).sort((w,M)=>w.off-M.off)[0];return y===void 0?Math.atan2(o-g[0],c-g[1]):Math.atan2(y.near[0]-g[0],y.near[1]-g[1])},"facingAt"),f=Math.ceil(S0/w0),m=[];for(let g=-f;g<=f;g++)for(let b=-f;b<=f;b++){let y=(g+f)*(f*2+1)+(b+f),w=[o+b*w0+(Dn(e,y*4)-.5)*2*nc,c+g*w0+(Dn(e,y*4+1)-.5)*2*nc],M=Math.hypot(w[0]-o,w[1]-c),R=Bd+Dn(e,y*4+2)*kd;M>S0||!i.owns(w[0],w[1])||m.push({at:w,width:R,facing:p(w,R),roof:Dn(e^H_,y),storeys:1+(M<NT?n:0)+(Dn(e,y*4+3)<.2?1:0),order:M+Dn(e,y*4+3)*.03})}m.sort((g,b)=>g.order-b.order);let x=[],v=[];return m.forEach(({at:g,width:b,facing:y,storeys:w,roof:M})=>{let R=yo({at:g,width:b,facing:y});R.every(([A,_])=>Math.hypot(A-o,_-c)<=S0-Lt)&&_o([o,c],R)>=Fd+Lt&&_o(a,R)>=A0+Lt&&h.every(A=>zd(R,A,Lt))&&v.every(A=>zd(R,A,Lt))&&(x.push({at:g,width:b,facing:y,storeys:w,roof:M}),v.push(R))}),{plaza:{at:[o,c],radius:Fd},streets:u,lots:x.slice(0,t)}},"sprawl"),B_=4,GT=.62,VT=.05,q_=12,E0=.085,Od=.055,HT=.13,k_=32,WT=1821285621,Y_=l(i=>i<B_?0:Math.min(q_,i-B_+1),"suburbStepsFor"),XT=l(i=>i<=0?0:GT+(Math.min(i,q_)-1)*VT,"suburbReach"),qT=l(i=>1-.55*Math.min(1,Math.max(0,(i-.5)/.7)),"builtShare"),z_=l(([i,e],t)=>{let n=Math.hypot(e[0]-i[0],e[1]-i[1]),r=-(e[1]-i[1])/n*t,s=(e[0]-i[0])/n*t;return[[i[0]+r,i[1]+s],[e[0]+r,e[1]+s],[e[0]-r,e[1]-s],[i[0]-r,i[1]-s]]},"strip"),G_=l(i=>i.slice(1).map((e,t)=>[i[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),V_=l((i,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...i.map(([n])=>n))>=t||Math.min(...i.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...i.map(([,n])=>n))>=t||Math.min(...i.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),$_=l((i,{seed:e,steps:t,city:n},r)=>{let s=XT(t);if(s===0)return[];let[a,o]=i.centre,c=i.toward(n),u=e^Math.imul(WT,(n[0]+7)*31+(n[1]+7)),h=r.runs.flatMap(({points:A})=>G_(A)),p=[...h.map(A=>({line:A,wide:Od})),...r.lanes.filter(([A,_])=>Math.hypot(_[0]-A[0],_[1]-A[1])>0).map(A=>({line:A,wide:HT}))],f=[...p.map(({line:A,wide:_})=>z_(A,_)),...r.lines.filter(([A,_])=>Math.hypot(_[0]-A[0],_[1]-A[1])>0).map(A=>z_(A,Od))],m=l((A,_)=>{let S=p.map(({line:[I,P],wide:N})=>{let U=rc(A,I,P),X=[I[0]+(P[0]-I[0])*U,I[1]+(P[1]-I[1])*U];return{t:U,near:X,off:Math.hypot(X[0]-A[0],X[1]-A[1]),wide:N}}).filter(({t:I,off:P,wide:N})=>I>=0&&I<=1&&P<=N+_+Lt&&P>0).sort((I,P)=>I.off-P.off)[0];return S===void 0?Math.atan2(c[0]-A[0],c[1]-A[1]):Math.atan2(S.near[0]-A[0],S.near[1]-A[1])},"facingAt"),x=Math.ceil(.75/E0),v=[],g=l(A=>Bd+Dn(u,A*5+2)*kd,"widthOf"),b=l(A=>Math.min(1/0,...h.map(([_,S])=>{let I=Math.max(0,Math.min(1,rc(A,_,S)));return Math.hypot(_[0]+(S[0]-_[0])*I-A[0],_[1]+(S[1]-_[1])*I-A[1])})),"fromRuns"),y=l((A,_,S)=>{let I=Math.hypot(_[0]-c[0],_[1]-c[1]),P=I+Dn(u,A*5+3)*.03,N=g(A);P<=s&&Dn(u,A*5+4)<qT(I)&&i.owns(_[0],_[1])&&(!S||b(_)>=Od+Lt*2+Bd+kd)&&v.push({at:_,width:N,facing:m(_,N),roof:Dn(u^H_,A),storeys:1+(Dn(u,A*5+3)<.15?1:0),order:P})},"consider");for(let A=-x;A<=x;A++)for(let _=-x;_<=x;_++){let S=(A+x)*(x*2+1)+(_+x);y(S,[a+_*E0+(Dn(u,S*5)-.5)*2*nc,o+A*E0+(Dn(u,S*5+1)-.5)*2*nc],!0)}r.runs.forEach(({key:A,points:_})=>{let S=G_(_).map(([N,U])=>({from:N,to:U,length:Math.hypot(U[0]-N[0],U[1]-N[1])})),I=S.reduce((N,U)=>N+U.length,0),P=Math.min(k_,Math.floor(I/(Bd+kd+Lt*2)));for(let N=0;N<P;N++)[1,-1].forEach((U,X)=>{let F=(x*2+1)**2+(A*k_+N)*2+X,Y=Od+g(F)/2+Lt*2,ne=(N+.5)/P*I+(Dn(u,F*5)-.5)*nc;for(let[B,{from:J,to:H,length:$}]of S.entries()){if(ne<=$||B===S.length-1){let j=(H[0]-J[0])/$,he=(H[1]-J[1])/$;y(F,[J[0]+j*ne-he*Y*U,J[1]+he*ne+j*Y*U],!1);break}ne-=$}})}),v.sort((A,_)=>A.order-_.order);let w=l(([A,_],S)=>(Math.hypot(A-S[0],_-S[1])**2-Math.hypot(A-c[0],_-c[1])**2)/(2*Math.hypot(S[0]-c[0],S[1]-c[1])),"nearer"),M=[],R=[];return v.forEach(({at:A,width:_,facing:S,storeys:I,roof:P})=>{let N=yo({at:A,width:_,facing:S});yo({at:A,width:_+Lt*2,facing:S}).every(([U,X])=>i.owns(U,X))&&r.others.every(U=>N.every(X=>w(X,U)>=Lt/2))&&_o(c,N)>=ia.radius+ia.thickness+Lt&&r.stands.every(U=>_o(U,N)>=A0+Lt)&&_o(i.centre,N)>=A0+Lt&&[A,...N].every(([U,X])=>(r.ground?.(U,X)??0)>=0)&&r.taken.every(([U,X,F])=>_o([U,X],N)>=F+Lt)&&f.every(U=>V_(N,U,Lt)||zd(N,U,Lt))&&R.every(U=>V_(N,U,Lt)||zd(N,U,Lt))&&(M.push({at:A,width:_,facing:S,storeys:I,roof:P}),R.push(N))}),M},"suburb");var Z_="#c79a72",YT="#5a4a3a";var gn="#7a5532",P0="#5f6266",J_="#8a8f96",Pi="#5d6447",C0="#e8e0cc",Q_="#6e4b2f",ra="#8a8580",K_="#5b3e27",vo="#7d858c",$T=new W(0,1,0),Ie=new qi(1,1,1),Qt=new Yi(.5,.5,1,10),sa=new Lr(.5,1,10),Mo=new ls(.5,10,8),L0=class L0{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(L0,"Parts");var en=L0,ZT=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:Mo,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:sa,colour:P0,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ie,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Qt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Mo,colour:Pi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),JT=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Qt,colour:gn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Qt,colour:gn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:sa,colour:P0,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Qt,colour:gn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:sa,colour:J_,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ie,colour:J_,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ie,colour:gn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Qt,colour:gn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ie,colour:i==="rifle"?"#3a3a3a":gn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ie,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ie,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Qt,colour:gn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Qt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),KT={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},I0=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new en,a=r===void 0?void 0:KT[r],o=a?.coat??(i==="modern"?Pi:t[0]),c=a?.legs??(i==="ancient"?Z_:i==="modern"?Pi:YT);return n&&(s.add({shape:Ie,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ie,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ie,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ie,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ie,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ie,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Mo,colour:Z_,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:Mo,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:Mo,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):ZT(i,t,s),r==="parachute"&&s.add({shape:Ie,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),JT(e,i,t,s),s},"person"),j_=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),R0=l((i=Q_)=>new en().add({shape:Ie,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ie,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ie,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ie,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),jT=l((i,e,t)=>new en().addAll(R0(),[0,0,0]).add({shape:Ie,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(I0(i,e,t,{legs:!1}),[0,.04,0]),"rider"),QT=l(i=>new en().add({shape:Ie,colour:ra,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ie,colour:ra,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Qt,colour:ra,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ie,colour:ra,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:ra,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:ra,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:ra,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ie,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),xn=l((i,e=.05)=>({shape:Qt,colour:gn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),eC=l((i,e,t)=>{if(e==="chariot")return new en().addAll(R0(),[0,0,.09]).add({shape:Ie,colour:gn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ie,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(xn([-.042,.035,-.045],.065)).add(xn([.042,.035,-.045],.065)).addAll(I0(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new en().addAll(R0(t==="ancient"?"#8a7a64":Q_),[0,0,.1]).add({shape:Ie,colour:gn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ie,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(xn([-.042,.03,-.03])).add(xn([.042,.03,-.03])).add(xn([-.042,.03,-.09])).add(xn([.042,.03,-.09]));return e==="wagon"?n.add({shape:Qt,colour:C0,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:C0,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ie,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ie,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),tC=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new en().add({shape:Ie,colour:gn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ie,colour:gn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ie,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(xn([-.045,.03,.04],.045)).add(xn([.045,.03,.04],.045)).add(xn([-.045,.03,-.04],.045)).add(xn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?Pi:P0;return new en().add({shape:Qt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ie,colour:i==="modern"?Pi:gn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ie,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(xn([-.04,.035,0],.07)).add(xn([.04,.035,0],.07))},"siege"),nC=l((i,e,t)=>{if(i==="industrial")return new en().add({shape:Ie,colour:vo,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ie,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(xn([-.045,.025,.06],.045)).add(xn([.045,.025,.06],.045)).add(xn([-.045,.025,-.06],.045)).add(xn([.045,.025,-.06],.045));let n=new en().add({shape:Ie,colour:Pi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ie,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ie,colour:Pi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Qt,colour:Pi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Pi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),iC=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new en;switch(i.hull){case"oars":case"sail":{s.add({shape:Ie,colour:K_,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:sa,colour:K_,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:Qt,colour:gn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ie,colour:o===0?e[1]:C0,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ie,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ie,colour:gn,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ie,colour:gn,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:Qt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ie,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ie,colour:vo,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ie,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ie,colour:vo,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ie,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ie,colour:i.era==="industrial"?"#4a4a48":vo,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:sa,colour:i.era==="industrial"?"#4a4a48":vo,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:vo,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:Qt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ie,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ie,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Qt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ie,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),rC=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new en().add({shape:Qt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:sa,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ie,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ie,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ie,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),sC=l(i=>new en().add({shape:Mo,colour:Pi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ie,colour:Pi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ie,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),aC=l((i,e)=>{let t=e?1.4:1;return new en().add({shape:Qt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:sa,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),ey=l((i,e)=>{switch(i.shape){case"foot":{let t=new en;return j_(i.squad).forEach(([n,r],s)=>t.addAll(I0(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new en;return j_(i.squad).forEach(([n,r])=>t.addAll(jT(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return QT(e);case"cart":return eC(e,i.cart??"wagon",i.era);case"siege":return tC(i.era,e,i.large===!0);case"vehicle":return nC(i.era,e,i.large===!0);case"ship":return iC(i,e);case"aircraft":return rC(i,e);case"helicopter":return sC(e);default:return aC(e,i.large===!0)}},"figureParts"),oC=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new yt().compose(new W(...i),new Sn().setFromAxisAngle($T,n).multiply(new Sn().setFromEuler(new kn(...t))),new W(...e)),"partMatrix"),Gd=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Be(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(oC(n)),a.setAttribute("color",new Mt(u,3)),a}),t=O_(e)??new Bt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),ty=l((i,e)=>Gd(ey(i,e).parts),"figureGeometry"),lC=new Yi(.19,.2,1,28),cC=new Dr(.22,.014,4,32),uC=new Dr(1,.03,3,40),hC="#dfe9ea",dC=[[.11,.2],[.16,.27]],ny=l((i,e,{fortified:t,scale:n,stand:r,part:s="whole",ripples:a=!1})=>{let o=i.shape==="ship",c=o?0:r,u=s==="base"?[]:ey(i,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+c,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return Gd(u);if(o||u.push({shape:lC,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),o&&a&&s==="whole"){let h=(i.large?1.25:1)*n;dC.forEach(([p,f])=>u.push({shape:uC,colour:hC,at:[0,.006,0],size:[p*h,f*h,.15],turn:[Math.PI/2,0,0]}))}return t&&u.push({shape:cC,colour:"#b5ab98",at:[0,c+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Gd(u)},"unitBodyGeometry"),fC=new Dr(ia.radius,ia.thickness,6,24),iy=l(()=>Gd([{shape:fC,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");var ln=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),sc=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Xn=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),ac=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),D0=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),ry={Warrior:ln("ancient","club"),Spearman:ln("ancient","spear"),Swordman:ln("ancient","sword"),Archer:ln("ancient","bow"),Horseman:sc("ancient","spear"),Chariot:D0("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Xn("ancient","oars"),Settlers:D0("ancient","wagon"),Diplomat:ln("ancient","case",1),Caravan:D0("ancient","goods"),Explorer:ln("ancient","pack",1),Pikeman:ln("medieval","pike"),Knight:sc("medieval","lance"),Crusader:sc("medieval","sword"),Fanatic:ln("medieval","sword"),Sail:Xn("medieval","sail"),Musketman:ln("renaissance","musket"),Dragoon:sc("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Xn("renaissance","sail",!0,1),Galleon:Xn("renaissance","sail",!0),Rifleman:ln("industrial","rifle"),AlpineTrooper:{...ln("industrial","rifle"),dress:"snow"},Partisan:{...ln("industrial","rifle"),dress:"irregular"},Cavalry:sc("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:ln("industrial","none",2),Ironclad:Xn("industrial","steam",!1,1),Transport:Xn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:ln("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:ln("modern","rifle"),Paratrooper:{...ln("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Xn("modern","steam",!1,1),Cruiser:Xn("modern","steam",!0,2),MissileCruiser:Xn("modern","steam",!0,1,!0),Battleship:Xn("modern","steam",!0,3),Submarine:Xn("modern","submarine"),Carrier:Xn("modern","carrier",!0),Fighter:ac("modern"),StealthFighter:ac("modern",!1,!0),Bomber:ac("modern",!0),StealthBomber:ac("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},oc=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(ry,i)?ry[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Xn("industrial","steam"):e.includes("Air")?ac("modern"):ln("ancient","spear")),"unitLook"),Vd=l(i=>i.shape==="aircraft"||i.shape==="helicopter"||i.shape==="missile","airborne");var pC=.03,ly="#fff4b0",mC=.04,Hd=.004,N0=.018,sy=.01,ay=.022,oy=.03,cy=.03,Wd=.002,gC="#4caf50",xC="#e0b030",bC="#d04030",_C=256,aa,Ii,oa,la,ca,ua,Ur,wo,B0=class B0{constructor(){V(this,aa,new Map);V(this,Ii,new Map);V(this,oa,new Map);V(this,la,new Map);V(this,ca,null);V(this,ua,new Map);V(this,Ur,null);V(this,wo,0);this.figureMaterial=new wi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Dr(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=d(this,aa).get(n);return r===void 0&&(r=new wi({color:new Be(e),roughness:.75,metalness:.05,...t?{emissive:new Be(e),emissiveIntensity:.6}:{}}),d(this,aa).set(n,r)),r}body(e,t,n,r=1,s="whole",a=!1){let o=a&&e.shape==="ship"&&s==="whole",c=JSON.stringify([e,t,n,r,s,o]),u=d(this,la).get(c);return u===void 0&&(u=ny(e,t,{fortified:n,scale:r,stand:pC,part:s,ripples:o}),d(this,la).set(c,u)),u}walls(){return d(this,ca)??k(this,ca,iy()),d(this,ca)}figure(e,t){let n=JSON.stringify([e,t]),r=d(this,oa).get(n);return r===void 0&&(r=ty(e,t),d(this,oa).set(n,r)),r}plain(e){let t=d(this,ua).get(e);return t===void 0&&(t=new ss({color:new Be(e),sizeAttenuation:!1,depthTest:!1}),d(this,ua).set(e,t)),t}pointer(){if(d(this,Ur)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=ly,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new os(e);n.colorSpace=Ht,k(this,Ur,new ss({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return d(this,Ur)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=d(this,Ii).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new os(a);h.colorSpace=Ht,s=new ss({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),d(this,Ii).set(r,s)}return s}get sweepDue(){return d(this,Ii).size>Math.max(_C,d(this,wo)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof vt&&t.add(r.geometry),r instanceof Rr&&t.add(r.material)});d(this,Ii).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),d(this,Ii).delete(r))}),k(this,wo,d(this,Ii).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),d(this,oa).forEach(e=>e.dispose()),d(this,la).forEach(e=>e.dispose()),d(this,ca)?.dispose(),k(this,ca,null),d(this,la).clear(),this.figureMaterial.dispose(),d(this,ua).forEach(e=>e.dispose()),d(this,Ur)?.map?.dispose(),d(this,Ur)?.dispose(),d(this,ua).clear(),k(this,Ur,null),d(this,aa).forEach(e=>e.dispose()),d(this,Ii).forEach(e=>{e.map?.dispose(),e.dispose()}),d(this,aa).clear(),d(this,Ii).clear(),d(this,oa).clear(),k(this,wo,0)}};aa=new WeakMap,Ii=new WeakMap,oa=new WeakMap,la=new WeakMap,ca=new WeakMap,ua=new WeakMap,Ur=new WeakMap,wo=new WeakMap,l(B0,"MarkerKit");var qd=B0,uy=l(i=>{let{r:e,g:t,b:n}=new Be(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),So=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),yC=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),vC=3,MC=4,lc=l((i,e,t,n,r=vC)=>{let s=new Rr(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),hy=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return lc(i,e*r,e,t)},"label"),Xd=[0,.36,0],SC=l((i,e)=>{let t=new an;return e.walled&&t.add(new vt(i.walls(),i.figureMaterial)),e.unnamed!==!0&&t.add(So(hy(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],uy(e.colours[0])),cy,0),...Xd)),t},"drawCity"),wC=l((i,e,t=null,n=!1,r=t===null)=>{let s=new an,{ring:a}=i.geometries,o=oc(e.type,e.kinds),c=n&&Vd(o),u=i.body(o,e.colours,e.fortified,e.size,c?"figures":"whole",r),h=c?new an:s,p=u.boundingBox?.max.y??.3,f=t?.at??[0,p+mC,0],m=e.health!==null,x=(t?.over??0)+(m?Hd+Wd:0),v=x+sy+Wd,g=yC(e),b=v+(g===""?0:ay+Wd),y=new vt(u,i.figureMaterial);if(y.name=F0,y.rotation.y=e.facing,h.add(y),c&&(h.name=O0,s.add(new vt(i.body(o,e.colours,e.fortified,e.size,"base"),i.figureMaterial),h)),e.health!==null){let w=Math.max(0,Math.min(1,e.health));if(h.add(So(lc(i.plain("#202020"),N0,Hd,t?.over??0),...f)),w>0){let M=lc(i.plain(w>.5?gC:w>.25?xC:bC),N0*w,Hd*.6,(t?.over??0)+Hd*.2);M.center.x=1/(2*w),h.add(So(M,...f))}}if(h.add(So(lc(i.plain(e.colours[0]),N0,sy,x),...f)),g!==""&&h.add(So(hy(i.label(g,e.colours[0],uy(e.colours[0])),ay,v),...f)),e.active){let w=new vt(a,i.material(ly,!0));w.rotation.x=Math.PI/2,w.position.y=.01,s.add(w),h.add(So(lc(i.pointer(),oy,oy,b,MC),...f))}return s},"drawUnit"),U0="unit",F0="figures",O0="aloft",ha=.26,dy=l((i,e,t=!1)=>{let n=new an;if(e.city!==null&&n.add(SC(i,e.city)),e.unit!==null){let r=e.inCity??e.city!==null?ha:0,s=wC(i,e.unit,e.city===null?null:{at:[Xd[0],Xd[1],Xd[2]-r],over:cy+Wd},t,r===0);s.name=U0,s.position.z=r,n.add(s)}return n},"drawMarker"),cc=new WeakMap,Yd=new WeakMap,EC=.5,uc=l((i,e,t)=>{i.forEach(n=>n.traverse(r=>{if(!(r instanceof vt||r instanceof Rr))return;let s=cc.get(r)??r.material,a=t.get(s);a===void 0&&(a=s.clone(),r instanceof Rr?a.transparent=!0:a.alphaHash=!0,t.set(s,a)),cc.has(r)||(cc.set(r,s),Yd.set(r,r.castShadow)),r.material=a,r.castShadow=(Yd.get(r)??!1)&&e>=EC})),t.forEach((n,r)=>{n.opacity=r.opacity*e})},"fade"),fy=l((i,e)=>{i.forEach(t=>t.traverse(n=>{let r=cc.get(n);r===void 0||!(n instanceof vt||n instanceof Rr)||(n.material=r,n.castShadow=Yd.get(n)??n.castShadow,cc.delete(n),Yd.delete(n))})),Eo(e)},"unfaded"),Eo=l(i=>{i.forEach(e=>e.dispose()),i.clear()},"unfade");var ps=l(i=>i*Math.PI/180,"degrees"),AC=ps(25),TC=ps(80),CC=5,RC=90,PC=1.12,hc=ps(40),z0=ps(45),IC={above:{yaw:0,pitch:ps(80)},classic:{yaw:0,pitch:ps(55)},isometric:{yaw:ps(45),pitch:ps(30)}};var py=l(i=>({focus:i,...IC.classic,distance:24}),"defaultOrbit"),k0=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),my=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),da=l(i=>({...i,yaw:my(i.yaw),pitch:k0(i.pitch,AC,TC),distance:k0(i.distance,CC,RC)}),"clampOrbit"),To=l((i,e)=>da({...i,distance:i.distance/PC**e}),"zoomed"),$d=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),Co=l((i,e)=>{let{forward:t}=$d(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),Ro=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=$d(i),u=Co(i,e),h=[t-u[0],n-u[1],r-u[2]],p=l(x=>(h[0]??0)*x[0]+(h[1]??0)*x[1]+(h[2]??0)*x[2],"dot"),f=p(a),m=Math.tan(hc/2);return f<=1e-6?null:[p(o)/(f*m*s),p(c)/(f*m)]},"toScreen"),G0=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=$d(i),c=Math.tan(hc/2);return{from:Co(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),Ao=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=G0(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),gy=l((i,e,t,n,r)=>{let s=Ao(i,e,t,r),a=Ao(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(hc/2),{right:h}=$d(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(p[0]??0))*u,i.focus[1]+(o*h[2]+c*(p[1]??0))*u]}},"panned"),xy=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:my(i.yaw),focus:[n(r,e.u),e.v===null?k0(s,0,t):n(s,e.v)]}},"settled"),by=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),fa=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var LC=new Be("#3f8a8c"),DC=new Be("#173a52"),NC=new Be("#e8eeee"),_y=`
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
`,UC=`
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
`,ms,oi,qn,H0=class H0{constructor(e,t){V(this,ms);V(this,oi);V(this,qn);k(this,ms,e),k(this,oi,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<d(this,oi).length;r+=2)d(this,oi)[r]=Xi.toHalfFloat(0),d(this,oi)[r+1]=Xi.toHalfFloat(1);k(this,qn,new uo(d(this,oi),e.columns,e.rows,Ji,Vn)),d(this,qn).wrapS=Hi,d(this,qn).wrapT=e.wrapsV?Hi:ri,d(this,qn).magFilter=Xt,d(this,qn).minFilter=Xt,d(this,qn).needsUpdate=!0;let n=new En({uniforms:ta.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},shallow:{value:LC.clone()},deep:{value:DC.clone()},foam:{value:NC.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Be("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:_y,fragmentShader:UC,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=d(this,qn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new vt(new $i(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=d(this,ms),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),p=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&p>=0&&p<n){let f=(p*t+h)*2;d(this,oi)[f]=Xi.toHalfFloat(e.positions[u*3+1]??0),d(this,oi)[f+1]=Xi.toHalfFloat(e.unseen[u]??0)}}d(this,qn).needsUpdate=!0}height(e,t){return Xi.fromHalfFloat(d(this,oi)[(t*d(this,ms).columns+e)*2]??0)}unseen(e,t){return Xi.fromHalfFloat(d(this,oi)[(t*d(this,ms).columns+e)*2+1]??0)>.5}texture(){return d(this,qn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,ms).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),d(this,qn).dispose()}};ms=new WeakMap,oi=new WeakMap,qn=new WeakMap,l(H0,"Water");var V0=H0,yy=V0,FC=`
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
`,OC=.18,dc,W0=class W0{constructor(e,t){V(this,dc);k(this,dc,t.wrapsV);let n=new En({uniforms:ta.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},extent:{value:new He},wrapsV:{value:!1}}]),vertexShader:_y,fragmentShader:FC,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new vt(new $i(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,dc)&&e}follow(e,t,n){this.mesh.position.set(e,OC,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};dc=new WeakMap,l(W0,"Clouds");var Zd=W0;var BC=.6,kC=.05,pa=64,vy=.125,zC=`
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
`,GC=`
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
`,My=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),VC=l((i,e)=>{let[t]=My(i.length),n=pa*(1-2*vy);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*pa+(pa-c)/2,y:Math.floor(s/t)*pa+(pa-u)/2,width:c,height:u}]})},"atlasPlaces"),HC=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),gs,Yn,fc,ma,pc,Jd,Po,Sy,wy,q0=class q0{constructor(e){V(this,Po);V(this,gs,null);V(this,Yn,null);V(this,fc,"");V(this,ma);V(this,pc,new WeakMap);V(this,Jd,1);k(this,ma,e),this.material=new En({uniforms:ta.merge([Pe.fog,{atlas:{value:null},lean:{value:1},lift:{value:kC},bias:{value:BC},cells:{value:[1,1]},pad:{value:vy}}]),vertexShader:zC,fragmentShader:GC,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(d(this,gs)?.dispose(),k(this,gs,null),e===null||e.count===0)return null;C(this,Po,wy).call(this,e);let t=new Vl,n=new $i(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Pr(e.anchors,3)),t.setAttribute("slot",new Pr(e.slots,2)),t.setAttribute("size",new Pr(e.sizes,1)),t.setAttribute("cell",new Pr(e.cells,1)),t.instanceCount=e.count,k(this,gs,t),t}make(){let e=new vt(d(this,gs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){d(this,gs)?.dispose(),d(this,Yn)?.dispose(),this.material.dispose()}};gs=new WeakMap,Yn=new WeakMap,fc=new WeakMap,ma=new WeakMap,pc=new WeakMap,Jd=new WeakMap,Po=new WeakSet,Sy=l(function(e){if(e===null)return 0;let t=d(this,pc).get(e);return t===void 0&&(t=yi(this,Jd)._++,d(this,pc).set(e,t)),t},"#imageId"),wy=l(function(e){let t=e.names.map(o=>`${o}:${C(this,Po,Sy).call(this,d(this,ma).call(this,o))}`).join(",");if(t===d(this,fc)&&d(this,Yn)!==null)return;let[n,r]=My(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*pa,s.height=r*pa,a!==null&&(a.imageSmoothingEnabled=!1,VC(e.names,o=>{let c=d(this,ma).call(this,o);return c===null?null:HC(c)}).forEach(({_:o,x:c,y:u,width:h,height:p})=>{let f=d(this,ma).call(this,o);f!==null&&a.drawImage(f,c,u,h,p)})),d(this,Yn)?.dispose(),k(this,Yn,new os(s)),d(this,Yn).colorSpace=Ht,d(this,Yn).premultiplyAlpha=!0,d(this,Yn).magFilter=Wt,d(this,Yn).minFilter=Gn,d(this,Yn).generateMipmaps=!0,k(this,fc,t),this.material.uniforms.atlas.value=d(this,Yn),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(q0,"YieldIcons");var X0=q0,Ey=X0;var Y0=10466244,WC=14082796,XC=5984576,qC=16773336,Kd=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),$0=l(i=>Math.min(fa(i.distance).far,i.distance*2.2),"markerSight"),YC=l(i=>[new In(new W(0,0,1),0),new In(new W(0,0,-1),i)],"polesAt"),$C=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),Ay=2048,Ty=Math.hypot(30,40,20),Cy=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new Td({antialias:!0,canvas:i}),s=new Cl,a=new Mn(hc*180/Math.PI,1,.1,400),o=new an,{material:c,detail:u}=U_(e,t.rows*t.spacingV),h=new Gl(qC,2.6),p=new Map,f=new Map,m=new wi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),x=t.rows*t.spacingV,v=YC(x),g=new Map,b=new Map,y=new Map,w=new Ul(1,1),M=l(ee=>new wi({color:new Be(ee),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),R=[M("#d8d5cf"),M("#a9a59d")],A=new Map,_=new co({color:new Be("#dfe8e8"),side:ai}),S=new an,I=new qd,P=new an,N=new Ey(n??(()=>null)),U=new yy(t,new Be(Y0)),X=new Zd(U.texture(),t),F=new Tl(Y0,30,110),Y=[[0,0]],ne="0,0",B=[[0,0]],J="0,0",H=!1,$=null;r.outputColorSpace=Ht,r.localClippingEnabled=!0,r.toneMapping=Wl,r.shadowMap.enabled=!0,r.shadowMap.type=Fh,s.background=new Be(Y0),s.fog=F,s.add(new Bl(WC,XC,.9)),s.add(o),s.add(S),s.add(P),s.add(U.mesh),s.add(X.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(Ay,Ay),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let j=l((ee,me,ie=Y)=>ie.map(([xe,Se])=>{let ye=ee.make();return ye.position.set(ee.at[0]+xe,ee.at[1],ee.at[2]+Se),me.add(ye),ye}),"copiesOf"),he=l(ee=>j(ee,o,$C(Y,ee.span,x,e.v,H)),"overlayCopiesOf"),ge=l(ee=>ee.flatMap(me=>{let ie=me.getObjectByName(U0);return ie===void 0?[]:[ie]}),"unitParts"),Q=l(ee=>ee.drawn.forEach(me=>{let ie=me.getObjectByName(F0),xe=me.getObjectByName(O0);ie!==void 0&&(ie.rotation.y=ee.facing),xe!==void 0&&(xe.position.y=ee.aloft)}),"pose"),pe=l(ee=>{let me=M0(ee.through,ee.seed);ee.drawn.forEach(ie=>ie.children.forEach((xe,Se)=>{let ye=me[Se];if(ye===void 0){xe.visible=!1;return}xe.position.set(...ye.at),xe.scale.setScalar(Math.max(ye.size,1e-4)),xe.visible=ye.size>0}))},"shapePuff"),le=l((ee,me=!1)=>{let ie=dy(I,ee,me);return ie.traverse(xe=>{xe.castShadow=xe instanceof vt}),ie},"markerOf"),de=l(()=>{I.sweepDue&&I.sweep([...g.values(),...b.values()].flatMap(({original:ee})=>ee===void 0?[]:[ee]))},"sweep");return{render:l(()=>r.render(s,a),"render"),resize:l((ee,me,ie)=>{r.setPixelRatio(ie),r.setSize(ee,me,!1),a.aspect=me>0?ee/me:1,a.updateProjectionMatrix()},"resize"),setChunk:l((ee,me,ie)=>{let xe=`${ee},${me}`,Se=new Bt;Se.setAttribute("position",new Mt(ie.positions,3)),Se.setAttribute("normal",new Mt(ie.normals,3)),Se.setAttribute("color",new Mt(ie.colours,3)),Se.setAttribute("surfacesA",new Mt(ie.surfacesA,4,!0)),Se.setAttribute("surfacesB",new Mt(ie.surfacesB,4,!0)),Se.setAttribute("shore",new Mt(ie.shore,1,!0)),Se.setIndex(new Mt(ie.indices,1)),Se.computeBoundingSphere();let ye=p.get(xe);ye!==void 0&&(ye.drawn.forEach(Ke=>o.remove(Ke)),ye.geometry.dispose());let qe={geometry:Se,at:[ie.u,0,ie.v],make:l(()=>{let Ke=new vt(Se,c);return Ke.castShadow=!0,Ke.receiveShadow=!0,Ke},"make"),drawn:[]};qe.drawn=j(qe,o),p.set(xe,qe),U.setChunk(ie)},"setChunk"),setOverlay:l((ee,me,ie)=>{let xe=`${ee},${me}`,Se=f.get(xe);if(Se!==void 0&&(Se.drawn.forEach(lt=>o.remove(lt)),Se.geometry.dispose(),f.delete(xe)),ie===null)return;let ye=new Bt;ye.setAttribute("position",new Mt(ie.positions,3)),ye.setAttribute("normal",new Mt(ie.normals,3)),ye.setAttribute("color",new Mt(ie.colours,3)),ye.computeBoundingSphere(),ye.computeBoundingBox();let qe=ye.boundingBox,Ke={geometry:ye,span:[ie.v+(qe?.min.z??0),ie.v+(qe?.max.z??0)],at:[ie.u,0,ie.v],make:l(()=>{let lt=new vt(ye,m);return lt.castShadow=!0,lt.receiveShadow=!0,lt},"make"),drawn:[]};Ke.drawn=he(Ke),f.set(xe,Ke)},"setOverlay"),setMarker:l((ee,me,ie)=>{let xe=g.get(ee);if(xe?.drawn.forEach(qe=>S.remove(qe)),xe?.faded!==void 0&&Eo(xe.faded),g.delete(ee),ie===null)return;let Se=le(ie),ye={at:me,make:l(()=>Se.clone(),"make"),drawn:[],original:Se};ye.drawn=j(ye,S,B),g.set(ee,ye),de()},"setMarker"),setWalker:l((ee,me)=>{let ie=b.get(ee);if(ie?.drawn.forEach(ye=>S.remove(ye)),ie!==void 0&&Eo(ie.faded),b.delete(ee),me===null)return;let xe=le(me,!0),Se={at:ie?.at??[0,0,0],facing:ie?.facing??me.unit?.facing??0,aloft:ie?.aloft??0,opacity:1,faded:new Map,make:l(()=>xe.clone(),"make"),drawn:[],original:xe};Se.drawn=j(Se,S,B),Q(Se),b.set(ee,Se),de()},"setWalker"),placeWalker:l((ee,me,ie,xe=0)=>{let Se=b.get(ee);Se!==void 0&&(Se.at=me,Se.facing=ie,Se.aloft=xe,Se.drawn.forEach((ye,qe)=>{let[Ke,lt]=B[qe]??[0,0];ye.position.set(me[0]+Ke,me[1],me[2]+lt)}),Q(Se))},"placeWalker"),fadeMarker:l((ee,me)=>{let ie=g.get(ee),xe=Math.min(1,Math.max(0,me));if(!(ie===void 0||xe===(ie.opacity??1))){if(ie.opacity=xe,ie.faded??=new Map,xe===1){fy(ge(ie.drawn),ie.faded);return}uc(ge(ie.drawn),xe,ie.faded)}},"fadeMarker"),wake:l((ee,me,ie=[])=>{let xe=A.get(ee);if(me===null){xe?.drawn.forEach(qe=>S.remove(qe)),xe?.shape.dispose(),A.delete(ee);return}let Se=new Bt;Se.setAttribute("position",new Mt(Float32Array.from(ie),3));let ye=xe??{at:me,shape:Se,make:l(()=>new vt(ye.shape,_),"make"),drawn:[]};xe===void 0?(ye.drawn=j(ye,S,B),A.set(ee,ye)):(xe.shape.dispose(),xe.shape=Se,xe.drawn.forEach(qe=>{qe.geometry=Se})),ye.at=me,ye.drawn.forEach((qe,Ke)=>{let[lt,et]=B[Ke]??[0,0];qe.position.set(me[0]+lt,me[1],me[2]+et)})},"wake"),puff:l((ee,me,ie=0)=>{let xe=y.get(ee);if(me===null){xe?.drawn.forEach(qe=>S.remove(qe)),y.delete(ee);return}let Se=Number(ee.replace(/\D/g,""))||0,ye=xe??{at:me,through:ie,seed:Se,make:l(()=>{let qe=new an;return M0(0,Se).forEach(({shade:Ke})=>qe.add(new vt(w,R[Ke]))),qe},"make"),drawn:[]};xe===void 0&&(ye.drawn=j(ye,S,B),y.set(ee,ye)),ye.at=me,ye.through=ie,ye.drawn.forEach((qe,Ke)=>{let[lt,et]=B[Ke]??[0,0];qe.position.set(me[0]+lt,me[1],me[2]+et)}),pe(ye)},"puff"),fadeWalker:l((ee,me)=>{let ie=b.get(ee),xe=Math.min(1,Math.max(0,me));ie===void 0||xe===ie.opacity||(ie.opacity=xe,uc(ie.drawn,xe,ie.faded))},"fadeWalker"),setYields:l(ee=>{$?.drawn.forEach(me=>P.remove(me)),$=null,N.set(ee)!==null&&($={at:[0,0,0],make:l(()=>N.make(),"make"),drawn:[]},$.drawn=j($,P))},"setYields"),view:l((ee,me,ie=e)=>{let[xe,Se]=ee.focus,[ye,qe,Ke]=Co(ee,me),{near:lt,far:et}=fa(ee.distance);a.position.set(ye,qe,Ke),a.lookAt(xe,me,Se),a.far=et*1.2,a.near=Math.max(.1,ee.distance*.02),a.updateProjectionMatrix(),F.near=lt,F.far=et;let St=ee.distance*2.2,ct=h.shadow.camera;h.position.set(xe+30,me+40,Se+20),h.target.position.set(xe,me,Se),ct.left=-St,ct.right=St,ct.top=St,ct.bottom=-St,ct.near=Math.max(.5,Ty-St*1.6),ct.far=Ty+St*1.6,ct.updateProjectionMatrix(),U.follow(xe,Se,et*2.2,h.position.clone().sub(h.target.position)),X.follow(xe,Se,et*2.2),U.pastThePoles(ie.v!==null),X.pastThePoles(ie.v!==null),m.clippingPlanes=ie.v===null?v:null,H=ie.v===null;let wt=Kd(ee.focus,et,ie),Dt=`${wt.join(";")}${H?" stopped":""}`,ot=Kd(ee.focus,$0(ee),ie),G=ot.join(";");Dt!==ne&&(Y=wt,ne=Dt,p.forEach(Je=>{Je.drawn.forEach(tt=>o.remove(tt)),Je.drawn=j(Je,o)}),f.forEach(Je=>{Je.drawn.forEach(tt=>o.remove(tt)),Je.drawn=he(Je)}),$!==null&&($.drawn.forEach(Je=>P.remove(Je)),$.drawn=j($,P))),N.lean(ee.pitch),G!==J&&(B=ot,J=G,[...g.values(),...b.values(),...y.values(),...A.values()].forEach(Je=>{Je.drawn.forEach(tt=>S.remove(tt)),Je.drawn=j(Je,S,B)}),b.forEach(Q),y.forEach(pe),b.forEach(Je=>{Je.opacity<1&&uc(Je.drawn,Je.opacity,Je.faded)}),g.forEach(Je=>{Je.faded!==void 0&&(Je.opacity??1)<1&&uc(ge(Je.drawn),Je.opacity??1,Je.faded)}))},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{p.forEach(({geometry:ee})=>ee.dispose()),p.clear(),f.forEach(({geometry:ee})=>ee.dispose()),f.clear(),m.dispose(),g.forEach(({faded:ee})=>ee!==void 0&&Eo(ee)),g.clear(),b.forEach(({faded:ee})=>Eo(ee)),b.clear(),y.clear(),A.forEach(({shape:ee})=>ee.dispose()),A.clear(),_.dispose(),w.dispose(),R.forEach(ee=>ee.dispose()),I.dispose(),N.dispose(),U.dispose(),X.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var Fr=1/Math.sqrt(3),Ry=1.5*Fr,ZC=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),JC=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,Fr+s*Ry],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Fr],[a+.5,o-Fr/2],[a+.5,o+Fr/2],[a,o+Fr],[a-.5,o+Fr/2],[a-.5,o-Fr/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-Fr,[c,u]=ZC(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*Ry:null}),"period")}},"hexOddRLayout"),Py=JC;var KC=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),Iy=KC;var tr=Math.SQRT2/2,jC=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*tr,(s+1)*tr],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-tr],[a+tr,o],[a,o+tr],[a-tr,o]]},"outline"),tileAt:l((r,s)=>{let a=r/tr,o=s/tr,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*tr,v:t?i*tr:null}),"period")}},"staggeredIsoLayout"),Ly=jC;var Dy={square:Iy,"staggered-iso":Ly,"hex-odd-r":Py},QC=l(i=>{if(!Object.prototype.hasOwnProperty.call(Dy,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Dy[i.topologyId](i)},"groundLayoutFor"),Ny=QC;var mc=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var jd=.65,Z0=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Or=.22,Qd=.12,J0={low:.2,high:.5},Uy=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,p=u*u+h*h,f=p===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/p)),m=mc(Math.hypot(i-t-u*f,e-n-h*f)),x=1-f;return m===0?-1/0:m*m*(r+(o-r)*(1-x*x*x)+c)},"halfRidge"),gc=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),eR=l((i,e,t)=>({u:(gc(i,e,t,1)*2-1)*Or,v:(gc(i,e,t,2)*2-1)*Or,scale:.75+gc(i,e,t,3)*.5}),"peakOf"),tR=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=Wn([er({cell:.7,period:o,seed:t}),er({cell:.35,period:o,seed:t+1}),er({cell:.17,period:o,seed:t+2})]),u=Wn([er({cell:.45,period:o,seed:t+3}),er({cell:.22,period:o,seed:t+4})]),h=l((B,J)=>1-2*Math.abs(u(B,J)),"ridged"),p=er({cell:.8,period:o,seed:t+5}),f=er({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},x=[],v=[],g=[],b=[],y=[],w=l((B,J)=>{let H=(B%r+r)%r;return!a&&(J<0||J>=s)?null:(J%s+s)%s*r+H},"index"),M=l(B=>{let J=new Array(r*s).fill(1/0),H=[];B.forEach(($,j)=>{$&&(J[j]=0,H.push([j%r,Math.floor(j/r)]))});for(let[$,j]of H){let he=J[j*r+$]??1/0;he>=Qi.reach||n.neighbours($,j).forEach(([ge,Q])=>{let pe=Q*r+ge;(J[pe]??1/0)>he+1&&(J[pe]=he+1,H.push([ge,Q]))})}return J},"distancesFromLand"),R=l((B,J)=>{let H=n.terrainAt(B,J);return`${H}${H!=="Unknown"&&n.waterAt(B,J)?" water":""}`},"readAs"),A=l(B=>{if(B!==void 0&&v.length>0&&B.every(([le,de])=>{let ue=w(le,de);return ue===null||v[ue]===R(le,de)}))return[];let J=[],H=[],$=[];for(let le=0;le<s;le++)for(let de=0;de<r;de++){let ue=n.terrainAt(de,le);J.push(ue),H.push(ue!=="Unknown"&&n.waterAt(de,le)),$.push(na(ue))}let j=M(J.map((le,de)=>le!=="Unknown"&&!H[de])),he=J.map((le,de)=>`${le}${H[de]?" water":""}`),ge=[];he.forEach((le,de)=>{v[de]!==le&&ge.push([de%r,Math.floor(de/r)])}),v=he,x=$.map((le,de)=>{let ue=le===Ld,ee=de%r,me=Math.floor(de/r),ie=eR(ee,me,t);if(!H[de])return{relief:le.relief,colour:Z0(le.colour),surface:Ln.indexOf(le.surface),water:!1,unknown:ue,peak:ie};let xe=Math.min(j[de]??1/0,Qi.reach),Se=Qi.shore+(Qi.deep-Qi.shore)*Math.max(0,xe-1)/Math.max(1,Qi.reach-1);return{relief:{...le.relief,base:Se},colour:Z0(le.colour),surface:Ln.indexOf("sand"),water:!0,unknown:ue,peak:ie}});let Q=y,pe=new Map(ge.map(([le,de])=>[`${le},${de}`,[le,de]]));return y=x.map(({relief:le,unknown:de},ue)=>!de&&!H[ue]&&le.shape==="peaked"),ge.some(([le,de])=>{let ue=de*r+le;return y[ue]===!0||Q[ue]===!0})&&([g,b]=X()),ge.forEach(([le,de])=>{let ue=de*r+le;y[ue]!==!0&&Q[ue]!==!0||n.neighbours(le,de).forEach(([ee,me])=>{let ie=w(ee,me);ie!==null&&y[ie]===!0&&pe.set(`${ee},${me}`,[ee,me])})}),[...pe.values()]},"refresh"),_=l(B=>{let[J,H]=i.centre(0,B);return Math.max(...i.outline(0,B).map(([$,j])=>Math.hypot($-J,j-H)))},"cornerOf"),S=l((B,J)=>{let[H,$]=i.centre(0,B),j=[];for(let he=-8;he<=8;he++)for(let ge=-6;ge<=6;ge++){let[Q,pe]=i.centre(ge,B+he);Math.hypot(Q-H,pe-$)<J+1e-9&&j.push([ge,he])}return j},"offsetsWithin"),I=l((B,J,H,$)=>{if(r>=6&&(!a||s>=6)){let le=l((ee,me)=>{let ie=(ee%me+me)%me;return ie*2<me?ie:ie-me},"nearest"),de=le(H-B,r),ue=a?le($-J,s):$-J;return de===0&&ue===0?[]:[[de,ue]]}let j=l((le,de)=>{let ue=(le%de+de)%de;return ue===0?[0]:[ue,ue-de]},"copies"),[he,ge]=i.centre(B,J),Q=j(H-B,r).flatMap(le=>(a?j($-J,s):[$-J]).flatMap(de=>{if(le===0&&de===0)return[];let[ue,ee]=i.centre(B+le,J+de);return[[le,de,Math.hypot(ue-he,ee-ge)]]})),pe=Math.min(...Q.map(([,,le])=>le));return Q.filter(([,,le])=>le<=pe+1e-9).map(([le,de])=>[le,de])},"stepsTo"),P=Math.max(...[0,1].flatMap(B=>{let[J,H]=i.centre(0,B);return n.neighbours(0,B).flatMap(([$,j])=>I(0,B,$,j).map(([he,ge])=>{let[Q,pe]=i.centre(he,B+ge);return Math.hypot(Q-J,pe-H)}))}),1),N=[0,1].map(B=>{let[J,H]=i.centre(0,B);return S(B,P+Or*Math.SQRT2+Qd+1.2+Math.max(_(0),_(1))).flatMap(([$,j])=>{let[he,ge]=i.centre($,B+j);return[$,j,he-J,ge-H]})}),U=l((B,J,H,$,j,he)=>{let ge=j-H,Q=he-$,pe=ge*ge+Q*Q,le=pe===0?0:Math.max(0,Math.min(1,((B-H)*ge+(J-$)*Q)/pe));return Math.hypot(B-H-ge*le,J-$-Q*le)},"toSegment"),X=l(()=>{let B=x.map(()=>[]),J=x.map(()=>[]),H=Math.max(_(0),_(1));return e?(x.forEach(($,j)=>{if(y[j]!==!0)return;let he=j%r,ge=Math.floor(j/r),[Q,pe]=i.centre(he,ge),le=new Map;n.neighbours(he,ge).forEach(([de,ue])=>{let ee=w(de,ue);ee!==null&&y[ee]===!0&&I(he,ge,de,ue).forEach(([me,ie])=>le.set(`${me},${ie}`,[me,ie,ee]))}),le.forEach(([de,ue,ee])=>{let me=x[ee];if(me===void 0||ue<0||ue===0&&de<0)return;let[ie,xe]=i.centre(he+de,ge+ue),{peak:Se,relief:ye}=$,{peak:qe,relief:Ke}=me,lt=Se.u,et=Se.v,St=ie-Q+qe.u,ct=xe-pe+qe.v,wt=ye.base*jd*Se.scale,Dt=Ke.base*jd*qe.scale,ot=Math.hypot(St-lt,ct-et)||1,G=16+(ue+2)*5+(de+2),Je=(gc(he,ge,t,G)*2-1)*Qd,tt=J0.low+(J0.high-J0.low)*gc(he,ge,t,G+32),at=(lt+St)/2-(ct-et)/ot*Je,_e=(et+ct)/2+(St-lt)/ot*Je,gt=Math.max(Math.hypot(lt-at,et-_e),Math.hypot(St-at,ct-_e))+1.2,ze={au:lt,av:et,ah:wt,mu:at,mv:_e,mh:tt*Math.min(wt,Dt),bu:St,bv:ct,bh:Dt,roughness:(ye.roughness+Ke.roughness)/2,cu:at,cv:_e,reach:gt*gt},Xe=(Math.sqrt(ze.reach)+H)**2,L=N[ge&1]??[];for(let E=0;E<L.length;E+=4){let q=L[E+2],fe=L[E+3];if((q-at)**2+(fe-_e)**2>=Xe||Math.min(U(q,fe,lt,et,at,_e),U(q,fe,at,_e,St,ct))>=1.2+H)continue;let ae=w(he+L[E],ge+L[E+1]);ae!==null&&(B[ae]?.push(ze),J[ae]?.push(q,fe))}})}),[B,J]):[B,J]},"ranges"),F=l(B=>{let[J,H]=i.centre(0,B),$=Math.max(...i.outline(0,B).map(([he,ge])=>Math.hypot(he-J,ge-H))),j=[];for(let he=-6;he<=6;he++)for(let ge=-4;ge<=4;ge++){let[Q,pe]=i.centre(ge,B+he);Math.hypot(Q-J,pe-H)<1.2+$+Or*Math.SQRT2+1e-9&&j.push([ge,he])}return j},"offsetsFor"),Y=[F(0),F(1)],ne=l((B,J)=>{let[H,$]=i.tileAt(B,J),j=w(H,$),he=j===null?null:x[j]??null;if(he===null||he.unknown)return{height:0,colour:Z0(Ld.colour),surfaces:Ln.map(()=>0),shore:0,unseen:!0};let ge=null,Q=null,pe=l(wt=>wt==="rolling"?ge??=c(B,J):Q??=h(B,J),"noiseHere"),le=0,de=0,ue=0,ee=0,me=Ln.map(()=>0),ie=0,xe=0,Se=0,ye=0,qe=0,Ke=B+Or*p(B,J),lt=J+Or*f(B,J);(Y[$&1]??[]).forEach(([wt,Dt])=>{let ot=H+wt,G=$+Dt,Je=w(ot,G);if(Je===null)return;let tt=x[Je];if(tt===void 0)return;let[at,_e]=i.centre(ot,G),{relief:gt,colour:ze,peak:Xe,surface:L}=tt,E=mc(Math.hypot(B-at,J-_e)),q=gt.shape==="peaked"?mc(Math.hypot(B-at-Xe.u,J-_e-Xe.v)):0,fe=mc(Math.hypot(Ke-at,lt-_e))**3;if(E>0){let ae=m[gt.shape],Me=ae===null?0:gt.roughness*pe(ae);gt.shape==="peaked"?de+=E*(gt.base*(1-jd)+Me*.5):de+=E*(gt.base+Me),le+=E}if(q>0){let ae=gt.roughness*pe("ridged");ue+=q*q*(gt.base*jd*Xe.scale+ae*.5)}ee+=fe,tt.unknown||(me[L]=(me[L]??0)+fe,ie+=fe,xe+=tt.water?fe:0),Se+=fe*ze[0],ye+=fe*ze[1],qe+=fe*ze[2]});let et=j===null?[]:g[j]??[],St=j===null?[]:b[j]??[],ct=ue;if(et.length>0){let[wt,Dt]=i.centre(H,$);et.forEach((ot,G)=>{let Je=B-wt+(St[G*2]??0),tt=J-Dt+(St[G*2+1]??0);if((Je-ot.cu)**2+(tt-ot.cv)**2>=ot.reach)return;let at=ot.roughness*pe("ridged")*.5;ct=Math.max(ct,Uy(Je,tt,ot.au,ot.av,ot.ah,ot.mu,ot.mv,ot.mh,at),Uy(Je,tt,ot.bu,ot.bv,ot.bh,ot.mu,ot.mv,ot.mh,at))})}return{height:(le>0?de/le:0)+ct,colour:ee>0?[Se/ee,ye/ee,qe/ee]:he.colour,surfaces:ie>0?me.map(wt=>wt/ie):Ln.map((wt,Dt)=>Dt===he.surface?1:0),shore:ie>0?xe/ie:he.water?1:0,unseen:!1}},"sample");return A(),{sample:ne,height:l((B,J)=>ne(B,J).height,"height"),refresh:A}},"createRelief"),Fy=tR;var Oy=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),By=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((I,P)=>[I*a,P*o],"at"),p=r+3,f=new Float64Array(p*(s+3)),m=(r+1)*(s+1),x=new Float32Array(m*3),v=new Uint8Array(m*4),g=new Uint8Array(m*4),b=new Uint8Array(m),y=new Float32Array(m);for(let I=-1;I<=s+1;I++)for(let P=-1;P<=r+1;P++){let N=e.sample(...h(c+P,u+I)),{height:U,colour:X}=N;if(f[(I+1)*p+(P+1)]=U,P>=0&&P<=r&&I>=0&&I<=s){let F=I*(r+1)+P;x.set(X,F*3),N.surfaces.forEach((Y,ne)=>{(ne<4?v:g)[F*4+ne%4]=Math.round(Y*255)}),b[F]=Math.round(N.shore*255),y[F]=N.unseen?1:0}}let w=l((I,P)=>f[(P+1)*p+(I+1)]??0,"height"),M=new Float32Array(m*3),R=new Float32Array(m*3),[A,_]=h(c,u);for(let I=0;I<=s;I++)for(let P=0;P<=r;P++){let N=I*(r+1)+P,[U,X]=h(c+P,u+I),F=(w(P+1,I)-w(P-1,I))/(2*a),Y=(w(P,I+1)-w(P,I-1))/(2*o),ne=Math.hypot(F,1,Y);M[N*3]=U-A,M[N*3+1]=w(P,I),M[N*3+2]=X-_,R[N*3]=-F/ne,R[N*3+1]=1/ne,R[N*3+2]=-Y/ne}let S=new Uint32Array(r*s*6);for(let I=0;I<s;I++)for(let P=0;P<r;P++){let N=I*(r+1)+P,U=N+1,X=N+r+1,F=X+1,Y=(I*r+P)*6;S.set([N,X,U,U,X,F],Y)}return{u:A,v:_,positions:M,normals:R,colours:x,surfacesA:v,surfacesB:g,shore:b,unseen:y,indices:S}},"buildChunk"),K0=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,p]=e.centre(c,u);for(let f=Math.floor((h-n)/r);f<=Math.floor((h+n)/r);f++)for(let m=Math.floor((p-n)/s);m<=Math.floor((p+n)/s);m++){if(!a&&(m<0||m>=i.chunksV))continue;let x=(f%i.chunksU+i.chunksU)%i.chunksU,v=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${x},${v}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var $n=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),ky={Forest:{plants:[$n("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[$n("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),$n("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[$n("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),$n("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[$n("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[$n("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[$n("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[$n("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),$n("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[$n("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[$n("rock",2,[.7,1.1],"#a8936a","#a8936a"),$n("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Lo=l(i=>Object.prototype.hasOwnProperty.call(ky,i)?ky[i]:null,"growthOf");var zy=["Ocean"],nR=["Mountains"],iR=["Mine","Fortress","Airbase"],rR=["River"],bn=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),sR=["Irrigation","Farmland","Fortress","Airbase"],Gy=l(i=>i.city||sR.some(e=>bn(i,e))?null:Lo(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),aR=l((i,e)=>{if(i.city){let f=i.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:i.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:W_(T0(String(f.id??f.name??"")),f.growth?.size??1,e.filter(({tile:m})=>bn(m,"Road")&&(bn(i,"Road")||bn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>zy.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=bn(i,"Road"),n=bn(i,"Railroad"),r=t?e.filter(f=>bn(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||bn(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,m)=>f[0]===m[0]&&f[1]===m[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(f=>!n||!s.some(m=>a(m,f))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:bn(i,"Farmland")?"farmland":bn(i,"Irrigation")?"irrigation":null,mine:bn(i,"Mine"),fortress:bn(i,"Fortress"),airbase:bn(i,"Airbase"),pollution:bn(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!rR.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:Lo(i.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},u=Gy(i),h=i.terrain?._??"Unknown";return i.isWater!==!0&&!zy.includes(h)&&h!=="Unknown"&&!nR.includes(h)&&!iR.some(f=>bn(i,f))&&(c.suburbs=e.flatMap(({offset:f,tile:{city:m}})=>{let x=m?Y_(m.growth?.size??1):0;return m&&x>0?[{seed:T0(String(m.id??m.name??"")),steps:x,city:f}]:[]}).sort((f,m)=>f.seed-m.seed||f.city[0]-m.city[0]||f.city[1]-m.city[1])),c.suburbs.length>0&&(c.beside=e.filter(({tile:{city:f}})=>!!f).map(({offset:f})=>f)),u!==null&&(c.woods=e.filter(f=>Gy(f.tile)===u).map(({offset:f})=>f)),(u!==null||c.suburbs.length>0)&&(c.paths=e.filter(f=>!!f.tile.city||bn(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation&&c.suburbs.length===0?null:c},"overlayFor"),Vy=aR;var Ut=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Hy={Coal:Ut("rocks","#26262a",4),Gold:Ut("rocks","#d8b13a",3),Gems:Ut("rocks","#59c2d6",4,"#b05ad0"),Iron:Ut("rocks","#8a5a44",4),Wheat:Ut("crop","#d9b84a",5,"#a88a2c"),Spice:Ut("crop","#c0452e",4,"#5d7a2a"),Wine:Ut("crop","#6a2c5e",4,"#5d7a2a"),Silk:Ut("crop","#e9e2cf",3,"#4f7a34"),Fruit:Ut("crop","#e08a2a",4,"#3f7a2a"),Horse:Ut("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Ut("animal","#4a3424",3,"#2a1e16"),Game:Ut("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Ut("animal","#8f7e66",2,"#e8e2d6"),Furs:Ut("animal","#b0602a",2,"#f0e8dc"),Ivory:Ut("animal","#8a8580",1,"#f2ead8"),Seal:Ut("animal","#6e7072",2,"#4a4c4e"),Pheasant:Ut("bird","#8a3a22",2,"#3d6a3a"),Fish:Ut("fish","#b8c4cc",5),Whales:Ut("whale","#3a4048",1),Oil:Ut("derrick","#222224",1,"#121214"),Oasis:Ut("oasis","#3f7a32",3,"#3f86a8"),Peat:Ut("peat","#4a3624",4),Shield:Ut("logs","#7a5532",4,"#c9a47a")},oR=Ut("cairn","#9a9690",5),Wy=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Hy,n)?Hy[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??oR},"specialLook");var rg=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Cn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},No=.06,Xy="#8c7a58",qy="#5f5953",lR="#a9abae",cR="#5e432b",uR="#4f87b0",hR="#7da33f",dR=["#c2b448","#8fae3e"],Yy="#9d968a",fR="#4a4c50",tg="#6b4a2e",pR="#7a6a58",mR="#b89a5a",gR="#c9b48e",$y="#34322a",Tn=new qi(1,1,1),Uo=new Yi(.5,.5,1,8),sg=new Lr(.5,1,8),iv=new Lr(.5,1,4),Do=new ls(.5,8,6),xc=new Yi(.5,.5,1,4,1,!0),bc=new Lr(.5,1,5,1,!0),ef=new ls(.5,5,3),j0={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},xR=.05,rv=.22,Zy=72,li=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),ag=.05,Jy=new Map,tf=l(i=>{let e=Jy.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Be(i);e=[t,n,r],Jy.set(i,e)}return e},"colourOf"),Ky=new WeakMap,bR=l(i=>{let e=Ky.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Ky.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),_R=new yt,yR=new Ze,vR=new W,MR=new Sn,SR=new kn,wR=new W,Ct,sv,kt,ug=class ug{constructor(e,t){V(this,Ct);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=tf(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/No)),u=Math.max(1,Math.ceil(n/No)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],p=l((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<c;f++)for(let m=0;m<u;m++){let[x,v]=p(f/c,(m+1)/u),[g,b]=p((f+1)/c,(m+1)/u),[y,w]=p(f/c,m/u),[M,R]=p((f+1)/c,m/u);C(this,Ct,kt).call(this,x,v,s,a),C(this,Ct,kt).call(this,g,b,s,a),C(this,Ct,kt).call(this,y,w,s,a),C(this,Ct,kt).call(this,g,b,s,a),C(this,Ct,kt).call(this,M,R,s,a),C(this,Ct,kt).call(this,y,w,s,a)}}ribbon(e,t,n,r,s){let a=tf(n),o=e.map((c,u)=>{let h=e[u-1]??c,p=e[u+1]??c,[f,m]=s?.[u]??[p[0]-h[0],p[1]-h[1]],x=Math.hypot(f,m);return x===0?[0,0]:[-m/x*t,f/x*t]});for(let c=0;c+1<e.length;c++){let u=e[c],h=e[c+1],p=o[c],f=o[c+1],m=Math.hypot(h[0]-u[0],h[1]-u[1]);if(m===0)continue;let x=Math.max(1,Math.ceil(m/No)),v=Math.max(1,Math.ceil(t/No)),g=l((b,y)=>[u[0]+(h[0]-u[0])*b+(p[0]+(f[0]-p[0])*b)*(y-.5),u[1]+(h[1]-u[1])*b+(p[1]+(f[1]-p[1])*b)*(y-.5)],"at");for(let b=0;b<x;b++)for(let y=0;y<v;y++){let[w,M]=g(b/x,(y+1)/v),[R,A]=g((b+1)/x,(y+1)/v),[_,S]=g(b/x,y/v),[I,P]=g((b+1)/x,y/v);C(this,Ct,kt).call(this,w,M,r,a),C(this,Ct,kt).call(this,R,A,r,a),C(this,Ct,kt).call(this,_,S,r,a),C(this,Ct,kt).call(this,R,A,r,a),C(this,Ct,kt).call(this,I,P,r,a),C(this,Ct,kt).call(this,_,S,r,a)}}}disc(e,t,n,r,s=12){let a=tf(n),[o,c]=e,u=Math.max(1,Math.ceil(t/No)),h=l((p,f)=>{let m=f/s*Math.PI*2,x=p/u*t;return[o+Math.cos(m)*x,c+Math.sin(m)*x]},"at");for(let p=0;p<u;p++)for(let f=0;f<s;f++){let m=h(p+1,f),x=h(p+1,f+1);if(p===0)C(this,Ct,kt).call(this,o,c,r,a),C(this,Ct,kt).call(this,...x,r,a),C(this,Ct,kt).call(this,...m,r,a);else{let v=h(p,f),g=h(p,f+1);C(this,Ct,kt).call(this,...v,r,a),C(this,Ct,kt).call(this,...g,r,a),C(this,Ct,kt).call(this,...m,r,a),C(this,Ct,kt).call(this,...g,r,a),C(this,Ct,kt).call(this,...x,r,a),C(this,Ct,kt).call(this,...m,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=bR(e),c=_R.compose(vR.set(...t),MR.setFromEuler(SR.set(...s)),wR.set(...n)),u=c.elements,h=yR.getNormalMatrix(c).elements,[p,f,m]=tf(r),x=this.soup;for(let v=0;v<a.length;v+=3){let g=a[v],b=a[v+1],y=a[v+2],w=o[v],M=o[v+1],R=o[v+2],A=h[0]*w+h[3]*M+h[6]*R,_=h[1]*w+h[4]*M+h[7]*R,S=h[2]*w+h[5]*M+h[8]*R,I=Math.hypot(A,_,S)||1;x.positions.push(u[0]*g+u[4]*b+u[8]*y+u[12],u[1]*g+u[5]*b+u[9]*y+u[13],u[2]*g+u[6]*b+u[10]*y+u[14]),x.normals.push(A/I,_/I,S/I),x.colours.push(p,f,m)}}spot(e,t){let n=li(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-rv-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,GR(e,t,o,c)-xR-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=li(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Zy;h++){let p=r+h/Zy*Math.PI*2,f=[s+Math.cos(p)*u*this.place.radius,a+Math.sin(p)*u*this.place.radius],m=this.clearance(f[0],f[1],n);if(m>=0)return this.taken.push([f[0],f[1],n]),f;m>c&&(o=f,c=m)}return this.taken.push([o[0],o[1],n]),o}};Ct=new WeakSet,sv=l(function(e,t){let n=ag,r=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),s=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),kt=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...C(this,Ct,sv).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(ug,"Layer");var ng=ug,rf=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),og=l(i=>i.alone||i.joins.length>0,"drawn"),ER=.09,AR=8,ig=l(([i,e])=>300+(i+3)*7+(e+3),"wayIndex"),sf=l((i,e)=>{let[t,n]=i.centre,[r,s]=rf(i,e),a=r-t,o=s-n,c=Math.hypot(a,o);if(c===0)return{points:[[t,n]],ways:[[0,0]]};let u=(li(i.seed,ig(e))*2-1)*ER*c/(4/9),h=[-o/c,a/c],p=[t+a/3+h[0]*u,n+o/3+h[1]*u],f=[t+a*2/3,n+o*2/3],m=Math.max(AR,Math.ceil(c*1.02/No)),x=Array.from({length:m+1},(v,g)=>g/m);return{points:x.map(v=>{let g=(1-v)**3,b=3*(1-v)**2*v,y=3*(1-v)*v**2,w=v**3;return[g*t+b*p[0]+y*f[0]+w*r,g*n+b*p[1]+y*f[1]+w*s]}),ways:x.map(v=>{let g=3*(1-v)**2,b=6*(1-v)*v,y=3*v**2,w=g*(p[0]-t)+b*(f[0]-p[0])+y*(r-f[0]),M=g*(p[1]-n)+b*(f[1]-p[1])+y*(s-f[1]),R=Math.hypot(w,M);return R===0?[a/c,o/c]:[w/R,M/R]})}},"roadHalf"),TR=l((i,e)=>{let{place:t}=i;og(e)&&(e.joins.forEach(n=>{let{points:r,ways:s}=sf(t,n);i.ribbon(r,.07,Xy,Cn.road,s)}),i.disc(t.centre,e.alone?.09:.035,Xy,Cn.road))},"road"),CR=l((i,e)=>{if(!og(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>rf(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,qy,Cn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,cR,Cn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,lR,Cn.rail))}),i.disc(t.centre,.05,qy,Cn.ballast)},"railroad"),Q0=.04,RR=l((i,e,t,n,r)=>{let s=r.filter(c=>Math.min(...c.map(([,u])=>u))-Lt<t+n/2&&Math.max(...c.map(([,u])=>u))+Lt>t-n/2).map(c=>[Math.min(...c.map(([u])=>u))-Lt,Math.max(...c.map(([u])=>u))+Lt]).sort((c,u)=>c[0]-u[0]),a=[],o=i;return s.forEach(([c,u])=>{c-o>=Q0&&a.push([o,Math.min(c,e)]),o=Math.max(o,u)}),e-o>=Q0&&a.push([o,e]),a.filter(([c,u])=>u-c>=Q0)},"rowAround"),PR=l((i,e,t)=>{let{centre:n,inner:r}=i.place,s=e==="farmland"?6:4,a=r*.9,o=a*2/s,c=l((u,h,p,f)=>RR(n[0]-a,n[0]+a,u,h,t).forEach(([m,x])=>i.strip([m,u],[x,u],h,p,f)),"across");for(let u=0;u<s;u++)c(n[1]-a+o*(u+.5),o*.8,e==="farmland"?dR[u%2]:hR,Cn.field),u>0&&c(n[1]-a+o*u,.016,uR,Cn.field+.001)},"fields"),jy=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],Qy="#a39a88",IR="#c4b8a2",LR=.045,ev=.86,DR=l((i,e)=>{let{place:t}=i,[n,r]=t.centre,{plaza:s,streets:a,lots:o}=X_(t,e,[n,r+ha]);i.disc(s.at,s.radius,Qy,Cn.road,16),a.forEach(([c,u])=>i.strip(c,u,ic,Qy,Cn.road)),o.forEach(c=>av(i,c))},"city"),av=l((i,e)=>{let{at:[t,n],width:r,facing:s,storeys:a}=e,o=[[t,n],...yo(e)].map(([h,p])=>i.ground(h,p)),c=Math.min(...o)-.005,u=Math.max(...o)+LR*a;i.solid(Tn,[t,(c+u)/2,n],[r*ev,u-c,r*ev],IR,[0,s,0]),i.solid(iv,[t,u+r*.2,n],[r*Math.SQRT2,r*.4,r*Math.SQRT2],jy[Math.floor(e.roof*jy.length)],[0,s+Math.PI/4,0])},"house"),NR=l((i,e)=>{if(e.suburbs.length===0)return[];let{place:t}=i,n=l((o,c)=>o[0]===c[0]&&o[1]===c[1],"same"),r=l(o=>{let[c,u]=t.toward(o);return[c,u+ha]},"standOf"),s={runs:[...i.runs],lines:[...i.past],lanes:e.beside.filter(o=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(c=>n(c,o))).map(o=>[[t.centre[0],t.centre[1]],r(o)]),stands:e.beside.map(r),taken:i.taken,ground:l((o,c)=>t.heightAt(o,c),"ground")};return e.suburbs.flatMap(o=>$_(t,o,{...s,others:e.beside.filter(c=>!n(c,o.city)).map(c=>t.toward(c))})).map(o=>(av(i,o),i.taken.push([o.at[0],o.at[1],o.width/2*Math.SQRT2]),yo(o)))},"suburbs"),UR=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Tn,[e-.02,n+.05,t],[.01,.11,.01],tg,[0,0,-.3]),i.solid(Tn,[e+.02,n+.05,t],[.01,.11,.01],tg,[0,0,.3]),i.solid(Uo,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid(sg,[a,i.ground(a,o)+.02,o],[.07,.04,.07],pR)})},"mine"),FR=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(Tn,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],Yy)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(Uo,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Yy)})},"fortress"),OR=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,fR,Cn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Cn.road+.004),i.solid(Tn,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),BR=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,$y,Cn.smear,14),i.disc(i.spot(7,.5),e*.25,$y,Cn.smear+.001)},"pollution"),kR=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(li(i.place.seed,n*31+o*2)-.5)*c,t[1]+(li(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),p=li(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Do,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,p,0]);break;case"crop":i.solid(Uo,[c,h+.02,u],[.008,.04,.008],r),i.solid(Do,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let f=e.count===1?1.5:1;i.solid(Tn,[c,h+.04*f,u],[.035*f,.03*f,.07*f],e.colour,[0,p,0]),i.solid(Tn,[c+Math.sin(p)*.04*f,h+.055*f,u+Math.cos(p)*.04*f],[.022*f,.024*f,.03*f],r,[0,p,0]),i.solid(Tn,[c,h+.013*f,u],[.03*f,.026*f,.055*f],r,[0,p,0]);break}case"bird":i.solid(Do,[c,h+.02,u],[.03,.025,.04],e.colour,[0,p,0]),i.solid(Tn,[c-Math.sin(p)*.03,h+.025,u-Math.cos(p)*.03],[.008,.006,.04],r,[.4,p,0]);break;case"fish":i.solid(Do,[c,h+.006,u],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":i.solid(Do,[c,h,u],[.07,.05,.2],e.colour,[0,p,0]),i.solid(Tn,[c-Math.sin(p)*.11,h+.02,u-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":i.solid(Tn,[c,h+.008,u],[.08,.016,.08],r),i.solid(iv,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,Cn.field+.002);{let[f,m]=s(o+5,.1),x=i.ground(f,m);i.solid(Uo,[f,x+.06,m],[.012,.12,.012],tg),i.solid(sg,[f,x+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Uo:Tn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:i.solid(Do,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),zR=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+li(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(Uo,[r,a+.02,s],[.05,.04,.05],gR),i.solid(sg,[r,a+.055,s],[.065,.035,.065],mR)})},"hut"),ov={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},lv=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(xc,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(bc,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(bc,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(xc,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(ef,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(xc,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(bc,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(xc,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(Tn,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(ef,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(bc,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(bc,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(ef,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Tn,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(ef,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(xc,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(Tn,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),GR=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),VR=l((i,e)=>{let t=Lo(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,p=o.size[0]+(o.size[1]-o.size[0])*li(s,h),f=t.conifers,m=f!==void 0&&li(s,h+1)>=f[0]+(f[1]-f[0])*a?"broadleaf":o.kind,x=ov[m]*p;for(let v=0;v<6;v++){let g=li(s,h+2+v*2)*Math.PI*2,b=Math.sqrt(li(s,h+3+v*2))*r*.92,y=n[0]+Math.cos(g)*b,w=n[1]+Math.sin(g)*b;if(i.hasRoom(y,w,x)){lv(i,o,m,y,w,p,g),i.taken.push([y,w,x]),i.grown.push([y,w,m]);break}}}})},"plants"),eg=.26,tv=.3,HR=.15,nv=.5,nf=[.9,1.3],ga=l((i,e,t)=>li(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),WR=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/eg)),p=o.u/h,f=o.v===null?null:Math.max(1,Math.round(o.v/eg)),m=o.v===null||f===null?eg:o.v/f,x=r.map(([_])=>_),v=r.map(([,_])=>_),[g,b]=[Math.floor(Math.min(...x)/p)-1,Math.ceil(Math.max(...x)/p)],[y,w]=[Math.floor(Math.min(...v)/m)-1,Math.ceil(Math.max(...v)/m)],M=a.filter(([_,S])=>!i.woods.some(([I,P])=>I===_&&P===S)).map(_=>{let[S,I]=c(_),P=Math.hypot(S-n[0],I-n[1]);return{mu:S,mv:I,length:P}}),R=t.plants.reduce((_,{count:S})=>_+S,0),A=[];for(let _=y;_<=w;_++)for(let S=g;S<=b;S++){let I=(S%h+h)%h,P=f===null?_:(_%f+f)%f,N=(S+.5+(ga(I,P,0)*2-1)*tv)*p,U=(_+.5+(ga(I,P,1)*2-1)*tv)*m;if(!s(N,U))continue;let X=M.reduce((H,{mu:$,mv:j,length:he})=>{let ge=he/2-((N-n[0])*($-n[0])+(U-n[1])*(j-n[1]))/he;return Math.min(H,Math.max(0,ge)/HR)},1);if(ga(I,P,2)>=nv+(1-nv)*X)continue;let F=ga(I,P,3)*R,Y=t.plants[0];for(let H of t.plants)if(Y=H,F-=H.count,F<0)break;let ne=t.conifers,B=ne!==void 0&&ga(I,P,4)>=ne[0]+(ne[1]-ne[0])*u?"broadleaf":Y.kind,J=Y.size[0]+(Y.size[1]-Y.size[0])*ga(I,P,5);A.push({u:N,v:U,kind:B,plant:Y,room:ov[B]*J*nf[1],size:J*(nf[0]+(nf[1]-nf[0])*X),facing:ga(I,P,6)*Math.PI*2})}return A},"woodsPlants"),XR=l((i,e)=>{let{centre:t,around:n,toward:r}=i.place,s=Math.max(...n.map(o=>{let[c,u]=r(o);return Math.hypot(c-t[0],u-t[1])})),a=e.paths.map(o=>r(o));a.forEach((o,c)=>a.slice(c+1).forEach(u=>{Math.hypot(u[0]-o[0],u[1]-o[1])<=s+1e-6&&(i.lines.push([o,u]),i.past.push([o,u]))}))},"pathsPast"),qR=l((i,e,t)=>{let{heightAt:n}=i.place;WR(e,i.place,t).forEach(({u:r,v:s,kind:a,plant:o,size:c,room:u,facing:h})=>{a!=="reeds"&&n(r,s)<0||i.hasRoom(r,s,u)&&(lv(i,o,a,r,s,c,h),i.grown.push([r,s,a]))})},"woods"),lg=l((i,e,t)=>{let n=new ng(t,e),{centre:r,radius:s}=e;if(i.city!==null)return DR(n,i.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([i.road,i.railroad].forEach(c=>{c!==null&&og(c)&&(c.joins.forEach(u=>{if(c===i.road){let h=sf(e,u).points;h.slice(1).forEach((p,f)=>n.lines.push([h[f],p])),n.runs.push({key:ig(u),points:h});return}n.lines.push([r,rf(e,u)]),n.runs.push({key:ig(u)+100,points:[r,rf(e,u)]})}),c.alone&&n.lines.push([r,r]))}),i.fortress){let c=s*.62,u=[[-c,-c],[c,-c],[c,c],[-c,c]].map(([h,p])=>[r[0]+h,r[1]+p]);u.forEach((h,p)=>n.lines.push([h,u[(p+1)%4]]))}if(i.airbase){let c=s*.75;n.lines.push([[r[0]-c,r[1]+.12],[r[0]+c,r[1]+.12]])}i.road!==null&&TR(n,i.road),i.railroad!==null&&CR(n,i.railroad),i.front===!0&&n.taken.push([r[0],r[1]+ha,rv]),i.mine&&UR(n,n.claim(...j0.mine,.1)),i.fortress&&FR(n),i.airbase&&OR(n),i.pollution&&BR(n),i.specials.forEach(([c,u],h)=>kR(n,Wy(c,u),n.claim(...j0.special(h),.1),h+1)),i.hut&&zR(n,n.claim(...j0.hut,.13)),XR(n,i);let a=NR(n,i);i.irrigation!==null&&PR(n,i.irrigation,a);let o=Lo(i.terrain);return o!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(o.canopy!==void 0?qR(n,i,o):VR(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),YR=l((i,e,t)=>{let n=rg();return t.forEach(({overlay:r,place:s})=>lg(r,s,n)),cg(i,e,n)},"overlayMesh"),cg=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),cv=YR;var uv=l((i,e)=>Math.imul(i,73856093)^Math.imul(e,19349663),"squareSeed"),xs,$t,Li,Fo,Mc,Zn,Jn,tn,Oo,xa,bs,ba,_s,ys,Sc,wc,Qe,dg,fg,pg,hv,dv,mg,_c,gg,af,yc,of,vc,xg=class xg{constructor(e){V(this,Qe);V(this,xs);V(this,$t);V(this,Li,[]);V(this,Fo);V(this,Mc);V(this,Zn);V(this,Jn,new Set);V(this,tn,null);V(this,Oo,null);V(this,xa,new Map);V(this,bs,new Map);V(this,ba,l(()=>{},"#keptCity"));V(this,_s,!0);V(this,ys,[0,0]);V(this,Sc);V(this,wc);k(this,Zn,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=Ny({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),k(this,xs,Fy({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:l((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:l((f,m)=>t.directions().map(x=>t.neighbour(f,m,x)).filter(x=>x!==null),"neighbours")}})),k(this,$t,Oy(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-a,m-o))),u=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[x,v]=this.layout.centre(f,m);return Math.hypot(x-a,v-o)}));k(this,Fo,1.2+c+Or*Math.SQRT2+Math.max((Qi.reach-1)*u,u/2+Or*Math.SQRT2+Qd)),k(this,Mc,c+ag+Math.max(d(this,$t).spacingU,d(this,$t).spacingV));let h=this.layout.outline(0,0),p=h.flatMap(([f,m],x)=>{let[v,g]=h[(x+1)%h.length],b=Math.hypot(v-f,g-m);return b===0?[]:[{away:Math.abs((v-f)*(o-m)-(g-m)*(a-f))/b,normal:[(g-m)/b,(f-v)/b]}]});k(this,Sc,Math.min(...p.map(({away:f})=>f))),k(this,wc,Math.min(...p.map(({away:f,normal:[m,x]})=>f/(Math.abs(m)+Math.abs(x)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=d(this,$t),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((v,g)=>{let b=`${v},${g}`,y=n.get(b);return y===void 0&&(y=d(this,xs).height(v*r,g*s),n.set(b,y)),y},"at"),p=h(a,o),f=h(a+1,o),m=h(a,o+1);if(c+u<=1)return p+(f-p)*c+(m-p)*u;let x=h(a+1,o+1);return x+(m-x)*(1-c)+(f-x)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,$t);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return d(this,$t).chunksV*d(this,$t).stepsV*d(this,$t).spacingV}heightAt(e,t){return d(this,xs).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=d(this,$t),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);k(this,Li,C(this,Qe,vc).call(this,s,e,t)),k(this,ys,[e,t]),s.forEach(a=>d(this,Jn).add(a)),C(this,Qe,pg).call(this)}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];k(this,ys,[t,n]),C(this,Qe,dg).call(this,e.length===0?[...C(this,Qe,yc).call(this).values()].flat():C(this,Qe,of).call(this,e));let s=d(this,xs).refresh(r?void 0:e);if(s.length===0)return s;let a=K0(d(this,$t),this.layout,s,d(this,Fo)).map(([o,c])=>`${o},${c}`);return C(this,Qe,pg).call(this,K0(d(this,$t),this.layout,s,d(this,Fo)+d(this,Mc)).map(([o,c])=>`${o},${c}`)),k(this,Li,C(this,Qe,vc).call(this,[...new Set([...d(this,Li),...a])],t,n)),s}showTowns(e,t,n){if(e===d(this,_s))return;let r=[...C(this,Qe,yc).call(this).values()].flat().filter(([s,a])=>C(this,Qe,fg).call(this,s,a));k(this,_s,e),k(this,ys,[t,n]),C(this,Qe,dg).call(this,C(this,Qe,of).call(this,r))}refocus(e,t){k(this,Li,C(this,Qe,vc).call(this,d(this,Li),e,t)),k(this,ys,[e,t])}pending(){return d(this,Li).length}overlaysPending(){return d(this,Jn).size+(d(this,tn)===null||d(this,Jn).has(d(this,tn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;d(this,Li).length>0;){if(r())return;let a=d(this,Li).shift(),[o,c]=a.split(",").map(Number);e.setChunk(o,c,By(d(this,$t),d(this,xs),o,c)),d(this,Jn).add(a)}let s=!1;for(;d(this,Jn).size>0||d(this,tn)!==null;){if(d(this,tn)!==null&&d(this,Jn).has(d(this,tn).key)&&k(this,tn,null),d(this,tn)===null){if(s&&r())return;let x=C(this,Qe,vc).call(this,[...d(this,Jn)],...d(this,ys))[0],v=C(this,Qe,yc).call(this).get(x)??[],g=C(this,Qe,dv).call(this,x,v);if(d(this,Jn).delete(x),g!==null){let[b,y]=x.split(",").map(Number);v.forEach(([w,M],R)=>d(this,xa).set(`${w},${M}`,g.signatures[R])),e.setOverlay(b,y,g.mesh),s=!0;continue}k(this,tn,{key:x,squares:v,done:0,laid:rg(),signatures:[],heights:new Map,keep:!0})}let a=d(this,tn);for(;a.done<a.squares.length;){let[x,v]=a.squares[a.done],g=C(this,Qe,gg).call(this,x,v,a.heights);if(a.signatures.push(d(this,xa).get(`${x},${v}`)),a.done++,g!==null&&lg(g.overlay,g.place,a.laid),a.done<a.squares.length&&r())return}let[o,c]=a.key.split(",").map(Number),{stepsU:u,stepsV:h,spacingU:p,spacingV:f}=d(this,$t),m=a.laid.positions.length===0?null:cg(o*u*p,c*h*f,a.laid);if(k(this,tn,null),a.keep){let x={signatures:a.signatures,mesh:m};d(this,bs).set(a.key,C(this,Qe,of).call(this,a.squares).some(([v,g])=>C(this,Qe,fg).call(this,v,g))?{...d(this,bs).get(a.key),[d(this,_s)?"shown":"hidden"]:x}:{shown:x,hidden:x})}e.setOverlay(o,c,m),s=!0}}keepCities(e){k(this,ba,e)}roadPath(e,t,n,r){let s=d(this,Zn).topology(),a=l((M,R,A,_)=>{let S=s.directions().find(I=>{let P=s.neighbour(M,R,I);return P!==null&&P[0]===A&&P[1]===_});return S===void 0?null:s.offset(S,M,R)},"offsetTo"),o=a(e,t,n,r),c=a(n,r,e,t);if(o===null||c===null)return null;let u=l((M,R,A)=>{let _=C(this,Qe,_c).call(this,M,R),S=l(P=>P!==null&&P.joins.some(([N,U])=>N===A[0]&&U===A[1]),"joins"),I=this.layout.centre(M,R);if(S(_?.road??null))return sf({centre:I,toward:l(([P,N])=>this.layout.centre(M+P,R+N),"toward"),seed:uv(M,R)},A).points;if(S(_?.railroad??null)){let[P,N]=this.layout.centre(M+A[0],R+A[1]);return[[I[0],I[1]],[(I[0]+P)/2,(I[1]+N)/2]]}return null},"half"),h=u(e,t,o),p=u(n,r,c);if(h===null&&p===null)return null;let f=this.layout.centre(e,t),m=this.layout.centre(n,r),x=this.layout.centre(e+o[0],t+o[1]),v=this.layout.centre(n+c[0],r+c[1]),g=[(f[0]+x[0])/2,(f[1]+x[1])/2],b=[(m[0]+v[0])/2,(m[1]+v[1])/2],y=[b[0]-g[0],b[1]-g[1]];return[...(h??[f,g]).map(([M,R])=>[M+y[0],R+y[1]]),...(p??[m,b]).slice(0,-1).reverse()].map(([M,R])=>[M-m[0],R-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,$t),o=new Map,c=(C(this,Qe,yc).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>C(this,Qe,gg).call(this,u,h,o)??[]);return c.length===0?null:cv(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return C(this,Qe,af).call(this,e,t)}};xs=new WeakMap,$t=new WeakMap,Li=new WeakMap,Fo=new WeakMap,Mc=new WeakMap,Zn=new WeakMap,Jn=new WeakMap,tn=new WeakMap,Oo=new WeakMap,xa=new WeakMap,bs=new WeakMap,ba=new WeakMap,_s=new WeakMap,ys=new WeakMap,Sc=new WeakMap,wc=new WeakMap,Qe=new WeakSet,dg=l(function(e){e.forEach(([t,n])=>{let r=C(this,Qe,af).call(this,t,n);if(d(this,Jn).has(r)||d(this,tn)?.key===r&&!C(this,Qe,hv).call(this,d(this,tn),t,n))return;JSON.stringify(C(this,Qe,_c).call(this,t,n))!==(d(this,xa).get(`${t},${n}`)??"null")&&d(this,Jn).add(r)})},"#layAgain"),fg=l(function(e,t){return!!d(this,Zn).get(e,t).city||!!d(this,ba).call(this,e,t)},"#townAt"),pg=l(function(e){let t=e===void 0?null:new Set(e);t===null?d(this,bs).clear():t.forEach(n=>d(this,bs).delete(n)),d(this,tn)!==null&&(t===null||t.has(d(this,tn).key))&&(d(this,tn).keep=!1)},"#landChanged"),hv=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),dv=l(function(e,t){let n=d(this,bs).get(e);if(n===void 0)return null;let r=t.map(([s,a])=>JSON.stringify(C(this,Qe,_c).call(this,s,a)));return[n.shown,n.hidden].find(s=>s!==void 0&&s.signatures.length===r.length&&s.signatures.every((a,o)=>a===r[o]))??null},"#madeAs"),mg=l(function(e,t){let n=d(this,Zn).get(e,t),r=d(this,_s)?d(this,ba).call(this,e,t):null;return r===void 0?n:{...n,city:r}},"#shownAt"),_c=l(function(e,t){let n=d(this,Zn).topology(),r=Vy(C(this,Qe,mg).call(this,e,t),n.directions().flatMap(a=>{let o=n.neighbour(e,t,a);return o===null?[]:[{offset:n.offset(a,e,t),tile:C(this,Qe,mg).call(this,o[0],o[1])}]})),s=d(this,ba).call(this,e,t);return r!==null&&!d(this,_s)&&(s===void 0?d(this,Zn).get(e,t).city:s)?{...r,front:!0}:r},"#overlayAt"),gg=l(function(e,t,n){let r=C(this,Qe,_c).call(this,e,t);if(d(this,xa).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=d(this,Zn).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:d(this,Sc),inner:d(this,wc),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:uv(e,t),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,p]=this.layout.tileAt(c,u);return h===e&&p===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),af=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=d(this,$t),[u,h]=this.layout.centre(e,t),p=Math.floor(u/(s*o)),f=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,p))},${Math.min(r-1,Math.max(0,f))}`},"#chunkOf"),yc=l(function(){if(d(this,Oo)===null){let e=new Map;for(let t=0;t<d(this,Zn).height();t++)for(let n=0;n<d(this,Zn).width();n++){let r=C(this,Qe,af).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}k(this,Oo,e)}return d(this,Oo)},"#chunksOfSquares"),of=l(function(e){let t=d(this,Zn).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),vc=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=d(this,$t),c=r*a,u=s*o,{u:h,v:p}=this.layout.period(),f=l((x,v)=>Math.abs(v===null?x:x-v*Math.round(x/v)),"round"),m=l(x=>{let[v,g]=x.split(",").map(Number);return Math.hypot(f((v+.5)*c-t,h),f((g+.5)*u-n,p))},"distance");return[...e].sort((x,v)=>m(x)-m(v))},"#nearestFirst"),l(xg,"Land");var hg=xg,fv=hg;var $R=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Di=$R;var pv=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var ZR=8,JR=.92,KR=.02,mv=3,jR=50,QR=8,e2=10,gv=250,Ec,Ac,Bo,ko,_a,vs,bg=class bg{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){V(this,Ec);V(this,Ac);V(this,Bo);V(this,ko);V(this,_a,!1);V(this,vs);this.pointerId=e,k(this,Ec,t),k(this,Ac,n),k(this,Bo,t),k(this,ko,n),k(this,vs,[{x:t,y:n,time:r}])}dragging(){return d(this,_a)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!d(this,_a)&&Math.hypot(t-d(this,Ec),n-d(this,Ac))<ZR)return null;let s=!d(this,_a),a=d(this,Bo)-t,o=d(this,ko)-n;return k(this,_a,!0),k(this,Bo,t),k(this,ko,n),d(this,vs).push({x:t,y:n,time:r}),d(this,vs).length>20&&d(this,vs).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return pv(d(this,vs),e)}};Ec=new WeakMap,Ac=new WeakMap,Bo=new WeakMap,ko=new WeakMap,_a=new WeakMap,vs=new WeakMap,l(bg,"Press");var lf=bg,nr,Tc,_g=class _g{constructor(e){V(this,nr,null);V(this,Tc);k(this,Tc,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>mv?mv/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<KR){k(this,nr,null);return}d(this,Tc).call(this,-r*u,-s*u);let h=Math.pow(JR,u/16);r*=h,s*=h,k(this,nr,window.requestAnimationFrame(o))},"step");k(this,nr,window.requestAnimationFrame(o))}gliding(){return d(this,nr)!==null}stop(){d(this,nr)!==null&&(window.cancelAnimationFrame(d(this,nr)),k(this,nr,null))}};nr=new WeakMap,Tc=new WeakMap,l(_g,"Glide");var cf=_g,ya,Cc,Rc,zo,yg=class yg{constructor(){V(this,ya,0);V(this,Cc,0);V(this,Rc,-1/0);V(this,zo,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=gv)return 0;let s=Math.sign(r),a=e.timeStamp-d(this,Rc)>gv||s!==d(this,Cc);if(k(this,Rc,e.timeStamp),k(this,Cc,s),a&&(k(this,ya,0),k(this,zo,0)),n&&!e.ctrlKey&&d(this,zo)>=e2)return 0;if(!a&&n){if(k(this,ya,d(this,ya)+r),Math.abs(d(this,ya))<(e.ctrlKey?QR:jR))return 0;k(this,ya,0)}return n&&!e.ctrlKey&&k(this,zo,d(this,zo)+1),r<0?1:-1}};ya=new WeakMap,Cc=new WeakMap,Rc=new WeakMap,zo=new WeakMap,l(yg,"WheelTurn");var uf=yg;var t2=350,n2=.006,xv=.004,ir,cn,Rn,Go,rr,Ni,pf,ui,hi,Ms,Vo,Kn,Ss,Ne,ci,hf,df,bv,Mg,Br,Sg,_v,kr,yv,vv,Mv,Sv,Pc,wv,Ev,Av,ff,wg=class wg{constructor(e,t,n=null){V(this,Ne);V(this,ir);V(this,cn);V(this,Rn,null);V(this,Go,[0,0]);V(this,rr,null);V(this,Ni);V(this,pf,new uf);V(this,ui,new Map);V(this,hi,null);V(this,Ms,null);V(this,Vo,[]);V(this,Kn);V(this,Ss,null);k(this,ir,e),k(this,cn,t),k(this,Kn,n),k(this,Ni,new cf((r,s)=>{let[a,o]=C(this,Ne,bv).call(this);C(this,Ne,Sg).call(this,[a,o],[a-r,o-s])})),C(this,Ne,ci).call(this,"pointerdown",r=>C(this,Ne,_v).call(this,r)),C(this,Ne,ci).call(this,"pointermove",r=>C(this,Ne,vv).call(this,r)),C(this,Ne,ci).call(this,"pointerup",r=>C(this,Ne,Mv).call(this,r)),C(this,Ne,ci).call(this,"pointercancel",r=>C(this,Ne,Sv).call(this,r)),C(this,Ne,ci).call(this,"wheel",r=>C(this,Ne,Ev).call(this,r),{passive:!1}),C(this,Ne,ci).call(this,"gesturestart",r=>C(this,Ne,ff).call(this,r,"start"),{passive:!1}),C(this,Ne,ci).call(this,"gesturechange",r=>C(this,Ne,ff).call(this,r,"change"),{passive:!1}),C(this,Ne,ci).call(this,"gestureend",r=>C(this,Ne,ff).call(this,r,"end"),{passive:!1}),C(this,Ne,ci).call(this,"contextmenu",r=>C(this,Ne,yv).call(this,r)),C(this,Ne,ci).call(this,"pointerleave",()=>d(this,Kn)?.hover(null)),C(this,Ne,ci).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return d(this,Rn)?.dragging()===!0||d(this,rr)!==null}moving(){return this.dragging()||d(this,hi)!==null||d(this,Ni).gliding()}dispose(){d(this,Ni).stop(),C(this,Ne,kr).call(this),d(this,Vo).forEach(([e,t,n])=>d(this,ir).removeEventListener(e,t,n)),k(this,Vo,[])}};ir=new WeakMap,cn=new WeakMap,Rn=new WeakMap,Go=new WeakMap,rr=new WeakMap,Ni=new WeakMap,pf=new WeakMap,ui=new WeakMap,hi=new WeakMap,Ms=new WeakMap,Vo=new WeakMap,Kn=new WeakMap,Ss=new WeakMap,Ne=new WeakSet,ci=l(function(e,t,n){d(this,ir).addEventListener(e,t,n),d(this,Vo).push([e,t,n])},"#listen"),hf=l(function(){return{width:d(this,ir).clientWidth||1,height:d(this,ir).clientHeight||1}},"#box"),df=l(function([e,t]){let{width:n,height:r}=C(this,Ne,hf).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),bv=l(function(){let{width:e,height:t}=C(this,Ne,hf).call(this);return[e/2,t/2]},"#middle"),Mg=l(function(){let{width:e,height:t}=C(this,Ne,hf).call(this);return e/t},"#aspect"),Br=l(function(e){let t=d(this,ir).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Sg=l(function(e,t){d(this,cn).setOrbit(gy(d(this,cn).orbit(),d(this,cn).lookHeight(),C(this,Ne,df).call(this,e),C(this,Ne,df).call(this,t),C(this,Ne,Mg).call(this)))},"#pan"),_v=l(function(e){if(d(this,Ni).stop(),d(this,Kn)?.hover(null),e.pointerType==="touch"&&(d(this,ui).set(e.pointerId,C(this,Ne,Br).call(this,e)),d(this,ui).size===2)){k(this,Rn,null),C(this,Ne,kr).call(this),k(this,hi,C(this,Ne,Pc).call(this));return}if(e.isPrimary&&e.button!==2){if(d(this,ir).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,rr,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new lf(e),[n,r]=C(this,Ne,Br).call(this,e),{clientX:s,clientY:a}=e;k(this,Rn,t),k(this,Go,[n,r]),C(this,Ne,kr).call(this),k(this,Ss,window.setTimeout(()=>{k(this,Ss,null),d(this,Rn)===t&&!t.dragging()&&d(this,Kn)?.menu(n,r,s,a,!0)===!0&&k(this,Rn,null)},t2))}}},"#down"),kr=l(function(){d(this,Ss)!==null&&(window.clearTimeout(d(this,Ss)),k(this,Ss,null))},"#stopHold"),yv=l(function(e){if(d(this,Kn)===null||!d(this,Kn).menuOnRightClick()||(e.preventDefault(),d(this,Kn).menuOpen()))return;let[t,n]=C(this,Ne,Br).call(this,e);d(this,Kn).menu(t,n,e.clientX,e.clientY,!1)&&(C(this,Ne,kr).call(this),k(this,Rn,null))},"#rightClick"),vv=l(function(e){if(d(this,ui).has(e.pointerId)&&(d(this,ui).set(e.pointerId,C(this,Ne,Br).call(this,e)),d(this,hi)!==null)){C(this,Ne,wv).call(this);return}let t=d(this,rr);if(t!==null&&t.pointerId===e.pointerId){let s=d(this,cn).orbit();d(this,cn).setOrbit(da({...s,yaw:s.yaw-(e.clientX-t.x)*n2,pitch:s.pitch+(e.clientY-t.y)*xv})),t.x=e.clientX,t.y=e.clientY;return}let n=d(this,Rn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!d(this,Ni).gliding()){let[s,a]=C(this,Ne,Br).call(this,e);d(this,Kn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;C(this,Ne,kr).call(this);let r=C(this,Ne,Br).call(this,e);C(this,Ne,Sg).call(this,d(this,Go),r),k(this,Go,r)},"#move"),Mv=l(function(e){if(d(this,ui).delete(e.pointerId),d(this,hi)!==null){k(this,hi,d(this,ui).size<2?null:C(this,Ne,Pc).call(this));return}if(d(this,rr)?.pointerId===e.pointerId){k(this,rr,null);return}let t=d(this,Rn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,Rn,null),C(this,Ne,kr).call(this),!t.dragging()){let[n,r]=C(this,Ne,Br).call(this,e);d(this,Kn)?.click(n,r,e.clientX,e.clientY);return}Di()||d(this,Ni).start(t.releaseVelocity(e.timeStamp))}},"#up"),Sv=l(function(e){d(this,ui).delete(e.pointerId),d(this,hi)!==null&&k(this,hi,d(this,ui).size<2?null:C(this,Ne,Pc).call(this)),d(this,Rn)?.pointerId===e.pointerId&&(k(this,Rn,null),C(this,Ne,kr).call(this)),d(this,rr)?.pointerId===e.pointerId&&k(this,rr,null)},"#cancel"),Pc=l(function(){let[e,t]=[...d(this,ui).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:d(this,cn).orbit()}},"#measurePair"),wv=l(function(){let e=d(this,hi),t=C(this,Ne,Pc).call(this);e===null||t===null||d(this,cn).setOrbit(da({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*xv}))},"#twoFingers"),Ev=l(function(e){e.preventDefault();let t=d(this,pf).turned(e,d(this,Ms)?.at??null);t!==0&&(d(this,Ni).stop(),C(this,Ne,Av).call(this,t,C(this,Ne,Br).call(this,e)))},"#wheelTurned"),Av=l(function(e,t){let n=d(this,cn).orbit(),r=To(n,e),s=Ao(n,d(this,cn).lookHeight(),C(this,Ne,df).call(this,t),C(this,Ne,Mg).call(this));if(s===null||r.distance===n.distance){d(this,cn).setOrbit(r);return}let a=1-r.distance/n.distance;d(this,cn).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),ff=l(function(e,t){if(e.preventDefault(),d(this,hi)!==null){k(this,Ms,null);return}if(t==="end"){k(this,Ms,null);return}if(t==="start"){d(this,Ni).stop(),k(this,Rn,null),C(this,Ne,kr).call(this),k(this,Ms,{orbit:d(this,cn).orbit(),at:e.timeStamp});return}let n=d(this,Ms);n!==null&&(n.at=e.timeStamp,d(this,cn).setOrbit(da({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(wg,"CameraInput");var vg=wg,Tv=vg;var i2=["#9a9a9a","#4a4a4a"],Ic=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?i2:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Eg=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),r2=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),s2=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=Eg(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Ic(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:Ic(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:p})=>p==="Fortified"),veteran:(o.improvements??[]).some(({_:p})=>p==="Veteran"),health:r2(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h,inCity:!!i.city}},"markerFor"),Ag=s2;var Lv={step:250,ramp:100,most:2e3},Dv={step:125,ramp:50,most:1e3},Nv=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),a2=50,Cv=.3,Rv=1,o2=.05,l2=.02,Tg=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),Pv=l((i,e)=>{let{started:t,from:n,speed:r,rising:s,rise:a,top:o,going:c,stopping:u,fall:h,to:p}=i,f=Math.max(0,e-t);if(f<s)return{along:n+r*f+a*f*f/2,speed:r+a*f};let m=n+(r+o)/2*s;if(f<s+c)return{along:m+o*(f-s),speed:o};let x=m+o*c,v=f-s-c;return v<u?{along:x+o*v-h*v*v/2,speed:o-h*v}:{along:p,speed:0}},"motionAt"),Lc=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),Iv=l((i,e,t,n,r)=>{let s=Math.max(0,n-e),a=Math.max(1,r.ramp),o=Math.max(1/r.step,r.most>a*2?s/(r.most-a):0),c=o/a;if(s<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=s){let g=2*s/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:g,fall:t/g,to:n}}let u=Math.min(o,Math.sqrt(c*s+t*t/2)),h=Math.abs(u-t)/c,p=u>=t?c:-c,f=u/c,m=(t+u)/2*h,x=u*f/2,v=Math.max(0,(s-m-x)/u);return{started:i,from:e,speed:t,rising:h,rise:p,top:u,going:v,stopping:f,fall:c,to:n}},"plan"),Ho=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),Dc=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),Cg=l(i=>i*i*(3-2*i),"eased"),Wo=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),Xo,_n,di,Fc,Oc,it,Uv,Fv,Pg,Ig,Ov,Lg,mf,Nc,Uc,Dg,va,Ng=class Ng{constructor(e){V(this,it);V(this,Xo);V(this,_n,new Map);V(this,di,new Map);V(this,Fc,[]);V(this,Oc,0);k(this,Xo,e)}walking(e){return d(this,di).has(e)}size(){return d(this,_n).size}step(e,t,n,r,s,a,o,c=!1){let u=d(this,di).get(e),h=u===void 0?void 0:d(this,_n).get(u),p=h===void 0?r:C(this,it,mf).call(this,h,a),f=h===void 0?0:C(this,it,Uc).call(this,h,C(this,it,Nc).call(this,h,a)),m=[...d(this,_n).values()].find(x=>x!==h&&(c||!x.flies)&&C(this,it,Uv).call(this,x,t,n,a)&&C(this,it,Ov).call(this,C(this,it,mf).call(this,x,x.stepped),h===void 0?r:C(this,it,mf).call(this,h,x.stepped))&&Cv*Math.abs(Cg(C(this,it,Uc).call(this,x,C(this,it,Nc).call(this,x,a)))-Cg(f))<l2);if(m!==void 0)return h!==void 0&&C(this,it,Ig).call(this,h,e),m.units.push(e),d(this,di).set(e,m.id),m.id;if(h!==void 0&&Tg(h.squares[h.squares.length-1],t)){if(h.units.length>1){let x={...h,id:`walk-${++yi(this,Oc)._}`,units:h.units.filter(v=>v!==e),points:[...h.points],squares:[...h.squares]};d(this,_n).set(x.id,x),x.units.forEach(v=>d(this,di).set(v,x.id)),h.units=[e]}return C(this,it,Pg).call(this,h,n,s,a,o,c),h.id}return h!==void 0&&C(this,it,Ig).call(this,h,e),C(this,it,Fv).call(this,e,t,n,p,s,a,o,{flies:c,climbed:f})}at(e){let t=[],n=[];return d(this,_n).forEach(r=>{let s=C(this,it,va).call(this,r,e);if(e>=Lc(r.motion)){n.push(s),C(this,it,Lg).call(this,r);return}t.push(s)}),{going:t,ended:n}}dropped(){return d(this,Fc).splice(0)}endsAt(e){let t=d(this,di).get(e),n=t===void 0?void 0:d(this,_n).get(t);return n===void 0?null:Lc(n.motion)}nextEnd(){let e=null;return d(this,_n).forEach(t=>{let n=Lc(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return d(this,_n).forEach(r=>{e(r.units)&&(n.push(C(this,it,va).call(this,r,Math.max(t,Lc(r.motion)))),C(this,it,Lg).call(this,r))}),n}endAll(e){let t=[...d(this,_n).values()].map(n=>C(this,it,va).call(this,n,Math.max(e,Lc(n.motion))));return d(this,_n).clear(),d(this,di).clear(),t}};Xo=new WeakMap,_n=new WeakMap,di=new WeakMap,Fc=new WeakMap,Oc=new WeakMap,it=new WeakSet,Uv=l(function(e,t,n,r){let s=e.squares.length-1;return s>0&&r-e.stepped<=a2&&Tg(e.squares[s-1],t)&&Tg(e.squares[s],n)},"#justMade"),Fv=l(function(e,t,n,r,s,a,o,{flies:c,climbed:u}){let h=`walk-${++yi(this,Oc)._}`,p={id:h,units:[e],from:t,points:[r],squares:[t],stepped:a,motion:Iv(a,0,0,0,o),turned:null,flies:c,flown:0,climb:{from:u,at:0}};return d(this,_n).set(h,p),d(this,di).set(e,h),C(this,it,Pg).call(this,p,n,s,a,o,c),h},"#setOff"),Pg=l(function(e,t,n,r,s,a){let{u:o,v:c}=d(this,Xo),u=e.points[e.points.length-1],h=u.middle??u.at,{along:p,speed:f}=Pv(e.motion,r),m=Math.max(0,Math.floor(p)-1),x=e.points.length>1?C(this,it,va).call(this,e,r).facing:null,v=e.points.length-1,g=p-(v-1),b=C(this,it,Nc).call(this,e,r);e.points.length>1&&(e.climb={from:C(this,it,Uc).call(this,e,b),at:e.flown+b}),e.flies=a,u.middle!==void 0&&g*Math.hypot(u.middle[0]-u.at[0],u.middle[1]-u.at[1])<.01&&(e.points[v]={at:u.middle,lift:0,middle:u.middle,...u.via===void 0?{}:{via:u.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[Ho(n.at[0],u.at[0],o),Ho(n.at[1],u.at[1],c)],lift:n.lift,...n.middle===void 0?{}:{middle:[Ho(n.middle[0],h[0],o),Ho(n.middle[1],h[1],c)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=r,e.motion=Iv(r,p-m,f,e.points.length-1,s),e.turned=null,x!==null&&(e.turned={offset:Wo(0,x-C(this,it,va).call(this,e,r).facing,1),at:r,over:s.step/2})},"#goOn"),Ig=l(function(e,t){e.units=e.units.filter(n=>n!==t),d(this,di).delete(t),e.units.length===0&&(d(this,_n).delete(e.id),d(this,Fc).push(e.id))},"#leave"),Ov=l(function(e,t){let{u:n,v:r}=d(this,Xo);return Math.hypot(Ho(e.at[0],t.at[0],n)-t.at[0],Ho(e.at[1],t.at[1],r)-t.at[1])<o2},"#beside"),Lg=l(function(e){d(this,_n).delete(e.id),e.units.forEach(t=>d(this,di).delete(t))},"#end"),mf=l(function(e,t){let{at:n,lift:r}=C(this,it,va).call(this,e,t);return{at:n,lift:r}},"#drawn"),Nc=l(function(e,t){return Math.min(e.points.length-1,Math.max(0,Pv(e.motion,t).along))},"#along"),Uc=l(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/Rv,(e.points.length-1-t)/Rv)):0},"#climbed"),Dg=l(function(e,t,n){let r=e.points[t],s=e.points[t+1]??r,a=l(g=>g.middle??g.at,"middle");if(s.via===void 0||s.via.length===0)return{at:[r.at[0]+(s.at[0]-r.at[0])*n,r.at[1]+(s.at[1]-r.at[1])*n],way:s===r?null:Dc(a(r),a(s))};let[o,c]=a(s),u=[r.at,...s.via.map(([g,b])=>[o+g,c+b]),s.at],h=u.slice(1).map((g,b)=>Math.hypot(g[0]-u[b][0],g[1]-u[b][1])),p=h.reduce((g,b)=>g+b,0),f=Dc(a(r),a(s)),m=u.slice(1).map((g,b)=>Dc(u[b],g)??f??0),x=u.map((g,b)=>{let y=m[b-1],w=m[b];return y===void 0?w:w===void 0?y:Wo(y,w,.5)}),v=Math.min(1,Math.max(0,n))*p;for(let g=0;g<h.length;g++){let b=h[g],y=u[g],w=u[g+1];if(v<=b||g===h.length-1){let M=b===0?0:Math.min(1,v/b);return{at:[y[0]+(w[0]-y[0])*M,y[1]+(w[1]-y[1])*M],way:Wo(x[g],x[g+1],M)}}v-=b}return{at:[s.at[0],s.at[1]],way:Dc(a(r),a(s))}},"#stepAt"),va=l(function(e,t){let{points:n,squares:r,turned:s}=e,a=n.length-1,o=C(this,it,Nc).call(this,e,t),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],p=n[c+1]??h,{at:f,way:m}=C(this,it,Dg).call(this,e,c,u),x=l((M,R)=>M<0||M>=a?null:C(this,it,Dg).call(this,e,M,R).way,"way"),v=l(M=>{let R=x(M,1),A=x(M+1,0);return R===null||A===null?null:Wo(0,A-R,1)},"turnAt"),g=m??0,b=Dc(h.middle??h.at,p.middle??p.at),y=(()=>{if(u>.75){let M=v(c);if(M!==null)return g+M*(u-.75)*2;if(c===a-1&&b!==null)return Wo(g,b,(u-.75)*4)}else if(u<.25){let M=v(c-1);if(M!==null)return g-M*(.5-u*2);if(c===0&&b!==null)return Wo(b,g,u*4)}return g})(),w=s!==null&&t-s.at<s.over?y+s.offset*(1-Math.max(0,t-s.at)/s.over):y;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(p.lift-h.lift)*u,aloft:Cv*Cg(C(this,it,Uc).call(this,e,o)),facing:w,from:e.from,before:r[a-1]??r[a],to:r[a]}},"#walker"),l(Ng,"Walks");var Rg=Ng,Bv=Rg;var c2=l(({kind:i,start:e,duration:t},n)=>{let r=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return i==="in"?r:1-r},"fadeAt"),sr,gf,Fg=class Fg{constructor(){V(this,sr,new Map);V(this,gf,0)}size(){return d(this,sr).size}add(e,t,n=500){let r=`fade-${++yi(this,gf)._}`;return d(this,sr).set(r,{id:r,kind:e,start:t,duration:n}),r}at(e){let t=[],n=[];return d(this,sr).forEach((r,s)=>{if(e>=r.start+r.duration){n.push(s),d(this,sr).delete(s);return}t.push({id:s,kind:r.kind,opacity:c2(r,e)})}),{going:t,ended:n}}end(e){d(this,sr).delete(e)}endAll(){let e=[...d(this,sr).keys()];return d(this,sr).clear(),e}};sr=new WeakMap,gf=new WeakMap,l(Fg,"Fades");var Ug=Fg,kv=Ug;var ar,kg=class kg{constructor(){V(this,ar,new Map)}size(){return d(this,ar).size}trail(e,t,n){let r=d(this,ar).get(e),[s,a]=r?.points??[];if(r===void 0||s===void 0||a===void 0||n-a.time>=1200){d(this,ar).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let o=t[0]-a.at[0],c=t[1]-a.at[1],u=Math.hypot(o,c),h=Math.floor(u/.04),[p,f]=a.at,m=a.time;r.points.splice(1,0,...Array.from({length:h},(x,v)=>{let g=(h-v)*.04/u;return{at:[p+o*g,f+c*g],time:m+(n-m)*g}}))}at(e){let t=[],n=[];return d(this,ar).forEach((r,s)=>{if(r.points=r.points.filter(({time:a})=>e-a<1200),r.points.length===0){d(this,ar).delete(s),n.push(s);return}t.push({id:s,points:r.points.map(({at:a,time:o})=>({at:a,age:Math.max(0,e-o)}))})}),{going:t,gone:n}}endAll(){let e=[...d(this,ar).keys()];return d(this,ar).clear(),e}};ar=new WeakMap,l(kg,"Wakes");var Bg=kg,Og={start:.03,by:.17,over:.5},u2=.016,h2=.004,zv=l(i=>{let[e]=i,t=[];if(e===void 0)return t;let n=i.map((a,o)=>{let c=i[o-1]??a,u=i[o+1]??a,h=c.at[0]-u.at[0],p=c.at[1]-u.at[1],f=Math.hypot(h,p);return f===0?null:[-p/f,h/f]}),r=i.reduce((a,o,c)=>{let u=i[c-1];return a.push(u===void 0?0:a[c-1]+Math.hypot(o.at[0]-u.at[0],o.at[1]-u.at[1])),a},[]),s=l((a,o)=>{let c=i[a],u=n[a],h=Math.min(1,c.age/1200);if(u==null)return null;let p=Og.start+Og.by*Math.min(1,r[a]/Og.over),f=u2*(1-h),m=[c.at[0]-e.at[0]+u[0]*p*o,c.at[1]-e.at[1]+u[1]*p*o];return[[m[0]-u[0]*f/2,m[1]-u[1]*f/2],[m[0]+u[0]*f/2,m[1]+u[1]*f/2]]},"edges");for(let a=0;a+1<i.length;a++)[1,-1].forEach(o=>{let c=s(a,o),u=s(a+1,o);if(c===null||u===null)return;let[h,p]=c,[f,m]=u;[h,f,p,p,f,m].forEach(([x,v])=>t.push(x,h2,v))});return t},"wakeShape"),Gv=Bg;var qg={reach:200,back:300,fade:600},Vv=l(i=>({reach:i.reach/2,back:i.back/2,fade:i.fade/2}),"quickerBattle"),Yg=.45,Bc=l(i=>i.start+i.pace.reach,"blowAt"),zg=l(i=>Bc(i)+(i.won?Math.max(i.pace.back,i.pace.fade):i.pace.fade),"battleEnds"),Gg=l(i=>Math.min(1,Math.max(0,i)),"clamp"),d2=l(i=>i*i,"easeIn"),f2=l(i=>i*i*(3-2*i),"easeInOut"),p2=l((i,e)=>{let{reach:t,back:n,fade:r}=i.pace,s=e-Bc(i),a=1-Gg(r<=0?1:s/r);return s<0?{reach:d2(Gg(t<=0?1:(e-i.start)/t)),attacker:1,fallen:1}:i.won?{reach:1-f2(Gg(n<=0?1:s/n)),attacker:1,fallen:a}:{reach:1,attacker:a,fallen:0}},"battleAt"),Vg=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),m2=l((i,e)=>i.attacker===e.attacker||i.attacker===e.defender,"waitsFor"),nn,or,xf,lr,Wg,Xg,Hv,$g=class $g{constructor(){V(this,lr);V(this,nn,[]);V(this,or,new Set);V(this,xf,0)}size(){return d(this,nn).length}attacking(e){return d(this,nn).some(t=>t.attacker===e)}fighting(e){return d(this,nn).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return d(this,nn).find(t=>!d(this,or).has(t.id)&&Vg(t.defenderSquare,e))??null}add(e,t,n,r=t){let s={...e,id:`battle-${++yi(this,xf)._}`,start:C(this,lr,Wg).call(this,e,n,d(this,nn),Math.max(t,r)),notBefore:r,pace:n};return d(this,nn).push(s),s}at(e){let t=[],n=[],r=[],s=new Set;return d(this,nn).forEach(a=>{if(e>=Bc(a)&&!d(this,or).has(a.id)&&(d(this,or).add(a.id),n.push(a)),e>=zg(a)){r.push(a);return}t.push(...C(this,lr,Hv).call(this,a,e,s))}),C(this,lr,Xg).call(this,r),{going:t,struck:n,ended:r}}endWhere(e,t){let n=d(this,nn).filter(e),r=d(this,nn).filter((a,o)=>n.includes(a)||!d(this,or).has(a.id)&&n.some(c=>d(this,nn).indexOf(c)>o&&Vg(c.defenderSquare,a.defenderSquare))),s=r.filter(a=>!d(this,or).has(a.id));return s.forEach(a=>d(this,or).add(a.id)),C(this,lr,Xg).call(this,r),r.length>0&&d(this,nn).forEach((a,o)=>{a.start>t&&(a.start=C(this,lr,Wg).call(this,a,a.pace,d(this,nn).slice(0,o),Math.max(t,a.notBefore)))}),{struck:s,ended:r}}busyUntil(e){return d(this,nn).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,zg(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};nn=new WeakMap,or=new WeakMap,xf=new WeakMap,lr=new WeakSet,Wg=l(function(e,t,n,r){return n.reduce((s,a)=>m2(a,e)?Math.max(s,zg(a)):Vg(a.defenderSquare,e.defenderSquare)?Math.max(s,Bc(a)-t.reach):s,r)},"#startOf"),Xg=l(function(e){e.length!==0&&(k(this,nn,d(this,nn).filter(t=>!e.includes(t))),e.forEach(t=>d(this,or).delete(t.id)))},"#take"),Hv=l(function(e,t,n){let{reach:r,attacker:s,fallen:a}=p2(e,t),{from:o,edge:c,fallsAt:u}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),s>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[o.at[0]+(c[0]-o.at[0])*r,o.at[1]+(c[1]-o.at[1])*r],lift:o.lift*(1-r),facing:e.facing,opacity:s}),e.won&&t>=Bc(e)&&a>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[u.at[0],u.at[1]],lift:u.lift,facing:e.defenderFacing,opacity:a}),h},"#fighters"),l($g,"Battles");var Hg=$g,Wv=Hg;var g2=1,x2=.04,b2=12,_2=l((i,e,t,n,r,{water:s=0,ceiling:a=g2}={})=>{let{from:o,direction:c}=G0(i,e,t,n),[u,h,p]=o,[f,m,x]=c;if(m>-1e-6)return null;let v=l(_=>[u+f*_,h+m*_,p+x*_],"at"),g=l(_=>{let[S,I,P]=v(_);return I-Math.max(s,r(S,P))},"above"),b=Math.max(0,(h-a)/-m),y=(h-s)/-m,w=x2/Math.max(1e-6,Math.hypot(f,x)),M=b;for(let _=b;;_=Math.min(y,_+w)){if(g(_)<=0){let S=M,I=_;for(let U=0;U<b2;U++){let X=(S+I)/2;g(X)>0?S=X:I=X}let[P,,N]=v(I);return[P,N]}if(_>=y)break;M=_}let[R,,A]=v(y);return[R,A]},"pickGround"),Xv=_2;var bf=4,ws,kc,Ma,Sa,Nn,qo,Es,zr,zc,Gc,Vc,Ui,_f,qv,Jg,Kg=class Kg{constructor(e,t,n,r,s){V(this,Ui);V(this,ws);V(this,kc);V(this,Ma);V(this,Sa);V(this,Nn);V(this,qo);V(this,Es);V(this,zr);V(this,zc);V(this,Gc);V(this,Vc,l(e=>{let t=d(this,ws).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;d(this,Gc).call(this,n*d(this,Nn),r*d(this,qo))},"#click"));k(this,ws,e),k(this,Ma,t),k(this,Sa,n),k(this,Nn,t.period().u),k(this,qo,r),k(this,Gc,s),k(this,zr,document.createElement("canvas"));let{v:a}=t.period();k(this,Es,a),k(this,zc,[[0,0],[-d(this,Nn),0],...a===null?[]:[[0,-a],[-d(this,Nn),-a]]]);let o=Math.max(1,Math.round(d(this,Nn)*bf)),c=Math.max(1,Math.round(d(this,qo)*bf));[e,d(this,zr)].forEach(u=>{u.width=o,u.height=c}),k(this,kc,e.getContext("2d")),e.addEventListener("click",d(this,Vc))}dispose(){d(this,ws).removeEventListener("click",d(this,Vc))}redraw(){let e=d(this,zr).getContext("2d");if(e===null)return;let t=d(this,Sa).width(),n=d(this,Sa).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,d(this,zr).width,d(this,zr).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=d(this,Sa).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=na(c).colour,d(this,zc).forEach(([p,f])=>{C(this,Ui,qv).call(this,e,a,s,p,f),e.fill()});let[u,h]=d(this,Ma).centre(a,s);if(o.city)r.push([u,h,Ic(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=Eg(o.units,null);p!==null&&r.push([u,h,Ic(p.player)[0],1.4])}}r.forEach(([s,a,o,c])=>C(this,Ui,Jg).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=d(this,kc);if(n===null)return;if(n.clearRect(0,0,d(this,ws).width,d(this,ws).height),n.drawImage(d(this,zr),0,0),t!==null){let[h,p]=d(this,Ma).centre(t.x,t.y);n.fillStyle="#ffffff",C(this,Ui,Jg).call(this,h,p).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=d(this,Es),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-d(this,Nn)*Math.floor(s/d(this,Nn)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-d(this,Nn),0,d(this,Nn)].forEach(p=>{n.beginPath(),e.forEach(([f,m],x)=>{let[v,g]=C(this,Ui,_f).call(this,f+o+p,m+c+h);x===0?n.moveTo(v,g):n.lineTo(v,g)}),n.closePath(),n.stroke()}))}};ws=new WeakMap,kc=new WeakMap,Ma=new WeakMap,Sa=new WeakMap,Nn=new WeakMap,qo=new WeakMap,Es=new WeakMap,zr=new WeakMap,zc=new WeakMap,Gc=new WeakMap,Vc=new WeakMap,Ui=new WeakSet,_f=l(function(e,t){return[e*bf,t*bf]},"#px"),qv=l(function(e,t,n,r=0,s=0){e.beginPath(),d(this,Ma).outline(t,n).forEach(([a,o],c)=>{let[u,h]=C(this,Ui,_f).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Jg=l(function(e,t){return(d(this,Es)===null?[0]:[-d(this,Es),0,d(this,Es)]).flatMap(r=>[-d(this,Nn),0,d(this,Nn)].map(s=>C(this,Ui,_f).call(this,e+s,t+r)))},"#everywhere"),l(Kg,"Minimap3D");var Zg=Kg,Yv=Zg;var y2=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),$v=l(i=>{let e=y2(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var Zv=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),Jv=l(i=>i.city??i.workedBy??null,"squareCity");var v2=.9,M2=l(i=>{let{columns:e,icons:t}=$v(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),S2=l((i,e)=>v2*e/Math.hypot(i,2),"yieldIconSize"),Kv=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),jv=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=M2(e);return r.length===0?null:{at:i,size:S2(n,t),slots:r}},"laidYields"),Qv=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:p})=>{let f=r.get(u);f===void 0&&(f=n.names.push(u)-1,r.set(u,f)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=p,n.sizes[s]=o,n.cells[s]=f,s++})}),n},"yieldMesh");var eM=l((i,{orbit:e,look:t,width:n,height:r,period:s,reach:a})=>{let o=n/r,c=Co(e,t),u=[(e.focus[0]-c[0])/e.distance,(t-c[1])/e.distance,(e.focus[1]-c[2])/e.distance],{near:h,far:p}=fa(e.distance),f=Kd(e.focus,$0(e),s),m=l(([v,g])=>[(v+1)/2*n,(1-g)/2*r],"onScreen"),x=[];return i.forEach(({key:v,centre:g,outline:b})=>f.forEach(([y,w])=>{let M=l(([U,X,F])=>[U+y,X,F+w],"moved"),R=M(g),A=(R[0]-c[0])*u[0]+(R[1]-c[1])*u[1]+(R[2]-c[2])*u[2];if(A>p)return;let _=Ro(e,t,R,o);if(_===null)return;let[S]=m(_);if(S<-a||S>n+a)return;let I=b.map(U=>Ro(e,t,M(U),o));if(I.some(U=>U===null))return;let P=Math.max(...I.map(U=>m(U)[1]));if(P<-a||P>r)return;let N=Math.min(1,Math.max(0,(A-h)/(p-h)));x.push({key:v,x:S,y:P,clear:1-N*N*(3-2*N)})})),x.sort((v,g)=>v.y-g.y)},"bannerPlaces");var w2=10,E2=4e3,nM=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),A2=350,T2=2e3,C2=8,iM=l(i=>({...i,...i.hitPoints?{hitPoints:{...i.hitPoints}}:{},...i.defence?{defence:{...i.defence}}:{},...i.improvements?{improvements:[...i.improvements]}:{}}),"keptUnit"),rM=l(i=>Object.fromEntries(Object.entries(i).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),R2=l(i=>i&&{...i,...i.growth?{growth:rM(i.growth)}:{},...i.build?{build:rM(i.build)}:{},...i.yields?{yields:i.yields.map(e=>({...e}))}:{}},"keptCity"),P2=500,I2=.25,L2=400,Ft,$c,Zc,We,At,Aa,Jc,Kc,pt,Rt,Pn,Jo,jc,Ta,Rs,Ko,Qc,eu,jn,jo,fi,rn,Oi,Ca,Ra,Un,Vr,pi,Ps,Qo,el,Zt,Qn,Is,cr,Hr,ur,Wr,tu,Ls,Ds,ei,Pa,tl,mi,ti,gi,hr,dr,nu,iu,ru,fr,Ns,Xr,ni,nl,il,qr,xi,Bi,rl,su,sl,Us,au,pr,ou,Yr,Ia,Fs,La,al,ki,lu,bi,Os,cu,Bs,mr,Da,Na,uu,hu,ol,gr,ll,du,cl,ul,ks,D,Qg,sM,aM,Yo,ex,As,oM,lM,$o,yf,tx,nx,Ts,ix,vf,rx,Hc,sx,ax,cM,uM,Mf,Wc,ox,hM,Sf,dM,fM,pM,wf,mM,lx,gM,wa,Ef,xM,bM,_M,Af,Ea,Xc,yM,vM,MM,cx,Cs,SM,ux,qc,Gr,Yc,wM,EM,hx,Fi,AM,Tf,TM,Cf,dx,fx,px,CM,RM,PM,IM,Zo,mx,LM,DM,gx,zt,NM,UM,xx,bx=class bx{constructor(e,t=Cy){V(this,D);V(this,Ft);V(this,$c);V(this,Zc,[]);V(this,We);V(this,At);V(this,Aa,null);V(this,Jc,0);V(this,Kc,"");V(this,pt);V(this,Rt,null);V(this,Pn,null);V(this,Jo);V(this,jc);V(this,Ta);V(this,Rs,null);V(this,Ko,null);V(this,Qc);V(this,eu,!1);V(this,jn);V(this,jo);V(this,fi,new Map);V(this,rn);V(this,Oi,new Map);V(this,Ca,new Map);V(this,Ra,new Map);V(this,Un,new Map);V(this,Vr,new Set);V(this,pi,new Map);V(this,Ps,0);V(this,Qo,new Map);V(this,el,new Map);V(this,Zt,new Wv);V(this,Qn,new kv);V(this,Is,new Gv);V(this,cr,new Map);V(this,Hr,new Map);V(this,ur,new Map);V(this,Wr,new Map);V(this,tu,!1);V(this,Ls,new Map);V(this,Ds,null);V(this,ei,new Map);V(this,Pa,new Map);V(this,tl,new Set);V(this,mi,new Set);V(this,ti);V(this,gi,null);V(this,hr,null);V(this,dr,null);V(this,nu,l(()=>{C(this,D,wa).call(this)&&k(this,dr,null),C(this,D,Ef).call(this)},"#pressed"));V(this,iu,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||C(this,D,Ef).call(this)},"#keyed"));V(this,ru);V(this,fr,null);V(this,Ns,null);V(this,Xr);V(this,ni,l(()=>{let e=d(this,Ns);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,Ns,null),document.removeEventListener("keydown",d(this,ni),!0),e.open&&d(this,jn).endTooltip(d(this,Ft)))},"#endHover"));V(this,nl,null);V(this,il,!0);V(this,qr,new Map);V(this,xi);V(this,Bi,new Map);V(this,rl,!1);V(this,su,!1);V(this,sl,"");V(this,Us,new Map);V(this,au,null);V(this,pr,null);V(this,ou,l(()=>{},"#stopRestyled"));V(this,Yr,null);V(this,Ia,new Map);V(this,Fs,new Map);V(this,La,[]);V(this,al,0);V(this,ki,null);V(this,lu,null);V(this,bi,!0);V(this,Os);V(this,cu,l(()=>{},"#stopUnitSize"));V(this,Bs,!1);V(this,mr,!0);V(this,Da,!1);V(this,Na,new Map);V(this,uu);V(this,hu,l(()=>{},"#stopArtChanged"));V(this,ol,!1);V(this,gr);V(this,ll);V(this,du,"");V(this,cl,l(()=>C(this,D,xx).call(this),"#resizeHandler"));V(this,ul,null);V(this,ks,!1);k(this,Ft,e.mapCanvas),k(this,$c,e.coveredBy),k(this,gr,e.art),k(this,xi,e.cityBanners??null),k(this,jo,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,Os,e.unitSize?.get()??1),k(this,ll,e.art.id()),this.world=e.world,k(this,We,new fv(e.world)),d(this,We).keepCities((r,s)=>{let a=`${r},${s}`;for(let o of d(this,ei).values())if(o.square===a)return o.city}),k(this,rn,new Bv(d(this,We).layout.period())),k(this,ti,e.walks),k(this,uu,Kv(d(this,We).layout,e.world.topology())),k(this,La,e.world.tiles()),k(this,al,d(this,La).length),k(this,jc,e.cameraDistance),k(this,Qc,e.lockVerticalEdges);let n=e.cameraDistance.get();if(k(this,pt,C(this,D,qc).call(this,{...py(d(this,We).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,Ta,d(this,pt).distance),this.portal=new Nx(e,{centre:l(()=>C(this,D,SM).call(this),"centre"),centreOn:l((r,s)=>C(this,D,bM).call(this,r,s),"centreOn"),changed:l(()=>C(this,D,zt).call(this),"changed"),visible:l((r,s,a)=>C(this,D,Ea).call(this,r,s,a),"visible")}),k(this,At,t(e.mapCanvas,{period:d(this,We).layout.period(),ground:d(this,We).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,nl,new Yv(e.minimapCanvas,d(this,We).layout,e.world,d(this,We).extentV(),(r,s)=>{k(this,dr,null),C(this,D,Yc).call(this,{...d(this,Rt)?.to??d(this,pt),focus:[r,s]})})),e.debug&&e.mapCanvas.parentElement&&(k(this,Aa,C(this,D,NM).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),d(this,xi)!==null&&e.mapCanvas.parentElement){let r=document.createElement("canvas");r.className="map3d-banners",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(r),k(this,pr,r)}else k(this,xi,null);k(this,sl,C(this,D,Cf).call(this)),d(this,We).queueAll(...C(this,D,Cs).call(this)),C(this,D,Zo).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),k(this,jn,e.squares),k(this,Xr,e.playerId),k(this,ru,e.transport),k(this,Jo,new Tv(e.mapCanvas,{orbit:l(()=>d(this,pt),"orbit"),lookHeight:l(()=>d(this,Pn)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>C(this,D,yM).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>C(this,D,vM).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>d(this,jn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>d(this,jn).menuOpen(),"menuOpen"),hover:l(r=>C(this,D,MM).call(this,r),"hover")})),window.addEventListener("resize",d(this,cl)),document.addEventListener("keydown",d(this,iu),!0),e.mapCanvas.addEventListener("pointerdown",d(this,nu),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,ul,new ResizeObserver(d(this,cl))),d(this,ul).observe(e.mapCanvas.parentElement)),C(this,D,xx).call(this),C(this,D,zt).call(this),k(this,cu,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==d(this,Os)&&!d(this,ks)&&(k(this,Os,r),C(this,D,Zo).call(this),C(this,D,zt).call(this))})??(()=>{})),k(this,hu,e.artChanged?.(()=>{d(this,ks)||(k(this,mr,!0),C(this,D,dx).call(this))})??(()=>{})),k(this,ou,d(this,xi)?.restyled(()=>{d(this,ks)||C(this,D,dx).call(this)})??(()=>{}))}land(){return d(this,We)}orbit(){return d(this,pt)}moving(){return d(this,Rt)!==null||d(this,Jo).moving()}setOrbit(e){d(this,ni).call(this),k(this,Rt,null),k(this,pt,C(this,D,qc).call(this,e)),C(this,D,zt).call(this)}activeUnit(){return{unit:d(this,ki),pendingTile:d(this,lu)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=d(this,Rt)?.to??d(this,pt);C(this,D,Yc).call(this,{...t,yaw:t.yaw+e*z0},C(this,D,Qg).call(this)+e*z0)}heading(){return{turn:(d(this,Rt)?.to??d(this,pt)).yaw,directions:Ux(d(this,We).layout,this.world.topology())}}faceNorth(){C(this,D,Yc).call(this,{...d(this,Rt)?.to??d(this,pt),yaw:0},nM(-d(this,pt).yaw))}debugViewModes(){return[]}dispose(){C(this,D,gx).call(this,!0),k(this,ks,!0),d(this,rn).endAll(0),d(this,Zt).endAll(0),d(this,Qn).endAll(),d(this,ur).clear(),d(this,Wr).clear(),d(this,Ls).clear(),k(this,Ds,null),d(this,cr).clear(),d(this,Hr).clear(),d(this,ei).clear(),d(this,Pa).clear(),d(this,mi).clear(),d(this,Un).clear(),d(this,Vr).clear(),d(this,pi).clear(),document.removeEventListener("keydown",d(this,iu),!0),d(this,Ft).removeEventListener("pointerdown",d(this,nu),!0),d(this,cu).call(this),d(this,hu).call(this),d(this,ou).call(this),d(this,pr)?.remove(),d(this,Bi).clear(),d(this,Us).clear(),d(this,ni).call(this),d(this,Jo).dispose(),d(this,nl)?.dispose(),window.removeEventListener("resize",d(this,cl)),d(this,ul)?.disconnect(),d(this,Yr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(d(this,Yr)),k(this,Yr,null),d(this,Aa)?.remove(),d(this,At).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=d(this,fr);e!==null&&(k(this,fr,null),d(this,Ft).classList.remove("picking-tile"),e.window?.close())}flush(){C(this,D,hx).call(this),C(this,D,zt).call(this)}mapEvent(e){if(e.kind==="moved"){C(this,D,aM).call(this,e.unit,e.from,e.to),C(this,D,Af).call(this,e.unit.id,e.from,e.to);return}C(this,D,Af).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),C(this,D,Af).call(this,e.defender.id,e.defender.tile,e.attacker.tile),C(this,D,sM).call(this,e)}measureCovered(){let e=d(this,Ft).getBoundingClientRect();k(this,Zc,d(this,$c).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};k(this,fr,r),d(this,Ft).classList.add("picking-tile"),r.window=d(this,jn).prompt(n,()=>{d(this,fr)===r&&(k(this,fr,null),d(this,Ft).classList.remove("picking-tile"))})}picking(){return d(this,fr)!==null}queueTile(e){let t=`${e.x},${e.y}`;d(this,Ia).set(t,e),d(this,Qo).set(t,++yi(this,Ps)._)}redrawArt(){let e=d(this,gr).id();return e===d(this,ll)?"unchanged":(k(this,ll,e),k(this,mr,!0),"redrawn")}releaseTiles(){let e=d(this,tu)&&C(this,D,Sf).call(this);e&&d(this,Ia).size>0&&d(this,Ds)===null&&k(this,Ds,new Set([...d(this,Hr).keys(),...d(this,Oi).keys()])),d(this,Ia).forEach((t,n)=>{let r=d(this,Qo).get(n)??0;e&&!d(this,Ls).has(n)&&d(this,Ls).set(n,d(this,cr).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),d(this,Fs).set(n,t),d(this,el).set(n,r),d(this,ei).forEach(s=>{s.square===n&&r>s.after&&(s.patched=!0)})}),d(this,Ia).clear(),d(this,Qo).clear(),d(this,Fs).size>0&&C(this,D,zt).call(this)}setActiveUnit(e,t){let n=d(this,ki)?.tile;if(k(this,ki,e),k(this,lu,t??null),C(this,D,wa).call(this)&&C(this,D,xM).call(this)&&C(this,D,Ef).call(this),C(this,D,wa).call(this)){C(this,D,zt).call(this);return}k(this,dr,null);let r=d(this,hr);k(this,gi,e?.id??null),k(this,hr,e?.tile??null),[n,r,e?.tile].forEach(s=>{s&&C(this,D,Fi).call(this,s.x,s.y)}),C(this,D,zt).call(this)}setWaiting(e){k(this,ol,e),e&&d(this,ni).call(this)}showActiveUnit(e){d(this,bi)||(k(this,bi,!0),d(this,We).showTowns(!0,...C(this,D,Cs).call(this)),C(this,D,Zo).call(this),C(this,D,zt).call(this))}shown(){return{units:d(this,bi),yields:d(this,Bs),waiting:d(this,ol)}}tilesPending(){return d(this,Fs).size}toggleUnits(){k(this,bi,!d(this,bi)),d(this,We).showTowns(d(this,bi),...C(this,D,Cs).call(this)),C(this,D,Zo).call(this),C(this,D,zt).call(this)}toggleYields(){k(this,Bs,!d(this,Bs)),k(this,mr,!0),C(this,D,zt).call(this)}zoomBy(e){d(this,ni).call(this),k(this,pt,To(d(this,pt),e)),d(this,Rt)!==null&&(d(this,Rt).from=To(d(this,Rt).from,e),d(this,Rt).to=To(d(this,Rt).to,e)),C(this,D,zt).call(this)}};Ft=new WeakMap,$c=new WeakMap,Zc=new WeakMap,We=new WeakMap,At=new WeakMap,Aa=new WeakMap,Jc=new WeakMap,Kc=new WeakMap,pt=new WeakMap,Rt=new WeakMap,Pn=new WeakMap,Jo=new WeakMap,jc=new WeakMap,Ta=new WeakMap,Rs=new WeakMap,Ko=new WeakMap,Qc=new WeakMap,eu=new WeakMap,jn=new WeakMap,jo=new WeakMap,fi=new WeakMap,rn=new WeakMap,Oi=new WeakMap,Ca=new WeakMap,Ra=new WeakMap,Un=new WeakMap,Vr=new WeakMap,pi=new WeakMap,Ps=new WeakMap,Qo=new WeakMap,el=new WeakMap,Zt=new WeakMap,Qn=new WeakMap,Is=new WeakMap,cr=new WeakMap,Hr=new WeakMap,ur=new WeakMap,Wr=new WeakMap,tu=new WeakMap,Ls=new WeakMap,Ds=new WeakMap,ei=new WeakMap,Pa=new WeakMap,tl=new WeakMap,mi=new WeakMap,ti=new WeakMap,gi=new WeakMap,hr=new WeakMap,dr=new WeakMap,nu=new WeakMap,iu=new WeakMap,ru=new WeakMap,fr=new WeakMap,Ns=new WeakMap,Xr=new WeakMap,ni=new WeakMap,nl=new WeakMap,il=new WeakMap,qr=new WeakMap,xi=new WeakMap,Bi=new WeakMap,rl=new WeakMap,su=new WeakMap,sl=new WeakMap,Us=new WeakMap,au=new WeakMap,pr=new WeakMap,ou=new WeakMap,Yr=new WeakMap,Ia=new WeakMap,Fs=new WeakMap,La=new WeakMap,al=new WeakMap,ki=new WeakMap,lu=new WeakMap,bi=new WeakMap,Os=new WeakMap,cu=new WeakMap,Bs=new WeakMap,mr=new WeakMap,Da=new WeakMap,Na=new WeakMap,uu=new WeakMap,hu=new WeakMap,ol=new WeakMap,gr=new WeakMap,ll=new WeakMap,du=new WeakMap,cl=new WeakMap,ul=new WeakMap,ks=new WeakMap,D=new WeakSet,Qg=l(function(){let e=d(this,Rt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),sM=l(function({attacker:e,defender:t,winner:n}){let r=d(this,ti)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Di()||r==="off"||e.player!==d(this,Xr)&&t.player!==d(this,Xr)&&!(d(this,ti)?.rivals()??!0)||!C(this,D,Ea).call(this,e.tile.x,e.tile.y,-.5)&&!C(this,D,Ea).call(this,t.tile.x,t.tile.y,-.5))return;let a=this.world.get(e.tile.x,e.tile.y).units.find(({id:_})=>_===e.id),o=`${t.tile.x},${t.tile.y}`,c=this.world.get(t.tile.x,t.tile.y),u=[...d(this,ei).values()].filter(({square:_,patched:S})=>_===o&&!S).at(-1),h=u===void 0?c.units.filter(({id:_})=>!d(this,mi).has(_)).map(iM):u.units.filter(({id:_})=>!(u.won&&_===u.defender));if(d(this,mi).has(e.id)||!h.some(({id:_})=>_===t.id))return;let p=d(this,Zt).busyUntil([e.id,t.id]);p!==null&&p-s>T2&&C(this,D,Wc).call(this,d(this,Zt).endWhere(_=>_.attacker===e.id||_.attacker===t.id,s)),C(this,D,ex).call(this,e.id);let[f,m]=d(this,We).layout.centre(e.tile.x,e.tile.y),[x,v]=d(this,We).layout.centre(t.tile.x,t.tile.y),{u:g,v:b}=d(this,We).layout.period(),y=l((_,S)=>S===null?_:_-S*Math.round(_/S),"short"),w=y(x-f,g),M=y(v-m,b),R=`${e.tile.x},${e.tile.y}`,A=d(this,Zt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:C(this,D,Yo).call(this,e.tile),edge:[f+w*Yg,m+M*Yg],fallsAt:C(this,D,Yo).call(this,t.tile),facing:d(this,fi).get(e.id)??Math.atan2(w,M),defenderFacing:d(this,fi).get(t.id)??Math.atan2(-w,-M)},s,r==="fast"?Vv(qg):qg,d(this,rn).endsAt(e.id)??s);d(this,ei).set(A.id,{square:o,city:u?.city??R2(c.city),units:h,after:d(this,Ps),won:n==="attacker",defender:t.id,patched:!1}),a!==void 0&&d(this,Oi).set(e.id,a),[e.id,t.id].forEach(_=>d(this,pi).set(_,{squares:[R,o],after:d(this,Ps)})),C(this,D,Fi).call(this,e.tile.x,e.tile.y),C(this,D,Fi).call(this,t.tile.x,t.tile.y),C(this,D,zt).call(this)},"#fight"),aM=l(function(e,t,n){let r=d(this,ti)?.speed()??"normal";if(e.id===d(this,gi)&&k(this,hr,n),typeof requestAnimationFrame!="function"||Di()||r==="off")return;if(e.player!==d(this,Xr)&&d(this,Zt).attacking(e.id)){d(this,pi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,Ps)});return}C(this,D,Wc).call(this,d(this,Zt).endWhere(({attacker:p,defender:f})=>p===e.id||f===e.id,performance.now()));let s=d(this,rn).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:p})=>p===e.id)??(C(this,D,As).call(this,e.id)?d(this,Oi).get(e.id):void 0),o=e.player===d(this,Xr);if(a===void 0||!o&&!s&&(!(d(this,ti)?.rivals()??!0)||!C(this,D,Ea).call(this,t.x,t.y,-.5)&&!C(this,D,Ea).call(this,n.x,n.y,-.5)))return;let c=o?Lv:Dv;d(this,Oi).set(e.id,a),d(this,pi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,Ps)}),C(this,D,ex).call(this,e.id);let u=Vd(oc(a._,a.__??[])),h=u?void 0:d(this,We).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);d(this,rn).step(e.id,t,n,C(this,D,Yo).call(this,t),{...C(this,D,Yo).call(this,n),...h===void 0?{}:{via:h}},performance.now(),r==="fast"?Nv(c):c,u),C(this,D,zt).call(this)},"#walk"),Yo=l(function({x:e,y:t},n=!!this.world.get(e,t).city){let[r,s]=d(this,We).layout.centre(e,t),a=Math.max(0,d(this,We).surfaceAt(r,s)),o=[r,s+(n?ha:0)];return{at:o,lift:a-Math.max(0,d(this,We).surfaceAt(...o)),middle:[r,s]}},"#standing"),ex=l(function(e){d(this,Vr).delete(e)&&d(this,Un).forEach((t,n)=>{let r=t.units.filter(s=>s!==e);if(r.length!==t.units.length){if(r.length===0){d(this,Un).delete(n),C(this,D,Ts).call(this,n);return}d(this,Un).set(n,{...t,units:r})}})},"#stepsOn"),As=l(function(e){return d(this,rn).walking(e)||d(this,Vr).has(e)||d(this,Zt).attacking(e)||d(this,mi).has(e)},"#leftOff"),oM=l(function(e){if(d(this,rn).dropped().forEach(r=>C(this,D,Ts).call(this,r)),d(this,Un).forEach(r=>C(this,D,$o).call(this,r)),d(this,rn).size()===0)return;if(Di()||(d(this,ti)?.speed()??"normal")==="off"){C(this,D,Hc).call(this,d(this,rn).endAll(e));return}let{going:t,ended:n}=d(this,rn).at(e);C(this,D,Hc).call(this,n),t.forEach(r=>{C(this,D,$o).call(this,r)!==null&&r.units.some(a=>{let o=d(this,Oi).get(a);return o!==void 0&&oc(o._,o.__??[]).shape==="ship"})&&d(this,Is).trail(r.id,r.at,e)})},"#placeWalkers"),lM=l(function(e){if(d(this,Is).size()===0)return;if(Di()||(d(this,ti)?.speed()??"normal")==="off"){d(this,Is).endAll().forEach(r=>d(this,At).wake(r,null));return}let{going:t,gone:n}=d(this,Is).at(e);n.forEach(r=>d(this,At).wake(r,null)),t.forEach(({id:r,points:s})=>{let[a]=s;if(a===void 0){d(this,At).wake(r,null);return}let[o,c]=C(this,D,tx).call(this,a.at);d(this,At).wake(r,[o,0,c],zv(s))})},"#placeWakes"),$o=l(function(e){let t=C(this,D,ix).call(this,e.units);return C(this,D,yf).call(this,e,t),t},"#drawWalker"),yf=l(function({id:e,at:t,lift:n,facing:r,aloft:s=0},a,o=1){let c=a===null?null:JSON.stringify(a);c!==(d(this,Ra).get(e)??null)&&(d(this,At).setWalker(e,a),c===null?d(this,Ra).delete(e):d(this,Ra).set(e,c)),a!==null&&(d(this,At).placeWalker(e,C(this,D,nx).call(this,t,n),r,s),d(this,At).fadeWalker(e,o))},"#drawFigure"),tx=l(function(e){let{u:t,v:n}=d(this,We).layout.period(),r=l((s,a)=>a===null?s:(s%a+a)%a,"within");return[r(e[0],t),r(e[1],n)]},"#wrapped"),nx=l(function(e,t){let[n,r]=C(this,D,tx).call(this,e);return[n,Math.max(0,d(this,We).surfaceAt(n,r))+t,r]},"#onLand"),Ts=l(function(e){d(this,Ra).delete(e)&&d(this,At).setWalker(e,null)},"#takeAway"),ix=l(function(e){let t=e.flatMap(n=>{let r=d(this,Oi).get(n);return r===void 0?[]:[r]});return C(this,D,vf).call(this,t)},"#walkerMarker"),vf=l(function(e,t=d(this,gi)){return Ag({city:null,units:e},t,d(this,bi),d(this,jo),()=>0,d(this,Os))},"#unitsMarker"),rx=l(function({units:e}){return e.some(t=>d(this,pi).has(t))},"#awaitsPatch"),Hc=l(function(e){let t=new Set;e.forEach(n=>{let r={...n,units:n.units.filter(s=>!d(this,Zt).attacking(s))};if(r.units.length>0&&C(this,D,rx).call(this,r)){d(this,Un).set(r.id,r),r.units.forEach(s=>d(this,Vr).add(s)),C(this,D,$o).call(this,r);return}C(this,D,Ts).call(this,n.id),n.units.forEach(s=>d(this,Vr).delete(s)),C(this,D,sx).call(this,n.units,t)}),C(this,D,ax).call(this,t)},"#walksEnded"),sx=l(function(e,t){e.forEach(n=>{C(this,D,As).call(this,n)&&!d(this,mi).has(n)||(d(this,Ca).get(n)?.forEach(r=>t.add(r)),d(this,Ca).delete(n),d(this,Oi).delete(n))})},"#release"),ax=l(function(e){let t=d(this,gi);t!==null&&t!==(d(this,ki)?.id??null)&&!d(this,rn).walking(t)&&!d(this,Zt).attacking(t)&&C(this,D,gM).call(this,e),e.forEach(n=>{let[r,s]=n.split(",").map(Number);C(this,D,Fi).call(this,r,s)})},"#released"),cM=l(function(e){let t=new Set;if(d(this,Zt).size()===0){C(this,D,Mf).call(this,t);return}if(Di()||(d(this,ti)?.speed()??"normal")==="off"){C(this,D,Wc).call(this,d(this,Zt).endAll(e)),C(this,D,Mf).call(this,t);return}let{going:n,struck:r,ended:s}=d(this,Zt).at(e);r.forEach(a=>C(this,D,ox).call(this,a,!0)),n.forEach(a=>{if(!a.fallen&&d(this,rn).walking(a.unit)){C(this,D,Ts).call(this,a.id);return}C(this,D,mM).call(this,a)&&t.add(C(this,D,uM).call(this,a))}),C(this,D,lx).call(this,s),C(this,D,Mf).call(this,t)},"#placeBattles"),uM=l(function({battle:e,at:t,lift:n,opacity:r}){let s=`${e}-puff`;return d(this,tl).add(s),d(this,At).puff(s,C(this,D,nx).call(this,t,n),1-r),s},"#puff"),Mf=l(function(e){d(this,tl).forEach(t=>{e.has(t)||(d(this,tl).delete(t),d(this,At).puff(t,null))})},"#puffsOver"),Wc=l(function({struck:e,ended:t}){e.forEach(n=>C(this,D,ox).call(this,n,!1)),C(this,D,lx).call(this,t)},"#battlesOver"),ox=l(function(e,t){let{square:n,units:r}=d(this,ei).get(e.id)??{square:"",units:[]},{x:s,y:a}=e.defenderSquare,o=[...d(this,ei).entries()].find(([p,f])=>p!==e.id&&f.square===n)?.[1],c=new Set((o?.units??this.world.get(s,a).units).map(({id:p})=>p)),u=e.won?e.defender:e.attacker,h=r.filter(({id:p})=>e.won&&p===e.defender||!c.has(p)&&!C(this,D,As).call(this,p));d(this,ei).delete(e.id),d(this,We).changed([[s,a]],...C(this,D,Cs).call(this)),d(this,pi).has(u)&&d(this,mi).add(u),t&&e.won&&h.length>0&&d(this,Pa).set(e.id,h),C(this,D,Fi).call(this,s,a)},"#blow"),hM=l(function(e,t,{shown:n,ringed:r,inCity:s}){if((d(this,cr).get(e)?.units??[]).forEach(({id:a})=>{d(this,Hr).get(a)===e&&d(this,Hr).delete(a)}),t.length===0?d(this,cr).delete(e):d(this,cr).set(e,{units:t.map(iM),shown:n,ringed:r,inCity:s}),t.forEach(({id:a})=>d(this,Hr).set(a,e)),d(this,ur).size>0){let a=[...d(this,ur).entries()].filter(([,o])=>o.units.some(c=>t.some(({id:u})=>u===c.id))).map(([o])=>o);a.forEach(o=>d(this,Qn).end(o)),C(this,D,wf).call(this,a)}},"#drawnOn"),Sf=l(function(){return typeof requestAnimationFrame=="function"&&!Di()&&(d(this,ti)?.speed()??"normal")!=="off"},"#fadesShown"),dM=l(function(e){return d(this,Hr).has(e)||C(this,D,As).call(this,e)},"#drawnAnywhere"),fM=l(function(e,t){let n=[],r=[];if(e.forEach((c,u)=>{let h=c.units.filter(({id:f})=>!C(this,D,dM).call(this,f)),p=d(this,cr).get(u)?.shown??null;c.shown!==null&&h.some(({id:f})=>f===c.shown)&&n.push([u,c,h]),c.units.length===0&&p!==null&&!t.has(p)&&r.push([u,p])}),n.length+r.length===0||n.length+r.length>C2)return;let s=l(([c])=>{let[u,h]=c.split(",").map(Number);return C(this,D,Ea).call(this,u,h,0)},"onScreen"),a=performance.now(),o=(d(this,ti)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([c,u,h])=>{let[p,f]=c.split(",").map(Number);d(this,ur).set(d(this,Qn).add("out",a,o),{units:[...h.filter(({id:m})=>m===u.shown),...h.filter(({id:m})=>m!==u.shown)],shown:u.ringed?u.shown:null,at:C(this,D,Yo).call(this,{x:p,y:f},u.inCity),facing:u.shown===null?0:d(this,fi).get(u.shown)??0})}),r.filter(s).forEach(([c,u])=>{d(this,Wr).set(d(this,Qn).add("in",a,o),{key:c,unit:u}),d(this,At).fadeMarker(c,0)}),C(this,D,zt).call(this)},"#fadeChanged"),pM=l(function(e){if(d(this,Qn).size()===0)return;if(!C(this,D,Sf).call(this)){C(this,D,wf).call(this,d(this,Qn).endAll());return}let{going:t,ended:n}=d(this,Qn).at(e),r=[];t.forEach(({id:s,opacity:a})=>{let o=d(this,ur).get(s),c=d(this,Wr).get(s);if(o!==void 0){let u=C(this,D,vf).call(this,o.units,o.shown);if(u===null){d(this,Qn).end(s),r.push(s);return}C(this,D,yf).call(this,{id:s,at:[o.at.at[0],o.at.at[1]],lift:o.at.lift,facing:o.facing},u,a);return}if(c!==void 0){if((d(this,cr).get(c.key)?.shown??null)!==c.unit){d(this,Qn).end(s),r.push(s);return}d(this,At).fadeMarker(c.key,a)}}),C(this,D,wf).call(this,[...n,...r])},"#placeFades"),wf=l(function(e){e.forEach(t=>{let n=d(this,Wr).get(t);d(this,ur).delete(t)&&C(this,D,Ts).call(this,t),n!==void 0&&(d(this,Wr).delete(t),[...d(this,Wr).values()].some(({key:r})=>r===n.key)||d(this,At).fadeMarker(n.key,1))})},"#fadesOver"),mM=l(function(e){let t=d(this,Pa).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?C(this,D,vf).call(this,t):C(this,D,ix).call(this,[e.unit]);return C(this,D,yf).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),lx=l(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:r,attacker:s,won:a,from:o,attackerSquare:c,facing:u}=n;if(C(this,D,Ts).call(this,`${r}-fallen`),d(this,Pa).delete(r),d(this,ei).delete(r)&&d(this,We).changed([[n.defenderSquare.x,n.defenderSquare.y]],...C(this,D,Cs).call(this)),d(this,pi).has(s)&&!C(this,D,As).call(this,s))if(!a)d(this,mi).add(s);else{let h={id:r,units:[s],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:u,from:c,before:c,to:c};d(this,Un).set(r,h),d(this,Vr).add(s),C(this,D,$o).call(this,h);return}C(this,D,Ts).call(this,r),C(this,D,sx).call(this,[s],t)}),C(this,D,ax).call(this,t)},"#battlesEnded"),gM=l(function(e){let t=d(this,ki);[d(this,hr),t?.tile].forEach(r=>{r&&e.add(`${r.x},${r.y}`)}),k(this,gi,t?.id??null),k(this,hr,t?.tile??null),d(this,Un).forEach(r=>C(this,D,$o).call(this,r));let n=d(this,dr);n!==null&&(k(this,dr,null),C(this,D,ux).call(this,n.x,n.y))},"#caughtUp"),wa=l(function(){let e=d(this,gi);return e!==null&&e!==(d(this,ki)?.id??null)&&(d(this,rn).walking(e)||d(this,Zt).attacking(e))},"#holding"),Ef=l(function(){let e=d(this,gi);e===null||!C(this,D,wa).call(this)||(C(this,D,Hc).call(this,d(this,rn).endWhere(t=>t.includes(e),performance.now())),C(this,D,Wc).call(this,d(this,Zt).endWhere(({attacker:t})=>t===e,performance.now())),C(this,D,zt).call(this))},"#hurry"),xM=l(function(){let e=d(this,hr),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===d(this,gi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),bM=l(function(e,t){if(C(this,D,wa).call(this)){k(this,dr,{x:e,y:t});return}C(this,D,ux).call(this,e,t)},"#centreSoon"),_M=l(function(e){if(d(this,pi).forEach(({squares:n,after:r},s)=>{n.some(a=>(e.get(a)??0)>r)&&(d(this,pi).delete(s),d(this,mi).delete(s))}),d(this,Un).size===0)return;let t=[...d(this,Un).values()].filter(n=>!C(this,D,rx).call(this,n));t.forEach(n=>d(this,Un).delete(n.id)),C(this,D,Hc).call(this,t)},"#patched"),Af=l(function(e,t,n){let[r,s]=d(this,We).layout.centre(t.x,t.y),[a,o]=d(this,We).layout.centre(n.x,n.y),{u:c,v:u}=d(this,We).layout.period(),h=l((m,x)=>x===null?m:m-x*Math.round(m/x),"short"),p=h(a-r,c),f=h(o-s,u);p===0&&f===0||(d(this,fi).delete(e),d(this,fi).set(e,Math.round(Math.atan2(p,f)*1e3)/1e3),d(this,fi).size>E2&&d(this,fi).delete(d(this,fi).keys().next().value),[t,n].forEach(({x:m,y:x})=>C(this,D,Fi).call(this,m,x)),C(this,D,zt).call(this))},"#face"),Ea=l(function(e,t,n){let r=d(this,Ft).clientWidth,s=d(this,Ft).clientHeight;if(r<=0||s<=0)return!1;let a=d(this,dr),o=a===null?d(this,Rt)?.to??d(this,pt):{...d(this,Rt)?.to??d(this,pt),focus:d(this,We).layout.centre(a.x,a.y)},[c,u]=d(this,We).layout.centre(e,t),{u:h,v:p}=C(this,D,Gr).call(this),[f,m]=o.focus,x=l((S,I,P)=>P===null?S:S+P*Math.round((I-S)/P),"nearest"),v=[x(c,f,h),Math.max(0,d(this,We).heightAt(c,u)),x(u,m,p)],g=r/s,b=d(this,Pn)??0,y=Ro(o,b,v,g),w=Ro(o,b,[v[0]+Math.cos(o.yaw),v[1],v[2]+Math.sin(o.yaw)],g);if(y===null||w===null)return!1;let M=(y[0]+1)/2*r,R=(1-y[1])/2*s,A=Math.abs(w[0]-y[0])*(r/2),_=(n+.5)*A;return M>=_&&M<=r-_&&R>=_&&R<=s-_&&!d(this,Zc).some(({left:S,top:I,right:P,bottom:N})=>M>=S-A/2&&M<=P+A/2&&R>=I-A/2&&R<=N+A/2)},"#visible"),Xc=l(function(e,t){let n=d(this,Ft).clientWidth,r=d(this,Ft).clientHeight;if(n<=0||r<=0)return null;let s=Xv(d(this,pt),d(this,Pn)??0,[e/n*2-1,1-t/r*2],n/r,(p,f)=>d(this,We).heightAt(p,f));if(s===null)return null;let[a,o]=d(this,We).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(C(this,D,Gr).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),yM=l(function(e,t){let n=C(this,D,Xc).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=d(this,fr);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&d(this,jn).click(this.portal,n)},"#clicked"),vM=l(function(e,t,n,r,s){let a=d(this,ki),o=C(this,D,Xc).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),d(this,jn).menu(this.portal,n,r,a,o,d(this,ru),s),!0)},"#menu"),MM=l(function(e){let t=e===null||d(this,ol)||d(this,jn).menuOpen()?null:C(this,D,Xc).call(this,e.x,e.y),n=d(this,Ns);if(t===null||e===null){d(this,ni).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}d(this,ni).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,C(this,D,cx).call(this,s)},L2),k(this,Ns,s),document.addEventListener("keydown",d(this,ni),!0)},"#hovered"),cx=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===d(this,Ft),n=t?C(this,D,Xc).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){d(this,ni).call(this);return}let r=d(this,jn).tooltip(d(this,Ft),n,d(this,Xr),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&d(this,jn).endTooltip(d(this,Ft)),e.open=r},"#showHover"),Cs=l(function(){return[...d(this,pt).focus]},"#focus"),SM=l(function(){let[e,t]=d(this,We).layout.tileAt(...d(this,pt).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:C(this,D,Gr).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),ux=l(function(e,t){let[n,r]=d(this,We).layout.centre(e,t),[s,a]=(d(this,Rt)?.to??d(this,pt)).focus;if(n===s&&r===a)return;let o={...d(this,Rt)?.to??d(this,pt),focus:[n,r]},{u:c,v:u}=C(this,D,Gr).call(this),h=l((x,v)=>v===null?x:x-v*Math.round(x/v),"short"),[p,f]=d(this,pt).focus,m=Math.hypot(h(n-p,c),h(r-f,u));if(!d(this,eu)||m>d(this,pt).distance*1.5){k(this,eu,!0),this.setOrbit(o);return}C(this,D,Yc).call(this,o)},"#centreOn"),qc=l(function(e){return xy(da(e),C(this,D,Gr).call(this),d(this,We).extentV())},"#settle"),Gr=l(function(){let e=d(this,We).layout.period();return this.portal?.lockVerticalEdges()??d(this,Qc)?{u:e.u,v:null}:e},"#period"),Yc=l(function(e,t=C(this,D,Qg).call(this)+nM(e.yaw-(d(this,Rt)?.to??d(this,pt)).yaw)){d(this,ni).call(this),typeof requestAnimationFrame!="function"||Di()?(k(this,Rt,null),k(this,pt,C(this,D,qc).call(this,e))):k(this,Rt,{from:d(this,pt),to:e,started:null,turn:t,drawn:0}),C(this,D,zt).call(this)},"#moveTo"),wM=l(function(e){let t=d(this,Rt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/A2);return t.drawn=n*n*(3-2*n),k(this,pt,C(this,D,qc).call(this,by(t.from,t.to,n,C(this,D,Gr).call(this),t.turn))),n>=1&&k(this,Rt,null),n<1},"#moveCamera"),EM=l(function(e){let[t,n]=d(this,pt).focus,r=Math.max(0,d(this,We).heightAt(t,n));return!e||d(this,Pn)===null||Di()?(k(this,Pn,r),!1):(k(this,Pn,d(this,Pn)+(r-d(this,Pn))*I2),Math.abs(r-d(this,Pn))<.002?(k(this,Pn,r),!1):!0)},"#followHeight"),hx=l(function(){let e=[...d(this,Fs).values()].map(({x:h,y:p})=>[h,p]),t=this.world.tiles(),n=t!==d(this,La)||t.length!==d(this,al);k(this,La,t),k(this,al,t.length),d(this,Fs).clear();let r=C(this,D,RM).call(this,d(this,We).changed(e,...C(this,D,Cs).call(this),n)),s=new Set(e.map(([h,p])=>`${h},${p}`)),a=new Map([...s].map(h=>[h,d(this,el).get(h)??0]));d(this,el).clear();let o=d(this,Ls),c=d(this,Ds);k(this,Ls,new Map),k(this,Ds,null),d(this,ur).forEach(({units:[h]})=>{h!==void 0&&c?.add(h.id)}),e.forEach(([h,p])=>C(this,D,Fi).call(this,h,p)),r.forEach(([h,p])=>{let f=`${h},${p}`;!n&&!s.has(f)&&d(this,qr).has(f)&&C(this,D,Fi).call(this,h,p)}),C(this,D,CM).call(this,e,r),r.forEach(([h,p])=>d(this,Us).delete(`${h},${p}`));let u=d(this,Ns);u!==null&&u.open&&e.some(([h,p])=>h===u.x&&p===u.y)&&C(this,D,cx).call(this,u),(e.length>0||n)&&k(this,il,!0),n&&(k(this,mr,!0),d(this,qr).forEach((h,p)=>{let[f,m]=p.split(",").map(Number);C(this,D,Fi).call(this,f,m)})),c!==null&&C(this,D,Sf).call(this)&&!(n&&s.size*2>=t.length)&&C(this,D,fM).call(this,o,c),e.length>0&&C(this,D,_M).call(this,a)},"#takeTiles"),Fi=l(function(e,t){let n=`${e},${t}`,r=this.world.get(e,t),s=d(this,Zt).awaitingBlow({x:e,y:t}),a=s===null?void 0:d(this,ei).get(s.id),o=a===void 0?r.units:[...a.units,...r.units.filter(({id:y})=>!a.units.some(w=>w.id===y))];r.units.filter(({id:y})=>C(this,D,As).call(this,y)&&!d(this,mi).has(y)).forEach(y=>{let w=d(this,Ca).get(y.id)??new Set;w.add(n),d(this,Ca).set(y.id,w),d(this,Oi).set(y.id,y)});let u=o.filter(({id:y})=>!C(this,D,As).call(this,y)),h=a===void 0?r.city:a.city,p=Ag(a===void 0&&u.length===r.units.length?r:{city:h,units:u},d(this,gi),d(this,bi),d(this,jo),y=>d(this,fi).get(y.id)??0,d(this,Os)),f=p?.city&&C(this,D,AM).call(this,n,r,h)!==null?{...p,city:{...p.city,unnamed:!0}}:p;h||(d(this,Bi).delete(n),d(this,Us).delete(n)),C(this,D,hM).call(this,n,u,{shown:f?.unit?.id??null,ringed:f?.unit?.active===!0,inCity:(f?.unit??null)!==null&&f?.inCity===!0});let[m,x]=d(this,We).layout.centre(e,t),v=[m,Math.max(0,d(this,We).surfaceAt(m,x)),x],g=f===null?null:JSON.stringify([f,v]);g!==(d(this,qr).get(n)??null)&&(d(this,At).setMarker(n,v,f),C(this,D,IM).call(this,n,g))},"#mark"),AM=l(function(e,t,n){if(d(this,xi)===null||!n)return null;let r=C(this,D,Tf).call(this),s={...t,city:n},a=d(this,Bi).get(e),o="!",c=null;try{if(o=String(d(this,xi).key(s)),a?.signature===o)return a.banner;c=d(this,xi).paint(s,r)}catch(u){d(this,su)||(k(this,su,!0),console.error(u))}return d(this,Bi).set(e,{signature:o,banner:c}),c},"#bannerOf"),Tf=l(function(){return(d(this,au)??(window.devicePixelRatio||1))*(d(this,gr).zoom()/d(this,gr).scale())},"#bannerDensity"),TM=l(function(e){let t=d(this,Us).get(e);if(t===void 0){let[n,r]=e.split(",").map(Number),[s,a]=d(this,We).layout.centre(n,r),o=l((c,u)=>Math.max(0,d(this,We).surfaceAt(c,u)),"up");t={key:e,centre:[s,o(s,a),a],outline:d(this,We).layout.outline(n,r).map(([c,u])=>[c,o(c,u),u])},d(this,Us).set(e,t)}return t},"#bannerSiteOf"),Cf=l(function(){return`${d(this,gr).id()} ${d(this,gr).scale()} ${C(this,D,Tf).call(this)}`},"#bannersFor"),dx=l(function(){C(this,D,fx).call(this),C(this,D,zt).call(this)},"#paintBannersAgain"),fx=l(function(){k(this,sl,C(this,D,Cf).call(this)),d(this,Bi).clear(),C(this,D,Zo).call(this)},"#repaintBanners"),px=l(function(){let e=d(this,pr);if(e===null||d(this,xi)===null)return;C(this,D,Cf).call(this)!==d(this,sl)&&C(this,D,fx).call(this);let t=e.getContext("2d");if(t===null||(d(this,rl)&&(t.clearRect(0,0,e.width,e.height),k(this,rl,!1)),!d(this,bi)||d(this,Bs)&&d(this,xi).giveWayToYields))return;let n=d(this,Ft).clientWidth,r=d(this,Ft).clientHeight,s=e.width/Math.max(1,n),a=[];if(n<=0||r<=0)return;let o=0;d(this,Bi).forEach(({banner:u},h)=>{u!==null&&(o=Math.max(o,u.width/s),a.push(C(this,D,TM).call(this,h)))});let c=Math.round(d(this,gr).scale()*C(this,D,Tf).call(this));eM(a,{orbit:d(this,pt),look:d(this,Pn)??0,width:n,height:r,period:C(this,D,Gr).call(this),reach:o}).forEach(({key:u,x:h,y:p,clear:f})=>{let m=d(this,Bi).get(u)?.banner;m&&(t.globalAlpha=f,t.drawImage(m.image,Math.round(h*s-m.centre),Math.round(p*s)+c),k(this,rl,!0))}),t.globalAlpha=1},"#drawBanners"),CM=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>d(this,Na).delete(`${n},${r}`)),t.forEach(([n,r])=>d(this,Na).delete(`${n},${r}`)),k(this,mr,!0))},"#yieldsChanged"),RM=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),PM=l(function(){if(!d(this,Bs)){d(this,Da)&&(d(this,At).setYields(null),k(this,Da,!1));return}if(!d(this,mr)&&d(this,Da))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=Zv(t,Jv(t)),s=d(this,Na).get(n);if(s===void 0||s.of!==r){let[a,o]=d(this,We).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:jv({at:[a,Math.max(0,d(this,We).surfaceAt(a,o)),o],yields:r},d(this,uu))},d(this,Na).set(n,s)}s.laid!==null&&e.push(s.laid)}),d(this,At).setYields(Qv(e)),k(this,mr,!1),k(this,Da,!0)},"#showYields"),IM=l(function(e,t){t===null?d(this,qr).delete(e):d(this,qr).set(e,t)},"#remember"),Zo=l(function(){let e=new Set([...d(this,qr).keys(),...d(this,Bi).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);C(this,D,Fi).call(this,n,r)})},"#markAll"),mx=l(function(e){let t=performance.now(),n=C(this,D,wM).call(this,t),[r,s]=C(this,D,Cs).call(this);C(this,D,hx).call(this),C(this,D,oM).call(this,t),C(this,D,lM).call(this,t),C(this,D,cM).call(this,t),C(this,D,pM).call(this,t),`${r},${s}`!==d(this,Kc)&&(k(this,Kc,`${r},${s}`),d(this,We).refocus(r,s)),d(this,We).build(d(this,At),e);let a=C(this,D,EM).call(this,e!==null);C(this,D,PM).call(this),d(this,At).view(d(this,pt),d(this,Pn)??0,C(this,D,Gr).call(this)),d(this,At).render(),C(this,D,px).call(this),C(this,D,LM).call(this),C(this,D,gx).call(this),k(this,Jc,performance.now()-t),k(this,tu,!0),C(this,D,UM).call(this),(d(this,We).pending()>0||d(this,We).overlaysPending()>0||d(this,rn).size()>0||d(this,Zt).size()>0||d(this,Qn).size()>0||d(this,Is).size()>0||n||a)&&C(this,D,zt).call(this)},"#frameDrawn"),LM=l(function(){let e=d(this,nl);if(e===null)return;d(this,il)&&(k(this,il,!1),e.redraw());let t=C(this,D,wa).call(this)?d(this,hr):d(this,ki)?.tile??null;e.show(C(this,D,DM).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),DM=l(function(){let e=d(this,Ft).clientWidth,t=d(this,Ft).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=d(this,Pn)??0,s=fa(d(this,pt).distance).far,[a,o]=d(this,pt).focus,c=l((h,p)=>{for(let f=p;f>=-1;f-=.05){let m=Ao(d(this,pt),r,[h,f],n);if(m!==null){let x=Math.hypot(m[0]-a,m[1]-o),v=x>s?s/x:1;return[a+(m[0]-a)*v,o+(m[1]-o)*v]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),gx=l(function(e=!1){let t=(e?d(this,Rt)?.to??d(this,pt):d(this,pt)).distance,n=l(()=>{d(this,Rs)!==null&&clearTimeout(d(this,Rs)),k(this,Rs,null),k(this,Ko,null)},"stop"),r=l(()=>{n(),k(this,Ta,t),d(this,jc).set(t)},"keep");if(e){n(),t!==d(this,Ta)&&r();return}if(d(this,Rt)!==null||t===d(this,Ta)){n();return}d(this,Rs)!==null&&t===d(this,Ko)||(n(),k(this,Ko,t),k(this,Rs,setTimeout(r,P2)))},"#keepDistance"),zt=l(function(){if(!d(this,ks)){if(typeof requestAnimationFrame!="function"){C(this,D,mx).call(this,null);return}d(this,Yr)===null&&k(this,Yr,requestAnimationFrame(()=>{k(this,Yr,null),C(this,D,mx).call(this,w2)}))}},"#draw"),NM=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),UM=l(function(){if(d(this,Aa)===null)return;let{drawCalls:e,triangles:t,geometries:n}=d(this,At).stats();d(this,Aa).textContent=[`frame ${d(this,Jc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${d(this,We).pending()}`].join(`
`)},"#showStats"),xx=l(function(){let e=d(this,Ft).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===d(this,du)||(k(this,du,s),d(this,At).resize(t,n,r),d(this,pr)!==null&&(Object.assign(d(this,pr).style,{height:`${n}px`,left:`${d(this,Ft).offsetLeft||0}px`,top:`${d(this,Ft).offsetTop||0}px`,width:`${t}px`}),d(this,pr).width=Math.round(t*r),d(this,pr).height=Math.round(n*r),k(this,au,r)),this.measureCovered(),d(this,At).render(),C(this,D,px).call(this))},"#resize"),l(bx,"MapView3D");var jg=bx,FM=jg;var D2={createMapView3D:l(i=>new FM(i),"createMapView3D")};globalThis[Ix]=D2;})();
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
