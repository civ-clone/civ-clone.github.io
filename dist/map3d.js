"use strict";(()=>{var Rg=Object.create;var gh=Object.defineProperty;var Pg=Object.getOwnPropertyDescriptor;var Ig=Object.getOwnPropertyNames;var Lg=Object.getPrototypeOf,Dg=Object.prototype.hasOwnProperty;var np=i=>{throw TypeError(i)};var l=(i,e)=>gh(i,"name",{value:e,configurable:!0});var Ng=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Ug=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ig(e))!Dg.call(i,s)&&s!==t&&gh(i,s,{get:()=>e[s],enumerable:!(n=Pg(e,s))||n.enumerable});return i};var Fg=(i,e,t)=>(t=i!=null?Rg(Lg(i)):{},Ug(e||!i||!i.__esModule?gh(t,"default",{value:i,enumerable:!0}):t,i));var _h=(i,e,t)=>e.has(i)||np("Cannot "+t);var v=(i,e,t)=>(_h(i,e,"read from private field"),t?t.call(i):e.get(i)),se=(i,e,t)=>e.has(i)?np("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Y=(i,e,t,n)=>(_h(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),K=(i,e,t)=>(_h(i,e,"access private method"),t);var sp=Ng(gs=>{"use strict";var Zn,Fi=gs&&gs.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(gs,"__esModule",{value:!0}),gs.EventEmitter=void 0;var xh=class xh{constructor(){Zn.set(this,{})}on(e,t){e in Fi(this,Zn,"f")||(Fi(this,Zn,"f")[e]=[]),Fi(this,Zn,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Fi(this,Zn,"f")))return;let n=Fi(this,Zn,"f")[e].indexOf(t);n!==-1&&Fi(this,Zn,"f")[e].splice(n,1)}emit(e,...t){e in Fi(this,Zn,"f")&&Fi(this,Zn,"f")[e].forEach((n=>n(...t)))}};l(xh,"i");var Po=xh;gs.EventEmitter=Po,Zn=new WeakMap,gs.default=Po});var ip="civMap3D";var rp=Fg(sp());var Oi,Jn,Zs,yh=class yh extends rp.EventEmitter{constructor(t,n){super();se(this,Oi);se(this,Jn);se(this,Zs);Y(this,Jn,t),Y(this,Zs,t.lockVerticalEdges),Y(this,Oi,n)}center(){return v(this,Oi).centre()}isVisible(t,n,s=0){return v(this,Oi).visible(t,n,s)}lockVerticalEdges(){return v(this,Zs)}nativeTileSize(){return v(this,Jn).art.nativeTileSize()}openCity(t){let{cityOpener:n}=v(this,Jn);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return v(this,Jn).playerId}render(){v(this,Oi).changed()}scale(){return v(this,Jn).art.scale()}setCenter(t,n){v(this,Oi).centreOn(t,n)}setLockVerticalEdges(t){Y(this,Zs,t)}setZoom(){}transport(){return v(this,Jn).transport}zoom(){return v(this,Jn).art.zoom()}};Oi=new WeakMap,Jn=new WeakMap,Zs=new WeakMap,l(yh,"MapPortal3D");var vh=yh,ap=vh;var Dp=0,Kh=1,Np=2;var La=1,Jl=2,Er=3,es=0,tn=1,ei=2,ws=0,Tr=1,Qh=2,jh=3,eu=4,Up=5;var Es=100,Fp=101,Op=102,Bp=103,zp=104,kp=200,Gp=201,Vp=202,Hp=203,tu=204,nu=205,Wp=206,Xp=207,qp=208,Yp=209,Zp=210,Jp=211,$p=212,Kp=213,Qp=214,nl=0,il=1,sl=2,mr=3,rl=4,al=5,ol=6,ll=7,iu=0,jp=1,em=2,ti=0,su=1,ru=2,au=3,Da=4,ou=5,lu=6,cu=7;var hu=300,Ts=301,Ar=302,$l=303,Kl=304,Ms=1e3,Tn=1001,cl=1002,Ut=1003,tm=1004;var Na=1005;var Ft=1006,Ql=1007;var Si=1008;var rn=1009,uu=1010,du=1011,Cr=1012,jl=1013,Gn=1014,Vn=1015,mn=1016,ec=1017,tc=1018,As=1020,fu=35902,pu=35899,mu=1021,gu=1022,Hn=1023,yi=1026,wi=1027,_u=1028,nc=1029,ni=1030,ic=1031;var sc=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,rc=35840,ac=35841,oc=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37488,fc=37489,za=37490,pc=37491,mc=37808,gc=37809,_c=37810,xc=37811,vc=37812,yc=37813,Mc=37814,bc=37815,Sc=37816,wc=37817,Ec=37818,Tc=37819,Ac=37820,Cc=37821,Rc=36492,Pc=36494,Ic=36495,Lc=36283,Dc=36284,ka=36285,Nc=36286;var ca=2300,hl=2301,el=2302,Wh=2303,Xh=2400,qh=2401,Yh=2402;var nm=3200;var Uc=0,im=1,Ei="",Nt="srgb",ha="srgb-linear",ua="linear",st="srgb";var tl=7680;var sm=519,rm=512,am=513,om=514,xu=515,lm=516,cm=517,vu=518,yu=519,Mu=35044;var bu="300 es",An=2e3,gr=2001;function Og(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(Og,"arrayNeedsUint32");function Bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(Bg,"isTypedArray");function da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(da,"createElementNS");function hm(){let i=da("canvas");return i.style.display="block",i}l(hm,"createCanvasElement");var op={},_r=null;function fa(...i){let e="THREE."+i.shift();_r?_r("log",e,...i):console.log(e,...i)}l(fa,"log");function um(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(um,"enhanceLogMessage");function Oe(...i){i=um(i);let e="THREE."+i.shift();if(_r)_r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Oe,"warn");function ze(...i){i=um(i);let e="THREE."+i.shift();if(_r)_r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(ze,"error");function oa(...i){let e=i.join(" ");e in op||(op[e]=!0,Oe(...i))}l(oa,"warnOnce");function dm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(dm,"probeAsync");var fm={[nl]:nl,[sl]:ol,[rl]:rl,[mr]:al,[il]:il,[ol]:sl,[ll]:ll,[al]:mr},Au=class Au{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(Au,"EventDispatcher");var Kn=Au,qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mh=Math.PI/180,ul=180/Math.PI;function Cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}l(Cs,"generateUUID");function je(i,e,t){return Math.max(e,Math.min(t,i))}l(je,"clamp");function zg(i,e){return(i%e+e)%e}l(zg,"euclideanModulo");function bh(i,e,t){return(1-t)*i+t*e}l(bh,"lerp");function pm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(pm,"floorPowerOfTwo");function Fc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Fc,"getNormalizationScale");function mm(i,e){if(e.constructor===Float32Array)return i;let t=Fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(mm,"denormalize");function gm(i,e){if(e.constructor===Float32Array)return i;let t=Fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(gm,"normalize");var Dl=class Dl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Dl,"Vector2"),Dl.prototype.isVector2=!0;var Be=Dl,Cu=class Cu{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3];if(p!==S||c!==d||h!==m||u!==x){let _=c*d+h*m+u*x+p*S;_<0&&(d=-d,m=-m,x=-x,S=-S,_=-_);let g=1-o;if(_<.9995){let E=Math.acos(_),C=Math.sin(E);g=Math.sin(g*E)/C,o=Math.sin(o*E)/C,c=c*g+d*o,h=h*g+m*o,u=u*g+x*o,p=p*g+S*o}else{c=c*g+d*o,h=h*g+m*o,u=u*g+x*o,p=p*g+S*o;let E=1/Math.sqrt(c*c+h*h+u*u+p*p);c*=E,h*=E,u*=E,p*=E}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a],d=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+u*p+c*m-h*d,e[t+1]=c*x+u*d+h*p-o*m,e[t+2]=h*x+u*m+o*d-c*p,e[t+3]=u*x-o*p-c*d-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),p=o(r/2),d=c(n/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*u*p+h*m*x,this._y=h*m*p-d*u*x,this._z=h*u*x+d*m*p,this._w=h*u*p-d*m*x;break;case"YXZ":this._x=d*u*p+h*m*x,this._y=h*m*p-d*u*x,this._z=h*u*x-d*m*p,this._w=h*u*p+d*m*x;break;case"ZXY":this._x=d*u*p-h*m*x,this._y=h*m*p+d*u*x,this._z=h*u*x+d*m*p,this._w=h*u*p-d*m*x;break;case"ZYX":this._x=d*u*p-h*m*x,this._y=h*m*p+d*u*x,this._z=h*u*x-d*m*p,this._w=h*u*p+d*m*x;break;case"YZX":this._x=d*u*p+h*m*x,this._y=h*m*p+d*u*x,this._z=h*u*x-d*m*p,this._w=h*u*p-d*m*x;break;case"XZY":this._x=d*u*p-h*m*x,this._y=h*m*p-d*u*x,this._z=h*u*x+d*m*p,this._w=h*u*p+d*m*x;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,t=Math.sin(t*h)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Cu,"Quaternion");var un=Cu,Nl=class Nl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*h+a*p-o*u,this.y=n+c*u+o*h-r*p,this.z=s+c*p+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Nl,"Vector3"),Nl.prototype.isVector3=!0;var z=Nl,Sh=new z,lp=new un,Ul=class Ul{constructor(e,t,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],p=n[7],d=n[2],m=n[5],x=n[8],S=s[0],_=s[3],g=s[6],E=s[1],C=s[4],T=s[7],R=s[2],w=s[5],f=s[8];return r[0]=a*S+o*E+c*R,r[3]=a*_+o*C+c*w,r[6]=a*g+o*T+c*f,r[1]=h*S+u*E+p*R,r[4]=h*_+u*C+p*w,r[7]=h*g+u*T+p*f,r[2]=d*S+m*E+x*R,r[5]=d*_+m*C+x*w,r[8]=d*g+m*T+x*f,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],p=u*a-o*h,d=o*c-u*r,m=h*r-a*c,x=t*p+n*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=p*S,e[1]=(s*h-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=d*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*c-h*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,t)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Ul,"Matrix3"),Ul.prototype.isMatrix3=!0;var Ve=Ul,wh=new Ve,cp=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hp=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){let i={enabled:!0,workingColorSpace:ha,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===Ei?ua:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ha]:{primaries:e,whitePoint:n,transfer:ua,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}l(kg,"createColorManagement");var Qe=kg();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(vi,"SRGBToLinear");function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(pr,"LinearToSRGB");var Js,Ru=class Ru{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=da("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=da("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Ru,"ImageUtils");var dl=Ru,Gg=0,Pu=class Pu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eh(s[a].image)):r.push(Eh(s[a]))}else r=Eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(Pu,"TextureSource");var xr=Pu;function Eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}l(Eh,"serializeImage");var Vg=0,Th=new z,dr=class dr extends Kn{constructor(e=dr.DEFAULT_IMAGE,t=dr.DEFAULT_MAPPING,n=Tn,s=Tn,r=Ft,a=Si,o=Hn,c=rn,h=dr.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Cs(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(dr,"Texture");var en=dr;en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=hu;en.DEFAULT_ANISOTROPY=1;var Fl=class Fl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],u=c[4],p=c[8],d=c[1],m=c[5],x=c[9],S=c[2],_=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-S)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+S)<.1&&Math.abs(x+_)<.1&&Math.abs(h+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(h+1)/2,T=(m+1)/2,R=(g+1)/2,w=(u+d)/4,f=(p+S)/4,M=(x+_)/4;return C>T&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=f/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=M/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=f/r,s=M/r),this.set(n,s,r,t),this}let E=Math.sqrt((_-x)*(_-x)+(p-S)*(p-S)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(_-x)/E,this.y=(p-S)/E,this.z=(d-u)/E,this.w=Math.acos((h+m+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Fl,"Vector4"),Fl.prototype.isVector4=!0;var mt=Fl,Iu=class Iu extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new en({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Iu,"RenderTarget");var fl=Iu,Lu=class Lu extends fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Lu,"WebGLRenderTarget");var dn=Lu,Du=class Du extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Du,"DataArrayTexture");var pa=Du;var Nu=class Nu extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Nu,"Data3DTexture");var pl=Nu;var la=class la{constructor(e,t,n,s,r,a,o,c,h,u,p,d,m,x,S,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,p,d,m,x,S,_)}set(e,t,n,s,r,a,o,c,h,u,p,d,m,x,S,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=h,g[6]=u,g[10]=p,g[14]=d,g[3]=m,g[7]=x,g[11]=S,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*p,x=o*u,S=o*p;t[0]=c*u,t[4]=-c*p,t[8]=h,t[1]=m+x*h,t[5]=d-S*h,t[9]=-o*c,t[2]=S-d*h,t[6]=x+m*h,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,m=c*p,x=h*u,S=h*p;t[0]=d+S*o,t[4]=x*o-m,t[8]=a*h,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,m=c*p,x=h*u,S=h*p;t[0]=d-S*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,m=a*p,x=o*u,S=o*p;t[0]=c*u,t[4]=x*h-m,t[8]=d*h+S,t[1]=c*p,t[5]=S*h+d,t[9]=m*h-x,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*h,x=o*c,S=o*h;t[0]=c*u,t[4]=S-d*p,t[8]=x*p+m,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=m*p+x,t[10]=d-S*p}else if(e.order==="XZY"){let d=a*c,m=a*h,x=o*c,S=o*h;t[0]=c*u,t[4]=-p,t[8]=h*u,t[1]=d*p+S,t[5]=a*u,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*u,t[10]=S*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Wg)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Bi.crossVectors(n,cn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Bi.crossVectors(n,cn)),Bi.normalize(),Io.crossVectors(cn,Bi),s[0]=Bi.x,s[4]=Io.x,s[8]=cn.x,s[1]=Bi.y,s[5]=Io.y,s[9]=cn.y,s[2]=Bi.z,s[6]=Io.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],p=n[5],d=n[9],m=n[13],x=n[2],S=n[6],_=n[10],g=n[14],E=n[3],C=n[7],T=n[11],R=n[15],w=s[0],f=s[4],M=s[8],N=s[12],P=s[1],D=s[5],F=s[9],B=s[13],I=s[2],k=s[6],Z=s[10],H=s[14],re=s[3],q=s[7],te=s[11],ie=s[15];return r[0]=a*w+o*P+c*I+h*re,r[4]=a*f+o*D+c*k+h*q,r[8]=a*M+o*F+c*Z+h*te,r[12]=a*N+o*B+c*H+h*ie,r[1]=u*w+p*P+d*I+m*re,r[5]=u*f+p*D+d*k+m*q,r[9]=u*M+p*F+d*Z+m*te,r[13]=u*N+p*B+d*H+m*ie,r[2]=x*w+S*P+_*I+g*re,r[6]=x*f+S*D+_*k+g*q,r[10]=x*M+S*F+_*Z+g*te,r[14]=x*N+S*B+_*H+g*ie,r[3]=E*w+C*P+T*I+R*re,r[7]=E*f+C*D+T*k+R*q,r[11]=E*M+C*F+T*Z+R*te,r[15]=E*N+C*B+T*H+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],p=e[6],d=e[10],m=e[14],x=e[3],S=e[7],_=e[11],g=e[15],E=c*m-h*d,C=o*m-h*p,T=o*d-c*p,R=a*m-h*u,w=a*d-c*u,f=a*p-o*u;return t*(S*E-_*C+g*T)-n*(x*E-_*R+g*w)+s*(x*C-S*R+g*f)-r*(x*T-S*w+_*f)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],h=e[6],u=e[10];return t*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],p=e[9],d=e[10],m=e[11],x=e[12],S=e[13],_=e[14],g=e[15],E=t*o-n*a,C=t*c-s*a,T=t*h-r*a,R=n*c-s*o,w=n*h-r*o,f=s*h-r*c,M=u*S-p*x,N=u*_-d*x,P=u*g-m*x,D=p*_-d*S,F=p*g-m*S,B=d*g-m*_,I=E*B-C*F+T*D+R*P-w*N+f*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(o*B-c*F+h*D)*k,e[1]=(s*F-n*B-r*D)*k,e[2]=(S*f-_*w+g*R)*k,e[3]=(d*w-p*f-m*R)*k,e[4]=(c*P-a*B-h*N)*k,e[5]=(t*B-s*P+r*N)*k,e[6]=(_*T-x*f-g*C)*k,e[7]=(u*f-d*T+m*C)*k,e[8]=(a*F-o*P+h*M)*k,e[9]=(n*P-t*F-r*M)*k,e[10]=(x*w-S*T+g*E)*k,e[11]=(p*T-u*w-m*E)*k,e[12]=(o*N-a*D-c*M)*k,e[13]=(t*D-n*N+s*M)*k,e[14]=(S*C-x*R-_*E)*k,e[15]=(u*R-p*C+d*E)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,p=o+o,d=r*h,m=r*u,x=r*p,S=a*u,_=a*p,g=o*p,E=c*h,C=c*u,T=c*p,R=n.x,w=n.y,f=n.z;return s[0]=(1-(S+g))*R,s[1]=(m+T)*R,s[2]=(x-C)*R,s[3]=0,s[4]=(m-T)*w,s[5]=(1-(d+g))*w,s[6]=(_+E)*w,s[7]=0,s[8]=(x+C)*f,s[9]=(_-E)*f,s[10]=(1-(d+S))*f,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),c=$s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let h=1/a,u=1/o,p=1/c;return Fn.elements[0]*=h,Fn.elements[1]*=h,Fn.elements[2]*=h,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=p,Fn.elements[9]*=p,Fn.elements[10]*=p,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=An,c=!1){let h=this.elements,u=2*r/(t-e),p=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s),x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===An)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===gr)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,c=!1){let h=this.elements,u=2/(t-e),p=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s),x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===An)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===gr)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=p,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(la,"Matrix4"),la.prototype.isMatrix4=!0;var lt=la,$s=new z,Fn=new lt,Hg=new z(0,0,0),Wg=new z(1,1,1),Bi=new z,Io=new z,cn=new z,up=new lt,dp=new un,Ol=class Ol{constructor(e=0,t=0,n=0,s=Ol.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],p=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Ol,"Euler");var kn=Ol;kn.DEFAULT_ORDER="XYZ";var Uu=class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Uu,"Layers");var ma=Uu,Xg=0,fp=new z,Ks=new un,di=new lt,Lo=new z,ea=new z,qg=new z,Yg=new un,pp=new z(1,0,0),mp=new z(0,1,0),gp=new z(0,0,1),_p={type:"added"},Zg={type:"removed"},Qs={type:"childadded",child:null},Ah={type:"childremoved",child:null},fr=class fr extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fr.DEFAULT_UP.clone();let e=new z,t=new kn,n=new un,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ve}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=fr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ea,Lo,this.up):di.lookAt(Lo,ea,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(di),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let p=c[h];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(fr,"Object3D");var Gt=fr;Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fu=class Fu extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Fu,"Group");var sn=Fu,Jg={type:"move"},Ou=class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let S of e.hand.values()){let _=t.getJointPose(S,n),g=this._getHandJoint(h,S);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let u=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,x=.005;h.inputState.pinching&&d>m+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=m-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Ou,"WebXRController");var vr=Ou,_m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Ch,"hue2rgb");var Bu=class Bu{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=zg(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ch(a,r,e+1/3),this.g=Ch(a,r,e),this.b=Ch(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=_m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.workingToColorSpace(Yt.copy(this),e),Math.round(je(Yt.r*255,0,255))*65536+Math.round(je(Yt.g*255,0,255))*256+Math.round(je(Yt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let p=a-o;switch(h=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nt){Qe.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Do);let n=bh(zi.h,Do.h,t),s=bh(zi.s,Do.s,t),r=bh(zi.l,Do.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Bu,"Color");var Ne=Bu,Yt=new Ne;Ne.NAMES=_m;var Bl=class Bl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Bl,"Fog");var ga=Bl,zu=class zu extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(zu,"Scene");var _a=zu,On=new z,fi=new z,Rh=new z,pi=new z,js=new z,er=new z,xp=new z,Ph=new z,Ih=new z,Lh=new z,Dh=new mt,Nh=new mt,Uh=new mt,Hi=class Hi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),fi.subVectors(n,t),Rh.subVectors(e,t);let a=On.dot(On),o=On.dot(fi),c=On.dot(Rh),h=fi.dot(fi),u=fi.dot(Rh),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,m=(h*c-o*u)*d,x=(a*u-o*c)*d;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Dh.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Dh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,n),Uh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dh,r.x),a.addScaledVector(Nh,r.y),a.addScaledVector(Uh,r.z),a}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),fi.subVectors(e,t),On.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),On.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Hi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;js.subVectors(s,n),er.subVectors(r,n),Ph.subVectors(e,n);let c=js.dot(Ph),h=er.dot(Ph);if(c<=0&&h<=0)return t.copy(n);Ih.subVectors(e,s);let u=js.dot(Ih),p=er.dot(Ih);if(u>=0&&p<=u)return t.copy(s);let d=c*p-u*h;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(js,a);Lh.subVectors(e,r);let m=js.dot(Lh),x=er.dot(Lh);if(x>=0&&m<=x)return t.copy(r);let S=m*h-c*x;if(S<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(n).addScaledVector(er,o);let _=u*x-m*p;if(_<=0&&p-u>=0&&m-x>=0)return xp.subVectors(r,s),o=(p-u)/(p-u+(m-x)),t.copy(s).addScaledVector(xp,o);let g=1/(_+S+d);return a=S*g,o=d*g,t.copy(n).addScaledVector(js,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(Hi,"Triangle");var _i=Hi,ku=class ku{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Uo.subVectors(this.max,ta),tr.subVectors(e.a,ta),nr.subVectors(e.b,ta),ir.subVectors(e.c,ta),ki.subVectors(nr,tr),Gi.subVectors(ir,nr),_s.subVectors(tr,ir);let t=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-_s.z,_s.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,_s.z,0,-_s.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-_s.y,_s.x,0];return!Fh(t,tr,nr,ir,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,tr,nr,ir,Uo))?!1:(Fo.crossVectors(ki,Gi),t=[Fo.x,Fo.y,Fo.z],Fh(t,tr,nr,ir,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(ku,"Box3");var Xi=ku,mi=[new z,new z,new z,new z,new z,new z,new z,new z],Bn=new z,No=new Xi,tr=new z,nr=new z,ir=new z,ki=new z,Gi=new z,_s=new z,ta=new z,Uo=new z,Fo=new z,xs=new z;function Fh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xs.fromArray(i,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),c=e.dot(xs),h=t.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}l(Fh,"satForAxes");var xi=$g();function $g(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let h=c-127;h<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,s[c]=-h-1,s[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,s[c]=13,s[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[c]=h|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l($g,"_generateTables");function Kg(i){Math.abs(i)>65504&&Oe("DataUtils.toHalfFloat(): Value out of range."),i=je(i,-65504,65504),xi.floatView[0]=i;let e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}l(Kg,"toHalfFloat");function Qg(i){let e=i>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(i&1023)]+xi.exponentTable[e],xi.floatView[0]}l(Qg,"fromHalfFloat");var Gu=class Gu{static toHalfFloat(e){return Kg(e)}static fromHalfFloat(e){return Qg(e)}};l(Gu,"DataUtils");var Qn=Gu,St=new z,Oo=new Be,jg=0,Vu=class Vu extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?Fc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gm(e,this.array)}};l(Vu,"BufferAttribute");var wt=Vu;var Hu=class Hu extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Hu,"Uint16BufferAttribute");var xa=Hu;var Wu=class Wu extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Wu,"Uint32BufferAttribute");var va=Wu;var Xu=class Xu extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Xu,"Float32BufferAttribute");var yt=Xu,e_=new Xi,na=new z,Oh=new z,qu=class qu{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):e_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Oh)),this.expandByPoint(na.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(qu,"Sphere");var yr=qu,t_=0,En=new lt,Bh=new Gt,sr=new z,hn=new Xi,ia=new Xi,Dt=new z,zl=class zl extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?va:xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(hn.min,ia.min),hn.expandByPoint(Dt),Dt.addVectors(hn.max,ia.max),hn.expandByPoint(Dt)):(hn.expandByPoint(ia.min),hn.expandByPoint(ia.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Dt.fromBufferAttribute(o,h),c&&(sr.fromBufferAttribute(e,h),Dt.add(sr)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],h=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new z,c[N]=new z;let u=new z,p=new z,d=new z,m=new Be,x=new Be,S=new Be,_=new z,g=new z;function E(N,P,D){h[N]=h[P]=h[D]=1,u.fromBufferAttribute(n,N),p.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),m.fromBufferAttribute(r,N),x.fromBufferAttribute(r,P),S.fromBufferAttribute(r,D),p.sub(u),d.sub(u),x.sub(m),S.sub(m);let F=1/(x.x*S.y-S.x*x.y);isFinite(F)&&(_.copy(p).multiplyScalar(S.y).addScaledVector(d,-x.y).multiplyScalar(F),g.copy(d).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(F),o[N].add(_),o[P].add(_),o[D].add(_),c[N].add(g),c[P].add(g),c[D].add(g))}l(E,"handleTriangle");let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let N=0,P=C.length;N<P;++N){let D=C[N],F=D.start,B=D.count;for(let I=F,k=F+B;I<k;I+=3)E(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let T=new z,R=new z,w=new z,f=new z;function M(N){w.fromBufferAttribute(s,N),f.copy(w);let P=o[N];T.copy(P),T.sub(w.multiplyScalar(w.dot(P))).normalize(),R.crossVectors(f,P);let F=R.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,F)}l(M,"handleVertex");for(let N=0,P=n.count;N<P;++N)h[N]&&M(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,h=new z,u=new z,p=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){let x=e.getX(d+0),S=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){let h=o.array,u=o.itemSize,p=o.normalized,d=new h.constructor(c.length*u),m=0,x=0;for(let S=0,_=c.length;S<_;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*u;for(let g=0;g<u;g++)d[x++]=h[m++]}return new wt(d,u,p)}if(l(e,"convertBufferAttribute"),this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new zl,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,p=h.length;u<p;u++){let d=h[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let p=0,d=h.length;p<d;p++){let m=h[p];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],p=r[h];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(zl,"BufferGeometry");var Ot=zl,Yu=class Yu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Cs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=vp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=vp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Yu,"InterleavedBuffer");var ya=Yu;function vp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Cs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(vp,"getArrayKey");var Qt=new z,kl=class kl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Fc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mm(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gm(e,this.data.array)}};l(kl,"InterleavedBufferAttribute");var Mr=kl,zh=new z,n_=new z,i_=new Ve,Zu=class Zu{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zh.subVectors(n,t).cross(n_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||i_.getNormalMatrix(e),s=this.coplanarPoint(zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Zu,"Plane");var zn=Zu,s_=0,Ju=class Ju extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Tr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Ju,"Material");var Mi=Ju,$u=class $u extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l($u,"SpriteMaterial");var qi=$u,rr,sa=new z,ar=new z,or=new z,lr=new Be,ra=new Be,xm=new lt,Bo=new z,aa=new z,zo=new z,yp=new Be,kh=new Be,Mp=new Be,Ku=class Ku extends Gt{constructor(e=new qi){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ya(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new Mr(n,3,0,!1)),rr.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=rr,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ko(Bo.set(-.5,-.5,0),or,a,ar,s,r),ko(aa.set(.5,-.5,0),or,a,ar,s,r),ko(zo.set(.5,.5,0),or,a,ar,s,r),yp.set(0,0),kh.set(1,0),Mp.set(1,1);let o=e.ray.intersectTriangle(Bo,aa,zo,!1,sa);if(o===null&&(ko(aa.set(-.5,.5,0),or,a,ar,s,r),kh.set(0,1),o=e.ray.intersectTriangle(Bo,zo,aa,!1,sa),o===null))return;let c=e.ray.origin.distanceTo(sa);c<e.near||c>e.far||t.push({distance:c,point:sa.clone(),uv:_i.getInterpolation(sa,Bo,aa,zo,yp,kh,Mp,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Ku,"Sprite");var Ma=Ku;function ko(i,e,t,n,s,r){lr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ra.x=r*lr.x-s*lr.y,ra.y=s*lr.x+r*lr.y):ra.copy(lr),i.copy(e),i.x+=ra.x,i.y+=ra.y,i.applyMatrix4(xm)}l(ko,"transformVertex");var gi=new z,Gh=new z,Go=new z,Vo=new z,Qu=class Qu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gh.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Vo.copy(this.origin).sub(Gh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=Vo.dot(this.direction),c=-Vo.dot(Go),h=Vo.lengthSq(),u=Math.abs(1-a*a),p,d,m,x;if(u>0)if(p=a*c-o,d=a*o-c,x=r*u,p>=0)if(d>=-x)if(d<=x){let S=1/u;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+h}else d=r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+h;else d=-r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+h;else d<=-x?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+d*(d+2*c)+h):d<=x?(p=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+h):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+d*(d+2*c)+h);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Gh).addScaledVector(Go,d),m}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,x=t.x-a.x,S=t.y-a.y,_=t.z-a.z,g=n.x-a.x,E=n.y-a.y,C=n.z-a.z,T=Math.abs(c),R=Math.abs(h),w=Math.abs(u),f,M,N,P,D,F,B,I,k,Z,H,re;if(T>=R&&T>=w?(N=c,F=p,k=x,re=g,c>=0?(f=h,M=u,P=d,D=m,B=S,I=_,Z=E,H=C):(f=u,M=h,P=m,D=d,B=_,I=S,Z=C,H=E)):R>=w?(N=h,F=d,k=S,re=E,h>=0?(f=u,M=c,P=m,D=p,B=_,I=x,Z=C,H=g):(f=c,M=u,P=p,D=m,B=x,I=_,Z=g,H=C)):(N=u,F=m,k=_,re=C,u>=0?(f=c,M=h,P=p,D=d,B=x,I=S,Z=g,H=E):(f=h,M=c,P=d,D=p,B=S,I=x,Z=E,H=g)),N===0)return null;let q=f/N,te=M/N,ie=1/N,Ee=P-q*F,ke=D-te*F,Q=B-q*k,ve=I-te*k,Te=Z-q*re,Le=H-te*re,ye=Te*ve-Le*Q,Ge=Ee*Le-ke*Te,dt=Q*ke-ve*Ee;if(s){if(ye<0||Ge<0||dt<0)return null}else if((ye<0||Ge<0||dt<0)&&(ye>0||Ge>0||dt>0))return null;let Ue=ye+Ge+dt;if(Ue===0)return null;let Je=ie*(ye*F+Ge*k+dt*re);return(Ue>0?Je<0:Je>0)?null:this.at(Je/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Qu,"Ray");var ml=Qu,ju=class ju extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(ju,"MeshBasicMaterial");var gl=ju,bp=new lt,vs=new ml,Ho=new yr,Sp=new z,Wo=new z,Xo=new z,qo=new z,Vh=new z,Yo=new z,wp=new z,Zo=new z,ed=class ed extends Gt{constructor(e=new Ot,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Yo.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],p=r[c];u!==0&&(Vh.fromBufferAttribute(p,e),a?Yo.addScaledVector(Vh,u):Yo.addScaledVector(Vh.sub(t),u))}t.add(Yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Ho.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ho,Sp)===null||vs.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(bp.copy(r).invert(),vs.copy(e.ray).applyMatrix4(bp),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let _=d[x],g=a[_.materialIndex],E=Math.max(_.start,m.start),C=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let T=E,R=C;T<R;T+=3){let w=o.getX(T),f=o.getX(T+1),M=o.getX(T+2);s=Jo(this,g,e,n,h,u,p,w,f,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let _=x,g=S;_<g;_+=3){let E=o.getX(_),C=o.getX(_+1),T=o.getX(_+2);s=Jo(this,a,e,n,h,u,p,E,C,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let _=d[x],g=a[_.materialIndex],E=Math.max(_.start,m.start),C=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let T=E,R=C;T<R;T+=3){let w=T,f=T+1,M=T+2;s=Jo(this,g,e,n,h,u,p,w,f,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let _=x,g=S;_<g;_+=3){let E=_,C=_+1,T=_+2;s=Jo(this,a,e,n,h,u,p,E,C,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};l(ed,"Mesh");var gt=ed;function r_(i,e,t,n,s,r,a,o){let c;if(e.side===tn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===es,o),c===null)return null;Zo.copy(o),Zo.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Zo);return h<t.near||h>t.far?null:{distance:h,point:Zo.clone(),object:i}}l(r_,"checkIntersection$1");function Jo(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,Wo),i.getVertexPosition(c,Xo),i.getVertexPosition(h,qo);let u=r_(i,e,t,n,Wo,Xo,qo,wp);if(u){let p=new z;_i.getBarycoord(wp,Wo,Xo,qo,p),s&&(u.uv=_i.getInterpolatedAttribute(s,o,c,h,p,new Be)),r&&(u.uv1=_i.getInterpolatedAttribute(r,o,c,h,p,new Be)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,c,h,p,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:h,normal:new z,materialIndex:0};_i.getNormal(Wo,Xo,qo,d.normal),u.face=d,u.barycoord=p}return u}l(Jo,"checkGeometryIntersection");var td=class td extends en{constructor(e=null,t=1,n=1,s,r,a,o,c,h=Ut,u=Ut,p,d){super(null,a,o,c,h,u,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(td,"DataTexture");var br=td;var ys=new yr,a_=new Be(.5,.5),$o=new z,nd=class nd{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],p=r[5],d=r[6],m=r[7],x=r[8],S=r[9],_=r[10],g=r[11],E=r[12],C=r[13],T=r[14],R=r[15];if(s[0].setComponents(h-a,m-u,g-x,R-E).normalize(),s[1].setComponents(h+a,m+u,g+x,R+E).normalize(),s[2].setComponents(h+o,m+p,g+S,R+C).normalize(),s[3].setComponents(h-o,m-p,g-S,R-C).normalize(),n)s[4].setComponents(c,d,_,T).normalize(),s[5].setComponents(h-c,m-d,g-_,R-T).normalize();else if(s[4].setComponents(h-c,m-d,g-_,R-T).normalize(),t===An)s[5].setComponents(h+c,m+d,g+_,R+T).normalize();else if(t===gr)s[5].setComponents(c,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);let t=a_.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($o.x=s.normal.x>0?e.max.x:e.min.x,$o.y=s.normal.y>0?e.max.y:e.min.y,$o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(nd,"Frustum");var Yi=nd,Ep=new lt,Gl=class Gl{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ep.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Yi),n[s].setFromProjectionMatrix(Ep,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Yi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Gl().copy(this)}};l(Gl,"FrustumArray");var _l=Gl;var id=class id extends en{constructor(e=[],t=Ts,n,s,r,a,o,c,h,u){super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(id,"CubeTexture");var ba=id,sd=class sd extends en{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(sd,"CanvasTexture");var Sr=sd;var rd=class rd extends en{constructor(e,t,n=Gn,s,r,a,o=Ut,c=Ut,h,u=yi,p=1){if(u!==yi&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(rd,"DepthTexture");var bi=rd,ad=class ad extends bi{constructor(e,t=Gn,n=Ts,s,r,a=Ut,o=Ut,c,h=yi){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(ad,"CubeDepthTexture");var Sa=ad,od=class od extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(od,"ExternalTexture");var wa=od,Vl=class Vl extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],p=[],d=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function x(S,_,g,E,C,T,R,w,f,M,N){let P=T/f,D=R/M,F=T/2,B=R/2,I=w/2,k=f+1,Z=M+1,H=0,re=0,q=new z;for(let te=0;te<Z;te++){let ie=te*D-B;for(let Ee=0;Ee<k;Ee++){let ke=Ee*P-F;q[S]=ke*E,q[_]=ie*C,q[g]=I,h.push(q.x,q.y,q.z),q[S]=0,q[_]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),p.push(Ee/f),p.push(1-te/M),H+=1}}for(let te=0;te<M;te++)for(let ie=0;ie<f;ie++){let Ee=d+ie+k*te,ke=d+ie+k*(te+1),Q=d+(ie+1)+k*(te+1),ve=d+(ie+1)+k*te;c.push(Ee,ke,ve),c.push(ke,Q,ve),re+=6}o.addGroup(m,re,N),m+=re,d+=H}l(x,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Vl,"BoxGeometry");var jn=Vl;var Hl=class Hl extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],m=[],x=0,S=[],_=n/2,g=0;E(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(m,2));function E(){let T=new z,R=new z,w=0,f=(t-e)/n;for(let M=0;M<=r;M++){let N=[],P=M/r,D=P*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,I=B*c+o,k=Math.sin(I),Z=Math.cos(I);R.x=D*k,R.y=-P*n+_,R.z=D*Z,p.push(R.x,R.y,R.z),T.set(k,f,Z).normalize(),d.push(T.x,T.y,T.z),m.push(B,1-P),N.push(x++)}S.push(N)}for(let M=0;M<s;M++)for(let N=0;N<r;N++){let P=S[N][M],D=S[N+1][M],F=S[N+1][M+1],B=S[N][M+1];(e>0||N!==0)&&(u.push(P,D,B),w+=3),(t>0||N!==r-1)&&(u.push(D,F,B),w+=3)}h.addGroup(g,w,0),g+=w}l(E,"generateTorso");function C(T){let R=x,w=new Be,f=new z,M=0,N=T===!0?e:t,P=T===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,_*P,0),d.push(0,P,0),m.push(.5,.5),x++;let D=x;for(let F=0;F<=s;F++){let I=F/s*c+o,k=Math.cos(I),Z=Math.sin(I);f.x=N*Z,f.y=_*P,f.z=N*k,p.push(f.x,f.y,f.z),d.push(0,P,0),w.x=k*.5+.5,w.y=Z*.5*P+.5,m.push(w.x,w.y),x++}for(let F=0;F<s;F++){let B=R+F,I=D+F;T===!0?u.push(I,I+1,B):u.push(I+1,I,B),M+=3}h.addGroup(g,M,T===!0?1:2),g+=M}l(C,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Hl,"CylinderGeometry");var Zi=Hl,Wl=class Wl extends Zi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Wl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Wl,"ConeGeometry");var bs=Wl;var Xl=class Xl extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,p=e/o,d=t/c,m=[],x=[],S=[],_=[];for(let g=0;g<u;g++){let E=g*d-a;for(let C=0;C<h;C++){let T=C*p-r;x.push(T,-E,0),S.push(0,0,1),_.push(C/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<o;E++){let C=E+h*g,T=E+h*(g+1),R=E+1+h*(g+1),w=E+1+h*g;m.push(C,T,w),m.push(T,R,w)}this.setIndex(m),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Xl,"PlaneGeometry");var Ji=Xl;var ql=class ql extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],p=new z,d=new z,m=[],x=[],S=[],_=[];for(let g=0;g<=n;g++){let E=[],C=g/n,T=a+C*o,R=e*Math.cos(T),w=Math.sqrt(e*e-R*R),f=0;g===0&&a===0?f=.5/t:g===n&&c===Math.PI&&(f=-.5/t);for(let M=0;M<=t;M++){let N=M/t,P=s+N*r;p.x=-w*Math.cos(P),p.y=R,p.z=w*Math.sin(P),x.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),_.push(N+f,1-C),E.push(h++)}u.push(E)}for(let g=0;g<n;g++)for(let E=0;E<t;E++){let C=u[g][E+1],T=u[g][E],R=u[g+1][E],w=u[g+1][E+1];(g!==0||a>0)&&m.push(C,T,w),(g!==n-1||c<Math.PI)&&m.push(T,R,w)}this.setIndex(m),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(ql,"SphereGeometry");var Ea=ql;var Yl=class Yl extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],u=[],p=[],d=new z,m=new z,x=new z;for(let S=0;S<=n;S++){let _=a+S/n*o;for(let g=0;g<=s;g++){let E=g/s*r;m.x=(e+t*Math.cos(_))*Math.cos(E),m.y=(e+t*Math.cos(_))*Math.sin(E),m.z=t*Math.sin(_),h.push(m.x,m.y,m.z),d.x=e*Math.cos(E),d.y=e*Math.sin(E),x.subVectors(m,d).normalize(),u.push(x.x,x.y,x.z),p.push(g/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let _=1;_<=s;_++){let g=(s+1)*S+_-1,E=(s+1)*(S-1)+_-1,C=(s+1)*(S-1)+_,T=(s+1)*S+_;c.push(g,E,T),c.push(E,C,T)}this.setIndex(c),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Yl,"TorusGeometry");var Ss=Yl;function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Tp(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(Rs,"cloneUniforms");function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}l(Zt,"mergeUniforms");function Tp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Tp,"isThreeObject");function o_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(o_,"cloneUniformsGroups");function Su(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}l(Su,"getUnlitUniformColorSpace");var Ga={clone:Rs,merge:Zt},l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ld=class ld extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=o_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(ld,"ShaderMaterial");var fn=ld,cd=class cd extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(cd,"RawShaderMaterial");var xl=cd,hd=class hd extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(hd,"MeshStandardMaterial");var $i=hd;var ud=class ud extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(ud,"MeshDepthMaterial");var vl=ud,dd=class dd extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(dd,"MeshDistanceMaterial");var yl=dd;function cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(cr,"convertArray");function Ko(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(Ko,"hasTangents");var fd=class fd{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(fd,"Interpolant");var Ki=fd,pd=class pd extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=e,o=2*t-n;break;case Yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:a=e,c=2*n-t;break;case Yh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),S=x*x,_=S*x,g=-d*_+2*d*S-d*x,E=(1+d)*_+(-1.5-2*d)*S+(-.5+d)*x+1,C=(-1-m)*_+(1.5+m)*S+.5*x,T=m*_-m*S;for(let R=0;R!==o;++R)r[R]=g*a[u+R]+E*a[h+R]+C*a[c+R]+T*a[p+R];return r}};l(pd,"CubicInterpolant");var Ml=pd,md=class md extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(s-t),p=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*p+a[c+d]*u;return r}};l(md,"LinearInterpolant");var bl=md,gd=class gd extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(gd,"DiscreteInterpolant");var Sl=gd,_d=class _d extends Ki{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let x=(n-t)/(s-t),S=1-x;for(let _=0;_!==o;++_)r[_]=a[h+_]*S+a[c+_]*x;return r}let d=o*2,m=e-1;for(let x=0;x!==o;++x){let S=a[h+x],_=a[c+x],g=m*d+x*2,E=p[g],C=p[g+1],T=e*d+x*2,R=u[T],w=u[T+1],f=u_(n,t,E,R,s);r[x]=vm(f,S,C,w,_)}return r}};l(_d,"BezierInterpolant");var wl=_d;function vm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(vm,"cubicBezier");function h_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(h_,"cubicBezierSlope");function u_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=vm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=h_(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(u_,"solveBezierParameter");var xd=class xd{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ko(e.settings)&&(n.settings={inTangents:cr(e.settings.inTangents,Array),outTangents:cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break;case Wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return el;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ko(this.settings)&&(Ap(this.settings.inTangents,e),Ap(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ko(this.settings)&&(Cp(this.settings.inTangents,e),Cp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Bg(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){ze("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(s)c=!0;else{let p=o*n,d=p-n,m=p+n;for(let x=0;x!==n;++x){let S=t[p+x];if(S!==t[d+x]||S!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ko(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(xd,"KeyframeTrack");var pn=xd;function Ap(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(Ap,"shiftTangentTimes");function Cp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Cp,"scaleTangentTimes");pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=hl;var vd=class vd extends pn{constructor(e,t,n){super(e,t,n)}};l(vd,"BooleanKeyframeTrack");var Qi=vd;Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=ca;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yd=class yd extends pn{constructor(e,t,n,s){super(e,t,n,s)}};l(yd,"ColorKeyframeTrack");var El=yd;El.prototype.ValueTypeName="color";var Md=class Md extends pn{constructor(e,t,n,s){super(e,t,n,s)}};l(Md,"NumberKeyframeTrack");var Tl=Md;Tl.prototype.ValueTypeName="number";var bd=class bd extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)un.slerpFlat(r,0,a,h-o,a,h,c);return r}};l(bd,"QuaternionLinearInterpolant");var Al=bd,Sd=class Sd extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};l(Sd,"QuaternionKeyframeTrack");var Ta=Sd;Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var wd=class wd extends pn{constructor(e,t,n){super(e,t,n)}};l(wd,"StringKeyframeTrack");var ji=wd;ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ca;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ed=class Ed extends pn{constructor(e,t,n,s){super(e,t,n,s)}};l(Ed,"VectorKeyframeTrack");var Cl=Ed;Cl.prototype.ValueTypeName="vector";var Td=class Td{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return h.push(u,p),this},this.removeHandler=function(u){let p=h.indexOf(u);return p!==-1&&h.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=h.length;p<d;p+=2){let m=h[p],x=h[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Td,"LoadingManager");var Rl=Td,ym=new Rl,Ad=class Ad{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Ad,"Loader");var Pl=Ad;Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cd=class Cd extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Cd,"Light");var Aa=Cd,Rd=class Rd extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Rd,"HemisphereLight");var Ca=Rd,Hh=new lt,Rp=new z,Pp=new z,Pd=class Pd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===gr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Pd,"LightShadow");var Il=Pd,Qo=new z,jo=new un,$n=new z,Id=class Id extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,jo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,jo,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qo,jo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,jo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Id,"Camera");var Ra=Id,Vi=new z,Ip=new Be,Lp=new Be,Ld=class Ld extends Ra{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Ip,Lp),t.subVectors(Lp,Ip)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Ld,"PerspectiveCamera");var jt=Ld;var Dd=class Dd extends Ra{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Dd,"OrthographicCamera");var Pa=Dd,Nd=class Nd extends Il{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Nd,"DirectionalLightShadow");var Zh=Nd,Ud=class Ud extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Ud,"DirectionalLight");var Ia=Ud;var hr=-90,ur=1,Fd=class Fd extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(hr,ur,e,t);s.layers=this.layers,this.add(s);let r=new jt(hr,ur,e,t);r.layers=this.layers,this.add(r);let a=new jt(hr,ur,e,t);a.layers=this.layers,this.add(a);let o=new jt(hr,ur,e,t);o.layers=this.layers,this.add(o);let c=new jt(hr,ur,e,t);c.layers=this.layers,this.add(c);let h=new jt(hr,ur,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};l(Fd,"CubeCamera");var wr=Fd,Od=class Od extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Od,"ArrayCamera");var Ll=Od;var wu="\\[\\]\\.:\\/",d_=new RegExp("["+wu+"]","g"),Eu="[^"+wu+"]",f_="[^"+wu.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",Eu),m_=/(WCOD+)?/.source.replace("WCOD",f_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),x_=new RegExp("^"+p_+m_+g_+__+"$"),v_=["material","materials","bones","map"],Bd=class Bd{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Bd,"Composite");var Jh=Bd,Wi=class Wi{constructor(e,t,n){this.path=t,this.parsedPath=n||Wi.parseTrackName(t),this.node=Wi.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Wi.Composite(e,t,n):new Wi(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d_,"")}static parseTrackName(e){let t=x_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=Wi.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Wi,"PropertyBinding");var ut=Wi;ut.Composite=Jh;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var US=new Float32Array(1);var Zl=class Zl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(Zl,"Matrix2"),Zl.prototype.isMatrix2=!0;var $h=Zl;function Tu(i,e,t,n){let s=y_(n);switch(t){case mu:return i*e;case _u:return i*e/s.components*s.byteLength;case nc:return i*e/s.components*s.byteLength;case ni:return i*e*2/s.components*s.byteLength;case ic:return i*e*2/s.components*s.byteLength;case gu:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case sc:return i*e*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(e,8)/4;case rc:case oc:return Math.max(i,8)*Math.max(e,8)/2;case cc:case hc:case dc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case za:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ka:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Tu,"getByteLength");function y_(i){switch(i){case rn:case uu:return{byteLength:1,components:1};case Cr:case du:case mn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Gn:case jl:case Vn:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(y_,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(Vm,"WebGLAnimation");function A_(i){let e=new WeakMap;function t(o,c){let h=o.array,u=o.usage,p=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,u),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,h){let u=c.array,p=c.updateRanges;if(i.bindBuffer(h,o),p.length===0)i.bufferSubData(h,0,u);else{p.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<p.length;m++){let x=p[d],S=p[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,p[d]=S)}p.length=d+1;for(let m=0,x=p.length;m<x;m++){let S=p[m];i.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(A_,"WebGLAttributes");var C_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R_=`#ifdef USE_ALPHAHASH
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
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N_=`#ifdef USE_AOMAP
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
#endif`,U_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_=`#ifdef USE_BATCHING
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
#endif`,O_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G_=`#ifdef USE_IRIDESCENCE
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
#endif`,V_=`#ifdef USE_BUMPMAP
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
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K_=`#define PI 3.141592653589793
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
} // validated`,Q_=`vec3 transformedNormal = objectNormal;
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
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#endif`,Ex=`uniform sampler2D dfgLUT;
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
}`,Tx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dv=`float getShadowMask() {
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
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform float backgroundBlurriness;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
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
}`,Nv=`#if DEPTH_PACKING == 3200
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
}`,Uv=`#define DISTANCE
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
}`,Fv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`uniform float scale;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Hv=`#define LAMBERT
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define MATCAP
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define NORMAL
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
}`,Zv=`#define NORMAL
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
}`,Jv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Kv=`#define STANDARD
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
}`,Qv=`#define STANDARD
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
}`,jv=`#define TOON
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
}`,ey=`#define TOON
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
}`,ty=`uniform float size;
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,ry=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:C_,alphahash_pars_fragment:R_,alphamap_fragment:P_,alphamap_pars_fragment:I_,alphatest_fragment:L_,alphatest_pars_fragment:D_,aomap_fragment:N_,aomap_pars_fragment:U_,batching_pars_vertex:F_,batching_vertex:O_,begin_vertex:B_,beginnormal_vertex:z_,bsdfs:k_,iridescence_fragment:G_,bumpmap_pars_fragment:V_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:Y_,color_pars_fragment:Z_,color_pars_vertex:J_,color_vertex:$_,common:K_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:j_,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ax,envmap_pars_fragment:ox,envmap_pars_vertex:lx,envmap_physical_pars_fragment:vx,envmap_vertex:cx,fog_vertex:hx,fog_pars_vertex:ux,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:_x,lights_pars_begin:xx,lights_toon_fragment:yx,lights_toon_pars_fragment:Mx,lights_phong_fragment:bx,lights_phong_pars_fragment:Sx,lights_physical_fragment:wx,lights_physical_pars_fragment:Ex,lights_fragment_begin:Tx,lights_fragment_maps:Ax,lights_fragment_end:Cx,lightprobes_pars_fragment:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Dx,map_fragment:Nx,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:kx,morphcolor_vertex:Gx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:Zx,normal_vertex:Jx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:ev,opaque_fragment:tv,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:sv,dithering_fragment:rv,dithering_pars_fragment:av,roughnessmap_fragment:ov,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:hv,shadowmap_vertex:uv,shadowmask_pars_fragment:dv,skinbase_vertex:fv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:_v,specularmap_pars_fragment:xv,tonemapping_fragment:vv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:bv,uv_pars_fragment:Sv,uv_pars_vertex:wv,uv_vertex:Ev,worldpos_vertex:Tv,background_vert:Av,background_frag:Cv,backgroundCube_vert:Rv,backgroundCube_frag:Pv,cube_vert:Iv,cube_frag:Lv,depth_vert:Dv,depth_frag:Nv,distance_vert:Uv,distance_frag:Fv,equirect_vert:Ov,equirect_frag:Bv,linedashed_vert:zv,linedashed_frag:kv,meshbasic_vert:Gv,meshbasic_frag:Vv,meshlambert_vert:Hv,meshlambert_frag:Wv,meshmatcap_vert:Xv,meshmatcap_frag:qv,meshnormal_vert:Yv,meshnormal_frag:Zv,meshphong_vert:Jv,meshphong_frag:$v,meshphysical_vert:Kv,meshphysical_frag:Qv,meshtoon_vert:jv,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:ay},xe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},si={basic:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Zt([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Zt([xe.lights,xe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};si.physical={uniforms:Zt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Oc={r:0,b:0,g:0},oy=new lt,Hm=new Ve;Hm.set(-1,0,0,0,1,0,0,0,1);function ly(i,e,t,n,s,r){let a=new Ne(0),o=s===!0?0:1,c,h,u=null,p=0,d=null;function m(E){let C=E.isScene===!0?E.background:null;if(C&&C.isTexture){let T=E.backgroundBlurriness>0;C=e.get(C,T)}return C}l(m,"getBackground");function x(E){let C=!1,T=m(E);T===null?_(a,o):T&&T.isColor&&(_(T,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(x,"render");function S(E,C){let T=m(C);T&&T.isCubeTexture?(h===void 0&&(h=new gt(new jn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Rs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(C.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Hm),h.material.toneMapped=Qe.getTransfer(T.colorSpace)!==st,(u!==T||p!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,p=T.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new gt(new Ji(2,2),new fn({name:"BackgroundMaterial",uniforms:Rs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,p=T.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}l(S,"addToRenderList");function _(E,C){E.getRGB(Oc,Su(i)),t.buffers.color.setClear(Oc.r,Oc.g,Oc.b,C,r)}l(_,"setClear");function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(g,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(E,C=1){a.set(E),o=C,_(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(E){o=E,_(a,o)},"setClearAlpha"),render:x,addToRenderList:S,dispose:g}}l(ly,"WebGLBackground");function cy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,F,B,I,k){let Z=!1,H=p(D,I,B,F);r!==H&&(r=H,h(r.object)),Z=m(D,I,B,k),Z&&x(D,I,B,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(D,F,B,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function h(D){return i.bindVertexArray(D)}l(h,"bindVertexArrayObject");function u(D){return i.deleteVertexArray(D)}l(u,"deleteVertexArrayObject");function p(D,F,B,I){let k=I.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let H=D.isInstancedMesh===!0?D.id:0,re=Z[H];re===void 0&&(re={},Z[H]=re);let q=re[B.id];q===void 0&&(q={},re[B.id]=q);let te=q[k];return te===void 0&&(te=d(c()),q[k]=te),te}l(p,"getBindingState");function d(D){let F=[],B=[],I=[];for(let k=0;k<t;k++)F[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:I,object:D,attributes:{},index:null}}l(d,"createBindingState");function m(D,F,B,I){let k=r.attributes,Z=F.attributes,H=0,re=B.getAttributes();for(let q in re)if(re[q].location>=0){let ie=k[q],Ee=Z[q];if(Ee===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),ie===void 0||ie.attribute!==Ee||Ee&&ie.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==I}l(m,"needsUpdate");function x(D,F,B,I){let k={},Z=F.attributes,H=0,re=B.getAttributes();for(let q in re)if(re[q].location>=0){let ie=Z[q];ie===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));let Ee={};Ee.attribute=ie,ie&&ie.data&&(Ee.data=ie.data),k[q]=Ee,H++}r.attributes=k,r.attributesNum=H,r.index=I}l(x,"saveCache");function S(){let D=r.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}l(S,"initAttributes");function _(D){g(D,0)}l(_,"enableAttribute");function g(D,F){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),k[D]!==F&&(i.vertexAttribDivisor(D,F),k[D]=F)}l(g,"enableAttributeAndDivisor");function E(){let D=r.newAttributes,F=r.enabledAttributes;for(let B=0,I=F.length;B<I;B++)F[B]!==D[B]&&(i.disableVertexAttribArray(B),F[B]=0)}l(E,"disableUnusedAttributes");function C(D,F,B,I,k,Z,H){H===!0?i.vertexAttribIPointer(D,F,B,k,Z):i.vertexAttribPointer(D,F,B,I,k,Z)}l(C,"vertexAttribPointer");function T(D,F,B,I){S();let k=I.attributes,Z=B.getAttributes(),H=F.defaultAttributeValues;for(let re in Z){let q=Z[re];if(q.location>=0){let te=k[re];if(te===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){let ie=te.normalized,Ee=te.itemSize,ke=e.get(te);if(ke===void 0)continue;let Q=ke.buffer,ve=ke.type,Te=ke.bytesPerElement,Le=ve===i.INT||ve===i.UNSIGNED_INT||te.gpuType===jl;if(te.isInterleavedBufferAttribute){let ye=te.data,Ge=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,dt=te.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ue=0;Ue<q.locationSize;Ue++)g(q.location+Ue,ye.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)_(q.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ue=0;Ue<q.locationSize;Ue++)C(q.location+Ue,Ee/q.locationSize,ve,ie,Ge*Te,(dt+Ee/q.locationSize*Ue)*Te,Le)}else{if(te.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)g(q.location+ye,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<q.locationSize;ye++)_(q.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ye=0;ye<q.locationSize;ye++)C(q.location+ye,Ee/q.locationSize,ve,ie,Ee*Te,Ee/q.locationSize*ye*Te,Le)}}else if(H!==void 0){let ie=H[re];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(q.location,ie);break;case 3:i.vertexAttrib3fv(q.location,ie);break;case 4:i.vertexAttrib4fv(q.location,ie);break;default:i.vertexAttrib1fv(q.location,ie)}}}}E()}l(T,"setupVertexAttributes");function R(){N();for(let D in n){let F=n[D];for(let B in F){let I=F[B];for(let k in I){let Z=I[k];for(let H in Z)u(Z[H].object),delete Z[H];delete I[k]}}delete n[D]}}l(R,"dispose");function w(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let B in F){let I=F[B];for(let k in I){let Z=I[k];for(let H in Z)u(Z[H].object),delete Z[H];delete I[k]}}delete n[D.id]}l(w,"releaseStatesOfGeometry");function f(D){for(let F in n){let B=n[F];for(let I in B){let k=B[I];if(k[D.id]===void 0)continue;let Z=k[D.id];for(let H in Z)u(Z[H].object),delete Z[H];delete k[D.id]}}}l(f,"releaseStatesOfProgram");function M(D){for(let F in n){let B=n[F],I=D.isInstancedMesh===!0?D.id:0,k=B[I];if(k!==void 0){for(let Z in k){let H=k[Z];for(let re in H)u(H[re].object),delete H[re];delete k[Z]}delete B[I],Object.keys(B).length===0&&delete n[F]}}}l(M,"releaseStatesOfObject");function N(){P(),a=!0,r!==s&&(r=s,h(r.object))}l(N,"reset");function P(){s.geometry=null,s.program=null,s.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:N,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:f,initAttributes:S,enableAttribute:_,disableUnusedAttributes:E}}l(cy,"WebGLBindingStates");function hy(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}l(r,"render");function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}l(a,"renderInstances");function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(hy,"WebGLBufferRenderer");function uy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let f=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(f){return!(f!==Hn&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(f){let M=f===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==rn&&f!==Vn&&!M&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(f){if(f==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let h=t.precision!==void 0?t.precision:"highp",u=c(h);u!==h&&(Oe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:E,maxVaryings:C,maxFragmentUniforms:T,maxSamples:R,samples:w}}l(uy,"WebGLCapabilities");function dy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new zn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let m=p.length!==0||d||n!==0||s;return s=d,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,m){let x=p.clippingPlanes,S=p.clipIntersection,_=p.clipShadows,g=i.get(p);if(!s||x===null||x.length===0||r&&!_)r?u(null):h();else{let E=r?0:n,C=E*4,T=g.clippingState||null;c.value=T,T=u(x,d,C,m);for(let R=0;R!==C;++R)T[R]=t[R];g.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(h,"resetGlobalState");function u(p,d,m,x){let S=p!==null?p.length:0,_=null;if(S!==0){if(_=c.value,x!==!0||_===null){let g=m+S*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(_===null||_.length<g)&&(_=new Float32Array(g));for(let C=0,T=m;C!==S;++C,T+=4)a.copy(p[C]).applyMatrix4(E,o),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}l(u,"projectPlanes")}l(dy,"WebGLClipping");var Jd=class Jd extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ba(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ws});r.uniforms.tEquirect.value=t;let a=new gt(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Ft),new wr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(Jd,"WebGLCubeRenderTarget");var Wa=Jd,Mm=256,fy=3,py=20,Wm=256,Xm=16,my=3,gy=new z,_y=new Ne,Gc=class Gc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new gt(new jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=gy}=r,c=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(_y));let _=new wr(n,s,u);return _.position.copy(o),_.update(c,e),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=x,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mm,pm(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===Ar?this._setSize(e.image.length===0?Mm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=bm(e,!1,!1),n=Math.log2(e)-fy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===Ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=xy(),this._integrationMaterial=vy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xm);for(let a=0;a<=n;a++){let o=Gc.lodToRoughness(a,n);if(a>n-my)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Wm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(Gc,"PMREMGenerator");var zc=Gc;function bm(i,e,t){return new Wa(i,{minFilter:Si,generateMipmaps:e,type:mn,colorSpace:ha,depthBuffer:t})}l(bm,"_createRenderTarget");function Xa(i,e,t){return new fn({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:tn,blending:ws,depthTest:!1,depthWrite:!1})}l(Xa,"_getMaterial");function xy(){return Xa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wm}u

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
	`)}l(xy,"_getGGXMaterial");function vy(){return Xa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xm}},`

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
	`)}l(vy,"_getIntegrationMaterial");function yy(){return Xa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${py}
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
	`)}l(yy,"_getBlurMaterial");function Sm(){return Xa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(Sm,"_getEquirectMaterial");function wm(){return Xa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(wm,"_getCubemapMaterial");function My(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}l(s,"get");function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===$l||m===Kl)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let S=new Wa(x.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",h),o(S.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,x=m===$l||m===Kl,S=m===Ts||m===Ar;if(x||S){let _=t.get(d),g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new zc(i)),_=x?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{let E=d.image;return x&&E&&E.height>0||S&&E&&c(E)?(n===null&&(n=new zc(i)),_=x?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}l(a,"getPMREM");function o(d,m){return m===$l?d.mapping=Ts:m===Kl&&(d.mapping=Ar),d}l(o,"mapTextureMapping");function c(d){let m=0,x=6;for(let S=0;S<x;S++)d[S]!==void 0&&m++;return m===x}l(c,"isCubeTextureComplete");function h(d){let m=d.target;m.removeEventListener("dispose",h);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}l(h,"onCubemapDispose");function u(d){let m=d.target;m.removeEventListener("dispose",u);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}l(u,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:s,dispose:p}}l(My,"WebGLEnvironments");function by(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&oa("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(by,"WebGLExtensions");function Sy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}l(o,"onGeometryDispose");function c(x){x.index!==null&&e.remove(x.index);for(let _ in x.attributes)e.remove(x.attributes[_]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let S=r.get(x);S&&(e.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function h(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}l(h,"get");function u(x){let S=x.attributes;for(let _ in S)e.update(S[_],i.ARRAY_BUFFER)}l(u,"update");function p(x){let S=x.index,_=x.attributes.position,g=0;if(_===void 0)return;let E=S!==null?S.array.length:_.array.length/3-1,C=_.count>=65535?va:xa,T=new C(Math.ceil(E/3)*6,1),R=T.array;if(S!==null){let f=S.array;g=S.version;for(let M=0,N=0;M<E;M+=3){let P=f[M+0],D=f[M+1],F=f[M+2];R[N++]=P,R[N++]=D,R[N++]=D,R[N++]=F,R[N++]=F,R[N++]=P}}else{g=_.version;for(let f=0,M=0;f<E;f+=3){let N=f+0,P=f+1,D=f+2;R[M++]=N,R[M++]=P,R[M++]=P,R[M++]=D,R[M++]=D,R[M++]=N}}T.version=g;let w=r.get(x);w&&e.remove(w),r.set(x,T)}l(p,"updateWireframeAttribute");function d(x){let S=r.get(x);if(S){let _=x.index;_!==null&&S.version<_.version&&p(x)}else p(x);return r.get(x)}l(d,"getWireframeAttribute");function m(){for(let x in s){let S=s[x].deref();S!==void 0&&c(S)}}return l(m,"dispose"),{get:h,update:u,getWireframeAttribute:d,dispose:m}}l(Sy,"WebGLGeometries");function wy(i,e,t){let n;function s(p){n=p}l(s,"setMode");let r,a;function o(p){r=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}l(c,"render");function h(p,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,p*a,m),t.update(d,n,m))}l(h,"renderInstances");function u(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,m);let S=0;for(let _=0;_<m;_++)S+=d[_];t.update(S,n,1)}l(u,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}l(wy,"WebGLIndexedBufferRenderer");function Ey(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(Ey,"WebGLInfo");function Ty(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let P=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],T=0;x===!0&&(T=1),S===!0&&(T=2),_===!0&&(T=3);let R=o.attributes.position.count*T,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let f=new Float32Array(R*w*4*p),M=new pa(f,R,w,p);M.type=Vn,M.needsUpdate=!0;let N=T*4;for(let D=0;D<p;D++){let F=g[D],B=E[D],I=C[D],k=R*w*4*D;for(let Z=0;Z<F.count;Z++){let H=Z*N;x===!0&&(s.fromBufferAttribute(F,Z),f[k+H+0]=s.x,f[k+H+1]=s.y,f[k+H+2]=s.z,f[k+H+3]=0),S===!0&&(s.fromBufferAttribute(B,Z),f[k+H+4]=s.x,f[k+H+5]=s.y,f[k+H+6]=s.z,f[k+H+7]=0),_===!0&&(s.fromBufferAttribute(I,Z),f[k+H+8]=s.x,f[k+H+9]=s.y,f[k+H+10]=s.z,f[k+H+11]=I.itemSize===4?s.w:1)}}d={count:p,texture:M,size:new Be(R,w)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let _=0;_<h.length;_++)x+=h[_];let S=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(Ty,"WebGLMorphtargets");function Ay(i,e,t,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,p=h.geometry,d=e.get(h,p);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let m=h.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(Ay,"WebGLObjects");var Cy={[su]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[lu]:"AGX_TONE_MAPPING",[cu]:"NEUTRAL_TONE_MAPPING",[ou]:"CUSTOM_TONE_MAPPING"};function Ry(i,e,t,n,s,r){let a=new dn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=null,u=new Ot;u.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new yt([0,2,0,0,2,0],2));let p=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new gt(u,p),m=new Pa(-1,1,1,-1,0,1),x=null,S=null,_=!1,g,E=null,C=[],T=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),c!==null&&c.setSize(R,w);for(let f=0;f<C.length;f++){let M=C[f];M.setSize&&M.setSize(R,w)}},this.setEffects=function(R){C=R,T=C.length>0&&C[0].isRenderPass===!0;let w=a.width,f=a.height;C.length>0&&o===null&&(o=new dn(w,f,{type:mn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(w,f,{type:mn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&C.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&h===null&&(h=new bi(w,f),r===!0&&(h.format=wi,h.type=As)),a.dispose(),a.depthTexture=M?h:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<C.length;N++){let P=C[N];P.setSize&&P.setSize(w,f),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(R,w){if(_||R.toneMapping===ti&&C.length===0)return!1;if(E=w,w!==null){let f=w.width,M=w.height;(a.width!==f||a.height!==M)&&this.setSize(f,M)}return T===!1&&R.setRenderTarget(a),g=R.toneMapping,R.toneMapping=ti,!0},this.hasRenderPass=function(){return T},this.end=function(R,w){R.toneMapping=g,_=!0;let f=a,M=o;for(let N=0;N<C.length;N++){let P=C[N];P.enabled!==!1&&(P.render(R,M,f,w),P.needsSwap!==!1&&(f=M,M=M===o?c:o))}if(x!==R.outputColorSpace||S!==R.toneMapping){x=R.outputColorSpace,S=R.toneMapping,p.defines={},Qe.getTransfer(x)===st&&(p.defines.SRGB_TRANSFER="");let N=Cy[S];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=f.texture,R.setRenderTarget(E),R.render(d,m),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}l(Ry,"WebGLOutput");var qm=new en,Ym=new bi(1,1),Zm=new Sa(1),Jm=new pa,$m=new pl,Km=new ba,Em=[],Tm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Em[s];if(r===void 0&&(r=new Float32Array(s),Em[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(Pr,"flatten");function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(At,"arraysEqual");function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Ct,"copyArray");function Vc(i,e){let t=Tm[e];t===void 0&&(t=new Int32Array(e),Tm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Vc,"allocTexUnits");function Py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(Py,"setValueV1f");function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}l(Iy,"setValueV2f");function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}l(Ly,"setValueV3f");function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}l(Dy,"setValueV4f");function Ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Rm.set(n),i.uniformMatrix2fv(this.addr,!1,Rm),Ct(t,n)}}l(Ny,"setValueM2");function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Cm.set(n),i.uniformMatrix3fv(this.addr,!1,Cm),Ct(t,n)}}l(Uy,"setValueM3");function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Am.set(n),i.uniformMatrix4fv(this.addr,!1,Am),Ct(t,n)}}l(Fy,"setValueM4");function Oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(Oy,"setValueV1i");function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}l(By,"setValueV2i");function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}l(zy,"setValueV3i");function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}l(ky,"setValueV4i");function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(Gy,"setValueV1ui");function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}l(Vy,"setValueV2ui");function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}l(Hy,"setValueV3ui");function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}l(Wy,"setValueV4ui");function Hc(i){return i.version===0&&(i.compareFunction=yu,i.needsUpdate=!0),i}l(Hc,"initShadowTexture");function Xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Hc(Ym):r=qm,t.setTexture2D(e||r,s)}l(Xy,"setValueT1");function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$m,s)}l(qy,"setValueT3D1");function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Hc(Zm):r=Km,t.setTextureCube(e||r,s)}l(Yy,"setValueT6");function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jm,s)}l(Zy,"setValueT2DArray1");function Jy(i){switch(i){case 5126:return Py;case 35664:return Iy;case 35665:return Ly;case 35666:return Dy;case 35674:return Ny;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return zy;case 35669:case 35673:return ky;case 5125:return Gy;case 36294:return Vy;case 36295:return Hy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Zy}}l(Jy,"getSingularSetter");function $y(i,e){i.uniform1fv(this.addr,e)}l($y,"setValueV1fArray");function Ky(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}l(Ky,"setValueV2fArray");function Qy(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}l(Qy,"setValueV3fArray");function jy(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}l(jy,"setValueV4fArray");function eM(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(eM,"setValueM2Array");function tM(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(tM,"setValueM3Array");function nM(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(nM,"setValueM4Array");function iM(i,e){i.uniform1iv(this.addr,e)}l(iM,"setValueV1iArray");function sM(i,e){i.uniform2iv(this.addr,e)}l(sM,"setValueV2iArray");function rM(i,e){i.uniform3iv(this.addr,e)}l(rM,"setValueV3iArray");function aM(i,e){i.uniform4iv(this.addr,e)}l(aM,"setValueV4iArray");function oM(i,e){i.uniform1uiv(this.addr,e)}l(oM,"setValueV1uiArray");function lM(i,e){i.uniform2uiv(this.addr,e)}l(lM,"setValueV2uiArray");function cM(i,e){i.uniform3uiv(this.addr,e)}l(cM,"setValueV3uiArray");function hM(i,e){i.uniform4uiv(this.addr,e)}l(hM,"setValueV4uiArray");function uM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hc(Ym):a=qm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(uM,"setValueT1Array");function dM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$m,r[a])}l(dM,"setValueT3DArray");function fM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Hc(Zm):a=Km;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(fM,"setValueT6Array");function pM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jm,r[a])}l(pM,"setValueT2DArrayArray");function mM(i){switch(i){case 5126:return $y;case 35664:return Ky;case 35665:return Qy;case 35666:return jy;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return cM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return pM}}l(mM,"getPureArraySetter");var $d=class $d{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jy(t.type)}};l($d,"SingleUniform");var Gd=$d,Kd=class Kd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mM(t.type)}};l(Kd,"PureArrayUniform");var Vd=Kd,Qd=class Qd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(Qd,"StructuredUniform");var Hd=Qd,zd=/(\w+)(\])?(\[|\.)?/g;function Pm(i,e){i.seq.push(e),i.map[e.id]=e}l(Pm,"addUniform");function gM(i,e,t){let n=i.name,s=n.length;for(zd.lastIndex=0;;){let r=zd.exec(n),a=zd.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Pm(t,h===void 0?new Gd(o,i,e):new Vd(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Hd(o),Pm(t,p)),t=p}}}l(gM,"parseUniform");var jd=class jd{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);gM(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(jd,"WebGLUniforms");var Rr=jd;function Im(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(Im,"WebGLShader");var _M=37297,xM=0;function vM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(vM,"handleSource");var Lm=new Ve;function yM(i){Qe._getMatrix(Lm,Qe.workingColorSpace,i);let e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case ua:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(yM,"getEncodingComponents");function Dm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vM(i.getShaderSource(e),o)}else return r}l(Dm,"getShaderErrors");function MM(i,e){let t=yM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(MM,"getTexelEncodingFunction");var bM={[su]:"Linear",[ru]:"Reinhard",[au]:"Cineon",[Da]:"ACESFilmic",[lu]:"AgX",[cu]:"Neutral",[ou]:"Custom"};function SM(i,e){let t=bM[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(SM,"getToneMappingFunction");var Bc=new z;function wM(){Qe.getLuminanceCoefficients(Bc);let i=Bc.x.toFixed(4),e=Bc.y.toFixed(4),t=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(wM,"getLuminanceFunction");function EM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}l(EM,"generateVertexExtensions");function TM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(TM,"generateDefines");function AM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(AM,"fetchAttributeLocations");function Ha(i){return i!==""}l(Ha,"filterEmptyLine");function Nm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(Nm,"replaceLightNums");function Um(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(Um,"replaceClippingPlaneNums");var CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(i){return i.replace(CM,RM)}l(Wd,"resolveIncludes");function RM(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wd(t)}l(RM,"includeReplacer");var PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(i){return i.replace(PM,IM)}l(Fm,"unrollLoops");function IM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(IM,"loopReplacer");function Om(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(Om,"generatePrecision");var LM={[La]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function DM(i){return LM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(DM,"generateShadowMapTypeDefine");var NM={[Ar]:"ENVMAP_MODE_REFRACTION"};function UM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":NM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(UM,"generateEnvMapModeDefine");var FM={[iu]:"ENVMAP_BLENDING_MULTIPLY",[jp]:"ENVMAP_BLENDING_MIX",[em]:"ENVMAP_BLENDING_ADD"};function OM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":FM[i.combine]||"ENVMAP_BLENDING_NONE"}l(OM,"generateEnvMapBlendingDefine");function BM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=DM(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=UM(t),p=OM(t),d=EM(t),m=TM(r),x=s.createProgram(),S,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ha).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ha).join(`
`),_.length>0&&(_+=`
`)):(S=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),_=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ti?SM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,MM("linearToOutputTexel",t.outputColorSpace),wM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Wd(a),a=Nm(a,t),a=Um(a,t),o=Wd(o),o=Nm(o,t),o=Um(o,t),a=Fm(a),o=Fm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let E=g+S+a,C=g+_+o,T=Im(s,s.VERTEX_SHADER,E),R=Im(s,s.FRAGMENT_SHADER,C);s.attachShader(x,T),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(R)||"",I=D.trim(),k=F.trim(),Z=B.trim(),H=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,R);else{let q=Dm(s,T,"vertex"),te=Dm(s,R,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+q+`
`+te)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(k===""||Z==="")&&(re=!1);re&&(P.diagnostics={runnable:H,programLog:I,vertexShader:{log:k,prefix:S},fragmentShader:{log:Z,prefix:_}})}s.deleteShader(T),s.deleteShader(R),f=new Rr(s,x),M=AM(s,x)}l(w,"onFirstUse");let f;this.getUniforms=function(){return f===void 0&&w(this),f};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(x,_M)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}l(BM,"WebGLProgram");var zM=0,ef=class ef{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qd(e),t.set(e,n)),n}};l(ef,"WebGLShaderCache");var Xd=ef,tf=class tf{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}};l(tf,"WebGLShaderStage");var qd=tf;function kM(i){return i===ni||i===za||i===ka}l(kM,"isPackedRGFormat");function GM(i,e,t,n,s,r){let a=new ma,o=new Xd,c=new Set,h=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return c.add(f),f===0?"uv":`uv${f}`}l(m,"getChannel");function x(f,M,N,P,D,F){let B=P.fog,I=D.geometry,k=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?P.environment:null,Z=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,H=e.get(f.envMap||k,Z),re=d[f.type],q=n.precision;f.precision!==null&&(q=n.getMaxPrecision(f.precision),q!==f.precision&&Oe("WebGLProgram.getParameters:",f.precision,"not supported, using",q,"instead."));let te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=te!==void 0?te.length:0,Ee=0;I.morphAttributes.position!==void 0&&(Ee=1),I.morphAttributes.normal!==void 0&&(Ee=2),I.morphAttributes.color!==void 0&&(Ee=3);let ke,Q,ve,Te;if(re){let be=si[re];ke=be.vertexShader,Q=be.fragmentShader}else{ke=f.vertexShader,Q=f.fragmentShader;let be=o.getVertexShaderStage(f),rt=o.getFragmentShaderStage(f);o.update(f,be,rt),ve=be.id,Te=rt.id}let Le=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ge=D.isInstancedMesh===!0,dt=D.isBatchedMesh===!0,Ue=!!f.map,Je=!!f.matcap,tt=!!H,qe=tt&&H.isPMREMTexture===!0,vt=!!f.aoMap,_t=!!f.lightMap,Et=!!f.bumpMap&&f.wireframe===!1,at=!!f.normalMap,ln=!!f.displacementMap,Pt=!!f.emissiveMap,Mn=!!f.metalnessMap,bn=!!f.roughnessMap,Sn=f.anisotropy>0,O=f.clearcoat>0,wn=f.diffuseRoughness>0,ft=f.dispersion>0,pt=f.retroreflectivity>0,_e=f.iridescence>0,Tt=f.sheen>0,Fe=f.transmission>0,He=Sn&&!!f.anisotropyMap,A=O&&!!f.clearcoatMap,y=O&&!!f.clearcoatNormalMap,V=O&&!!f.clearcoatRoughnessMap,ae=wn&&!!f.diffuseRoughnessMap,ne=_e&&!!f.iridescenceMap,he=_e&&!!f.iridescenceThicknessMap,me=Tt&&!!f.sheenColorMap,$=Tt&&!!f.sheenRoughnessMap,j=!!f.specularMap,de=!!f.specularColorMap,L=!!f.specularIntensityMap,ee=Fe&&!!f.transmissionMap,J=Fe&&!!f.thicknessMap,fe=!!f.gradientMap,le=!!f.alphaMap,ue=f.alphaTest>0,Ie=!!f.alphaHash,Ye=!!f.extensions,oe=ti;f.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(oe=i.toneMapping);let De=qe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Xe={shaderID:re,shaderType:f.type,shaderName:f.name,vertexShader:ke,fragmentShader:Q,defines:f.defines,customVertexShaderID:ve,customFragmentShaderID:Te,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:q,batching:dt,batchingColor:dt&&D._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Ue,matcap:Je,envMap:tt,envMapMode:tt&&H.mapping,envMapPMREM:qe,envMapMaxLod:qe?De.length-1:null,envMapSize:qe?De[0].width:null,aoMap:vt,lightMap:_t,bumpMap:Et,normalMap:at,displacementMap:ln,emissiveMap:Pt,normalMapObjectSpace:at&&f.normalMapType===im,normalMapTangentSpace:at&&f.normalMapType===Uc,packedNormalMap:at&&f.normalMapType===Uc&&kM(f.normalMap.format),metalnessMap:Mn,roughnessMap:bn,anisotropy:Sn,anisotropyMap:He,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:V,diffuseRoughness:wn,diffuseRoughnessMap:ae,dispersion:ft,retroreflection:pt,iridescence:_e,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:Tt,sheenColorMap:me,sheenRoughnessMap:$,specularMap:j,specularColorMap:de,specularIntensityMap:L,transmission:Fe,transmissionMap:ee,thicknessMap:J,gradientMap:fe,opaque:f.transparent===!1&&f.blending===Tr&&f.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Ie,combine:f.combine,mapUv:Ue&&m(f.map.channel),aoMapUv:vt&&m(f.aoMap.channel),lightMapUv:_t&&m(f.lightMap.channel),bumpMapUv:Et&&m(f.bumpMap.channel),normalMapUv:at&&m(f.normalMap.channel),displacementMapUv:ln&&m(f.displacementMap.channel),emissiveMapUv:Pt&&m(f.emissiveMap.channel),metalnessMapUv:Mn&&m(f.metalnessMap.channel),roughnessMapUv:bn&&m(f.roughnessMap.channel),anisotropyMapUv:He&&m(f.anisotropyMap.channel),clearcoatMapUv:A&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:y&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&m(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&m(f.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:$&&m(f.sheenRoughnessMap.channel),specularMapUv:j&&m(f.specularMap.channel),specularColorMapUv:de&&m(f.specularColorMap.channel),specularIntensityMapUv:L&&m(f.specularIntensityMap.channel),transmissionMapUv:ee&&m(f.transmissionMap.channel),thicknessMapUv:J&&m(f.thicknessMap.channel),alphaMapUv:le&&m(f.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||Sn),vertexNormals:!!I.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ue||le),fog:!!B,useFog:f.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||I.attributes.normal===void 0&&at===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ue&&f.map.isVideoTexture===!0&&Qe.getTransfer(f.map.colorSpace)===st,decodeVideoTextureEmissive:Pt&&f.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(f.emissiveMap.colorSpace)===st,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===ei,flipSided:f.side===tn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Ye&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&f.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}l(x,"getParameters");function S(f){let M=[];if(f.shaderID?M.push(f.shaderID):(M.push(f.customVertexShaderID),M.push(f.customFragmentShaderID)),f.defines!==void 0)for(let N in f.defines)M.push(N),M.push(f.defines[N]);return f.isRawShaderMaterial===!1&&(_(M,f),g(M,f),M.push(i.outputColorSpace)),M.push(f.customProgramCacheKey),M.join()}l(S,"getProgramCacheKey");function _(f,M){f.push(M.precision),f.push(M.outputColorSpace),f.push(M.envMapMode),f.push(M.envMapPMREM),f.push(M.envMapMaxLod),f.push(M.envMapSize),f.push(M.mapUv),f.push(M.alphaMapUv),f.push(M.lightMapUv),f.push(M.aoMapUv),f.push(M.bumpMapUv),f.push(M.normalMapUv),f.push(M.displacementMapUv),f.push(M.emissiveMapUv),f.push(M.metalnessMapUv),f.push(M.roughnessMapUv),f.push(M.anisotropyMapUv),f.push(M.clearcoatMapUv),f.push(M.clearcoatNormalMapUv),f.push(M.clearcoatRoughnessMapUv),f.push(M.diffuseRoughnessMapUv),f.push(M.iridescenceMapUv),f.push(M.iridescenceThicknessMapUv),f.push(M.sheenColorMapUv),f.push(M.sheenRoughnessMapUv),f.push(M.specularMapUv),f.push(M.specularColorMapUv),f.push(M.specularIntensityMapUv),f.push(M.transmissionMapUv),f.push(M.thicknessMapUv),f.push(M.combine),f.push(M.fogExp2),f.push(M.sizeAttenuation),f.push(M.morphTargetsCount),f.push(M.numSunLights),f.push(M.numDirLights),f.push(M.numPointLights),f.push(M.numSpotLights),f.push(M.numSpotLightMaps),f.push(M.numHemiLights),f.push(M.numRectAreaLights),f.push(M.numSunLightShadows),f.push(M.numDirLightShadows),f.push(M.numPointLightShadows),f.push(M.numSpotLightShadows),f.push(M.numSpotLightShadowsWithMaps),f.push(M.numLightProbes),f.push(M.numLightProbeGrids),f.push(M.shadowMapType),f.push(M.toneMapping),f.push(M.numClippingPlanes),f.push(M.numClipIntersection),f.push(M.depthPacking)}l(_,"getProgramCacheKeyParameters");function g(f,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),f.push(a.mask)}l(g,"getProgramCacheKeyBooleans");function E(f){let M=d[f.type],N;if(M){let P=si[M];N=Ga.clone(P.uniforms)}else N=f.uniforms;return N}l(E,"getUniforms");function C(f,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new BM(i,M,f,s),h.push(N),u.set(M,N)),N}l(C,"acquireProgram");function T(f){if(--f.usedTimes===0){let M=h.indexOf(f);h[M]=h[h.length-1],h.pop(),u.delete(f.cacheKey),f.destroy()}}l(T,"releaseProgram");function R(f){o.remove(f)}l(R,"releaseShaderCache");function w(){o.dispose()}return l(w,"dispose"),{getParameters:x,getProgramCacheKey:S,getUniforms:E,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:w}}l(GM,"WebGLPrograms");function VM(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(VM,"WebGLProperties");function HM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(HM,"painterSortStable");function Bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(Bm,"reversePainterSortStable");function zm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(d,m,x,S,_,g){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:_,group:g},i[e]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=x,E.materialVariant=a(d),E.groupOrder=S,E.renderOrder=d.renderOrder,E.z=_,E.group=g),e++,E}l(o,"getNextRenderItem");function c(d,m,x,S,_,g,E){E.reversedDepth===!0&&(_=-_);let C=o(d,m,x,S,_,g);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):t.push(C)}l(c,"push");function h(d,m,x,S,_,g){let E=o(d,m,x,S,_,g);x.transmission>0?n.unshift(E):x.transparent===!0?s.unshift(E):t.unshift(E)}l(h,"unshift");function u(d,m){t.length>1&&t.sort(d||HM),n.length>1&&n.sort(m||Bm),s.length>1&&s.sort(m||Bm)}l(u,"sort");function p(){for(let d=e,m=i.length;d<m;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:p,sort:u}}l(zm,"WebGLRenderList");function WM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new zm,i.set(n,[a])):s>=r.length?(a=new zm,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(WM,"WebGLRenderLists");function XM(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t},"get")}}l(XM,"UniformsCache");function qM(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(qM,"ShadowUniformsCache");var YM=0;function ZM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(ZM,"shadowCastingAndTexturingLightsFirst");function JM(i){let e=new XM,t=qM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);let s=new z,r=new lt,a=new lt;function o(h){let u=0,p=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,x=0,S=0,_=0,g=0,E=0,C=0,T=0,R=0,w=0,f=0,M=0,N=0,P=0;h.sort(ZM);for(let F=0,B=h.length;F<B;F++){let I=h[F],k=I.color,Z=I.intensity,H=I.distance,re=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ni?re=I.shadow.map.texture:re=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*Z,p+=k.g*Z,d+=k.b*Z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Z);P++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[x]=ie,n.sunShadowMap[x]=re;let Ee=te.getViewportCount();for(let ke=0;ke<Ee;ke++)n.sunShadowMatrix[S+ke]=te.getMatrix(ke),n.sunShadowCascade[S+ke]=te._cascadeData[ke];S+=Ee,x++}n.sun[m]=q,m++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.directionalShadow[_]=ie,n.directionalShadowMap[_]=re,n.directionalShadowMatrix[_]=I.shadow.matrix,R++}n.directional[_]=q,_++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(Z),q.distance=H,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[E]=q;let te=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,te.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[E]=te.matrix,I.castShadow){let ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.spotShadow[E]=ie,n.spotShadowMap[E]=re,f++}E++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(k).multiplyScalar(Z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[C]=q,C++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(Z),q.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[T]=q,T++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let D=n.hash;(D.sunLength!==m||D.directionalLength!==_||D.pointLength!==g||D.spotLength!==E||D.rectAreaLength!==C||D.hemiLength!==T||D.numSunShadows!==x||D.numDirectionalShadows!==R||D.numPointShadows!==w||D.numSpotShadows!==f||D.numSpotMaps!==M||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=_,n.spot.length=E,n.rectArea.length=C,n.point.length=g,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=f,n.spotShadowMap.length=f,n.spotLightMatrix.length=f+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,D.sunLength=m,D.directionalLength=_,D.pointLength=g,D.spotLength=E,D.rectAreaLength=C,D.hemiLength=T,D.numSunShadows=x,D.numDirectionalShadows=R,D.numPointShadows=w,D.numSpotShadows=f,D.numSpotMaps=M,D.numLightProbes=P,n.version=YM++)}l(o,"setup");function c(h,u){let p=0,d=0,m=0,x=0,S=0,_=0,g=u.matrixWorldInverse;for(let E=0,C=h.length;E<C;E++){let T=h[E];if(T.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(g),p++}else if(T.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),d++}else if(T.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),x++}else if(T.isRectAreaLight){let R=n.rectArea[S];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(g),m++}else if(T.isHemisphereLight){let R=n.hemi[_];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(g),_++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(JM,"WebGLLights");function km(i){let e=new JM(i),t=[],n=[],s=[];function r(p){u.camera=p,t.length=0,n.length=0,s.length=0}l(r,"init");function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}l(c,"setupLights");function h(p){e.setupView(t,p)}l(h,"setupLightsView");let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}l(km,"WebGLRenderState");function $M(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new km(i),e.set(s,[o])):r>=a.length?(o=new km(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l($M,"WebGLRenderStates");var KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
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
}`,jM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],eb=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Gm=new lt,Va=new z,kd=new z;function tb(i,e,t){let n=new Yi,s=new Be,r=new Be,a=new mt,o=new vl,c=new yl,h={},u=t.maxTextureSize,p={[es]:tn,[tn]:es,[ei]:ei},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:KM,fragmentShader:QM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ot;x.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new gt(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let g=this.type;this.render=function(w,f,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===Jl&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);let N=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ws),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=g!==this.type;B&&f.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){let Z=w[I],H=Z.shadow;if(H===void 0){Oe("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let re=H.getFrameExtents();s.multiply(re),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,H.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Er){if(Z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new dn(s.x,s.y,{format:ni,type:mn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new bi(s.x,s.y,Vn),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=yi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut}else Z.isPointLight?(H.map=new Wa(s.x),H.map.depthTexture=new Sa(s.x,Gn)):(H.map=new dn(s.x,s.y),H.map.depthTexture=new bi(s.x,s.y,Gn)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=yi,this.type===La?(H.map.depthTexture.compareFunction=q?vu:xu,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,M);let ie=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let Ee=0;Ee<te;Ee++){let ke=H.getCamera(Ee);if(Z.isPointLight){let Q=H.camera,ve=H.matrix,Te=Z.distance||Q.far;Te!==Q.far&&(Q.far=Te,Q.updateProjectionMatrix()),Va.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Va),kd.copy(Q.position),kd.add(jM[Ee]),Q.up.copy(eb[Ee]),Q.lookAt(kd),Q.updateMatrixWorld(),ve.makeTranslation(-Va.x,-Va.y,-Va.z),Gm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Gm,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(H.map),i.clear());let Q=H.getViewport(Ee);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(a)}n=H.getFrustum(Ee),T(f,M,ke,Z,ie,this.type)}H.isPointLightShadow!==!0&&this.type===Er&&E(H,M),H.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(N,P,D)};function E(w,f){let M=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new dn(s.x,s.y,{format:ni,type:mn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(f,null,M,d,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(f,null,M,m,S,null)}l(E,"VSMPass");function C(w,f,M,N){let P=null,D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)P=D;else if(P=M.isPointLight===!0?c:o,i.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let F=P.uuid,B=f.uuid,I=h[F];I===void 0&&(I={},h[F]=I);let k=I[B];k===void 0&&(k=P.clone(),I[B]=k,f.addEventListener("dispose",R)),P=k}if(P.visible=f.visible,P.wireframe=f.wireframe,N===Er?P.side=f.shadowSide!==null?f.shadowSide:f.side:P.side=f.shadowSide!==null?f.shadowSide:p[f.side],P.alphaMap=f.alphaMap,P.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,P.map=f.map,P.clipShadows=f.clipShadows,P.clippingPlanes=f.clippingPlanes,P.clipIntersection=f.clipIntersection,P.displacementMap=f.displacementMap,P.displacementScale=f.displacementScale,P.displacementBias=f.displacementBias,P.wireframeLinewidth=f.wireframeLinewidth,P.linewidth=f.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=M}return P}l(C,"getDepthMaterial");function T(w,f,M,N,P,D){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Er)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),k=w.material;if(Array.isArray(k)){let Z=I.groups;for(let H=0,re=Z.length;H<re;H++){let q=Z[H],te=k[q.materialIndex];if(te&&te.visible){let ie=C(w,te,N,D);w.onBeforeShadow(i,w,f,M,I,ie,q),i.renderBufferDirect(M,null,I,ie,w,q),w.onAfterShadow(i,w,f,M,I,ie,q)}}}else if(k.visible){let Z=C(w,k,N,D);w.onBeforeShadow(i,w,f,M,I,Z,null),i.renderBufferDirect(M,null,I,Z,w,null),w.onAfterShadow(i,w,f,M,I,Z,null)}}let B=w.children;for(let I=0,k=B.length;I<k;I++)T(B[I],f,M,N,P,D)}l(T,"renderObject");function R(w){w.target.removeEventListener("dispose",R);for(let M in h){let N=h[M],P=w.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}l(R,"onMaterialDispose")}l(tb,"WebGLShadowMap");function nb(i,e){function t(){let L=!1,ee=new mt,J=null,fe=new mt(0,0,0,0);return{setMask:l(function(le){J!==le&&!L&&(i.colorMask(le,le,le,le),J=le)},"setMask"),setLocked:l(function(le){L=le},"setLocked"),setClear:l(function(le,ue,Ie,Ye,oe){oe===!0&&(le*=Ye,ue*=Ye,Ie*=Ye),ee.set(le,ue,Ie,Ye),fe.equals(ee)===!1&&(i.clearColor(le,ue,Ie,Ye),fe.copy(ee))},"setClear"),reset:l(function(){L=!1,J=null,fe.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let L=!1,ee=!1,J=null,fe=null,le=null;return{setReversed:l(function(ue){if(ee!==ue){let Ie=e.get("EXT_clip_control");ue?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ee=ue;let Ye=le;le=null,this.setClear(Ye)}},"setReversed"),getReversed:l(function(){return ee},"getReversed"),setTest:l(function(ue){ue?ye(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},"setTest"),setMask:l(function(ue){J!==ue&&!L&&(i.depthMask(ue),J=ue)},"setMask"),setFunc:l(function(ue){if(ee&&(ue=fm[ue]),fe!==ue){switch(ue){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ue}},"setFunc"),setLocked:l(function(ue){L=ue},"setLocked"),setClear:l(function(ue){le!==ue&&(le=ue,ee&&(ue=1-ue),i.clearDepth(ue))},"setClear"),reset:l(function(){L=!1,J=null,fe=null,le=null,ee=!1},"reset")}}l(n,"DepthBuffer");function s(){let L=!1,ee=null,J=null,fe=null,le=null,ue=null,Ie=null,Ye=null,oe=null;return{setTest:l(function(De){L||(De?ye(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},"setTest"),setMask:l(function(De){ee!==De&&!L&&(i.stencilMask(De),ee=De)},"setMask"),setFunc:l(function(De,Xe,be){(J!==De||fe!==Xe||le!==be)&&(i.stencilFunc(De,Xe,be),J=De,fe=Xe,le=be)},"setFunc"),setOp:l(function(De,Xe,be){(ue!==De||Ie!==Xe||Ye!==be)&&(i.stencilOp(De,Xe,be),ue=De,Ie=Xe,Ye=be)},"setOp"),setLocked:l(function(De){L=De},"setLocked"),setClear:l(function(De){oe!==De&&(i.clearStencil(De),oe=De)},"setClear"),reset:l(function(){L=!1,ee=null,J=null,fe=null,le=null,ue=null,Ie=null,Ye=null,oe=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},h=new WeakMap,u={},p={},d={},m=new WeakMap,x=[],S=null,_=!1,g=null,E=null,C=null,T=null,R=null,w=null,f=null,M=new Ne(0,0,0),N=0,P=!1,D=null,F=null,B=null,I=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,re=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=re>=2);let te=null,ie={},Ee=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Q=new mt().fromArray(Ee),ve=new mt().fromArray(ke);function Te(L,ee,J,fe){let le=new Uint8Array(4),ue=i.createTexture();i.bindTexture(L,ue),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<J;Ie++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ee+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ue}l(Te,"createTexture");let Le={};Le[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(mr),Et(!1),at(Kh),ye(i.CULL_FACE),vt(ws);function ye(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}l(ye,"enable");function Ge(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}l(Ge,"disable");function dt(L,ee){return d[L]!==ee?(i.bindFramebuffer(L,ee),d[L]=ee,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}l(dt,"bindFramebuffer");function Ue(L,ee){let J=x,fe=!1;if(L){J=m.get(ee),J===void 0&&(J=[],m.set(ee,J));let le=L.textures;if(J.length!==le.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ie=le.length;ue<Ie;ue++)J[ue]=i.COLOR_ATTACHMENT0+ue;J.length=le.length,fe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,fe=!0);fe&&i.drawBuffers(J)}l(Ue,"drawBuffers");function Je(L){return S!==L?(i.useProgram(L),S=L,!0):!1}l(Je,"useProgram");let tt={[Es]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Op]:i.FUNC_REVERSE_SUBTRACT};tt[Bp]=i.MIN,tt[zp]=i.MAX;let qe={[kp]:i.ZERO,[Gp]:i.ONE,[Vp]:i.SRC_COLOR,[tu]:i.SRC_ALPHA,[Zp]:i.SRC_ALPHA_SATURATE,[qp]:i.DST_COLOR,[Wp]:i.DST_ALPHA,[Hp]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[Yp]:i.ONE_MINUS_DST_COLOR,[Xp]:i.ONE_MINUS_DST_ALPHA,[Jp]:i.CONSTANT_COLOR,[$p]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[Qp]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(L,ee,J,fe,le,ue,Ie,Ye,oe,De){if(L===ws){_===!0&&(Ge(i.BLEND),_=!1);return}if(_===!1&&(ye(i.BLEND),_=!0),L!==Up){if(L!==g||De!==P){if((E!==Es||R!==Es)&&(i.blendEquation(i.FUNC_ADD),E=Es,R=Es),De)switch(L){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",L);break}else switch(L){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",L);break}C=null,T=null,w=null,f=null,M.set(0,0,0),N=0,g=L,P=De}return}le=le||ee,ue=ue||J,Ie=Ie||fe,(ee!==E||le!==R)&&(i.blendEquationSeparate(tt[ee],tt[le]),E=ee,R=le),(J!==C||fe!==T||ue!==w||Ie!==f)&&(i.blendFuncSeparate(qe[J],qe[fe],qe[ue],qe[Ie]),C=J,T=fe,w=ue,f=Ie),(Ye.equals(M)===!1||oe!==N)&&(i.blendColor(Ye.r,Ye.g,Ye.b,oe),M.copy(Ye),N=oe),g=L,P=!1}l(vt,"setBlending");function _t(L,ee){L.side===ei?Ge(i.CULL_FACE):ye(i.CULL_FACE);let J=L.side===tn;ee&&(J=!J),Et(J),L.blending===Tr&&L.transparent===!1?vt(ws):vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}l(_t,"setMaterial");function Et(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}l(Et,"setFlipSided");function at(L){L!==Dp?(ye(i.CULL_FACE),L!==F&&(L===Kh?i.cullFace(i.BACK):L===Np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),F=L}l(at,"setCullFace");function ln(L){L!==B&&(H&&i.lineWidth(L),B=L)}l(ln,"setLineWidth");function Pt(L,ee,J){L?(ye(i.POLYGON_OFFSET_FILL),(I!==ee||k!==J)&&(I=ee,k=J,a.getReversed()&&(ee=-ee,J=-J),i.polygonOffset(ee,J))):Ge(i.POLYGON_OFFSET_FILL)}l(Pt,"setPolygonOffset");function Mn(L){L?ye(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}l(Mn,"setScissorTest");function bn(L){L===void 0&&(L=i.TEXTURE0+Z-1),te!==L&&(i.activeTexture(L),te=L)}l(bn,"activeTexture");function Sn(L,ee,J){J===void 0&&(te===null?J=i.TEXTURE0+Z-1:J=te);let fe=ie[J];fe===void 0&&(fe={type:void 0,texture:void 0},ie[J]=fe),(fe.type!==L||fe.texture!==ee)&&(te!==J&&(i.activeTexture(J),te=J),i.bindTexture(L,ee||Le[L]),fe.type=L,fe.texture=ee)}l(Sn,"bindTexture");function O(){let L=ie[te];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}l(O,"unbindTexture");function wn(){try{i.compressedTexImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}l(wn,"compressedTexImage2D");function ft(){try{i.compressedTexImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}l(ft,"compressedTexImage3D");function pt(){try{i.texSubImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}l(pt,"texSubImage2D");function _e(){try{i.texSubImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}l(_e,"texSubImage3D");function Tt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}l(Tt,"compressedTexSubImage2D");function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}l(Fe,"compressedTexSubImage3D");function He(){try{i.texStorage2D(...arguments)}catch(L){ze("WebGLState:",L)}}l(He,"texStorage2D");function A(){try{i.texStorage3D(...arguments)}catch(L){ze("WebGLState:",L)}}l(A,"texStorage3D");function y(){try{i.texImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}l(y,"texImage2D");function V(){try{i.texImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}l(V,"texImage3D");function ae(L){return p[L]!==void 0?p[L]:i.getParameter(L)}l(ae,"getParameter");function ne(L,ee){p[L]!==ee&&(i.pixelStorei(L,ee),p[L]=ee)}l(ne,"pixelStorei");function he(L){Q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}l(he,"scissor");function me(L){ve.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ve.copy(L))}l(me,"viewport");function $(L,ee){let J=h.get(ee);J===void 0&&(J=new WeakMap,h.set(ee,J));let fe=J.get(L);fe===void 0&&(fe=i.getUniformBlockIndex(ee,L.name),i.uniformBlockBinding(ee,fe,fe),J.set(L,fe))}l($,"updateUBOMapping");function j(L,ee,J){let le=h.get(ee).get(L);c[le]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,J),c[le]=J)}l(j,"uniformBlockBinding");function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},te=null,ie={},d={},c={},m=new WeakMap,x=[],S=null,_=!1,g=null,E=null,C=null,T=null,R=null,w=null,f=null,M=new Ne(0,0,0),N=0,P=!1,D=null,F=null,B=null,I=null,k=null,Q.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(de,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Ge,bindFramebuffer:dt,drawBuffers:Ue,useProgram:Je,setBlending:vt,setMaterial:_t,setFlipSided:Et,setCullFace:at,setLineWidth:ln,setPolygonOffset:Pt,setScissorTest:Mn,activeTexture:bn,bindTexture:Sn,unbindTexture:O,compressedTexImage2D:wn,compressedTexImage3D:ft,texImage2D:y,texImage3D:V,pixelStorei:ne,getParameter:ae,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:He,texStorage3D:A,texSubImage2D:pt,texSubImage3D:_e,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Fe,scissor:he,viewport:me,reset:de}}l(nb,"WebGLState");function ib(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,u=new WeakMap,p=new Set,d,m=new WeakMap,x=new Set,S=new FinalizationRegistry(A=>x.delete(A)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return _?new OffscreenCanvas(A,y):da("canvas")}l(g,"createCanvas");function E(A,y,V){let ae=1,ne=He(A);if((ne.width>V||ne.height>V)&&(ae=V/Math.max(ne.width,ne.height)),ae<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let he=Math.floor(ae*ne.width),me=Math.floor(ae*ne.height);d===void 0&&(d=g(he,me));let $=y?g(he,me):d;return $.width=he,$.height=me,$.getContext("2d").drawImage(A,0,0,he,me),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+me+")."),$}else return"data"in A&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}l(E,"resizeImage");function C(A){return A.generateMipmaps}l(C,"textureNeedsGenerateMipmaps");function T(A){i.generateMipmap(A)}l(T,"generateMipmap");function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function w(A,y,V,ae,ne,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;ae&&(me=e.get("EXT_texture_norm16"),me||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8),V===i.UNSIGNED_SHORT&&me&&($=me.R16_EXT),V===i.SHORT&&me&&($=me.R16_SNORM_EXT)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),y===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8),V===i.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),V===i.SHORT&&me&&($=me.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),V===i.SHORT&&me&&($=me.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){let j=he?ua:Qe.getTransfer(ne);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=j===st?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),V===i.SHORT&&me&&($=me.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}l(w,"getInternalFormat");function f(A,y){let V;return A?y===null||y===Gn||y===As?V=i.DEPTH24_STENCIL8:y===Vn?V=i.DEPTH32F_STENCIL8:y===Cr&&(V=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===As?V=i.DEPTH_COMPONENT24:y===Vn?V=i.DEPTH_COMPONENT32F:y===Cr&&(V=i.DEPTH_COMPONENT16),V}l(f,"getInternalDepthFormat");function M(A,y){return C(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==Ft?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}l(M,"getMipLevels");function N(A){let y=new WeakRef(A);n.get(A).__ref=y,x.add(y),S.register(A,y,y)}l(N,"track");function P(A){let y=n.get(A).__ref;y!==void 0&&(x.delete(y),S.unregister(y))}l(P,"untrack");function D(A){B(A.target)}l(D,"onTextureDispose");function F(A){I(A.target)}l(F,"onRenderTargetDispose");function B(A){A.removeEventListener("dispose",D),P(A),Z(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&p.delete(A)}l(B,"destroyTexture");function I(A){A.removeEventListener("dispose",F),P(A),re(A)}l(I,"destroyRenderTarget");function k(){for(let A of x){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):B(y))}x.clear(),p.clear()}l(k,"dispose");function Z(A){let y=n.get(A);if(y.__webglInit===void 0)return;let V=A.source,ae=m.get(V);if(ae){let ne=ae[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&H(A),Object.keys(ae).length===0&&m.delete(V)}n.remove(A)}l(Z,"deallocateTexture");function H(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let V=A.source,ae=m.get(V);delete ae[y.__cacheKey],a.memory.textures--}l(H,"deleteTexture");function re(A){let y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let V=A.depthTexture;if(V&&V.renderTarget===A&&B(V),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(y.__webglFramebuffer[ne]))for(let he=0;he<y.__webglFramebuffer[ne].length;he++)i.deleteFramebuffer(y.__webglFramebuffer[ne][he]);else i.deleteFramebuffer(y.__webglFramebuffer[ne]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ne])}else{if(Array.isArray(y.__webglFramebuffer))for(let ne=0;ne<y.__webglFramebuffer.length;ne++)i.deleteFramebuffer(y.__webglFramebuffer[ne]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ne=0;ne<y.__webglColorRenderbuffer.length;ne++)y.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ne]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ae=A.textures;for(let ne=0,he=ae.length;ne<he;ne++){let me=n.get(ae[ne]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(ae[ne])}n.remove(A)}l(re,"deallocateRenderTarget");let q=0;function te(){q=0}l(te,"resetTextureUnits");function ie(){return q}l(ie,"getTextureUnits");function Ee(A){q=A}l(Ee,"setTextureUnits");function ke(){let A=q;return A>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}l(ke,"allocateTextureUnit");function Q(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}l(Q,"getTextureCacheKey");function ve(A,y){let V=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let ae=A.image;if(ae===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(V,A,y);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}l(ve,"setTexture2D");function Te(A,y){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){_t(V,A,y);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}l(Te,"setTexture2DArray");function Le(A,y){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){_t(V,A,y);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}l(Le,"setTexture3D");function ye(A,y){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Et(V,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}l(ye,"setTextureCube");let Ge={[Ms]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},dt={[Ut]:i.NEAREST,[tm]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Ql]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Ue={[rm]:i.NEVER,[yu]:i.ALWAYS,[am]:i.LESS,[xu]:i.LEQUAL,[om]:i.EQUAL,[vu]:i.GEQUAL,[lm]:i.GREATER,[cm]:i.NOTEQUAL};function Je(A,y){if(y.type===Vn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ft||y.magFilter===Ql||y.magFilter===Na||y.magFilter===Si||y.minFilter===Ft||y.minFilter===Ql||y.minFilter===Na||y.minFilter===Si)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ge[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ge[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ge[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Na&&y.minFilter!==Si||y.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}l(Je,"setTextureParameters");function tt(A,y){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",D),N(y));let ae=y.source,ne=m.get(ae);ne===void 0&&(ne={},m.set(ae,ne));let he=Q(y);if(he!==A.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[he].usedTimes++;let me=ne[A.__cacheKey];me!==void 0&&(ne[A.__cacheKey].usedTimes--,me.usedTimes===0&&H(y)),A.__cacheKey=he,A.__webglTexture=ne[he].texture}return V}l(tt,"initTexture");function qe(A,y,V){return Math.floor(Math.floor(A/V)/y)}l(qe,"getRow");function vt(A,y,V,ae){let he=A.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,ae,y.data);else{he.sort((L,ee)=>L.start-ee.start);let me=0;for(let L=1;L<he.length;L++){let ee=he[me],J=he[L],fe=ee.start+ee.count,le=qe(J.start,y.width,4),ue=qe(ee.start,y.width,4);J.start<=fe+1&&le===ue&&qe(J.start+J.count-1,y.width,4)===le?ee.count=Math.max(ee.count,J.start+J.count-ee.start):(++me,he[me]=J)}he.length=me+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let L=0,ee=he.length;L<ee;L++){let J=he[L],fe=Math.floor(J.start/4),le=Math.ceil(J.count/4),ue=fe%y.width,Ie=Math.floor(fe/y.width),Ye=le,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(i.TEXTURE_2D,0,ue,Ie,Ye,oe,V,ae,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}l(vt,"updateTexture");function _t(A,y,V){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);let ne=tt(A,y),he=y.source;t.bindTexture(ae,A.__webglTexture,i.TEXTURE0+V);let me=n.get(he);if(he.version!==me.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let oe=Qe.getPrimaries(Qe.workingColorSpace),De=y.colorSpace===Ei?null:Qe.getPrimaries(y.colorSpace),Xe=y.colorSpace===Ei||oe===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let j=E(y.image,!1,s.maxTextureSize);j=Fe(y,j);let de=r.convert(y.format,y.colorSpace),L=r.convert(y.type),ee=w(y.internalFormat,de,L,y.normalized,y.colorSpace,y.isVideoTexture);Je(ae,y);let J,fe=y.mipmaps,le=y.isVideoTexture!==!0,ue=me.__version===void 0||ne===!0,Ie=he.dataReady,Ye=M(y,j);if(y.isDepthTexture)ee=f(y.format===wi,y.type),ue&&(le?t.texStorage2D(i.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,de,L,null));else if(y.isDataTexture)if(fe.length>0){le&&ue&&t.texStorage2D(i.TEXTURE_2D,Ye,ee,fe[0].width,fe[0].height);for(let oe=0,De=fe.length;oe<De;oe++)J=fe[oe],le?Ie&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,J.width,J.height,de,L,J.data):t.texImage2D(i.TEXTURE_2D,oe,ee,J.width,J.height,0,de,L,J.data);y.generateMipmaps=!1}else le?(ue&&t.texStorage2D(i.TEXTURE_2D,Ye,ee,j.width,j.height),Ie&&vt(y,j,de,L)):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,de,L,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){le&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ee,fe[0].width,fe[0].height,j.depth);for(let oe=0,De=fe.length;oe<De;oe++)if(J=fe[oe],y.format!==Hn)if(de!==null)if(le){if(Ie)if(y.layerUpdates.size>0){let Xe=Tu(J.width,J.height,y.format,y.type);for(let be of y.layerUpdates){let rt=J.data.subarray(be*Xe/J.data.BYTES_PER_ELEMENT,(be+1)*Xe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,be,J.width,J.height,1,de,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,J.width,J.height,j.depth,de,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,ee,J.width,J.height,j.depth,0,J.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,J.width,J.height,j.depth,de,L,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,ee,J.width,J.height,j.depth,0,de,L,J.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(i.TEXTURE_2D,Ye,ee,fe[0].width,fe[0].height);for(let oe=0,De=fe.length;oe<De;oe++)J=fe[oe],y.format!==Hn?de!==null?le?Ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,J.width,J.height,de,J.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,ee,J.width,J.height,0,J.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ie&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,J.width,J.height,de,L,J.data):t.texImage2D(i.TEXTURE_2D,oe,ee,J.width,J.height,0,de,L,J.data)}else if(y.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ee,j.width,j.height,j.depth),Ie)if(y.layerUpdates.size>0){let oe=Tu(j.width,j.height,y.format,y.type);for(let De of y.layerUpdates){let Xe=j.data.subarray(De*oe/j.data.BYTES_PER_ELEMENT,(De+1)*oe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,j.width,j.height,1,de,L,Xe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,L,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,de,L,j.data);else if(y.isData3DTexture)le?(ue&&t.texStorage3D(i.TEXTURE_3D,Ye,ee,j.width,j.height,j.depth),Ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,L,j.data)):t.texImage3D(i.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,de,L,j.data);else if(y.isFramebufferTexture){if(ue)if(le)t.texStorage2D(i.TEXTURE_2D,Ye,ee,j.width,j.height);else{let oe=j.width,De=j.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,ee,oe,De,0,de,L,null),oe>>=1,De>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),j.parentNode!==oe){oe.appendChild(j),p.add(y),oe.onpaint=De=>{let Xe=De.changedElements;for(let be of p)Xe.includes(be.image)&&(be.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Xe=i.RGBA,be=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xe,be,rt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(le&&ue){let oe=He(fe[0]);t.texStorage2D(i.TEXTURE_2D,Ye,ee,oe.width,oe.height)}for(let oe=0,De=fe.length;oe<De;oe++)J=fe[oe],le?Ie&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,de,L,J):t.texImage2D(i.TEXTURE_2D,oe,ee,de,L,J);y.generateMipmaps=!1}else if(le){if(ue){let oe=He(j);t.texStorage2D(i.TEXTURE_2D,Ye,ee,oe.width,oe.height)}Ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,L,j)}else t.texImage2D(i.TEXTURE_2D,0,ee,de,L,j);C(y)&&y.mipmapsAutoUpdate===!0&&T(ae),me.__version=he.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}l(_t,"uploadTexture");function Et(A,y,V){if(y.image.length!==6)return;let ae=tt(A,y),ne=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let he=n.get(ne);if(ne.version!==he.__version||ae===!0){t.activeTexture(i.TEXTURE0+V);let me=Qe.getPrimaries(Qe.workingColorSpace),$=y.colorSpace===Ei?null:Qe.getPrimaries(y.colorSpace),j=y.colorSpace===Ei||me===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let de=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let be=0;be<6;be++)!de&&!L?ee[be]=E(y.image[be],!0,s.maxCubemapSize):ee[be]=L?y.image[be].image:y.image[be],ee[be]=Fe(y,ee[be]);let J=ee[0],fe=r.convert(y.format,y.colorSpace),le=r.convert(y.type),ue=w(y.internalFormat,fe,le,y.normalized,y.colorSpace),Ie=y.isVideoTexture!==!0,Ye=he.__version===void 0||ae===!0,oe=ne.dataReady,De=M(y,J);Je(i.TEXTURE_CUBE_MAP,y);let Xe;if(y.isDepthTexture){if(ue=f(y.format===wi,y.type),Ye)if(Ie)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,J.width,J.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,J.width,J.height,0,fe,le,null)}else if(de){Ie&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ue,J.width,J.height);for(let be=0;be<6;be++){Xe=ee[be].mipmaps;for(let rt=0;rt<Xe.length;rt++){let It=Xe[rt];y.format!==Hn?fe!==null?Ie?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,It.width,It.height,fe,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,ue,It.width,It.height,0,It.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,It.width,It.height,fe,le,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,ue,It.width,It.height,0,fe,le,It.data)}}}else{if(Xe=y.mipmaps,Ie&&Ye){Xe.length>0&&De++;let be=He(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ue,be.width,be.height)}for(let be=0;be<6;be++)if(L){Ie?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ee[be].width,ee[be].height,fe,le,ee[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,ee[be].width,ee[be].height,0,fe,le,ee[be].data);for(let rt=0;rt<Xe.length;rt++){let Ni=Xe[rt].image[be].image;Ie?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,Ni.width,Ni.height,fe,le,Ni.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,ue,Ni.width,Ni.height,0,fe,le,Ni.data)}}else{Ie?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,fe,le,ee[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,fe,le,ee[be]);for(let rt=0;rt<Xe.length;rt++){let It=Xe[rt];Ie?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,fe,le,It.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,ue,fe,le,It.image[be])}}}C(y)&&y.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),he.__version=ne.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}l(Et,"uploadCubeTexture");function at(A,y,V,ae,ne,he){let me=r.convert(V.format,V.colorSpace),$=r.convert(V.type),j=w(V.internalFormat,me,$,V.normalized,V.colorSpace),de=n.get(y),L=n.get(V);if(L.__renderTarget=y,!de.__hasExternalTextures){let ee=Math.max(1,y.width>>he),J=Math.max(1,y.height>>he);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,j,ee,J,y.depth,0,me,$,null):t.texImage2D(ne,he,j,ee,J,0,me,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),_e(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ne,L.__webglTexture,0,pt(y)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ne,L.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(at,"setupFrameBufferTexture");function ln(A,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let ae=y.depthTexture,ne=ae&&ae.isDepthTexture?ae.type:null,he=f(y.stencilBuffer,ne),me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(y),he,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(y),he,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,he,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,A)}else{let ae=y.textures;for(let ne=0;ne<ae.length;ne++){let he=ae[ne],me=r.convert(he.format,he.colorSpace),$=r.convert(he.type),j=w(he.internalFormat,me,$,he.normalized,he.colorSpace);_e(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(y),j,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(ln,"setupRenderBufferStorage");function Pt(A,y,V){let ae=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);ne.__renderTarget=y;let he=ae?y.depthTexture.image[0]:y.depthTexture.image;(!ne.__webglTexture||he.width!==y.width||he.height!==y.height)&&(he.width=y.width,he.height=y.height,y.depthTexture.needsUpdate=!0),ae?ye(y.depthTexture,0):ve(y.depthTexture,0);let me=ne.__webglTexture,$=pt(y),j=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,de=y.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===yi)_e(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,j,me,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,de,j,me,0);else if(y.depthTexture.format===wi)_e(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,j,me,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,de,j,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(Pt,"setupDepthTexture");function Mn(A){let y=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let ae=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){let ne=l(()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",ne)},"disposeEvent");ae.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=ae}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let ae=0;ae<6;ae++)Pt(y.__webglFramebuffer[ae],A,ae);else A.texture.mipmaps.length>0?Pt(y.__webglFramebuffer[0],A,0):Pt(y.__webglFramebuffer,A,0);else if(V){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=i.createRenderbuffer(),ln(y.__webglDepthbuffer[ae],A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ln(y.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Mn,"setupDepthRenderbuffer");function bn(A,y,V){let ae=n.get(A);y!==void 0&&at(ae.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Mn(A)}l(bn,"rebindTextures");function Sn(A){let y=A.texture,V=n.get(A),ae=n.get(y);A.addEventListener("dispose",F),N(A);let ne=A.textures,he=A.isWebGLCubeRenderTarget===!0,me=ne.length>1;if(me||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let j=0;j<y.mipmaps.length;j++)V.__webglFramebuffer[$][j]=i.createFramebuffer()}else V.__webglFramebuffer[$]=i.createFramebuffer()}else{if(y.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)V.__webglFramebuffer[$]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(me)for(let $=0,j=ne.length;$<j;$++){let de=n.get(ne[$]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){let j=ne[$];V.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let de=r.convert(j.format,j.colorSpace),L=r.convert(j.type),ee=w(j.internalFormat,de,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),J=pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,V.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ln(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Je(i.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)at(V.__webglFramebuffer[$][j],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else at(V.__webglFramebuffer[$],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);C(y)?T(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(me){for(let $=0,j=ne.length;$<j;$++){let de=ne[$],L=n.get(de),ee=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,L.__webglTexture),Je(ee,de),at(V.__webglFramebuffer,A,de,i.COLOR_ATTACHMENT0+$,ee,0),C(de)&&T(ee)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,ae.__webglTexture),Je($,y),y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)at(V.__webglFramebuffer[j],A,y,i.COLOR_ATTACHMENT0,$,j);else at(V.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,$,0);C(y)?T($):y.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Mn(A)}l(Sn,"setupRenderTarget");function O(A){let y=A.textures;for(let V=0,ae=y.length;V<ae;V++){let ne=y[V];if(C(ne)&&ne.mipmapsAutoUpdate===!0){let he=R(A),me=n.get(ne).__webglTexture;t.bindTexture(he,me),T(he),t.unbindTexture()}}}l(O,"updateRenderTargetMipmap");let wn=[];function ft(A){if(A.samples>0){if(_e(A)===!1){let y=A.textures,V=A.width,ae=A.height,ne=i.COLOR_BUFFER_BIT,he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(A),$=y.length>1;if($)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<y.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[de]);let L=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,V,ae,0,0,V,ae,ne,i.NEAREST),c===!0&&(wn.length=0,wn.push(i.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&wn.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,me.__webglColorRenderbuffer[de]);let L=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}l(ft,"updateMultisampleRenderTarget");function pt(A){return Math.min(s.maxSamples,A.samples)}l(pt,"getRenderTargetSamples");function _e(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}l(_e,"useMultisampledRTT");function Tt(A){let y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}l(Tt,"updateVideoTexture");function Fe(A,y){let V=A.colorSpace,ae=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==ha&&V!==Ei&&(Qe.getTransfer(V)===st?(ae!==Hn||ne!==rn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",V)),y}l(Fe,"verifyColorSpace");function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}l(He,"getDimensions"),this.allocateTextureUnit=ke,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=Ee,this.setTexture2D=ve,this.setTexture2DArray=Te,this.setTexture3D=Le,this.setTextureCube=ye,this.rebindTextures=bn,this.setupRenderTarget=Sn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Mn,this.setupFrameBufferTexture=at,this.useMultisampledRTT=_e,this.dispose=k}l(ib,"WebGLTextures");function sb(i,e){function t(n,s=Ei){let r,a=Qe.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===mu)return i.ALPHA;if(n===gu)return i.RGB;if(n===Hn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===ac||n===oc||n===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===za||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return r.COMPRESSED_R11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Pc||n===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Dc||n===ka||n===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(sb,"WebGLUtils");var rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
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

}`,nf=class nf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:rb,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(nf,"WebXRDepthSensing");var Yd=nf,sf=class sf extends Kn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,p=null,d=null,m=null,x=null,S=typeof XRWebGLBinding<"u",_=new Yd,g={},E=t.getContextAttributes(),C=null,T=null,R=[],w=[],f=new Be,M=null,N=null,P=new jt;P.viewport=new mt;let D=new jt;D.viewport=new mt;let F=[P,D],B=new Ll,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=R[Q];return ve===void 0&&(ve=new vr,R[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=R[Q];return ve===void 0&&(ve=new vr,R[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=R[Q];return ve===void 0&&(ve=new vr,R[Q]=ve),ve.getHandSpace()};function Z(Q){let ve=w.indexOf(Q.inputSource);if(ve===-1)return;let Te=R[ve];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,h||a),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}l(Z,"onSessionEvent");function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<R.length;Q++){let ve=w[Q];ve!==null&&(w[Q]=null,R[Q].disconnect(ve))}I=null,k=null,_.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(C),m=null,d=null,p=null,s=null,T=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(f.width,f.height,!1),N!==null){let Q=N.camera;Q.fov=N.fov,Q.zoom=N.zoom,Q.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}l(H,"onSessionEnd"),this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",re),E.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(f),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Le=null,ye=null;E.depth&&(ye=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=E.stencil?wi:yi,Le=E.stencil?As:Gn);let Ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new dn(d.textureWidth,d.textureHeight,{format:Hn,type:rn,depthTexture:new bi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new dn(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(Q){for(let ve=0;ve<Q.removed.length;ve++){let Te=Q.removed[ve],Le=w.indexOf(Te);Le>=0&&(w[Le]=null,R[Le].disconnect(Te))}for(let ve=0;ve<Q.added.length;ve++){let Te=Q.added[ve],Le=w.indexOf(Te);if(Le===-1){for(let Ge=0;Ge<R.length;Ge++)if(Ge>=w.length){w.push(Te),Le=Ge;break}else if(w[Ge]===null){w[Ge]=Te,Le=Ge;break}if(Le===-1)break}let ye=R[Le];ye&&ye.connect(Te)}}l(re,"onInputSourcesChange");function q(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}l(q,"updateCamera"),this.updateCamera=function(Q){if(s===null)return;let ve=Q.near,Te=Q.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),B.near=D.near=P.near=ve,B.far=D.far=P.far=Te,(I!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=Q.layers.mask|6,P.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Le=Q.parent,ye=B.cameras;q(B,Le);for(let Ge=0;Ge<ye.length;Ge++)q(ye[Ge],Le);B.projectionMatrix.copy(P.projectionMatrix),B.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Q.isPerspectiveCamera&&(N={camera:Q,fov:Q.fov,zoom:Q.zoom}),te(Q,B,Le)};function te(Q,ve,Te){Te===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ul*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}l(te,"updateUserCamera"),this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(Q){return g[Q]};let ie=null;function Ee(Q,ve){if(u=ve.getViewerPose(h||a),x=ve,u!==null){let Te=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Le=!1;Te.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let Ue=0;Ue<Te.length;Ue++){let Je=Te[Ue],tt=null;if(m!==null)tt=m.getViewport(Je);else{let vt=p.getViewSubImage(d,Je);tt=vt.viewport,Ue===0&&(e.setRenderTargetTextures(T,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(T))}let qe=F[Ue];qe===void 0&&(qe=new jt,qe.layers.enable(Ue),qe.viewport=new mt,F[Ue]=qe),qe.matrix.fromArray(Je.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Je.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ue===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(qe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Ue=p.getDepthInformation(Te[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(Ue,s.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Ue=0;Ue<Te.length;Ue++){let Je=Te[Ue].camera;if(Je){let tt=g[Je];tt||(tt=new wa,g[Je]=tt);let qe=p.getCameraImage(Je);tt.sourceTexture=qe}}}}for(let Te=0;Te<R.length;Te++){let Le=w[Te],ye=R[Te];Le!==null&&ye!==void 0&&ye.update(Le,ve,h||a)}ie&&ie(Q,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),x=null}l(Ee,"onAnimationFrame");let ke=new Vm;ke.setAnimationLoop(Ee),this.setAnimationLoop=function(Q){ie=Q},this.dispose=function(){}}};l(sf,"WebXRManager");var Zd=sf,ob=new lt,Qm=new Ve;Qm.set(-1,0,0,0,1,0,0,0,1);function lb(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}l(t,"refreshTransformUniform");function n(_,g){g.color.getRGB(_.fogColor.value,Su(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}l(n,"refreshFogUniforms");function s(_,g,E,C,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),p(_,g)):g.isMeshPhongMaterial?(r(_,g),u(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&m(_,g,T)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),S(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,E,C):g.isSpriteMaterial?h(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===tn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===tn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let E=e.get(g),C=E.envMap,T=E.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(ob.makeRotationFromEuler(T)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Qm),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}l(r,"refreshUniformsCommon");function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}l(a,"refreshUniformsLine");function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}l(o,"refreshUniformsDash");function c(_,g,E,C){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*E,_.scale.value=C*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}l(c,"refreshUniformsPoints");function h(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}l(h,"refreshUniformsSprites");function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}l(u,"refreshUniformsPhong");function p(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}l(p,"refreshUniformsToon");function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}l(d,"refreshUniformsStandard");function m(_,g,E){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}l(x,"refreshUniformsMatcap");function S(_,g){let E=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return l(S,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(lb,"WebGLMaterials");function cb(i,e,t,n){let s={},r={};function a(E,C){let T=C.program;n.uniformBlockBinding(E,T,s[E.id])}l(a,"bind");function o(E,C){let T=s[E.id];T===void 0&&(x(E),T=c(E),s[E.id]=T,E.addEventListener("dispose",_));let R=C.program;n.updateUBOMapping(E,R);let w=e.render.frame;r[E.id]!==w&&(h(E),r[E.id]=w)}l(o,"update");function c(E){let C=i.createBuffer(),T=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),C}l(c,"createBuffer");function h(E){let C=s[E.id],T=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let w=0,f=T.length;w<f;w++){let M=T[w];if(Array.isArray(M))for(let N=0,P=M.length;N<P;N++)u(M[N],w,N,R);else u(M,w,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(h,"updateBufferData");function u(E,C,T,R){if(d(E,C,T,R)===!0){let w=E.__offset,f=E.value;if(Array.isArray(f)){let M=0;for(let N=0;N<f.length;N++){let P=f[N],D=S(P,!0);p(P,E.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(f,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,E.__data)}}l(u,"updateUniform");function p(E,C,T){typeof E=="number"||typeof E=="boolean"?C[T]=E:E.isMatrix3?(C[T]=E.elements[0],C[T+1]=E.elements[1],C[T+2]=E.elements[2],C[T+3]=0,C[T+4]=E.elements[3],C[T+5]=E.elements[4],C[T+6]=E.elements[5],C[T+7]=0,C[T+8]=E.elements[6],C[T+9]=E.elements[7],C[T+10]=E.elements[8],C[T+11]=0):ArrayBuffer.isView(E)?C.set(E.subarray(0,C.length-T),T):E.toArray(C,T)}l(p,"writeUniformValue");function d(E,C,T,R){let w=E.value,f=C+"_"+T;if(Array.isArray(w)){R[f]===void 0&&(R[f]=[]);let M=R[f],N=!1;for(let P=0;P<w.length;P++)m(w[P],M,P)===!0&&(N=!0);return N}return m(w,R,f)}l(d,"hasUniformChanged");function m(E,C,T){if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:ArrayBuffer.isView(E)?C[T]=E.slice():C[T]=E.clone(),!0;{let R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(R.equals(E)===!1)return R.copy(E),!0}}return!1}l(m,"hasValueChanged");function x(E){let C=E.uniforms,T=0,R=16;for(let f=0,M=C.length;f<M;f++){let N=Array.isArray(C[f])?C[f]:[C[f]];for(let P=0,D=N.length;P<D;P++){let F=N[P],B=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(C[f])||Array.isArray(F.value),k=T;for(let H=0,re=B.length;H<re;H++){let q=B[H],te=S(q,I),ie=T%R,Ee=ie%te.boundary,ke=ie+Ee;T+=Ee,ke!==0&&R-ke<te.storage&&(T+=R-ke),H===0&&(k=T),T+=te.storage}let Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((T-k)/Float32Array.BYTES_PER_ELEMENT),F.__offset=k}}let w=T%R;return w>0&&(T+=R-w),E.__size=T,E.__cache={},this}l(x,"prepareUniformsGroup");function S(E,C){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=16,T.storage=48):E.isMatrix4?(T.boundary=16,T.storage=64):E.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(T.boundary=16,T.storage=E.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",E),C===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}l(S,"getUniformSize");function _(E){let C=E.target;C.removeEventListener("dispose",_),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}l(_,"onUniformsGroupsDispose");function g(){for(let E in s)i.deleteBuffer(s[E]);s={},r={}}return l(g,"dispose"),{bind:a,update:o,dispose:g}}l(cb,"WebGLUniformsGroups");var hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function ub(){return ii===null&&(ii=new br(hb,16,16,ni,mn),ii.name="DFG_LUT",ii.minFilter=Ft,ii.magFilter=Ft,ii.wrapS=Tn,ii.wrapT=Tn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}l(ub,"getDFGLUT");var rf=class rf{constructor(e={}){let{canvas:t=hm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=rn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=m,_=new Set([sc,ic,nc]),g=new Set([rn,Gn,Cr,As,ec,tc]),E=new Uint32Array(4),C=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},R=null,w=null,f=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,F=null,B=null,I=null,k=null;this._outputColorSpace=Nt;let Z=0,H=0,re=null,q=-1,te=null,ie=new mt,Ee=new mt,ke=null,Q=new Ne(0),ve=0,Te=t.width,Le=t.height,ye=1,Ge=null,dt=null,Ue=new mt(0,0,Te,Le),Je=new mt(0,0,Te,Le),tt=!1,qe=new Yi,vt=new _l,_t=!1,Et=!1,at=new lt,ln=new z,Pt=new mt,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bn=!1;function Sn(){return re===null?ye:1}l(Sn,"getTargetPixelRatio");let O=n;function wn(b,U){return t.getContext(b,U)}l(wn,"getContext");let ft,pt,_e,Tt,Fe,He,A,y,V,ae,ne,he,me,$,j,de,L,ee,J,fe,le,ue,Ie;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let U="webgl2";if(O=wn(U,b),O===null)throw wn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(b){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ze("WebGLRenderer: "+b.message),b}function Ye(){ft=new by(O),ft.init(),le=new sb(O,ft),pt=new uy(O,ft,e,le),_e=new nb(O,ft),pt.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),k=O.createFramebuffer(),Tt=new Ey(O),Fe=new VM,He=new ib(O,ft,_e,Fe,pt,le,Tt),A=new My(P),y=new A_(O),ue=new cy(O,y),V=new Sy(O,y,Tt,ue),ae=new Ay(O,V,y,ue,Tt),ee=new Ty(O,pt,He),j=new dy(Fe),ne=new GM(P,A,ft,pt,ue,j),he=new lb(P,Fe),me=new WM,$=new $M(ft),L=new ly(P,A,_e,ae,x,c),de=new tb(P,ae,pt),Ie=new cb(O,Tt,pt,_e),J=new hy(O,ft,Tt),fe=new wy(O,ft,Tt),Tt.programs=ne.programs,P.capabilities=pt,P.extensions=ft,P.properties=Fe,P.renderLists=me,P.shadowMap=de,P.state=_e,P.info=Tt}l(Ye,"initGLContext"),S!==rn&&(N=new Ry(S,t.width,t.height,o,s,r));let oe=new Zd(P,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(b){b!==void 0&&(ye=b,this.setSize(Te,Le,!1))},this.getSize=function(b){return b.set(Te,Le)},this.setSize=function(b,U,X=!0){if(oe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=b,Le=U,t.width=Math.floor(b*ye),t.height=Math.floor(U*ye),X===!0&&(t.style.width=b+"px",t.style.height=U+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Te*ye,Le*ye).floor()},this.setDrawingBufferSize=function(b,U,X){Te=b,Le=U,ye=X,t.width=Math.floor(b*X),t.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(S===rn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Ue)},this.setViewport=function(b,U,X,G){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,U,X,G),_e.viewport(ie.copy(Ue).multiplyScalar(Sn()).round())},this.getScissor=function(b){return b.copy(Je)},this.setScissor=function(b,U,X,G){b.isVector4?Je.set(b.x,b.y,b.z,b.w):Je.set(b,U,X,G),_e.scissor(Ee.copy(Je).multiplyScalar(Sn()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){_e.setScissorTest(tt=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,X=!0){let G=0;if(b){let W=!1;if(re!==null){let ge=re.texture.format;W=_.has(ge)}if(W){let ge=re.texture.type,Ae=g.has(ge),pe=L.getClearColor(),Se=L.getClearAlpha(),Pe=pe.r,We=pe.g,$e=pe.b;Ae?(E[0]=Pe,E[1]=We,E[2]=$e,E[3]=Se,O.clearBufferuiv(O.COLOR,0,E)):(C[0]=Pe,C[1]=We,C[2]=$e,C[3]=Se,O.clearBufferiv(O.COLOR,0,C))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),L.dispose(),me.dispose(),$.dispose(),He.dispose(),Fe.dispose(),A.dispose(),ae.dispose(),V.dispose(),ue.dispose(),Ie.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",qf),oe.removeEventListener("sessionend",Yf),fs.stop()};function De(b){b.preventDefault(),fa("WebGLRenderer: Context Lost."),D=!0}l(De,"onContextLost");function Xe(){fa("WebGLRenderer: Context Restored."),D=!1;let b=Tt.autoReset,U=de.enabled,X=de.autoUpdate,G=de.needsUpdate,W=de.type;Ye(),Tt.autoReset=b,de.enabled=U,de.autoUpdate=X,de.needsUpdate=G,de.type=W}l(Xe,"onContextRestore");function be(b){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}l(be,"onContextCreationError");function rt(b){let U=b.target;U.removeEventListener("dispose",rt),It(U)}l(rt,"onMaterialDispose");function It(b){Ni(b),Fe.remove(b)}l(It,"deallocateMaterial");function Ni(b){let U=Fe.get(b).programs;U!==void 0&&(U.forEach(function(X){ne.releaseProgram(X)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}l(Ni,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(b,U,X,G,W,ge){U===null&&(U=Mn);let Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=Tg(b,U,X,G,W);_e.setMaterial(G,Ae);let Se=X.index,Pe=1;if(G.wireframe===!0){if(Se=V.getWireframeAttribute(X),Se===void 0)return;Pe=2}let We=X.drawRange,$e=X.attributes.position,Ce=We.start*Pe,Ke=(We.start+We.count)*Pe;ge!==null&&(Ce=Math.max(Ce,ge.start*Pe),Ke=Math.min(Ke,(ge.start+ge.count)*Pe)),Se!==null?(Ce=Math.max(Ce,0),Ke=Math.min(Ke,Se.count)):$e!=null&&(Ce=Math.max(Ce,0),Ke=Math.min(Ke,$e.count));let bt=Ke-Ce;if(bt<0||bt===1/0)return;ue.setup(W,G,pe,X,Se);let ht,ot=J;if(Se!==null&&(ht=y.get(Se),ot=fe,ot.setIndex(ht)),W.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Sn()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(W.isLine){let Wt=G.linewidth;Wt===void 0&&(Wt=1),_e.setLineWidth(Wt*Sn()),W.isLineSegments?ot.setMode(O.LINES):W.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else W.isPoints?ot.setMode(O.POINTS):W.isSprite&&ot.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Wt=W._multiDrawStarts,Re=W._multiDrawCounts,Kt=W._multiDrawCount,nt=Se?y.get(Se).bytesPerElement:1,ps=Fe.get(G).currentProgram.getUniforms();for(let Xt=0;Xt<Kt;Xt++)ps.setValue(O,"_gl_DrawID",Xt),ot.render(Wt[Xt]/nt,Re[Xt])}else if(W.isInstancedMesh)ot.renderInstances(Ce,bt,W.count);else if(X.isInstancedBufferGeometry){let Wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,Wt);ot.renderInstances(Ce,bt,Re)}else ot.render(Ce,bt)};function Xf(b,U,X,G){F!==null&&b.isNodeMaterial&&F.setObject(G,b),_t===!0&&j.setState(b,X,!1),b.transparent===!0&&b.side===ei&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,jr(b,U,G),b.side=es,b.needsUpdate=!0,jr(b,U,G),b.side=ei):jr(b,U,G)}l(Xf,"prepareMaterial"),this.compile=function(b,U,X=null){X===null&&(X=b),F!==null&&F.renderStart(b,U,X),w=$.get(X),w.init(U),M.push(w),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==X&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Et=this.localClippingEnabled,_t=j.init(this.clippingPlanes,Et),_t===!0&&j.setGlobalState(this.clippingPlanes,U),F!==null&&de.render(w.state.shadowsArray,X,U);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){let pe=ge[Ae];Xf(pe,X,U,W),G.add(pe)}else Xf(ge,X,U,W),G.add(ge)}),w=M.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(b,U,X=null){let G=this.compile(b,U,X);return new Promise(W=>{function ge(){if(G.forEach(function(Ae){let Se=Fe.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&G.delete(Ae)}),G.size===0){W(b);return}setTimeout(ge,10)}l(ge,"checkMaterialsReady"),ft.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ph=null;function wg(b){ph&&ph(b)}l(wg,"onAnimationFrame");function qf(){fs.stop()}l(qf,"onXRSessionStart");function Yf(){fs.start()}l(Yf,"onXRSessionEnd");let fs=new Vm;fs.setAnimationLoop(wg),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(b){ph=b,oe.setAnimationLoop(b),b===null?fs.stop():fs.start()},oe.addEventListener("sessionstart",qf),oe.addEventListener("sessionend",Yf),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,U);let X=oe.enabled===!0&&oe.isPresenting===!0,G=N!==null&&(re===null||X)&&N.begin(P,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,re),w=$.get(b,M.length),w.init(U),w.state.textureUnits=He.getTextureUnits(),M.push(w),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?vt.setFromArrayCamera(U):qe.setFromProjectionMatrix(at,An,U.reversedDepth),Et=this.localClippingEnabled,_t=j.init(this.clippingPlanes,Et),R=me.get(b,f.length),R.init(),f.push(R),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Ae=P.xr.getDepthSensingMesh();Ae!==null&&mh(Ae,U,-1/0,P.sortObjects)}mh(b,U,0,P.sortObjects),R.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&R.sort(Ge,dt),bn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,bn&&L.addToRenderList(R,b),this.info.autoReset===!0&&this.info.reset(),_t===!0&&j.beginShadows();let W=w.state.shadowsArray;if(de.render(W,b,U),_t===!0&&j.endShadows(),(G&&N.hasRenderPass())===!1){let Ae=R.opaque,pe=R.transmissive;if(w.setupLights(),U.isArrayCamera){let Se=U.cameras;if(pe.length>0)for(let Pe=0,We=Se.length;Pe<We;Pe++){let $e=Se[Pe];Jf(Ae,pe,b,$e)}bn&&L.render(b);for(let Pe=0,We=Se.length;Pe<We;Pe++){let $e=Se[Pe];Zf(R,b,$e,$e.viewport)}}else pe.length>0&&Jf(Ae,pe,b,U),bn&&L.render(b),Zf(R,b,U)}re!==null&&H===0&&(He.updateMultisampleRenderTarget(re),He.updateRenderTargetMipmap(re)),G&&N.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),ue.resetDefaultState(),q=-1,te=null,M.pop(),M.length>0?(w=M[M.length-1],He.setTextureUnits(w.state.textureUnits),_t===!0&&j.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,f.pop(),f.length>0?R=f[f.length-1]:R=null,F!==null&&F.renderEnd()};function mh(b,U,X,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ae=U.isArrayCamera?vt:qe;if(!b.frustumCulled||b.intersectsFrustum(Ae)){G&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);let pe=ae.update(b),Se=b.material;Se.visible&&R.push(b,pe,Se,X,Pt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Ae=U.isArrayCamera?vt:qe;if(!b.frustumCulled||b.intersectsFrustum(Ae)){let pe=ae.update(b),Se=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pt.copy(pe.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(Se)){let Pe=pe.groups;for(let We=0,$e=Pe.length;We<$e;We++){let Ce=Pe[We],Ke=Se[Ce.materialIndex];Ke&&Ke.visible&&R.push(b,pe,Ke,X,Pt.z,Ce,U)}}else Se.visible&&R.push(b,pe,Se,X,Pt.z,null,U)}}}let ge=b.children;for(let Ae=0,pe=ge.length;Ae<pe;Ae++)mh(ge[Ae],U,X,G)}l(mh,"projectObject");function Zf(b,U,X,G){let{opaque:W,transmissive:ge,transparent:Ae}=b;w.setupLightsView(X),_t===!0&&j.setGlobalState(P.clippingPlanes,X),G&&_e.viewport(ie.copy(G)),W.length>0&&Co(W,U,X),ge.length>0&&Co(ge,U,X),Ae.length>0&&Co(Ae,U,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}l(Zf,"renderScene");function Jf(b,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Ce=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new dn(1,1,{generateMipmaps:!0,type:Ce?mn:rn,minFilter:Si,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let ge=w.state.transmissionRenderTarget[G.id],Ae=G.viewport||ie;ge.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);let pe=P.getRenderTarget(),Se=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(Q),ve=P.getClearAlpha(),ve<1&&P.setClearColor(16777215,.5),P.clear(),bn&&L.render(X);let We=P.toneMapping;P.toneMapping=ti;let $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),_t===!0&&j.setGlobalState(P.clippingPlanes,G),Co(b,X,G),He.updateMultisampleRenderTarget(ge),He.updateRenderTargetMipmap(ge),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ke=0,bt=U.length;Ke<bt;Ke++){let ht=U[Ke],{object:ot,geometry:Wt,material:Re,group:Kt}=ht;if(Re.side===ei&&ot.layers.test(G.layers)){let nt=Re.side;Re.side=tn,Re.needsUpdate=!0,$f(ot,X,G,Wt,Re,Kt),Re.side=nt,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(He.updateMultisampleRenderTarget(ge),He.updateRenderTargetMipmap(ge))}P.setRenderTarget(pe,Se,Pe),P.setClearColor(Q,ve),$e!==void 0&&(G.viewport=$e),P.toneMapping=We}l(Jf,"renderTransmissionPass");function Co(b,U,X){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ge=b.length;W<ge;W++){let Ae=b[W],{object:pe,geometry:Se,group:Pe}=Ae,We=Ae.material;We.allowOverride===!0&&G!==null&&(We=G),pe.layers.test(X.layers)&&$f(pe,U,X,Se,We,Pe)}}l(Co,"renderObjects");function $f(b,U,X,G,W,ge){F!==null&&W.isNodeMaterial&&F.setObject(b,W),b.onBeforeRender(P,U,X,G,W,ge),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(P,U,X,G,b,ge),W.transparent===!0&&W.side===ei&&W.forceSinglePass===!1?(W.side=tn,W.needsUpdate=!0,P.renderBufferDirect(X,U,G,W,b,ge),W.side=es,W.needsUpdate=!0,P.renderBufferDirect(X,U,G,W,b,ge),W.side=ei):P.renderBufferDirect(X,U,G,W,b,ge),b.onAfterRender(P,U,X,G,W,ge)}l($f,"renderObject");function Kf(b){let U=0;for(let X of b)X.texture!==null&&U++;return U}l(Kf,"countLightProbeGrids");function jr(b,U,X){U.isScene!==!0&&(U=Mn);let G=Fe.get(b),W=w.state.lights,ge=w.state.shadowsArray,Ae=W.state.version,pe=ne.getParameters(b,W.state,ge,U,X,w.state.lightProbeGridArray),Se=ne.getProgramCacheKey(pe),Pe=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=A.get(b.envMap||G.environment,We),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",rt),Pe=new Map,G.programs=Pe,G.programVariants=new Map);let $e=Pe.get(Se);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===Ae)return jf(b,pe),$e}else pe.uniforms=ne.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,X,pe),b.onBeforeCompile(pe,P),$e=ne.acquireProgram(pe,Se),Pe.set(Se,$e),G.uniforms=pe.uniforms;let Ce=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=j.uniform),jf(b,pe),G.needsLights=Cg(b),G.lightsStateVersion=Ae,G.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.sunLights.value=W.state.sun,Ce.sunLightShadows.value=W.state.sunShadow,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.sunShadowMatrix.value=W.state.sunShadowMatrix,Ce.sunShadowCascade.value=W.state.sunShadowCascade,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Kf(w.state.lightProbeGridArray),G.currentProgram=$e,G.uniformsList=null,$e}l(jr,"getProgram");function Eg(b,U,X,G,W){let ge=Fe.get(b),Ae=ge.currentProgram.id+","+G+","+W,pe=ge.programVariants.get(Ae);return pe===void 0?(pe=jr(b,U,X),ge.programVariants.set(Ae,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=G,ge.toneMapping=W),pe}l(Eg,"getProgramVariant");function Qf(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}l(Qf,"getUniformList");function jf(b,U){let X=Fe.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}l(jf,"updateCommonMaterialProperties");function Tg(b,U,X,G,W){U.isScene!==!0&&(U=Mn),He.resetTextureUnits();let ge=U.fog,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,pe=re===null?P.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Qe.workingColorSpace,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Pe=A.get(G.envMap||Ae,Se),We=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,bt=!!X.morphAttributes.color,ht=ti;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=P.toneMapping);let ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Wt=ot!==void 0?ot.length:0,Re=Fe.get(G),Kt=w.state.lights;if(_t===!0&&(Et===!0||b!==te)){let xt=b===te&&G.id===q;j.setState(G,b,xt)}let nt=!1,ps=!1;G.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Kt.state.version||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Pe||G.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==j.numPlanes||Re.numIntersection!==j.numIntersection)||Re.vertexAlphas!==We||Re.vertexTangents!==$e||Re.morphTargets!==Ce||Re.morphNormals!==Ke||Re.morphColors!==bt||Re.morphTargetsCount!==Wt||Re.numLightProbeGrids!==Kf(w.state.lightProbeGridArray)?nt=!0:(Re.outputColorSpace!==pe||Re.toneMapping!==ht)&&(ps=!0):(nt=!0,Re.__version=G.version);let Xt=Re.currentProgram;(nt===!0||ps===!0)&&(Xt=ps===!0?Eg(G,U,W,pe,ht):jr(G,U,W),F&&G.isNodeMaterial&&F.onUpdateProgram(G,Xt,Re));let Ro=!1,Ui=!1,ms=!1,et=Xt.getUniforms(),kt=Re.uniforms;if(_e.useProgram(Xt.program)&&(Ro=!0,Ui=!0,ms=!0),G.id!==q&&(q=G.id,Ui=!0),Ro||te!==b){_e.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),et.setValue(O,"projectionMatrix",b.projectionMatrix),et.setValue(O,"viewMatrix",b.matrixWorldInverse);let Lt=et.map.cameraPosition;Lt!==void 0&&Lt.setValue(O,ln.setFromMatrixPosition(b.matrixWorld)),pt.logarithmicDepthBuffer&&et.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&et.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,Ui=!0,ms=!0)}if(Re.needsLights&&(Kt.state.sunShadowMap.length>0&&et.setValue(O,"sunShadowMap",Kt.state.sunShadowMap,He),Kt.state.directionalShadowMap.length>0&&et.setValue(O,"directionalShadowMap",Kt.state.directionalShadowMap,He),Kt.state.spotShadowMap.length>0&&et.setValue(O,"spotShadowMap",Kt.state.spotShadowMap,He),Kt.state.pointShadowMap.length>0&&et.setValue(O,"pointShadowMap",Kt.state.pointShadowMap,He)),W.isSkinnedMesh){et.setOptional(O,W,"bindMatrix"),et.setOptional(O,W,"bindMatrixInverse");let xt=W.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),et.setValue(O,"boneTexture",xt.boneTexture,He))}W.isBatchedMesh&&(et.setOptional(O,W,"batchingTexture"),et.setValue(O,"batchingTexture",W._matricesTexture,He),et.setOptional(O,W,"batchingIdTexture"),et.setValue(O,"batchingIdTexture",W._indirectTexture,He),et.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&et.setValue(O,"batchingColorTexture",W._colorsTexture,He));let Un=X.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ee.update(W,X,Xt),(Ui||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,et.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(kt.envMapIntensity.value=U.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=ub()),Ui){if(et.setValue(O,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&Ag(kt,ms),ge&&G.fog===!0&&he.refreshFogUniforms(kt,ge),he.refreshMaterialUniforms(kt,G,ye,Le,w.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.numLightProbeGrids>0){let xt=T,Lt=0;for(let ui of w.state.lightProbeGridArray)ui.texture!==null&&(xt.textures[Lt]=ui.texture,xt.min[Lt]=ui.boundingBox.min,xt.max[Lt]=ui.boundingBox.max,xt.resolution[Lt]=ui.resolution,Lt++);for(let ui in xt)xt[ui].length=Lt;kt.probesSH.value=xt.textures,kt.probesMin.value=xt.min,kt.probesMax.value=xt.max,kt.probesResolution.value=xt.resolution}Rr.upload(O,Qf(Re),kt,He)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rr.upload(O,Qf(Re),kt,He),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&et.setValue(O,"center",W.center),et.setValue(O,"modelViewMatrix",W.modelViewMatrix),et.setValue(O,"normalMatrix",W.normalMatrix),et.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let xt=G.uniformsGroups;for(let Lt=0,ui=xt.length;Lt<ui;Lt++){let tp=xt[Lt];Ie.update(tp,Xt),Ie.bind(tp,Xt)}}return Xt}l(Tg,"setProgram");function Ag(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}l(Ag,"markUniformsLightsNeedsUpdate");function Cg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}l(Cg,"materialNeedsLights"),this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,U,X){let G=Fe.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Fe.get(b.texture).__webglTexture=U,Fe.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let X=Fe.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,X=0){re=b,Z=U,H=X;let G=null,W=!1,ge=!1;if(b){let pe=Fe.get(b);if(pe.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(b.viewport),Ee.copy(b.scissor),ke=b.scissorTest,_e.viewport(ie),_e.scissor(Ee),_e.setScissorTest(ke),q=-1;return}else if(pe.__webglFramebuffer===void 0)He.setupRenderTarget(b);else if(pe.__hasExternalTextures)He.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let We=b.depthTexture;if(pe.__boundDepthTexture!==We){if(We!==null&&Fe.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(b)}}let Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Pe=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?G=Pe[U][X]:G=Pe[U],W=!0):b.samples>0&&He.useMultisampledRTT(b)===!1?G=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[X]:G=Pe,ie.copy(b.viewport),Ee.copy(b.scissor),ke=b.scissorTest}else ie.copy(Ue).multiplyScalar(ye).floor(),Ee.copy(Je).multiplyScalar(ye).floor(),ke=tt;if(X!==0&&(G=B),_e.bindFramebuffer(O.FRAMEBUFFER,G)&&_e.drawBuffers(b,G),_e.viewport(ie),_e.scissor(Ee),_e.setScissorTest(ke),W){let pe=Fe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(ge){let pe=U;for(let Se=0;Se<b.textures.length;Se++){let Pe=Fe.get(b.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,X,pe)}}else if(b!==null&&X!==0){let pe=Fe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,X)}q=-1};function ep(b){let U=Fe.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=pt.textureFormatReadable(b.format),U.__typeReadable=pt.textureTypeReadable(b.type)),U}l(ep,"getReadableState"),this.readRenderTargetPixels=function(b,U,X,G,W,ge,Ae,pe=0){if(!(b&&b.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){_e.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Pe=b.textures[pe],We=Pe.format,$e=Pe.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Ce=ep(Pe);if(Ce.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&X>=0&&X<=b.height-W&&O.readPixels(U,X,G,W,le.convert(We),le.convert($e),ge)}finally{let Pe=re!==null?Fe.get(re).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,U,X,G,W,ge,Ae,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(U>=0&&U<=b.width-G&&X>=0&&X<=b.height-W){_e.bindFramebuffer(O.FRAMEBUFFER,Se);let Pe=b.textures[pe],We=Pe.format,$e=Pe.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Ce=ep(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(U,X,G,W,le.convert(We),le.convert($e),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let bt=re!==null?Fe.get(re).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,bt);let ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dm(O,ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ke),O.deleteSync(ht),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,X=0){let G=Math.pow(2,-X),W=Math.floor(b.image.width*G),ge=Math.floor(b.image.height*G),Ae=U!==null?U.x:0,pe=U!==null?U.y:0;He.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Ae,pe,W,ge),_e.unbindTexture()},this.copyTextureToTexture=function(b,U,X=null,G=null,W=0,ge=0){let Ae,pe,Se,Pe,We,$e,Ce,Ke,bt,ht=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(X!==null)Ae=X.max.x-X.min.x,pe=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,We=X.min.y,$e=X.isBox3?X.min.z:0;else{let et=Math.pow(2,-W);Ae=Math.floor(ht.width*et),pe=Math.floor(ht.height*et),b.isDataArrayTexture?Se=ht.depth:b.isData3DTexture?Se=Math.floor(ht.depth*et):Se=1,Pe=0,We=0,$e=0}G!==null?(Ce=G.x,Ke=G.y,bt=G.z):(Ce=0,Ke=0,bt=0);let ot=le.convert(U.format),Wt=le.convert(U.type),Re;U.isData3DTexture?(He.setTexture3D(U,0),Re=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Re=O.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Re=O.TEXTURE_2D),_e.activeTexture(O.TEXTURE0),_e.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),_e.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_e.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Kt=_e.getParameter(O.UNPACK_ROW_LENGTH),nt=_e.getParameter(O.UNPACK_IMAGE_HEIGHT),ps=_e.getParameter(O.UNPACK_SKIP_PIXELS),Xt=_e.getParameter(O.UNPACK_SKIP_ROWS),Ro=_e.getParameter(O.UNPACK_SKIP_IMAGES);_e.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),_e.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),_e.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),_e.pixelStorei(O.UNPACK_SKIP_ROWS,We),_e.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);let Ui=b.isDataArrayTexture||b.isData3DTexture,ms=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let et=Fe.get(b),kt=Fe.get(U),Un=Fe.get(et.__renderTarget),xt=Fe.get(kt.__renderTarget);_e.bindFramebuffer(O.READ_FRAMEBUFFER,Un.__webglFramebuffer),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Lt=0;Lt<Se;Lt++)Ui&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(b).__webglTexture,W,$e+Lt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(U).__webglTexture,ge,bt+Lt)),O.blitFramebuffer(Pe,We,Pe+Ae,We+pe,Ce,Ke,Ce+Ae,Ke+pe,O.DEPTH_BUFFER_BIT,O.NEAREST);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Fe.has(b)){let et=Fe.get(b),kt=Fe.get(U);_e.bindFramebuffer(O.READ_FRAMEBUFFER,I),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Un=0;Un<Se;Un++)Ui?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,et.__webglTexture,W,$e+Un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,et.__webglTexture,W),ms?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,ge,bt+Un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kt.__webglTexture,ge),W!==0?O.blitFramebuffer(Pe,We,Pe+Ae,We+pe,Ce,Ke,Ce+Ae,Ke+pe,O.COLOR_BUFFER_BIT,O.NEAREST):ms?O.copyTexSubImage3D(Re,ge,Ce,Ke,bt+Un,Pe,We,Ae,pe):O.copyTexSubImage2D(Re,ge,Ce,Ke,Pe,We,Ae,pe);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ms?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Re,ge,Ce,Ke,bt,Ae,pe,Se,ot,Wt,ht.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,ge,Ce,Ke,bt,Ae,pe,Se,ot,ht.data):O.texSubImage3D(Re,ge,Ce,Ke,bt,Ae,pe,Se,ot,Wt,ht):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Ce,Ke,Ae,pe,ot,Wt,ht.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Ce,Ke,ht.width,ht.height,ot,ht.data):O.texSubImage2D(O.TEXTURE_2D,ge,Ce,Ke,Ae,pe,ot,Wt,ht);_e.pixelStorei(O.UNPACK_ROW_LENGTH,Kt),_e.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt),_e.pixelStorei(O.UNPACK_SKIP_PIXELS,ps),_e.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),_e.pixelStorei(O.UNPACK_SKIP_IMAGES,Ro),ge===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Re),_e.unbindTexture()},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&He.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?He.setTextureCube(b,0):b.isData3DTexture?He.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?He.setTexture2DArray(b,0):He.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){Z=0,H=0,re=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};l(rf,"WebGLRenderer");var kc=rf;function e0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ot;c.morphTargetsRelative=o;let h=0;for(let u=0;u<i.length;++u){let p=i[u],d=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[x].length!==i[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(p.morphAttributes[x]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,x,u),h+=x}}if(t){let u=0,p=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+u);u+=i[d].attributes.position.count}c.setIndex(p)}for(let u in r){let p=jm(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<p;++d){let m=[];for(let S=0;S<a[u].length;++S)m.push(a[u][S][d]);let x=jm(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}}return c}l(e0,"mergeGeometries");function jm(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new wt(a,t,n),c=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let p=c/t;for(let d=0,m=u.count;d<m;d++)for(let x=0;x<t;x++){let S=u.getComponent(d,x);o.setComponent(d+p,x,S)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}l(jm,"mergeAttributes");var t0="#c79a72",db="#5a4a3a";var Jt="#7a5532",lf="#5f6266",n0="#8a8f96",Wn="#5d6447",af="#e8e0cc",r0="#6e4b2f",Ps="#8a8580",i0="#5b3e27",Ir="#7d858c",fb=new z(0,1,0),Me=new jn(1,1,1),Bt=new Zi(.5,.5,1,10),Is=new bs(.5,1,10),Lr=new Ea(.5,10,8),hf=class hf{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,h]=a.at;this.parts.push({...a,at:[t[0]+o*s+h*r,t[1]+c,t[2]-o*r+h*s],yaw:(a.yaw??0)+n})}),this}};l(hf,"Parts");var zt=hf,pb=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:Lr,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Is,colour:lf,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Me,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Bt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Lr,colour:Wn,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),mb=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Bt,colour:Jt,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Bt,colour:Jt,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Is,colour:lf,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Bt,colour:Jt,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Is,colour:n0,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Me,colour:n0,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Me,colour:Jt,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Bt,colour:Jt,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Me,colour:i==="rifle"?"#3a3a3a":Jt,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Me,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Me,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Bt,colour:Jt,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Bt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),gb={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},cf=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new zt,a=s===void 0?void 0:gb[s],o=a?.coat??(i==="modern"?Wn:t[0]),c=a?.legs??(i==="ancient"?t0:i==="modern"?Wn:db);return n&&(r.add({shape:Me,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Me,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Me,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Me,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Me,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Me,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Lr,colour:t0,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:Lr,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:Lr,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):pb(i,t,r),s==="parachute"&&r.add({shape:Me,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),mb(e,i,t,r),r},"person"),s0=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),of=l((i=r0)=>new zt().add({shape:Me,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Me,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Me,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Me,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Me,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Me,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Me,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),_b=l((i,e,t)=>new zt().addAll(of(),[0,0,0]).add({shape:Me,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(cf(i,e,t,{legs:!1}),[0,.04,0]),"rider"),xb=l(i=>new zt().add({shape:Me,colour:Ps,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Me,colour:Ps,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Bt,colour:Ps,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Me,colour:Ps,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Me,colour:Ps,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Me,colour:Ps,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Me,colour:Ps,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Me,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Me,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),$t=l((i,e=.05)=>({shape:Bt,colour:Jt,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),vb=l((i,e,t)=>{if(e==="chariot")return new zt().addAll(of(),[0,0,.09]).add({shape:Me,colour:Jt,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Me,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add($t([-.042,.035,-.045],.065)).add($t([.042,.035,-.045],.065)).addAll(cf(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new zt().addAll(of(t==="ancient"?"#8a7a64":r0),[0,0,.1]).add({shape:Me,colour:Jt,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Me,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add($t([-.042,.03,-.03])).add($t([.042,.03,-.03])).add($t([-.042,.03,-.09])).add($t([.042,.03,-.09]));return e==="wagon"?n.add({shape:Bt,colour:af,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Me,colour:af,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Me,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Me,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),yb=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new zt().add({shape:Me,colour:Jt,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Me,colour:Jt,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Me,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add($t([-.045,.03,.04],.045)).add($t([.045,.03,.04],.045)).add($t([-.045,.03,-.04],.045)).add($t([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?Wn:lf;return new zt().add({shape:Bt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Me,colour:i==="modern"?Wn:Jt,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Me,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add($t([-.04,.035,0],.07)).add($t([.04,.035,0],.07))},"siege"),Mb=l((i,e,t)=>{if(i==="industrial")return new zt().add({shape:Me,colour:Ir,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Me,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add($t([-.045,.025,.06],.045)).add($t([.045,.025,.06],.045)).add($t([-.045,.025,-.06],.045)).add($t([.045,.025,-.06],.045));let n=new zt().add({shape:Me,colour:Wn,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Me,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Me,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Me,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Me,colour:Wn,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Bt,colour:Wn,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Me,colour:Wn,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),bb=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new zt;switch(i.hull){case"oars":case"sail":{r.add({shape:Me,colour:i0,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:Is,colour:i0,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Me,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:Bt,colour:Jt,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Me,colour:o===0?e[1]:af,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Me,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Me,colour:Jt,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Me,colour:Jt,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Bt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Me,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Me,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Me,colour:Ir,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Me,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Me,colour:Ir,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Me,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Me,colour:i.era==="industrial"?"#4a4a48":Ir,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:Is,colour:i.era==="industrial"?"#4a4a48":Ir,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Me,colour:Ir,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Bt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Me,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Me,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Bt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Me,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),Sb=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new zt().add({shape:Bt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Is,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Me,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Me,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Me,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Me,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),wb=l(i=>new zt().add({shape:Lr,colour:Wn,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Me,colour:Wn,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Me,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Me,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Me,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Eb=l((i,e)=>{let t=e?1.4:1;return new zt().add({shape:Bt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Is,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Me,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Me,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Tb=l((i,e)=>{switch(i.shape){case"foot":{let t=new zt;return s0(i.squad).forEach(([n,s],r)=>t.addAll(cf(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new zt;return s0(i.squad).forEach(([n,s])=>t.addAll(_b(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return xb(e);case"cart":return vb(e,i.cart??"wagon",i.era);case"siege":return yb(i.era,e,i.large===!0);case"vehicle":return Mb(i.era,e,i.large===!0);case"ship":return bb(i,e);case"aircraft":return Sb(i,e);case"helicopter":return wb(e);default:return Eb(e,i.large===!0)}},"figureParts"),Ab=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new lt().compose(new z(...i),new un().setFromAxisAngle(fb,n).multiply(new un().setFromEuler(new kn(...t))),new z(...e)),"partMatrix"),a0=l((i,e)=>{let t=Tb(i,e).parts.map(s=>{let{shape:r,colour:a}=s,o=r.clone(),c=new Ne(a),h=o.getAttribute("position").count,u=new Float32Array(h*3);for(let p=0;p<h;p++)u.set([c.r,c.g,c.b],p*3);return o.applyMatrix4(Ab(s)),o.setAttribute("color",new wt(u,3)),o}),n=e0(t)??new Ot;return t.forEach(s=>s.dispose()),n.computeBoundingBox(),n.computeBoundingSphere(),n},"figureGeometry");var Vt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),qa=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),gn=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),Ya=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),uf=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),o0={Warrior:Vt("ancient","club"),Spearman:Vt("ancient","spear"),Swordman:Vt("ancient","sword"),Archer:Vt("ancient","bow"),Horseman:qa("ancient","spear"),Chariot:uf("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:gn("ancient","oars"),Settlers:uf("ancient","wagon"),Diplomat:Vt("ancient","case",1),Caravan:uf("ancient","goods"),Explorer:Vt("ancient","pack",1),Pikeman:Vt("medieval","pike"),Knight:qa("medieval","lance"),Crusader:qa("medieval","sword"),Fanatic:Vt("medieval","sword"),Sail:gn("medieval","sail"),Musketman:Vt("renaissance","musket"),Dragoon:qa("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:gn("renaissance","sail",!0,1),Galleon:gn("renaissance","sail",!0),Rifleman:Vt("industrial","rifle"),AlpineTrooper:{...Vt("industrial","rifle"),dress:"snow"},Partisan:{...Vt("industrial","rifle"),dress:"irregular"},Cavalry:qa("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Vt("industrial","none",2),Ironclad:gn("industrial","steam",!1,1),Transport:gn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Vt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Vt("modern","rifle"),Paratrooper:{...Vt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:gn("modern","steam",!1,1),Cruiser:gn("modern","steam",!0,2),MissileCruiser:gn("modern","steam",!0,1,!0),Battleship:gn("modern","steam",!0,3),Submarine:gn("modern","submarine"),Carrier:gn("modern","carrier",!0),Fighter:Ya("modern"),StealthFighter:Ya("modern",!1,!0),Bomber:Ya("modern",!0),StealthBomber:Ya("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},l0=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(o0,i)?o0[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?gn("industrial","steam"):e.includes("Air")?Ya("modern"):Vt("ancient","spear")),"unitLook");var c0=1.5,f0=.012,p0="#b5ab98",Cb="#8d8577",m0="#fff4b0",Rb=.04,Wc=.004,df=.018,h0=.01,u0=.022,d0=.03,g0=.03,qc=.002,Pb="#4caf50",Ib="#e0b030",Lb="#d04030",Ls,Ds,Ns,Us,Ti,ff=class ff{constructor(){se(this,Ls,new Map);se(this,Ds,new Map);se(this,Ns,new Map);se(this,Us,new Map);se(this,Ti,null);this.figureMaterial=new $i({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={stand:new Zi(.19,.2,f0,28),bank:new Ss(.22,.014,4,32),ring:new Ss(.23,.018,8,36),building:new jn(1,1,1),roof:new bs(.75,.5,4),wall:new Ss(.36,.025,6,24)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=v(this,Ls).get(n);return s===void 0&&(s=new $i({color:new Ne(e),roughness:.75,metalness:.05,...t?{emissive:new Ne(e),emissiveIntensity:.6}:{}}),v(this,Ls).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=v(this,Ns).get(n);return s===void 0&&(s=a0(e,t),v(this,Ns).set(n,s)),s}plain(e){let t=v(this,Us).get(e);return t===void 0&&(t=new qi({color:new Ne(e),sizeAttenuation:!1,depthTest:!1}),v(this,Us).set(e,t)),t}pointer(){if(v(this,Ti)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=m0,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Sr(e);n.colorSpace=Nt,Y(this,Ti,new qi({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return v(this,Ti)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=v(this,Ds).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",h=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=h,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,h,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,h/2+1));let u=new Sr(a);u.colorSpace=Nt,r=new qi({map:u,sizeAttenuation:!1,depthTest:!1,transparent:!0}),v(this,Ds).set(s,r)}return r}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),v(this,Ns).forEach(e=>e.dispose()),this.figureMaterial.dispose(),v(this,Us).forEach(e=>e.dispose()),v(this,Ti)?.map?.dispose(),v(this,Ti)?.dispose(),v(this,Us).clear(),Y(this,Ti,null),v(this,Ls).forEach(e=>e.dispose()),v(this,Ds).forEach(e=>{e.map?.dispose(),e.dispose()}),v(this,Ls).clear(),v(this,Ds).clear(),v(this,Ns).clear()}};Ls=new WeakMap,Ds=new WeakMap,Ns=new WeakMap,Us=new WeakMap,Ti=new WeakMap,l(ff,"MarkerKit");var Zc=ff,_0=l(i=>{let{r:e,g:t,b:n}=new Ne(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),ts=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),Xc=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),Db=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),Nb=3,Ub=4,Za=l((i,e,t,n,s=Nb)=>{let r=new Ma(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),x0=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return Za(i,e*s,e,t)},"label"),Yc=[0,.36,0],Fb=l((i,e)=>{let t=new sn,{building:n,roof:s,wall:r}=i.geometries,a=i.material(p0),o=i.material(e.colours[0]),c=Math.min(12,2+Math.ceil(e.size/2));for(let h=0;h<c;h++){let u=h/c*Math.PI*2+Xc(e.name,1)*6,p=h===0?0:.12+Xc(e.name,h+2)*.18,d=.07+Xc(e.name,h+20)*.05,m=(h===0?.13:.05)+Xc(e.name,h+40)*.05,x=Math.cos(u)*p,S=Math.sin(u)*p,_=new gt(n,a),g=new gt(s,o);_.scale.set(d,m,d),_.position.set(x,m/2,S),g.scale.set(d,d*.8,d),g.position.set(x,m+d*.2,S),g.rotation.y=Math.PI/4,t.add(_,g)}if(e.walled){let h=new gt(r,i.material(Cb));h.rotation.x=Math.PI/2,h.position.y=.02,h.scale.set(1,1,2.5),t.add(h)}return t.add(ts(x0(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],_0(e.colours[0])),g0,0),...Yc)),t},"drawCity"),Ob=l((i,e,t=null)=>{let n=new sn,{stand:s,bank:r,ring:a}=i.geometries,o=l0(e.type,e.kinds),c=o.shape==="ship",h=c?0:f0,u=i.figure(o,e.colours),p=h+(u.boundingBox?.max.y??.2)*c0,d=t?.at??[0,p+Rb,0],m=e.health!==null,x=(t?.over??0)+(m?Wc+qc:0),S=x+h0+qc,_=Db(e),g=S+(_===""?0:u0+qc);c||n.add(ts(new gt(s,i.material(e.colours[1])),0,h/2,0));let E=new gt(u,i.figureMaterial);if(E.scale.setScalar(c0),n.add(ts(E,0,h,0)),e.fortified){let C=new gt(r,i.material(p0));C.rotation.x=Math.PI/2,C.scale.set(1,1,2.5),C.position.y=h+.015,n.add(C)}if(e.health!==null){let C=Math.max(0,Math.min(1,e.health));if(n.add(ts(Za(i.plain("#202020"),df,Wc,t?.over??0),...d)),C>0){let T=Za(i.plain(C>.5?Pb:C>.25?Ib:Lb),df*C,Wc*.6,(t?.over??0)+Wc*.2);T.center.x=1/(2*C),n.add(ts(T,...d))}}if(n.add(ts(Za(i.plain(e.colours[0]),df,h0,x),...d)),_!==""&&n.add(ts(x0(i.label(_,e.colours[0],_0(e.colours[0])),u0,S),...d)),e.active){let C=new gt(a,i.material(m0,!0));C.rotation.x=Math.PI/2,C.position.y=.01,n.add(C,ts(Za(i.pointer(),d0,d0,g,Ub),...d))}return n},"drawUnit"),v0=l((i,e)=>{let t=new sn;if(e.city!==null&&t.add(Fb(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=Ob(i,e.unit,e.city===null?null:{at:[Yc[0],Yc[1],Yc[2]-n],over:g0+qc});s.position.z=n,t.add(s)}return t},"drawMarker");var ns=l(i=>i*Math.PI/180,"degrees"),Bb=ns(25),zb=ns(80),kb=5,Gb=90,Vb=1.12,Ja=ns(40),y0=ns(45),Hb={above:{yaw:0,pitch:ns(80)},classic:{yaw:0,pitch:ns(55)},isometric:{yaw:ns(45),pitch:ns(30)}};var M0=l(i=>({focus:i,...Hb.classic,distance:24}),"defaultOrbit"),pf=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),b0=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),Fs=l(i=>({...i,yaw:b0(i.yaw),pitch:pf(i.pitch,Bb,zb),distance:pf(i.distance,kb,Gb)}),"clampOrbit"),Nr=l((i,e)=>Fs({...i,distance:i.distance/Vb**e}),"zoomed"),Jc=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),$c=l((i,e)=>{let{forward:t}=Jc(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),mf=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=Jc(i),h=$c(i,e),u=[t-h[0],n-h[1],s-h[2]],p=l(x=>(u[0]??0)*x[0]+(u[1]??0)*x[1]+(u[2]??0)*x[2],"dot"),d=p(a),m=Math.tan(Ja/2);return d<=1e-6?null:[p(o)/(d*m*r),p(c)/(d*m)]},"toScreen"),gf=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=Jc(i),c=Math.tan(Ja/2);return{from:$c(i,e),direction:[0,1,2].map(h=>(r[h]??0)+t*c*s*(a[h]??0)+n*c*(o[h]??0))}},"rayThrough"),Dr=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=gf(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),S0=l((i,e,t,n,s)=>{let r=Dr(i,e,t,s),a=Dr(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),h=i.distance*Math.tan(Ja/2),{right:u}=Jc(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*u[0]+c*(p[0]??0))*h,i.focus[1]+(o*u[2]+c*(p[1]??0))*h]}},"panned"),w0=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:b0(i.yaw),focus:[n(s,e.u),e.v===null?pf(r,0,t):n(r,e.v)]}},"settled"),E0=l((i,e,t,n)=>{let s=l((o,c)=>c===null?o:o-c*Math.round(o/c),"short"),r=Math.PI*2,a=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*a,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*a],yaw:i.yaw+s(e.yaw-i.yaw,r)*a,pitch:i.pitch+(e.pitch-i.pitch)*a,distance:i.distance+(e.distance-i.distance)*a}},"between"),Kc=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var Wb=new Ne("#3f8a8c"),Xb=new Ne("#173a52"),qb=new Ne("#e8eeee"),T0=`
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
`,Yb=`
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
`,Os,Cn,_n,xf=class xf{constructor(e,t){se(this,Os);se(this,Cn);se(this,_n);Y(this,Os,e),Y(this,Cn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<v(this,Cn).length;s+=2)v(this,Cn)[s]=Qn.toHalfFloat(0),v(this,Cn)[s+1]=Qn.toHalfFloat(1);Y(this,_n,new br(v(this,Cn),e.columns,e.rows,ni,mn)),v(this,_n).wrapS=Ms,v(this,_n).wrapT=e.wrapsV?Ms:Tn,v(this,_n).magFilter=Ft,v(this,_n).minFilter=Ft,v(this,_n).needsUpdate=!0;let n=new fn({uniforms:Ga.merge([xe.fog,{ground:{value:null},cell:{value:new Be},size:{value:new Be},shallow:{value:Wb.clone()},deep:{value:Xb.clone()},foam:{value:qb.clone()},sky:{value:t.clone()},sunDirection:{value:new z(.5,.7,.4).normalize()},sunColour:{value:new Ne("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:T0,fragmentShader:Yb,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=v(this,_n),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new gt(new Ji(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=v(this,Os),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let h=0;h<c;h++){let u=a+Math.round((e.positions[h*3]??0)/s),p=o+Math.round((e.positions[h*3+2]??0)/r);if(u>=0&&u<t&&p>=0&&p<n){let d=(p*t+u)*2;v(this,Cn)[d]=Qn.toHalfFloat(e.positions[h*3+1]??0),v(this,Cn)[d+1]=Qn.toHalfFloat(e.unseen[h]??0)}}v(this,_n).needsUpdate=!0}height(e,t){return Qn.fromHalfFloat(v(this,Cn)[(t*v(this,Os).columns+e)*2]??0)}unseen(e,t){return Qn.fromHalfFloat(v(this,Cn)[(t*v(this,Os).columns+e)*2+1]??0)>.5}texture(){return v(this,_n)}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),v(this,_n).dispose()}};Os=new WeakMap,Cn=new WeakMap,_n=new WeakMap,l(xf,"Water");var _f=xf,A0=_f,Zb=`
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
`,Jb=.18,vf=class vf{constructor(e,t){let n=new fn({uniforms:Ga.merge([xe.fog,{ground:{value:null},cell:{value:new Be},size:{value:new Be},extent:{value:new Be},wrapsV:{value:!1}}]),vertexShader:T0,fragmentShader:Zb,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new gt(new Ji(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}follow(e,t,n){this.mesh.position.set(e,Jb,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};l(vf,"Clouds");var Qc=vf;var yf=10466244,$b=14082796,Kb=5984576,Qb=16773336,C0=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),R0=2048,P0=Math.hypot(30,40,20),I0=l((i,{period:e,ground:t})=>{let n=new kc({antialias:!0,canvas:i}),s=new _a,r=new jt(Ja*180/Math.PI,1,.1,400),a=new sn,o=new $i({roughness:.92,vertexColors:!0}),c=new Ia(Qb,2.6),h=new Map,u=new Map,p=new sn,d=new Zc,m=new A0(t,new Ne(yf)),x=new Qc(m.texture(),t),S=new ga(yf,30,110),_=[[0,0]],g="0,0",E=[[0,0]],C="0,0";n.outputColorSpace=Nt,n.toneMapping=Da,n.shadowMap.enabled=!0,n.shadowMap.type=Jl,s.background=new Ne(yf),s.fog=S,s.add(new Ca($b,Kb,.9)),s.add(a),s.add(p),s.add(m.mesh),s.add(x.mesh),c.position.set(30,40,20),c.castShadow=!0,c.shadow.mapSize.set(R0,R0),c.shadow.bias=-4e-4,c.shadow.normalBias=.02,s.add(c),s.add(c.target);let T=l((w,f,M=_)=>M.map(([N,P])=>{let D=w.make();return D.position.set(w.at[0]+N,w.at[1],w.at[2]+P),f.add(D),D}),"copiesOf");return{render:l(()=>n.render(s,r),"render"),resize:l((w,f,M)=>{n.setPixelRatio(M),n.setSize(w,f,!1),r.aspect=f>0?w/f:1,r.updateProjectionMatrix()},"resize"),setChunk:l((w,f,M)=>{let N=`${w},${f}`,P=new Ot;P.setAttribute("position",new wt(M.positions,3)),P.setAttribute("normal",new wt(M.normals,3)),P.setAttribute("color",new wt(M.colours,3)),P.setIndex(new wt(M.indices,1)),P.computeBoundingSphere();let D=h.get(N);D!==void 0&&(D.drawn.forEach(B=>a.remove(B)),D.geometry.dispose());let F={geometry:P,at:[M.u,0,M.v],make:l(()=>{let B=new gt(P,o);return B.castShadow=!0,B.receiveShadow=!0,B},"make"),drawn:[]};F.drawn=T(F,a),h.set(N,F),m.setChunk(M)},"setChunk"),setMarker:l((w,f,M)=>{if(u.get(w)?.drawn.forEach(F=>p.remove(F)),u.delete(w),M===null)return;let P=v0(d,M);P.traverse(F=>{F.castShadow=F instanceof gt});let D={at:f,make:l(()=>P.clone(),"make"),drawn:[]};D.drawn=T(D,p,E),u.set(w,D)},"setMarker"),view:l((w,f)=>{let[M,N]=w.focus,[P,D,F]=$c(w,f),{near:B,far:I}=Kc(w.distance);r.position.set(P,D,F),r.lookAt(M,f,N),r.far=I*1.2,r.updateProjectionMatrix(),S.near=B,S.far=I;let k=w.distance*2.2,Z=c.shadow.camera;c.position.set(M+30,f+40,N+20),c.target.position.set(M,f,N),Z.left=-k,Z.right=k,Z.top=k,Z.bottom=-k,Z.near=Math.max(.5,P0-k*1.6),Z.far=P0+k*1.6,Z.updateProjectionMatrix(),m.follow(M,N,I*2.2,c.position.clone().sub(c.target.position)),x.follow(M,N,I*2.2);let H=C0(w.focus,I,e),re=H.join(";"),q=C0(w.focus,Math.min(I,w.distance*2.2),e),te=q.join(";");re!==g&&(_=H,g=re,h.forEach(ie=>{ie.drawn.forEach(Ee=>a.remove(Ee)),ie.drawn=T(ie,a)})),te!==C&&(E=q,C=te,u.forEach(ie=>{ie.drawn.forEach(Ee=>p.remove(Ee)),ie.drawn=T(ie,p,E)}))},"view"),stats:l(()=>({drawCalls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries}),"stats"),dispose:l(()=>{h.forEach(({geometry:w})=>w.dispose()),h.clear(),u.clear(),d.dispose(),m.dispose(),x.dispose(),o.dispose(),n.dispose()},"dispose")}},"createStage");var Ai=1/Math.sqrt(3),L0=1.5*Ai,jb=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),eS=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,Ai+r*L0],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Ai],[a+.5,o-Ai/2],[a+.5,o+Ai/2],[a,o+Ai],[a-.5,o+Ai/2],[a-.5,o-Ai/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-Ai,[c,h]=jb(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(h-(h&1))/2,h]},"tileAt"),period:l(()=>({u:e,v:t?i*L0:null}),"period")}},"hexOddRLayout"),D0=eS;var tS=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),N0=tS;var ri=Math.SQRT2/2,nS=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*ri,(r+1)*ri],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-ri],[a+ri,o],[a,o+ri],[a-ri,o]]},"outline"),tileAt:l((s,r)=>{let a=s/ri,o=r/ri,c=Math.floor((a+o)/2-1+.5),h=Math.floor((o-a)/2+.5),u=c+h;return[Math.floor((c-h)/2),u]},"tileAt"),period:l(()=>({u:e*2*ri,v:t?i*ri:null}),"period")}},"staggeredIsoLayout"),U0=nS;var F0={square:N0,"staggered-iso":U0,"hex-odd-r":D0},iS=l(i=>{if(!Object.prototype.hasOwnProperty.call(F0,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return F0[i.topologyId](i)},"groundLayoutFor"),O0=iS;var jc=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var sS=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),B0=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),is=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(u=>(u%n+n)%n,"wrapU"),c=l(u=>r===null?u:(u%r+r)%r,"wrapV"),h=l((u,p,d,m)=>{let x=Math.floor(sS(u,p,t)*16)*(Math.PI/8);return Math.cos(x)*d+Math.sin(x)*m},"slope");return(u,p)=>{let d=u/s,m=p/a,x=Math.floor(d),S=Math.floor(m),_=d-x,g=m-S,E=B0(_),C=B0(g),T=o(x),R=o(x+1),w=c(S),f=c(S+1),M=h(T,w,_,g)+(h(R,w,_-1,g)-h(T,w,_,g))*E,N=h(T,f,_,g-1)+(h(R,f,_-1,g-1)-h(T,f,_,g-1))*E;return Math.max(-1,Math.min(1,(M+(N-M)*C)*1.4))}},"periodicNoise"),Mf=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var ai={shore:-.03,deep:-.15,reach:3},eh={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},k0={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},z0={Ocean:{relief:{base:ai.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:k0,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},th=l(i=>i==="Unknown"?eh:(Object.prototype.hasOwnProperty.call(z0,i)?z0[i]:void 0)??k0,"terrainEntry");var G0=.65,bf=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Bs=.22,Sf=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),rS=l((i,e,t)=>({u:(Sf(i,e,t,1)*2-1)*Bs,v:(Sf(i,e,t,2)*2-1)*Bs,scale:.75+Sf(i,e,t,3)*.5}),"peakOf"),aS=l(({layout:i,seed:e=1,source:t})=>{let{width:n,height:s,wrapsY:r}=t,a=i.period(),o=Mf([is({cell:.7,period:a,seed:e}),is({cell:.35,period:a,seed:e+1}),is({cell:.17,period:a,seed:e+2})]),c=Mf([is({cell:.45,period:a,seed:e+3}),is({cell:.22,period:a,seed:e+4})]),h=l((w,f)=>1-2*Math.abs(c(w,f)),"ridged"),u=is({cell:.8,period:a,seed:e+5}),p=is({cell:.8,period:a,seed:e+6}),d={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},m=[],x=[],S=l((w,f)=>{let M=(w%n+n)%n;return!r&&(f<0||f>=s)?null:(f%s+s)%s*n+M},"index"),_=l(w=>{let f=new Array(n*s).fill(1/0),M=[];w.forEach((N,P)=>{N&&(f[P]=0,M.push([P%n,Math.floor(P/n)]))});for(let[N,P]of M){let D=f[P*n+N]??1/0;D>=ai.reach||t.neighbours(N,P).forEach(([F,B])=>{let I=B*n+F;(f[I]??1/0)>D+1&&(f[I]=D+1,M.push([F,B]))})}return f},"distancesFromLand"),g=l((w,f)=>{let M=t.terrainAt(w,f);return`${M}${M!=="Unknown"&&t.waterAt(w,f)?" water":""}`},"readAs"),E=l(w=>{if(w!==void 0&&x.length>0&&w.every(([B,I])=>{let k=S(B,I);return k===null||x[k]===g(B,I)}))return[];let f=[],M=[],N=[];for(let B=0;B<s;B++)for(let I=0;I<n;I++){let k=t.terrainAt(I,B);f.push(k),M.push(k!=="Unknown"&&t.waterAt(I,B)),N.push(th(k))}let P=_(f.map((B,I)=>B!=="Unknown"&&!M[I])),D=f.map((B,I)=>`${B}${M[I]?" water":""}`),F=[];return D.forEach((B,I)=>{x[I]!==B&&F.push([I%n,Math.floor(I/n)])}),x=D,m=N.map((B,I)=>{let k=B===eh,Z=I%n,H=Math.floor(I/n),re=rS(Z,H,e);if(!M[I])return{relief:B.relief,colour:bf(B.colour),unknown:k,peak:re};let q=Math.min(P[I]??1/0,ai.reach),te=ai.shore+(ai.deep-ai.shore)*Math.max(0,q-1)/Math.max(1,ai.reach-1);return{relief:{...B.relief,base:te},colour:bf(B.colour),unknown:k,peak:re}}),F},"refresh"),C=l(w=>{let[f,M]=i.centre(0,w),N=Math.max(...i.outline(0,w).map(([D,F])=>Math.hypot(D-f,F-M))),P=[];for(let D=-6;D<=6;D++)for(let F=-4;F<=4;F++){let[B,I]=i.centre(F,w+D);Math.hypot(B-f,I-M)<1.2+N+Bs*Math.SQRT2+1e-9&&P.push([F,D])}return P},"offsetsFor"),T=[C(0),C(1)],R=l((w,f)=>{let[M,N]=i.tileAt(w,f),P=S(M,N),D=P===null?null:m[P]??null;if(D===null||D.unknown)return{height:0,colour:bf(eh.colour),unseen:!0};let F=null,B=null,I=l(Q=>Q==="rolling"?F??=o(w,f):B??=h(w,f),"noiseHere"),k=0,Z=0,H=0,re=0,q=0,te=0,ie=0,Ee=w+Bs*u(w,f),ke=f+Bs*p(w,f);return(T[N&1]??[]).forEach(([Q,ve])=>{let Te=M+Q,Le=N+ve,ye=S(Te,Le);if(ye===null)return;let Ge=m[ye];if(Ge===void 0)return;let[dt,Ue]=i.centre(Te,Le),{relief:Je,colour:tt,peak:qe}=Ge,vt=jc(Math.hypot(w-dt,f-Ue)),_t=Je.shape==="peaked"?jc(Math.hypot(w-dt-qe.u,f-Ue-qe.v)):0,Et=jc(Math.hypot(Ee-dt,ke-Ue))**3;if(vt>0){let at=d[Je.shape],ln=at===null?0:Je.roughness*I(at);Je.shape==="peaked"?Z+=vt*(Je.base*(1-G0)+ln*.5):Z+=vt*(Je.base+ln),k+=vt}if(_t>0){let at=Je.roughness*I("ridged");H+=_t*_t*(Je.base*G0*qe.scale+at*.5)}re+=Et,q+=Et*tt[0],te+=Et*tt[1],ie+=Et*tt[2]}),{height:(k>0?Z/k:0)+H,colour:re>0?[q/re,te/re,ie/re]:D.colour,unseen:!1}},"sample");return E(),{sample:R,height:l((w,f)=>R(w,f).height,"height"),refresh:E}},"createRelief"),V0=aS;var H0=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),h=Math.max(2,Math.round(s/o*n)),u=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:h,stepsV:u,spacingU:s/o/h,spacingV:a/c/u}},"chunkGrid"),W0=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,h=n*r,u=l((w,f)=>[w*a,f*o],"at"),p=s+3,d=new Float64Array(p*(r+3)),m=(s+1)*(r+1),x=new Float32Array(m*3),S=new Float32Array(m);for(let w=-1;w<=r+1;w++)for(let f=-1;f<=s+1;f++){let M=e.sample(...u(c+f,h+w)),{height:N,colour:P}=M;d[(w+1)*p+(f+1)]=N,f>=0&&f<=s&&w>=0&&w<=r&&(x.set(P,(w*(s+1)+f)*3),S[w*(s+1)+f]=M.unseen?1:0)}let _=l((w,f)=>d[(f+1)*p+(w+1)]??0,"height"),g=new Float32Array(m*3),E=new Float32Array(m*3),[C,T]=u(c,h);for(let w=0;w<=r;w++)for(let f=0;f<=s;f++){let M=w*(s+1)+f,[N,P]=u(c+f,h+w),D=(_(f+1,w)-_(f-1,w))/(2*a),F=(_(f,w+1)-_(f,w-1))/(2*o),B=Math.hypot(D,1,F);g[M*3]=N-C,g[M*3+1]=_(f,w),g[M*3+2]=P-T,E[M*3]=-D/B,E[M*3+1]=1/B,E[M*3+2]=-F/B}let R=new Uint32Array(s*r*6);for(let w=0;w<r;w++)for(let f=0;f<s;f++){let M=w*(s+1)+f,N=M+1,P=M+s+1,D=P+1,F=(w*s+f)*6;R.set([M,P,N,N,P,D],F)}return{u:C,v:T,positions:g,normals:E,colours:x,unseen:S,indices:R}},"buildChunk"),X0=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,h])=>{let[u,p]=e.centre(c,h);for(let d=Math.floor((u-n)/s);d<=Math.floor((u+n)/s);d++)for(let m=Math.floor((p-n)/r);m<=Math.floor((p+n)/r);m++){if(!a&&(m<0||m>=i.chunksV))continue;let x=(d%i.chunksU+i.chunksU)%i.chunksU,S=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${x},${S}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var zs,Rn,Xn,$a,Ur,nh,Tf=class Tf{constructor(e){se(this,Ur);se(this,zs);se(this,Rn);se(this,Xn,[]);se(this,$a);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=O0({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),Y(this,zs,V0({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((u,p)=>e.get(u,p).terrain._,"terrainAt"),waterAt:l((u,p)=>e.get(u,p).isWater,"waterAt"),neighbours:l((u,p)=>t.directions().map(d=>t.neighbour(u,p,d)).filter(d=>d!==null),"neighbours")}})),Y(this,Rn,H0(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([u,p])=>Math.hypot(u-a,p-o))),h=Math.max(...t.directions().map(u=>t.offset(u,0,0)).map(([u,p])=>{let[d,m]=this.layout.centre(u,p);return Math.hypot(d-a,m-o)}));Y(this,$a,1.2+c+Bs*Math.SQRT2+(ai.reach-1)*h)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,Rn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return v(this,Rn).chunksV*v(this,Rn).stepsV*v(this,Rn).spacingV}heightAt(e,t){return v(this,zs).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=v(this,Rn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);Y(this,Xn,K(this,Ur,nh).call(this,r,e,t))}changed(e,t,n,s=!1){if(e.length===0&&!s)return;let r=v(this,zs).refresh(s?void 0:e);if(r.length===0)return;let a=X0(v(this,Rn),this.layout,r,v(this,$a)).map(([o,c])=>`${o},${c}`);Y(this,Xn,K(this,Ur,nh).call(this,[...new Set([...v(this,Xn),...a])],t,n))}refocus(e,t){Y(this,Xn,K(this,Ur,nh).call(this,v(this,Xn),e,t))}pending(){return v(this,Xn).length}build(e,t){let n=performance.now();for(;v(this,Xn).length>0;){if(t!==null&&performance.now()-n>=t)return;let[s,r]=v(this,Xn).shift().split(",").map(Number);e.setChunk(s,r,W0(v(this,Rn),v(this,zs),s,r))}}};zs=new WeakMap,Rn=new WeakMap,Xn=new WeakMap,$a=new WeakMap,Ur=new WeakSet,nh=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=v(this,Rn),c=s*a,h=r*o,{u,v:p}=this.layout.period(),d=l((x,S)=>Math.abs(S===null?x:x-S*Math.round(x/S)),"round"),m=l(x=>{let[S,_]=x.split(",").map(Number);return Math.hypot(d((S+.5)*c-t,u),d((_+.5)*h-n,p))},"distance");return[...e].sort((x,S)=>m(x)-m(S))},"#nearestFirst"),l(Tf,"Land");var Ef=Tf,q0=Ef;var oS=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ka=oS;var Y0=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var lS=8,cS=.92,hS=.02,Z0=3,uS=50,dS=8,fS=10,J0=250,Qa,ja,Fr,Or,ks,ss,Af=class Af{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){se(this,Qa);se(this,ja);se(this,Fr);se(this,Or);se(this,ks,!1);se(this,ss);this.pointerId=e,Y(this,Qa,t),Y(this,ja,n),Y(this,Fr,t),Y(this,Or,n),Y(this,ss,[{x:t,y:n,time:s}])}dragging(){return v(this,ks)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!v(this,ks)&&Math.hypot(t-v(this,Qa),n-v(this,ja))<lS)return null;let r=!v(this,ks),a=v(this,Fr)-t,o=v(this,Or)-n;return Y(this,ks,!0),Y(this,Fr,t),Y(this,Or,n),v(this,ss).push({x:t,y:n,time:s}),v(this,ss).length>20&&v(this,ss).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return Y0(v(this,ss),e)}};Qa=new WeakMap,ja=new WeakMap,Fr=new WeakMap,Or=new WeakMap,ks=new WeakMap,ss=new WeakMap,l(Af,"Press");var ih=Af,oi,eo,Cf=class Cf{constructor(e){se(this,oi,null);se(this,eo);Y(this,eo,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>Z0?Z0/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let h=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<hS){Y(this,oi,null);return}v(this,eo).call(this,-s*h,-r*h);let u=Math.pow(cS,h/16);s*=u,r*=u,Y(this,oi,window.requestAnimationFrame(o))},"step");Y(this,oi,window.requestAnimationFrame(o))}gliding(){return v(this,oi)!==null}stop(){v(this,oi)!==null&&(window.cancelAnimationFrame(v(this,oi)),Y(this,oi,null))}};oi=new WeakMap,eo=new WeakMap,l(Cf,"Glide");var sh=Cf,Gs,to,no,Br,Rf=class Rf{constructor(){se(this,Gs,0);se(this,to,0);se(this,no,-1/0);se(this,Br,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=J0)return 0;let r=Math.sign(s),a=e.timeStamp-v(this,no)>J0||r!==v(this,to);if(Y(this,no,e.timeStamp),Y(this,to,r),a&&(Y(this,Gs,0),Y(this,Br,0)),n&&!e.ctrlKey&&v(this,Br)>=fS)return 0;if(!a&&n){if(Y(this,Gs,v(this,Gs)+s),Math.abs(v(this,Gs))<(e.ctrlKey?dS:uS))return 0;Y(this,Gs,0)}return n&&!e.ctrlKey&&Y(this,Br,v(this,Br)+1),s<0?1:-1}};Gs=new WeakMap,to=new WeakMap,no=new WeakMap,Br=new WeakMap,l(Rf,"WheelTurn");var rh=Rf;var pS=350,mS=.006,$0=.004,li,Ht,nn,zr,ci,qn,ch,In,Ln,rs,kr,xn,as,we,Pn,ah,oh,K0,If,Ci,Lf,Q0,Ri,j0,eg,tg,ng,io,ig,sg,rg,lh,Df=class Df{constructor(e,t,n=null){se(this,we);se(this,li);se(this,Ht);se(this,nn,null);se(this,zr,[0,0]);se(this,ci,null);se(this,qn);se(this,ch,new rh);se(this,In,new Map);se(this,Ln,null);se(this,rs,null);se(this,kr,[]);se(this,xn);se(this,as,null);Y(this,li,e),Y(this,Ht,t),Y(this,xn,n),Y(this,qn,new sh((s,r)=>{let[a,o]=K(this,we,K0).call(this);K(this,we,Lf).call(this,[a,o],[a-s,o-r])})),K(this,we,Pn).call(this,"pointerdown",s=>K(this,we,Q0).call(this,s)),K(this,we,Pn).call(this,"pointermove",s=>K(this,we,eg).call(this,s)),K(this,we,Pn).call(this,"pointerup",s=>K(this,we,tg).call(this,s)),K(this,we,Pn).call(this,"pointercancel",s=>K(this,we,ng).call(this,s)),K(this,we,Pn).call(this,"wheel",s=>K(this,we,sg).call(this,s),{passive:!1}),K(this,we,Pn).call(this,"gesturestart",s=>K(this,we,lh).call(this,s,"start"),{passive:!1}),K(this,we,Pn).call(this,"gesturechange",s=>K(this,we,lh).call(this,s,"change"),{passive:!1}),K(this,we,Pn).call(this,"gestureend",s=>K(this,we,lh).call(this,s,"end"),{passive:!1}),K(this,we,Pn).call(this,"contextmenu",s=>K(this,we,j0).call(this,s)),K(this,we,Pn).call(this,"pointerleave",()=>v(this,xn)?.hover(null)),K(this,we,Pn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return v(this,nn)?.dragging()===!0||v(this,ci)!==null}moving(){return this.dragging()||v(this,Ln)!==null||v(this,qn).gliding()}dispose(){v(this,qn).stop(),K(this,we,Ri).call(this),v(this,kr).forEach(([e,t,n])=>v(this,li).removeEventListener(e,t,n)),Y(this,kr,[])}};li=new WeakMap,Ht=new WeakMap,nn=new WeakMap,zr=new WeakMap,ci=new WeakMap,qn=new WeakMap,ch=new WeakMap,In=new WeakMap,Ln=new WeakMap,rs=new WeakMap,kr=new WeakMap,xn=new WeakMap,as=new WeakMap,we=new WeakSet,Pn=l(function(e,t,n){v(this,li).addEventListener(e,t,n),v(this,kr).push([e,t,n])},"#listen"),ah=l(function(){return{width:v(this,li).clientWidth||1,height:v(this,li).clientHeight||1}},"#box"),oh=l(function([e,t]){let{width:n,height:s}=K(this,we,ah).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),K0=l(function(){let{width:e,height:t}=K(this,we,ah).call(this);return[e/2,t/2]},"#middle"),If=l(function(){let{width:e,height:t}=K(this,we,ah).call(this);return e/t},"#aspect"),Ci=l(function(e){let t=v(this,li).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Lf=l(function(e,t){v(this,Ht).setOrbit(S0(v(this,Ht).orbit(),v(this,Ht).lookHeight(),K(this,we,oh).call(this,e),K(this,we,oh).call(this,t),K(this,we,If).call(this)))},"#pan"),Q0=l(function(e){if(v(this,qn).stop(),v(this,xn)?.hover(null),e.pointerType==="touch"&&(v(this,In).set(e.pointerId,K(this,we,Ci).call(this,e)),v(this,In).size===2)){Y(this,nn,null),K(this,we,Ri).call(this),Y(this,Ln,K(this,we,io).call(this));return}if(e.isPrimary&&e.button!==2){if(v(this,li).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),Y(this,ci,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new ih(e),[n,s]=K(this,we,Ci).call(this,e),{clientX:r,clientY:a}=e;Y(this,nn,t),Y(this,zr,[n,s]),K(this,we,Ri).call(this),Y(this,as,window.setTimeout(()=>{Y(this,as,null),v(this,nn)===t&&!t.dragging()&&v(this,xn)?.menu(n,s,r,a,!0)===!0&&Y(this,nn,null)},pS))}}},"#down"),Ri=l(function(){v(this,as)!==null&&(window.clearTimeout(v(this,as)),Y(this,as,null))},"#stopHold"),j0=l(function(e){if(v(this,xn)===null||!v(this,xn).menuOnRightClick()||(e.preventDefault(),v(this,xn).menuOpen()))return;let[t,n]=K(this,we,Ci).call(this,e);v(this,xn).menu(t,n,e.clientX,e.clientY,!1)&&(K(this,we,Ri).call(this),Y(this,nn,null))},"#rightClick"),eg=l(function(e){if(v(this,In).has(e.pointerId)&&(v(this,In).set(e.pointerId,K(this,we,Ci).call(this,e)),v(this,Ln)!==null)){K(this,we,ig).call(this);return}let t=v(this,ci);if(t!==null&&t.pointerId===e.pointerId){let r=v(this,Ht).orbit();v(this,Ht).setOrbit(Fs({...r,yaw:r.yaw-(e.clientX-t.x)*mS,pitch:r.pitch+(e.clientY-t.y)*$0})),t.x=e.clientX,t.y=e.clientY;return}let n=v(this,nn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!v(this,qn).gliding()){let[r,a]=K(this,we,Ci).call(this,e);v(this,xn)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;K(this,we,Ri).call(this);let s=K(this,we,Ci).call(this,e);K(this,we,Lf).call(this,v(this,zr),s),Y(this,zr,s)},"#move"),tg=l(function(e){if(v(this,In).delete(e.pointerId),v(this,Ln)!==null){Y(this,Ln,v(this,In).size<2?null:K(this,we,io).call(this));return}if(v(this,ci)?.pointerId===e.pointerId){Y(this,ci,null);return}let t=v(this,nn);if(!(t===null||t.pointerId!==e.pointerId)){if(Y(this,nn,null),K(this,we,Ri).call(this),!t.dragging()){let[n,s]=K(this,we,Ci).call(this,e);v(this,xn)?.click(n,s,e.clientX,e.clientY);return}Ka()||v(this,qn).start(t.releaseVelocity(e.timeStamp))}},"#up"),ng=l(function(e){v(this,In).delete(e.pointerId),v(this,Ln)!==null&&Y(this,Ln,v(this,In).size<2?null:K(this,we,io).call(this)),v(this,nn)?.pointerId===e.pointerId&&(Y(this,nn,null),K(this,we,Ri).call(this)),v(this,ci)?.pointerId===e.pointerId&&Y(this,ci,null)},"#cancel"),io=l(function(){let[e,t]=[...v(this,In).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:v(this,Ht).orbit()}},"#measurePair"),ig=l(function(){let e=v(this,Ln),t=K(this,we,io).call(this);e===null||t===null||v(this,Ht).setOrbit(Fs({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*$0}))},"#twoFingers"),sg=l(function(e){e.preventDefault();let t=v(this,ch).turned(e,v(this,rs)?.at??null);t!==0&&(v(this,qn).stop(),K(this,we,rg).call(this,t,K(this,we,Ci).call(this,e)))},"#wheelTurned"),rg=l(function(e,t){let n=v(this,Ht).orbit(),s=Nr(n,e),r=Dr(n,v(this,Ht).lookHeight(),K(this,we,oh).call(this,t),K(this,we,If).call(this));if(r===null||s.distance===n.distance){v(this,Ht).setOrbit(s);return}let a=1-s.distance/n.distance;v(this,Ht).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),lh=l(function(e,t){if(e.preventDefault(),v(this,Ln)!==null){Y(this,rs,null);return}if(t==="end"){Y(this,rs,null);return}if(t==="start"){v(this,qn).stop(),Y(this,nn,null),K(this,we,Ri).call(this),Y(this,rs,{orbit:v(this,Ht).orbit(),at:e.timeStamp});return}let n=v(this,rs);n!==null&&(n.at=e.timeStamp,v(this,Ht).setOrbit(Fs({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(Df,"CameraInput");var Pf=Df,ag=Pf;var gS=["#9a9a9a","#4a4a4a"],so=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?gS:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Nf=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),_S=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),xS=l((i,e,t,n={})=>{let s=i.units??[],r=Nf(s,e),a=r!==null&&r.id===e,o=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:so(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,c=r!==null&&(t||a)?{type:r._,kinds:r.__??[],colours:so(r.player),count:s.length,active:a,busy:r.busy!==null&&r.busy!==void 0,fortified:(r.improvements??[]).some(({_:h})=>h==="Fortified"),veteran:(r.improvements??[]).some(({_:h})=>h==="Veteran"),health:_S(r),status:(r.busy?n.unitStatus?.(r):null)||null}:null;return o===null&&c===null?null:{city:o,unit:c}},"markerFor"),og=xS;var vS=1,yS=.04,MS=12,bS=l((i,e,t,n,s,{water:r=0,ceiling:a=vS}={})=>{let{from:o,direction:c}=gf(i,e,t,n),[h,u,p]=o,[d,m,x]=c;if(m>-1e-6)return null;let S=l(f=>[h+d*f,u+m*f,p+x*f],"at"),_=l(f=>{let[M,N,P]=S(f);return N-Math.max(r,s(M,P))},"above"),g=Math.max(0,(u-a)/-m),E=(u-r)/-m,C=yS/Math.max(1e-6,Math.hypot(d,x)),T=g;for(let f=g;;f=Math.min(E,f+C)){if(_(f)<=0){let M=T,N=f;for(let F=0;F<MS;F++){let B=(M+N)/2;_(B)>0?M=B:N=B}let[P,,D]=S(N);return[P,D]}if(f>=E)break;T=f}let[R,,w]=S(E);return[R,w]},"pickGround"),lg=bS;var hh=4,os,ro,Vs,Hs,an,Gr,ls,Pi,ao,oo,lo,Yn,uh,cg,Ff,Of=class Of{constructor(e,t,n,s,r){se(this,Yn);se(this,os);se(this,ro);se(this,Vs);se(this,Hs);se(this,an);se(this,Gr);se(this,ls);se(this,Pi);se(this,ao);se(this,oo);se(this,lo,l(e=>{let t=v(this,os).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;v(this,oo).call(this,n*v(this,an),s*v(this,Gr))},"#click"));Y(this,os,e),Y(this,Vs,t),Y(this,Hs,n),Y(this,an,t.period().u),Y(this,Gr,s),Y(this,oo,r),Y(this,Pi,document.createElement("canvas"));let{v:a}=t.period();Y(this,ls,a),Y(this,ao,[[0,0],[-v(this,an),0],...a===null?[]:[[0,-a],[-v(this,an),-a]]]);let o=Math.max(1,Math.round(v(this,an)*hh)),c=Math.max(1,Math.round(v(this,Gr)*hh));[e,v(this,Pi)].forEach(h=>{h.width=o,h.height=c}),Y(this,ro,e.getContext("2d")),e.addEventListener("click",v(this,lo))}dispose(){v(this,os).removeEventListener("click",v(this,lo))}redraw(){let e=v(this,Pi).getContext("2d");if(e===null)return;let t=v(this,Hs).width(),n=v(this,Hs).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,v(this,Pi).width,v(this,Pi).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=v(this,Hs).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=th(c).colour,v(this,ao).forEach(([p,d])=>{K(this,Yn,cg).call(this,e,a,r,p,d),e.fill()});let[h,u]=v(this,Vs).centre(a,r);if(o.city)s.push([h,u,so(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=Nf(o.units,null);p!==null&&s.push([h,u,so(p.player)[0],1.4])}}s.forEach(([r,a,o,c])=>K(this,Yn,Ff).call(this,r,a).forEach(([h,u])=>{e.fillStyle="#000000",e.fillRect(h-c-.5,u-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(h-c,u-c,c*2,c*2)}))}show(e,t){let n=v(this,ro);if(n===null)return;if(n.clearRect(0,0,v(this,os).width,v(this,os).height),n.drawImage(v(this,Pi),0,0),t!==null){let[u,p]=v(this,Vs).centre(t.x,t.y);n.fillStyle="#ffffff",K(this,Yn,Ff).call(this,u,p).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=v(this,ls),r=Math.min(...e.map(([u])=>u)),a=Math.min(...e.map(([,u])=>u)),o=-v(this,an)*Math.floor(r/v(this,an)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(u=>[-v(this,an),0,v(this,an)].forEach(p=>{n.beginPath(),e.forEach(([d,m],x)=>{let[S,_]=K(this,Yn,uh).call(this,d+o+p,m+c+u);x===0?n.moveTo(S,_):n.lineTo(S,_)}),n.closePath(),n.stroke()}))}};os=new WeakMap,ro=new WeakMap,Vs=new WeakMap,Hs=new WeakMap,an=new WeakMap,Gr=new WeakMap,ls=new WeakMap,Pi=new WeakMap,ao=new WeakMap,oo=new WeakMap,lo=new WeakMap,Yn=new WeakSet,uh=l(function(e,t){return[e*hh,t*hh]},"#px"),cg=l(function(e,t,n,s=0,r=0){e.beginPath(),v(this,Vs).outline(t,n).forEach(([a,o],c)=>{let[h,u]=K(this,Yn,uh).call(this,a+s,o+r);c===0?e.moveTo(h,u):e.lineTo(h,u)}),e.closePath()},"#outline"),Ff=l(function(e,t){return(v(this,ls)===null?[0]:[-v(this,ls),0,v(this,ls)]).flatMap(s=>[-v(this,an),0,v(this,an)].map(r=>K(this,Yn,uh).call(this,e+r,t+s)))},"#everywhere"),l(Of,"Minimap3D");var Uf=Of,hg=Uf;var SS=10,wS=350,ES=500,TS=.25,AS=400,Rt,po,mo,ct,Nn,Xs,go,_o,it,Mt,on,Vr,xo,qs,cs,Hr,vo,yo,vn,Mo,bo,hi,hs,So,yn,Wr,Xr,us,Ii,qr,ds,Ys,Yr,Li,wo,Di,Zr,Jr,Eo,$r,To,Kr,Qr,Ao,ce,ug,co,dg,fg,pg,zf,dh,mg,gg,ho,Ws,uo,_g,xg,kf,fo,fh,Gf,vg,yg,Vf,Dn,Mg,bg,Hf,Wf=class Wf{constructor(e,t=I0){se(this,ce);se(this,Rt);se(this,po);se(this,mo,[]);se(this,ct);se(this,Nn);se(this,Xs,null);se(this,go,0);se(this,_o,"");se(this,it);se(this,Mt,null);se(this,on,null);se(this,Vr);se(this,xo);se(this,qs);se(this,cs,null);se(this,Hr,null);se(this,vo);se(this,yo,!1);se(this,vn);se(this,Mo);se(this,bo);se(this,hi,null);se(this,hs,null);se(this,So);se(this,yn,l(()=>{let e=v(this,hs);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),Y(this,hs,null),document.removeEventListener("keydown",v(this,yn),!0),e.open&&v(this,vn).endTooltip(v(this,Rt)))},"#endHover"));se(this,Wr,null);se(this,Xr,!0);se(this,us,new Map);se(this,Ii,null);se(this,qr,new Map);se(this,ds,new Map);se(this,Ys,[]);se(this,Yr,0);se(this,Li,null);se(this,wo,null);se(this,Di,!0);se(this,Zr,!1);se(this,Jr,!1);se(this,Eo);se(this,$r);se(this,To,"");se(this,Kr,l(()=>K(this,ce,Hf).call(this),"#resizeHandler"));se(this,Qr,null);se(this,Ao,!1);Y(this,Rt,e.mapCanvas),Y(this,po,e.coveredBy),Y(this,Eo,e.art),Y(this,Mo,{cityName:e.cityName,unitStatus:e.unitStatus}),Y(this,$r,e.art.id()),this.world=e.world,Y(this,ct,new q0(e.world)),Y(this,Ys,e.world.tiles()),Y(this,Yr,v(this,Ys).length),Y(this,xo,e.cameraDistance),Y(this,vo,e.lockVerticalEdges);let n=e.cameraDistance.get();Y(this,it,K(this,ce,ho).call(this,{...M0(v(this,ct).layout.centre(0,0)),...n===null?{}:{distance:n}})),Y(this,qs,v(this,it).distance),this.portal=new ap(e,{centre:l(()=>K(this,ce,mg).call(this),"centre"),centreOn:l((s,r)=>K(this,ce,gg).call(this,s,r),"centreOn"),changed:l(()=>K(this,ce,Dn).call(this),"changed"),visible:l((s,r,a)=>K(this,ce,ug).call(this,s,r,a),"visible")}),Y(this,Nn,t(e.mapCanvas,{period:v(this,ct).layout.period(),ground:v(this,ct).ground()})),e.minimapCanvas!==null&&Y(this,Wr,new hg(e.minimapCanvas,v(this,ct).layout,e.world,v(this,ct).extentV(),(s,r)=>K(this,ce,uo).call(this,{...v(this,Mt)?.to??v(this,it),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(Y(this,Xs,K(this,ce,Mg).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),v(this,ct).queueAll(...K(this,ce,dh).call(this)),K(this,ce,fh).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),Y(this,vn,e.squares),Y(this,So,e.playerId),Y(this,bo,e.transport),Y(this,Vr,new ag(e.mapCanvas,{orbit:l(()=>v(this,it),"orbit"),lookHeight:l(()=>v(this,on)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>K(this,ce,dg).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>K(this,ce,fg).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>v(this,vn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>v(this,vn).menuOpen(),"menuOpen"),hover:l(s=>K(this,ce,pg).call(this,s),"hover")})),window.addEventListener("resize",v(this,Kr)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(Y(this,Qr,new ResizeObserver(v(this,Kr))),v(this,Qr).observe(e.mapCanvas.parentElement)),K(this,ce,Hf).call(this),K(this,ce,Dn).call(this)}land(){return v(this,ct)}orbit(){return v(this,it)}moving(){return v(this,Mt)!==null||v(this,Vr).moving()}setOrbit(e){v(this,yn).call(this),Y(this,Mt,null),Y(this,it,K(this,ce,ho).call(this,e)),K(this,ce,Dn).call(this)}activeUnit(){return{unit:v(this,Li),pendingTile:v(this,wo)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=v(this,Mt)?.to??v(this,it);K(this,ce,uo).call(this,{...t,yaw:t.yaw+e*y0})}faceNorth(){K(this,ce,uo).call(this,{...v(this,Mt)?.to??v(this,it),yaw:0})}debugViewModes(){return[]}dispose(){K(this,ce,Vf).call(this,!0),Y(this,Ao,!0),v(this,yn).call(this),v(this,Vr).dispose(),v(this,Wr)?.dispose(),window.removeEventListener("resize",v(this,Kr)),v(this,Qr)?.disconnect(),v(this,Ii)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(v(this,Ii)),Y(this,Ii,null),v(this,Xs)?.remove(),v(this,Nn).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=v(this,hi);e!==null&&(Y(this,hi,null),v(this,Rt).classList.remove("picking-tile"),e.window?.close())}flush(){K(this,ce,kf).call(this),K(this,ce,Dn).call(this)}mapEvent(e){}measureCovered(){let e=v(this,Rt).getBoundingClientRect();Y(this,mo,v(this,po).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};Y(this,hi,s),v(this,Rt).classList.add("picking-tile"),s.window=v(this,vn).prompt(n,()=>{v(this,hi)===s&&(Y(this,hi,null),v(this,Rt).classList.remove("picking-tile"))})}picking(){return v(this,hi)!==null}queueTile(e){v(this,qr).set(`${e.x},${e.y}`,e)}redrawArt(){let e=v(this,Eo).id();return e===v(this,$r)?"unchanged":(Y(this,$r,e),"redrawn")}releaseTiles(){v(this,qr).forEach((e,t)=>v(this,ds).set(t,e)),v(this,qr).clear(),v(this,ds).size>0&&K(this,ce,Dn).call(this)}setActiveUnit(e,t){let n=v(this,Li)?.tile;Y(this,Li,e),Y(this,wo,t??null),[n,e?.tile].forEach(s=>{s&&K(this,ce,fo).call(this,s.x,s.y)}),K(this,ce,Dn).call(this)}setWaiting(e){Y(this,Jr,e),e&&v(this,yn).call(this)}showActiveUnit(e){v(this,Di)||(Y(this,Di,!0),K(this,ce,fh).call(this),K(this,ce,Dn).call(this))}shown(){return{units:v(this,Di),yields:v(this,Zr),waiting:v(this,Jr)}}tilesPending(){return v(this,ds).size}toggleUnits(){Y(this,Di,!v(this,Di)),K(this,ce,fh).call(this),K(this,ce,Dn).call(this)}toggleYields(){Y(this,Zr,!v(this,Zr))}zoomBy(e){v(this,yn).call(this),Y(this,it,Nr(v(this,it),e)),v(this,Mt)!==null&&(v(this,Mt).from=Nr(v(this,Mt).from,e),v(this,Mt).to=Nr(v(this,Mt).to,e)),K(this,ce,Dn).call(this)}};Rt=new WeakMap,po=new WeakMap,mo=new WeakMap,ct=new WeakMap,Nn=new WeakMap,Xs=new WeakMap,go=new WeakMap,_o=new WeakMap,it=new WeakMap,Mt=new WeakMap,on=new WeakMap,Vr=new WeakMap,xo=new WeakMap,qs=new WeakMap,cs=new WeakMap,Hr=new WeakMap,vo=new WeakMap,yo=new WeakMap,vn=new WeakMap,Mo=new WeakMap,bo=new WeakMap,hi=new WeakMap,hs=new WeakMap,So=new WeakMap,yn=new WeakMap,Wr=new WeakMap,Xr=new WeakMap,us=new WeakMap,Ii=new WeakMap,qr=new WeakMap,ds=new WeakMap,Ys=new WeakMap,Yr=new WeakMap,Li=new WeakMap,wo=new WeakMap,Di=new WeakMap,Zr=new WeakMap,Jr=new WeakMap,Eo=new WeakMap,$r=new WeakMap,To=new WeakMap,Kr=new WeakMap,Qr=new WeakMap,Ao=new WeakMap,ce=new WeakSet,ug=l(function(e,t,n){let s=v(this,Rt).clientWidth,r=v(this,Rt).clientHeight;if(s<=0||r<=0)return!1;let a=v(this,Mt)?.to??v(this,it),[o,c]=v(this,ct).layout.centre(e,t),{u:h,v:u}=K(this,ce,Ws).call(this),[p,d]=a.focus,m=l((f,M,N)=>N===null?f:f+N*Math.round((M-f)/N),"nearest"),x=[m(o,p,h),Math.max(0,v(this,ct).heightAt(o,c)),m(c,d,u)],S=s/r,_=v(this,on)??0,g=mf(a,_,x,S),E=mf(a,_,[x[0]+Math.cos(a.yaw),x[1],x[2]+Math.sin(a.yaw)],S);if(g===null||E===null)return!1;let C=(g[0]+1)/2*s,T=(1-g[1])/2*r,R=Math.abs(E[0]-g[0])*(s/2),w=(n+.5)*R;return C>=w&&C<=s-w&&T>=w&&T<=r-w&&!v(this,mo).some(({left:f,top:M,right:N,bottom:P})=>C>=f-R/2&&C<=N+R/2&&T>=M-R/2&&T<=P+R/2)},"#visible"),co=l(function(e,t){let n=v(this,Rt).clientWidth,s=v(this,Rt).clientHeight;if(n<=0||s<=0)return null;let r=lg(v(this,it),v(this,on)??0,[e/n*2-1,1-t/s*2],n/s,(p,d)=>v(this,ct).heightAt(p,d));if(r===null)return null;let[a,o]=v(this,ct).layout.tileAt(...r),c=this.world.width(),h=this.world.height();return!(K(this,ce,Ws).call(this).v!==null)&&(o<0||o>=h)?null:this.world.get((a%c+c)%c,(o%h+h)%h)},"#tileAt"),dg=l(function(e,t){let n=K(this,ce,co).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=v(this,hi);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&v(this,vn).click(this.portal,n)},"#clicked"),fg=l(function(e,t,n,s,r){let a=v(this,Li),o=K(this,ce,co).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),v(this,vn).menu(this.portal,n,s,a,o,v(this,bo),r),!0)},"#menu"),pg=l(function(e){let t=e===null||v(this,Jr)||v(this,vn).menuOpen()?null:K(this,ce,co).call(this,e.x,e.y),n=v(this,hs);if(t===null||e===null){v(this,yn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}v(this,yn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,K(this,ce,zf).call(this,r)},AS),Y(this,hs,r),document.addEventListener("keydown",v(this,yn),!0)},"#hovered"),zf=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===v(this,Rt),n=t?K(this,ce,co).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){v(this,yn).call(this);return}let s=v(this,vn).tooltip(v(this,Rt),n,v(this,So),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&v(this,vn).endTooltip(v(this,Rt)),e.open=s},"#showHover"),dh=l(function(){return[...v(this,it).focus]},"#focus"),mg=l(function(){let[e,t]=v(this,ct).layout.tileAt(...v(this,it).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:K(this,ce,Ws).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),gg=l(function(e,t){let[n,s]=v(this,ct).layout.centre(e,t),[r,a]=(v(this,Mt)?.to??v(this,it)).focus;if(n===r&&s===a)return;let o={...v(this,Mt)?.to??v(this,it),focus:[n,s]},{u:c,v:h}=K(this,ce,Ws).call(this),u=l((x,S)=>S===null?x:x-S*Math.round(x/S),"short"),[p,d]=v(this,it).focus,m=Math.hypot(u(n-p,c),u(s-d,h));if(!v(this,yo)||m>v(this,it).distance*1.5){Y(this,yo,!0),this.setOrbit(o);return}K(this,ce,uo).call(this,o)},"#centreOn"),ho=l(function(e){return w0(Fs(e),K(this,ce,Ws).call(this),v(this,ct).extentV())},"#settle"),Ws=l(function(){let e=v(this,ct).layout.period();return this.portal?.lockVerticalEdges()??v(this,vo)?{u:e.u,v:null}:e},"#period"),uo=l(function(e){v(this,yn).call(this),typeof requestAnimationFrame!="function"||Ka()?(Y(this,Mt,null),Y(this,it,K(this,ce,ho).call(this,e))):Y(this,Mt,{from:v(this,it),to:e,started:null}),K(this,ce,Dn).call(this)},"#moveTo"),_g=l(function(e){let t=v(this,Mt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/wS);return Y(this,it,K(this,ce,ho).call(this,E0(t.from,t.to,n,K(this,ce,Ws).call(this)))),n>=1&&Y(this,Mt,null),n<1},"#moveCamera"),xg=l(function(e){let[t,n]=v(this,it).focus,s=Math.max(0,v(this,ct).heightAt(t,n));return!e||v(this,on)===null||Ka()?(Y(this,on,s),!1):(Y(this,on,v(this,on)+(s-v(this,on))*TS),Math.abs(s-v(this,on))<.002?(Y(this,on,s),!1):!0)},"#followHeight"),kf=l(function(){let e=[...v(this,ds).values()].map(({x:r,y:a})=>[r,a]),t=this.world.tiles(),n=t!==v(this,Ys)||t.length!==v(this,Yr);Y(this,Ys,t),Y(this,Yr,t.length),v(this,ds).clear(),v(this,ct).changed(e,...K(this,ce,dh).call(this),n),e.forEach(([r,a])=>K(this,ce,fo).call(this,r,a));let s=v(this,hs);s!==null&&s.open&&e.some(([r,a])=>r===s.x&&a===s.y)&&K(this,ce,zf).call(this,s),(e.length>0||n)&&Y(this,Xr,!0),n&&v(this,us).forEach((r,a)=>{let[o,c]=a.split(",").map(Number);K(this,ce,fo).call(this,o,c)})},"#takeTiles"),fo=l(function(e,t){let n=`${e},${t}`,s=og(this.world.get(e,t),v(this,Li)?.id??null,v(this,Di),v(this,Mo)),[r,a]=v(this,ct).layout.centre(e,t),o=[r,Math.max(0,v(this,ct).heightAt(r,a)),a],c=s===null?null:JSON.stringify([s,o]);c!==(v(this,us).get(n)??null)&&(v(this,Nn).setMarker(n,o,s),c===null?v(this,us).delete(n):v(this,us).set(n,c))},"#mark"),fh=l(function(){let e=new Set(v(this,us).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);K(this,ce,fo).call(this,n,s)})},"#markAll"),Gf=l(function(e){let t=performance.now(),n=K(this,ce,_g).call(this,t),[s,r]=K(this,ce,dh).call(this);K(this,ce,kf).call(this),`${s},${r}`!==v(this,_o)&&(Y(this,_o,`${s},${r}`),v(this,ct).refocus(s,r)),v(this,ct).build(v(this,Nn),e);let a=K(this,ce,xg).call(this,e!==null);v(this,Nn).view(v(this,it),v(this,on)??0),v(this,Nn).render(),K(this,ce,vg).call(this),K(this,ce,Vf).call(this),Y(this,go,performance.now()-t),K(this,ce,bg).call(this),(v(this,ct).pending()>0||n||a)&&K(this,ce,Dn).call(this)},"#frameDrawn"),vg=l(function(){let e=v(this,Wr);if(e===null)return;v(this,Xr)&&(Y(this,Xr,!1),e.redraw());let t=v(this,Li)?.tile??null;e.show(K(this,ce,yg).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),yg=l(function(){let e=v(this,Rt).clientWidth,t=v(this,Rt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=v(this,on)??0,r=Kc(v(this,it).distance).far,[a,o]=v(this,it).focus,c=l((u,p)=>{for(let d=p;d>=-1;d-=.05){let m=Dr(v(this,it),s,[u,d],n);if(m!==null){let x=Math.hypot(m[0]-a,m[1]-o),S=x>r?r/x:1;return[a+(m[0]-a)*S,o+(m[1]-o)*S]}}return null},"corner"),h=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return h.every(u=>u!==null)?h:null},"#patch"),Vf=l(function(e=!1){let t=(e?v(this,Mt)?.to??v(this,it):v(this,it)).distance,n=l(()=>{v(this,cs)!==null&&clearTimeout(v(this,cs)),Y(this,cs,null),Y(this,Hr,null)},"stop"),s=l(()=>{n(),Y(this,qs,t),v(this,xo).set(t)},"keep");if(e){n(),t!==v(this,qs)&&s();return}if(v(this,Mt)!==null||t===v(this,qs)){n();return}v(this,cs)!==null&&t===v(this,Hr)||(n(),Y(this,Hr,t),Y(this,cs,setTimeout(s,ES)))},"#keepDistance"),Dn=l(function(){if(!v(this,Ao)){if(typeof requestAnimationFrame!="function"){K(this,ce,Gf).call(this,null);return}v(this,Ii)===null&&Y(this,Ii,requestAnimationFrame(()=>{Y(this,Ii,null),K(this,ce,Gf).call(this,SS)}))}},"#draw"),Mg=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),bg=l(function(){if(v(this,Xs)===null)return;let{drawCalls:e,triangles:t,geometries:n}=v(this,Nn).stats();v(this,Xs).textContent=[`frame ${v(this,go).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${v(this,ct).pending()}`].join(`
`)},"#showStats"),Hf=l(function(){let e=v(this,Rt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===v(this,To)||(Y(this,To,r),v(this,Nn).resize(t,n,s),this.measureCovered(),v(this,Nn).render())},"#resize"),l(Wf,"MapView3D");var Bf=Wf,Sg=Bf;var CS={createMapView3D:l(i=>new Sg(i),"createMapView3D")};globalThis[ip]=CS;})();
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
