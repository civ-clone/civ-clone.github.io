"use strict";(()=>{var Ov=Object.create;var $h=Object.defineProperty;var Bv=Object.getOwnPropertyDescriptor;var zv=Object.getOwnPropertyNames;var kv=Object.getPrototypeOf,Gv=Object.prototype.hasOwnProperty;var d0=i=>{throw TypeError(i)};var l=(i,e)=>$h(i,"name",{value:e,configurable:!0});var Vv=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Hv=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of zv(e))!Gv.call(i,r)&&r!==t&&$h(i,r,{get:()=>e[r],enumerable:!(n=Bv(e,r))||n.enumerable});return i};var Wv=(i,e,t)=>(t=i!=null?Ov(kv(i)):{},Hv(e||!i||!i.__esModule?$h(t,"default",{value:i,enumerable:!0}):t,i));var Zh=(i,e,t)=>e.has(i)||d0("Cannot "+t);var p=(i,e,t)=>(Zh(i,e,"read from private field"),t?t.call(i):e.get(i)),K=(i,e,t)=>e.has(i)?d0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),V=(i,e,t,n)=>(Zh(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),N=(i,e,t)=>(Zh(i,e,"access private method"),t);var rs=(i,e,t,n)=>({set _(r){V(i,e,r,t)},get _(){return p(i,e,n)}});var p0=Vv(ss=>{"use strict";var bi,xr=ss&&ss.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(ss,"__esModule",{value:!0}),ss.EventEmitter=void 0;var Jh=class Jh{constructor(){bi.set(this,{})}on(e,t){e in xr(this,bi,"f")||(xr(this,bi,"f")[e]=[]),xr(this,bi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in xr(this,bi,"f")))return;let n=xr(this,bi,"f")[e].indexOf(t);n!==-1&&xr(this,bi,"f")[e].splice(n,1)}emit(e,...t){e in xr(this,bi,"f")&&xr(this,bi,"f")[e].forEach((n=>n(...t)))}};l(Jh,"i");var Zl=Jh;ss.EventEmitter=Zl,bi=new WeakMap,ss.default=Zl});var f0="civMap3D";var m0=Wv(p0());var _r,Mi,Ws,jh=class jh extends m0.EventEmitter{constructor(t,n){super();K(this,_r);K(this,Mi);K(this,Ws);V(this,Mi,t),V(this,Ws,t.lockVerticalEdges),V(this,_r,n)}center(){return p(this,_r).centre()}isVisible(t,n,r=0){return p(this,_r).visible(t,n,r)}lockVerticalEdges(){return p(this,Ws)}nativeTileSize(){return p(this,Mi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,Mi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,Mi).playerId}render(){p(this,_r).changed()}scale(){return p(this,Mi).art.scale()}setCenter(t,n){p(this,_r).centreOn(t,n)}setLockVerticalEdges(t){V(this,Ws,t)}setZoom(){}transport(){return p(this,Mi).transport}zoom(){return p(this,Mi).art.zoom()}};_r=new WeakMap,Mi=new WeakMap,Ws=new WeakMap,l(jh,"MapPortal3D");var Kh=jh,g0=Kh;var Xv=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),x0=Xv;var W0=0,Rd=1,X0=2;var zo=1,pu=2,ba=3,Ur=0,vn=1,Li=2,hs=0,Ma=1,Pd=2,Id=3,Ld=4,q0=5;var ds=100,Y0=101,$0=102,Z0=103,J0=104,K0=200,j0=201,Q0=202,eg=203,Dd=204,Nd=205,tg=206,ng=207,ig=208,rg=209,sg=210,ag=211,og=212,lg=213,cg=214,bc=0,Mc=1,Sc=2,ha=3,wc=4,Ec=5,Ac=6,Tc=7,Ud=0,ug=1,hg=2,Di=0,Fd=1,Od=2,Bd=3,ko=4,zd=5,kd=6,Gd=7;var Vd=300,fs=301,Sa=302,mu=303,gu=304,wi=1e3,$n=1001,Cc=1002,Ot=1003,dg=1004;var Go=1005;var Bt=1006,xu=1007;var Nn=1008;var an=1009,Hd=1010,Wd=1011,wa=1012,_u=1013,ai=1014,oi=1015,Un=1016,vu=1017,yu=1018,ps=1020,Xd=35902,qd=35899,Yd=1021,$d=1022,Fn=1023,tr=1026,sr=1027,Zd=1028,bu=1029,Ni=1030,Mu=1031;var Su=1033,Vo=33776,Ho=33777,Wo=33778,Xo=33779,wu=35840,Eu=35841,Au=35842,Tu=35843,Cu=36196,Ru=37492,Pu=37496,Iu=37488,Lu=37489,qo=37490,Du=37491,Nu=37808,Uu=37809,Fu=37810,Ou=37811,Bu=37812,zu=37813,ku=37814,Gu=37815,Vu=37816,Hu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,$u=36492,Zu=36494,Ju=36495,Ku=36283,ju=36284,Yo=36285,Qu=36286;var _o=2300,Rc=2301,vc=2302,Md=2303,Sd=2400,wd=2401,Ed=2402;var fg=3200;var eh=0,pg=1,li="",Ft="srgb",vo="srgb-linear",yo="linear",dt="srgb";var yc=7680;var mg=519,gg=512,xg=513,_g=514,Jd=515,vg=516,yg=517,Kd=518,jd=519,Qd=35044;var ef="300 es",Zn=2e3,da=2001;function qv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(qv,"arrayNeedsUint32");function Yv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(Yv,"isTypedArray");function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(bo,"createElementNS");function bg(){let i=bo("canvas");return i.style.display="block",i}l(bg,"createCanvasElement");var _0={},fa=null;function Mo(...i){let e="THREE."+i.shift();fa?fa("log",e,...i):console.log(e,...i)}l(Mo,"log");function Mg(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(Mg,"enhanceLogMessage");function Ge(...i){i=Mg(i);let e="THREE."+i.shift();if(fa)fa("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ge,"warn");function He(...i){i=Mg(i);let e="THREE."+i.shift();if(fa)fa("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function go(...i){let e=i.join(" ");e in _0||(_0[e]=!0,Ge(...i))}l(go,"warnOnce");function Sg(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(Sg,"probeAsync");var wg={[bc]:bc,[Sc]:Ac,[wc]:wc,[ha]:Ec,[Mc]:Mc,[Ac]:Sc,[Tc]:Tc,[Ec]:ha},af=class af{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(af,"EventDispatcher");var Ei=af,rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qh=Math.PI/180,Pc=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}l(ms,"generateUUID");function st(i,e,t){return Math.max(e,Math.min(t,i))}l(st,"clamp");function $v(i,e){return(i%e+e)%e}l($v,"euclideanModulo");function ed(i,e,t){return(1-t)*i+t*e}l(ed,"lerp");function Eg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(Eg,"floorPowerOfTwo");function th(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(th,"getNormalizationScale");function Ag(i,e){if(e.constructor===Float32Array)return i;let t=th(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(Ag,"denormalize");function Tg(i,e){if(e.constructor===Float32Array)return i;let t=th(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(Tg,"normalize");var jc=class jc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(jc,"Vector2"),jc.prototype.isVector2=!0;var ke=jc,of=class of{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3],d=s[a+0],m=s[a+1],g=s[a+2],y=s[a+3];if(f!==y||c!==d||u!==m||h!==g){let x=c*d+u*m+h*g+f*y;x<0&&(d=-d,m=-m,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let S=Math.acos(x),A=Math.sin(S);_=Math.sin(_*S)/A,o=Math.sin(o*S)/A,c=c*_+d*o,u=u*_+m*o,h=h*_+g*o,f=f*_+y*o}else{c=c*_+d*o,u=u*_+m*o,h=h*_+g*o,f=f*_+y*o;let S=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=S,u*=S,h*=S,f*=S}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*m-u*d,e[t+1]=c*g+h*d+u*f-o*m,e[t+2]=u*g+h*m+o*d-c*f,e[t+3]=h*g-o*f-c*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+u*m*g,this._y=u*m*f-d*h*g,this._z=u*h*g+d*m*f,this._w=u*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+u*m*g,this._y=u*m*f-d*h*g,this._z=u*h*g-d*m*f,this._w=u*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-u*m*g,this._y=u*m*f+d*h*g,this._z=u*h*g+d*m*f,this._w=u*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-u*m*g,this._y=u*m*f+d*h*g,this._z=u*h*g-d*m*f,this._w=u*h*f+d*m*g;break;case"YZX":this._x=d*h*f+u*m*g,this._y=u*m*f+d*h*g,this._z=u*h*g-d*m*f,this._w=u*h*f-d*m*g;break;case"XZY":this._x=d*h*f-u*m*g,this._y=u*m*f-d*h*g,this._z=u*h*g+d*m*f,this._w=u*h*f+d*m*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(of,"Quaternion");var gn=of,Qc=class Qc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(v0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(v0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Qc,"Vector3"),Qc.prototype.isVector3=!0;var W=Qc,td=new W,v0=new gn,eu=class eu{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],y=r[0],x=r[3],_=r[6],S=r[1],A=r[4],w=r[7],R=r[2],C=r[5],v=r[8];return s[0]=a*y+o*S+c*R,s[3]=a*x+o*A+c*C,s[6]=a*_+o*w+c*v,s[1]=u*y+h*S+f*R,s[4]=u*x+h*A+f*C,s[7]=u*_+h*w+f*v,s[2]=d*y+m*S+g*R,s[5]=d*x+m*A+g*C,s[8]=d*_+m*w+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*s,m=u*s-a*c,g=t*f+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(e,t)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(eu,"Matrix3"),eu.prototype.isMatrix3=!0;var We=eu,nd=new We,y0=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b0=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zv(){let i={enabled:!0,workingColorSpace:vo,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=ua(r.r),r.g=ua(r.g),r.b=ua(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===li?yo:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vo]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:y0,fromXYZ:b0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:y0,fromXYZ:b0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}l(Zv,"createColorManagement");var rt=Zv();function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(er,"SRGBToLinear");function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(ua,"LinearToSRGB");var Xs,lf=class lf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=bo("canvas")),Xs.width=e.width,Xs.height=e.height;let r=Xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(lf,"ImageUtils");var Ic=lf,Jv=0,cf=class cf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(id(r[a].image)):s.push(id(r[a]))}else s=id(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(cf,"TextureSource");var pa=cf;function id(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}l(id,"serializeImage");var Kv=0,rd=new W,la=class la extends Ei{constructor(e=la.DEFAULT_IMAGE,t=la.DEFAULT_MAPPING,n=$n,r=$n,s=Bt,a=Nn,o=Fn,c=an,u=la.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ms(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(la,"Texture");var xn=la;xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Vd;xn.DEFAULT_ANISOTROPY=1;var tu=class tu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,w=(m+1)/2,R=(_+1)/2,C=(h+d)/4,v=(f+y)/4,E=(g+x)/4;return A>w&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=C/n,s=v/n):w>R?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=C/r,s=E/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=v/s,r=E/s),this.set(n,r,s,t),this}let S=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(f-y)/S,this.z=(d-h)/S,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(tu,"Vector4"),tu.prototype.isVector4=!0;var At=tu,uf=class uf extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new xn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new pa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(uf,"RenderTarget");var Lc=uf,hf=class hf extends Lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(hf,"WebGLRenderTarget");var In=hf,df=class df extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(df,"DataArrayTexture");var us=df;var ff=class ff extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(ff,"Data3DTexture");var Dc=ff;var xo=class xo{constructor(e,t,n,r,s,a,o,c,u,h,f,d,m,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,f,d,m,g,y,x)}set(e,t,n,r,s,a,o,c,u,h,f,d,m,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=m+g*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=g+m*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,g=u*h,y=u*f;t[0]=d+y*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,g=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=g*u-m,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=m*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Qv)}lookAt(e,t,n){let r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),vr.crossVectors(n,Rn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),vr.crossVectors(n,Rn)),vr.normalize(),Jl.crossVectors(Rn,vr),r[0]=vr.x,r[4]=Jl.x,r[8]=Rn.x,r[1]=vr.y,r[5]=Jl.y,r[9]=Rn.y,r[2]=vr.z,r[6]=Jl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],y=n[6],x=n[10],_=n[14],S=n[3],A=n[7],w=n[11],R=n[15],C=r[0],v=r[4],E=r[8],I=r[12],P=r[1],F=r[5],k=r[9],Z=r[13],L=r[2],q=r[6],ne=r[10],U=r[14],J=r[3],G=r[7],j=r[11],z=r[15];return s[0]=a*C+o*P+c*L+u*J,s[4]=a*v+o*F+c*q+u*G,s[8]=a*E+o*k+c*ne+u*j,s[12]=a*I+o*Z+c*U+u*z,s[1]=h*C+f*P+d*L+m*J,s[5]=h*v+f*F+d*q+m*G,s[9]=h*E+f*k+d*ne+m*j,s[13]=h*I+f*Z+d*U+m*z,s[2]=g*C+y*P+x*L+_*J,s[6]=g*v+y*F+x*q+_*G,s[10]=g*E+y*k+x*ne+_*j,s[14]=g*I+y*Z+x*U+_*z,s[3]=S*C+A*P+w*L+R*J,s[7]=S*v+A*F+w*q+R*G,s[11]=S*E+A*k+w*ne+R*j,s[15]=S*I+A*Z+w*U+R*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],y=e[7],x=e[11],_=e[15],S=c*m-u*d,A=o*m-u*f,w=o*d-c*f,R=a*m-u*h,C=a*d-c*h,v=a*f-o*h;return t*(y*S-x*A+_*w)-n*(g*S-x*R+_*C)+r*(g*A-y*R+_*v)-s*(g*w-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],y=e[13],x=e[14],_=e[15],S=t*o-n*a,A=t*c-r*a,w=t*u-s*a,R=n*c-r*o,C=n*u-s*o,v=r*u-s*c,E=h*y-f*g,I=h*x-d*g,P=h*_-m*g,F=f*x-d*y,k=f*_-m*y,Z=d*_-m*x,L=S*Z-A*k+w*F+R*P-C*I+v*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/L;return e[0]=(o*Z-c*k+u*F)*q,e[1]=(r*k-n*Z-s*F)*q,e[2]=(y*v-x*C+_*R)*q,e[3]=(d*C-f*v-m*R)*q,e[4]=(c*P-a*Z-u*I)*q,e[5]=(t*Z-r*P+s*I)*q,e[6]=(x*w-g*v-_*A)*q,e[7]=(h*v-d*w+m*A)*q,e[8]=(a*k-o*P+u*E)*q,e[9]=(n*P-t*k-s*E)*q,e[10]=(g*C-y*w+_*S)*q,e[11]=(f*w-h*C-m*S)*q,e[12]=(o*I-a*F-c*E)*q,e[13]=(t*F-n*I+r*E)*q,e[14]=(y*A-g*R-x*S)*q,e[15]=(h*R-f*A+d*S)*q,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,d=s*u,m=s*h,g=s*f,y=a*h,x=a*f,_=o*f,S=c*u,A=c*h,w=c*f,R=n.x,C=n.y,v=n.z;return r[0]=(1-(y+_))*R,r[1]=(m+w)*R,r[2]=(g-A)*R,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(d+_))*C,r[6]=(x+S)*C,r[7]=0,r[8]=(g+A)*v,r[9]=(x-S)*v,r[10]=(1-(d+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=qs.set(r[0],r[1],r[2]).length(),o=qs.set(r[4],r[5],r[6]).length(),c=qs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ii.copy(this);let u=1/a,h=1/o,f=1/c;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Zn,c=!1){let u=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),m=(n+r)/(n-r),g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===Zn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===da)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Zn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),m=-(n+r)/(n-r),g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===Zn)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===da)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(xo,"Matrix4"),xo.prototype.isMatrix4=!0;var mt=xo,qs=new W,ii=new mt,jv=new W(0,0,0),Qv=new W(1,1,1),vr=new W,Jl=new W,Rn=new W,M0=new mt,S0=new gn,nu=class nu{constructor(e=0,t=0,n=0,r=nu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(nu,"Euler");var Ln=nu;Ln.DEFAULT_ORDER="XYZ";var pf=class pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(pf,"Layers");var So=pf,ey=0,w0=new W,Ys=new gn,Yi=new mt,Kl=new W,lo=new W,ty=new W,ny=new gn,E0=new W(1,0,0),A0=new W(0,1,0),T0=new W(0,0,1),C0={type:"added"},iy={type:"removed"},$s={type:"childadded",child:null},sd={type:"childremoved",child:null},ca=class ca extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ca.DEFAULT_UP.clone();let e=new W,t=new Ln,n=new gn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new We}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=ca.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ca.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,t){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kl.copy(e):Kl.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(lo,Kl,this.up):Yi.lookAt(Kl,lo,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),$s.child=e,this.dispatchEvent($s),$s.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iy),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,ty),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,ny,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(ca,"Object3D");var Jt=ca;Jt.DEFAULT_UP=new W(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mf=class mf extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(mf,"Group");var mn=mf,ry={type:"move"},gf=class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(gf,"WebXRController");var ma=gf,Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function ad(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(ad,"hue2rgb");var xf=class xf{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=$v(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ad(a,s,e+1/3),this.g=ad(a,s,e),this.b=ad(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Cg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return rt.workingToColorSpace(sn.copy(this),e),Math.round(st(sn.r*255,0,255))*65536+Math.round(st(sn.g*255,0,255))*256+Math.round(st(sn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(sn.copy(this),t);let n=sn.r,r=sn.g,s=sn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ft){rt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,r=sn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(jl);let n=ed(yr.h,jl.h,t),r=ed(yr.s,jl.s,t),s=ed(yr.l,jl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(xf,"Color");var Ue=xf,sn=new Ue;Ue.NAMES=Cg;var iu=class iu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(iu,"Fog");var wo=iu,_f=class _f extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(_f,"Scene");var Eo=_f,ri=new W,$i=new W,od=new W,Zi=new W,Zs=new W,Js=new W,R0=new W,ld=new W,cd=new W,ud=new W,hd=new At,dd=new At,fd=new At,wr=class wr{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ri.subVectors(r,t),$i.subVectors(n,t),od.subVectors(e,t);let a=ri.dot(ri),o=ri.dot($i),c=ri.dot(od),u=$i.dot($i),h=$i.dot(od),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(u*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zi.x),c.addScaledVector(a,Zi.y),c.addScaledVector(o,Zi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return hd.setScalar(0),dd.setScalar(0),fd.setScalar(0),hd.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,n),fd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hd,s.x),a.addScaledVector(dd,s.y),a.addScaledVector(fd,s.z),a}static isFrontFacing(e,t,n,r){return ri.subVectors(n,t),$i.subVectors(e,t),ri.cross($i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),ri.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Zs.subVectors(r,n),Js.subVectors(s,n),ld.subVectors(e,n);let c=Zs.dot(ld),u=Js.dot(ld);if(c<=0&&u<=0)return t.copy(n);cd.subVectors(e,r);let h=Zs.dot(cd),f=Js.dot(cd);if(h>=0&&f<=h)return t.copy(r);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Zs,a);ud.subVectors(e,s);let m=Zs.dot(ud),g=Js.dot(ud);if(g>=0&&m<=g)return t.copy(s);let y=m*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Js,o);let x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return R0.subVectors(s,r),o=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(R0,o);let _=1/(x+y+d);return a=y*_,o=d*_,t.copy(n).addScaledVector(Zs,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(wr,"Triangle");var ji=wr,vf=class vf{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ql.copy(n.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),ec.subVectors(this.max,co),Ks.subVectors(e.a,co),js.subVectors(e.b,co),Qs.subVectors(e.c,co),br.subVectors(js,Ks),Mr.subVectors(Qs,js),as.subVectors(Ks,Qs);let t=[0,-br.z,br.y,0,-Mr.z,Mr.y,0,-as.z,as.y,br.z,0,-br.x,Mr.z,0,-Mr.x,as.z,0,-as.x,-br.y,br.x,0,-Mr.y,Mr.x,0,-as.y,as.x,0];return!pd(t,Ks,js,Qs,ec)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,Ks,js,Qs,ec))?!1:(tc.crossVectors(br,Mr),t=[tc.x,tc.y,tc.z],pd(t,Ks,js,Qs,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(vf,"Box3");var Ar=vf,Ji=[new W,new W,new W,new W,new W,new W,new W,new W],si=new W,Ql=new Ar,Ks=new W,js=new W,Qs=new W,br=new W,Mr=new W,as=new W,co=new W,ec=new W,tc=new W,os=new W;function pd(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){os.fromArray(i,s);let o=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),c=e.dot(os),u=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(pd,"satForAxes");var Qi=sy();function sy(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(sy,"_generateTables");function ay(i){Math.abs(i)>65504&&Ge("DataUtils.toHalfFloat(): Value out of range."),i=st(i,-65504,65504),Qi.floatView[0]=i;let e=Qi.uint32View[0],t=e>>23&511;return Qi.baseTable[t]+((e&8388607)>>Qi.shiftTable[t])}l(ay,"toHalfFloat");function oy(i){let e=i>>10;return Qi.uint32View[0]=Qi.mantissaTable[Qi.offsetTable[e]+(i&1023)]+Qi.exponentTable[e],Qi.floatView[0]}l(oy,"fromHalfFloat");var yf=class yf{static toHalfFloat(e){return ay(e)}static fromHalfFloat(e){return oy(e)}};l(yf,"DataUtils");var Ai=yf,Ut=new W,nc=new ke,ly=0,bf=class bf extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qd,this.updateRanges=[],this.gpuType=oi,this.version=0,this._normalizationScale=e!==void 0?th(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ag(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Tg(e,this.array)}};l(bf,"BufferAttribute");var vt=bf;var Mf=class Mf extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Mf,"Uint16BufferAttribute");var Ao=Mf;var Sf=class Sf extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Sf,"Uint32BufferAttribute");var To=Sf;var wf=class wf extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(wf,"Float32BufferAttribute");var It=wf,cy=new Ar,uo=new W,md=new W,Ef=class Ef{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);let t=uo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(uo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(md)),this.expandByPoint(uo.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Ef,"Sphere");var ga=Ef,uy=0,Yn=new mt,gd=new Jt,ea=new W,Pn=new Ar,ho=new Ar,qt=new W,ru=class ru extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qv(e)?To:Ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Pn.min,ho.min),Pn.expandByPoint(qt),qt.addVectors(Pn.max,ho.max),Pn.expandByPoint(qt)):(Pn.expandByPoint(ho.min),Pn.expandByPoint(ho.max))}Pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)qt.fromBufferAttribute(o,u),c&&(ea.fromBufferAttribute(e,u),qt.add(ea)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new W,c[I]=new W;let h=new W,f=new W,d=new W,m=new ke,g=new ke,y=new ke,x=new W,_=new W;function S(I,P,F){u[I]=u[P]=u[F]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,F),m.fromBufferAttribute(s,I),g.fromBufferAttribute(s,P),y.fromBufferAttribute(s,F),f.sub(h),d.sub(h),g.sub(m),y.sub(m);let k=1/(g.x*y.y-y.x*g.y);isFinite(k)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(k),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(k),o[I].add(x),o[P].add(x),o[F].add(x),c[I].add(_),c[P].add(_),c[F].add(_))}l(S,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,P=A.length;I<P;++I){let F=A[I],k=F.start,Z=F.count;for(let L=k,q=k+Z;L<q;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let w=new W,R=new W,C=new W,v=new W;function E(I){C.fromBufferAttribute(r,I),v.copy(C);let P=o[I];w.copy(P),w.sub(C.multiplyScalar(C.dot(P))).normalize(),R.crossVectors(v,P);let k=R.dot(c[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,k)}l(E,"handleVertex");for(let I=0,P=n.count;I<P;++I)u[I]&&E(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),m=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let _=0;_<h;_++)d[g++]=u[m++]}return new vt(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ru,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let m=u[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],f=s[u];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(ru,"BufferGeometry");var zt=ru,Af=class Af{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qd,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=P0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=P0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Af,"InterleavedBuffer");var Co=Af;function P0(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ms()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(P0,"getArrayKey");var fn=new W,su=class su{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?th(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new su(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ag(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Tg(e,this.data.array)}};l(su,"InterleavedBufferAttribute");var xa=su,xd=new W,hy=new W,dy=new We,Tf=class Tf{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xd.subVectors(n,t).cross(hy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dy.getNormalMatrix(e),r=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Tf,"Plane");var Mn=Tf,fy=0,Cf=class Cf extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Ma,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Cf,"Material");var nr=Cf,Rf=class Rf extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Rf,"SpriteMaterial");var Tr=Rf,ta,fo=new W,na=new W,ia=new W,ra=new ke,po=new ke,Rg=new mt,ic=new W,mo=new W,rc=new W,I0=new ke,_d=new ke,L0=new ke,Pf=class Pf extends Jt{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",ta===void 0){ta=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Co(t,5);ta.setIndex([0,1,2,0,2,3]),ta.setAttribute("position",new xa(n,3,0,!1)),ta.setAttribute("uv",new xa(n,2,3,!1))}this.geometry=ta,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),na.setFromMatrixScale(this.matrixWorld),Rg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&na.multiplyScalar(-ia.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;sc(ic.set(-.5,-.5,0),ia,a,na,r,s),sc(mo.set(.5,-.5,0),ia,a,na,r,s),sc(rc.set(.5,.5,0),ia,a,na,r,s),I0.set(0,0),_d.set(1,0),L0.set(1,1);let o=e.ray.intersectTriangle(ic,mo,rc,!1,fo);if(o===null&&(sc(mo.set(-.5,.5,0),ia,a,na,r,s),_d.set(0,1),o=e.ray.intersectTriangle(ic,rc,mo,!1,fo),o===null))return;let c=e.ray.origin.distanceTo(fo);c<e.near||c>e.far||t.push({distance:c,point:fo.clone(),uv:ji.getInterpolation(fo,ic,mo,rc,I0,_d,L0,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Pf,"Sprite");var _a=Pf;function sc(i,e,t,n,r,s){ra.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(po.x=s*ra.x-r*ra.y,po.y=r*ra.x+s*ra.y):po.copy(ra),i.copy(e),i.x+=po.x,i.y+=po.y,i.applyMatrix4(Rg)}l(sc,"transformVertex");var Ki=new W,vd=new W,ac=new W,oc=new W,If=class If{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vd.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),oc.copy(this.origin).sub(vd);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ac),o=oc.dot(this.direction),c=-oc.dot(ac),u=oc.lengthSq(),h=Math.abs(1-a*a),f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vd).addScaledVector(ac,d),m}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),r=Ki.dot(Ki)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,S=n.y-a.y,A=n.z-a.z,w=Math.abs(c),R=Math.abs(u),C=Math.abs(h),v,E,I,P,F,k,Z,L,q,ne,U,J;if(w>=R&&w>=C?(I=c,k=f,q=g,J=_,c>=0?(v=u,E=h,P=d,F=m,Z=y,L=x,ne=S,U=A):(v=h,E=u,P=m,F=d,Z=x,L=y,ne=A,U=S)):R>=C?(I=u,k=d,q=y,J=S,u>=0?(v=h,E=c,P=m,F=f,Z=x,L=g,ne=A,U=_):(v=c,E=h,P=f,F=m,Z=g,L=x,ne=_,U=A)):(I=h,k=m,q=x,J=A,h>=0?(v=c,E=u,P=f,F=d,Z=g,L=y,ne=_,U=S):(v=u,E=c,P=d,F=f,Z=y,L=g,ne=S,U=_)),I===0)return null;let G=v/I,j=E/I,z=1/I,ie=P-G*k,re=F-j*k,H=Z-G*q,ae=L-j*q,te=ne-G*J,de=U-j*J,ce=te*ae-de*H,Ce=ie*de-re*te,Ve=H*re-ae*ie;if(r){if(ce<0||Ce<0||Ve<0)return null}else if((ce<0||Ce<0||Ve<0)&&(ce>0||Ce>0||Ve>0))return null;let Ee=ce+Ce+Ve;if(Ee===0)return null;let qe=z*(ce*k+Ce*q+Ve*J);return(Ee>0?qe<0:qe>0)?null:this.at(qe/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(If,"Ray");var Nc=If,Lf=class Lf extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Lf,"MeshBasicMaterial");var Uc=Lf,D0=new mt,ls=new Nc,lc=new ga,N0=new W,cc=new W,uc=new W,hc=new W,yd=new W,dc=new W,U0=new W,fc=new W,Df=class Df extends Jt{constructor(e=new zt,t=new Uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){dc.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],f=s[c];h!==0&&(yd.fromBufferAttribute(f,e),a?dc.addScaledVector(yd,h):dc.addScaledVector(yd.sub(t),h))}t.add(dc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),ls.copy(e.ray).recast(e.near),!(lc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(lc,N0)===null||ls.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(D0.copy(s).invert(),ls.copy(e.ray).applyMatrix4(D0),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],S=Math.max(x.start,m.start),A=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let w=S,R=A;w<R;w+=3){let C=o.getX(w),v=o.getX(w+1),E=o.getX(w+2);r=pc(this,_,e,n,u,h,f,C,v,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let S=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);r=pc(this,a,e,n,u,h,f,S,A,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],S=Math.max(x.start,m.start),A=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let w=S,R=A;w<R;w+=3){let C=w,v=w+1,E=w+2;r=pc(this,_,e,n,u,h,f,C,v,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let S=x,A=x+1,w=x+2;r=pc(this,a,e,n,u,h,f,S,A,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};l(Df,"Mesh");var Tt=Df;function py(i,e,t,n,r,s,a,o){let c;if(e.side===vn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ur,o),c===null)return null;fc.copy(o),fc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(fc);return u<t.near||u>t.far?null:{distance:u,point:fc.clone(),object:i}}l(py,"checkIntersection$1");function pc(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,cc),i.getVertexPosition(c,uc),i.getVertexPosition(u,hc);let h=py(i,e,t,n,cc,uc,hc,U0);if(h){let f=new W;ji.getBarycoord(U0,cc,uc,hc,f),r&&(h.uv=ji.getInterpolatedAttribute(r,o,c,u,f,new ke)),s&&(h.uv1=ji.getInterpolatedAttribute(s,o,c,u,f,new ke)),a&&(h.normal=ji.getInterpolatedAttribute(a,o,c,u,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new W,materialIndex:0};ji.getNormal(cc,uc,hc,d.normal),h.face=d,h.barycoord=f}return h}l(pc,"checkGeometryIntersection");var Nf=class Nf extends xn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Ot,h=Ot,f,d){super(null,a,o,c,u,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Nf,"DataTexture");var va=Nf;var Uf=class Uf extends vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(Uf,"InstancedBufferAttribute");var ir=Uf;var cs=new ga,my=new ke(.5,.5),mc=new W,Ff=class Ff{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],f=s[5],d=s[6],m=s[7],g=s[8],y=s[9],x=s[10],_=s[11],S=s[12],A=s[13],w=s[14],R=s[15];if(r[0].setComponents(u-a,m-h,_-g,R-S).normalize(),r[1].setComponents(u+a,m+h,_+g,R+S).normalize(),r[2].setComponents(u+o,m+f,_+y,R+A).normalize(),r[3].setComponents(u-o,m-f,_-y,R-A).normalize(),n)r[4].setComponents(c,d,x,w).normalize(),r[5].setComponents(u-c,m-d,_-x,R-w).normalize();else if(r[4].setComponents(u-c,m-d,_-x,R-w).normalize(),t===Zn)r[5].setComponents(u+c,m+d,_+x,R+w).normalize();else if(t===da)r[5].setComponents(c,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=my.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mc.x=r.normal.x>0?e.max.x:e.min.x,mc.y=r.normal.y>0?e.max.y:e.min.y,mc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(Ff,"Frustum");var Cr=Ff,F0=new mt,au=class au{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];F0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Cr),n[r].setFromProjectionMatrix(F0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Cr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new au().copy(this)}};l(au,"FrustumArray");var Fc=au;var Of=class Of extends xn{constructor(e=[],t=fs,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(Of,"CubeTexture");var Ro=Of,Bf=class Bf extends xn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(Bf,"CanvasTexture");var Rr=Bf;var zf=class zf extends xn{constructor(e,t,n=ai,r,s,a,o=Ot,c=Ot,u,h=tr,f=1){if(h!==tr&&h!==sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(zf,"DepthTexture");var rr=zf,kf=class kf extends rr{constructor(e,t=ai,n=fs,r,s,a=Ot,o=Ot,c,u=tr){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(kf,"CubeDepthTexture");var Po=kf,Gf=class Gf extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(Gf,"ExternalTexture");var Io=Gf,ou=class ou extends zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function g(y,x,_,S,A,w,R,C,v,E,I){let P=w/v,F=R/E,k=w/2,Z=R/2,L=C/2,q=v+1,ne=E+1,U=0,J=0,G=new W;for(let j=0;j<ne;j++){let z=j*F-Z;for(let ie=0;ie<q;ie++){let re=ie*P-k;G[y]=re*S,G[x]=z*A,G[_]=L,u.push(G.x,G.y,G.z),G[y]=0,G[x]=0,G[_]=C>0?1:-1,h.push(G.x,G.y,G.z),f.push(ie/v),f.push(1-j/E),U+=1}}for(let j=0;j<E;j++)for(let z=0;z<v;z++){let ie=d+z+q*j,re=d+z+q*(j+1),H=d+(z+1)+q*(j+1),ae=d+(z+1)+q*j;c.push(ie,re,ae),c.push(re,H,ae),J+=6}o.addGroup(m,J,I),m+=J,d+=U}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(ou,"BoxGeometry");var Ti=ou;var lu=class lu extends zt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],d=[],m=[],g=0,y=[],x=n/2,_=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function S(){let w=new W,R=new W,C=0,v=(t-e)/n;for(let E=0;E<=s;E++){let I=[],P=E/s,F=P*(t-e)+e;for(let k=0;k<=r;k++){let Z=k/r,L=Z*c+o,q=Math.sin(L),ne=Math.cos(L);R.x=F*q,R.y=-P*n+x,R.z=F*ne,f.push(R.x,R.y,R.z),w.set(q,v,ne).normalize(),d.push(w.x,w.y,w.z),m.push(Z,1-P),I.push(g++)}y.push(I)}for(let E=0;E<r;E++)for(let I=0;I<s;I++){let P=y[I][E],F=y[I+1][E],k=y[I+1][E+1],Z=y[I][E+1];(e>0||I!==0)&&(h.push(P,F,Z),C+=3),(t>0||I!==s-1)&&(h.push(F,k,Z),C+=3)}u.addGroup(_,C,0),_+=C}l(S,"generateTorso");function A(w){let R=g,C=new ke,v=new W,E=0,I=w===!0?e:t,P=w===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,x*P,0),d.push(0,P,0),m.push(.5,.5),g++;let F=g;for(let k=0;k<=r;k++){let L=k/r*c+o,q=Math.cos(L),ne=Math.sin(L);v.x=I*ne,v.y=x*P,v.z=I*q,f.push(v.x,v.y,v.z),d.push(0,P,0),C.x=q*.5+.5,C.y=ne*.5*P+.5,m.push(C.x,C.y),g++}for(let k=0;k<r;k++){let Z=R+k,L=F+k;w===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),E+=3}u.addGroup(_,E,w===!0?1:2),_+=E}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(lu,"CylinderGeometry");var Ci=lu,cu=class cu extends Ci{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new cu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(cu,"ConeGeometry");var Ri=cu;var uu=class uu extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=e/o,d=t/c,m=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let S=_*d-a;for(let A=0;A<u;A++){let w=A*f-s;g.push(w,-S,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){let A=S+u*_,w=S+u*(_+1),R=S+1+u*(_+1),C=S+1+u*_;m.push(A,w,C),m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}};l(uu,"PlaneGeometry");var Pi=uu;var hu=class hu extends zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new W,d=new W,m=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let S=[],A=_/n,w=a+A*o,R=e*Math.cos(w),C=Math.sqrt(e*e-R*R),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let I=E/t,P=r+I*s;f.x=-C*Math.cos(P),f.y=R,f.z=C*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),x.push(I+v,1-A),S.push(u++)}h.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){let A=h[_][S+1],w=h[_][S],R=h[_+1][S],C=h[_+1][S+1];(_!==0||a>0)&&m.push(A,w,C),(_!==n-1||c<Math.PI)&&m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(hu,"SphereGeometry");var Pr=hu;var du=class du extends zt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],f=[],d=new W,m=new W,g=new W;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=r;_++){let S=_/r*s;m.x=(e+t*Math.cos(x))*Math.cos(S),m.y=(e+t*Math.cos(x))*Math.sin(S),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(_/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let _=(r+1)*y+x-1,S=(r+1)*(y-1)+x-1,A=(r+1)*(y-1)+x,w=(r+1)*y+x;c.push(_,S,w),c.push(S,A,w)}this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(du,"TorusGeometry");var Ir=du;function gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(O0(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(O0(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(gs,"cloneUniforms");function on(i){let e={};for(let t=0;t<i.length;t++){let n=gs(i[t]);for(let r in n)e[r]=n[r]}return e}l(on,"mergeUniforms");function O0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(O0,"isThreeObject");function gy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(gy,"cloneUniformsGroups");function tf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}l(tf,"getUnlitUniformColorSpace");var xs={clone:gs,merge:on},xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vf=class Vf extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(r.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new At().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(Vf,"ShaderMaterial");var _n=Vf,Hf=class Hf extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(Hf,"RawShaderMaterial");var Oc=Hf,Wf=class Wf extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Wf,"MeshStandardMaterial");var Ii=Wf;var Xf=class Xf extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Xf,"MeshDepthMaterial");var Bc=Xf,qf=class qf extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(qf,"MeshDistanceMaterial");var zc=qf;function sa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(sa,"convertArray");function gc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(gc,"hasTangents");var Yf=class Yf{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Yf,"Interpolant");var Lr=Yf,$f=class $f extends Lr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sd,endingEnd:Sd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case wd:s=e,o=2*t-n;break;case Ed:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wd:a=e,c=2*n-t;break;case Ed:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),y=g*g,x=y*g,_=-d*x+2*d*y-d*g,S=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,A=(-1-m)*x+(1.5+m)*y+.5*g,w=m*x-m*y;for(let R=0;R!==o;++R)s[R]=_*a[h+R]+S*a[u+R]+A*a[c+R]+w*a[f+R];return s}};l($f,"CubicInterpolant");var kc=$f,Zf=class Zf extends Lr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),f=1-h;for(let d=0;d!==o;++d)s[d]=a[u+d]*f+a[c+d]*h;return s}};l(Zf,"LinearInterpolant");var Gc=Zf,Jf=class Jf extends Lr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(Jf,"DiscreteInterpolant");var Vc=Jf,Kf=class Kf extends Lr{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(r-t),y=1-g;for(let x=0;x!==o;++x)s[x]=a[u+x]*y+a[c+x]*g;return s}let d=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=m*d+g*2,S=f[_],A=f[_+1],w=e*d+g*2,R=h[w],C=h[w+1],v=yy(n,t,S,R,r);s[g]=Pg(v,y,A,C,x)}return s}};l(Kf,"BezierInterpolant");var Hc=Kf;function Pg(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l(Pg,"cubicBezier");function vy(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(vy,"cubicBezierSlope");function yy(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Pg(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=vy(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(yy,"solveBezierParameter");var jf=class jf{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),gc(e.settings)&&(n.settings={inTangents:sa(e.settings.inTangents,Array),outTangents:sa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case Rc:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break;case Md:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return Rc;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return Md}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;gc(this.settings)&&(B0(this.settings.inTangents,e),B0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;gc(this.settings)&&(z0(this.settings.inTangents,e),z0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Yv(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===vc,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,gc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(jf,"KeyframeTrack");var Dn=jf;function B0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(B0,"shiftTangentTimes");function z0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(z0,"scaleTangentTimes");Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Rc;var Qf=class Qf extends Dn{constructor(e,t,n){super(e,t,n)}};l(Qf,"BooleanKeyframeTrack");var Dr=Qf;Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=_o;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var ep=class ep extends Dn{constructor(e,t,n,r){super(e,t,n,r)}};l(ep,"ColorKeyframeTrack");var Wc=ep;Wc.prototype.ValueTypeName="color";var tp=class tp extends Dn{constructor(e,t,n,r){super(e,t,n,r)}};l(tp,"NumberKeyframeTrack");var Xc=tp;Xc.prototype.ValueTypeName="number";var np=class np extends Lr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)gn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(np,"QuaternionLinearInterpolant");var qc=np,ip=class ip extends Dn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};l(ip,"QuaternionKeyframeTrack");var Lo=ip;Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var rp=class rp extends Dn{constructor(e,t,n){super(e,t,n)}};l(rp,"StringKeyframeTrack");var Nr=rp;Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=_o;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var sp=class sp extends Dn{constructor(e,t,n,r){super(e,t,n,r)}};l(sp,"VectorKeyframeTrack");var Yc=sp;Yc.prototype.ValueTypeName="vector";var ap=class ap{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let m=u[f],g=u[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(ap,"LoadingManager");var $c=ap,Ig=new $c,op=class op{constructor(e){this.manager=e!==void 0?e:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(op,"Loader");var Zc=op;Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var lp=class lp extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(lp,"Light");var Do=lp,cp=class cp extends Do{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(cp,"HemisphereLight");var No=cp,bd=new mt,k0=new W,G0=new W,up=class up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;k0.setFromMatrixPosition(e.matrixWorld),t.position.copy(k0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bd,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===da||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(up,"LightShadow");var Jc=up,xc=new W,_c=new gn,Si=new W,hp=class hp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,_c,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,_c,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xc,_c,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,_c,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(hp,"Camera");var Uo=hp,Sr=new W,V0=new ke,H0=new ke,dp=class dp extends Uo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,V0,H0),t.subVectors(H0,V0)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qh*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(dp,"PerspectiveCamera");var pn=dp;var fp=class fp extends Uo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(fp,"OrthographicCamera");var Fo=fp,pp=class pp extends Jc{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(pp,"DirectionalLightShadow");var Ad=pp,mp=class mp extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(mp,"DirectionalLight");var Oo=mp;var gp=class gp extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(gp,"InstancedBufferGeometry");var Bo=gp;var aa=-90,oa=1,xp=class xp extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new pn(aa,oa,e,t);r.layers=this.layers,this.add(r);let s=new pn(aa,oa,e,t);s.layers=this.layers,this.add(s);let a=new pn(aa,oa,e,t);a.layers=this.layers,this.add(a);let o=new pn(aa,oa,e,t);o.layers=this.layers,this.add(o);let c=new pn(aa,oa,e,t);c.layers=this.layers,this.add(c);let u=new pn(aa,oa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(xp,"CubeCamera");var ya=xp,_p=class _p extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(_p,"ArrayCamera");var Kc=_p;var nf="\\[\\]\\.:\\/",by=new RegExp("["+nf+"]","g"),rf="[^"+nf+"]",My="[^"+nf.replace("\\.","")+"]",Sy=/((?:WC+[\/:])*)/.source.replace("WC",rf),wy=/(WCOD+)?/.source.replace("WCOD",My),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),Ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),Ty=new RegExp("^"+Sy+wy+Ey+Ay+"$"),Cy=["material","materials","bones","map"],vp=class vp{constructor(e,t,n){let r=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(vp,"Composite");var Td=vp,Er=class Er{constructor(e,t,n){this.path=t,this.parsedPath=n||Er.parseTrackName(t),this.node=Er.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Er.Composite(e,t,n):new Er(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(by,"")}static parseTrackName(e){let t=Ty.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Cy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=Er.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Er,"PropertyBinding");var bt=Er;bt.Composite=Td;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rT=new Float32Array(1);var fu=class fu{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(fu,"Matrix2"),fu.prototype.isMatrix2=!0;var Cd=fu;function sf(i,e,t,n){let r=Ry(n);switch(t){case Yd:return i*e;case Zd:return i*e/r.components*r.byteLength;case bu:return i*e/r.components*r.byteLength;case Ni:return i*e*2/r.components*r.byteLength;case Mu:return i*e*2/r.components*r.byteLength;case $d:return i*e*3/r.components*r.byteLength;case Fn:return i*e*4/r.components*r.byteLength;case Su:return i*e*4/r.components*r.byteLength;case Vo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eu:case Tu:return Math.max(i,16)*Math.max(e,8)/4;case wu:case Au:return Math.max(i,8)*Math.max(e,8)/2;case Cu:case Ru:case Iu:case Lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pu:case qo:case Du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $u:case Zu:case Ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ku:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yo:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(sf,"getByteLength");function Ry(i){switch(i){case an:case Hd:return{byteLength:1,components:1};case wa:case Wd:case Un:return{byteLength:2,components:1};case vu:case yu:return{byteLength:2,components:4};case ai:case _u:case oi:return{byteLength:4,components:1};case Xd:case qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(Ry,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Qg(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(Qg,"WebGLAnimation");function Uy(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l(Uy,"WebGLAttributes");var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
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
#endif`,By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
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
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
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
#endif`,Jy=`#ifdef USE_BUMPMAP
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sb=`#define PI 3.141592653589793
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
} // validated`,ab=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,Sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ab=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Db=`uniform sampler2D dfgLUT;
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
}`,Nb=`
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ob=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
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
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rM=`#ifdef USE_NORMALMAP
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
#endif`,sM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform float backgroundBlurriness;
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
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
}`,VM=`#if DEPTH_PACKING == 3200
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
}`,HM=`#define DISTANCE
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
}`,WM=`#define DISTANCE
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`uniform float scale;
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
}`,$M=`uniform vec3 diffuse;
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
}`,ZM=`#include <common>
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
}`,JM=`uniform vec3 diffuse;
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
}`,KM=`#define LAMBERT
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
}`,jM=`#define LAMBERT
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
}`,QM=`#define MATCAP
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
}`,eS=`#define MATCAP
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
}`,tS=`#define NORMAL
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
}`,nS=`#define NORMAL
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
}`,iS=`#define PHONG
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
}`,rS=`#define PHONG
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
}`,sS=`#define STANDARD
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
}`,aS=`#define STANDARD
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
}`,oS=`#define TOON
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
}`,lS=`#define TOON
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
}`,cS=`uniform float size;
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
}`,uS=`uniform vec3 diffuse;
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
}`,hS=`#include <common>
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
}`,dS=`uniform vec3 color;
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
}`,fS=`uniform float rotation;
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
}`,pS=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Fy,alphahash_pars_fragment:Oy,alphamap_fragment:By,alphamap_pars_fragment:zy,alphatest_fragment:ky,alphatest_pars_fragment:Gy,aomap_fragment:Vy,aomap_pars_fragment:Hy,batching_pars_vertex:Wy,batching_vertex:Xy,begin_vertex:qy,beginnormal_vertex:Yy,bsdfs:$y,iridescence_fragment:Zy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:eb,color_fragment:tb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:rb,common:sb,defaultnormal_vertex:ab,displacementmap_pars_vertex:ob,displacementmap_vertex:lb,emissivemap_fragment:cb,emissivemap_pars_fragment:ub,colorspace_fragment:hb,colorspace_pars_fragment:db,envmap_fragment:fb,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Tb,envmap_vertex:xb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:yb,fog_pars_fragment:bb,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:Sb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Ab,lights_toon_fragment:Cb,lights_toon_pars_fragment:Rb,lights_phong_fragment:Pb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Lb,lights_physical_pars_fragment:Db,lights_fragment_begin:Nb,lights_fragment_maps:Ub,lights_fragment_end:Fb,lightprobes_pars_fragment:Ob,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:zb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Gb,map_fragment:Vb,map_pars_fragment:Hb,map_particle_fragment:Wb,map_particle_pars_fragment:Xb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:Yb,morphinstance_vertex:$b,morphcolor_vertex:Zb,morphnormal_vertex:Jb,morphtarget_pars_vertex:Kb,morphtarget_vertex:jb,normal_fragment_begin:Qb,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:rM,clearcoat_normal_fragment_begin:sM,clearcoat_normal_fragment_maps:aM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:uM,premultiplied_alpha_fragment:hM,project_vertex:dM,dithering_fragment:fM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:xM,shadowmap_pars_vertex:_M,shadowmap_vertex:vM,shadowmask_pars_fragment:yM,skinbase_vertex:bM,skinning_pars_vertex:MM,skinning_vertex:SM,skinnormal_vertex:wM,specularmap_fragment:EM,specularmap_pars_fragment:AM,tonemapping_fragment:TM,tonemapping_pars_fragment:CM,transmission_fragment:RM,transmission_pars_fragment:PM,uv_pars_fragment:IM,uv_pars_vertex:LM,uv_vertex:DM,worldpos_vertex:NM,background_vert:UM,background_frag:FM,backgroundCube_vert:OM,backgroundCube_frag:BM,cube_vert:zM,cube_frag:kM,depth_vert:GM,depth_frag:VM,distance_vert:HM,distance_frag:WM,equirect_vert:XM,equirect_frag:qM,linedashed_vert:YM,linedashed_frag:$M,meshbasic_vert:ZM,meshbasic_frag:JM,meshlambert_vert:KM,meshlambert_frag:jM,meshmatcap_vert:QM,meshmatcap_frag:eS,meshnormal_vert:tS,meshnormal_frag:nS,meshphong_vert:iS,meshphong_frag:rS,meshphysical_vert:sS,meshphysical_frag:aS,meshtoon_vert:oS,meshtoon_frag:lS,points_vert:cS,points_frag:uS,shadow_vert:hS,shadow_frag:dS,sprite_vert:fS,sprite_frag:pS},we={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fi={basic:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:on([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:on([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:on([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:on([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:on([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:on([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:on([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:on([we.lights,we.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Fi.physical={uniforms:on([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var nh={r:0,b:0,g:0},mS=new mt,ex=new We;ex.set(-1,0,0,0,1,0,0,0,1);function gS(i,e,t,n,r,s){let a=new Ue(0),o=r===!0?0:1,c,u,h=null,f=0,d=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let w=S.backgroundBlurriness>0;A=e.get(A,w)}return A}l(m,"getBackground");function g(S){let A=!1,w=m(S);w===null?x(a,o):w&&w.isColor&&(x(w,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(S,A){let w=m(A);w&&w.isCubeTexture?(u===void 0&&(u=new Tt(new Ti(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:gs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mS.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(ex),u.material.toneMapped=rt.getTransfer(w.colorSpace)!==dt,(h!==w||f!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Tt(new Pi(2,2),new _n({name:"BackgroundMaterial",uniforms:gs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=rt.getTransfer(w.colorSpace)!==dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(S,A){S.getRGB(nh,tf(i)),t.buffers.color.setClear(nh.r,nh.g,nh.b,A,s)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(S,A=1){a.set(S),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(S){o=S,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(gS,"WebGLBackground");function xS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,a=!1;function o(F,k,Z,L,q){let ne=!1,U=f(F,L,Z,k);s!==U&&(s=U,u(s.object)),ne=m(F,L,Z,q),ne&&g(F,L,Z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,w(F,k,Z,L),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(F){return i.bindVertexArray(F)}l(u,"bindVertexArrayObject");function h(F){return i.deleteVertexArray(F)}l(h,"deleteVertexArrayObject");function f(F,k,Z,L){let q=L.wireframe===!0,ne=n[k.id];ne===void 0&&(ne={},n[k.id]=ne);let U=F.isInstancedMesh===!0?F.id:0,J=ne[U];J===void 0&&(J={},ne[U]=J);let G=J[Z.id];G===void 0&&(G={},J[Z.id]=G);let j=G[q];return j===void 0&&(j=d(c()),G[q]=j),j}l(f,"getBindingState");function d(F){let k=[],Z=[],L=[];for(let q=0;q<t;q++)k[q]=0,Z[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:L,object:F,attributes:{},index:null}}l(d,"createBindingState");function m(F,k,Z,L){let q=s.attributes,ne=k.attributes,U=0,J=Z.getAttributes();for(let G in J)if(J[G].location>=0){let z=q[G],ie=ne[G];if(ie===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),z===void 0||z.attribute!==ie||ie&&z.data!==ie.data)return!0;U++}return s.attributesNum!==U||s.index!==L}l(m,"needsUpdate");function g(F,k,Z,L){let q={},ne=k.attributes,U=0,J=Z.getAttributes();for(let G in J)if(J[G].location>=0){let z=ne[G];z===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(z=F.instanceColor));let ie={};ie.attribute=z,z&&z.data&&(ie.data=z.data),q[G]=ie,U++}s.attributes=q,s.attributesNum=U,s.index=L}l(g,"saveCache");function y(){let F=s.newAttributes;for(let k=0,Z=F.length;k<Z;k++)F[k]=0}l(y,"initAttributes");function x(F){_(F,0)}l(x,"enableAttribute");function _(F,k){let Z=s.newAttributes,L=s.enabledAttributes,q=s.attributeDivisors;Z[F]=1,L[F]===0&&(i.enableVertexAttribArray(F),L[F]=1),q[F]!==k&&(i.vertexAttribDivisor(F,k),q[F]=k)}l(_,"enableAttributeAndDivisor");function S(){let F=s.newAttributes,k=s.enabledAttributes;for(let Z=0,L=k.length;Z<L;Z++)k[Z]!==F[Z]&&(i.disableVertexAttribArray(Z),k[Z]=0)}l(S,"disableUnusedAttributes");function A(F,k,Z,L,q,ne,U){U===!0?i.vertexAttribIPointer(F,k,Z,q,ne):i.vertexAttribPointer(F,k,Z,L,q,ne)}l(A,"vertexAttribPointer");function w(F,k,Z,L){y();let q=L.attributes,ne=Z.getAttributes(),U=k.defaultAttributeValues;for(let J in ne){let G=ne[J];if(G.location>=0){let j=q[J];if(j===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){let z=j.normalized,ie=j.itemSize,re=e.get(j);if(re===void 0)continue;let H=re.buffer,ae=re.type,te=re.bytesPerElement,de=ae===i.INT||ae===i.UNSIGNED_INT||j.gpuType===_u;if(j.isInterleavedBufferAttribute){let ce=j.data,Ce=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,Ve=j.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Ee=0;Ee<G.locationSize;Ee++)_(G.location+Ee,ce.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)x(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Ee=0;Ee<G.locationSize;Ee++)A(G.location+Ee,ie/G.locationSize,ae,z,Ce*te,(Ve+ie/G.locationSize*Ee)*te,de)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)_(G.location+ce,j.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<G.locationSize;ce++)x(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,H);for(let ce=0;ce<G.locationSize;ce++)A(G.location+ce,ie/G.locationSize,ae,z,ie*te,ie/G.locationSize*ce*te,de)}}else if(U!==void 0){let z=U[J];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(G.location,z);break;case 3:i.vertexAttrib3fv(G.location,z);break;case 4:i.vertexAttrib4fv(G.location,z);break;default:i.vertexAttrib1fv(G.location,z)}}}}S()}l(w,"setupVertexAttributes");function R(){I();for(let F in n){let k=n[F];for(let Z in k){let L=k[Z];for(let q in L){let ne=L[q];for(let U in ne)h(ne[U].object),delete ne[U];delete L[q]}}delete n[F]}}l(R,"dispose");function C(F){if(n[F.id]===void 0)return;let k=n[F.id];for(let Z in k){let L=k[Z];for(let q in L){let ne=L[q];for(let U in ne)h(ne[U].object),delete ne[U];delete L[q]}}delete n[F.id]}l(C,"releaseStatesOfGeometry");function v(F){for(let k in n){let Z=n[k];for(let L in Z){let q=Z[L];if(q[F.id]===void 0)continue;let ne=q[F.id];for(let U in ne)h(ne[U].object),delete ne[U];delete q[F.id]}}}l(v,"releaseStatesOfProgram");function E(F){for(let k in n){let Z=n[k],L=F.isInstancedMesh===!0?F.id:0,q=Z[L];if(q!==void 0){for(let ne in q){let U=q[ne];for(let J in U)h(U[J].object),delete U[J];delete q[ne]}delete Z[L],Object.keys(Z).length===0&&delete n[k]}}}l(E,"releaseStatesOfObject");function I(){P(),a=!0,s!==r&&(s=r,u(s.object))}l(I,"reset");function P(){r.geometry=null,r.program=null,r.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:I,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:S}}l(xS,"WebGLBindingStates");function _S(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(_S,"WebGLBufferRenderer");function vS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(v){return!(v!==Fn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let E=v===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==an&&v!==oi&&!E&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ge("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:w,maxSamples:R,samples:C}}l(vS,"WebGLCapabilities");function yS(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Mn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{let S=s?0:n,A=S*4,w=_.clippingState||null;c.value=w,w=h(g,d,A,m);for(let R=0;R!==A;++R)w[R]=t[R];_.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,m,g){let y=f!==null?f.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=m+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,w=m;A!==y;++A,w+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(x,w),x[w+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(yS,"WebGLClipping");var Pp=class Pp extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ro(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ti(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:hs});s.uniforms.tEquirect.value=t;let a=new Tt(r,s),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Bt),new ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(Pp,"WebGLCubeRenderTarget");var Jo=Pp,Lg=256,bS=3,MS=20,tx=256,nx=16,SS=3,wS=new W,ES=new Ue,ah=class ah{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ya(1,10,null),this._boxMesh=new Tt(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=wS}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(ES));let x=new ya(n,r,h);return x.position.copy(o),x.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lg,Eg(e))}_fromTexture(e,t){e.mapping===fs||e.mapping===Sa?this._setSize(e.image.length===0?Lg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Dg(e,!1,!1),n=Math.log2(e)-bS;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Dg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fs||e.mapping===Sa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ng()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=AS(),this._integrationMaterial=TS());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/nx);for(let a=0;a<=n;a++){let o=ah.lodToRoughness(a,n);if(a>n-SS)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(tx*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=CS());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(ah,"PMREMGenerator");var rh=ah;function Dg(i,e,t){return new Jo(i,{minFilter:Nn,generateMipmaps:e,type:Un,colorSpace:vo,depthBuffer:t})}l(Dg,"_createRenderTarget");function Ko(i,e,t){return new _n({name:i,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:vn,blending:hs,depthTest:!1,depthWrite:!1})}l(Ko,"_getMaterial");function AS(){return Ko("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tx}u

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
	`)}l(AS,"_getGGXMaterial");function TS(){return Ko("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nx}},`

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
	`)}l(TS,"_getIntegrationMaterial");function CS(){return Ko("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${MS}
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
	`)}l(CS,"_getBlurMaterial");function Ng(){return Ko("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(Ng,"_getEquirectMaterial");function Ug(){return Ko("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Ug,"_getCubemapMaterial");function RS(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}l(r,"get");function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===mu||m===gu)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Jo(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(s,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===mu||m===gu,y=m===fs||m===Sa;if(g||y){let x=t.get(d),_=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new rh(i)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new rh(i)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}l(a,"getPMREM");function o(d,m){return m===mu?d.mapping=fs:m===gu&&(d.mapping=Sa),d}l(o,"mapTextureMapping");function c(d){let m=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&m++;return m===g}l(c,"isCubeTextureComplete");function u(d){let m=d.target;m.removeEventListener("dispose",u);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}l(u,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:r,dispose:f}}l(RS,"WebGLEnvironments");function PS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&go("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(PS,"WebGLExtensions");function IS(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);let y=s.get(g);y&&(e.remove(y),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function f(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let S=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?To:Ao,w=new A(Math.ceil(S/3)*6,1),R=w.array;if(y!==null){let v=y.array;_=y.version;for(let E=0,I=0;E<S;E+=3){let P=v[E+0],F=v[E+1],k=v[E+2];R[I++]=P,R[I++]=F,R[I++]=F,R[I++]=k,R[I++]=k,R[I++]=P}}else{_=x.version;for(let v=0,E=0;v<S;v+=3){let I=v+0,P=v+1,F=v+2;R[E++]=I,R[E++]=P,R[E++]=P,R[E++]=F,R[E++]=F,R[E++]=I}}w.version=_;let C=s.get(g);C&&e.remove(C),s.set(g,w)}l(f,"updateWireframeAttribute");function d(g){let y=s.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&f(g)}else f(g);return s.get(g)}l(d,"getWireframeAttribute");function m(){for(let g in r){let y=r[g].deref();y!==void 0&&c(y)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:m}}l(IS,"WebGLGeometries");function LS(i,e,t){let n;function r(f){n=f}l(r,"setMode");let s,a;function o(f){s=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,f*a,m),t.update(d,n,m))}l(u,"renderInstances");function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let y=0;for(let x=0;x<m;x++)y+=d[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(LS,"WebGLIndexedBufferRenderer");function DS(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(DS,"WebGLInfo");function NS(i,e,t){let n=new WeakMap,r=new At;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],w=0;g===!0&&(w=1),y===!0&&(w=2),x===!0&&(w=3);let R=o.attributes.position.count*w,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let v=new Float32Array(R*C*4*f),E=new us(v,R,C,f);E.type=oi,E.needsUpdate=!0;let I=w*4;for(let F=0;F<f;F++){let k=_[F],Z=S[F],L=A[F],q=R*C*4*F;for(let ne=0;ne<k.count;ne++){let U=ne*I;g===!0&&(r.fromBufferAttribute(k,ne),v[q+U+0]=r.x,v[q+U+1]=r.y,v[q+U+2]=r.z,v[q+U+3]=0),y===!0&&(r.fromBufferAttribute(Z,ne),v[q+U+4]=r.x,v[q+U+5]=r.y,v[q+U+6]=r.z,v[q+U+7]=0),x===!0&&(r.fromBufferAttribute(L,ne),v[q+U+8]=r.x,v[q+U+9]=r.y,v[q+U+10]=r.z,v[q+U+11]=L.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new ke(R,C)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(s,"update"),{update:s}}l(NS,"WebGLMorphtargets");function US(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(US,"WebGLObjects");var FS={[Fd]:"LINEAR_TONE_MAPPING",[Od]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[kd]:"AGX_TONE_MAPPING",[Gd]:"NEUTRAL_TONE_MAPPING",[zd]:"CUSTOM_TONE_MAPPING"};function OS(i,e,t,n,r,s){let a=new In(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new zt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let f=new Oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(h,f),m=new Fo(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,S=null,A=[],w=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let v=0;v<A.length;v++){let E=A[v];E.setSize&&E.setSize(R,C)}},this.setEffects=function(R){A=R,w=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new In(C,v,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new In(C,v,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let E=r===!0&&A.some(I=>I.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&u===null&&(u=new rr(C,v),s===!0&&(u.format=sr,u.type=ps)),a.dispose(),a.depthTexture=E?u:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let I=0;I<A.length;I++){let P=A[I];P.setSize&&P.setSize(C,v),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(R,C){if(x||R.toneMapping===Di&&A.length===0)return!1;if(S=C,C!==null){let v=C.width,E=C.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return w===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Di,!0},this.hasRenderPass=function(){return w},this.end=function(R,C){R.toneMapping=_,x=!0;let v=a,E=o;for(let I=0;I<A.length;I++){let P=A[I];P.enabled!==!1&&(P.render(R,E,v,C),P.needsSwap!==!1&&(v=E,E=E===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},rt.getTransfer(g)===dt&&(f.defines.SRGB_TRANSFER="");let I=FS[y];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(S),R.render(d,m),S=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(OS,"WebGLOutput");var ix=new xn,rx=new rr(1,1),sx=new Po(1),ax=new us,ox=new Dc,lx=new Ro,Fg=[],Og=[],Bg=new Float32Array(16),zg=new Float32Array(9),kg=new Float32Array(4);function Aa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Fg[r];if(s===void 0&&(s=new Float32Array(r),Fg[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(Aa,"flatten");function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(Gt,"arraysEqual");function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Vt,"copyArray");function oh(i,e){let t=Og[e];t===void 0&&(t=new Int32Array(e),Og[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(oh,"allocTexUnits");function BS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(BS,"setValueV1f");function zS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}l(zS,"setValueV2f");function kS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}l(kS,"setValueV3f");function GS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}l(GS,"setValueV4f");function VS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;kg.set(n),i.uniformMatrix2fv(this.addr,!1,kg),Vt(t,n)}}l(VS,"setValueM2");function HS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;zg.set(n),i.uniformMatrix3fv(this.addr,!1,zg),Vt(t,n)}}l(HS,"setValueM3");function WS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Bg.set(n),i.uniformMatrix4fv(this.addr,!1,Bg),Vt(t,n)}}l(WS,"setValueM4");function XS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(XS,"setValueV1i");function qS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}l(qS,"setValueV2i");function YS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}l(YS,"setValueV3i");function $S(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}l($S,"setValueV4i");function ZS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(ZS,"setValueV1ui");function JS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}l(JS,"setValueV2ui");function KS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}l(KS,"setValueV3ui");function jS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}l(jS,"setValueV4ui");function lh(i){return i.version===0&&(i.compareFunction=jd,i.needsUpdate=!0),i}l(lh,"initShadowTexture");function QS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=lh(rx):s=ix,t.setTexture2D(e||s,r)}l(QS,"setValueT1");function ew(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ox,r)}l(ew,"setValueT3D1");function tw(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=lh(sx):s=lx,t.setTextureCube(e||s,r)}l(tw,"setValueT6");function nw(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ax,r)}l(nw,"setValueT2DArray1");function iw(i){switch(i){case 5126:return BS;case 35664:return zS;case 35665:return kS;case 35666:return GS;case 35674:return VS;case 35675:return HS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return qS;case 35668:case 35672:return YS;case 35669:case 35673:return $S;case 5125:return ZS;case 36294:return JS;case 36295:return KS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}l(iw,"getSingularSetter");function rw(i,e){i.uniform1fv(this.addr,e)}l(rw,"setValueV1fArray");function sw(i,e){let t=Aa(e,this.size,2);i.uniform2fv(this.addr,t)}l(sw,"setValueV2fArray");function aw(i,e){let t=Aa(e,this.size,3);i.uniform3fv(this.addr,t)}l(aw,"setValueV3fArray");function ow(i,e){let t=Aa(e,this.size,4);i.uniform4fv(this.addr,t)}l(ow,"setValueV4fArray");function lw(i,e){let t=Aa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(lw,"setValueM2Array");function cw(i,e){let t=Aa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(cw,"setValueM3Array");function uw(i,e){let t=Aa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(uw,"setValueM4Array");function hw(i,e){i.uniform1iv(this.addr,e)}l(hw,"setValueV1iArray");function dw(i,e){i.uniform2iv(this.addr,e)}l(dw,"setValueV2iArray");function fw(i,e){i.uniform3iv(this.addr,e)}l(fw,"setValueV3iArray");function pw(i,e){i.uniform4iv(this.addr,e)}l(pw,"setValueV4iArray");function mw(i,e){i.uniform1uiv(this.addr,e)}l(mw,"setValueV1uiArray");function gw(i,e){i.uniform2uiv(this.addr,e)}l(gw,"setValueV2uiArray");function xw(i,e){i.uniform3uiv(this.addr,e)}l(xw,"setValueV3uiArray");function _w(i,e){i.uniform4uiv(this.addr,e)}l(_w,"setValueV4uiArray");function vw(i,e,t){let n=this.cache,r=e.length,s=oh(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=lh(rx):a=ix;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(vw,"setValueT1Array");function yw(i,e,t){let n=this.cache,r=e.length,s=oh(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ox,s[a])}l(yw,"setValueT3DArray");function bw(i,e,t){let n=this.cache,r=e.length,s=oh(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=lh(sx):a=lx;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(bw,"setValueT6Array");function Mw(i,e,t){let n=this.cache,r=e.length,s=oh(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ax,s[a])}l(Mw,"setValueT2DArrayArray");function Sw(i){switch(i){case 5126:return rw;case 35664:return sw;case 35665:return aw;case 35666:return ow;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return hw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return xw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Mw}}l(Sw,"getPureArraySetter");var Ip=class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iw(t.type)}};l(Ip,"SingleUniform");var Mp=Ip,Lp=class Lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sw(t.type)}};l(Lp,"PureArrayUniform");var Sp=Lp,Dp=class Dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(Dp,"StructuredUniform");var wp=Dp,yp=/(\w+)(\])?(\[|\.)?/g;function Gg(i,e){i.seq.push(e),i.map[e.id]=e}l(Gg,"addUniform");function ww(i,e,t){let n=i.name,r=n.length;for(yp.lastIndex=0;;){let s=yp.exec(n),a=yp.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Gg(t,u===void 0?new Mp(o,i,e):new Sp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new wp(o),Gg(t,f)),t=f}}}l(ww,"parseUniform");var Np=class Np{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ww(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(Np,"WebGLUniforms");var Ea=Np;function Vg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(Vg,"WebGLShader");var Ew=37297,Aw=0;function Tw(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(Tw,"handleSource");var Hg=new We;function Cw(i){rt._getMatrix(Hg,rt.workingColorSpace,i);let e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(Cw,"getEncodingComponents");function Wg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Tw(i.getShaderSource(e),o)}else return s}l(Wg,"getShaderErrors");function Rw(i,e){let t=Cw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(Rw,"getTexelEncodingFunction");var Pw={[Fd]:"Linear",[Od]:"Reinhard",[Bd]:"Cineon",[ko]:"ACESFilmic",[kd]:"AgX",[Gd]:"Neutral",[zd]:"Custom"};function Iw(i,e){let t=Pw[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(Iw,"getToneMappingFunction");var ih=new W;function Lw(){rt.getLuminanceCoefficients(ih);let i=ih.x.toFixed(4),e=ih.y.toFixed(4),t=ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(Lw,"getLuminanceFunction");function Dw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}l(Dw,"generateVertexExtensions");function Nw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(Nw,"generateDefines");function Uw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(Uw,"fetchAttributeLocations");function Zo(i){return i!==""}l(Zo,"filterEmptyLine");function Xg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(Xg,"replaceLightNums");function qg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(qg,"replaceClippingPlaneNums");var Fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(i){return i.replace(Fw,Ow)}l(Ep,"resolveIncludes");function Ow(i,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ep(t)}l(Ow,"includeReplacer");var Bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(i){return i.replace(Bw,zw)}l(Yg,"unrollLoops");function zw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(zw,"loopReplacer");function $g(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l($g,"generatePrecision");var kw={[zo]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function Gw(i){return kw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(Gw,"generateShadowMapTypeDefine");var Vw={[Sa]:"ENVMAP_MODE_REFRACTION"};function Hw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Vw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(Hw,"generateEnvMapModeDefine");var Ww={[Ud]:"ENVMAP_BLENDING_MULTIPLY",[ug]:"ENVMAP_BLENDING_MIX",[hg]:"ENVMAP_BLENDING_ADD"};function Xw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ww[i.combine]||"ENVMAP_BLENDING_NONE"}l(Xw,"generateEnvMapBlendingDefine");function qw(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Gw(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Hw(t),f=Xw(t),d=Dw(t),m=Nw(s),g=r.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zo).join(`
`),x.length>0&&(x+=`
`)):(y=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),x=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Di?Iw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Rw("linearToOutputTexel",t.outputColorSpace),Lw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),a=Ep(a),a=Xg(a,t),a=qg(a,t),o=Ep(o),o=Xg(o,t),o=qg(o,t),a=Yg(a),o=Yg(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=_+y+a,A=_+x+o,w=Vg(r,r.VERTEX_SHADER,S),R=Vg(r,r.FRAGMENT_SHADER,A);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(w)||"",Z=r.getShaderInfoLog(R)||"",L=F.trim(),q=k.trim(),ne=Z.trim(),U=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,R);else{let G=Wg(r,w,"vertex"),j=Wg(r,R,"fragment");He("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+G+`
`+j)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(q===""||ne==="")&&(J=!1);J&&(P.diagnostics={runnable:U,programLog:L,vertexShader:{log:q,prefix:y},fragmentShader:{log:ne,prefix:x}})}r.deleteShader(w),r.deleteShader(R),v=new Ea(r,g),E=Uw(r,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,Ew)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Aw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}l(qw,"WebGLProgram");var Yw=0,Up=class Up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tp(e),t.set(e,n)),n}};l(Up,"WebGLShaderCache");var Ap=Up,Fp=class Fp{constructor(e){this.id=Yw++,this.code=e,this.usedTimes=0}};l(Fp,"WebGLShaderStage");var Tp=Fp;function $w(i){return i===Ni||i===qo||i===Yo}l($w,"isPackedRGFormat");function Zw(i,e,t,n,r,s){let a=new So,o=new Ap,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}l(m,"getChannel");function g(v,E,I,P,F,k){let Z=P.fog,L=F.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||q,ne),J=d[v.type],G=n.precision;v.precision!==null&&(G=n.getMaxPrecision(v.precision),G!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",G,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,z=j!==void 0?j.length:0,ie=0;L.morphAttributes.position!==void 0&&(ie=1),L.morphAttributes.normal!==void 0&&(ie=2),L.morphAttributes.color!==void 0&&(ie=3);let re,H,ae,te;if(J){let Te=Fi[J];re=Te.vertexShader,H=Te.fragmentShader}else{re=v.vertexShader,H=v.fragmentShader;let Te=o.getVertexShaderStage(v),pt=o.getFragmentShaderStage(v);o.update(v,Te,pt),ae=Te.id,te=pt.id}let de=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,Ee=!!v.map,qe=!!v.matcap,je=!!U,Xe=je&&U.isPMREMTexture===!0,gt=!!v.aoMap,xt=!!v.lightMap,tt=!!v.bumpMap&&v.wireframe===!1,Qe=!!v.normalMap,Dt=!!v.displacementMap,ft=!!v.emissiveMap,Et=!!v.metalnessMap,Lt=!!v.roughnessMap,at=v.anisotropy>0,B=v.clearcoat>0,Pt=v.diffuseRoughness>0,ot=v.dispersion>0,et=v.retroreflectivity>0,me=v.iridescence>0,ut=v.sheen>0,Fe=v.transmission>0,ze=at&&!!v.anisotropyMap,T=B&&!!v.clearcoatMap,b=B&&!!v.clearcoatNormalMap,X=B&&!!v.clearcoatRoughnessMap,fe=Pt&&!!v.diffuseRoughnessMap,le=me&&!!v.iridescenceMap,xe=me&&!!v.iridescenceThicknessMap,Me=ut&&!!v.sheenColorMap,oe=ut&&!!v.sheenRoughnessMap,ue=!!v.specularMap,ve=!!v.specularColorMap,D=!!v.specularIntensityMap,he=Fe&&!!v.transmissionMap,se=Fe&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Oe=!!v.alphaHash,Je=!!v.extensions,pe=Di;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Be=Xe?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,$e={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:H,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:G,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:qe,envMap:je,envMapMode:je&&U.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Be.length-1:null,envMapSize:Xe?Be[0].width:null,aoMap:gt,lightMap:xt,bumpMap:tt,normalMap:Qe,displacementMap:Dt,emissiveMap:ft,normalMapObjectSpace:Qe&&v.normalMapType===pg,normalMapTangentSpace:Qe&&v.normalMapType===eh,packedNormalMap:Qe&&v.normalMapType===eh&&$w(v.normalMap.format),metalnessMap:Et,roughnessMap:Lt,anisotropy:at,anisotropyMap:ze,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:Pt,diffuseRoughnessMap:fe,dispersion:ot,retroreflection:et,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:ut,sheenColorMap:Me,sheenRoughnessMap:oe,specularMap:ue,specularColorMap:ve,specularIntensityMap:D,transmission:Fe,transmissionMap:he,thicknessMap:se,gradientMap:ye,opaque:v.transparent===!1&&v.blending===Ma&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Oe,combine:v.combine,mapUv:Ee&&m(v.map.channel),aoMapUv:gt&&m(v.aoMap.channel),lightMapUv:xt&&m(v.lightMap.channel),bumpMapUv:tt&&m(v.bumpMap.channel),normalMapUv:Qe&&m(v.normalMap.channel),displacementMapUv:Dt&&m(v.displacementMap.channel),emissiveMapUv:ft&&m(v.emissiveMap.channel),metalnessMapUv:Et&&m(v.metalnessMap.channel),roughnessMapUv:Lt&&m(v.roughnessMap.channel),anisotropyMapUv:ze&&m(v.anisotropyMap.channel),clearcoatMapUv:T&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(v.sheenRoughnessMap.channel),specularMapUv:ue&&m(v.specularMap.channel),specularColorMapUv:ve&&m(v.specularColorMap.channel),specularIntensityMapUv:D&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:se&&m(v.thicknessMap.channel),alphaMapUv:ge&&m(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Qe||at),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(Ee||ge),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&Qe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(Te=>Te.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Li,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Je&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&v.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}l(g,"getParameters");function y(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(E,v),_(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}l(y,"getProgramCacheKey");function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function S(v){let E=d[v.type],I;if(E){let P=Fi[E];I=xs.clone(P.uniforms)}else I=v.uniforms;return I}l(S,"getUniforms");function A(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new qw(i,E,v,r),u.push(I),h.set(E,I)),I}l(A,"acquireProgram");function w(v){if(--v.usedTimes===0){let E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(w,"releaseProgram");function R(v){o.remove(v)}l(R,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}l(Zw,"WebGLPrograms");function Jw(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(Jw,"WebGLProperties");function Kw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(Kw,"painterSortStable");function Zg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(Zg,"reversePainterSortStable");function Jg(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(d,m,g,y,x,_){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:m,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:_},i[e]=S):(S.id=d.id,S.object=d,S.geometry=m,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=x,S.group=_),e++,S}l(o,"getNextRenderItem");function c(d,m,g,y,x,_,S){S.reversedDepth===!0&&(x=-x);let A=o(d,m,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):t.push(A)}l(c,"push");function u(d,m,g,y,x,_){let S=o(d,m,g,y,x,_);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}l(u,"unshift");function h(d,m){t.length>1&&t.sort(d||Kw),n.length>1&&n.sort(m||Zg),r.length>1&&r.sort(m||Zg)}l(h,"sort");function f(){for(let d=e,m=i.length;d<m;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:f,sort:h}}l(Jg,"WebGLRenderList");function jw(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Jg,i.set(n,[a])):r>=s.length?(a=new Jg,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(jw,"WebGLRenderLists");function Qw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Ue};break;case"SpotLight":t={position:new W,direction:new W,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(Qw,"UniformsCache");function e1(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(e1,"ShadowUniformsCache");var t1=0;function n1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(n1,"shadowCastingAndTexturingLightsFirst");function i1(i){let e=new Qw,t=e1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let r=new W,s=new mt,a=new mt;function o(u){let h=0,f=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,g=0,y=0,x=0,_=0,S=0,A=0,w=0,R=0,C=0,v=0,E=0,I=0,P=0;u.sort(n1);for(let k=0,Z=u.length;k<Z;k++){let L=u[k],q=L.color,ne=L.intensity,U=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ni?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=q.r*ne,f+=q.g*ne,d+=q.b*ne;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],ne);P++}else if(L.isSunLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=J;let ie=j.getViewportCount();for(let re=0;re<ie;re++)n.sunShadowMatrix[y+re]=j.getMatrix(re),n.sunShadowCascade[y+re]=j._cascadeData[re];y+=ie,g++}n.sun[m]=G,m++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[x]=z,n.directionalShadowMap[x]=J,n.directionalShadowMatrix[x]=L.shadow.matrix,R++}n.directional[x]=G,x++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(q).multiplyScalar(ne),G.distance=U,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[S]=G;let j=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,j.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[S]=j.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=J,v++}S++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(q).multiplyScalar(ne),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=G,A++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=L.shadow.matrix,C++}n.point[_]=G,_++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(ne),G.groundColor.copy(L.groundColor).multiplyScalar(ne),n.hemi[w]=G,w++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let F=n.hash;(F.sunLength!==m||F.directionalLength!==x||F.pointLength!==_||F.spotLength!==S||F.rectAreaLength!==A||F.hemiLength!==w||F.numSunShadows!==g||F.numDirectionalShadows!==R||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==E||F.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=x,n.spot.length=S,n.rectArea.length=A,n.point.length=_,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,F.sunLength=m,F.directionalLength=x,F.pointLength=_,F.spotLength=S,F.rectAreaLength=A,F.hemiLength=w,F.numSunShadows=g,F.numDirectionalShadows=R,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=E,F.numLightProbes=P,n.version=t1++)}l(o,"setup");function c(u,h){let f=0,d=0,m=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){let w=u[S];if(w.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),f++}else if(w.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),d++}else if(w.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(w.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(w.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(i1,"WebGLLights");function Kg(i){let e=new i1(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(Kg,"WebGLRenderState");function r1(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Kg(i),e.set(r,[o])):s>=a.length?(o=new Kg(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(r1,"WebGLRenderStates");var s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a1=`uniform sampler2D shadow_pass;
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
}`,o1=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],l1=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],jg=new mt,$o=new W,bp=new W;function c1(i,e,t){let n=new Cr,r=new ke,s=new ke,a=new At,o=new Bc,c=new zc,u={},h=t.maxTextureSize,f={[Ur]:vn,[vn]:Ur,[Li]:Li},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:s1,fragmentShader:a1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Tt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let _=this.type;this.render=function(C,v,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===pu&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zo);let I=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(hs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Z=_!==this.type;Z&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(q=>q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,q=C.length;L<q;L++){let ne=C[L],U=ne.shadow;if(U===void 0){Ge("WebGLShadowMap:",ne,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let J=U.getFrameExtents();r.multiply(J),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,U.mapSize.y=s.y));let G=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||Z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ba){if(ne.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new In(r.x,r.y,{format:Ni,type:Un,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),U.map.texture.name=ne.name+".shadowMap",U.map.depthTexture=new rr(r.x,r.y,oi),U.map.depthTexture.name=ne.name+".shadowMapDepth",U.map.depthTexture.format=tr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot}else ne.isPointLight?(U.map=new Jo(r.x),U.map.depthTexture=new Po(r.x,ai)):(U.map=new In(r.x,r.y),U.map.depthTexture=new rr(r.x,r.y,ai)),U.map.depthTexture.name=ne.name+".shadowMap",U.map.depthTexture.format=tr,this.type===zo?(U.map.depthTexture.compareFunction=G?Kd:Jd,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==r.x||U.map.height!==r.y)&&U.map.setSize(r.x,r.y);let j=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();ne.isPointLight!==!0&&U.updateMatrices(ne,E);let z=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:E.layers;for(let ie=0;ie<j;ie++){let re=U.getCamera(ie);if(ne.isPointLight){let H=U.camera,ae=U.matrix,te=ne.distance||H.far;te!==H.far&&(H.far=te,H.updateProjectionMatrix()),$o.setFromMatrixPosition(ne.matrixWorld),H.position.copy($o),bp.copy(H.position),bp.add(o1[ie]),H.up.copy(l1[ie]),H.lookAt(bp),H.updateMatrixWorld(),ae.makeTranslation(-$o.x,-$o.y,-$o.z),jg.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),U._frustum.setFromProjectionMatrix(jg,H.coordinateSystem,H.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(U.map),i.clear());let H=U.getViewport(ie);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),k.viewport(a)}n=U.getFrustum(ie),w(v,E,re,ne,z,this.type)}U.isPointLightShadow!==!0&&this.type===ba&&S(U,E),U.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(I,P,F)};function S(C,v){let E=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new In(r.x,r.y,{format:Ni,type:Un}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,E,d,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,E,m,y,null)}l(S,"VSMPass");function A(C,v,E,I){let P=null,F=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)P=F;else if(P=E.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let k=P.uuid,Z=v.uuid,L=u[k];L===void 0&&(L={},u[k]=L);let q=L[Z];q===void 0&&(q=P.clone(),L[Z]=q,v.addEventListener("dispose",R)),P=q}if(P.visible=v.visible,P.wireframe=v.wireframe,I===ba?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:f[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=E}return P}l(A,"getDepthMaterial");function w(C,v,E,I,P,F){if(C.visible===!1)return;if(C.layers.test(P)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===ba)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);let L=e.update(C),q=C.material;if(Array.isArray(q)){let ne=L.groups;for(let U=0,J=ne.length;U<J;U++){let G=ne[U],j=q[G.materialIndex];if(j&&j.visible){let z=A(C,j,I,F);C.onBeforeShadow(i,C,v,E,L,z,G),i.renderBufferDirect(E,null,L,z,C,G),C.onAfterShadow(i,C,v,E,L,z,G)}}}else if(q.visible){let ne=A(C,q,I,F);C.onBeforeShadow(i,C,v,E,L,ne,null),i.renderBufferDirect(E,null,L,ne,C,null),C.onAfterShadow(i,C,v,E,L,ne,null)}}let Z=C.children;for(let L=0,q=Z.length;L<q;L++)w(Z[L],v,E,I,P,F)}l(w,"renderObject");function R(C){C.target.removeEventListener("dispose",R);for(let E in u){let I=u[E],P=C.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}l(R,"onMaterialDispose")}l(c1,"WebGLShadowMap");function u1(i,e){function t(){let D=!1,he=new At,se=null,ye=new At(0,0,0,0);return{setMask:l(function(ge){se!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),se=ge)},"setMask"),setLocked:l(function(ge){D=ge},"setLocked"),setClear:l(function(ge,_e,Oe,Je,pe){pe===!0&&(ge*=Je,_e*=Je,Oe*=Je),he.set(ge,_e,Oe,Je),ye.equals(he)===!1&&(i.clearColor(ge,_e,Oe,Je),ye.copy(he))},"setClear"),reset:l(function(){D=!1,se=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let D=!1,he=!1,se=null,ye=null,ge=null;return{setReversed:l(function(_e){if(he!==_e){let Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),he=_e;let Je=ge;ge=null,this.setClear(Je)}},"setReversed"),getReversed:l(function(){return he},"getReversed"),setTest:l(function(_e){_e?ce(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){se!==_e&&!D&&(i.depthMask(_e),se=_e)},"setMask"),setFunc:l(function(_e){if(he&&(_e=wg[_e]),ye!==_e){switch(_e){case bc:i.depthFunc(i.NEVER);break;case Mc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case ha:i.depthFunc(i.LEQUAL);break;case wc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){D=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,he&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){D=!1,se=null,ye=null,ge=null,he=!1},"reset")}}l(n,"DepthBuffer");function r(){let D=!1,he=null,se=null,ye=null,ge=null,_e=null,Oe=null,Je=null,pe=null;return{setTest:l(function(Be){D||(Be?ce(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},"setTest"),setMask:l(function(Be){he!==Be&&!D&&(i.stencilMask(Be),he=Be)},"setMask"),setFunc:l(function(Be,$e,Te){(se!==Be||ye!==$e||ge!==Te)&&(i.stencilFunc(Be,$e,Te),se=Be,ye=$e,ge=Te)},"setFunc"),setOp:l(function(Be,$e,Te){(_e!==Be||Oe!==$e||Je!==Te)&&(i.stencilOp(Be,$e,Te),_e=Be,Oe=$e,Je=Te)},"setOp"),setLocked:l(function(Be){D=Be},"setLocked"),setClear:l(function(Be){pe!==Be&&(i.clearStencil(Be),pe=Be)},"setClear"),reset:l(function(){D=!1,he=null,se=null,ye=null,ge=null,_e=null,Oe=null,Je=null,pe=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},f={},d={},m=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,w=null,R=null,C=null,v=null,E=new Ue(0,0,0),I=0,P=!1,F=null,k=null,Z=null,L=null,q=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=J>=2);let j=null,z={},ie=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),H=new At().fromArray(ie),ae=new At().fromArray(re);function te(D,he,se,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(D,_e),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<se;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(te,"createTexture");let de={};de[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(ha),tt(!1),Qe(Rd),ce(i.CULL_FACE),gt(hs);function ce(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}l(ce,"enable");function Ce(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}l(Ce,"disable");function Ve(D,he){return d[D]!==he?(i.bindFramebuffer(D,he),d[D]=he,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}l(Ve,"bindFramebuffer");function Ee(D,he){let se=g,ye=!1;if(D){se=m.get(he),se===void 0&&(se=[],m.set(he,se));let ge=D.textures;if(se.length!==ge.length||se[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=ge.length;_e<Oe;_e++)se[_e]=i.COLOR_ATTACHMENT0+_e;se.length=ge.length,ye=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ye=!0);ye&&i.drawBuffers(se)}l(Ee,"drawBuffers");function qe(D){return y!==D?(i.useProgram(D),y=D,!0):!1}l(qe,"useProgram");let je={[ds]:i.FUNC_ADD,[Y0]:i.FUNC_SUBTRACT,[$0]:i.FUNC_REVERSE_SUBTRACT};je[Z0]=i.MIN,je[J0]=i.MAX;let Xe={[K0]:i.ZERO,[j0]:i.ONE,[Q0]:i.SRC_COLOR,[Dd]:i.SRC_ALPHA,[sg]:i.SRC_ALPHA_SATURATE,[ig]:i.DST_COLOR,[tg]:i.DST_ALPHA,[eg]:i.ONE_MINUS_SRC_COLOR,[Nd]:i.ONE_MINUS_SRC_ALPHA,[rg]:i.ONE_MINUS_DST_COLOR,[ng]:i.ONE_MINUS_DST_ALPHA,[ag]:i.CONSTANT_COLOR,[og]:i.ONE_MINUS_CONSTANT_COLOR,[lg]:i.CONSTANT_ALPHA,[cg]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(D,he,se,ye,ge,_e,Oe,Je,pe,Be){if(D===hs){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),D!==q0){if(D!==_||Be!==P){if((S!==ds||R!==ds)&&(i.blendEquation(i.FUNC_ADD),S=ds,R=ds),Be)switch(D){case Ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pd:i.blendFunc(i.ONE,i.ONE);break;case Id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ld:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case Ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Id:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ld:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}A=null,w=null,C=null,v=null,E.set(0,0,0),I=0,_=D,P=Be}return}ge=ge||he,_e=_e||se,Oe=Oe||ye,(he!==S||ge!==R)&&(i.blendEquationSeparate(je[he],je[ge]),S=he,R=ge),(se!==A||ye!==w||_e!==C||Oe!==v)&&(i.blendFuncSeparate(Xe[se],Xe[ye],Xe[_e],Xe[Oe]),A=se,w=ye,C=_e,v=Oe),(Je.equals(E)===!1||pe!==I)&&(i.blendColor(Je.r,Je.g,Je.b,pe),E.copy(Je),I=pe),_=D,P=!1}l(gt,"setBlending");function xt(D,he){D.side===Li?Ce(i.CULL_FACE):ce(i.CULL_FACE);let se=D.side===vn;he&&(se=!se),tt(se),D.blending===Ma&&D.transparent===!1?gt(hs):gt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}l(xt,"setMaterial");function tt(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}l(tt,"setFlipSided");function Qe(D){D!==W0?(ce(i.CULL_FACE),D!==k&&(D===Rd?i.cullFace(i.BACK):D===X0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),k=D}l(Qe,"setCullFace");function Dt(D){D!==Z&&(U&&i.lineWidth(D),Z=D)}l(Dt,"setLineWidth");function ft(D,he,se){D?(ce(i.POLYGON_OFFSET_FILL),(L!==he||q!==se)&&(L=he,q=se,a.getReversed()&&(he=-he,se=-se),i.polygonOffset(he,se))):Ce(i.POLYGON_OFFSET_FILL)}l(ft,"setPolygonOffset");function Et(D){D?ce(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}l(Et,"setScissorTest");function Lt(D){D===void 0&&(D=i.TEXTURE0+ne-1),j!==D&&(i.activeTexture(D),j=D)}l(Lt,"activeTexture");function at(D,he,se){se===void 0&&(j===null?se=i.TEXTURE0+ne-1:se=j);let ye=z[se];ye===void 0&&(ye={type:void 0,texture:void 0},z[se]=ye),(ye.type!==D||ye.texture!==he)&&(j!==se&&(i.activeTexture(se),j=se),i.bindTexture(D,he||de[D]),ye.type=D,ye.texture=he)}l(at,"bindTexture");function B(){let D=z[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}l(B,"unbindTexture");function Pt(){try{i.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(Pt,"compressedTexImage2D");function ot(){try{i.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(ot,"compressedTexImage3D");function et(){try{i.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(et,"texSubImage2D");function me(){try{i.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(me,"texSubImage3D");function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(ut,"compressedTexSubImage2D");function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(Fe,"compressedTexSubImage3D");function ze(){try{i.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(ze,"texStorage2D");function T(){try{i.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(T,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(b,"texImage2D");function X(){try{i.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(X,"texImage3D");function fe(D){return f[D]!==void 0?f[D]:i.getParameter(D)}l(fe,"getParameter");function le(D,he){f[D]!==he&&(i.pixelStorei(D,he),f[D]=he)}l(le,"pixelStorei");function xe(D){H.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),H.copy(D))}l(xe,"scissor");function Me(D){ae.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ae.copy(D))}l(Me,"viewport");function oe(D,he){let se=u.get(he);se===void 0&&(se=new WeakMap,u.set(he,se));let ye=se.get(D);ye===void 0&&(ye=i.getUniformBlockIndex(he,D.name),i.uniformBlockBinding(he,ye,ye),se.set(D,ye))}l(oe,"updateUBOMapping");function ue(D,he,se){let ge=u.get(he).get(D);c[ge]!==se&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,se),c[ge]=se)}l(ue,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,z={},d={},c={},m=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,w=null,R=null,C=null,v=null,E=new Ue(0,0,0),I=0,P=!1,F=null,k=null,Z=null,L=null,q=null,H.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Ce,bindFramebuffer:Ve,drawBuffers:Ee,useProgram:qe,setBlending:gt,setMaterial:xt,setFlipSided:tt,setCullFace:Qe,setLineWidth:Dt,setPolygonOffset:ft,setScissorTest:Et,activeTexture:Lt,bindTexture:at,unbindTexture:B,compressedTexImage2D:Pt,compressedTexImage3D:ot,texImage2D:b,texImage3D:X,pixelStorei:le,getParameter:fe,updateUBOMapping:oe,uniformBlockBinding:ue,texStorage2D:ze,texStorage3D:T,texSubImage2D:et,texSubImage3D:me,compressedTexSubImage2D:ut,compressedTexSubImage3D:Fe,scissor:xe,viewport:Me,reset:ve}}l(u1,"WebGLState");function h1(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap,f=new Set,d,m=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return x?new OffscreenCanvas(T,b):bo("canvas")}l(_,"createCanvas");function S(T,b,X){let fe=1,le=ze(T);if((le.width>X||le.height>X)&&(fe=X/Math.max(le.width,le.height)),fe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let xe=Math.floor(fe*le.width),Me=Math.floor(fe*le.height);d===void 0&&(d=_(xe,Me));let oe=b?_(xe,Me):d;return oe.width=xe,oe.height=Me,oe.getContext("2d").drawImage(T,0,0,xe,Me),Ge("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Me+")."),oe}else return"data"in T&&Ge("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}l(S,"resizeImage");function A(T){return T.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function w(T){i.generateMipmap(T)}l(w,"generateMipmap");function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function C(T,b,X,fe,le,xe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=b;if(b===i.RED&&(X===i.FLOAT&&(oe=i.R32F),X===i.HALF_FLOAT&&(oe=i.R16F),X===i.UNSIGNED_BYTE&&(oe=i.R8),X===i.UNSIGNED_SHORT&&Me&&(oe=Me.R16_EXT),X===i.SHORT&&Me&&(oe=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.R8UI),X===i.UNSIGNED_SHORT&&(oe=i.R16UI),X===i.UNSIGNED_INT&&(oe=i.R32UI),X===i.BYTE&&(oe=i.R8I),X===i.SHORT&&(oe=i.R16I),X===i.INT&&(oe=i.R32I)),b===i.RG&&(X===i.FLOAT&&(oe=i.RG32F),X===i.HALF_FLOAT&&(oe=i.RG16F),X===i.UNSIGNED_BYTE&&(oe=i.RG8),X===i.UNSIGNED_SHORT&&Me&&(oe=Me.RG16_EXT),X===i.SHORT&&Me&&(oe=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RG8UI),X===i.UNSIGNED_SHORT&&(oe=i.RG16UI),X===i.UNSIGNED_INT&&(oe=i.RG32UI),X===i.BYTE&&(oe=i.RG8I),X===i.SHORT&&(oe=i.RG16I),X===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),X===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),X===i.UNSIGNED_INT&&(oe=i.RGB32UI),X===i.BYTE&&(oe=i.RGB8I),X===i.SHORT&&(oe=i.RGB16I),X===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),X===i.UNSIGNED_INT&&(oe=i.RGBA32UI),X===i.BYTE&&(oe=i.RGBA8I),X===i.SHORT&&(oe=i.RGBA16I),X===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&(X===i.UNSIGNED_SHORT&&Me&&(oe=Me.RGB16_EXT),X===i.SHORT&&Me&&(oe=Me.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),b===i.RGBA){let ue=xe?yo:rt.getTransfer(le);X===i.FLOAT&&(oe=i.RGBA32F),X===i.HALF_FLOAT&&(oe=i.RGBA16F),X===i.UNSIGNED_BYTE&&(oe=ue===dt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Me&&(oe=Me.RGBA16_EXT),X===i.SHORT&&Me&&(oe=Me.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}l(C,"getInternalFormat");function v(T,b){let X;return T?b===null||b===ai||b===ps?X=i.DEPTH24_STENCIL8:b===oi?X=i.DEPTH32F_STENCIL8:b===wa&&(X=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===ps?X=i.DEPTH_COMPONENT24:b===oi?X=i.DEPTH_COMPONENT32F:b===wa&&(X=i.DEPTH_COMPONENT16),X}l(v,"getInternalDepthFormat");function E(T,b){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}l(E,"getMipLevels");function I(T){let b=new WeakRef(T);n.get(T).__ref=b,g.add(b),y.register(T,b,b)}l(I,"track");function P(T){let b=n.get(T).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}l(P,"untrack");function F(T){Z(T.target)}l(F,"onTextureDispose");function k(T){L(T.target)}l(k,"onRenderTargetDispose");function Z(T){T.removeEventListener("dispose",F),P(T),ne(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}l(Z,"destroyTexture");function L(T){T.removeEventListener("dispose",k),P(T),J(T)}l(L,"destroyRenderTarget");function q(){for(let T of g){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):Z(b))}g.clear(),f.clear()}l(q,"dispose");function ne(T){let b=n.get(T);if(b.__webglInit===void 0)return;let X=T.source,fe=m.get(X);if(fe){let le=fe[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&U(T),Object.keys(fe).length===0&&m.delete(X)}n.remove(T)}l(ne,"deallocateTexture");function U(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let X=T.source,fe=m.get(X);delete fe[b.__cacheKey],a.memory.textures--}l(U,"deleteTexture");function J(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=T.depthTexture;if(X&&X.renderTarget===T&&Z(X),T.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let xe=0;xe<b.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)i.deleteFramebuffer(b.__webglFramebuffer[le]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=T.textures;for(let le=0,xe=fe.length;le<xe;le++){let Me=n.get(fe[le]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[le])}n.remove(T)}l(J,"deallocateRenderTarget");let G=0;function j(){G=0}l(j,"resetTextureUnits");function z(){return G}l(z,"getTextureUnits");function ie(T){G=T}l(ie,"setTextureUnits");function re(){let T=G;return T>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,T}l(re,"allocateTextureUnit");function H(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}l(H,"getTextureCacheKey");function ae(T,b){let X=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&X.__version!==T.version){let fe=T.image;if(fe===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(X,T,b);return}}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}l(ae,"setTexture2D");function te(T,b){let X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){xt(X,T,b);return}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}l(te,"setTexture2DArray");function de(T,b){let X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){xt(X,T,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}l(de,"setTexture3D");function ce(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){tt(X,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}l(ce,"setTextureCube");let Ce={[wi]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Cc]:i.MIRRORED_REPEAT},Ve={[Ot]:i.NEAREST,[dg]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[xu]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},Ee={[gg]:i.NEVER,[jd]:i.ALWAYS,[xg]:i.LESS,[Jd]:i.LEQUAL,[_g]:i.EQUAL,[Kd]:i.GEQUAL,[vg]:i.GREATER,[yg]:i.NOTEQUAL};function qe(T,b){if(b.type===oi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===xu||b.magFilter===Go||b.magFilter===Nn||b.minFilter===Bt||b.minFilter===xu||b.minFilter===Go||b.minFilter===Nn)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ce[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ce[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ce[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ve[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ve[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot||b.minFilter!==Go&&b.minFilter!==Nn||b.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(qe,"setTextureParameters");function je(T,b){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",F),I(b));let fe=b.source,le=m.get(fe);le===void 0&&(le={},m.set(fe,le));let xe=H(b);if(xe!==T.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[xe].usedTimes++;let Me=le[T.__cacheKey];Me!==void 0&&(le[T.__cacheKey].usedTimes--,Me.usedTimes===0&&U(b)),T.__cacheKey=xe,T.__webglTexture=le[xe].texture}return X}l(je,"initTexture");function Xe(T,b,X){return Math.floor(Math.floor(T/X)/b)}l(Xe,"getRow");function gt(T,b,X,fe){let xe=T.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,X,fe,b.data);else{xe.sort((D,he)=>D.start-he.start);let Me=0;for(let D=1;D<xe.length;D++){let he=xe[Me],se=xe[D],ye=he.start+he.count,ge=Xe(se.start,b.width,4),_e=Xe(he.start,b.width,4);se.start<=ye+1&&ge===_e&&Xe(se.start+se.count-1,b.width,4)===ge?he.count=Math.max(he.count,se.start+se.count-he.start):(++Me,xe[Me]=se)}xe.length=Me+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,he=xe.length;D<he;D++){let se=xe[D],ye=Math.floor(se.start/4),ge=Math.ceil(se.count/4),_e=ye%b.width,Oe=Math.floor(ye/b.width),Je=ge,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Oe,Je,pe,X,fe,b.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(gt,"updateTexture");function xt(T,b,X){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let le=je(T,b),xe=b.source;t.bindTexture(fe,T.__webglTexture,i.TEXTURE0+X);let Me=n.get(xe);if(xe.version!==Me.__version||le===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=rt.getPrimaries(rt.workingColorSpace),Be=b.colorSpace===li?null:rt.getPrimaries(b.colorSpace),$e=b.colorSpace===li||pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ue=S(b.image,!1,r.maxTextureSize);ue=Fe(b,ue);let ve=s.convert(b.format,b.colorSpace),D=s.convert(b.type),he=C(b.internalFormat,ve,D,b.normalized,b.colorSpace,b.isVideoTexture);qe(fe,b);let se,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||le===!0,Oe=xe.dataReady,Je=E(b,ue);if(b.isDepthTexture)he=v(b.format===sr,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,he,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,he,ue.width,ue.height,0,ve,D,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Je,he,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)se=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,se.width,se.height,ve,D,se.data):t.texImage2D(i.TEXTURE_2D,pe,he,se.width,se.height,0,ve,D,se.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,Je,he,ue.width,ue.height),Oe&&gt(b,ue,ve,D)):t.texImage2D(i.TEXTURE_2D,0,he,ue.width,ue.height,0,ve,D,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,he,ye[0].width,ye[0].height,ue.depth);for(let pe=0,Be=ye.length;pe<Be;pe++)if(se=ye[pe],b.format!==Fn)if(ve!==null)if(ge){if(Oe)if(b.layerUpdates.size>0){let $e=sf(se.width,se.height,b.format,b.type);for(let Te of b.layerUpdates){let pt=se.data.subarray(Te*$e/se.data.BYTES_PER_ELEMENT,(Te+1)*$e/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Te,se.width,se.height,1,ve,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,se.width,se.height,ue.depth,ve,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,he,se.width,se.height,ue.depth,0,se.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,se.width,se.height,ue.depth,ve,D,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,he,se.width,se.height,ue.depth,0,ve,D,se.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Je,he,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)se=ye[pe],b.format!==Fn?ve!==null?ge?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,se.width,se.height,ve,se.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,he,se.width,se.height,0,se.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,se.width,se.height,ve,D,se.data):t.texImage2D(i.TEXTURE_2D,pe,he,se.width,se.height,0,ve,D,se.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,he,ue.width,ue.height,ue.depth),Oe)if(b.layerUpdates.size>0){let pe=sf(ue.width,ue.height,b.format,b.type);for(let Be of b.layerUpdates){let $e=ue.data.subarray(Be*pe/ue.data.BYTES_PER_ELEMENT,(Be+1)*pe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ue.width,ue.height,1,ve,D,$e)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,D,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ue.width,ue.height,ue.depth,0,ve,D,ue.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,Je,he,ue.width,ue.height,ue.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,D,ue.data)):t.texImage3D(i.TEXTURE_3D,0,he,ue.width,ue.height,ue.depth,0,ve,D,ue.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,Je,he,ue.width,ue.height);else{let pe=ue.width,Be=ue.height;for(let $e=0;$e<Je;$e++)t.texImage2D(i.TEXTURE_2D,$e,he,pe,Be,0,ve,D,null),pe>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ue.parentNode!==pe){pe.appendChild(ue),f.add(b),pe.onpaint=Be=>{let $e=Be.changedElements;for(let Te of f)$e.includes(Te.image)&&(Te.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let $e=i.RGBA,Te=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,Te,pt,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let pe=ze(ye[0]);t.texStorage2D(i.TEXTURE_2D,Je,he,pe.width,pe.height)}for(let pe=0,Be=ye.length;pe<Be;pe++)se=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve,D,se):t.texImage2D(i.TEXTURE_2D,pe,he,ve,D,se);b.generateMipmaps=!1}else if(ge){if(_e){let pe=ze(ue);t.texStorage2D(i.TEXTURE_2D,Je,he,pe.width,pe.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,D,ue)}else t.texImage2D(i.TEXTURE_2D,0,he,ve,D,ue);A(b)&&b.mipmapsAutoUpdate===!0&&w(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(xt,"uploadTexture");function tt(T,b,X){if(b.image.length!==6)return;let fe=je(T,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+X);let xe=n.get(le);if(le.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+X);let Me=rt.getPrimaries(rt.workingColorSpace),oe=b.colorSpace===li?null:rt.getPrimaries(b.colorSpace),ue=b.colorSpace===li||Me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Te=0;Te<6;Te++)!ve&&!D?he[Te]=S(b.image[Te],!0,r.maxCubemapSize):he[Te]=D?b.image[Te].image:b.image[Te],he[Te]=Fe(b,he[Te]);let se=he[0],ye=s.convert(b.format,b.colorSpace),ge=s.convert(b.type),_e=C(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Oe=b.isVideoTexture!==!0,Je=xe.__version===void 0||fe===!0,pe=le.dataReady,Be=E(b,se);qe(i.TEXTURE_CUBE_MAP,b);let $e;if(b.isDepthTexture){if(_e=v(b.format===sr,b.type),Je)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,se.width,se.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,se.width,se.height,0,ye,ge,null)}else if(ve){Oe&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,se.width,se.height);for(let Te=0;Te<6;Te++){$e=he[Te].mipmaps;for(let pt=0;pt<$e.length;pt++){let Wt=$e[pt];b.format!==Fn?ye!==null?Oe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,Wt.width,Wt.height,ye,Wt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,_e,Wt.width,Wt.height,0,Wt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,Wt.width,Wt.height,ye,ge,Wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,_e,Wt.width,Wt.height,0,ye,ge,Wt.data)}}}else{if($e=b.mipmaps,Oe&&Je){$e.length>0&&Be++;let Te=ze(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(D){Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,he[Te].width,he[Te].height,ye,ge,he[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,he[Te].width,he[Te].height,0,ye,ge,he[Te].data);for(let pt=0;pt<$e.length;pt++){let mr=$e[pt].image[Te].image;Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,mr.width,mr.height,ye,ge,mr.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,_e,mr.width,mr.height,0,ye,ge,mr.data)}}else{Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,ge,he[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ye,ge,he[Te]);for(let pt=0;pt<$e.length;pt++){let Wt=$e[pt];Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,ye,ge,Wt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,_e,ye,ge,Wt.image[Te])}}}A(b)&&b.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),xe.__version=le.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(tt,"uploadCubeTexture");function Qe(T,b,X,fe,le,xe){let Me=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),ue=C(X.internalFormat,Me,oe,X.normalized,X.colorSpace),ve=n.get(b),D=n.get(X);if(D.__renderTarget=b,!ve.__hasExternalTextures){let he=Math.max(1,b.width>>xe),se=Math.max(1,b.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,ue,he,se,b.depth,0,Me,oe,null):t.texImage2D(le,xe,ue,he,se,0,Me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,D.__webglTexture,0,et(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,D.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Qe,"setupFrameBufferTexture");function Dt(T,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let fe=b.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,le),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),xe,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let fe=b.textures;for(let le=0;le<fe.length;le++){let xe=fe[le],Me=s.convert(xe.format,xe.colorSpace),oe=s.convert(xe.type),ue=C(xe.internalFormat,Me,oe,xe.normalized,xe.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),ue,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Dt,"setupRenderBufferStorage");function ft(T,b,X){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(b.depthTexture);le.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!le.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?ce(b.depthTexture,0):ae(b.depthTexture,0);let Me=le.__webglTexture,oe=et(b),ue=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ve=b.depthTexture.format===sr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===tr)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Me,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Me,0);else if(b.depthTexture.format===sr)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Me,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(ft,"setupDepthTexture");function Et(T){let b=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let fe=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let le=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",le)},"disposeEvent");fe.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=fe}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let fe=0;fe<6;fe++)ft(b.__webglFramebuffer[fe],T,fe);else T.texture.mipmaps.length>0?ft(b.__webglFramebuffer[0],T,0):ft(b.__webglFramebuffer,T,0);else if(X){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Dt(b.__webglDepthbuffer[fe],T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Dt(b.__webglDepthbuffer,T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Et,"setupDepthRenderbuffer");function Lt(T,b,X){let fe=n.get(T);b!==void 0&&Qe(fe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Et(T)}l(Lt,"rebindTextures");function at(T){let b=T.texture,X=n.get(T),fe=n.get(b);T.addEventListener("dispose",k),I(T);let le=T.textures,xe=T.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){X.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0){X.__webglFramebuffer[oe]=[];for(let ue=0;ue<b.mipmaps.length;ue++)X.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else X.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)X.__webglFramebuffer[oe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Me)for(let oe=0,ue=le.length;oe<ue;oe++){let ve=n.get(le[oe]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let oe=0;oe<le.length;oe++){let ue=le[oe];X.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[oe]);let ve=s.convert(ue.format,ue.colorSpace),D=s.convert(ue.type),he=C(ue.internalFormat,ve,D,ue.normalized,ue.colorSpace,T.isXRRenderTarget===!0),se=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,X.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)Qe(X.__webglFramebuffer[oe][ue],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Qe(X.__webglFramebuffer[oe],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(b)?w(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let oe=0,ue=le.length;oe<ue;oe++){let ve=le[oe],D=n.get(ve),he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,D.__webglTexture),qe(he,ve),Qe(X.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+oe,he,0),A(ve)&&w(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,fe.__webglTexture),qe(oe,b),b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)Qe(X.__webglFramebuffer[ue],T,b,i.COLOR_ATTACHMENT0,oe,ue);else Qe(X.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,oe,0);A(b)?w(oe):b.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Et(T)}l(at,"setupRenderTarget");function B(T){let b=T.textures;for(let X=0,fe=b.length;X<fe;X++){let le=b[X];if(A(le)&&le.mipmapsAutoUpdate===!0){let xe=R(T),Me=n.get(le).__webglTexture;t.bindTexture(xe,Me),w(xe),t.unbindTexture()}}}l(B,"updateRenderTargetMipmap");let Pt=[];function ot(T){if(T.samples>0){if(me(T)===!1){let b=T.textures,X=T.width,fe=T.height,le=i.COLOR_BUFFER_BIT,xe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),oe=b.length>1;if(oe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let D=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,X,fe,0,0,X,fe,le,i.NEAREST),c===!0&&(Pt.length=0,Pt.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Pt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let D=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(ot,"updateMultisampleRenderTarget");function et(T){return Math.min(r.maxSamples,T.samples)}l(et,"getRenderTargetSamples");function me(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(me,"useMultisampledRTT");function ut(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}l(ut,"updateVideoTexture");function Fe(T,b){let X=T.colorSpace,fe=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||X!==vo&&X!==li&&(rt.getTransfer(X)===dt?(fe!==Fn||le!==an)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",X)),b}l(Fe,"verifyColorSpace");function ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}l(ze,"getDimensions"),this.allocateTextureUnit=re,this.resetTextureUnits=j,this.getTextureUnits=z,this.setTextureUnits=ie,this.setTexture2D=ae,this.setTexture2DArray=te,this.setTexture3D=de,this.setTextureCube=ce,this.rebindTextures=Lt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=me,this.dispose=q}l(h1,"WebGLTextures");function d1(i,e){function t(n,r=li){let s,a=rt.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===vu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hd)return i.BYTE;if(n===Wd)return i.SHORT;if(n===wa)return i.UNSIGNED_SHORT;if(n===_u)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===$d)return i.RGB;if(n===Fn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===Zd)return i.RED;if(n===bu)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===Mu)return i.RG_INTEGER;if(n===Su)return i.RGBA_INTEGER;if(n===Vo||n===Ho||n===Wo||n===Xo)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wu||n===Eu||n===Au||n===Tu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===qo||n===Du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cu||n===Ru)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Iu)return s.COMPRESSED_R11_EAC;if(n===Lu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qo)return s.COMPRESSED_RG11_EAC;if(n===Du)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nu||n===Uu||n===Fu||n===Ou||n===Bu||n===zu||n===ku||n===Gu||n===Vu||n===Hu||n===Wu||n===Xu||n===qu||n===Yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ou)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===Zu||n===Ju)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$u)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===ju||n===Yo||n===Qu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ku)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(d1,"WebGLUtils");var f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
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

}`,Op=class Op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _n({vertexShader:f1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(Op,"WebXRDepthSensing");var Cp=Op,Bp=class Bp extends Ei{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,m=null,g=null,y=typeof XRWebGLBinding<"u",x=new Cp,_={},S=t.getContextAttributes(),A=null,w=null,R=[],C=[],v=new ke,E=null,I=null,P=new pn;P.viewport=new At;let F=new pn;F.viewport=new At;let k=[P,F],Z=new Kc,L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ae=R[H];return ae===void 0&&(ae=new ma,R[H]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(H){let ae=R[H];return ae===void 0&&(ae=new ma,R[H]=ae),ae.getGripSpace()},this.getHand=function(H){let ae=R[H];return ae===void 0&&(ae=new ma,R[H]=ae),ae.getHandSpace()};function ne(H){let ae=C.indexOf(H.inputSource);if(ae===-1)return;let te=R[ae];te!==void 0&&(te.update(H.inputSource,H.frame,u||a),te.dispatchEvent({type:H.type,data:H.inputSource}))}l(ne,"onSessionEvent");function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",J);for(let H=0;H<R.length;H++){let ae=C[H];ae!==null&&(C[H]=null,R[H].disconnect(ae))}L=null,q=null,x.reset();for(let H in _)delete _[H];if(e.setRenderTarget(A),m=null,d=null,f=null,r=null,w=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),I!==null){let H=I.camera;H.fov=I.fov,H.zoom=I.zoom,H.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}l(U,"onSessionEnd"),this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,de=null,ce=null;S.depth&&(ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?sr:tr,de=S.stencil?ps:ai);let Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new In(d.textureWidth,d.textureHeight,{format:Fn,type:an,depthTexture:new rr(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new In(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(H){for(let ae=0;ae<H.removed.length;ae++){let te=H.removed[ae],de=C.indexOf(te);de>=0&&(C[de]=null,R[de].disconnect(te))}for(let ae=0;ae<H.added.length;ae++){let te=H.added[ae],de=C.indexOf(te);if(de===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=C.length){C.push(te),de=Ce;break}else if(C[Ce]===null){C[Ce]=te,de=Ce;break}if(de===-1)break}let ce=R[de];ce&&ce.connect(te)}}l(J,"onInputSourcesChange");function G(H,ae){ae===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ae.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}l(G,"updateCamera"),this.updateCamera=function(H){if(r===null)return;let ae=H.near,te=H.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(te=x.depthFar)),Z.near=F.near=P.near=ae,Z.far=F.far=P.far=te,(L!==Z.near||q!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),L=Z.near,q=Z.far),Z.layers.mask=H.layers.mask|6,P.layers.mask=Z.layers.mask&-5,F.layers.mask=Z.layers.mask&-3;let de=H.parent,ce=Z.cameras;G(Z,de);for(let Ce=0;Ce<ce.length;Ce++)G(ce[Ce],de);Z.projectionMatrix.copy(P.projectionMatrix),Z.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&H.isPerspectiveCamera&&(I={camera:H,fov:H.fov,zoom:H.zoom}),j(H,Z,de)};function j(H,ae,te){te===null?H.matrix.copy(ae.matrixWorld):(H.matrix.copy(te.matrixWorld),H.matrix.invert(),H.matrix.multiply(ae.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Pc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}l(j,"updateUserCamera"),this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(H){return _[H]};let z=null;function ie(H,ae){if(h=ae.getViewerPose(u||a),g=ae,h!==null){let te=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let de=!1;te.length!==Z.cameras.length&&(Z.cameras.length=0,de=!0);for(let Ee=0;Ee<te.length;Ee++){let qe=te[Ee],je=null;if(m!==null)je=m.getViewport(qe);else{let gt=f.getViewSubImage(d,qe);je=gt.viewport,Ee===0&&(e.setRenderTargetTextures(w,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(w))}let Xe=k[Ee];Xe===void 0&&(Xe=new pn,Xe.layers.enable(Ee),Xe.viewport=new At,k[Ee]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(je.x,je.y,je.width,je.height),Ee===0&&(Z.matrix.copy(Xe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),de===!0&&Z.cameras.push(Xe)}let ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ee=f.getDepthInformation(te[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(Ee,r.renderState)}if(ce&&ce.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ee=0;Ee<te.length;Ee++){let qe=te[Ee].camera;if(qe){let je=_[qe];je||(je=new Io,_[qe]=je);let Xe=f.getCameraImage(qe);je.sourceTexture=Xe}}}}for(let te=0;te<R.length;te++){let de=C[te],ce=R[te];de!==null&&ce!==void 0&&ce.update(de,ae,u||a)}z&&z(H,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}l(ie,"onAnimationFrame");let re=new Qg;re.setAnimationLoop(ie),this.setAnimationLoop=function(H){z=H},this.dispose=function(){}}};l(Bp,"WebXRManager");var Rp=Bp,m1=new mt,cx=new We;cx.set(-1,0,0,0,1,0,0,0,1);function g1(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,tf(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function r(x,_,S,A,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),f(x,_)):_.isMeshPhongMaterial?(s(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),d(x,_),_.isMeshPhysicalMaterial&&m(x,_,w)):_.isMeshMatcapMaterial?(s(x,_),g(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),y(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,S,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===vn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===vn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let S=e.get(_),A=S.envMap,w=S.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(cx),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(s,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,S,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*S,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(f,"refreshUniformsToon");function d(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(d,"refreshUniformsStandard");function m(x,_,S){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===vn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let S=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(g1,"WebGLMaterials");function x1(i,e,t,n){let r={},s={};function a(S,A){let w=A.program;n.uniformBlockBinding(S,w,r[S.id])}l(a,"bind");function o(S,A){let w=r[S.id];w===void 0&&(g(S),w=c(S),r[S.id]=w,S.addEventListener("dispose",x));let R=A.program;n.updateUBOMapping(S,R);let C=e.render.frame;s[S.id]!==C&&(u(S),s[S.id]=C)}l(o,"update");function c(S){let A=i.createBuffer(),w=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(S){let A=r[S.id],w=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=w.length;C<v;C++){let E=w[C];if(Array.isArray(E))for(let I=0,P=E.length;I<P;I++)h(E[I],C,I,R);else h(E,C,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(S,A,w,R){if(d(S,A,w,R)===!0){let C=S.__offset,v=S.value;if(Array.isArray(v)){let E=0;for(let I=0;I<v.length;I++){let P=v[I],F=y(P,!0);f(P,S.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}l(h,"updateUniform");function f(S,A,w){typeof S=="number"||typeof S=="boolean"?A[w]=S:S.isMatrix3?(A[w]=S.elements[0],A[w+1]=S.elements[1],A[w+2]=S.elements[2],A[w+3]=0,A[w+4]=S.elements[3],A[w+5]=S.elements[4],A[w+6]=S.elements[5],A[w+7]=0,A[w+8]=S.elements[6],A[w+9]=S.elements[7],A[w+10]=S.elements[8],A[w+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-w),w):S.toArray(A,w)}l(f,"writeUniformValue");function d(S,A,w,R){let C=S.value,v=A+"_"+w;if(Array.isArray(C)){R[v]===void 0&&(R[v]=[]);let E=R[v],I=!1;for(let P=0;P<C.length;P++)m(C[P],E,P)===!0&&(I=!0);return I}return m(C,R,v)}l(d,"hasUniformChanged");function m(S,A,w){if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:ArrayBuffer.isView(S)?A[w]=S.slice():A[w]=S.clone(),!0;{let R=A[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return A[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}l(m,"hasValueChanged");function g(S){let A=S.uniforms,w=0,R=16;for(let v=0,E=A.length;v<E;v++){let I=Array.isArray(A[v])?A[v]:[A[v]];for(let P=0,F=I.length;P<F;P++){let k=I[P],Z=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(A[v])||Array.isArray(k.value),q=w;for(let U=0,J=Z.length;U<J;U++){let G=Z[U],j=y(G,L),z=w%R,ie=z%j.boundary,re=z+ie;w+=ie,re!==0&&R-re<j.storage&&(w+=R-re),U===0&&(q=w),w+=j.storage}let ne=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new ne((w-q)/Float32Array.BYTES_PER_ELEMENT),k.__offset=q}}let C=w%R;return C>0&&(w+=R-C),S.__size=w,S.__cache={},this}l(g,"prepareUniformsGroup");function y(S,A){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=16,w.storage=48):S.isMatrix4?(w.boundary=16,w.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}l(y,"getUniformSize");function x(S){let A=S.target;A.removeEventListener("dispose",x),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let S in r)i.deleteBuffer(r[S]);r={},s={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(x1,"WebGLUniformsGroups");var _1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function v1(){return Ui===null&&(Ui=new va(_1,16,16,Ni,Un),Ui.name="DFG_LUT",Ui.minFilter=Bt,Ui.magFilter=Bt,Ui.wrapS=$n,Ui.wrapT=$n,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}l(v1,"getDFGLUT");var zp=class zp{constructor(e={}){let{canvas:t=bg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,x=new Set([Su,Mu,bu]),_=new Set([an,ai,wa,ps,vu,yu]),S=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},R=null,C=null,v=[],E=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,k=null,Z=null,L=null,q=null;this._outputColorSpace=Ft;let ne=0,U=0,J=null,G=-1,j=null,z=new At,ie=new At,re=null,H=new Ue(0),ae=0,te=t.width,de=t.height,ce=1,Ce=null,Ve=null,Ee=new At(0,0,te,de),qe=new At(0,0,te,de),je=!1,Xe=new Cr,gt=new Fc,xt=!1,tt=!1,Qe=new mt,Dt=new W,ft=new At,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function at(){return J===null?ce:1}l(at,"getTargetPixelRatio");let B=n;function Pt(M,O){return t.getContext(M,O)}l(Pt,"getContext");let ot,et,me,ut,Fe,ze,T,b,X,fe,le,xe,Me,oe,ue,ve,D,he,se,ye,ge,_e,Oe;try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){let O="webgl2";if(B=Pt(O,M),B===null)throw Pt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He("WebGLRenderer: "+M.message),M}function Je(){ot=new PS(B),ot.init(),ge=new d1(B,ot),et=new vS(B,ot,e,ge),me=new u1(B,ot),et.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),L=B.createFramebuffer(),q=B.createFramebuffer(),ut=new DS(B),Fe=new Jw,ze=new h1(B,ot,me,Fe,et,ge,ut),T=new RS(P),b=new Uy(B),_e=new xS(B,b),X=new IS(B,b,ut,_e),fe=new US(B,X,b,_e,ut),he=new NS(B,et,ze),ue=new yS(Fe),le=new Zw(P,T,ot,et,_e,ue),xe=new g1(P,Fe),Me=new jw,oe=new r1(ot),D=new gS(P,T,me,fe,g,c),ve=new c1(P,fe,et),Oe=new x1(B,ut,et,me),se=new _S(B,ot,ut),ye=new LS(B,ot,ut),ut.programs=le.programs,P.capabilities=et,P.extensions=ot,P.properties=Fe,P.renderLists=Me,P.shadowMap=ve,P.state=me,P.info=ut}l(Je,"initGLContext"),y!==an&&(I=new OS(y,t.width,t.height,o,r,s));let pe=new Rp(P,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(te,de,!1))},this.getSize=function(M){return M.set(te,de)},this.setSize=function(M,O,ee=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,de=O,t.width=Math.floor(M*ce),t.height=Math.floor(O*ce),ee===!0&&(t.style.width=M+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(te*ce,de*ce).floor()},this.setDrawingBufferSize=function(M,O,ee){te=M,de=O,ce=ee,t.width=Math.floor(M*ee),t.height=Math.floor(O*ee),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(y===an){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,O,ee,Y){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,O,ee,Y),me.viewport(z.copy(Ee).multiplyScalar(at()).round())},this.getScissor=function(M){return M.copy(qe)},this.setScissor=function(M,O,ee,Y){M.isVector4?qe.set(M.x,M.y,M.z,M.w):qe.set(M,O,ee,Y),me.scissor(ie.copy(qe).multiplyScalar(at()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){me.setScissorTest(je=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){Ve=M},this.getClearColor=function(M){return M.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,ee=!0){let Y=0;if(M){let $=!1;if(J!==null){let Se=J.texture.format;$=x.has(Se)}if($){let Se=J.texture.type,Ie=_.has(Se),be=D.getClearColor(),Re=D.getClearAlpha(),Ne=be.r,Ye=be.g,nt=be.b;Ie?(S[0]=Ne,S[1]=Ye,S[2]=nt,S[3]=Re,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=Ne,A[1]=Ye,A[2]=nt,A[3]=Re,B.clearBufferiv(B.COLOR,0,A))}else Y|=B.COLOR_BUFFER_BIT}O&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),D.dispose(),Me.dispose(),oe.dispose(),ze.dispose(),Fe.dispose(),T.dispose(),fe.dispose(),X.dispose(),_e.dispose(),Oe.dispose(),le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",n0),pe.removeEventListener("sessionend",i0),ts.stop()};function Be(M){M.preventDefault(),Mo("WebGLRenderer: Context Lost."),F=!0}l(Be,"onContextLost");function $e(){Mo("WebGLRenderer: Context Restored."),F=!1;let M=ut.autoReset,O=ve.enabled,ee=ve.autoUpdate,Y=ve.needsUpdate,$=ve.type;Je(),ut.autoReset=M,ve.enabled=O,ve.autoUpdate=ee,ve.needsUpdate=Y,ve.type=$}l($e,"onContextRestore");function Te(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Te,"onContextCreationError");function pt(M){let O=M.target;O.removeEventListener("dispose",pt),Wt(O)}l(pt,"onMaterialDispose");function Wt(M){mr(M),Fe.remove(M)}l(Wt,"deallocateMaterial");function mr(M){let O=Fe.get(M).programs;O!==void 0&&(O.forEach(function(ee){le.releaseProgram(ee)}),M.isShaderMaterial&&le.releaseShaderCache(M))}l(mr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,O,ee,Y,$,Se){O===null&&(O=Et);let Ie=$.isMesh&&$.matrixWorld.determinantAffine()<0,be=Nv(M,O,ee,Y,$);me.setMaterial(Y,Ie);let Re=ee.index,Ne=1;if(Y.wireframe===!0){if(Re=X.getWireframeAttribute(ee),Re===void 0)return;Ne=2}let Ye=ee.drawRange,nt=ee.attributes.position,Le=Ye.start*Ne,it=(Ye.start+Ye.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),it=Math.min(it,(Se.start+Se.count)*Ne)),Re!==null?(Le=Math.max(Le,0),it=Math.min(it,Re.count)):nt!=null&&(Le=Math.max(Le,0),it=Math.min(it,nt.count));let Nt=it-Le;if(Nt<0||Nt===1/0)return;_e.setup($,Y,be,ee,Re);let yt,_t=se;if(Re!==null&&(yt=b.get(Re),_t=ye,_t.setIndex(yt)),$.isMesh)Y.wireframe===!0?(me.setLineWidth(Y.wireframeLinewidth*at()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if($.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),me.setLineWidth(tn*at()),$.isLineSegments?_t.setMode(B.LINES):$.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else $.isPoints?_t.setMode(B.POINTS):$.isSprite&&_t.setMode(B.TRIANGLES);if($.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let tn=$._multiDrawStarts,De=$._multiDrawCounts,dn=$._multiDrawCount,ht=Re?b.get(Re).bytesPerElement:1,ns=Fe.get(Y).currentProgram.getUniforms();for(let nn=0;nn<dn;nn++)ns.setValue(B,"_gl_DrawID",nn),_t.render(tn[nn]/ht,De[nn])}else if($.isInstancedMesh)_t.renderInstances(Le,Nt,$.count);else if(ee.isInstancedBufferGeometry){let tn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,De=Math.min(ee.instanceCount,tn);_t.renderInstances(Le,Nt,De)}else _t.render(Le,Nt)};function t0(M,O,ee,Y){k!==null&&M.isNodeMaterial&&k.setObject(Y,M),xt===!0&&ue.setState(M,ee,!1),M.transparent===!0&&M.side===Li&&M.forceSinglePass===!1?(M.side=vn,M.needsUpdate=!0,oo(M,O,Y),M.side=Ur,M.needsUpdate=!0,oo(M,O,Y),M.side=Li):oo(M,O,Y)}l(t0,"prepareMaterial"),this.compile=function(M,O,ee=null){ee===null&&(ee=M),k!==null&&k.renderStart(M,O,ee),C=oe.get(ee),C.init(O),E.push(C),ee.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),M!==ee&&M.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),tt=this.localClippingEnabled,xt=ue.init(this.clippingPlanes,tt),xt===!0&&ue.setGlobalState(this.clippingPlanes,O),k!==null&&ve.render(C.state.shadowsArray,ee,O);let Y=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Se=$.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];t0(be,ee,O,$),Y.add(be)}else t0(Se,ee,O,$),Y.add(Se)}),C=E.pop(),k!==null&&k.renderEnd(),Y},this.compileAsync=function(M,O,ee=null){let Y=this.compile(M,O,ee);return new Promise($=>{function Se(){if(Y.forEach(function(Ie){let Re=Fe.get(Ie).currentProgram;(Re===void 0||Re.isReady())&&Y.delete(Ie)}),Y.size===0){$(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),ot.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let qh=null;function Lv(M){qh&&qh(M)}l(Lv,"onAnimationFrame");function n0(){ts.stop()}l(n0,"onXRSessionStart");function i0(){ts.start()}l(i0,"onXRSessionEnd");let ts=new Qg;ts.setAnimationLoop(Lv),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(M){qh=M,pe.setAnimationLoop(M),M===null?ts.stop():ts.start()},pe.addEventListener("sessionstart",n0),pe.addEventListener("sessionend",i0),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(M,O);let ee=pe.enabled===!0&&pe.isPresenting===!0,Y=I!==null&&(J===null||ee)&&I.begin(P,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,O,J),C=oe.get(M,E.length),C.init(O),C.state.textureUnits=ze.getTextureUnits(),E.push(C),Qe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?gt.setFromArrayCamera(O):Xe.setFromProjectionMatrix(Qe,Zn,O.reversedDepth),tt=this.localClippingEnabled,xt=ue.init(this.clippingPlanes,tt),R=Me.get(M,v.length),R.init(),v.push(R),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&Yh(Ie,O,-1/0,P.sortObjects)}Yh(M,O,0,P.sortObjects),R.finish(),k!==null&&k.updateLights(C.state.lightsArray),P.sortObjects===!0&&R.sort(Ce,Ve),Lt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Lt&&D.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),xt===!0&&ue.beginShadows();let $=C.state.shadowsArray;if(ve.render($,M,O),xt===!0&&ue.endShadows(),(Y&&I.hasRenderPass())===!1){let Ie=R.opaque,be=R.transmissive;if(C.setupLights(),O.isArrayCamera){let Re=O.cameras;if(be.length>0)for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++){let nt=Re[Ne];s0(Ie,be,M,nt)}Lt&&D.render(M);for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++){let nt=Re[Ne];r0(R,M,nt,nt.viewport)}}else be.length>0&&s0(Ie,be,M,O),Lt&&D.render(M),r0(R,M,O)}J!==null&&U===0&&(ze.updateMultisampleRenderTarget(J),ze.updateRenderTargetMipmap(J)),Y&&I.end(P),M.isScene===!0&&M.onAfterRender(P,M,O),_e.resetDefaultState(),G=-1,j=null,E.pop(),E.length>0?(C=E[E.length-1],ze.setTextureUnits(C.state.textureUnits),xt===!0&&ue.setGlobalState(P.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,k!==null&&k.renderEnd()};function Yh(M,O,ee,Y){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){let Ie=O.isArrayCamera?gt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){Y&&ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Qe);let be=fe.update(M),Re=M.material;Re.visible&&R.push(M,be,Re,ee,ft.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=O.isArrayCamera?gt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Re=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ft.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ft.copy(be.boundingSphere.center)),ft.applyMatrix4(M.matrixWorld).applyMatrix4(Qe)),Array.isArray(Re)){let Ne=be.groups;for(let Ye=0,nt=Ne.length;Ye<nt;Ye++){let Le=Ne[Ye],it=Re[Le.materialIndex];it&&it.visible&&R.push(M,be,it,ee,ft.z,Le,O)}}else Re.visible&&R.push(M,be,Re,ee,ft.z,null,O)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)Yh(Se[Ie],O,ee,Y)}l(Yh,"projectObject");function r0(M,O,ee,Y){let{opaque:$,transmissive:Se,transparent:Ie}=M;C.setupLightsView(ee),xt===!0&&ue.setGlobalState(P.clippingPlanes,ee),Y&&me.viewport(z.copy(Y)),$.length>0&&Yl($,O,ee),Se.length>0&&Yl(Se,O,ee),Ie.length>0&&Yl(Ie,O,ee),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}l(r0,"renderScene");function s0(M,O,ee,Y){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Y.id]===void 0){let Le=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Y.id]=new In(1,1,{generateMipmaps:!0,type:Le?Un:an,minFilter:Nn,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Se=C.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||z;Se.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let be=P.getRenderTarget(),Re=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(H),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),Lt&&D.render(ee);let Ye=P.toneMapping;P.toneMapping=Di;let nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),C.setupLightsView(Y),xt===!0&&ue.setGlobalState(P.clippingPlanes,Y),Yl(M,ee,Y),ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,Nt=O.length;it<Nt;it++){let yt=O[it],{object:_t,geometry:tn,material:De,group:dn}=yt;if(De.side===Li&&_t.layers.test(Y.layers)){let ht=De.side;De.side=vn,De.needsUpdate=!0,a0(_t,ee,Y,tn,De,dn),De.side=ht,De.needsUpdate=!0,Le=!0}}Le===!0&&(ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se))}P.setRenderTarget(be,Re,Ne),P.setClearColor(H,ae),nt!==void 0&&(Y.viewport=nt),P.toneMapping=Ye}l(s0,"renderTransmissionPass");function Yl(M,O,ee){let Y=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Se=M.length;$<Se;$++){let Ie=M[$],{object:be,geometry:Re,group:Ne}=Ie,Ye=Ie.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),be.layers.test(ee.layers)&&a0(be,O,ee,Re,Ye,Ne)}}l(Yl,"renderObjects");function a0(M,O,ee,Y,$,Se){k!==null&&$.isNodeMaterial&&k.setObject(M,$),M.onBeforeRender(P,O,ee,Y,$,Se),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(P,O,ee,Y,M,Se),$.transparent===!0&&$.side===Li&&$.forceSinglePass===!1?($.side=vn,$.needsUpdate=!0,P.renderBufferDirect(ee,O,Y,$,M,Se),$.side=Ur,$.needsUpdate=!0,P.renderBufferDirect(ee,O,Y,$,M,Se),$.side=Li):P.renderBufferDirect(ee,O,Y,$,M,Se),M.onAfterRender(P,O,ee,Y,$,Se)}l(a0,"renderObject");function o0(M){let O=0;for(let ee of M)ee.texture!==null&&O++;return O}l(o0,"countLightProbeGrids");function oo(M,O,ee){O.isScene!==!0&&(O=Et);let Y=Fe.get(M),$=C.state.lights,Se=C.state.shadowsArray,Ie=$.state.version,be=le.getParameters(M,$.state,Se,O,ee,C.state.lightProbeGridArray),Re=le.getProgramCacheKey(be),Ne=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=T.get(M.envMap||Y.environment,Ye),Y.envMapRotation=Y.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",pt),Ne=new Map,Y.programs=Ne,Y.programVariants=new Map);let nt=Ne.get(Re);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===Ie)return c0(M,be),nt}else be.uniforms=le.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,ee,be),M.onBeforeCompile(be,P),nt=le.acquireProgram(be,Re),Ne.set(Re,nt),Y.uniforms=be.uniforms;let Le=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ue.uniform),c0(M,be),Y.needsLights=Fv(M),Y.lightsStateVersion=Ie,Y.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.sunLights.value=$.state.sun,Le.sunLightShadows.value=$.state.sunShadow,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.sunShadowMatrix.value=$.state.sunShadowMatrix,Le.sunShadowCascade.value=$.state.sunShadowCascade,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.numLightProbeGrids=o0(C.state.lightProbeGridArray),Y.currentProgram=nt,Y.uniformsList=null,nt}l(oo,"getProgram");function Dv(M,O,ee,Y,$){let Se=Fe.get(M),Ie=Se.currentProgram.id+","+Y+","+$,be=Se.programVariants.get(Ie);return be===void 0?(be=oo(M,O,ee),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=Y,Se.toneMapping=$),be}l(Dv,"getProgramVariant");function l0(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Ea.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}l(l0,"getUniformList");function c0(M,O){let ee=Fe.get(M);ee.outputColorSpace=O.outputColorSpace,ee.batching=O.batching,ee.batchingColor=O.batchingColor,ee.instancing=O.instancing,ee.instancingColor=O.instancingColor,ee.instancingMorph=O.instancingMorph,ee.skinning=O.skinning,ee.morphTargets=O.morphTargets,ee.morphNormals=O.morphNormals,ee.morphColors=O.morphColors,ee.morphTargetsCount=O.morphTargetsCount,ee.numClippingPlanes=O.numClippingPlanes,ee.numIntersection=O.numClipIntersection,ee.vertexAlphas=O.vertexAlphas,ee.vertexTangents=O.vertexTangents,ee.toneMapping=O.toneMapping}l(c0,"updateCommonMaterialProperties");function Nv(M,O,ee,Y,$){O.isScene!==!0&&(O=Et),ze.resetTextureUnits();let Se=O.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,be=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:rt.workingColorSpace,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=T.get(Y.envMap||Ie,Re),Ye=Y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!ee.morphAttributes.position,it=!!ee.morphAttributes.normal,Nt=!!ee.morphAttributes.color,yt=Di;Y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(yt=P.toneMapping);let _t=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,tn=_t!==void 0?_t.length:0,De=Fe.get(Y),dn=C.state.lights;if(xt===!0&&(tt===!0||M!==j)){let Rt=M===j&&Y.id===G;ue.setState(Y,M,Rt)}let ht=!1,ns=!1;Y.version===De.__version?De.needsLights&&De.lightsStateVersion!==dn.state.version||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==Ne||Y.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==Ye||De.vertexTangents!==nt||De.morphTargets!==Le||De.morphNormals!==it||De.morphColors!==Nt||De.morphTargetsCount!==tn||De.numLightProbeGrids!==o0(C.state.lightProbeGridArray)?ht=!0:(De.outputColorSpace!==be||De.toneMapping!==yt)&&(ns=!0):(ht=!0,De.__version=Y.version);let nn=De.currentProgram;(ht===!0||ns===!0)&&(nn=ns===!0?Dv(Y,O,$,be,yt):oo(Y,O,$),k&&Y.isNodeMaterial&&k.onUpdateProgram(Y,nn,De));let $l=!1,gr=!1,is=!1,ct=nn.getUniforms(),Zt=De.uniforms;if(me.useProgram(nn.program)&&($l=!0,gr=!0,is=!0),Y.id!==G&&(G=Y.id,gr=!0),$l||j!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(B,"projectionMatrix",M.projectionMatrix),ct.setValue(B,"viewMatrix",M.matrixWorldInverse);let Xt=ct.map.cameraPosition;Xt!==void 0&&Xt.setValue(B,Dt.setFromMatrixPosition(M.matrixWorld)),et.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ct.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,gr=!0,is=!0)}if(De.needsLights&&(dn.state.sunShadowMap.length>0&&ct.setValue(B,"sunShadowMap",dn.state.sunShadowMap,ze),dn.state.directionalShadowMap.length>0&&ct.setValue(B,"directionalShadowMap",dn.state.directionalShadowMap,ze),dn.state.spotShadowMap.length>0&&ct.setValue(B,"spotShadowMap",dn.state.spotShadowMap,ze),dn.state.pointShadowMap.length>0&&ct.setValue(B,"pointShadowMap",dn.state.pointShadowMap,ze)),$.isSkinnedMesh){ct.setOptional(B,$,"bindMatrix"),ct.setOptional(B,$,"bindMatrixInverse");let Rt=$.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(B,"boneTexture",Rt.boneTexture,ze))}$.isBatchedMesh&&(ct.setOptional(B,$,"batchingTexture"),ct.setValue(B,"batchingTexture",$._matricesTexture,ze),ct.setOptional(B,$,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",$._indirectTexture,ze),ct.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",$._colorsTexture,ze));let ni=ee.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&he.update($,ee,nn),(gr||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,ct.setValue(B,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Zt.envMapIntensity.value=O.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=v1()),gr){if(ct.setValue(B,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&Uv(Zt,is),Se&&Y.fog===!0&&xe.refreshFogUniforms(Zt,Se),xe.refreshMaterialUniforms(Zt,Y,ce,de,C.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Rt=w,Xt=0;for(let qi of C.state.lightProbeGridArray)qi.texture!==null&&(Rt.textures[Xt]=qi.texture,Rt.min[Xt]=qi.boundingBox.min,Rt.max[Xt]=qi.boundingBox.max,Rt.resolution[Xt]=qi.resolution,Xt++);for(let qi in Rt)Rt[qi].length=Xt;Zt.probesSH.value=Rt.textures,Zt.probesMin.value=Rt.min,Zt.probesMax.value=Rt.max,Zt.probesResolution.value=Rt.resolution}Ea.upload(B,l0(De),Zt,ze)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ea.upload(B,l0(De),Zt,ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ct.setValue(B,"center",$.center),ct.setValue(B,"modelViewMatrix",$.modelViewMatrix),ct.setValue(B,"normalMatrix",$.normalMatrix),ct.setValue(B,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Rt=Y.uniformsGroups;for(let Xt=0,qi=Rt.length;Xt<qi;Xt++){let h0=Rt[Xt];Oe.update(h0,nn),Oe.bind(h0,nn)}}return nn}l(Nv,"setProgram");function Uv(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}l(Uv,"markUniformsLightsNeedsUpdate");function Fv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(Fv,"materialNeedsLights"),this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,O,ee){let Y=Fe.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Fe.get(M.texture).__webglTexture=O,Fe.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ee,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let ee=Fe.get(M);ee.__webglFramebuffer=O,ee.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,ee=0){J=M,ne=O,U=ee;let Y=null,$=!1,Se=!1;if(M){let be=Fe.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),z.copy(M.viewport),ie.copy(M.scissor),re=M.scissorTest,me.viewport(z),me.scissor(ie),me.setScissorTest(re),G=-1;return}else if(be.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(be.__hasExternalTextures)ze.rebindTextures(M,Fe.get(M.texture).__webglTexture,Fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ye=M.depthTexture;if(be.__boundDepthTexture!==Ye){if(Ye!==null&&Fe.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}let Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let Ne=Fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?Y=Ne[O][ee]:Y=Ne[O],$=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?Y=Fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[ee]:Y=Ne,z.copy(M.viewport),ie.copy(M.scissor),re=M.scissorTest}else z.copy(Ee).multiplyScalar(ce).floor(),ie.copy(qe).multiplyScalar(ce).floor(),re=je;if(ee!==0&&(Y=Z),me.bindFramebuffer(B.FRAMEBUFFER,Y)&&me.drawBuffers(M,Y),me.viewport(z),me.scissor(ie),me.setScissorTest(re),$){let be=Fe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,ee)}else if(Se){let be=O;for(let Re=0;Re<M.textures.length;Re++){let Ne=Fe.get(M.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,ee,be)}}else if(M!==null&&ee!==0){let be=Fe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,ee)}G=-1};function u0(M){let O=Fe.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=et.textureFormatReadable(M.format),O.__typeReadable=et.textureTypeReadable(M.type)),O}l(u0,"getReadableState"),this.readRenderTargetPixels=function(M,O,ee,Y,$,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re){me.bindFramebuffer(B.FRAMEBUFFER,Re);try{let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=u0(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-Y&&ee>=0&&ee<=M.height-$&&B.readPixels(O,ee,Y,$,ge.convert(Ye),ge.convert(nt),Se)}finally{let Ne=J!==null?Fe.get(J).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,O,ee,Y,$,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re)if(O>=0&&O<=M.width-Y&&ee>=0&&ee<=M.height-$){me.bindFramebuffer(B.FRAMEBUFFER,Re);let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=u0(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(O,ee,Y,$,ge.convert(Ye),ge.convert(nt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Nt=J!==null?Fe.get(J).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Nt);let yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Sg(B,yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(it),B.deleteSync(yt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,ee=0){let Y=Math.pow(2,-ee),$=Math.floor(M.image.width*Y),Se=Math.floor(M.image.height*Y),Ie=O!==null?O.x:0,be=O!==null?O.y:0;ze.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ie,be,$,Se),me.unbindTexture()},this.copyTextureToTexture=function(M,O,ee=null,Y=null,$=0,Se=0){let Ie,be,Re,Ne,Ye,nt,Le,it,Nt,yt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(ee!==null)Ie=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Re=ee.isBox3?ee.max.z-ee.min.z:1,Ne=ee.min.x,Ye=ee.min.y,nt=ee.isBox3?ee.min.z:0;else{let ct=Math.pow(2,-$);Ie=Math.floor(yt.width*ct),be=Math.floor(yt.height*ct),M.isDataArrayTexture?Re=yt.depth:M.isData3DTexture?Re=Math.floor(yt.depth*ct):Re=1,Ne=0,Ye=0,nt=0}Y!==null?(Le=Y.x,it=Y.y,Nt=Y.z):(Le=0,it=0,Nt=0);let _t=ge.convert(O.format),tn=ge.convert(O.type),De;O.isData3DTexture?(ze.setTexture3D(O,0),De=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ze.setTexture2DArray(O,0),De=B.TEXTURE_2D_ARRAY):(ze.setTexture2D(O,0),De=B.TEXTURE_2D),me.activeTexture(B.TEXTURE0),me.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),me.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),me.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let dn=me.getParameter(B.UNPACK_ROW_LENGTH),ht=me.getParameter(B.UNPACK_IMAGE_HEIGHT),ns=me.getParameter(B.UNPACK_SKIP_PIXELS),nn=me.getParameter(B.UNPACK_SKIP_ROWS),$l=me.getParameter(B.UNPACK_SKIP_IMAGES);me.pixelStorei(B.UNPACK_ROW_LENGTH,yt.width),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt.height),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),me.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);let gr=M.isDataArrayTexture||M.isData3DTexture,is=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ct=Fe.get(M),Zt=Fe.get(O),ni=Fe.get(ct.__renderTarget),Rt=Fe.get(Zt.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,ni.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Xt=0;Xt<Re;Xt++)gr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(M).__webglTexture,$,nt+Xt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(O).__webglTexture,Se,Nt+Xt)),B.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,B.DEPTH_BUFFER_BIT,B.NEAREST);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||Fe.has(M)){let ct=Fe.get(M),Zt=Fe.get(O);me.bindFramebuffer(B.READ_FRAMEBUFFER,L),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let ni=0;ni<Re;ni++)gr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ct.__webglTexture,$,nt+ni):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ct.__webglTexture,$),is?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,Se,Nt+ni):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,Se),$!==0?B.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,B.COLOR_BUFFER_BIT,B.NEAREST):is?B.copyTexSubImage3D(De,Se,Le,it,Nt+ni,Ne,Ye,Ie,be):B.copyTexSubImage2D(De,Se,Le,it,Ne,Ye,Ie,be);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else is?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,tn,yt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,yt.data):B.texSubImage3D(De,Se,Le,it,Nt,Ie,be,Re,_t,tn,yt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,Le,it,Ie,be,_t,tn,yt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,Le,it,yt.width,yt.height,_t,yt.data):B.texSubImage2D(B.TEXTURE_2D,Se,Le,it,Ie,be,_t,tn,yt);me.pixelStorei(B.UNPACK_ROW_LENGTH,dn),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),me.pixelStorei(B.UNPACK_SKIP_PIXELS,ns),me.pixelStorei(B.UNPACK_SKIP_ROWS,nn),me.pixelStorei(B.UNPACK_SKIP_IMAGES,$l),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(M){Fe.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){ne=0,U=0,J=null,me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};l(zp,"WebGLRenderer");var sh=zp;var Sn=["grass","plains","sand","rock","snow","forest","mud","tundra"],Oi={shore:-.03,deep:-.15,reach:3},ch={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},hx={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},ux={Ocean:{relief:{base:Oi.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:hx,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},_s=l(i=>i==="Unknown"?ch:(Object.prototype.hasOwnProperty.call(ux,i)?ux[i]:void 0)??hx,"terrainEntry");var y1=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),dx=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),fx=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Bi=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,f,d,m)=>{let g=Math.floor(y1(h,f,t)*16)*2;return(dx[g]??0)*d+(dx[g+1]??0)*m},"slope");return(h,f)=>{let d=h/r,m=f/a,g=Math.floor(d),y=Math.floor(m),x=d-g,_=m-y,S=fx(x),A=fx(_),w=o(g),R=o(g+1),C=c(y),v=c(y+1),E=u(w,C,x,_)+(u(R,C,x-1,_)-u(w,C,x,_))*S,I=u(w,v,x,_-1)+(u(R,v,x-1,_-1)-u(w,v,x,_-1))*S;return Math.max(-1,Math.min(1,(E+(I-E)*A)*1.4))}},"periodicNoise"),On=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var Fr=128,dh=.5,uh=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),b1={grass:{grain:l(({noise:i})=>On([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>On([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>On([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>On([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>On([uh(i(24,11)),uh(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>On([uh(i(24,11)),uh(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>On([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>On([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>On([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},hh=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),M1=l((i=Fr,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*Sn.length),r={u:i,v:i};return Sn.forEach((s,a)=>{let o=b1[s],c=l((A,w)=>Bi({cell:A*i/Fr,period:r,seed:7919*(a+1)+w}),"noise"),u=l((A,w)=>(R,C)=>Math.sin(2*Math.PI*(A*R+w*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/Fr,"texels")},f=o.grain(h),d=o.bumps(h),m=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++)g[A*i+w]=d(w+e,A+t);let y=l((A,w)=>g[(w+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let w=0;w<i;w++)x[A*i+w]=f(w+e,A+t),_+=x[A*i+w]??0;let S=_/(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++){let R=m+(A*i+w)*4,C=(x[A*i+w]??0)-S,v=(y(w+1,A)-y(w-1,A))/2*(i/Fr),E=(y(w,A+1)-y(w,A-1))/2*(i/Fr);n[R]=hh(o.shade*C+.5),n[R+1]=hh((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[R+2]=hh((1-Math.max(-1,Math.min(1,E*o.steep)))/2),n[R+3]=hh(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),px=M1;var ci={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var ui=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),mx=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${ui(ci.rockTo)}, ${ui(ci.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${ui(ci.snowAtEquator)} + (${ui(ci.snowAtPoles)} - ${ui(ci.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${ui(ci.snowDeepens)}, height) * smoothstep(${ui(ci.snowSlips)}, ${ui(ci.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${ui(ci.wetFrom)}, ${ui(ci.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${ui(ci.wetUpTo)}, height));
}
`;var S1=l(i=>[i.u/Math.max(1,Math.round(i.u/dh)),i.v===null?dh:i.v/Math.max(1,Math.round(i.v/dh))],"surfaceTile"),w1=Sn.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),E1=null,A1=l(()=>E1??=px(),"made"),T1=l((i,e)=>{let t=new us(A1(),Fr,Fr,Sn.length),n=new Ii({roughness:.92,vertexColors:!0}),[r,s]=S1(i);return t.format=Fn,t.type=an,t.wrapS=wi,t.wrapT=wi,t.magFilter=Bt,t.minFilter=Nn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=li,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new ke(r,s)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Ue(_s("Mountains").colour)},a.uniforms.snowColour={value:new Ue(_s("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${mx}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${w1}
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
  surface = mix(surface, surface${Sn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${Sn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),gx=T1;function _x(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new zt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in s){let f=xx(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][d]);let g=xx(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(_x,"mergeGeometries");function xx(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new vt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(xx,"mergeAttributes");var vx="#c79a72",C1="#5a4a3a";var ln="#7a5532",Vp="#5f6266",yx="#8a8f96",hi="#5d6447",kp="#e8e0cc",Sx="#6e4b2f",vs="#8a8580",bx="#5b3e27",Ta="#7d858c",R1=new W(0,1,0),Ae=new Ti(1,1,1),Yt=new Ci(.5,.5,1,10),ys=new Ri(.5,1,10),Ca=new Pr(.5,10,8),Xp=class Xp{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(Xp,"Parts");var $t=Xp,P1=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:Ca,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ys,colour:Vp,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ae,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Yt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Ca,colour:hi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),I1=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Yt,colour:ln,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Yt,colour:ln,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ys,colour:Vp,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Yt,colour:ln,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ys,colour:yx,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ae,colour:yx,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ae,colour:ln,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Yt,colour:ln,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ae,colour:i==="rifle"?"#3a3a3a":ln,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ae,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ae,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Yt,colour:ln,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Yt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),L1={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},Hp=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new $t,a=r===void 0?void 0:L1[r],o=a?.coat??(i==="modern"?hi:t[0]),c=a?.legs??(i==="ancient"?vx:i==="modern"?hi:C1);return n&&(s.add({shape:Ae,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ae,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ae,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ae,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ae,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ae,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ca,colour:vx,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:Ca,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:Ca,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):P1(i,t,s),r==="parachute"&&s.add({shape:Ae,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),I1(e,i,t,s),s},"person"),Mx=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Gp=l((i=Sx)=>new $t().add({shape:Ae,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ae,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ae,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ae,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ae,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),D1=l((i,e,t)=>new $t().addAll(Gp(),[0,0,0]).add({shape:Ae,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(Hp(i,e,t,{legs:!1}),[0,.04,0]),"rider"),N1=l(i=>new $t().add({shape:Ae,colour:vs,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ae,colour:vs,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Yt,colour:vs,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ae,colour:vs,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:vs,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:vs,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:vs,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ae,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),cn=l((i,e=.05)=>({shape:Yt,colour:ln,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),U1=l((i,e,t)=>{if(e==="chariot")return new $t().addAll(Gp(),[0,0,.09]).add({shape:Ae,colour:ln,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ae,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(cn([-.042,.035,-.045],.065)).add(cn([.042,.035,-.045],.065)).addAll(Hp(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new $t().addAll(Gp(t==="ancient"?"#8a7a64":Sx),[0,0,.1]).add({shape:Ae,colour:ln,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ae,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(cn([-.042,.03,-.03])).add(cn([.042,.03,-.03])).add(cn([-.042,.03,-.09])).add(cn([.042,.03,-.09]));return e==="wagon"?n.add({shape:Yt,colour:kp,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:kp,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ae,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ae,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),F1=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new $t().add({shape:Ae,colour:ln,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ae,colour:ln,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ae,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(cn([-.045,.03,.04],.045)).add(cn([.045,.03,.04],.045)).add(cn([-.045,.03,-.04],.045)).add(cn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?hi:Vp;return new $t().add({shape:Yt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ae,colour:i==="modern"?hi:ln,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ae,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(cn([-.04,.035,0],.07)).add(cn([.04,.035,0],.07))},"siege"),O1=l((i,e,t)=>{if(i==="industrial")return new $t().add({shape:Ae,colour:Ta,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ae,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(cn([-.045,.025,.06],.045)).add(cn([.045,.025,.06],.045)).add(cn([-.045,.025,-.06],.045)).add(cn([.045,.025,-.06],.045));let n=new $t().add({shape:Ae,colour:hi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ae,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ae,colour:hi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Yt,colour:hi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:hi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),B1=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new $t;switch(i.hull){case"oars":case"sail":{s.add({shape:Ae,colour:bx,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:ys,colour:bx,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:Yt,colour:ln,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ae,colour:o===0?e[1]:kp,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ae,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ae,colour:ln,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ae,colour:ln,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:Yt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ae,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ae,colour:Ta,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ae,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ae,colour:Ta,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ae,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ae,colour:i.era==="industrial"?"#4a4a48":Ta,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:ys,colour:i.era==="industrial"?"#4a4a48":Ta,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:Ta,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:Yt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ae,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ae,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Yt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ae,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),z1=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new $t().add({shape:Yt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ys,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ae,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ae,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ae,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),k1=l(i=>new $t().add({shape:Ca,colour:hi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ae,colour:hi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ae,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),G1=l((i,e)=>{let t=e?1.4:1;return new $t().add({shape:Yt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ys,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ae,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ae,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),wx=l((i,e)=>{switch(i.shape){case"foot":{let t=new $t;return Mx(i.squad).forEach(([n,r],s)=>t.addAll(Hp(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new $t;return Mx(i.squad).forEach(([n,r])=>t.addAll(D1(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return N1(e);case"cart":return U1(e,i.cart??"wagon",i.era);case"siege":return F1(i.era,e,i.large===!0);case"vehicle":return O1(i.era,e,i.large===!0);case"ship":return B1(i,e);case"aircraft":return z1(i,e);case"helicopter":return k1(e);default:return G1(e,i.large===!0)}},"figureParts"),V1=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new mt().compose(new W(...i),new gn().setFromAxisAngle(R1,n).multiply(new gn().setFromEuler(new Ln(...t))),new W(...e)),"partMatrix"),Wp=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Ue(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(V1(n)),a.setAttribute("color",new vt(u,3)),a}),t=_x(e)??new zt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Ex=l((i,e)=>Wp(wx(i,e).parts),"figureGeometry"),H1=new Ci(.19,.2,1,28),W1=new Ir(.22,.014,4,32),Ax=l((i,e,{fortified:t,scale:n,stand:r})=>{let s=i.shape==="ship",a=s?0:r,o=wx(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return s||o.push({shape:H1,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),t&&o.push({shape:W1,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Wp(o)},"unitBodyGeometry"),X1=new Ri(.75,.5,4),q1=new Ir(.36,.025,6,24),Tx=l((i,e,t)=>Wp([...i.flatMap(({x:n,z:r,width:s,height:a})=>[{shape:Ae,colour:"#b5ab98",at:[n,a/2,r],size:[s,a,s]},{shape:X1,colour:e,at:[n,a+s*.2,r],size:[s,s*.8,s],turn:[0,Math.PI/4,0]}]),...t?[{shape:q1,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Kt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),jo=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Bn=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),Qo=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),qp=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Cx={Warrior:Kt("ancient","club"),Spearman:Kt("ancient","spear"),Swordman:Kt("ancient","sword"),Archer:Kt("ancient","bow"),Horseman:jo("ancient","spear"),Chariot:qp("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Bn("ancient","oars"),Settlers:qp("ancient","wagon"),Diplomat:Kt("ancient","case",1),Caravan:qp("ancient","goods"),Explorer:Kt("ancient","pack",1),Pikeman:Kt("medieval","pike"),Knight:jo("medieval","lance"),Crusader:jo("medieval","sword"),Fanatic:Kt("medieval","sword"),Sail:Bn("medieval","sail"),Musketman:Kt("renaissance","musket"),Dragoon:jo("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Bn("renaissance","sail",!0,1),Galleon:Bn("renaissance","sail",!0),Rifleman:Kt("industrial","rifle"),AlpineTrooper:{...Kt("industrial","rifle"),dress:"snow"},Partisan:{...Kt("industrial","rifle"),dress:"irregular"},Cavalry:jo("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Kt("industrial","none",2),Ironclad:Bn("industrial","steam",!1,1),Transport:Bn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Kt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Kt("modern","rifle"),Paratrooper:{...Kt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Bn("modern","steam",!1,1),Cruiser:Bn("modern","steam",!0,2),MissileCruiser:Bn("modern","steam",!0,1,!0),Battleship:Bn("modern","steam",!0,3),Submarine:Bn("modern","submarine"),Carrier:Bn("modern","carrier",!0),Fighter:Qo("modern"),StealthFighter:Qo("modern",!1,!0),Bomber:Qo("modern",!0),StealthBomber:Qo("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Rx=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Cx,i)?Cx[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Bn("industrial","steam"):e.includes("Air")?Qo("modern"):Kt("ancient","spear")),"unitLook");var Y1=.03,Dx="#fff4b0",$1=.04,fh=.004,Yp=.018,Px=.01,Ix=.022,Lx=.03,Nx=.03,mh=.002,Z1="#4caf50",J1="#e0b030",K1="#d04030",j1=256,bs,di,Ms,Ss,fi,ws,ar,Pa,Jp=class Jp{constructor(){K(this,bs,new Map);K(this,di,new Map);K(this,Ms,new Map);K(this,Ss,new Map);K(this,fi,new Map);K(this,ws,new Map);K(this,ar,null);K(this,Pa,0);this.figureMaterial=new Ii({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Ir(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=p(this,bs).get(n);return r===void 0&&(r=new Ii({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),p(this,bs).set(n,r)),r}body(e,t,n,r=1){let s=JSON.stringify([e,t,n,r]),a=p(this,Ss).get(s);return a===void 0&&(a=Ax(e,t,{fortified:n,scale:r,stand:Y1}),p(this,Ss).set(s,a)),a}city(e){let t=nE(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),r=p(this,fi).get(n);return r===void 0&&(r=Tx(t,e.colours[0],e.walled),p(this,fi).set(n,r)),r}figure(e,t){let n=JSON.stringify([e,t]),r=p(this,Ms).get(n);return r===void 0&&(r=Ex(e,t),p(this,Ms).set(n,r)),r}plain(e){let t=p(this,ws).get(e);return t===void 0&&(t=new Tr({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),p(this,ws).set(e,t)),t}pointer(){if(p(this,ar)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Dx,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Rr(e);n.colorSpace=Ft,V(this,ar,new Tr({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,ar)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=p(this,di).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Rr(a);h.colorSpace=Ft,s=new Tr({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,di).set(r,s)}return s}get sweepDue(){return p(this,di).size+p(this,fi).size>Math.max(j1,p(this,Pa)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof Tt&&t.add(r.geometry),r instanceof _a&&t.add(r.material)});p(this,di).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,di).delete(r))}),p(this,fi).forEach((n,r)=>{t.has(n)||(n.dispose(),p(this,fi).delete(r))}),V(this,Pa,p(this,di).size+p(this,fi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,Ms).forEach(e=>e.dispose()),p(this,Ss).forEach(e=>e.dispose()),p(this,fi).forEach(e=>e.dispose()),p(this,Ss).clear(),p(this,fi).clear(),this.figureMaterial.dispose(),p(this,ws).forEach(e=>e.dispose()),p(this,ar)?.map?.dispose(),p(this,ar)?.dispose(),p(this,ws).clear(),V(this,ar,null),p(this,bs).forEach(e=>e.dispose()),p(this,di).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,bs).clear(),p(this,di).clear(),p(this,Ms).clear(),V(this,Pa,0)}};bs=new WeakMap,di=new WeakMap,Ms=new WeakMap,Ss=new WeakMap,fi=new WeakMap,ws=new WeakMap,ar=new WeakMap,Pa=new WeakMap,l(Jp,"MarkerKit");var xh=Jp,Ux=l(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Ra=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),ph=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),Q1=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),eE=3,tE=4,el=l((i,e,t,n,r=eE)=>{let s=new _a(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),Fx=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return el(i,e*r,e,t)},"label"),gh=[0,.36,0],nE=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let r=n/e*Math.PI*2+ph(i.name,1)*6,s=n===0?0:.12+ph(i.name,n+2)*.18;return{x:Math.cos(r)*s,z:Math.sin(r)*s,width:.07+ph(i.name,n+20)*.05,height:(n===0?.13:.05)+ph(i.name,n+40)*.05}})},"buildingsOf"),iE=l((i,e)=>{let t=new mn;return t.add(new Tt(i.city(e),i.figureMaterial)),t.add(Ra(Fx(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Ux(e.colours[0])),Nx,0),...gh)),t},"drawCity"),rE=l((i,e,t=null)=>{let n=new mn,{ring:r}=i.geometries,s=Rx(e.type,e.kinds),a=i.body(s,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+$1,0],u=e.health!==null,h=(t?.over??0)+(u?fh+mh:0),f=h+Px+mh,d=Q1(e),m=f+(d===""?0:Ix+mh),g=new Tt(a,i.figureMaterial);if(g.name=$p,g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(Ra(el(i.plain("#202020"),Yp,fh,t?.over??0),...c)),y>0){let x=el(i.plain(y>.5?Z1:y>.25?J1:K1),Yp*y,fh*.6,(t?.over??0)+fh*.2);x.center.x=1/(2*y),n.add(Ra(x,...c))}}if(n.add(Ra(el(i.plain(e.colours[0]),Yp,Px,h),...c)),d!==""&&n.add(Ra(Fx(i.label(d,e.colours[0],Ux(e.colours[0])),Ix,f),...c)),e.active){let y=new Tt(r,i.material(Dx,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,Ra(el(i.pointer(),Lx,Lx,m,tE),...c))}return n},"drawUnit"),sE="unit",$p="figures",Zp=.26,Ox=l((i,e)=>{let t=new mn;if(e.city!==null&&t.add(iE(i,e.city)),e.unit!==null){let n=e.city===null?0:Zp,r=rE(i,e.unit,e.city===null?null:{at:[gh[0],gh[1],gh[2]-n],over:Nx+mh});r.name=sE,r.position.z=n,t.add(r)}return t},"drawMarker");var Or=l(i=>i*Math.PI/180,"degrees"),aE=Or(25),oE=Or(80),lE=5,cE=90,uE=1.12,tl=Or(40),jp=Or(45),hE={above:{yaw:0,pitch:Or(80)},classic:{yaw:0,pitch:Or(55)},isometric:{yaw:Or(45),pitch:Or(30)}};var Bx=l(i=>({focus:i,...hE.classic,distance:24}),"defaultOrbit"),Kp=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),zx=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),Es=l(i=>({...i,yaw:zx(i.yaw),pitch:Kp(i.pitch,aE,oE),distance:Kp(i.distance,lE,cE)}),"clampOrbit"),La=l((i,e)=>Es({...i,distance:i.distance/uE**e}),"zoomed"),_h=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),vh=l((i,e)=>{let{forward:t}=_h(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),Qp=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=_h(i),u=vh(i,e),h=[t-u[0],n-u[1],r-u[2]],f=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(a),m=Math.tan(tl/2);return d<=1e-6?null:[f(o)/(d*m*s),f(c)/(d*m)]},"toScreen"),em=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=_h(i),c=Math.tan(tl/2);return{from:vh(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),Ia=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=em(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),kx=l((i,e,t,n,r)=>{let s=Ia(i,e,t,r),a=Ia(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(tl/2),{right:h}=_h(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),Gx=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:zx(i.yaw),focus:[n(r,e.u),e.v===null?Kp(s,0,t):n(s,e.v)]}},"settled"),Vx=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),yh=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var dE=new Ue("#3f8a8c"),fE=new Ue("#173a52"),pE=new Ue("#e8eeee"),Hx=`
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
`,mE=`
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
`,Br,Jn,zn,nm=class nm{constructor(e,t){K(this,Br);K(this,Jn);K(this,zn);V(this,Br,e),V(this,Jn,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<p(this,Jn).length;r+=2)p(this,Jn)[r]=Ai.toHalfFloat(0),p(this,Jn)[r+1]=Ai.toHalfFloat(1);V(this,zn,new va(p(this,Jn),e.columns,e.rows,Ni,Un)),p(this,zn).wrapS=wi,p(this,zn).wrapT=e.wrapsV?wi:$n,p(this,zn).magFilter=Bt,p(this,zn).minFilter=Bt,p(this,zn).needsUpdate=!0;let n=new _n({uniforms:xs.merge([we.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:dE.clone()},deep:{value:fE.clone()},foam:{value:pE.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Hx,fragmentShader:mE,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,zn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new Tt(new Pi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=p(this,Br),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),f=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;p(this,Jn)[d]=Ai.toHalfFloat(e.positions[u*3+1]??0),p(this,Jn)[d+1]=Ai.toHalfFloat(e.unseen[u]??0)}}p(this,zn).needsUpdate=!0}height(e,t){return Ai.fromHalfFloat(p(this,Jn)[(t*p(this,Br).columns+e)*2]??0)}unseen(e,t){return Ai.fromHalfFloat(p(this,Jn)[(t*p(this,Br).columns+e)*2+1]??0)>.5}texture(){return p(this,zn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Br).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,zn).dispose()}};Br=new WeakMap,Jn=new WeakMap,zn=new WeakMap,l(nm,"Water");var tm=nm,Wx=tm,gE=`
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
`,xE=.18,nl,im=class im{constructor(e,t){K(this,nl);V(this,nl,t.wrapsV);let n=new _n({uniforms:xs.merge([we.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:Hx,fragmentShader:gE,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new Tt(new Pi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,nl)&&e}follow(e,t,n){this.mesh.position.set(e,xE,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};nl=new WeakMap,l(im,"Clouds");var bh=im;var _E=.6,vE=.05,As=64,Xx=.125,yE=`
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
`,bE=`
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
`,qx=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),ME=l((i,e)=>{let[t]=qx(i.length),n=As*(1-2*Xx);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*As+(As-c)/2,y:Math.floor(s/t)*As+(As-u)/2,width:c,height:u}]})},"atlasPlaces"),SE=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),zr,kn,il,Ts,rl,Mh,Da,Yx,$x,sm=class sm{constructor(e){K(this,Da);K(this,zr,null);K(this,kn,null);K(this,il,"");K(this,Ts);K(this,rl,new WeakMap);K(this,Mh,1);V(this,Ts,e),this.material=new _n({uniforms:xs.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:vE},bias:{value:_E},cells:{value:[1,1]},pad:{value:Xx}}]),vertexShader:yE,fragmentShader:bE,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,zr)?.dispose(),V(this,zr,null),e===null||e.count===0)return null;N(this,Da,$x).call(this,e);let t=new Bo,n=new Pi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new ir(e.anchors,3)),t.setAttribute("slot",new ir(e.slots,2)),t.setAttribute("size",new ir(e.sizes,1)),t.setAttribute("cell",new ir(e.cells,1)),t.instanceCount=e.count,V(this,zr,t),t}make(){let e=new Tt(p(this,zr)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,zr)?.dispose(),p(this,kn)?.dispose(),this.material.dispose()}};zr=new WeakMap,kn=new WeakMap,il=new WeakMap,Ts=new WeakMap,rl=new WeakMap,Mh=new WeakMap,Da=new WeakSet,Yx=l(function(e){if(e===null)return 0;let t=p(this,rl).get(e);return t===void 0&&(t=rs(this,Mh)._++,p(this,rl).set(e,t)),t},"#imageId"),$x=l(function(e){let t=e.names.map(o=>`${o}:${N(this,Da,Yx).call(this,p(this,Ts).call(this,o))}`).join(",");if(t===p(this,il)&&p(this,kn)!==null)return;let[n,r]=qx(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*As,s.height=r*As,a!==null&&(a.imageSmoothingEnabled=!1,ME(e.names,o=>{let c=p(this,Ts).call(this,o);return c===null?null:SE(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=p(this,Ts).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),p(this,kn)?.dispose(),V(this,kn,new Rr(s)),p(this,kn).colorSpace=Ft,p(this,kn).premultiplyAlpha=!0,p(this,kn).magFilter=Ot,p(this,kn).minFilter=Nn,p(this,kn).generateMipmaps=!0,V(this,il,t),this.material.uniforms.atlas.value=p(this,kn),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(sm,"YieldIcons");var rm=sm,Zx=rm;var am=10466244,wE=14082796,EE=5984576,AE=16773336,Jx=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),TE=l(i=>[new Mn(new W(0,0,1),0),new Mn(new W(0,0,-1),i)],"polesAt"),CE=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),Kx=2048,jx=Math.hypot(30,40,20),Qx=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new sh({antialias:!0,canvas:i}),s=new Eo,a=new pn(tl*180/Math.PI,1,.1,400),o=new mn,{material:c,detail:u}=gx(e,t.rows*t.spacingV),h=new Oo(AE,2.6),f=new Map,d=new Map,m=new Ii({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=TE(g),x=new Map,_=new Map,S=new mn,A=new xh,w=new mn,R=new Zx(n??(()=>null)),C=new Wx(t,new Ue(am)),v=new bh(C.texture(),t),E=new wo(am,30,110),I=[[0,0]],P="0,0",F=[[0,0]],k="0,0",Z=!1,L=null;r.outputColorSpace=Ft,r.localClippingEnabled=!0,r.toneMapping=ko,r.shadowMap.enabled=!0,r.shadowMap.type=pu,s.background=new Ue(am),s.fog=E,s.add(new No(wE,EE,.9)),s.add(o),s.add(S),s.add(w),s.add(C.mesh),s.add(v.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(Kx,Kx),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let q=l((z,ie,re=I)=>re.map(([H,ae])=>{let te=z.make();return te.position.set(z.at[0]+H,z.at[1],z.at[2]+ae),ie.add(te),te}),"copiesOf"),ne=l(z=>q(z,o,CE(I,z.span,g,e.v,Z)),"overlayCopiesOf"),U=l(z=>z.drawn.forEach(ie=>{let re=ie.getObjectByName($p);re!==void 0&&(re.rotation.y=z.facing)}),"face"),J=l(z=>{let ie=Ox(A,z);return ie.traverse(re=>{re.castShadow=re instanceof Tt}),ie},"markerOf"),G=l(()=>{A.sweepDue&&A.sweep([...x.values(),..._.values()].flatMap(({original:z})=>z===void 0?[]:[z]))},"sweep");return{render:l(()=>r.render(s,a),"render"),resize:l((z,ie,re)=>{r.setPixelRatio(re),r.setSize(z,ie,!1),a.aspect=ie>0?z/ie:1,a.updateProjectionMatrix()},"resize"),setChunk:l((z,ie,re)=>{let H=`${z},${ie}`,ae=new zt;ae.setAttribute("position",new vt(re.positions,3)),ae.setAttribute("normal",new vt(re.normals,3)),ae.setAttribute("color",new vt(re.colours,3)),ae.setAttribute("surfacesA",new vt(re.surfacesA,4,!0)),ae.setAttribute("surfacesB",new vt(re.surfacesB,4,!0)),ae.setAttribute("shore",new vt(re.shore,1,!0)),ae.setIndex(new vt(re.indices,1)),ae.computeBoundingSphere();let te=f.get(H);te!==void 0&&(te.drawn.forEach(ce=>o.remove(ce)),te.geometry.dispose());let de={geometry:ae,at:[re.u,0,re.v],make:l(()=>{let ce=new Tt(ae,c);return ce.castShadow=!0,ce.receiveShadow=!0,ce},"make"),drawn:[]};de.drawn=q(de,o),f.set(H,de),C.setChunk(re)},"setChunk"),setOverlay:l((z,ie,re)=>{let H=`${z},${ie}`,ae=d.get(H);if(ae!==void 0&&(ae.drawn.forEach(Ce=>o.remove(Ce)),ae.geometry.dispose(),d.delete(H)),re===null)return;let te=new zt;te.setAttribute("position",new vt(re.positions,3)),te.setAttribute("normal",new vt(re.normals,3)),te.setAttribute("color",new vt(re.colours,3)),te.computeBoundingSphere(),te.computeBoundingBox();let de=te.boundingBox,ce={geometry:te,span:[re.v+(de?.min.z??0),re.v+(de?.max.z??0)],at:[re.u,0,re.v],make:l(()=>{let Ce=new Tt(te,m);return Ce.castShadow=!0,Ce.receiveShadow=!0,Ce},"make"),drawn:[]};ce.drawn=ne(ce),d.set(H,ce)},"setOverlay"),setMarker:l((z,ie,re)=>{if(x.get(z)?.drawn.forEach(te=>S.remove(te)),x.delete(z),re===null)return;let H=J(re),ae={at:ie,make:l(()=>H.clone(),"make"),drawn:[],original:H};ae.drawn=q(ae,S,F),x.set(z,ae),G()},"setMarker"),setWalker:l((z,ie)=>{let re=_.get(z);if(re?.drawn.forEach(te=>S.remove(te)),_.delete(z),ie===null)return;let H=J(ie),ae={at:re?.at??[0,0,0],facing:re?.facing??ie.unit?.facing??0,make:l(()=>H.clone(),"make"),drawn:[],original:H};ae.drawn=q(ae,S,F),U(ae),_.set(z,ae),G()},"setWalker"),placeWalker:l((z,ie,re)=>{let H=_.get(z);H!==void 0&&(H.at=ie,H.facing=re,H.drawn.forEach((ae,te)=>{let[de,ce]=F[te]??[0,0];ae.position.set(ie[0]+de,ie[1],ie[2]+ce)}),U(H))},"placeWalker"),setYields:l(z=>{L?.drawn.forEach(ie=>w.remove(ie)),L=null,R.set(z)!==null&&(L={at:[0,0,0],make:l(()=>R.make(),"make"),drawn:[]},L.drawn=q(L,w))},"setYields"),view:l((z,ie,re=e)=>{let[H,ae]=z.focus,[te,de,ce]=vh(z,ie),{near:Ce,far:Ve}=yh(z.distance);a.position.set(te,de,ce),a.lookAt(H,ie,ae),a.far=Ve*1.2,a.near=Math.max(.1,z.distance*.02),a.updateProjectionMatrix(),E.near=Ce,E.far=Ve;let Ee=z.distance*2.2,qe=h.shadow.camera;h.position.set(H+30,ie+40,ae+20),h.target.position.set(H,ie,ae),qe.left=-Ee,qe.right=Ee,qe.top=Ee,qe.bottom=-Ee,qe.near=Math.max(.5,jx-Ee*1.6),qe.far=jx+Ee*1.6,qe.updateProjectionMatrix(),C.follow(H,ae,Ve*2.2,h.position.clone().sub(h.target.position)),v.follow(H,ae,Ve*2.2),C.pastThePoles(re.v!==null),v.pastThePoles(re.v!==null),m.clippingPlanes=re.v===null?y:null,Z=re.v===null;let je=Jx(z.focus,Ve,re),Xe=`${je.join(";")}${Z?" stopped":""}`,gt=Jx(z.focus,Math.min(Ve,z.distance*2.2),re),xt=gt.join(";");Xe!==P&&(I=je,P=Xe,f.forEach(tt=>{tt.drawn.forEach(Qe=>o.remove(Qe)),tt.drawn=q(tt,o)}),d.forEach(tt=>{tt.drawn.forEach(Qe=>o.remove(Qe)),tt.drawn=ne(tt)}),L!==null&&(L.drawn.forEach(tt=>w.remove(tt)),L.drawn=q(L,w))),R.lean(z.pitch),xt!==k&&(F=gt,k=xt,[...x.values(),..._.values()].forEach(tt=>{tt.drawn.forEach(Qe=>S.remove(Qe)),tt.drawn=q(tt,S,F)}),_.forEach(U))},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{f.forEach(({geometry:z})=>z.dispose()),f.clear(),d.forEach(({geometry:z})=>z.dispose()),d.clear(),m.dispose(),x.clear(),_.clear(),A.dispose(),R.dispose(),C.dispose(),v.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var or=1/Math.sqrt(3),e_=1.5*or,RE=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),PE=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,or+s*e_],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-or],[a+.5,o-or/2],[a+.5,o+or/2],[a,o+or],[a-.5,o+or/2],[a-.5,o-or/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-or,[c,u]=RE(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*e_:null}),"period")}},"hexOddRLayout"),t_=PE;var IE=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),n_=IE;var zi=Math.SQRT2/2,LE=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*zi,(s+1)*zi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-zi],[a+zi,o],[a,o+zi],[a-zi,o]]},"outline"),tileAt:l((r,s)=>{let a=r/zi,o=s/zi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*zi,v:t?i*zi:null}),"period")}},"staggeredIsoLayout"),i_=LE;var r_={square:n_,"staggered-iso":i_,"hex-odd-r":t_},DE=l(i=>{if(!Object.prototype.hasOwnProperty.call(r_,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return r_[i.topologyId](i)},"groundLayoutFor"),s_=DE;var sl=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Sh=.65,om=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),lr=.22,wh=.12,lm={low:.2,high:.5},a_=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,f=u*u+h*h,d=f===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/f)),m=sl(Math.hypot(i-t-u*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(r+(o-r)*(1-g*g*g)+c)},"halfRidge"),al=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),NE=l((i,e,t)=>({u:(al(i,e,t,1)*2-1)*lr,v:(al(i,e,t,2)*2-1)*lr,scale:.75+al(i,e,t,3)*.5}),"peakOf"),UE=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=On([Bi({cell:.7,period:o,seed:t}),Bi({cell:.35,period:o,seed:t+1}),Bi({cell:.17,period:o,seed:t+2})]),u=On([Bi({cell:.45,period:o,seed:t+3}),Bi({cell:.22,period:o,seed:t+4})]),h=l((U,J)=>1-2*Math.abs(u(U,J)),"ridged"),f=Bi({cell:.8,period:o,seed:t+5}),d=Bi({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],S=[],A=l((U,J)=>{let G=(U%r+r)%r;return!a&&(J<0||J>=s)?null:(J%s+s)%s*r+G},"index"),w=l(U=>{let J=new Array(r*s).fill(1/0),G=[];U.forEach((j,z)=>{j&&(J[z]=0,G.push([z%r,Math.floor(z/r)]))});for(let[j,z]of G){let ie=J[z*r+j]??1/0;ie>=Oi.reach||n.neighbours(j,z).forEach(([re,H])=>{let ae=H*r+re;(J[ae]??1/0)>ie+1&&(J[ae]=ie+1,G.push([re,H]))})}return J},"distancesFromLand"),R=l((U,J)=>{let G=n.terrainAt(U,J);return`${G}${G!=="Unknown"&&n.waterAt(U,J)?" water":""}`},"readAs"),C=l(U=>{if(U!==void 0&&y.length>0&&U.every(([te,de])=>{let ce=A(te,de);return ce===null||y[ce]===R(te,de)}))return[];let J=[],G=[],j=[];for(let te=0;te<s;te++)for(let de=0;de<r;de++){let ce=n.terrainAt(de,te);J.push(ce),G.push(ce!=="Unknown"&&n.waterAt(de,te)),j.push(_s(ce))}let z=w(J.map((te,de)=>te!=="Unknown"&&!G[de])),ie=J.map((te,de)=>`${te}${G[de]?" water":""}`),re=[];ie.forEach((te,de)=>{y[de]!==te&&re.push([de%r,Math.floor(de/r)])}),y=ie,g=j.map((te,de)=>{let ce=te===ch,Ce=de%r,Ve=Math.floor(de/r),Ee=NE(Ce,Ve,t);if(!G[de])return{relief:te.relief,colour:om(te.colour),surface:Sn.indexOf(te.surface),water:!1,unknown:ce,peak:Ee};let qe=Math.min(z[de]??1/0,Oi.reach),je=Oi.shore+(Oi.deep-Oi.shore)*Math.max(0,qe-1)/Math.max(1,Oi.reach-1);return{relief:{...te.relief,base:je},colour:om(te.colour),surface:Sn.indexOf("sand"),water:!0,unknown:ce,peak:Ee}});let H=S,ae=new Map(re.map(([te,de])=>[`${te},${de}`,[te,de]]));return S=g.map(({relief:te,unknown:de},ce)=>!de&&!G[ce]&&te.shape==="peaked"),re.some(([te,de])=>{let ce=de*r+te;return S[ce]===!0||H[ce]===!0})&&([x,_]=Z()),re.forEach(([te,de])=>{let ce=de*r+te;S[ce]!==!0&&H[ce]!==!0||n.neighbours(te,de).forEach(([Ce,Ve])=>{let Ee=A(Ce,Ve);Ee!==null&&S[Ee]===!0&&ae.set(`${Ce},${Ve}`,[Ce,Ve])})}),[...ae.values()]},"refresh"),v=l(U=>{let[J,G]=i.centre(0,U);return Math.max(...i.outline(0,U).map(([j,z])=>Math.hypot(j-J,z-G)))},"cornerOf"),E=l((U,J)=>{let[G,j]=i.centre(0,U),z=[];for(let ie=-8;ie<=8;ie++)for(let re=-6;re<=6;re++){let[H,ae]=i.centre(re,U+ie);Math.hypot(H-G,ae-j)<J+1e-9&&z.push([re,ie])}return z},"offsetsWithin"),I=l((U,J,G,j)=>{if(r>=6&&(!a||s>=6)){let te=l((Ce,Ve)=>{let Ee=(Ce%Ve+Ve)%Ve;return Ee*2<Ve?Ee:Ee-Ve},"nearest"),de=te(G-U,r),ce=a?te(j-J,s):j-J;return de===0&&ce===0?[]:[[de,ce]]}let z=l((te,de)=>{let ce=(te%de+de)%de;return ce===0?[0]:[ce,ce-de]},"copies"),[ie,re]=i.centre(U,J),H=z(G-U,r).flatMap(te=>(a?z(j-J,s):[j-J]).flatMap(de=>{if(te===0&&de===0)return[];let[ce,Ce]=i.centre(U+te,J+de);return[[te,de,Math.hypot(ce-ie,Ce-re)]]})),ae=Math.min(...H.map(([,,te])=>te));return H.filter(([,,te])=>te<=ae+1e-9).map(([te,de])=>[te,de])},"stepsTo"),P=Math.max(...[0,1].flatMap(U=>{let[J,G]=i.centre(0,U);return n.neighbours(0,U).flatMap(([j,z])=>I(0,U,j,z).map(([ie,re])=>{let[H,ae]=i.centre(ie,U+re);return Math.hypot(H-J,ae-G)}))}),1),F=[0,1].map(U=>{let[J,G]=i.centre(0,U);return E(U,P+lr*Math.SQRT2+wh+1.2+Math.max(v(0),v(1))).flatMap(([j,z])=>{let[ie,re]=i.centre(j,U+z);return[j,z,ie-J,re-G]})}),k=l((U,J,G,j,z,ie)=>{let re=z-G,H=ie-j,ae=re*re+H*H,te=ae===0?0:Math.max(0,Math.min(1,((U-G)*re+(J-j)*H)/ae));return Math.hypot(U-G-re*te,J-j-H*te)},"toSegment"),Z=l(()=>{let U=g.map(()=>[]),J=g.map(()=>[]),G=Math.max(v(0),v(1));return e?(g.forEach((j,z)=>{if(S[z]!==!0)return;let ie=z%r,re=Math.floor(z/r),[H,ae]=i.centre(ie,re),te=new Map;n.neighbours(ie,re).forEach(([de,ce])=>{let Ce=A(de,ce);Ce!==null&&S[Ce]===!0&&I(ie,re,de,ce).forEach(([Ve,Ee])=>te.set(`${Ve},${Ee}`,[Ve,Ee,Ce]))}),te.forEach(([de,ce,Ce])=>{let Ve=g[Ce];if(Ve===void 0||ce<0||ce===0&&de<0)return;let[Ee,qe]=i.centre(ie+de,re+ce),{peak:je,relief:Xe}=j,{peak:gt,relief:xt}=Ve,tt=je.u,Qe=je.v,Dt=Ee-H+gt.u,ft=qe-ae+gt.v,Et=Xe.base*Sh*je.scale,Lt=xt.base*Sh*gt.scale,at=Math.hypot(Dt-tt,ft-Qe)||1,B=16+(ce+2)*5+(de+2),Pt=(al(ie,re,t,B)*2-1)*wh,ot=lm.low+(lm.high-lm.low)*al(ie,re,t,B+32),et=(tt+Dt)/2-(ft-Qe)/at*Pt,me=(Qe+ft)/2+(Dt-tt)/at*Pt,ut=Math.max(Math.hypot(tt-et,Qe-me),Math.hypot(Dt-et,ft-me))+1.2,Fe={au:tt,av:Qe,ah:Et,mu:et,mv:me,mh:ot*Math.min(Et,Lt),bu:Dt,bv:ft,bh:Lt,roughness:(Xe.roughness+xt.roughness)/2,cu:et,cv:me,reach:ut*ut},ze=(Math.sqrt(Fe.reach)+G)**2,T=F[re&1]??[];for(let b=0;b<T.length;b+=4){let X=T[b+2],fe=T[b+3];if((X-et)**2+(fe-me)**2>=ze||Math.min(k(X,fe,tt,Qe,et,me),k(X,fe,et,me,Dt,ft))>=1.2+G)continue;let le=A(ie+T[b],re+T[b+1]);le!==null&&(U[le]?.push(Fe),J[le]?.push(X,fe))}})}),[U,J]):[U,J]},"ranges"),L=l(U=>{let[J,G]=i.centre(0,U),j=Math.max(...i.outline(0,U).map(([ie,re])=>Math.hypot(ie-J,re-G))),z=[];for(let ie=-6;ie<=6;ie++)for(let re=-4;re<=4;re++){let[H,ae]=i.centre(re,U+ie);Math.hypot(H-J,ae-G)<1.2+j+lr*Math.SQRT2+1e-9&&z.push([re,ie])}return z},"offsetsFor"),q=[L(0),L(1)],ne=l((U,J)=>{let[G,j]=i.tileAt(U,J),z=A(G,j),ie=z===null?null:g[z]??null;if(ie===null||ie.unknown)return{height:0,colour:om(ch.colour),surfaces:Sn.map(()=>0),shore:0,unseen:!0};let re=null,H=null,ae=l(Et=>Et==="rolling"?re??=c(U,J):H??=h(U,J),"noiseHere"),te=0,de=0,ce=0,Ce=0,Ve=Sn.map(()=>0),Ee=0,qe=0,je=0,Xe=0,gt=0,xt=U+lr*f(U,J),tt=J+lr*d(U,J);(q[j&1]??[]).forEach(([Et,Lt])=>{let at=G+Et,B=j+Lt,Pt=A(at,B);if(Pt===null)return;let ot=g[Pt];if(ot===void 0)return;let[et,me]=i.centre(at,B),{relief:ut,colour:Fe,peak:ze,surface:T}=ot,b=sl(Math.hypot(U-et,J-me)),X=ut.shape==="peaked"?sl(Math.hypot(U-et-ze.u,J-me-ze.v)):0,fe=sl(Math.hypot(xt-et,tt-me))**3;if(b>0){let le=m[ut.shape],xe=le===null?0:ut.roughness*ae(le);ut.shape==="peaked"?de+=b*(ut.base*(1-Sh)+xe*.5):de+=b*(ut.base+xe),te+=b}if(X>0){let le=ut.roughness*ae("ridged");ce+=X*X*(ut.base*Sh*ze.scale+le*.5)}Ce+=fe,ot.unknown||(Ve[T]=(Ve[T]??0)+fe,Ee+=fe,qe+=ot.water?fe:0),je+=fe*Fe[0],Xe+=fe*Fe[1],gt+=fe*Fe[2]});let Qe=z===null?[]:x[z]??[],Dt=z===null?[]:_[z]??[],ft=ce;if(Qe.length>0){let[Et,Lt]=i.centre(G,j);Qe.forEach((at,B)=>{let Pt=U-Et+(Dt[B*2]??0),ot=J-Lt+(Dt[B*2+1]??0);if((Pt-at.cu)**2+(ot-at.cv)**2>=at.reach)return;let et=at.roughness*ae("ridged")*.5;ft=Math.max(ft,a_(Pt,ot,at.au,at.av,at.ah,at.mu,at.mv,at.mh,et),a_(Pt,ot,at.bu,at.bv,at.bh,at.mu,at.mv,at.mh,et))})}return{height:(te>0?de/te:0)+ft,colour:Ce>0?[je/Ce,Xe/Ce,gt/Ce]:ie.colour,surfaces:Ee>0?Ve.map(Et=>Et/Ee):Sn.map((Et,Lt)=>Lt===ie.surface?1:0),shore:Ee>0?qe/Ee:ie.water?1:0,unseen:!1}},"sample");return C(),{sample:ne,height:l((U,J)=>ne(U,J).height,"height"),refresh:C}},"createRelief"),o_=UE;var l_=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),c_=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((I,P)=>[I*a,P*o],"at"),f=r+3,d=new Float64Array(f*(s+3)),m=(r+1)*(s+1),g=new Float32Array(m*3),y=new Uint8Array(m*4),x=new Uint8Array(m*4),_=new Uint8Array(m),S=new Float32Array(m);for(let I=-1;I<=s+1;I++)for(let P=-1;P<=r+1;P++){let F=e.sample(...h(c+P,u+I)),{height:k,colour:Z}=F;if(d[(I+1)*f+(P+1)]=k,P>=0&&P<=r&&I>=0&&I<=s){let L=I*(r+1)+P;g.set(Z,L*3),F.surfaces.forEach((q,ne)=>{(ne<4?y:x)[L*4+ne%4]=Math.round(q*255)}),_[L]=Math.round(F.shore*255),S[L]=F.unseen?1:0}}let A=l((I,P)=>d[(P+1)*f+(I+1)]??0,"height"),w=new Float32Array(m*3),R=new Float32Array(m*3),[C,v]=h(c,u);for(let I=0;I<=s;I++)for(let P=0;P<=r;P++){let F=I*(r+1)+P,[k,Z]=h(c+P,u+I),L=(A(P+1,I)-A(P-1,I))/(2*a),q=(A(P,I+1)-A(P,I-1))/(2*o),ne=Math.hypot(L,1,q);w[F*3]=k-C,w[F*3+1]=A(P,I),w[F*3+2]=Z-v,R[F*3]=-L/ne,R[F*3+1]=1/ne,R[F*3+2]=-q/ne}let E=new Uint32Array(r*s*6);for(let I=0;I<s;I++)for(let P=0;P<r;P++){let F=I*(r+1)+P,k=F+1,Z=F+r+1,L=Z+1,q=(I*r+P)*6;E.set([F,Z,k,k,Z,L],q)}return{u:C,v,positions:w,normals:R,colours:g,surfacesA:y,surfacesB:x,shore:_,unseen:S,indices:E}},"buildChunk"),u_=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/r);d<=Math.floor((h+n)/r);d++)for(let m=Math.floor((f-n)/s);m<=Math.floor((f+n)/s);m++){if(!a&&(m<0||m>=i.chunksV))continue;let g=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Gn=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),h_={Forest:{plants:[Gn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Gn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Gn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Gn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Gn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Gn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Gn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Gn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Gn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Gn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Gn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Gn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Gn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Ua=l(i=>Object.prototype.hasOwnProperty.call(h_,i)?h_[i]:null,"growthOf");var FE=["River"],Kn=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),OE=["Irrigation","Farmland","Fortress","Airbase"],d_=l(i=>i.city||OE.some(e=>Kn(i,e))?null:Ua(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),BE=l((i,e)=>{if(i.city)return null;let t=Kn(i,"Road"),n=Kn(i,"Railroad"),r=t?e.filter(f=>Kn(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||Kn(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,d)=>f[0]===d[0]&&f[1]===d[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(f=>!n||!s.some(d=>a(d,f))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:Kn(i,"Farmland")?"farmland":Kn(i,"Irrigation")?"irrigation":null,mine:Kn(i,"Mine"),fortress:Kn(i,"Fortress"),airbase:Kn(i,"Airbase"),pollution:Kn(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!FE.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:Ua(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=d_(i);return u!==null&&(c.woods=e.filter(f=>d_(f.tile)===u).map(({offset:f})=>f),c.paths=e.filter(f=>!!f.tile.city||Kn(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),f_=BE;var Ct=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),p_={Coal:Ct("rocks","#26262a",4),Gold:Ct("rocks","#d8b13a",3),Gems:Ct("rocks","#59c2d6",4,"#b05ad0"),Iron:Ct("rocks","#8a5a44",4),Wheat:Ct("crop","#d9b84a",5,"#a88a2c"),Spice:Ct("crop","#c0452e",4,"#5d7a2a"),Wine:Ct("crop","#6a2c5e",4,"#5d7a2a"),Silk:Ct("crop","#e9e2cf",3,"#4f7a34"),Fruit:Ct("crop","#e08a2a",4,"#3f7a2a"),Horse:Ct("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Ct("animal","#4a3424",3,"#2a1e16"),Game:Ct("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Ct("animal","#8f7e66",2,"#e8e2d6"),Furs:Ct("animal","#b0602a",2,"#f0e8dc"),Ivory:Ct("animal","#8a8580",1,"#f2ead8"),Seal:Ct("animal","#6e7072",2,"#4a4c4e"),Pheasant:Ct("bird","#8a3a22",2,"#3d6a3a"),Fish:Ct("fish","#b8c4cc",5),Whales:Ct("whale","#3a4048",1),Oil:Ct("derrick","#222224",1,"#121214"),Oasis:Ct("oasis","#3f7a32",3,"#3f86a8"),Peat:Ct("peat","#4a3624",4),Shield:Ct("logs","#7a5532",4,"#c9a47a")},zE=Ct("cairn","#9a9690",5),m_=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(p_,n)?p_[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??zE},"specialLook");var mm=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Vn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},cm=.06,g_="#8c7a58",x_="#5f5953",kE="#a9abae",GE="#5e432b",VE="#4f87b0",HE="#7da33f",WE=["#c2b448","#8fae3e"],__="#9d968a",XE="#4a4c50",fm="#6b4a2e",qE="#7a6a58",YE="#b89a5a",$E="#c9b48e",v_="#34322a",wn=new Ti(1,1,1),Oa=new Ci(.5,.5,1,8),gm=new Ri(.5,1,8),ZE=new Ri(.5,1,4),Fa=new Pr(.5,8,6),ol=new Ci(.5,.5,1,4,1,!0),ll=new Ri(.5,1,5,1,!0),Eh=new Pr(.5,5,3),um={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},JE=.05,KE=.22,y_=72,pi=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),b_=new Map,hm=l(i=>{let e=b_.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Ue(i);e=[t,n,r],b_.set(i,e)}return e},"colourOf"),M_=new WeakMap,jE=l(i=>{let e=M_.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},M_.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),QE=new mt,eA=new We,tA=new W,nA=new gn,iA=new Ln,rA=new W,kt,E_,un,bm=class bm{constructor(e,t){K(this,kt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=hm(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/cm)),u=Math.max(1,Math.ceil(n/cm)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<c;d++)for(let m=0;m<u;m++){let[g,y]=f(d/c,(m+1)/u),[x,_]=f((d+1)/c,(m+1)/u),[S,A]=f(d/c,m/u),[w,R]=f((d+1)/c,m/u);N(this,kt,un).call(this,g,y,s,a),N(this,kt,un).call(this,x,_,s,a),N(this,kt,un).call(this,S,A,s,a),N(this,kt,un).call(this,x,_,s,a),N(this,kt,un).call(this,w,R,s,a),N(this,kt,un).call(this,S,A,s,a)}}disc(e,t,n,r,s=12){let a=hm(n),[o,c]=e,u=Math.max(1,Math.ceil(t/cm)),h=l((f,d)=>{let m=d/s*Math.PI*2,g=f/u*t;return[o+Math.cos(m)*g,c+Math.sin(m)*g]},"at");for(let f=0;f<u;f++)for(let d=0;d<s;d++){let m=h(f+1,d),g=h(f+1,d+1);if(f===0)N(this,kt,un).call(this,o,c,r,a),N(this,kt,un).call(this,...g,r,a),N(this,kt,un).call(this,...m,r,a);else{let y=h(f,d),x=h(f,d+1);N(this,kt,un).call(this,...y,r,a),N(this,kt,un).call(this,...x,r,a),N(this,kt,un).call(this,...m,r,a),N(this,kt,un).call(this,...x,r,a),N(this,kt,un).call(this,...g,r,a),N(this,kt,un).call(this,...m,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=jE(e),c=QE.compose(tA.set(...t),nA.setFromEuler(iA.set(...s)),rA.set(...n)),u=c.elements,h=eA.getNormalMatrix(c).elements,[f,d,m]=hm(r),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],S=a[y+2],A=o[y],w=o[y+1],R=o[y+2],C=h[0]*A+h[3]*w+h[6]*R,v=h[1]*A+h[4]*w+h[7]*R,E=h[2]*A+h[5]*w+h[8]*R,I=Math.hypot(C,v,E)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*S+u[12],u[1]*x+u[5]*_+u[9]*S+u[13],u[2]*x+u[6]*_+u[10]*S+u[14]),g.normals.push(C/I,v/I,E/I),g.colours.push(f,d,m)}}spot(e,t){let n=pi(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-KE-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,pA(e,t,o,c)-JE-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=pi(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<y_;h++){let f=r+h/y_*Math.PI*2,d=[s+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>c&&(o=d,c=m)}return this.taken.push([o[0],o[1],n]),o}};kt=new WeakSet,E_=l(function(e,t){let r=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,s=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),un=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...N(this,kt,E_).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(bm,"Layer");var pm=bm,xm=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),_m=l(i=>i.alone||i.joins.length>0,"drawn"),sA=l((i,e)=>{let{place:t}=i;_m(e)&&(e.joins.forEach(n=>i.strip(t.centre,xm(t,n),.07,g_,Vn.road)),i.disc(t.centre,e.alone?.09:.035,g_,Vn.road))},"road"),aA=l((i,e)=>{if(!_m(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>xm(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,x_,Vn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,GE,Vn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,kE,Vn.rail))}),i.disc(t.centre,.05,x_,Vn.ballast)},"railroad"),oA=l((i,e)=>{let{centre:t,inner:n}=i.place,r=e==="farmland"?6:4,s=n*.9,a=s*2/r;for(let o=0;o<r;o++){let c=t[1]-s+a*(o+.5),u=e==="farmland"?WE[o%2]:HE;if(i.strip([t[0]-s,c],[t[0]+s,c],a*.8,u,Vn.field),o>0){let h=t[1]-s+a*o;i.strip([t[0]-s,h],[t[0]+s,h],.016,VE,Vn.field+.001)}}},"fields"),lA=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(wn,[e-.02,n+.05,t],[.01,.11,.01],fm,[0,0,-.3]),i.solid(wn,[e+.02,n+.05,t],[.01,.11,.01],fm,[0,0,.3]),i.solid(Oa,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid(gm,[a,i.ground(a,o)+.02,o],[.07,.04,.07],qE)})},"mine"),cA=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(wn,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],__)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(Oa,[o,i.ground(o,c)+.035,c],[.045,.07,.045],__)})},"fortress"),uA=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,XE,Vn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Vn.road+.004),i.solid(wn,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),hA=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,v_,Vn.smear,14),i.disc(i.spot(7,.5),e*.25,v_,Vn.smear+.001)},"pollution"),dA=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(pi(i.place.seed,n*31+o*2)-.5)*c,t[1]+(pi(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),f=pi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Fa,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,f,0]);break;case"crop":i.solid(Oa,[c,h+.02,u],[.008,.04,.008],r),i.solid(Fa,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(wn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(wn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],r,[0,f,0]),i.solid(wn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],r,[0,f,0]);break}case"bird":i.solid(Fa,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(wn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],r,[.4,f,0]);break;case"fish":i.solid(Fa,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(Fa,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(wn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(wn,[c,h+.008,u],[.08,.016,.08],r),i.solid(ZE,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,Vn.field+.002);{let[d,m]=s(o+5,.1),g=i.ground(d,m);i.solid(Oa,[d,g+.06,m],[.012,.12,.012],fm),i.solid(gm,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Oa:wn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(Fa,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),fA=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+pi(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(Oa,[r,a+.02,s],[.05,.04,.05],$E),i.solid(gm,[r,a+.055,s],[.065,.035,.065],YE)})},"hut"),A_={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},T_=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(ol,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(ll,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(ll,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(ol,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(Eh,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(ol,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(ll,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(ol,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(wn,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(Eh,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(ll,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(ll,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(Eh,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(wn,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(Eh,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(ol,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(wn,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),pA=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),mA=l((i,e)=>{let t=Ua(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*pi(s,h),d=t.conifers,m=d!==void 0&&pi(s,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,g=A_[m]*f;for(let y=0;y<6;y++){let x=pi(s,h+2+y*2)*Math.PI*2,_=Math.sqrt(pi(s,h+3+y*2))*r*.92,S=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(S,A,g)){T_(i,o,m,S,A,f,x),i.taken.push([S,A,g]),i.grown.push([S,A,m]);break}}}})},"plants"),dm=.26,S_=.3,gA=.15,w_=.5,Ah=[.9,1.3],Cs=l((i,e,t)=>pi(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),xA=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/dm)),f=o.u/h,d=o.v===null?null:Math.max(1,Math.round(o.v/dm)),m=o.v===null||d===null?dm:o.v/d,g=r.map(([v])=>v),y=r.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[S,A]=[Math.floor(Math.min(...y)/m)-1,Math.ceil(Math.max(...y)/m)],w=a.filter(([v,E])=>!i.woods.some(([I,P])=>I===v&&P===E)).map(v=>{let[E,I]=c(v),P=Math.hypot(E-n[0],I-n[1]);return{mu:E,mv:I,length:P}}),R=t.plants.reduce((v,{count:E})=>v+E,0),C=[];for(let v=S;v<=A;v++)for(let E=x;E<=_;E++){let I=(E%h+h)%h,P=d===null?v:(v%d+d)%d,F=(E+.5+(Cs(I,P,0)*2-1)*S_)*f,k=(v+.5+(Cs(I,P,1)*2-1)*S_)*m;if(!s(F,k))continue;let Z=w.reduce((G,{mu:j,mv:z,length:ie})=>{let re=ie/2-((F-n[0])*(j-n[0])+(k-n[1])*(z-n[1]))/ie;return Math.min(G,Math.max(0,re)/gA)},1);if(Cs(I,P,2)>=w_+(1-w_)*Z)continue;let L=Cs(I,P,3)*R,q=t.plants[0];for(let G of t.plants)if(q=G,L-=G.count,L<0)break;let ne=t.conifers,U=ne!==void 0&&Cs(I,P,4)>=ne[0]+(ne[1]-ne[0])*u?"broadleaf":q.kind,J=q.size[0]+(q.size[1]-q.size[0])*Cs(I,P,5);C.push({u:F,v:k,kind:U,plant:q,room:A_[U]*J*Ah[1],size:J*(Ah[0]+(Ah[1]-Ah[0])*Z),facing:Cs(I,P,6)*Math.PI*2})}return C},"woodsPlants"),_A=l((i,e,t)=>{let{centre:n,around:r,toward:s,heightAt:a}=i.place,o=Math.max(...r.map(u=>{let[h,f]=s(u);return Math.hypot(h-n[0],f-n[1])})),c=e.paths.map(u=>s(u));c.forEach((u,h)=>c.slice(h+1).forEach(f=>{Math.hypot(f[0]-u[0],f[1]-u[1])<=o+1e-6&&i.lines.push([u,f])})),xA(e,i.place,t).forEach(({u,v:h,kind:f,plant:d,size:m,room:g,facing:y})=>{f!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(T_(i,d,f,u,h,m,y),i.grown.push([u,h,f]))})},"woods"),vm=l((i,e,t)=>{let n=new pm(t,e),{centre:r,radius:s}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&_m(o)&&(o.joins.forEach(c=>n.lines.push([r,xm(e,c)])),o.alone&&n.lines.push([r,r]))}),i.fortress){let o=s*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[r[0]+u,r[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=s*.75;n.lines.push([[r[0]-o,r[1]+.12],[r[0]+o,r[1]+.12]])}i.irrigation!==null&&oA(n,i.irrigation),i.road!==null&&sA(n,i.road),i.railroad!==null&&aA(n,i.railroad),i.mine&&lA(n,n.claim(...um.mine,.1)),i.fortress&&cA(n),i.airbase&&uA(n),i.pollution&&hA(n),i.specials.forEach(([o,c],u)=>dA(n,m_(o,c),n.claim(...um.special(u),.1),u+1)),i.hut&&fA(n,n.claim(...um.hut,.13));let a=Ua(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?_A(n,i,a):mA(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),vA=l((i,e,t)=>{let n=mm();return t.forEach(({overlay:r,place:s})=>vm(r,s,n)),ym(i,e,n)},"overlayMesh"),ym=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),C_=vA;var kr,hn,mi,ul,gi,Hn,yn,Ba,hl,Rs,dl,fl,Mt,R_,Sm,wm,Th,Ch,P_,cl,Em=class Em{constructor(e){K(this,Mt);K(this,kr);K(this,hn);K(this,mi,[]);K(this,ul);K(this,gi);K(this,Hn,new Set);K(this,yn,null);K(this,Ba,null);K(this,hl,new Map);K(this,Rs,[0,0]);K(this,dl);K(this,fl);V(this,gi,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=s_({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),V(this,kr,o_({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:l((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:l((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),V(this,hn,l_(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-a,m-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,y]=this.layout.centre(d,m);return Math.hypot(g-a,y-o)}));V(this,ul,1.2+c+lr*Math.SQRT2+Math.max((Oi.reach-1)*u,u/2+lr*Math.SQRT2+wh));let h=this.layout.outline(0,0),f=h.flatMap(([d,m],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-d,x-m);return _===0?[]:[{away:Math.abs((y-d)*(o-m)-(x-m)*(a-d))/_,normal:[(x-m)/_,(d-y)/_]}]});V(this,dl,Math.min(...f.map(({away:d})=>d))),V(this,fl,Math.min(...f.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=p(this,hn),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((y,x)=>{let _=`${y},${x}`,S=n.get(_);return S===void 0&&(S=p(this,kr).height(y*r,x*s),n.set(_,S)),S},"at"),f=h(a,o),d=h(a+1,o),m=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(m-f)*u;let g=h(a+1,o+1);return g+(m-g)*(1-c)+(d-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=p(this,hn);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,hn).chunksV*p(this,hn).stepsV*p(this,hn).spacingV}heightAt(e,t){return p(this,kr).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=p(this,hn),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);V(this,mi,N(this,Mt,cl).call(this,s,e,t)),V(this,Rs,[e,t]),s.forEach(a=>p(this,Hn).add(a))}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];V(this,Rs,[t,n]),(e.length===0?[...N(this,Mt,Ch).call(this).values()].flat():N(this,Mt,P_).call(this,e)).forEach(([o,c])=>{let u=N(this,Mt,Th).call(this,o,c);if(p(this,Hn).has(u)||p(this,yn)?.key===u&&!N(this,Mt,R_).call(this,p(this,yn),o,c))return;JSON.stringify(N(this,Mt,Sm).call(this,o,c))!==(p(this,hl).get(`${o},${c}`)??"null")&&p(this,Hn).add(u)});let s=p(this,kr).refresh(r?void 0:e);if(s.length===0)return s;let a=u_(p(this,hn),this.layout,s,p(this,ul)).map(([o,c])=>`${o},${c}`);return V(this,mi,N(this,Mt,cl).call(this,[...new Set([...p(this,mi),...a])],t,n)),s}refocus(e,t){V(this,mi,N(this,Mt,cl).call(this,p(this,mi),e,t)),V(this,Rs,[e,t])}pending(){return p(this,mi).length}overlaysPending(){return p(this,Hn).size+(p(this,yn)===null||p(this,Hn).has(p(this,yn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,mi).length>0;){if(r())return;let s=p(this,mi).shift(),[a,o]=s.split(",").map(Number);e.setChunk(a,o,c_(p(this,hn),p(this,kr),a,o)),p(this,Hn).add(s)}for(;p(this,Hn).size>0||p(this,yn)!==null;){if(p(this,yn)!==null&&p(this,Hn).has(p(this,yn).key)&&V(this,yn,null),p(this,yn)===null){let d=N(this,Mt,cl).call(this,[...p(this,Hn)],...p(this,Rs))[0];p(this,Hn).delete(d),V(this,yn,{key:d,squares:N(this,Mt,Ch).call(this).get(d)??[],done:0,laid:mm(),heights:new Map})}let s=p(this,yn);for(;s.done<s.squares.length;){let[d,m]=s.squares[s.done],g=N(this,Mt,wm).call(this,d,m,s.heights);if(s.done++,g!==null&&vm(g.overlay,g.place,s.laid),s.done<s.squares.length&&r())return}let[a,o]=s.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=p(this,hn);V(this,yn,null),e.setOverlay(a,o,s.laid.positions.length===0?null:ym(a*c*h,o*u*f,s.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=p(this,hn),o=new Map,c=(N(this,Mt,Ch).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>N(this,Mt,wm).call(this,u,h,o)??[]);return c.length===0?null:C_(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return N(this,Mt,Th).call(this,e,t)}};kr=new WeakMap,hn=new WeakMap,mi=new WeakMap,ul=new WeakMap,gi=new WeakMap,Hn=new WeakMap,yn=new WeakMap,Ba=new WeakMap,hl=new WeakMap,Rs=new WeakMap,dl=new WeakMap,fl=new WeakMap,Mt=new WeakSet,R_=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),Sm=l(function(e,t){let n=p(this,gi).topology();return f_(p(this,gi).get(e,t),n.directions().flatMap(r=>{let s=n.neighbour(e,t,r);return s===null?[]:[{offset:n.offset(r,e,t),tile:p(this,gi).get(s[0],s[1])}]}))},"#overlayAt"),wm=l(function(e,t,n){let r=N(this,Mt,Sm).call(this,e,t);if(p(this,hl).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=p(this,gi).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:p(this,dl),inner:p(this,fl),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,f]=this.layout.tileAt(c,u);return h===e&&f===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),Th=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=p(this,hn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(s*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(r-1,Math.max(0,d))}`},"#chunkOf"),Ch=l(function(){if(p(this,Ba)===null){let e=new Map;for(let t=0;t<p(this,gi).height();t++)for(let n=0;n<p(this,gi).width();n++){let r=N(this,Mt,Th).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}V(this,Ba,e)}return p(this,Ba)},"#chunksOfSquares"),P_=l(function(e){let t=p(this,gi).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),cl=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=p(this,hn),c=r*a,u=s*o,{u:h,v:f}=this.layout.period(),d=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),m=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((x+.5)*u-n,f))},"distance");return[...e].sort((g,y)=>m(g)-m(y))},"#nearestFirst"),l(Em,"Land");var Mm=Em,I_=Mm;var yA=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ps=yA;var L_=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var bA=8,MA=.92,SA=.02,D_=3,wA=50,EA=8,AA=10,N_=250,pl,ml,za,ka,Is,Gr,Am=class Am{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){K(this,pl);K(this,ml);K(this,za);K(this,ka);K(this,Is,!1);K(this,Gr);this.pointerId=e,V(this,pl,t),V(this,ml,n),V(this,za,t),V(this,ka,n),V(this,Gr,[{x:t,y:n,time:r}])}dragging(){return p(this,Is)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!p(this,Is)&&Math.hypot(t-p(this,pl),n-p(this,ml))<bA)return null;let s=!p(this,Is),a=p(this,za)-t,o=p(this,ka)-n;return V(this,Is,!0),V(this,za,t),V(this,ka,n),p(this,Gr).push({x:t,y:n,time:r}),p(this,Gr).length>20&&p(this,Gr).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return L_(p(this,Gr),e)}};pl=new WeakMap,ml=new WeakMap,za=new WeakMap,ka=new WeakMap,Is=new WeakMap,Gr=new WeakMap,l(Am,"Press");var Rh=Am,ki,gl,Tm=class Tm{constructor(e){K(this,ki,null);K(this,gl);V(this,gl,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>D_?D_/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<SA){V(this,ki,null);return}p(this,gl).call(this,-r*u,-s*u);let h=Math.pow(MA,u/16);r*=h,s*=h,V(this,ki,window.requestAnimationFrame(o))},"step");V(this,ki,window.requestAnimationFrame(o))}gliding(){return p(this,ki)!==null}stop(){p(this,ki)!==null&&(window.cancelAnimationFrame(p(this,ki)),V(this,ki,null))}};ki=new WeakMap,gl=new WeakMap,l(Tm,"Glide");var Ph=Tm,Ls,xl,_l,Ga,Cm=class Cm{constructor(){K(this,Ls,0);K(this,xl,0);K(this,_l,-1/0);K(this,Ga,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=N_)return 0;let s=Math.sign(r),a=e.timeStamp-p(this,_l)>N_||s!==p(this,xl);if(V(this,_l,e.timeStamp),V(this,xl,s),a&&(V(this,Ls,0),V(this,Ga,0)),n&&!e.ctrlKey&&p(this,Ga)>=AA)return 0;if(!a&&n){if(V(this,Ls,p(this,Ls)+r),Math.abs(p(this,Ls))<(e.ctrlKey?EA:wA))return 0;V(this,Ls,0)}return n&&!e.ctrlKey&&V(this,Ga,p(this,Ga)+1),r<0?1:-1}};Ls=new WeakMap,xl=new WeakMap,_l=new WeakMap,Ga=new WeakMap,l(Cm,"WheelTurn");var Ih=Cm;var TA=350,CA=.006,U_=.004,Gi,jt,bn,Va,Vi,xi,Uh,Qn,ei,Vr,Ha,Wn,Hr,Pe,jn,Lh,Dh,F_,Pm,cr,Im,O_,ur,B_,z_,k_,G_,vl,V_,H_,W_,Nh,Lm=class Lm{constructor(e,t,n=null){K(this,Pe);K(this,Gi);K(this,jt);K(this,bn,null);K(this,Va,[0,0]);K(this,Vi,null);K(this,xi);K(this,Uh,new Ih);K(this,Qn,new Map);K(this,ei,null);K(this,Vr,null);K(this,Ha,[]);K(this,Wn);K(this,Hr,null);V(this,Gi,e),V(this,jt,t),V(this,Wn,n),V(this,xi,new Ph((r,s)=>{let[a,o]=N(this,Pe,F_).call(this);N(this,Pe,Im).call(this,[a,o],[a-r,o-s])})),N(this,Pe,jn).call(this,"pointerdown",r=>N(this,Pe,O_).call(this,r)),N(this,Pe,jn).call(this,"pointermove",r=>N(this,Pe,z_).call(this,r)),N(this,Pe,jn).call(this,"pointerup",r=>N(this,Pe,k_).call(this,r)),N(this,Pe,jn).call(this,"pointercancel",r=>N(this,Pe,G_).call(this,r)),N(this,Pe,jn).call(this,"wheel",r=>N(this,Pe,H_).call(this,r),{passive:!1}),N(this,Pe,jn).call(this,"gesturestart",r=>N(this,Pe,Nh).call(this,r,"start"),{passive:!1}),N(this,Pe,jn).call(this,"gesturechange",r=>N(this,Pe,Nh).call(this,r,"change"),{passive:!1}),N(this,Pe,jn).call(this,"gestureend",r=>N(this,Pe,Nh).call(this,r,"end"),{passive:!1}),N(this,Pe,jn).call(this,"contextmenu",r=>N(this,Pe,B_).call(this,r)),N(this,Pe,jn).call(this,"pointerleave",()=>p(this,Wn)?.hover(null)),N(this,Pe,jn).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return p(this,bn)?.dragging()===!0||p(this,Vi)!==null}moving(){return this.dragging()||p(this,ei)!==null||p(this,xi).gliding()}dispose(){p(this,xi).stop(),N(this,Pe,ur).call(this),p(this,Ha).forEach(([e,t,n])=>p(this,Gi).removeEventListener(e,t,n)),V(this,Ha,[])}};Gi=new WeakMap,jt=new WeakMap,bn=new WeakMap,Va=new WeakMap,Vi=new WeakMap,xi=new WeakMap,Uh=new WeakMap,Qn=new WeakMap,ei=new WeakMap,Vr=new WeakMap,Ha=new WeakMap,Wn=new WeakMap,Hr=new WeakMap,Pe=new WeakSet,jn=l(function(e,t,n){p(this,Gi).addEventListener(e,t,n),p(this,Ha).push([e,t,n])},"#listen"),Lh=l(function(){return{width:p(this,Gi).clientWidth||1,height:p(this,Gi).clientHeight||1}},"#box"),Dh=l(function([e,t]){let{width:n,height:r}=N(this,Pe,Lh).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),F_=l(function(){let{width:e,height:t}=N(this,Pe,Lh).call(this);return[e/2,t/2]},"#middle"),Pm=l(function(){let{width:e,height:t}=N(this,Pe,Lh).call(this);return e/t},"#aspect"),cr=l(function(e){let t=p(this,Gi).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Im=l(function(e,t){p(this,jt).setOrbit(kx(p(this,jt).orbit(),p(this,jt).lookHeight(),N(this,Pe,Dh).call(this,e),N(this,Pe,Dh).call(this,t),N(this,Pe,Pm).call(this)))},"#pan"),O_=l(function(e){if(p(this,xi).stop(),p(this,Wn)?.hover(null),e.pointerType==="touch"&&(p(this,Qn).set(e.pointerId,N(this,Pe,cr).call(this,e)),p(this,Qn).size===2)){V(this,bn,null),N(this,Pe,ur).call(this),V(this,ei,N(this,Pe,vl).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Gi).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),V(this,Vi,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Rh(e),[n,r]=N(this,Pe,cr).call(this,e),{clientX:s,clientY:a}=e;V(this,bn,t),V(this,Va,[n,r]),N(this,Pe,ur).call(this),V(this,Hr,window.setTimeout(()=>{V(this,Hr,null),p(this,bn)===t&&!t.dragging()&&p(this,Wn)?.menu(n,r,s,a,!0)===!0&&V(this,bn,null)},TA))}}},"#down"),ur=l(function(){p(this,Hr)!==null&&(window.clearTimeout(p(this,Hr)),V(this,Hr,null))},"#stopHold"),B_=l(function(e){if(p(this,Wn)===null||!p(this,Wn).menuOnRightClick()||(e.preventDefault(),p(this,Wn).menuOpen()))return;let[t,n]=N(this,Pe,cr).call(this,e);p(this,Wn).menu(t,n,e.clientX,e.clientY,!1)&&(N(this,Pe,ur).call(this),V(this,bn,null))},"#rightClick"),z_=l(function(e){if(p(this,Qn).has(e.pointerId)&&(p(this,Qn).set(e.pointerId,N(this,Pe,cr).call(this,e)),p(this,ei)!==null)){N(this,Pe,V_).call(this);return}let t=p(this,Vi);if(t!==null&&t.pointerId===e.pointerId){let s=p(this,jt).orbit();p(this,jt).setOrbit(Es({...s,yaw:s.yaw-(e.clientX-t.x)*CA,pitch:s.pitch+(e.clientY-t.y)*U_})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,bn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,xi).gliding()){let[s,a]=N(this,Pe,cr).call(this,e);p(this,Wn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;N(this,Pe,ur).call(this);let r=N(this,Pe,cr).call(this,e);N(this,Pe,Im).call(this,p(this,Va),r),V(this,Va,r)},"#move"),k_=l(function(e){if(p(this,Qn).delete(e.pointerId),p(this,ei)!==null){V(this,ei,p(this,Qn).size<2?null:N(this,Pe,vl).call(this));return}if(p(this,Vi)?.pointerId===e.pointerId){V(this,Vi,null);return}let t=p(this,bn);if(!(t===null||t.pointerId!==e.pointerId)){if(V(this,bn,null),N(this,Pe,ur).call(this),!t.dragging()){let[n,r]=N(this,Pe,cr).call(this,e);p(this,Wn)?.click(n,r,e.clientX,e.clientY);return}Ps()||p(this,xi).start(t.releaseVelocity(e.timeStamp))}},"#up"),G_=l(function(e){p(this,Qn).delete(e.pointerId),p(this,ei)!==null&&V(this,ei,p(this,Qn).size<2?null:N(this,Pe,vl).call(this)),p(this,bn)?.pointerId===e.pointerId&&(V(this,bn,null),N(this,Pe,ur).call(this)),p(this,Vi)?.pointerId===e.pointerId&&V(this,Vi,null)},"#cancel"),vl=l(function(){let[e,t]=[...p(this,Qn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,jt).orbit()}},"#measurePair"),V_=l(function(){let e=p(this,ei),t=N(this,Pe,vl).call(this);e===null||t===null||p(this,jt).setOrbit(Es({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*U_}))},"#twoFingers"),H_=l(function(e){e.preventDefault();let t=p(this,Uh).turned(e,p(this,Vr)?.at??null);t!==0&&(p(this,xi).stop(),N(this,Pe,W_).call(this,t,N(this,Pe,cr).call(this,e)))},"#wheelTurned"),W_=l(function(e,t){let n=p(this,jt).orbit(),r=La(n,e),s=Ia(n,p(this,jt).lookHeight(),N(this,Pe,Dh).call(this,t),N(this,Pe,Pm).call(this));if(s===null||r.distance===n.distance){p(this,jt).setOrbit(r);return}let a=1-r.distance/n.distance;p(this,jt).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),Nh=l(function(e,t){if(e.preventDefault(),p(this,ei)!==null){V(this,Vr,null);return}if(t==="end"){V(this,Vr,null);return}if(t==="start"){p(this,xi).stop(),V(this,bn,null),N(this,Pe,ur).call(this),V(this,Vr,{orbit:p(this,jt).orbit(),at:e.timeStamp});return}let n=p(this,Vr);n!==null&&(n.at=e.timeStamp,p(this,jt).setOrbit(Es({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(Lm,"CameraInput");var Rm=Lm,X_=Rm;var RA=["#9a9a9a","#4a4a4a"],yl=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?RA:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Dm=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),PA=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),IA=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=Dm(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:yl(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:yl(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:PA(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),Nm=IA;var $_={step:250,ramp:100,most:2e3},Z_={step:125,ramp:50,most:1e3},LA=50,DA=.05,Um=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),q_=l((i,e)=>{let{started:t,from:n,speed:r,rising:s,rise:a,top:o,going:c,stopping:u,fall:h,to:f}=i,d=Math.max(0,e-t);if(d<s)return{along:n+r*d+a*d*d/2,speed:r+a*d};let m=n+(r+o)/2*s;if(d<s+c)return{along:m+o*(d-s),speed:o};let g=m+o*c,y=d-s-c;return y<u?{along:g+o*y-h*y*y/2,speed:o-h*y}:{along:f,speed:0}},"motionAt"),Fm=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),Y_=l((i,e,t,n,r)=>{let s=Math.max(0,n-e),a=Math.max(1,r.ramp),o=Math.max(1/r.step,r.most>a*2?s/(r.most-a):0),c=o/a;if(s<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=s){let x=2*s/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let u=Math.min(o,Math.sqrt(c*s+t*t/2)),h=Math.abs(u-t)/c,f=u>=t?c:-c,d=u/c,m=(t+u)/2*h,g=u*d/2,y=Math.max(0,(s-m-g)/u);return{started:i,from:e,speed:t,rising:h,rise:f,top:u,going:y,stopping:d,fall:c,to:n}},"plan"),Wa=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),NA=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),Om=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),Xa,En,_i,Ml,Sl,St,J_,K_,zm,km,j_,Q_,Fh,bl,Gm=class Gm{constructor(e){K(this,St);K(this,Xa);K(this,En,new Map);K(this,_i,new Map);K(this,Ml,[]);K(this,Sl,0);V(this,Xa,e)}walking(e){return p(this,_i).has(e)}size(){return p(this,En).size}step(e,t,n,r,s,a,o){let c=p(this,_i).get(e),u=c===void 0?void 0:p(this,En).get(c),h=u===void 0?r:N(this,St,Fh).call(this,u,a),f=[...p(this,En).values()].find(d=>d!==u&&N(this,St,J_).call(this,d,t,n,a)&&N(this,St,j_).call(this,N(this,St,Fh).call(this,d,d.stepped),u===void 0?r:N(this,St,Fh).call(this,u,d.stepped)));if(f!==void 0)return u!==void 0&&N(this,St,km).call(this,u,e),f.units.push(e),p(this,_i).set(e,f.id),f.id;if(u!==void 0&&Um(u.squares[u.squares.length-1],t)){if(u.units.length>1){let d={...u,id:`walk-${++rs(this,Sl)._}`,units:u.units.filter(m=>m!==e),points:[...u.points],squares:[...u.squares]};p(this,En).set(d.id,d),d.units.forEach(m=>p(this,_i).set(m,d.id)),u.units=[e]}return N(this,St,zm).call(this,u,n,s,a,o),u.id}return u!==void 0&&N(this,St,km).call(this,u,e),N(this,St,K_).call(this,e,t,n,h,s,a,o)}at(e){let t=[],n=[];return p(this,En).forEach(r=>{let s=N(this,St,bl).call(this,r,e);if(e>=Fm(r.motion)){n.push(s),N(this,St,Q_).call(this,r);return}t.push(s)}),{going:t,ended:n}}dropped(){return p(this,Ml).splice(0)}nextEnd(){let e=null;return p(this,En).forEach(t=>{let n=Fm(t.motion);e=e===null?n:Math.min(e,n)}),e}endAll(e){let t=[...p(this,En).values()].map(n=>N(this,St,bl).call(this,n,Math.max(e,Fm(n.motion))));return p(this,En).clear(),p(this,_i).clear(),t}};Xa=new WeakMap,En=new WeakMap,_i=new WeakMap,Ml=new WeakMap,Sl=new WeakMap,St=new WeakSet,J_=l(function(e,t,n,r){let s=e.squares.length-1;return s>0&&r-e.stepped<=LA&&Um(e.squares[s-1],t)&&Um(e.squares[s],n)},"#justMade"),K_=l(function(e,t,n,r,s,a,o){let c=`walk-${++rs(this,Sl)._}`,u={id:c,units:[e],from:t,points:[r],squares:[t],stepped:a,motion:Y_(a,0,0,0,o),turned:null};return p(this,En).set(c,u),p(this,_i).set(e,c),N(this,St,zm).call(this,u,n,s,a,o),c},"#setOff"),zm=l(function(e,t,n,r,s){let{u:a,v:o}=p(this,Xa),c=e.points[e.points.length-1],u=c.middle??c.at,{along:h,speed:f}=q_(e.motion,r),d=Math.max(0,Math.floor(h)-1),m=e.points.length>1?N(this,St,bl).call(this,e,r).facing:null,g=e.points.length-1,y=h-(g-1);c.middle!==void 0&&y*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[g]={at:c.middle,lift:0,middle:c.middle}),e.points.splice(0,d),e.squares.splice(0,d),e.points.push({at:[Wa(n.at[0],c.at[0],a),Wa(n.at[1],c.at[1],o)],lift:n.lift,...n.middle===void 0?{}:{middle:[Wa(n.middle[0],u[0],a),Wa(n.middle[1],u[1],o)]}}),e.squares.push(t),e.stepped=r,e.turned=m===null?null:{facing:m,at:r,over:s.step/2},e.motion=Y_(r,h-d,f,e.points.length-1,s)},"#goOn"),km=l(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,_i).delete(t),e.units.length===0&&(p(this,En).delete(e.id),p(this,Ml).push(e.id))},"#leave"),j_=l(function(e,t){let{u:n,v:r}=p(this,Xa);return Math.hypot(Wa(e.at[0],t.at[0],n)-t.at[0],Wa(e.at[1],t.at[1],r)-t.at[1])<DA},"#beside"),Q_=l(function(e){p(this,En).delete(e.id),e.units.forEach(t=>p(this,_i).delete(t))},"#end"),Fh=l(function(e,t){let{at:n,lift:r}=N(this,St,bl).call(this,e,t);return{at:n,lift:r}},"#drawn"),bl=l(function(e,t){let{points:n,squares:r,turned:s}=e,a=n.length-1,o=Math.min(a,Math.max(0,q_(e.motion,t).along)),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],f=n[c+1]??h,d=[h.at[0]+(f.at[0]-h.at[0])*u,h.at[1]+(f.at[1]-h.at[1])*u],m=l(S=>n[S].middle??n[S].at,"middle"),g=l(S=>S<0||S>=a?null:NA(m(S),m(S+1)),"way"),y=g(c)??0,x=u>.75&&g(c+1)!==null?Om(y,g(c+1),(u-.75)*2):u<.25&&g(c-1)!==null?Om(g(c-1),y,(u+.25)*2):y,_=s!==null&&t-s.at<s.over?Om(s.facing,x,Math.max(0,t-s.at)/s.over):x;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(f.lift-h.lift)*u,facing:_,from:e.from,before:r[a-1]??r[a],to:r[a]}},"#walker"),l(Gm,"Walks");var Bm=Gm,ev=Bm;var UA=1,FA=.04,OA=12,BA=l((i,e,t,n,r,{water:s=0,ceiling:a=UA}={})=>{let{from:o,direction:c}=em(i,e,t,n),[u,h,f]=o,[d,m,g]=c;if(m>-1e-6)return null;let y=l(v=>[u+d*v,h+m*v,f+g*v],"at"),x=l(v=>{let[E,I,P]=y(v);return I-Math.max(s,r(E,P))},"above"),_=Math.max(0,(h-a)/-m),S=(h-s)/-m,A=FA/Math.max(1e-6,Math.hypot(d,g)),w=_;for(let v=_;;v=Math.min(S,v+A)){if(x(v)<=0){let E=w,I=v;for(let k=0;k<OA;k++){let Z=(E+I)/2;x(Z)>0?E=Z:I=Z}let[P,,F]=y(I);return[P,F]}if(v>=S)break;w=v}let[R,,C]=y(S);return[R,C]},"pickGround"),tv=BA;var Oh=4,Wr,wl,Ds,Ns,An,qa,Xr,hr,El,Al,Tl,vi,Bh,nv,Hm,Wm=class Wm{constructor(e,t,n,r,s){K(this,vi);K(this,Wr);K(this,wl);K(this,Ds);K(this,Ns);K(this,An);K(this,qa);K(this,Xr);K(this,hr);K(this,El);K(this,Al);K(this,Tl,l(e=>{let t=p(this,Wr).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;p(this,Al).call(this,n*p(this,An),r*p(this,qa))},"#click"));V(this,Wr,e),V(this,Ds,t),V(this,Ns,n),V(this,An,t.period().u),V(this,qa,r),V(this,Al,s),V(this,hr,document.createElement("canvas"));let{v:a}=t.period();V(this,Xr,a),V(this,El,[[0,0],[-p(this,An),0],...a===null?[]:[[0,-a],[-p(this,An),-a]]]);let o=Math.max(1,Math.round(p(this,An)*Oh)),c=Math.max(1,Math.round(p(this,qa)*Oh));[e,p(this,hr)].forEach(u=>{u.width=o,u.height=c}),V(this,wl,e.getContext("2d")),e.addEventListener("click",p(this,Tl))}dispose(){p(this,Wr).removeEventListener("click",p(this,Tl))}redraw(){let e=p(this,hr).getContext("2d");if(e===null)return;let t=p(this,Ns).width(),n=p(this,Ns).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,hr).width,p(this,hr).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=p(this,Ns).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=_s(c).colour,p(this,El).forEach(([f,d])=>{N(this,vi,nv).call(this,e,a,s,f,d),e.fill()});let[u,h]=p(this,Ds).centre(a,s);if(o.city)r.push([u,h,yl(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=Dm(o.units,null);f!==null&&r.push([u,h,yl(f.player)[0],1.4])}}r.forEach(([s,a,o,c])=>N(this,vi,Hm).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=p(this,wl);if(n===null)return;if(n.clearRect(0,0,p(this,Wr).width,p(this,Wr).height),n.drawImage(p(this,hr),0,0),t!==null){let[h,f]=p(this,Ds).centre(t.x,t.y);n.fillStyle="#ffffff",N(this,vi,Hm).call(this,h,f).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=p(this,Xr),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-p(this,An)*Math.floor(s/p(this,An)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-p(this,An),0,p(this,An)].forEach(f=>{n.beginPath(),e.forEach(([d,m],g)=>{let[y,x]=N(this,vi,Bh).call(this,d+o+f,m+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};Wr=new WeakMap,wl=new WeakMap,Ds=new WeakMap,Ns=new WeakMap,An=new WeakMap,qa=new WeakMap,Xr=new WeakMap,hr=new WeakMap,El=new WeakMap,Al=new WeakMap,Tl=new WeakMap,vi=new WeakSet,Bh=l(function(e,t){return[e*Oh,t*Oh]},"#px"),nv=l(function(e,t,n,r=0,s=0){e.beginPath(),p(this,Ds).outline(t,n).forEach(([a,o],c)=>{let[u,h]=N(this,vi,Bh).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Hm=l(function(e,t){return(p(this,Xr)===null?[0]:[-p(this,Xr),0,p(this,Xr)]).flatMap(r=>[-p(this,An),0,p(this,An)].map(s=>N(this,vi,Bh).call(this,e+s,t+r)))},"#everywhere"),l(Wm,"Minimap3D");var Vm=Wm,iv=Vm;var zA=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),rv=l(i=>{let e=zA(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var sv=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),av=l(i=>i.city??i.workedBy??null,"squareCity");var kA=.9,GA=l(i=>{let{columns:e,icons:t}=rv(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),VA=l((i,e)=>kA*e/Math.hypot(i,2),"yieldIconSize"),ov=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),lv=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=GA(e);return r.length===0?null:{at:i,size:VA(n,t),slots:r}},"laidYields"),cv=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=r.get(u);d===void 0&&(d=n.names.push(u)-1,r.set(u,d)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=f,n.sizes[s]=o,n.cells[s]=d,s++})}),n},"yieldMesh");var HA=10,WA=4e3,uv=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),XA=350,qA=500,YA=.25,$A=400,Ht,Ll,Dl,Ze,en,Us,Nl,Ul,lt,wt,Tn,Ya,Fl,Fs,$r,$a,Ol,Bl,Xn,Za,dr,Cn,Zr,Os,Bs,ti,Jr,Kr,zl,Ja,Ka,kl,Hi,jr,ja,qn,Qa,eo,fr,pr,to,Qr,zs,no,Wi,Gl,yi,es,Vl,ks,Xi,Gs,Vs,Hl,Wl,io,Xl,ro,ql,so,ao,Hs,Q,qm,hv,Ym,dv,zh,fv,kh,Gh,pv,$m,Vh,mv,Hh,Wh,Cl,gv,xv,_v,Zm,Xh,vv,yv,Rl,qr,Pl,bv,Mv,Jm,Yr,Sv,wv,Ev,Av,Il,Km,Tv,Cv,jm,Qt,Rv,Pv,Qm,e0=class e0{constructor(e,t=Qx){K(this,Q);K(this,Ht);K(this,Ll);K(this,Dl,[]);K(this,Ze);K(this,en);K(this,Us,null);K(this,Nl,0);K(this,Ul,"");K(this,lt);K(this,wt,null);K(this,Tn,null);K(this,Ya);K(this,Fl);K(this,Fs);K(this,$r,null);K(this,$a,null);K(this,Ol);K(this,Bl,!1);K(this,Xn);K(this,Za);K(this,dr,new Map);K(this,Cn);K(this,Zr,new Map);K(this,Os,new Map);K(this,Bs,new Map);K(this,ti,new Map);K(this,Jr,new Set);K(this,Kr,new Map);K(this,zl,0);K(this,Ja,new Map);K(this,Ka,new Map);K(this,kl);K(this,Hi,null);K(this,jr,null);K(this,ja);K(this,qn,l(()=>{let e=p(this,jr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),V(this,jr,null),document.removeEventListener("keydown",p(this,qn),!0),e.open&&p(this,Xn).endTooltip(p(this,Ht)))},"#endHover"));K(this,Qa,null);K(this,eo,!0);K(this,fr,new Map);K(this,pr,null);K(this,to,new Map);K(this,Qr,new Map);K(this,zs,[]);K(this,no,0);K(this,Wi,null);K(this,Gl,null);K(this,yi,!0);K(this,es);K(this,Vl,l(()=>{},"#stopUnitSize"));K(this,ks,!1);K(this,Xi,!0);K(this,Gs,!1);K(this,Vs,new Map);K(this,Hl);K(this,Wl,l(()=>{},"#stopArtChanged"));K(this,io,!1);K(this,Xl);K(this,ro);K(this,ql,"");K(this,so,l(()=>N(this,Q,Qm).call(this),"#resizeHandler"));K(this,ao,null);K(this,Hs,!1);V(this,Ht,e.mapCanvas),V(this,Ll,e.coveredBy),V(this,Xl,e.art),V(this,Za,{cityName:e.cityName,unitStatus:e.unitStatus}),V(this,es,e.unitSize?.get()??1),V(this,ro,e.art.id()),this.world=e.world,V(this,Ze,new I_(e.world)),V(this,Cn,new ev(p(this,Ze).layout.period())),V(this,Hl,ov(p(this,Ze).layout,e.world.topology())),V(this,zs,e.world.tiles()),V(this,no,p(this,zs).length),V(this,Fl,e.cameraDistance),V(this,Ol,e.lockVerticalEdges);let n=e.cameraDistance.get();V(this,lt,N(this,Q,Rl).call(this,{...Bx(p(this,Ze).layout.centre(0,0)),...n===null?{}:{distance:n}})),V(this,Fs,p(this,lt).distance),this.portal=new g0(e,{centre:l(()=>N(this,Q,vv).call(this),"centre"),centreOn:l((r,s)=>N(this,Q,yv).call(this,r,s),"centreOn"),changed:l(()=>N(this,Q,Qt).call(this),"changed"),visible:l((r,s,a)=>N(this,Q,Wh).call(this,r,s,a),"visible")}),V(this,en,t(e.mapCanvas,{period:p(this,Ze).layout.period(),ground:p(this,Ze).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&V(this,Qa,new iv(e.minimapCanvas,p(this,Ze).layout,e.world,p(this,Ze).extentV(),(r,s)=>N(this,Q,Pl).call(this,{...p(this,wt)?.to??p(this,lt),focus:[r,s]}))),e.debug&&e.mapCanvas.parentElement&&(V(this,Us,N(this,Q,Rv).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,Ze).queueAll(...N(this,Q,Xh).call(this)),N(this,Q,Il).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),V(this,Xn,e.squares),V(this,ja,e.playerId),V(this,kl,e.transport),V(this,Ya,new X_(e.mapCanvas,{orbit:l(()=>p(this,lt),"orbit"),lookHeight:l(()=>p(this,Tn)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>N(this,Q,gv).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>N(this,Q,xv).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>p(this,Xn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>p(this,Xn).menuOpen(),"menuOpen"),hover:l(r=>N(this,Q,_v).call(this,r),"hover")})),window.addEventListener("resize",p(this,so)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(V(this,ao,new ResizeObserver(p(this,so))),p(this,ao).observe(e.mapCanvas.parentElement)),N(this,Q,Qm).call(this),N(this,Q,Qt).call(this),V(this,Vl,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==p(this,es)&&!p(this,Hs)&&(V(this,es,r),N(this,Q,Il).call(this),N(this,Q,Qt).call(this))})??(()=>{})),V(this,Wl,e.artChanged?.(()=>{p(this,Hs)||(V(this,Xi,!0),N(this,Q,Qt).call(this))})??(()=>{}))}land(){return p(this,Ze)}orbit(){return p(this,lt)}moving(){return p(this,wt)!==null||p(this,Ya).moving()}setOrbit(e){p(this,qn).call(this),V(this,wt,null),V(this,lt,N(this,Q,Rl).call(this,e)),N(this,Q,Qt).call(this)}activeUnit(){return{unit:p(this,Wi),pendingTile:p(this,Gl)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,wt)?.to??p(this,lt);N(this,Q,Pl).call(this,{...t,yaw:t.yaw+e*jp},N(this,Q,qm).call(this)+e*jp)}heading(){return{turn:(p(this,wt)?.to??p(this,lt)).yaw,directions:x0(p(this,Ze).layout,this.world.topology())}}faceNorth(){N(this,Q,Pl).call(this,{...p(this,wt)?.to??p(this,lt),yaw:0},uv(-p(this,lt).yaw))}debugViewModes(){return[]}dispose(){N(this,Q,jm).call(this,!0),V(this,Hs,!0),p(this,Cn).endAll(0),p(this,ti).clear(),p(this,Jr).clear(),p(this,Kr).clear(),p(this,Vl).call(this),p(this,Wl).call(this),p(this,qn).call(this),p(this,Ya).dispose(),p(this,Qa)?.dispose(),window.removeEventListener("resize",p(this,so)),p(this,ao)?.disconnect(),p(this,pr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,pr)),V(this,pr,null),p(this,Us)?.remove(),p(this,en).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Hi);e!==null&&(V(this,Hi,null),p(this,Ht).classList.remove("picking-tile"),e.window?.close())}flush(){N(this,Q,Jm).call(this),N(this,Q,Qt).call(this)}mapEvent(e){if(e.kind==="moved"){N(this,Q,hv).call(this,e.unit,e.from,e.to),N(this,Q,Hh).call(this,e.unit.id,e.from,e.to);return}N(this,Q,Hh).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),N(this,Q,Hh).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=p(this,Ht).getBoundingClientRect();V(this,Dl,p(this,Ll).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};V(this,Hi,r),p(this,Ht).classList.add("picking-tile"),r.window=p(this,Xn).prompt(n,()=>{p(this,Hi)===r&&(V(this,Hi,null),p(this,Ht).classList.remove("picking-tile"))})}picking(){return p(this,Hi)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,to).set(t,e),p(this,Ja).set(t,++rs(this,zl)._)}redrawArt(){let e=p(this,Xl).id();return e===p(this,ro)?"unchanged":(V(this,ro,e),V(this,Xi,!0),"redrawn")}releaseTiles(){p(this,to).forEach((e,t)=>{p(this,Qr).set(t,e),p(this,Ka).set(t,p(this,Ja).get(t)??0)}),p(this,to).clear(),p(this,Ja).clear(),p(this,Qr).size>0&&N(this,Q,Qt).call(this)}setActiveUnit(e,t){let n=p(this,Wi)?.tile;V(this,Wi,e),V(this,Gl,t??null),[n,e?.tile].forEach(r=>{r&&N(this,Q,Yr).call(this,r.x,r.y)}),N(this,Q,Qt).call(this)}setWaiting(e){V(this,io,e),e&&p(this,qn).call(this)}showActiveUnit(e){p(this,yi)||(V(this,yi,!0),N(this,Q,Il).call(this),N(this,Q,Qt).call(this))}shown(){return{units:p(this,yi),yields:p(this,ks),waiting:p(this,io)}}tilesPending(){return p(this,Qr).size}toggleUnits(){V(this,yi,!p(this,yi)),N(this,Q,Il).call(this),N(this,Q,Qt).call(this)}toggleYields(){V(this,ks,!p(this,ks)),V(this,Xi,!0),N(this,Q,Qt).call(this)}zoomBy(e){p(this,qn).call(this),V(this,lt,La(p(this,lt),e)),p(this,wt)!==null&&(p(this,wt).from=La(p(this,wt).from,e),p(this,wt).to=La(p(this,wt).to,e)),N(this,Q,Qt).call(this)}};Ht=new WeakMap,Ll=new WeakMap,Dl=new WeakMap,Ze=new WeakMap,en=new WeakMap,Us=new WeakMap,Nl=new WeakMap,Ul=new WeakMap,lt=new WeakMap,wt=new WeakMap,Tn=new WeakMap,Ya=new WeakMap,Fl=new WeakMap,Fs=new WeakMap,$r=new WeakMap,$a=new WeakMap,Ol=new WeakMap,Bl=new WeakMap,Xn=new WeakMap,Za=new WeakMap,dr=new WeakMap,Cn=new WeakMap,Zr=new WeakMap,Os=new WeakMap,Bs=new WeakMap,ti=new WeakMap,Jr=new WeakMap,Kr=new WeakMap,zl=new WeakMap,Ja=new WeakMap,Ka=new WeakMap,kl=new WeakMap,Hi=new WeakMap,jr=new WeakMap,ja=new WeakMap,qn=new WeakMap,Qa=new WeakMap,eo=new WeakMap,fr=new WeakMap,pr=new WeakMap,to=new WeakMap,Qr=new WeakMap,zs=new WeakMap,no=new WeakMap,Wi=new WeakMap,Gl=new WeakMap,yi=new WeakMap,es=new WeakMap,Vl=new WeakMap,ks=new WeakMap,Xi=new WeakMap,Gs=new WeakMap,Vs=new WeakMap,Hl=new WeakMap,Wl=new WeakMap,io=new WeakMap,Xl=new WeakMap,ro=new WeakMap,ql=new WeakMap,so=new WeakMap,ao=new WeakMap,Hs=new WeakMap,Q=new WeakSet,qm=l(function(){let e=p(this,wt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),hv=l(function(e,t,n){if(typeof requestAnimationFrame!="function"||Ps())return;let r=p(this,Cn).walking(e.id),s=this.world.get(t.x,t.y).units.find(({id:o})=>o===e.id)??(N(this,Q,zh).call(this,e.id)?p(this,Zr).get(e.id):void 0),a=e.player===p(this,ja);s===void 0||!a&&!r&&!N(this,Q,Wh).call(this,t.x,t.y,-.5)&&!N(this,Q,Wh).call(this,n.x,n.y,-.5)||(p(this,Zr).set(e.id,s),p(this,Kr).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,zl)}),N(this,Q,dv).call(this,e.id),p(this,Cn).step(e.id,t,n,N(this,Q,Ym).call(this,t),N(this,Q,Ym).call(this,n),performance.now(),a?$_:Z_),N(this,Q,Qt).call(this))},"#walk"),Ym=l(function({x:e,y:t}){let[n,r]=p(this,Ze).layout.centre(e,t),s=Math.max(0,p(this,Ze).surfaceAt(n,r)),a=p(this,yi)&&this.world.get(e,t).city,o=[n,r+(a?Zp:0)];return{at:o,lift:s-Math.max(0,p(this,Ze).surfaceAt(...o)),middle:[n,r]}},"#standing"),dv=l(function(e){p(this,Jr).delete(e)&&p(this,ti).forEach((t,n)=>{let r=t.units.filter(s=>s!==e);if(r.length!==t.units.length){if(r.length===0){p(this,ti).delete(n),N(this,Q,Gh).call(this,n);return}p(this,ti).set(n,{...t,units:r})}})},"#stepsOn"),zh=l(function(e){return p(this,Cn).walking(e)||p(this,Jr).has(e)},"#leftOff"),fv=l(function(e){if(p(this,Cn).dropped().forEach(r=>N(this,Q,Gh).call(this,r)),p(this,ti).forEach(r=>N(this,Q,kh).call(this,r)),p(this,Cn).size()===0)return;if(Ps()){N(this,Q,Vh).call(this,p(this,Cn).endAll(e));return}let{going:t,ended:n}=p(this,Cn).at(e);N(this,Q,Vh).call(this,n),t.forEach(r=>N(this,Q,kh).call(this,r))},"#placeWalkers"),kh=l(function(e){let t=N(this,Q,pv).call(this,e),n=t===null?null:JSON.stringify(t),{u:r,v:s}=p(this,Ze).layout.period(),a=l((u,h)=>h===null?u:(u%h+h)%h,"within");if(n!==(p(this,Bs).get(e.id)??null)&&(p(this,en).setWalker(e.id,t),n===null?p(this,Bs).delete(e.id):p(this,Bs).set(e.id,n)),t===null)return;let o=a(e.at[0],r),c=a(e.at[1],s);p(this,en).placeWalker(e.id,[o,Math.max(0,p(this,Ze).surfaceAt(o,c))+e.lift,c],e.facing)},"#drawWalker"),Gh=l(function(e){p(this,Bs).delete(e)&&p(this,en).setWalker(e,null)},"#takeAway"),pv=l(function(e){let t=e.units.flatMap(n=>{let r=p(this,Zr).get(n);return r===void 0?[]:[r]});return Nm({city:null,units:t},p(this,Wi)?.id??null,p(this,yi),p(this,Za),()=>0,p(this,es))},"#walkerMarker"),$m=l(function({units:e}){return e.some(t=>p(this,Kr).has(t))},"#awaitsPatch"),Vh=l(function(e){let t=new Set;e.forEach(n=>{if(N(this,Q,$m).call(this,n)){p(this,ti).set(n.id,n),n.units.forEach(r=>p(this,Jr).add(r)),N(this,Q,kh).call(this,n);return}N(this,Q,Gh).call(this,n.id),n.units.forEach(r=>{p(this,Jr).delete(r),!p(this,Cn).walking(r)&&(p(this,Os).get(r)?.forEach(s=>t.add(s)),p(this,Os).delete(r),p(this,Zr).delete(r))})}),t.forEach(n=>{let[r,s]=n.split(",").map(Number);N(this,Q,Yr).call(this,r,s)})},"#walksEnded"),mv=l(function(e){if(p(this,Kr).forEach(({squares:n,after:r},s)=>{n.some(a=>(e.get(a)??0)>r)&&p(this,Kr).delete(s)}),p(this,ti).size===0)return;let t=[...p(this,ti).values()].filter(n=>!N(this,Q,$m).call(this,n));t.forEach(n=>p(this,ti).delete(n.id)),N(this,Q,Vh).call(this,t)},"#patched"),Hh=l(function(e,t,n){let[r,s]=p(this,Ze).layout.centre(t.x,t.y),[a,o]=p(this,Ze).layout.centre(n.x,n.y),{u:c,v:u}=p(this,Ze).layout.period(),h=l((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),f=h(a-r,c),d=h(o-s,u);f===0&&d===0||(p(this,dr).delete(e),p(this,dr).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),p(this,dr).size>WA&&p(this,dr).delete(p(this,dr).keys().next().value),[t,n].forEach(({x:m,y:g})=>N(this,Q,Yr).call(this,m,g)),N(this,Q,Qt).call(this))},"#face"),Wh=l(function(e,t,n){let r=p(this,Ht).clientWidth,s=p(this,Ht).clientHeight;if(r<=0||s<=0)return!1;let a=p(this,wt)?.to??p(this,lt),[o,c]=p(this,Ze).layout.centre(e,t),{u,v:h}=N(this,Q,qr).call(this),[f,d]=a.focus,m=l((v,E,I)=>I===null?v:v+I*Math.round((E-v)/I),"nearest"),g=[m(o,f,u),Math.max(0,p(this,Ze).heightAt(o,c)),m(c,d,h)],y=r/s,x=p(this,Tn)??0,_=Qp(a,x,g,y),S=Qp(a,x,[g[0]+Math.cos(a.yaw),g[1],g[2]+Math.sin(a.yaw)],y);if(_===null||S===null)return!1;let A=(_[0]+1)/2*r,w=(1-_[1])/2*s,R=Math.abs(S[0]-_[0])*(r/2),C=(n+.5)*R;return A>=C&&A<=r-C&&w>=C&&w<=s-C&&!p(this,Dl).some(({left:v,top:E,right:I,bottom:P})=>A>=v-R/2&&A<=I+R/2&&w>=E-R/2&&w<=P+R/2)},"#visible"),Cl=l(function(e,t){let n=p(this,Ht).clientWidth,r=p(this,Ht).clientHeight;if(n<=0||r<=0)return null;let s=tv(p(this,lt),p(this,Tn)??0,[e/n*2-1,1-t/r*2],n/r,(f,d)=>p(this,Ze).heightAt(f,d));if(s===null)return null;let[a,o]=p(this,Ze).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(N(this,Q,qr).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),gv=l(function(e,t){let n=N(this,Q,Cl).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=p(this,Hi);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&p(this,Xn).click(this.portal,n)},"#clicked"),xv=l(function(e,t,n,r,s){let a=p(this,Wi),o=N(this,Q,Cl).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),p(this,Xn).menu(this.portal,n,r,a,o,p(this,kl),s),!0)},"#menu"),_v=l(function(e){let t=e===null||p(this,io)||p(this,Xn).menuOpen()?null:N(this,Q,Cl).call(this,e.x,e.y),n=p(this,jr);if(t===null||e===null){p(this,qn).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,qn).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,N(this,Q,Zm).call(this,s)},$A),V(this,jr,s),document.addEventListener("keydown",p(this,qn),!0)},"#hovered"),Zm=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,Ht),n=t?N(this,Q,Cl).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){p(this,qn).call(this);return}let r=p(this,Xn).tooltip(p(this,Ht),n,p(this,ja),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&p(this,Xn).endTooltip(p(this,Ht)),e.open=r},"#showHover"),Xh=l(function(){return[...p(this,lt).focus]},"#focus"),vv=l(function(){let[e,t]=p(this,Ze).layout.tileAt(...p(this,lt).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:N(this,Q,qr).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),yv=l(function(e,t){let[n,r]=p(this,Ze).layout.centre(e,t),[s,a]=(p(this,wt)?.to??p(this,lt)).focus;if(n===s&&r===a)return;let o={...p(this,wt)?.to??p(this,lt),focus:[n,r]},{u:c,v:u}=N(this,Q,qr).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[f,d]=p(this,lt).focus,m=Math.hypot(h(n-f,c),h(r-d,u));if(!p(this,Bl)||m>p(this,lt).distance*1.5){V(this,Bl,!0),this.setOrbit(o);return}N(this,Q,Pl).call(this,o)},"#centreOn"),Rl=l(function(e){return Gx(Es(e),N(this,Q,qr).call(this),p(this,Ze).extentV())},"#settle"),qr=l(function(){let e=p(this,Ze).layout.period();return this.portal?.lockVerticalEdges()??p(this,Ol)?{u:e.u,v:null}:e},"#period"),Pl=l(function(e,t=N(this,Q,qm).call(this)+uv(e.yaw-(p(this,wt)?.to??p(this,lt)).yaw)){p(this,qn).call(this),typeof requestAnimationFrame!="function"||Ps()?(V(this,wt,null),V(this,lt,N(this,Q,Rl).call(this,e))):V(this,wt,{from:p(this,lt),to:e,started:null,turn:t,drawn:0}),N(this,Q,Qt).call(this)},"#moveTo"),bv=l(function(e){let t=p(this,wt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/XA);return t.drawn=n*n*(3-2*n),V(this,lt,N(this,Q,Rl).call(this,Vx(t.from,t.to,n,N(this,Q,qr).call(this),t.turn))),n>=1&&V(this,wt,null),n<1},"#moveCamera"),Mv=l(function(e){let[t,n]=p(this,lt).focus,r=Math.max(0,p(this,Ze).heightAt(t,n));return!e||p(this,Tn)===null||Ps()?(V(this,Tn,r),!1):(V(this,Tn,p(this,Tn)+(r-p(this,Tn))*YA),Math.abs(r-p(this,Tn))<.002?(V(this,Tn,r),!1):!0)},"#followHeight"),Jm=l(function(){let e=[...p(this,Qr).values()].map(({x:c,y:u})=>[c,u]),t=this.world.tiles(),n=t!==p(this,zs)||t.length!==p(this,no);V(this,zs,t),V(this,no,t.length),p(this,Qr).clear();let r=N(this,Q,wv).call(this,p(this,Ze).changed(e,...N(this,Q,Xh).call(this),n)),s=new Set(e.map(([c,u])=>`${c},${u}`)),a=new Map([...s].map(c=>[c,p(this,Ka).get(c)??0]));p(this,Ka).clear(),e.forEach(([c,u])=>N(this,Q,Yr).call(this,c,u)),r.forEach(([c,u])=>{let h=`${c},${u}`;!n&&!s.has(h)&&p(this,fr).has(h)&&N(this,Q,Yr).call(this,c,u)}),N(this,Q,Sv).call(this,e,r);let o=p(this,jr);o!==null&&o.open&&e.some(([c,u])=>c===o.x&&u===o.y)&&N(this,Q,Zm).call(this,o),(e.length>0||n)&&V(this,eo,!0),n&&(V(this,Xi,!0),p(this,fr).forEach((c,u)=>{let[h,f]=u.split(",").map(Number);N(this,Q,Yr).call(this,h,f)})),e.length>0&&N(this,Q,mv).call(this,a)},"#takeTiles"),Yr=l(function(e,t){let n=`${e},${t}`,r=this.world.get(e,t),s=r.units.filter(({id:d})=>N(this,Q,zh).call(this,d));s.forEach(d=>{let m=p(this,Os).get(d.id)??new Set;m.add(n),p(this,Os).set(d.id,m),p(this,Zr).set(d.id,d)});let a=Nm(s.length===0?r:{city:r.city,units:r.units.filter(({id:d})=>!N(this,Q,zh).call(this,d))},p(this,Wi)?.id??null,p(this,yi),p(this,Za),d=>p(this,dr).get(d.id)??0,p(this,es)),[o,c]=p(this,Ze).layout.centre(e,t),u=[o,Math.max(0,p(this,Ze).surfaceAt(o,c)),c],h=a===null?null:JSON.stringify([a,u]);h!==(p(this,fr).get(n)??null)&&(p(this,en).setMarker(n,u,a),N(this,Q,Av).call(this,n,h))},"#mark"),Sv=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>p(this,Vs).delete(`${n},${r}`)),t.forEach(([n,r])=>p(this,Vs).delete(`${n},${r}`)),V(this,Xi,!0))},"#yieldsChanged"),wv=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),Ev=l(function(){if(!p(this,ks)){p(this,Gs)&&(p(this,en).setYields(null),V(this,Gs,!1));return}if(!p(this,Xi)&&p(this,Gs))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=sv(t,av(t)),s=p(this,Vs).get(n);if(s===void 0||s.of!==r){let[a,o]=p(this,Ze).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:lv({at:[a,Math.max(0,p(this,Ze).surfaceAt(a,o)),o],yields:r},p(this,Hl))},p(this,Vs).set(n,s)}s.laid!==null&&e.push(s.laid)}),p(this,en).setYields(cv(e)),V(this,Xi,!1),V(this,Gs,!0)},"#showYields"),Av=l(function(e,t){t===null?p(this,fr).delete(e):p(this,fr).set(e,t)},"#remember"),Il=l(function(){let e=new Set(p(this,fr).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);N(this,Q,Yr).call(this,n,r)})},"#markAll"),Km=l(function(e){let t=performance.now(),n=N(this,Q,bv).call(this,t),[r,s]=N(this,Q,Xh).call(this);N(this,Q,Jm).call(this),N(this,Q,fv).call(this,t),`${r},${s}`!==p(this,Ul)&&(V(this,Ul,`${r},${s}`),p(this,Ze).refocus(r,s)),p(this,Ze).build(p(this,en),e);let a=N(this,Q,Mv).call(this,e!==null);N(this,Q,Ev).call(this),p(this,en).view(p(this,lt),p(this,Tn)??0,N(this,Q,qr).call(this)),p(this,en).render(),N(this,Q,Tv).call(this),N(this,Q,jm).call(this),V(this,Nl,performance.now()-t),N(this,Q,Pv).call(this),(p(this,Ze).pending()>0||p(this,Ze).overlaysPending()>0||p(this,Cn).size()>0||n||a)&&N(this,Q,Qt).call(this)},"#frameDrawn"),Tv=l(function(){let e=p(this,Qa);if(e===null)return;p(this,eo)&&(V(this,eo,!1),e.redraw());let t=p(this,Wi)?.tile??null;e.show(N(this,Q,Cv).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),Cv=l(function(){let e=p(this,Ht).clientWidth,t=p(this,Ht).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=p(this,Tn)??0,s=yh(p(this,lt).distance).far,[a,o]=p(this,lt).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let m=Ia(p(this,lt),r,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-a,m[1]-o),y=g>s?s/g:1;return[a+(m[0]-a)*y,o+(m[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),jm=l(function(e=!1){let t=(e?p(this,wt)?.to??p(this,lt):p(this,lt)).distance,n=l(()=>{p(this,$r)!==null&&clearTimeout(p(this,$r)),V(this,$r,null),V(this,$a,null)},"stop"),r=l(()=>{n(),V(this,Fs,t),p(this,Fl).set(t)},"keep");if(e){n(),t!==p(this,Fs)&&r();return}if(p(this,wt)!==null||t===p(this,Fs)){n();return}p(this,$r)!==null&&t===p(this,$a)||(n(),V(this,$a,t),V(this,$r,setTimeout(r,qA)))},"#keepDistance"),Qt=l(function(){if(!p(this,Hs)){if(typeof requestAnimationFrame!="function"){N(this,Q,Km).call(this,null);return}p(this,pr)===null&&V(this,pr,requestAnimationFrame(()=>{V(this,pr,null),N(this,Q,Km).call(this,HA)}))}},"#draw"),Rv=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),Pv=l(function(){if(p(this,Us)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,en).stats();p(this,Us).textContent=[`frame ${p(this,Nl).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,Ze).pending()}`].join(`
`)},"#showStats"),Qm=l(function(){let e=p(this,Ht).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===p(this,ql)||(V(this,ql,s),p(this,en).resize(t,n,r),this.measureCovered(),p(this,en).render())},"#resize"),l(e0,"MapView3D");var Xm=e0,Iv=Xm;var ZA={createMapView3D:l(i=>new Iv(i),"createMapView3D")};globalThis[f0]=ZA;})();
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
