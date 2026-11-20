"use strict";(()=>{var pM=Object.create;var pf=Object.defineProperty;var mM=Object.getOwnPropertyDescriptor;var gM=Object.getOwnPropertyNames;var xM=Object.getPrototypeOf,_M=Object.prototype.hasOwnProperty;var sx=i=>{throw TypeError(i)};var l=(i,e)=>pf(i,"name",{value:e,configurable:!0});var yM=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var bM=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of gM(e))!_M.call(i,r)&&r!==t&&pf(i,r,{get:()=>e[r],enumerable:!(n=mM(e,r))||n.enumerable});return i};var vM=(i,e,t)=>(t=i!=null?pM(xM(i)):{},bM(e||!i||!i.__esModule?pf(t,"default",{value:i,enumerable:!0}):t,i));var mf=(i,e,t)=>e.has(i)||sx("Cannot "+t);var d=(i,e,t)=>(mf(i,e,"read from private field"),t?t.call(i):e.get(i)),V=(i,e,t)=>e.has(i)?sx("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),G=(i,e,t,n)=>(mf(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),R=(i,e,t)=>(mf(i,e,"access private method"),t);var xi=(i,e,t,n)=>({set _(r){G(i,e,r,t)},get _(){return d(i,e,n)}});var ox=yM(Ls=>{"use strict";var Oi,Wr=Ls&&Ls.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Ls,"__esModule",{value:!0}),Ls.EventEmitter=void 0;var gf=class gf{constructor(){Oi.set(this,{})}on(e,t){e in Wr(this,Oi,"f")||(Wr(this,Oi,"f")[e]=[]),Wr(this,Oi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Wr(this,Oi,"f")))return;let n=Wr(this,Oi,"f")[e].indexOf(t);n!==-1&&Wr(this,Oi,"f")[e].splice(n,1)}emit(e,...t){e in Wr(this,Oi,"f")&&Wr(this,Oi,"f")[e].forEach((n=>n(...t)))}};l(gf,"i");var jc=gf;Ls.EventEmitter=jc,Oi=new WeakMap,Ls.default=jc});var ax="civMap3D";var lx=vM(ox());var Xr,Bi,Sa,_f=class _f extends lx.EventEmitter{constructor(t,n){super();V(this,Xr);V(this,Bi);V(this,Sa);G(this,Bi,t),G(this,Sa,t.lockVerticalEdges),G(this,Xr,n)}center(){return d(this,Xr).centre()}isVisible(t,n,r=0){return d(this,Xr).visible(t,n,r)}lockVerticalEdges(){return d(this,Sa)}nativeTileSize(){return d(this,Bi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=d(this,Bi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return d(this,Bi).playerId}render(){d(this,Xr).changed()}scale(){return d(this,Bi).art.scale()}setCenter(t,n){d(this,Xr).centreOn(t,n)}setLockVerticalEdges(t){G(this,Sa,t)}setZoom(){}transport(){return d(this,Bi).transport}zoom(){return d(this,Bi).art.zoom()}};Xr=new WeakMap,Bi=new WeakMap,Sa=new WeakMap,l(_f,"MapPortal3D");var xf=_f,cx=xf;var MM=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),ux=MM;var Ox=0,Zf=1,Bx=2;var Tl=1,yh=2,eo=3,os=0,En=1,si=2,Bs=0,to=1,Jf=2,Kf=3,jf=4,kx=5;var ks=100,zx=101,Gx=102,Vx=103,Hx=104,Wx=200,Xx=201,qx=202,Yx=203,Qf=204,ep=205,$x=206,Zx=207,Jx=208,Kx=209,jx=210,Qx=211,e_=212,t_=213,n_=214,wu=0,Eu=1,Au=2,Wa=3,Tu=4,Cu=5,Ru=6,Pu=7,tp=0,i_=1,r_=2,qi=0,np=1,ip=2,rp=3,Cl=4,sp=5,ap=6,op=7;var lp=300,zs=301,no=302,bh=303,vh=304,zi=1e3,ii=1001,Iu=1002,Ht=1003,s_=1004;var Rl=1005;var Wt=1006,Mh=1007;var Gn=1008;var dn=1009,cp=1010,up=1011,io=1012,Sh=1013,Mi=1014,Si=1015,Vn=1016,wh=1017,Eh=1018,Gs=1020,hp=35902,dp=35899,fp=1021,pp=1022,Hn=1023,Mr=1026,Rr=1027,mp=1028,Ah=1029,Yi=1030,Th=1031;var Ch=1033,Pl=33776,Il=33777,Ll=33778,Dl=33779,Rh=35840,Ph=35841,Ih=35842,Lh=35843,Dh=36196,Nh=37492,Uh=37496,Fh=37488,Oh=37489,Nl=37490,Bh=37491,kh=37808,zh=37809,Gh=37810,Vh=37811,Hh=37812,Wh=37813,Xh=37814,qh=37815,Yh=37816,$h=37817,Zh=37818,Jh=37819,Kh=37820,jh=37821,Qh=36492,ed=36494,td=36495,nd=36283,id=36284,Ul=36285,rd=36286;var sl=2300,Lu=2301,Mu=2302,Vf=2303,Hf=2400,Wf=2401,Xf=2402;var a_=3200;var sd=0,o_=1,wi="",Vt="srgb",al="srgb-linear",ol="linear",xt="srgb";var Su=7680;var l_=519,c_=512,u_=513,h_=514,gp=515,d_=516,f_=517,xp=518,_p=519,yp=35044;var bp="300 es",ri=2e3,Xa=2001;function SM(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(SM,"arrayNeedsUint32");function wM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(wM,"isTypedArray");function ll(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(ll,"createElementNS");function p_(){let i=ll("canvas");return i.style.display="block",i}l(p_,"createCanvasElement");var hx={},qa=null;function cl(...i){let e="THREE."+i.shift();qa?qa("log",e,...i):console.log(e,...i)}l(cl,"log");function m_(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(m_,"enhanceLogMessage");function qe(...i){i=m_(i);let e="THREE."+i.shift();if(qa)qa("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(qe,"warn");function $e(...i){i=m_(i);let e="THREE."+i.shift();if(qa)qa("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l($e,"error");function il(...i){let e=i.join(" ");e in hx||(hx[e]=!0,qe(...i))}l(il,"warnOnce");function g_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(g_,"probeAsync");var x_={[wu]:wu,[Au]:Ru,[Tu]:Tu,[Wa]:Cu,[Eu]:Eu,[Ru]:Au,[Pu]:Pu,[Cu]:Wa},Ep=class Ep{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(Ep,"EventDispatcher");var Gi=Ep,un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yf=Math.PI/180,Du=180/Math.PI;function Vs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}l(Vs,"generateUUID");function dt(i,e,t){return Math.max(e,Math.min(t,i))}l(dt,"clamp");function EM(i,e){return(i%e+e)%e}l(EM,"euclideanModulo");function bf(i,e,t){return(1-t)*i+t*e}l(bf,"lerp");function __(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(__,"floorPowerOfTwo");function ad(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(ad,"getNormalizationScale");function y_(i,e){if(e.constructor===Float32Array)return i;let t=ad(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(y_,"denormalize");function b_(i,e){if(e.constructor===Float32Array)return i;let t=ad(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(b_,"normalize");var th=class th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(th,"Vector2"),th.prototype.isVector2=!0;var He=th,Ap=class Ap{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],p=n[r+3],f=s[a+0],m=s[a+1],_=s[a+2],b=s[a+3];if(p!==b||c!==f||u!==m||h!==_){let g=c*f+u*m+h*_+p*b;g<0&&(f=-f,m=-m,_=-_,b=-b,g=-g);let x=1-o;if(g<.9995){let v=Math.acos(g),A=Math.sin(v);x=Math.sin(x*v)/A,o=Math.sin(o*v)/A,c=c*x+f*o,u=u*x+m*o,h=h*x+_*o,p=p*x+b*o}else{c=c*x+f*o,u=u*x+m*o,h=h*x+_*o,p=p*x+b*o;let v=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=v,u*=v,h*=v,p*=v}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*p+c*m-u*f,e[t+1]=c*_+h*f+u*p-o*m,e[t+2]=u*_+h*m+o*f-c*p,e[t+3]=h*_-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),p=o(s/2),f=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"YZX":this._x=f*h*p+u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p-f*m*_;break;case"XZY":this._x=f*h*p-u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p+f*m*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Ap,"Quaternion");var Mn=Ap,nh=class nh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*u+a*p-o*h,this.y=n+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(nh,"Vector3"),nh.prototype.isVector3=!0;var W=nh,vf=new W,dx=new Mn,ih=class ih{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],_=n[8],b=r[0],g=r[3],x=r[6],v=r[1],A=r[4],M=r[7],C=r[2],E=r[5],y=r[8];return s[0]=a*b+o*v+c*C,s[3]=a*g+o*A+c*E,s[6]=a*x+o*M+c*y,s[1]=u*b+h*v+p*C,s[4]=u*g+h*A+p*E,s[7]=u*x+h*M+p*y,s[2]=f*b+m*v+_*C,s[5]=f*g+m*A+_*E,s[8]=f*x+m*M+_*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,_=t*p+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=p*b,e[1]=(r*u-h*n)*b,e[2]=(o*n-r*a)*b,e[3]=f*b,e[4]=(h*t-r*c)*b,e[5]=(r*s-o*t)*b,e[6]=m*b,e[7]=(n*c-u*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return il("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mf.makeScale(e,t)),this}rotate(e){return il("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mf.makeRotation(-e)),this}translate(e,t){return il("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(ih,"Matrix3"),ih.prototype.isMatrix3=!0;var Ze=ih,Mf=new Ze,fx=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),px=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){let i={enabled:!0,workingColorSpace:al,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=Ha(r.r),r.g=Ha(r.g),r.b=Ha(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===wi?ol:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[al]:{primaries:e,whitePoint:n,transfer:ol,toXYZ:fx,fromXYZ:px,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:fx,fromXYZ:px,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}l(AM,"createColorManagement");var ht=AM();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(vr,"SRGBToLinear");function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Ha,"LinearToSRGB");var wa,Tp=class Tp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wa===void 0&&(wa=ll("canvas")),wa.width=e.width,wa.height=e.height;let r=wa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=wa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ll("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Tp,"ImageUtils");var Nu=Tp,TM=0,Cp=class Cp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sf(r[a].image)):s.push(Sf(r[a]))}else s=Sf(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(Cp,"TextureSource");var Ya=Cp;function Sf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}l(Sf,"serializeImage");var CM=0,wf=new W,Ga=class Ga extends Gi{constructor(e=Ga.DEFAULT_IMAGE,t=Ga.DEFAULT_MAPPING,n=ii,r=ii,s=Wt,a=Gn,o=Hn,c=dn,u=Ga.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Vs(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wf).x}get height(){return this.source.getSize(wf).y}get depth(){return this.source.getSize(wf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Ga,"Texture");var Sn=Ga;Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=lp;Sn.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],_=c[9],b=c[2],g=c[6],x=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+b)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,M=(m+1)/2,C=(x+1)/2,E=(h+f)/4,y=(p+b)/4,S=(_+g)/4;return A>M&&A>C?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=E/n,s=y/n):M>C?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=S/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=y/s,r=S/s),this.set(n,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(p-b)*(p-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(p-b)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(rh,"Vector4"),rh.prototype.isVector4=!0;var Nt=rh,Rp=class Rp extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Sn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ya(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Rp,"RenderTarget");var Uu=Rp,Pp=class Pp extends Uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Pp,"WebGLRenderTarget");var Bn=Pp,Ip=class Ip extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Ip,"DataArrayTexture");var Os=Ip;var Lp=class Lp extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Lp,"Data3DTexture");var Fu=Lp;var rl=class rl{constructor(e,t,n,r,s,a,o,c,u,h,p,f,m,_,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,p,f,m,_,b,g)}set(e,t,n,r,s,a,o,c,u,h,p,f,m,_,b,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=u,x[6]=h,x[10]=p,x[14]=f,x[3]=m,x[7]=_,x[11]=b,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ea.setFromMatrixColumn(e,0).length(),s=1/Ea.setFromMatrixColumn(e,1).length(),a=1/Ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=a*h,m=a*p,_=o*h,b=o*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+_*u,t[5]=f-b*u,t[9]=-o*c,t[2]=b-f*u,t[6]=_+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*p,_=u*h,b=u*p;t[0]=f+b*o,t[4]=_*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*p,_=u*h,b=u*p;t[0]=f-b*o,t[4]=-a*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*p,_=o*h,b=o*p;t[0]=c*h,t[4]=_*u-m,t[8]=f*u+b,t[1]=c*p,t[5]=b*u+f,t[9]=m*u-_,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,_=o*c,b=o*u;t[0]=c*h,t[4]=b-f*p,t[8]=_*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*p+_,t[10]=f-b*p}else if(e.order==="XZY"){let f=a*c,m=a*u,_=o*c,b=o*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+b,t[5]=a*h,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*h,t[10]=b*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,PM)}lookAt(e,t,n){let r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qr.crossVectors(n,Fn),qr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qr.crossVectors(n,Fn)),qr.normalize(),Qc.crossVectors(Fn,qr),r[0]=qr.x,r[4]=Qc.x,r[8]=Fn.x,r[1]=qr.y,r[5]=Qc.y,r[9]=Fn.y,r[2]=qr.z,r[6]=Qc.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],_=n[2],b=n[6],g=n[10],x=n[14],v=n[3],A=n[7],M=n[11],C=n[15],E=r[0],y=r[4],S=r[8],L=r[12],P=r[1],D=r[5],O=r[9],X=r[13],U=r[2],Y=r[6],ne=r[10],B=r[14],J=r[3],H=r[7],$=r[11],j=r[15];return s[0]=a*E+o*P+c*U+u*J,s[4]=a*y+o*D+c*Y+u*H,s[8]=a*S+o*O+c*ne+u*$,s[12]=a*L+o*X+c*B+u*j,s[1]=h*E+p*P+f*U+m*J,s[5]=h*y+p*D+f*Y+m*H,s[9]=h*S+p*O+f*ne+m*$,s[13]=h*L+p*X+f*B+m*j,s[2]=_*E+b*P+g*U+x*J,s[6]=_*y+b*D+g*Y+x*H,s[10]=_*S+b*O+g*ne+x*$,s[14]=_*L+b*X+g*B+x*j,s[3]=v*E+A*P+M*U+C*J,s[7]=v*y+A*D+M*Y+C*H,s[11]=v*S+A*O+M*ne+C*$,s[15]=v*L+A*X+M*B+C*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],b=e[7],g=e[11],x=e[15],v=c*m-u*f,A=o*m-u*p,M=o*f-c*p,C=a*m-u*h,E=a*f-c*h,y=a*p-o*h;return t*(b*v-g*A+x*M)-n*(_*v-g*C+x*E)+r*(_*A-b*C+x*y)-s*(_*M-b*E+g*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],b=e[13],g=e[14],x=e[15],v=t*o-n*a,A=t*c-r*a,M=t*u-s*a,C=n*c-r*o,E=n*u-s*o,y=r*u-s*c,S=h*b-p*_,L=h*g-f*_,P=h*x-m*_,D=p*g-f*b,O=p*x-m*b,X=f*x-m*g,U=v*X-A*O+M*D+C*P-E*L+y*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/U;return e[0]=(o*X-c*O+u*D)*Y,e[1]=(r*O-n*X-s*D)*Y,e[2]=(b*y-g*E+x*C)*Y,e[3]=(f*E-p*y-m*C)*Y,e[4]=(c*P-a*X-u*L)*Y,e[5]=(t*X-r*P+s*L)*Y,e[6]=(g*M-_*y-x*A)*Y,e[7]=(h*y-f*M+m*A)*Y,e[8]=(a*O-o*P+u*S)*Y,e[9]=(n*P-t*O-s*S)*Y,e[10]=(_*E-b*M+x*v)*Y,e[11]=(p*M-h*E-m*v)*Y,e[12]=(o*L-a*D-c*S)*Y,e[13]=(t*D-n*L+r*S)*Y,e[14]=(b*A-_*C-g*v)*Y,e[15]=(h*C-p*A+f*v)*Y,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,_=s*p,b=a*h,g=a*p,x=o*p,v=c*u,A=c*h,M=c*p,C=n.x,E=n.y,y=n.z;return r[0]=(1-(b+x))*C,r[1]=(m+M)*C,r[2]=(_-A)*C,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(f+x))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(_+A)*y,r[9]=(g-v)*y,r[10]=(1-(f+b))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ea.set(r[0],r[1],r[2]).length(),o=Ea.set(r[4],r[5],r[6]).length(),c=Ea.set(r[8],r[9],r[10]).length();s<0&&(a=-a),_i.copy(this);let u=1/a,h=1/o,p=1/c;return _i.elements[0]*=u,_i.elements[1]*=u,_i.elements[2]*=u,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=p,_i.elements[9]*=p,_i.elements[10]*=p,t.setFromRotationMatrix(_i),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=ri,c=!1){let u=this.elements,h=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),_,b;if(c)_=s/(a-s),b=a*s/(a-s);else if(o===ri)_=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Xa)_=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ri,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),_,b;if(c)_=1/(a-s),b=a/(a-s);else if(o===ri)_=-2/(a-s),b=-(a+s)/(a-s);else if(o===Xa)_=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(rl,"Matrix4"),rl.prototype.isMatrix4=!0;var yt=rl,Ea=new W,_i=new yt,RM=new W(0,0,0),PM=new W(1,1,1),qr=new W,Qc=new W,Fn=new W,mx=new yt,gx=new Mn,sh=class sh{constructor(e=0,t=0,n=0,r=sh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gx.setFromEuler(this),this.setFromQuaternion(gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(sh,"Euler");var kn=sh;kn.DEFAULT_ORDER="XYZ";var Dp=class Dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Dp,"Layers");var ul=Dp,IM=0,xx=new W,Aa=new Mn,pr=new yt,eu=new W,Jo=new W,LM=new W,DM=new Mn,_x=new W(1,0,0),yx=new W(0,1,0),bx=new W(0,0,1),vx={type:"added"},NM={type:"removed"},Ta={type:"childadded",child:null},Ef={type:"childremoved",child:null},Va=class Va extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Va.DEFAULT_UP.clone();let e=new W,t=new kn,n=new Mn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Va.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Va.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Aa.setFromAxisAngle(e,t),this.quaternion.multiply(Aa),this}rotateOnWorldAxis(e,t){return Aa.setFromAxisAngle(e,t),this.quaternion.premultiply(Aa),this}rotateX(e){return this.rotateOnAxis(_x,e)}rotateY(e){return this.rotateOnAxis(yx,e)}rotateZ(e){return this.rotateOnAxis(bx,e)}translateOnAxis(e,t){return xx.copy(e).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_x,e)}translateY(e){return this.translateOnAxis(yx,e)}translateZ(e){return this.translateOnAxis(bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eu.copy(e):eu.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Jo,eu,this.up):pr.lookAt(eu,Jo,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),Aa.setFromRotationMatrix(pr),this.quaternion.premultiply(Aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vx),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NM),Ef.child=e,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vx),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Va,"Object3D");var sn=Va;sn.DEFAULT_UP=new W(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Np=class Np extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Np,"Group");var rn=Np,UM={type:"move"},Up=class Up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),x=this._getHandJoint(u,b);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Up,"WebXRController");var $a=Up,v_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},tu={h:0,s:0,l:0};function Af(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Af,"hue2rgb");var Fp=class Fp{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=EM(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Af(a,s,e+1/3),this.g=Af(a,s,e),this.b=Af(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=v_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ht.workingToColorSpace(hn.copy(this),e),Math.round(dt(hn.r*255,0,255))*65536+Math.round(dt(hn.g*255,0,255))*256+Math.round(dt(hn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,s=hn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Vt){ht.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(tu);let n=bf(Yr.h,tu.h,t),r=bf(Yr.s,tu.s,t),s=bf(Yr.l,tu.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Fp,"Color");var Be=Fp,hn=new Be;Be.NAMES=v_;var ah=class ah{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new ah(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(ah,"Fog");var hl=ah,Op=class Op extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Op,"Scene");var dl=Op,yi=new W,mr=new W,Tf=new W,gr=new W,Ca=new W,Ra=new W,Mx=new W,Cf=new W,Rf=new W,Pf=new W,If=new Nt,Lf=new Nt,Df=new Nt,Kr=class Kr{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yi.subVectors(e,t),r.cross(yi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yi.subVectors(r,t),mr.subVectors(n,t),Tf.subVectors(e,t);let a=yi.dot(yi),o=yi.dot(mr),c=yi.dot(Tf),u=mr.dot(mr),h=mr.dot(Tf),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;let f=1/p,m=(u*c-o*h)*f,_=(a*h-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,gr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gr.x),c.addScaledVector(a,gr.y),c.addScaledVector(o,gr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return If.setScalar(0),Lf.setScalar(0),Df.setScalar(0),If.fromBufferAttribute(e,t),Lf.fromBufferAttribute(e,n),Df.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(If,s.x),a.addScaledVector(Lf,s.y),a.addScaledVector(Df,s.z),a}static isFrontFacing(e,t,n,r){return yi.subVectors(n,t),mr.subVectors(e,t),yi.cross(mr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),yi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Kr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ca.subVectors(r,n),Ra.subVectors(s,n),Cf.subVectors(e,n);let c=Ca.dot(Cf),u=Ra.dot(Cf);if(c<=0&&u<=0)return t.copy(n);Rf.subVectors(e,r);let h=Ca.dot(Rf),p=Ra.dot(Rf);if(h>=0&&p<=h)return t.copy(r);let f=c*p-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ca,a);Pf.subVectors(e,s);let m=Ca.dot(Pf),_=Ra.dot(Pf);if(_>=0&&m<=_)return t.copy(s);let b=m*u-c*_;if(b<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(n).addScaledVector(Ra,o);let g=h*_-m*p;if(g<=0&&p-h>=0&&m-_>=0)return Mx.subVectors(s,r),o=(p-h)/(p-h+(m-_)),t.copy(r).addScaledVector(Mx,o);let x=1/(g+b+f);return a=b*x,o=f*x,t.copy(n).addScaledVector(Ca,a).addScaledVector(Ra,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(Kr,"Triangle");var yr=Kr,Bp=class Bp{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nu.copy(n.boundingBox)),nu.applyMatrix4(e.matrixWorld),this.union(nu)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),iu.subVectors(this.max,Ko),Pa.subVectors(e.a,Ko),Ia.subVectors(e.b,Ko),La.subVectors(e.c,Ko),$r.subVectors(Ia,Pa),Zr.subVectors(La,Ia),Ds.subVectors(Pa,La);let t=[0,-$r.z,$r.y,0,-Zr.z,Zr.y,0,-Ds.z,Ds.y,$r.z,0,-$r.x,Zr.z,0,-Zr.x,Ds.z,0,-Ds.x,-$r.y,$r.x,0,-Zr.y,Zr.x,0,-Ds.y,Ds.x,0];return!Nf(t,Pa,Ia,La,iu)||(t=[1,0,0,0,1,0,0,0,1],!Nf(t,Pa,Ia,La,iu))?!1:(ru.crossVectors($r,Zr),t=[ru.x,ru.y,ru.z],Nf(t,Pa,Ia,La,iu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Bp,"Box3");var Qr=Bp,xr=[new W,new W,new W,new W,new W,new W,new W,new W],bi=new W,nu=new Qr,Pa=new W,Ia=new W,La=new W,$r=new W,Zr=new W,Ds=new W,Ko=new W,iu=new W,ru=new W,Ns=new W;function Nf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ns.fromArray(i,s);let o=r.x*Math.abs(Ns.x)+r.y*Math.abs(Ns.y)+r.z*Math.abs(Ns.z),c=e.dot(Ns),u=t.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Nf,"satForAxes");var br=FM();function FM(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(FM,"_generateTables");function OM(i){Math.abs(i)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),i=dt(i,-65504,65504),br.floatView[0]=i;let e=br.uint32View[0],t=e>>23&511;return br.baseTable[t]+((e&8388607)>>br.shiftTable[t])}l(OM,"toHalfFloat");function BM(i){let e=i>>10;return br.uint32View[0]=br.mantissaTable[br.offsetTable[e]+(i&1023)]+br.exponentTable[e],br.floatView[0]}l(BM,"fromHalfFloat");var kp=class kp{static toHalfFloat(e){return OM(e)}static fromHalfFloat(e){return BM(e)}};l(kp,"DataUtils");var Vi=kp,Gt=new W,su=new He,kM=0,zp=class zp extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yp,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?ad(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)su.fromBufferAttribute(this,t),su.applyMatrix3(e),this.setXY(t,su.x,su.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):y_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):b_(e,this.array)}};l(zp,"BufferAttribute");var Mt=zp;var Gp=class Gp extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Gp,"Uint16BufferAttribute");var fl=Gp;var Vp=class Vp extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Vp,"Uint32BufferAttribute");var pl=Vp;var Hp=class Hp extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Hp,"Float32BufferAttribute");var It=Hp,zM=new Qr,jo=new W,Uf=new W,Wp=class Wp{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);let t=jo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(jo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Uf)),this.expandByPoint(jo.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Wp,"Sphere");var Za=Wp,GM=0,ni=new yt,Ff=new sn,Da=new W,On=new Qr,Qo=new Qr,Kt=new W,oh=class oh extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SM(e)?pl:fl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Da).negate(),this.translate(Da.x,Da.y,Da.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Qo.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(On.min,Qo.min),On.expandByPoint(Kt),Kt.addVectors(On.max,Qo.max),On.expandByPoint(Kt)):(On.expandByPoint(Qo.min),On.expandByPoint(Qo.max))}On.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Kt.fromBufferAttribute(o,u),c&&(Da.fromBufferAttribute(e,u),Kt.add(Da)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new W,c[L]=new W;let h=new W,p=new W,f=new W,m=new He,_=new He,b=new He,g=new W,x=new W;function v(L,P,D){u[L]=u[P]=u[D]=1,h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,P),f.fromBufferAttribute(n,D),m.fromBufferAttribute(s,L),_.fromBufferAttribute(s,P),b.fromBufferAttribute(s,D),p.sub(h),f.sub(h),_.sub(m),b.sub(m);let O=1/(_.x*b.y-b.x*_.y);isFinite(O)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(f,-_.y).multiplyScalar(O),x.copy(f).multiplyScalar(_.x).addScaledVector(p,-b.x).multiplyScalar(O),o[L].add(g),o[P].add(g),o[D].add(g),c[L].add(x),c[P].add(x),c[D].add(x))}l(v,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,P=A.length;L<P;++L){let D=A[L],O=D.start,X=D.count;for(let U=O,Y=O+X;U<Y;U+=3)v(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new W,C=new W,E=new W,y=new W;function S(L){E.fromBufferAttribute(r,L),y.copy(E);let P=o[L];M.copy(P),M.sub(E.multiplyScalar(E.dot(P))).normalize(),C.crossVectors(y,P);let O=C.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,O)}l(S,"handleVertex");for(let L=0,P=n.count;L<P;++L)u[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,p=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){let _=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),o.add(h),c.add(h),u.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h),m=0,_=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*h;for(let x=0;x<h;x++)f[_++]=u[m++]}return new Mt(f,h,p)}if(l(e,"convertBufferAttribute"),this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new oh,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){let f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(oh,"BufferGeometry");var Ot=oh,Xp=class Xp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yp,this.updateRanges=[],this.version=0,this.uuid=Vs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sx(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sx(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Xp,"InterleavedBuffer");var ml=Xp;function Sx(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Vs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(Sx,"getArrayKey");var bn=new W,lh=class lh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?ad(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){cl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){cl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):y_(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):b_(e,this.data.array)}};l(lh,"InterleavedBufferAttribute");var Ja=lh,Of=new W,VM=new W,HM=new Ze,qp=class qp{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Of.subVectors(n,t).cross(VM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Of),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||HM.getNormalMatrix(e),r=this.coplanarPoint(Of).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(qp,"Plane");var Pn=qp,WM=0,Yp=class Yp extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=to,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qf,this.blendDst=ep,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Su,this.stencilZFail=Su,this.stencilZPass=Su,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Yp,"Material");var Sr=Yp,$p=class $p extends Sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l($p,"SpriteMaterial");var es=$p,Na,el=new W,Ua=new W,Fa=new W,Oa=new He,tl=new He,M_=new yt,au=new W,nl=new W,ou=new W,wx=new He,Bf=new He,Ex=new He,Zp=class Zp extends sn{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",Na===void 0){Na=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ml(t,5);Na.setIndex([0,1,2,0,2,3]),Na.setAttribute("position",new Ja(n,3,0,!1)),Na.setAttribute("uv",new Ja(n,2,3,!1))}this.geometry=Na,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ua.setFromMatrixScale(this.matrixWorld),M_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ua.multiplyScalar(-Fa.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;lu(au.set(-.5,-.5,0),Fa,a,Ua,r,s),lu(nl.set(.5,-.5,0),Fa,a,Ua,r,s),lu(ou.set(.5,.5,0),Fa,a,Ua,r,s),wx.set(0,0),Bf.set(1,0),Ex.set(1,1);let o=e.ray.intersectTriangle(au,nl,ou,!1,el);if(o===null&&(lu(nl.set(-.5,.5,0),Fa,a,Ua,r,s),Bf.set(0,1),o=e.ray.intersectTriangle(au,ou,nl,!1,el),o===null))return;let c=e.ray.origin.distanceTo(el);c<e.near||c>e.far||t.push({distance:c,point:el.clone(),uv:yr.getInterpolation(el,au,nl,ou,wx,Bf,Ex,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Zp,"Sprite");var wr=Zp;function lu(i,e,t,n,r,s){Oa.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(tl.x=s*Oa.x-r*Oa.y,tl.y=r*Oa.x+s*Oa.y):tl.copy(Oa),i.copy(e),i.x+=tl.x,i.y+=tl.y,i.applyMatrix4(M_)}l(lu,"transformVertex");var _r=new W,kf=new W,cu=new W,uu=new W,Jp=class Jp{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kf.copy(e).add(t).multiplyScalar(.5),cu.copy(t).sub(e).normalize(),uu.copy(this.origin).sub(kf);let s=e.distanceTo(t)*.5,a=-this.direction.dot(cu),o=uu.dot(this.direction),c=-uu.dot(cu),u=uu.lengthSq(),h=Math.abs(1-a*a),p,f,m,_;if(h>0)if(p=a*c-o,f=a*o-c,_=s*h,p>=0)if(f>=-_)if(f<=_){let b=1/h;p*=b,f*=b,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kf).addScaledVector(cu,f),m}intersectSphere(e,t){if(e.radius<0)return null;_r.subVectors(e.center,this.origin);let n=_r.dot(this.direction),r=_r.dot(_r)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,_=t.x-a.x,b=t.y-a.y,g=t.z-a.z,x=n.x-a.x,v=n.y-a.y,A=n.z-a.z,M=Math.abs(c),C=Math.abs(u),E=Math.abs(h),y,S,L,P,D,O,X,U,Y,ne,B,J;if(M>=C&&M>=E?(L=c,O=p,Y=_,J=x,c>=0?(y=u,S=h,P=f,D=m,X=b,U=g,ne=v,B=A):(y=h,S=u,P=m,D=f,X=g,U=b,ne=A,B=v)):C>=E?(L=u,O=f,Y=b,J=v,u>=0?(y=h,S=c,P=m,D=p,X=g,U=_,ne=A,B=x):(y=c,S=h,P=p,D=m,X=_,U=g,ne=x,B=A)):(L=h,O=m,Y=g,J=A,h>=0?(y=c,S=u,P=p,D=f,X=_,U=b,ne=x,B=v):(y=u,S=c,P=f,D=p,X=b,U=_,ne=v,B=x)),L===0)return null;let H=y/L,$=S/L,j=1/L,he=P-H*O,ge=D-$*O,Q=X-H*Y,pe=U-$*Y,le=ne-H*J,de=B-$*J,ue=le*pe-de*Q,ee=he*de-ge*le,me=Q*ge-pe*he;if(r){if(ue<0||ee<0||me<0)return null}else if((ue<0||ee<0||me<0)&&(ue>0||ee>0||me>0))return null;let ie=ue+ee+me;if(ie===0)return null;let xe=j*(ue*O+ee*Y+me*J);return(ie>0?xe<0:xe>0)?null:this.at(xe/ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Jp,"Ray");var Ou=Jp,Kp=class Kp extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Kp,"MeshBasicMaterial");var Ka=Kp,Ax=new yt,Us=new Ou,hu=new Za,Tx=new W,du=new W,fu=new W,pu=new W,zf=new W,mu=new W,Cx=new W,gu=new W,jp=class jp extends sn{constructor(e=new Ot,t=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){mu.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],p=s[c];h!==0&&(zf.fromBufferAttribute(p,e),a?mu.addScaledVector(zf,h):mu.addScaledVector(zf.sub(t),h))}t.add(mu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hu.copy(n.boundingSphere),hu.applyMatrix4(s),Us.copy(e.ray).recast(e.near),!(hu.containsPoint(Us.origin)===!1&&(Us.intersectSphere(hu,Tx)===null||Us.origin.distanceToSquared(Tx)>(e.far-e.near)**2))&&(Ax.copy(s).invert(),Us.copy(e.ray).applyMatrix4(Ax),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){let g=f[_],x=a[g.materialIndex],v=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,C=A;M<C;M+=3){let E=o.getX(M),y=o.getX(M+1),S=o.getX(M+2);r=xu(this,x,e,n,u,h,p,E,y,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=_,x=b;g<x;g+=3){let v=o.getX(g),A=o.getX(g+1),M=o.getX(g+2);r=xu(this,a,e,n,u,h,p,v,A,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){let g=f[_],x=a[g.materialIndex],v=Math.max(g.start,m.start),A=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,C=A;M<C;M+=3){let E=M,y=M+1,S=M+2;r=xu(this,x,e,n,u,h,p,E,y,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let g=_,x=b;g<x;g+=3){let v=g,A=g+1,M=g+2;r=xu(this,a,e,n,u,h,p,v,A,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};l(jp,"Mesh");var bt=jp;function XM(i,e,t,n,r,s,a,o){let c;if(e.side===En?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===os,o),c===null)return null;gu.copy(o),gu.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(gu);return u<t.near||u>t.far?null:{distance:u,point:gu.clone(),object:i}}l(XM,"checkIntersection$1");function xu(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,du),i.getVertexPosition(c,fu),i.getVertexPosition(u,pu);let h=XM(i,e,t,n,du,fu,pu,Cx);if(h){let p=new W;yr.getBarycoord(Cx,du,fu,pu,p),r&&(h.uv=yr.getInterpolatedAttribute(r,o,c,u,p,new He)),s&&(h.uv1=yr.getInterpolatedAttribute(s,o,c,u,p,new He)),a&&(h.normal=yr.getInterpolatedAttribute(a,o,c,u,p,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new W,materialIndex:0};yr.getNormal(du,fu,pu,f.normal),h.face=f,h.barycoord=p}return h}l(xu,"checkGeometryIntersection");var Qp=class Qp extends Sn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Ht,h=Ht,p,f){super(null,a,o,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Qp,"DataTexture");var ja=Qp;var em=class em extends Mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(em,"InstancedBufferAttribute");var Er=em;var Fs=new Za,qM=new He(.5,.5),_u=new W,tm=class tm{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],_=s[8],b=s[9],g=s[10],x=s[11],v=s[12],A=s[13],M=s[14],C=s[15];if(r[0].setComponents(u-a,m-h,x-_,C-v).normalize(),r[1].setComponents(u+a,m+h,x+_,C+v).normalize(),r[2].setComponents(u+o,m+p,x+b,C+A).normalize(),r[3].setComponents(u-o,m-p,x-b,C-A).normalize(),n)r[4].setComponents(c,f,g,M).normalize(),r[5].setComponents(u-c,m-f,x-g,C-M).normalize();else if(r[4].setComponents(u-c,m-f,x-g,C-M).normalize(),t===ri)r[5].setComponents(u+c,m+f,x+g,C+M).normalize();else if(t===Xa)r[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=qM.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_u.x=r.normal.x>0?e.max.x:e.min.x,_u.y=r.normal.y>0?e.max.y:e.min.y,_u.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(tm,"Frustum");var ts=tm,Rx=new yt,ch=class ch{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Rx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new ts),n[r].setFromProjectionMatrix(Rx,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ts),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new ch().copy(this)}};l(ch,"FrustumArray");var Bu=ch;var nm=class nm extends Sn{constructor(e=[],t=zs,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(nm,"CubeTexture");var gl=nm,im=class im extends Sn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(im,"CanvasTexture");var ns=im;var rm=class rm extends Sn{constructor(e,t,n=Mi,r,s,a,o=Ht,c=Ht,u,h=Mr,p=1){if(h!==Mr&&h!==Rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ya(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(rm,"DepthTexture");var Ar=rm,sm=class sm extends Ar{constructor(e,t=Mi,n=zs,r,s,a=Ht,o=Ht,c,u=Mr){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(sm,"CubeDepthTexture");var xl=sm,am=class am extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(am,"ExternalTexture");var _l=am,uh=class uh extends Ot{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],p=[],f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function _(b,g,x,v,A,M,C,E,y,S,L){let P=M/y,D=C/S,O=M/2,X=C/2,U=E/2,Y=y+1,ne=S+1,B=0,J=0,H=new W;for(let $=0;$<ne;$++){let j=$*D-X;for(let he=0;he<Y;he++){let ge=he*P-O;H[b]=ge*v,H[g]=j*A,H[x]=U,u.push(H.x,H.y,H.z),H[b]=0,H[g]=0,H[x]=E>0?1:-1,h.push(H.x,H.y,H.z),p.push(he/y),p.push(1-$/S),B+=1}}for(let $=0;$<S;$++)for(let j=0;j<y;j++){let he=f+j+Y*$,ge=f+j+Y*($+1),Q=f+(j+1)+Y*($+1),pe=f+(j+1)+Y*$;c.push(he,ge,pe),c.push(ge,Q,pe),J+=6}o.addGroup(m,J,L),m+=J,f+=B}l(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(uh,"BoxGeometry");var Hi=uh;var hh=class hh extends Ot{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],f=[],m=[],_=0,b=[],g=n/2,x=0;v(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(m,2));function v(){let M=new W,C=new W,E=0,y=(t-e)/n;for(let S=0;S<=s;S++){let L=[],P=S/s,D=P*(t-e)+e;for(let O=0;O<=r;O++){let X=O/r,U=X*c+o,Y=Math.sin(U),ne=Math.cos(U);C.x=D*Y,C.y=-P*n+g,C.z=D*ne,p.push(C.x,C.y,C.z),M.set(Y,y,ne).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-P),L.push(_++)}b.push(L)}for(let S=0;S<r;S++)for(let L=0;L<s;L++){let P=b[L][S],D=b[L+1][S],O=b[L+1][S+1],X=b[L][S+1];(e>0||L!==0)&&(h.push(P,D,X),E+=3),(t>0||L!==s-1)&&(h.push(D,O,X),E+=3)}u.addGroup(x,E,0),x+=E}l(v,"generateTorso");function A(M){let C=_,E=new He,y=new W,S=0,L=M===!0?e:t,P=M===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,g*P,0),f.push(0,P,0),m.push(.5,.5),_++;let D=_;for(let O=0;O<=r;O++){let U=O/r*c+o,Y=Math.cos(U),ne=Math.sin(U);y.x=L*ne,y.y=g*P,y.z=L*Y,p.push(y.x,y.y,y.z),f.push(0,P,0),E.x=Y*.5+.5,E.y=ne*.5*P+.5,m.push(E.x,E.y),_++}for(let O=0;O<r;O++){let X=C+O,U=D+O;M===!0?h.push(U,U+1,X):h.push(U+1,U,X),S+=3}u.addGroup(x,S,M===!0?1:2),x+=S}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(hh,"CylinderGeometry");var Wi=hh,dh=class dh extends Wi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new dh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(dh,"ConeGeometry");var Tr=dh,fh=class fh extends Ot{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),h(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new W,M=new W,C=new W;for(let E=0;E<t.length;E+=3)m(t[E+0],A),m(t[E+1],M),m(t[E+2],C),c(A,M,C,v)}l(o,"subdivide");function c(v,A,M,C){let E=C+1,y=[];for(let S=0;S<=E;S++){y[S]=[];let L=v.clone().lerp(M,S/E),P=A.clone().lerp(M,S/E),D=E-S;for(let O=0;O<=D;O++)O===0&&S===E?y[S][O]=L:y[S][O]=L.clone().lerp(P,O/D)}for(let S=0;S<E;S++)for(let L=0;L<2*(E-S)-1;L++){let P=Math.floor(L/2);L%2===0?(f(y[S][P+1]),f(y[S+1][P]),f(y[S][P])):(f(y[S][P+1]),f(y[S+1][P+1]),f(y[S+1][P]))}}l(c,"subdivideFace");function u(v){let A=new W;for(let M=0;M<s.length;M+=3)A.x=s[M+0],A.y=s[M+1],A.z=s[M+2],A.normalize().multiplyScalar(v),s[M+0]=A.x,s[M+1]=A.y,s[M+2]=A.z}l(u,"applyRadius");function h(){let v=new W;for(let A=0;A<s.length;A+=3){v.x=s[A+0],v.y=s[A+1],v.z=s[A+2];let M=g(v)/2/Math.PI+.5,C=x(v)/Math.PI+.5;a.push(M,1-C)}_(),p()}l(h,"generateUVs");function p(){for(let v=0;v<a.length;v+=6){let A=a[v+0],M=a[v+2],C=a[v+4],E=Math.max(A,M,C),y=Math.min(A,M,C);E>.9&&y<.1&&(A<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}l(p,"correctSeam");function f(v){s.push(v.x,v.y,v.z)}l(f,"pushVertex");function m(v,A){let M=v*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}l(m,"getVertexByIndex");function _(){let v=new W,A=new W,M=new W,C=new W,E=new He,y=new He,S=new He;for(let L=0,P=0;L<s.length;L+=9,P+=6){v.set(s[L+0],s[L+1],s[L+2]),A.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),E.set(a[P+0],a[P+1]),y.set(a[P+2],a[P+3]),S.set(a[P+4],a[P+5]),C.copy(v).add(A).add(M).divideScalar(3);let D=g(C);b(E,P+0,v,D),b(y,P+2,A,D),b(S,P+4,M,D)}}l(_,"correctUVs");function b(v,A,M,C){C<0&&v.x===1&&(a[A]=v.x-1),M.x===0&&M.z===0&&(a[A]=C/2/Math.PI+.5)}l(b,"correctUV");function g(v){return Math.atan2(v.z,-v.x)}l(g,"azimuth");function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}l(x,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.vertices,e.indices,e.radius,e.detail)}};l(fh,"PolyhedronGeometry");var ku=fh;var ph=class ph extends ku{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ph(e.radius,e.detail)}};l(ph,"IcosahedronGeometry");var yl=ph;var mh=class mh extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=t/c,m=[],_=[],b=[],g=[];for(let x=0;x<h;x++){let v=x*f-a;for(let A=0;A<u;A++){let M=A*p-s;_.push(M,-v,0),b.push(0,0,1),g.push(A/o),g.push(1-x/c)}}for(let x=0;x<c;x++)for(let v=0;v<o;v++){let A=v+u*x,M=v+u*(x+1),C=v+1+u*(x+1),E=v+1+u*x;m.push(A,M,E),m.push(M,C,E)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.width,e.height,e.widthSegments,e.heightSegments)}};l(mh,"PlaneGeometry");var Xi=mh;var gh=class gh extends Ot{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],p=new W,f=new W,m=[],_=[],b=[],g=[];for(let x=0;x<=n;x++){let v=[],A=x/n,M=a+A*o,C=e*Math.cos(M),E=Math.sqrt(e*e-C*C),y=0;x===0&&a===0?y=.5/t:x===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let L=S/t,P=r+L*s;p.x=-E*Math.cos(P),p.y=C,p.z=E*Math.sin(P),_.push(p.x,p.y,p.z),f.copy(p).normalize(),b.push(f.x,f.y,f.z),g.push(L+y,1-A),v.push(u++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let A=h[x][v+1],M=h[x][v],C=h[x+1][v],E=h[x+1][v+1];(x!==0||a>0)&&m.push(A,M,E),(x!==n-1||c<Math.PI)&&m.push(M,C,E)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(gh,"SphereGeometry");var is=gh;var xh=class xh extends Ot{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],p=[],f=new W,m=new W,_=new W;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let x=0;x<=r;x++){let v=x/r*s;m.x=(e+t*Math.cos(g))*Math.cos(v),m.y=(e+t*Math.cos(g))*Math.sin(v),m.z=t*Math.sin(g),u.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),_.subVectors(m,f).normalize(),h.push(_.x,_.y,_.z),p.push(x/r),p.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=r;g++){let x=(r+1)*b+g-1,v=(r+1)*(b-1)+g-1,A=(r+1)*(b-1)+g,M=(r+1)*b+g;c.push(x,v,M),c.push(v,A,M)}this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(xh,"TorusGeometry");var Cr=xh;function Hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Px(r))r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Px(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(Hs,"cloneUniforms");function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Hs(i[t]);for(let r in n)e[r]=n[r]}return e}l(fn,"mergeUniforms");function Px(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Px,"isThreeObject");function YM(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(YM,"cloneUniformsGroups");function vp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}l(vp,"getUnlitUniformColorSpace");var Ws={clone:Hs,merge:fn},$M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,om=class om extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=YM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new He().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(om,"ShaderMaterial");var wn=om,lm=class lm extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(lm,"RawShaderMaterial");var zu=lm,cm=class cm extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(cm,"MeshStandardMaterial");var vi=cm;var um=class um extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(um,"MeshDepthMaterial");var Gu=um,hm=class hm extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(hm,"MeshDistanceMaterial");var Vu=hm;function Ba(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Ba,"convertArray");function yu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(yu,"hasTangents");var dm=class dm{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(dm,"Interpolant");var rs=dm,fm=class fm extends rs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wf:s=e,o=2*t-n;break;case Xf:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wf:a=e,c=2*n-t;break;case Xf:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-t)/(r-t),b=_*_,g=b*_,x=-f*g+2*f*b-f*_,v=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*_+1,A=(-1-m)*g+(1.5+m)*b+.5*_,M=m*g-m*b;for(let C=0;C!==o;++C)s[C]=x*a[h+C]+v*a[u+C]+A*a[c+C]+M*a[p+C];return s}};l(fm,"CubicInterpolant");var Hu=fm,pm=class pm extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),p=1-h;for(let f=0;f!==o;++f)s[f]=a[u+f]*p+a[c+f]*h;return s}};l(pm,"LinearInterpolant");var Wu=pm,mm=class mm extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(mm,"DiscreteInterpolant");var Xu=mm,gm=class gm extends rs{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-t)/(r-t),b=1-_;for(let g=0;g!==o;++g)s[g]=a[u+g]*b+a[c+g]*_;return s}let f=o*2,m=e-1;for(let _=0;_!==o;++_){let b=a[u+_],g=a[c+_],x=m*f+_*2,v=p[x],A=p[x+1],M=e*f+_*2,C=h[M],E=h[M+1],y=KM(n,t,v,C,r);s[_]=S_(y,b,A,E,g)}return s}};l(gm,"BezierInterpolant");var qu=gm;function S_(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l(S_,"cubicBezier");function JM(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(JM,"cubicBezierSlope");function KM(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=S_(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=JM(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(KM,"solveBezierParameter");var xm=class xm{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),yu(e.settings)&&(n.settings={inTangents:Ba(e.settings.inTangents,Array),outTangents:Ba(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sl:t=this.InterpolantFactoryMethodDiscrete;break;case Lu:t=this.InterpolantFactoryMethodLinear;break;case Mu:t=this.InterpolantFactoryMethodSmooth;break;case Vf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return Lu;case this.InterpolantFactoryMethodSmooth:return Mu;case this.InterpolantFactoryMethodBezier:return Vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;yu(this.settings)&&(Ix(this.settings.inTangents,e),Ix(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;yu(this.settings)&&(Lx(this.settings.inTangents,e),Lx(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&wM(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){$e("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Mu,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let p=o*n,f=p-n,m=p+n;for(let _=0;_!==n;++_){let b=t[p+_];if(b!==t[f+_]||b!==t[m+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,yu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(xm,"KeyframeTrack");var zn=xm;function Ix(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(Ix,"shiftTangentTimes");function Lx(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Lx,"scaleTangentTimes");zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Lu;var _m=class _m extends zn{constructor(e,t,n){super(e,t,n)}};l(_m,"BooleanKeyframeTrack");var ss=_m;ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=sl;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ym=class ym extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(ym,"ColorKeyframeTrack");var Yu=ym;Yu.prototype.ValueTypeName="color";var bm=class bm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(bm,"NumberKeyframeTrack");var $u=bm;$u.prototype.ValueTypeName="number";var vm=class vm extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)Mn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(vm,"QuaternionLinearInterpolant");var Zu=vm,Mm=class Mm extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}};l(Mm,"QuaternionKeyframeTrack");var bl=Mm;bl.prototype.ValueTypeName="quaternion";bl.prototype.InterpolantFactoryMethodSmooth=void 0;var Sm=class Sm extends zn{constructor(e,t,n){super(e,t,n)}};l(Sm,"StringKeyframeTrack");var as=Sm;as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=sl;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var wm=class wm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(wm,"VectorKeyframeTrack");var Ju=wm;Ju.prototype.ValueTypeName="vector";var Em=class Em{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],_=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Em,"LoadingManager");var Ku=Em,w_=new Ku,Am=class Am{constructor(e){this.manager=e!==void 0?e:w_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Am,"Loader");var ju=Am;ju.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tm=class Tm extends sn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Tm,"Light");var vl=Tm,Cm=class Cm extends vl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Cm,"HemisphereLight");var Ml=Cm,Gf=new yt,Dx=new W,Nx=new W,Rm=class Rm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Dx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dx),Nx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nx),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Gf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Xa||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Rm,"LightShadow");var Qu=Rm,bu=new W,vu=new Mn,ki=new W,Pm=class Pm extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bu,vu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,vu,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bu,vu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,vu,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Pm,"Camera");var Sl=Pm,Jr=new W,Ux=new He,Fx=new He,Im=class Im extends Sl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Du*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Du*2*Math.atan(Math.tan(yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Ux,Fx),t.subVectors(Fx,Ux)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Im,"PerspectiveCamera");var vn=Im;var Lm=class Lm extends Sl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Lm,"OrthographicCamera");var wl=Lm,Dm=class Dm extends Qu{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Dm,"DirectionalLightShadow");var qf=Dm,Nm=class Nm extends vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new qf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Nm,"DirectionalLight");var El=Nm;var Um=class Um extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(Um,"InstancedBufferGeometry");var Al=Um;var ka=-90,za=1,Fm=class Fm extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(ka,za,e,t);r.layers=this.layers,this.add(r);let s=new vn(ka,za,e,t);s.layers=this.layers,this.add(s);let a=new vn(ka,za,e,t);a.layers=this.layers,this.add(a);let o=new vn(ka,za,e,t);o.layers=this.layers,this.add(o);let c=new vn(ka,za,e,t);c.layers=this.layers,this.add(c);let u=new vn(ka,za,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}};l(Fm,"CubeCamera");var Qa=Fm,Om=class Om extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Om,"ArrayCamera");var eh=Om;var Mp="\\[\\]\\.:\\/",jM=new RegExp("["+Mp+"]","g"),Sp="[^"+Mp+"]",QM="[^"+Mp.replace("\\.","")+"]",eS=/((?:WC+[\/:])*)/.source.replace("WC",Sp),tS=/(WCOD+)?/.source.replace("WCOD",QM),nS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sp),iS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sp),rS=new RegExp("^"+eS+tS+nS+iS+"$"),sS=["material","materials","bones","map"],Bm=class Bm{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Bm,"Composite");var Yf=Bm,jr=class jr{constructor(e,t,n){this.path=t,this.parsedPath=n||jr.parseTrackName(t),this.node=jr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new jr.Composite(e,t,n):new jr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jM,"")}static parseTrackName(e){let t=rS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);sS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=jr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(jr,"PropertyBinding");var Pt=jr;Pt.Composite=Yf;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m2=new Float32Array(1);var _h=class _h{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(_h,"Matrix2"),_h.prototype.isMatrix2=!0;var $f=_h;function wp(i,e,t,n){let r=aS(n);switch(t){case fp:return i*e;case mp:return i*e/r.components*r.byteLength;case Ah:return i*e/r.components*r.byteLength;case Yi:return i*e*2/r.components*r.byteLength;case Th:return i*e*2/r.components*r.byteLength;case pp:return i*e*3/r.components*r.byteLength;case Hn:return i*e*4/r.components*r.byteLength;case Ch:return i*e*4/r.components*r.byteLength;case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Lh:return Math.max(i,16)*Math.max(e,8)/4;case Rh:case Ih:return Math.max(i,8)*Math.max(e,8)/2;case Dh:case Nh:case Fh:case Oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uh:case Nl:case Bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qh:case ed:case td:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nd:case id:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ul:case rd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(wp,"getByteLength");function aS(i){switch(i){case dn:case cp:return{byteLength:1,components:1};case io:case up:case Vn:return{byteLength:2,components:1};case wh:case Eh:return{byteLength:2,components:4};case Mi:case Sh:case Si:return{byteLength:4,components:1};case hp:case dp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(aS,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function q_(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(q_,"WebGLAnimation");function dS(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){let _=p[f],b=p[m];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,p[f]=b)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){let b=p[m];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l(dS,"WebGLAttributes");var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pS=`#ifdef USE_ALPHAHASH
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
#endif`,mS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
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
#endif`,bS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
#endif`,MS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AS=`#ifdef USE_IRIDESCENCE
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
#endif`,TS=`#ifdef USE_BUMPMAP
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FS=`#define PI 3.141592653589793
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
} // validated`,OS=`vec3 transformedNormal = objectNormal;
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
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",HS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
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
}`,ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cw=`PhysicalMaterial material;
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
#endif`,uw=`uniform sampler2D dfgLUT;
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
}`,hw=`
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
#endif`,dw=`#if defined( RE_IndirectDiffuse )
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mw=`#if defined( USE_POINTS_UV )
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
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Aw=`#if defined( USE_MORPHCOLORS )
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
#endif`,Tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
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
#endif`,Fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kw=`float getShadowMask() {
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
}`,jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qw=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform float backgroundBlurriness;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,y1=`#if DEPTH_PACKING == 3200
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
}`,b1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,C1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,P1=`#define MATCAP
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
}`,I1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,U1=`#define PHONG
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
}`,F1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,B1=`#define TOON
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
}`,k1=`#define TOON
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
}`,z1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,X1=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:fS,alphahash_pars_fragment:pS,alphamap_fragment:mS,alphamap_pars_fragment:gS,alphatest_fragment:xS,alphatest_pars_fragment:_S,aomap_fragment:yS,aomap_pars_fragment:bS,batching_pars_vertex:vS,batching_vertex:MS,begin_vertex:SS,beginnormal_vertex:wS,bsdfs:ES,iridescence_fragment:AS,bumpmap_pars_fragment:TS,clipping_planes_fragment:CS,clipping_planes_pars_fragment:RS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:IS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:NS,color_vertex:US,common:FS,defaultnormal_vertex:OS,displacementmap_pars_vertex:BS,displacementmap_vertex:kS,emissivemap_fragment:zS,emissivemap_pars_fragment:GS,colorspace_fragment:VS,colorspace_pars_fragment:HS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:qS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:rw,envmap_vertex:$S,fog_vertex:ZS,fog_pars_vertex:JS,fog_fragment:KS,fog_pars_fragment:jS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:sw,lights_toon_pars_fragment:aw,lights_phong_fragment:ow,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:hw,lights_fragment_maps:dw,lights_fragment_end:fw,lightprobes_pars_fragment:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:_w,map_fragment:yw,map_pars_fragment:bw,map_particle_fragment:vw,map_particle_pars_fragment:Mw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:ww,morphinstance_vertex:Ew,morphcolor_vertex:Aw,morphnormal_vertex:Tw,morphtarget_pars_vertex:Cw,morphtarget_vertex:Rw,normal_fragment_begin:Pw,normal_fragment_maps:Iw,normal_pars_fragment:Lw,normal_pars_vertex:Dw,normal_vertex:Nw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Fw,clearcoat_normal_fragment_maps:Ow,clearcoat_pars_fragment:Bw,iridescence_pars_fragment:kw,opaque_fragment:zw,packing:Gw,premultiplied_alpha_fragment:Vw,project_vertex:Hw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:qw,roughnessmap_pars_fragment:Yw,shadowmap_pars_fragment:$w,shadowmap_pars_vertex:Zw,shadowmap_vertex:Jw,shadowmask_pars_fragment:Kw,skinbase_vertex:jw,skinning_pars_vertex:Qw,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:r1,tonemapping_pars_fragment:s1,transmission_fragment:a1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,worldpos_vertex:h1,background_vert:d1,background_frag:f1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:x1,depth_vert:_1,depth_frag:y1,distance_vert:b1,distance_frag:v1,equirect_vert:M1,equirect_frag:S1,linedashed_vert:w1,linedashed_frag:E1,meshbasic_vert:A1,meshbasic_frag:T1,meshlambert_vert:C1,meshlambert_frag:R1,meshmatcap_vert:P1,meshmatcap_frag:I1,meshnormal_vert:L1,meshnormal_frag:D1,meshphong_vert:N1,meshphong_frag:U1,meshphysical_vert:F1,meshphysical_frag:O1,meshtoon_vert:B1,meshtoon_frag:k1,points_vert:z1,points_frag:G1,shadow_vert:V1,shadow_frag:H1,sprite_vert:W1,sprite_frag:X1},Pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zi={basic:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:fn([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:fn([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:fn([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:fn([Pe.lights,Pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Zi.physical={uniforms:fn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var od={r:0,b:0,g:0},q1=new yt,Y_=new Ze;Y_.set(-1,0,0,0,1,0,0,0,1);function Y1(i,e,t,n,r,s){let a=new Be(0),o=r===!0?0:1,c,u,h=null,p=0,f=null;function m(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let M=v.backgroundBlurriness>0;A=e.get(A,M)}return A}l(m,"getBackground");function _(v){let A=!1,M=m(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(_,"render");function b(v,A){let M=m(A);M&&M.isCubeTexture?(u===void 0&&(u=new bt(new Hi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Hs(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Y_),u.material.toneMapped=ht.getTransfer(M.colorSpace)!==xt,(h!==M||p!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new bt(new Xi(2,2),new wn({name:"BackgroundMaterial",uniforms:Hs(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ht.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}l(b,"addToRenderList");function g(v,A){v.getRGB(od,vp(i)),t.buffers.color.setClear(od.r,od.g,od.b,A,s)}l(g,"setClear");function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(x,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(v,A=1){a.set(v),o=A,g(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(v){o=v,g(a,o)},"setClearAlpha"),render:_,addToRenderList:b,dispose:x}}l(Y1,"WebGLBackground");function $1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(D,O,X,U,Y){let ne=!1,B=p(D,U,X,O);s!==B&&(s=B,u(s.object)),ne=m(D,U,X,Y),ne&&_(D,U,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,M(D,O,X,U),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(D){return i.bindVertexArray(D)}l(u,"bindVertexArrayObject");function h(D){return i.deleteVertexArray(D)}l(h,"deleteVertexArrayObject");function p(D,O,X,U){let Y=U.wireframe===!0,ne=n[O.id];ne===void 0&&(ne={},n[O.id]=ne);let B=D.isInstancedMesh===!0?D.id:0,J=ne[B];J===void 0&&(J={},ne[B]=J);let H=J[X.id];H===void 0&&(H={},J[X.id]=H);let $=H[Y];return $===void 0&&($=f(c()),H[Y]=$),$}l(p,"getBindingState");function f(D){let O=[],X=[],U=[];for(let Y=0;Y<t;Y++)O[Y]=0,X[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:U,object:D,attributes:{},index:null}}l(f,"createBindingState");function m(D,O,X,U){let Y=s.attributes,ne=O.attributes,B=0,J=X.getAttributes();for(let H in J)if(J[H].location>=0){let j=Y[H],he=ne[H];if(he===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;B++}return s.attributesNum!==B||s.index!==U}l(m,"needsUpdate");function _(D,O,X,U){let Y={},ne=O.attributes,B=0,J=X.getAttributes();for(let H in J)if(J[H].location>=0){let j=ne[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let he={};he.attribute=j,j&&j.data&&(he.data=j.data),Y[H]=he,B++}s.attributes=Y,s.attributesNum=B,s.index=U}l(_,"saveCache");function b(){let D=s.newAttributes;for(let O=0,X=D.length;O<X;O++)D[O]=0}l(b,"initAttributes");function g(D){x(D,0)}l(g,"enableAttribute");function x(D,O){let X=s.newAttributes,U=s.enabledAttributes,Y=s.attributeDivisors;X[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),Y[D]!==O&&(i.vertexAttribDivisor(D,O),Y[D]=O)}l(x,"enableAttributeAndDivisor");function v(){let D=s.newAttributes,O=s.enabledAttributes;for(let X=0,U=O.length;X<U;X++)O[X]!==D[X]&&(i.disableVertexAttribArray(X),O[X]=0)}l(v,"disableUnusedAttributes");function A(D,O,X,U,Y,ne,B){B===!0?i.vertexAttribIPointer(D,O,X,Y,ne):i.vertexAttribPointer(D,O,X,U,Y,ne)}l(A,"vertexAttribPointer");function M(D,O,X,U){b();let Y=U.attributes,ne=X.getAttributes(),B=O.defaultAttributeValues;for(let J in ne){let H=ne[J];if(H.location>=0){let $=Y[J];if($===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let j=$.normalized,he=$.itemSize,ge=e.get($);if(ge===void 0)continue;let Q=ge.buffer,pe=ge.type,le=ge.bytesPerElement,de=pe===i.INT||pe===i.UNSIGNED_INT||$.gpuType===Sh;if($.isInterleavedBufferAttribute){let ue=$.data,ee=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,me=$.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)x(H.location+ie,ue.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<H.locationSize;ie++)g(H.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ie=0;ie<H.locationSize;ie++)A(H.location+ie,he/H.locationSize,pe,j,ee*le,(me+he/H.locationSize*ie)*le,de)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)x(H.location+ue,$.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<H.locationSize;ue++)g(H.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ue=0;ue<H.locationSize;ue++)A(H.location+ue,he/H.locationSize,pe,j,he*le,he/H.locationSize*ue*le,de)}}else if(B!==void 0){let j=B[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}v()}l(M,"setupVertexAttributes");function C(){L();for(let D in n){let O=n[D];for(let X in O){let U=O[X];for(let Y in U){let ne=U[Y];for(let B in ne)h(ne[B].object),delete ne[B];delete U[Y]}}delete n[D]}}l(C,"dispose");function E(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let X in O){let U=O[X];for(let Y in U){let ne=U[Y];for(let B in ne)h(ne[B].object),delete ne[B];delete U[Y]}}delete n[D.id]}l(E,"releaseStatesOfGeometry");function y(D){for(let O in n){let X=n[O];for(let U in X){let Y=X[U];if(Y[D.id]===void 0)continue;let ne=Y[D.id];for(let B in ne)h(ne[B].object),delete ne[B];delete Y[D.id]}}}l(y,"releaseStatesOfProgram");function S(D){for(let O in n){let X=n[O],U=D.isInstancedMesh===!0?D.id:0,Y=X[U];if(Y!==void 0){for(let ne in Y){let B=Y[ne];for(let J in B)h(B[J].object),delete B[J];delete Y[ne]}delete X[U],Object.keys(X).length===0&&delete n[O]}}}l(S,"releaseStatesOfObject");function L(){P(),a=!0,s!==r&&(s=r,u(s.object))}l(L,"reset");function P(){r.geometry=null,r.program=null,r.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:L,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}l($1,"WebGLBindingStates");function Z1(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(Z1,"WebGLBufferRenderer");function J1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(y){return!(y!==Hn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(y){let S=y===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==dn&&y!==Si&&!S&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(qe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:M,maxSamples:C,samples:E}}l(J1,"WebGLCapabilities");function K1(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Pn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let _=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,x=i.get(p);if(!r||_===null||_.length===0||s&&!g)s?h(null):u();else{let v=s?0:n,A=v*4,M=x.clippingState||null;c.value=M,M=h(_,f,A,m);for(let C=0;C!==A;++C)M[C]=t[C];x.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(p,f,m,_){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=c.value,_!==!0||g===null){let x=m+b*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<x)&&(g=new Float32Array(x));for(let A=0,M=m;A!==b;++A,M+=4)a.copy(p[A]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}l(h,"projectPlanes")}l(K1,"WebGLClipping");var Zm=class Zm extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Bs});s.uniforms.tEquirect.value=t;let a=new bt(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Wt),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(Zm,"WebGLCubeRenderTarget");var Bl=Zm,E_=256,j1=3,Q1=20,$_=256,Z_=16,eE=3,tE=new W,nE=new Be,hd=class hd{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qa(1,10,null),this._boxMesh=new bt(new Hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=tE}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(nE));let g=new Qa(n,r,h);return g.position.copy(o),g.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=_,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(E_,__(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===no?this._setSize(e.image.length===0?E_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=A_(e,!1,!1),n=Math.log2(e)-j1;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=A_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===no?(this._cubemapMaterial===null&&(this._cubemapMaterial=C_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=T_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iE(),this._integrationMaterial=rE());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Z_);for(let a=0;a<=n;a++){let o=hd.lodToRoughness(a,n);if(a>n-eE)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/($_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sE());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(hd,"PMREMGenerator");var cd=hd;function A_(i,e,t){return new Bl(i,{minFilter:Gn,generateMipmaps:e,type:Vn,colorSpace:al,depthBuffer:t})}l(A_,"_createRenderTarget");function kl(i,e,t){return new wn({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:En,blending:Bs,depthTest:!1,depthWrite:!1})}l(kl,"_getMaterial");function iE(){return kl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$_}u

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
	`)}l(iE,"_getGGXMaterial");function rE(){return kl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Z_}},`

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
	`)}l(rE,"_getIntegrationMaterial");function sE(){return kl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q1}
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
	`)}l(sE,"_getBlurMaterial");function T_(){return kl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(T_,"_getEquirectMaterial");function C_(){return kl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(C_,"_getCubemapMaterial");function aE(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}l(r,"get");function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===bh||m===vh)if(e.has(f)){let _=e.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let b=new Bl(_.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",u),o(b.texture,f.mapping)}else return null}}return f}l(s,"getCube");function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,_=m===bh||m===vh,b=m===zs||m===no;if(_||b){let g=t.get(f),x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new cd(i)),g=_?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return _&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new cd(i)),g=_?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}l(a,"getPMREM");function o(f,m){return m===bh?f.mapping=zs:m===vh&&(f.mapping=no),f}l(o,"mapTextureMapping");function c(f){let m=0,_=6;for(let b=0;b<_;b++)f[b]!==void 0&&m++;return m===_}l(c,"isCubeTextureComplete");function u(f){let m=f.target;m.removeEventListener("dispose",u);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}l(u,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}l(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:r,dispose:p}}l(aE,"WebGLEnvironments");function oE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&il("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(oE,"WebGLExtensions");function lE(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){c(_.target)}l(o,"onGeometryDispose");function c(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);let b=s.get(_);b&&(e.remove(b),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(_,b){return r[b.id]!==void 0||(b.addEventListener("dispose",o),r[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}l(u,"get");function h(_){let b=_.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}l(h,"update");function p(_){let b=_.index,g=_.attributes.position,x=0;if(g===void 0)return;let v=b!==null?b.array.length:g.array.length/3-1,A=g.count>=65535?pl:fl,M=new A(Math.ceil(v/3)*6,1),C=M.array;if(b!==null){let y=b.array;x=b.version;for(let S=0,L=0;S<v;S+=3){let P=y[S+0],D=y[S+1],O=y[S+2];C[L++]=P,C[L++]=D,C[L++]=D,C[L++]=O,C[L++]=O,C[L++]=P}}else{x=g.version;for(let y=0,S=0;y<v;y+=3){let L=y+0,P=y+1,D=y+2;C[S++]=L,C[S++]=P,C[S++]=P,C[S++]=D,C[S++]=D,C[S++]=L}}M.version=x;let E=s.get(_);E&&e.remove(E),s.set(_,M)}l(p,"updateWireframeAttribute");function f(_){let b=s.get(_);if(b){let g=_.index;g!==null&&b.version<g.version&&p(_)}else p(_);return s.get(_)}l(f,"getWireframeAttribute");function m(){for(let _ in r){let b=r[_].deref();b!==void 0&&c(b)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:f,dispose:m}}l(lE,"WebGLGeometries");function cE(i,e,t){let n;function r(p){n=p}l(r,"setMode");let s,a;function o(p){s=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}l(c,"render");function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,p*a,m),t.update(f,n,m))}l(u,"renderInstances");function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,m);let b=0;for(let g=0;g<m;g++)b+=f[g];t.update(b,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(cE,"WebGLIndexedBufferRenderer");function uE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(uE,"WebGLInfo");function hE(i,e,t){let n=new WeakMap,r=new Nt;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==p){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;l(P,"disposeTexture"),f!==void 0&&f.texture.dispose();let _=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],M=0;_===!0&&(M=1),b===!0&&(M=2),g===!0&&(M=3);let C=o.attributes.position.count*M,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let y=new Float32Array(C*E*4*p),S=new Os(y,C,E,p);S.type=Si,S.needsUpdate=!0;let L=M*4;for(let D=0;D<p;D++){let O=x[D],X=v[D],U=A[D],Y=C*E*4*D;for(let ne=0;ne<O.count;ne++){let B=ne*L;_===!0&&(r.fromBufferAttribute(O,ne),y[Y+B+0]=r.x,y[Y+B+1]=r.y,y[Y+B+2]=r.z,y[Y+B+3]=0),b===!0&&(r.fromBufferAttribute(X,ne),y[Y+B+4]=r.x,y[Y+B+5]=r.y,y[Y+B+6]=r.z,y[Y+B+7]=0),g===!0&&(r.fromBufferAttribute(U,ne),y[Y+B+8]=r.x,y[Y+B+9]=r.y,y[Y+B+10]=r.z,y[Y+B+11]=U.itemSize===4?r.w:1)}}f={count:p,texture:S,size:new He(C,E)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];let b=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(s,"update"),{update:s}}l(hE,"WebGLMorphtargets");function dE(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(dE,"WebGLObjects");var fE={[np]:"LINEAR_TONE_MAPPING",[ip]:"REINHARD_TONE_MAPPING",[rp]:"CINEON_TONE_MAPPING",[Cl]:"ACES_FILMIC_TONE_MAPPING",[ap]:"AGX_TONE_MAPPING",[op]:"NEUTRAL_TONE_MAPPING",[sp]:"CUSTOM_TONE_MAPPING"};function pE(i,e,t,n,r,s){let a=new Bn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Ot;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let p=new zu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new bt(h,p),m=new wl(-1,1,1,-1,0,1),_=null,b=null,g=!1,x,v=null,A=[],M=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),c!==null&&c.setSize(C,E);for(let y=0;y<A.length;y++){let S=A[y];S.setSize&&S.setSize(C,E)}},this.setEffects=function(C){A=C,M=A.length>0&&A[0].isRenderPass===!0;let E=a.width,y=a.height;A.length>0&&o===null&&(o=new Bn(E,y,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new Bn(E,y,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));let S=r===!0&&A.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Ar(E,y),s===!0&&(u.format=Rr,u.type=Gs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<A.length;L++){let P=A[L];P.setSize&&P.setSize(E,y),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(C,E){if(g||C.toneMapping===qi&&A.length===0)return!1;if(v=E,E!==null){let y=E.width,S=E.height;(a.width!==y||a.height!==S)&&this.setSize(y,S)}return M===!1&&C.setRenderTarget(a),x=C.toneMapping,C.toneMapping=qi,!0},this.hasRenderPass=function(){return M},this.end=function(C,E){C.toneMapping=x,g=!0;let y=a,S=o;for(let L=0;L<A.length;L++){let P=A[L];P.enabled!==!1&&(P.render(C,S,y,E),P.needsSwap!==!1&&(y=S,S=S===o?c:o))}if(_!==C.outputColorSpace||b!==C.toneMapping){_=C.outputColorSpace,b=C.toneMapping,p.defines={},ht.getTransfer(_)===xt&&(p.defines.SRGB_TRANSFER="");let L=fE[b];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=y.texture,C.setRenderTarget(v),C.render(f,m),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}l(pE,"WebGLOutput");var J_=new Sn,K_=new Ar(1,1),j_=new xl(1),Q_=new Os,ey=new Fu,ty=new gl,R_=[],P_=[],I_=new Float32Array(16),L_=new Float32Array(9),D_=new Float32Array(4);function so(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=R_[r];if(s===void 0&&(s=new Float32Array(r),R_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(so,"flatten");function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(qt,"arraysEqual");function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Yt,"copyArray");function dd(i,e){let t=P_[e];t===void 0&&(t=new Int32Array(e),P_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(dd,"allocTexUnits");function mE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(mE,"setValueV1f");function gE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}l(gE,"setValueV2f");function xE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}l(xE,"setValueV3f");function _E(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}l(_E,"setValueV4f");function yE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;D_.set(n),i.uniformMatrix2fv(this.addr,!1,D_),Yt(t,n)}}l(yE,"setValueM2");function bE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;L_.set(n),i.uniformMatrix3fv(this.addr,!1,L_),Yt(t,n)}}l(bE,"setValueM3");function vE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;I_.set(n),i.uniformMatrix4fv(this.addr,!1,I_),Yt(t,n)}}l(vE,"setValueM4");function ME(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(ME,"setValueV1i");function SE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}l(SE,"setValueV2i");function wE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}l(wE,"setValueV3i");function EE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}l(EE,"setValueV4i");function AE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(AE,"setValueV1ui");function TE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}l(TE,"setValueV2ui");function CE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}l(CE,"setValueV3ui");function RE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}l(RE,"setValueV4ui");function fd(i){return i.version===0&&(i.compareFunction=_p,i.needsUpdate=!0),i}l(fd,"initShadowTexture");function PE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=fd(K_):s=J_,t.setTexture2D(e||s,r)}l(PE,"setValueT1");function IE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ey,r)}l(IE,"setValueT3D1");function LE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=fd(j_):s=ty,t.setTextureCube(e||s,r)}l(LE,"setValueT6");function DE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Q_,r)}l(DE,"setValueT2DArray1");function NE(i){switch(i){case 5126:return mE;case 35664:return gE;case 35665:return xE;case 35666:return _E;case 35674:return yE;case 35675:return bE;case 35676:return vE;case 5124:case 35670:return ME;case 35667:case 35671:return SE;case 35668:case 35672:return wE;case 35669:case 35673:return EE;case 5125:return AE;case 36294:return TE;case 36295:return CE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return DE}}l(NE,"getSingularSetter");function UE(i,e){i.uniform1fv(this.addr,e)}l(UE,"setValueV1fArray");function FE(i,e){let t=so(e,this.size,2);i.uniform2fv(this.addr,t)}l(FE,"setValueV2fArray");function OE(i,e){let t=so(e,this.size,3);i.uniform3fv(this.addr,t)}l(OE,"setValueV3fArray");function BE(i,e){let t=so(e,this.size,4);i.uniform4fv(this.addr,t)}l(BE,"setValueV4fArray");function kE(i,e){let t=so(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(kE,"setValueM2Array");function zE(i,e){let t=so(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(zE,"setValueM3Array");function GE(i,e){let t=so(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(GE,"setValueM4Array");function VE(i,e){i.uniform1iv(this.addr,e)}l(VE,"setValueV1iArray");function HE(i,e){i.uniform2iv(this.addr,e)}l(HE,"setValueV2iArray");function WE(i,e){i.uniform3iv(this.addr,e)}l(WE,"setValueV3iArray");function XE(i,e){i.uniform4iv(this.addr,e)}l(XE,"setValueV4iArray");function qE(i,e){i.uniform1uiv(this.addr,e)}l(qE,"setValueV1uiArray");function YE(i,e){i.uniform2uiv(this.addr,e)}l(YE,"setValueV2uiArray");function $E(i,e){i.uniform3uiv(this.addr,e)}l($E,"setValueV3uiArray");function ZE(i,e){i.uniform4uiv(this.addr,e)}l(ZE,"setValueV4uiArray");function JE(i,e,t){let n=this.cache,r=e.length,s=dd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=fd(K_):a=J_;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(JE,"setValueT1Array");function KE(i,e,t){let n=this.cache,r=e.length,s=dd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ey,s[a])}l(KE,"setValueT3DArray");function jE(i,e,t){let n=this.cache,r=e.length,s=dd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=fd(j_):a=ty;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(jE,"setValueT6Array");function QE(i,e,t){let n=this.cache,r=e.length,s=dd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Q_,s[a])}l(QE,"setValueT2DArrayArray");function eA(i){switch(i){case 5126:return UE;case 35664:return FE;case 35665:return OE;case 35666:return BE;case 35674:return kE;case 35675:return zE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return HE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return qE;case 36294:return YE;case 36295:return $E;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return QE}}l(eA,"getPureArraySetter");var Jm=class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NE(t.type)}};l(Jm,"SingleUniform");var Gm=Jm,Km=class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}};l(Km,"PureArrayUniform");var Vm=Km,jm=class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(jm,"StructuredUniform");var Hm=jm,km=/(\w+)(\])?(\[|\.)?/g;function N_(i,e){i.seq.push(e),i.map[e.id]=e}l(N_,"addUniform");function tA(i,e,t){let n=i.name,r=n.length;for(km.lastIndex=0;;){let s=km.exec(n),a=km.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){N_(t,u===void 0?new Gm(o,i,e):new Vm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Hm(o),N_(t,p)),t=p}}}l(tA,"parseUniform");var Qm=class Qm{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);tA(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(Qm,"WebGLUniforms");var ro=Qm;function U_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(U_,"WebGLShader");var nA=37297,iA=0;function rA(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(rA,"handleSource");var F_=new Ze;function sA(i){ht._getMatrix(F_,ht.workingColorSpace,i);let e=`mat3( ${F_.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ol:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(sA,"getEncodingComponents");function O_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+rA(i.getShaderSource(e),o)}else return s}l(O_,"getShaderErrors");function aA(i,e){let t=sA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(aA,"getTexelEncodingFunction");var oA={[np]:"Linear",[ip]:"Reinhard",[rp]:"Cineon",[Cl]:"ACESFilmic",[ap]:"AgX",[op]:"Neutral",[sp]:"Custom"};function lA(i,e){let t=oA[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(lA,"getToneMappingFunction");var ld=new W;function cA(){ht.getLuminanceCoefficients(ld);let i=ld.x.toFixed(4),e=ld.y.toFixed(4),t=ld.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(cA,"getLuminanceFunction");function uA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}l(uA,"generateVertexExtensions");function hA(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(hA,"generateDefines");function dA(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(dA,"fetchAttributeLocations");function Ol(i){return i!==""}l(Ol,"filterEmptyLine");function B_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(B_,"replaceLightNums");function k_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(k_,"replaceClippingPlaneNums");var fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wm(i){return i.replace(fA,pA)}l(Wm,"resolveIncludes");function pA(i,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wm(t)}l(pA,"includeReplacer");var mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(i){return i.replace(mA,gA)}l(z_,"unrollLoops");function gA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(gA,"loopReplacer");function G_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(G_,"generatePrecision");var xA={[Tl]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function _A(i){return xA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(_A,"generateShadowMapTypeDefine");var yA={[no]:"ENVMAP_MODE_REFRACTION"};function bA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(bA,"generateEnvMapModeDefine");var vA={[tp]:"ENVMAP_BLENDING_MULTIPLY",[i_]:"ENVMAP_BLENDING_MIX",[r_]:"ENVMAP_BLENDING_ADD"};function MA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vA[i.combine]||"ENVMAP_BLENDING_NONE"}l(MA,"generateEnvMapBlendingDefine");function SA(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_A(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=bA(t),p=MA(t),f=uA(t),m=hA(s),_=r.createProgram(),b,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ol).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ol).join(`
`),g.length>0&&(g+=`
`)):(b=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),g=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?rt.tonemapping_pars_fragment:"",t.toneMapping!==qi?lA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,aA("linearToOutputTexel",t.outputColorSpace),cA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ol).join(`
`)),a=Wm(a),a=B_(a,t),a=k_(a,t),o=Wm(o),o=B_(o,t),o=k_(o,t),a=z_(a),o=z_(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+b+a,A=x+g+o,M=U_(r,r.VERTEX_SHADER,v),C=U_(r,r.FRAGMENT_SHADER,A);r.attachShader(_,M),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(M)||"",X=r.getShaderInfoLog(C)||"",U=D.trim(),Y=O.trim(),ne=X.trim(),B=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,C);else{let H=O_(r,M,"vertex"),$=O_(r,C,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+H+`
`+$)}else U!==""?qe("WebGLProgram: Program Info Log:",U):(Y===""||ne==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:U,vertexShader:{log:Y,prefix:b},fragmentShader:{log:ne,prefix:g}})}r.deleteShader(M),r.deleteShader(C),y=new ro(r,_),S=dA(r,_)}l(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,nA)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=C,this}l(SA,"WebGLProgram");var wA=0,e0=class e0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qm(e),t.set(e,n)),n}};l(e0,"WebGLShaderCache");var Xm=e0,t0=class t0{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}};l(t0,"WebGLShaderStage");var qm=t0;function EA(i){return i===Yi||i===Nl||i===Ul}l(EA,"isPackedRGFormat");function AA(i,e,t,n,r,s){let a=new ul,o=new Xm,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}l(m,"getChannel");function _(y,S,L,P,D,O){let X=P.fog,U=D.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||Y,ne),J=f[y.type],H=n.precision;y.precision!==null&&(H=n.getMaxPrecision(y.precision),H!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",H,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=$!==void 0?$.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let ge,Q,pe,le;if(J){let Le=Zi[J];ge=Le.vertexShader,Q=Le.fragmentShader}else{ge=y.vertexShader,Q=y.fragmentShader;let Le=o.getVertexShaderStage(y),_t=o.getFragmentShaderStage(y);o.update(y,Le,_t),pe=Le.id,le=_t.id}let de=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),ee=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,ie=!!y.map,xe=!!y.matcap,Se=!!B,be=Se&&B.isPMREMTexture===!0,Xe=!!y.aoMap,Ke=!!y.lightMap,ot=!!y.bumpMap&&y.wireframe===!1,je=!!y.normalMap,St=!!y.displacementMap,lt=!!y.emissiveMap,wt=!!y.metalnessMap,Dt=!!y.roughnessMap,at=y.anisotropy>0,z=y.clearcoat>0,Je=y.diffuseRoughness>0,et=y.dispersion>0,st=y.retroreflectivity>0,ye=y.iridescence>0,mt=y.sheen>0,ze=y.transmission>0,We=at&&!!y.anisotropyMap,I=z&&!!y.clearcoatMap,w=z&&!!y.clearcoatNormalMap,q=z&&!!y.clearcoatRoughnessMap,fe=Je&&!!y.diffuseRoughnessMap,ae=ye&&!!y.iridescenceMap,Me=ye&&!!y.iridescenceThicknessMap,Ce=mt&&!!y.sheenColorMap,se=mt&&!!y.sheenRoughnessMap,oe=!!y.specularMap,Ee=!!y.specularColorMap,F=!!y.specularIntensityMap,ce=ze&&!!y.transmissionMap,re=ze&&!!y.thicknessMap,Ae=!!y.gradientMap,ve=!!y.alphaMap,we=y.alphaTest>0,Ge=!!y.alphaHash,it=!!y.extensions,_e=qi;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ve=be?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,tt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:Q,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:H,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:ee,instancingColor:ee&&D.instanceColor!==null,instancingMorph:ee&&D.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ie,matcap:xe,envMap:Se,envMapMode:Se&&B.mapping,envMapPMREM:be,envMapMaxLod:be?Ve.length-1:null,envMapSize:be?Ve[0].width:null,aoMap:Xe,lightMap:Ke,bumpMap:ot,normalMap:je,displacementMap:St,emissiveMap:lt,normalMapObjectSpace:je&&y.normalMapType===o_,normalMapTangentSpace:je&&y.normalMapType===sd,packedNormalMap:je&&y.normalMapType===sd&&EA(y.normalMap.format),metalnessMap:wt,roughnessMap:Dt,anisotropy:at,anisotropyMap:We,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:Je,diffuseRoughnessMap:fe,dispersion:et,retroreflection:st,iridescence:ye,iridescenceMap:ae,iridescenceThicknessMap:Me,sheen:mt,sheenColorMap:Ce,sheenRoughnessMap:se,specularMap:oe,specularColorMap:Ee,specularIntensityMap:F,transmission:ze,transmissionMap:ce,thicknessMap:re,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===to&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:we,alphaHash:Ge,combine:y.combine,mapUv:ie&&m(y.map.channel),aoMapUv:Xe&&m(y.aoMap.channel),lightMapUv:Ke&&m(y.lightMap.channel),bumpMapUv:ot&&m(y.bumpMap.channel),normalMapUv:je&&m(y.normalMap.channel),displacementMapUv:St&&m(y.displacementMap.channel),emissiveMapUv:lt&&m(y.emissiveMap.channel),metalnessMapUv:wt&&m(y.metalnessMap.channel),roughnessMapUv:Dt&&m(y.roughnessMap.channel),anisotropyMapUv:We&&m(y.anisotropyMap.channel),clearcoatMapUv:I&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(y.sheenRoughnessMap.channel),specularMapUv:oe&&m(y.specularMap.channel),specularColorMapUv:Ee&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:ce&&m(y.transmissionMap.channel),thicknessMapUv:re&&m(y.thicknessMap.channel),alphaMapUv:ve&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(je||at),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ie||ve),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&je===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Le=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:ie&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:lt&&y.emissiveMap.isVideoTexture===!0&&ht.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:it&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&y.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}l(_,"getParameters");function b(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(g(S,y),x(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}l(b,"getProgramCacheKey");function g(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}l(g,"getProgramCacheKeyParameters");function x(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),y.push(a.mask)}l(x,"getProgramCacheKeyBooleans");function v(y){let S=f[y.type],L;if(S){let P=Zi[S];L=Ws.clone(P.uniforms)}else L=y.uniforms;return L}l(v,"getUniforms");function A(y,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new SA(i,S,y,r),u.push(L),h.set(S,L)),L}l(A,"acquireProgram");function M(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}l(M,"releaseProgram");function C(y){o.remove(y)}l(C,"releaseShaderCache");function E(){o.dispose()}return l(E,"dispose"),{getParameters:_,getProgramCacheKey:b,getUniforms:v,acquireProgram:A,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:E}}l(AA,"WebGLPrograms");function TA(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(TA,"WebGLProperties");function CA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(CA,"painterSortStable");function V_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(V_,"reversePainterSortStable");function H_(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(f,m,_,b,g,x){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:x},i[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=_,v.materialVariant=a(f),v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=g,v.group=x),e++,v}l(o,"getNextRenderItem");function c(f,m,_,b,g,x,v){v.reversedDepth===!0&&(g=-g);let A=o(f,m,_,b,g,x);_.transmission>0?n.push(A):_.transparent===!0?r.push(A):t.push(A)}l(c,"push");function u(f,m,_,b,g,x){let v=o(f,m,_,b,g,x);_.transmission>0?n.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}l(u,"unshift");function h(f,m){t.length>1&&t.sort(f||CA),n.length>1&&n.sort(m||V_),r.length>1&&r.sort(m||V_)}l(h,"sort");function p(){for(let f=e,m=i.length;f<m;f++){let _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}l(H_,"WebGLRenderList");function RA(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new H_,i.set(n,[a])):r>=s.length?(a=new H_,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(RA,"WebGLRenderLists");function PA(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(PA,"UniformsCache");function IA(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(IA,"ShadowUniformsCache");var LA=0;function DA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(DA,"shadowCastingAndTexturingLightsFirst");function NA(i){let e=new PA,t=IA(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let r=new W,s=new yt,a=new yt;function o(u){let h=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,_=0,b=0,g=0,x=0,v=0,A=0,M=0,C=0,E=0,y=0,S=0,L=0,P=0;u.sort(DA);for(let O=0,X=u.length;O<X;O++){let U=u[O],Y=U.color,ne=U.intensity,B=U.distance,J=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Yi?J=U.shadow.map.texture:J=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=Y.r*ne,p+=Y.g*ne,f+=Y.b*ne;else if(U.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(U.sh.coefficients[H],ne);P++}else if(U.isSunLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=J;let he=$.getViewportCount();for(let ge=0;ge<he;ge++)n.sunShadowMatrix[b+ge]=$.getMatrix(ge),n.sunShadowCascade[b+ge]=$._cascadeData[ge];b+=he,_++}n.sun[m]=H,m++}else if(U.isDirectionalLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=U.shadow.matrix,C++}n.directional[g]=H,g++}else if(U.isSpotLight){let H=e.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(Y).multiplyScalar(ne),H.distance=B,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,n.spot[v]=H;let $=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,$.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[v]=$.matrix,U.castShadow){let j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=J,y++}v++}else if(U.isRectAreaLight){let H=e.get(U);H.color.copy(Y).multiplyScalar(ne),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=H,A++}else if(U.isPointLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){let $=U.shadow,j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=U.shadow.matrix,E++}n.point[x]=H,x++}else if(U.isHemisphereLight){let H=e.get(U);H.skyColor.copy(U.color).multiplyScalar(ne),H.groundColor.copy(U.groundColor).multiplyScalar(ne),n.hemi[M]=H,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let D=n.hash;(D.sunLength!==m||D.directionalLength!==g||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==A||D.hemiLength!==M||D.numSunShadows!==_||D.numDirectionalShadows!==C||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=g,n.spot.length=v,n.rectArea.length=A,n.point.length=x,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,D.sunLength=m,D.directionalLength=g,D.pointLength=x,D.spotLength=v,D.rectAreaLength=A,D.hemiLength=M,D.numSunShadows=_,D.numDirectionalShadows=C,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=S,D.numLightProbes=P,n.version=LA++)}l(o,"setup");function c(u,h){let p=0,f=0,m=0,_=0,b=0,g=0,x=h.matrixWorldInverse;for(let v=0,A=u.length;v<A;v++){let M=u[v];if(M.isSunLight){let C=n.sun[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(x),p++}else if(M.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),f++}else if(M.isSpotLight){let C=n.spot[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),_++}else if(M.isRectAreaLight){let C=n.rectArea[b];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),a.identity(),s.copy(M.matrixWorld),s.premultiply(x),a.extractRotation(s),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let C=n.point[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){let C=n.hemi[g];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(x),g++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(NA,"WebGLLights");function W_(i){let e=new NA(i),t=[],n=[],r=[];function s(p){h.camera=p,t.length=0,n.length=0,r.length=0}l(s,"init");function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}l(c,"setupLights");function u(p){e.setupView(t,p)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(W_,"WebGLRenderState");function UA(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new W_(i),e.set(r,[o])):s>=a.length?(o=new W_(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(UA,"WebGLRenderStates");var FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
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
}`,BA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],kA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],X_=new yt,Fl=new W,zm=new W;function zA(i,e,t){let n=new ts,r=new He,s=new He,a=new Nt,o=new Gu,c=new Vu,u={},h=t.maxTextureSize,p={[os]:En,[En]:os,[si]:si},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:FA,fragmentShader:OA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ot;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new bt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let x=this.type;this.render=function(E,y,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===yh&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tl);let L=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=x!==this.type;X&&y.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(Y=>Y.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,Y=E.length;U<Y;U++){let ne=E[U],B=ne.shadow;if(B===void 0){qe("WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let J=B.getFrameExtents();r.multiply(J),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,B.mapSize.y=s.y));let H=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===eo){if(ne.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Bn(r.x,r.y,{format:Yi,type:Vn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),B.map.texture.name=ne.name+".shadowMap",B.map.depthTexture=new Ar(r.x,r.y,Si),B.map.depthTexture.name=ne.name+".shadowMapDepth",B.map.depthTexture.format=Mr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht}else ne.isPointLight?(B.map=new Bl(r.x),B.map.depthTexture=new xl(r.x,Mi)):(B.map=new Bn(r.x,r.y),B.map.depthTexture=new Ar(r.x,r.y,Mi)),B.map.depthTexture.name=ne.name+".shadowMap",B.map.depthTexture.format=Mr,this.type===Tl?(B.map.depthTexture.compareFunction=H?xp:gp,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);let $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();ne.isPointLight!==!0&&B.updateMatrices(ne,S);let j=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let he=0;he<$;he++){let ge=B.getCamera(he);if(ne.isPointLight){let Q=B.camera,pe=B.matrix,le=ne.distance||Q.far;le!==Q.far&&(Q.far=le,Q.updateProjectionMatrix()),Fl.setFromMatrixPosition(ne.matrixWorld),Q.position.copy(Fl),zm.copy(Q.position),zm.add(BA[he]),Q.up.copy(kA[he]),Q.lookAt(zm),Q.updateMatrixWorld(),pe.makeTranslation(-Fl.x,-Fl.y,-Fl.z),X_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(X_,Q.coordinateSystem,Q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,he),i.clear();else{he===0&&(i.setRenderTarget(B.map),i.clear());let Q=B.getViewport(he);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),O.viewport(a)}n=B.getFrustum(he),M(y,S,ge,ne,j,this.type)}B.isPointLightShadow!==!0&&this.type===eo&&v(B,S),B.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(L,P,D)};function v(E,y){let S=e.update(b);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Bn(r.x,r.y,{format:Yi,type:Vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(y,null,S,f,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(y,null,S,m,b,null)}l(v,"VSMPass");function A(E,y,S,L){let P=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let O=P.uuid,X=y.uuid,U=u[O];U===void 0&&(U={},u[O]=U);let Y=U[X];Y===void 0&&(Y=P.clone(),U[X]=Y,y.addEventListener("dispose",C)),P=Y}if(P.visible=y.visible,P.wireframe=y.wireframe,L===eo?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:p[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=S}return P}l(A,"getDepthMaterial");function M(E,y,S,L,P,D){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===eo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let U=e.update(E),Y=E.material;if(Array.isArray(Y)){let ne=U.groups;for(let B=0,J=ne.length;B<J;B++){let H=ne[B],$=Y[H.materialIndex];if($&&$.visible){let j=A(E,$,L,D);E.onBeforeShadow(i,E,y,S,U,j,H),i.renderBufferDirect(S,null,U,j,E,H),E.onAfterShadow(i,E,y,S,U,j,H)}}}else if(Y.visible){let ne=A(E,Y,L,D);E.onBeforeShadow(i,E,y,S,U,ne,null),i.renderBufferDirect(S,null,U,ne,E,null),E.onAfterShadow(i,E,y,S,U,ne,null)}}let X=E.children;for(let U=0,Y=X.length;U<Y;U++)M(X[U],y,S,L,P,D)}l(M,"renderObject");function C(E){E.target.removeEventListener("dispose",C);for(let S in u){let L=u[S],P=E.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}l(C,"onMaterialDispose")}l(zA,"WebGLShadowMap");function GA(i,e){function t(){let F=!1,ce=new Nt,re=null,Ae=new Nt(0,0,0,0);return{setMask:l(function(ve){re!==ve&&!F&&(i.colorMask(ve,ve,ve,ve),re=ve)},"setMask"),setLocked:l(function(ve){F=ve},"setLocked"),setClear:l(function(ve,we,Ge,it,_e){_e===!0&&(ve*=it,we*=it,Ge*=it),ce.set(ve,we,Ge,it),Ae.equals(ce)===!1&&(i.clearColor(ve,we,Ge,it),Ae.copy(ce))},"setClear"),reset:l(function(){F=!1,re=null,Ae.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let F=!1,ce=!1,re=null,Ae=null,ve=null;return{setReversed:l(function(we){if(ce!==we){let Ge=e.get("EXT_clip_control");we?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ce=we;let it=ve;ve=null,this.setClear(it)}},"setReversed"),getReversed:l(function(){return ce},"getReversed"),setTest:l(function(we){we?ue(i.DEPTH_TEST):ee(i.DEPTH_TEST)},"setTest"),setMask:l(function(we){re!==we&&!F&&(i.depthMask(we),re=we)},"setMask"),setFunc:l(function(we){if(ce&&(we=x_[we]),Ae!==we){switch(we){case wu:i.depthFunc(i.NEVER);break;case Eu:i.depthFunc(i.ALWAYS);break;case Au:i.depthFunc(i.LESS);break;case Wa:i.depthFunc(i.LEQUAL);break;case Tu:i.depthFunc(i.EQUAL);break;case Cu:i.depthFunc(i.GEQUAL);break;case Ru:i.depthFunc(i.GREATER);break;case Pu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=we}},"setFunc"),setLocked:l(function(we){F=we},"setLocked"),setClear:l(function(we){ve!==we&&(ve=we,ce&&(we=1-we),i.clearDepth(we))},"setClear"),reset:l(function(){F=!1,re=null,Ae=null,ve=null,ce=!1},"reset")}}l(n,"DepthBuffer");function r(){let F=!1,ce=null,re=null,Ae=null,ve=null,we=null,Ge=null,it=null,_e=null;return{setTest:l(function(Ve){F||(Ve?ue(i.STENCIL_TEST):ee(i.STENCIL_TEST))},"setTest"),setMask:l(function(Ve){ce!==Ve&&!F&&(i.stencilMask(Ve),ce=Ve)},"setMask"),setFunc:l(function(Ve,tt,Le){(re!==Ve||Ae!==tt||ve!==Le)&&(i.stencilFunc(Ve,tt,Le),re=Ve,Ae=tt,ve=Le)},"setFunc"),setOp:l(function(Ve,tt,Le){(we!==Ve||Ge!==tt||it!==Le)&&(i.stencilOp(Ve,tt,Le),we=Ve,Ge=tt,it=Le)},"setOp"),setLocked:l(function(Ve){F=Ve},"setLocked"),setClear:l(function(Ve){_e!==Ve&&(i.clearStencil(Ve),_e=Ve)},"setClear"),reset:l(function(){F=!1,ce=null,re=null,Ae=null,ve=null,we=null,Ge=null,it=null,_e=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},p={},f={},m=new WeakMap,_=[],b=null,g=!1,x=null,v=null,A=null,M=null,C=null,E=null,y=null,S=new Be(0,0,0),L=0,P=!1,D=null,O=null,X=null,U=null,Y=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=J>=2);let $=null,j={},he=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Q=new Nt().fromArray(he),pe=new Nt().fromArray(ge);function le(F,ce,re,Ae){let ve=new Uint8Array(4),we=i.createTexture();i.bindTexture(F,we),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<re;Ge++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ce+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return we}l(le,"createTexture");let de={};de[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Wa),ot(!1),je(Zf),ue(i.CULL_FACE),Xe(Bs);function ue(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}l(ue,"enable");function ee(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}l(ee,"disable");function me(F,ce){return f[F]!==ce?(i.bindFramebuffer(F,ce),f[F]=ce,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}l(me,"bindFramebuffer");function ie(F,ce){let re=_,Ae=!1;if(F){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let ve=F.textures;if(re.length!==ve.length||re[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ge=ve.length;we<Ge;we++)re[we]=i.COLOR_ATTACHMENT0+we;re.length=ve.length,Ae=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(re)}l(ie,"drawBuffers");function xe(F){return b!==F?(i.useProgram(F),b=F,!0):!1}l(xe,"useProgram");let Se={[ks]:i.FUNC_ADD,[zx]:i.FUNC_SUBTRACT,[Gx]:i.FUNC_REVERSE_SUBTRACT};Se[Vx]=i.MIN,Se[Hx]=i.MAX;let be={[Wx]:i.ZERO,[Xx]:i.ONE,[qx]:i.SRC_COLOR,[Qf]:i.SRC_ALPHA,[jx]:i.SRC_ALPHA_SATURATE,[Jx]:i.DST_COLOR,[$x]:i.DST_ALPHA,[Yx]:i.ONE_MINUS_SRC_COLOR,[ep]:i.ONE_MINUS_SRC_ALPHA,[Kx]:i.ONE_MINUS_DST_COLOR,[Zx]:i.ONE_MINUS_DST_ALPHA,[Qx]:i.CONSTANT_COLOR,[e_]:i.ONE_MINUS_CONSTANT_COLOR,[t_]:i.CONSTANT_ALPHA,[n_]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(F,ce,re,Ae,ve,we,Ge,it,_e,Ve){if(F===Bs){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),F!==kx){if(F!==x||Ve!==P){if((v!==ks||C!==ks)&&(i.blendEquation(i.FUNC_ADD),v=ks,C=ks),Ve)switch(F){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jf:i.blendFunc(i.ONE,i.ONE);break;case Kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",F);break}else switch(F){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kf:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",F);break}A=null,M=null,E=null,y=null,S.set(0,0,0),L=0,x=F,P=Ve}return}ve=ve||ce,we=we||re,Ge=Ge||Ae,(ce!==v||ve!==C)&&(i.blendEquationSeparate(Se[ce],Se[ve]),v=ce,C=ve),(re!==A||Ae!==M||we!==E||Ge!==y)&&(i.blendFuncSeparate(be[re],be[Ae],be[we],be[Ge]),A=re,M=Ae,E=we,y=Ge),(it.equals(S)===!1||_e!==L)&&(i.blendColor(it.r,it.g,it.b,_e),S.copy(it),L=_e),x=F,P=!1}l(Xe,"setBlending");function Ke(F,ce){F.side===si?ee(i.CULL_FACE):ue(i.CULL_FACE);let re=F.side===En;ce&&(re=!re),ot(re),F.blending===to&&F.transparent===!1?Xe(Bs):Xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);let Ae=F.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}l(Ke,"setMaterial");function ot(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}l(ot,"setFlipSided");function je(F){F!==Ox?(ue(i.CULL_FACE),F!==O&&(F===Zf?i.cullFace(i.BACK):F===Bx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),O=F}l(je,"setCullFace");function St(F){F!==X&&(B&&i.lineWidth(F),X=F)}l(St,"setLineWidth");function lt(F,ce,re){F?(ue(i.POLYGON_OFFSET_FILL),(U!==ce||Y!==re)&&(U=ce,Y=re,a.getReversed()&&(ce=-ce,re=-re),i.polygonOffset(ce,re))):ee(i.POLYGON_OFFSET_FILL)}l(lt,"setPolygonOffset");function wt(F){F?ue(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}l(wt,"setScissorTest");function Dt(F){F===void 0&&(F=i.TEXTURE0+ne-1),$!==F&&(i.activeTexture(F),$=F)}l(Dt,"activeTexture");function at(F,ce,re){re===void 0&&($===null?re=i.TEXTURE0+ne-1:re=$);let Ae=j[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[re]=Ae),(Ae.type!==F||Ae.texture!==ce)&&($!==re&&(i.activeTexture(re),$=re),i.bindTexture(F,ce||de[F]),Ae.type=F,Ae.texture=ce)}l(at,"bindTexture");function z(){let F=j[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}l(z,"unbindTexture");function Je(){try{i.compressedTexImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(Je,"compressedTexImage2D");function et(){try{i.compressedTexImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(et,"compressedTexImage3D");function st(){try{i.texSubImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(st,"texSubImage2D");function ye(){try{i.texSubImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(ye,"texSubImage3D");function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(mt,"compressedTexSubImage2D");function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(ze,"compressedTexSubImage3D");function We(){try{i.texStorage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(We,"texStorage2D");function I(){try{i.texStorage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(I,"texStorage3D");function w(){try{i.texImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(w,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(q,"texImage3D");function fe(F){return p[F]!==void 0?p[F]:i.getParameter(F)}l(fe,"getParameter");function ae(F,ce){p[F]!==ce&&(i.pixelStorei(F,ce),p[F]=ce)}l(ae,"pixelStorei");function Me(F){Q.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}l(Me,"scissor");function Ce(F){pe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),pe.copy(F))}l(Ce,"viewport");function se(F,ce){let re=u.get(ce);re===void 0&&(re=new WeakMap,u.set(ce,re));let Ae=re.get(F);Ae===void 0&&(Ae=i.getUniformBlockIndex(ce,F.name),i.uniformBlockBinding(ce,Ae,Ae),re.set(F,Ae))}l(se,"updateUBOMapping");function oe(F,ce,re){let ve=u.get(ce).get(F);c[ve]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ve,re),c[ve]=re)}l(oe,"uniformBlockBinding");function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,j={},f={},c={},m=new WeakMap,_=[],b=null,g=!1,x=null,v=null,A=null,M=null,C=null,E=null,y=null,S=new Be(0,0,0),L=0,P=!1,D=null,O=null,X=null,U=null,Y=null,Q.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(Ee,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:ee,bindFramebuffer:me,drawBuffers:ie,useProgram:xe,setBlending:Xe,setMaterial:Ke,setFlipSided:ot,setCullFace:je,setLineWidth:St,setPolygonOffset:lt,setScissorTest:wt,activeTexture:Dt,bindTexture:at,unbindTexture:z,compressedTexImage2D:Je,compressedTexImage3D:et,texImage2D:w,texImage3D:q,pixelStorei:ae,getParameter:fe,updateUBOMapping:se,uniformBlockBinding:oe,texStorage2D:We,texStorage3D:I,texSubImage2D:st,texSubImage3D:ye,compressedTexSubImage2D:mt,compressedTexSubImage3D:ze,scissor:Me,viewport:Ce,reset:Ee}}l(GA,"WebGLState");function VA(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,h=new WeakMap,p=new Set,f,m=new WeakMap,_=new Set,b=new FinalizationRegistry(I=>_.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return g?new OffscreenCanvas(I,w):ll("canvas")}l(x,"createCanvas");function v(I,w,q){let fe=1,ae=We(I);if((ae.width>q||ae.height>q)&&(fe=q/Math.max(ae.width,ae.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Me=Math.floor(fe*ae.width),Ce=Math.floor(fe*ae.height);f===void 0&&(f=x(Me,Ce));let se=w?x(Me,Ce):f;return se.width=Me,se.height=Ce,se.getContext("2d").drawImage(I,0,0,Me,Ce),qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Me+"x"+Ce+")."),se}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}l(v,"resizeImage");function A(I){return I.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function M(I){i.generateMipmap(I)}l(M,"generateMipmap");function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(C,"getTargetType");function E(I,w,q,fe,ae,Me=!1){if(I!==null){if(i[I]!==void 0)return i[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ce;fe&&(Ce=e.get("EXT_texture_norm16"),Ce||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=w;if(w===i.RED&&(q===i.FLOAT&&(se=i.R32F),q===i.HALF_FLOAT&&(se=i.R16F),q===i.UNSIGNED_BYTE&&(se=i.R8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.R16_EXT),q===i.SHORT&&Ce&&(se=Ce.R16_SNORM_EXT)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.R8UI),q===i.UNSIGNED_SHORT&&(se=i.R16UI),q===i.UNSIGNED_INT&&(se=i.R32UI),q===i.BYTE&&(se=i.R8I),q===i.SHORT&&(se=i.R16I),q===i.INT&&(se=i.R32I)),w===i.RG&&(q===i.FLOAT&&(se=i.RG32F),q===i.HALF_FLOAT&&(se=i.RG16F),q===i.UNSIGNED_BYTE&&(se=i.RG8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RG16_EXT),q===i.SHORT&&Ce&&(se=Ce.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RG8UI),q===i.UNSIGNED_SHORT&&(se=i.RG16UI),q===i.UNSIGNED_INT&&(se=i.RG32UI),q===i.BYTE&&(se=i.RG8I),q===i.SHORT&&(se=i.RG16I),q===i.INT&&(se=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGB8UI),q===i.UNSIGNED_SHORT&&(se=i.RGB16UI),q===i.UNSIGNED_INT&&(se=i.RGB32UI),q===i.BYTE&&(se=i.RGB8I),q===i.SHORT&&(se=i.RGB16I),q===i.INT&&(se=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),q===i.UNSIGNED_INT&&(se=i.RGBA32UI),q===i.BYTE&&(se=i.RGBA8I),q===i.SHORT&&(se=i.RGBA16I),q===i.INT&&(se=i.RGBA32I)),w===i.RGB&&(q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGB16_EXT),q===i.SHORT&&Ce&&(se=Ce.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),w===i.RGBA){let oe=Me?ol:ht.getTransfer(ae);q===i.FLOAT&&(se=i.RGBA32F),q===i.HALF_FLOAT&&(se=i.RGBA16F),q===i.UNSIGNED_BYTE&&(se=oe===xt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGBA16_EXT),q===i.SHORT&&Ce&&(se=Ce.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}l(E,"getInternalFormat");function y(I,w){let q;return I?w===null||w===Mi||w===Gs?q=i.DEPTH24_STENCIL8:w===Si?q=i.DEPTH32F_STENCIL8:w===io&&(q=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Mi||w===Gs?q=i.DEPTH_COMPONENT24:w===Si?q=i.DEPTH_COMPONENT32F:w===io&&(q=i.DEPTH_COMPONENT16),q}l(y,"getInternalDepthFormat");function S(I,w){return A(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ht&&I.minFilter!==Wt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}l(S,"getMipLevels");function L(I){let w=new WeakRef(I);n.get(I).__ref=w,_.add(w),b.register(I,w,w)}l(L,"track");function P(I){let w=n.get(I).__ref;w!==void 0&&(_.delete(w),b.unregister(w))}l(P,"untrack");function D(I){X(I.target)}l(D,"onTextureDispose");function O(I){U(I.target)}l(O,"onRenderTargetDispose");function X(I){I.removeEventListener("dispose",D),P(I),ne(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&p.delete(I)}l(X,"destroyTexture");function U(I){I.removeEventListener("dispose",O),P(I),J(I)}l(U,"destroyRenderTarget");function Y(){for(let I of _){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?U(w):X(w))}_.clear(),p.clear()}l(Y,"dispose");function ne(I){let w=n.get(I);if(w.__webglInit===void 0)return;let q=I.source,fe=m.get(q);if(fe){let ae=fe[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&B(I),Object.keys(fe).length===0&&m.delete(q)}n.remove(I)}l(ne,"deallocateTexture");function B(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let q=I.source,fe=m.get(q);delete fe[w.__cacheKey],a.memory.textures--}l(B,"deleteTexture");function J(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&X(q),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let Me=0;Me<w.__webglFramebuffer[ae].length;Me++)i.deleteFramebuffer(w.__webglFramebuffer[ae][Me]);else i.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ae]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let fe=I.textures;for(let ae=0,Me=fe.length;ae<Me;ae++){let Ce=n.get(fe[ae]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(fe[ae])}n.remove(I)}l(J,"deallocateRenderTarget");let H=0;function $(){H=0}l($,"resetTextureUnits");function j(){return H}l(j,"getTextureUnits");function he(I){H=I}l(he,"setTextureUnits");function ge(){let I=H;return I>=r.maxTextures&&qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,I}l(ge,"allocateTextureUnit");function Q(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}l(Q,"getTextureCacheKey");function pe(I,w){let q=n.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let fe=I.image;if(fe===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(q,I,w);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}l(pe,"setTexture2D");function le(I,w){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Ke(q,I,w);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}l(le,"setTexture2DArray");function de(I,w){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Ke(q,I,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}l(de,"setTexture3D");function ue(I,w){let q=n.get(I);if(I.version>0&&q.__version!==I.version){ot(q,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}l(ue,"setTextureCube");let ee={[zi]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Iu]:i.MIRRORED_REPEAT},me={[Ht]:i.NEAREST,[s_]:i.NEAREST_MIPMAP_NEAREST,[Rl]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Mh]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ie={[c_]:i.NEVER,[_p]:i.ALWAYS,[u_]:i.LESS,[gp]:i.LEQUAL,[h_]:i.EQUAL,[xp]:i.GEQUAL,[d_]:i.GREATER,[f_]:i.NOTEQUAL};function xe(I,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wt||w.magFilter===Mh||w.magFilter===Rl||w.magFilter===Gn||w.minFilter===Wt||w.minFilter===Mh||w.minFilter===Rl||w.minFilter===Gn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ee[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ee[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ee[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,me[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,me[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ht||w.minFilter!==Rl&&w.minFilter!==Gn||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}l(xe,"setTextureParameters");function Se(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",D),L(w));let fe=w.source,ae=m.get(fe);ae===void 0&&(ae={},m.set(fe,ae));let Me=Q(w);if(Me!==I.__cacheKey){ae[Me]===void 0&&(ae[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[Me].usedTimes++;let Ce=ae[I.__cacheKey];Ce!==void 0&&(ae[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(w)),I.__cacheKey=Me,I.__webglTexture=ae[Me].texture}return q}l(Se,"initTexture");function be(I,w,q){return Math.floor(Math.floor(I/q)/w)}l(be,"getRow");function Xe(I,w,q,fe){let Me=I.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,q,fe,w.data);else{Me.sort((F,ce)=>F.start-ce.start);let Ce=0;for(let F=1;F<Me.length;F++){let ce=Me[Ce],re=Me[F],Ae=ce.start+ce.count,ve=be(re.start,w.width,4),we=be(ce.start,w.width,4);re.start<=Ae+1&&ve===we&&be(re.start+re.count-1,w.width,4)===ve?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ce,Me[Ce]=re)}Me.length=Ce+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let F=0,ce=Me.length;F<ce;F++){let re=Me[F],Ae=Math.floor(re.start/4),ve=Math.ceil(re.count/4),we=Ae%w.width,Ge=Math.floor(Ae/w.width),it=ve,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,we,Ge,it,_e,q,fe,w.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}l(Xe,"updateTexture");function Ke(I,w,q){let fe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=i.TEXTURE_3D);let ae=Se(I,w),Me=w.source;t.bindTexture(fe,I.__webglTexture,i.TEXTURE0+q);let Ce=n.get(Me);if(Me.version!==Ce.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let _e=ht.getPrimaries(ht.workingColorSpace),Ve=w.colorSpace===wi?null:ht.getPrimaries(w.colorSpace),tt=w.colorSpace===wi||_e===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=v(w.image,!1,r.maxTextureSize);oe=ze(w,oe);let Ee=s.convert(w.format,w.colorSpace),F=s.convert(w.type),ce=E(w.internalFormat,Ee,F,w.normalized,w.colorSpace,w.isVideoTexture);xe(fe,w);let re,Ae=w.mipmaps,ve=w.isVideoTexture!==!0,we=Ce.__version===void 0||ae===!0,Ge=Me.dataReady,it=S(w,oe);if(w.isDepthTexture)ce=y(w.format===Rr,w.type),we&&(ve?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,F,null));else if(w.isDataTexture)if(Ae.length>0){ve&&we&&t.texStorage2D(i.TEXTURE_2D,it,ce,Ae[0].width,Ae[0].height);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,F,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ee,F,re.data);w.generateMipmaps=!1}else ve?(we&&t.texStorage2D(i.TEXTURE_2D,it,ce,oe.width,oe.height),Ge&&Xe(w,oe,Ee,F)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,F,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ve&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,ce,Ae[0].width,Ae[0].height,oe.depth);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)if(re=Ae[_e],w.format!==Hn)if(Ee!==null)if(ve){if(Ge)if(w.layerUpdates.size>0){let tt=wp(re.width,re.height,w.format,w.type);for(let Le of w.layerUpdates){let _t=re.data.subarray(Le*tt/re.data.BYTES_PER_ELEMENT,(Le+1)*tt/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Le,re.width,re.height,1,Ee,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ee,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,re.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ee,F,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,Ee,F,re.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ve&&we&&t.texStorage2D(i.TEXTURE_2D,it,ce,Ae[0].width,Ae[0].height);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],w.format!==Hn?Ee!==null?ve?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,re.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,re.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,F,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ee,F,re.data)}else if(w.isDataArrayTexture)if(ve){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,ce,oe.width,oe.height,oe.depth),Ge)if(w.layerUpdates.size>0){let _e=wp(oe.width,oe.height,w.format,w.type);for(let Ve of w.layerUpdates){let tt=oe.data.subarray(Ve*_e/oe.data.BYTES_PER_ELEMENT,(Ve+1)*_e/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,oe.width,oe.height,1,Ee,F,tt)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,F,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Ee,F,oe.data);else if(w.isData3DTexture)ve?(we&&t.texStorage3D(i.TEXTURE_3D,it,ce,oe.width,oe.height,oe.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,F,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Ee,F,oe.data);else if(w.isFramebufferTexture){if(we)if(ve)t.texStorage2D(i.TEXTURE_2D,it,ce,oe.width,oe.height);else{let _e=oe.width,Ve=oe.height;for(let tt=0;tt<it;tt++)t.texImage2D(i.TEXTURE_2D,tt,ce,_e,Ve,0,Ee,F,null),_e>>=1,Ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),oe.parentNode!==_e){_e.appendChild(oe),p.add(w),_e.onpaint=Ve=>{let tt=Ve.changedElements;for(let Le of p)tt.includes(Le.image)&&(Le.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let tt=i.RGBA,Le=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Le,_t,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ve&&we){let _e=We(Ae[0]);t.texStorage2D(i.TEXTURE_2D,it,ce,_e.width,_e.height)}for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ee,F,re):t.texImage2D(i.TEXTURE_2D,_e,ce,Ee,F,re);w.generateMipmaps=!1}else if(ve){if(we){let _e=We(oe);t.texStorage2D(i.TEXTURE_2D,it,ce,_e.width,_e.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,F,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Ee,F,oe);A(w)&&w.mipmapsAutoUpdate===!0&&M(fe),Ce.__version=Me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}l(Ke,"uploadTexture");function ot(I,w,q){if(w.image.length!==6)return;let fe=Se(I,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let Me=n.get(ae);if(ae.version!==Me.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Ce=ht.getPrimaries(ht.workingColorSpace),se=w.colorSpace===wi?null:ht.getPrimaries(w.colorSpace),oe=w.colorSpace===wi||Ce===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let Le=0;Le<6;Le++)!Ee&&!F?ce[Le]=v(w.image[Le],!0,r.maxCubemapSize):ce[Le]=F?w.image[Le].image:w.image[Le],ce[Le]=ze(w,ce[Le]);let re=ce[0],Ae=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),we=E(w.internalFormat,Ae,ve,w.normalized,w.colorSpace),Ge=w.isVideoTexture!==!0,it=Me.__version===void 0||fe===!0,_e=ae.dataReady,Ve=S(w,re);xe(i.TEXTURE_CUBE_MAP,w);let tt;if(w.isDepthTexture){if(we=y(w.format===Rr,w.type),it)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,we,re.width,re.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,re.width,re.height,0,Ae,ve,null)}else if(Ee){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,re.width,re.height);for(let Le=0;Le<6;Le++){tt=ce[Le].mipmaps;for(let _t=0;_t<tt.length;_t++){let Zt=tt[_t];w.format!==Hn?Ae!==null?Ge?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,0,0,Zt.width,Zt.height,Ae,Zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,we,Zt.width,Zt.height,0,Zt.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,0,0,Zt.width,Zt.height,Ae,ve,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t,we,Zt.width,Zt.height,0,Ae,ve,Zt.data)}}}else{if(tt=w.mipmaps,Ge&&it){tt.length>0&&Ve++;let Le=We(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(F){Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ce[Le].width,ce[Le].height,Ae,ve,ce[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,ce[Le].width,ce[Le].height,0,Ae,ve,ce[Le].data);for(let _t=0;_t<tt.length;_t++){let Vr=tt[_t].image[Le].image;Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,0,0,Vr.width,Vr.height,Ae,ve,Vr.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,we,Vr.width,Vr.height,0,Ae,ve,Vr.data)}}else{Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ae,ve,ce[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,Ae,ve,ce[Le]);for(let _t=0;_t<tt.length;_t++){let Zt=tt[_t];Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,0,0,Ae,ve,Zt.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,_t+1,we,Ae,ve,Zt.image[Le])}}}A(w)&&w.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Me.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}l(ot,"uploadCubeTexture");function je(I,w,q,fe,ae,Me){let Ce=s.convert(q.format,q.colorSpace),se=s.convert(q.type),oe=E(q.internalFormat,Ce,se,q.normalized,q.colorSpace),Ee=n.get(w),F=n.get(q);if(F.__renderTarget=w,!Ee.__hasExternalTextures){let ce=Math.max(1,w.width>>Me),re=Math.max(1,w.height>>Me);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Me,oe,ce,re,w.depth,0,Ce,se,null):t.texImage2D(ae,Me,oe,ce,re,0,Ce,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,F.__webglTexture,0,st(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,F.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(je,"setupFrameBufferTexture");function St(I,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let fe=w.depthTexture,ae=fe&&fe.isDepthTexture?fe.type:null,Me=y(w.stencilBuffer,ae),Ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(w),Me,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(w),Me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,I)}else{let fe=w.textures;for(let ae=0;ae<fe.length;ae++){let Me=fe[ae],Ce=s.convert(Me.format,Me.colorSpace),se=s.convert(Me.type),oe=E(Me.internalFormat,Ce,se,Me.normalized,Me.colorSpace);ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(w),oe,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(St,"setupRenderBufferStorage");function lt(I,w,q){let fe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(w.depthTexture);ae.__renderTarget=w;let Me=fe?w.depthTexture.image[0]:w.depthTexture.image;(!ae.__webglTexture||Me.width!==w.width||Me.height!==w.height)&&(Me.width=w.width,Me.height=w.height,w.depthTexture.needsUpdate=!0),fe?ue(w.depthTexture,0):pe(w.depthTexture,0);let Ce=ae.__webglTexture,se=st(w),oe=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Ee=w.depthTexture.format===Rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Mr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else if(w.depthTexture.format===Rr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(lt,"setupDepthTexture");function wt(I){let w=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let fe=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){let ae=l(()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",ae)},"disposeEvent");fe.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=fe}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)lt(w.__webglFramebuffer[fe],I,fe);else I.texture.mipmaps.length>0?lt(w.__webglFramebuffer[0],I,0):lt(w.__webglFramebuffer,I,0);else if(q){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=i.createRenderbuffer(),St(w.__webglDepthbuffer[fe],I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),St(w.__webglDepthbuffer,I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(wt,"setupDepthRenderbuffer");function Dt(I,w,q){let fe=n.get(I);w!==void 0&&je(fe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(I)}l(Dt,"rebindTextures");function at(I){let w=I.texture,q=n.get(I),fe=n.get(w);I.addEventListener("dispose",O),L(I);let ae=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=w.version,a.memory.textures++),Me){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(w.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let oe=0;oe<w.mipmaps.length;oe++)q.__webglFramebuffer[se][oe]=i.createFramebuffer()}else q.__webglFramebuffer[se]=i.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)q.__webglFramebuffer[se]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let se=0,oe=ae.length;se<oe;se++){let Ee=n.get(ae[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ye(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<ae.length;se++){let oe=ae[se];q.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let Ee=s.convert(oe.format,oe.colorSpace),F=s.convert(oe.type),ce=E(oe.internalFormat,Ee,F,oe.normalized,oe.colorSpace,I.isXRRenderTarget===!0),re=st(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ce,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,q.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),St(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(i.TEXTURE_CUBE_MAP,w);for(let se=0;se<6;se++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)je(q.__webglFramebuffer[se][oe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else je(q.__webglFramebuffer[se],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(w)?M(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let se=0,oe=ae.length;se<oe;se++){let Ee=ae[se],F=n.get(Ee),ce=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,F.__webglTexture),xe(ce,Ee),je(q.__webglFramebuffer,I,Ee,i.COLOR_ATTACHMENT0+se,ce,0),A(Ee)&&M(ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,fe.__webglTexture),xe(se,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)je(q.__webglFramebuffer[oe],I,w,i.COLOR_ATTACHMENT0,se,oe);else je(q.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,se,0);A(w)?M(se):w.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&wt(I)}l(at,"setupRenderTarget");function z(I){let w=I.textures;for(let q=0,fe=w.length;q<fe;q++){let ae=w[q];if(A(ae)&&ae.mipmapsAutoUpdate===!0){let Me=C(I),Ce=n.get(ae).__webglTexture;t.bindTexture(Me,Ce),M(Me),t.unbindTexture()}}}l(z,"updateRenderTargetMipmap");let Je=[];function et(I){if(I.samples>0){if(ye(I)===!1){let w=I.textures,q=I.width,fe=I.height,ae=i.COLOR_BUFFER_BIT,Me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(I),se=w.length>1;if(se)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let F=n.get(w[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,ae,i.NEAREST),c===!0&&(Je.length=0,Je.push(i.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Je.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let F=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}l(et,"updateMultisampleRenderTarget");function st(I){return Math.min(r.maxSamples,I.samples)}l(st,"getRenderTargetSamples");function ye(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}l(ye,"useMultisampledRTT");function mt(I){let w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}l(mt,"updateVideoTexture");function ze(I,w){let q=I.colorSpace,fe=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==al&&q!==wi&&(ht.getTransfer(q)===xt?(fe!==Hn||ae!==dn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",q)),w}l(ze,"verifyColorSpace");function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}l(We,"getDimensions"),this.allocateTextureUnit=ge,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=he,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=de,this.setTextureCube=ue,this.rebindTextures=Dt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ye,this.dispose=Y}l(VA,"WebGLTextures");function HA(i,e){function t(n,r=wi){let s,a=ht.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cp)return i.BYTE;if(n===up)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Sh)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===fp)return i.ALPHA;if(n===pp)return i.RGB;if(n===Hn)return i.RGBA;if(n===Mr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===mp)return i.RED;if(n===Ah)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===Th)return i.RG_INTEGER;if(n===Ch)return i.RGBA_INTEGER;if(n===Pl||n===Il||n===Ll||n===Dl)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rh||n===Ph||n===Ih||n===Lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Nl||n===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dh||n===Nh)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fh)return s.COMPRESSED_R11_EAC;if(n===Oh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nl)return s.COMPRESSED_RG11_EAC;if(n===Bh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kh||n===zh||n===Gh||n===Vh||n===Hh||n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===Zh||n===Jh||n===Kh||n===jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qh||n===ed||n===td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qh)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nd||n===id||n===Ul||n===rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===id)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(HA,"WebGLUtils");var WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
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

}`,n0=class n0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:WA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(n0,"WebXRDepthSensing");var Ym=n0,i0=class i0 extends Gi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,_=null,b=typeof XRWebGLBinding<"u",g=new Ym,x={},v=t.getContextAttributes(),A=null,M=null,C=[],E=[],y=new He,S=null,L=null,P=new vn;P.viewport=new Nt;let D=new vn;D.viewport=new Nt;let O=[P,D],X=new eh,U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=C[Q];return pe===void 0&&(pe=new $a,C[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=C[Q];return pe===void 0&&(pe=new $a,C[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=C[Q];return pe===void 0&&(pe=new $a,C[Q]=pe),pe.getHandSpace()};function ne(Q){let pe=E.indexOf(Q.inputSource);if(pe===-1)return;let le=C[pe];le!==void 0&&(le.update(Q.inputSource,Q.frame,u||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}l(ne,"onSessionEvent");function B(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",J);for(let Q=0;Q<C.length;Q++){let pe=E[Q];pe!==null&&(E[Q]=null,C[Q].disconnect(pe))}U=null,Y=null,g.reset();for(let Q in x)delete x[Q];if(e.setRenderTarget(A),m=null,f=null,p=null,r=null,M=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),L!==null){let Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}l(B,"onSessionEnd"),this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",B),r.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?Rr:Mr,de=v.stencil?Gs:Mi);let ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Bn(f.textureWidth,f.textureHeight,{format:Hn,type:dn,depthTexture:new Ar(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Q){for(let pe=0;pe<Q.removed.length;pe++){let le=Q.removed[pe],de=E.indexOf(le);de>=0&&(E[de]=null,C[de].disconnect(le))}for(let pe=0;pe<Q.added.length;pe++){let le=Q.added[pe],de=E.indexOf(le);if(de===-1){for(let ee=0;ee<C.length;ee++)if(ee>=E.length){E.push(le),de=ee;break}else if(E[ee]===null){E[ee]=le,de=ee;break}if(de===-1)break}let ue=C[de];ue&&ue.connect(le)}}l(J,"onInputSourcesChange");function H(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}l(H,"updateCamera"),this.updateCamera=function(Q){if(r===null)return;let pe=Q.near,le=Q.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),X.near=D.near=P.near=pe,X.far=D.far=P.far=le,(U!==X.near||Y!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),U=X.near,Y=X.far),X.layers.mask=Q.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let de=Q.parent,ue=X.cameras;H(X,de);for(let ee=0;ee<ue.length;ee++)H(ue[ee],de);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),$(Q,X,de)};function $(Q,pe,le){le===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Du*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}l($,"updateUserCamera"),this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(Q){return x[Q]};let j=null;function he(Q,pe){if(h=pe.getViewerPose(u||a),_=pe,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let de=!1;le.length!==X.cameras.length&&(X.cameras.length=0,de=!0);for(let ie=0;ie<le.length;ie++){let xe=le[ie],Se=null;if(m!==null)Se=m.getViewport(xe);else{let Xe=p.getViewSubImage(f,xe);Se=Xe.viewport,ie===0&&(e.setRenderTargetTextures(M,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(M))}let be=O[ie];be===void 0&&(be=new vn,be.layers.enable(ie),be.viewport=new Nt,O[ie]=be),be.matrix.fromArray(xe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(xe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Se.x,Se.y,Se.width,Se.height),ie===0&&(X.matrix.copy(be.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),de===!0&&X.cameras.push(be)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let ie=p.getDepthInformation(le[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,r.renderState)}if(ue&&ue.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let ie=0;ie<le.length;ie++){let xe=le[ie].camera;if(xe){let Se=x[xe];Se||(Se=new _l,x[xe]=Se);let be=p.getCameraImage(xe);Se.sourceTexture=be}}}}for(let le=0;le<C.length;le++){let de=E[le],ue=C[le];de!==null&&ue!==void 0&&ue.update(de,pe,u||a)}j&&j(Q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}l(he,"onAnimationFrame");let ge=new q_;ge.setAnimationLoop(he),this.setAnimationLoop=function(Q){j=Q},this.dispose=function(){}}};l(i0,"WebXRManager");var $m=i0,qA=new yt,ny=new Ze;ny.set(-1,0,0,0,1,0,0,0,1);function YA(i,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}l(t,"refreshTransformUniform");function n(g,x){x.color.getRGB(g.fogColor.value,vp(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}l(n,"refreshFogUniforms");function r(g,x,v,A,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(g,x):x.isMeshLambertMaterial?(s(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(g,x),p(g,x)):x.isMeshPhongMaterial?(s(g,x),h(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(g,x),f(g,x),x.isMeshPhysicalMaterial&&m(g,x,M)):x.isMeshMatcapMaterial?(s(g,x),_(g,x)):x.isMeshDepthMaterial?s(g,x):x.isMeshDistanceMaterial?(s(g,x),b(g,x)):x.isMeshNormalMaterial?s(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?c(g,x,v,A):x.isSpriteMaterial?u(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===En&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===En&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let v=e.get(x),A=v.envMap,M=v.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ny),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}l(s,"refreshUniformsCommon");function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}l(a,"refreshUniformsLine");function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}l(o,"refreshUniformsDash");function c(g,x,v,A){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*v,g.scale.value=A*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}l(c,"refreshUniformsPoints");function u(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}l(u,"refreshUniformsSprites");function h(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}l(h,"refreshUniformsPhong");function p(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}l(p,"refreshUniformsToon");function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}l(f,"refreshUniformsStandard");function m(g,x,v){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function _(g,x){x.matcap&&(g.matcap.value=x.matcap)}l(_,"refreshUniformsMatcap");function b(g,x){let v=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return l(b,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(YA,"WebGLMaterials");function $A(i,e,t,n){let r={},s={};function a(v,A){let M=A.program;n.uniformBlockBinding(v,M,r[v.id])}l(a,"bind");function o(v,A){let M=r[v.id];M===void 0&&(_(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",g));let C=A.program;n.updateUBOMapping(v,C);let E=e.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}l(o,"update");function c(v){let A=i.createBuffer(),M=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(v){let A=r[v.id],M=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,y=M.length;E<y;E++){let S=M[E];if(Array.isArray(S))for(let L=0,P=S.length;L<P;L++)h(S[L],E,L,C);else h(S,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(v,A,M,C){if(f(v,A,M,C)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let L=0;L<y.length;L++){let P=y[L],D=b(P,!0);p(P,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(y,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}l(h,"updateUniform");function p(v,A,M){typeof v=="number"||typeof v=="boolean"?A[M]=v:v.isMatrix3?(A[M]=v.elements[0],A[M+1]=v.elements[1],A[M+2]=v.elements[2],A[M+3]=0,A[M+4]=v.elements[3],A[M+5]=v.elements[4],A[M+6]=v.elements[5],A[M+7]=0,A[M+8]=v.elements[6],A[M+9]=v.elements[7],A[M+10]=v.elements[8],A[M+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-M),M):v.toArray(A,M)}l(p,"writeUniformValue");function f(v,A,M,C){let E=v.value,y=A+"_"+M;if(Array.isArray(E)){C[y]===void 0&&(C[y]=[]);let S=C[y],L=!1;for(let P=0;P<E.length;P++)m(E[P],S,P)===!0&&(L=!0);return L}return m(E,C,y)}l(f,"hasUniformChanged");function m(v,A,M){if(A[M]===void 0)return typeof v=="number"||typeof v=="boolean"?A[M]=v:ArrayBuffer.isView(v)?A[M]=v.slice():A[M]=v.clone(),!0;{let C=A[M];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}l(m,"hasValueChanged");function _(v){let A=v.uniforms,M=0,C=16;for(let y=0,S=A.length;y<S;y++){let L=Array.isArray(A[y])?A[y]:[A[y]];for(let P=0,D=L.length;P<D;P++){let O=L[P],X=Array.isArray(O.value)?O.value:[O.value],U=Array.isArray(A[y])||Array.isArray(O.value),Y=M;for(let B=0,J=X.length;B<J;B++){let H=X[B],$=b(H,U),j=M%C,he=j%$.boundary,ge=j+he;M+=he,ge!==0&&C-ge<$.storage&&(M+=C-ge),B===0&&(Y=M),M+=$.storage}let ne=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new ne((M-Y)/Float32Array.BYTES_PER_ELEMENT),O.__offset=Y}}let E=M%C;return E>0&&(M+=C-E),v.__size=M,v.__cache={},this}l(_,"prepareUniformsGroup");function b(v,A){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}l(b,"getUniformSize");function g(v){let A=v.target;A.removeEventListener("dispose",g),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}l(g,"onUniformsGroupsDispose");function x(){for(let v in r)i.deleteBuffer(r[v]);r={},s={}}return l(x,"dispose"),{bind:a,update:o,dispose:x}}l($A,"WebGLUniformsGroups");var ZA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function JA(){return $i===null&&($i=new ja(ZA,16,16,Yi,Vn),$i.name="DFG_LUT",$i.minFilter=Wt,$i.magFilter=Wt,$i.wrapS=ii,$i.wrapT=ii,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}l(JA,"getDFGLUT");var r0=class r0{constructor(e={}){let{canvas:t=p_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=dn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let b=m,g=new Set([Ch,Th,Ah]),x=new Set([dn,Mi,io,Gs,wh,Eh]),v=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},C=null,E=null,y=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,O=null,X=null,U=null,Y=null;this._outputColorSpace=Vt;let ne=0,B=0,J=null,H=-1,$=null,j=new Nt,he=new Nt,ge=null,Q=new Be(0),pe=0,le=t.width,de=t.height,ue=1,ee=null,me=null,ie=new Nt(0,0,le,de),xe=new Nt(0,0,le,de),Se=!1,be=new ts,Xe=new Bu,Ke=!1,ot=!1,je=new yt,St=new W,lt=new Nt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function at(){return J===null?ue:1}l(at,"getTargetPixelRatio");let z=n;function Je(T,k){return t.getContext(T,k)}l(Je,"getContext");let et,st,ye,mt,ze,We,I,w,q,fe,ae,Me,Ce,se,oe,Ee,F,ce,re,Ae,ve,we,Ge;try{let T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),z===null){let k="webgl2";if(z=Je(k,T),z===null)throw Je(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(T){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),$e("WebGLRenderer: "+T.message),T}function it(){et=new oE(z),et.init(),ve=new HA(z,et),st=new J1(z,et,e,ve),ye=new GA(z,et),st.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),X=z.createFramebuffer(),U=z.createFramebuffer(),Y=z.createFramebuffer(),mt=new uE(z),ze=new TA,We=new VA(z,et,ye,ze,st,ve,mt),I=new aE(P),w=new dS(z),we=new $1(z,w),q=new lE(z,w,mt,we),fe=new dE(z,q,w,we,mt),ce=new hE(z,st,We),oe=new K1(ze),ae=new AA(P,I,et,st,we,oe),Me=new YA(P,ze),Ce=new RA,se=new UA(et),F=new Y1(P,I,ye,fe,_,c),Ee=new zA(P,fe,st),Ge=new $A(z,mt,st,ye),re=new Z1(z,et,mt),Ae=new cE(z,et,mt),mt.programs=ae.programs,P.capabilities=st,P.extensions=et,P.properties=ze,P.renderLists=Ce,P.shadowMap=Ee,P.state=ye,P.info=mt}l(it,"initGLContext"),b!==dn&&(L=new pE(b,t.width,t.height,o,r,s));let _e=new $m(P,z);this.xr=_e,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(T){T!==void 0&&(ue=T,this.setSize(le,de,!1))},this.getSize=function(T){return T.set(le,de)},this.setSize=function(T,k,te=!0){if(_e.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,de=k,t.width=Math.floor(T*ue),t.height=Math.floor(k*ue),te===!0&&(t.style.width=T+"px",t.style.height=k+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(le*ue,de*ue).floor()},this.setDrawingBufferSize=function(T,k,te){le=T,de=k,ue=te,t.width=Math.floor(T*te),t.height=Math.floor(k*te),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(b===dn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,k,te,Z){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,k,te,Z),ye.viewport(j.copy(ie).multiplyScalar(at()).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,k,te,Z){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,k,te,Z),ye.scissor(he.copy(xe).multiplyScalar(at()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){ye.setScissorTest(Se=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,te=!0){let Z=0;if(T){let K=!1;if(J!==null){let Re=J.texture.format;K=g.has(Re)}if(K){let Re=J.texture.type,Ue=x.has(Re),Te=F.getClearColor(),De=F.getClearAlpha(),ke=Te.r,Qe=Te.g,ct=Te.b;Ue?(v[0]=ke,v[1]=Qe,v[2]=ct,v[3]=De,z.clearBufferuiv(z.COLOR,0,v)):(A[0]=ke,A[1]=Qe,A[2]=ct,A[3]=De,z.clearBufferiv(z.COLOR,0,A))}else Z|=z.COLOR_BUFFER_BIT}k&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),F.dispose(),Ce.dispose(),se.dispose(),We.dispose(),ze.dispose(),I.dispose(),fe.dispose(),q.dispose(),we.dispose(),Ge.dispose(),ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Zg),_e.removeEventListener("sessionend",Jg),Rs.stop()};function Ve(T){T.preventDefault(),cl("WebGLRenderer: Context Lost."),D=!0}l(Ve,"onContextLost");function tt(){cl("WebGLRenderer: Context Restored."),D=!1;let T=mt.autoReset,k=Ee.enabled,te=Ee.autoUpdate,Z=Ee.needsUpdate,K=Ee.type;it(),mt.autoReset=T,Ee.enabled=k,Ee.autoUpdate=te,Ee.needsUpdate=Z,Ee.type=K}l(tt,"onContextRestore");function Le(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}l(Le,"onContextCreationError");function _t(T){let k=T.target;k.removeEventListener("dispose",_t),Zt(k)}l(_t,"onMaterialDispose");function Zt(T){Vr(T),ze.remove(T)}l(Zt,"deallocateMaterial");function Vr(T){let k=ze.get(T).programs;k!==void 0&&(k.forEach(function(te){ae.releaseProgram(te)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}l(Vr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(T,k,te,Z,K,Re){k===null&&(k=wt);let Ue=K.isMesh&&K.matrixWorld.determinantAffine()<0,Te=hM(T,k,te,Z,K);ye.setMaterial(Z,Ue);let De=te.index,ke=1;if(Z.wireframe===!0){if(De=q.getWireframeAttribute(te),De===void 0)return;ke=2}let Qe=te.drawRange,ct=te.attributes.position,Fe=Qe.start*ke,ut=(Qe.start+Qe.count)*ke;Re!==null&&(Fe=Math.max(Fe,Re.start*ke),ut=Math.min(ut,(Re.start+Re.count)*ke)),De!==null?(Fe=Math.max(Fe,0),ut=Math.min(ut,De.count)):ct!=null&&(Fe=Math.max(Fe,0),ut=Math.min(ut,ct.count));let zt=ut-Fe;if(zt<0||zt===1/0)return;we.setup(K,Z,Te,te,De);let Tt,Et=re;if(De!==null&&(Tt=w.get(De),Et=Ae,Et.setIndex(Tt)),K.isMesh)Z.wireframe===!0?(ye.setLineWidth(Z.wireframeLinewidth*at()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if(K.isLine){let ln=Z.linewidth;ln===void 0&&(ln=1),ye.setLineWidth(ln*at()),K.isLineSegments?Et.setMode(z.LINES):K.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else K.isPoints?Et.setMode(z.POINTS):K.isSprite&&Et.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let ln=K._multiDrawStarts,Oe=K._multiDrawCounts,yn=K._multiDrawCount,gt=De?w.get(De).bytesPerElement:1,Ps=ze.get(Z).currentProgram.getUniforms();for(let cn=0;cn<yn;cn++)Ps.setValue(z,"_gl_DrawID",cn),Et.render(ln[cn]/gt,Oe[cn])}else if(K.isInstancedMesh)Et.renderInstances(Fe,zt,K.count);else if(te.isInstancedBufferGeometry){let ln=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oe=Math.min(te.instanceCount,ln);Et.renderInstances(Fe,zt,Oe)}else Et.render(Fe,zt)};function $g(T,k,te,Z){O!==null&&T.isNodeMaterial&&O.setObject(Z,T),Ke===!0&&oe.setState(T,te,!1),T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Zo(T,k,Z),T.side=os,T.needsUpdate=!0,Zo(T,k,Z),T.side=si):Zo(T,k,Z)}l($g,"prepareMaterial"),this.compile=function(T,k,te=null){te===null&&(te=T),O!==null&&O.renderStart(T,k,te),E=se.get(te),E.init(k),S.push(E),te.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),T!==te&&T.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,ot),Ke===!0&&oe.setGlobalState(this.clippingPlanes,k),O!==null&&Ee.render(E.state.shadowsArray,te,k);let Z=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Re=K.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let Te=Re[Ue];$g(Te,te,k,K),Z.add(Te)}else $g(Re,te,k,K),Z.add(Re)}),E=S.pop(),O!==null&&O.renderEnd(),Z},this.compileAsync=function(T,k,te=null){let Z=this.compile(T,k,te);return new Promise(K=>{function Re(){if(Z.forEach(function(Ue){let De=ze.get(Ue).currentProgram;(De===void 0||De.isReady())&&Z.delete(Ue)}),Z.size===0){K(T);return}setTimeout(Re,10)}l(Re,"checkMaterialsReady"),et.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let df=null;function cM(T){df&&df(T)}l(cM,"onAnimationFrame");function Zg(){Rs.stop()}l(Zg,"onXRSessionStart");function Jg(){Rs.start()}l(Jg,"onXRSessionEnd");let Rs=new q_;Rs.setAnimationLoop(cM),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(T){df=T,_e.setAnimationLoop(T),T===null?Rs.stop():Rs.start()},_e.addEventListener("sessionstart",Zg),_e.addEventListener("sessionend",Jg),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(T,k);let te=_e.enabled===!0&&_e.isPresenting===!0,Z=L!==null&&(J===null||te)&&L.begin(P,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(k),k=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,k,J),E=se.get(T,S.length),E.init(k),E.state.textureUnits=We.getTextureUnits(),S.push(E),je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Xe.setFromArrayCamera(k):be.setFromProjectionMatrix(je,ri,k.reversedDepth),ot=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,ot),C=Ce.get(T,y.length),C.init(),y.push(C),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Ue=P.xr.getDepthSensingMesh();Ue!==null&&ff(Ue,k,-1/0,P.sortObjects)}ff(T,k,0,P.sortObjects),C.finish(),O!==null&&O.updateLights(E.state.lightsArray),P.sortObjects===!0&&C.sort(ee,me),Dt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Dt&&F.addToRenderList(C,T),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&oe.beginShadows();let K=E.state.shadowsArray;if(Ee.render(K,T,k),Ke===!0&&oe.endShadows(),(Z&&L.hasRenderPass())===!1){let Ue=C.opaque,Te=C.transmissive;if(E.setupLights(),k.isArrayCamera){let De=k.cameras;if(Te.length>0)for(let ke=0,Qe=De.length;ke<Qe;ke++){let ct=De[ke];jg(Ue,Te,T,ct)}Dt&&F.render(T);for(let ke=0,Qe=De.length;ke<Qe;ke++){let ct=De[ke];Kg(C,T,ct,ct.viewport)}}else Te.length>0&&jg(Ue,Te,T,k),Dt&&F.render(T),Kg(C,T,k)}J!==null&&B===0&&(We.updateMultisampleRenderTarget(J),We.updateRenderTargetMipmap(J)),Z&&L.end(P),T.isScene===!0&&T.onAfterRender(P,T,k),we.resetDefaultState(),H=-1,$=null,S.pop(),S.length>0?(E=S[S.length-1],We.setTextureUnits(E.state.textureUnits),Ke===!0&&oe.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?C=y[y.length-1]:C=null,O!==null&&O.renderEnd()};function ff(T,k,te,Z){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Ue=k.isArrayCamera?Xe:be;if(!T.frustumCulled||T.intersectsFrustum(Ue)){Z&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(je);let Te=fe.update(T),De=T.material;De.visible&&C.push(T,Te,De,te,lt.z,null,k)}}else if(T.isMesh||T.isLine||T.isPoints){let Ue=k.isArrayCamera?Xe:be;if(!T.frustumCulled||T.intersectsFrustum(Ue)){let Te=fe.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),lt.copy(Te.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(je)),Array.isArray(De)){let ke=Te.groups;for(let Qe=0,ct=ke.length;Qe<ct;Qe++){let Fe=ke[Qe],ut=De[Fe.materialIndex];ut&&ut.visible&&C.push(T,Te,ut,te,lt.z,Fe,k)}}else De.visible&&C.push(T,Te,De,te,lt.z,null,k)}}}let Re=T.children;for(let Ue=0,Te=Re.length;Ue<Te;Ue++)ff(Re[Ue],k,te,Z)}l(ff,"projectObject");function Kg(T,k,te,Z){let{opaque:K,transmissive:Re,transparent:Ue}=T;E.setupLightsView(te),Ke===!0&&oe.setGlobalState(P.clippingPlanes,te),Z&&ye.viewport(j.copy(Z)),K.length>0&&Jc(K,k,te),Re.length>0&&Jc(Re,k,te),Ue.length>0&&Jc(Ue,k,te),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}l(Kg,"renderScene");function jg(T,k,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let Fe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new Bn(1,1,{generateMipmaps:!0,type:Fe?Vn:dn,minFilter:Gn,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Re=E.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||j;Re.setSize(Ue.z*P.transmissionResolutionScale,Ue.w*P.transmissionResolutionScale);let Te=P.getRenderTarget(),De=P.getActiveCubeFace(),ke=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(Q),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Dt&&F.render(te);let Qe=P.toneMapping;P.toneMapping=qi;let ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),Ke===!0&&oe.setGlobalState(P.clippingPlanes,Z),Jc(T,te,Z),We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re),et.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ut=0,zt=k.length;ut<zt;ut++){let Tt=k[ut],{object:Et,geometry:ln,material:Oe,group:yn}=Tt;if(Oe.side===si&&Et.layers.test(Z.layers)){let gt=Oe.side;Oe.side=En,Oe.needsUpdate=!0,Qg(Et,te,Z,ln,Oe,yn),Oe.side=gt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re))}P.setRenderTarget(Te,De,ke),P.setClearColor(Q,pe),ct!==void 0&&(Z.viewport=ct),P.toneMapping=Qe}l(jg,"renderTransmissionPass");function Jc(T,k,te){let Z=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Re=T.length;K<Re;K++){let Ue=T[K],{object:Te,geometry:De,group:ke}=Ue,Qe=Ue.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Te.layers.test(te.layers)&&Qg(Te,k,te,De,Qe,ke)}}l(Jc,"renderObjects");function Qg(T,k,te,Z,K,Re){O!==null&&K.isNodeMaterial&&O.setObject(T,K),T.onBeforeRender(P,k,te,Z,K,Re),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(P,k,te,Z,T,Re),K.transparent===!0&&K.side===si&&K.forceSinglePass===!1?(K.side=En,K.needsUpdate=!0,P.renderBufferDirect(te,k,Z,K,T,Re),K.side=os,K.needsUpdate=!0,P.renderBufferDirect(te,k,Z,K,T,Re),K.side=si):P.renderBufferDirect(te,k,Z,K,T,Re),T.onAfterRender(P,k,te,Z,K,Re)}l(Qg,"renderObject");function ex(T){let k=0;for(let te of T)te.texture!==null&&k++;return k}l(ex,"countLightProbeGrids");function Zo(T,k,te){k.isScene!==!0&&(k=wt);let Z=ze.get(T),K=E.state.lights,Re=E.state.shadowsArray,Ue=K.state.version,Te=ae.getParameters(T,K.state,Re,k,te,E.state.lightProbeGridArray),De=ae.getProgramCacheKey(Te),ke=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let Qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=I.get(T.envMap||Z.environment,Qe),Z.envMapRotation=Z.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",_t),ke=new Map,Z.programs=ke,Z.programVariants=new Map);let ct=ke.get(De);if(ct!==void 0){if(Z.currentProgram===ct&&Z.lightsStateVersion===Ue)return nx(T,Te),ct}else Te.uniforms=ae.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,te,Te),T.onBeforeCompile(Te,P),ct=ae.acquireProgram(Te,De),ke.set(De,ct),Z.uniforms=Te.uniforms;let Fe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),nx(T,Te),Z.needsLights=fM(T),Z.lightsStateVersion=Ue,Z.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.sunLights.value=K.state.sun,Fe.sunLightShadows.value=K.state.sunShadow,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.sunShadowMatrix.value=K.state.sunShadowMatrix,Fe.sunShadowCascade.value=K.state.sunShadowCascade,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=ex(E.state.lightProbeGridArray),Z.currentProgram=ct,Z.uniformsList=null,ct}l(Zo,"getProgram");function uM(T,k,te,Z,K){let Re=ze.get(T),Ue=Re.currentProgram.id+","+Z+","+K,Te=Re.programVariants.get(Ue);return Te===void 0?(Te=Zo(T,k,te),Re.programVariants.set(Ue,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=Z,Re.toneMapping=K),Te}l(uM,"getProgramVariant");function tx(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=ro.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}l(tx,"getUniformList");function nx(T,k){let te=ze.get(T);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}l(nx,"updateCommonMaterialProperties");function hM(T,k,te,Z,K){k.isScene!==!0&&(k=wt),We.resetTextureUnits();let Re=k.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,Te=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ht.workingColorSpace,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ke=I.get(Z.envMap||Ue,De),Qe=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ct=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!te.morphAttributes.position,ut=!!te.morphAttributes.normal,zt=!!te.morphAttributes.color,Tt=qi;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Tt=P.toneMapping);let Et=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ln=Et!==void 0?Et.length:0,Oe=ze.get(Z),yn=E.state.lights;if(Ke===!0&&(ot===!0||T!==$)){let Ft=T===$&&Z.id===H;oe.setState(Z,T,Ft)}let gt=!1,Ps=!1;Z.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==yn.state.version||K.isBatchedMesh&&Oe.batching===!1||!K.isBatchedMesh&&Oe.batching===!0||K.isBatchedMesh&&Oe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Oe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||K.isInstancedMesh&&Oe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Oe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Oe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Oe.instancingMorph===!1&&K.morphTexture!==null||Oe.envMap!==ke||Z.fog===!0&&Oe.fog!==Re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Qe||Oe.vertexTangents!==ct||Oe.morphTargets!==Fe||Oe.morphNormals!==ut||Oe.morphColors!==zt||Oe.morphTargetsCount!==ln||Oe.numLightProbeGrids!==ex(E.state.lightProbeGridArray)?gt=!0:(Oe.outputColorSpace!==Te||Oe.toneMapping!==Tt)&&(Ps=!0):(gt=!0,Oe.__version=Z.version);let cn=Oe.currentProgram;(gt===!0||Ps===!0)&&(cn=Ps===!0?uM(Z,k,K,Te,Tt):Zo(Z,k,K),O&&Z.isNodeMaterial&&O.onUpdateProgram(Z,cn,Oe));let Kc=!1,Hr=!1,Is=!1,pt=cn.getUniforms(),nn=Oe.uniforms;if(ye.useProgram(cn.program)&&(Kc=!0,Hr=!0,Is=!0),Z.id!==H&&(H=Z.id,Hr=!0),Kc||$!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pt.setValue(z,"projectionMatrix",T.projectionMatrix),pt.setValue(z,"viewMatrix",T.matrixWorldInverse);let Jt=pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(z,St.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&pt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&pt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Hr=!0,Is=!0)}if(Oe.needsLights&&(yn.state.sunShadowMap.length>0&&pt.setValue(z,"sunShadowMap",yn.state.sunShadowMap,We),yn.state.directionalShadowMap.length>0&&pt.setValue(z,"directionalShadowMap",yn.state.directionalShadowMap,We),yn.state.spotShadowMap.length>0&&pt.setValue(z,"spotShadowMap",yn.state.spotShadowMap,We),yn.state.pointShadowMap.length>0&&pt.setValue(z,"pointShadowMap",yn.state.pointShadowMap,We)),K.isSkinnedMesh){pt.setOptional(z,K,"bindMatrix"),pt.setOptional(z,K,"bindMatrixInverse");let Ft=K.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),pt.setValue(z,"boneTexture",Ft.boneTexture,We))}K.isBatchedMesh&&(pt.setOptional(z,K,"batchingTexture"),pt.setValue(z,"batchingTexture",K._matricesTexture,We),pt.setOptional(z,K,"batchingIdTexture"),pt.setValue(z,"batchingIdTexture",K._indirectTexture,We),pt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&pt.setValue(z,"batchingColorTexture",K._colorsTexture,We));let gi=te.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&ce.update(K,te,cn),(Hr||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,pt.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(nn.envMapIntensity.value=k.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=JA()),Hr){if(pt.setValue(z,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&dM(nn,Is),Re&&Z.fog===!0&&Me.refreshFogUniforms(nn,Re),Me.refreshMaterialUniforms(nn,Z,ue,de,E.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Ft=M,Jt=0;for(let fr of E.state.lightProbeGridArray)fr.texture!==null&&(Ft.textures[Jt]=fr.texture,Ft.min[Jt]=fr.boundingBox.min,Ft.max[Jt]=fr.boundingBox.max,Ft.resolution[Jt]=fr.resolution,Jt++);for(let fr in Ft)Ft[fr].length=Jt;nn.probesSH.value=Ft.textures,nn.probesMin.value=Ft.min,nn.probesMax.value=Ft.max,nn.probesResolution.value=Ft.resolution}ro.upload(z,tx(Oe),nn,We)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ro.upload(z,tx(Oe),nn,We),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&pt.setValue(z,"center",K.center),pt.setValue(z,"modelViewMatrix",K.modelViewMatrix),pt.setValue(z,"normalMatrix",K.normalMatrix),pt.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ft=Z.uniformsGroups;for(let Jt=0,fr=Ft.length;Jt<fr;Jt++){let rx=Ft[Jt];Ge.update(rx,cn),Ge.bind(rx,cn)}}return cn}l(hM,"setProgram");function dM(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}l(dM,"markUniformsLightsNeedsUpdate");function fM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}l(fM,"materialNeedsLights"),this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,k,te){let Z=ze.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ze.get(T.texture).__webglTexture=k,ze.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let te=ze.get(T);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,te=0){J=T,ne=k,B=te;let Z=null,K=!1,Re=!1;if(T){let Te=ze.get(T);if(Te.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(z.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(T.viewport),he.copy(T.scissor),ge=T.scissorTest,ye.viewport(j),ye.scissor(he),ye.setScissorTest(ge),H=-1;return}else if(Te.__webglFramebuffer===void 0)We.setupRenderTarget(T);else if(Te.__hasExternalTextures)We.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Qe=T.depthTexture;if(Te.__boundDepthTexture!==Qe){if(Qe!==null&&ze.has(Qe)&&(T.width!==Qe.image.width||T.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(T)}}let De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let ke=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?Z=ke[k][te]:Z=ke[k],K=!0):T.samples>0&&We.useMultisampledRTT(T)===!1?Z=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[te]:Z=ke,j.copy(T.viewport),he.copy(T.scissor),ge=T.scissorTest}else j.copy(ie).multiplyScalar(ue).floor(),he.copy(xe).multiplyScalar(ue).floor(),ge=Se;if(te!==0&&(Z=X),ye.bindFramebuffer(z.FRAMEBUFFER,Z)&&ye.drawBuffers(T,Z),ye.viewport(j),ye.scissor(he),ye.setScissorTest(ge),K){let Te=ze.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,te)}else if(Re){let Te=k;for(let De=0;De<T.textures.length;De++){let ke=ze.get(T.textures[De]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+De,ke.__webglTexture,te,Te)}}else if(T!==null&&te!==0){let Te=ze.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Te.__webglTexture,te)}H=-1};function ix(T){let k=ze.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=st.textureFormatReadable(T.format),k.__typeReadable=st.textureTypeReadable(T.type)),k}l(ix,"getReadableState"),this.readRenderTargetPixels=function(T,k,te,Z,K,Re,Ue,Te=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){ye.bindFramebuffer(z.FRAMEBUFFER,De);try{let ke=T.textures[Te],Qe=ke.format,ct=ke.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Te);let Fe=ix(ke);if(Fe.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Z&&te>=0&&te<=T.height-K&&z.readPixels(k,te,Z,K,ve.convert(Qe),ve.convert(ct),Re)}finally{let ke=J!==null?ze.get(J).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,k,te,Z,K,Re,Ue,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(k>=0&&k<=T.width-Z&&te>=0&&te<=T.height-K){ye.bindFramebuffer(z.FRAMEBUFFER,De);let ke=T.textures[Te],Qe=ke.format,ct=ke.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Te);let Fe=ix(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.bufferData(z.PIXEL_PACK_BUFFER,Re.byteLength,z.STREAM_READ),z.readPixels(k,te,Z,K,ve.convert(Qe),ve.convert(ct),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let zt=J!==null?ze.get(J).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,zt);let Tt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await g_(z,Tt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Re),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ut),z.deleteSync(Tt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,te=0){let Z=Math.pow(2,-te),K=Math.floor(T.image.width*Z),Re=Math.floor(T.image.height*Z),Ue=k!==null?k.x:0,Te=k!==null?k.y:0;We.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Ue,Te,K,Re),ye.unbindTexture()},this.copyTextureToTexture=function(T,k,te=null,Z=null,K=0,Re=0){let Ue,Te,De,ke,Qe,ct,Fe,ut,zt,Tt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(te!==null)Ue=te.max.x-te.min.x,Te=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,Qe=te.min.y,ct=te.isBox3?te.min.z:0;else{let pt=Math.pow(2,-K);Ue=Math.floor(Tt.width*pt),Te=Math.floor(Tt.height*pt),T.isDataArrayTexture?De=Tt.depth:T.isData3DTexture?De=Math.floor(Tt.depth*pt):De=1,ke=0,Qe=0,ct=0}Z!==null?(Fe=Z.x,ut=Z.y,zt=Z.z):(Fe=0,ut=0,zt=0);let Et=ve.convert(k.format),ln=ve.convert(k.type),Oe;k.isData3DTexture?(We.setTexture3D(k,0),Oe=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(We.setTexture2DArray(k,0),Oe=z.TEXTURE_2D_ARRAY):(We.setTexture2D(k,0),Oe=z.TEXTURE_2D),ye.activeTexture(z.TEXTURE0),ye.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),ye.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ye.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let yn=ye.getParameter(z.UNPACK_ROW_LENGTH),gt=ye.getParameter(z.UNPACK_IMAGE_HEIGHT),Ps=ye.getParameter(z.UNPACK_SKIP_PIXELS),cn=ye.getParameter(z.UNPACK_SKIP_ROWS),Kc=ye.getParameter(z.UNPACK_SKIP_IMAGES);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Tt.width),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt.height),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),ye.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);let Hr=T.isDataArrayTexture||T.isData3DTexture,Is=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let pt=ze.get(T),nn=ze.get(k),gi=ze.get(pt.__renderTarget),Ft=ze.get(nn.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,gi.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Jt=0;Jt<De;Jt++)Hr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,K,ct+Jt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(k).__webglTexture,Re,zt+Jt)),z.blitFramebuffer(ke,Qe,ke+Ue,Qe+Te,Fe,ut,Fe+Ue,ut+Te,z.DEPTH_BUFFER_BIT,z.NEAREST);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||ze.has(T)){let pt=ze.get(T),nn=ze.get(k);ye.bindFramebuffer(z.READ_FRAMEBUFFER,U),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Y);for(let gi=0;gi<De;gi++)Hr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pt.__webglTexture,K,ct+gi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pt.__webglTexture,K),Is?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Re,zt+gi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Re),K!==0?z.blitFramebuffer(ke,Qe,ke+Ue,Qe+Te,Fe,ut,Fe+Ue,ut+Te,z.COLOR_BUFFER_BIT,z.NEAREST):Is?z.copyTexSubImage3D(Oe,Re,Fe,ut,zt+gi,ke,Qe,Ue,Te):z.copyTexSubImage2D(Oe,Re,Fe,ut,ke,Qe,Ue,Te);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Is?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Oe,Re,Fe,ut,zt,Ue,Te,De,Et,ln,Tt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Oe,Re,Fe,ut,zt,Ue,Te,De,Et,Tt.data):z.texSubImage3D(Oe,Re,Fe,ut,zt,Ue,Te,De,Et,ln,Tt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Re,Fe,ut,Ue,Te,Et,ln,Tt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Re,Fe,ut,Tt.width,Tt.height,Et,Tt.data):z.texSubImage2D(z.TEXTURE_2D,Re,Fe,ut,Ue,Te,Et,ln,Tt);ye.pixelStorei(z.UNPACK_ROW_LENGTH,yn),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Ps),ye.pixelStorei(z.UNPACK_SKIP_ROWS,cn),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,Kc),Re===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&z.generateMipmap(Oe),ye.unbindTexture()},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&We.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?We.setTextureCube(T,0):T.isData3DTexture?We.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?We.setTexture2DArray(T,0):We.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){ne=0,B=0,J=null,ye.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};l(r0,"WebGLRenderer");var ud=r0;var iy=l(i=>{let e=Math.min(1,Math.max(0,i))**.5;return 4*e*(1-e)},"swell"),KA=l(i=>1-(1-i)*(1-i),"easeOut"),pd=l(i=>{let e=Math.sin(i*12.9898)*43758.5453;return e-Math.floor(e)},"share"),s0=l((i,e=0)=>{let t=Math.min(1,Math.max(0,i)),n=KA(t);return Array.from({length:7},(r,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*iy(t),shade:0};let a=(s-1)/6*Math.PI*2+(pd(e+s*7)-.5)*.6,o=(.12+pd(e+s*13)*.08)*n,c=.05+(.08+pd(e+s*17)*.1)*n;return{at:[Math.cos(a)*o,c,Math.sin(a)*o],size:(.055+pd(e+s*19)*.03)*iy(t*1.1),shade:s%2===0?0:1}})},"puffAt");var In=["grass","plains","sand","rock","snow","forest","mud","tundra"],Ji={shore:-.03,deep:-.15,reach:3},md={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},sy={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},ry={Ocean:{relief:{base:Ji.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:sy,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Xs=l(i=>i==="Unknown"?md:(Object.prototype.hasOwnProperty.call(ry,i)?ry[i]:void 0)??sy,"terrainEntry");var jA=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),ay=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),oy=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Ki=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,p,f,m)=>{let _=Math.floor(jA(h,p,t)*16)*2;return(ay[_]??0)*f+(ay[_+1]??0)*m},"slope");return(h,p)=>{let f=h/r,m=p/a,_=Math.floor(f),b=Math.floor(m),g=f-_,x=m-b,v=oy(g),A=oy(x),M=o(_),C=o(_+1),E=c(b),y=c(b+1),S=u(M,E,g,x)+(u(C,E,g-1,x)-u(M,E,g,x))*v,L=u(M,y,g,x-1)+(u(C,y,g-1,x-1)-u(M,y,g,x-1))*v;return Math.max(-1,Math.min(1,(S+(L-S)*A)*1.4))}},"periodicNoise"),Wn=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var ls=128,_d=.5,gd=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),QA={grass:{grain:l(({noise:i})=>Wn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>Wn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>Wn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>Wn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>Wn([gd(i(24,11)),gd(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>Wn([gd(i(24,11)),gd(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>Wn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>Wn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>Wn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},xd=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),eT=l((i=ls,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*In.length),r={u:i,v:i};return In.forEach((s,a)=>{let o=QA[s],c=l((A,M)=>Ki({cell:A*i/ls,period:r,seed:7919*(a+1)+M}),"noise"),u=l((A,M)=>(C,E)=>Math.sin(2*Math.PI*(A*C+M*E)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/ls,"texels")},p=o.grain(h),f=o.bumps(h),m=a*i*i*4,_=new Float32Array(i*i);for(let A=0;A<i;A++)for(let M=0;M<i;M++)_[A*i+M]=f(M+e,A+t);let b=l((A,M)=>_[(M+i)%i*i+(A+i)%i]??0,"height"),g=new Float32Array(i*i),x=0;for(let A=0;A<i;A++)for(let M=0;M<i;M++)g[A*i+M]=p(M+e,A+t),x+=g[A*i+M]??0;let v=x/(i*i);for(let A=0;A<i;A++)for(let M=0;M<i;M++){let C=m+(A*i+M)*4,E=(g[A*i+M]??0)-v,y=(b(M+1,A)-b(M-1,A))/2*(i/ls),S=(b(M,A+1)-b(M,A-1))/2*(i/ls);n[C]=xd(o.shade*E+.5),n[C+1]=xd((1-Math.max(-1,Math.min(1,y*o.steep)))/2),n[C+2]=xd((1-Math.max(-1,Math.min(1,S*o.steep)))/2),n[C+3]=xd(o.rough+o.roughVaries*E)}}),n},"surfaceTextures"),ly=eT;var Ei={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Ai=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),cy=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Ai(Ei.rockTo)}, ${Ai(Ei.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Ai(Ei.snowAtEquator)} + (${Ai(Ei.snowAtPoles)} - ${Ai(Ei.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Ai(Ei.snowDeepens)}, height) * smoothstep(${Ai(Ei.snowSlips)}, ${Ai(Ei.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Ai(Ei.wetFrom)}, ${Ai(Ei.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Ai(Ei.wetUpTo)}, height));
}
`;var tT=l(i=>[i.u/Math.max(1,Math.round(i.u/_d)),i.v===null?_d:i.v/Math.max(1,Math.round(i.v/_d))],"surfaceTile"),nT=In.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),iT=null,rT=l(()=>iT??=ly(),"made"),sT=l((i,e)=>{let t=new Os(rT(),ls,ls,In.length),n=new vi({roughness:.92,vertexColors:!0}),[r,s]=tT(i);return t.format=Hn,t.type=dn,t.wrapS=zi,t.wrapT=zi,t.magFilter=Wt,t.minFilter=Gn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=wi,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new He(r,s)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Be(Xs("Mountains").colour)},a.uniforms.snowColour={value:new Be(Xs("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${cy}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${nT}
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
  surface = mix(surface, surface${In.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${In.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),uy=sT;function dy(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Ot;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let p=i[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in p.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;s[_]===void 0&&(s[_]=[]),s[_].push(p.attributes[_]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in p.morphAttributes){if(!r.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(p.morphAttributes[_]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=p.index.count;else if(p.attributes.position!==void 0)_=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,_,h),u+=_}}if(t){let h=0,p=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let _=0;_<m.count;++_)p.push(m.getX(_)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(let h in s){let p=hy(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let b=0;b<a[h].length;++b)m.push(a[h][b][f]);let _=hy(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}l(dy,"mergeGeometries");function hy(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let f=0,m=h.count;f<m;f++)for(let _=0;_<t;_++){let b=h.getComponent(f,_);o.setComponent(f+p,_,b)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(hy,"mergeAttributes");var qs={radius:.42,thickness:.025},a0=qs.radius-qs.thickness,yd=.07,Gl=.04,c0=.25,Lt=.004,o0=.08,zl=.012,vd=.045,Md=.02,_y=625341585,aT=.18,oT=30,lT=5,cT=l(i=>Math.min(oT,lT+Math.max(0,i-1)*2),"lotsFor"),uT=l(i=>Math.floor(Math.max(0,i-1)/6),"tierFor"),u0=l(i=>{let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0},"citySeed"),yy=l((i,e,t,n=[])=>({seed:i,lots:cT(e),tier:uT(e),ways:[...t],sea:[...n]}),"planFor"),hT=l((i,e)=>{let[t,n]=i.centre,r=e.map(c=>{let[u,h]=i.toward(c),p=Math.hypot(u-t,h-n);return{offset:c,du:p===0?0:(u-t)/p,dv:p===0?0:(h-n)/p}}),s=r.reduce((c,{du:u})=>c+u,0),a=r.reduce((c,{dv:u})=>c+u,0),o=l(({du:c,dv:u})=>c*s+u*a,"most");return r.length===0?[]:[r.reduce((c,u)=>o(u)>o(c)?u:c).offset]},"quayOf"),Ln=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Vl=l((i,e,t)=>{let n=t[0]-e[0],r=t[1]-e[1],s=n*n+r*r;return s===0?0:((i[0]-e[0])*n+(i[1]-e[1])*r)/s},"along"),oo=l(({at:[i,e],width:t,facing:n})=>{let r=t/2,s=[Math.cos(n)*r,-Math.sin(n)*r],a=[Math.sin(n)*r,Math.cos(n)*r];return[[i-s[0]-a[0],e-s[1]-a[1]],[i+s[0]-a[0],e+s[1]-a[1]],[i+s[0]+a[0],e+s[1]+a[1]],[i-s[0]+a[0],e-s[1]+a[1]]]},"footprintOf"),dT=l(([i,e])=>{let t=Math.hypot(e[0]-i[0],e[1]-i[1]),n=-(e[1]-i[1])/t*(Gl/2),r=(e[0]-i[0])/t*(Gl/2);return[[i[0]+n,i[1]+r],[e[0]+n,e[1]+r],[e[0]-n,e[1]-r],[i[0]-n,i[1]-r]]},"stripOf"),Sd=l((i,e,t)=>[i,e].some(n=>n.some((r,s)=>{let a=n[(s+1)%n.length],o=Math.hypot(a[0]-r[0],a[1]-r[1]),c=-(a[1]-r[1])/o,u=(a[0]-r[0])/o,h=l(m=>m.map(([_,b])=>_*c+b*u),"onto"),p=h(i),f=h(e);return Math.min(...f)-Math.max(...p)>=t||Math.min(...p)-Math.max(...f)>=t})),"apart"),ao=l((i,e)=>{let[t,n,,r]=e,s=Vl(i,t,n),a=Vl(i,t,r),o=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-s,s-1),Math.max(0,-a,a-1))*o},"fromFootprint"),by=l((i,{seed:e,lots:t,tier:n,ways:r,sea:s},a)=>{let[o,c]=i.centre,u=[...r,...hT(i,s)].flatMap(g=>{let[x,v]=i.toward(g),A=[(o+x)/2,(c+v)/2],M=A[0]-o,C=A[1]-c,E=Math.hypot(M,C);return E===0?[]:[[[o+M/E*yd,c+C/E*yd],A]]}),h=u.map(dT),p=l((g,x)=>{let v=u.map(([A,M])=>{let C=Vl(g,A,M),E=[A[0]+(M[0]-A[0])*C,A[1]+(M[1]-A[1])*C];return{t:C,near:E,off:Math.hypot(E[0]-g[0],E[1]-g[1])}}).filter(({t:A,off:M})=>A>=0&&A<=1&&M<=Gl/2+x+Lt&&M>0).sort((A,M)=>A.off-M.off)[0];return v===void 0?Math.atan2(o-g[0],c-g[1]):Math.atan2(v.near[0]-g[0],v.near[1]-g[1])},"facingAt"),f=Math.ceil(a0/o0),m=[];for(let g=-f;g<=f;g++)for(let x=-f;x<=f;x++){let v=(g+f)*(f*2+1)+(x+f),A=[o+x*o0+(Ln(e,v*4)-.5)*2*zl,c+g*o0+(Ln(e,v*4+1)-.5)*2*zl],M=Math.hypot(A[0]-o,A[1]-c),C=vd+Ln(e,v*4+2)*Md;M>a0||!i.owns(A[0],A[1])||m.push({at:A,width:C,facing:p(A,C),roof:Ln(e^_y,v),storeys:1+(M<aT?n:0)+(Ln(e,v*4+3)<.2?1:0),order:M+Ln(e,v*4+3)*.03})}m.sort((g,x)=>g.order-x.order);let _=[],b=[];return m.forEach(({at:g,width:x,facing:v,storeys:A,roof:M})=>{let C=oo({at:g,width:x,facing:v});C.every(([E,y])=>Math.hypot(E-o,y-c)<=a0-Lt)&&ao([o,c],C)>=yd+Lt&&ao(a,C)>=c0+Lt&&h.every(E=>Sd(C,E,Lt))&&b.every(E=>Sd(C,E,Lt))&&(_.push({at:g,width:x,facing:v,storeys:A,roof:M}),b.push(C))}),{plaza:{at:[o,c],radius:yd},streets:u,lots:_.slice(0,t)}},"sprawl"),fy=4,fT=.62,pT=.05,vy=12,l0=.085,bd=.055,mT=.13,py=32,gT=1821285621,My=l(i=>i<fy?0:Math.min(vy,i-fy+1),"suburbStepsFor"),xT=l(i=>i<=0?0:fT+(Math.min(i,vy)-1)*pT,"suburbReach"),_T=l(i=>1-.55*Math.min(1,Math.max(0,(i-.5)/.7)),"builtShare"),my=l(([i,e],t)=>{let n=Math.hypot(e[0]-i[0],e[1]-i[1]),r=-(e[1]-i[1])/n*t,s=(e[0]-i[0])/n*t;return[[i[0]+r,i[1]+s],[e[0]+r,e[1]+s],[e[0]-r,e[1]-s],[i[0]-r,i[1]-s]]},"strip"),gy=l(i=>i.slice(1).map((e,t)=>[i[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),xy=l((i,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...i.map(([n])=>n))>=t||Math.min(...i.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...i.map(([,n])=>n))>=t||Math.min(...i.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),Sy=l((i,{seed:e,steps:t,city:n},r)=>{let s=xT(t);if(s===0)return[];let[a,o]=i.centre,c=i.toward(n),u=e^Math.imul(gT,(n[0]+7)*31+(n[1]+7)),h=r.runs.flatMap(({points:E})=>gy(E)),p=[...h.map(E=>({line:E,wide:bd})),...r.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:mT}))],f=[...p.map(({line:E,wide:y})=>my(E,y)),...r.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>my(E,bd))],m=l((E,y)=>{let S=p.map(({line:[L,P],wide:D})=>{let O=Vl(E,L,P),X=[L[0]+(P[0]-L[0])*O,L[1]+(P[1]-L[1])*O];return{t:O,near:X,off:Math.hypot(X[0]-E[0],X[1]-E[1]),wide:D}}).filter(({t:L,off:P,wide:D})=>L>=0&&L<=1&&P<=D+y+Lt&&P>0).sort((L,P)=>L.off-P.off)[0];return S===void 0?Math.atan2(c[0]-E[0],c[1]-E[1]):Math.atan2(S.near[0]-E[0],S.near[1]-E[1])},"facingAt"),_=Math.ceil(.75/l0),b=[],g=l(E=>vd+Ln(u,E*5+2)*Md,"widthOf"),x=l(E=>Math.min(1/0,...h.map(([y,S])=>{let L=Math.max(0,Math.min(1,Vl(E,y,S)));return Math.hypot(y[0]+(S[0]-y[0])*L-E[0],y[1]+(S[1]-y[1])*L-E[1])})),"fromRuns"),v=l((E,y,S)=>{let L=Math.hypot(y[0]-c[0],y[1]-c[1]),P=L+Ln(u,E*5+3)*.03,D=g(E);P<=s&&Ln(u,E*5+4)<_T(L)&&i.owns(y[0],y[1])&&(!S||x(y)>=bd+Lt*2+vd+Md)&&b.push({at:y,width:D,facing:m(y,D),roof:Ln(u^_y,E),storeys:1+(Ln(u,E*5+3)<.15?1:0),order:P})},"consider");for(let E=-_;E<=_;E++)for(let y=-_;y<=_;y++){let S=(E+_)*(_*2+1)+(y+_);v(S,[a+y*l0+(Ln(u,S*5)-.5)*2*zl,o+E*l0+(Ln(u,S*5+1)-.5)*2*zl],!0)}r.runs.forEach(({key:E,points:y})=>{let S=gy(y).map(([D,O])=>({from:D,to:O,length:Math.hypot(O[0]-D[0],O[1]-D[1])})),L=S.reduce((D,O)=>D+O.length,0),P=Math.min(py,Math.floor(L/(vd+Md+Lt*2)));for(let D=0;D<P;D++)[1,-1].forEach((O,X)=>{let U=(_*2+1)**2+(E*py+D)*2+X,Y=bd+g(U)/2+Lt*2,ne=(D+.5)/P*L+(Ln(u,U*5)-.5)*zl;for(let[B,{from:J,to:H,length:$}]of S.entries()){if(ne<=$||B===S.length-1){let j=(H[0]-J[0])/$,he=(H[1]-J[1])/$;v(U,[J[0]+j*ne-he*Y*O,J[1]+he*ne+j*Y*O],!1);break}ne-=$}})}),b.sort((E,y)=>E.order-y.order);let A=l(([E,y],S)=>(Math.hypot(E-S[0],y-S[1])**2-Math.hypot(E-c[0],y-c[1])**2)/(2*Math.hypot(S[0]-c[0],S[1]-c[1])),"nearer"),M=[],C=[];return b.forEach(({at:E,width:y,facing:S,storeys:L,roof:P})=>{let D=oo({at:E,width:y,facing:S});oo({at:E,width:y+Lt*2,facing:S}).every(([O,X])=>i.owns(O,X))&&r.others.every(O=>D.every(X=>A(X,O)>=Lt/2))&&ao(c,D)>=qs.radius+qs.thickness+Lt&&r.stands.every(O=>ao(O,D)>=c0+Lt)&&ao(i.centre,D)>=c0+Lt&&[E,...D].every(([O,X])=>(r.ground?.(O,X)??0)>=0)&&r.taken.every(([O,X,U])=>ao([O,X],D)>=U+Lt)&&f.every(O=>xy(D,O,Lt)||Sd(D,O,Lt))&&C.every(O=>xy(D,O,Lt)||Sd(D,O,Lt))&&(M.push({at:E,width:y,facing:S,storeys:L,roof:P}),C.push(D))}),M},"suburb");var wy="#c79a72",yT="#5a4a3a";var pn="#7a5532",f0="#5f6266",Ey="#8a8f96",Ti="#5d6447",h0="#e8e0cc",Cy="#6e4b2f",Ys="#8a8580",Ay="#5b3e27",lo="#7d858c",bT=new W(0,1,0),Ie=new Hi(1,1,1),jt=new Wi(.5,.5,1,10),$s=new Tr(.5,1,10),co=new is(.5,10,8),m0=class m0{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(m0,"Parts");var Qt=m0,vT=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:co,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:$s,colour:f0,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ie,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:jt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:co,colour:Ti,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),MT=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:jt,colour:pn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:jt,colour:pn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:$s,colour:f0,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:jt,colour:pn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:$s,colour:Ey,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ie,colour:Ey,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ie,colour:pn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:jt,colour:pn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ie,colour:i==="rifle"?"#3a3a3a":pn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ie,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ie,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:jt,colour:pn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:jt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),ST={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},p0=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new Qt,a=r===void 0?void 0:ST[r],o=a?.coat??(i==="modern"?Ti:t[0]),c=a?.legs??(i==="ancient"?wy:i==="modern"?Ti:yT);return n&&(s.add({shape:Ie,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ie,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ie,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ie,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ie,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ie,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:co,colour:wy,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:co,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:co,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):vT(i,t,s),r==="parachute"&&s.add({shape:Ie,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),MT(e,i,t,s),s},"person"),Ty=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),d0=l((i=Cy)=>new Qt().add({shape:Ie,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ie,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ie,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ie,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),wT=l((i,e,t)=>new Qt().addAll(d0(),[0,0,0]).add({shape:Ie,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(p0(i,e,t,{legs:!1}),[0,.04,0]),"rider"),ET=l(i=>new Qt().add({shape:Ie,colour:Ys,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ie,colour:Ys,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:jt,colour:Ys,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ie,colour:Ys,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Ys,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Ys,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Ys,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ie,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),mn=l((i,e=.05)=>({shape:jt,colour:pn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),AT=l((i,e,t)=>{if(e==="chariot")return new Qt().addAll(d0(),[0,0,.09]).add({shape:Ie,colour:pn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ie,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(mn([-.042,.035,-.045],.065)).add(mn([.042,.035,-.045],.065)).addAll(p0(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Qt().addAll(d0(t==="ancient"?"#8a7a64":Cy),[0,0,.1]).add({shape:Ie,colour:pn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ie,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(mn([-.042,.03,-.03])).add(mn([.042,.03,-.03])).add(mn([-.042,.03,-.09])).add(mn([.042,.03,-.09]));return e==="wagon"?n.add({shape:jt,colour:h0,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:h0,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ie,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ie,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),TT=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Qt().add({shape:Ie,colour:pn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ie,colour:pn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ie,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(mn([-.045,.03,.04],.045)).add(mn([.045,.03,.04],.045)).add(mn([-.045,.03,-.04],.045)).add(mn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?Ti:f0;return new Qt().add({shape:jt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ie,colour:i==="modern"?Ti:pn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ie,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(mn([-.04,.035,0],.07)).add(mn([.04,.035,0],.07))},"siege"),CT=l((i,e,t)=>{if(i==="industrial")return new Qt().add({shape:Ie,colour:lo,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ie,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(mn([-.045,.025,.06],.045)).add(mn([.045,.025,.06],.045)).add(mn([-.045,.025,-.06],.045)).add(mn([.045,.025,-.06],.045));let n=new Qt().add({shape:Ie,colour:Ti,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ie,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ie,colour:Ti,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:jt,colour:Ti,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Ti,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),RT=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new Qt;switch(i.hull){case"oars":case"sail":{s.add({shape:Ie,colour:Ay,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:$s,colour:Ay,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:jt,colour:pn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ie,colour:o===0?e[1]:h0,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ie,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ie,colour:pn,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ie,colour:pn,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:jt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ie,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ie,colour:lo,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ie,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ie,colour:lo,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ie,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ie,colour:i.era==="industrial"?"#4a4a48":lo,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:$s,colour:i.era==="industrial"?"#4a4a48":lo,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:lo,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:jt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ie,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ie,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:jt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ie,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),PT=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Qt().add({shape:jt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:$s,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ie,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ie,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ie,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),IT=l(i=>new Qt().add({shape:co,colour:Ti,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ie,colour:Ti,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ie,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),LT=l((i,e)=>{let t=e?1.4:1;return new Qt().add({shape:jt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:$s,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Ry=l((i,e)=>{switch(i.shape){case"foot":{let t=new Qt;return Ty(i.squad).forEach(([n,r],s)=>t.addAll(p0(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new Qt;return Ty(i.squad).forEach(([n,r])=>t.addAll(wT(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return ET(e);case"cart":return AT(e,i.cart??"wagon",i.era);case"siege":return TT(i.era,e,i.large===!0);case"vehicle":return CT(i.era,e,i.large===!0);case"ship":return RT(i,e);case"aircraft":return PT(i,e);case"helicopter":return IT(e);default:return LT(e,i.large===!0)}},"figureParts"),DT=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new yt().compose(new W(...i),new Mn().setFromAxisAngle(bT,n).multiply(new Mn().setFromEuler(new kn(...t))),new W(...e)),"partMatrix"),wd=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Be(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(DT(n)),a.setAttribute("color",new Mt(u,3)),a}),t=dy(e)??new Ot;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Py=l((i,e)=>wd(Ry(i,e).parts),"figureGeometry"),NT=new Wi(.19,.2,1,28),UT=new Cr(.22,.014,4,32),FT=new Cr(1,.03,3,40),OT="#dfe9ea",BT=[[.11,.2],[.16,.27]],Iy=l((i,e,{fortified:t,scale:n,stand:r,part:s="whole",ripples:a=!1})=>{let o=i.shape==="ship",c=o?0:r,u=s==="base"?[]:Ry(i,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+c,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return wd(u);if(o||u.push({shape:NT,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),o&&a&&s==="whole"){let h=(i.large?1.25:1)*n;BT.forEach(([p,f])=>u.push({shape:FT,colour:OT,at:[0,.006,0],size:[p*h,f*h,.15],turn:[Math.PI/2,0,0]}))}return t&&u.push({shape:UT,colour:"#b5ab98",at:[0,c+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),wd(u)},"unitBodyGeometry"),kT=new Cr(qs.radius,qs.thickness,6,24),Ly=l(()=>wd([{shape:kT,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");var an=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Hl=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Xn=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),Wl=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),g0=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Dy={Warrior:an("ancient","club"),Spearman:an("ancient","spear"),Swordman:an("ancient","sword"),Archer:an("ancient","bow"),Horseman:Hl("ancient","spear"),Chariot:g0("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Xn("ancient","oars"),Settlers:g0("ancient","wagon"),Diplomat:an("ancient","case",1),Caravan:g0("ancient","goods"),Explorer:an("ancient","pack",1),Pikeman:an("medieval","pike"),Knight:Hl("medieval","lance"),Crusader:Hl("medieval","sword"),Fanatic:an("medieval","sword"),Sail:Xn("medieval","sail"),Musketman:an("renaissance","musket"),Dragoon:Hl("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Xn("renaissance","sail",!0,1),Galleon:Xn("renaissance","sail",!0),Rifleman:an("industrial","rifle"),AlpineTrooper:{...an("industrial","rifle"),dress:"snow"},Partisan:{...an("industrial","rifle"),dress:"irregular"},Cavalry:Hl("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:an("industrial","none",2),Ironclad:Xn("industrial","steam",!1,1),Transport:Xn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:an("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:an("modern","rifle"),Paratrooper:{...an("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Xn("modern","steam",!1,1),Cruiser:Xn("modern","steam",!0,2),MissileCruiser:Xn("modern","steam",!0,1,!0),Battleship:Xn("modern","steam",!0,3),Submarine:Xn("modern","submarine"),Carrier:Xn("modern","carrier",!0),Fighter:Wl("modern"),StealthFighter:Wl("modern",!1,!0),Bomber:Wl("modern",!0),StealthBomber:Wl("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Xl=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Dy,i)?Dy[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Xn("industrial","steam"):e.includes("Air")?Wl("modern"):an("ancient","spear")),"unitLook"),Ed=l(i=>i.shape==="aircraft"||i.shape==="helicopter"||i.shape==="missile","airborne");var zT=.03,Oy="#fff4b0",GT=.04,Ad=.004,x0=.018,Ny=.01,Uy=.022,Fy=.03,By=.03,Td=.002,VT="#4caf50",HT="#e0b030",WT="#d04030",XT=256,Zs,Ci,Js,Ks,js,Qs,Pr,ho,v0=class v0{constructor(){V(this,Zs,new Map);V(this,Ci,new Map);V(this,Js,new Map);V(this,Ks,new Map);V(this,js,null);V(this,Qs,new Map);V(this,Pr,null);V(this,ho,0);this.figureMaterial=new vi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Cr(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=d(this,Zs).get(n);return r===void 0&&(r=new vi({color:new Be(e),roughness:.75,metalness:.05,...t?{emissive:new Be(e),emissiveIntensity:.6}:{}}),d(this,Zs).set(n,r)),r}body(e,t,n,r=1,s="whole",a=!1){let o=a&&e.shape==="ship"&&s==="whole",c=JSON.stringify([e,t,n,r,s,o]),u=d(this,Ks).get(c);return u===void 0&&(u=Iy(e,t,{fortified:n,scale:r,stand:zT,part:s,ripples:o}),d(this,Ks).set(c,u)),u}walls(){return d(this,js)??G(this,js,Ly()),d(this,js)}figure(e,t){let n=JSON.stringify([e,t]),r=d(this,Js).get(n);return r===void 0&&(r=Py(e,t),d(this,Js).set(n,r)),r}plain(e){let t=d(this,Qs).get(e);return t===void 0&&(t=new es({color:new Be(e),sizeAttenuation:!1,depthTest:!1}),d(this,Qs).set(e,t)),t}pointer(){if(d(this,Pr)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Oy,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new ns(e);n.colorSpace=Vt,G(this,Pr,new es({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return d(this,Pr)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=d(this,Ci).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new ns(a);h.colorSpace=Vt,s=new es({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),d(this,Ci).set(r,s)}return s}get sweepDue(){return d(this,Ci).size>Math.max(XT,d(this,ho)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof bt&&t.add(r.geometry),r instanceof wr&&t.add(r.material)});d(this,Ci).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),d(this,Ci).delete(r))}),G(this,ho,d(this,Ci).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),d(this,Js).forEach(e=>e.dispose()),d(this,Ks).forEach(e=>e.dispose()),d(this,js)?.dispose(),G(this,js,null),d(this,Ks).clear(),this.figureMaterial.dispose(),d(this,Qs).forEach(e=>e.dispose()),d(this,Pr)?.map?.dispose(),d(this,Pr)?.dispose(),d(this,Qs).clear(),G(this,Pr,null),d(this,Zs).forEach(e=>e.dispose()),d(this,Ci).forEach(e=>{e.map?.dispose(),e.dispose()}),d(this,Zs).clear(),d(this,Ci).clear(),d(this,Js).clear(),G(this,ho,0)}};Zs=new WeakMap,Ci=new WeakMap,Js=new WeakMap,Ks=new WeakMap,js=new WeakMap,Qs=new WeakMap,Pr=new WeakMap,ho=new WeakMap,l(v0,"MarkerKit");var Rd=v0,ky=l(i=>{let{r:e,g:t,b:n}=new Be(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),uo=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),qT=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),YT=3,$T=4,ql=l((i,e,t,n,r=YT)=>{let s=new wr(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),zy=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return ql(i,e*r,e,t)},"label"),Cd=[0,.36,0],ZT=l((i,e)=>{let t=new rn;return e.walled&&t.add(new bt(i.walls(),i.figureMaterial)),t.add(uo(zy(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],ky(e.colours[0])),By,0),...Cd)),t},"drawCity"),JT=l((i,e,t=null,n=!1,r=t===null)=>{let s=new rn,{ring:a}=i.geometries,o=Xl(e.type,e.kinds),c=n&&Ed(o),u=i.body(o,e.colours,e.fortified,e.size,c?"figures":"whole",r),h=c?new rn:s,p=u.boundingBox?.max.y??.3,f=t?.at??[0,p+GT,0],m=e.health!==null,_=(t?.over??0)+(m?Ad+Td:0),b=_+Ny+Td,g=qT(e),x=b+(g===""?0:Uy+Td),v=new bt(u,i.figureMaterial);if(v.name=y0,v.rotation.y=e.facing,h.add(v),c&&(h.name=b0,s.add(new bt(i.body(o,e.colours,e.fortified,e.size,"base"),i.figureMaterial),h)),e.health!==null){let A=Math.max(0,Math.min(1,e.health));if(h.add(uo(ql(i.plain("#202020"),x0,Ad,t?.over??0),...f)),A>0){let M=ql(i.plain(A>.5?VT:A>.25?HT:WT),x0*A,Ad*.6,(t?.over??0)+Ad*.2);M.center.x=1/(2*A),h.add(uo(M,...f))}}if(h.add(uo(ql(i.plain(e.colours[0]),x0,Ny,_),...f)),g!==""&&h.add(uo(zy(i.label(g,e.colours[0],ky(e.colours[0])),Uy,b),...f)),e.active){let A=new bt(a,i.material(Oy,!0));A.rotation.x=Math.PI/2,A.position.y=.01,s.add(A),h.add(uo(ql(i.pointer(),Fy,Fy,x,$T),...f))}return s},"drawUnit"),_0="unit",y0="figures",b0="aloft",fo=.26,Gy=l((i,e,t=!1)=>{let n=new rn;if(e.city!==null&&n.add(ZT(i,e.city)),e.unit!==null){let r=e.inCity??e.city!==null?fo:0,s=JT(i,e.unit,e.city===null?null:{at:[Cd[0],Cd[1],Cd[2]-r],over:By+Td},t,r===0);s.name=_0,s.position.z=r,n.add(s)}return n},"drawMarker"),Yl=new WeakMap,Pd=new WeakMap,KT=.5,$l=l((i,e,t)=>{i.forEach(n=>n.traverse(r=>{if(!(r instanceof bt||r instanceof wr))return;let s=Yl.get(r)??r.material,a=t.get(s);a===void 0&&(a=s.clone(),r instanceof wr?a.transparent=!0:a.alphaHash=!0,t.set(s,a)),Yl.has(r)||(Yl.set(r,s),Pd.set(r,r.castShadow)),r.material=a,r.castShadow=(Pd.get(r)??!1)&&e>=KT})),t.forEach((n,r)=>{n.opacity=r.opacity*e})},"fade"),Vy=l((i,e)=>{i.forEach(t=>t.traverse(n=>{let r=Yl.get(n);r===void 0||!(n instanceof bt||n instanceof wr)||(n.material=r,n.castShadow=Pd.get(n)??n.castShadow,Yl.delete(n),Pd.delete(n))})),po(e)},"unfaded"),po=l(i=>{i.forEach(e=>e.dispose()),i.clear()},"unfade");var cs=l(i=>i*Math.PI/180,"degrees"),jT=cs(25),QT=cs(80),eC=5,tC=90,nC=1.12,Zl=cs(40),S0=cs(45),iC={above:{yaw:0,pitch:cs(80)},classic:{yaw:0,pitch:cs(55)},isometric:{yaw:cs(45),pitch:cs(30)}};var Hy=l(i=>({focus:i,...iC.classic,distance:24}),"defaultOrbit"),M0=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),Wy=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),ea=l(i=>({...i,yaw:Wy(i.yaw),pitch:M0(i.pitch,jT,QT),distance:M0(i.distance,eC,tC)}),"clampOrbit"),go=l((i,e)=>ea({...i,distance:i.distance/nC**e}),"zoomed"),Id=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),Ld=l((i,e)=>{let{forward:t}=Id(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),w0=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=Id(i),u=Ld(i,e),h=[t-u[0],n-u[1],r-u[2]],p=l(_=>(h[0]??0)*_[0]+(h[1]??0)*_[1]+(h[2]??0)*_[2],"dot"),f=p(a),m=Math.tan(Zl/2);return f<=1e-6?null:[p(o)/(f*m*s),p(c)/(f*m)]},"toScreen"),E0=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=Id(i),c=Math.tan(Zl/2);return{from:Ld(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),mo=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=E0(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),Xy=l((i,e,t,n,r)=>{let s=mo(i,e,t,r),a=mo(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Zl/2),{right:h}=Id(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(p[0]??0))*u,i.focus[1]+(o*h[2]+c*(p[1]??0))*u]}},"panned"),qy=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:Wy(i.yaw),focus:[n(r,e.u),e.v===null?M0(s,0,t):n(s,e.v)]}},"settled"),Yy=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Dd=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var rC=new Be("#3f8a8c"),sC=new Be("#173a52"),aC=new Be("#e8eeee"),$y=`
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
`,oC=`
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
`,us,ai,qn,T0=class T0{constructor(e,t){V(this,us);V(this,ai);V(this,qn);G(this,us,e),G(this,ai,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<d(this,ai).length;r+=2)d(this,ai)[r]=Vi.toHalfFloat(0),d(this,ai)[r+1]=Vi.toHalfFloat(1);G(this,qn,new ja(d(this,ai),e.columns,e.rows,Yi,Vn)),d(this,qn).wrapS=zi,d(this,qn).wrapT=e.wrapsV?zi:ii,d(this,qn).magFilter=Wt,d(this,qn).minFilter=Wt,d(this,qn).needsUpdate=!0;let n=new wn({uniforms:Ws.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},shallow:{value:rC.clone()},deep:{value:sC.clone()},foam:{value:aC.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Be("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:$y,fragmentShader:oC,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=d(this,qn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new bt(new Xi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=d(this,us),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),p=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&p>=0&&p<n){let f=(p*t+h)*2;d(this,ai)[f]=Vi.toHalfFloat(e.positions[u*3+1]??0),d(this,ai)[f+1]=Vi.toHalfFloat(e.unseen[u]??0)}}d(this,qn).needsUpdate=!0}height(e,t){return Vi.fromHalfFloat(d(this,ai)[(t*d(this,us).columns+e)*2]??0)}unseen(e,t){return Vi.fromHalfFloat(d(this,ai)[(t*d(this,us).columns+e)*2+1]??0)>.5}texture(){return d(this,qn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,us).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),d(this,qn).dispose()}};us=new WeakMap,ai=new WeakMap,qn=new WeakMap,l(T0,"Water");var A0=T0,Zy=A0,lC=`
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
`,cC=.18,Jl,C0=class C0{constructor(e,t){V(this,Jl);G(this,Jl,t.wrapsV);let n=new wn({uniforms:Ws.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},extent:{value:new He},wrapsV:{value:!1}}]),vertexShader:$y,fragmentShader:lC,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new bt(new Xi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,Jl)&&e}follow(e,t,n){this.mesh.position.set(e,cC,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Jl=new WeakMap,l(C0,"Clouds");var Nd=C0;var uC=.6,hC=.05,ta=64,Jy=.125,dC=`
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
`,fC=`
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
`,Ky=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),pC=l((i,e)=>{let[t]=Ky(i.length),n=ta*(1-2*Jy);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*ta+(ta-c)/2,y:Math.floor(s/t)*ta+(ta-u)/2,width:c,height:u}]})},"atlasPlaces"),mC=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),hs,Yn,Kl,na,jl,Ud,xo,jy,Qy,P0=class P0{constructor(e){V(this,xo);V(this,hs,null);V(this,Yn,null);V(this,Kl,"");V(this,na);V(this,jl,new WeakMap);V(this,Ud,1);G(this,na,e),this.material=new wn({uniforms:Ws.merge([Pe.fog,{atlas:{value:null},lean:{value:1},lift:{value:hC},bias:{value:uC},cells:{value:[1,1]},pad:{value:Jy}}]),vertexShader:dC,fragmentShader:fC,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(d(this,hs)?.dispose(),G(this,hs,null),e===null||e.count===0)return null;R(this,xo,Qy).call(this,e);let t=new Al,n=new Xi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Er(e.anchors,3)),t.setAttribute("slot",new Er(e.slots,2)),t.setAttribute("size",new Er(e.sizes,1)),t.setAttribute("cell",new Er(e.cells,1)),t.instanceCount=e.count,G(this,hs,t),t}make(){let e=new bt(d(this,hs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){d(this,hs)?.dispose(),d(this,Yn)?.dispose(),this.material.dispose()}};hs=new WeakMap,Yn=new WeakMap,Kl=new WeakMap,na=new WeakMap,jl=new WeakMap,Ud=new WeakMap,xo=new WeakSet,jy=l(function(e){if(e===null)return 0;let t=d(this,jl).get(e);return t===void 0&&(t=xi(this,Ud)._++,d(this,jl).set(e,t)),t},"#imageId"),Qy=l(function(e){let t=e.names.map(o=>`${o}:${R(this,xo,jy).call(this,d(this,na).call(this,o))}`).join(",");if(t===d(this,Kl)&&d(this,Yn)!==null)return;let[n,r]=Ky(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*ta,s.height=r*ta,a!==null&&(a.imageSmoothingEnabled=!1,pC(e.names,o=>{let c=d(this,na).call(this,o);return c===null?null:mC(c)}).forEach(({_:o,x:c,y:u,width:h,height:p})=>{let f=d(this,na).call(this,o);f!==null&&a.drawImage(f,c,u,h,p)})),d(this,Yn)?.dispose(),G(this,Yn,new ns(s)),d(this,Yn).colorSpace=Vt,d(this,Yn).premultiplyAlpha=!0,d(this,Yn).magFilter=Ht,d(this,Yn).minFilter=Gn,d(this,Yn).generateMipmaps=!0,G(this,Kl,t),this.material.uniforms.atlas.value=d(this,Yn),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(P0,"YieldIcons");var R0=P0,eb=R0;var I0=10466244,gC=14082796,xC=5984576,_C=16773336,tb=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),yC=l(i=>[new Pn(new W(0,0,1),0),new Pn(new W(0,0,-1),i)],"polesAt"),bC=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),nb=2048,ib=Math.hypot(30,40,20),rb=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new ud({antialias:!0,canvas:i}),s=new dl,a=new vn(Zl*180/Math.PI,1,.1,400),o=new rn,{material:c,detail:u}=uy(e,t.rows*t.spacingV),h=new El(_C,2.6),p=new Map,f=new Map,m=new vi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),_=t.rows*t.spacingV,b=yC(_),g=new Map,x=new Map,v=new Map,A=new yl(1,1),M=l(ee=>new vi({color:new Be(ee),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),C=[M("#d8d5cf"),M("#a9a59d")],E=new Map,y=new Ka({color:new Be("#dfe8e8"),side:si}),S=new rn,L=new Rd,P=new rn,D=new eb(n??(()=>null)),O=new Zy(t,new Be(I0)),X=new Nd(O.texture(),t),U=new hl(I0,30,110),Y=[[0,0]],ne="0,0",B=[[0,0]],J="0,0",H=!1,$=null;r.outputColorSpace=Vt,r.localClippingEnabled=!0,r.toneMapping=Cl,r.shadowMap.enabled=!0,r.shadowMap.type=yh,s.background=new Be(I0),s.fog=U,s.add(new Ml(gC,xC,.9)),s.add(o),s.add(S),s.add(P),s.add(O.mesh),s.add(X.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(nb,nb),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let j=l((ee,me,ie=Y)=>ie.map(([xe,Se])=>{let be=ee.make();return be.position.set(ee.at[0]+xe,ee.at[1],ee.at[2]+Se),me.add(be),be}),"copiesOf"),he=l(ee=>j(ee,o,bC(Y,ee.span,_,e.v,H)),"overlayCopiesOf"),ge=l(ee=>ee.flatMap(me=>{let ie=me.getObjectByName(_0);return ie===void 0?[]:[ie]}),"unitParts"),Q=l(ee=>ee.drawn.forEach(me=>{let ie=me.getObjectByName(y0),xe=me.getObjectByName(b0);ie!==void 0&&(ie.rotation.y=ee.facing),xe!==void 0&&(xe.position.y=ee.aloft)}),"pose"),pe=l(ee=>{let me=s0(ee.through,ee.seed);ee.drawn.forEach(ie=>ie.children.forEach((xe,Se)=>{let be=me[Se];if(be===void 0){xe.visible=!1;return}xe.position.set(...be.at),xe.scale.setScalar(Math.max(be.size,1e-4)),xe.visible=be.size>0}))},"shapePuff"),le=l((ee,me=!1)=>{let ie=Gy(L,ee,me);return ie.traverse(xe=>{xe.castShadow=xe instanceof bt}),ie},"markerOf"),de=l(()=>{L.sweepDue&&L.sweep([...g.values(),...x.values()].flatMap(({original:ee})=>ee===void 0?[]:[ee]))},"sweep");return{render:l(()=>r.render(s,a),"render"),resize:l((ee,me,ie)=>{r.setPixelRatio(ie),r.setSize(ee,me,!1),a.aspect=me>0?ee/me:1,a.updateProjectionMatrix()},"resize"),setChunk:l((ee,me,ie)=>{let xe=`${ee},${me}`,Se=new Ot;Se.setAttribute("position",new Mt(ie.positions,3)),Se.setAttribute("normal",new Mt(ie.normals,3)),Se.setAttribute("color",new Mt(ie.colours,3)),Se.setAttribute("surfacesA",new Mt(ie.surfacesA,4,!0)),Se.setAttribute("surfacesB",new Mt(ie.surfacesB,4,!0)),Se.setAttribute("shore",new Mt(ie.shore,1,!0)),Se.setIndex(new Mt(ie.indices,1)),Se.computeBoundingSphere();let be=p.get(xe);be!==void 0&&(be.drawn.forEach(Ke=>o.remove(Ke)),be.geometry.dispose());let Xe={geometry:Se,at:[ie.u,0,ie.v],make:l(()=>{let Ke=new bt(Se,c);return Ke.castShadow=!0,Ke.receiveShadow=!0,Ke},"make"),drawn:[]};Xe.drawn=j(Xe,o),p.set(xe,Xe),O.setChunk(ie)},"setChunk"),setOverlay:l((ee,me,ie)=>{let xe=`${ee},${me}`,Se=f.get(xe);if(Se!==void 0&&(Se.drawn.forEach(ot=>o.remove(ot)),Se.geometry.dispose(),f.delete(xe)),ie===null)return;let be=new Ot;be.setAttribute("position",new Mt(ie.positions,3)),be.setAttribute("normal",new Mt(ie.normals,3)),be.setAttribute("color",new Mt(ie.colours,3)),be.computeBoundingSphere(),be.computeBoundingBox();let Xe=be.boundingBox,Ke={geometry:be,span:[ie.v+(Xe?.min.z??0),ie.v+(Xe?.max.z??0)],at:[ie.u,0,ie.v],make:l(()=>{let ot=new bt(be,m);return ot.castShadow=!0,ot.receiveShadow=!0,ot},"make"),drawn:[]};Ke.drawn=he(Ke),f.set(xe,Ke)},"setOverlay"),setMarker:l((ee,me,ie)=>{let xe=g.get(ee);if(xe?.drawn.forEach(Xe=>S.remove(Xe)),xe?.faded!==void 0&&po(xe.faded),g.delete(ee),ie===null)return;let Se=le(ie),be={at:me,make:l(()=>Se.clone(),"make"),drawn:[],original:Se};be.drawn=j(be,S,B),g.set(ee,be),de()},"setMarker"),setWalker:l((ee,me)=>{let ie=x.get(ee);if(ie?.drawn.forEach(be=>S.remove(be)),ie!==void 0&&po(ie.faded),x.delete(ee),me===null)return;let xe=le(me,!0),Se={at:ie?.at??[0,0,0],facing:ie?.facing??me.unit?.facing??0,aloft:ie?.aloft??0,opacity:1,faded:new Map,make:l(()=>xe.clone(),"make"),drawn:[],original:xe};Se.drawn=j(Se,S,B),Q(Se),x.set(ee,Se),de()},"setWalker"),placeWalker:l((ee,me,ie,xe=0)=>{let Se=x.get(ee);Se!==void 0&&(Se.at=me,Se.facing=ie,Se.aloft=xe,Se.drawn.forEach((be,Xe)=>{let[Ke,ot]=B[Xe]??[0,0];be.position.set(me[0]+Ke,me[1],me[2]+ot)}),Q(Se))},"placeWalker"),fadeMarker:l((ee,me)=>{let ie=g.get(ee),xe=Math.min(1,Math.max(0,me));if(!(ie===void 0||xe===(ie.opacity??1))){if(ie.opacity=xe,ie.faded??=new Map,xe===1){Vy(ge(ie.drawn),ie.faded);return}$l(ge(ie.drawn),xe,ie.faded)}},"fadeMarker"),wake:l((ee,me,ie=[])=>{let xe=E.get(ee);if(me===null){xe?.drawn.forEach(Xe=>S.remove(Xe)),xe?.shape.dispose(),E.delete(ee);return}let Se=new Ot;Se.setAttribute("position",new Mt(Float32Array.from(ie),3));let be=xe??{at:me,shape:Se,make:l(()=>new bt(be.shape,y),"make"),drawn:[]};xe===void 0?(be.drawn=j(be,S,B),E.set(ee,be)):(xe.shape.dispose(),xe.shape=Se,xe.drawn.forEach(Xe=>{Xe.geometry=Se})),be.at=me,be.drawn.forEach((Xe,Ke)=>{let[ot,je]=B[Ke]??[0,0];Xe.position.set(me[0]+ot,me[1],me[2]+je)})},"wake"),puff:l((ee,me,ie=0)=>{let xe=v.get(ee);if(me===null){xe?.drawn.forEach(Xe=>S.remove(Xe)),v.delete(ee);return}let Se=Number(ee.replace(/\D/g,""))||0,be=xe??{at:me,through:ie,seed:Se,make:l(()=>{let Xe=new rn;return s0(0,Se).forEach(({shade:Ke})=>Xe.add(new bt(A,C[Ke]))),Xe},"make"),drawn:[]};xe===void 0&&(be.drawn=j(be,S,B),v.set(ee,be)),be.at=me,be.through=ie,be.drawn.forEach((Xe,Ke)=>{let[ot,je]=B[Ke]??[0,0];Xe.position.set(me[0]+ot,me[1],me[2]+je)}),pe(be)},"puff"),fadeWalker:l((ee,me)=>{let ie=x.get(ee),xe=Math.min(1,Math.max(0,me));ie===void 0||xe===ie.opacity||(ie.opacity=xe,$l(ie.drawn,xe,ie.faded))},"fadeWalker"),setYields:l(ee=>{$?.drawn.forEach(me=>P.remove(me)),$=null,D.set(ee)!==null&&($={at:[0,0,0],make:l(()=>D.make(),"make"),drawn:[]},$.drawn=j($,P))},"setYields"),view:l((ee,me,ie=e)=>{let[xe,Se]=ee.focus,[be,Xe,Ke]=Ld(ee,me),{near:ot,far:je}=Dd(ee.distance);a.position.set(be,Xe,Ke),a.lookAt(xe,me,Se),a.far=je*1.2,a.near=Math.max(.1,ee.distance*.02),a.updateProjectionMatrix(),U.near=ot,U.far=je;let St=ee.distance*2.2,lt=h.shadow.camera;h.position.set(xe+30,me+40,Se+20),h.target.position.set(xe,me,Se),lt.left=-St,lt.right=St,lt.top=St,lt.bottom=-St,lt.near=Math.max(.5,ib-St*1.6),lt.far=ib+St*1.6,lt.updateProjectionMatrix(),O.follow(xe,Se,je*2.2,h.position.clone().sub(h.target.position)),X.follow(xe,Se,je*2.2),O.pastThePoles(ie.v!==null),X.pastThePoles(ie.v!==null),m.clippingPlanes=ie.v===null?b:null,H=ie.v===null;let wt=tb(ee.focus,je,ie),Dt=`${wt.join(";")}${H?" stopped":""}`,at=tb(ee.focus,Math.min(je,ee.distance*2.2),ie),z=at.join(";");Dt!==ne&&(Y=wt,ne=Dt,p.forEach(Je=>{Je.drawn.forEach(et=>o.remove(et)),Je.drawn=j(Je,o)}),f.forEach(Je=>{Je.drawn.forEach(et=>o.remove(et)),Je.drawn=he(Je)}),$!==null&&($.drawn.forEach(Je=>P.remove(Je)),$.drawn=j($,P))),D.lean(ee.pitch),z!==J&&(B=at,J=z,[...g.values(),...x.values(),...v.values(),...E.values()].forEach(Je=>{Je.drawn.forEach(et=>S.remove(et)),Je.drawn=j(Je,S,B)}),x.forEach(Q),v.forEach(pe),x.forEach(Je=>{Je.opacity<1&&$l(Je.drawn,Je.opacity,Je.faded)}),g.forEach(Je=>{Je.faded!==void 0&&(Je.opacity??1)<1&&$l(ge(Je.drawn),Je.opacity??1,Je.faded)}))},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{p.forEach(({geometry:ee})=>ee.dispose()),p.clear(),f.forEach(({geometry:ee})=>ee.dispose()),f.clear(),m.dispose(),g.forEach(({faded:ee})=>ee!==void 0&&po(ee)),g.clear(),x.forEach(({faded:ee})=>po(ee)),x.clear(),v.clear(),E.forEach(({shape:ee})=>ee.dispose()),E.clear(),y.dispose(),A.dispose(),C.forEach(ee=>ee.dispose()),L.dispose(),D.dispose(),O.dispose(),X.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var Ir=1/Math.sqrt(3),sb=1.5*Ir,vC=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),MC=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,Ir+s*sb],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Ir],[a+.5,o-Ir/2],[a+.5,o+Ir/2],[a,o+Ir],[a-.5,o+Ir/2],[a-.5,o-Ir/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-Ir,[c,u]=vC(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*sb:null}),"period")}},"hexOddRLayout"),ab=MC;var SC=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),ob=SC;var ji=Math.SQRT2/2,wC=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*ji,(s+1)*ji],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-ji],[a+ji,o],[a,o+ji],[a-ji,o]]},"outline"),tileAt:l((r,s)=>{let a=r/ji,o=s/ji,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*ji,v:t?i*ji:null}),"period")}},"staggeredIsoLayout"),lb=wC;var cb={square:ob,"staggered-iso":lb,"hex-odd-r":ab},EC=l(i=>{if(!Object.prototype.hasOwnProperty.call(cb,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return cb[i.topologyId](i)},"groundLayoutFor"),ub=EC;var Ql=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Fd=.65,L0=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Lr=.22,Od=.12,D0={low:.2,high:.5},hb=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,p=u*u+h*h,f=p===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/p)),m=Ql(Math.hypot(i-t-u*f,e-n-h*f)),_=1-f;return m===0?-1/0:m*m*(r+(o-r)*(1-_*_*_)+c)},"halfRidge"),ec=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),AC=l((i,e,t)=>({u:(ec(i,e,t,1)*2-1)*Lr,v:(ec(i,e,t,2)*2-1)*Lr,scale:.75+ec(i,e,t,3)*.5}),"peakOf"),TC=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=Wn([Ki({cell:.7,period:o,seed:t}),Ki({cell:.35,period:o,seed:t+1}),Ki({cell:.17,period:o,seed:t+2})]),u=Wn([Ki({cell:.45,period:o,seed:t+3}),Ki({cell:.22,period:o,seed:t+4})]),h=l((B,J)=>1-2*Math.abs(u(B,J)),"ridged"),p=Ki({cell:.8,period:o,seed:t+5}),f=Ki({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},_=[],b=[],g=[],x=[],v=[],A=l((B,J)=>{let H=(B%r+r)%r;return!a&&(J<0||J>=s)?null:(J%s+s)%s*r+H},"index"),M=l(B=>{let J=new Array(r*s).fill(1/0),H=[];B.forEach(($,j)=>{$&&(J[j]=0,H.push([j%r,Math.floor(j/r)]))});for(let[$,j]of H){let he=J[j*r+$]??1/0;he>=Ji.reach||n.neighbours($,j).forEach(([ge,Q])=>{let pe=Q*r+ge;(J[pe]??1/0)>he+1&&(J[pe]=he+1,H.push([ge,Q]))})}return J},"distancesFromLand"),C=l((B,J)=>{let H=n.terrainAt(B,J);return`${H}${H!=="Unknown"&&n.waterAt(B,J)?" water":""}`},"readAs"),E=l(B=>{if(B!==void 0&&b.length>0&&B.every(([le,de])=>{let ue=A(le,de);return ue===null||b[ue]===C(le,de)}))return[];let J=[],H=[],$=[];for(let le=0;le<s;le++)for(let de=0;de<r;de++){let ue=n.terrainAt(de,le);J.push(ue),H.push(ue!=="Unknown"&&n.waterAt(de,le)),$.push(Xs(ue))}let j=M(J.map((le,de)=>le!=="Unknown"&&!H[de])),he=J.map((le,de)=>`${le}${H[de]?" water":""}`),ge=[];he.forEach((le,de)=>{b[de]!==le&&ge.push([de%r,Math.floor(de/r)])}),b=he,_=$.map((le,de)=>{let ue=le===md,ee=de%r,me=Math.floor(de/r),ie=AC(ee,me,t);if(!H[de])return{relief:le.relief,colour:L0(le.colour),surface:In.indexOf(le.surface),water:!1,unknown:ue,peak:ie};let xe=Math.min(j[de]??1/0,Ji.reach),Se=Ji.shore+(Ji.deep-Ji.shore)*Math.max(0,xe-1)/Math.max(1,Ji.reach-1);return{relief:{...le.relief,base:Se},colour:L0(le.colour),surface:In.indexOf("sand"),water:!0,unknown:ue,peak:ie}});let Q=v,pe=new Map(ge.map(([le,de])=>[`${le},${de}`,[le,de]]));return v=_.map(({relief:le,unknown:de},ue)=>!de&&!H[ue]&&le.shape==="peaked"),ge.some(([le,de])=>{let ue=de*r+le;return v[ue]===!0||Q[ue]===!0})&&([g,x]=X()),ge.forEach(([le,de])=>{let ue=de*r+le;v[ue]!==!0&&Q[ue]!==!0||n.neighbours(le,de).forEach(([ee,me])=>{let ie=A(ee,me);ie!==null&&v[ie]===!0&&pe.set(`${ee},${me}`,[ee,me])})}),[...pe.values()]},"refresh"),y=l(B=>{let[J,H]=i.centre(0,B);return Math.max(...i.outline(0,B).map(([$,j])=>Math.hypot($-J,j-H)))},"cornerOf"),S=l((B,J)=>{let[H,$]=i.centre(0,B),j=[];for(let he=-8;he<=8;he++)for(let ge=-6;ge<=6;ge++){let[Q,pe]=i.centre(ge,B+he);Math.hypot(Q-H,pe-$)<J+1e-9&&j.push([ge,he])}return j},"offsetsWithin"),L=l((B,J,H,$)=>{if(r>=6&&(!a||s>=6)){let le=l((ee,me)=>{let ie=(ee%me+me)%me;return ie*2<me?ie:ie-me},"nearest"),de=le(H-B,r),ue=a?le($-J,s):$-J;return de===0&&ue===0?[]:[[de,ue]]}let j=l((le,de)=>{let ue=(le%de+de)%de;return ue===0?[0]:[ue,ue-de]},"copies"),[he,ge]=i.centre(B,J),Q=j(H-B,r).flatMap(le=>(a?j($-J,s):[$-J]).flatMap(de=>{if(le===0&&de===0)return[];let[ue,ee]=i.centre(B+le,J+de);return[[le,de,Math.hypot(ue-he,ee-ge)]]})),pe=Math.min(...Q.map(([,,le])=>le));return Q.filter(([,,le])=>le<=pe+1e-9).map(([le,de])=>[le,de])},"stepsTo"),P=Math.max(...[0,1].flatMap(B=>{let[J,H]=i.centre(0,B);return n.neighbours(0,B).flatMap(([$,j])=>L(0,B,$,j).map(([he,ge])=>{let[Q,pe]=i.centre(he,B+ge);return Math.hypot(Q-J,pe-H)}))}),1),D=[0,1].map(B=>{let[J,H]=i.centre(0,B);return S(B,P+Lr*Math.SQRT2+Od+1.2+Math.max(y(0),y(1))).flatMap(([$,j])=>{let[he,ge]=i.centre($,B+j);return[$,j,he-J,ge-H]})}),O=l((B,J,H,$,j,he)=>{let ge=j-H,Q=he-$,pe=ge*ge+Q*Q,le=pe===0?0:Math.max(0,Math.min(1,((B-H)*ge+(J-$)*Q)/pe));return Math.hypot(B-H-ge*le,J-$-Q*le)},"toSegment"),X=l(()=>{let B=_.map(()=>[]),J=_.map(()=>[]),H=Math.max(y(0),y(1));return e?(_.forEach(($,j)=>{if(v[j]!==!0)return;let he=j%r,ge=Math.floor(j/r),[Q,pe]=i.centre(he,ge),le=new Map;n.neighbours(he,ge).forEach(([de,ue])=>{let ee=A(de,ue);ee!==null&&v[ee]===!0&&L(he,ge,de,ue).forEach(([me,ie])=>le.set(`${me},${ie}`,[me,ie,ee]))}),le.forEach(([de,ue,ee])=>{let me=_[ee];if(me===void 0||ue<0||ue===0&&de<0)return;let[ie,xe]=i.centre(he+de,ge+ue),{peak:Se,relief:be}=$,{peak:Xe,relief:Ke}=me,ot=Se.u,je=Se.v,St=ie-Q+Xe.u,lt=xe-pe+Xe.v,wt=be.base*Fd*Se.scale,Dt=Ke.base*Fd*Xe.scale,at=Math.hypot(St-ot,lt-je)||1,z=16+(ue+2)*5+(de+2),Je=(ec(he,ge,t,z)*2-1)*Od,et=D0.low+(D0.high-D0.low)*ec(he,ge,t,z+32),st=(ot+St)/2-(lt-je)/at*Je,ye=(je+lt)/2+(St-ot)/at*Je,mt=Math.max(Math.hypot(ot-st,je-ye),Math.hypot(St-st,lt-ye))+1.2,ze={au:ot,av:je,ah:wt,mu:st,mv:ye,mh:et*Math.min(wt,Dt),bu:St,bv:lt,bh:Dt,roughness:(be.roughness+Ke.roughness)/2,cu:st,cv:ye,reach:mt*mt},We=(Math.sqrt(ze.reach)+H)**2,I=D[ge&1]??[];for(let w=0;w<I.length;w+=4){let q=I[w+2],fe=I[w+3];if((q-st)**2+(fe-ye)**2>=We||Math.min(O(q,fe,ot,je,st,ye),O(q,fe,st,ye,St,lt))>=1.2+H)continue;let ae=A(he+I[w],ge+I[w+1]);ae!==null&&(B[ae]?.push(ze),J[ae]?.push(q,fe))}})}),[B,J]):[B,J]},"ranges"),U=l(B=>{let[J,H]=i.centre(0,B),$=Math.max(...i.outline(0,B).map(([he,ge])=>Math.hypot(he-J,ge-H))),j=[];for(let he=-6;he<=6;he++)for(let ge=-4;ge<=4;ge++){let[Q,pe]=i.centre(ge,B+he);Math.hypot(Q-J,pe-H)<1.2+$+Lr*Math.SQRT2+1e-9&&j.push([ge,he])}return j},"offsetsFor"),Y=[U(0),U(1)],ne=l((B,J)=>{let[H,$]=i.tileAt(B,J),j=A(H,$),he=j===null?null:_[j]??null;if(he===null||he.unknown)return{height:0,colour:L0(md.colour),surfaces:In.map(()=>0),shore:0,unseen:!0};let ge=null,Q=null,pe=l(wt=>wt==="rolling"?ge??=c(B,J):Q??=h(B,J),"noiseHere"),le=0,de=0,ue=0,ee=0,me=In.map(()=>0),ie=0,xe=0,Se=0,be=0,Xe=0,Ke=B+Lr*p(B,J),ot=J+Lr*f(B,J);(Y[$&1]??[]).forEach(([wt,Dt])=>{let at=H+wt,z=$+Dt,Je=A(at,z);if(Je===null)return;let et=_[Je];if(et===void 0)return;let[st,ye]=i.centre(at,z),{relief:mt,colour:ze,peak:We,surface:I}=et,w=Ql(Math.hypot(B-st,J-ye)),q=mt.shape==="peaked"?Ql(Math.hypot(B-st-We.u,J-ye-We.v)):0,fe=Ql(Math.hypot(Ke-st,ot-ye))**3;if(w>0){let ae=m[mt.shape],Me=ae===null?0:mt.roughness*pe(ae);mt.shape==="peaked"?de+=w*(mt.base*(1-Fd)+Me*.5):de+=w*(mt.base+Me),le+=w}if(q>0){let ae=mt.roughness*pe("ridged");ue+=q*q*(mt.base*Fd*We.scale+ae*.5)}ee+=fe,et.unknown||(me[I]=(me[I]??0)+fe,ie+=fe,xe+=et.water?fe:0),Se+=fe*ze[0],be+=fe*ze[1],Xe+=fe*ze[2]});let je=j===null?[]:g[j]??[],St=j===null?[]:x[j]??[],lt=ue;if(je.length>0){let[wt,Dt]=i.centre(H,$);je.forEach((at,z)=>{let Je=B-wt+(St[z*2]??0),et=J-Dt+(St[z*2+1]??0);if((Je-at.cu)**2+(et-at.cv)**2>=at.reach)return;let st=at.roughness*pe("ridged")*.5;lt=Math.max(lt,hb(Je,et,at.au,at.av,at.ah,at.mu,at.mv,at.mh,st),hb(Je,et,at.bu,at.bv,at.bh,at.mu,at.mv,at.mh,st))})}return{height:(le>0?de/le:0)+lt,colour:ee>0?[Se/ee,be/ee,Xe/ee]:he.colour,surfaces:ie>0?me.map(wt=>wt/ie):In.map((wt,Dt)=>Dt===he.surface?1:0),shore:ie>0?xe/ie:he.water?1:0,unseen:!1}},"sample");return E(),{sample:ne,height:l((B,J)=>ne(B,J).height,"height"),refresh:E}},"createRelief"),db=TC;var fb=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),pb=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((L,P)=>[L*a,P*o],"at"),p=r+3,f=new Float64Array(p*(s+3)),m=(r+1)*(s+1),_=new Float32Array(m*3),b=new Uint8Array(m*4),g=new Uint8Array(m*4),x=new Uint8Array(m),v=new Float32Array(m);for(let L=-1;L<=s+1;L++)for(let P=-1;P<=r+1;P++){let D=e.sample(...h(c+P,u+L)),{height:O,colour:X}=D;if(f[(L+1)*p+(P+1)]=O,P>=0&&P<=r&&L>=0&&L<=s){let U=L*(r+1)+P;_.set(X,U*3),D.surfaces.forEach((Y,ne)=>{(ne<4?b:g)[U*4+ne%4]=Math.round(Y*255)}),x[U]=Math.round(D.shore*255),v[U]=D.unseen?1:0}}let A=l((L,P)=>f[(P+1)*p+(L+1)]??0,"height"),M=new Float32Array(m*3),C=new Float32Array(m*3),[E,y]=h(c,u);for(let L=0;L<=s;L++)for(let P=0;P<=r;P++){let D=L*(r+1)+P,[O,X]=h(c+P,u+L),U=(A(P+1,L)-A(P-1,L))/(2*a),Y=(A(P,L+1)-A(P,L-1))/(2*o),ne=Math.hypot(U,1,Y);M[D*3]=O-E,M[D*3+1]=A(P,L),M[D*3+2]=X-y,C[D*3]=-U/ne,C[D*3+1]=1/ne,C[D*3+2]=-Y/ne}let S=new Uint32Array(r*s*6);for(let L=0;L<s;L++)for(let P=0;P<r;P++){let D=L*(r+1)+P,O=D+1,X=D+r+1,U=X+1,Y=(L*r+P)*6;S.set([D,X,O,O,X,U],Y)}return{u:E,v:y,positions:M,normals:C,colours:_,surfacesA:b,surfacesB:g,shore:x,unseen:v,indices:S}},"buildChunk"),mb=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,p]=e.centre(c,u);for(let f=Math.floor((h-n)/r);f<=Math.floor((h+n)/r);f++)for(let m=Math.floor((p-n)/s);m<=Math.floor((p+n)/s);m++){if(!a&&(m<0||m>=i.chunksV))continue;let _=(f%i.chunksU+i.chunksU)%i.chunksU,b=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${_},${b}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var $n=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),gb={Forest:{plants:[$n("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[$n("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),$n("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[$n("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),$n("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[$n("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[$n("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[$n("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[$n("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),$n("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[$n("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[$n("rock",2,[.7,1.1],"#a8936a","#a8936a"),$n("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},yo=l(i=>Object.prototype.hasOwnProperty.call(gb,i)?gb[i]:null,"growthOf");var xb=["Ocean"],CC=["Mountains"],RC=["Mine","Fortress","Airbase"],PC=["River"],gn=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),IC=["Irrigation","Farmland","Fortress","Airbase"],_b=l(i=>i.city||IC.some(e=>gn(i,e))?null:yo(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),LC=l((i,e)=>{if(i.city){let f=i.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:i.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:yy(u0(String(f.id??f.name??"")),f.growth?.size??1,e.filter(({tile:m})=>gn(m,"Road")&&(gn(i,"Road")||gn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>xb.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=gn(i,"Road"),n=gn(i,"Railroad"),r=t?e.filter(f=>gn(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||gn(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,m)=>f[0]===m[0]&&f[1]===m[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(f=>!n||!s.some(m=>a(m,f))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:gn(i,"Farmland")?"farmland":gn(i,"Irrigation")?"irrigation":null,mine:gn(i,"Mine"),fortress:gn(i,"Fortress"),airbase:gn(i,"Airbase"),pollution:gn(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!PC.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:yo(i.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},u=_b(i),h=i.terrain?._??"Unknown";return i.isWater!==!0&&!xb.includes(h)&&h!=="Unknown"&&!CC.includes(h)&&!RC.some(f=>gn(i,f))&&(c.suburbs=e.flatMap(({offset:f,tile:{city:m}})=>{let _=m?My(m.growth?.size??1):0;return m&&_>0?[{seed:u0(String(m.id??m.name??"")),steps:_,city:f}]:[]}).sort((f,m)=>f.seed-m.seed||f.city[0]-m.city[0]||f.city[1]-m.city[1])),c.suburbs.length>0&&(c.beside=e.filter(({tile:{city:f}})=>!!f).map(({offset:f})=>f)),u!==null&&(c.woods=e.filter(f=>_b(f.tile)===u).map(({offset:f})=>f)),(u!==null||c.suburbs.length>0)&&(c.paths=e.filter(f=>!!f.tile.city||gn(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation&&c.suburbs.length===0?null:c},"overlayFor"),yb=LC;var Ut=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),bb={Coal:Ut("rocks","#26262a",4),Gold:Ut("rocks","#d8b13a",3),Gems:Ut("rocks","#59c2d6",4,"#b05ad0"),Iron:Ut("rocks","#8a5a44",4),Wheat:Ut("crop","#d9b84a",5,"#a88a2c"),Spice:Ut("crop","#c0452e",4,"#5d7a2a"),Wine:Ut("crop","#6a2c5e",4,"#5d7a2a"),Silk:Ut("crop","#e9e2cf",3,"#4f7a34"),Fruit:Ut("crop","#e08a2a",4,"#3f7a2a"),Horse:Ut("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Ut("animal","#4a3424",3,"#2a1e16"),Game:Ut("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Ut("animal","#8f7e66",2,"#e8e2d6"),Furs:Ut("animal","#b0602a",2,"#f0e8dc"),Ivory:Ut("animal","#8a8580",1,"#f2ead8"),Seal:Ut("animal","#6e7072",2,"#4a4c4e"),Pheasant:Ut("bird","#8a3a22",2,"#3d6a3a"),Fish:Ut("fish","#b8c4cc",5),Whales:Ut("whale","#3a4048",1),Oil:Ut("derrick","#222224",1,"#121214"),Oasis:Ut("oasis","#3f7a32",3,"#3f86a8"),Peat:Ut("peat","#4a3624",4),Shield:Ut("logs","#7a5532",4,"#c9a47a")},DC=Ut("cairn","#9a9690",5),vb=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(bb,n)?bb[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??DC},"specialLook");var z0=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Tn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},vo=.06,Mb="#8c7a58",Sb="#5f5953",NC="#a9abae",UC="#5e432b",FC="#4f87b0",OC="#7da33f",BC=["#c2b448","#8fae3e"],wb="#9d968a",kC="#4a4c50",O0="#6b4a2e",zC="#7a6a58",GC="#b89a5a",VC="#c9b48e",Eb="#34322a",An=new Hi(1,1,1),Mo=new Wi(.5,.5,1,8),G0=new Tr(.5,1,8),Nb=new Tr(.5,1,4),bo=new is(.5,8,6),tc=new Wi(.5,.5,1,4,1,!0),nc=new Tr(.5,1,5,1,!0),Bd=new is(.5,5,3),N0={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},HC=.05,WC=.22,Ab=72,oi=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Tb=new Map,kd=l(i=>{let e=Tb.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Be(i);e=[t,n,r],Tb.set(i,e)}return e},"colourOf"),Cb=new WeakMap,XC=l(i=>{let e=Cb.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Cb.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),qC=new yt,YC=new Ze,$C=new W,ZC=new Mn,JC=new kn,KC=new W,Ct,Ub,Bt,X0=class X0{constructor(e,t){V(this,Ct);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=kd(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/vo)),u=Math.max(1,Math.ceil(n/vo)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],p=l((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<c;f++)for(let m=0;m<u;m++){let[_,b]=p(f/c,(m+1)/u),[g,x]=p((f+1)/c,(m+1)/u),[v,A]=p(f/c,m/u),[M,C]=p((f+1)/c,m/u);R(this,Ct,Bt).call(this,_,b,s,a),R(this,Ct,Bt).call(this,g,x,s,a),R(this,Ct,Bt).call(this,v,A,s,a),R(this,Ct,Bt).call(this,g,x,s,a),R(this,Ct,Bt).call(this,M,C,s,a),R(this,Ct,Bt).call(this,v,A,s,a)}}ribbon(e,t,n,r,s){let a=kd(n),o=e.map((c,u)=>{let h=e[u-1]??c,p=e[u+1]??c,[f,m]=s?.[u]??[p[0]-h[0],p[1]-h[1]],_=Math.hypot(f,m);return _===0?[0,0]:[-m/_*t,f/_*t]});for(let c=0;c+1<e.length;c++){let u=e[c],h=e[c+1],p=o[c],f=o[c+1],m=Math.hypot(h[0]-u[0],h[1]-u[1]);if(m===0)continue;let _=Math.max(1,Math.ceil(m/vo)),b=Math.max(1,Math.ceil(t/vo)),g=l((x,v)=>[u[0]+(h[0]-u[0])*x+(p[0]+(f[0]-p[0])*x)*(v-.5),u[1]+(h[1]-u[1])*x+(p[1]+(f[1]-p[1])*x)*(v-.5)],"at");for(let x=0;x<_;x++)for(let v=0;v<b;v++){let[A,M]=g(x/_,(v+1)/b),[C,E]=g((x+1)/_,(v+1)/b),[y,S]=g(x/_,v/b),[L,P]=g((x+1)/_,v/b);R(this,Ct,Bt).call(this,A,M,r,a),R(this,Ct,Bt).call(this,C,E,r,a),R(this,Ct,Bt).call(this,y,S,r,a),R(this,Ct,Bt).call(this,C,E,r,a),R(this,Ct,Bt).call(this,L,P,r,a),R(this,Ct,Bt).call(this,y,S,r,a)}}}disc(e,t,n,r,s=12){let a=kd(n),[o,c]=e,u=Math.max(1,Math.ceil(t/vo)),h=l((p,f)=>{let m=f/s*Math.PI*2,_=p/u*t;return[o+Math.cos(m)*_,c+Math.sin(m)*_]},"at");for(let p=0;p<u;p++)for(let f=0;f<s;f++){let m=h(p+1,f),_=h(p+1,f+1);if(p===0)R(this,Ct,Bt).call(this,o,c,r,a),R(this,Ct,Bt).call(this,..._,r,a),R(this,Ct,Bt).call(this,...m,r,a);else{let b=h(p,f),g=h(p,f+1);R(this,Ct,Bt).call(this,...b,r,a),R(this,Ct,Bt).call(this,...g,r,a),R(this,Ct,Bt).call(this,...m,r,a),R(this,Ct,Bt).call(this,...g,r,a),R(this,Ct,Bt).call(this,..._,r,a),R(this,Ct,Bt).call(this,...m,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=XC(e),c=qC.compose($C.set(...t),ZC.setFromEuler(JC.set(...s)),KC.set(...n)),u=c.elements,h=YC.getNormalMatrix(c).elements,[p,f,m]=kd(r),_=this.soup;for(let b=0;b<a.length;b+=3){let g=a[b],x=a[b+1],v=a[b+2],A=o[b],M=o[b+1],C=o[b+2],E=h[0]*A+h[3]*M+h[6]*C,y=h[1]*A+h[4]*M+h[7]*C,S=h[2]*A+h[5]*M+h[8]*C,L=Math.hypot(E,y,S)||1;_.positions.push(u[0]*g+u[4]*x+u[8]*v+u[12],u[1]*g+u[5]*x+u[9]*v+u[13],u[2]*g+u[6]*x+u[10]*v+u[14]),_.normals.push(E/L,y/L,S/L),_.colours.push(p,f,m)}}spot(e,t){let n=oi(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-WC-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,pR(e,t,o,c)-HC-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=oi(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Ab;h++){let p=r+h/Ab*Math.PI*2,f=[s+Math.cos(p)*u*this.place.radius,a+Math.sin(p)*u*this.place.radius],m=this.clearance(f[0],f[1],n);if(m>=0)return this.taken.push([f[0],f[1],n]),f;m>c&&(o=f,c=m)}return this.taken.push([o[0],o[1],n]),o}};Ct=new WeakSet,Ub=l(function(e,t){let r=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,s=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),Bt=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...R(this,Ct,Ub).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(X0,"Layer");var B0=X0,Gd=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),V0=l(i=>i.alone||i.joins.length>0,"drawn"),jC=.09,QC=8,k0=l(([i,e])=>300+(i+3)*7+(e+3),"wayIndex"),Vd=l((i,e)=>{let[t,n]=i.centre,[r,s]=Gd(i,e),a=r-t,o=s-n,c=Math.hypot(a,o);if(c===0)return{points:[[t,n]],ways:[[0,0]]};let u=(oi(i.seed,k0(e))*2-1)*jC*c/(4/9),h=[-o/c,a/c],p=[t+a/3+h[0]*u,n+o/3+h[1]*u],f=[t+a*2/3,n+o*2/3],m=Math.max(QC,Math.ceil(c*1.02/vo)),_=Array.from({length:m+1},(b,g)=>g/m);return{points:_.map(b=>{let g=(1-b)**3,x=3*(1-b)**2*b,v=3*(1-b)*b**2,A=b**3;return[g*t+x*p[0]+v*f[0]+A*r,g*n+x*p[1]+v*f[1]+A*s]}),ways:_.map(b=>{let g=3*(1-b)**2,x=6*(1-b)*b,v=3*b**2,A=g*(p[0]-t)+x*(f[0]-p[0])+v*(r-f[0]),M=g*(p[1]-n)+x*(f[1]-p[1])+v*(s-f[1]),C=Math.hypot(A,M);return C===0?[a/c,o/c]:[A/C,M/C]})}},"roadHalf"),eR=l((i,e)=>{let{place:t}=i;V0(e)&&(e.joins.forEach(n=>{let{points:r,ways:s}=Vd(t,n);i.ribbon(r,.07,Mb,Tn.road,s)}),i.disc(t.centre,e.alone?.09:.035,Mb,Tn.road))},"road"),tR=l((i,e)=>{if(!V0(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>Gd(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,Sb,Tn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,UC,Tn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,NC,Tn.rail))}),i.disc(t.centre,.05,Sb,Tn.ballast)},"railroad"),U0=.04,nR=l((i,e,t,n,r)=>{let s=r.filter(c=>Math.min(...c.map(([,u])=>u))-Lt<t+n/2&&Math.max(...c.map(([,u])=>u))+Lt>t-n/2).map(c=>[Math.min(...c.map(([u])=>u))-Lt,Math.max(...c.map(([u])=>u))+Lt]).sort((c,u)=>c[0]-u[0]),a=[],o=i;return s.forEach(([c,u])=>{c-o>=U0&&a.push([o,Math.min(c,e)]),o=Math.max(o,u)}),e-o>=U0&&a.push([o,e]),a.filter(([c,u])=>u-c>=U0)},"rowAround"),iR=l((i,e,t)=>{let{centre:n,inner:r}=i.place,s=e==="farmland"?6:4,a=r*.9,o=a*2/s,c=l((u,h,p,f)=>nR(n[0]-a,n[0]+a,u,h,t).forEach(([m,_])=>i.strip([m,u],[_,u],h,p,f)),"across");for(let u=0;u<s;u++)c(n[1]-a+o*(u+.5),o*.8,e==="farmland"?BC[u%2]:OC,Tn.field),u>0&&c(n[1]-a+o*u,.016,FC,Tn.field+.001)},"fields"),Rb=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],Pb="#a39a88",rR="#c4b8a2",sR=.045,Ib=.86,aR=l((i,e)=>{let{place:t}=i,[n,r]=t.centre,{plaza:s,streets:a,lots:o}=by(t,e,[n,r+fo]);i.disc(s.at,s.radius,Pb,Tn.road,16),a.forEach(([c,u])=>i.strip(c,u,Gl,Pb,Tn.road)),o.forEach(c=>Fb(i,c))},"city"),Fb=l((i,e)=>{let{at:[t,n],width:r,facing:s,storeys:a}=e,o=[[t,n],...oo(e)].map(([h,p])=>i.ground(h,p)),c=Math.min(...o)-.005,u=Math.max(...o)+sR*a;i.solid(An,[t,(c+u)/2,n],[r*Ib,u-c,r*Ib],rR,[0,s,0]),i.solid(Nb,[t,u+r*.2,n],[r*Math.SQRT2,r*.4,r*Math.SQRT2],Rb[Math.floor(e.roof*Rb.length)],[0,s+Math.PI/4,0])},"house"),oR=l((i,e)=>{if(e.suburbs.length===0)return[];let{place:t}=i,n=l((o,c)=>o[0]===c[0]&&o[1]===c[1],"same"),r=l(o=>{let[c,u]=t.toward(o);return[c,u+fo]},"standOf"),s={runs:[...i.runs],lines:[...i.past],lanes:e.beside.filter(o=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(c=>n(c,o))).map(o=>[[t.centre[0],t.centre[1]],r(o)]),stands:e.beside.map(r),taken:i.taken,ground:l((o,c)=>t.heightAt(o,c),"ground")};return e.suburbs.flatMap(o=>Sy(t,o,{...s,others:e.beside.filter(c=>!n(c,o.city)).map(c=>t.toward(c))})).map(o=>(Fb(i,o),i.taken.push([o.at[0],o.at[1],o.width/2*Math.SQRT2]),oo(o)))},"suburbs"),lR=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(An,[e-.02,n+.05,t],[.01,.11,.01],O0,[0,0,-.3]),i.solid(An,[e+.02,n+.05,t],[.01,.11,.01],O0,[0,0,.3]),i.solid(Mo,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid(G0,[a,i.ground(a,o)+.02,o],[.07,.04,.07],zC)})},"mine"),cR=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(An,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],wb)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(Mo,[o,i.ground(o,c)+.035,c],[.045,.07,.045],wb)})},"fortress"),uR=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,kC,Tn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Tn.road+.004),i.solid(An,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),hR=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Eb,Tn.smear,14),i.disc(i.spot(7,.5),e*.25,Eb,Tn.smear+.001)},"pollution"),dR=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(oi(i.place.seed,n*31+o*2)-.5)*c,t[1]+(oi(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),p=oi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(bo,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,p,0]);break;case"crop":i.solid(Mo,[c,h+.02,u],[.008,.04,.008],r),i.solid(bo,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let f=e.count===1?1.5:1;i.solid(An,[c,h+.04*f,u],[.035*f,.03*f,.07*f],e.colour,[0,p,0]),i.solid(An,[c+Math.sin(p)*.04*f,h+.055*f,u+Math.cos(p)*.04*f],[.022*f,.024*f,.03*f],r,[0,p,0]),i.solid(An,[c,h+.013*f,u],[.03*f,.026*f,.055*f],r,[0,p,0]);break}case"bird":i.solid(bo,[c,h+.02,u],[.03,.025,.04],e.colour,[0,p,0]),i.solid(An,[c-Math.sin(p)*.03,h+.025,u-Math.cos(p)*.03],[.008,.006,.04],r,[.4,p,0]);break;case"fish":i.solid(bo,[c,h+.006,u],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":i.solid(bo,[c,h,u],[.07,.05,.2],e.colour,[0,p,0]),i.solid(An,[c-Math.sin(p)*.11,h+.02,u-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":i.solid(An,[c,h+.008,u],[.08,.016,.08],r),i.solid(Nb,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,Tn.field+.002);{let[f,m]=s(o+5,.1),_=i.ground(f,m);i.solid(Mo,[f,_+.06,m],[.012,.12,.012],O0),i.solid(G0,[f,_+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Mo:An,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:i.solid(bo,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),fR=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+oi(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(Mo,[r,a+.02,s],[.05,.04,.05],VC),i.solid(G0,[r,a+.055,s],[.065,.035,.065],GC)})},"hut"),Ob={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Bb=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(tc,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(nc,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(nc,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(tc,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(Bd,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(tc,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(nc,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(tc,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(An,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(Bd,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(nc,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(nc,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(Bd,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(An,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(Bd,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(tc,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(An,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),pR=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),mR=l((i,e)=>{let t=yo(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,p=o.size[0]+(o.size[1]-o.size[0])*oi(s,h),f=t.conifers,m=f!==void 0&&oi(s,h+1)>=f[0]+(f[1]-f[0])*a?"broadleaf":o.kind,_=Ob[m]*p;for(let b=0;b<6;b++){let g=oi(s,h+2+b*2)*Math.PI*2,x=Math.sqrt(oi(s,h+3+b*2))*r*.92,v=n[0]+Math.cos(g)*x,A=n[1]+Math.sin(g)*x;if(i.hasRoom(v,A,_)){Bb(i,o,m,v,A,p,g),i.taken.push([v,A,_]),i.grown.push([v,A,m]);break}}}})},"plants"),F0=.26,Lb=.3,gR=.15,Db=.5,zd=[.9,1.3],ia=l((i,e,t)=>oi(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),xR=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/F0)),p=o.u/h,f=o.v===null?null:Math.max(1,Math.round(o.v/F0)),m=o.v===null||f===null?F0:o.v/f,_=r.map(([y])=>y),b=r.map(([,y])=>y),[g,x]=[Math.floor(Math.min(..._)/p)-1,Math.ceil(Math.max(..._)/p)],[v,A]=[Math.floor(Math.min(...b)/m)-1,Math.ceil(Math.max(...b)/m)],M=a.filter(([y,S])=>!i.woods.some(([L,P])=>L===y&&P===S)).map(y=>{let[S,L]=c(y),P=Math.hypot(S-n[0],L-n[1]);return{mu:S,mv:L,length:P}}),C=t.plants.reduce((y,{count:S})=>y+S,0),E=[];for(let y=v;y<=A;y++)for(let S=g;S<=x;S++){let L=(S%h+h)%h,P=f===null?y:(y%f+f)%f,D=(S+.5+(ia(L,P,0)*2-1)*Lb)*p,O=(y+.5+(ia(L,P,1)*2-1)*Lb)*m;if(!s(D,O))continue;let X=M.reduce((H,{mu:$,mv:j,length:he})=>{let ge=he/2-((D-n[0])*($-n[0])+(O-n[1])*(j-n[1]))/he;return Math.min(H,Math.max(0,ge)/gR)},1);if(ia(L,P,2)>=Db+(1-Db)*X)continue;let U=ia(L,P,3)*C,Y=t.plants[0];for(let H of t.plants)if(Y=H,U-=H.count,U<0)break;let ne=t.conifers,B=ne!==void 0&&ia(L,P,4)>=ne[0]+(ne[1]-ne[0])*u?"broadleaf":Y.kind,J=Y.size[0]+(Y.size[1]-Y.size[0])*ia(L,P,5);E.push({u:D,v:O,kind:B,plant:Y,room:Ob[B]*J*zd[1],size:J*(zd[0]+(zd[1]-zd[0])*X),facing:ia(L,P,6)*Math.PI*2})}return E},"woodsPlants"),_R=l((i,e)=>{let{centre:t,around:n,toward:r}=i.place,s=Math.max(...n.map(o=>{let[c,u]=r(o);return Math.hypot(c-t[0],u-t[1])})),a=e.paths.map(o=>r(o));a.forEach((o,c)=>a.slice(c+1).forEach(u=>{Math.hypot(u[0]-o[0],u[1]-o[1])<=s+1e-6&&(i.lines.push([o,u]),i.past.push([o,u]))}))},"pathsPast"),yR=l((i,e,t)=>{let{heightAt:n}=i.place;xR(e,i.place,t).forEach(({u:r,v:s,kind:a,plant:o,size:c,room:u,facing:h})=>{a!=="reeds"&&n(r,s)<0||i.hasRoom(r,s,u)&&(Bb(i,o,a,r,s,c,h),i.grown.push([r,s,a]))})},"woods"),H0=l((i,e,t)=>{let n=new B0(t,e),{centre:r,radius:s}=e;if(i.city!==null)return aR(n,i.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([i.road,i.railroad].forEach(c=>{c!==null&&V0(c)&&(c.joins.forEach(u=>{if(c===i.road){let h=Vd(e,u).points;h.slice(1).forEach((p,f)=>n.lines.push([h[f],p])),n.runs.push({key:k0(u),points:h});return}n.lines.push([r,Gd(e,u)]),n.runs.push({key:k0(u)+100,points:[r,Gd(e,u)]})}),c.alone&&n.lines.push([r,r]))}),i.fortress){let c=s*.62,u=[[-c,-c],[c,-c],[c,c],[-c,c]].map(([h,p])=>[r[0]+h,r[1]+p]);u.forEach((h,p)=>n.lines.push([h,u[(p+1)%4]]))}if(i.airbase){let c=s*.75;n.lines.push([[r[0]-c,r[1]+.12],[r[0]+c,r[1]+.12]])}i.road!==null&&eR(n,i.road),i.railroad!==null&&tR(n,i.railroad),i.mine&&lR(n,n.claim(...N0.mine,.1)),i.fortress&&cR(n),i.airbase&&uR(n),i.pollution&&hR(n),i.specials.forEach(([c,u],h)=>dR(n,vb(c,u),n.claim(...N0.special(h),.1),h+1)),i.hut&&fR(n,n.claim(...N0.hut,.13)),_R(n,i);let a=oR(n,i);i.irrigation!==null&&iR(n,i.irrigation,a);let o=yo(i.terrain);return o!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(o.canopy!==void 0?yR(n,i,o):mR(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),bR=l((i,e,t)=>{let n=z0();return t.forEach(({overlay:r,place:s})=>H0(r,s,n)),W0(i,e,n)},"overlayMesh"),W0=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),kb=bR;var zb=l((i,e)=>Math.imul(i,73856093)^Math.imul(e,19349663),"squareSeed"),ds,xn,Ri,rc,Pi,Zn,Cn,So,sc,ac,ra,oc,lc,vt,Gb,Y0,Hd,$0,Wd,Xd,Vb,ic,Z0=class Z0{constructor(e){V(this,vt);V(this,ds);V(this,xn);V(this,Ri,[]);V(this,rc);V(this,Pi);V(this,Zn,new Set);V(this,Cn,null);V(this,So,null);V(this,sc,new Map);V(this,ac,l(()=>{},"#keptCity"));V(this,ra,[0,0]);V(this,oc);V(this,lc);G(this,Pi,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=ub({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),G(this,ds,db({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:l((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:l((f,m)=>t.directions().map(_=>t.neighbour(f,m,_)).filter(_=>_!==null),"neighbours")}})),G(this,xn,fb(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-a,m-o))),u=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[_,b]=this.layout.centre(f,m);return Math.hypot(_-a,b-o)}));G(this,rc,1.2+c+Lr*Math.SQRT2+Math.max((Ji.reach-1)*u,u/2+Lr*Math.SQRT2+Od));let h=this.layout.outline(0,0),p=h.flatMap(([f,m],_)=>{let[b,g]=h[(_+1)%h.length],x=Math.hypot(b-f,g-m);return x===0?[]:[{away:Math.abs((b-f)*(o-m)-(g-m)*(a-f))/x,normal:[(g-m)/x,(f-b)/x]}]});G(this,oc,Math.min(...p.map(({away:f})=>f))),G(this,lc,Math.min(...p.map(({away:f,normal:[m,_]})=>f/(Math.abs(m)+Math.abs(_)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=d(this,xn),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((b,g)=>{let x=`${b},${g}`,v=n.get(x);return v===void 0&&(v=d(this,ds).height(b*r,g*s),n.set(x,v)),v},"at"),p=h(a,o),f=h(a+1,o),m=h(a,o+1);if(c+u<=1)return p+(f-p)*c+(m-p)*u;let _=h(a+1,o+1);return _+(m-_)*(1-c)+(f-_)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,xn);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return d(this,xn).chunksV*d(this,xn).stepsV*d(this,xn).spacingV}heightAt(e,t){return d(this,ds).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=d(this,xn),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);G(this,Ri,R(this,vt,ic).call(this,s,e,t)),G(this,ra,[e,t]),s.forEach(a=>d(this,Zn).add(a))}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];G(this,ra,[t,n]),(e.length===0?[...R(this,vt,Xd).call(this).values()].flat():R(this,vt,Vb).call(this,e)).forEach(([o,c])=>{let u=R(this,vt,Wd).call(this,o,c);if(d(this,Zn).has(u)||d(this,Cn)?.key===u&&!R(this,vt,Gb).call(this,d(this,Cn),o,c))return;JSON.stringify(R(this,vt,Hd).call(this,o,c))!==(d(this,sc).get(`${o},${c}`)??"null")&&d(this,Zn).add(u)});let s=d(this,ds).refresh(r?void 0:e);if(s.length===0)return s;let a=mb(d(this,xn),this.layout,s,d(this,rc)).map(([o,c])=>`${o},${c}`);return G(this,Ri,R(this,vt,ic).call(this,[...new Set([...d(this,Ri),...a])],t,n)),s}refocus(e,t){G(this,Ri,R(this,vt,ic).call(this,d(this,Ri),e,t)),G(this,ra,[e,t])}pending(){return d(this,Ri).length}overlaysPending(){return d(this,Zn).size+(d(this,Cn)===null||d(this,Zn).has(d(this,Cn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;d(this,Ri).length>0;){if(r())return;let s=d(this,Ri).shift(),[a,o]=s.split(",").map(Number);e.setChunk(a,o,pb(d(this,xn),d(this,ds),a,o)),d(this,Zn).add(s)}for(;d(this,Zn).size>0||d(this,Cn)!==null;){if(d(this,Cn)!==null&&d(this,Zn).has(d(this,Cn).key)&&G(this,Cn,null),d(this,Cn)===null){let f=R(this,vt,ic).call(this,[...d(this,Zn)],...d(this,ra))[0];d(this,Zn).delete(f),G(this,Cn,{key:f,squares:R(this,vt,Xd).call(this).get(f)??[],done:0,laid:z0(),heights:new Map})}let s=d(this,Cn);for(;s.done<s.squares.length;){let[f,m]=s.squares[s.done],_=R(this,vt,$0).call(this,f,m,s.heights);if(s.done++,_!==null&&H0(_.overlay,_.place,s.laid),s.done<s.squares.length&&r())return}let[a,o]=s.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:p}=d(this,xn);G(this,Cn,null),e.setOverlay(a,o,s.laid.positions.length===0?null:W0(a*c*h,o*u*p,s.laid))}}keepCities(e){G(this,ac,e)}roadPath(e,t,n,r){let s=d(this,Pi).topology(),a=l((M,C,E,y)=>{let S=s.directions().find(L=>{let P=s.neighbour(M,C,L);return P!==null&&P[0]===E&&P[1]===y});return S===void 0?null:s.offset(S,M,C)},"offsetTo"),o=a(e,t,n,r),c=a(n,r,e,t);if(o===null||c===null)return null;let u=l((M,C,E)=>{let y=R(this,vt,Hd).call(this,M,C),S=l(P=>P!==null&&P.joins.some(([D,O])=>D===E[0]&&O===E[1]),"joins"),L=this.layout.centre(M,C);if(S(y?.road??null))return Vd({centre:L,toward:l(([P,D])=>this.layout.centre(M+P,C+D),"toward"),seed:zb(M,C)},E).points;if(S(y?.railroad??null)){let[P,D]=this.layout.centre(M+E[0],C+E[1]);return[[L[0],L[1]],[(L[0]+P)/2,(L[1]+D)/2]]}return null},"half"),h=u(e,t,o),p=u(n,r,c);if(h===null&&p===null)return null;let f=this.layout.centre(e,t),m=this.layout.centre(n,r),_=this.layout.centre(e+o[0],t+o[1]),b=this.layout.centre(n+c[0],r+c[1]),g=[(f[0]+_[0])/2,(f[1]+_[1])/2],x=[(m[0]+b[0])/2,(m[1]+b[1])/2],v=[x[0]-g[0],x[1]-g[1]];return[...(h??[f,g]).map(([M,C])=>[M+v[0],C+v[1]]),...(p??[m,x]).slice(0,-1).reverse()].map(([M,C])=>[M-m[0],C-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,xn),o=new Map,c=(R(this,vt,Xd).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>R(this,vt,$0).call(this,u,h,o)??[]);return c.length===0?null:kb(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return R(this,vt,Wd).call(this,e,t)}};ds=new WeakMap,xn=new WeakMap,Ri=new WeakMap,rc=new WeakMap,Pi=new WeakMap,Zn=new WeakMap,Cn=new WeakMap,So=new WeakMap,sc=new WeakMap,ac=new WeakMap,ra=new WeakMap,oc=new WeakMap,lc=new WeakMap,vt=new WeakSet,Gb=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),Y0=l(function(e,t){let n=d(this,Pi).get(e,t),r=d(this,ac).call(this,e,t);return r===void 0?n:{...n,city:r}},"#shownAt"),Hd=l(function(e,t){let n=d(this,Pi).topology();return yb(R(this,vt,Y0).call(this,e,t),n.directions().flatMap(r=>{let s=n.neighbour(e,t,r);return s===null?[]:[{offset:n.offset(r,e,t),tile:R(this,vt,Y0).call(this,s[0],s[1])}]}))},"#overlayAt"),$0=l(function(e,t,n){let r=R(this,vt,Hd).call(this,e,t);if(d(this,sc).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=d(this,Pi).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:d(this,oc),inner:d(this,lc),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:zb(e,t),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,p]=this.layout.tileAt(c,u);return h===e&&p===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),Wd=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=d(this,xn),[u,h]=this.layout.centre(e,t),p=Math.floor(u/(s*o)),f=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,p))},${Math.min(r-1,Math.max(0,f))}`},"#chunkOf"),Xd=l(function(){if(d(this,So)===null){let e=new Map;for(let t=0;t<d(this,Pi).height();t++)for(let n=0;n<d(this,Pi).width();n++){let r=R(this,vt,Wd).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}G(this,So,e)}return d(this,So)},"#chunksOfSquares"),Vb=l(function(e){let t=d(this,Pi).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),ic=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=d(this,xn),c=r*a,u=s*o,{u:h,v:p}=this.layout.period(),f=l((_,b)=>Math.abs(b===null?_:_-b*Math.round(_/b)),"round"),m=l(_=>{let[b,g]=_.split(",").map(Number);return Math.hypot(f((b+.5)*c-t,h),f((g+.5)*u-n,p))},"distance");return[...e].sort((_,b)=>m(_)-m(b))},"#nearestFirst"),l(Z0,"Land");var q0=Z0,Hb=q0;var vR=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ii=vR;var Wb=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var MR=8,SR=.92,wR=.02,Xb=3,ER=50,AR=8,TR=10,qb=250,cc,uc,wo,Eo,sa,fs,J0=class J0{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){V(this,cc);V(this,uc);V(this,wo);V(this,Eo);V(this,sa,!1);V(this,fs);this.pointerId=e,G(this,cc,t),G(this,uc,n),G(this,wo,t),G(this,Eo,n),G(this,fs,[{x:t,y:n,time:r}])}dragging(){return d(this,sa)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!d(this,sa)&&Math.hypot(t-d(this,cc),n-d(this,uc))<MR)return null;let s=!d(this,sa),a=d(this,wo)-t,o=d(this,Eo)-n;return G(this,sa,!0),G(this,wo,t),G(this,Eo,n),d(this,fs).push({x:t,y:n,time:r}),d(this,fs).length>20&&d(this,fs).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return Wb(d(this,fs),e)}};cc=new WeakMap,uc=new WeakMap,wo=new WeakMap,Eo=new WeakMap,sa=new WeakMap,fs=new WeakMap,l(J0,"Press");var qd=J0,Qi,hc,K0=class K0{constructor(e){V(this,Qi,null);V(this,hc);G(this,hc,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>Xb?Xb/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<wR){G(this,Qi,null);return}d(this,hc).call(this,-r*u,-s*u);let h=Math.pow(SR,u/16);r*=h,s*=h,G(this,Qi,window.requestAnimationFrame(o))},"step");G(this,Qi,window.requestAnimationFrame(o))}gliding(){return d(this,Qi)!==null}stop(){d(this,Qi)!==null&&(window.cancelAnimationFrame(d(this,Qi)),G(this,Qi,null))}};Qi=new WeakMap,hc=new WeakMap,l(K0,"Glide");var Yd=K0,aa,dc,fc,Ao,j0=class j0{constructor(){V(this,aa,0);V(this,dc,0);V(this,fc,-1/0);V(this,Ao,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=qb)return 0;let s=Math.sign(r),a=e.timeStamp-d(this,fc)>qb||s!==d(this,dc);if(G(this,fc,e.timeStamp),G(this,dc,s),a&&(G(this,aa,0),G(this,Ao,0)),n&&!e.ctrlKey&&d(this,Ao)>=TR)return 0;if(!a&&n){if(G(this,aa,d(this,aa)+r),Math.abs(d(this,aa))<(e.ctrlKey?AR:ER))return 0;G(this,aa,0)}return n&&!e.ctrlKey&&G(this,Ao,d(this,Ao)+1),r<0?1:-1}};aa=new WeakMap,dc=new WeakMap,fc=new WeakMap,Ao=new WeakMap,l(j0,"WheelTurn");var $d=j0;var CR=350,RR=.006,Yb=.004,er,on,Rn,To,tr,Li,jd,ci,ui,ps,Co,Jn,ms,Ne,li,Zd,Jd,$b,eg,Dr,tg,Zb,Nr,Jb,Kb,jb,Qb,pc,ev,tv,nv,Kd,ng=class ng{constructor(e,t,n=null){V(this,Ne);V(this,er);V(this,on);V(this,Rn,null);V(this,To,[0,0]);V(this,tr,null);V(this,Li);V(this,jd,new $d);V(this,ci,new Map);V(this,ui,null);V(this,ps,null);V(this,Co,[]);V(this,Jn);V(this,ms,null);G(this,er,e),G(this,on,t),G(this,Jn,n),G(this,Li,new Yd((r,s)=>{let[a,o]=R(this,Ne,$b).call(this);R(this,Ne,tg).call(this,[a,o],[a-r,o-s])})),R(this,Ne,li).call(this,"pointerdown",r=>R(this,Ne,Zb).call(this,r)),R(this,Ne,li).call(this,"pointermove",r=>R(this,Ne,Kb).call(this,r)),R(this,Ne,li).call(this,"pointerup",r=>R(this,Ne,jb).call(this,r)),R(this,Ne,li).call(this,"pointercancel",r=>R(this,Ne,Qb).call(this,r)),R(this,Ne,li).call(this,"wheel",r=>R(this,Ne,tv).call(this,r),{passive:!1}),R(this,Ne,li).call(this,"gesturestart",r=>R(this,Ne,Kd).call(this,r,"start"),{passive:!1}),R(this,Ne,li).call(this,"gesturechange",r=>R(this,Ne,Kd).call(this,r,"change"),{passive:!1}),R(this,Ne,li).call(this,"gestureend",r=>R(this,Ne,Kd).call(this,r,"end"),{passive:!1}),R(this,Ne,li).call(this,"contextmenu",r=>R(this,Ne,Jb).call(this,r)),R(this,Ne,li).call(this,"pointerleave",()=>d(this,Jn)?.hover(null)),R(this,Ne,li).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return d(this,Rn)?.dragging()===!0||d(this,tr)!==null}moving(){return this.dragging()||d(this,ui)!==null||d(this,Li).gliding()}dispose(){d(this,Li).stop(),R(this,Ne,Nr).call(this),d(this,Co).forEach(([e,t,n])=>d(this,er).removeEventListener(e,t,n)),G(this,Co,[])}};er=new WeakMap,on=new WeakMap,Rn=new WeakMap,To=new WeakMap,tr=new WeakMap,Li=new WeakMap,jd=new WeakMap,ci=new WeakMap,ui=new WeakMap,ps=new WeakMap,Co=new WeakMap,Jn=new WeakMap,ms=new WeakMap,Ne=new WeakSet,li=l(function(e,t,n){d(this,er).addEventListener(e,t,n),d(this,Co).push([e,t,n])},"#listen"),Zd=l(function(){return{width:d(this,er).clientWidth||1,height:d(this,er).clientHeight||1}},"#box"),Jd=l(function([e,t]){let{width:n,height:r}=R(this,Ne,Zd).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),$b=l(function(){let{width:e,height:t}=R(this,Ne,Zd).call(this);return[e/2,t/2]},"#middle"),eg=l(function(){let{width:e,height:t}=R(this,Ne,Zd).call(this);return e/t},"#aspect"),Dr=l(function(e){let t=d(this,er).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),tg=l(function(e,t){d(this,on).setOrbit(Xy(d(this,on).orbit(),d(this,on).lookHeight(),R(this,Ne,Jd).call(this,e),R(this,Ne,Jd).call(this,t),R(this,Ne,eg).call(this)))},"#pan"),Zb=l(function(e){if(d(this,Li).stop(),d(this,Jn)?.hover(null),e.pointerType==="touch"&&(d(this,ci).set(e.pointerId,R(this,Ne,Dr).call(this,e)),d(this,ci).size===2)){G(this,Rn,null),R(this,Ne,Nr).call(this),G(this,ui,R(this,Ne,pc).call(this));return}if(e.isPrimary&&e.button!==2){if(d(this,er).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),G(this,tr,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new qd(e),[n,r]=R(this,Ne,Dr).call(this,e),{clientX:s,clientY:a}=e;G(this,Rn,t),G(this,To,[n,r]),R(this,Ne,Nr).call(this),G(this,ms,window.setTimeout(()=>{G(this,ms,null),d(this,Rn)===t&&!t.dragging()&&d(this,Jn)?.menu(n,r,s,a,!0)===!0&&G(this,Rn,null)},CR))}}},"#down"),Nr=l(function(){d(this,ms)!==null&&(window.clearTimeout(d(this,ms)),G(this,ms,null))},"#stopHold"),Jb=l(function(e){if(d(this,Jn)===null||!d(this,Jn).menuOnRightClick()||(e.preventDefault(),d(this,Jn).menuOpen()))return;let[t,n]=R(this,Ne,Dr).call(this,e);d(this,Jn).menu(t,n,e.clientX,e.clientY,!1)&&(R(this,Ne,Nr).call(this),G(this,Rn,null))},"#rightClick"),Kb=l(function(e){if(d(this,ci).has(e.pointerId)&&(d(this,ci).set(e.pointerId,R(this,Ne,Dr).call(this,e)),d(this,ui)!==null)){R(this,Ne,ev).call(this);return}let t=d(this,tr);if(t!==null&&t.pointerId===e.pointerId){let s=d(this,on).orbit();d(this,on).setOrbit(ea({...s,yaw:s.yaw-(e.clientX-t.x)*RR,pitch:s.pitch+(e.clientY-t.y)*Yb})),t.x=e.clientX,t.y=e.clientY;return}let n=d(this,Rn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!d(this,Li).gliding()){let[s,a]=R(this,Ne,Dr).call(this,e);d(this,Jn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;R(this,Ne,Nr).call(this);let r=R(this,Ne,Dr).call(this,e);R(this,Ne,tg).call(this,d(this,To),r),G(this,To,r)},"#move"),jb=l(function(e){if(d(this,ci).delete(e.pointerId),d(this,ui)!==null){G(this,ui,d(this,ci).size<2?null:R(this,Ne,pc).call(this));return}if(d(this,tr)?.pointerId===e.pointerId){G(this,tr,null);return}let t=d(this,Rn);if(!(t===null||t.pointerId!==e.pointerId)){if(G(this,Rn,null),R(this,Ne,Nr).call(this),!t.dragging()){let[n,r]=R(this,Ne,Dr).call(this,e);d(this,Jn)?.click(n,r,e.clientX,e.clientY);return}Ii()||d(this,Li).start(t.releaseVelocity(e.timeStamp))}},"#up"),Qb=l(function(e){d(this,ci).delete(e.pointerId),d(this,ui)!==null&&G(this,ui,d(this,ci).size<2?null:R(this,Ne,pc).call(this)),d(this,Rn)?.pointerId===e.pointerId&&(G(this,Rn,null),R(this,Ne,Nr).call(this)),d(this,tr)?.pointerId===e.pointerId&&G(this,tr,null)},"#cancel"),pc=l(function(){let[e,t]=[...d(this,ci).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:d(this,on).orbit()}},"#measurePair"),ev=l(function(){let e=d(this,ui),t=R(this,Ne,pc).call(this);e===null||t===null||d(this,on).setOrbit(ea({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*Yb}))},"#twoFingers"),tv=l(function(e){e.preventDefault();let t=d(this,jd).turned(e,d(this,ps)?.at??null);t!==0&&(d(this,Li).stop(),R(this,Ne,nv).call(this,t,R(this,Ne,Dr).call(this,e)))},"#wheelTurned"),nv=l(function(e,t){let n=d(this,on).orbit(),r=go(n,e),s=mo(n,d(this,on).lookHeight(),R(this,Ne,Jd).call(this,t),R(this,Ne,eg).call(this));if(s===null||r.distance===n.distance){d(this,on).setOrbit(r);return}let a=1-r.distance/n.distance;d(this,on).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),Kd=l(function(e,t){if(e.preventDefault(),d(this,ui)!==null){G(this,ps,null);return}if(t==="end"){G(this,ps,null);return}if(t==="start"){d(this,Li).stop(),G(this,Rn,null),R(this,Ne,Nr).call(this),G(this,ps,{orbit:d(this,on).orbit(),at:e.timeStamp});return}let n=d(this,ps);n!==null&&(n.at=e.timeStamp,d(this,on).setOrbit(ea({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(ng,"CameraInput");var Q0=ng,iv=Q0;var PR=["#9a9a9a","#4a4a4a"],mc=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?PR:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),ig=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),IR=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),LR=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=ig(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:mc(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:mc(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:p})=>p==="Fortified"),veteran:(o.improvements??[]).some(({_:p})=>p==="Veteran"),health:IR(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h,inCity:!!i.city}},"markerFor"),rg=LR;var lv={step:250,ramp:100,most:2e3},cv={step:125,ramp:50,most:1e3},uv=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),DR=50,rv=.3,sv=1,NR=.05,UR=.02,sg=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),av=l((i,e)=>{let{started:t,from:n,speed:r,rising:s,rise:a,top:o,going:c,stopping:u,fall:h,to:p}=i,f=Math.max(0,e-t);if(f<s)return{along:n+r*f+a*f*f/2,speed:r+a*f};let m=n+(r+o)/2*s;if(f<s+c)return{along:m+o*(f-s),speed:o};let _=m+o*c,b=f-s-c;return b<u?{along:_+o*b-h*b*b/2,speed:o-h*b}:{along:p,speed:0}},"motionAt"),gc=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),ov=l((i,e,t,n,r)=>{let s=Math.max(0,n-e),a=Math.max(1,r.ramp),o=Math.max(1/r.step,r.most>a*2?s/(r.most-a):0),c=o/a;if(s<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=s){let g=2*s/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:g,fall:t/g,to:n}}let u=Math.min(o,Math.sqrt(c*s+t*t/2)),h=Math.abs(u-t)/c,p=u>=t?c:-c,f=u/c,m=(t+u)/2*h,_=u*f/2,b=Math.max(0,(s-m-_)/u);return{started:i,from:e,speed:t,rising:h,rise:p,top:u,going:b,stopping:f,fall:c,to:n}},"plan"),Ro=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),xc=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),ag=l(i=>i*i*(3-2*i),"eased"),Po=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),Io,_n,hi,bc,vc,nt,hv,dv,lg,cg,fv,ug,Qd,_c,yc,hg,oa,dg=class dg{constructor(e){V(this,nt);V(this,Io);V(this,_n,new Map);V(this,hi,new Map);V(this,bc,[]);V(this,vc,0);G(this,Io,e)}walking(e){return d(this,hi).has(e)}size(){return d(this,_n).size}step(e,t,n,r,s,a,o,c=!1){let u=d(this,hi).get(e),h=u===void 0?void 0:d(this,_n).get(u),p=h===void 0?r:R(this,nt,Qd).call(this,h,a),f=h===void 0?0:R(this,nt,yc).call(this,h,R(this,nt,_c).call(this,h,a)),m=[...d(this,_n).values()].find(_=>_!==h&&(c||!_.flies)&&R(this,nt,hv).call(this,_,t,n,a)&&R(this,nt,fv).call(this,R(this,nt,Qd).call(this,_,_.stepped),h===void 0?r:R(this,nt,Qd).call(this,h,_.stepped))&&rv*Math.abs(ag(R(this,nt,yc).call(this,_,R(this,nt,_c).call(this,_,a)))-ag(f))<UR);if(m!==void 0)return h!==void 0&&R(this,nt,cg).call(this,h,e),m.units.push(e),d(this,hi).set(e,m.id),m.id;if(h!==void 0&&sg(h.squares[h.squares.length-1],t)){if(h.units.length>1){let _={...h,id:`walk-${++xi(this,vc)._}`,units:h.units.filter(b=>b!==e),points:[...h.points],squares:[...h.squares]};d(this,_n).set(_.id,_),_.units.forEach(b=>d(this,hi).set(b,_.id)),h.units=[e]}return R(this,nt,lg).call(this,h,n,s,a,o,c),h.id}return h!==void 0&&R(this,nt,cg).call(this,h,e),R(this,nt,dv).call(this,e,t,n,p,s,a,o,{flies:c,climbed:f})}at(e){let t=[],n=[];return d(this,_n).forEach(r=>{let s=R(this,nt,oa).call(this,r,e);if(e>=gc(r.motion)){n.push(s),R(this,nt,ug).call(this,r);return}t.push(s)}),{going:t,ended:n}}dropped(){return d(this,bc).splice(0)}endsAt(e){let t=d(this,hi).get(e),n=t===void 0?void 0:d(this,_n).get(t);return n===void 0?null:gc(n.motion)}nextEnd(){let e=null;return d(this,_n).forEach(t=>{let n=gc(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return d(this,_n).forEach(r=>{e(r.units)&&(n.push(R(this,nt,oa).call(this,r,Math.max(t,gc(r.motion)))),R(this,nt,ug).call(this,r))}),n}endAll(e){let t=[...d(this,_n).values()].map(n=>R(this,nt,oa).call(this,n,Math.max(e,gc(n.motion))));return d(this,_n).clear(),d(this,hi).clear(),t}};Io=new WeakMap,_n=new WeakMap,hi=new WeakMap,bc=new WeakMap,vc=new WeakMap,nt=new WeakSet,hv=l(function(e,t,n,r){let s=e.squares.length-1;return s>0&&r-e.stepped<=DR&&sg(e.squares[s-1],t)&&sg(e.squares[s],n)},"#justMade"),dv=l(function(e,t,n,r,s,a,o,{flies:c,climbed:u}){let h=`walk-${++xi(this,vc)._}`,p={id:h,units:[e],from:t,points:[r],squares:[t],stepped:a,motion:ov(a,0,0,0,o),turned:null,flies:c,flown:0,climb:{from:u,at:0}};return d(this,_n).set(h,p),d(this,hi).set(e,h),R(this,nt,lg).call(this,p,n,s,a,o,c),h},"#setOff"),lg=l(function(e,t,n,r,s,a){let{u:o,v:c}=d(this,Io),u=e.points[e.points.length-1],h=u.middle??u.at,{along:p,speed:f}=av(e.motion,r),m=Math.max(0,Math.floor(p)-1),_=e.points.length>1?R(this,nt,oa).call(this,e,r).facing:null,b=e.points.length-1,g=p-(b-1),x=R(this,nt,_c).call(this,e,r);e.points.length>1&&(e.climb={from:R(this,nt,yc).call(this,e,x),at:e.flown+x}),e.flies=a,u.middle!==void 0&&g*Math.hypot(u.middle[0]-u.at[0],u.middle[1]-u.at[1])<.01&&(e.points[b]={at:u.middle,lift:0,middle:u.middle,...u.via===void 0?{}:{via:u.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[Ro(n.at[0],u.at[0],o),Ro(n.at[1],u.at[1],c)],lift:n.lift,...n.middle===void 0?{}:{middle:[Ro(n.middle[0],h[0],o),Ro(n.middle[1],h[1],c)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=r,e.motion=ov(r,p-m,f,e.points.length-1,s),e.turned=null,_!==null&&(e.turned={offset:Po(0,_-R(this,nt,oa).call(this,e,r).facing,1),at:r,over:s.step/2})},"#goOn"),cg=l(function(e,t){e.units=e.units.filter(n=>n!==t),d(this,hi).delete(t),e.units.length===0&&(d(this,_n).delete(e.id),d(this,bc).push(e.id))},"#leave"),fv=l(function(e,t){let{u:n,v:r}=d(this,Io);return Math.hypot(Ro(e.at[0],t.at[0],n)-t.at[0],Ro(e.at[1],t.at[1],r)-t.at[1])<NR},"#beside"),ug=l(function(e){d(this,_n).delete(e.id),e.units.forEach(t=>d(this,hi).delete(t))},"#end"),Qd=l(function(e,t){let{at:n,lift:r}=R(this,nt,oa).call(this,e,t);return{at:n,lift:r}},"#drawn"),_c=l(function(e,t){return Math.min(e.points.length-1,Math.max(0,av(e.motion,t).along))},"#along"),yc=l(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/sv,(e.points.length-1-t)/sv)):0},"#climbed"),hg=l(function(e,t,n){let r=e.points[t],s=e.points[t+1]??r,a=l(g=>g.middle??g.at,"middle");if(s.via===void 0||s.via.length===0)return{at:[r.at[0]+(s.at[0]-r.at[0])*n,r.at[1]+(s.at[1]-r.at[1])*n],way:s===r?null:xc(a(r),a(s))};let[o,c]=a(s),u=[r.at,...s.via.map(([g,x])=>[o+g,c+x]),s.at],h=u.slice(1).map((g,x)=>Math.hypot(g[0]-u[x][0],g[1]-u[x][1])),p=h.reduce((g,x)=>g+x,0),f=xc(a(r),a(s)),m=u.slice(1).map((g,x)=>xc(u[x],g)??f??0),_=u.map((g,x)=>{let v=m[x-1],A=m[x];return v===void 0?A:A===void 0?v:Po(v,A,.5)}),b=Math.min(1,Math.max(0,n))*p;for(let g=0;g<h.length;g++){let x=h[g],v=u[g],A=u[g+1];if(b<=x||g===h.length-1){let M=x===0?0:Math.min(1,b/x);return{at:[v[0]+(A[0]-v[0])*M,v[1]+(A[1]-v[1])*M],way:Po(_[g],_[g+1],M)}}b-=x}return{at:[s.at[0],s.at[1]],way:xc(a(r),a(s))}},"#stepAt"),oa=l(function(e,t){let{points:n,squares:r,turned:s}=e,a=n.length-1,o=R(this,nt,_c).call(this,e,t),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],p=n[c+1]??h,{at:f,way:m}=R(this,nt,hg).call(this,e,c,u),_=l((M,C)=>M<0||M>=a?null:R(this,nt,hg).call(this,e,M,C).way,"way"),b=l(M=>{let C=_(M,1),E=_(M+1,0);return C===null||E===null?null:Po(0,E-C,1)},"turnAt"),g=m??0,x=xc(h.middle??h.at,p.middle??p.at),v=(()=>{if(u>.75){let M=b(c);if(M!==null)return g+M*(u-.75)*2;if(c===a-1&&x!==null)return Po(g,x,(u-.75)*4)}else if(u<.25){let M=b(c-1);if(M!==null)return g-M*(.5-u*2);if(c===0&&x!==null)return Po(x,g,u*4)}return g})(),A=s!==null&&t-s.at<s.over?v+s.offset*(1-Math.max(0,t-s.at)/s.over):v;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(p.lift-h.lift)*u,aloft:rv*ag(R(this,nt,yc).call(this,e,o)),facing:A,from:e.from,before:r[a-1]??r[a],to:r[a]}},"#walker"),l(dg,"Walks");var og=dg,pv=og;var FR=l(({kind:i,start:e,duration:t},n)=>{let r=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return i==="in"?r:1-r},"fadeAt"),nr,ef,pg=class pg{constructor(){V(this,nr,new Map);V(this,ef,0)}size(){return d(this,nr).size}add(e,t,n=500){let r=`fade-${++xi(this,ef)._}`;return d(this,nr).set(r,{id:r,kind:e,start:t,duration:n}),r}at(e){let t=[],n=[];return d(this,nr).forEach((r,s)=>{if(e>=r.start+r.duration){n.push(s),d(this,nr).delete(s);return}t.push({id:s,kind:r.kind,opacity:FR(r,e)})}),{going:t,ended:n}}end(e){d(this,nr).delete(e)}endAll(){let e=[...d(this,nr).keys()];return d(this,nr).clear(),e}};nr=new WeakMap,ef=new WeakMap,l(pg,"Fades");var fg=pg,mv=fg;var ir,xg=class xg{constructor(){V(this,ir,new Map)}size(){return d(this,ir).size}trail(e,t,n){let r=d(this,ir).get(e),[s,a]=r?.points??[];if(r===void 0||s===void 0||a===void 0||n-a.time>=1200){d(this,ir).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let o=t[0]-a.at[0],c=t[1]-a.at[1],u=Math.hypot(o,c),h=Math.floor(u/.04),[p,f]=a.at,m=a.time;r.points.splice(1,0,...Array.from({length:h},(_,b)=>{let g=(h-b)*.04/u;return{at:[p+o*g,f+c*g],time:m+(n-m)*g}}))}at(e){let t=[],n=[];return d(this,ir).forEach((r,s)=>{if(r.points=r.points.filter(({time:a})=>e-a<1200),r.points.length===0){d(this,ir).delete(s),n.push(s);return}t.push({id:s,points:r.points.map(({at:a,time:o})=>({at:a,age:Math.max(0,e-o)}))})}),{going:t,gone:n}}endAll(){let e=[...d(this,ir).keys()];return d(this,ir).clear(),e}};ir=new WeakMap,l(xg,"Wakes");var gg=xg,mg={start:.03,by:.17,over:.5},OR=.016,BR=.004,gv=l(i=>{let[e]=i,t=[];if(e===void 0)return t;let n=i.map((a,o)=>{let c=i[o-1]??a,u=i[o+1]??a,h=c.at[0]-u.at[0],p=c.at[1]-u.at[1],f=Math.hypot(h,p);return f===0?null:[-p/f,h/f]}),r=i.reduce((a,o,c)=>{let u=i[c-1];return a.push(u===void 0?0:a[c-1]+Math.hypot(o.at[0]-u.at[0],o.at[1]-u.at[1])),a},[]),s=l((a,o)=>{let c=i[a],u=n[a],h=Math.min(1,c.age/1200);if(u==null)return null;let p=mg.start+mg.by*Math.min(1,r[a]/mg.over),f=OR*(1-h),m=[c.at[0]-e.at[0]+u[0]*p*o,c.at[1]-e.at[1]+u[1]*p*o];return[[m[0]-u[0]*f/2,m[1]-u[1]*f/2],[m[0]+u[0]*f/2,m[1]+u[1]*f/2]]},"edges");for(let a=0;a+1<i.length;a++)[1,-1].forEach(o=>{let c=s(a,o),u=s(a+1,o);if(c===null||u===null)return;let[h,p]=c,[f,m]=u;[h,f,p,p,f,m].forEach(([_,b])=>t.push(_,BR,b))});return t},"wakeShape"),xv=gg;var wg={reach:200,back:300,fade:600},_v=l(i=>({reach:i.reach/2,back:i.back/2,fade:i.fade/2}),"quickerBattle"),Eg=.45,Mc=l(i=>i.start+i.pace.reach,"blowAt"),_g=l(i=>Mc(i)+(i.won?Math.max(i.pace.back,i.pace.fade):i.pace.fade),"battleEnds"),yg=l(i=>Math.min(1,Math.max(0,i)),"clamp"),kR=l(i=>i*i,"easeIn"),zR=l(i=>i*i*(3-2*i),"easeInOut"),GR=l((i,e)=>{let{reach:t,back:n,fade:r}=i.pace,s=e-Mc(i),a=1-yg(r<=0?1:s/r);return s<0?{reach:kR(yg(t<=0?1:(e-i.start)/t)),attacker:1,fallen:1}:i.won?{reach:1-zR(yg(n<=0?1:s/n)),attacker:1,fallen:a}:{reach:1,attacker:a,fallen:0}},"battleAt"),bg=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),VR=l((i,e)=>i.attacker===e.attacker||i.attacker===e.defender,"waitsFor"),en,rr,tf,sr,Mg,Sg,yv,Ag=class Ag{constructor(){V(this,sr);V(this,en,[]);V(this,rr,new Set);V(this,tf,0)}size(){return d(this,en).length}attacking(e){return d(this,en).some(t=>t.attacker===e)}fighting(e){return d(this,en).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return d(this,en).find(t=>!d(this,rr).has(t.id)&&bg(t.defenderSquare,e))??null}add(e,t,n,r=t){let s={...e,id:`battle-${++xi(this,tf)._}`,start:R(this,sr,Mg).call(this,e,n,d(this,en),Math.max(t,r)),notBefore:r,pace:n};return d(this,en).push(s),s}at(e){let t=[],n=[],r=[],s=new Set;return d(this,en).forEach(a=>{if(e>=Mc(a)&&!d(this,rr).has(a.id)&&(d(this,rr).add(a.id),n.push(a)),e>=_g(a)){r.push(a);return}t.push(...R(this,sr,yv).call(this,a,e,s))}),R(this,sr,Sg).call(this,r),{going:t,struck:n,ended:r}}endWhere(e,t){let n=d(this,en).filter(e),r=d(this,en).filter((a,o)=>n.includes(a)||!d(this,rr).has(a.id)&&n.some(c=>d(this,en).indexOf(c)>o&&bg(c.defenderSquare,a.defenderSquare))),s=r.filter(a=>!d(this,rr).has(a.id));return s.forEach(a=>d(this,rr).add(a.id)),R(this,sr,Sg).call(this,r),r.length>0&&d(this,en).forEach((a,o)=>{a.start>t&&(a.start=R(this,sr,Mg).call(this,a,a.pace,d(this,en).slice(0,o),Math.max(t,a.notBefore)))}),{struck:s,ended:r}}busyUntil(e){return d(this,en).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,_g(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};en=new WeakMap,rr=new WeakMap,tf=new WeakMap,sr=new WeakSet,Mg=l(function(e,t,n,r){return n.reduce((s,a)=>VR(a,e)?Math.max(s,_g(a)):bg(a.defenderSquare,e.defenderSquare)?Math.max(s,Mc(a)-t.reach):s,r)},"#startOf"),Sg=l(function(e){e.length!==0&&(G(this,en,d(this,en).filter(t=>!e.includes(t))),e.forEach(t=>d(this,rr).delete(t.id)))},"#take"),yv=l(function(e,t,n){let{reach:r,attacker:s,fallen:a}=GR(e,t),{from:o,edge:c,fallsAt:u}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),s>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[o.at[0]+(c[0]-o.at[0])*r,o.at[1]+(c[1]-o.at[1])*r],lift:o.lift*(1-r),facing:e.facing,opacity:s}),e.won&&t>=Mc(e)&&a>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[u.at[0],u.at[1]],lift:u.lift,facing:e.defenderFacing,opacity:a}),h},"#fighters"),l(Ag,"Battles");var vg=Ag,bv=vg;var HR=1,WR=.04,XR=12,qR=l((i,e,t,n,r,{water:s=0,ceiling:a=HR}={})=>{let{from:o,direction:c}=E0(i,e,t,n),[u,h,p]=o,[f,m,_]=c;if(m>-1e-6)return null;let b=l(y=>[u+f*y,h+m*y,p+_*y],"at"),g=l(y=>{let[S,L,P]=b(y);return L-Math.max(s,r(S,P))},"above"),x=Math.max(0,(h-a)/-m),v=(h-s)/-m,A=WR/Math.max(1e-6,Math.hypot(f,_)),M=x;for(let y=x;;y=Math.min(v,y+A)){if(g(y)<=0){let S=M,L=y;for(let O=0;O<XR;O++){let X=(S+L)/2;g(X)>0?S=X:L=X}let[P,,D]=b(L);return[P,D]}if(y>=v)break;M=y}let[C,,E]=b(v);return[C,E]},"pickGround"),vv=qR;var nf=4,gs,Sc,la,ca,Dn,Lo,xs,Ur,wc,Ec,Ac,Di,rf,Mv,Cg,Rg=class Rg{constructor(e,t,n,r,s){V(this,Di);V(this,gs);V(this,Sc);V(this,la);V(this,ca);V(this,Dn);V(this,Lo);V(this,xs);V(this,Ur);V(this,wc);V(this,Ec);V(this,Ac,l(e=>{let t=d(this,gs).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;d(this,Ec).call(this,n*d(this,Dn),r*d(this,Lo))},"#click"));G(this,gs,e),G(this,la,t),G(this,ca,n),G(this,Dn,t.period().u),G(this,Lo,r),G(this,Ec,s),G(this,Ur,document.createElement("canvas"));let{v:a}=t.period();G(this,xs,a),G(this,wc,[[0,0],[-d(this,Dn),0],...a===null?[]:[[0,-a],[-d(this,Dn),-a]]]);let o=Math.max(1,Math.round(d(this,Dn)*nf)),c=Math.max(1,Math.round(d(this,Lo)*nf));[e,d(this,Ur)].forEach(u=>{u.width=o,u.height=c}),G(this,Sc,e.getContext("2d")),e.addEventListener("click",d(this,Ac))}dispose(){d(this,gs).removeEventListener("click",d(this,Ac))}redraw(){let e=d(this,Ur).getContext("2d");if(e===null)return;let t=d(this,ca).width(),n=d(this,ca).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,d(this,Ur).width,d(this,Ur).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=d(this,ca).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Xs(c).colour,d(this,wc).forEach(([p,f])=>{R(this,Di,Mv).call(this,e,a,s,p,f),e.fill()});let[u,h]=d(this,la).centre(a,s);if(o.city)r.push([u,h,mc(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=ig(o.units,null);p!==null&&r.push([u,h,mc(p.player)[0],1.4])}}r.forEach(([s,a,o,c])=>R(this,Di,Cg).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=d(this,Sc);if(n===null)return;if(n.clearRect(0,0,d(this,gs).width,d(this,gs).height),n.drawImage(d(this,Ur),0,0),t!==null){let[h,p]=d(this,la).centre(t.x,t.y);n.fillStyle="#ffffff",R(this,Di,Cg).call(this,h,p).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=d(this,xs),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-d(this,Dn)*Math.floor(s/d(this,Dn)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-d(this,Dn),0,d(this,Dn)].forEach(p=>{n.beginPath(),e.forEach(([f,m],_)=>{let[b,g]=R(this,Di,rf).call(this,f+o+p,m+c+h);_===0?n.moveTo(b,g):n.lineTo(b,g)}),n.closePath(),n.stroke()}))}};gs=new WeakMap,Sc=new WeakMap,la=new WeakMap,ca=new WeakMap,Dn=new WeakMap,Lo=new WeakMap,xs=new WeakMap,Ur=new WeakMap,wc=new WeakMap,Ec=new WeakMap,Ac=new WeakMap,Di=new WeakSet,rf=l(function(e,t){return[e*nf,t*nf]},"#px"),Mv=l(function(e,t,n,r=0,s=0){e.beginPath(),d(this,la).outline(t,n).forEach(([a,o],c)=>{let[u,h]=R(this,Di,rf).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Cg=l(function(e,t){return(d(this,xs)===null?[0]:[-d(this,xs),0,d(this,xs)]).flatMap(r=>[-d(this,Dn),0,d(this,Dn)].map(s=>R(this,Di,rf).call(this,e+s,t+r)))},"#everywhere"),l(Rg,"Minimap3D");var Tg=Rg,Sv=Tg;var YR=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),wv=l(i=>{let e=YR(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var Ev=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),Av=l(i=>i.city??i.workedBy??null,"squareCity");var $R=.9,ZR=l(i=>{let{columns:e,icons:t}=wv(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),JR=l((i,e)=>$R*e/Math.hypot(i,2),"yieldIconSize"),Tv=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),Cv=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=ZR(e);return r.length===0?null:{at:i,size:JR(n,t),slots:r}},"laidYields"),Rv=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:p})=>{let f=r.get(u);f===void 0&&(f=n.names.push(u)-1,r.set(u,f)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=p,n.sizes[s]=o,n.cells[s]=f,s++})}),n},"yieldMesh");var KR=10,jR=4e3,Iv=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),QR=350,e2=2e3,t2=8,Lv=l(i=>({...i,...i.hitPoints?{hitPoints:{...i.hitPoints}}:{},...i.defence?{defence:{...i.defence}}:{},...i.improvements?{improvements:[...i.improvements]}:{}}),"keptUnit"),n2=l(i=>i&&{...i,...i.growth?{growth:{...i.growth}}:{}},"keptCity"),i2=500,r2=.25,s2=400,Xt,Dc,Nc,Ye,At,da,Uc,Fc,ft,Rt,Nn,Fo,Oc,fa,vs,Oo,Bc,kc,Kn,Bo,di,tn,Ui,pa,ma,Un,Fr,fi,Ms,ko,zo,$t,jn,Ss,ar,Or,or,Br,zc,ws,Es,Qn,ga,Go,pi,ei,mi,lr,cr,Gc,Vc,Hc,ur,As,kr,ti,Vo,Ho,zr,Gr,xa,Ts,_a,Wo,Fi,Wc,hr,Cs,Xc,ya,dr,ba,va,qc,Yc,Xo,$c,qo,Zc,Yo,$o,Ma,N,Ig,Dv,Nv,Do,Lg,_s,Uv,Fv,No,sf,Dg,Ng,ys,Ug,af,Fg,Tc,Og,Bg,Ov,Bv,of,Cc,kg,kv,lf,zv,Gv,Vv,cf,Hv,zg,Wv,ua,uf,Xv,qv,Yv,hf,ha,Rc,$v,Zv,Jv,Gg,Uo,Kv,Vg,Pc,bs,Ic,jv,Qv,Hg,Ni,eM,tM,nM,iM,Lc,Wg,rM,sM,Xg,kt,aM,oM,qg,Yg=class Yg{constructor(e,t=rb){V(this,N);V(this,Xt);V(this,Dc);V(this,Nc,[]);V(this,Ye);V(this,At);V(this,da,null);V(this,Uc,0);V(this,Fc,"");V(this,ft);V(this,Rt,null);V(this,Nn,null);V(this,Fo);V(this,Oc);V(this,fa);V(this,vs,null);V(this,Oo,null);V(this,Bc);V(this,kc,!1);V(this,Kn);V(this,Bo);V(this,di,new Map);V(this,tn);V(this,Ui,new Map);V(this,pa,new Map);V(this,ma,new Map);V(this,Un,new Map);V(this,Fr,new Set);V(this,fi,new Map);V(this,Ms,0);V(this,ko,new Map);V(this,zo,new Map);V(this,$t,new bv);V(this,jn,new mv);V(this,Ss,new xv);V(this,ar,new Map);V(this,Or,new Map);V(this,or,new Map);V(this,Br,new Map);V(this,zc,!1);V(this,ws,new Map);V(this,Es,null);V(this,Qn,new Map);V(this,ga,new Map);V(this,Go,new Set);V(this,pi,new Set);V(this,ei);V(this,mi,null);V(this,lr,null);V(this,cr,null);V(this,Gc,l(()=>{R(this,N,ua).call(this)&&G(this,cr,null),R(this,N,uf).call(this)},"#pressed"));V(this,Vc,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||R(this,N,uf).call(this)},"#keyed"));V(this,Hc);V(this,ur,null);V(this,As,null);V(this,kr);V(this,ti,l(()=>{let e=d(this,As);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),G(this,As,null),document.removeEventListener("keydown",d(this,ti),!0),e.open&&d(this,Kn).endTooltip(d(this,Xt)))},"#endHover"));V(this,Vo,null);V(this,Ho,!0);V(this,zr,new Map);V(this,Gr,null);V(this,xa,new Map);V(this,Ts,new Map);V(this,_a,[]);V(this,Wo,0);V(this,Fi,null);V(this,Wc,null);V(this,hr,!0);V(this,Cs);V(this,Xc,l(()=>{},"#stopUnitSize"));V(this,ya,!1);V(this,dr,!0);V(this,ba,!1);V(this,va,new Map);V(this,qc);V(this,Yc,l(()=>{},"#stopArtChanged"));V(this,Xo,!1);V(this,$c);V(this,qo);V(this,Zc,"");V(this,Yo,l(()=>R(this,N,qg).call(this),"#resizeHandler"));V(this,$o,null);V(this,Ma,!1);G(this,Xt,e.mapCanvas),G(this,Dc,e.coveredBy),G(this,$c,e.art),G(this,Bo,{cityName:e.cityName,unitStatus:e.unitStatus}),G(this,Cs,e.unitSize?.get()??1),G(this,qo,e.art.id()),this.world=e.world,G(this,Ye,new Hb(e.world)),d(this,Ye).keepCities((r,s)=>{let a=`${r},${s}`;for(let o of d(this,Qn).values())if(o.square===a)return o.city}),G(this,tn,new pv(d(this,Ye).layout.period())),G(this,ei,e.walks),G(this,qc,Tv(d(this,Ye).layout,e.world.topology())),G(this,_a,e.world.tiles()),G(this,Wo,d(this,_a).length),G(this,Oc,e.cameraDistance),G(this,Bc,e.lockVerticalEdges);let n=e.cameraDistance.get();G(this,ft,R(this,N,Pc).call(this,{...Hy(d(this,Ye).layout.centre(0,0)),...n===null?{}:{distance:n}})),G(this,fa,d(this,ft).distance),this.portal=new cx(e,{centre:l(()=>R(this,N,Kv).call(this),"centre"),centreOn:l((r,s)=>R(this,N,qv).call(this,r,s),"centreOn"),changed:l(()=>R(this,N,kt).call(this),"changed"),visible:l((r,s,a)=>R(this,N,ha).call(this,r,s,a),"visible")}),G(this,At,t(e.mapCanvas,{period:d(this,Ye).layout.period(),ground:d(this,Ye).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&G(this,Vo,new Sv(e.minimapCanvas,d(this,Ye).layout,e.world,d(this,Ye).extentV(),(r,s)=>{G(this,cr,null),R(this,N,Ic).call(this,{...d(this,Rt)?.to??d(this,ft),focus:[r,s]})})),e.debug&&e.mapCanvas.parentElement&&(G(this,da,R(this,N,aM).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),d(this,Ye).queueAll(...R(this,N,Uo).call(this)),R(this,N,Lc).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),G(this,Kn,e.squares),G(this,kr,e.playerId),G(this,Hc,e.transport),G(this,Fo,new iv(e.mapCanvas,{orbit:l(()=>d(this,ft),"orbit"),lookHeight:l(()=>d(this,Nn)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>R(this,N,$v).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>R(this,N,Zv).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>d(this,Kn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>d(this,Kn).menuOpen(),"menuOpen"),hover:l(r=>R(this,N,Jv).call(this,r),"hover")})),window.addEventListener("resize",d(this,Yo)),document.addEventListener("keydown",d(this,Vc),!0),e.mapCanvas.addEventListener("pointerdown",d(this,Gc),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(G(this,$o,new ResizeObserver(d(this,Yo))),d(this,$o).observe(e.mapCanvas.parentElement)),R(this,N,qg).call(this),R(this,N,kt).call(this),G(this,Xc,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==d(this,Cs)&&!d(this,Ma)&&(G(this,Cs,r),R(this,N,Lc).call(this),R(this,N,kt).call(this))})??(()=>{})),G(this,Yc,e.artChanged?.(()=>{d(this,Ma)||(G(this,dr,!0),R(this,N,kt).call(this))})??(()=>{}))}land(){return d(this,Ye)}orbit(){return d(this,ft)}moving(){return d(this,Rt)!==null||d(this,Fo).moving()}setOrbit(e){d(this,ti).call(this),G(this,Rt,null),G(this,ft,R(this,N,Pc).call(this,e)),R(this,N,kt).call(this)}activeUnit(){return{unit:d(this,Fi),pendingTile:d(this,Wc)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=d(this,Rt)?.to??d(this,ft);R(this,N,Ic).call(this,{...t,yaw:t.yaw+e*S0},R(this,N,Ig).call(this)+e*S0)}heading(){return{turn:(d(this,Rt)?.to??d(this,ft)).yaw,directions:ux(d(this,Ye).layout,this.world.topology())}}faceNorth(){R(this,N,Ic).call(this,{...d(this,Rt)?.to??d(this,ft),yaw:0},Iv(-d(this,ft).yaw))}debugViewModes(){return[]}dispose(){R(this,N,Xg).call(this,!0),G(this,Ma,!0),d(this,tn).endAll(0),d(this,$t).endAll(0),d(this,jn).endAll(),d(this,or).clear(),d(this,Br).clear(),d(this,ws).clear(),G(this,Es,null),d(this,ar).clear(),d(this,Or).clear(),d(this,Qn).clear(),d(this,ga).clear(),d(this,pi).clear(),d(this,Un).clear(),d(this,Fr).clear(),d(this,fi).clear(),document.removeEventListener("keydown",d(this,Vc),!0),d(this,Xt).removeEventListener("pointerdown",d(this,Gc),!0),d(this,Xc).call(this),d(this,Yc).call(this),d(this,ti).call(this),d(this,Fo).dispose(),d(this,Vo)?.dispose(),window.removeEventListener("resize",d(this,Yo)),d(this,$o)?.disconnect(),d(this,Gr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(d(this,Gr)),G(this,Gr,null),d(this,da)?.remove(),d(this,At).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=d(this,ur);e!==null&&(G(this,ur,null),d(this,Xt).classList.remove("picking-tile"),e.window?.close())}flush(){R(this,N,Hg).call(this),R(this,N,kt).call(this)}mapEvent(e){if(e.kind==="moved"){R(this,N,Nv).call(this,e.unit,e.from,e.to),R(this,N,hf).call(this,e.unit.id,e.from,e.to);return}R(this,N,hf).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),R(this,N,hf).call(this,e.defender.id,e.defender.tile,e.attacker.tile),R(this,N,Dv).call(this,e)}measureCovered(){let e=d(this,Xt).getBoundingClientRect();G(this,Nc,d(this,Dc).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};G(this,ur,r),d(this,Xt).classList.add("picking-tile"),r.window=d(this,Kn).prompt(n,()=>{d(this,ur)===r&&(G(this,ur,null),d(this,Xt).classList.remove("picking-tile"))})}picking(){return d(this,ur)!==null}queueTile(e){let t=`${e.x},${e.y}`;d(this,xa).set(t,e),d(this,ko).set(t,++xi(this,Ms)._)}redrawArt(){let e=d(this,$c).id();return e===d(this,qo)?"unchanged":(G(this,qo,e),G(this,dr,!0),"redrawn")}releaseTiles(){let e=d(this,zc)&&R(this,N,lf).call(this);e&&d(this,xa).size>0&&d(this,Es)===null&&G(this,Es,new Set([...d(this,Or).keys(),...d(this,Ui).keys()])),d(this,xa).forEach((t,n)=>{let r=d(this,ko).get(n)??0;e&&!d(this,ws).has(n)&&d(this,ws).set(n,d(this,ar).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),d(this,Ts).set(n,t),d(this,zo).set(n,r),d(this,Qn).forEach(s=>{s.square===n&&r>s.after&&(s.patched=!0)})}),d(this,xa).clear(),d(this,ko).clear(),d(this,Ts).size>0&&R(this,N,kt).call(this)}setActiveUnit(e,t){let n=d(this,Fi)?.tile;if(G(this,Fi,e),G(this,Wc,t??null),R(this,N,ua).call(this)&&R(this,N,Xv).call(this)&&R(this,N,uf).call(this),R(this,N,ua).call(this)){R(this,N,kt).call(this);return}G(this,cr,null);let r=d(this,lr);G(this,mi,e?.id??null),G(this,lr,e?.tile??null),[n,r,e?.tile].forEach(s=>{s&&R(this,N,Ni).call(this,s.x,s.y)}),R(this,N,kt).call(this)}setWaiting(e){G(this,Xo,e),e&&d(this,ti).call(this)}showActiveUnit(e){d(this,hr)||(G(this,hr,!0),R(this,N,Lc).call(this),R(this,N,kt).call(this))}shown(){return{units:d(this,hr),yields:d(this,ya),waiting:d(this,Xo)}}tilesPending(){return d(this,Ts).size}toggleUnits(){G(this,hr,!d(this,hr)),R(this,N,Lc).call(this),R(this,N,kt).call(this)}toggleYields(){G(this,ya,!d(this,ya)),G(this,dr,!0),R(this,N,kt).call(this)}zoomBy(e){d(this,ti).call(this),G(this,ft,go(d(this,ft),e)),d(this,Rt)!==null&&(d(this,Rt).from=go(d(this,Rt).from,e),d(this,Rt).to=go(d(this,Rt).to,e)),R(this,N,kt).call(this)}};Xt=new WeakMap,Dc=new WeakMap,Nc=new WeakMap,Ye=new WeakMap,At=new WeakMap,da=new WeakMap,Uc=new WeakMap,Fc=new WeakMap,ft=new WeakMap,Rt=new WeakMap,Nn=new WeakMap,Fo=new WeakMap,Oc=new WeakMap,fa=new WeakMap,vs=new WeakMap,Oo=new WeakMap,Bc=new WeakMap,kc=new WeakMap,Kn=new WeakMap,Bo=new WeakMap,di=new WeakMap,tn=new WeakMap,Ui=new WeakMap,pa=new WeakMap,ma=new WeakMap,Un=new WeakMap,Fr=new WeakMap,fi=new WeakMap,Ms=new WeakMap,ko=new WeakMap,zo=new WeakMap,$t=new WeakMap,jn=new WeakMap,Ss=new WeakMap,ar=new WeakMap,Or=new WeakMap,or=new WeakMap,Br=new WeakMap,zc=new WeakMap,ws=new WeakMap,Es=new WeakMap,Qn=new WeakMap,ga=new WeakMap,Go=new WeakMap,pi=new WeakMap,ei=new WeakMap,mi=new WeakMap,lr=new WeakMap,cr=new WeakMap,Gc=new WeakMap,Vc=new WeakMap,Hc=new WeakMap,ur=new WeakMap,As=new WeakMap,kr=new WeakMap,ti=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,zr=new WeakMap,Gr=new WeakMap,xa=new WeakMap,Ts=new WeakMap,_a=new WeakMap,Wo=new WeakMap,Fi=new WeakMap,Wc=new WeakMap,hr=new WeakMap,Cs=new WeakMap,Xc=new WeakMap,ya=new WeakMap,dr=new WeakMap,ba=new WeakMap,va=new WeakMap,qc=new WeakMap,Yc=new WeakMap,Xo=new WeakMap,$c=new WeakMap,qo=new WeakMap,Zc=new WeakMap,Yo=new WeakMap,$o=new WeakMap,Ma=new WeakMap,N=new WeakSet,Ig=l(function(){let e=d(this,Rt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),Dv=l(function({attacker:e,defender:t,winner:n}){let r=d(this,ei)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Ii()||r==="off"||e.player!==d(this,kr)&&t.player!==d(this,kr)&&!(d(this,ei)?.rivals()??!0)||!R(this,N,ha).call(this,e.tile.x,e.tile.y,-.5)&&!R(this,N,ha).call(this,t.tile.x,t.tile.y,-.5))return;let a=this.world.get(e.tile.x,e.tile.y).units.find(({id:y})=>y===e.id),o=`${t.tile.x},${t.tile.y}`,c=this.world.get(t.tile.x,t.tile.y),u=[...d(this,Qn).values()].filter(({square:y,patched:S})=>y===o&&!S).at(-1),h=u===void 0?c.units.filter(({id:y})=>!d(this,pi).has(y)).map(Lv):u.units.filter(({id:y})=>!(u.won&&y===u.defender));if(d(this,pi).has(e.id)||!h.some(({id:y})=>y===t.id))return;let p=d(this,$t).busyUntil([e.id,t.id]);p!==null&&p-s>e2&&R(this,N,Cc).call(this,d(this,$t).endWhere(y=>y.attacker===e.id||y.attacker===t.id,s)),R(this,N,Lg).call(this,e.id);let[f,m]=d(this,Ye).layout.centre(e.tile.x,e.tile.y),[_,b]=d(this,Ye).layout.centre(t.tile.x,t.tile.y),{u:g,v:x}=d(this,Ye).layout.period(),v=l((y,S)=>S===null?y:y-S*Math.round(y/S),"short"),A=v(_-f,g),M=v(b-m,x),C=`${e.tile.x},${e.tile.y}`,E=d(this,$t).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:R(this,N,Do).call(this,e.tile),edge:[f+A*Eg,m+M*Eg],fallsAt:R(this,N,Do).call(this,t.tile),facing:d(this,di).get(e.id)??Math.atan2(A,M),defenderFacing:d(this,di).get(t.id)??Math.atan2(-A,-M)},s,r==="fast"?_v(wg):wg,d(this,tn).endsAt(e.id)??s);d(this,Qn).set(E.id,{square:o,city:u?.city??n2(c.city),units:h,after:d(this,Ms),won:n==="attacker",defender:t.id,patched:!1}),a!==void 0&&d(this,Ui).set(e.id,a),[e.id,t.id].forEach(y=>d(this,fi).set(y,{squares:[C,o],after:d(this,Ms)})),R(this,N,Ni).call(this,e.tile.x,e.tile.y),R(this,N,Ni).call(this,t.tile.x,t.tile.y),R(this,N,kt).call(this)},"#fight"),Nv=l(function(e,t,n){let r=d(this,ei)?.speed()??"normal";if(e.id===d(this,mi)&&G(this,lr,n),typeof requestAnimationFrame!="function"||Ii()||r==="off")return;if(e.player!==d(this,kr)&&d(this,$t).attacking(e.id)){d(this,fi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,Ms)});return}R(this,N,Cc).call(this,d(this,$t).endWhere(({attacker:p,defender:f})=>p===e.id||f===e.id,performance.now()));let s=d(this,tn).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:p})=>p===e.id)??(R(this,N,_s).call(this,e.id)?d(this,Ui).get(e.id):void 0),o=e.player===d(this,kr);if(a===void 0||!o&&!s&&(!(d(this,ei)?.rivals()??!0)||!R(this,N,ha).call(this,t.x,t.y,-.5)&&!R(this,N,ha).call(this,n.x,n.y,-.5)))return;let c=o?lv:cv;d(this,Ui).set(e.id,a),d(this,fi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,Ms)}),R(this,N,Lg).call(this,e.id);let u=Ed(Xl(a._,a.__??[])),h=u?void 0:d(this,Ye).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);d(this,tn).step(e.id,t,n,R(this,N,Do).call(this,t),{...R(this,N,Do).call(this,n),...h===void 0?{}:{via:h}},performance.now(),r==="fast"?uv(c):c,u),R(this,N,kt).call(this)},"#walk"),Do=l(function({x:e,y:t},n=!!this.world.get(e,t).city){let[r,s]=d(this,Ye).layout.centre(e,t),a=Math.max(0,d(this,Ye).surfaceAt(r,s)),o=[r,s+(n?fo:0)];return{at:o,lift:a-Math.max(0,d(this,Ye).surfaceAt(...o)),middle:[r,s]}},"#standing"),Lg=l(function(e){d(this,Fr).delete(e)&&d(this,Un).forEach((t,n)=>{let r=t.units.filter(s=>s!==e);if(r.length!==t.units.length){if(r.length===0){d(this,Un).delete(n),R(this,N,ys).call(this,n);return}d(this,Un).set(n,{...t,units:r})}})},"#stepsOn"),_s=l(function(e){return d(this,tn).walking(e)||d(this,Fr).has(e)||d(this,$t).attacking(e)||d(this,pi).has(e)},"#leftOff"),Uv=l(function(e){if(d(this,tn).dropped().forEach(r=>R(this,N,ys).call(this,r)),d(this,Un).forEach(r=>R(this,N,No).call(this,r)),d(this,tn).size()===0)return;if(Ii()||(d(this,ei)?.speed()??"normal")==="off"){R(this,N,Tc).call(this,d(this,tn).endAll(e));return}let{going:t,ended:n}=d(this,tn).at(e);R(this,N,Tc).call(this,n),t.forEach(r=>{R(this,N,No).call(this,r)!==null&&r.units.some(a=>{let o=d(this,Ui).get(a);return o!==void 0&&Xl(o._,o.__??[]).shape==="ship"})&&d(this,Ss).trail(r.id,r.at,e)})},"#placeWalkers"),Fv=l(function(e){if(d(this,Ss).size()===0)return;if(Ii()||(d(this,ei)?.speed()??"normal")==="off"){d(this,Ss).endAll().forEach(r=>d(this,At).wake(r,null));return}let{going:t,gone:n}=d(this,Ss).at(e);n.forEach(r=>d(this,At).wake(r,null)),t.forEach(({id:r,points:s})=>{let[a]=s;if(a===void 0){d(this,At).wake(r,null);return}let[o,c]=R(this,N,Dg).call(this,a.at);d(this,At).wake(r,[o,0,c],gv(s))})},"#placeWakes"),No=l(function(e){let t=R(this,N,Ug).call(this,e.units);return R(this,N,sf).call(this,e,t),t},"#drawWalker"),sf=l(function({id:e,at:t,lift:n,facing:r,aloft:s=0},a,o=1){let c=a===null?null:JSON.stringify(a);c!==(d(this,ma).get(e)??null)&&(d(this,At).setWalker(e,a),c===null?d(this,ma).delete(e):d(this,ma).set(e,c)),a!==null&&(d(this,At).placeWalker(e,R(this,N,Ng).call(this,t,n),r,s),d(this,At).fadeWalker(e,o))},"#drawFigure"),Dg=l(function(e){let{u:t,v:n}=d(this,Ye).layout.period(),r=l((s,a)=>a===null?s:(s%a+a)%a,"within");return[r(e[0],t),r(e[1],n)]},"#wrapped"),Ng=l(function(e,t){let[n,r]=R(this,N,Dg).call(this,e);return[n,Math.max(0,d(this,Ye).surfaceAt(n,r))+t,r]},"#onLand"),ys=l(function(e){d(this,ma).delete(e)&&d(this,At).setWalker(e,null)},"#takeAway"),Ug=l(function(e){let t=e.flatMap(n=>{let r=d(this,Ui).get(n);return r===void 0?[]:[r]});return R(this,N,af).call(this,t)},"#walkerMarker"),af=l(function(e,t=d(this,mi)){return rg({city:null,units:e},t,d(this,hr),d(this,Bo),()=>0,d(this,Cs))},"#unitsMarker"),Fg=l(function({units:e}){return e.some(t=>d(this,fi).has(t))},"#awaitsPatch"),Tc=l(function(e){let t=new Set;e.forEach(n=>{let r={...n,units:n.units.filter(s=>!d(this,$t).attacking(s))};if(r.units.length>0&&R(this,N,Fg).call(this,r)){d(this,Un).set(r.id,r),r.units.forEach(s=>d(this,Fr).add(s)),R(this,N,No).call(this,r);return}R(this,N,ys).call(this,n.id),n.units.forEach(s=>d(this,Fr).delete(s)),R(this,N,Og).call(this,n.units,t)}),R(this,N,Bg).call(this,t)},"#walksEnded"),Og=l(function(e,t){e.forEach(n=>{R(this,N,_s).call(this,n)&&!d(this,pi).has(n)||(d(this,pa).get(n)?.forEach(r=>t.add(r)),d(this,pa).delete(n),d(this,Ui).delete(n))})},"#release"),Bg=l(function(e){let t=d(this,mi);t!==null&&t!==(d(this,Fi)?.id??null)&&!d(this,tn).walking(t)&&!d(this,$t).attacking(t)&&R(this,N,Wv).call(this,e),e.forEach(n=>{let[r,s]=n.split(",").map(Number);R(this,N,Ni).call(this,r,s)})},"#released"),Ov=l(function(e){let t=new Set;if(d(this,$t).size()===0){R(this,N,of).call(this,t);return}if(Ii()||(d(this,ei)?.speed()??"normal")==="off"){R(this,N,Cc).call(this,d(this,$t).endAll(e)),R(this,N,of).call(this,t);return}let{going:n,struck:r,ended:s}=d(this,$t).at(e);r.forEach(a=>R(this,N,kg).call(this,a,!0)),n.forEach(a=>{if(!a.fallen&&d(this,tn).walking(a.unit)){R(this,N,ys).call(this,a.id);return}R(this,N,Hv).call(this,a)&&t.add(R(this,N,Bv).call(this,a))}),R(this,N,zg).call(this,s),R(this,N,of).call(this,t)},"#placeBattles"),Bv=l(function({battle:e,at:t,lift:n,opacity:r}){let s=`${e}-puff`;return d(this,Go).add(s),d(this,At).puff(s,R(this,N,Ng).call(this,t,n),1-r),s},"#puff"),of=l(function(e){d(this,Go).forEach(t=>{e.has(t)||(d(this,Go).delete(t),d(this,At).puff(t,null))})},"#puffsOver"),Cc=l(function({struck:e,ended:t}){e.forEach(n=>R(this,N,kg).call(this,n,!1)),R(this,N,zg).call(this,t)},"#battlesOver"),kg=l(function(e,t){let{square:n,units:r}=d(this,Qn).get(e.id)??{square:"",units:[]},{x:s,y:a}=e.defenderSquare,o=[...d(this,Qn).entries()].find(([p,f])=>p!==e.id&&f.square===n)?.[1],c=new Set((o?.units??this.world.get(s,a).units).map(({id:p})=>p)),u=e.won?e.defender:e.attacker,h=r.filter(({id:p})=>e.won&&p===e.defender||!c.has(p)&&!R(this,N,_s).call(this,p));d(this,Qn).delete(e.id),d(this,Ye).changed([[s,a]],...R(this,N,Uo).call(this)),d(this,fi).has(u)&&d(this,pi).add(u),t&&e.won&&h.length>0&&d(this,ga).set(e.id,h),R(this,N,Ni).call(this,s,a)},"#blow"),kv=l(function(e,t,{shown:n,ringed:r,inCity:s}){if((d(this,ar).get(e)?.units??[]).forEach(({id:a})=>{d(this,Or).get(a)===e&&d(this,Or).delete(a)}),t.length===0?d(this,ar).delete(e):d(this,ar).set(e,{units:t.map(Lv),shown:n,ringed:r,inCity:s}),t.forEach(({id:a})=>d(this,Or).set(a,e)),d(this,or).size>0){let a=[...d(this,or).entries()].filter(([,o])=>o.units.some(c=>t.some(({id:u})=>u===c.id))).map(([o])=>o);a.forEach(o=>d(this,jn).end(o)),R(this,N,cf).call(this,a)}},"#drawnOn"),lf=l(function(){return typeof requestAnimationFrame=="function"&&!Ii()&&(d(this,ei)?.speed()??"normal")!=="off"},"#fadesShown"),zv=l(function(e){return d(this,Or).has(e)||R(this,N,_s).call(this,e)},"#drawnAnywhere"),Gv=l(function(e,t){let n=[],r=[];if(e.forEach((c,u)=>{let h=c.units.filter(({id:f})=>!R(this,N,zv).call(this,f)),p=d(this,ar).get(u)?.shown??null;c.shown!==null&&h.some(({id:f})=>f===c.shown)&&n.push([u,c,h]),c.units.length===0&&p!==null&&!t.has(p)&&r.push([u,p])}),n.length+r.length===0||n.length+r.length>t2)return;let s=l(([c])=>{let[u,h]=c.split(",").map(Number);return R(this,N,ha).call(this,u,h,0)},"onScreen"),a=performance.now(),o=(d(this,ei)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([c,u,h])=>{let[p,f]=c.split(",").map(Number);d(this,or).set(d(this,jn).add("out",a,o),{units:[...h.filter(({id:m})=>m===u.shown),...h.filter(({id:m})=>m!==u.shown)],shown:u.ringed?u.shown:null,at:R(this,N,Do).call(this,{x:p,y:f},u.inCity),facing:u.shown===null?0:d(this,di).get(u.shown)??0})}),r.filter(s).forEach(([c,u])=>{d(this,Br).set(d(this,jn).add("in",a,o),{key:c,unit:u}),d(this,At).fadeMarker(c,0)}),R(this,N,kt).call(this)},"#fadeChanged"),Vv=l(function(e){if(d(this,jn).size()===0)return;if(!R(this,N,lf).call(this)){R(this,N,cf).call(this,d(this,jn).endAll());return}let{going:t,ended:n}=d(this,jn).at(e),r=[];t.forEach(({id:s,opacity:a})=>{let o=d(this,or).get(s),c=d(this,Br).get(s);if(o!==void 0){let u=R(this,N,af).call(this,o.units,o.shown);if(u===null){d(this,jn).end(s),r.push(s);return}R(this,N,sf).call(this,{id:s,at:[o.at.at[0],o.at.at[1]],lift:o.at.lift,facing:o.facing},u,a);return}if(c!==void 0){if((d(this,ar).get(c.key)?.shown??null)!==c.unit){d(this,jn).end(s),r.push(s);return}d(this,At).fadeMarker(c.key,a)}}),R(this,N,cf).call(this,[...n,...r])},"#placeFades"),cf=l(function(e){e.forEach(t=>{let n=d(this,Br).get(t);d(this,or).delete(t)&&R(this,N,ys).call(this,t),n!==void 0&&(d(this,Br).delete(t),[...d(this,Br).values()].some(({key:r})=>r===n.key)||d(this,At).fadeMarker(n.key,1))})},"#fadesOver"),Hv=l(function(e){let t=d(this,ga).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?R(this,N,af).call(this,t):R(this,N,Ug).call(this,[e.unit]);return R(this,N,sf).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),zg=l(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:r,attacker:s,won:a,from:o,attackerSquare:c,facing:u}=n;if(R(this,N,ys).call(this,`${r}-fallen`),d(this,ga).delete(r),d(this,Qn).delete(r)&&d(this,Ye).changed([[n.defenderSquare.x,n.defenderSquare.y]],...R(this,N,Uo).call(this)),d(this,fi).has(s)&&!R(this,N,_s).call(this,s))if(!a)d(this,pi).add(s);else{let h={id:r,units:[s],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:u,from:c,before:c,to:c};d(this,Un).set(r,h),d(this,Fr).add(s),R(this,N,No).call(this,h);return}R(this,N,ys).call(this,r),R(this,N,Og).call(this,[s],t)}),R(this,N,Bg).call(this,t)},"#battlesEnded"),Wv=l(function(e){let t=d(this,Fi);[d(this,lr),t?.tile].forEach(r=>{r&&e.add(`${r.x},${r.y}`)}),G(this,mi,t?.id??null),G(this,lr,t?.tile??null),d(this,Un).forEach(r=>R(this,N,No).call(this,r));let n=d(this,cr);n!==null&&(G(this,cr,null),R(this,N,Vg).call(this,n.x,n.y))},"#caughtUp"),ua=l(function(){let e=d(this,mi);return e!==null&&e!==(d(this,Fi)?.id??null)&&(d(this,tn).walking(e)||d(this,$t).attacking(e))},"#holding"),uf=l(function(){let e=d(this,mi);e===null||!R(this,N,ua).call(this)||(R(this,N,Tc).call(this,d(this,tn).endWhere(t=>t.includes(e),performance.now())),R(this,N,Cc).call(this,d(this,$t).endWhere(({attacker:t})=>t===e,performance.now())),R(this,N,kt).call(this))},"#hurry"),Xv=l(function(){let e=d(this,lr),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===d(this,mi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),qv=l(function(e,t){if(R(this,N,ua).call(this)){G(this,cr,{x:e,y:t});return}R(this,N,Vg).call(this,e,t)},"#centreSoon"),Yv=l(function(e){if(d(this,fi).forEach(({squares:n,after:r},s)=>{n.some(a=>(e.get(a)??0)>r)&&(d(this,fi).delete(s),d(this,pi).delete(s))}),d(this,Un).size===0)return;let t=[...d(this,Un).values()].filter(n=>!R(this,N,Fg).call(this,n));t.forEach(n=>d(this,Un).delete(n.id)),R(this,N,Tc).call(this,t)},"#patched"),hf=l(function(e,t,n){let[r,s]=d(this,Ye).layout.centre(t.x,t.y),[a,o]=d(this,Ye).layout.centre(n.x,n.y),{u:c,v:u}=d(this,Ye).layout.period(),h=l((m,_)=>_===null?m:m-_*Math.round(m/_),"short"),p=h(a-r,c),f=h(o-s,u);p===0&&f===0||(d(this,di).delete(e),d(this,di).set(e,Math.round(Math.atan2(p,f)*1e3)/1e3),d(this,di).size>jR&&d(this,di).delete(d(this,di).keys().next().value),[t,n].forEach(({x:m,y:_})=>R(this,N,Ni).call(this,m,_)),R(this,N,kt).call(this))},"#face"),ha=l(function(e,t,n){let r=d(this,Xt).clientWidth,s=d(this,Xt).clientHeight;if(r<=0||s<=0)return!1;let a=d(this,cr),o=a===null?d(this,Rt)?.to??d(this,ft):{...d(this,Rt)?.to??d(this,ft),focus:d(this,Ye).layout.centre(a.x,a.y)},[c,u]=d(this,Ye).layout.centre(e,t),{u:h,v:p}=R(this,N,bs).call(this),[f,m]=o.focus,_=l((S,L,P)=>P===null?S:S+P*Math.round((L-S)/P),"nearest"),b=[_(c,f,h),Math.max(0,d(this,Ye).heightAt(c,u)),_(u,m,p)],g=r/s,x=d(this,Nn)??0,v=w0(o,x,b,g),A=w0(o,x,[b[0]+Math.cos(o.yaw),b[1],b[2]+Math.sin(o.yaw)],g);if(v===null||A===null)return!1;let M=(v[0]+1)/2*r,C=(1-v[1])/2*s,E=Math.abs(A[0]-v[0])*(r/2),y=(n+.5)*E;return M>=y&&M<=r-y&&C>=y&&C<=s-y&&!d(this,Nc).some(({left:S,top:L,right:P,bottom:D})=>M>=S-E/2&&M<=P+E/2&&C>=L-E/2&&C<=D+E/2)},"#visible"),Rc=l(function(e,t){let n=d(this,Xt).clientWidth,r=d(this,Xt).clientHeight;if(n<=0||r<=0)return null;let s=vv(d(this,ft),d(this,Nn)??0,[e/n*2-1,1-t/r*2],n/r,(p,f)=>d(this,Ye).heightAt(p,f));if(s===null)return null;let[a,o]=d(this,Ye).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(R(this,N,bs).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),$v=l(function(e,t){let n=R(this,N,Rc).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=d(this,ur);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&d(this,Kn).click(this.portal,n)},"#clicked"),Zv=l(function(e,t,n,r,s){let a=d(this,Fi),o=R(this,N,Rc).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),d(this,Kn).menu(this.portal,n,r,a,o,d(this,Hc),s),!0)},"#menu"),Jv=l(function(e){let t=e===null||d(this,Xo)||d(this,Kn).menuOpen()?null:R(this,N,Rc).call(this,e.x,e.y),n=d(this,As);if(t===null||e===null){d(this,ti).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}d(this,ti).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,R(this,N,Gg).call(this,s)},s2),G(this,As,s),document.addEventListener("keydown",d(this,ti),!0)},"#hovered"),Gg=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===d(this,Xt),n=t?R(this,N,Rc).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){d(this,ti).call(this);return}let r=d(this,Kn).tooltip(d(this,Xt),n,d(this,kr),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&d(this,Kn).endTooltip(d(this,Xt)),e.open=r},"#showHover"),Uo=l(function(){return[...d(this,ft).focus]},"#focus"),Kv=l(function(){let[e,t]=d(this,Ye).layout.tileAt(...d(this,ft).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:R(this,N,bs).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),Vg=l(function(e,t){let[n,r]=d(this,Ye).layout.centre(e,t),[s,a]=(d(this,Rt)?.to??d(this,ft)).focus;if(n===s&&r===a)return;let o={...d(this,Rt)?.to??d(this,ft),focus:[n,r]},{u:c,v:u}=R(this,N,bs).call(this),h=l((_,b)=>b===null?_:_-b*Math.round(_/b),"short"),[p,f]=d(this,ft).focus,m=Math.hypot(h(n-p,c),h(r-f,u));if(!d(this,kc)||m>d(this,ft).distance*1.5){G(this,kc,!0),this.setOrbit(o);return}R(this,N,Ic).call(this,o)},"#centreOn"),Pc=l(function(e){return qy(ea(e),R(this,N,bs).call(this),d(this,Ye).extentV())},"#settle"),bs=l(function(){let e=d(this,Ye).layout.period();return this.portal?.lockVerticalEdges()??d(this,Bc)?{u:e.u,v:null}:e},"#period"),Ic=l(function(e,t=R(this,N,Ig).call(this)+Iv(e.yaw-(d(this,Rt)?.to??d(this,ft)).yaw)){d(this,ti).call(this),typeof requestAnimationFrame!="function"||Ii()?(G(this,Rt,null),G(this,ft,R(this,N,Pc).call(this,e))):G(this,Rt,{from:d(this,ft),to:e,started:null,turn:t,drawn:0}),R(this,N,kt).call(this)},"#moveTo"),jv=l(function(e){let t=d(this,Rt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/QR);return t.drawn=n*n*(3-2*n),G(this,ft,R(this,N,Pc).call(this,Yy(t.from,t.to,n,R(this,N,bs).call(this),t.turn))),n>=1&&G(this,Rt,null),n<1},"#moveCamera"),Qv=l(function(e){let[t,n]=d(this,ft).focus,r=Math.max(0,d(this,Ye).heightAt(t,n));return!e||d(this,Nn)===null||Ii()?(G(this,Nn,r),!1):(G(this,Nn,d(this,Nn)+(r-d(this,Nn))*r2),Math.abs(r-d(this,Nn))<.002?(G(this,Nn,r),!1):!0)},"#followHeight"),Hg=l(function(){let e=[...d(this,Ts).values()].map(({x:h,y:p})=>[h,p]),t=this.world.tiles(),n=t!==d(this,_a)||t.length!==d(this,Wo);G(this,_a,t),G(this,Wo,t.length),d(this,Ts).clear();let r=R(this,N,tM).call(this,d(this,Ye).changed(e,...R(this,N,Uo).call(this),n)),s=new Set(e.map(([h,p])=>`${h},${p}`)),a=new Map([...s].map(h=>[h,d(this,zo).get(h)??0]));d(this,zo).clear();let o=d(this,ws),c=d(this,Es);G(this,ws,new Map),G(this,Es,null),d(this,or).forEach(({units:[h]})=>{h!==void 0&&c?.add(h.id)}),e.forEach(([h,p])=>R(this,N,Ni).call(this,h,p)),r.forEach(([h,p])=>{let f=`${h},${p}`;!n&&!s.has(f)&&d(this,zr).has(f)&&R(this,N,Ni).call(this,h,p)}),R(this,N,eM).call(this,e,r);let u=d(this,As);u!==null&&u.open&&e.some(([h,p])=>h===u.x&&p===u.y)&&R(this,N,Gg).call(this,u),(e.length>0||n)&&G(this,Ho,!0),n&&(G(this,dr,!0),d(this,zr).forEach((h,p)=>{let[f,m]=p.split(",").map(Number);R(this,N,Ni).call(this,f,m)})),c!==null&&R(this,N,lf).call(this)&&!(n&&s.size*2>=t.length)&&R(this,N,Gv).call(this,o,c),e.length>0&&R(this,N,Yv).call(this,a)},"#takeTiles"),Ni=l(function(e,t){let n=`${e},${t}`,r=this.world.get(e,t),s=d(this,$t).awaitingBlow({x:e,y:t}),a=s===null?void 0:d(this,Qn).get(s.id),o=a===void 0?r.units:[...a.units,...r.units.filter(({id:g})=>!a.units.some(x=>x.id===g))];r.units.filter(({id:g})=>R(this,N,_s).call(this,g)&&!d(this,pi).has(g)).forEach(g=>{let x=d(this,pa).get(g.id)??new Set;x.add(n),d(this,pa).set(g.id,x),d(this,Ui).set(g.id,g)});let u=o.filter(({id:g})=>!R(this,N,_s).call(this,g)),h=rg(a===void 0&&u.length===r.units.length?r:{city:a===void 0?r.city:a.city,units:u},d(this,mi),d(this,hr),d(this,Bo),g=>d(this,di).get(g.id)??0,d(this,Cs));R(this,N,kv).call(this,n,u,{shown:h?.unit?.id??null,ringed:h?.unit?.active===!0,inCity:(h?.unit??null)!==null&&h?.inCity===!0});let[p,f]=d(this,Ye).layout.centre(e,t),m=[p,Math.max(0,d(this,Ye).surfaceAt(p,f)),f],_=h===null?null:JSON.stringify([h,m]);_!==(d(this,zr).get(n)??null)&&(d(this,At).setMarker(n,m,h),R(this,N,iM).call(this,n,_))},"#mark"),eM=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>d(this,va).delete(`${n},${r}`)),t.forEach(([n,r])=>d(this,va).delete(`${n},${r}`)),G(this,dr,!0))},"#yieldsChanged"),tM=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),nM=l(function(){if(!d(this,ya)){d(this,ba)&&(d(this,At).setYields(null),G(this,ba,!1));return}if(!d(this,dr)&&d(this,ba))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=Ev(t,Av(t)),s=d(this,va).get(n);if(s===void 0||s.of!==r){let[a,o]=d(this,Ye).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:Cv({at:[a,Math.max(0,d(this,Ye).surfaceAt(a,o)),o],yields:r},d(this,qc))},d(this,va).set(n,s)}s.laid!==null&&e.push(s.laid)}),d(this,At).setYields(Rv(e)),G(this,dr,!1),G(this,ba,!0)},"#showYields"),iM=l(function(e,t){t===null?d(this,zr).delete(e):d(this,zr).set(e,t)},"#remember"),Lc=l(function(){let e=new Set(d(this,zr).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);R(this,N,Ni).call(this,n,r)})},"#markAll"),Wg=l(function(e){let t=performance.now(),n=R(this,N,jv).call(this,t),[r,s]=R(this,N,Uo).call(this);R(this,N,Hg).call(this),R(this,N,Uv).call(this,t),R(this,N,Fv).call(this,t),R(this,N,Ov).call(this,t),R(this,N,Vv).call(this,t),`${r},${s}`!==d(this,Fc)&&(G(this,Fc,`${r},${s}`),d(this,Ye).refocus(r,s)),d(this,Ye).build(d(this,At),e);let a=R(this,N,Qv).call(this,e!==null);R(this,N,nM).call(this),d(this,At).view(d(this,ft),d(this,Nn)??0,R(this,N,bs).call(this)),d(this,At).render(),R(this,N,rM).call(this),R(this,N,Xg).call(this),G(this,Uc,performance.now()-t),G(this,zc,!0),R(this,N,oM).call(this),(d(this,Ye).pending()>0||d(this,Ye).overlaysPending()>0||d(this,tn).size()>0||d(this,$t).size()>0||d(this,jn).size()>0||d(this,Ss).size()>0||n||a)&&R(this,N,kt).call(this)},"#frameDrawn"),rM=l(function(){let e=d(this,Vo);if(e===null)return;d(this,Ho)&&(G(this,Ho,!1),e.redraw());let t=R(this,N,ua).call(this)?d(this,lr):d(this,Fi)?.tile??null;e.show(R(this,N,sM).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),sM=l(function(){let e=d(this,Xt).clientWidth,t=d(this,Xt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=d(this,Nn)??0,s=Dd(d(this,ft).distance).far,[a,o]=d(this,ft).focus,c=l((h,p)=>{for(let f=p;f>=-1;f-=.05){let m=mo(d(this,ft),r,[h,f],n);if(m!==null){let _=Math.hypot(m[0]-a,m[1]-o),b=_>s?s/_:1;return[a+(m[0]-a)*b,o+(m[1]-o)*b]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),Xg=l(function(e=!1){let t=(e?d(this,Rt)?.to??d(this,ft):d(this,ft)).distance,n=l(()=>{d(this,vs)!==null&&clearTimeout(d(this,vs)),G(this,vs,null),G(this,Oo,null)},"stop"),r=l(()=>{n(),G(this,fa,t),d(this,Oc).set(t)},"keep");if(e){n(),t!==d(this,fa)&&r();return}if(d(this,Rt)!==null||t===d(this,fa)){n();return}d(this,vs)!==null&&t===d(this,Oo)||(n(),G(this,Oo,t),G(this,vs,setTimeout(r,i2)))},"#keepDistance"),kt=l(function(){if(!d(this,Ma)){if(typeof requestAnimationFrame!="function"){R(this,N,Wg).call(this,null);return}d(this,Gr)===null&&G(this,Gr,requestAnimationFrame(()=>{G(this,Gr,null),R(this,N,Wg).call(this,KR)}))}},"#draw"),aM=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),oM=l(function(){if(d(this,da)===null)return;let{drawCalls:e,triangles:t,geometries:n}=d(this,At).stats();d(this,da).textContent=[`frame ${d(this,Uc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${d(this,Ye).pending()}`].join(`
`)},"#showStats"),qg=l(function(){let e=d(this,Xt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===d(this,Zc)||(G(this,Zc,s),d(this,At).resize(t,n,r),this.measureCovered(),d(this,At).render())},"#resize"),l(Yg,"MapView3D");var Pg=Yg,lM=Pg;var a2={createMapView3D:l(i=>new lM(i),"createMapView3D")};globalThis[ax]=a2;})();
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
